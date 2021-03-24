import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/react';
import {React} from "/@npm/es-react";
import Container from "./Container.js";

const Search = ({ searchTerm }) => {
  return (
    $$html`<div>
      <h2>${searchTerm} Images</h2>
      <${Container} searchTerm=${searchTerm} />
    </div>`
  );
};

export default Search;


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