import React, { useEffect } from "react";
import styled from "styled-components";

const MediaPreview = (props) => {
  const mediaInfo = {
    블로그: {
      title: "[앞니 성형 부작용] 앞니보철, 라미네이트 부작용",
      img: "https://images.indianexpress.com/2020/03/dental.jpg",
    },

    유튜브: {
      title: "산채로 썩는다고?/치료한 곳도 다시보자. 앞니충치",
      img: "https://i.ytimg.com/vi/3L00vU_TsGo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuYZMsEpiM6rY4TDQFyN46Tl6s9w",
    },
  };

  const MediaBox = styled.div`
    width: 50%;
    height: 100%;
    padding: 25px;

    &:first-child {
      padding-right: 12px;
    }

    &:nth-child(2) {
      padding-left: 12px;
    }

    ul {
      list-style: none;
    }

    ._media_title {
      //color: #000;
      width: 100%;
      margin: 10px 0px;
      cursor: pointer;
    }
  `;

  const MediaTitle = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    div {
      font-size: ${(props) => props.theme.fontSize.default};
      padding-bottom: 5px;
      font-weight: 600;
      //border-bottom: 1px solid #adadca;
    }
  `;

  const MediaThumb = styled.div`
    width: 100%;
    height: 100%;
    //margin-top: 20px;
    img {
      width: 100%;
      //height: 100%;
      //height: 265px;
      object-fit: cover;
      //border-radius: 5px;
      box-shadow: 0px 1px 1px #00000017;
      cursor: pointer;
    }
  `;

  return (
    <MediaBox>
      <MediaTitle>
        <div>{props.mediaType}</div>
      </MediaTitle>
      <MediaThumb>
        <img
          src={mediaInfo[props.mediaType].img}
          alt="이미지를 불러올 수 없습니다."
        />
        <div className="_media_title _ellipsis">
          {mediaInfo[props.mediaType].title}
        </div>
      </MediaThumb>
    </MediaBox>
  );
};

export default MediaPreview;
