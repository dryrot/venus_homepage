// import "../styles/globals.css";
import React from "react";
import "./page.scss";
import { ThemeProvider } from "styled-components";
import * as theme from "../styled-component/theme";
import "remixicon/fonts/remixicon.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
