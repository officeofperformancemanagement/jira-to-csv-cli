if (require.main === module) {
  const fs = require("node:fs");
  const util = require("node:util");

  const jiraToCsv = require("jira-to-csv");

  const { values } = util.parseArgs({
    options: {
      "api-token": {
        type: "string"
      },
      domain: {
        type: "string"
      },
      "debug-level": {
        type: "string"
      },
      "expand-time-in-status": {
        type: "boolean"
      },
      jql: {
        type: "string"
      },
      "max-description-length": {
        type: "string"
      },
      "max-issues": {
        type: "string"
      },
      "optimize-memory": {
        type: "boolean"
      },
      output: {
        type: "string"
      },
      project: {
        type: "string"
      },
      "skip-empty-columns": {
        type: "boolean"
      },
      "user-email": {
        type: "string"
      },
      wait: {
        type: "string"
      }
    }
  });

  const domain = values.domain;
  const jql = values.jql;
  const project = values.project;
  const api_token = values["api-token"];
  const user_email = values["user-email"];
  const debug_level = Number(values["debug-level"] || 0);
  const expand_time_in_status = Boolean(values["expand-time-in-status"] || false);
  const max_description_length = Number(values["max-description-length"] || Infinity);
  const max_issues = Number(values["max-issues"] || Infinity);
  const output = values.output;
  const optimize_memory = Boolean(values["optimize-memory"] || false);
  const skipEmptyColumns = values["skip-empty-columns"] || false;
  const wait = Number(values.wait || 0);

  if (output === undefined || output === "") {
    throw new Error("[jira-to-csv-cli] missing output");
  }

  if (domain === undefined) {
    throw Error("[jira-to-csv-cli] missing domain");
  }

  if (project === undefined && jql === undefined) {
    throw Error("[jira-to-csv-cli] missing project and jql");
  }

  const options = {
    domain,
    project,
    api_token,
    user_email,
    debug_level,
    expand_time_in_status,
    max_issues,
    max_description_length,
    optimize_memory,
    jql,
    skipEmptyColumns,
    wait
  };

  setTimeout(async () => {
    const result = await jiraToCsv.export_issues(options);
    fs.writeFileSync(output, result.csv);
  }, 0);
}
