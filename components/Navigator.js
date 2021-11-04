import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";

const Navigator = () => {
  let [showMenu, setShowMenu] = useState(false);
  let modalRef = useRef(null);
  let NaviList = [
    {
      idx: 0,
      name: "원장 인사말",
      href: "/about",
      width: 20,
    },
    {
      idx: 1,
      name: "앞니 심미보철",
      href: "/simmi",
      width: 20,
    },
    {
      idx: 2,
      name: "앞니 잇몸치료",
      href: "/itmom",
      width: 20,
    },
    {
      idx: 3,
      name: "임플란트",
      href: "/implant",
      width: 12,
    },
    {
      idx: 4,
      name: "앞니교정",
      href: "/gyojung",
      width: 12,
    },
    {
      idx: 5,
      name: "치료후기",
      href: "/Review/review",
      width: 12,
    },
  ];

  const VNavi = styled.div`
    display: flex;
    border-bottom: 1px solid #4a4e69;
    width: calc(100vw - 500px);
    ${({ theme }) => theme.mobile`
      width: 100vw;
      margin: 7px;
      border-bottom: 1px solid #4a4e69;
      padding-bottom: 10px;
    `}
    ${({ theme }) => theme.laptop`
        width: calc(100vw - 100px);
    `}
    ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
    `}
  `;

  const NaviBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    font-size: 25px;
    font-weight: 400;
    margin-left: 20px;
    ${({ theme }) => theme.laptop`
        font-size: ${theme.lFontSize.navigator};
    `}
    ${({ theme }) => theme.mobile`
       display: none;
    `}
  `;

  const NaviItem = styled.div`
    text-align: center;
    &._12 {
      width: 12%;
      margin: 20px;
    }

    &._20 {
      width: 20%;
    }

    &._25 {
      width: 25%;
      margin-right: 20px;
    }

    &:last-child {
      margin: 0;
    }

    ${({ theme }) => theme.laptop`
     &._12 {
      width: 12%;
      margin: 10px;
    }

    &._20 {
      width: 20%;
      margin-right: 5px;
    }

    &._25 {
      width: 25%;
      margin-right: 5px;
    }

    &:last-child {
      margin: 0;
    }
    `}
  `;

  const VLogo = styled.div`
    width: 130px;
    height: 75px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='레이어_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1057.3 711.5' style='enable-background:new 0 0 1057.3 711.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%2322223B;%7D%0A%3C/style%3E%3Cg%3E%3Crect x='375' y='217' class='st0' width='27.3' height='479.3'/%3E%3Cpolygon class='st0' points='506.2,589.6 506.2,217 472,217 472,624 472.3,624 472.3,624.3 588,624.3 588,589.6 '/%3E%3Cpolygon class='st0' points='674.9,458.3 661.3,458.3 661.3,217.1 626,217.1 626,458.3 528.1,458.3 528.1,494.5 626,494.5 626,696.4 661.3,696.4 661.3,494.5 674.9,494.5 '/%3E%3Cg%3E%3Cpath class='st0' d='M386,21.4c-16.8,25.2-31,52-40,81.1c-6.5,20.8-11.8,42.1-15.8,63.6c-5.1,27.8-9,55.8-12.3,83.9 c-3,25.4-4.6,50.9-6.6,76.3c-1,12.1-1.1,24.3-2,36.4c-1.2,14.6-3,29.2-4.4,43.8c-1.1,12.3-1.9,24.5-3.2,36.8 c-2.3,22.2-4.8,44.3-7.4,66.5c-2.8,22.6-5.1,45.4-13.6,66.9c-4.1,10.4-9.8,19.6-19.3,25.9c-7,4.6-16.5,4.6-21.9-1.6 c-5.1-5.9-9.6-12.5-13.1-19.6c-10.7-21.6-14.6-45.3-19.1-68.8c-4.6-24.5-7.2-49.5-10.9-74.2c-3.7-24.5-7.3-49.2-11.7-73.5 c-2.7-14.6-5.7-29.3-10.8-43.1c-8.3-22.3-21.6-41.7-39.3-57.4c-7.5-6.6-16.1-12.1-24.2-18.1c-0.7,0.6-1.5,1.1-2.2,1.7 c0.3,1.6,0.3,3.3,1.1,4.6c7.7,14,16.1,27.7,23.1,42.1c5.6,11.4,10.1,23.5,13.7,35.8c3.4,11.6,5.3,23.6,7.4,35.6 c4.1,22.1,8.3,44.1,11.8,66.3c2.6,16.2,3.9,32.8,6.6,49c3.7,21.7,7.4,43.5,12.9,64.9c6.8,26.9,21.8,48.9,42.8,66.5 c18.4,15.3,39.6,14.5,54.7-2.2c12.4-13.6,20.5-30.1,26.7-47.3c5.7-15.6,10.1-31.7,13.7-47.9c4.6-21.6,8.4-43.4,11.5-65.2 c2.7-18.8,4-37.9,5.6-56.8c2.3-26.4,4.5-52.7,6.6-79.1c1.3-17,2-34,3.2-51c2-29.5,4.2-58.9,6.4-88.4c0.6-8.7,0.9-17.5,2.7-25.9 c4.4-20.5,9.2-41,14.5-61.3c4.9-18.9,10.5-37.6,15.7-56.5c1.2-4.4,2.1-8.8,3.2-13.3c-0.5-0.3-1-0.6-1.5-0.9 C388.8,18.6,387,19.7,386,21.4z'/%3E%3Cpath class='st0' d='M955,625.7l-2.9-36.2h-0.4c-1.5-17.1-3-34.2-4.3-51.3c-0.7-9.8-0.5-19.6-1.2-29.4 c-1.6-22.2-3.3-44.4-5.3-66.6c-2.2-25-4.1-49.9-7.4-74.7c-3.1-24-7.7-47.8-14.7-71.1c-5.7-18.8-13.3-36.7-24.1-52.9 c-8.9-13.3-19.7-23.2-37.1-23.5c-13.6-0.2-25,3.7-35,12.6c-17.3,15.3-26.9,35.8-34.6,57.1c-7.4,20.4-12.2,41.6-15.4,63.2 c-3.5,23.9-6.7,47.7-10.1,71.5c-1.5,10.4-2.5,20.9-4.7,31.2c-3.6,17.2-7.3,34.3-12.1,51.1c-4.1,14.6-9.2,28.8-14.8,42.9 c-5.4,13.8-12.1,26.9-18,40.5c-0.6,1.2-0.3,2.9-0.5,4.4c1.6,0.2,3.6,0.9,4.9,0.2c5-2.7,10.4-5,14.5-8.7 c27.3-24.7,46.1-54.9,54.2-91.4c5.2-23.1,9.1-46.5,12.9-70c2.5-15.6,3.7-31.3,5.7-47c1.7-14.3,3.2-28.5,5.5-42.6 c2.3-13.9,5.7-27.7,8.6-41.4c2.8-13.2,6.8-25.9,13.9-37.4c11.6-18.6,30.3-22.9,43.6-2.9c4.9,7.3,8.1,16.2,10.4,24.8 c3.2,11.6,5.4,23.6,7.2,35.6c4.2,27.2,8.7,54.5,11.6,81.8c3.1,28.8,4.5,57.9,6.6,86.8c1.1,15.2,2.2,30.3,3.2,45.6 c1.2,18.1,2.5,36.1,3.7,54.3c0.3,4.9,0.2,6.7-1.9,7.4H734.5v4.9c-0.1,0.6-0.2,1.2-0.1,2c0.1,2.8,0.1,5.6,0.1,8.5v9.4 c0,1.3,0,2.7,0,4c0,0.3,0,0.6,0,0.9v6.6L955,625.7L955,625.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    ${({ theme }) => theme.laptop`
       width: 100px;
      height: 57px;

    `}
    ${({ theme }) => theme.mobile`
       display: none;
    `}
  `;

  const MNaviBox = styled.div`
    height: 30px;
    display: none;
    ${({ theme }) => theme.mobile`
      display: flex;
    `}
  `;

  const MNaviBtn = styled.div`
    font-size: 25px;
    ${({ theme }) => theme.mobile`
      display: block;
    `}
  `;

  const MLogo = styled.div`
    width: 55px;
    height: 38px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='레이어_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1057.3 711.5' style='enable-background:new 0 0 1057.3 711.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%2322223B;%7D%0A%3C/style%3E%3Cg%3E%3Crect x='375' y='217' class='st0' width='27.3' height='479.3'/%3E%3Cpolygon class='st0' points='506.2,589.6 506.2,217 472,217 472,624 472.3,624 472.3,624.3 588,624.3 588,589.6 '/%3E%3Cpolygon class='st0' points='674.9,458.3 661.3,458.3 661.3,217.1 626,217.1 626,458.3 528.1,458.3 528.1,494.5 626,494.5 626,696.4 661.3,696.4 661.3,494.5 674.9,494.5 '/%3E%3Cg%3E%3Cpath class='st0' d='M386,21.4c-16.8,25.2-31,52-40,81.1c-6.5,20.8-11.8,42.1-15.8,63.6c-5.1,27.8-9,55.8-12.3,83.9 c-3,25.4-4.6,50.9-6.6,76.3c-1,12.1-1.1,24.3-2,36.4c-1.2,14.6-3,29.2-4.4,43.8c-1.1,12.3-1.9,24.5-3.2,36.8 c-2.3,22.2-4.8,44.3-7.4,66.5c-2.8,22.6-5.1,45.4-13.6,66.9c-4.1,10.4-9.8,19.6-19.3,25.9c-7,4.6-16.5,4.6-21.9-1.6 c-5.1-5.9-9.6-12.5-13.1-19.6c-10.7-21.6-14.6-45.3-19.1-68.8c-4.6-24.5-7.2-49.5-10.9-74.2c-3.7-24.5-7.3-49.2-11.7-73.5 c-2.7-14.6-5.7-29.3-10.8-43.1c-8.3-22.3-21.6-41.7-39.3-57.4c-7.5-6.6-16.1-12.1-24.2-18.1c-0.7,0.6-1.5,1.1-2.2,1.7 c0.3,1.6,0.3,3.3,1.1,4.6c7.7,14,16.1,27.7,23.1,42.1c5.6,11.4,10.1,23.5,13.7,35.8c3.4,11.6,5.3,23.6,7.4,35.6 c4.1,22.1,8.3,44.1,11.8,66.3c2.6,16.2,3.9,32.8,6.6,49c3.7,21.7,7.4,43.5,12.9,64.9c6.8,26.9,21.8,48.9,42.8,66.5 c18.4,15.3,39.6,14.5,54.7-2.2c12.4-13.6,20.5-30.1,26.7-47.3c5.7-15.6,10.1-31.7,13.7-47.9c4.6-21.6,8.4-43.4,11.5-65.2 c2.7-18.8,4-37.9,5.6-56.8c2.3-26.4,4.5-52.7,6.6-79.1c1.3-17,2-34,3.2-51c2-29.5,4.2-58.9,6.4-88.4c0.6-8.7,0.9-17.5,2.7-25.9 c4.4-20.5,9.2-41,14.5-61.3c4.9-18.9,10.5-37.6,15.7-56.5c1.2-4.4,2.1-8.8,3.2-13.3c-0.5-0.3-1-0.6-1.5-0.9 C388.8,18.6,387,19.7,386,21.4z'/%3E%3Cpath class='st0' d='M955,625.7l-2.9-36.2h-0.4c-1.5-17.1-3-34.2-4.3-51.3c-0.7-9.8-0.5-19.6-1.2-29.4 c-1.6-22.2-3.3-44.4-5.3-66.6c-2.2-25-4.1-49.9-7.4-74.7c-3.1-24-7.7-47.8-14.7-71.1c-5.7-18.8-13.3-36.7-24.1-52.9 c-8.9-13.3-19.7-23.2-37.1-23.5c-13.6-0.2-25,3.7-35,12.6c-17.3,15.3-26.9,35.8-34.6,57.1c-7.4,20.4-12.2,41.6-15.4,63.2 c-3.5,23.9-6.7,47.7-10.1,71.5c-1.5,10.4-2.5,20.9-4.7,31.2c-3.6,17.2-7.3,34.3-12.1,51.1c-4.1,14.6-9.2,28.8-14.8,42.9 c-5.4,13.8-12.1,26.9-18,40.5c-0.6,1.2-0.3,2.9-0.5,4.4c1.6,0.2,3.6,0.9,4.9,0.2c5-2.7,10.4-5,14.5-8.7 c27.3-24.7,46.1-54.9,54.2-91.4c5.2-23.1,9.1-46.5,12.9-70c2.5-15.6,3.7-31.3,5.7-47c1.7-14.3,3.2-28.5,5.5-42.6 c2.3-13.9,5.7-27.7,8.6-41.4c2.8-13.2,6.8-25.9,13.9-37.4c11.6-18.6,30.3-22.9,43.6-2.9c4.9,7.3,8.1,16.2,10.4,24.8 c3.2,11.6,5.4,23.6,7.2,35.6c4.2,27.2,8.7,54.5,11.6,81.8c3.1,28.8,4.5,57.9,6.6,86.8c1.1,15.2,2.2,30.3,3.2,45.6 c1.2,18.1,2.5,36.1,3.7,54.3c0.3,4.9,0.2,6.7-1.9,7.4H734.5v4.9c-0.1,0.6-0.2,1.2-0.1,2c0.1,2.8,0.1,5.6,0.1,8.5v9.4 c0,1.3,0,2.7,0,4c0,0.3,0,0.6,0,0.9v6.6L955,625.7L955,625.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    display: none;
    float: left;
    top: 4px;
    left: calc(100% - 210px);
    position: absolute;
    ${({ theme }) => theme.mobile`
     display: block;
    `}
  `;

  const MNaviModal = styled.div`
    position: absolute;
    float: left;
    display: flex;
    align-items: center;
    top: 0px;
    width: 100%;
    height: 100vh;
    z-index: 2;
    background-color: ${(props) => props.theme.lightBeige};
    background: linear-gradient(
      #f2e9e4ab,
      ${(props) => props.theme.lightBeige},
      ${(props) => props.theme.lightBeige},
      ${(props) => props.theme.lightBeige}
    );
    transition: left 0.5s ease 0s;
    left: 0;
    &._closed {
      left: -100%;
    }
  `;

  const MNaviList = styled.div`
    width: 100%;
    margin: 0px 0px 75px 40px;
  `;
  const MNaviItem = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.darkestSpace};
    padding: 10px 0px;
    &._home {
      margin-bottom: 30px;
      text-align: end;
      padding-right: 30px;
    }
  `;

  const MMenuClose = styled.div`
    position: absolute;
    top: 5px;
    left: 7px;
    font-size: 29px;
    background-color: #f2e9e4;
  `;

  return (
    <VNavi>
      <MNaviModal className="_closed" ref={modalRef}>
        <MMenuClose
          onClick={() => {
            modalRef.current.classList.toggle("_closed");
          }}
        >
          <i className="ri-close-line" />
        </MMenuClose>
        <MNaviList>
          <MNaviItem className="_home">
            <Link href="/">Home</Link>
          </MNaviItem>
          {NaviList.map((item) => {
            return (
              <MNaviItem>
                <Link href={item.href}>{item.name}</Link>
              </MNaviItem>
            );
          })}
        </MNaviList>
      </MNaviModal>
      <MNaviBox>
        <MNaviBtn
          onClick={() => {
            modalRef.current.classList.toggle("_closed");
          }}
        >
          <i className="ri-menu-5-line" />
        </MNaviBtn>
        <a href="/">
          <MLogo />
        </a>
      </MNaviBox>
      <a href="/">
        <VLogo />
      </a>
      <NaviBox>
        {NaviList.map((item) => {
          return (
            <NaviItem className={`_${item.width}`}>
              <Link href={item.href}>{item.name}</Link>
            </NaviItem>
          );
        })}
      </NaviBox>
    </VNavi>
  );
};

export default Navigator;
