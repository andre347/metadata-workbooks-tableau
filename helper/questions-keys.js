module.exports = questions = [
  {
    type: "text",
    name: "server",
    message: "What is the url of your Tableau Server?",
    default: "https://beta.theinformationlab.co.uk"
  },
  {
    type: "text",
    name: "site",
    message: "What is the site name?",
    default: ""
  },
  {
    type: "text",
    name: "username",
    message: "What is your username?",
    default: ""
  },
  {
    type: "password",
    name: "password",
    mask: true,
    message: "What is your password?",
    default: ""
  },
  {
    type: "list",
    name: "type",
    message: "What content do you want to look at?",
    choices: [
      {
        name: "Basic Data Source List",
        value: "basicDataSourceList"
      },
      {
        name: "General Data Soure Info",
        value: "generalDataSourceInfo"
      },
      {
        name: "Data Sources Fields & Calculations",
        value: "dataSourceFieldsCalculations"
      },
      {
        name: "Downstream from Databaseserver",
        value: "downstreamFromDatabaseserver"
      },
      {
        name: "Downstream from Datasource",
        value: "downstreamFromDatasource"
      },
      {
        name: "Upstream from Datasource",
        value: "upstreamFromDatasource"
      }
    ]
  }
];
