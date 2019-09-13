const text = `
Tableau Server Datasource Analyser

****************************************************************************

v0.1 by Team TILceratops
(Andre, Manuela, Sasha and JMAC at The Information Lab)

****************************************************************************

Email Andre de Vries (andre.devries@theinformationlab.co.uk) for support & feature requests, but only if you ask nice!

****************************************************************************

Ever wondered which published workbooks use which published datasources on your Tableau Server? Or how about which fields are being referenced in subsequent calculations?

This utility has the answers! Using Tableau's new Metadata API, this tool will:
-- Authenticate to your Tableau Server (using the standard REST API auth flow)
-- Select which Tableau Server site to get data from
-- Choose what type of datasource analysis you want

The tool will then collect the data in a JSON output file and open a pre-built Tableau workbook which will allow you to perform further analysis.

****************************************************************************

For more information see:
'https://github.com/andre347/metadata-workbooks-tableau'

****************************************************************************

Answer the questions below and this utility will generate a Tableau workbook for each type of analysis

You can re-run the utility at any time to refresh the data in the workbooks

Press ^C at any time to quit.
`;

export { text };
