(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{239:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("自从Parcel零配置方案得到程序员青睐，Webapck才幡然醒悟。相对于以前Webapck3.x复杂的loader、plugin等配置，Webpack4遵循约定大于配置，做了很多默认话配置。Webpack官方也出了"),a("a",{attrs:{href:"https://webpack.js.org/migrate/4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("v3到v4升级指南"),a("OutboundLink")],1),t._v("，但没有写的很具体，特别是第三方插件升级这块。以下跟随笔者项目实例，看看如何把3.x版本项目升级到webpack4。升级实例："),a("a",{attrs:{href:"https://github.com/lq782655835/node-vue-ui-website",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-vue-ui-website"),a("OutboundLink")],1),t._v("\n（node-vue-ui-website是一个基于node+vue+mongoose前后端一体的yi-ui官网）")]),t._v(" "),a("p",[t._v("升级简要：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("webpack从4.0起，拆分成webpack和webpack-cli两个包，所以需要先卸载掉webpack，再重新安装webpack和webpack-cli。另外笔者开发环境使用了webpack-dev-server，所以也一并升级下。")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("webpack配置文件增加mode这个必要选型。")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("对应webpack4升级的是vue-loader@15，该版本迁移有两个重大改变(不兼容)：")]),t._v(" "),a("ol",[a("li",[t._v("需要配合一个插件VueLoaderPlugin，"),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/migrating.html#%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%E7%9A%84%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%8F%98%E6%9B%B4",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Loader推导规则改变。直白点就是以前写在vue-loader options下的配置项（如css、sass配置）等，不需要再写了，而是直接使用对应css、sass的rule规则。当然，升级时可以暂时不做修改，多个options也不会报错。")])]),t._v(" "),a("p",[t._v("第一步：升级安装包")]),t._v(" "),t._m(10),a("p",[t._v("第二部： 配合插件，这步必须有")]),t._v(" "),t._m(11),t._m(12),t._v(" "),a("p",[t._v("css预处理器项目中使用的是scss，故需要升级相关包")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("项目中使用了"),a("a",{attrs:{href:"https://github.com/shakacode/sass-resources-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("sass-resouce-loader"),a("OutboundLink")],1),t._v("，用来全局导入一些scss variable或minx等，但跑起项目来会报找不到scss变量的错误。翻看sass-resource-loader和vue-loader官方文档看，原来是vue-loader@15使用了不同的推导规则，使得webpack一些配置在vue-loader下的选项，需要配置到对应loader规则下，详见"),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/migrating.html#Loader%20%E6%8E%A8%E5%AF%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方说明"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("实践升级webpack下来，没有想象中复杂，前三步是必要条件，主要是最后的第三方插件升级较为麻烦，需要到github上翻看对应插件的文档。不过好在webpack报错较为清晰，能很明确的找出哪些插件需要更新。所以，开始动起手来enjoy你的webpack升级。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"webpack3-x升级webpack4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack3-x升级webpack4","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack3.x升级Webpack4")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Node版本必须大于6.0")]),this._v(" "),s("li",[this._v("以前的webpack拆分为 webpack 和 webpack-cli两个包")]),this._v(" "),s("li",[this._v("webpack.config.js文件添加mode选型。根据这个字段，Webapck约定了不同环境下的默认配置。")]),this._v(" "),s("li",[this._v("升级第三方插件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-node版本升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-node版本升级","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Node版本升级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Webapck4要求安装的Node版本大于6.0，笔者安装的Node版本是8.6.0，所以不需要升级Node。升级Node推荐使用 "),s("code",[this._v("nvm")]),this._v(" 包管理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-升级webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-升级webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.升级webpack")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm uninstall webpack webpack-dev-server -D\nnpm i webpack webpack-dev-server webpack-cli -D\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-webapck-config-js修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-webapck-config-js修改","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. webapck.config.js修改")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-升级第三方插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-升级第三方插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 升级第三方插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-1-升级vue-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-升级vue-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.1 升级vue-loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm uninstall vue-loader -D\nnpm install vue-loader -D\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueLoaderPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader/lib/plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueLoaderPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-2-升级css相关loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-升级css相关loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.2 升级css相关loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm uninstall sass-loader node-sass css-loader -D\nnpm install sass-loader node-sass css-loader -D\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-3-配置sass-resource-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-配置sass-resource-loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.3 配置sass-resource-loader")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.scss$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sass-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("            loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sass-resources-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("                sourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("                resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/assets/scss/var.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.vue$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("        loaders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sass-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                    loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sass-resources-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                    options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                        resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/assets/scss/var.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);s.default=n.exports}}]);