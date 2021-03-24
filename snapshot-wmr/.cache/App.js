import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/react';
import { React, Component } from "/@npm/es-react";
import PhotoContextProvider from "./context/PhotoContext.js";
import { HashRouter, Route, Switch, Redirect } from "./router-shim/react-router-dom.js";
import Header from "./components/Header.js";
import Item from "./components/Item.js";
import Search from "./components/Search.js";
import NotFound from "./components/NotFound.js";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      $$html`<${PhotoContextProvider}>
        <${HashRouter} basename="/SnapScout">
          <div className="container">
            <${Route}
              render=${props => (
                $$html`<${Header}
                  handleSubmit=${this.handleSubmit}
                  history=${props.history}
                />`
              )}
            />
            <${Switch}>
              <${Route}
                exact
                path="/"
                render=${() => $$html`<${Redirect} to="/mountain" />`}
              />

              <${Route}
                path="/mountain"
                render=${() => $$html`<${Item} searchTerm="mountain" />`}
              />
              <${Route} path="/beach" render=${() => $$html`<${Item} searchTerm="beach" />`} />
              <${Route} path="/bird" render=${() => $$html`<${Item} searchTerm="bird" />`} />
              <${Route} path="/food" render=${() => $$html`<${Item} searchTerm="food" />`} />
              <${Route}
                path="/search/:searchInput"
                render=${props => (
                  $$html`<${Search} searchTerm=${props.match.params.searchInput} />`
                )}
              />
              <${Route} component=${NotFound} />
            <//>
          </div>
        <//>
      <//>`
    );
  }
}

export default App;


import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
