const query = `{
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

export { query };
