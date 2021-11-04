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

  ${({ theme }) => theme.mobile`
     padding: 30px 0;
     ${(props) => {
       if (props.disYn === "n") {
         return " display: none;";
       }
       if (props.padding !== undefined) {
         return `padding: ${props.padding}`;
       }
     }}
  `}
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
  ${({ theme }) => theme.laptop`
        width: calc(100vw);
  `}

  ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
  `}

  ${({ theme }) => theme.mobile`
         width: 100vw;
  `}
`;

export const VDiv = (props) => {
  return (
    <>
      <Section color={props.color} disYn={props.disYn} padding={props.padding}>
        <ContentsBox>
          <Contents color={props.contColor || props.color}>
            {props.element}
          </Contents>
        </ContentsBox>
      </Section>
    </>
  );
};
