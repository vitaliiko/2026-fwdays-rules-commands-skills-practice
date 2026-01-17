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

## Code & Transitions
- **Code**: Use fenced code blocks with language tags (e.g., `ts`, `html`) for Shiki highlighting.
- **Transitions**: Define `transition: name` in frontmatter (globally or per slide).