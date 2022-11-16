import React from "react";

const Card = ({ items, total, removeItemFromCard }) => {
  return (
    <div className="medium-container float-right">
      {items.length === 0 ? (
        <span>empty card !</span>
      ) : (
        <div>
          <table>
            <thead />
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>______________</td>
                  <td> {item.price + "$"}</td>
                  <td onClick={e => removeItemFromCard(index)}>
                    <button className="small-button">x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span className="float-right">
            <b>Total : {total + "$"}</b>
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;
