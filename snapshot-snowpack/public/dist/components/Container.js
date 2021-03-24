import React, {useContext, useEffect} from "../../_snowpack/pkg/react";
import {PhotoContext} from "../context/PhotoContext.js";
import Gallery from "./Gallery.js";
import Loader from "./Loader.js";
const Container = ({searchTerm}) => {
  const {images, loading, runSearch} = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "photo-container"
  }, loading ? /* @__PURE__ */ React.createElement(Loader, null) : /* @__PURE__ */ React.createElement(Gallery, {
    data: images
  }));
};
export default Container;
