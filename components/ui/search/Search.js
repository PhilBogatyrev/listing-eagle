import React from "react";
import { useState } from "react";
import axios from "axios";
import nodeRSA from "node-rsa";

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
    //walmartSearch();
    getToken();
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

  const wrongKey =
    "-----BEGIN PRIVATE KEY-----AAABvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvBTvvOaSjaGCoxOUcjQG4xqWDnt/mq/2IV8m1cmaaCwUJQLrsOXK7Q46JziP4o9IWpzV9S1NAJPzaLOR6JsnyDNa8lWNDQDd6kL9m+6Qzn4bc6/FFAUYB6BFQi1HbguIGMfJOdqnR5tFYNoZzd5Fx2YSqWwF0LgoW1fH3e5Oe9ZVelzouDPTzF0ewRIRKaVe2nG2hwqqG0XWDnYt65TvQRFPwFtE38GhJgVrjokFL89cFE9ZfyMh5KYV6myEUFz5gQpqigVhG9z6mQl6pIeoACW17bIAOpQQRyX/bNLkQoQPo+Z7YQ/kHKwSTMBLj6BBB7IaaB3UIyCZMPA1bZw0dAgMBAAECggEBAJwJEpII1htJJ0PPpmN54xsVHuLldcB1fadcfNxjjc2wHWFOcFfCL+N8K0v4mGFHzDmeATYfPa1mTHdGpruwcUJ258thdAm06sE+4yWxG4dapiW3xHY82GlCuI0SaHxHh7L2PIxvhp84JVN76Qpwgx75SimG0Rj/IseRHhQB/G4uEuoU98ia0dsCQzD9iOB1kxwpDXdgMWLZNnceV4m1s0b9Rt4axnfvjTdVv9DIyipHsAuPqbSlX66zEeBPAsdYgiN10TdO0IaCfnalAdZ8M+GLUn6HbuCxA3jK2fQypd8eo1ZdLAIP2O08OzB+33gnQ33Ib4YgsqyZEHB+K+S5PwECgYEA17U30WpCYCX1NzzUevA7KmGXzv3RgZAANy1io5ReH2ZdF1NcfCFcahzf4PBcMZEEuVLO0FJReHqkATeauXhF/oZDYR4EbQlhQ+J/qtJO4W+sl9gpWwazBmyXWnEN2zgw2IvSupgi1U3GPgxxpXE5vE1NLvEo0yaAOlWYeTRdizECgYEAz7ZplWVwNQyy42CzB5dIQeZb8Z+WnkBTrr8Dej22owJXM4TeNIxgwoDzvxQhyZ0G3vCKTDmHspygrd7s1RUQdWkhd5tOdWiUv5wni0ldRFZAHAfsGusHMkR6ZKbtxp2wdgCGjgbWjdInEKzNC1M1yWi/vfJfQEJgVKfvvo1mja0CgYBHTFDc2UCDQ0igL20UDZ+gzI0/D8pWBuDrXAcEhp/txQn0Ecu6A9TmBhFB6nCuuX5UOzi8xtjC99aJyHVN5KFOFdbjnOZdnAIYTB9iuQz1mtHzhrF0suwtrWsBq+imkxYiHWVT48Fvu7tQ+w/9XUV2Jh7i6zdRQ6KSpYQ2W8anoQKBgHafwqTjjbV+Txu0Ogp3x3h7Sr8vWSF/s0r1I9NIM2ndCFgP5ac1FH2Aj7Psl29BEo936EOoB2tmMA2cZr06jm+/XrGkLKa411qmn57Ygz9n0q0viRPGbhGzMgMRonHv1LtPiYjLNvU/s7e+OEvjdbBU9kxQgz17qvAuCKlWr97xAoGBAMk5zMGtxI87t1sEqybVRowTHofWhZVJS2lOeUMgYh3Xv+TtdMtMhTXXz7dgXd7j5Vk1Vawdo/sqTgtiyQ8xlUxVW+B+tzEHhcq8mh98FcYIqf0SPOmFiJBbuGyC+qIrXNFiGPgIetdXk2arXOr87XAQ4QLmQvs/YPgQ3fv4vTVm-----END PRIVATE KEY-----";

  const privateKey =
    "-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvBTvvOaSjaGCoxOUcjQG4xqWDnt/mq/2IV8m1cmaaCwUJQLrsOXK7Q46JziP4o9IWpzV9S1NAJPzaLOR6JsnyDNa8lWNDQDd6kL9m+6Qzn4bc6/FFAUYB6BFQi1HbguIGMfJOdqnR5tFYNoZzd5Fx2YSqWwF0LgoW1fH3e5Oe9ZVelzouDPTzF0ewRIRKaVe2nG2hwqqG0XWDnYt65TvQRFPwFtE38GhJgVrjokFL89cFE9ZfyMh5KYV6myEUFz5gQpqigVhG9z6mQl6pIeoACW17bIAOpQQRyX/bNLkQoQPo+Z7YQ/kHKwSTMBLj6BBB7IaaB3UIyCZMPA1bZw0dAgMBAAECggEBAJwJEpII1htJJ0PPpmN54xsVHuLldcB1fadcfNxjjc2wHWFOcFfCL+N8K0v4mGFHzDmeATYfPa1mTHdGpruwcUJ258thdAm06sE+4yWxG4dapiW3xHY82GlCuI0SaHxHh7L2PIxvhp84JVN76Qpwgx75SimG0Rj/IseRHhQB/G4uEuoU98ia0dsCQzD9iOB1kxwpDXdgMWLZNnceV4m1s0b9Rt4axnfvjTdVv9DIyipHsAuPqbSlX66zEeBPAsdYgiN10TdO0IaCfnalAdZ8M+GLUn6HbuCxA3jK2fQypd8eo1ZdLAIP2O08OzB+33gnQ33Ib4YgsqyZEHB+K+S5PwECgYEA17U30WpCYCX1NzzUevA7KmGXzv3RgZAANy1io5ReH2ZdF1NcfCFcahzf4PBcMZEEuVLO0FJReHqkATeauXhF/oZDYR4EbQlhQ+J/qtJO4W+sl9gpWwazBmyXWnEN2zgw2IvSupgi1U3GPgxxpXE5vE1NLvEo0yaAOlWYeTRdizECgYEAz7ZplWVwNQyy42CzB5dIQeZb8Z+WnkBTrr8Dej22owJXM4TeNIxgwoDzvxQhyZ0G3vCKTDmHspygrd7s1RUQdWkhd5tOdWiUv5wni0ldRFZAHAfsGusHMkR6ZKbtxp2wdgCGjgbWjdInEKzNC1M1yWi/vfJfQEJgVKfvvo1mja0CgYBHTFDc2UCDQ0igL20UDZ+gzI0/D8pWBuDrXAcEhp/txQn0Ecu6A9TmBhFB6nCuuX5UOzi8xtjC99aJyHVN5KFOFdbjnOZdnAIYTB9iuQz1mtHzhrF0suwtrWsBq+imkxYiHWVT48Fvu7tQ+w/9XUV2Jh7i6zdRQ6KSpYQ2W8anoQKBgHafwqTjjbV+Txu0Ogp3x3h7Sr8vWSF/s0r1I9NIM2ndCFgP5ac1FH2Aj7Psl29BEo936EOoB2tmMA2cZr06jm+/XrGkLKa411qmn57Ygz9n0q0viRPGbhGzMgMRonHv1LtPiYjLNvU/s7e+OEvjdbBU9kxQgz17qvAuCKlWr97xAoGBAMk5zMGtxI87t1sEqybVRowTHofWhZVJS2lOeUMgYh3Xv+TtdMtMhTXXz7dgXd7j5Vk1Vawdo/sqTgtiyQ8xlUxVW+B+tzEHhcq8mh98FcYIqf0SPOmFiJBbuGyC+qIrXNFiGPgIetdXk2arXOr87XAQ4QLmQvs/YPgQ3fv4vTVm-----END PRIVATE KEY-----";

  const consumerID = "45954df0-cff0-4104-bddd-4cbdc353f0aa";
  const walmartAuthHeaders = generateWalmartAuthHeaders(
    consumerID,
    "1",
    privateKey
  );

  const walmartSearch = () => {
    fetch(
      "https://developer.api.walmart.com/api-proxy/service/affil/product/v2/search?query=tv",
      {
        method: "GET",
        headers: walmartAuthHeaders,
        mode: "no-cors",
        "Content-Type": "application/json",
      }
    ).then((res) => console.log(res));
  };

  function generateWalmartAuthHeaders(consumerId, keyVer, privateKey) {
    const hashList = {
      "WM_CONSUMER.ID": consumerId,
      "WM_CONSUMER.INTIMESTAMP": Date.now(),
      "WM_SEC.KEY_VERSION": keyVer,
    };

    const sortedHashString = `${hashList["WM_CONSUMER.ID"]}\n${hashList["WM_CONSUMER.INTIMESTAMP"]}\n${hashList["WM_SEC.KEY_VERSION"]}\n`;
    const signer = new nodeRSA(privateKey, "pkcs8-private-pem");
    const signature = signer.sign(sortedHashString);
    const signature_enc = signature.toString("base64");

    return {
      "WM_SEC.AUTH_SIGNATURE": signature_enc,
      "WM_CONSUMER.INTIMESTAMP": hashList["WM_CONSUMER.INTIMESTAMP"],
      "WM_CONSUMER.ID": hashList["WM_CONSUMER.ID"],
      "WM_SEC.KEY_VERSION": hashList["WM_SEC.KEY_VERSION"],
    };
  }

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
      //"https://cors-anywhere.herokuapp.com/https://api.sandbox.ebay.com/identity/v1/oauth2/token",
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
