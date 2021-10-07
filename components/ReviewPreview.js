import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const ReviewPreview = (props) => {
  const reviewTemp = [
    {
      author: "jiwon4221",
      title: "너무 떨렸는데 자고 일어나니 다 끝나있었어요",
    },
    { author: "dcast1414", title: "강력 추천합니다!" },
    {
      author: "surfwang77",
      title: "두려움 없이 편히 치료를 받을 수 있었어요~~",
    },
    { author: "bosesoundmini", title: "너무 감사하고 좋았습니다" },
    {
      author: "jiwon4221",
      title: "너무 떨렸는데 자고 일어나니 다 끝나있었어요",
    },
    { author: "dcast1414", title: "강력 추천합니다!" },
    {
      author: "surfwang77",
      title: "두려움 없이 편히 치료를 받을 수 있었어요~~",
    },
    { author: "bosesoundmini", title: "너무 감사하고 좋았습니다" },
  ];

  const ReviewBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 1px 2px #00000030;
    font-size: ${(props) => props.theme.fontSize.default};
    .review_seemore {
      cursor: pointer;
      color: #848bb7;
    }
    ${({ theme }) => theme.mobile`
         width: auto;
         margin-top: 50px;
    `}
  `;

  const ReviewTitle = styled.span`
    width: 100px;
    height: 50px;
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.fontSize.semiBold};
    font-weight: 400;
    line-height: 3;
  `;

  const ReviewImageBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    width: 40%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url("image/home_review_1.jpg");
    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
        height: auto;
    `}

    ${({ theme }) => theme.mobile`
        display: none;
    `}
  `;

  const ReviewListBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
    ul {
      list-style: circle;
      padding-left: 0;
      cursor: pointer;
      margin: 0;
    }

    ul:last-child {
      border-bottom: 0;
      box-shadow: none;
    }

    li {
      margin: 16px 0px;
    }

    ._review_list {
      border-left: 1px solid;
      padding-left: 20px;
    }

    ${({ theme }) => theme.mobile`
        display: none;
    `}
  `;

  const ReviewSeeMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    line-height: 3;
    text-align: end;
    cursor: pointer;
    i {
      font-size: 30px;
    }

    &:hover {
      font-weight: 600;
    }

    ${({ theme }) => theme.mobile`
        font-size: ${theme.mFontSize.reviewSmall};
        i {
          font-size: 15px;
        }
    `}
  `;

  const MReviewBox = styled.div`
    display: none;
    ${({ theme }) => theme.mobile`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.mFontSize.review};    
    margin: 10px;
    ul {
      margin: 0;
      list-style: circle;
      margin-bottom: 10px;
    }
    `}
  `;

  const MReviewList = styled.div`
    display: none;
    ${({ theme }) => theme.mobile`
        display: block;
    `}
  `;

  return (
    <ReviewBox>
      <ReviewListBox>
        <div className="_review_box">
          <ReviewTitle>치료후기</ReviewTitle>
          <div className="_review_list">
            {reviewTemp.map((item) => {
              return (
                <ul>
                  <li className="_ellipsis">{item.title}</li>
                </ul>
              );
            })}
          </div>
          <Link href="/Review/review">
            <ReviewSeeMore>
              후기 더 보러가기
              <i className="ri-arrow-right-s-fill" />
            </ReviewSeeMore>
          </Link>
        </div>
      </ReviewListBox>
      <ReviewImageBox />
      <MReviewBox>
        <MReviewList>
          {reviewTemp.map((item, idx) => {
            if (idx < 4) {
              return (
                <ul>
                  <li>{item.title}</li>
                </ul>
              );
            } else {
              return null;
            }
          })}
          <Link href="/Review/review">
            <ReviewSeeMore>
              후기 더 보러가기
              <i className="ri-arrow-right-s-fill" />
            </ReviewSeeMore>
          </Link>
        </MReviewList>
      </MReviewBox>
    </ReviewBox>
  );
};

export default ReviewPreview;
