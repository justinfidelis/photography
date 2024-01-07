import React from "react";
import Gallery from "../components/Gallery";

const Singapore = () => {
  const images = require.context("../../images/Singapore", true);
  const imageList = images.keys().map((image) => images(image));

  return <Gallery title="Singapore" imageList={imageList} />;
}

export default Singapore;
