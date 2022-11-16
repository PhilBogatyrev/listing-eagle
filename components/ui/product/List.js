import React from "react";

const ProdcutList = ({ products, addItemtoCard }) => {
  return (
    <div className="medium-container">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price + " $"}</td>
              <td>
                <button onClick={e => addItemtoCard(product)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdcutList;
