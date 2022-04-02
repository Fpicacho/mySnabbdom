// 创建节点，将vnode创建为dom，不进行插入
export default function (vnode, picot) {
    let domNode = document.createElement(vnode.sel)
    // 判断内部是文本还是子节点
    if (vnode.text !== "" && (vnode.children === undefined || vnode.children.length === 0)) {
        // 单纯的文本时
        domNode.innerText = vnode.text
        vnode.elm = domNode
    } else if (Array.isArray(vnode.children) && vnode.constructor.length > 0) {
        // 带有子节点时

    }
    return vnode.elm
}
