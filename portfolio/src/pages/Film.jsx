import React from "react";
import Gallery from "../components/Gallery";

const Film = () => {
  const images = require.context("../../images/Film", true);
  const imageList = images.keys().map((image) => images(image));

  return <Gallery title="Film" imageList={imageList} />;
}

export default Film;
