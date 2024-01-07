import React from "react";
import Gallery from "../components/Gallery";

const Travel = () => {
  const images = require.context("../../images/Travel", true);
  const imageList = images.keys().map((image) => images(image));

  return <Gallery title="Travel" imageList={imageList} />;
}

export default Travel;
