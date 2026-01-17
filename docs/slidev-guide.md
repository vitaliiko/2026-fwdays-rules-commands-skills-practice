
## 🧠 Slidev: Core Concepts

### 📦 What Slidev Is

* Slidev = **Markdown-driven presentation tool** built on Vue + Vite, tailored for developers. ([sli.dev][1])
* Slides are written in a **Markdown file** (default: `slides.md`). ([sli.dev][2])
* You run, build, or export slides via **CLI commands** (`slidev`, `slidev build`, `slidev export`). ([sli.dev][1])

---

## 🛠 Basic Workflow

### 🔹 Starting a Project

1. **Initialize a Slidev project** (locally):

   ```bash
   pnpm create slidev
   ```

   or

   ```bash
   npm init slidev@latest
   ```

   Choose package manager and wait for scaffold. ([sli.dev][1])

2. **Start dev server**:

   ```bash
   npm run dev     # usually same as `slidev` from CLI
   ```

   You’ll get a live preview at e.g., `http://localhost:3030/`. ([sli.dev][1])

3. The **main slide file** is `slides.md` by default. ([sli.dev][2])

---

## 🎤 Building Presentations in Markdown

### 🧱 Slides and Content

* **Slide Separator**: `---` creates a new slide.

  ```md
  # Title Slide

  ---

  # Second Slide
  More content…
  ```

  ([sli.dev][2])

* **Frontmatter / Headmatter**: YAML at top configures global settings or per slide settings:

  ```md
  ---
  theme: seriph
  title: My Deck
  ---
  ```

  You can set background, layout, classes, etc. ([sli.dev][2])

---

## ✨ Effects, Transitions, and Animation

### 🌀 Slide Transitions

* You can specify **transitions** globally or per slide via frontmatter:

  ```yaml
  transition: fade-out
  ```

  (supported values depend on theme and Slidev version) ([webdong.dev][3])

### 🎯 Click-Based Animations

Slidev treats *clicks* as atomic animation steps (reveals, hides, etc.). ([sli.dev][4])

#### `v-click` (element reveal)

```md
<v-click>Hello shows on first click</v-click>
```

or with directive:

```html
<div v-click class="text-xl">Hello!</div>
```

([sli.dev][4])

#### `v-after` (show with previous click)

```html
<div v-click>First</div>
<div v-after>Second</div>
```

Both show at once on next click. ([sli.dev][4])

#### Hide After Click

Use `.hide` to **hide on next click**:

```html
<div v-click.hide>Gone after click</div>
```

([sli.dev][4])

#### `v-clicks` (multiple items, automatic reveals)

Great for lists:

```md
<v-clicks>
- Item 1
- Item 2
- Item 3
</v-clicks>
```

Each next click reveals the next item. ([sli.dev][4])

---

## 👨‍💻 Code Examples and Highlighting

### 📦 Code Blocks

Use standard fenced code blocks with a language:

````md
```ts
console.log('Hello from Slidev!')
```
````

Shiki syntax highlighting is built in. ([sli.dev][2])

### 📐 Line Highlighting, Groups, Monaco

Slidev supports advanced code features:

* **Line highlight**
* **Monaco editor integration**
* **TwoSlash**
* **Code imports**
  These are enabled via syntax flags in code blocks and config. ([sli.dev][2])

---

## 📝 Speaker Notes

Add presenter notes using **HTML comments at the end of a slide**:

```md
# Slide Title
Content here.

<!-- This comment becomes a note -->
```

Notes appear in Presenter Mode but not in the audience view. ([sli.dev][2])

---

## 🖼 Adding Assets (Images, Videos, etc.)

### 🖼 Images

Place images relative to your project and reference them normally:

```md
![Alt text](./assets/image.png)
```

or via slide config:

```yaml
---
image: ./assets/bg.jpg
layout: image-right
---
```

(Frontmatter may vary by theme). ([sli.dev][2])

### 📹 Embedded Content

You can include HTML/Vue components inside Markdown slides for:

* videos
* live embeds
* clickable elements
  Slidev treats Markdown as Vue under the hood, so standard HTML/Vue syntax works. ([sli.dev][2])

---

## 🚀 CLI & Outputs

### 📦 Build for Deployment

```bash
slidev build
```

Outputs a static SPA (e.g., in `dist/`). ([sli.dev][5])

### 📤 Export

Export to PDF, PPTX, or PNG:

```bash
slidev export
```

This pulls slides together in formats suitable for sharing. ([sli.dev][1])

---

## 🧰 Useful Tips

* **Use VS Code extension** for syntax support and slide preview. ([sli.dev][1])
* **Organize slides** with frontmatter and layouts (`center`, `cover`, `image-right`, etc.). ([sli.dev][2])
* **Animate lists and code** to pace your presentation delivery. ([sli.dev][4])
