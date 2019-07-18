(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{467:function(t,s,a){"use strict";a.r(s);var n=a(9),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript事件循环","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript事件循环")]),t._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("h4",{attrs:{id:"单线程、同步、异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程、同步、异步","aria-hidden":"true"}},[t._v("#")]),t._v(" 单线程、同步、异步")]),t._v(" "),a("p",[t._v("JS是单线程，单线程即任务是串行的，后一个任务需要等待前一个任务的执行，这就可能出现长时间的等待。但由于类似ajax网络请求、setTimeout时间延迟、DOM事件的用户交互等，这些任务并不消耗 CPU，是一种空等，资源浪费，因此出现了异步。通过将任务交给相应的异步模块去处理，主线程的效率大大提升，可以并行的去处理其他的操作。当异步处理完成，主线程空闲时，主线程读取相应的callback，进行后续的操作，最大程度的利用CPU。")]),t._v(" "),a("p",[t._v("此时出现了同步执行和异步执行的概念，同步执行是主线程按照顺序，CPU串行执行任务（通过执行栈，先进后出）；异步执行就是跳过等待，先处理后续的同步任务（不是说异步不执行了，而是交给网络模块、timer等并行进行任务）。由此"),a("code",[t._v("产生了事件循环与任务队列（ES6新增），来协调主线程与异步模块之间的工作。")])]),t._v(" "),a("h4",{attrs:{id:"引擎和runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引擎和runtime","aria-hidden":"true"}},[t._v("#")]),t._v(" 引擎和runtime")]),t._v(" "),a("p",[t._v("在具体执行层，是依赖"),a("code",[t._v("js引擎")]),t._v("和"),a("code",[t._v("宿主环境runtime")]),t._v("来实现event loop机制。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("引擎")]),t._v("：解释并编译代码，让它变成能交给机器运行的代码。")]),t._v(" "),a("li",[a("code",[t._v("runtime")]),t._v(": 宿主环境，提供异步处理模块（如"),a("router-link",{attrs:{to:"/js/http-base-2.browser.html"}},[t._v("浏览器内核")]),t._v("（也叫渲染引擎）的Timer模块、Ajax的Network模块、事件的DOM binding模块等）。")],1)]),t._v(" "),a("p",[t._v("注意，"),a("code",[t._v("通常是宿主环境提供事件循环机制")]),t._v("来处理程序中多个块的执行，执行时调用JavaScript引擎。换句话说，JS引擎本身没有时间的概念，只是一个按需执行js任意代码片段的环境。“事件”（JavaScript代码执行）调度总是由包含它的环境进行。")]),t._v(" "),a("p",[t._v("举个例子，如果JavaScript程序发出一个Ajax请求（从服务器获取一些数据），通常会在一个函数中（通常称为回调函数）设置好响应代码，然后JavaScript引擎会通知宿主环境：“嘿，现在我要暂停执行，你一旦完成网络请求拿到数据，请调用这个函数。”然后浏览器（宿主环境）拿到数据后，就会把回调函数插入到事件循环中。")]),t._v(" "),a("h4",{attrs:{id:"执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),a("p",[t._v("当javascript代码执行的时候会将不同的变量存于内存中的不同位置：堆（heap）和栈（stack）中来加以区分。其中，堆里存放着一些对象。而栈中则存放着一些基础类型变量以及对象的指针。 但是我们这里说的执行栈和上面这个栈的意义却有些不同。")]),t._v(" "),a("p",[t._v("当我们调用一个方法的时候，js会生成一个与这个方法对应的执行环境（context），又叫"),a("code",[t._v("执行上下文")]),t._v("。这个执行环境中存在着这个方法的私有作用域，上层作用域的指向，方法的参数，这个作用域中定义的变量以及这个作用域的this对象。 而当一系列方法被依次调用的时候，因为js是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方。这个地方被称为"),a("code",[t._v("执行栈")]),t._v("。")]),t._v(" "),a("p",[t._v("当一个脚本第一次执行的时候，js引擎会解析这段代码，并将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行。如果当前执行的是一个方法，那么js会向执行栈中添加这个方法的执行环境，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，js会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境。这个过程反复进行，直到执行栈中的代码全部执行完毕。")]),t._v(" "),a("h2",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("h4",{attrs:{id:"event-loop定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop定义","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Loop定义")]),t._v(" "),a("p",[t._v("网络上许多文章关于event loop定义不是很清晰，我们直接看官方规范标准。再次强调事件循环机制是由宿主决定，Web宿主规范标准定义在"),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/webappapis.html#event-loops",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML Standand"),a("OutboundLink")],1),t._v("中，NodeJS宿主规范标准定义在"),a("a",{attrs:{href:"http://docs.libuv.org/en/v1.x/design.html#the-i-o-loop",target:"_blank",rel:"noopener noreferrer"}},[t._v("libuv"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("简单理解为：")]),t._v(" "),a("ol",[a("li",[t._v("所有同步任务都在主线程上执行，形成一个"),a("code",[t._v("执行栈")]),t._v("。")]),t._v(" "),a("li",[t._v('主线程之外，还存在一个"'),a("code",[t._v("事件队列")]),t._v('"。只要异步操作执行完成，就到事件队列中排队。')]),t._v(" "),a("li",[t._v("一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取事件队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。")]),t._v(" "),a("li",[t._v("主线程不断重复上面的第三步。")])]),t._v(" "),a("p",[t._v("使用伪代码来说明事件队列概念：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// eventLoop队列数组，先进先出")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eventLoop "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// “永远”执行，事件循环嘛")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 一次tick")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        event "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" eventLoop"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("shift")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 拿到队列中下一个事件")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("event")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 执行。这代码里面可能产生新的event放在eventLoop中")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("while循环实现持续运行的循环，循环的每一轮称为tick。对每个tick而言，如果在队列中有等待事件，那么就会在队列中摘下一个事件并执行。这些事件就是你的回调函数。")]),t._v(" "),a("p",[t._v("注意，setTimeout不是把你的回调函数挂在事件循环队列中，而是设置一个定时器，当定时器到时后，环境会把你的回调函数放在事件循环中。这样，在未来某个时刻的tick会摘下并执行这个回调（真正的放在执行栈中执行）")]),t._v(" "),a("blockquote",[a("p",[t._v("以上说过是宿主环境提供事件循环，但ES6本质上改变了在哪里管理事件循环。由于ES6 Promise的引入，这技术要求对事件循环队列的调度运行能够直接进行精确控制，所以事件循环后续会纳入JavaScirpt引擎的势力范围，而不是只由宿主环境来管理。")])]),t._v(" "),a("h2",{attrs:{id:"任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),a("p",[t._v("这是在ES6中引入的概念，它加在事件循环队列之上。这个概念带来最大的影响可能是Promise的异步特性。")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("任务队列")]),t._v("最好的理解方式就是，它是挂在"),a("code",[t._v("事件循环队列")]),t._v("的每个tick之后的一个队列。在事件循环的每个tick中，可能出现的异步动作不会导致一个完整的新事件添加到事件循环队列中，而会在当前tick的任务队列末尾添加一个任务。")]),t._v(" "),a("h4",{attrs:{id:"macrotask和microtask区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macrotask和microtask区别","aria-hidden":"true"}},[t._v("#")]),t._v(" macrotask和microtask区别")]),t._v(" "),a("p",[t._v("网络上有非常多介绍这两个的文章，但读完之后依然很晕。其实"),a("strong",[t._v("事件循环队列===macrotask，任务队列 === microtask")]),t._v("。这样理解规范就简单了：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("An event loop has one or more task queues. A task queue is a set of tasks.\n\nThe microtask queue is not a task queue.\n// 一个event loop有一个或者多个task队列（ps：task队列 === 事件循环队列）。\n// microtask队列不是一个task队列。（ps：微任务队列只有一个，而且每一次tick，都会清空微任务队列）\n")])])]),a("ul",[a("li",[t._v("宏任务（事件循环队列）："),a("code",[t._v("script（全局任务，这个很重要）")]),t._v(", setTimeout, setInterval, setImmediate, I/O, UI rendering.")]),t._v(" "),a("li",[t._v("微任务（任务队列）：process.nextTick, Promise, Object.observer, MutationObserver.")])]),t._v(" "),a("h4",{attrs:{id:"macrotask和microtask调用顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macrotask和microtask调用顺序","aria-hidden":"true"}},[t._v("#")]),t._v(" macrotask和microtask调用顺序")]),t._v(" "),a("p",[t._v("简化代码示意：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 事件循环取macroTaskQueue")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 微任务队列只有一个，而且每一次tick，都会清空微任务队列")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("macroTask "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" macroTaskQueue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("handleMacroTask")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microTask "),a("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" microTaskQueue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("handleMicroTask")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microTask"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Promise"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("promise1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'setTimeout1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Promise"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v("  "),a("span",{attrs:{class:"token function"}},[t._v("promise2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'setTimeout2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// promise1")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// setTimeout1")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// promise2")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// setTimeout2")]),t._v("\n")])])]),a("p",[t._v("运行过程：")]),t._v(" "),a("p",[a("code",[t._v("初始情况，执行栈为空，循环1：")])]),t._v(" "),a("p",[t._v("【task队列：script ；microtask队列：】")]),t._v(" "),a("p",[t._v("从task队列中取出script任务，推入栈中执行。promise1列为microtask，setTimeout1列为task，setTimeout2列为task。")]),t._v(" "),a("p",[t._v("【task队列：setTimeout1 setTimeout2；microtask队列：promise1】")]),t._v(" "),a("p",[t._v("script任务执行完毕，执行microtask checkpoint，取出microtask队列的promise1执行。")]),t._v(" "),a("p",[a("code",[t._v("执行栈为空，循环2：")])]),t._v(" "),a("p",[t._v("【task队列：setTimeout1 setTimeout2；microtask队列：】")]),t._v(" "),a("p",[t._v("从task队列中取出setTimeout1，推入栈中执行，将promise2列为microtask。")]),t._v(" "),a("p",[t._v("【task队列：setTimeout2；microtask队列：promise2】")]),t._v(" "),a("p",[t._v("执行microtask checkpoint，取出microtask队列的promise2执行。")]),t._v(" "),a("p",[a("code",[t._v("执行栈为空，循环3：")])]),t._v(" "),a("p",[t._v("【task队列：setTimeout2；microtask队列：】")]),t._v(" "),a("p",[t._v("从task队列中取出setTimeout2，推入栈中执行。setTimeout2任务执行完毕，执行microtask checkpoint。")]),t._v(" "),a("p",[t._v("【task队列：；microtask队列：】")]),t._v(" "),a("blockquote",[a("p",[t._v("也可以在这个"),a("a",{attrs:{href:"http://latentflip.com/loupe/?code=ZnVuY3Rpb24gZ2V0WSAoeCkgewogICAgCiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZShyZXNvbHZlLCByZWplY3QpIHsKICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHByb21pc2VUaW1lb3V0KCkgewogICAgICAgICAgICByZXNvbHZlKCgzICogeCkgLSAxKTsKICAgICAgICB9LCAwKTsKICAgIH0pOwp9CgpmdW5jdGlvbiBmb28gKGJhciwgYmF6KSB7CgogICAgdmFyIHggPSBiYXIgKiBiYXo7CgogICAgcmV0dXJuIGdldFkoeCkKICAgICAgICAudGhlbihmdW5jdGlvbiByZXR1cm5BcnJheSh5KSB7CiAgICAgICAgICAgIHJldHVybiBbIHgsIHkgXTsKICAgICAgICB9KTsKfQpzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXQoKSB7CiAgICBjb25zb2xlLmxvZygndGltZW91dCcpCn0sIDApCgpmb28oMTAsIDIwKS50aGVuKGZ1bmN0aW9uIGxvZ01zZyhtc2dzKSB7CiAgICBjb25zb2xlLmxvZyhtc2cpOwp9KTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D",target:"_blank",rel:"noopener noreferrer"}},[t._v("网站"),a("OutboundLink")],1),t._v("中查看浏览器执行代码时的实时事件循环和任务队列情况。")])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://flaviocopes.com/javascript-event-loop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("The JavaScript Event Loop"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Event Loop Explained"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://ustbhuangyi.github.io/vue-analysis/reactive/next-tick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 运行机制"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/hity-tt/p/6733062.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("任务队列、web API、JS主线程的相互协同"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/aooy/blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("从event loop规范探究javaScript异步及浏览器更新渲染时机"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("你不知道的JavaScript（中卷）- 异步")])])])])},[],!1,null,null,null);e.options.__file="js-base-3.event-loop.md";s.default=e.exports}}]);