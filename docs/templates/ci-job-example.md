# CI job example: Run Roocode lint

Add this to `.github/workflows/roocode.yml` to run rules on PRs:

```yaml
name: Roocode Lint
on: [pull_request]
jobs:
  roocode-lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install Roocode
        run: npm install -g roocode
      - name: Run Roocode lint
        run: roocode lint --rules .roo/rules
```
