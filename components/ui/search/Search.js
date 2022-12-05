import React from "react";
import { useState } from "react";

const Search = ({ query, querySent, onSearch }) => {
  console.log("query: ", query);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);

    //console.log("value is:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.queryField.value);
    onSearch({ query: event.target.queryField.value, querySent: querySent });
  };

  async function getCatFacts() {
    const res = await fetch("https://catfact.ninja/fact");
    const posts = await res.json();

    return posts;
  }

  return (
    <div className="topnav">
      <h1>query: {query}</h1>
      <h1>searchQuery: {searchQuery}</h1>
      <h1>cat facts: {getCatFacts()}</h1>

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
