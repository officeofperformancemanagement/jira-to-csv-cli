# jira-to-csv-cli

## basic usage
```bash
npx jira-to-csv-cli \
    --domain=https://example.atlassian.net \
    --project=ABC \
    --api-token=SDF712t36e5rdFRy12efdsaf \
    --user-email=user@example.com \
    --output=$PWD/issues.csv
```

## advanced usage
```bash
npx jira-to-csv-cli \
    --domain=https://example.atlassian.net \
    --jql="..." \
    --api-token=SDF712t36e5rdFRy12efdsaf \
    --user-email=user@example.com \
    --output=$PWD/issues.csv \
    --max-description-length=100 \
    --optimize-memory \
    --skip-empty-columns \
    --expand-time-in-status \
    --debug-level=10 \
    --wait=50 \
```