import React, { useState, useEffect } from "react";

function Over() {
  const [data, setData] = useState([]);
  const jsonData = require("./over.json");

  const fetchData = jsonData.items;
  useEffect(() => {
    setData(fetchData);
    console.log(data);
  });
  return (
    <div>
      {fetchData.map((item) => (
        <div>
          <img src={item.imageUrl} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Over;
