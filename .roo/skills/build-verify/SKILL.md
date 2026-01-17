---
name: build-verify
description: Run the project build, localize build errors, apply minimal fixes, and re-run until the build is green.
---

# Build Verify Instructions

When the user requests build verification or after changes are applied:

1. Run the configured build command (default: `npm run build`).
2. Observe and capture the full build output (stdout and stderr).
3. If the build fails:
   - localize the error precisely (error type → file → line / component / slide),
   - identify the root cause based on the output.
4. Apply the **smallest possible fix** that resolves the error.
5. Re-run the build command.
6. Repeat the fix → re-run cycle until the build succeeds.
7. Stop immediately once the build is successful and report the result.

The task is considered complete **only** when the build finishes successfully.

---

## Safety Rules

- Do not modify files unrelated to the detected error.
- Do not perform refactors beyond what is required to fix the build.
- Do not suppress, ignore, or bypass build errors or build-breaking warnings.
- If the error cause cannot be confidently determined, stop and report instead of guessing.

---

## Output Expectations

- Always report the final build status:
  - **SUCCESS** → explicitly state that the build is green.
  - **FAILED** → report the error location and what was attempted.
- When fixes are applied, they must be minimal, targeted, and directly tied to the error.

---

## Definition of Done (DoD)

- The build command completes without errors.
- No build-breaking warnings remain.
- Final state is explicitly confirmed as: **build is green**.

---

## Common Issues

- Missing dependencies: Verify installation and correct versions.
- Syntax or configuration errors: Fix only the reported location.
- Asset or path issues: Correct broken references without restructuring.
- Environment-specific failures: Report clearly if they cannot be resolved safely.
