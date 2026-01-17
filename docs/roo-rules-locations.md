Instruction File Locations
You can provide custom instructions using global rules (applied across all projects), workspace rules (project-specific), or through the Prompts tab interface.

Global Rules Directory: Apply to all projects automatically.

Linux/macOS: ~/.roo/rules/ and ~/.roo/rules-{modeSlug}/
Windows: %USERPROFILE%\.roo\rules\ and %USERPROFILE%\.roo\rules-{modeSlug}\
Workspace Rules: Apply only to the current project and take precedence over global rules when they conflict.

Preferred Method: Directory (.roo/rules/)
.
├── .roo/
│   └── rules/          # Workspace-wide rules
│       ├── 01-general.md
│       └── 02-coding-style.txt
└── ... (other project files)

Fallback Method: Single File (.roorules)
.
├── .roorules           # Workspace-wide rules (single file)
└── ... (other project files)

Mode-Specific Instructions: Apply only to a specific mode (e.g., code).

Preferred Method: Directory (.roo/rules-{modeSlug}/)
.
├── .roo/
│   └── rules-code/     # Rules for "code" mode
│       ├── 01-js-style.md
│       └── 02-ts-style.md
└── ... (other project files)

Fallback Method: Single File (.roorules-{modeSlug})
.
├── .roorules-code      # Rules for "code" mode (single file)
└── ... (other project files)

Rules are loaded in order: Global rules first, then workspace rules. If there's a conflict, workspace rules take precedence. See Global Rules Directory for details.