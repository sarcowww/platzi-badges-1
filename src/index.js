import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import "./global.css"
import App from './components/App'

const container = document.getElementById('app');
// ReactDOM.render(__que__, __donde__)
// ReactDOM.render(<Badge firstName="Lilly" lastName="Feliz" avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' jobTitle='Kickass Senior Dev' twitter='richardKaufman'/>, container);
ReactDOM.render(<App />, container);