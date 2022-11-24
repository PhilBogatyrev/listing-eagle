import * as S from "../types/search";

const onSearchRequest = (query, querySent) => {
  console.log(query);
  return {
    type: S.SEARCH_REQUEST,
    payload: { query, querySent },
  };
};

export { onSearchRequest };
