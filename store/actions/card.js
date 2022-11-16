import * as C from "../types/card";

const onAddItemtoCard = item => ({
  type: C.ADD_ITEM,
  payload: { item }
});

const onRemoveItemFromCard = index => ({
  type: C.REMOVE_ITEM,
  payload: { index }
});

export { onAddItemtoCard, onRemoveItemFromCard };
