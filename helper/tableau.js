import fetch from "node-fetch";
import { query } from "./graphql/query";

// this is for authentication

const authTableau = async data => {
  const { server, site, username, password } = data;
  const url = `${server}/api/3.5/auth/signin`;
  const body = {
    credentials: {
      name: username,
      password: password,
      site: {
        contentUrl: site
      }
    }
  };
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(body)
  });
  const json = await resp.json();
  return json.credentials.token;
};

// this gets some publishes data sources info

const fetchPublishDataSources = async (authToken, answers) => {
  const fetchURL = `${answers.server}/relationship-service-war/graphql`;
  const info = await fetch(fetchURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Tableau-Auth": authToken
    },
    body: JSON.stringify({
      query: query
    })
  });
  const responseData = await info.json();
  return responseData;
};

export { authTableau, fetchPublishDataSources };
