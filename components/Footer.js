import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Footer = (props) => {
  const FooterBox = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${(props) => props.theme.darkSpace};
  `;

  return <FooterBox />;
};

export default Footer;
