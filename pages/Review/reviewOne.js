import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const ReviewBox = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 50px;
  overflow: hidden;

  &:first-child {
    margin-top: 100px;
  }

  &:last-child {
    margin-bottom: 200px;
  }
`;

const ReviewMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 180px;
  background: linear-gradient(#ffffff00, #ffffffeb, #fff);

  ._more_btn {
    font-weight: 600;
    font-size: 35px;
    // color: ${(props) => props.theme.darkBeige}
  }

  ._more_btn:hover {
    color: ${(props) => props.theme.temp1};
  }
`;

const getHeight = id => {
  let element = document.querySelector(`#${id}`);
  return element.scrollHeight + 'px';
};

const ReviewContent = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 60px;
  // height: ${(props) => (props.showYn === true ? "1000px" : "200px")};
  height: ${(props) => (props.showYn === true ? getHeight(props.boxId) : "200px")};
  transition: height 0.7s ease-out;
`;

const ReviewOne = (props) => {
  let review = props.review;
  const [showYn, setShowYn] = useState(false);
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
    div {
      margin-right: 10px;
    }
  `;

  return (
    <ReviewBox id={props.id}>
      <ReviewTop />
      <ReviewTitle>
        <div className="_title">{review.title}</div>
        <span className="_more">
          <i className="ri-more-line" />
        </span>
        <span className="_author">
          <i className="ri-subtract-line" />
          {review.author}님
        </span>
      </ReviewTitle>
      <ReviewContent boxId={props.id} showYn={showYn}>
        {review.content.split("\n").map((str) => {
          return <div>{str}</div>;
        })}
        <ReviewInfo>
          <div>{review.author}</div>
          <div>2021-09-08</div>
        </ReviewInfo>
      </ReviewContent>
      <ReviewMore showYn={showYn}>
        <div
          className="_more_btn"
          onClick={() => {
            if (showYn !== true) {
              setShowYn(props.showYn(props.id));
            } else {
              setShowYn(false);
            }
          }}
        >
          <i
            className={
              showYn === true ? "ri-arrow-down-s-fill" : "ri-arrow-up-s-fill"
            }
          />
        </div>
      </ReviewMore>
    </ReviewBox>
  );
};

export default ReviewOne;
