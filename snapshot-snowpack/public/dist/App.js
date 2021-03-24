import React, {Component} from "../_snowpack/pkg/react";
import PhotoContextProvider from "./context/PhotoContext.js";
import {HashRouter, Route, Switch, Redirect} from "../_snowpack/pkg/react-router-dom";
import Header from "./components/Header.js";
import Item from "./components/Item.js";
import Search from "./components/Search.js";
import NotFound from "./components/NotFound.js";
class App extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
  render() {
    return /* @__PURE__ */ React.createElement(PhotoContextProvider, null, /* @__PURE__ */ React.createElement(HashRouter, {
      basename: "/SnapScout"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "container"
    }, /* @__PURE__ */ React.createElement(Route, {
      render: (props) => /* @__PURE__ */ React.createElement(Header, {
        handleSubmit: this.handleSubmit,
        history: props.history
      })
    }), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
      exact: true,
      path: "/",
      render: () => /* @__PURE__ */ React.createElement(Redirect, {
        to: "/mountain"
      })
    }), /* @__PURE__ */ React.createElement(Route, {
      path: "/mountain",
      render: () => /* @__PURE__ */ React.createElement(Item, {
        searchTerm: "mountain"
      })
    }), /* @__PURE__ */ React.createElement(Route, {
      path: "/beach",
      render: () => /* @__PURE__ */ React.createElement(Item, {
        searchTerm: "beach"
      })
    }), /* @__PURE__ */ React.createElement(Route, {
      path: "/bird",
      render: () => /* @__PURE__ */ React.createElement(Item, {
        searchTerm: "bird"
      })
    }), /* @__PURE__ */ React.createElement(Route, {
      path: "/food",
      render: () => /* @__PURE__ */ React.createElement(Item, {
        searchTerm: "food"
      })
    }), /* @__PURE__ */ React.createElement(Route, {
      path: "/search/:searchInput",
      render: (props) => /* @__PURE__ */ React.createElement(Search, {
        searchTerm: props.match.params.searchInput
      })
    }), /* @__PURE__ */ React.createElement(Route, {
      component: NotFound
    })))));
  }
}
export default App;
