# RooCode Rules for this project

## Overview
This document specifies a Roocode rule set tailored to the current project. Goals:
- Provide reusable rules and detectors, avoid duplication
- Cover style, security, architecture, reuse, and slides-language
- Enforce that presentation slides (Slidev) are authored in Ukrainian

## Detected tech stack (from repo)
- Slidev for presentations (Slidev v52.x)
- Vue 3
- NPM scripts: build, dev, export

## Rule taxonomy
1. Style rules
   - MD formatting: consistent frontmatter, headings, and mermaid usage
   - Vue component usage in slides: prefer provided components in `slidev/components/`
2. Security rules
   - Do not expose secrets: detect `.env`, `.git-ignored` secrets in files and in edits
   - Block outbound call patterns to unknown hosts in agent skills
3. Architecture rules
   - Keep slide code and components separated: reuse `slidev/components/` for interactive parts
   - Enforce modular slides: prefer imports via `src:` for larger decks
4. Reuse rules
   - Shared templates: require use of `docs/templates/` snippets instead of copy/paste
   - Detector: flag duplicated code blocks across `slidev/` files
5. Slides-language rule
   - All slide content must be Ukrainian. Detect English strings in markdown content and flag them. Provide auto-suggestion to translate.

## Rule format (suggested .roorules structure)
- rules:
  - id: style/md-frontmatter
    level: warning
    description: "Ensure frontmatter exists and contains title, theme, and duration when applicable"
    match: "files: slidev/**/*.md"
    detector: "frontmatter-check"
    fix: "insert standard frontmatter from docs/templates/slide-frontmatter.md"

- id: security/no-secrets
  level: error
  description: "Prevent secrets from being committed or printed to logs"
  match: "**/*"
  detector: "secret-regex"
  options:
    patterns:
      - "AWS_ACCESS_KEY"
      - "PRIVATE_KEY"

- id: slides/language-ua
  level: error
  description: "Slides must be Ukrainian"
  match: "slidev/**/*.md"
  detector: "language-detect"
  options:
    lang: uk
    threshold: 0.8
  fix: "suggest translation via localize-suggest skill"

## Reuse-first guidance
- All fix templates must reference files in `docs/templates/` via template id rather than embedding full content.
- Detectors that propose fixes should return a `templateRef` pointing to `docs/templates/<name>.md`.

## Integration notes
- Ship `.roorules` file at repo root and keep versioned in Git
- Integrate rule checks into CI: run `roocode lint --rules .roorules` on PRs
- Use `preview_before_apply` pattern for automatic fixes

## Slides (Ukrainian) enforcement examples
- Detector `language-detect` will highlight English sentences and add suggestions using `localize-suggest` skill.
- Example rule response: "Detected English sentence: 'Welcome to Slidev' -> suggestion: 'Ласкаво просимо в Slidev'"

## Next steps
- Add mapping document linking detectors to implementation and templates in `docs/roocode-mapping.md`
- Add examples in `docs/roocode-examples.md`
- Add Slidev-specific guidance in `docs/roocode-slides-ua.md`
