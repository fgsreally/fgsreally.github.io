(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{508:function(t,a,s){"use strict";s.r(a);var e=s(4),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("Three.js的各类材质"),s("br")])]),t._v(" "),s("h3",{attrs:{id:"three-js-材质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-js-材质"}},[t._v("#")]),t._v(" Three.js 材质")]),t._v(" "),s("p",[t._v("这个就是稍微记一下，因为3.js ，我个人觉得最棘手的，发生在前端的，就是写着色器，像什么模型啊，一般都还是从外部引入，能做的就只有引入以后怎么整一下")]),t._v(" "),s("blockquote",[s("p",[t._v("着色器本身本就不好写，大量矩阵之类的鬼玩意儿，在材质这一块就已经要涉及光照等麻烦事儿了")])]),t._v(" "),s("h2",{attrs:{id:"基础材质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础材质"}},[t._v("#")]),t._v(" 基础材质")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" meshMaterial "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MeshBasicMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7777ff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  opacity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  transparent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("很明显，就是设计一些基础的变量直接生成从而在内部使用")]),t._v(" "),s("h2",{attrs:{id:"其他材质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他材质"}},[t._v("#")]),t._v(" 其他材质")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("THREE.MeshBasicMaterial（网格基础材质）\n普通的几何体")])]),t._v(" "),s("li",[s("p",[t._v("THREE.MeshDepthMaterial（网格深度材质）")])])]),t._v(" "),s("p",[t._v("其外观是由物体到摄像机的距离决定的。")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("new THREE.SceneUtils.createMultiMaterialObject (...)")]),t._v("可以将多个材质合到一个物体上，这个好用")]),t._v(" "),s("ul",[s("li",[t._v("THREE.MeshNormalMaterial（网格法向量材质）")])]),t._v(" "),s("p",[t._v("使用这种材质，每一面的颜色是由从该面向外指的法向量计算得到的。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("THREE.MeshFaceMaterial（网格面材质）\nTHREE.MeshFaceMaterial 并不是一种真正的材质，而更像是一种材质容器。它允许给几何体的每个面指定不同的材质。")])]),t._v(" "),s("li",[s("p",[t._v("THREE.MeshLambertMaterial（网格 Lambert 材质）")])])]),t._v(" "),s("p",[t._v("这种材质可以用来创建暗淡的并不光亮的表面。该材质非常易用，而且会与场景中的光源产生反应。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("THREE.MeshPhongMaterial（网格 Phong 材质）\n可以创建一种光亮的材质（光照下。")])]),t._v(" "),s("li",[s("p",[t._v("THREE.ShaderMaterial（着色器材质）\n着色器，实际上就尽可能用其他材质去做，用这个的话很复杂")])])]),t._v(" "),s("p",[t._v("这个的属性需要格外注意")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wireframe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 设置这个属性可以将材质渲染成线框。非常适合调试目的。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("wireframeLinewidth")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 如果已经打开了 wireframe，这个属性定义线框中线的宽度。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("linewidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 该属性定义了要绘制的线的宽度。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("shading")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 该属性定义如何着色。可选的值有 THREE.SmoothShading 和 THREE.Flat Shading。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vertexColors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 可以通过这个属性给每个顶点定义不同的颜色。该属性对 CanvasRenderer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 不起作用，但是对 WebGLRenderer 起作用。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 该属性指定当前材质是否受全局雾化效果设置的影响。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fragmentShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 这个着色器定义的是每个传入的像素的颜色。你需要传入像素着色器程序的字符串值。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("vertexShader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 这个着色器允许你修改每一个传入的顶点的位置。你需要传入顶点着色器程序的字符串值。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uniforms")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 通过这个属性可以向你的着色器发信息。同样的信息会发给每一个顶点和片段。\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defines")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 转换成 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#define 代码片段。这些片段可以用来设置着色器程序里的一些额外的全局变量。")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("attributes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t 该属性可以修改每个顶点和片段。通常用来传递位置数据和与法向量相关的数据。如果要用这个属性，那么你需要为几何体中的每个顶点提供信息。\n lights\t 该属性定义光照数据是否传递给着色器。默认值：false。\n")])])]),s("ul",[s("li",[s("p",[t._v("THREE.LineBasicMaterial（实线）\n这是用于线段的基础材质。")])]),t._v(" "),s("li",[s("p",[t._v("THREE.LineDashedMaterial（虚线）")])])]),t._v(" "),s("blockquote",[s("p",[t._v("当然更简单的就是直接以某图片做贴图当作材料")])])])}),[],!1,null,null,null);a.default=n.exports}}]);