import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const BackButton = () => {
  return (
    <div className="WrapperBackButton">
      <Link to="/">
        <button className="BackButton">Voltar</button>
      </Link>
    </div>
  );
};
