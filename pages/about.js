import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>원장 인사말 | Venuss</title>
      </Head>
      <AppLayout>
        <div className="test">HELLO ABOUT!!!!!!!!!!</div>
      </AppLayout>
    </>
  );
};

export default About;
