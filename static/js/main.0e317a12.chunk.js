(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);a(63),a(94),a(99);var n=a(0),i=a.n(n),r=a(57),c=a.n(r),l=(a(105),a(11)),o=a(12),s=a(15),u=a(14),d=a(16),p=a(59),h=a(9),m=(a(106),a(58)),b=a.n(m),f=a(13),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={feedback:""},e.showDetail=e.showDetail.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.app.initialize()}},{key:"showDetail",value:function(){this.props.app.showDetail({url:"".concat(window.location.href.split("#")[0],"#/detail"),title:"Starter Detail"}),this.setState({feedback:"Show Detail Sent"})}},{key:"render",value:function(){var e=this.state.feedback;return i.a.createElement("div",{className:"App"},i.a.createElement("p",null,"Test a non-ready detail"),i.a.createElement("p",null,'This will show a "slow to load" message in detail.'),i.a.createElement("pre",null,e),i.a.createElement("div",{className:"ActionBar"},i.a.createElement("button",{onClick:this.showDetail},"Show Detail")))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={feedback:""},e.hideDetail=e.hideDetail.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"hideDetail",value:function(){this.props.app.hideDetail(),this.setState({feedback:"Detail hidden"})}},{key:"render",value:function(){var e=this.state.feedback;return i.a.createElement("div",{className:"App"},i.a.createElement("p",null,"This detail should never show (never initializes)"),i.a.createElement("pre",null,e),i.a.createElement("div",{className:"ActionBar"},i.a.createElement("button",{onClick:this.hideDetail},"Hide Detail")))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).microapp=new b.a({audience:window.location.origin}),e.iFrameSrc="",e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p.a,null,i.a.createElement("div",null,i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:"/",render:function(){return i.a.createElement(h.a,{to:"/summary"})}}),i.a.createElement(h.b,{exact:!0,path:"/summary",render:function(t){return i.a.createElement(E,Object.assign({},t,{app:e.microapp}))}}),i.a.createElement(h.b,{exact:!0,path:"/detail",render:function(t){return i.a.createElement(w,Object.assign({},t,{app:e.microapp}))}}),i.a.createElement(h.b,{render:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"No Route found"))}}))))}}]),t}(n.Component);c.a.render(i.a.createElement(v,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(115)}},[[62,1,2]]]);
//# sourceMappingURL=main.0e317a12.chunk.js.map