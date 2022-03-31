import h from './h'

const vnode = h('div', {}, [
    h('p', {}, '哈哈'),
    h('p', {}, h("p", {}, "呜呜")),
])
console.log(vnode)