(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{437:function(t,s,n){"use strict";n.r(s);var a=n(9),o=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("调用setState，最终会执行对应组件updateComponent")]),t._v(" "),n("h2",{attrs:{id:"自定义组件更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件更新","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义组件更新")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("ReactCompositeComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("updateComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    transaction"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prevParentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// pre VNode")]),t._v("\n    nextParentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// next VNode")]),t._v("\n    prevUnmaskedContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nextUnmaskedContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inst "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prevProps "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" prevParentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nextProps "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nextParentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// componentWillReceiveProps 生命周期")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("willReceive "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentWillReceiveProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("componentWillReceiveProps")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nextState "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_processPendingState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 对在pending队列中的state，进行merge state，拿到最新state值。")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" shouldUpdate "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 是否要更新组件，默认是true")]),t._v("\n\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shouldComponentUpdate"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果组件里有定义")]),t._v("\n          shouldUpdate "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("shouldComponentUpdate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            nextContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果是纯组件（PureComponent），浅比较")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_compositeType "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" CompositeTypes"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PureClass"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          shouldUpdate "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token function"}},[t._v("shallowEqual")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n            "),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token function"}},[t._v("shallowEqual")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 是否更新组件，这里常是用户优化的地方，控制什么时候React组件什么时候更新。")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 不设置就是true，子组件都会VDOM比较一遍（意味着子组件没变时，也会去比较（多余的操作，所以可以在此优化性能），不过浪费的性能是VDOM比较，而不是会改动DOM）。")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shouldUpdate"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// _performComponentUpdate --\x3e _updateRenderedComponent")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_performComponentUpdate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        nextParentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        nextContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        transaction"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        nextUnmaskedContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 合并state，拿到最新值")]),t._v("\n_processPendingState"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inst "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" queue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_pendingStateQueue"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" replace "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_pendingReplaceState"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_pendingReplaceState "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_pendingStateQueue "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// pending队列中只有0个或1个处理")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("queue"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("replace "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" queue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" queue"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 多个处理")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nextState "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("assign")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" queue"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" replace "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" queue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" partial "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("assign")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" partial "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'function'")]),t._v("\n          "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" partial"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("call")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" props"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" partial"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 更新当前组件")]),t._v("\n_performComponentUpdate"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    nextElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    nextContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    transaction"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    unmaskedContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" inst "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_instance"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// componentWillUpdate生命周期")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("componentWillUpdate"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        inst"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("componentWillUpdate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextProps"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// // 如何更新当前组件呢")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_updateRenderedComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transaction"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unmaskedContext"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("_updateRenderedComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transaction"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prevComponentInstance "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderedComponent"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// this._renderedComponent = child;")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prevRenderedElement "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" prevComponentInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_currentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// pre VNode")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nextRenderedElement "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_renderValidatedComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// next VNode")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 1. 如果前后两个VNode的type和key相同，意味着有相同的数据结构。由于是自定义组件，不需要更新DOM或props等操作，所以递归子元素即可。")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 2. 如果type和key有一项不同，不同数据结构，重新渲染instantiateReactComponent + mountComponent")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("shouldUpdateReactComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevRenderedElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextRenderedElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 相同数据结构，递归更新子组件")]),t._v("\n      ReactReconciler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("receiveComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        prevComponentInstance\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 不同数据结构，卸载再挂载。")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 卸载所有子组件")]),t._v("\n      ReactReconciler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("unmountComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevComponentInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 再挂载")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" child "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("_instantiateReactComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextRenderedElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nextMarkup "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReactReconciler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("mountComponent")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h2",{attrs:{id:"dom组件更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom组件更新","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM组件更新")]),t._v(" "),n("h2",{attrs:{id:"diff算法比较children"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#diff算法比较children","aria-hidden":"true"}},[t._v("#")]),t._v(" diff算法比较Children")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// diff 算法：ReactMultiChild.js")]),t._v("\n\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ReactDefaultBatchingStrategy "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isBatchingUpdates"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  batchedUpdates"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" alreadyBatchingUpdates "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReactDefaultBatchingStrategy"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isBatchingUpdates"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    ReactDefaultBatchingStrategy"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isBatchingUpdates "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// The code is written this way to avoid extra allocations")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alreadyBatchingUpdates"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("callback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" transaction"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("perform")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("NESTED_UPDATES")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  initialize"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirtyComponentsLength "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dirtyComponents"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  close"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirtyComponentsLength "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" dirtyComponents"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// Additional updates were enqueued by componentDidUpdate handlers or")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// these new updates so that if A's componentDidUpdate calls setState on")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// B, B will update before the callback A's updater provided when calling")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// setState.")]),t._v("\n      dirtyComponents"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("splice")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirtyComponentsLength"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("flushBatchedUpdates")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dirtyComponents"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("事务流程\n"),n("ul",[n("li",[t._v("执行流很像设计模式中的装饰者模式")]),t._v(" "),n("li",[t._v("callback为目标函数，before装饰initialize，after装饰close")])])])]),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("p",[t._v("https://zhuanlan.zhihu.com/p/35226897")])])},[],!1,null,null,null);o.options.__file="react-code-component-update.md";s.default=o.exports}}]);