import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import styled from "styled-components";
import TempReview from "./tempReview.json";

const ReviewMore = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
  background: ${(props) =>
    props.showYn === true
      ? "transparent"
      : "linear-gradient(#ffffff00, #ffffffeb, #fff)"};

  ._more_btn {
    font-weight: 600;
    font-size: 35px;
    // color: ${(props) => props.theme.darkBeige}
  }

  ._more_btn:hover {
    color: ${(props) => props.theme.temp1};
  }
`;

const ReviewContent = styled.div`
  position: relative;
  width: 100%;
  //max-height: 200px;
  padding: 0px 60px;
  max-height: 100%;
  transition: max-height 0.15s ease-out;
  max-height: ${(props) => (props.showYn === true ? "100%" : "200px")};
`;

const Review = () => {
  const [showYn, setShowYn] = useState(false);

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
    //height: 620px;
    height: calc(100vh - 550px);
    overflow: hidden;
    box-shadow: -1px 1px 4px #51515157;
  `;

  const tempReview = TempReview;
  const BoardBack = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BoardBox = styled.div`
    width: calc(100% - 500px);
  `;

  const ReviewBox = styled.div`
    width: 100%;
    background-color: #fff;
    margin-bottom: 50px;
    //padding: 60px 60px;
    //padding-bottom: 0;
    overflow: hidden;
    &:first-child {
      margin-top: 100px;
    }
    
    &:last-child {
      margin-bottom: 200px;
    }
  `;

  const ReviewTop = styled.div`
    background-color: ${(props) => props.theme.darkSpace};
    width: 100%;
    height: 10px;
  `;

  const ReviewTitle = styled.div`
    float: left;
    width: 100%;
    font-weight: 400;
    padding: 25px 60px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 40px;
    font-size: 22px;
    ._title {
      float: left;
    }

    ._author {
      float: left;
      display: flex;
      align-items: center;
      margin: 0px 20px;
      color: #979cc0;
      font-weight: 200;
      font-size: 20px;
      i {
        margin: 0px 10px -7px 0px;
      }
    }

    ._line {
      float: left;
      width: 40px;
      height: 50%;
      border-bottom: 1px solid #fff;
    }

    ._more {
      float: right;
    }
  `;

  const ReviewInfo = styled.div`
    display: flex;
    width: 100%;
    font-size: 18px;
    color: #979cc0;
    margin-top: 20px;
    //border-top: 1px solid ${(props) => props.theme.darkSpace};
    div {
      margin-right: 10px;
    }
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
            {/* <BoardTitle /> */}
            {tempReview.map((item) => {
              return (
                <ReviewBox>
                  {/* <div>{item.idx}</div> */}
                  {/* <div>{item.author}</div> */}
                  <ReviewTop />
                  <ReviewTitle>
                    <div className="_title">{item.title}</div>
                    <span className="_more">
                      <i className="ri-more-line" />
                    </span>
                    <span className="_author">
                      <i className="ri-subtract-line" />
                      {item.author}님
                    </span>
                  </ReviewTitle>
                  <ReviewContent showYn={showYn}>
                    {item.content.split("\n").map((str) => {
                      return <div>{str}</div>;
                    })}
                    <ReviewInfo>
                      <div>{item.author}</div>
                      <div>2021-09-08</div>
                    </ReviewInfo>
                  </ReviewContent>
                  <ReviewMore showYn={showYn}>
                    <div
                      className="_more_btn"
                      onClick={() => {
                        setShowYn(showYn !== true);
                      }}
                    >
                      <i
                        className={
                          showYn === true
                            ? "ri-arrow-down-s-fill"
                            : "ri-arrow-up-s-fill"
                        }
                      />
                    </div>
                  </ReviewMore>
                </ReviewBox>
              );
            })}
          </BoardBox>
        </BoardBack>
      </AppLayout>
    </>
  );
};

export default Review;
