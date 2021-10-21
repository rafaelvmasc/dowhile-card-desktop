import React from "react";
import styled from "styled-components";
import iconeGit from "../../Assets/icons/Vector.svg";

const LinkGit = styled.a`
  margin-top: 0.25rem;
  display: flex;
  justify-content: center;
  vertical-align: center;
  color: var(--grey);
  text-decoration: none;
  gap: 0.75rem;
`;

function Githublink() {
  return (
    <LinkGit href="https://github.com/rafaelvmasc">
      <img src={iconeGit} alt="Github" />
      rafaelvmasc
    </LinkGit>
  );
}

export default Githublink;
