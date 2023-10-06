import { createElement, render } from './mini';

const elementProps = { id: 'element-id' };
const children = 'Hello world!';
const elementType = 'h1';

const component = createElement(elementType, elementProps, children);

/**
 Todo: Check the devtool console and copy/paste the output of the log object below

 // 'what is component?' Object
 
 */
console.log('what is component?', component);

/**
 Todo: Explore `createElement` and explain what this function does

    //create a Dom element with 3 parameters : type of the element, the attributs and any childs of attributs

 */

/**
 Todo: check the file index.html and get the id of the app div container
 */
const containerId = 'app';
const container = document.getElementById(containerId);

/**
 Todo: Check the implementation of render.
 Use render to render component in the html dom
 */
render(component, container);
