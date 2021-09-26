import styled from "styled-components";
import React from "react";

export const Section = styled.div`
  width: 100%;
  display: inline-block;
  align-items: baseline;
  justify-content: center;
  padding: 60px 0;
  background-color: ${(props) =>
    props.color === "beige" ? props.theme.lightBeige : "#fff"};
`;

const ContentsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: calc(100% - 500px);
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.color === "beige" ? props.theme.lightBeige : "#fff"};

  ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
    `}
`;

export const VDiv = (props) => {
  return (
    <>
      <Section color={props.color}>
        <ContentsBox>
          <Contents color={props.contColor || props.color}>
            {props.element}
          </Contents>
        </ContentsBox>
      </Section>
    </>
  );
};
