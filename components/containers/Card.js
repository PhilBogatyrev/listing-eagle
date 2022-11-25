import React from "react";
import { connect } from "react-redux";
import Card from "../ui/card/Card";
import { onRemoveItemFromCard } from "../../store/actions/card";

const CardContainer = ({ items, total, onRemoveItemFromCard }) => {
  return (
    <Card
      items={items}
      total={total}
      removeItemFromCard={onRemoveItemFromCard}
    />
  );
};

export default connect(
  (state) => ({
    items: state.card.items,
    total: state.card.total,
  }),
  { onRemoveItemFromCard }
)(CardContainer);
