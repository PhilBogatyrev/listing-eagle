import React from "react";
import { useState } from "react";

const Search = ({ querySent, query, onSearch }) => {
  console.log("ONSEARCH");
  console.log(query);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  console.log(querySent);

  const handleChange = (event) => {
    event.preventDefault();
    setMessage(event.target.value);

    //console.log("value is:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.queryField.value);
    onSearch(event.target.queryField.value, true);

    console.log("value is:", event.target.queryField.value);
  };

  return (
    <div className="topnav">
      <h1>query: {query}</h1>
      <h1>searchQuery: {searchQuery}</h1>

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
