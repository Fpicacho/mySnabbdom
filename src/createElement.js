// 创建节点，将vnode创建为dom，插入到picot元素之前
export default function (vnode, picot) {
    let domNode = document.createElement(vnode.sel)
    // 判断内部是文本还是子节点
    if (vnode.text !== "" && (vnode.children === undefined || vnode.children.length === 0)) {
        // 单纯的文本时
        domNode.innerText = vnode.text
        // 将孤儿节点上树
        picot.parentNode.insertBefore(domNode, picot)
    } else if (Array.isArray(vnode.children) && vnode.constructor.length > 0) {
        // 带有子节点时

    }
}
