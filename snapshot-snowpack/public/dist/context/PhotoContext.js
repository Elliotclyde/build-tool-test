import React, {createContext, useState} from "../../_snowpack/pkg/react";
import axios from "../../_snowpack/pkg/axios";
import {apiKey} from "../api/config.js";
export const PhotoContext = createContext();
const PhotoContextProvider = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then((response) => {
      setImages(response.data.photos.photo);
      setLoading(false);
    }).catch((error) => {
      console.log("Encountered an error with fetching and parsing data", error);
    });
  };
  return /* @__PURE__ */ React.createElement(PhotoContext.Provider, {
    value: {images, loading, runSearch}
  }, props.children);
};
export default PhotoContextProvider;
