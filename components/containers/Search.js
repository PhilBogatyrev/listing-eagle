import React from "react";
import { connect } from "react-redux";
import Search from "../ui/search/Search";
import { onSearchRequest } from "../../store/actions/search";

const SearchContainer = ({ querySent, query, onSearchRequest }) => {
  return (
    <Search querySent={querySent} query={query} onSearch={onSearchRequest} />
  );
};

export default connect(
  (state) => ({
    query: state.query,
    querySent: state.querySent,
  }),
  { onSearchRequest }
)(SearchContainer);
