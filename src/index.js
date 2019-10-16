import React from 'react'
import ReactDOM from 'react-dom';
import HotManager from './HotManager'
import App from './App'

const root = document.querySelector('#root');

let el = ReactDOM.render(<App/>, root);

//#if _DEBUG
if (module) {
    module.hot.accept(() => {
        let App = require(HotManager.getRegistered()).default;
        el = ReactDOM.render(<App/>, root);
    });
}
//#endif
