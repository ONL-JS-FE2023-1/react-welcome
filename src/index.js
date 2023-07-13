import React from "react";
import ReactDOM from "react-dom";

import Counter from './components/Counter.js'

const component = React.createElement(Counter);

const root = document.querySelector('#root');
ReactDOM.render(component, root);