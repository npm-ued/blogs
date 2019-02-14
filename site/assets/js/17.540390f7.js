(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{231:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),e("p",[t._v("通配符需要配合"),e("a",{attrs:{href:"https://github.com/mysticatea/npm-run-all/blob/master/docs/npm-run-all.md",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("npm-run-all")]),e("OutboundLink")],1),t._v("包(更轻量和简洁的多命令运行)。--parallel参数表示并行")]),t._v(" "),t._m(6),t._m(7),t._v(" "),e("p",[t._v("npm脚本有pre和post两个钩子。eg：build脚本命令的钩子就是prebuild和postbuild。")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("npm 默认提供如下命令钩子：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("gulp中watch非常实用，但npm script也能实现文件变动后自动运行npm脚本。这就需要安装"),e("a",{attrs:{href:"https://www.npmjs.com/package/onchange",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("onchange")]),e("OutboundLink")],1),t._v("包。onchange帮助我们在文件增删改时执行对应npm命令，非常实用。")]),t._v(" "),e("p",[t._v("安装onchange:")]),t._v(" "),t._m(13),e("p",[t._v("scripts监听(示例监听svg文件变化，以处理最新svg文件):")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("这也是非常实用功能之一，可以利用git钩子构建代码约束。经常用到的工具包是"),e("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("husky")]),e("OutboundLink")],1),t._v(",通过husky源码知道，它替换了项目中.git/hooks钩子。项目中常用钩子是"),e("code",[t._v("precommit")]),t._v(","),e("code",[t._v("prepush")]),t._v(", "),e("code",[t._v("commit-msg")])]),t._v(" "),e("p",[t._v("安装husky:")]),t._v(" "),t._m(17),e("p",[t._v("约束:")]),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"npm-script技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-script技巧","aria-hidden":"true"}},[this._v("#")]),this._v(" npm script技巧")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("npm不仅是js包管理工具，还可以为作为代码库配置工具。有些时候需要一些小脚本来约定规则或者监听文件变化，这时候npm script起到重要作用。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-串行和并行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-串行和并行","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 串行和并行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("&&")]),this._v("将多个命令串行执行。比如我们经常提交代码时，先perriter格式化代码，然后检查eslint以及stylelint，最后再进行commitlint。依次执行，前面执行为false则停止。使用"),s("code",[this._v("&")]),this._v("将多个命令并行执行。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"precommit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run format && npm run eslint && npm run stylelint && git add ."')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-通配符执行相似指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-通配符执行相似指令","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 通配符执行相似指令")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"precommit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm-run-all --parallel lint:*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint:js"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --ext .js,.vue --ignore-path .gitignore"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint:commit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commitlint -e $GIT_PARAMS"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('"\n'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-原生钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-原生钩子","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 原生钩子")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prebuild"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo before build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"postbuild"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo after build"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("执行build时按照如下顺序执行:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("npm run prebuild && npm run build && npm run postbuild")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("install")]),t._v(" "),e("li",[t._v("uninstall")]),t._v(" "),e("li",[t._v("start")]),t._v(" "),e("li",[t._v("restart")]),t._v(" "),e("li",[t._v("build")]),t._v(" "),e("li",[t._v("test")]),t._v(" "),e("li",[t._v("stop")]),t._v(" "),e("li",[t._v("version")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-监听文件变动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-监听文件变动","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 监听文件变动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install onchange --save-dev\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack & npm run watch:svg"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch:svg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"onchange 'assets/svg/*.svg' -- npm run svg\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"svg"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vsvg -s ./assets/svg -t ./assets/icon"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("npm中"),s("code",[this._v("--")]),this._v("后面代表着参数")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_5-git钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-git钩子","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. git钩子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install husky --save-dev\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"precommit"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run format && npm run eslint"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);