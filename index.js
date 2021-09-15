// * virtual node example
var VNode = require("virtual-dom").VNode
var createElement = require("virtual-dom").create
var VText = require("virtual-dom/vnode/vtext")
var h = require('virtual-dom/h')


// var Hook = function(){}
// Hook.prototype.hook = function(elem, key, previousValue) {
//   console.log("Hello from " + elem.id + "!\nMy key was: " + key)
// }

// var tagName = "div"
// var style = "width: 100px; height: 100px; background-color: #FF0000;"
// var attributes = {"class": "red box", style: style }
// var key = "my-unique-red-box"
// var namespace = "http://www.w3.org/1999/xhtml"
// var properties = {
//   attributes: attributes,
//   id: "my-red-box",
//   "a hook can have any property key": new Hook()
// }.
// var childNode = new VNode("div", {id: "red-box-child"})

// var RedBoxNode = new VNode(tagName, properties, [childNode], key, namespace)
// var RedBoxElem = createElement(RedBoxNode)
// document.body.appendChild(RedBoxElem);


// * create a custom node 

// var RedBoxElem = createElement(new VNode('div', { style: { width: "100px", height: "100px", backgroundColor :  "#FF0000"}}));
// document.body.appendChild(RedBoxElem);  


// * for create text

// var createElement = require("virtual-dom").create
// var myText = new VText("Hello, World")
// Pass our VText as a child of our VNode
// var myNode = new VNode("div", { id: "my-node" }, [myText])

// var myElem = createElement(myNode)
// document.body.appendChild(myElem)

// * virtual-hyperscript

// 

// var tree = h('div.foo#some-id', [
//     h('span', 'some text'),
//     h('input', { type: 'text', value: 'foo' })
// ]);

// console.log(tree);

// * hooks
// var Hook = function(){}
// Hook.prototype.hook = function(node, propertyName, previousValue) { 
//   console.log("Hello, World")
// }
// createElement(h('div', { "my-hook": new Hook() }))

