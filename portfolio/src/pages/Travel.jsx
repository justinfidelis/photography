import React from "react";
import Gallery from "../components/Gallery";

const Travel = () => {
  const images = require.context("../../images/Travel", true);
  const imageList = images.keys().map((image) => images(image));

  const galleryData = {
    title: "Travel",
    imageList: imageList,
  };

  return (
    <Gallery data={galleryData} />
  );
}

export default Travel;
