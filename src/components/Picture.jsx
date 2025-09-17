import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Pic = ({ img, className, alt }) => {
  return (
    <LazyLoadImage
      src={img ? img : ""}
      alt={alt ? alt : "demo-pic"}
      effect="blur"
      className={className ? `${className}` : ""}
    />
  );
};

export default Pic;
