import React from "react";
import styled from "styled-components";

const RightButton = () => {
  const RightButtonBox = styled.div`
    position: fixed;
    top: 200px;
    right: 0;
    z-index: 10;

    ${({ theme }) => theme.mobile`
      top: calc(100vh - 170px);
    `}
  `;

  const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 2px #00000030;
    cursor: pointer;

    &:first-child {
      background-color: #3eaf0e;
    }

    &:nth-child(2) {
      background-color: #ff0000;
    }

    ${({ theme }) => theme.mobile`
      width: 50px;
      height: 50px;
    `}
  `;

  const BlogButton = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='레이어_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg id='그룹_263' transform='translate(280 930)'%3E%3Cpath id='패스_130' class='st0' d='M-262.8-914.9c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0.1c0,0.4,0.3,0.7,0.7,0.7 c0.4,0,0.7-0.3,0.7-0.7C-262-914.5-262.3-914.8-262.8-914.9C-262.7-914.9-262.7-914.9-262.8-914.9z'/%3E%3Cpath id='패스_131' class='st0' d='M-255.7-919.9c-0.7-0.7-1.6-1.1-2.6-1.1h-11.2c-2,0-3.6,1.6-3.6,3.6l0,0v5.4 c0,2,1.6,3.6,3.6,3.6l0,0h4.1l1.2,2.4c0.1,0.2,0.2,0.2,0.4,0.2c0.1,0,0.2-0.1,0.2-0.2l1.2-2.4h4.1c2,0,3.6-1.6,3.6-3.6l0,0v-5.4 C-254.6-918.3-255-919.3-255.7-919.9z M-269-912.4c-0.4,0-0.7-0.2-0.9-0.5l0,0v0.4h-1.1v-4.7h1.1v1.8c0.2-0.3,0.6-0.4,1-0.4 c0.9,0,1.6,0.8,1.6,1.7c0,0,0,0,0,0.1C-267.3-913.2-268-912.5-269-912.4C-268.9-912.4-268.9-912.4-269-912.4z M-265.4-912.5h-1.1 v-2.7c0-0.5-0.1-0.9-0.5-1v-1.1c1,0,1.6,0.7,1.6,1.9V-912.5z M-262.7-912.4c-1,0.1-1.8-0.6-1.9-1.6s0.6-1.8,1.6-1.9 c0.1,0,0.2,0,0.3,0c1-0.1,1.8,0.7,1.9,1.6v0.1c0,1-0.8,1.7-1.7,1.7C-262.6-912.4-262.7-912.4-262.7-912.4L-262.7-912.4z M-256.7-912.8c0,1.4-0.7,2-1.9,2h-0.2v-1h0.2c0.6,0,0.8-0.4,0.8-0.9v-0.2c-0.3,0.3-0.6,0.4-1,0.4c-0.9,0-1.6-0.7-1.5-1.6v-0.1 c-0.1-0.9,0.6-1.7,1.5-1.8c0,0,0,0,0.1,0c0.4,0,0.7,0.1,0.9,0.4l0,0v-0.4h1.1V-912.8z'/%3E%3Cpath id='패스_132' class='st0' d='M-258.4-914.9c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0.1c0,0.4,0.3,0.7,0.6,0.7h0.1 c0.4,0,0.7-0.3,0.7-0.6v-0.1C-257.7-914.5-258-914.9-258.4-914.9L-258.4-914.9z'/%3E%3Cellipse id='타원_2' class='st0' cx='-269.2' cy='-914.1' rx='0.7' ry='0.7'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-color: #3eaf0e;

    ${({ theme }) => theme.mobile`
      width: 50px;
      height: 50px;
    `}
  `;

  const YoutubeButton = styled.div`
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='레이어_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23fff;%7D%0A%3C/style%3E%3Cpath class='st0' d='M30.6,9c-0.4-1.3-1.4-2.3-2.7-2.7c-2.4-0.7-12-0.7-12-0.7s-9.6,0-12,0.6C2.7,6.6,1.7,7.6,1.3,9 c-0.6,2.4-0.6,7.4-0.6,7.4s0,5,0.6,7.4C1.7,25,2.7,26,4,26.4C6.4,27,16,27,16,27s9.6,0,12-0.6c1.3-0.4,2.3-1.4,2.7-2.7 c0.6-2.4,0.6-7.4,0.6-7.4S31.3,11.3,30.6,9z M12.9,20.9v-9.2l8,4.6L12.9,20.9z'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-color: #ff0000;
    ${({ theme }) => theme.mobile`
      width: 30px;
      height: 30px;
    `}
  `;

  const linkEvent = (flag) => {
    if (flag === "blog") {
      // window.location.href='http://www.codingfactory.net/';
      window.open("https://blog.naver.com/hhhhsomi/", "_blank");
    } else if (flag === "youtube") {
      window.open(
        " https://www.youtube.com/channel/UCMXzQE1LTyEPw3NrNoz5B8A/",
        "_blank"
      );
    }
  };

  return (
    <RightButtonBox>
      <Button>
        <BlogButton
          onClick={() => {
            linkEvent("blog");
          }}
        />
      </Button>
      <Button>
        <YoutubeButton
          onClick={() => {
            linkEvent("youtube");
          }}
        />
      </Button>
    </RightButtonBox>
  );
};

export default RightButton;
