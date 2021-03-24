import React from "../../_snowpack/pkg/react";
import {NavLink} from "../../_snowpack/pkg/react-router-dom";
const Navigation = () => {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "main-nav"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/mountain"
  }, "Mountain")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/beach"
  }, "Beaches")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/bird"
  }, "Birds")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/food"
  }, "Food"))));
};
export default Navigation;
