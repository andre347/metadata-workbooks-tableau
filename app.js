#! /usr/bin/env node

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const questions = require("./helper/questions-keys");
const open = require("open");

import { authTableau, fetchPublishDataSources } from "./helper/tableau.js";
import { text } from "./helper/text";

function fileName(name) {
  const lowercase = name.toLowerCase();
  return path.join(process.cwd(), `./workbook/data/${lowercase}.json`);
}

function switchWorkbooks(type) {
  let value;
  switch (type) {
    case "basicDataSourceList":
      value = "basicdatasource.twb";
      break;
    case "generalDataSourceInfo":
      value = "generalDataSourceInfo.twb";
      break;
    case "dataSourceFieldsCalculations":
      value = "dataSourceFieldsCalculations.twb";
      break;
    case "downstreamFromDatabaseserver":
      value = "downstreamFromDatabaseserver.twb";
      break;
    case "downstreamFromDatasource":
      value = "downstreamFromDatasource.twb";
      break;
    case "upstreamFromDatasource":
      value = "upstreamfromdatasource.twb";
      break;
  }
  return value;
}

console.log(text);

inquirer.prompt(questions).then(answers => {
  authTableau(answers).then(authToken =>
    fetchPublishDataSources(authToken, answers).then(values => {
      const writeFileName = fileName(answers.type);
      fs.writeFileSync(writeFileName, JSON.stringify(values));
      console.log(`Done! JSON file created, opening ${switchWorkbooks(answers.type)}`);
      (async () => {
        await open(`./workbook/${switchWorkbooks(answers.type)}`);
        console.log("The workbook opened");
      })();
      process.exit(0);
    })
  );
});
