// 创建节点，将vnode创建为dom，不进行插入
export default function createElement(vnode) {
    let domNode = document.createElement(vnode.sel)
    // 判断内部是文本还是子节点
    if (vnode.text !== "" && (vnode.children === undefined || vnode.children.length === 0)) {
        // 单纯的文本时
        domNode.innerText = vnode.text
    } else if (Array.isArray(vnode.children) && vnode.constructor.length > 0) {
        // 带有子节点时
        vnode.children.forEach((item) => {
            let chDom = createElement(item)
            domNode.appendChild(chDom)
        })
    }
    // 补充elm属性
    vnode.elm = domNode
    return vnode.elm
}
