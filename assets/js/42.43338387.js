(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{529:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"风格化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#风格化配置"}},[t._v("#")]),t._v(" 风格化配置")]),t._v(" "),a("p",[t._v("最近看了一点设计上的东西，打算做点小工作\n我打算先做一个tailwindcss的插件，再处理unocss(主要是我没有看到unocss预设的指引，估计要找个现成的预设先偷学一下)\n实质上这有两个部分，一个部分就是多个种类的风格，比如玻璃拟态，新拟态等，第二个是基础组件，因为不太可能每一种组件都做，那样工作量太大，而且以原子类css没有办法像正常那样去封装组件，更多的是依赖对原生的封装，说白了就是对button和input原始样式的覆盖与重写\n基于这两个部分做排列组合就好，比如某个风格+某个组件封装一个样式。实际上还有一个主题的问题，比如暗色模式等，然后就是三个部分的排列组合")]),t._v(" "),a("h1",{attrs:{id:"附"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附"}},[t._v("#")]),t._v(" 附")]),t._v(" "),a("p",[t._v("其实还有一些工具的部分，比如我想做一个五阶段的配色模式，即Google的配色标准，不过我看了一下daisyui已经实现过了，我就不做了")]),t._v(" "),a("p",[t._v("这里面存在一些难点，比如风格类大量使用了shadow，那么这个shadow的数值应该怎么定，这个size应该定多少，在不知道用户使用的元素尺寸的前提下，这个东西不好处理，由于阴影长度随元素的变化并非线性，所以百分比的思路不可行，那就只能依赖断点。此外，各种风格的因变量各不相同，有可能有多个因变量，这个标准更加难搞。再加上风格中，有些变化应属于默认变化，比如新拟态中，active伪类的状态和常规状态应该是相反，即凹凸，那这个伪类状态由用户做还是由插件完成也是一个麻烦")])])}),[],!1,null,null,null);s.default=e.exports}}]);