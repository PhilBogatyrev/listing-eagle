import * as C from "../types/card";

const initialState = {
  items: [],
  total: 0,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_ITEM:
      return {
        items: [...state.items, action.payload.item],
        total: state.total + action.payload.item.price,
      };
    case C.REMOVE_ITEM:
      return {
        items: [
          ...state.items.filter(
            (item, index) => index !== action.payload.index
          ),
        ],
        total: state.total - state.items[action.payload.index].price,
      };
    case C.UPDATE_QUANTITY:
      break;
    default:
      return state;
  }
};

export default cardReducer;
