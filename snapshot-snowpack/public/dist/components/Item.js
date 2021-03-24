import React from "../../_snowpack/pkg/react";
import Container from "./Container.js";
const Item = ({searchTerm}) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, searchTerm, " Pictures"), /* @__PURE__ */ React.createElement(Container, {
    searchTerm
  }));
};
export default Item;
