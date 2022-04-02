import h from './h'
import patch from "./patch";

const changeBtn = document.querySelector("#change")
const container = document.querySelector("#container")
const vnode = h('ul', {key: "ul"},
    [
        h('li', {key: '1'}, 'F_picacho'),
        h('li', {key: '2'}, '王花花'),
        h('li', {key: '3'}, '小明'),
        h('ul', {key: '4'}, [
            h('li', {key: 'a'}, '小火龙'),
            h('li', {key: 'b'}, '杰尼龟'),
            h('li', {key: 'c'}, '妙蛙种子'),
        ])
    ]
)
const vnode2 = h('h1', {key:"a"}, 'hello world')
console.log(vnode)
patch(container, vnode)

changeBtn.onclick = ()=>{
    console.log(vnode)
    patch(vnode, vnode2)
}