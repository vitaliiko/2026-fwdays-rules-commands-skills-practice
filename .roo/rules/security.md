# Security & Privacy (STRICT)

## 🚫 ZERO TOLERANCE: Secrets in Version Control
- **NEVER** commit credentials, API keys, tokens, or passwords.
- **NEVER** commit private links (e.g., internal Jira tickets, private Google Docs, Slack join links) unless explicitly authorized for public release.
- **NEVER** hardcode secrets in source code, markdown files, or configuration files.

## ✅ Best Practices
- **Use Environment Variables**: Store sensitive values in `.env` files.
- **Use `.gitignore`**: Ensure all `.env` files and secret-containing config are ignored.
- **Review Before Commit**: Double-check diffs for accidental inclusion of sensitive data.
