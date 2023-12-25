import React, { useState } from "react";

const Image = ({data}) => {
  return (
    <img className="Image" src={data}/>
  );
}

export default Image;
