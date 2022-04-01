import h from './h'
import patch from "./patch";

const container = document.querySelector("#container")
const vnode = h('h1', {key:"a"}, 'hello world')
patch(container, vnode)