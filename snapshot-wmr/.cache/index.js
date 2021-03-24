import { html as $$html } from '/@npm/htm/react';
import {React,ReactDOM} from '/@npm/es-react';
import './index.css.js';
import * as serviceWorker from './serviceWorker.js';
import App from "./App.js";

ReactDOM.render($$html`<${App} />`, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { createHotContext as $w_h$ } from '/_wmr.js'; $w_h$(import.meta.url);