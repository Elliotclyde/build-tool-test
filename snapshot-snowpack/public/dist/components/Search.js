import React from "../../_snowpack/pkg/react";
import Container from "./Container.js";
const Search = ({searchTerm}) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, searchTerm, " Images"), /* @__PURE__ */ React.createElement(Container, {
    searchTerm
  }));
};
export default Search;
