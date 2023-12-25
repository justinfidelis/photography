import React from "react";
import Gallery from "../components/Gallery";

const Film = () => {
  const images = require.context("../../images/Film", true);
  const imageList = images.keys().map((image) => images(image));

  const galleryData = {
    title: "Film",
    imageList: imageList,
  };

  return (
    <Gallery data={galleryData} />
  );
}

export default Film;
