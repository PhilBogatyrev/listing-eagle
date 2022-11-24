import * as C from "../types/card";

const initialState = {
  query: "",
  querySent: true,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case S.SEARCH_REQUEST:
      return {
        query: action.payload.query,
        querySent: !action.payload.querySent,
      };
    default:
      return state;
  }
};

export default searchReducer;
