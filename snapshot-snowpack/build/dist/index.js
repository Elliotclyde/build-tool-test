import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import "./index.css.proxy.js";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
serviceWorker.unregister();
