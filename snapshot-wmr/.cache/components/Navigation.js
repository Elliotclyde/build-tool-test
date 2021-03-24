import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/react';
import {React} from '/@npm/es-react';
import  { NavLink } from '../router-shim/react-router-dom.js';

const Navigation = () => {
  return (
    $$html`<nav className="main-nav">
      <ul>
        <li><${NavLink} to="/mountain">Mountain<//></li>
        <li><${NavLink} to="/beach">Beaches<//></li>
        <li><${NavLink} to="/bird">Birds<//></li>
        <li><${NavLink} to="/food">Food<//></li>
      </ul>
    </nav>`
  );
}

export default Navigation;


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
