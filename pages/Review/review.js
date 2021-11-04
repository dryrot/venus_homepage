import React, { useState, useRef } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import TempReview from "./tempReview.json";
import TempReviewOne from "./tempReviewOne.json";
import ReviewOne from "./reviewOne";

const Review = () => {
  const tempReview = TempReview;
  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    font-weight: 600;
    font-size: 30px;
    ${({ theme }) => theme.mobile`
     font-size: ${theme.mFontSize.semiBold};
     height: 100px;
  `}
  `;

  const ContentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;
    ${({ theme }) => theme.mobile`
      justify-content: end;
    `}
  `;

  const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: calc(100% - 500px);
    height: calc(100vh - 550px);
    overflow: hidden;
    box-shadow: -1px 1px 4px #51515157;

    ${({ theme }) => theme.laptop`
        width: calc(100vw - 100px);
        height: 350px;
    `}

    ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
        height: auto;
    `}

    ${({ theme }) => theme.mobile`
        height: 150px;
        width: 100%;
        img {
         height: 150px;
          object-fit: cover;
        }
    `}
  `;

  const BoardBack = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BoardBox = styled.div`
    width: calc(100% - 500px);
    ${({ theme }) => theme.laptop`
        width: calc(100vw - 100px);
        height: 350px;
    `}
    ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
        height: auto;
    `}
    ${({ theme }) => theme.mobile`
        width: 100%;
    `}
  `;

  return (
    <>
      <Head>
        <title>치료후기 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <AppLayout>
        <Title>비너스 치료후기</Title>

        <ContentsBox violet>
          <Contents>
            <img
              src="/image/review_1.jpg"
              width="100%"
              height="auto"
              alt="이미지를 불러올 수 없습니다."
            />
          </Contents>
        </ContentsBox>
        <BoardBack>
          <BoardBox>
            {tempReview.map((item, idx) => {
              let boxId = `review_${idx}`;
              return (
                <ReviewOne
                  review={item}
                  id={boxId}
                  showYn={(id) => {
                    return boxId === id;
                  }}
                />
              );
            })}
          </BoardBox>
        </BoardBack>
      </AppLayout>
    </>
  );
};

export default Review;
