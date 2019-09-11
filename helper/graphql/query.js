const basicDataSourceList = `{
  publishedDatasourcesConnection(first: 75, offset: 0) {
    totalCount
    nodes {
      projectName
      name
      owner {
        username
      }
      extractLastRefreshTime
      hasExtracts
    }
  }
}`;

const generalDataSourceInfo = `
 {
  publishedDatasourcesConnection(first: 10, offset: 0) {
    pageInfo {
      endCursor
    }
    totalCount
    nodes {
      projectName
      name
      owner {
        id
      }
      extractLastRefreshTime
      hasExtracts
      upstreamDatasources {
        id
        name
      }
      upstreamDatabases {
        id
        name
      }
      upstreamTables {
        id
        name
      }
      downstreamWorkbooks {
        projectName
        name
      }
    }
  }
}`;

const dataSourceFieldsCalculations = `{
  datasourcesConnection {
    totalCount
    nodes {
      id
      name
      fieldsConnection {
        totalCount
        nodes {
          name
          isHidden
          folderName
          referencedByCalculations {
            name
            formula
          }
        }
      }
    }
  }
}`;

const downstreamFromDatabaseserver = `
 {
  databaseServersConnection {
    totalCount
    nodes {
      connectionType
      hostName
      port
      name
      downstreamTables {
        name
        downstreamDatasources {
          luid
          name
          owner {
            username
          }
        }
      }
    }
  }
}`;

const downstreamFromDatasource = `{
  datasourcesConnection {
    totalCount
    nodes {
      name
      downstreamWorkbooks {
        name
        sheets {
            name
          datasourceFields {
            name
            referencedByCalculations {
              name
            }
          }
          worksheetFields
          {
            name
            referencedByCalculations {
              name
            }
          }
          }
          name
        }
      }
    }
  }`;

const upstreamFromDatasource = ` {
  publishedDatasourcesConnection(first: 75, offset: 0) {
    totalCount
    nodes {
      projectName
      name
      owner {
        username
      }
      extractLastRefreshTime
      hasExtracts
      upstreamTables {
        id
        name
        upstreamDatabases {
          connectionType
          id
          name
        }
      }
    }
  }
}`;

export {
  basicDataSourceList,
  generalDataSourceInfo,
  dataSourceFieldsCalculations,
  downstreamFromDatabaseserver,
  downstreamFromDatasource,
  upstreamFromDatasource
};
