import * as S from "../types/search";

const initialState = {
  query: "",
  querySent: true,
};

const searchReducer = (state = initialState, action) => {
  console.log("Search reducer");
  switch (action.type) {
    case S.SEARCH_REQUEST:
      console.log("QUERY: ", action.payload.query);
      return {
        query: action.payload.query,
        querySent: state.querySent,
      };
    default:
      return state;
  }
};

export default searchReducer;
