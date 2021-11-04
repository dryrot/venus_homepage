import React, { useEffect } from "react";
import styled from "styled-components";

const BeforeAfter = (props) => {
  const BeAfBox = styled.div`
    width: 100%;
    height: ${props.imgHeight || "600px"};
    ${({ theme }) => theme.mobile`
     max-height: 200px;
  `}
  `;

  const BeAfContents = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
  `;

  const BeAfImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imgSrc});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;

    &:last-child {
      animation-name: fade;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 3s;
      animation-direction: alternate;
    }

    @keyframes fade {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 1;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <BeAfBox>
        <BeAfContents>
          {props.imgSrc.map((item) => {
            return <BeAfImage imgSrc={item} />;
          })}
        </BeAfContents>
      </BeAfBox>
    </>
  );
};

export default BeforeAfter;
