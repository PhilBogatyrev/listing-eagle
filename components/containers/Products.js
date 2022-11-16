import React from "react";
import { connect } from "react-redux";
import { onAddItemtoCard } from "../../store/actions/card";
import List from "../ui/product/List";

const ProductContainer = ({
  products,
  onAddItemtoCard,
  onRemoveItemFromCard
}) => {
  return (
    <List
      products={products}
      addItemtoCard={onAddItemtoCard}
      removeItemFromCard={onRemoveItemFromCard}
    />
  );
};

export default connect(
  state => ({
    products: state.product.products
  }),
  { onAddItemtoCard }
)(ProductContainer);
