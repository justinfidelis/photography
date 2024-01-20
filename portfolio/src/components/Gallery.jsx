import React, {useEffect, useState} from "react";

import Image from "./Image";

const Gallery = ({title, imageFolder, imageList}) => {
  const [displaySlides, setDisplaySlides] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const image_path = "/images/" + imageFolder + "/";

  const [columns, setColumns] = useState(
    Math.max(1, ~~((window.innerWidth - 300) / 300))
  );

  useEffect(() => {
    const handleResize = () => {
        setColumns(Math.max(1, ~~((window.innerWidth - 300) / 300)));
    }

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }

  }, []);

  return (
    <div>
      <div className="gallery">
        {Array.from(Array(columns).keys()).map((column) => (
          <div className="gallery-column" key={"column" + column}>
            {imageList
              .filter((image, image_index) => image_index % columns === column)
              .map((image) => (
                <Image path={image_path + image} key={image} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
