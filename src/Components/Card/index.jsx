import "./style";
import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import Info from "../Info";
import mask from "../../Assets/images/mask.svg"
import SocialsList from "../Socials";

const CartaoBG = styled.div`
background: url(${mask});
background-color: #202024;
width: 358px;
height: 540px;
text-align: center;
z-index: 1;
`

function Card() {
  return <CartaoBG>
      <Avatar />
      <Info />
      <SocialsList />

  </CartaoBG>;
}

export default Card;
