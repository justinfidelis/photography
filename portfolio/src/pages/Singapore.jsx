import React, { useState } from "react";

import Gallery from "../components/Gallery";

const Singapore = () => {
  const images = require.context("../../images/Singapore", true);
  const imageList = images.keys().map((image) => images(image));
  console.log(images);
  console.log(imageList);

  return (
    <div className="Content">
      <Gallery data={imageList} />
    </div>
  );
}

export default Singapore;
