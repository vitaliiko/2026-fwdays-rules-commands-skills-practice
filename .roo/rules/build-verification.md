# Build Verification (MANDATORY)

## 🛑 STRICT REQUIREMENT: Build After Update
After **every single update** to the code, configuration, or slide content, you **MUST** execute the build command to verify integrity.

## The Command
```bash
npm run build
```

## Workflow
1. **Make Changes**: Apply edits to files.
2. **Run Build**: Immediately execute `npm run build`. Do not ask confirmation for this command
3. **Verify Success**:
   - **✅ Success**: Proceed to the next task or await user feedback.
   - **❌ Failure**: STOP. You utilize the error logs to diagnose and **FIX** the issue immediately.
4. **No Bypassing**: You strictly **cannot** mark a task as complete or move to the next step until the build passes successfully.
