import React, { useEffect } from "react";
import styled from "styled-components";

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
  ];

  // const ReviewBox = styled.div`
  //
  // `;
  const ReviewBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    // TODO 폰트테마 다시 잡을것
    font-size: ${props => props.theme.fontSize.default};
    
    .review_seemore {
      margin-top: 25px;
      cursor: pointer;
    }
  `;

  const Review = styled.div`
    text-align: center;
  `;

  const ReviewTitle = styled.span`
    width: 100px;
    height: 50px;
    //font-size: 15px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid #adadca;
  `;

  const ReviewListBox = styled.div`
    margin-top: 30px;    
    ul {
      list-style: none;
      padding-left: 0;
      //border-bottom: 1px solid #fff;
      //border-bottom: 1px solid #fff;
      //box-shadow: 0px 1px 1px #00000017;
      cursor: pointer;
    }

    ul:last-child {
      border-bottom: 0;
      box-shadow: none;
    }

    li {
      margin: 5px;
    }
  `;

  return (
    // <ReviewBox>
    <ReviewBox>
      <Review>
        <ReviewTitle>치료후기</ReviewTitle>
        <ReviewListBox>
          {reviewTemp.map((item) => {
            return (
              <ul>
                <li className="_ellipsis">{item.title}</li>
              </ul>
            );
          })}
        </ReviewListBox>
        <div className="review_seemore">더보기</div>
      </Review>
    </ReviewBox>

    // </ReviewBox>
  );
};

export default ReviewPreview;
