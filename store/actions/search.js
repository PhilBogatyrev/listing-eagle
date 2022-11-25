import * as S from "../types/search";

//const onSearchRequest = (query, querySent) => {
const onSearchRequest = ({ query, querySent }) => {
  console.log("Search action");
  return {
    type: S.SEARCH_REQUEST,
    payload: { query, querySent },
  };
};

export { onSearchRequest };
