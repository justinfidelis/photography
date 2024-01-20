import React, { useState } from "react";

const Image = ({path}) => {
  return <img className="image" src={process.env.PUBLIC_URL + path} />;
}

export default Image;
