import React from "react";
import Navigator from "./Navigator";
import Footer from "./Footer";
import RightButton from "./RightButton";

const AppLayout = ({ children }) => {
  return (
    <div className="v_layout">
      <div className="v_box">
        <Navigator />
      </div>
      <div className="v_content">{children}</div>
      <Footer />
      <RightButton />
    </div>
  );
};

export default AppLayout;
