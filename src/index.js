import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const elems = document.getElementsByTagName('component');
const promises = [];
for (let item of elems) {
    if (item.hasAttribute('id')) {
        promises.push(importRender(item.getAttribute('id')));
    }
}

// runs when all components are rendered
Promise.all(promises).then((values) => {
    console.log("component rendering complete");
});

/**
 * Imports the component from filesystem, renders it and resolves the promise
 * @param comp
 * @returns {Promise<unknown>}
 */
function importRender(comp) {
    return new Promise((resolve, reject) => {
        import("./components/" + comp).then((module) => {
            const component = React.createElement(module.default, {}, {});
            const item = document.getElementById(comp);
            return ReactDOM.render(component, item, function() {
                resolve();
            });
        });
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
