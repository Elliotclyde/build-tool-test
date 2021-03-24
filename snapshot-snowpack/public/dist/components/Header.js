import React from "../../_snowpack/pkg/react";
import Form from "./Form.js";
import Navigation from "./Navigation.js";
const Header = ({history, handleSubmit}) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "SnapShot"), /* @__PURE__ */ React.createElement(Form, {
    history,
    handleSubmit
  }), /* @__PURE__ */ React.createElement(Navigation, null));
};
export default Header;
