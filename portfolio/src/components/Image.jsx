import React, { useState } from "react";

const Image = ({data}) => {
  return (
    <img className="image" src={data}/>
  );
}

export default Image;
