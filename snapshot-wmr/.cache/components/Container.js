import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/react';
import{ React,  useContext, useEffect } from "/@npm/es-react";
import  {PhotoContext}  from "../context/PhotoContext.js";
import Gallery from "./Gallery.js";
import Loader from "./Loader.js";
 

const Container = ({ searchTerm }) => {
   const { images, loading, runSearch } = useContext(PhotoContext);
   
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    $$html`<div className="photo-container">
      ${loading ? $$html`<${Loader} />` : $$html`<${Gallery} data=${images} />`}
    </div>`
  );
};

export default Container;


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
