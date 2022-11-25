import React from "react";
import { connect } from "react-redux";
import Search from "../ui/search/Search";
import { onSearchRequest } from "../../store/actions/search";

const SearchContainer = ({ query, querySent, onSearchRequest }) => {
  return (
    <Search query={query} querySent={querySent} onSearch={onSearchRequest} />
  );
};

export default connect(
  (state) => ({
    query: state.search.query,
    querySent: state.search.querySent,
  }),
  { onSearchRequest }
)(SearchContainer);
