import {React,ReactDOM} from 'es-react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
