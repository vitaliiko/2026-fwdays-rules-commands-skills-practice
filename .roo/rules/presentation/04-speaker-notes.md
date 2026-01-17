## Instruction: Adding Notes to Slides in Slidev

### Purpose

Add **presenter notes** to Slidev slides so they appear in the presenter UI and do **not** affect slide rendering.

---

### How Notes Work in Slidev

* Slidev treats **HTML comment blocks at the very end of a slide** as presenter notes.
* Notes are **not visible on the slide**.
* Notes are rendered in the **presenter interface**.
* Notes support **basic Markdown and HTML**.

---

### Rules (STRICT)

1. Notes **MUST be placed at the end of the slide**, after all visible content.
2. Notes **MUST be inside HTML comments**:

   * `<!-- note -->` or
   * `<!--\n multi-line note \n-->`
3. Any HTML comment **not at the end of the slide is NOT a note**.
4. Each slide may have **zero or one note block**.
5. Notes must not contain Slidev syntax (`---`, layouts, directives).

---

### Valid Note Placement

```md
---
# Slide Title

- Bullet 1
- Bullet 2

<!--
Speaker notes go here.
Use Markdown if needed.
Links and references belong here.
-->
```

---

### Invalid Note Placement (DO NOT DO THIS)

```md
<!-- This will NOT be treated as a note -->

# Slide Title

Content
```

```md
# Slide Title

<!-- This is NOT a note -->

Content

<!-- This is also NOT a note because it is not last -->
```

---

### Content Guidelines for Notes

* Use notes for:

  * explanations
  * speaker prompts
  * references and links
  * context not suitable for slides
* Keep slide content concise; move details into notes.
* Follow the project language policy:

  * notes must match slide language rules (e.g. Ukrainian-first if required).

---

### Agent Behavior Requirements

When generating or modifying slides:

1. Always check whether the slide needs speaker notes.
2. If notes are added:

   * append them **after all slide content**,
   * wrap them in a single HTML comment block.
3. Never place links directly on slides if they can live in notes.
4. Do not convert notes into visible content.

---

### Validation Checklist

Before finishing:

* [ ] Notes are at the end of the slide
* [ ] Notes are inside HTML comments
* [ ] No visible content appears after the note
* [ ] Notes do not break Slidev parsing

---

If you want, I can next:

* merge this into your **new-slide skill**
* add it as a **lint rule for slide review**
* or write a **“notes fixer” micro-skill** that automatically relocates invalid notes
