# Rule: Inputs

- **Prompt**: Text describing the image to generate (must be clear, concise, and relevant to the slide's content).
- **Slug**: A unique, descriptive image name used in the file path and reference. The `{slug}` placeholder in `slidev/public/generated/{slug}.png` must be replaced with your chosen image name.

  ## Slug Format Instructions
  - Use only lowercase letters, numbers, dashes (`-`), or underscores (`_`).
  - No spaces or special characters.
  - Must be meaningful and identify the slide or concept (e.g., `welcome-slide`, `agent-architecture`, `robot-icon`).
  - Example path: `slidev/public/generated/welcome-slide.png`.

  ## Slide Reference
  - Reference the image in the slide using Markdown:
    ```md
    ![Опис зображення українською](/generated/welcome-slide.png)
    ```
  - Replace `{slug}` with the actual image name.
  - Alt text must be descriptive and in Ukrainian.

- **Size**: One of `256x256`, `512x512`, `1024x1024` (default: `1024x1024`).
- **Confirmation**: Explicit user approval before generating any image.

## Example
```bash
node scripts/generate-image.mjs "A minimalistic flat illustration of a developer working with an AI assistant" slidev/public/generated/welcome-slide.png 1024x1024
```
