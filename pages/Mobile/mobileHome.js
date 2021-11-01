import React, { useEffect } from "react";
import Head from "next/head";
import MAppLayout from "../../components/MAppLayout";
import styled from "styled-components";
import VenusTitle from "../../components/VenusTitle";
import Map2 from "../../components/Map_v2";
import ReviewPreview from "../../components/ReviewPreview";

const MobileHome = () => {
  return (
    <>
      <Head>
        <title>초기화면 | Venuss</title>
      </Head>
      <MAppLayout>
        <div>mobile init</div>
      </MAppLayout>
    </>
  );
};

export default MobileHome;
