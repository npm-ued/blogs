(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{453:function(e,v,l){"use strict";l.r(v);var i=l(9),_=Object(i.a)({},function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"redis简介"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis简介","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis简介")]),e._v(" "),l("p",[e._v("Redis是一个高性能的key-value数据库。Redis有以下特点：")]),e._v(" "),l("ul",[l("li",[e._v("性能极高 – Redis能读的速度是110000次/s,写的速度是81000次/s")]),e._v(" "),l("li",[e._v("不仅仅支持简单的key-value类型的数据，同时还提供list，set，zset，hash等数据结构的存储")]),e._v(" "),l("li",[e._v("支持数据的持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用")])]),e._v(" "),l("p",[l("strong",[e._v("Redis像mysql、mongodb数据库一样，你需要安装它的环境，它有自己的语法；如果要使用java等后端语言对接，需要安装对应驱动包。")])]),e._v(" "),l("h2",{attrs:{id:"常用语法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用语法","aria-hidden":"true"}},[e._v("#")]),e._v(" 常用语法")]),e._v(" "),l("ul",[l("li",[e._v("String\n"),l("ul",[l("li",[e._v("SET key value")]),e._v(" "),l("li",[e._v("GET key")])])]),e._v(" "),l("li",[e._v("Hash\n"),l("ul",[l("li",[e._v("HGET key field")]),e._v(" "),l("li",[e._v("HSET key field value")]),e._v(" "),l("li",[e._v("HDEL key field1 [field2]")]),e._v(" "),l("li",[e._v("HEXISTS key field")])])]),e._v(" "),l("li",[e._v("List\n"),l("ul",[l("li",[e._v("LPUSH key value1 [value2] 将一个或多个值插入到列表头部")]),e._v(" "),l("li",[e._v("LLEN key 获取列表长度")]),e._v(" "),l("li",[e._v("LPOP key 移出并获取列表的第一个元素")]),e._v(" "),l("li",[e._v("RPOP key 移除列表的最后一个元素，返回值为移除的元素。")]),e._v(" "),l("li",[e._v("LRANGE key start stop 获取列表指定范围内的元素")])])]),e._v(" "),l("li",[e._v("Set\n"),l("ul",[l("li",[e._v("SADD key member1 [member2] 向集合添加一个或多个成员")]),e._v(" "),l("li",[e._v("SMEMBERS key 返回集合中的所有成员")])])]),e._v(" "),l("li",[e._v("sorted set\n"),l("ul",[l("li",[e._v("ZADD key score1 member1 [score2 member2] 向有序集合添加一个或多个成员，或者更新已存在成员的分数")]),e._v(" "),l("li",[e._v("ZCARD key 获取有序集合的成员数")])])])])])},[],!1,null,null,null);_.options.__file="redis.md";v.default=_.exports}}]);