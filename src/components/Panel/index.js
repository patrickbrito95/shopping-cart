import React from "react";
import "./styles.css";

export const Panel = ({ children, value, notice }) => {
  return (
    <div className="Panel">
      <div className="WrapperTitle">
        <span className="Title">Meu Carrinho</span>
      </div>
      {children}
      <div className="WrapperBottom">
        <div className="WrapperValue">
          <span className="Total">Total</span>
          <span className="Value">R$ {value}</span>
        </div>
        <div className="WrapperNotice">
          {notice ? (
            <div className="NoticeShipping">
              Parabéns, sua compra tem frete grátis !
            </div>
          ) : null}
        </div>
      </div>
      <div className="WrapperButton">
        <button>Finalizar Compra</button>
      </div>
    </div>
  );
};
