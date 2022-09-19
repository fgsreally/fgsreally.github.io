(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{511:function(t,s,e){"use strict";e.r(s);var r=e(4),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),e("p",[t._v("关于"),e("code",[t._v("Redis")]),t._v("的集群与主从模式"),e("br")])]),t._v(" "),e("h3",{attrs:{id:"方案类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案类型"}},[t._v("#")]),t._v(" 方案类型")]),t._v(" "),e("p",[t._v("  感觉数据库相关的东西，只要在这条链路上,就要考虑它罢工的情况。同样，也需要考虑"),e("code",[t._v("redis")]),t._v("机器罢工的情况\n  所以redis 主从处理方案出现了，它支持双机热备，1台处理，1台备份，在一定程度上可以防止数据丢失")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"主从模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从模式"}},[t._v("#")]),t._v(" 主从模式")]),t._v(" "),e("p",[t._v("  对的你没看错，是一定程度上。为什么，分析下，在高并发环境中，一次吞吐量很大，主redis 正在处理新数据的时候挂掉了，从redis能一定保证把最新的数据备份下来了么？很显然不可能，所以一定会丢失。而且一台redis如果和n台web服务器交互，压力是很大的，挂掉的概率，啧啧啧。\n  当然后来出现了keepalived 做负载均衡的，一定程度上减少了服务器的压力，但是这种方案，始终是下策（为什么是下策，如果两台服务器都有对方没有的新数据，突然挂掉了。。。再或者承载"),e("code",[t._v("keepalived")]),t._v("的这太机器出了问题。。。。）。风险还是太大了。")]),t._v(" "),e("h2",{attrs:{id:"集群模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群模式"}},[t._v("#")]),t._v(" 集群模式")]),t._v(" "),e("p",[t._v("  于是出现了redis cluster --集群，集群首先考虑的就是数据最小丢失，因此，采用的是数据分片技术，每台redis上存储的都是不同的数据，redis越多，数据分离的越细，一次丢失内容更少，没有代理层，性能稳定。XXXX等等一大堆优势，就不说了。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"归纳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#归纳"}},[t._v("#")]),t._v(" 归纳")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("主从方案：说白了就是一个干活，一个备份，防止出现问题，但主的redis在处理时突然挂掉，如果是高并发的话，从的redis根本来不及备份下来")])]),t._v(" "),e("li",[e("p",[t._v("集群：用的是数据分片，也就是不同机器存的东西不一样，如果挂了，顶多损失一部分，在使用时，会自动找到需要的数据，不需要手动去各个机器上找\n（完全不需要做负载均衡，集群自己处理")])])]),t._v(" "),e("p",[t._v("  这两个不冲突，集群希望最小丢失，主从讲究的是不丢失。还有个哨兵模式，其实算是当主节点出问题时，挑选从节点转化为主的机制")]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("  上文中绝大部分来自其他地方，我就把一些说的太高深的词句给换了一下。我认为"),e("code",[t._v("redis")]),t._v("这个方面只是个理论的问题，只要有条件肯定是直接集群的，不会考虑别的，"),e("code",[t._v("redis")]),t._v("主要关注它的使用方向，是简单做个缓存，还是要做消息队列什么的。\n比较有意义的部分是这种 "),e("strong",[t._v("存储-丢失")]),t._v(" 的解决思路，这个可以应用在任何地方\n"),e("br")]),t._v(" "),e("blockquote",[e("p",[t._v("我不知道为啥，redis用起来，无论是通过哪个库，没有别人说的那么复杂。也有可能我没有面对那种比较复杂的情况。但都说这个难，我还是把概念记一记好了")])])])}),[],!1,null,null,null);s.default=v.exports}}]);