import React, { useState, useEffect } from "react";
import { Panel } from "../../components/Panel";
import { ProductItem } from "../../components/ProductItem";

function Under() {
  const [data, setData] = useState([]);
  const jsonData = require("./under.json");

  const fetchData = jsonData.items;
  useEffect(() => {
    setData(fetchData);
    console.log(data);
  });
  return (
    <div>
      <Panel value="30,00" notice>
        {fetchData.map((item) => (
          <ProductItem
            name={item.name}
            img={item.imageUrl}
            key={item.id}
            currentPrice={item.price}
            oldPrice={item.sellingPrice}
          />
        ))}
      </Panel>
    </div>
  );
}
export default Under;
