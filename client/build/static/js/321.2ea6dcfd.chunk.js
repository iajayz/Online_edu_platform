"use strict";(self.webpackChunkabin=self.webpackChunkabin||[]).push([[321],{93321:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var r=n(1413),i=n(93433),a=n(74165),o=n(15861),s=n(29439),l=n(72791),c=n(79139),u=n(81238),d=n(80184),p=function(e){var t=e.rating,n=e.price,r=e.isPaid,i=e.title,a=e.thumbnailUrl,o=e.description;return(0,d.jsxs)("div",{className:"w-[18.5rem] p-5 text-customTextColor  hover:shadow-md hover:border hover:border-gray-300",children:[(0,d.jsxs)("div",{className:"relative",children:[(0,d.jsx)("img",{src:a,className:"h-1/2",alt:"ui/ux review check"}),(0,d.jsx)("div",{className:"absolute inset-0 h-[10rem] bg-gradient-to-tr from-transparent via-transparent to-black/60"})]}),(0,d.jsxs)("div",{className:"pt-4",children:[(0,d.jsx)("div",{className:"mb-3",children:(0,d.jsx)("h5",{className:"text-blue-gray text-xl font-medium",children:i})}),(0,d.jsx)("p",{className:"text-gray text-sm line-clamp-1",children:o}),(0,d.jsxs)("div",{className:"mt-4 flex justify-between items-center",children:[(0,d.jsx)("div",{className:"group",children:(0,d.jsx)("p",{className:"text-sm font-normal ".concat(r?"text-blue-gray":"text-white p-1 text-xs rounded-tl-lg rounded-br-lg  font-extrabold bg-green-400"),children:r?(0,u.$N)(n):"Free"})}),(0,d.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,d.jsx)(c.Rating,{value:t,readonly:!0}),(0,d.jsx)("p",{className:"text-blue-gray text-sm font-normal",children:t})]})]})]})]})},m=n(61447),f=n(9085),x=n(11087),h=function(){return(0,d.jsxs)("div",{className:"w-[18.5rem] p-5 overflow-hidden hover:shadow-md hover:border animate-pulse",children:[(0,d.jsx)("div",{className:"relative",children:(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-[12rem] w-full rounded"})}),(0,d.jsxs)("div",{className:"pt-4",children:[(0,d.jsx)("div",{className:"mb-3",children:(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-6 w-1/2 mb-2 rounded"})}),(0,d.jsxs)("div",{className:"space-y-2",children:[(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-4 w-3/4 rounded"}),(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-4 w-5/6 rounded"}),(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-4 w-1/2 rounded"})]}),(0,d.jsxs)("div",{className:"mt-4 flex justify-between items-center",children:[(0,d.jsx)("div",{className:"group",children:(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-4 w-1/4 rounded"})}),(0,d.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-4 w-6 rounded"}),(0,d.jsx)("div",{className:"bg-gradient-to-r from-gray-300 to-gray-100 h-4 w-8 rounded"})]})]})]})]})},v=n(17425),g=n(77372),E=n(45987),y=n(85781),b=n(23423),j=n(87462),N=n(63366),w=n(89611);function S(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,w.Z)(e,t)}var Z=n(54164),k=!1,C=l.createContext(null),O="unmounted",T="exited",V="entering",M="entered",R="exiting",P=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(i=T,r.appearStatus=V):i=M:i=t.unmountOnExit||t.mountOnEnter?O:T,r.state={status:i},r.nextCallback=null,r}S(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===O?{status:T}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==V&&n!==M&&(t=V):n!==V&&n!==M||(t=R)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===V){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:Z.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===T&&this.setState({status:O})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[Z.findDOMNode(this),r],a=i[0],o=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;!e&&!n||k?this.safeSetState({status:M},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:V},(function(){t.props.onEntering(a,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:M},(function(){t.props.onEntered(a,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:Z.findDOMNode(this);t&&!k?(this.props.onExit(r),this.safeSetState({status:R},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:T},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:T},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:Z.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],o=i[1];this.props.addEndListener(a,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===O)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,N.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(C.Provider,{value:null},"function"===typeof n?n(e,r):l.cloneElement(l.Children.only(n),r))},t}(l.Component);function F(){}P.contextType=C,P.propTypes={},P.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:F,onEntering:F,onEntered:F,onExit:F,onExiting:F,onExited:F},P.UNMOUNTED=O,P.EXITED=T,P.ENTERING=V,P.ENTERED=M,P.EXITING=R;var I=P,D=n(97326);function A(e,t){var n=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,l.isValidElement)(e)?t(e):e}(e)})),n}function U(e,t,n){return null!=n[t]?n[t]:e.props[t]}function B(e,t,n){var r=A(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),a=[];for(var o in e)o in t?a.length&&(i[o]=a,a=[]):a.push(o);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];s[i[l][r]]=n(c)}s[l]=n(l)}for(r=0;r<a.length;r++)s[a[r]]=n(a[r]);return s}(t,r);return Object.keys(i).forEach((function(a){var o=i[a];if((0,l.isValidElement)(o)){var s=a in t,c=a in r,u=t[a],d=(0,l.isValidElement)(u)&&!u.props.in;!c||s&&!d?c||!s||d?c&&s&&(0,l.isValidElement)(u)&&(i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:u.props.in,exit:U(o,"exit",e),enter:U(o,"enter",e)})):i[a]=(0,l.cloneElement)(o,{in:!1}):i[a]=(0,l.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:U(o,"exit",e),enter:U(o,"enter",e)})}})),i}var G=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},L=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,D.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}S(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,A(n.children,(function(e){return(0,l.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:U(e,"appear",n),enter:U(e,"enter",n),exit:U(e,"exit",n)})}))):B(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=A(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,j.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,N.Z)(e,["component","childFactory"]),i=this.state.contextValue,a=G(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?l.createElement(C.Provider,{value:i},a):l.createElement(C.Provider,{value:i},l.createElement(t,r,a))},t}(l.Component);L.propTypes={},L.defaultProps={component:"div",childFactory:function(e){return e}};var W=L,_=(n(51672),["in","onExited","appear","enter","exit"]),z=function(e){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var n=(0,E.Z)(t,_);return l.createElement(e,n)}},$=["component","duration","in","onExited"],q=function(e){var t=e.component,n=e.duration,i=void 0===n?1:n,a=e.in;e.onExited;var o=(0,E.Z)(e,$),s=(0,l.useRef)(null),c={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(i,"ms")},exiting:{opacity:0},exited:{opacity:0}};return l.createElement(I,{mountOnEnter:!0,unmountOnExit:!0,in:a,timeout:i,nodeRef:s},(function(e){var n={style:(0,r.Z)({},c[e]),ref:s};return l.createElement(t,(0,j.Z)({innerProps:n},o))}))},H=function(e){var t=e.children,n=e.in,i=e.onExited,a=(0,l.useRef)(null),o=(0,l.useState)("auto"),c=(0,s.Z)(o,2),u=c[0],d=c[1];(0,l.useEffect)((function(){var e=a.current;if(e){var t=window.requestAnimationFrame((function(){return d(e.getBoundingClientRect().width)}));return function(){return window.cancelAnimationFrame(t)}}}),[]);var p=function(e){switch(e){default:return{width:u};case"exiting":return{width:0,transition:"width ".concat(260,"ms ease-out")};case"exited":return{width:0}}};return l.createElement(I,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:n,onExited:function(){var e=a.current;e&&(null===i||void 0===i||i(e))},timeout:260,nodeRef:a},(function(e){return l.createElement("div",{ref:a,style:(0,r.Z)({overflow:"hidden",whiteSpace:"nowrap"},p(e))},t)}))},X=["in","onExited"],Q=function(e){return function(t){var n=t.in,r=t.onExited,i=(0,E.Z)(t,X);return l.createElement(H,{in:n,onExited:r},l.createElement(e,(0,j.Z)({cropWithEllipsis:n},i)))}},J=function(e){return function(t){return l.createElement(q,(0,j.Z)({component:e,duration:t.isMulti?260:1},t))}},K=function(e){return function(t){return l.createElement(q,(0,j.Z)({component:e},t))}},Y=["component"],ee=["children"],te=function(e){var t=e.component,n=(0,E.Z)(e,Y),r=ne(n);return l.createElement(W,(0,j.Z)({component:t},r))},ne=function(e){var t=e.children,n=(0,E.Z)(e,ee),i=n.isMulti,a=n.hasValue,o=n.innerProps,c=n.selectProps,u=c.components,d=c.controlShouldRenderValue,p=(0,l.useState)(i&&d&&a),m=(0,s.Z)(p,2),f=m[0],x=m[1],h=(0,l.useState)(!1),v=(0,s.Z)(h,2),g=v[0],y=v[1];(0,l.useEffect)((function(){a&&!f&&x(!0)}),[a,f]),(0,l.useEffect)((function(){g&&!a&&f&&x(!1),y(!1)}),[g,a,f]);var b=function(){return y(!0)},j=(0,r.Z)((0,r.Z)({},o),{},{style:(0,r.Z)((0,r.Z)({},null===o||void 0===o?void 0:o.style),{},{display:i&&a||f?"flex":"grid"})});return(0,r.Z)((0,r.Z)({},n),{},{innerProps:j,children:l.Children.toArray(t).map((function(e){if(i&&l.isValidElement(e)){if(e.type===u.MultiValue)return l.cloneElement(e,{onExited:b});if(e.type===u.Placeholder&&f)return null}return e}))})},re=function(e){return function(t){return t.isMulti?l.createElement(te,(0,j.Z)({component:e},t)):l.createElement(W,(0,j.Z)({component:e},t))}},ie=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,b.F)({components:e}),n=t.Input,i=t.MultiValue,a=t.Placeholder,o=t.SingleValue,s=t.ValueContainer,l=(0,E.Z)(t,ie);return(0,r.Z)({Input:z(n),MultiValue:Q(i),Placeholder:J(a),SingleValue:K(o),ValueContainer:re(s)},l)},oe=ae(),se=(oe.Input,oe.MultiValue,oe.Placeholder,oe.SingleValue,oe.ValueContainer,(0,y.Z)(ae)),le=n(93047),ce=se(),ue=function(e){var t=e.handleSelect,n=(0,l.useState)(null),r=(0,s.Z)(n,2),i=r[0],c=r[1],u=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,le.tG)();case 3:t=e.sent,c(null===t||void 0===t?void 0:t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.Am.error("Something went wrong",{position:f.Am.POSITION.BOTTOM_RIGHT});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){u()}),[]);return(0,d.jsx)(g.ZP,{className:"basic-single lg:w-1/2  p-4",closeMenuOnSelect:!1,classNamePrefix:"select",components:ce,defaultValue:null,isClearable:!0,isSearchable:!0,name:"color",onChange:function(e){var n;t((null===(n=e[0])||void 0===n?void 0:n.value)||"")},isMulti:!0,placeholder:"Filter by Categories",options:null===i||void 0===i?void 0:i.map((function(e){return{value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name}}))})},de=n(763),pe=n(16856),me=function(){var e=(0,l.useState)([]),t=(0,s.Z)(e,2),n=t[0],c=t[1],u=(0,l.useState)(!0),g=(0,s.Z)(u,2),E=g[0],y=g[1],b=(0,l.useState)(""),j=(0,s.Z)(b,2),N=j[0],w=j[1],S=(0,l.useState)(""),Z=(0,s.Z)(S,2),k=Z[0],C=Z[1],O=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t,n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.V3)();case 3:n=e.sent,c((null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)||[]),setTimeout((function(){y(!1)}),1e3),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),f.Am.error(null===e.t0||void 0===e.t0||null===(r=e.t0.data)||void 0===r?void 0:r.message,{position:f.Am.POSITION.BOTTOM_RIGHT}),y(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){O()}),[]),(0,l.useEffect)((function(){var e=(0,de.debounce)((0,o.Z)((0,a.Z)().mark((function e(){var t,n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===N.trim()){e.next=13;break}return e.prev=1,e.next=4,(0,m.$c)(N,"");case 4:n=e.sent,c((null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)||(null===n||void 0===n?void 0:n.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f.Am.error("Failed to search course");case 11:e.next=27;break;case 13:if(""===k.trim()){e.next=26;break}return e.prev=14,e.next=17,(0,m.$c)("",k);case 17:i=e.sent,c((null===i||void 0===i||null===(r=i.data)||void 0===r?void 0:r.data)||(null===i||void 0===i?void 0:i.data)),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(14),f.Am.error("Failed to search course");case 24:e.next=27;break;case 26:O();case 27:case"end":return e.stop()}}),e,null,[[1,8],[14,21]])}))),500);return e(),function(){e.cancel()}}),[N,k]);return E?(0,d.jsxs)("div",{className:"text-customFontColorBlack  ",children:[(0,d.jsx)("div",{className:"pt-5 pb-5 pl-9 pr-9 mt-5 mx-auto flex justify-center",children:(0,d.jsxs)("div",{className:"w-10/12 ml-2 pl-1 animate-pulse",children:[(0,d.jsx)("h1",{className:"text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 h-8 rounded"}),(0,d.jsx)("p",{className:"text-gray-700 mt-2 bg-gradient-to-r from-gray-300 to-gray-100 h-4 rounded"})]})}),(0,d.jsx)("div",{className:"mx-auto pl-10 pr-10  flex justify-center",children:(0,d.jsx)("div",{className:"w-10/12 pl-1 border-b-gray-100 border-b-2 mx-auto animate-pulse",children:(0,d.jsxs)("div",{className:"flex flex-wrap",children:[(0,d.jsx)("div",{className:"text-gray-900 rounded-lg px-2 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-16"}),(0,d.jsx)("div",{className:"text-gray-900 rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-24"}),(0,d.jsx)("div",{className:"text-gray-900 rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-20"}),(0,d.jsx)("div",{className:"text-gray-900 rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer bg-gradient-to-r from-gray-300 to-gray-100 h-8 w-24"})]})})}),(0,d.jsx)("div",{className:" mx-auto flex justify-center",children:(0,d.jsx)("div",{className:"w-10/12 ",children:(0,d.jsx)("div",{className:"flex mt-3 flex-wrap justify-center",children:(0,i.Z)(Array(8)).map((function(e,t){return(0,d.jsx)("div",{className:"m-2 py-3",children:(0,d.jsx)(h,{})},t)}))})})})]}):(0,d.jsxs)("div",{className:"text-customFontColorBlack",children:[(0,d.jsx)("div",{className:"pt-5 pb-5 pl-9 pr-9 mt-5 mx-auto flex justify-center",children:(0,d.jsxs)("div",{className:"w-10/12 ml-2 pl-1",children:[(0,d.jsx)("h1",{className:"text-2xl lg:text-3xl font-bold",children:"A broad selection of courses"}),(0,d.jsxs)("p",{className:"text-gray-700 md:text-lg sm:text-xs",children:["Choose from over ",null===n||void 0===n?void 0:n.length," online video courses with new additions published every month"]})]})}),(0,d.jsx)("div",{className:"flex p-3 bg-gray-50 justify-center",children:(0,d.jsxs)("div",{className:"p-5 flex flex-col md:flex-row  md:w-8/12 lg:w-6/12 gap-x-5 w-full",children:[(0,d.jsx)(ue,{handleSelect:function(e){C(e)}}),(0,d.jsxs)("div",{className:"relative w-full mt-2 p-2  md:w-1/2",children:[(0,d.jsx)("input",{type:"text",value:N,onChange:function(e){w(e.target.value)},className:"p-1.5 pr-8 border rounded-md  border-gray-400 focus:outline-none focus:border-blue-500 h-10 w-full",placeholder:"Search Courses..."}),(0,d.jsx)("div",{className:"absolute top-7 right-4 transform -translate-y-1/2 text-gray-400 cursor-pointer",children:(0,d.jsx)(v.Qcu,{size:24})})]})]})}),(0,d.jsx)("div",{className:"mx-auto flex justify-center",children:(0,d.jsx)("div",{className:"w-10/12",children:(0,d.jsx)("div",{className:"flex mt-3  flex-wrap justify-center",children:n.length?null===n||void 0===n?void 0:n.map((function(e,t){return(0,d.jsx)(x.rU,{to:e._id,className:"mt-5",children:(0,d.jsx)("div",{className:"m-2",children:(0,d.jsx)(p,(0,r.Z)({},e))})},e._id)})):(0,d.jsxs)("div",{className:"text-center pt-8 pb-14 mt-8",children:[(0,d.jsx)(pe.Woz,{className:"mx-auto text-gray-500 mb-4",size:58}),(0,d.jsx)("p",{className:"text-gray-500 text-lg",children:"No results found for the search query."})]})})})})]})}}}]);
//# sourceMappingURL=321.2ea6dcfd.chunk.js.map