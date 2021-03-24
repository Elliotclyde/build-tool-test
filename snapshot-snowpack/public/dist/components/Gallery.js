import React from "../../_snowpack/pkg/react";
import NoImages from "./NoImages.js";
import Image from "./Image.js";
const Gallery = (props) => {
  const results = props.data;
  let images;
  let noImages;
  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return /* @__PURE__ */ React.createElement(Image, {
        url,
        key: id,
        alt: title
      });
    });
  } else {
    noImages = /* @__PURE__ */ React.createElement(NoImages, null);
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, images), noImages);
};
export default Gallery;
