import React from "react";
import youtubelogo from "../../Assets/images/youtube.svg";
import facebooklogo from "../../Assets/images/facebook.svg";
import twitterlogo from "../../Assets/images/twitter.svg";
import instagramlogo from "../../Assets/images/insta.svg";
import styled from "styled-components";

const LinkList = styled.ul`
  margin-top: 2.5rem;
  display: flex;
  list-style: none;
  padding: 0;
  gap: 0.5rem;
  justify-content: center;
`;

function SocialsList() {
  return (
    <LinkList>
      <li>
        <img src={youtubelogo} alt="youtube" />
      </li>
      <li>
        <img src={instagramlogo} alt="instagram" />
      </li>
      <li>
        <img src={facebooklogo} alt="facebook" />
      </li>
      <li>
        <img src={twitterlogo} alt="twitter" />
      </li>
    </LinkList>
  );
}

export default SocialsList;
