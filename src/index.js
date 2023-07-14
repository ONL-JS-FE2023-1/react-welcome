import React from "react";
import ReactDOM from "react-dom";

import Counter from './components/Counter.js';
// import MyMath from './components/Math.js'; -> експорт по дефолту
import * as MyMath from './components/Math.js'; // -> іменований експорт

MyMath.superFunc();

// const component = React.createElement(Counter);
// const component = <Counter />

const root = document.querySelector('#root');
ReactDOM.render(<Counter />, root);