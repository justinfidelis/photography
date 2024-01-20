import React from "react";
import Gallery from "../components/Gallery";
import index from "../metadata.json";

const Film = () => {
  const data = index.film;
  const imageList = Object.keys(data.images);

  return (
    <Gallery
      title={data.header}
      imageFolder={data.path}
      imageList={imageList}
    />
  );
}

export default Film;
