import React from "react";
import Gallery from "../components/Gallery";
import index from "../metadata.json";

const Travel = () => {
  const data = index.travel;
  const imageList = Object.keys(data.images);

  return (
    <Gallery
      title={data.header}
      imageFolder={data.path}
      imageList={imageList}
    />
  );
}

export default Travel;
