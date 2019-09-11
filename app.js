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
      value = "./workbook/data/basicdatasourcelist.json";
      break;
    case "generalDataSourceInfo":
      value = "./workbook/generalDataSourceInfo.twb";
      break;
    case "dataSourceFieldsCalculations":
      value = "./workbook/dataSourceFieldsCalculations.twb";
      break;
    case "downstreamFromDatabaseserver":
      value = "./workbook/downstreamFromDatabaseserver.twb";
      break;
    case "downstreamFromDatasource":
      value = "./workbook/downstreamFromDatasource.twb";
      break;
    case "upstreamFromDatasource":
      value = "./workbook/upstreamfromdatasource.twb";
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
        await open(switchWorkbooks(answers.type));
        console.log("The workbook opened");
      })();
      process.exit(0);
    })
  );
});
