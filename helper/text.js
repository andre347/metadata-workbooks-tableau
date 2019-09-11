const text = `****************************************************************************

Tableau Server Datasource Analyser

****************************************************************************

v0.1 by Team TILceratops
(Andre, Manuela, Sasha and JMAC at The Information Lab)

****************************************************************************

Email Ben Lower (bklower@tableau.com) for support, we don't wanna know!

****************************************************************************

Ever wondered which published workbooks use which published datasources on your Tableau Server? Or how about which fields are being referenced in subsequent calculations?

This utility has the answers! Using Tableau's new Metadata API, this tool will:
-- Authenticate to your Tableau Server (using the standard REST API auth flow)
-- Select which Tableau Server site to get data from
-- Choose what type of datasource analysis you want (see below)

The tool will then collect the data in a JSON output file and open a pre-built Tableau workbook which will allow you to perform further analysis.

****************************************************************************

Types of analysis:
-- Basic datasource list: Get a list of datasources as well as their name, owner, project, if they have an extract or not, and the last refresh time
-- General datasource info: As above but includes some basic upstream and downstream information
-- Datasource fields and calculations: Analyse datasources, their fields and any calculations that reference other fields
-- Downstream database server analysis: Analyse which database servers, databases and tables are being used in your Tableau published datasources
-- Downstream datasource analysis: Analyse which workbooks and sheets use which published datasources
-- Upstream datasource analysis: Analyse which published datasources are connected to which tables and databases

****************************************************************************

Answer the questions below and this utility will generate a Tableau workbook for each type of analysis

You can re-run the utility at any time to refresh the data in the workbooks

Press ^C at any time to quit.

****************************************************************************
`;

export { text };
