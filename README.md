# Tableau Server Datasource Analyser

**Authors**: Jonathan MacDonald, Sasha Hanna, Manuela Marolla & Andre de Vries

**Company**: The Information Lab UK

**Version**: v0.1

Ever wondered which published workbooks use which published datasources on your Tableau Server? Or how about which fields are being referenced in subsequent calculations?

This utility has the answers! Using Tableau's new Metadata API, this tool will:

- Authenticate to your Tableau Server (using the standard REST API auth flow)
- Select which Tableau Server site to get data from
- Choose what type of datasource analysis you want (see below)

The tool will then collect the data in a JSON output file and open a pre-built Tableau workbook which will allow you to perform further analysis.

---

Types of analysis:

- Basic datasource list: Get a list of datasources as well as their name, owner, project, if they have an extract or not, and the last refresh time
- General datasource info: As above but includes some basic upstream and downstream information
- Datasource fields and calculations: Analyse datasources, their fields and any calculations that reference other fields
- Downstream database server analysis: Analyse which database servers, databases and tables are being used in your Tableau published datasources
- Downstream datasource analysis: Analyse which workbooks and sheets use which published datasources
- Upstream datasource analysis: Analyse which published datasources are connected to which tables and databases

## How to use:

0. Download & install NodeJS from https://nodejs.org/en/
1. Download or Clone this repo
1. cd into the folder
1.

```
npm install
```

4.

```
npm run start
```

5. After your run the command of step 4 you walk through a set of questions. These allow you to automatically connect to the Metadata API, generate JSON files based on your selections, and output workbooks. In these workbooks you can analyse several metadata related questions.
