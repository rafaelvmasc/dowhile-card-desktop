import React from "react";
import styled from "styled-components";
import Githublink from "../Socials/githublink";

const Nome = styled.h1`
  font-size: 1.5rem;
  color: var(--grey);
  margin-top: 1.5rem;
  font-family: "Roboto", sans-serif;
`;

const Quote = styled.p`
  
  margin: 2rem 3rem;
  color: var(--grey);
  font-size: 0.875rem;
`;

function Info() {
  return (
    <div>
      <Nome>Rafael Cavalcante</Nome>
      <Githublink />
      <Quote>
        Front-End Developer | Yeee
      </Quote>
    </div>
  );
}

export default Info;
