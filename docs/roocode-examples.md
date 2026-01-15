# Roocode rule examples

This file contains concrete examples of rule triggers and expected detector/fix outputs. All examples reference templates in `docs/templates/`.

## Example 1: frontmatter missing
- file: `slidev/pages/imported-slides.md`
- detector: frontmatter-check -> reports missing `title` key
- suggested fix: templateRef: `docs/templates/slide-frontmatter.md`

## Example 2: detected English sentence in slide
- file: `slidev/slides.md`
- snippet: "Welcome to Slidev"
- detector: language-detect(lang: uk) -> confidence: 0.92
- output: flagged line, suggestion: `Ласкаво просимо в Slidev` (from `docs/templates/translation-note.md`)

## Example 3: duplicate code block across slides
- detector: duplicated-block-detector -> reports similar code block in `slidev/slides.md` and `slidev/pages/imported-slides.md`
- suggestion: move to `slidev/components/SharedSnippet.vue` and replace with component import
- fix template: `docs/templates/shared-snippet.md`

## Example 4: secret pattern found
- file: `slidev/.env.example`
- detector: secret-regex -> matched `PRIVATE_KEY`
- output: error; suggested action: remove secret, add to `.gitignore` using `docs/templates/secret-ignore.md`
