(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{543:function(t,s,r){"use strict";r.r(s);var a=r(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),r("p",[t._v("在某一个工具库中提供配套功能的组件"),r("br")])]),t._v(" "),r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),r("p",[t._v("在我曾经写过的一个项目中，我意识到这个项目中的核心部分（可以视为一个对象）有大量字段是独属于这个项目的，也就是，如果试图复用这个核心部分，意味着要取消大部分属性字段，并添加新的（直接覆盖也不是不行，但这会导致类型难以理解），当然，最好的方法自然是把必须的字段单独提取出来，封一个库使用，就其本身而言，这并无什么问题，但由于核心数据更改，其配套的组件，工具函数就全不能用了。如果要全部更改，工作量很大")]),t._v(" "),r("h2",{attrs:{id:"分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),r("p",[t._v("本质上，就是一个数据源的更改，中间加一层转化就行，好吧，现在只是把问题从改组件、函数 ->写转换函数，而且数据源未必是乖乖巧巧从指定位置进入，\n比如，组件内部依赖provide、inject，那么它的数据源就不只是props了")]),t._v(" "),r("h2",{attrs:{id:"解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),r("p",[t._v("所有转换类的问题，都只是转换位置的问题，一般而言，使用组件时大多比较关注于props，也就是，在props这个位置，或在父组件，或在子组件，去进行转换，而在这种配套性质的组件，不能以单纯的单一功能去讨论，比如，我压根没考虑过这个组件拉出去单独使用的场景，它就要和xx库配套用，那这我重点在于，数据到视图的部分，也就是script到template的地方，去做个computed做转换（只是一个例子），而props只负责传入这个转换函数（这样的泛型提示会比较友好）。而当后续需要它去单独拉出来用的时候，再添加props，在transform的位置上小小更改即可平滑过渡")]),t._v(" "),r("blockquote",[r("p",[t._v("组件编写的主要问题并不是编写本身，而是编写时难以考虑所有的应用场景，导致组件编写了但后续根本不愿意使用，根本的解决方法是没有的，只能说在初次编写过程中，提前判断一些未来场景，然后在组件中做出一个兼容层/转换层，未来只应在层中更改去迎合场景")])])])}),[],!1,null,null,null);s.default=e.exports}}]);