import styled from "styled-components";
import React from "react";
import mikeyavy from "../../Assets/images/mikey.gif";
import seloNLW from "../../Assets/images/build.svg";

const Avy = styled.div`
  width: 10rem;
  margin: 3.5625rem auto 0;
  
  > img {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    margin-top: 1rem;
    object-fit: cover;
    width: 10rem;
    height: 11.5rem;
  }
  `;
  
  const Selo = styled.span`
  position: absolute;
  z-index: 1;
`;

function Avatar() {
  return (
    <Avy>
      <Selo>
        <img src={seloNLW} alt="Logo Mikey" />
      </Selo>
      <img src={mikeyavy} alt="Logo Mikey" />
    </Avy>
  );
}
export default Avatar;
