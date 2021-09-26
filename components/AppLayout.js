import React from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import RightButton from "./RightButton";
import styled from "styled-components";

const AppLayout = ({ children }, props) => {
  const VLayout = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    float: left;
    padding: 0;
    font-size: 20px;
    background-color: #f2e9e4;
    font-family: noto_serif;
    font-width: 200;
    font-weight: 300;
    color: #4a4e69;
  `;

  const VBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <VLayout>
      <VBox>
        <Navigator />
      </VBox>
      <div className="v_content">{children}</div>
      <Footer />
      <RightButton />
    </VLayout>
  );
};

export default AppLayout;
