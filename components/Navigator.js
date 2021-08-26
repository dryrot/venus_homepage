import React from "react";
import Link from "next/link";

const Navigator = () => {
  return (
    <div className="v_navi" href="/">
      <a href="/">
        <div className="v_logo" />
      </a>
      <div className="navi_box">
        <div className="navi_item _20">
          <Link href="/about">원장 인사말</Link>
        </div>
        <div className="navi_item _20">
          <Link href="/simmi">앞니 심미보철</Link>
        </div>
        <div className="navi_item _20">
          <Link href="/itmom">앞니 잇몸치료</Link>
        </div>
        <div className="navi_item _12">
          <Link href="/implant">임플란트</Link>
        </div>
        <div className="navi_item _12">
          <Link href="/gyojung">앞니교정</Link>
        </div>
        <div className="navi_item _12">
          <Link href="/review">치료후기</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
