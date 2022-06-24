import React, { useState, useEffect } from "react";
import { BackButton } from "../../components/BackButton";
import { Modal } from "../../components/Modal";
import { Panel } from "../../components/Panel";
import { ProductItem } from "../../components/ProductItem";
import "./styles.css";

function Over() {
  // FETCHING DATA
  const [, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const jsonData = require("./over.json");
  const fetchData = jsonData.items;

  // SUM OF ITEMS CART
  const [total] = useState(fetchData.map((value) => value.sellingPrice));

  const totalValue = total.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  useEffect(() => {
    setData(fetchData);
  }, []);

  const minValue = 10;

  const isShipping = totalValue / 100 >= minValue;

  const body = (
    <div className="WrapperBody">
      <div className="WrapperTitle">
        <span className="TitleModal">
          Seu pedido foi finalizado com sucesso!
        </span>
      </div>
      <div className="WrapperNotice">
        <span className="NoticeModal">
          Clique abaixo para receber seu cupom de frete grátis
        </span>
      </div>

      <div className="WrapperButton">
        <button className="ButtonModal" onClick={() => setOpen(false)}>
          Receber cupom
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <BackButton />
      <Modal show={open} onClose={() => setOpen(false)}>
        {body}
      </Modal>
      <Panel
        value={totalValue / 100}
        notice={isShipping}
        onClick={() => setOpen(true)}
      >
        {fetchData.map((item) => (
          <>
            <ProductItem
              name={item.name}
              img={item.imageUrl}
              key={item.id}
              currentPrice={item.sellingPrice / 100}
              oldPrice={item.price / 100}
            />
          </>
        ))}
      </Panel>
    </div>
  );
}
export default Over;
