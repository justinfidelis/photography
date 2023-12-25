import React from "react";
import Gallery from "../components/Gallery";

const Singapore = () => {
  const images = require.context("../../images/Singapore", true);
  const imageList = images.keys().map((image) => images(image));
  console.log(imageList);

  const galleryData = {
    title: "Singapore",
    imageList: imageList
  }

  return (
    <Gallery data={galleryData} />
  );
}

export default Singapore;
