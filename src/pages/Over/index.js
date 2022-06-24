import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import { Panel } from "../../components/Panel";
import { ProductItem } from "../../components/ProductItem";

function Over() {
  // FETCHING DATA
  const [data, setData] = useState([]);
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
  console.log(isShipping);

  return (
    <div>
      <BackButton />
      <Panel value={totalValue / 100} notice={isShipping}>
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
