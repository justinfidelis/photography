import React from "react";
import Gallery from "../components/Gallery";
import index from "../metadata.json";

const Singapore = () => {
  const data = index.singapore;
  const imageList = Object.keys(data.images);

  return (
    <Gallery
      title={data.header}
      imageFolder={data.path}
      imageList={imageList}
    />
  );
};

export default Singapore;
