(this.webpackJsonpscrap_mechanic_world_reader=this.webpackJsonpscrap_mechanic_world_reader||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),i=n.n(c),s=(n(28),n(12)),o=n(4),l=n(5),h=n(11),j=n(7),d=n(6),u=n(15),b=n(2),f=(n(29),n(16)),O=n.n(f),p=n(19),v=(n(31),n(0)),g=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).areaRef=void 0,a.areaRef=r.createRef(),a.state={currentlyOver:!1,processing:!1,percentage:0},a}return Object(l.a)(n,[{key:"handleDrop",value:function(){var e=Object(p.a)(O.a.mark((function e(t){var n=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),t.dataTransfer.files.length>0?this.setState({currentlyOver:!1,processing:!0}):this.setState({currentlyOver:!1}),Array.from(t.dataTransfer.files).forEach(function(){var e=Object(p.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=new FileReader).addEventListener("progress",(function(e){var t=(e.loaded||0)/(e.total||1)*100;n.setPercentage(t),console.log(t)})),r.addEventListener("load",(function(e){console.log("done!"),n.setState({percentage:100}),setTimeout((function(){n.setState({processing:!1}),setTimeout((function(){n.setState({percentage:0})}),2e3)}),1e3)})),r.readAsBinaryString(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDragOver",value:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy",this.setState({currentlyOver:!0})}},{key:"handleDragLeave",value:function(e){e.preventDefault(),this.setState({currentlyOver:!1})}},{key:"setPercentage",value:function(e){this.setState({percentage:e})}},{key:"componentDidUpdate",value:function(){var e;null===(e=this.areaRef.current)||void 0===e||e.style.setProperty("--percentage",this.state.percentage+"%")}},{key:"render",value:function(){return Object(v.jsx)("div",{ref:this.areaRef,className:"drop-area"+(this.state.currentlyOver?" over":"")+(this.state.processing?" processing":""),onDragOver:this.handleDragOver.bind(this),onDrop:this.handleDrop.bind(this),onDragLeave:this.handleDragLeave.bind(this),children:this.state.currentlyOver&&this.props.droppingText||this.props.text})}}]),n}(r.Component),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={},r}return Object(l.a)(n,[{key:"handleDrop",value:function(e){e.preventDefault(),console.log(e.dataTransfer.files)}},{key:"handleDragOver",value:function(e){e.preventDefault()}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(g,{droppingText:"Release to upload world",text:"Drop world database file here"}),Object(v.jsx)(g,{droppingText:"Release to upload blueprint",text:"Drop blueprint folder here"})]})}}]),n}(r.Component),m=(n(33),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={active:!1},r.handleClick=r.handleClick.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"handleClick",value:function(){this.setState({active:!this.state.active})}},{key:"render",value:function(){return Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{onClick:this.handleClick,className:"caret"+(this.state.active?" down":""),children:this.props.name}),Object(v.jsx)("ul",{className:"nested"+(this.state.active?" active":""),children:this.props.children})]})}}]),n}(r.Component)),y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsx)("ul",{className:"tree",children:Object(v.jsx)(m,{name:this.props.name,children:this.props.children})})}}]),n}(r.Component),k=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(y,{name:"root",children:[Object(v.jsxs)(m,{name:"creation1",children:[Object(v.jsx)(m,{name:"state",children:Object(v.jsx)("li",{children:"id: hejsan"})}),Object(v.jsxs)(m,{name:"part1",children:[Object(v.jsx)("li",{children:"type: block"}),Object(v.jsx)("li",{children:"color: #111aaa"})]})]}),Object(v.jsxs)(m,{name:"creation2",children:[Object(v.jsx)(m,{name:"state",children:Object(v.jsx)("li",{children:"id: hejsan"})}),Object(v.jsxs)(m,{name:"part1",children:[Object(v.jsx)("li",{children:"type: block"}),Object(v.jsx)("li",{children:"color: #111aaa"})]})]})]})}}]),n}(r.Component);function C(){return JSON.parse(localStorage.getItem("preferences")||"{}")}function S(e){localStorage.setItem("preferences",JSON.stringify(e))}var D=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={},r.handleClearPreferences=r.handleClearPreferences.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"handleClearPreferences",value:function(){S({}),window.location.reload()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:this.handleClearPreferences,children:"Clear preferences"}),Object(v.jsx)("button",{className:"shining",onClick:this.handleClearPreferences,children:"Clear preferences"})]})}}]),n}(r.Component),N=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r,c;return Object(o.a)(this,n),(r=t.call(this,e)).leftColRef=void 0,r.state={resizing:!1,leftSize:(c="leftSize",C()[c])},r.leftColRef=a.a.createRef(),r.handleDragging=r.handleDragging.bind(Object(h.a)(r)),r.HashPreservingNavLink=r.HashPreservingNavLink.bind(Object(h.a)(r)),r.HashNavLink=r.HashNavLink.bind(Object(h.a)(r)),r}return Object(l.a)(n,[{key:"HashNavLink",value:function(e){return Object(v.jsx)(u.b,Object(s.a)({isActive:function(){return window.location.hash===e.to}},e))}},{key:"HashPreservingNavLink",value:function(e){if("object"===typeof e.to)throw new TypeError("Objects as to attribute is currently not supported");return Object(v.jsx)(u.b,Object(s.a)(Object(s.a)({},e),{},{to:{pathname:e.to.toString(),hash:this.props.location.hash}}))}},{key:"HashRoute",value:function(e){var t=Object(s.a)({},e);return delete t.path,delete t.component,Object(v.jsx)(b.b,Object(s.a)(Object(s.a)({},t),{},{render:function(t){return console.log("Rendering!"),t.location.hash===e.path&&e.component?Object(v.jsx)(e.component,Object(s.a)({},t)):Object(v.jsx)(v.Fragment,{})}}))}},{key:"handleDragging",value:function(e){this.state.resizing?(this.setState({leftSize:e.clientX}),document.documentElement.style.cursor="ew-resize"):document.documentElement.style.cursor="unset"}},{key:"componentDidUpdate",value:function(){!function(e,t){var n=C();n[e]=t,S(n)}("leftSize",this.state.leftSize)}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{id:"app",onMouseMove:this.handleDragging,onMouseUp:function(){e.state.resizing&&e.setState({resizing:!1})},children:[Object(v.jsxs)("aside",{ref:this.leftColRef,style:{width:this.state.leftSize},id:"left-col",children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"tabbed",children:[Object(v.jsx)("li",{children:Object(v.jsx)(this.HashNavLink,{to:"#file",children:"File"})}),Object(v.jsx)("li",{children:Object(v.jsx)(this.HashNavLink,{to:"#hierarchy",children:"Hierarchy"})}),Object(v.jsx)("li",{children:Object(v.jsx)(this.HashNavLink,{to:"#settings",children:"Settings"})})]})}),Object(v.jsxs)("div",{id:"left-content",children:[Object(v.jsx)(this.HashRoute,{path:"#file",component:x}),Object(v.jsx)(this.HashRoute,{path:"#settings",component:D}),Object(v.jsx)(this.HashRoute,{path:"#hierarchy",component:k})]})]}),Object(v.jsx)("div",{className:"resize-vertical-divider",onMouseDown:function(){return e.setState({resizing:!0})}}),Object(v.jsxs)("main",{id:"right-col",children:[Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{className:"tabbed",children:[Object(v.jsx)("li",{className:"selected",children:Object(v.jsx)(this.HashPreservingNavLink,{to:"/bodies",children:"Bodies"})}),Object(v.jsx)("li",{children:Object(v.jsx)(this.HashPreservingNavLink,{to:"/world",children:"World"})}),Object(v.jsx)("li",{children:Object(v.jsx)(this.HashPreservingNavLink,{to:"/3d",children:"3d"})}),Object(v.jsx)("li",{children:Object(v.jsx)(this.HashPreservingNavLink,{to:"/map",children:"Map"})})]})}),Object(v.jsx)(b.b,{exact:!0,path:"/",children:Object(v.jsx)(b.a,{to:"/bodies#file"})}),Object(v.jsx)(b.d,{})]})]})}}]),n}(a.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(u.a,{children:Object(v.jsx)(b.b,{component:N})})}),document.getElementById("root")),w()}},[[42,1,2]]]);
//# sourceMappingURL=main.2a2be350.chunk.js.map