# Roocode mapping

This document maps rule detectors to implementation patterns and existing project locations. Goal: enable reuse of detectors and fix templates.

## Detectors -> target locations

- frontmatter-check
  - targets: `slidev/slides.md`, `slidev/pages/*.md`
  - fix template: `docs/templates/slide-frontmatter.md`

- secret-regex
  - targets: all files, with special emphasis on `slidev/`, `slidev-src/`, `.env`-like files
  - reuse: use central `docs/templates/secret-ignore.md` for recommended .gitignore entries

- language-detect
  - targets: markdown content under `slidev/**/*.md` and `docs/**/*.md`
  - reuse: use `docs/templates/translation-note.md` for suggested translations

- duplicated-block-detector
  - targets: `slidev/**/*.md`, `slidev/components/**/*.vue`
  - reuse: reference `docs/templates/shared-snippet.md`

## Shared template refs
- `slide-frontmatter.md` -> standard frontmatter used for new slides
- `translation-note.md` -> suggestion template for Ukrainian translation
- `secret-ignore.md` -> recommended .gitignore sections
- `shared-snippet.md` -> guidance on converting duplicated blocks into shared component

## Implementation notes
- Detectors should call `read_file` and `search_files` skills rather than re-scanning raw file system logic
- Fixes must return `templateRef` keys and not inlined content. The CI job applying fixes should `read_file` the referenced template and apply patch.

## Where to place rules
- `.roorules` at repo root (for versioning)
- `docs/templates/` for all templates and snippets
- `docs/roocode-examples.md` for examples of detector outputs
