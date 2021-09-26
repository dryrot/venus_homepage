import React, { useState, useRef } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import TempReview from "./tempReview.json";
import TempReviewOne from "./tempReviewOne.json";
import ReviewOne from "./reviewOne";

const Review = () => {
  // const tempReview = TempReviewOne;
  const tempReview = TempReview;
  const [showBox, setShowBox] = useState();

  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    font-weight: 600;
    font-size: 30px;
  `;

  const ContentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;
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
  `;

  const BoardBack = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BoardBox = styled.div`
    width: calc(100% - 500px);
  `;

  return (
    <>
      <Head>
        <title>치료후기 | Venuss</title>
      </Head>
      <AppLayout>
        <Title>비너스 치료후기</Title>

        <ContentsBox violet>
          <Contents>
            <img src="/image/review_1.jpg" width="100%" height="auto" alt="" />
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
                  showYn={id => {
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
