# Rule: Security & API Key Handling

- **API Key Storage**: The OpenAI API key (`OPENAI_API_KEY`) must be set in the environment or in a `.env` file at the project root. Never commit API keys or secrets to version control.
- **.env File**: Ensure `.env` is listed in `.gitignore` to prevent accidental commits.
- **Troubleshooting API Errors**:
  - If image generation fails, check that `OPENAI_API_KEY` is present and valid.
  - Ensure network connectivity to OpenAI servers.
  - Review error messages from the script for details.
  - If the error persists, regenerate the API key or contact OpenAI support.
- **Security Best Practices**:
  - Do not hardcode secrets in scripts, markdown, or configuration files.
  - Never share API keys in slides, documentation, or public repositories.
  - Remove or rotate compromised keys immediately.
