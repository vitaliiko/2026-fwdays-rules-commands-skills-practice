# .roorules example and guidance

This file documents the recommended `.roorules` configuration and how it maps to the repository. Place the final `.roorules` at the repository root and keep it versioned in Git.

## Purpose
- Enforce Slidev Ukrainian content rule
- Prevent accidental secrets in the repo
- Encourage reuse by referencing templates in `docs/templates/`
- Integrate Roocode checks into CI using `roocode lint --rules .roorules`

## Example `.roorules` (YAML)
```yaml
rules:
  - id: style/md-frontmatter
    level: warning
    description: Ensure frontmatter present in Slidev markdown
    files: ["slidev/**/*.md"]
    detector: frontmatter-check
    fixTemplate: docs/templates/slide-frontmatter.md

  - id: security/no-secrets
    level: error
    description: Detect secrets via regex
    files: ["**/*"]
    detector: secret-regex
    options:
      patterns:
        - AWS_ACCESS_KEY
        - PRIVATE_KEY

  - id: slides/language-ua
    level: error
    description: Enforce Ukrainian for slide content
    files: ["slidev/**/*.md"]
    detector: language-detect
    options:
      lang: uk
      threshold: 0.8
    fixTemplate: docs/templates/translation-note.md

  - id: reuse/duplicate-block
    level: warning
    description: Flag duplicated blocks and suggest shared component
    files: ["slidev/**/*.md", "slidev/components/**/*.vue"]
    detector: duplicated-block-detector
    fixTemplate: docs/templates/shared-snippet.md
```

## How detectors should behave
- Detectors must avoid inlining fixes. They should return `templateRef` values referencing files under `docs/templates/`.
- Detectors use existing repository search (`search_files`, `read_file`) and call language-detect or secret-regex skills rather than custom ad-hoc scanning.
- For automatic fixes, require `preview_before_apply` and user confirmation in CI.

## CI integration
- Add a job in your pipeline that runs:

```bash
roocode lint --rules .roorules
```

- For auto-fix: run `roocode apply --preview --rules .roorules` and require manual approval before committing.

## Notes
- Slides must be Ukrainian (see rule `slides/language-ua`). Presenter notes may contain English only if explicitly marked `note:en`.
- Keep templates small and reusable. Prefer referencing `docs/templates/*` instead of embedding content in rules.
