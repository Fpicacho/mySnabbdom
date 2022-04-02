import vnode from "./vnode";

export default function (sel, data, c) {
    // 相较于原版省去了重载的过程以达到精炼逻辑的目的
    if (arguments.length !== 3) {
        throw new Error('sry 乞丐版不支持重载，必须为三个参数！')
    }
    /*
    重载参数c 判断以下三种情况做出不同的反应
        h('p',{},'嘿嘿～')
        h('p',{},[h('p',{},'嘿嘿～'),h('p',{},'嘿嘿～')])
        h('p',{},h('p',{},'嘿嘿～'))
     */
    if (typeof c === "string" || typeof c === "number") {
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        let children = []
        c.forEach((item) => {
            // 注意h函数被调用时会直接返回对象 所以这里直接判断数组项是否为对象且是否存在sel属性即可完成判断
            if (!(typeof item === "object" && item.hasOwnProperty('sel'))) {
                throw new Error('传入的数组参数中其中的某一项不为h函数！')
            }
            children.push(item)
        })
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c === "object" && c.hasOwnProperty('sel')) {
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error('传入的参数3错误！')
    }
}