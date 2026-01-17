# Slidev Development Guidelines

## Core Structure
- **File**: Write slides in `slides.md` using Markdown.
- **Separator**: Use `---` to separate slides.
- **Frontmatter**: Configure slide settings (theme, layout, background) with YAML at the top of the slide.

## Animations (v-click)
- **Reveal**: Use `<v-click>` or `v-click` directive to reveal elements on click.
- **Lists**: Wrap lists in `<v-clicks>` for sequential item revealing.
- **Sequence**: Use `v-after` to show an element immediately after the previous one.
- **Hide**: Use `.hide` modifier (e.g., `v-click.hide`) to hide elements on the next click.

## Speaker Notes
- **Syntax**: Add notes via HTML comments `<!-- ... -->` at the end of a slide.
- **View**: Notes are visible only in Presenter Mode.

## Assets & Structure
- **Images**: Use relative paths e.g., `![Alt](./assets/image.png)`.
- **Backgrounds**: Set in frontmatter: `image: ./assets/bg.jpg`.
- **Logic**: Use standard HTML or Vue components for complex interactions.

### Assets Handling
- You may use static assets (images, videos) in your slides. Slidev (Vite-based) allows direct imports in markdown using relative paths:
  - `![alt](./image.png)`
  - `<img src="./image.png" />`
- These will be resolved to `/BASE_URL/assets/image.png` after build.
- **Do NOT** use relative paths for assets in frontmatter or component props (e.g., `background: ./image.png` or `<Comp src="./image.png" />`)—these will break after build.
- To use assets in frontmatter or component props, place them in the `public/` folder and use an absolute path:
  - `background: /image.png`
  - `<Comp src="/image.png" />`
- See [Slidev Assets Guide](https://sli.dev/guide/asset.html) for details.

## Code & Transitions
- **Code**: Use fenced code blocks with language tags (e.g., `ts`, `html`) for Shiki highlighting.
- **Transitions**: Define `transition: name` in frontmatter (globally or per slide).
