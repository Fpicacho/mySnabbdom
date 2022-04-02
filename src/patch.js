import vnode from "./vnode";
import createElement from "./createElement";

export default function (oldVnode, newVnode) {
    // 判断oldVnode是dom节点还是虚拟节点（vnode）
    if (oldVnode.sel === "" || oldVnode.sel === undefined) {
        // 传入节点为dom节点时
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
    }
    // 判断新老虚拟节点是否为同一个虚拟节点
    if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
        console.log("准备进行diff")
        console.log(oldVnode, newVnode)
    } else {
        console.log("暴力更新")
        createElement(newVnode, oldVnode.elm)
    }
};