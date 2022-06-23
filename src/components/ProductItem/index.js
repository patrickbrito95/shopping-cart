import React from "react";
import "./styles.css";

export const ProductItem = ({ img, oldPrice, currentPrice, name }) => {
  return (
    <div className="WrapperDiv">
      <div className="WrapperImage">
        <img className="Image" src={img} />
      </div>
      <div className="WrapperDetails">
        <p className="Name">{name}</p>
        <p className="OldPrice">R$ {oldPrice}</p>
        <p className="Price">R$ {currentPrice}</p>
      </div>
    </div>
  );
};
