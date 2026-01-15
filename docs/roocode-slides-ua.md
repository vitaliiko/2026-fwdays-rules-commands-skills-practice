# Slidev guidance — Ukrainian slides

Purpose: ensure all Slidev content is in Ukrainian and provide reusable snippets to simplify slide creation.

## Rules
- All visible slide text must be Ukrainian. Presenter notes may include English only if explicitly tagged `note:en`.
- Use `docs/templates/slide-frontmatter.md` for consistent frontmatter including `title`, `theme`, `duration`.
- Use `Toc`, `PoweredBySlidev` and `Counter` components from `slidev/components/` rather than repeating similar markup.

## Suggested Slidev snippets (reusable)
- Use `src: ./pages/imported-slides.md` to split decks and keep files small.
- Use `{monaco}` blocks only for runnable TypeScript examples; annotate with Ukrainian comments.

## Example Ukrainian slide snippet
```md
---
title: Ласкаво просимо
theme: seriph
---

# Ласкаво просимо

Ця презентація підготовлена українською мовою.
```

## Translation workflow
- `language-detect` detector flags non-ukrainian lines and returns suggestions.
- Suggested fix uses `docs/templates/translation-note.md` which includes localized suggestions and optional auto-apply via `localize-suggest` skill.

## Accessibility
- Prefer clear headings, avoid dense code-only slides
- Add `alt` attributes for images in Ukrainian

## Presentation voice
- Slides should use formal Ukrainian suitable for technical audience
- Avoid anglicisms where suitable Ukrainian equivalents exist
