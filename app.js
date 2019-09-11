#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const questions = require("./helper/questions");
const open = require("open");

import { authTableau, fetchPublishDataSources } from "./helper/tableau.js";

const jsonPath = path.join(process.cwd(), "./workbook/output.json");

// const config = fs.existsSync(jsonPath);

console.log(`This utility will walk you through generating a set of audit workbooks for your published data sources. After answering a set number of questions you will find .twb files which give you more information about data lineage.

You can re-run the utility at any time to refresh the data in the workbooks

Press ^C at any time to quit.
`);

inquirer.prompt(questions).then(answers => {
  authTableau(answers).then(authToken =>
    fetchPublishDataSources(authToken, answers).then(values => {
      fs.writeFileSync(jsonPath, JSON.stringify(values));
      console.log(`Done! workbooks created`);
      (async () => {
        // Opens the image in the default image viewer and waits for the opened app to quit
        await open("./workbook/Basic-Datasource-Audit.twb");
        console.log("The workbook opened");
      })();
      process.exit(0);
    })
  );
});
