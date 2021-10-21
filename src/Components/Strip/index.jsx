import "./style.css";
import React from "react";
import faixa from "../../Assets/images/faixa.png";

function Strip() {
  return <>
  <img src={faixa} alt="faixa" className="faixa"/>
  <div className="furo"></div>
  </>
}

export default Strip;
