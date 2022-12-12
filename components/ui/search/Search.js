import React from "react";
import { useState } from "react";
import axios from "axios";

const Search = ({ query, querySent, onSearch }) => {
  console.log("query: ", query);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [fact, setFact] = useState({
    items: [],
    isLoaded: false,
  });

  const handleChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);

    //console.log("value is:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.queryField.value);
    onSearch({ query: event.target.queryField.value, querySent: querySent });
    newCatFact();
    //ebayResponse();
    samplePostRequest;
  };

  const newCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((json) => {
        setFact({
          items: json,
          isLoaded: true,
        });
        console.log(json.fact);
      });
  };

  const clientCredentials =
    "PhilippB-Fiindii-SBX-df2241f4a-e35c32c6:SBX-f2241f4a8c44-5844-41c8-b1fa-ab89";
  const base64ClientCredentials = "Basic " + window.btoa(clientCredentials);

  console.log(base64ClientCredentials);

  const EbayAuthToken = require("ebay-oauth-nodejs-client");

  const ebayAuthToken = new EbayAuthToken({
    clientId: "PhilippB-Fiindii-SBX-df2241f4a-e35c32c6",
    clientSecret: "SBX-f2241f4a8c44-5844-41c8-b1fa-ab89",
    redirectUri: "Philipp_Bogatyr-PhilippB-Fiindi-mfillnuq",
  });

  (async () => {
    const token = await ebayAuthToken.getApplicationToken("PRODUCTION");
    console.log("TOKENTOKENTOKEN");
    console.log(token);
  })();

  const getToken = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: base64ClientCredentials,
      },
      body: JSON.stringify({
        grant_type: "client_credentials",
        scope: "https://api.ebay.com/oauth/api_scope",
      }),
    };
    fetch(
      "https://api.sandbox.ebay.com/identity/v1/oauth2/token",
      requestOptions
    )
      .then((res) => {
        console.log("GET TOKEN:");
        console.log(res);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const ebayResponse = () => {
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
    };
    fetch(
      "https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=PhilippB-Fiindii-SBX-df2241f4a-e35c32c6&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&keywords=iphone&paginationInput.entriesPerPage=100",
      requestOptions
    ).then((res) => {
      console.log(res);
    });
  };

  /*const axiosEbayResponse = () => {
    axios
      .post(
        "https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=PhilippB-Fiindii-SBX-df2241f4a-e35c32c6&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&keywords=iphone&paginationInput.entriesPerPage=100"
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };*/

  /*const ebayResponse = () => {
    console.log("IN EBAY RESPONSE");
    const requestOptions = {
      method: "POST",
      headers: {
        "X-EBAY-SOA-SECURITY-APPNAME":
          "PhilippB-Fiindii-SBX-df2241f4a-e35c32c6",
        "X-EBAY-SOA-OPERATION-NAME": "findItemsByKeywords",
      },
      //body: JSON.stringify({ title: 'React POST Request Example' })
    };

    fetch("./ebay.xml", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log("IN FETCH BODY");
        console.log(json);
      });
  };*/

  /*const ebayXMLResponse = () => {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      console.log("IN EVENT LISTENER IN EVENT LISTENER");
      console.log(xhr.responseText);
    });

    xhr.open(
      "POST",
      "https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=PhilippB-Fiindii-SBX-df2241f4a-e35c32c6&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&keywords=iphone&paginationInput.entriesPerPage=100"
    );

    xhr.send();
  };*/

  return (
    <div className="topnav">
      <h1>query: {query}</h1>
      <h1>searchQuery: {searchQuery}</h1>
      <h1>cat fact: {fact.items.fact}</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="queryField"
          type="text"
          placeholder="Search.."
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Search;
