function ww(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ew(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},el={},eg={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),Sw=Symbol.for("react.portal"),xw=Symbol.for("react.fragment"),Cw=Symbol.for("react.strict_mode"),Iw=Symbol.for("react.profiler"),Tw=Symbol.for("react.provider"),kw=Symbol.for("react.context"),Rw=Symbol.for("react.forward_ref"),Nw=Symbol.for("react.suspense"),Pw=Symbol.for("react.memo"),bw=Symbol.for("react.lazy"),sf=Symbol.iterator;function Aw(t){return t===null||typeof t!="object"?null:(t=sf&&t[sf]||t["@@iterator"],typeof t=="function"?t:null)}var tg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ng=Object.assign,rg={};function wi(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||tg}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=wi.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||tg}var Zu=Ju.prototype=new ig;Zu.constructor=Ju;ng(Zu,wi.prototype);Zu.isPureReactComponent=!0;var of=Array.isArray,sg=Object.prototype.hasOwnProperty,ed={current:null},og={key:!0,ref:!0,__self:!0,__source:!0};function ag(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sg.call(e,r)&&!og.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xs,type:t,key:s,ref:o,props:i,_owner:ed.current}}function Ow(t,e){return{$$typeof:Xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xs}function Dw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var af=/\/+/g;function Ul(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dw(""+t.key):e.toString(36)}function Wo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xs:case Sw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ul(o,0):r,of(i)?(n="",t!=null&&(n=t.replace(af,"$&/")+"/"),Wo(i,e,n,"",function(u){return u})):i!=null&&(td(i)&&(i=Ow(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(af,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",of(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ul(s,a);o+=Wo(s,e,n,l,i)}else if(l=Aw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ul(s,a++),o+=Wo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _o(t,e,n){if(t==null)return t;var r=[],i=0;return Wo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Lw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},$o={transition:null},jw={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:$o,ReactCurrentOwner:ed};function lg(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:_o,forEach:function(t,e,n){_o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _o(t,function(){e++}),e},toArray:function(t){return _o(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=wi;B.Fragment=xw;B.Profiler=Iw;B.PureComponent=Ju;B.StrictMode=Cw;B.Suspense=Nw;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jw;B.act=lg;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ng({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)sg.call(e,l)&&!og.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xs,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:kw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tw,_context:t},t.Consumer=t};B.createElement=ag;B.createFactory=function(t){var e=ag.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Rw,render:t}};B.isValidElement=td;B.lazy=function(t){return{$$typeof:bw,_payload:{_status:-1,_result:t},_init:Lw}};B.memo=function(t,e){return{$$typeof:Pw,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};B.unstable_act=lg;B.useCallback=function(t,e){return Ue.current.useCallback(t,e)};B.useContext=function(t){return Ue.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};B.useEffect=function(t,e){return Ue.current.useEffect(t,e)};B.useId=function(){return Ue.current.useId()};B.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Ue.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};B.useRef=function(t){return Ue.current.useRef(t)};B.useState=function(t){return Ue.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Ue.current.useTransition()};B.version="18.3.1";eg.exports=B;var x=eg.exports;const cg=Ew(x),Mw=ww({__proto__:null,default:cg},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fw=x,Uw=Symbol.for("react.element"),zw=Symbol.for("react.fragment"),Bw=Object.prototype.hasOwnProperty,Ww=Fw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$w={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bw.call(e,r)&&!$w.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Uw,type:t,key:s,ref:o,props:i,_owner:Ww.current}}el.Fragment=zw;el.jsx=ug;el.jsxs=ug;Zm.exports=el;var c=Zm.exports,dg={exports:{}},nt={},hg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,M){var S=R.length;R.push(M);e:for(;0<S;){var k=S-1>>>1,D=R[k];if(0<i(D,M))R[k]=M,R[S]=D,S=k;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],S=R.pop();if(S!==M){R[0]=S;e:for(var k=0,D=R.length,Ke=D>>>1;k<Ke;){var pt=2*(k+1)-1,Fl=R[pt],Jn=pt+1,yo=R[Jn];if(0>i(Fl,S))Jn<D&&0>i(yo,Fl)?(R[k]=yo,R[Jn]=S,k=Jn):(R[k]=Fl,R[pt]=S,k=pt);else if(Jn<D&&0>i(yo,S))R[k]=yo,R[Jn]=S,k=Jn;else break e}}return M}function i(R,M){var S=R.sortIndex-M.sortIndex;return S!==0?S:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,m=!1,_=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function E(R){if(v=!1,y(R),!_)if(n(l)!==null)_=!0,bi(T);else{var M=n(u);M!==null&&Ai(E,M.startTime-R)}}function T(R,M){_=!1,v&&(v=!1,g(A),A=-1),m=!0;var S=f;try{for(y(M),d=n(l);d!==null&&(!(d.expirationTime>M)||R&&!_e());){var k=d.callback;if(typeof k=="function"){d.callback=null,f=d.priorityLevel;var D=k(d.expirationTime<=M);M=t.unstable_now(),typeof D=="function"?d.callback=D:d===n(l)&&r(l),y(M)}else r(l);d=n(l)}if(d!==null)var Ke=!0;else{var pt=n(u);pt!==null&&Ai(E,pt.startTime-M),Ke=!1}return Ke}finally{d=null,f=S,m=!1}}var b=!1,P=null,A=-1,ne=5,F=-1;function _e(){return!(t.unstable_now()-F<ne)}function Qn(){if(P!==null){var R=t.unstable_now();F=R;var M=!0;try{M=P(!0,R)}finally{M?Xn():(b=!1,P=null)}}else b=!1}var Xn;if(typeof p=="function")Xn=function(){p(Qn)};else if(typeof MessageChannel<"u"){var go=new MessageChannel,Ml=go.port2;go.port1.onmessage=Qn,Xn=function(){Ml.postMessage(null)}}else Xn=function(){w(Qn,0)};function bi(R){P=R,b||(b=!0,Xn())}function Ai(R,M){A=w(function(){R(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,bi(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var S=f;f=M;try{return R()}finally{f=S}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var S=f;f=R;try{return M()}finally{f=S}},t.unstable_scheduleCallback=function(R,M,S){var k=t.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?k+S:k):S=k,R){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=S+D,R={id:h++,callback:M,priorityLevel:R,startTime:S,expirationTime:D,sortIndex:-1},S>k?(R.sortIndex=S,e(u,R),n(l)===null&&R===n(u)&&(v?(g(A),A=-1):v=!0,Ai(E,S-k))):(R.sortIndex=D,e(l,R),_||m||(_=!0,bi(T))),R},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(R){var M=f;return function(){var S=f;f=M;try{return R.apply(this,arguments)}finally{f=S}}}})(fg);hg.exports=fg;var Vw=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw=x,tt=Vw;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,_s={};function Cr(t,e){oi(t,e),oi(t+"Capture",e)}function oi(t,e){for(_s[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=Object.prototype.hasOwnProperty,Gw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lf={},cf={};function qw(t){return Ac.call(cf,t)?!0:Ac.call(lf,t)?!1:Gw.test(t)?cf[t]=!0:(lf[t]=!0,!1)}function Kw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yw(t,e,n,r){if(e===null||typeof e>"u"||Kw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,rd);Te[e]=new ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,rd);Te[e]=new ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,rd);Te[e]=new ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new ze(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yw(e,n,i,r)&&(n=null),r||i===null?qw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rn=Hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),yg=Symbol.for("react.offscreen"),uf=Symbol.iterator;function Oi(t){return t===null||typeof t!="object"?null:(t=uf&&t[uf]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,zl;function qi(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Bl=!1;function Wl(t,e){if(!t||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function Qw(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Dr:return"Portal";case Oc:return"Profiler";case sd:return"StrictMode";case Dc:return"Suspense";case Lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gg:return(t.displayName||"Context")+".Consumer";case mg:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case cn:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function Xw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jw(t){var e=_g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=Jw(t))}function vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_g(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mc(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function df(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function Fc(t,e){wg(t,e);var n=Ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uc(t,e.type,Ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uc(t,e,n){(e!=="number"||sa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ki=Array.isArray;function Kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ff(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ki(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ln(n)}}function Eg(t,e){var n=Ln(e.value),r=Ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zw=["Webkit","ms","Moz","O"];Object.keys(Zi).forEach(function(t){Zw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zi[e]=Zi[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zi.hasOwnProperty(t)&&Zi[t]?(""+e).trim():e+"px"}function Ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var e1=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vc=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,Yr=null,Qr=null;function mf(t){if(t=eo(t)){if(typeof Hc!="function")throw Error(C(280));var e=t.stateNode;e&&(e=sl(e),Hc(t.stateNode,t.type,e))}}function Tg(t){Yr?Qr?Qr.push(t):Qr=[t]:Yr=t}function kg(){if(Yr){var t=Yr,e=Qr;if(Qr=Yr=null,mf(t),e)for(t=0;t<e.length;t++)mf(e[t])}}function Rg(t,e){return t(e)}function Ng(){}var $l=!1;function Pg(t,e,n){if($l)return t(e,n);$l=!0;try{return Rg(t,e,n)}finally{$l=!1,(Yr!==null||Qr!==null)&&(Ng(),kg())}}function ws(t,e){var n=t.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Gc=!1;if(Qt)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{Gc=!1}function t1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var es=!1,oa=null,aa=!1,qc=null,n1={onError:function(t){es=!0,oa=t}};function r1(t,e,n,r,i,s,o,a,l){es=!1,oa=null,t1.apply(n1,arguments)}function i1(t,e,n,r,i,s,o,a,l){if(r1.apply(this,arguments),es){if(es){var u=oa;es=!1,oa=null}else throw Error(C(198));aa||(aa=!0,qc=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gf(t){if(Ir(t)!==t)throw Error(C(188))}function s1(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return gf(i),t;if(s===r)return gf(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Ag(t){return t=s1(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var Dg=tt.unstable_scheduleCallback,yf=tt.unstable_cancelCallback,o1=tt.unstable_shouldYield,a1=tt.unstable_requestPaint,de=tt.unstable_now,l1=tt.unstable_getCurrentPriorityLevel,cd=tt.unstable_ImmediatePriority,Lg=tt.unstable_UserBlockingPriority,la=tt.unstable_NormalPriority,c1=tt.unstable_LowPriority,jg=tt.unstable_IdlePriority,tl=null,Lt=null;function u1(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:f1,d1=Math.log,h1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(d1(t)/h1|0)|0}var So=64,xo=4194304;function Yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ca(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Yi(a):(s&=o,s!==0&&(r=Yi(s)))}else o=n&~i,o!==0?r=Yi(o):s!==0&&(r=Yi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=p1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Mg(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function Vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ug,dd,zg,Bg,Wg,Yc=!1,Co=[],Sn=null,xn=null,Cn=null,Es=new Map,Ss=new Map,dn=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _f(t,e){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Es.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(e.pointerId)}}function Li(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eo(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _1(t,e,n,r,i){switch(e){case"focusin":return Sn=Li(Sn,t,e,n,r,i),!0;case"dragenter":return xn=Li(xn,t,e,n,r,i),!0;case"mouseover":return Cn=Li(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Es.set(s,Li(Es.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ss.set(s,Li(Ss.get(s)||null,t,e,n,r,i)),!0}return!1}function $g(t){var e=rr(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Wg(t.priority,function(){zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vc=r,n.target.dispatchEvent(r),Vc=null}else return e=eo(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function vf(t,e,n){Vo(t)&&n.delete(e)}function v1(){Yc=!1,Sn!==null&&Vo(Sn)&&(Sn=null),xn!==null&&Vo(xn)&&(xn=null),Cn!==null&&Vo(Cn)&&(Cn=null),Es.forEach(vf),Ss.forEach(vf)}function ji(t,e){t.blockedOn===e&&(t.blockedOn=null,Yc||(Yc=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,v1)))}function xs(t){function e(i){return ji(i,t)}if(0<Co.length){ji(Co[0],t);for(var n=1;n<Co.length;n++){var r=Co[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sn!==null&&ji(Sn,t),xn!==null&&ji(xn,t),Cn!==null&&ji(Cn,t),Es.forEach(e),Ss.forEach(e),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&dn.shift()}var Xr=rn.ReactCurrentBatchConfig,ua=!0;function w1(t,e,n,r){var i=H,s=Xr.transition;Xr.transition=null;try{H=1,hd(t,e,n,r)}finally{H=i,Xr.transition=s}}function E1(t,e,n,r){var i=H,s=Xr.transition;Xr.transition=null;try{H=4,hd(t,e,n,r)}finally{H=i,Xr.transition=s}}function hd(t,e,n,r){if(ua){var i=Qc(t,e,n,r);if(i===null)ec(t,e,r,da,n),_f(t,r);else if(_1(i,t,e,n,r))r.stopPropagation();else if(_f(t,r),e&4&&-1<y1.indexOf(t)){for(;i!==null;){var s=eo(i);if(s!==null&&Ug(s),s=Qc(t,e,n,r),s===null&&ec(t,e,r,da,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ec(t,e,r,null,n)}}var da=null;function Qc(t,e,n,r){if(da=null,t=ld(r),t=rr(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return da=t,null}function Vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case cd:return 1;case Lg:return 4;case la:case c1:return 16;case jg:return 536870912;default:return 16}default:return 16}}var _n=null,fd=null,Ho=null;function Hg(){if(Ho)return Ho;var t,e=fd,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ho=i.slice(t,1<r?1-r:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function wf(){return!1}function rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:wf,this.isPropagationStopped=wf,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=rt(Ei),Zs=se({},Ei,{view:0,detail:0}),S1=rt(Zs),Hl,Gl,Mi,nl=se({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(Hl=t.screenX-Mi.screenX,Gl=t.screenY-Mi.screenY):Gl=Hl=0,Mi=t),Hl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),Ef=rt(nl),x1=se({},nl,{dataTransfer:0}),C1=rt(x1),I1=se({},Zs,{relatedTarget:0}),ql=rt(I1),T1=se({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=rt(T1),R1=se({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),N1=rt(R1),P1=se({},Ei,{data:0}),Sf=rt(P1),b1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=O1[t])?!!e[t]:!1}function md(){return D1}var L1=se({},Zs,{key:function(t){if(t.key){var e=b1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j1=rt(L1),M1=se({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=rt(M1),F1=se({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),U1=rt(F1),z1=se({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=rt(z1),W1=se({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=rt(W1),V1=[9,13,27,32],gd=Qt&&"CompositionEvent"in window,ts=null;Qt&&"documentMode"in document&&(ts=document.documentMode);var H1=Qt&&"TextEvent"in window&&!ts,Gg=Qt&&(!gd||ts&&8<ts&&11>=ts),Cf=" ",If=!1;function qg(t,e){switch(t){case"keyup":return V1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function G1(t,e){switch(t){case"compositionend":return Kg(e);case"keypress":return e.which!==32?null:(If=!0,Cf);case"textInput":return t=e.data,t===Cf&&If?null:t;default:return null}}function q1(t,e){if(jr)return t==="compositionend"||!gd&&qg(t,e)?(t=Hg(),Ho=fd=_n=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function Yg(t,e,n,r){Tg(r),e=ha(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ns=null,Cs=null;function Y1(t){oy(t,0)}function rl(t){var e=Ur(t);if(vg(e))return t}function Q1(t,e){if(t==="change")return e}var Qg=!1;if(Qt){var Kl;if(Qt){var Yl="oninput"in document;if(!Yl){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Yl=typeof kf.oninput=="function"}Kl=Yl}else Kl=!1;Qg=Kl&&(!document.documentMode||9<document.documentMode)}function Rf(){ns&&(ns.detachEvent("onpropertychange",Xg),Cs=ns=null)}function Xg(t){if(t.propertyName==="value"&&rl(Cs)){var e=[];Yg(e,Cs,t,ld(t)),Pg(Y1,e)}}function X1(t,e,n){t==="focusin"?(Rf(),ns=e,Cs=n,ns.attachEvent("onpropertychange",Xg)):t==="focusout"&&Rf()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl(Cs)}function Z1(t,e){if(t==="click")return rl(e)}function eE(t,e){if(t==="input"||t==="change")return rl(e)}function tE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:tE;function Is(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ac.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pf(t,e){var n=Nf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nf(n)}}function Jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=sa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sa(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nE(t){var e=Zg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jg(n.ownerDocument.documentElement,n)){if(r!==null&&yd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pf(n,s);var o=Pf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rE=Qt&&"documentMode"in document&&11>=document.documentMode,Mr=null,Xc=null,rs=null,Jc=!1;function bf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||Mr==null||Mr!==sa(r)||(r=Mr,"selectionStart"in r&&yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rs&&Is(rs,r)||(rs=r,r=ha(Xc,"onSelect"),0<r.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mr)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Ql={},ey={};Qt&&(ey=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function il(t){if(Ql[t])return Ql[t];if(!Fr[t])return t;var e=Fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ey)return Ql[t]=e[n];return t}var ty=il("animationend"),ny=il("animationiteration"),ry=il("animationstart"),iy=il("transitionend"),sy=new Map,Af="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(t,e){sy.set(t,e),Cr(e,[t])}for(var Xl=0;Xl<Af.length;Xl++){var Jl=Af[Xl],iE=Jl.toLowerCase(),sE=Jl[0].toUpperCase()+Jl.slice(1);Bn(iE,"on"+sE)}Bn(ty,"onAnimationEnd");Bn(ny,"onAnimationIteration");Bn(ry,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(iy,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Of(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,i1(r,e,void 0,t),t.currentTarget=null}function oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Of(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Of(i,a,u),s=l}}}if(aa)throw t=qc,aa=!1,qc=null,t}function X(t,e){var n=e[ru];n===void 0&&(n=e[ru]=new Set);var r=t+"__bubble";n.has(r)||(ay(e,t,2,!1),n.add(r))}function Zl(t,e,n){var r=0;e&&(r|=4),ay(n,t,r,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[ko]){t[ko]=!0,pg.forEach(function(n){n!=="selectionchange"&&(oE.has(n)||Zl(n,!1,t),Zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,Zl("selectionchange",!1,e))}}function ay(t,e,n,r){switch(Vg(e)){case 1:var i=w1;break;case 4:i=E1;break;default:i=hd}n=i.bind(null,e,n,t),i=void 0,!Gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ec(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Pg(function(){var u=s,h=ld(n),d=[];e:{var f=sy.get(t);if(f!==void 0){var m=pd,_=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":m=j1;break;case"focusin":_="focus",m=ql;break;case"focusout":_="blur",m=ql;break;case"beforeblur":case"afterblur":m=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=U1;break;case ty:case ny:case ry:m=k1;break;case iy:m=B1;break;case"scroll":m=S1;break;case"wheel":m=$1;break;case"copy":case"cut":case"paste":m=N1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=xf}var v=(e&4)!==0,w=!v&&t==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,y;p!==null;){y=p;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=ws(p,g),E!=null&&v.push(ks(p,E,y)))),w)break;p=p.return}0<v.length&&(f=new m(f,_,null,n,h),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Vc&&(_=n.relatedTarget||n.fromElement)&&(rr(_)||_[Xt]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?rr(_):null,_!==null&&(w=Ir(_),_!==w||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(v=Ef,E="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=xf,E="onPointerLeave",g="onPointerEnter",p="pointer"),w=m==null?f:Ur(m),y=_==null?f:Ur(_),f=new v(E,p+"leave",m,n,h),f.target=w,f.relatedTarget=y,E=null,rr(h)===u&&(v=new v(g,p+"enter",_,n,h),v.target=y,v.relatedTarget=w,E=v),w=E,m&&_)t:{for(v=m,g=_,p=0,y=v;y;y=Ar(y))p++;for(y=0,E=g;E;E=Ar(E))y++;for(;0<p-y;)v=Ar(v),p--;for(;0<y-p;)g=Ar(g),y--;for(;p--;){if(v===g||g!==null&&v===g.alternate)break t;v=Ar(v),g=Ar(g)}v=null}else v=null;m!==null&&Df(d,f,m,v,!1),_!==null&&w!==null&&Df(d,w,_,v,!0)}}e:{if(f=u?Ur(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=Q1;else if(Tf(f))if(Qg)T=eE;else{T=J1;var b=X1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=Z1);if(T&&(T=T(t,u))){Yg(d,T,n,h);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Uc(f,"number",f.value)}switch(b=u?Ur(u):window,t){case"focusin":(Tf(b)||b.contentEditable==="true")&&(Mr=b,Xc=u,rs=null);break;case"focusout":rs=Xc=Mr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,bf(d,n,h);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":bf(d,n,h)}var P;if(gd)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else jr?qg(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Gg&&n.locale!=="ko"&&(jr||A!=="onCompositionStart"?A==="onCompositionEnd"&&jr&&(P=Hg()):(_n=h,fd="value"in _n?_n.value:_n.textContent,jr=!0)),b=ha(u,A),0<b.length&&(A=new Sf(A,t,null,n,h),d.push({event:A,listeners:b}),P?A.data=P:(P=Kg(n),P!==null&&(A.data=P)))),(P=H1?G1(t,n):q1(t,n))&&(u=ha(u,"onBeforeInput"),0<u.length&&(h=new Sf("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=P))}oy(d,e)})}function ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ha(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ws(t,n),s!=null&&r.unshift(ks(t,s,i)),s=ws(t,e),s!=null&&r.push(ks(t,s,i))),t=t.return}return r}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ws(n,s),l!=null&&o.unshift(ks(n,l,a))):i||(l=ws(n,s),l!=null&&o.push(ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function Lf(t){return(typeof t=="string"?t:""+t).replace(aE,`
`).replace(lE,"")}function Ro(t,e,n){if(e=Lf(e),Lf(t)!==e&&n)throw Error(C(425))}function fa(){}var Zc=null,eu=null;function tu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof jf<"u"?function(t){return jf.resolve(null).then(t).catch(dE)}:nu;function dE(t){setTimeout(function(){throw t})}function tc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xs(e)}function In(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Si=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Si,Rs="__reactProps$"+Si,Xt="__reactContainer$"+Si,ru="__reactEvents$"+Si,hE="__reactListeners$"+Si,fE="__reactHandles$"+Si;function rr(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mf(t);t!==null;){if(n=t[Ot])return n;t=Mf(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[Ot]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function sl(t){return t[Rs]||null}var iu=[],zr=-1;function Wn(t){return{current:t}}function J(t){0>zr||(t.current=iu[zr],iu[zr]=null,zr--)}function Q(t,e){zr++,iu[zr]=t.current,t.current=e}var jn={},be=Wn(jn),Ve=Wn(!1),dr=jn;function ai(t,e){var n=t.type.contextTypes;if(!n)return jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function He(t){return t=t.childContextTypes,t!=null}function pa(){J(Ve),J(be)}function Ff(t,e,n){if(be.current!==jn)throw Error(C(168));Q(be,e),Q(Ve,n)}function ly(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Xw(t)||"Unknown",i));return se({},n,r)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||jn,dr=be.current,Q(be,t),Q(Ve,Ve.current),!0}function Uf(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=ly(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,J(Ve),J(be),Q(be,t)):J(Ve),Q(Ve,n)}var Bt=null,ol=!1,nc=!1;function cy(t){Bt===null?Bt=[t]:Bt.push(t)}function pE(t){ol=!0,cy(t)}function $n(){if(!nc&&Bt!==null){nc=!0;var t=0,e=H;try{var n=Bt;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bt=null,ol=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(t+1)),Dg(cd,$n),i}finally{H=e,nc=!1}}return null}var Br=[],Wr=0,ga=null,ya=0,st=[],ot=0,hr=null,Wt=1,$t="";function Zn(t,e){Br[Wr++]=ya,Br[Wr++]=ga,ga=t,ya=e}function uy(t,e,n){st[ot++]=Wt,st[ot++]=$t,st[ot++]=hr,hr=t;var r=Wt;t=$t;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-Ct(e)+i|n<<i|r,$t=s+t}else Wt=1<<s|n<<i|r,$t=t}function _d(t){t.return!==null&&(Zn(t,1),uy(t,1,0))}function vd(t){for(;t===ga;)ga=Br[--Wr],Br[Wr]=null,ya=Br[--Wr],Br[Wr]=null;for(;t===hr;)hr=st[--ot],st[ot]=null,$t=st[--ot],st[ot]=null,Wt=st[--ot],st[ot]=null}var Ze=null,Xe=null,ee=!1,_t=null;function dy(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=In(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hr!==null?{id:Wt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Xe=null,!0):!1;default:return!1}}function su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ou(t){if(ee){var e=Xe;if(e){var n=e;if(!zf(t,e)){if(su(t))throw Error(C(418));e=In(n.nextSibling);var r=Ze;e&&zf(t,e)?dy(r,n):(t.flags=t.flags&-4097|2,ee=!1,Ze=t)}}else{if(su(t))throw Error(C(418));t.flags=t.flags&-4097|2,ee=!1,Ze=t}}}function Bf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function No(t){if(t!==Ze)return!1;if(!ee)return Bf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!tu(t.type,t.memoizedProps)),e&&(e=Xe)){if(su(t))throw hy(),Error(C(418));for(;e;)dy(t,e),e=In(e.nextSibling)}if(Bf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=In(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Ze?In(t.stateNode.nextSibling):null;return!0}function hy(){for(var t=Xe;t;)t=In(t.nextSibling)}function li(){Xe=Ze=null,ee=!1}function wd(t){_t===null?_t=[t]:_t.push(t)}var mE=rn.ReactCurrentBatchConfig;function Fi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Po(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wf(t){var e=t._init;return e(t._payload)}function fy(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Nn(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,E){return p===null||p.tag!==6?(p=cc(y,g.mode,E),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,E){var T=y.type;return T===Lr?h(g,p,y.props.children,E,y.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cn&&Wf(T)===p.type)?(E=i(p,y.props),E.ref=Fi(g,p,y),E.return=g,E):(E=Zo(y.type,y.key,y.props,null,g.mode,E),E.ref=Fi(g,p,y),E.return=g,E)}function u(g,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=uc(y,g.mode,E),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function h(g,p,y,E,T){return p===null||p.tag!==7?(p=cr(y,g.mode,E,T),p.return=g,p):(p=i(p,y),p.return=g,p)}function d(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=cc(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vo:return y=Zo(p.type,p.key,p.props,null,g.mode,y),y.ref=Fi(g,null,p),y.return=g,y;case Dr:return p=uc(p,g.mode,y),p.return=g,p;case cn:var E=p._init;return d(g,E(p._payload),y)}if(Ki(p)||Oi(p))return p=cr(p,g.mode,y,null),p.return=g,p;Po(g,p)}return null}function f(g,p,y,E){var T=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:return y.key===T?l(g,p,y,E):null;case Dr:return y.key===T?u(g,p,y,E):null;case cn:return T=y._init,f(g,p,T(y._payload),E)}if(Ki(y)||Oi(y))return T!==null?null:h(g,p,y,E,null);Po(g,y)}return null}function m(g,p,y,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(p,g,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case vo:return g=g.get(E.key===null?y:E.key)||null,l(p,g,E,T);case Dr:return g=g.get(E.key===null?y:E.key)||null,u(p,g,E,T);case cn:var b=E._init;return m(g,p,y,b(E._payload),T)}if(Ki(E)||Oi(E))return g=g.get(y)||null,h(p,g,E,T,null);Po(p,E)}return null}function _(g,p,y,E){for(var T=null,b=null,P=p,A=p=0,ne=null;P!==null&&A<y.length;A++){P.index>A?(ne=P,P=null):ne=P.sibling;var F=f(g,P,y[A],E);if(F===null){P===null&&(P=ne);break}t&&P&&F.alternate===null&&e(g,P),p=s(F,p,A),b===null?T=F:b.sibling=F,b=F,P=ne}if(A===y.length)return n(g,P),ee&&Zn(g,A),T;if(P===null){for(;A<y.length;A++)P=d(g,y[A],E),P!==null&&(p=s(P,p,A),b===null?T=P:b.sibling=P,b=P);return ee&&Zn(g,A),T}for(P=r(g,P);A<y.length;A++)ne=m(P,g,A,y[A],E),ne!==null&&(t&&ne.alternate!==null&&P.delete(ne.key===null?A:ne.key),p=s(ne,p,A),b===null?T=ne:b.sibling=ne,b=ne);return t&&P.forEach(function(_e){return e(g,_e)}),ee&&Zn(g,A),T}function v(g,p,y,E){var T=Oi(y);if(typeof T!="function")throw Error(C(150));if(y=T.call(y),y==null)throw Error(C(151));for(var b=T=null,P=p,A=p=0,ne=null,F=y.next();P!==null&&!F.done;A++,F=y.next()){P.index>A?(ne=P,P=null):ne=P.sibling;var _e=f(g,P,F.value,E);if(_e===null){P===null&&(P=ne);break}t&&P&&_e.alternate===null&&e(g,P),p=s(_e,p,A),b===null?T=_e:b.sibling=_e,b=_e,P=ne}if(F.done)return n(g,P),ee&&Zn(g,A),T;if(P===null){for(;!F.done;A++,F=y.next())F=d(g,F.value,E),F!==null&&(p=s(F,p,A),b===null?T=F:b.sibling=F,b=F);return ee&&Zn(g,A),T}for(P=r(g,P);!F.done;A++,F=y.next())F=m(P,g,A,F.value,E),F!==null&&(t&&F.alternate!==null&&P.delete(F.key===null?A:F.key),p=s(F,p,A),b===null?T=F:b.sibling=F,b=F);return t&&P.forEach(function(Qn){return e(g,Qn)}),ee&&Zn(g,A),T}function w(g,p,y,E){if(typeof y=="object"&&y!==null&&y.type===Lr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vo:e:{for(var T=y.key,b=p;b!==null;){if(b.key===T){if(T=y.type,T===Lr){if(b.tag===7){n(g,b.sibling),p=i(b,y.props.children),p.return=g,g=p;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cn&&Wf(T)===b.type){n(g,b.sibling),p=i(b,y.props),p.ref=Fi(g,b,y),p.return=g,g=p;break e}n(g,b);break}else e(g,b);b=b.sibling}y.type===Lr?(p=cr(y.props.children,g.mode,E,y.key),p.return=g,g=p):(E=Zo(y.type,y.key,y.props,null,g.mode,E),E.ref=Fi(g,p,y),E.return=g,g=E)}return o(g);case Dr:e:{for(b=y.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=uc(y,g.mode,E),p.return=g,g=p}return o(g);case cn:return b=y._init,w(g,p,b(y._payload),E)}if(Ki(y))return _(g,p,y,E);if(Oi(y))return v(g,p,y,E);Po(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=cc(y,g.mode,E),p.return=g,g=p),o(g)):n(g,p)}return w}var ci=fy(!0),py=fy(!1),_a=Wn(null),va=null,$r=null,Ed=null;function Sd(){Ed=$r=va=null}function xd(t){var e=_a.current;J(_a),t._currentValue=e}function au(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Jr(t,e){va=t,Ed=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(We=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(va===null)throw Error(C(308));$r=t,va.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var ir=null;function Cd(t){ir===null?ir=[t]:ir.push(t)}function my(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var un=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ud(t,n)}}function $f(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wa(t,e,n,r){var i=t.updateQueue;un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(f=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(m,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(m,d,f):_,f==null)break e;d=se({},d,f);break e;case 2:un=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=m,l=d):h=h.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);pr|=o,t.lanes=o,t.memoizedState=d}}function Vf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var to={},jt=Wn(to),Ns=Wn(to),Ps=Wn(to);function sr(t){if(t===to)throw Error(C(174));return t}function Td(t,e){switch(Q(Ps,e),Q(Ns,t),Q(jt,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bc(e,t)}J(jt),Q(jt,e)}function ui(){J(jt),J(Ns),J(Ps)}function yy(t){sr(Ps.current);var e=sr(jt.current),n=Bc(e,t.type);e!==n&&(Q(Ns,t),Q(jt,n))}function kd(t){Ns.current===t&&(J(jt),J(Ns))}var re=Wn(0);function Ea(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rc=[];function Rd(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var Ko=rn.ReactCurrentDispatcher,ic=rn.ReactCurrentBatchConfig,fr=0,ie=null,pe=null,we=null,Sa=!1,is=!1,bs=0,gE=0;function Re(){throw Error(C(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if(fr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?wE:EE,t=n(r,i),is){s=0;do{if(is=!1,bs=0,25<=s)throw Error(C(301));s+=1,we=pe=null,e.updateQueue=null,Ko.current=SE,t=n(r,i)}while(is)}if(Ko.current=xa,e=pe!==null&&pe.next!==null,fr=0,we=pe=ie=null,Sa=!1,e)throw Error(C(300));return t}function bd(){var t=bs!==0;return bs=0,t}function At(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ie.memoizedState=we=t:we=we.next=t,we}function dt(){if(pe===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=pe.next;var e=we===null?ie.memoizedState:we.next;if(e!==null)we=e,pe=t;else{if(t===null)throw Error(C(310));pe=t,t={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?ie.memoizedState=we=t:we=we.next=t}return we}function As(t,e){return typeof e=="function"?e(t):e}function sc(t){var e=dt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((fr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ie.lanes|=h,pr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(We=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,pr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oc(t){var e=dt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(We=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function _y(){}function vy(t,e){var n=ie,r=dt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,We=!0),r=r.queue,Ad(Sy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Os(9,Ey.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(C(349));fr&30||wy(n,e,i)}return i}function wy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ey(t,e,n,r){e.value=n,e.getSnapshot=r,xy(e)&&Cy(t)}function Sy(t,e,n){return n(function(){xy(e)&&Cy(t)})}function xy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Cy(t){var e=Jt(t,1);e!==null&&It(e,t,1,-1)}function Hf(t){var e=At();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},e.queue=t,t=t.dispatch=vE.bind(null,ie,t),[e.memoizedState,t]}function Os(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Iy(){return dt().memoizedState}function Yo(t,e,n,r){var i=At();ie.flags|=t,i.memoizedState=Os(1|e,n,void 0,r===void 0?null:r)}function al(t,e,n,r){var i=dt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&Nd(r,o.deps)){i.memoizedState=Os(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Os(1|e,n,s,r)}function Gf(t,e){return Yo(8390656,8,t,e)}function Ad(t,e){return al(2048,8,t,e)}function Ty(t,e){return al(4,2,t,e)}function ky(t,e){return al(4,4,t,e)}function Ry(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ny(t,e,n){return n=n!=null?n.concat([t]):null,al(4,4,Ry.bind(null,e,t),n)}function Od(){}function Py(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function by(t,e){var n=dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Nd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ay(t,e,n){return fr&21?(kt(n,e)||(n=Mg(),ie.lanes|=n,pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,We=!0),t.memoizedState=n)}function yE(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=ic.transition;ic.transition={};try{t(!1),e()}finally{H=n,ic.transition=r}}function Oy(){return dt().memoizedState}function _E(t,e,n){var r=Rn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dy(t))Ly(e,n);else if(n=my(t,e,n,r),n!==null){var i=Le();It(n,t,r,i),jy(n,e,r)}}function vE(t,e,n){var r=Rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dy(t))Ly(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Cd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=my(t,e,i,r),n!==null&&(i=Le(),It(n,t,r,i),jy(n,e,r))}}function Dy(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Ly(t,e){is=Sa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ud(t,n)}}var xa={readContext:ut,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},wE={readContext:ut,useCallback:function(t,e){return At().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yo(4194308,4,Ry.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yo(4,2,t,e)},useMemo:function(t,e){var n=At();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=At();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_E.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=At();return t={current:t},e.memoizedState=t},useState:Hf,useDebugValue:Od,useDeferredValue:function(t){return At().memoizedState=t},useTransition:function(){var t=Hf(!1),e=t[0];return t=yE.bind(null,t[1]),At().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=At();if(ee){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Se===null)throw Error(C(349));fr&30||wy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gf(Sy.bind(null,r,s,t),[t]),r.flags|=2048,Os(9,Ey.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=At(),e=Se.identifierPrefix;if(ee){var n=$t,r=Wt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EE={readContext:ut,useCallback:Py,useContext:ut,useEffect:Ad,useImperativeHandle:Ny,useInsertionEffect:Ty,useLayoutEffect:ky,useMemo:by,useReducer:sc,useRef:Iy,useState:function(){return sc(As)},useDebugValue:Od,useDeferredValue:function(t){var e=dt();return Ay(e,pe.memoizedState,t)},useTransition:function(){var t=sc(As)[0],e=dt().memoizedState;return[t,e]},useMutableSource:_y,useSyncExternalStore:vy,useId:Oy,unstable_isNewReconciler:!1},SE={readContext:ut,useCallback:Py,useContext:ut,useEffect:Ad,useImperativeHandle:Ny,useInsertionEffect:Ty,useLayoutEffect:ky,useMemo:by,useReducer:oc,useRef:Iy,useState:function(){return oc(As)},useDebugValue:Od,useDeferredValue:function(t){var e=dt();return pe===null?e.memoizedState=t:Ay(e,pe.memoizedState,t)},useTransition:function(){var t=oc(As)[0],e=dt().memoizedState;return[t,e]},useMutableSource:_y,useSyncExternalStore:vy,useId:Oy,unstable_isNewReconciler:!1};function gt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ll={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Le(),i=Rn(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tn(t,s,i),e!==null&&(It(e,t,i,r),qo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Le(),i=Rn(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tn(t,s,i),e!==null&&(It(e,t,i,r),qo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Le(),r=Rn(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tn(t,i,r),e!==null&&(It(e,t,r,n),qo(e,t,r))}};function qf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Is(n,r)||!Is(i,s):!0}function My(t,e,n){var r=!1,i=jn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=He(e)?dr:be.current,r=e.contextTypes,s=(r=r!=null)?ai(t,i):jn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ll.enqueueReplaceState(e,e.state,null)}function cu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=He(e)?dr:be.current,i.context=ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ll.enqueueReplaceState(i,i.state,null),wa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function di(t,e){try{var n="",r=e;do n+=Qw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xE=typeof WeakMap=="function"?WeakMap:Map;function Fy(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ia||(Ia=!0,wu=r),uu(t,e)},n}function Uy(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ME.bind(null,t,e,n),e.then(t,t))}function Qf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,Tn(n,e,1))),n.lanes|=1),t)}var CE=rn.ReactCurrentOwner,We=!1;function Oe(t,e,n,r){e.child=t===null?py(e,null,n,r):ci(e,t.child,n,r)}function Jf(t,e,n,r,i){n=n.render;var s=e.ref;return Jr(e,i),r=Pd(t,e,n,r,s,i),n=bd(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ee&&n&&_d(e),e.flags|=1,Oe(t,e,r,i),e.child)}function Zf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zy(t,e,s,r,i)):(t=Zo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function zy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Is(s,r)&&t.ref===e.ref)if(We=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(We=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return du(t,e,n,r,i)}function By(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Hr,Ye),Ye|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Hr,Ye),Ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Hr,Ye),Ye|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Hr,Ye),Ye|=r;return Oe(t,e,i,n),e.child}function Wy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function du(t,e,n,r,i){var s=He(n)?dr:be.current;return s=ai(e,s),Jr(e,i),n=Pd(t,e,n,r,s,i),r=bd(),t!==null&&!We?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ee&&r&&_d(e),e.flags|=1,Oe(t,e,n,i),e.child)}function ep(t,e,n,r,i){if(He(n)){var s=!0;ma(e)}else s=!1;if(Jr(e,i),e.stateNode===null)Qo(t,e),My(e,n,r),cu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=He(n)?dr:be.current,u=ai(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Kf(e,o,r,u),un=!1;var f=e.memoizedState;o.state=f,wa(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ve.current||un?(typeof h=="function"&&(lu(e,n,h,r),l=e.memoizedState),(a=un||qf(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,gy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ut(l):(l=He(n)?dr:be.current,l=ai(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Kf(e,o,r,l),un=!1,f=e.memoizedState,o.state=f,wa(e,r,o,i);var _=e.memoizedState;a!==d||f!==_||Ve.current||un?(typeof m=="function"&&(lu(e,n,m,r),_=e.memoizedState),(u=un||qf(e,n,u,r,f,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return hu(t,e,n,r,s,i)}function hu(t,e,n,r,i,s){Wy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Uf(e,n,!1),Zt(t,e,s);r=e.stateNode,CE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,s),e.child=ci(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=r.state,i&&Uf(e,n,!0),e.child}function $y(t){var e=t.stateNode;e.pendingContext?Ff(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ff(t,e.context,!1),Td(t,e.containerInfo)}function tp(t,e,n,r,i){return li(),wd(i),e.flags|=256,Oe(t,e,n,r),e.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function pu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vy(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(re,i&1),t===null)return ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dl(o,r,0,null),t=cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pu(n),e.memoizedState=fu,t):Dd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nn(a,s):(s=cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?pu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fu,r}return s=t.child,t=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,r){return r!==null&&wd(r),ci(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ac(Error(C(422))),bo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ci(e,t.child,null,o),e.child.memoizedState=pu(o),e.memoizedState=fu,s);if(!(e.mode&1))return bo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=ac(s,r,void 0),bo(t,e,o,r)}if(a=(o&t.childLanes)!==0,We||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),It(r,t,i,-1))}return zd(),r=ac(Error(C(421))),bo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xe=In(i.nextSibling),Ze=e,ee=!0,_t=null,t!==null&&(st[ot++]=Wt,st[ot++]=$t,st[ot++]=hr,Wt=t.id,$t=t.overflow,hr=e),e=Dd(e,r.children),e.flags|=4096,e)}function np(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),au(t.return,e,n)}function lc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Hy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,n,e);else if(t.tag===19)np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ea(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ea(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lc(e,!0,n,null,s);break;case"together":lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TE(t,e,n){switch(e.tag){case 3:$y(e),li();break;case 5:yy(e);break;case 1:He(e.type)&&ma(e);break;case 4:Td(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(_a,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?Vy(t,e,n):(Q(re,re.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);Q(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Hy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,By(t,e,n)}return Zt(t,e,n)}var Gy,mu,qy,Ky;Gy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mu=function(){};qy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,sr(jt.current);var s=null;switch(n){case"input":i=Mc(t,i),r=Mc(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=zc(t,i),r=zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fa)}Wc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_s.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ky=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ui(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kE(t,e,n){var r=e.pendingProps;switch(vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return He(e.type)&&pa(),Ne(e),null;case 3:return r=e.stateNode,ui(),J(Ve),J(be),Rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(No(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(xu(_t),_t=null))),mu(t,e),Ne(e),null;case 5:kd(e);var i=sr(Ps.current);if(n=e.type,t!==null&&e.stateNode!=null)qy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ne(e),null}if(t=sr(jt.current),No(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[Rs]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)X(Qi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":df(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":ff(r,s),X("invalid",r)}Wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ro(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ro(r.textContent,a,t),i=["children",""+a]):_s.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":wo(r),hf(r,s,!0);break;case"textarea":wo(r),pf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=fa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[Rs]=r,Gy(t,e,!1,!1),e.stateNode=t;e:{switch(o=$c(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)X(Qi[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":df(t,r),i=Mc(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),X("invalid",t);break;case"textarea":ff(t,r),i=zc(t,r),X("invalid",t);break;default:i=r}Wc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vs(t,l):typeof l=="number"&&vs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_s.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&id(t,s,l,o))}switch(n){case"input":wo(t),hf(t,r,!1);break;case"textarea":wo(t),pf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ln(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)Ky(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=sr(Ps.current),sr(jt.current),No(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:Ro(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Ne(e),null;case 13:if(J(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&Xe!==null&&e.mode&1&&!(e.flags&128))hy(),li(),e.flags|=98560,s=!1;else if(s=No(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Ot]=e}else li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ne(e),s=!1}else _t!==null&&(xu(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?ye===0&&(ye=3):zd())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return ui(),mu(t,e),t===null&&Ts(e.stateNode.containerInfo),Ne(e),null;case 10:return xd(e.type._context),Ne(e),null;case 17:return He(e.type)&&pa(),Ne(e),null;case 19:if(J(re),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ui(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ea(t),o!==null){for(e.flags|=128,Ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>hi&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ea(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ne(e),null}else 2*de()-s.renderingStartTime>hi&&n!==1073741824&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=re.current,Q(re,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return Ud(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ye&1073741824&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function RE(t,e){switch(vd(e),e.tag){case 1:return He(e.type)&&pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),J(Ve),J(be),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(J(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(re),null;case 4:return ui(),null;case 10:return xd(e.type._context),null;case 22:case 23:return Ud(),null;case 24:return null;default:return null}}var Ao=!1,Pe=!1,NE=typeof WeakSet=="function"?WeakSet:Set,N=null;function Vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function gu(t,e,n){try{n()}catch(r){oe(t,e,r)}}var rp=!1;function PE(t,e){if(Zc=ua,t=Zg(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++h===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(eu={focusedElem:t,selectionRange:n},ua=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,w=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:gt(e.type,v),w);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){oe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return _=rp,rp=!1,_}function ss(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gu(e,n,s)}i=i.next}while(i!==r)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yy(t){var e=t.alternate;e!==null&&(t.alternate=null,Yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[Rs],delete e[ru],delete e[hE],delete e[fE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qy(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fa));else if(r!==4&&(t=t.child,t!==null))for(_u(t,e,n),t=t.sibling;t!==null;)_u(t,e,n),t=t.sibling}function vu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vu(t,e,n),t=t.sibling;t!==null;)vu(t,e,n),t=t.sibling}var xe=null,yt=!1;function an(t,e,n){for(n=n.child;n!==null;)Xy(t,e,n),n=n.sibling}function Xy(t,e,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:Pe||Vr(n,e);case 6:var r=xe,i=yt;xe=null,an(t,e,n),xe=r,yt=i,xe!==null&&(yt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(yt?(t=xe,n=n.stateNode,t.nodeType===8?tc(t.parentNode,n):t.nodeType===1&&tc(t,n),xs(t)):tc(xe,n.stateNode));break;case 4:r=xe,i=yt,xe=n.stateNode.containerInfo,yt=!0,an(t,e,n),xe=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gu(n,e,o),i=i.next}while(i!==r)}an(t,e,n);break;case 1:if(!Pe&&(Vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}an(t,e,n);break;case 21:an(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,an(t,e,n),Pe=r):an(t,e,n);break;default:an(t,e,n)}}function sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NE),e.forEach(function(r){var i=UE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,yt=!1;break e;case 3:xe=a.stateNode.containerInfo,yt=!0;break e;case 4:xe=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(xe===null)throw Error(C(160));Xy(s,o,i),xe=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jy(e,t),e=e.sibling}function Jy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),bt(t),r&4){try{ss(3,t,t.return),cl(3,t)}catch(v){oe(t,t.return,v)}try{ss(5,t,t.return)}catch(v){oe(t,t.return,v)}}break;case 1:mt(e,t),bt(t),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(mt(e,t),bt(t),r&512&&n!==null&&Vr(n,n.return),t.flags&32){var i=t.stateNode;try{vs(i,"")}catch(v){oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wg(i,s),$c(a,o);var u=$c(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Ig(i,d):h==="dangerouslySetInnerHTML"?xg(i,d):h==="children"?vs(i,d):id(i,h,d,u)}switch(a){case"input":Fc(i,s);break;case"textarea":Eg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Kr(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Kr(i,!!s.multiple,s.defaultValue,!0):Kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Rs]=s}catch(v){oe(t,t.return,v)}}break;case 6:if(mt(e,t),bt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){oe(t,t.return,v)}}break;case 3:if(mt(e,t),bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xs(e.containerInfo)}catch(v){oe(t,t.return,v)}break;case 4:mt(e,t),bt(t);break;case 13:mt(e,t),bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Md=de())),r&4&&sp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||h,mt(e,t),Pe=u):mt(e,t),bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(N=t,h=t.child;h!==null;){for(d=N=h;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:ss(4,f,f.return);break;case 1:Vr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){oe(r,n,v)}}break;case 5:Vr(f,f.return);break;case 22:if(f.memoizedState!==null){ap(d);continue}}m!==null?(m.return=f,N=m):ap(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",o))}catch(v){oe(t,t.return,v)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){oe(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(e,t),bt(t),r&4&&sp(t);break;case 21:break;default:mt(e,t),bt(t)}}function bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qy(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vs(i,""),r.flags&=-33);var s=ip(t);vu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ip(t);_u(t,a,o);break;default:throw Error(C(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bE(t,e,n){N=t,Zy(t)}function Zy(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ao;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=Ao;var u=Pe;if(Ao=o,(Pe=l)&&!u)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?lp(i):l!==null?(l.return=o,N=l):lp(i);for(;s!==null;)N=s,Zy(s),s=s.sibling;N=i,Ao=a,Pe=u}op(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):op(t)}}function op(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pe||cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&xs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Pe||e.flags&512&&yu(e)}catch(f){oe(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function ap(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function lp(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{yu(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{yu(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var AE=Math.ceil,Ca=rn.ReactCurrentDispatcher,Ld=rn.ReactCurrentOwner,ct=rn.ReactCurrentBatchConfig,$=0,Se=null,fe=null,Ie=0,Ye=0,Hr=Wn(0),ye=0,Ds=null,pr=0,ul=0,jd=0,os=null,Be=null,Md=0,hi=1/0,zt=null,Ia=!1,wu=null,kn=null,Oo=!1,vn=null,Ta=0,as=0,Eu=null,Xo=-1,Jo=0;function Le(){return $&6?de():Xo!==-1?Xo:Xo=de()}function Rn(t){return t.mode&1?$&2&&Ie!==0?Ie&-Ie:mE.transition!==null?(Jo===0&&(Jo=Mg()),Jo):(t=H,t!==0||(t=window.event,t=t===void 0?16:Vg(t.type)),t):1}function It(t,e,n,r){if(50<as)throw as=0,Eu=null,Error(C(185));Js(t,n,r),(!($&2)||t!==Se)&&(t===Se&&(!($&2)&&(ul|=n),ye===4&&hn(t,Ie)),Ge(t,r),n===1&&$===0&&!(e.mode&1)&&(hi=de()+500,ol&&$n()))}function Ge(t,e){var n=t.callbackNode;m1(t,e);var r=ca(t,t===Se?Ie:0);if(r===0)n!==null&&yf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yf(n),e===1)t.tag===0?pE(cp.bind(null,t)):cy(cp.bind(null,t)),uE(function(){!($&6)&&$n()}),n=null;else{switch(Fg(r)){case 1:n=cd;break;case 4:n=Lg;break;case 16:n=la;break;case 536870912:n=jg;break;default:n=la}n=a_(n,e_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e_(t,e){if(Xo=-1,Jo=0,$&6)throw Error(C(327));var n=t.callbackNode;if(Zr()&&t.callbackNode!==n)return null;var r=ca(t,t===Se?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ka(t,r);else{e=r;var i=$;$|=2;var s=n_();(Se!==t||Ie!==e)&&(zt=null,hi=de()+500,lr(t,e));do try{LE();break}catch(a){t_(t,a)}while(!0);Sd(),Ca.current=s,$=i,fe!==null?e=0:(Se=null,Ie=0,e=ye)}if(e!==0){if(e===2&&(i=Kc(t),i!==0&&(r=i,e=Su(t,i))),e===1)throw n=Ds,lr(t,0),hn(t,r),Ge(t,de()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!OE(i)&&(e=ka(t,r),e===2&&(s=Kc(t),s!==0&&(r=s,e=Su(t,s))),e===1))throw n=Ds,lr(t,0),hn(t,r),Ge(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:er(t,Be,zt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=Md+500-de(),10<e)){if(ca(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Le(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nu(er.bind(null,t,Be,zt),e);break}er(t,Be,zt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*AE(r/1960))-r,10<r){t.timeoutHandle=nu(er.bind(null,t,Be,zt),r);break}er(t,Be,zt);break;case 5:er(t,Be,zt);break;default:throw Error(C(329))}}}return Ge(t,de()),t.callbackNode===n?e_.bind(null,t):null}function Su(t,e){var n=os;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=ka(t,e),t!==2&&(e=Be,Be=n,e!==null&&xu(e)),t}function xu(t){Be===null?Be=t:Be.push.apply(Be,t)}function OE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~jd,e&=~ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function cp(t){if($&6)throw Error(C(327));Zr();var e=ca(t,0);if(!(e&1))return Ge(t,de()),null;var n=ka(t,e);if(t.tag!==0&&n===2){var r=Kc(t);r!==0&&(e=r,n=Su(t,r))}if(n===1)throw n=Ds,lr(t,0),hn(t,e),Ge(t,de()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,Be,zt),Ge(t,de()),null}function Fd(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(hi=de()+500,ol&&$n())}}function mr(t){vn!==null&&vn.tag===0&&!($&6)&&Zr();var e=$;$|=1;var n=ct.transition,r=H;try{if(ct.transition=null,H=1,t)return t()}finally{H=r,ct.transition=n,$=e,!($&6)&&$n()}}function Ud(){Ye=Hr.current,J(Hr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cE(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pa();break;case 3:ui(),J(Ve),J(be),Rd();break;case 5:kd(r);break;case 4:ui();break;case 13:J(re);break;case 19:J(re);break;case 10:xd(r.type._context);break;case 22:case 23:Ud()}n=n.return}if(Se=t,fe=t=Nn(t.current,null),Ie=Ye=e,ye=0,Ds=null,jd=ul=pr=0,Be=os=null,ir!==null){for(e=0;e<ir.length;e++)if(n=ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ir=null}return t}function t_(t,e){do{var n=fe;try{if(Sd(),Ko.current=xa,Sa){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sa=!1}if(fr=0,we=pe=ie=null,is=!1,bs=0,Ld.current=null,n===null||n.return===null){ye=1,Ds=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Qf(o);if(m!==null){m.flags&=-257,Xf(m,o,a,s,e),m.mode&1&&Yf(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){Yf(s,u,e),zd();break e}l=Error(C(426))}}else if(ee&&a.mode&1){var w=Qf(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xf(w,o,a,s,e),wd(di(l,a));break e}}s=l=di(l,a),ye!==4&&(ye=2),os===null?os=[s]:os.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Fy(s,l,e);$f(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kn===null||!kn.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Uy(s,a,e);$f(s,E);break e}}s=s.return}while(s!==null)}i_(n)}catch(T){e=T,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function n_(){var t=Ca.current;return Ca.current=xa,t===null?xa:t}function zd(){(ye===0||ye===3||ye===2)&&(ye=4),Se===null||!(pr&268435455)&&!(ul&268435455)||hn(Se,Ie)}function ka(t,e){var n=$;$|=2;var r=n_();(Se!==t||Ie!==e)&&(zt=null,lr(t,e));do try{DE();break}catch(i){t_(t,i)}while(!0);if(Sd(),$=n,Ca.current=r,fe!==null)throw Error(C(261));return Se=null,Ie=0,ye}function DE(){for(;fe!==null;)r_(fe)}function LE(){for(;fe!==null&&!o1();)r_(fe)}function r_(t){var e=o_(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?i_(t):fe=e,Ld.current=null}function i_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RE(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,fe=null;return}}else if(n=kE(n,e,Ye),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ye===0&&(ye=5)}function er(t,e,n){var r=H,i=ct.transition;try{ct.transition=null,H=1,jE(t,e,n,r)}finally{ct.transition=i,H=r}return null}function jE(t,e,n,r){do Zr();while(vn!==null);if($&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===Se&&(fe=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oo||(Oo=!0,a_(la,function(){return Zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=H;H=1;var a=$;$|=4,Ld.current=null,PE(t,n),Jy(n,t),nE(eu),ua=!!Zc,eu=Zc=null,t.current=n,bE(n),a1(),$=a,H=o,ct.transition=s}else t.current=n;if(Oo&&(Oo=!1,vn=t,Ta=i),s=t.pendingLanes,s===0&&(kn=null),u1(n.stateNode),Ge(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ia)throw Ia=!1,t=wu,wu=null,t;return Ta&1&&t.tag!==0&&Zr(),s=t.pendingLanes,s&1?t===Eu?as++:(as=0,Eu=t):as=0,$n(),null}function Zr(){if(vn!==null){var t=Fg(Ta),e=ct.transition,n=H;try{if(ct.transition=null,H=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,Ta=0,$&6)throw Error(C(331));var i=$;for($|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(N=u;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:ss(8,h,s)}var d=h.child;if(d!==null)d.return=h,N=d;else for(;N!==null;){h=N;var f=h.sibling,m=h.return;if(Yy(h),h===u){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ss(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,N=g;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,N=y;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(T){oe(a,a.return,T)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if($=i,$n(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(tl,t)}catch{}r=!0}return r}finally{H=n,ct.transition=e}}return!1}function up(t,e,n){e=di(n,e),e=Fy(t,e,1),t=Tn(t,e,1),e=Le(),t!==null&&(Js(t,1,e),Ge(t,e))}function oe(t,e,n){if(t.tag===3)up(t,t,n);else for(;e!==null;){if(e.tag===3){up(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=di(n,t),t=Uy(e,t,1),e=Tn(e,t,1),t=Le(),e!==null&&(Js(e,1,t),Ge(e,t));break}}e=e.return}}function ME(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Le(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ie&n)===n&&(ye===4||ye===3&&(Ie&130023424)===Ie&&500>de()-Md?lr(t,0):jd|=n),Ge(t,e)}function s_(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=Le();t=Jt(t,e),t!==null&&(Js(t,e,n),Ge(t,n))}function FE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s_(t,n)}function UE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),s_(t,n)}var o_;o_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)We=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return We=!1,TE(t,e,n);We=!!(t.flags&131072)}else We=!1,ee&&e.flags&1048576&&uy(e,ya,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qo(t,e),t=e.pendingProps;var i=ai(e,be.current);Jr(e,n),i=Pd(null,e,r,t,i,n);var s=bd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,He(r)?(s=!0,ma(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(e),i.updater=ll,e.stateNode=i,i._reactInternals=e,cu(e,r,t,n),e=hu(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&_d(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BE(r),t=gt(r,t),i){case 0:e=du(null,e,r,t,n);break e;case 1:e=ep(null,e,r,t,n);break e;case 11:e=Jf(null,e,r,t,n);break e;case 14:e=Zf(null,e,r,gt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),du(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),ep(t,e,r,i,n);case 3:e:{if($y(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,gy(t,e),wa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=di(Error(C(423)),e),e=tp(t,e,r,n,i);break e}else if(r!==i){i=di(Error(C(424)),e),e=tp(t,e,r,n,i);break e}else for(Xe=In(e.stateNode.containerInfo.firstChild),Ze=e,ee=!0,_t=null,n=py(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){e=Zt(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return yy(e),t===null&&ou(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tu(r,i)?o=null:s!==null&&tu(r,s)&&(e.flags|=32),Wy(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&ou(e),null;case 13:return Vy(t,e,n);case 4:return Td(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Jf(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(_a,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Ve.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=qt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),au(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),au(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Jr(e,n),i=ut(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),Zf(t,e,r,i,n);case 15:return zy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Qo(t,e),e.tag=1,He(r)?(t=!0,ma(e)):t=!1,Jr(e,n),My(e,r,i),cu(e,r,i,n),hu(null,e,r,!0,t,n);case 19:return Hy(t,e,n);case 22:return By(t,e,n)}throw Error(C(156,e.tag))};function a_(t,e){return Dg(t,e)}function zE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new zE(t,e,n,r)}function Bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BE(t){if(typeof t=="function")return Bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function Nn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return cr(n.children,i,s,e);case sd:o=8,i|=8;break;case Oc:return t=at(12,n,e,i|2),t.elementType=Oc,t.lanes=s,t;case Dc:return t=at(13,n,e,i),t.elementType=Dc,t.lanes=s,t;case Lc:return t=at(19,n,e,i),t.elementType=Lc,t.lanes=s,t;case yg:return dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mg:o=10;break e;case gg:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case cn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function cr(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function dl(t,e,n,r){return t=at(22,t,r,e),t.elementType=yg,t.lanes=n,t.stateNode={isHidden:!1},t}function cc(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function uc(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wd(t,e,n,r,i,s,o,a,l){return t=new WE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function $E(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function l_(t){if(!t)return jn;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(He(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(He(n))return ly(t,n,e)}return e}function c_(t,e,n,r,i,s,o,a,l){return t=Wd(n,r,!0,t,i,s,o,a,l),t.context=l_(null),n=t.current,r=Le(),i=Rn(n),s=qt(r,i),s.callback=e??null,Tn(n,s,i),t.current.lanes=i,Js(t,i,r),Ge(t,r),t}function hl(t,e,n,r){var i=e.current,s=Le(),o=Rn(i);return n=l_(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tn(i,e,o),t!==null&&(It(t,i,o,s),qo(t,i,o)),o}function Ra(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function VE(){return null}var u_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}fl.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));hl(t,e,null,null)};fl.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;mr(function(){hl(null,t,null,null)}),e[Xt]=null}};function fl(t){this._internalRoot=t}fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dn.length&&e!==0&&e<dn[n].priority;n++);dn.splice(n,0,t),n===0&&$g(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function HE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ra(o);s.call(u)}}var o=c_(e,r,t,0,null,!1,!1,"",hp);return t._reactRootContainer=o,t[Xt]=o.current,Ts(t.nodeType===8?t.parentNode:t),mr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ra(l);a.call(u)}}var l=Wd(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=l,t[Xt]=l.current,Ts(t.nodeType===8?t.parentNode:t),mr(function(){hl(e,l,n,r)}),l}function ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ra(o);a.call(l)}}hl(e,o,t,i)}else o=HE(n,e,t,i,r);return Ra(o)}Ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yi(e.pendingLanes);n!==0&&(ud(e,n|1),Ge(e,de()),!($&6)&&(hi=de()+500,$n()))}break;case 13:mr(function(){var r=Jt(t,1);if(r!==null){var i=Le();It(r,t,1,i)}}),$d(t,1)}};dd=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=Le();It(e,t,134217728,n)}$d(t,134217728)}};zg=function(t){if(t.tag===13){var e=Rn(t),n=Jt(t,e);if(n!==null){var r=Le();It(n,t,e,r)}$d(t,e)}};Bg=function(){return H};Wg=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Hc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sl(r);if(!i)throw Error(C(90));vg(r),Fc(r,i)}}}break;case"textarea":Eg(t,n);break;case"select":e=n.value,e!=null&&Kr(t,!!n.multiple,e,!1)}};Rg=Fd;Ng=mr;var GE={usingClientEntryPoint:!1,Events:[eo,Ur,sl,Tg,kg,Fd]},zi={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qE={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||VE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{tl=Do.inject(qE),Lt=Do}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GE;nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(C(200));return $E(t,e,null,n)};nt.createRoot=function(t,e){if(!Hd(t))throw Error(C(299));var n=!1,r="",i=u_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wd(t,1,!1,null,null,n,!1,r,i),t[Xt]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Vd(e)};nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};nt.flushSync=function(t){return mr(t)};nt.hydrate=function(t,e,n){if(!pl(e))throw Error(C(200));return ml(null,t,e,!0,n)};nt.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=u_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c_(e,null,t,1,n??null,i,!1,s,o),t[Xt]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fl(e)};nt.render=function(t,e,n){if(!pl(e))throw Error(C(200));return ml(null,t,e,!1,n)};nt.unmountComponentAtNode=function(t){if(!pl(t))throw Error(C(40));return t._reactRootContainer?(mr(function(){ml(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};nt.unstable_batchedUpdates=Fd;nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return ml(t,e,n,!1,r)};nt.version="18.3.1-next-f1338f8080-20240426";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(t){console.error(t)}}d_(),dg.exports=nt;var KE=dg.exports,h_,fp=KE;h_=fp.createRoot,fp.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ls.apply(this,arguments)}var wn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wn||(wn={}));const pp="popstate";function YE(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Cu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Na(i)}return XE(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QE(){return Math.random().toString(36).substr(2,8)}function mp(t,e){return{usr:t.state,key:t.key,idx:e}}function Cu(t,e,n,r){return n===void 0&&(n=null),Ls({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xi(e):e,{state:n,key:e&&e.key||r||QE()})}function Na(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function XE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Ls({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=wn.Pop;let w=h(),g=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:g})}function f(w,g){a=wn.Push;let p=Cu(v.location,w,g);u=h()+1;let y=mp(p,u),E=v.createHref(p);try{o.pushState(y,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function m(w,g){a=wn.Replace;let p=Cu(v.location,w,g);u=h();let y=mp(p,u),E=v.createHref(p);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function _(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Na(w);return p=p.replace(/ $/,"%20"),he(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let v={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pp,d),l=w,()=>{i.removeEventListener(pp,d),l=null}},createHref(w){return e(i,w)},createURL:_,encodeLocation(w){let g=_(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(w){return o.go(w)}};return v}var gp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(gp||(gp={}));function JE(t,e,n){return n===void 0&&(n="/"),ZE(t,e,n)}function ZE(t,e,n,r){let i=typeof e=="string"?xi(e):e,s=qd(i.pathname||"/",n);if(s==null)return null;let o=f_(t);eS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=hS(s);a=cS(o[l],u)}return a}function f_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pn([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),f_(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:aS(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of p_(s.path))i(s,o,l)}),e}function p_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=p_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function eS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tS=/^:[\w-]+$/,nS=3,rS=2,iS=1,sS=10,oS=-2,yp=t=>t==="*";function aS(t,e){let n=t.split("/"),r=n.length;return n.some(yp)&&(r+=oS),e&&(r+=rS),n.filter(i=>!yp(i)).reduce((i,s)=>i+(tS.test(s)?nS:s===""?iS:sS),r)}function lS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=uS({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),f=l.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Pn([s,d.pathname]),pathnameBase:yS(Pn([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Pn([s,d.pathnameBase]))}return o}function uS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:f,isOptional:m}=h;if(f==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=a[d];return m&&!_?u[f]=void 0:u[f]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function dS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const fS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pS=t=>fS.test(t);function mS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xi(t):t,s;if(n)if(pS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Gd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=_p(n.substring(1),"/"):s=_p(n,e)}else s=e;return{pathname:s,search:_S(r),hash:vS(i)}}function _p(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Kd(t,e){let n=gS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Yd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xi(t):(i=Ls({},t),he(!i.pathname||!i.pathname.includes("?"),dc("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),dc("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),dc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=mS(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Pn=t=>t.join("/").replace(/\/\/+/g,"/"),yS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),_S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const m_=["post","put","patch","delete"];new Set(m_);const ES=["get",...m_];new Set(ES);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function js(){return js=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},js.apply(this,arguments)}const Qd=x.createContext(null),SS=x.createContext(null),Vn=x.createContext(null),gl=x.createContext(null),sn=x.createContext({outlet:null,matches:[],isDataRoute:!1}),g_=x.createContext(null);function xS(t,e){let{relative:n}=e===void 0?{}:e;Ci()||he(!1);let{basename:r,navigator:i}=x.useContext(Vn),{hash:s,pathname:o,search:a}=__(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ci(){return x.useContext(gl)!=null}function Hn(){return Ci()||he(!1),x.useContext(gl).location}function y_(t){x.useContext(Vn).static||x.useLayoutEffect(t)}function Tr(){let{isDataRoute:t}=x.useContext(sn);return t?MS():CS()}function CS(){Ci()||he(!1);let t=x.useContext(Qd),{basename:e,future:n,navigator:r}=x.useContext(Vn),{matches:i}=x.useContext(sn),{pathname:s}=Hn(),o=JSON.stringify(Kd(i,n.v7_relativeSplatPath)),a=x.useRef(!1);return y_(()=>{a.current=!0}),x.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Yd(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Pn([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,s,t])}function IS(){let{matches:t}=x.useContext(sn),e=t[t.length-1];return e?e.params:{}}function __(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=x.useContext(Vn),{matches:i}=x.useContext(sn),{pathname:s}=Hn(),o=JSON.stringify(Kd(i,r.v7_relativeSplatPath));return x.useMemo(()=>Yd(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function TS(t,e){return kS(t,e)}function kS(t,e,n,r){Ci()||he(!1);let{navigator:i}=x.useContext(Vn),{matches:s}=x.useContext(sn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Hn(),h;if(e){var d;let w=typeof e=="string"?xi(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||he(!1),h=w}else h=u;let f=h.pathname||"/",m=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let _=JE(t,{pathname:m}),v=AS(_&&_.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Pn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Pn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&v?x.createElement(gl.Provider,{value:{location:js({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:wn.Pop}},v):v}function RS(){let t=jS(),e=wS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,null)}const NS=x.createElement(RS,null);class PS extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(sn.Provider,{value:this.props.routeContext},x.createElement(g_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bS(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(Qd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(sn.Provider,{value:e},r)}function AS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||he(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:m}=n,_=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let m,_=!1,v=null,w=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||NS,l&&(u<0&&f===0?(FS("route-fallback"),_=!0,w=null):u===f&&(_=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),p=()=>{let y;return m?y=v:_?y=w:d.route.Component?y=x.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=h,x.createElement(bS,{match:d,routeContext:{outlet:h,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?x.createElement(PS,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var v_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(v_||{}),w_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(w_||{});function OS(t){let e=x.useContext(Qd);return e||he(!1),e}function DS(t){let e=x.useContext(SS);return e||he(!1),e}function LS(t){let e=x.useContext(sn);return e||he(!1),e}function E_(t){let e=LS(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function jS(){var t;let e=x.useContext(g_),n=DS(),r=E_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function MS(){let{router:t}=OS(v_.UseNavigateStable),e=E_(w_.UseNavigateStable),n=x.useRef(!1);return y_(()=>{n.current=!0}),x.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,js({fromRouteId:e},s)))},[t,e])}const vp={};function FS(t,e,n){vp[t]||(vp[t]=!0)}function US(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function wp(t){let{to:e,replace:n,state:r,relative:i}=t;Ci()||he(!1);let{future:s,static:o}=x.useContext(Vn),{matches:a}=x.useContext(sn),{pathname:l}=Hn(),u=Tr(),h=Yd(e,Kd(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(h);return x.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function it(t){he(!1)}function zS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:s,static:o=!1,future:a}=t;Ci()&&he(!1);let l=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:s,static:o,future:js({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=xi(r));let{pathname:h="/",search:d="",hash:f="",state:m=null,key:_="default"}=r,v=x.useMemo(()=>{let w=qd(h,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:_},navigationType:i}},[l,h,d,f,m,_,i]);return v==null?null:x.createElement(Vn.Provider,{value:u},x.createElement(gl.Provider,{children:n,value:v}))}function BS(t){let{children:e,location:n}=t;return TS(Iu(e),n)}new Promise(()=>{});function Iu(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,Iu(r.props.children,s));return}r.type!==it&&he(!1),!r.props.index||!r.props.children||he(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Iu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tu(){return Tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tu.apply(this,arguments)}function WS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $S(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VS(t,e){return t.button===0&&(!e||e==="_self")&&!$S(t)}function ku(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function HS(t,e){let n=ku(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const GS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qS="6";try{window.__reactRouterVersion=qS}catch{}const KS="startTransition",Ep=Mw[KS];function YS(t){let{basename:e,children:n,future:r,window:i}=t,s=x.useRef();s.current==null&&(s.current=YE({window:i,v5Compat:!0}));let o=s.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=x.useCallback(d=>{u&&Ep?Ep(()=>l(d)):l(d)},[l,u]);return x.useLayoutEffect(()=>o.listen(h),[o,h]),x.useEffect(()=>US(r),[r]),x.createElement(zS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const QS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=e,f=WS(e,GS),{basename:m}=x.useContext(Vn),_,v=!1;if(typeof u=="string"&&XS.test(u)&&(_=u,QS))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=qd(E.pathname,m);E.origin===y.origin&&T!=null?u=T+E.search+E.hash:v=!0}catch{}let w=xS(u,{relative:i}),g=JS(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:d});function p(y){r&&r(y),y.defaultPrevented||g(y)}return x.createElement("a",Tu({},f,{href:_||w,onClick:v||s?r:p,ref:n,target:l}))});var Sp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Sp||(Sp={}));var xp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xp||(xp={}));function JS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Tr(),u=Hn(),h=__(t,{relative:o});return x.useCallback(d=>{if(VS(d,n)){d.preventDefault();let f=r!==void 0?r:Na(u)===Na(h);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,h,r,i,n,t,s,o,a])}function ZS(t){let e=x.useRef(ku(t)),n=x.useRef(!1),r=Hn(),i=x.useMemo(()=>HS(r.search,n.current?null:e.current),[r.search]),s=Tr(),o=x.useCallback((a,l)=>{const u=ku(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}const ex=()=>{};var Cp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ii(e)},Ii=function(t){return new Error("Firebase Database ("+S_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[h],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new nx;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(t){const e=x_(t);return Xd.encodeByteArray(e,!0)},Pa=function(t){return C_(t).replace(/\./g,"")},ba=function(t){try{return Xd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(t){return I_(void 0,t)}function I_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ix(n)||(t[n]=I_(t[n],e[n]));return t}function ix(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox=()=>sx().__FIREBASE_DEFAULTS__,ax=()=>{if(typeof process>"u"||typeof Cp>"u")return;const t=Cp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ba(t[1]);return e&&JSON.parse(e)},Jd=()=>{try{return ex()||ox()||ax()||lx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T_=t=>{var e,n;return(n=(e=Jd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},k_=t=>{const e=T_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},R_=()=>{var t;return(t=Jd())==null?void 0:t.config},N_=t=>{var e;return(e=Jd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zd(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Pa(JSON.stringify(n)),Pa(JSON.stringify(o)),""].join(".")}const ls={};function cx(){const t={prod:[],emulator:[]};for(const e of Object.keys(ls))ls[e]?t.emulator.push(e):t.prod.push(e);return t}function ux(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ip=!1;function eh(t,e){if(typeof window>"u"||typeof document>"u"||!Gn(window.location.host)||ls[t]===e||ls[t]||Ip)return;ls[t]=e;function n(f){return`__firebase__banner__${f}`}const r="__firebase__banner",s=cx().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,m){f.setAttribute("width","24"),f.setAttribute("id",m),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Ip=!0,o()},f}function h(f,m){f.setAttribute("id",m),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=ux(r),m=n("text"),_=document.getElementById(m)||document.createElement("span"),v=n("learnmore"),w=document.getElementById(v)||document.createElement("a"),g=n("preprendIcon"),p=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const y=f.element;a(y),h(w,v);const E=u();l(p,g),y.append(p,_,w,E),document.body.appendChild(y)}s?(_.innerText="Preview backend disconnected.",p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function dx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function b_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function A_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hx(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fx(){return S_.NODE_ADMIN===!0}function O_(){try{return typeof indexedDB=="object"}catch{return!1}}function D_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function px(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mx,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?gx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,a,r)}}function gx(t,e){return t.replace(yx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ms(ba(s[0])||""),n=Ms(ba(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},_x=function(t){const e=L_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vx=function(t){const e=L_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Mn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tp(s)&&Tp(o)){if(!Mn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ji(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),h=1518500249):(u=s^o^a,h=1859775393):d<60?(u=s&o|a&(s|o),h=2400959708):(u=s^o^a,h=3395469782);const f=(i<<5|i>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ex(t,e){const n=new Sx(t,e);return n.subscribe.bind(n)}class Sx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hc),i.error===void 0&&(i.error=hc),i.complete===void 0&&(i.complete=hc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}function yl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_l=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix=1e3,Tx=2,kx=4*60*60*1e3,Rx=.5;function kp(t,e=Ix,n=Tx){const r=e*Math.pow(n,t),i=Math.round(Rx*r*(Math.random()-.5)*2);return Math.min(kx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t){return t&&t._delegate?t._delegate:t}class ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new no;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bx(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Px(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Px(t){return t===tr?void 0:t}function bx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Ox={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Dx=G.INFO,Lx={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},jx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Lx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vl{constructor(e){this.name=e,this._logLevel=Dx,this._logHandler=jx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ox[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Mx=(t,e)=>e.some(n=>t instanceof n);let Rp,Np;function Fx(){return Rp||(Rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ux(){return Np||(Np=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,Nu=new WeakMap,M_=new WeakMap,fc=new WeakMap,nh=new WeakMap;function zx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(bn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j_.set(n,t)}).catch(()=>{}),nh.set(e,t),e}function Bx(t){if(Nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nu.set(t,e)}let Pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||M_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wx(t){Pu=t(Pu)}function $x(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pc(this),e,...n);return M_.set(r,e.sort?e.sort():[e]),bn(r)}:Ux().includes(t)?function(...e){return t.apply(pc(this),e),bn(j_.get(this))}:function(...e){return bn(t.apply(pc(this),e))}}function Vx(t){return typeof t=="function"?$x(t):(t instanceof IDBTransaction&&Bx(t),Mx(t,Fx())?new Proxy(t,Pu):t)}function bn(t){if(t instanceof IDBRequest)return zx(t);if(fc.has(t))return fc.get(t);const e=Vx(t);return e!==t&&(fc.set(t,e),nh.set(e,t)),e}const pc=t=>nh.get(t);function F_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Hx=["get","getKey","getAll","getAllKeys","count"],Gx=["put","add","delete","clear"],mc=new Map;function Pp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Gx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mc.set(e,s),s}Wx(t=>({...t,get:(e,n,r)=>Pp(e,n)||t.get(e,n,r),has:(e,n)=>!!Pp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bu="@firebase/app",bp="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new vl("@firebase/app"),Yx="@firebase/app-compat",Qx="@firebase/analytics-compat",Xx="@firebase/analytics",Jx="@firebase/app-check-compat",Zx="@firebase/app-check",eC="@firebase/auth",tC="@firebase/auth-compat",nC="@firebase/database",rC="@firebase/data-connect",iC="@firebase/database-compat",sC="@firebase/functions",oC="@firebase/functions-compat",aC="@firebase/installations",lC="@firebase/installations-compat",cC="@firebase/messaging",uC="@firebase/messaging-compat",dC="@firebase/performance",hC="@firebase/performance-compat",fC="@firebase/remote-config",pC="@firebase/remote-config-compat",mC="@firebase/storage",gC="@firebase/storage-compat",yC="@firebase/firestore",_C="@firebase/ai",vC="@firebase/firestore-compat",wC="firebase",EC="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="[DEFAULT]",SC={[bu]:"fire-core",[Yx]:"fire-core-compat",[Xx]:"fire-analytics",[Qx]:"fire-analytics-compat",[Zx]:"fire-app-check",[Jx]:"fire-app-check-compat",[eC]:"fire-auth",[tC]:"fire-auth-compat",[nC]:"fire-rtdb",[rC]:"fire-data-connect",[iC]:"fire-rtdb-compat",[sC]:"fire-fn",[oC]:"fire-fn-compat",[aC]:"fire-iid",[lC]:"fire-iid-compat",[cC]:"fire-fcm",[uC]:"fire-fcm-compat",[dC]:"fire-perf",[hC]:"fire-perf-compat",[fC]:"fire-rc",[pC]:"fire-rc-compat",[mC]:"fire-gcs",[gC]:"fire-gcs-compat",[yC]:"fire-fst",[vC]:"fire-fst-compat",[_C]:"fire-vertex","fire-js":"fire-js",[wC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Map,xC=new Map,Ou=new Map;function Ap(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(Ou.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of Oa.values())Ap(n,t);for(const n of xC.values())Ap(n,t);return!0}function qn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new kr("app","Firebase",CC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=EC;function U_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Au,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=R_()),!n)throw An.create("no-options");const s=Oa.get(i);if(s){if(Mn(n,s.options)&&Mn(r,s.config))return s;throw An.create("duplicate-app",{appName:i})}const o=new Ax(i);for(const l of Ou.values())o.addComponent(l);const a=new IC(n,r,o);return Oa.set(i,a),a}function wl(t=Au){const e=Oa.get(t);if(!e&&t===Au&&R_())return U_();if(!e)throw An.create("no-app",{appName:t});return e}function qe(t,e,n){let r=SC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(o.join(" "));return}Rt(new ht(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="firebase-heartbeat-database",kC=1,Fs="firebase-heartbeat-store";let gc=null;function z_(){return gc||(gc=F_(TC,kC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),gc}async function RC(t){try{const n=(await z_()).transaction(Fs),r=await n.objectStore(Fs).get(B_(t));return await n.done,r}catch(e){if(e instanceof Pt)en.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Op(t,e){try{const r=(await z_()).transaction(Fs,"readwrite");await r.objectStore(Fs).put(e,B_(t)),await r.done}catch(n){if(n instanceof Pt)en.warn(n.message);else{const r=An.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function B_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=1024,PC=30;class bC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>PC){const o=DC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dp(),{heartbeatsToSend:r,unsentEntries:i}=AC(this._heartbeatsCache.heartbeats),s=Pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function Dp(){return new Date().toISOString().substring(0,10)}function AC(t,e=NC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O_()?D_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Op(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lp(t){return Pa(JSON.stringify({version:2,heartbeats:t})).length}function DC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){Rt(new ht("platform-logger",e=>new qx(e),"PRIVATE")),Rt(new ht("heartbeat",e=>new bC(e),"PRIVATE")),qe(bu,bp,t),qe(bu,bp,"esm2020"),qe("fire-js","")}LC("");function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jC=W_,$_=new kr("auth","Firebase",W_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new vl("@firebase/auth");function MC(t,...e){Da.logLevel<=G.WARN&&Da.warn(`Auth (${Rr}): ${t}`,...e)}function ea(t,...e){Da.logLevel<=G.ERROR&&Da.error(`Auth (${Rr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw rh(t,...e)}function Mt(t,...e){return rh(t,...e)}function V_(t,e,n){const r={...jC(),[e]:n};return new kr("auth","Firebase",r).create(e,{appName:t.name})}function Kt(t){return V_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $_.create(t,...e)}function L(t,e,...n){if(!t)throw rh(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function tn(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function FC(){return jp()==="http:"||jp()==="https:"}function jp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FC()||b_()||"connection"in navigator)?navigator.onLine:!0}function zC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=th()||A_()}get(){return UC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$C=new ro(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Yn(t,e,n,r,i={}){return G_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ti({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return dx()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Gn(t.emulatorConfig.host)&&(u.credentials="include"),H_.fetch()(await q_(t,t.config.apiHost,n,a),u)})}async function G_(t,e,n){t._canInitEmulator=!1;const r={...BC,...e};try{const i=new HC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Lo(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw V_(t,h,u);Nt(t,h)}}catch(i){if(i instanceof Pt)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function io(t,e,n,r,i={}){const s=await Yn(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function q_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ih(t.config,i):`${t.config.apiScheme}://${i}`;return WC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function VC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class HC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),$C.get())})}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}function Mp(t){return t!==void 0&&t.enterprise!==void 0}class GC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qC(t,e){return Yn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function La(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YC(t,e=!1){const n=te(t),r=await n.getIdToken(e),i=sh(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cs(yc(i.auth_time)),issuedAtTime:cs(yc(i.iat)),expirationTime:cs(yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function sh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=ba(n);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fp(t){const e=sh(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&QC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(t){var d;const e=t.auth,n=await t.getIdToken(),r=await Us(t,La(e,{idToken:n}));L(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?K_(i.providerUserInfo):[],o=ZC(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function JC(t){const e=te(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function K_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e){const n=await G_(t,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await q_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Gn(t.emulatorConfig.host)&&(l.credentials="include"),H_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tI(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=Fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ei;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new XC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YC(this,e)}reload(){return JC(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await Us(this,KC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:m,providerData:_,stsTokenManager:v}=n;L(d&&v,e,"internal-error");const w=ei.fromJSON(this.name,v);L(typeof d=="string",e,"internal-error"),ln(r,e.name),ln(i,e.name),L(typeof f=="boolean",e,"internal-error"),L(typeof m=="boolean",e,"internal-error"),ln(s,e.name),ln(o,e.name),ln(a,e.name),ln(l,e.name),ln(u,e.name),ln(h,e.name);const g=new St({uid:d,auth:e,email:i,emailVerified:f,displayName:r,isAnonymous:m,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:w,createdAt:u,lastLoginAt:h});return _&&Array.isArray(_)&&(g.providerData=_.map(p=>({...p}))),l&&(g._redirectEventId=l),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new ei;i.updateFromServerResponse(n);const s=new St({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ja(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?K_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ei;a.updateFromIdToken(r);const l=new St({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Map;function Ht(t){tn(t instanceof Function,"Expected a class definition");let e=Up.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Up.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y_.type="NONE";const zp=Y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,s),this.fullPersistenceKey=ta("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await La(this.auth,{idToken:e}).catch(()=>{});return n?St._fromGetAccountInfoResponse(this.auth,n,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Ht(zp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(zp);const o=ta(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const f=await La(e,{idToken:h}).catch(()=>{});if(!f)break;d=await St._fromGetAccountInfoResponse(e,f,h)}else d=St._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(X_(e))return"Safari";if((e.includes("chrome/")||J_(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Q_(t=Fe()){return/firefox\//i.test(t)}function X_(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J_(t=Fe()){return/crios\//i.test(t)}function Z_(t=Fe()){return/iemobile/i.test(t)}function ev(t=Fe()){return/android/i.test(t)}function tv(t=Fe()){return/blackberry/i.test(t)}function nv(t=Fe()){return/webos/i.test(t)}function oh(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nI(t=Fe()){var e;return oh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function rI(){return hx()&&document.documentMode===10}function rv(t=Fe()){return oh(t)||ev(t)||nv(t)||tv(t)||/windows phone/i.test(t)||Z_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e=[]){let n;switch(t){case"Browser":n=Bp(Fe());break;case"Worker":n=`${Bp(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=6;class aI{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??oI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wp(this),this.idTokenSubscription=new Wp(this),this.beforeStateQueue=new iI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await La(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(Kt(this));const n=e?te(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sI(this),n=new aI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new kr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&MC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nr(t){return te(t)}class Wp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ex(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cI(t){El=t}function sv(t){return El.loadJS(t)}function uI(){return El.recaptchaEnterpriseScript}function dI(){return El.gapiScript}function hI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fI{constructor(){this.enterprise=new pI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mI="recaptcha-enterprise",ov="NO_RECAPTCHA";class gI{constructor(e){this.type=mI,this.auth=Nr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new GC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Mp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ov)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fI().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Mp(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uI();l.length!==0&&(l+=a),sv(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function $p(t,e,n,r=!1,i=!1){const s=new gI(t);let o;if(i)o=ov;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ju(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await $p(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await $p(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){const n=qn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mn(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function _I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vI(t,e,n){const r=Nr(t);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=av(e),{host:o,port:a}=wI(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Mn(u,r.config.emulator)&&Mn(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Gn(o)?(Zd(`${s}//${o}${l}`),eh("Auth",!0)):EI()}function av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wI(t){const e=av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function EI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function SI(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e){return io(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function II(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends ah{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ju(e,n,"signInWithPassword",xI);case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ju(e,r,"signUpPassword",SI);case"emailLink":return II(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return io(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="http://localhost";class gr extends ah{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:TI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RI(t){const e=Xi(Ji(t)).link,n=e?Xi(Ji(e)).deep_link_id:null,r=Xi(Ji(t)).deep_link_id;return(r?Xi(Ji(r)).link:null)||r||n||e||t}class lh{constructor(e){const n=Xi(Ji(e)),r=n.apiKey??null,i=n.oobCode??null,s=kI(n.mode??null);L(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=RI(e);try{return new lh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,n){return zs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=lh.parseLink(n);return L(r,"argument-error"),zs._fromEmailAndCode(e,r.code,r.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends so{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends so{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends so{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e){return io(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await St._fromIdTokenResponse(e,r,i),o=Hp(r);return new yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hp(r);return new yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Pt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ma.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ma(e,n,r,i)}}function cv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ma._fromErrorAndOperation(t,s,e,r):s})}async function PI(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e,n=!1){const{auth:r}=t;if(Qe(r.app))return Promise.reject(Kt(r));const i="reauthenticate";try{const s=await Us(t,cv(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=sh(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t,e,n=!1){if(Qe(t.app))return Promise.reject(Kt(t));const r="signIn",i=await cv(t,r,e),s=await yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AI(t,e){return uv(Nr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(t){const e=Nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OI(t,e,n){if(Qe(t.app))return Promise.reject(Kt(t));const r=Nr(t),o=await ju(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&dv(t),l}),a=await yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function DI(t,e,n){return Qe(t.app)?Promise.reject(Kt(t)):AI(te(t),ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dv(t),r})}function LI(t,e,n,r){return te(t).onIdTokenChanged(e,n,r)}function jI(t,e,n){return te(t).beforeAuthStateChanged(e,n)}function MI(t,e,n,r){return te(t).onAuthStateChanged(e,n,r)}function FI(t){return te(t).signOut()}const Fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fa,"1"),this.storage.removeItem(Fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=1e3,zI=10;class fv extends hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const BI=fv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pv.type="SESSION";const mv=pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await WI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ch("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function VI(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qI(){return gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="firebaseLocalStorageDb",KI=1,Ua="firebaseLocalStorage",_v="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Ua],e?"readwrite":"readonly").objectStore(Ua)}function YI(){const t=indexedDB.deleteDatabase(yv);return new oo(t).toPromise()}function Mu(){const t=indexedDB.open(yv,KI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ua,{keyPath:_v})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ua)?e(r):(r.close(),await YI(),e(await Mu()))})})}async function Gp(t,e,n){const r=xl(t,!0).put({[_v]:e,value:n});return new oo(r).toPromise()}async function QI(t,e){const n=xl(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function qp(t,e){const n=xl(t,!0).delete(e);return new oo(n).toPromise()}const XI=800,JI=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(qI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mu();return await Gp(e,Fa,"1"),await qp(e,Fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const ZI=vv;new ro(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t,e){return e?Ht(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends ah{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tT(t){return uv(t.auth,new uh(t),t.bypassAuthState)}function nT(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),bI(n,new uh(t),t.bypassAuthState)}async function rT(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),PI(n,new uh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tT;case"linkViaPopup":case"linkViaRedirect":return rT;case"reauthViaPopup":case"reauthViaRedirect":return nT;default:Nt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=new ro(2e3,1e4);class Gr extends wv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=ch();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iT.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="pendingRedirect",na=new Map;class oT extends wv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await aT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aT(t,e){const n=uT(e),r=cT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lT(t,e){na.set(t._key(),e)}function cT(t){return Ht(t._redirectPersistence)}function uT(t){return ta(sT,t.config.apiKey,t.name)}async function dT(t,e,n=!1){if(Qe(t.app))return Promise.reject(Kt(t));const r=Nr(t),i=eT(r,e),o=await new oT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=10*60*1e3;class fT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ev(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ev({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ev(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yT=/^https?/;async function _T(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mT(t);for(const n of e)try{if(vT(n))return}catch{}Nt(t,"unauthorized-domain")}function vT(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yT.test(n))return!1;if(gT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new ro(3e4,6e4);function Yp(){const t=Ft().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ET(t){return new Promise((e,n)=>{var i,s,o;function r(){Yp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yp(),n(Mt(t,"network-request-failed"))},timeout:wT.get()})}if((s=(i=Ft().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ft().gapi)!=null&&o.load)r();else{const a=hI("iframefcb");return Ft()[a]=()=>{gapi.load?r():n(Mt(t,"network-request-failed"))},sv(`${dI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ra=null,e})}let ra=null;function ST(t){return ra=ra||ET(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new ro(5e3,15e3),CT="__/auth/iframe",IT="emulator/auth/iframe",TT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RT(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ih(e,IT):`https://${t.config.authDomain}/${CT}`,r={apiKey:e.apiKey,appName:t.name,v:Rr},i=kT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ti(r).slice(1)}`}async function NT(t){const e=await ST(t),n=Ft().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:RT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Ft().setTimeout(()=>{s(o)},xT.get());function l(){Ft().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bT=500,AT=600,OT="_blank",DT="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LT(t,e,n,r=bT,i=AT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...PT,width:r.toString(),height:i.toString(),top:s,left:o},u=Fe().toLowerCase();n&&(a=J_(u)?OT:n),Q_(u)&&(e=e||DT,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[m,_])=>`${f}${m}=${_},`,"");if(nI(u)&&a!=="_self")return jT(e||"",a),new Qp(null);const d=window.open(e||"",a,h);L(d,t,"popup-blocked");try{d.focus()}catch{}return new Qp(d)}function jT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="__/auth/handler",FT="emulator/auth/handler",UT=encodeURIComponent("fac");async function Xp(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rr,eventId:i};if(e instanceof lv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof so){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${UT}=${encodeURIComponent(l)}`:"";return`${zT(t)}?${Ti(a).slice(1)}${u}`}function zT({config:t}){return t.emulator?ih(t,FT):`https://${t.authDomain}/${MT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="webStorageSupport";class BT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=dT,this._overrideRedirectResult=lT}async _openPopup(e,n,r,i){var o;tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Xp(e,n,r,Du(),i);return LT(e,s,ch())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xp(e,n,r,Du(),i);return VI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NT(e),r=new fT(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[_c];s!==void 0&&n(!!s),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_T(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||X_()||oh()}}const WT=BT;var Jp="@firebase/auth",Zp="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HT(t){Rt(new ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(t)},u=new lI(r,i,s,l);return _I(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rt(new ht("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new $T(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(Jp,Zp,VT(t)),qe(Jp,Zp,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=5*60,qT=N_("authIdTokenMaxAge")||GT;let em=null;const KT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qT)return;const i=n==null?void 0:n.token;em!==i&&(em=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YT(t=wl()){const e=qn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yI(t,{popupRedirectResolver:WT,persistence:[ZI,BI,mv]}),r=N_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=KT(s.toString());jI(n,o,()=>o(n.currentUser)),LI(n,a=>o(a))}}const i=T_("auth");return i&&vI(n,`http://${i}`),n}function QT(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}cI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HT("Browser");var tm={};const nm="@firebase/database",rm="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sv="";function XT(t){Sv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ms(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JT(e)}}catch{}return new ZT},or=xv("localStorage"),ek=xv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new vl("@firebase/database"),tk=function(){let t=1;return function(){return t++}}(),Cv=function(t){const e=Cx(t),n=new wx;n.update(e);const r=n.digest();return Xd.encodeByteArray(r)},ao=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ao.apply(null,r):typeof r=="object"?e+=ge(r):e+=r,e+=" "}return e};let us=null,im=!0;const nk=function(t,e){I(!0,"Can't turn on custom loggers persistently."),ri.logLevel=G.VERBOSE,us=ri.log.bind(ri)},Ce=function(...t){if(im===!0&&(im=!1,us===null&&ek.get("logging_enabled")===!0&&nk()),us){const e=ao.apply(null,t);us(e)}},lo=function(t){return function(...e){Ce(t,...e)}},Fu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ao(...t);ri.error(e)},nn=function(...t){const e=`FIREBASE FATAL ERROR: ${ao(...t)}`;throw ri.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+ao(...t);ri.warn(e)},rk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ik=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pi="[MIN_NAME]",_r="[MAX_NAME]",Pr=function(t,e){if(t===e)return 0;if(t===pi||e===_r)return-1;if(e===pi||t===_r)return 1;{const n=sm(t),r=sm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},sk=function(t,e){return t===e?0:t<e?-1:1},Bi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},hh=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ge(e[r]),n+=":",n+=hh(t[e[r]]);return n+="}",n},Iv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Tv=function(t){I(!dh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},ok=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ak=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lk(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ck=new RegExp("^-?(0*)\\d{1,10}$"),uk=-2147483648,dk=2147483647,sm=function(t){if(ck.test(t)){const e=Number(t);if(e>=uk&&e<=dk)return e}return null},Ri=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},hk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ds=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Qe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class ia{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ia.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="5",kv="v",Rv="s",Nv="r",Pv="f",bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Av="ls",Ov="p",Uu="ac",Dv="websocket",Lv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Mv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===Dv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mk(t)&&(n.ns=t.namespace);const i=[];return ke(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return rx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={},wc={};function ph(t){const e=t.toString();return vc[e]||(vc[e]=new gk),vc[e]}function yk(t,e){const n=t.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ri(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="start",vk="close",wk="pLPCommand",Ek="pRTLPCB",Fv="id",Uv="pw",zv="ser",Sk="cb",xk="seg",Ck="ts",Ik="d",Tk="dframe",Bv=1870,Wv=30,kk=Bv-Wv,Rk=25e3,Nk=3e4;class qr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lo(e),this.stats_=ph(n),this.urlFn=l=>(this.appCheckToken&&(l[Uu]=this.appCheckToken),Mv(n,Lv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _k(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nk)),ik(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mh((...s)=>{const[o,a,l,u,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===om)this.id=a,this.password=l;else if(o===vk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[om]="t",r[zv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Sk]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kv]=fh,this.transportSessionId&&(r[Rv]=this.transportSessionId),this.lastSessionId&&(r[Av]=this.lastSessionId),this.applicationId&&(r[Ov]=this.applicationId),this.appCheckToken&&(r[Uu]=this.appCheckToken),typeof location<"u"&&location.hostname&&bv.test(location.hostname)&&(r[Nv]=Pv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qr.forceAllow_=!0}static forceDisallow(){qr.forceDisallow_=!0}static isAvailable(){return qr.forceAllow_?!0:!qr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ok()&&!ak()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=C_(n),i=Iv(r,kk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Tk]="t",r[Fv]=e,r[Uv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tk(),window[wk+this.uniqueCallbackIdentifier]=e,window[Ek+this.uniqueCallbackIdentifier]=n,this.myIFrame=mh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fv]=this.myID,e[Uv]=this.myPW,e[zv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wv+r.length<=Bv;){const o=this.pendingSegs.shift();r=r+"&"+xk+i+"="+o.seg+"&"+Ck+i+"="+o.ts+"&"+Ik+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Rk)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=16384,bk=45e3;let za=null;typeof MozWebSocket<"u"?za=MozWebSocket:typeof WebSocket<"u"&&(za=WebSocket);class vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lo(this.connId),this.stats_=ph(n),this.connURL=vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[kv]=fh,typeof location<"u"&&location.hostname&&bv.test(location.hostname)&&(o[Nv]=Pv),n&&(o[Rv]=n),r&&(o[Av]=r),i&&(o[Uu]=i),s&&(o[Ov]=s),Mv(e,Dv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,or.set("previous_websocket_failure",!0);try{let r;fx(),this.mySock=new za(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&za!==null&&!vt.forceDisallow_}static previouslyFailed(){return or.isInMemoryStorage||or.get("previous_websocket_failure")===!0}markConnectionHealthy(){or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ms(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iv(n,Pk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{static get ALL_TRANSPORTS(){return[qr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of Bs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Bs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=6e4,Ok=5e3,Dk=10*1024,Lk=100*1024,Ec="t",am="d",jk="s",lm="r",Mk="e",cm="o",um="a",dm="n",hm="p",Fk="h";class Uk{constructor(e,n,r,i,s,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lo("c:"+this.id+":"),this.transportManager_=new Bs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Dk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===um?this.upgradeIfSecondaryHealthy_():n===lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Bi("t",e),r=Bi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:um,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Bi("t",e),r=Bi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Bi(Ec,e);if(am in e){const r=e[am];if(n===Fk){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jk?this.onConnectionShutdown_(r):n===lm?this.onReset_(r):n===Mk?Fu("Server Error: "+r):n===cm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fh!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ak))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ok))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends Vv{static getInstance(){return new Ba}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!th()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=32,pm=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new q("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function gh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ws(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return De(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bk(t,e){const n=Ws(t,0),r=Ws(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Pr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Gv(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Wk{constructor(e,n){this.errorPrefix_=n,this.parts_=Ws(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_l(this.parts_[r]);qv(this)}}function $k(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_l(e),qv(t)}function Vk(t){const e=t.parts_.pop();t.byteLength_-=_l(e),t.parts_.length>0&&(t.byteLength_-=1)}function qv(t){if(t.byteLength_>pm)throw new Error(t.errorPrefix_+"has a key path longer than "+pm+" bytes ("+t.byteLength_+").");if(t.parts_.length>fm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fm+") or object contains a cycle "+nr(t))}function nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh extends Vv{static getInstance(){return new yh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=1e3,Hk=60*5*1e3,mm=30*1e3,Gk=1.3,qk=3e4,Kk="server_kill",gm=3;class Yt extends $v{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=lo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=Hk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ba.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ge(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new no,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Yt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const r=fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_x(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fu("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qk&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Uk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{je(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kk)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&je(d),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>hh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gm&&(this.reconnectDelay_=mm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Sv.replace(/\./g,"-")]=1,th()?e["framework.cordova"]=1:A_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ba.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(pi,e),i=new U(pi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jo;class Kv extends Cl{static get __EMPTY_NODE(){return jo}static set __EMPTY_NODE(e){jo=e}compare(e,n){return Pr(e.name,n.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(_r,jo)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,jo)}toString(){return".key"}}const ii=new Kv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=i??$e.EMPTY_NODE,this.right=s??$e.EMPTY_NODE}copy(e,n,r,i,s){return new Ee(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class Yk{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Mo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Mo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Mo(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new Yk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t,e){return Pr(t.name,e.name)}function _h(t,e){return Pr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;function Xk(t){zu=t}const Yv=function(t){return typeof t=="number"?"number:"+Tv(t):"string:"+t},Qv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else I(t===zu||t.isEmpty(),"priority of unexpected type.");I(t===zu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ym;class ve{static set __childrenNodeConstructor(e){ym=e}static get __childrenNodeConstructor(){return ym}constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:W(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Tv(this.value_):e+=this.value_,this.lazyHash_=Cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xv,Jv;function Jk(t){Xv=t}function Zk(t){Jv=t}class eR extends Cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Pr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(_r,new ve("[PRIORITY-POST]",Jv))}makePost(e,n){const r=Xv(e);return new U(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new eR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=Math.log(2);class nR{constructor(e){const n=s=>parseInt(Math.log(s)/tR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wa=function(t,e,n,r){t.sort(e);const i=function(l,u){const h=u-l;let d,f;if(h===0)return null;if(h===1)return d=t[l],f=n?n(d):d,new Ee(f,d.node,Ee.BLACK,null,null);{const m=parseInt(h/2,10)+l,_=i(l,m),v=i(m+1,u);return d=t[m],f=n?n(d):d,new Ee(f,d.node,Ee.BLACK,_,v)}},s=function(l){let u=null,h=null,d=t.length;const f=function(_,v){const w=d-_,g=d;d-=_;const p=i(w+1,g),y=t[w],E=n?n(y):y;m(new Ee(E,y.node,v,null,p))},m=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),w=Math.pow(2,l.count-(_+1));v?f(w,Ee.BLACK):(f(w,Ee.BLACK),f(w,Ee.RED))}return h},o=new nR(t.length),a=s(o);return new $e(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const Or={};class Gt{static get Default(){return I(Or&&le,"ChildrenNode.ts has not been loaded"),Sc=Sc||new Gt({".priority":Or},{".priority":le}),Sc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){I(e!==ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Wa(r,e.getCompare()):a=Or;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new Gt(h,u)}addToIndexes(e,n){const r=Aa(this.indexes_,(i,s)=>{const o=fi(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Or)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Wa(a,o.getCompare())}else return Or;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Gt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Aa(this.indexes_,i=>{if(i===Or)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Gt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i;class j{static get EMPTY_NODE(){return $i||($i=new j(new $e(_h),null,Gt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Qv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$i}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$i:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$i:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{I(W(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yv(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Cv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===co?-1:0}withIndex(e){if(e===ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ii?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rR extends j{constructor(){super(new $e(_h),j.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const co=new rR;Object.defineProperties(U,{MIN:{value:new U(pi,j.EMPTY_NODE)},MAX:{value:new U(_r,co)}});Kv.__EMPTY_NODE=j.EMPTY_NODE;ve.__childrenNodeConstructor=j;Xk(co);Zk(co);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=!0;function me(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,me(e))}if(!(t instanceof Array)&&iR){const n=[];let r=!1;if(ke(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return j.EMPTY_NODE;const s=Wa(n,Qk,o=>o.name,_h);if(r){const o=Wa(n,le.getCompare());return new j(s,me(e),new Gt({".priority":o},{".priority":le}))}else return new j(s,me(e),Gt.Default)}else{let n=j.EMPTY_NODE;return ke(t,(r,i)=>{if(Ut(t,r)&&r.substring(0,1)!=="."){const s=me(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(me(e))}}Jk(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR extends Cl{constructor(e){super(),this.indexPath_=e,I(!z(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Pr(e.name,n.name):s}makePost(e,n){const r=me(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,co);return new U(_r,e)}toString(){return Ws(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR extends Cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Pr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=me(e);return new U(n,r)}toString(){return".value"}}const aR=new oR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){return{type:"value",snapshotNode:t}}function mi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange($s(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(mi(n,r)):o.trackChildChange(Vs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange($s(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Vs(i,s,o))}else r.trackChildChange(mi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.indexedFilter_=new vh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hs.getStartPost_(e),this.endPost_=Hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new U(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(h&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Vs(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange($s(n,d));const v=a.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(mi(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:h&&o(u,l)>=0?(s!=null&&(s.trackChildChange($s(u.name,u.node)),s.trackChildChange(mi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_r}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new wh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uR(t){return t.loadsAllData()?new vh(t.getIndex()):t.hasLimit()?new cR(t):new Hs(t)}function _m(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===aR?n="$value":t.index_===ii?n="$key":(I(t.index_ instanceof sR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends $v{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=lo("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$a.getListenId_(e,r),a={};this.listens_[o]=a;const l=_m(e._queryParams);this.restRequest_(s+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),fi(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=$a.getListenId_(e,n);delete this.listens_[r]}get(e){const n=_m(e._queryParams),r=e._path.toString(),i=new no;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ms(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){return{value:null,children:new Map}}function e0(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,Va());const i=t.children.get(r);e=Y(e),e0(i,e,n)}}function Bu(t,e,n){t.value!==null?n(e,t.value):hR(t,(r,i)=>{const s=new q(e.toString()+"/"+r);Bu(i,s,n)})}function hR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&ke(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=10*1e3,pR=30*1e3,mR=5*60*1e3;class gR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fR(e);const r=wm+(pR-wm)*Math.random();ds(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ke(e,(i,s)=>{s>0&&Ut(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*mR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xt||(xt={}));function Eh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=xt.ACK_USER_WRITE,this.source=Eh()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new Ha(V(),n,this.revert)}}else return I(W(this.path)===e,"operationForChild called for unrelated child."),new Ha(Y(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.source=e,this.path=n,this.type=xt.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Gs(this.source,V()):new Gs(this.source,Y(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=xt.OVERWRITE}operationForChild(e){return z(this.path)?new vr(this.source,V(),this.snap.getImmediateChild(e)):new vr(this.source,Y(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=xt.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new vr(this.source,V(),n.value):new gi(this.source,V(),n)}else return I(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _R(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(lR(o.childName,o.snapshotNode))}),Vi(t,i,"child_removed",e,r,n),Vi(t,i,"child_added",e,r,n),Vi(t,i,"child_moved",s,r,n),Vi(t,i,"child_changed",e,r,n),Vi(t,i,"value",e,r,n),i}function Vi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>wR(t,a,l)),o.forEach(a=>{const l=vR(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function vR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wR(t,e,n){if(e.childName==null||n.childName==null)throw Ii("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){return{eventCache:t,serverCache:e}}function hs(t,e,n,r){return Il(new Un(e,n,r),t.serverCache)}function t0(t,e,n,r){return Il(t.eventCache,new Un(e,n,r))}function Ga(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function wr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;const ER=()=>(xc||(xc=new $e(sk)),xc);class K{static fromObject(e){let n=new K(null);return ke(e,(r,i)=>{n=n.set(new q(r),i)}),n}constructor(e,n=ER()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(z(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:ae(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new K(null)}}set(e,n){if(z(e))return new K(n,this.children);{const r=W(e),s=(this.children.get(r)||new K(null)).set(Y(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(z(e))return n;{const r=W(e),s=(this.children.get(r)||new K(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),ae(n,i),r):new K(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new K(null))}}function fs(t,e,n){if(z(e))return new Tt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=De(i,e);return s=s.updateChild(o,n),new Tt(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new Tt(s)}}}function Wu(t,e,n){let r=t;return ke(n,(i,s)=>{r=fs(r,ae(e,i),s)}),r}function Em(t,e){if(z(e))return Tt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new Tt(n)}}function $u(t,e){return br(t,e)!=null}function br(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function Sm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function On(t,e){if(z(e))return t;{const n=br(t,e);return n!=null?new Tt(new K(n)):new Tt(t.writeTree_.subtree(e))}}function Vu(t){return t.writeTree_.isEmpty()}function yi(t,e){return n0(V(),t.writeTree_,e)}function n0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=n0(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){return o0(e,t)}function SR(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=fs(t.visibleWrites,e,n)),t.lastWriteId=r}function xR(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Wu(t.visibleWrites,e,n),t.lastWriteId=r}function CR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function IR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TR(a,r.path)?i=!1:lt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return kR(t),!0;if(r.snap)t.visibleWrites=Em(t.visibleWrites,r.path);else{const a=r.children;ke(a,l=>{t.visibleWrites=Em(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function TR(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(ae(t.path,n),e))return!0;return!1}function kR(t){t.visibleWrites=r0(t.allWrites,RR,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RR(t){return t.visible}function r0(t,e,n){let r=Tt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)lt(n,o)?(a=De(n,o),r=fs(r,a,s.snap)):lt(o,n)&&(a=De(o,n),r=fs(r,V(),s.snap.getChild(a)));else if(s.children){if(lt(n,o))a=De(n,o),r=Wu(r,a,s.children);else if(lt(o,n))if(a=De(o,n),z(a))r=Wu(r,V(),s.children);else{const l=fi(s.children,W(a));if(l){const u=l.getChild(Y(a));r=fs(r,V(),u)}}}else throw Ii("WriteRecord should have .snap or .children")}}return r}function i0(t,e,n,r,i){if(!r&&!i){const s=br(t.visibleWrites,e);if(s!=null)return s;{const o=On(t.visibleWrites,e);if(Vu(o))return n;if(n==null&&!$u(o,V()))return null;{const a=n||j.EMPTY_NODE;return yi(o,a)}}}else{const s=On(t.visibleWrites,e);if(!i&&Vu(s))return n;if(!i&&n==null&&!$u(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},a=r0(t.allWrites,o,e),l=n||j.EMPTY_NODE;return yi(a,l)}}}function NR(t,e,n){let r=j.EMPTY_NODE;const i=br(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=On(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=yi(On(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),Sm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=On(t.visibleWrites,e);return Sm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function PR(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if($u(t.visibleWrites,s))return null;{const o=On(t.visibleWrites,s);return Vu(o)?i.getChild(n):yi(o,i.getChild(n))}}function bR(t,e,n,r){const i=ae(e,n),s=br(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=On(t.visibleWrites,i);return yi(o,r.getNode().getImmediateChild(n))}else return null}function AR(t,e){return br(t.visibleWrites,e)}function OR(t,e,n,r,i,s,o){let a;const l=On(t.visibleWrites,e),u=br(l,V());if(u!=null)a=u;else if(n!=null)a=yi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&h.length<i;)d(m,r)!==0&&h.push(m),m=f.getNext();return h}else return[]}function DR(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function qa(t,e,n,r){return i0(t.writeTree,t.treePath,e,n,r)}function Ch(t,e){return NR(t.writeTree,t.treePath,e)}function xm(t,e,n,r){return PR(t.writeTree,t.treePath,e,n,r)}function Ka(t,e){return AR(t.writeTree,ae(t.treePath,e))}function LR(t,e,n,r,i,s){return OR(t.writeTree,t.treePath,e,n,r,i,s)}function Ih(t,e,n){return bR(t.writeTree,t.treePath,e,n)}function s0(t,e){return o0(ae(t.treePath,e),t.writeTree)}function o0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Vs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,$s(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,mi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Vs(r,e.snapshotNode,i.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const a0=new MR;class Th{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Un(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ih(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:wr(this.viewCache_),s=LR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(t){return{filter:t}}function UR(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zR(t,e,n,r,i){const s=new jR;let o,a;if(n.type===xt.OVERWRITE){const u=n;u.source.fromUser?o=Hu(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Ya(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===xt.MERGE){const u=n;u.source.fromUser?o=WR(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Gu(t,e,u.path,u.children,r,i,a,s))}else if(n.type===xt.ACK_USER_WRITE){const u=n;u.revert?o=HR(t,e,u.path,r,i,s):o=$R(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===xt.LISTEN_COMPLETE)o=VR(t,e,n.path,r,s);else throw Ii("Unknown operation type: "+n.type);const l=s.getChanges();return BR(e,o,l),{viewCache:o,changes:l}}function BR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ga(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Zv(Ga(e)))}}function l0(t,e,n,r,i,s){const o=e.eventCache;if(Ka(r,n)!=null)return e;{let a,l;if(z(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=wr(e),h=u instanceof j?u:j.EMPTY_NODE,d=Ch(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=qa(r,wr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){I(Fn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=xm(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Y(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=xm(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Ih(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,i,s):a=o.getNode()}}return hs(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Ya(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),m,null)}else{const m=W(n);if(!l.isCompleteForPath(n)&&Fn(n)>1)return e;const _=Y(n),w=l.getNode().getImmediateChild(m).updateChild(_,r);m===".priority"?u=h.updatePriority(l.getNode(),w):u=h.updateChild(l.getNode(),m,w,_,a0,null)}const d=t0(e,u,l.isFullyInitialized()||z(n),h.filtersNodes()),f=new Th(i,d,s);return l0(t,d,n,i,f,a)}function Hu(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const h=new Th(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=hs(e,u,!0,t.filter.filtersNodes());else{const d=W(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=hs(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=Y(n),m=a.getNode().getImmediateChild(d);let _;if(z(f))_=r;else{const v=h.getCompleteChild(d);v!=null?gh(f)===".priority"&&v.getChild(Hv(f)).isEmpty()?_=v:_=v.updateChild(f,r):_=j.EMPTY_NODE}if(m.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),d,_,f,h,o);l=hs(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cm(t,e){return t.eventCache.isCompleteForChild(e)}function WR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const h=ae(n,l);Cm(e,W(h))&&(a=Hu(t,a,h,u,i,s,o))}),r.foreach((l,u)=>{const h=ae(n,l);Cm(e,W(h))||(a=Hu(t,a,h,u,i,s,o))}),a}function Im(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;z(n)?u=r:u=new K(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),_=Im(t,m,f);l=Ya(t,l,new q(d),_,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!m){const _=e.serverCache.getNode().getImmediateChild(d),v=Im(t,_,f);l=Ya(t,l,new q(d),v,i,s,o,a)}}),l}function $R(t,e,n,r,i,s,o){if(Ka(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ya(t,e,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let u=new K(null);return l.getNode().forEachChild(ii,(h,d)=>{u=u.set(new q(h),d)}),Gu(t,e,n,u,i,s,a,o)}else return e}else{let u=new K(null);return r.foreach((h,d)=>{const f=ae(n,h);l.isCompleteForPath(f)&&(u=u.set(h,l.getNode().getChild(f)))}),Gu(t,e,n,u,i,s,a,o)}}function VR(t,e,n,r,i){const s=e.serverCache,o=t0(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return l0(t,o,n,r,a0,i)}function HR(t,e,n,r,i,s){let o;if(Ka(r,n)!=null)return e;{const a=new Th(r,e,i),l=e.eventCache.getNode();let u;if(z(n)||W(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=qa(r,wr(e));else{const d=e.serverCache.getNode();I(d instanceof j,"serverChildren would be complete if leaf node"),h=Ch(r,d)}h=h,u=t.filter.updateFullNode(l,h,s)}else{const h=W(n);let d=Ih(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,Y(n),a,s):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,j.EMPTY_NODE,Y(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qa(r,wr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ka(r,V())!=null,hs(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new vh(r.getIndex()),s=uR(r);this.processor_=FR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,a.getNode(),null),h=new Un(l,o.isFullyInitialized(),i.filtersNodes()),d=new Un(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Il(d,h),this.eventGenerator_=new yR(this.query_)}get query(){return this.query_}}function qR(t){return t.viewCache_.serverCache.getNode()}function KR(t){return Ga(t.viewCache_)}function YR(t,e){const n=wr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Tm(t){return t.eventRegistrations_.length===0}function QR(t,e){t.eventRegistrations_.push(e)}function km(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Rm(t,e,n,r){e.type===xt.MERGE&&e.source.queryId!==null&&(I(wr(t.viewCache_),"We should always have a full cache before handling merges"),I(Ga(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=zR(t.processor_,i,e,n,r);return UR(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,c0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function XR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(mi(s,o))}),n.isFullyInitialized()&&r.push(Zv(n.getNode())),c0(t,r,n.getNode(),e)}function c0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return _R(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa;class u0{constructor(){this.views=new Map}}function JR(t){I(!Qa,"__referenceConstructor has already been defined"),Qa=t}function ZR(){return I(Qa,"Reference.ts has not been loaded"),Qa}function eN(t){return t.views.size===0}function kh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Rm(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Rm(o,e,n,r));return s}}function d0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=qa(n,i?r:null),l=!1;a?l=!0:r instanceof j?(a=Ch(n,r),l=!1):(a=j.EMPTY_NODE,l=!1);const u=Il(new Un(a,l,!1),new Un(r,i,!1));return new GR(e,u)}return o}function tN(t,e,n,r,i,s){const o=d0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QR(o,n),XR(o,n)}function nN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=zn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(km(u,n,r)),Tm(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(km(l,n,r)),Tm(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!zn(t)&&s.push(new(ZR())(e._repo,e._path)),{removed:s,events:o}}function h0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Dn(t,e){let n=null;for(const r of t.views.values())n=n||YR(r,e);return n}function f0(t,e){if(e._queryParams.loadsAllData())return kl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function p0(t,e){return f0(t,e)!=null}function zn(t){return kl(t)!=null}function kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;function rN(t){I(!Xa,"__referenceConstructor has already been defined"),Xa=t}function iN(){return I(Xa,"Reference.ts has not been loaded"),Xa}let sN=1;class Nm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=DR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function m0(t,e,n,r,i){return SR(t.pendingWriteTree_,e,n,r,i),i?Ni(t,new vr(Eh(),e,n)):[]}function oN(t,e,n,r){xR(t.pendingWriteTree_,e,n,r);const i=K.fromObject(n);return Ni(t,new gi(Eh(),e,i))}function En(t,e,n=!1){const r=CR(t.pendingWriteTree_,e);if(IR(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(V(),!0):ke(r.children,o=>{s=s.set(new q(o),!0)}),Ni(t,new Ha(r.path,s,n))}else return[]}function uo(t,e,n){return Ni(t,new vr(Sh(),e,n))}function aN(t,e,n){const r=K.fromObject(n);return Ni(t,new gi(Sh(),e,r))}function lN(t,e){return Ni(t,new Gs(Sh(),e))}function cN(t,e,n){const r=Nh(t,n);if(r){const i=Ph(r),s=i.path,o=i.queryId,a=De(s,e),l=new Gs(xh(o),a);return bh(t,s,l)}else return[]}function g0(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||p0(o,e))){const l=nN(o,e,n,r);eN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>zn(m));if(h&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=fN(f);for(let _=0;_<m.length;++_){const v=m[_],w=v.query,g=w0(t,v);t.listenProvider_.startListening(ps(w),qs(t,w),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(ps(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Rl(f));t.listenProvider_.stopListening(ps(f),m)}))}pN(t,u)}return a}function y0(t,e,n,r){const i=Nh(t,r);if(i!=null){const s=Ph(i),o=s.path,a=s.queryId,l=De(o,e),u=new vr(xh(a),l,n);return bh(t,o,u)}else return[]}function uN(t,e,n,r){const i=Nh(t,r);if(i){const s=Ph(i),o=s.path,a=s.queryId,l=De(o,e),u=K.fromObject(n),h=new gi(xh(a),l,u);return bh(t,o,h)}else return[]}function dN(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const _=De(f,i);s=s||Dn(m,_),o=o||zn(m)});let a=t.syncPointTree_.get(i);a?(o=o||zn(a),s=s||Dn(a,V())):(a=new u0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,_)=>{const v=Dn(_,V());v&&(s=s.updateImmediateChild(m,v))}));const u=p0(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Rl(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=mN();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const h=Tl(t.pendingWriteTree_,i);let d=tN(a,e,n,h,s,l);if(!u&&!o&&!r){const f=f0(a,e);d=d.concat(gN(t,e,f))}return d}function Rh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=De(o,e),u=Dn(a,l);if(u)return u});return i0(i,e,s,n,!0)}function hN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const d=De(u,n);r=r||Dn(h,d)});let i=t.syncPointTree_.get(n);i?r=r||Dn(i,V()):(i=new u0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Un(r,!0,!1):null,a=Tl(t.pendingWriteTree_,e._path),l=d0(i,e,a,s?o.getNode():j.EMPTY_NODE,s);return KR(l)}function Ni(t,e){return _0(e,t.syncPointTree_,null,Tl(t.pendingWriteTree_,V()))}function _0(t,e,n,r){if(z(t.path))return v0(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Dn(i,V()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=s0(r,o);s=s.concat(_0(a,l,u,h))}return i&&(s=s.concat(kh(i,t,r,n))),s}}function v0(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Dn(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=s0(r,o),h=t.operationForChild(o);h&&(s=s.concat(v0(h,a,l,u)))}),i&&(s=s.concat(kh(i,t,r,n))),s}function w0(t,e){const n=e.query,r=qs(t,n);return{hashFn:()=>(qR(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?cN(t,n._path,r):lN(t,n._path);{const s=lk(i,n);return g0(t,n,null,s)}}}}function qs(t,e){const n=Rl(e);return t.queryToTagMap.get(n)}function Rl(t){return t._path.toString()+"$"+t._queryIdentifier}function Nh(t,e){return t.tagToQueryMap.get(e)}function Ph(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function bh(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Tl(t.pendingWriteTree_,e);return kh(r,n,i,null)}function fN(t){return t.fold((e,n,r)=>{if(n&&zn(n))return[kl(n)];{let i=[];return n&&(i=h0(n)),ke(r,(s,o)=>{i=i.concat(o)}),i}})}function ps(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iN())(t._repo,t._path):t}function pN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Rl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function mN(){return sN++}function gN(t,e,n){const r=e._path,i=qs(t,e),s=w0(t,n),o=t.listenProvider_.startListening(ps(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!zn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,d)=>{if(!z(u)&&h&&zn(h))return[kl(h).query];{let f=[];return h&&(f=f.concat(h0(h).map(m=>m.query))),ke(d,(m,_)=>{f=f.concat(_)}),f}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(ps(h),qs(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ah(n)}node(){return this.node_}}class Oh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Oh(this.syncTree_,n)}node(){return Rh(this.syncTree_,this.path_)}}const yN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pm=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return _N(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vN(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},_N=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},vN=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},E0=function(t,e,n,r){return Dh(e,new Oh(n,t),r)},S0=function(t,e,n){return Dh(t,new Ah(e),n)};function Dh(t,e,n){const r=t.getPriority().val(),i=Pm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Pm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,me(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(le,(a,l)=>{const u=Dh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jh(t,e){let n=e instanceof q?e:new q(e),r=t,i=W(n);for(;i!==null;){const s=fi(r.node.children,i)||{children:{},childCount:0};r=new Lh(i,r,s),n=Y(n),i=W(n)}return r}function Pi(t){return t.node.value}function x0(t,e){t.node.value=e,qu(t)}function C0(t){return t.node.childCount>0}function wN(t){return Pi(t)===void 0&&!C0(t)}function Nl(t,e){ke(t.node.children,(n,r)=>{e(new Lh(n,t,r))})}function I0(t,e,n,r){n&&e(t),Nl(t,i=>{I0(i,e,!0)})}function EN(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ho(t){return new q(t.parent===null?t.name:ho(t.parent)+"/"+t.name)}function qu(t){t.parent!==null&&SN(t.parent,t.name,t)}function SN(t,e,n){const r=wN(n),i=Ut(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=/[\[\].#$\/\u0000-\u001F\u007F]/,CN=/[\[\].#$\u0000-\u001F\u007F]/,Cc=10*1024*1024,Mh=function(t){return typeof t=="string"&&t.length!==0&&!xN.test(t)},T0=function(t){return typeof t=="string"&&t.length!==0&&!CN.test(t)},IN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T0(t)},TN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!dh(t)||t&&typeof t=="object"&&Ut(t,".sv")},k0=function(t,e,n,r){r&&e===void 0||Pl(yl(t,"value"),e,n)},Pl=function(t,e,n){const r=n instanceof q?new Wk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+nr(r)+" with contents = "+e.toString());if(dh(e))throw new Error(t+"contains "+e.toString()+" "+nr(r));if(typeof e=="string"&&e.length>Cc/3&&_l(e)>Cc)throw new Error(t+"contains a string greater than "+Cc+" utf8 bytes "+nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ke(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Mh(o)))throw new Error(t+" contains an invalid key ("+o+") "+nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$k(r,o),Pl(t,a,r),Vk(r)}),i&&s)throw new Error(t+' contains ".value" child '+nr(r)+" in addition to actual children.")}},kN=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ws(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Mh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Bk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},RN=function(t,e,n,r){const i=yl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ke(e,(o,a)=>{const l=new q(o);if(Pl(i,a,ae(n,l)),gh(l)===".priority"&&!TN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),kN(i,s)},R0=function(t,e,n,r){if(!T0(n))throw new Error(yl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},NN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),R0(t,e,n)},Fh=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},PN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Mh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IN(n))throw new Error(yl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ft(t,e,n){Uh(t,n),AN(t,r=>lt(r,e)||lt(e,r))}function AN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ON(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ON(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();us&&Ce("event: "+n.toString()),Ri(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="repo_interrupt",LN=25;class jN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new bN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Va(),this.transactionQueueTree_=new Lh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MN(t,e,n){if(t.stats_=ph(t.repoInfo_),t.forceRestClient_||hk())t.server_=new $a(t.repoInfo_,(r,i,s,o)=>{bm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Am(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(r,i,s,o)=>{bm(t,r,i,s,o)},r=>{Am(t,r)},r=>{FN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yk(t.repoInfo_,()=>new gR(t.stats_,t.server_)),t.infoData_=new dR,t.infoSyncTree_=new Nm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=uo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),zh(t,"connected",!1),t.serverSyncTree_=new Nm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);ft(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function N0(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function bl(t){return yN({timestamp:N0(t)})}function bm(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Aa(n,u=>me(u));o=uN(t.serverSyncTree_,s,l,i)}else{const l=me(n);o=y0(t.serverSyncTree_,s,l,i)}else if(r){const l=Aa(n,u=>me(u));o=aN(t.serverSyncTree_,s,l)}else{const l=me(n);o=uo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_i(t,s)),ft(t.eventQueue_,a,o)}function Am(t,e){zh(t,"connected",e),e===!1&&WN(t)}function FN(t,e){ke(e,(n,r)=>{zh(t,n,r)})}function zh(t,e,n){const r=new q("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(r,i);const s=uo(t.infoSyncTree_,r,i);ft(t.eventQueue_,r,s)}function Bh(t){return t.nextWriteId_++}function UN(t,e,n){const r=hN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=me(i).withIndex(e._queryParams.getIndex());dN(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=uo(t.serverSyncTree_,e._path,s);else{const a=qs(t.serverSyncTree_,e);o=y0(t.serverSyncTree_,e._path,s,a)}return ft(t.eventQueue_,e._path,o),g0(t.serverSyncTree_,e,n,null,!0),s},i=>(fo(t,"get for query "+ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function zN(t,e,n,r,i){fo(t,"set",{path:e.toString(),value:n,priority:r});const s=bl(t),o=me(n,r),a=Rh(t.serverSyncTree_,e),l=S0(o,a,s),u=Bh(t),h=m0(t.serverSyncTree_,e,l,u,!0);Uh(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const _=f==="ok";_||je("set at "+e+" failed: "+f);const v=En(t.serverSyncTree_,u,!_);ft(t.eventQueue_,e,v),Ku(t,i,f,m)});const d=$h(t,e);_i(t,d),ft(t.eventQueue_,d,[])}function BN(t,e,n,r){fo(t,"update",{path:e.toString(),value:n});let i=!0;const s=bl(t),o={};if(ke(n,(a,l)=>{i=!1,o[a]=E0(ae(e,a),me(l),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),Ku(t,r,"ok",void 0);else{const a=Bh(t),l=oN(t.serverSyncTree_,e,o,a);Uh(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||je("update at "+e+" failed: "+u);const f=En(t.serverSyncTree_,a,!d),m=f.length>0?_i(t,e):e;ft(t.eventQueue_,m,f),Ku(t,r,u,h)}),ke(n,u=>{const h=$h(t,ae(e,u));_i(t,h)}),ft(t.eventQueue_,e,[])}}function WN(t){fo(t,"onDisconnectEvents");const e=bl(t),n=Va();Bu(t.onDisconnect_,V(),(i,s)=>{const o=E0(i,s,t.serverSyncTree_,e);e0(n,i,o)});let r=[];Bu(n,V(),(i,s)=>{r=r.concat(uo(t.serverSyncTree_,i,s));const o=$h(t,i);_i(t,o)}),t.onDisconnect_=Va(),ft(t.eventQueue_,V(),r)}function $N(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DN)}function fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function Ku(t,e,n,r){e&&Ri(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function P0(t,e,n){return Rh(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Wh(t,e=t.transactionQueueTree_){if(e||Al(t,e),Pi(e)){const n=A0(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VN(t,ho(e),n)}else C0(e)&&Nl(e,n=>{Wh(t,n)})}function VN(t,e,n){const r=n.map(u=>u.currentWriteId),i=P0(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=De(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{fo(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(En(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Al(t,jh(t.transactionQueueTree_,e)),Wh(t,t.transactionQueueTree_),ft(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)Ri(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{je("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}_i(t,e)}},o)}function _i(t,e){const n=b0(t,e),r=ho(n),i=A0(t,n);return HN(t,i,r),r}function HN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=De(n,l.path);let h=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=LN)h=!0,d="maxretry",i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0));else{const f=P0(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Pl("transaction failed: Data returned ",m,l.path);let _=me(m);typeof m=="object"&&m!=null&&Ut(m,".priority")||(_=_.updatePriority(f.getPriority()));const w=l.currentWriteId,g=bl(t),p=S0(_,f,g);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=Bh(t),o.splice(o.indexOf(w),1),i=i.concat(m0(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(En(t.serverSyncTree_,w,!0))}else h=!0,d="nodata",i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0))}ft(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Al(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ri(r[a]);Wh(t,t.transactionQueueTree_)}function b0(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&Pi(r)===void 0;)r=jh(r,n),e=Y(e),n=W(e);return r}function A0(t,e){const n=[];return O0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function O0(t,e,n){const r=Pi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Nl(e,i=>{O0(t,i,n)})}function Al(t,e){const n=Pi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,x0(e,n.length>0?n:void 0)}Nl(e,r=>{Al(t,r)})}function $h(t,e){const n=ho(b0(t,e)),r=jh(t.transactionQueueTree_,e);return EN(r,i=>{Ic(t,i)}),Ic(t,r),I0(r,i=>{Ic(t,i)}),n}function Ic(t,e){const n=Pi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(En(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?x0(e,void 0):n.length=s+1,ft(t.eventQueue_,ho(e),i);for(let o=0;o<r.length;o++)Ri(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Om=function(t,e){const n=KN(t),r=n.namespace;n.domain==="firebase.com"&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rk();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},KN=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=GN(t.substring(h,d)));const f=qN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",YN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Dm.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Dm.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class XN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:gh(this._path)}get ref(){return new on(this._repo,this._path)}get _queryIdentifier(){const e=vm(this._queryParams),n=hh(e);return n==="{}"?"default":n}get _queryObject(){return vm(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof Vh))return!1;const n=this._repo===e._repo,r=Gv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zk(this._path)}}class on extends Vh{constructor(e,n){super(e,n,new wh,!1)}get parent(){const e=Hv(this._path);return e===null?null:new on(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ks{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Ys(this.ref,e);return new Ks(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ks(i,Ys(this.ref,r),le)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wt(t,e){return t=te(t),t._checkNotDeleted("ref"),e!==void 0?Ys(t._root,e):t._root}function Ys(t,e){return t=te(t),W(t._path)===null?NN("child","path",e):R0("child","path",e),new on(t._repo,ae(t._path,e))}function ZN(t,e){t=te(t),Fh("push",t._path),k0("push",e,t._path,!0);const n=N0(t._repo),r=YN(n),i=Ys(t,r),s=Ys(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function D0(t){return Fh("remove",t._path),vi(t,null)}function vi(t,e){t=te(t),Fh("set",t._path),k0("set",e,t._path,!1);const n=new no;return zN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function eP(t,e){RN("update",e,t._path);const n=new no;return BN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ms(t){t=te(t);const e=new JN(()=>{}),n=new Hh(e);return UN(t._repo,t,n).then(r=>new Ks(r,new on(t._repo,t._path),t._queryParams.getIndex()))}class Hh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new QN("value",this,new Ks(e.snapshotNode,new on(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new XN(this,e,n):null}matches(e){return e instanceof Hh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}JR(on);rN(on);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP="FIREBASE_DATABASE_EMULATOR_HOST",Yu={};let nP=!1;function rP(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Gn(s);t.repoInfo_=new jv(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function iP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Om(s,i),a=o.repoInfo,l;typeof process<"u"&&tm&&(l=tm[tP]),l?(s=`http://${l}?ns=${a.namespace}`,o=Om(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new pk(t.name,t.options,e);PN("Invalid Firebase Database URL",o),z(o.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=oP(a,t,u,new fk(t,n));return new aP(h,t)}function sP(t,e){const n=Yu[e];(!n||n[t.key]!==t)&&nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$N(t),delete n[t.key]}function oP(t,e,n,r){let i=Yu[e.name];i||(i={},Yu[e.name]=i);let s=i[t.toURLString()];return s&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new jN(t,nP,n,r),i[t.toURLString()]=s,s}class aP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new on(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nn("Cannot call "+e+" on a deleted database.")}}function lP(t=wl(),e){const n=qn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=k_("database");r&&cP(n,...r)}return n}function cP(t,e,n,r={}){t=te(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Mn(r,s.repoInfo_.emulatorOptions))return;nn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ia(ia.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:P_(r.mockUserToken,t.app.options.projectId);o=new ia(a)}Gn(e)&&(Zd(e),eh("Database",!0)),rP(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t){XT(Rr),Rt(new ht("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return iP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),qe(nm,rm,t),qe(nm,rm,"esm2020")}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};uP();var dP="firebase",hP="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(dP,hP,"app");const L0="@firebase/installations",Gh="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=1e4,M0=`w:${Gh}`,F0="FIS_v2",fP="https://firebaseinstallations.googleapis.com/v1",pP=60*60*1e3,mP="installations",gP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Er=new kr(mP,gP,yP);function U0(t){return t instanceof Pt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0({projectId:t}){return`${fP}/projects/${t}/installations`}function B0(t){return{token:t.token,requestStatus:2,expiresIn:vP(t.expiresIn),creationTime:Date.now()}}async function W0(t,e){const r=(await e.json()).error;return Er.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function $0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _P(t,{refreshToken:e}){const n=$0(t);return n.append("Authorization",wP(e)),n}async function V0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vP(t){return Number(t.replace("s","000"))}function wP(t){return`${F0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=z0(t),i=$0(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:F0,appId:t.appId,sdkVersion:M0},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await V0(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:B0(u.authToken)}}else throw await W0("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^[cdef][\w-]{21}$/,Qu="";function CP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IP(t);return xP.test(n)?n:Qu}catch{return Qu}}function IP(t){return SP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new Map;function q0(t,e){const n=Ol(t);K0(n,e),TP(n,e)}function K0(t,e){const n=G0.get(t);if(n)for(const r of n)r(e)}function TP(t,e){const n=kP();n&&n.postMessage({key:t,fid:e}),RP()}let ar=null;function kP(){return!ar&&"BroadcastChannel"in self&&(ar=new BroadcastChannel("[Firebase] FID Change"),ar.onmessage=t=>{K0(t.data.key,t.data.fid)}),ar}function RP(){G0.size===0&&ar&&(ar.close(),ar=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="firebase-installations-database",PP=1,Sr="firebase-installations-store";let Tc=null;function qh(){return Tc||(Tc=F_(NP,PP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}})),Tc}async function Ja(t,e){const n=Ol(t),i=(await qh()).transaction(Sr,"readwrite"),s=i.objectStore(Sr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&q0(t,e.fid),e}async function Y0(t){const e=Ol(t),r=(await qh()).transaction(Sr,"readwrite");await r.objectStore(Sr).delete(e),await r.done}async function Dl(t,e){const n=Ol(t),i=(await qh()).transaction(Sr,"readwrite"),s=i.objectStore(Sr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&q0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(t){let e;const n=await Dl(t.appConfig,r=>{const i=bP(r),s=AP(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Qu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bP(t){const e=t||{fid:CP(),registrationStatus:0};return Q0(e)}function AP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Er.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=OP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DP(t)}:{installationEntry:e}}async function OP(t,e){try{const n=await EP(t,e);return Ja(t.appConfig,n)}catch(n){throw U0(n)&&n.customData.serverCode===409?await Y0(t.appConfig):await Ja(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DP(t){let e=await Lm(t.appConfig);for(;e.registrationStatus===1;)await H0(100),e=await Lm(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Kh(t);return r||n}return e}function Lm(t){return Dl(t,e=>{if(!e)throw Er.create("installation-not-found");return Q0(e)})}function Q0(t){return LP(t)?{fid:t.fid,registrationStatus:0}:t}function LP(t){return t.registrationStatus===1&&t.registrationTime+j0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP({appConfig:t,heartbeatServiceProvider:e},n){const r=MP(t,n),i=_P(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:M0,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await V0(()=>fetch(r,a));if(l.ok){const u=await l.json();return B0(u)}else throw await W0("Generate Auth Token",l)}function MP(t,{fid:e}){return`${z0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e=!1){let n;const r=await Dl(t.appConfig,s=>{if(!X0(s))throw Er.create("not-registered");const o=s.authToken;if(!e&&zP(o))return s;if(o.requestStatus===1)return n=FP(t,e),s;{if(!navigator.onLine)throw Er.create("app-offline");const a=WP(s);return n=UP(t,a),a}});return n?await n:r.authToken}async function FP(t,e){let n=await jm(t.appConfig);for(;n.authToken.requestStatus===1;)await H0(100),n=await jm(t.appConfig);const r=n.authToken;return r.requestStatus===0?Yh(t,e):r}function jm(t){return Dl(t,e=>{if(!X0(e))throw Er.create("not-registered");const n=e.authToken;return $P(n)?{...e,authToken:{requestStatus:0}}:e})}async function UP(t,e){try{const n=await jP(t,e),r={...e,authToken:n};return await Ja(t.appConfig,r),n}catch(n){if(U0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Y0(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ja(t.appConfig,r)}throw n}}function X0(t){return t!==void 0&&t.registrationStatus===2}function zP(t){return t.requestStatus===2&&!BP(t)}function BP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pP}function WP(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function $P(t){return t.requestStatus===1&&t.requestTime+j0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Kh(e);return r?r.catch(console.error):Yh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,e=!1){const n=t;return await GP(n),(await Yh(n,e)).token}async function GP(t){const{registrationPromise:e}=await Kh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){if(!t||!t.options)throw kc("App Configuration");if(!t.name)throw kc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kc(t){return Er.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="installations",KP="installations-internal",YP=t=>{const e=t.getProvider("app").getImmediate(),n=qP(e),r=qn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},QP=t=>{const e=t.getProvider("app").getImmediate(),n=qn(e,J0).getImmediate();return{getId:()=>VP(n),getToken:i=>HP(n,i)}};function XP(){Rt(new ht(J0,YP,"PUBLIC")),Rt(new ht(KP,QP,"PRIVATE"))}XP();qe(L0,Gh);qe(L0,Gh,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="analytics",JP="firebase_id",ZP="origin",eb=60*1e3,tb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Qh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=new vl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},et=new kr("analytics","Analytics",nb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){if(!t.startsWith(Qh)){const e=et.create("invalid-gtag-resource",{gtagURL:t});return Me.warn(e.message),""}return t}function Z0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function ib(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function sb(t,e){const n=ib("firebase-js-sdk-policy",{createScriptURL:rb}),r=document.createElement("script"),i=`${Qh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function ob(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ab(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await Z0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Me.error(a)}t("config",i,s)}async function lb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Z0(n);for(const l of o){const u=a.find(d=>d.measurementId===l),h=u&&e[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Me.error(s)}}function cb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await lb(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await ab(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Me.error(a)}}return i}function ub(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=cb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function db(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Qh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=30,fb=1e3;class pb{constructor(e={},n=fb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ew=new pb;function mb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function gb(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:mb(n)},i=tb.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();(o=l.error)!=null&&o.message&&(a=l.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function yb(t,e=ew,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new wb;return setTimeout(async()=>{a.abort()},eb),tw({appId:r,apiKey:i,measurementId:s},o,a,e)}async function tw(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ew){var a;const{appId:s,measurementId:o}=t;try{await _b(r,e)}catch(l){if(o)return Me.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await gb(t);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!vb(u)){if(i.deleteThrottleMetadata(s),o)return Me.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw l}const h=Number((a=u==null?void 0:u.customData)==null?void 0:a.httpStatus)===503?kp(n,i.intervalMillis,hb):kp(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,d),Me.debug(`Calling attemptFetch again in ${h} millis`),tw(t,d,r,i)}}function _b(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vb(t){if(!(t instanceof Pt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class wb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Eb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function Sb(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(){if(O_())try{await D_()}catch(t){return Me.warn(et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Me.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Cb(t,e,n,r,i,s,o){const a=yb(t);a.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Me.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Me.error(f)),e.push(a);const l=xb().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([a,l]);db(s)||sb(s,u.measurementId),i("js",new Date);const d=(o==null?void 0:o.config)??{};return d[ZP]="firebase",d.update=!0,h!=null&&(d[JP]=h),i("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.app=e}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},Mm=[];const Fm={};let Rc="dataLayer",Tb="gtag",Um,Xh,zm=!1;function kb(){const t=[];if(b_()&&t.push("This is a browser extension environment."),px()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:e});Me.warn(n.message)}}function Rb(t,e,n){kb();const r=t.options.appId;if(!r)throw et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Me.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(si[r]!=null)throw et.create("already-exists",{id:r});if(!zm){ob(Rc);const{wrappedGtag:s,gtagCore:o}=ub(si,Mm,Fm,Rc,Tb);Xh=s,Um=o,zm=!0}return si[r]=Cb(t,Mm,Fm,e,Um,Rc,n),new Ib(t)}function Nb(t=wl()){t=te(t);const e=qn(t,Za);return e.isInitialized()?e.getImmediate():Pb(t)}function Pb(t,e={}){const n=qn(t,Za);if(n.isInitialized()){const i=n.getImmediate();if(Mn(e,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:e})}function bb(t,e,n){t=te(t),Sb(Xh,si[t.app.options.appId],e,n).catch(r=>Me.error(r))}function Ab(t,e,n,r){t=te(t),Eb(Xh,si[t.app.options.appId],e,n,r).catch(i=>Me.error(i))}const Bm="@firebase/analytics",Wm="0.10.19";function Ob(){Rt(new ht(Za,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Rb(r,i,n)},"PUBLIC")),Rt(new ht("analytics-internal",t,"PRIVATE")),qe(Bm,Wm),qe(Bm,Wm,"esm2020");function t(e){try{const n=e.getProvider(Za).getImmediate();return{logEvent:(r,i,s)=>Ab(n,r,i,s),setUserProperties:(r,i)=>bb(n,r,i)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}Ob();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="firebasestorage.googleapis.com",rw="storageBucket",Db=2*60*1e3,Lb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Pt{constructor(e,n,r=0){super(Nc(e),`Firebase Storage: ${n} (${Nc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function Nc(t){return"storage/"+t}function Jh(){const t="An unknown error occurred, please check the error payload for server response.";return new ue(ce.UNKNOWN,t)}function jb(t){return new ue(ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Mb(t){return new ue(ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Fb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ue(ce.UNAUTHENTICATED,t)}function Ub(){return new ue(ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zb(t){return new ue(ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Bb(){return new ue(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wb(){return new ue(ce.CANCELED,"User canceled the upload/download.")}function $b(t){return new ue(ce.INVALID_URL,"Invalid URL '"+t+"'.")}function Vb(t){return new ue(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hb(){return new ue(ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rw+"' property when initializing the app?")}function Gb(){return new ue(ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function qb(){return new ue(ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kb(t){return new ue(ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xu(t){return new ue(ce.INVALID_ARGUMENT,t)}function iw(){return new ue(ce.APP_DELETED,"The Firebase app was deleted.")}function Yb(t){return new ue(ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gs(t,e){return new ue(ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hi(t){throw new ue(ce.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Je.makeFromUrl(e,n)}catch{return new Je(e,"")}if(r.path==="")return r;throw Vb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${i}/o${f}`,"i"),_={bucket:1,path:3},v=n===nw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${v}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:_,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const T=y[E],b=T.regex.exec(e);if(b){const P=b[T.indices.bucket];let A=b[T.indices.path];A||(A=""),r=new Je(P,A),T.postModify(r);break}}if(r==null)throw $b(e);return r}}class Qb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(m,l())},w)}function f(){s&&clearTimeout(s)}function m(w,...g){if(u){f();return}if(w){f(),h.call(null,w,...g);return}if(l()||o){f(),h.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let _=!1;function v(w){_||(_=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Jb(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){return t!==void 0}function eA(t){return typeof t=="object"&&!Array.isArray(t)}function Zh(t){return typeof t=="string"||t instanceof String}function $m(t){return ef()&&t instanceof Blob}function ef(){return typeof Blob<"u"}function Vm(t,e,n,r){if(r<e)throw Xu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Xu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var ur;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ur||(ur={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,i,s,o,a,l,u,h,d,f=!0,m=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.isUsingEmulator=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ur.NO_ERROR,l=s.getStatus();if(!a||tA(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===ur.ABORT;r(!1,new Fo(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Fo(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Zb(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Jh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?iw():Wb();o(l)}else{const l=Bb();o(l)}};this.canceled_?n(!1,new Fo(!1,null,!0)):this.backoffId_=Xb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function iA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function oA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function aA(t,e,n,r,i,s,o=!0,a=!1){const l=sw(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return sA(h,e),rA(h,n),iA(h,s),oA(h,r),new nA(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cA(...t){const e=lA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ef())return new Blob(t);throw new ue(ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){if(typeof atob>"u")throw Kb("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pc{constructor(e,n){this.data=e,this.contentType=n||null}}function hA(t,e){switch(t){case Dt.RAW:return new Pc(ow(e));case Dt.BASE64:case Dt.BASE64URL:return new Pc(aw(t,e));case Dt.DATA_URL:return new Pc(pA(e),mA(e))}throw Jh()}function ow(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fA(t){let e;try{e=decodeURIComponent(t)}catch{throw gs(Dt.DATA_URL,"Malformed data URL.")}return ow(e)}function aw(t,e){switch(t){case Dt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw gs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Dt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw gs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dA(e)}catch(i){throw i.message.includes("polyfill")?i:gs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class lw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw gs(Dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pA(t){const e=new lw(t);return e.base64?aw(Dt.BASE64,e.rest):fA(e.rest)}function mA(t){return new lw(t).contentType}function gA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){let r=0,i="";$m(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if($m(this.data_)){const r=this.data_,i=uA(r,e,n);return i===null?null:new yn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new yn(r,!0)}}static getBlob(...e){if(ef()){const n=e.map(r=>r instanceof yn?r.data_:r);return new yn(cA.apply(null,n))}else{const n=e.map(o=>Zh(o)?hA(Dt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new yn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){let e;try{e=JSON.parse(t)}catch{return null}return eA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _A(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function uw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e){return e}class Ae{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||vA}}let Uo=null;function wA(t){return!Zh(t)||t.length<2?t:uw(t)}function dw(){if(Uo)return Uo;const t=[];t.push(new Ae("bucket")),t.push(new Ae("generation")),t.push(new Ae("metageneration")),t.push(new Ae("name","fullPath",!0));function e(s,o){return wA(o)}const n=new Ae("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ae("size");return i.xform=r,t.push(i),t.push(new Ae("timeCreated")),t.push(new Ae("updated")),t.push(new Ae("md5Hash",null,!0)),t.push(new Ae("cacheControl",null,!0)),t.push(new Ae("contentDisposition",null,!0)),t.push(new Ae("contentEncoding",null,!0)),t.push(new Ae("contentLanguage",null,!0)),t.push(new Ae("contentType",null,!0)),t.push(new Ae("metadata","customMetadata",!0)),Uo=t,Uo}function EA(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Je(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function SA(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return EA(r,t),r}function hw(t,e,n){const r=cw(e);return r===null?null:SA(t,r,n)}function xA(t,e,n,r){const i=cw(e);if(i===null||!Zh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),m=Ll(f,n,r),_=sw({alt:"media",token:u});return m+_})[0]}function CA(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class tf{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t){if(!t)throw Jh()}function IA(t,e){function n(r,i){const s=hw(t,i,e);return fw(s!==null),s}return n}function TA(t,e){function n(r,i){const s=hw(t,i,e);return fw(s!==null),xA(s,i,t.host,t._protocol)}return n}function pw(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Ub():i=Fb():n.getStatus()===402?i=Mb(t.bucket):n.getStatus()===403?i=zb(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function mw(t){const e=pw(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=jb(t.path)),s.serverResponse=i.serverResponse,s}return n}function kA(t,e,n){const r=e.fullServerUrl(),i=Ll(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new tf(i,s,TA(t,n),o);return a.errorHandler=mw(e),a}function RA(t,e){const n=e.fullServerUrl(),r=Ll(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new tf(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=mw(e),a}function NA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function PA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=NA(null,e)),r}function bA(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=PA(e,r,i),h=CA(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=yn.getBlob(d,r,f);if(m===null)throw Gb();const _={name:u.fullPath},v=Ll(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,p=new tf(v,w,IA(t,n),g);return p.urlParams=_,p.headers=o,p.body=m.uploadData(),p.errorHandler=pw(e),p}class AA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Hi("cannot .send() more than once");if(Gn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OA extends AA{initXhr(){this.xhr_.responseType="text"}}function nf(){return new OA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this._service=e,n instanceof Je?this._location=n:this._location=Je.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xr(e,n)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uw(this._location.path)}get storage(){return this._service}get parent(){const e=yA(this._location.path);if(e===null)return null;const n=new Je(this._location.bucket,e);return new xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Yb(e)}}function DA(t,e,n){t._throwIfRoot("uploadBytes");const r=bA(t.storage,t._location,dw(),new yn(e,!0),n);return t.storage.makeRequestWithTokens(r,nf).then(i=>({metadata:i,ref:t}))}function LA(t){t._throwIfRoot("getDownloadURL");const e=kA(t.storage,t._location,dw());return t.storage.makeRequestWithTokens(e,nf).then(n=>{if(n===null)throw qb();return n})}function jA(t){t._throwIfRoot("deleteObject");const e=RA(t.storage,t._location);return t.storage.makeRequestWithTokens(e,nf)}function MA(t,e){const n=_A(t._location.path,e),r=new Je(t._location.bucket,n);return new xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){return/^[A-Za-z]+:\/\//.test(t)}function UA(t,e){return new xr(t,e)}function gw(t,e){if(t instanceof rf){const n=t;if(n._bucket==null)throw Hb();const r=new xr(n,n._bucket);return e!=null?gw(r,e):r}else return e!==void 0?MA(t,e):t}function zA(t,e){if(e&&FA(e)){if(t instanceof rf)return UA(t,e);throw Xu("To use ref(service, url), the first argument must be a Storage instance.")}else return gw(t,e)}function Hm(t,e){const n=e==null?void 0:e[rw];return n==null?null:Je.makeFromBucketSpec(n,t)}function BA(t,e,n,r={}){t.host=`${e}:${n}`;const i=Gn(e);i&&(Zd(`https://${t.host}/b`),eh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:P_(s,t.app.options.projectId))}class rf{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=nw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Db,this._maxUploadRetryTime=Lb,this._requests=new Set,i!=null?this._bucket=Je.makeFromBucketSpec(i,this._host):this._bucket=Hm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=Hm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Qb(iw());{const o=aA(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Gm="@firebase/storage",qm="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="storage";function WA(t,e,n){return t=te(t),DA(t,e,n)}function $A(t){return t=te(t),LA(t)}function VA(t){return t=te(t),jA(t)}function Km(t,e){return t=te(t),zA(t,e)}function HA(t=wl(),e){t=te(t);const r=qn(t,yw).getImmediate({identifier:e}),i=k_("storage");return i&&GA(r,...i),r}function GA(t,e,n,r={}){BA(t,e,n,r)}function qA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new rf(n,r,i,e,Rr)}function KA(){Rt(new ht(yw,qA,"PUBLIC").setMultipleInstances(!0)),qe(Gm,qm,""),qe(Gm,qm,"esm2020")}KA();const YA={apiKey:"AIzaSyBlqNGn_Q2A-9vSM95O7pmtQgw-tBMudB8",authDomain:"driftenterprises-official.firebaseapp.com",databaseURL:"https://driftenterprises-official-default-rtdb.firebaseio.com",projectId:"driftenterprises-official",storageBucket:"driftenterprises-official.firebasestorage.app",messagingSenderId:"103758286150",appId:"1:103758286150:web:957bdd5eba9f20198ca947",measurementId:"G-4PT26S55P3"},jl=U_(YA);Nb(jl);const zo=YT(jl),Et=lP(jl),Ym=HA(jl),_w=x.createContext();function QA({children:t}){const[e,n]=x.useState(null),[r,i]=x.useState(!0);x.useEffect(()=>MI(zo,async m=>{if(m)try{const _=wt(Et,`users/${m.uid}`),v=await ms(_);if(v.exists()){const w=v.val();n({uid:m.uid,email:m.email,username:w.username||m.email.split("@")[0],fullName:w.fullName||m.displayName||"User",role:w.role||"customer",loginTime:new Date().toISOString()})}else{const w={email:m.email,username:m.email.split("@")[0],fullName:m.displayName||"User",role:"customer",createdAt:Date.now()};await vi(_,w),n({uid:m.uid,email:m.email,username:w.username,fullName:w.fullName,role:w.role,loginTime:new Date().toISOString()})}}catch(_){console.error("Error fetching user data:",_),n(null)}else n(null);i(!1)}),[]);const d={user:e,loading:r,login:async(f,m)=>{i(!0);try{await DI(zo,f,m)}catch(_){throw i(!1),_}},register:async(f,m,_)=>{i(!0);try{const w=(await OI(zo,f,m)).user,g=wt(Et,`users/${w.uid}`);await vi(g,{email:f,username:f.split("@")[0],fullName:_||"User",role:"customer",createdAt:Date.now()})}catch(v){throw i(!1),v}},logout:async()=>{try{await FI(zo),n(null)}catch(f){throw console.error("Logout error:",f),f}},isAuthenticated:()=>e!==null,isAdmin:()=>e&&e.role==="admin",hasRole:f=>e&&e.role===f};return c.jsx(_w.Provider,{value:d,children:t})}function po(){const t=x.useContext(_w);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}const Qs=[{id:"1",title:"Noise Cancelling Wireless Headphones",description:"Over-ear Bluetooth headphones with active noise cancelling and 30 hours of battery life.",price:129.99,rating:4.5,image:"https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=600",category:"Electronics"},{id:"2",title:'Smart LED 4K TV 55"',description:"Ultra HD 4K smart TV with HDR, built-in streaming apps, and voice remote.",price:699.99,rating:4.7,image:"https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",category:"Electronics"},{id:"3",title:"Ergonomic Office Chair",description:"Adjustable ergonomic office chair with lumbar support and breathable mesh back.",price:189,rating:4.3,image:"https://images.pexels.com/photos/8111329/pexels-photo-8111329.jpeg?auto=compress&cs=tinysrgb&w=600",category:"Home & Kitchen"},{id:"4",title:"Stainless Steel Cookware Set, 12-Piece",description:"Premium stainless steel pots and pans set, compatible with all cooktops.",price:149.99,rating:4.6,image:"https://images.pexels.com/photos/1161467/pexels-photo-1161467.jpeg?auto=compress&cs=tinysrgb&w=600",category:"Home & Kitchen"},{id:"5",title:"Hardcover Fiction Bestseller",description:"A gripping, bestselling novel in hardcover with exclusive bonus chapter.",price:24.99,rating:4.8,image:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=600",category:"Books & Audible"},{id:"6",title:"Essential Skin Care Set",description:"Daily skincare routine kit including cleanser, serum, and moisturizer.",price:59.99,rating:4.4,image:"https://images.pexels.com/photos/3738364/pexels-photo-3738364.jpeg?auto=compress&cs=tinysrgb&w=600",category:"Beauty & Personal Care"},{id:"7",title:"POCO M7 5G - 6/128 GB",description:"6 GB RAM, 128 GB storage (expandable up to 1 TB) with a 17.48 cm (6.88 inch) HD+ display, 50MP rear camera, 8MP front camera, 5160 mAh battery, and 4 Gen 2 5G processor.",price:9350,mrp:12999,rating:4.4,image:"https://drive.google.com/drive/folders/1qE_6o9DXBTzCw3qOioJ9Cm3insxQL4Gd?usp=drive_link",images:["https://drive.google.com/file/d/1aZ7IFZ3V0_vyBtJPukfsb37fZdSRx2AF/view?usp=sharing","https://drive.google.com/file/d/19n6eqahbZL0ZK6DD-KbqXbeXKEu1WOYs/view?usp=drive_link","https://drive.google.com/file/d/1Ax9qHu757aO_12ApL6TJOVKuhcpSS3_c/view?usp=drive_link","https://drive.google.com/file/d/1tpEsF6-H2S19846oZl3c2LEunWY6RIvn/view?usp=drive_link"],category:"Mobiles",brand:"Poco"}],vw=x.createContext(),Qm="drift_enterprises_cart",Xm="drift_enterprises_orders";function Jm(t,e){if(typeof window>"u")return e;try{const n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function XA({children:t}){const[e,n]=x.useState(()=>Jm(Qm,[])),[r,i]=x.useState(()=>Jm(Xm,[]));x.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Qm,JSON.stringify(e))},[e]),x.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Xm,JSON.stringify(r))},[r]);const s=m=>{n(_=>_.find(w=>w.id===m.id)?_.map(w=>w.id===m.id?{...w,quantity:w.quantity+1}:w):[..._,{id:m.id,title:m.title,price:m.price,image:m.image,quantity:1}])},o=m=>n(_=>_.filter(v=>v.id!==m)),a=(m,_)=>{if(_<=0){o(m);return}n(v=>v.map(w=>w.id===m?{...w,quantity:_}:w))},l=()=>n([]),u=()=>{if(e.length===0)return;const m=e.reduce((v,w)=>v+w.price*w.quantity,0),_={id:`ORD-${Date.now()}`,createdAt:new Date().toISOString(),total:m,items:e};i(v=>[_,...v]),n([])},{totalItems:h,subtotal:d}=x.useMemo(()=>{const m=e.reduce((v,w)=>v+w.quantity,0),_=e.reduce((v,w)=>v+w.price*w.quantity,0);return{totalItems:m,subtotal:_}},[e]),f={items:e,orders:r,addItem:s,removeItem:o,updateQuantity:a,clearCart:l,placeOrder:u,totalItems:h,subtotal:d};return c.jsx(vw.Provider,{value:f,children:t})}function mo(){const t=x.useContext(vw);if(!t)throw new Error("useCart must be used within a CartProvider");return t}function bc({children:t,requireAdmin:e=!1}){const{user:n,isAdmin:r,isAuthenticated:i}=po(),s=Hn();return i()?e&&!r()?c.jsx("div",{className:"page-shell",style:{maxWidth:"800px",textAlign:"center"},children:c.jsxs("div",{style:{padding:"4rem 2rem"},children:[c.jsx("div",{style:{fontSize:"6rem",marginBottom:"1rem"},children:"🚫"}),c.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"1rem",color:"#1a1a1a"},children:"Access Denied"}),c.jsxs("p",{style:{fontSize:"1.2rem",color:"#666",marginBottom:"2rem",lineHeight:"1.6"},children:["You don't have permission to access this page.",c.jsx("br",{}),"This area is restricted to administrators only."]}),c.jsxs("div",{style:{background:"linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",padding:"2rem",borderRadius:"20px",marginBottom:"2rem",border:"1px solid #e8e8e8"},children:[c.jsxs("p",{style:{color:"#666",marginBottom:"1rem"},children:["Logged in as: ",c.jsx("strong",{children:(n==null?void 0:n.fullName)||(n==null?void 0:n.username)})]}),c.jsxs("p",{style:{color:"#666"},children:["Role: ",c.jsx("span",{style:{background:"#e71d36",color:"white",padding:"0.25rem 0.75rem",borderRadius:"12px",fontSize:"0.85rem",fontWeight:"700"},children:n==null?void 0:n.role})]})]}),c.jsx(wp,{to:"/",replace:!0})]})}):t:c.jsx(wp,{to:"/login",state:{from:s},replace:!0})}function JA(){const{totalItems:t}=mo(),{user:e,isAuthenticated:n,logout:r,isAdmin:i}=po(),[s,o]=x.useState(null),a=Tr(),l=()=>{r(),a("/")};return c.jsxs("header",{className:"amazon-header",children:[c.jsxs("div",{className:"amazon-header-top",children:[c.jsxs(O,{to:"/",className:"amazon-logo",children:[c.jsx("img",{src:"/assets/logo.png",alt:"DRIFT ENTERPRISES Logo",style:{height:"45px"}}),"DRIFT",c.jsx("span",{children:" ENTERPRISES"})]}),c.jsxs("form",{className:"amazon-search",onSubmit:u=>u.preventDefault(),children:[c.jsxs("select",{className:"amazon-search-category",defaultValue:"all",children:[c.jsx("option",{value:"all",children:"All"}),c.jsx("option",{value:"electronics",children:"Electronics"}),c.jsx("option",{value:"mobiles",children:"Mobiles"}),c.jsx("option",{value:"appliances",children:"Appliances"}),c.jsx("option",{value:"tv",children:"TV"})]}),c.jsx("input",{className:"amazon-search-input",placeholder:"Search for products, brands and more..."}),c.jsx("button",{type:"submit",className:"amazon-search-button",children:"🔍 Search"})]}),c.jsxs("nav",{className:"amazon-header-links",children:[i()&&c.jsxs(O,{to:"/admin/products",className:"amazon-header-link",children:[c.jsx("span",{className:"small",children:"Manage"}),c.jsx("span",{className:"bold",children:"Products"})]}),n()?c.jsxs(c.Fragment,{children:[c.jsxs(O,{to:"/account",className:"amazon-header-link",children:[c.jsxs("span",{className:"small",children:["Hello, ",e==null?void 0:e.username]}),c.jsx("span",{className:"bold",children:"Account & Lists"})]}),c.jsxs("button",{onClick:l,className:"amazon-header-link",style:{background:"none",border:"none",cursor:"pointer",color:"inherit",font:"inherit",padding:"0.5rem 1rem"},children:[c.jsx("span",{className:"small",children:"Sign Out"}),c.jsx("span",{className:"bold",children:"🚪 Logout"})]})]}):c.jsxs(O,{to:"/login",className:"amazon-header-link",children:[c.jsx("span",{className:"small",children:"Hello, Sign in"}),c.jsx("span",{className:"bold",children:"Account & Lists"})]}),c.jsxs(O,{to:"/orders",className:"amazon-header-link",children:[c.jsx("span",{className:"small",children:"Returns"}),c.jsx("span",{className:"bold",children:"& Orders"})]}),c.jsxs(O,{to:"/cart",className:"amazon-header-cart",children:[c.jsx("span",{className:"cart-count",children:t}),c.jsx("span",{className:"bold",children:"🛒 Cart"})]})]})]}),c.jsx("div",{className:"amazon-header-bottom",children:c.jsxs("nav",{className:"amazon-categories",children:[c.jsxs("div",{className:"category-group",onMouseEnter:()=>o("appliances"),onMouseLeave:()=>o(null),children:[c.jsx("div",{className:"category-header",children:"Appliances"}),c.jsxs("div",{className:`category-items ${s==="appliances"?"active":""}`,children:[c.jsx(O,{to:"/products?category=appliances&sub=refrigerator",className:"category-link",children:"Refrigerator"}),c.jsx(O,{to:"/products?category=appliances&sub=air-conditioner",className:"category-link",children:"Air Conditioner"})]})]}),c.jsxs("div",{className:"category-group",onMouseEnter:()=>o("mobiles"),onMouseLeave:()=>o(null),children:[c.jsx("div",{className:"category-header",children:"Mobiles"}),c.jsxs("div",{className:`category-items ${s==="mobiles"?"active":""}`,children:[c.jsx(O,{to:"/products?category=mobiles&sub=apple",className:"category-link",children:"Apple"}),c.jsx(O,{to:"/products?category=mobiles&sub=poco",className:"category-link",children:"Poco"}),c.jsx(O,{to:"/products?category=mobiles&sub=vivo",className:"category-link",children:"Vivo"}),c.jsx(O,{to:"/products?category=mobiles&sub=oppo",className:"category-link",children:"Oppo"}),c.jsx(O,{to:"/products?category=mobiles&sub=realme",className:"category-link",children:"Realme"}),c.jsx(O,{to:"/products?category=mobiles&sub=oneplus",className:"category-link",children:"OnePlus"}),c.jsx(O,{to:"/products?category=mobiles&sub=motorola",className:"category-link",children:"Motorola"})]})]}),c.jsxs("div",{className:"category-group",onMouseEnter:()=>o("electronics"),onMouseLeave:()=>o(null),children:[c.jsx("div",{className:"category-header",children:"Electronics"}),c.jsxs("div",{className:`category-items ${s==="electronics"?"active":""}`,children:[c.jsx(O,{to:"/products?category=electronics&sub=home-theater",className:"category-link",children:"Home Theater"}),c.jsx(O,{to:"/products?category=electronics&sub=sound-bar",className:"category-link",children:"Sound Bar"})]})]}),c.jsxs("div",{className:"category-group",onMouseEnter:()=>o("tv"),onMouseLeave:()=>o(null),children:[c.jsx("div",{className:"category-header",children:"TV"}),c.jsxs("div",{className:`category-items ${s==="tv"?"active":""}`,children:[c.jsx(O,{to:"/products?category=tv&sub=toshiba",className:"category-link",children:"Toshiba"}),c.jsx(O,{to:"/products?category=tv&sub=mi",className:"category-link",children:"Mi"}),c.jsx(O,{to:"/products?category=tv&sub=realme",className:"category-link",children:"Realme"}),c.jsx(O,{to:"/products?category=tv&sub=samsung",className:"category-link",children:"Samsung"}),c.jsx(O,{to:"/products?category=tv&sub=lg",className:"category-link",children:"LG"}),c.jsx(O,{to:"/products?category=tv&sub=assembled-tv",className:"category-link",children:"Assembled TV"}),c.jsx(O,{to:"/products?category=tv&sub=tcl",className:"category-link",children:"TCL"})]})]}),c.jsxs("div",{className:"category-group",onMouseEnter:()=>o("trending"),onMouseLeave:()=>o(null),children:[c.jsx("div",{className:"category-header",children:"Trending"}),c.jsxs("div",{className:`category-items ${s==="trending"?"active":""}`,children:[c.jsx(O,{to:"/products?category=trending&sub=best-sellers",className:"category-link",children:"Best Sellers"}),c.jsx(O,{to:"/products?category=trending&sub=new-arrivals",className:"category-link",children:"New Arrivals"})]})]})]})})]})}const Bo=["/assets/home/Banner1.jpg","/assets/home/Banner2.jpg","/assets/home/Banner3.jpg"];function ZA(){const[t,e]=x.useState(Qs),[n,r]=x.useState(0);return x.useEffect(()=>{fetch("http://localhost:4000/api/products").then(i=>i.json()).then(e).catch(()=>e(Qs))},[]),x.useEffect(()=>{const i=setInterval(()=>{r(s=>(s+1)%Bo.length)},3e3);return()=>clearInterval(i)},[]),c.jsxs("div",{className:"amazon-grid-section",children:[c.jsx("div",{className:"amazon-hero",children:c.jsx("div",{className:"amazon-hero-banner",children:c.jsxs("div",{className:"amazon-hero-text",children:[c.jsx("h1",{children:"Discover Premium Electronics at DRIFT ENTERPRISES"}),c.jsx("p",{children:"Fast delivery, curated products, and unbeatable deals on the latest tech."}),c.jsx(O,{to:"/products",className:"amazon-hero-button",children:"🛍️ Shop Now"})]})})}),c.jsxs("div",{className:"full-screen-slideshow",children:[c.jsx("img",{src:Bo[n],alt:"Featured Banner"}),c.jsx("img",{src:Bo[(n+1)%Bo.length],alt:"Promotional Banner"})]}),c.jsxs("section",{style:{marginTop:"3rem",marginBottom:"3rem"},children:[c.jsx("h2",{style:{marginBottom:"1.5rem",fontSize:"2rem",fontWeight:"900",color:"#1a1a1a",letterSpacing:"-0.5px"},children:"✨ Featured Products"}),c.jsx("div",{className:"amazon-product-grid",children:t.slice(0,6).map(i=>c.jsxs("div",{className:"amazon-product-card",children:[c.jsx("div",{className:"amazon-product-image-wrapper",children:c.jsx("img",{src:i.image,alt:i.title})}),c.jsxs("div",{className:"amazon-product-info",children:[c.jsx("div",{className:"amazon-product-category",children:i.category}),c.jsx("div",{className:"amazon-product-title",children:c.jsx(O,{to:`/products/${i.id}`,children:i.title})}),c.jsxs("div",{className:"amazon-product-rating",children:["★".repeat(Math.round(i.rating))," ",c.jsx("span",{className:"rating-number",children:i.rating.toFixed(1)})]}),c.jsxs("div",{className:"amazon-product-price",children:[c.jsx("span",{className:"currency",children:"₹"}),i.price.toFixed(2)]}),c.jsx(O,{className:"primary-button",to:`/products/${i.id}`,children:"View Details"})]})]},i.id))})]}),c.jsxs("section",{style:{marginTop:"3rem",marginBottom:"3rem"},children:[c.jsx("h2",{style:{marginBottom:"1rem",fontSize:"2rem",fontWeight:"900",color:"#1a1a1a",letterSpacing:"-0.5px"},children:"📱 Trending Mobiles"}),c.jsx("h3",{style:{marginBottom:"1.5rem",fontSize:"1.2rem",fontWeight:"600",color:"#666"},children:"Poco Series"}),c.jsx("div",{className:"amazon-product-grid",children:t.filter(i=>i.category==="Mobiles"&&i.brand==="Poco").map(i=>c.jsxs("div",{className:"amazon-product-card",children:[c.jsx("div",{className:"amazon-product-image-wrapper",children:c.jsx("img",{src:i.image,alt:i.title})}),c.jsxs("div",{className:"amazon-product-info",children:[c.jsx("div",{className:"amazon-product-category",children:i.category}),c.jsx("div",{className:"amazon-product-title",children:c.jsx(O,{to:`/products/${i.id}`,children:i.title})}),c.jsxs("div",{className:"amazon-product-rating",children:["★".repeat(Math.round(i.rating))," ",c.jsx("span",{className:"rating-number",children:i.rating.toFixed(1)})]}),c.jsxs("div",{className:"amazon-product-price",children:[c.jsx("span",{className:"currency",children:"₹"}),i.price.toFixed(2)]}),c.jsx(O,{className:"primary-button",to:`/products/${i.id}`,children:"View Details"})]})]},i.id))})]})]})}const ys={async createProduct(t,e){try{const n=await this.uploadProductImages(e),r={...t,images:n,createdAt:Date.now(),updatedAt:Date.now()},i=wt(Et,"products"),s=ZN(i);return await vi(s,r),{id:s.key,...r}}catch(n){throw console.error("Error creating product:",n),n}},async getAllProducts(){try{const t=wt(Et,"products"),e=await ms(t);if(e.exists()){const n=[],r=e.val();return Object.keys(r).forEach(i=>{n.push({id:i,...r[i]})}),n.sort((i,s)=>(s.createdAt||0)-(i.createdAt||0)),n}return[]}catch(t){throw console.error("Error fetching products:",t),t}},async getProductById(t){try{const e=wt(Et,`products/${t}`),n=await ms(e);if(n.exists())return{id:t,...n.val()};throw new Error("Product not found")}catch(e){throw console.error("Error fetching product:",e),e}},async getProductsByCategory(t){try{return(await this.getAllProducts()).filter(n=>n.category===t)}catch(e){throw console.error("Error fetching products by category:",e),e}},async getProductsBySubcategory(t,e){try{return(await this.getAllProducts()).filter(r=>r.category===t&&r.subcategory===e)}catch(n){throw console.error("Error fetching products by subcategory:",n),n}},async updateProduct(t,e){try{const n=wt(Et,`products/${t}`);return await eP(n,{...e,updatedAt:Date.now()}),{id:t,...e}}catch(n){throw console.error("Error updating product:",n),n}},async deleteProduct(t){try{const e=wt(Et,`products/${t}`),n=await ms(e);if(n.exists()){const r=n.val();r.images&&Array.isArray(r.images)&&await this.deleteProductImages(r.images)}return await D0(e),{success:!0}}catch(e){throw console.error("Error deleting product:",e),e}},async uploadProductImages(t){try{const e=t.map(async n=>{const i=`products/${Date.now()}_${n.name}`,s=Km(Ym,i);return await WA(s,n),await $A(s)});return await Promise.all(e)}catch(e){throw console.error("Error uploading images:",e),e}},async deleteProductImages(t){try{const e=t.map(async n=>{try{const r=Km(Ym,n);await VA(r)}catch(r){console.warn("Could not delete image:",n,r)}});await Promise.all(e)}catch(e){console.error("Error deleting images:",e)}}},Gi={async getAllCategories(){try{const t=wt(Et,"categories"),e=await ms(t);return e.exists()?e.val():{appliances:["refrigerator","air-conditioner"],mobiles:["apple","vivo","oppo","realme","oneplus","motorola"],electronics:["home-theater","sound-bar"],tv:["toshiba","mi","realme","samsung","lg","assembled-tv","tcl"],trending:["best-sellers","new-arrivals"]}}catch(t){return console.error("Error fetching categories:",t),{appliances:["refrigerator","air-conditioner"],mobiles:["apple","vivo","oppo","realme","oneplus","motorola"],electronics:["home-theater","sound-bar"],tv:["toshiba","mi","realme","samsung","lg","assembled-tv","tcl"],trending:["best-sellers","new-arrivals"]}}},async saveCategory(t,e){try{const n=t.toLowerCase().replace(/\s+/g,"-"),r=wt(Et,`categories/${n}`);return await vi(r,e),{success:!0}}catch(n){throw console.error("Error saving category:",n),n}},async deleteCategory(t){try{const e=t.toLowerCase().replace(/\s+/g,"-"),n=wt(Et,`categories/${e}`);return await D0(n),{success:!0}}catch(e){throw console.error("Error deleting category:",e),e}}};function eO(){const[t,e]=x.useState([]),[n,r]=x.useState(!0),[i]=ZS();x.useEffect(()=>{(async()=>{try{const f=(await ys.getAllProducts()).map(m=>{var _;return{...m,image:((_=m.images)==null?void 0:_[0])||"https://via.placeholder.com/300"}});e(f.length>0?f:Qs)}catch(d){console.error("Error loading products:",d),e(Qs)}finally{r(!1)}})()},[]);const s=i.get("category"),o=i.get("sub");let a=t;s&&(a=a.filter(h=>h.category.toLowerCase()===s.toLowerCase())),o&&(a=a.filter(h=>h.subcategory&&h.subcategory.toLowerCase()===o.toLowerCase()||h.brand&&h.brand.toLowerCase()===o.toLowerCase()));const l=h=>h.charAt(0).toUpperCase()+h.slice(1).replace(/-/g," "),u=s?o?`${l(o)} - ${l(s)}`:l(s):"All Products";return n?c.jsx("div",{className:"amazon-grid-section",children:c.jsx("div",{style:{textAlign:"center",padding:"4rem 2rem"},children:c.jsx("p",{style:{fontSize:"2rem",color:"#e71d36",fontWeight:"700"},children:"⏳ Loading products..."})})}):c.jsxs("div",{className:"amazon-grid-section",children:[c.jsx("h1",{style:{padding:"0 0.5rem",fontSize:"2.5rem",fontWeight:"900",color:"#1a1a1a",letterSpacing:"-1px",marginBottom:"2rem"},children:u}),a.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"No products found"}),c.jsx("p",{style:{fontSize:"1rem",color:"#666",marginBottom:"2rem"},children:"Try browsing other categories"}),c.jsx(O,{to:"/products",className:"primary-button",style:{display:"inline-block",padding:"1rem 2rem"},children:"View All Products"})]}):c.jsx("div",{className:"amazon-product-grid",children:a.map(h=>{var d,f;return c.jsxs("div",{className:"amazon-product-card",children:[c.jsx("div",{className:"amazon-product-image-wrapper",children:c.jsx("img",{src:h.image,alt:h.title})}),c.jsxs("div",{className:"amazon-product-info",children:[c.jsx("div",{className:"amazon-product-category",children:h.category}),c.jsx("div",{className:"amazon-product-title",children:c.jsx(O,{to:`/products/${h.id}`,children:h.title})}),c.jsxs("div",{className:"amazon-product-rating",children:["★".repeat(Math.round(h.rating))," ",c.jsx("span",{className:"rating-number",children:(f=(d=h.rating)==null?void 0:d.toFixed)==null?void 0:f.call(d,1)})]}),c.jsxs("div",{className:"amazon-product-price",children:[c.jsx("span",{className:"currency",children:"₹"}),Number(h.price).toFixed(2)]}),c.jsx(O,{className:"primary-button",to:`/products/${h.id}`,children:"View Details"})]})]},h.id)})})]})}function tO(){const{id:t}=IS(),e=Tr(),[n,r]=x.useState(null),[i,s]=x.useState(!0),[o,a]=x.useState(0),{addItem:l}=mo();if(x.useEffect(()=>{(async()=>{var w;try{const g=await ys.getProductById(t),p={...g,image:((w=g.images)==null?void 0:w[0])||"https://via.placeholder.com/400"};r(p)}catch(g){console.error("Error loading product:",g);const p=Qs.find(y=>y.id===t);r(p||null)}finally{s(!1)}})()},[t]),i)return c.jsx("div",{className:"page-shell",style:{maxWidth:"1200px",textAlign:"center",padding:"4rem 2rem"},children:c.jsx("p",{style:{fontSize:"2rem",color:"#e71d36",fontWeight:"700"},children:"⏳ Loading product..."})});if(!n)return c.jsxs("div",{className:"page-shell",style:{maxWidth:"1200px",textAlign:"center"},children:[c.jsx("h1",{children:"Product not found"}),c.jsx("p",{children:"The product you're looking for doesn't exist."}),c.jsx(O,{to:"/products",style:{color:"#e50914",fontWeight:"bold"},children:"Back to products"})]});const u=()=>{l(n),alert("✓ Added to cart successfully!")},h=()=>{l(n),e("/checkout")},d=n.images||[n.image],f=d[o],m=()=>{a(v=>(v+1)%d.length)},_=()=>{a(v=>(v-1+d.length)%d.length)};return c.jsxs("div",{className:"page-shell product-detail",style:{maxWidth:"1200px"},children:[c.jsxs("div",{className:"product-detail-layout",children:[c.jsxs("div",{className:"product-detail-image",children:[d.length>1&&c.jsxs("div",{style:{position:"relative"},children:[c.jsx("button",{onClick:_,style:{position:"absolute",left:"10px",top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.5)",color:"white",border:"none",padding:"10px",cursor:"pointer"},children:"<"}),c.jsx("img",{src:f,alt:n.title,style:{width:"100%",height:"auto"}}),c.jsx("button",{onClick:m,style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.5)",color:"white",border:"none",padding:"10px",cursor:"pointer"},children:">"}),c.jsx("div",{style:{position:"absolute",bottom:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px"},children:d.map((v,w)=>c.jsx("span",{onClick:()=>a(w),style:{width:"10px",height:"10px",borderRadius:"50%",background:w===o?"white":"rgba(255,255,255,0.5)",cursor:"pointer"}},w))})]}),d.length===1&&c.jsx("img",{src:f,alt:n.title})]}),c.jsxs("div",{className:"product-detail-main",children:[c.jsx("h1",{children:n.title}),c.jsxs("p",{className:"amazon-product-rating",children:["★".repeat(Math.round(n.rating))," ",c.jsx("span",{className:"rating-number",children:n.rating.toFixed(1)})]}),c.jsxs("p",{className:"product-detail-price",children:[n.mrp&&c.jsxs("span",{style:{textDecoration:"line-through",color:"#888",marginRight:"10px"},children:["MRP ₹",n.mrp.toFixed(2)]}),c.jsx("span",{className:"currency",children:"₹"}),n.price.toFixed(2)]}),c.jsx("p",{className:"product-detail-description",children:n.description})]}),c.jsxs("aside",{className:"product-detail-buybox",children:[c.jsxs("p",{className:"product-detail-price",children:[n.mrp&&c.jsxs("span",{style:{textDecoration:"line-through",color:"#888",marginRight:"10px"},children:["MRP ₹",n.mrp.toFixed(2)]}),c.jsx("span",{className:"currency",children:"₹"}),n.price.toFixed(2)]}),c.jsx("p",{className:"text-muted",children:"FREE delivery with DRIFT ENTERPRISES Prime. This is a demo experience."}),c.jsx("button",{className:"primary-button wide",onClick:u,style:{width:"100%"},children:"🛒 Add to Cart"}),c.jsx("button",{className:"primary-button wide",onClick:h,style:{marginTop:".75rem",width:"100%",background:"linear-gradient(135deg, #1a1a1a 0%, #000000 100%)"},children:"⚡ Buy Now"})]})]}),c.jsx("p",{style:{marginTop:".75rem",fontSize:".85rem"},children:c.jsx(O,{to:"/products",className:"amazon-link",children:"Back to all products"})})]})}function nO(){const{items:t,updateQuantity:e,removeItem:n,subtotal:r}=mo();return c.jsxs("div",{className:"page-shell",style:{maxWidth:"1200px"},children:[c.jsx("h1",{children:"🛒 Your Shopping Cart"}),t.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{style:{fontSize:"1.5rem",marginBottom:"1.5rem"},children:"Your cart is empty"}),c.jsx("p",{style:{fontSize:"1rem",color:"#666",marginBottom:"2rem"},children:"Looks like you haven't added anything yet."}),c.jsx(O,{to:"/products",className:"primary-button",style:{display:"inline-block",padding:"1rem 3rem"},children:"🛍️ Start Shopping"})]}):c.jsxs("div",{className:"cart-layout",children:[c.jsx("div",{className:"cart-items",children:t.map(i=>c.jsxs("div",{className:"cart-item",children:[c.jsx("div",{className:"cart-item-image",children:c.jsx("img",{src:i.image,alt:i.title,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}})}),c.jsxs("div",{className:"cart-item-body",style:{flex:1},children:[c.jsx("h2",{children:i.title}),c.jsxs("div",{className:"cart-item-price",children:[c.jsx("span",{className:"currency",children:"₹"}),i.price.toFixed(2)]}),c.jsxs("div",{className:"cart-item-each",children:["₹",(i.price*i.quantity).toFixed(2)," total"]}),c.jsxs("div",{className:"cart-item-actions",children:[c.jsxs("label",{children:["Qty:",c.jsx("input",{type:"number",value:i.quantity,min:1,onChange:s=>e(i.id,Number(s.target.value)),style:{width:60,padding:"0.25rem",marginLeft:"0.25rem"}})]}),c.jsx("button",{onClick:()=>n(i.id),children:"🗑️ Remove"})]})]})]},i.id))}),c.jsxs("div",{className:"cart-summary",children:[c.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:"800",marginBottom:"1.5rem",color:"#1a1a1a"},children:"Order Summary"}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsxs("div",{style:{marginBottom:"0.75rem",display:"flex",justifyContent:"space-between",fontSize:"1rem"},children:[c.jsx("span",{children:"Subtotal:"})," ",c.jsxs("strong",{style:{color:"#1a1a1a"},children:["₹",r.toFixed(2)]})]}),c.jsxs("div",{style:{marginBottom:"0.75rem",display:"flex",justifyContent:"space-between",fontSize:"1rem"},children:[c.jsx("span",{children:"Shipping:"})," ",c.jsx("strong",{style:{color:"#4caf50"},children:"FREE"})]}),c.jsx("div",{style:{marginBottom:"1.5rem",fontSize:"0.85rem",color:"#666",fontStyle:"italic"},children:"Tax calculated at checkout"})]}),c.jsxs("div",{style:{paddingTop:"1.5rem",borderTop:"2px solid #e8e8e8"},children:[c.jsxs("div",{style:{fontSize:"1.5rem",fontWeight:"800",marginBottom:"1.5rem",color:"#e71d36",display:"flex",justifyContent:"space-between"},children:[c.jsx("span",{children:"Total:"})," ",c.jsxs("span",{children:["₹",r.toFixed(2)]})]}),c.jsx(O,{to:"/checkout",className:"primary-button wide",style:{display:"block",textAlign:"center",padding:"1rem",fontSize:"1rem"},children:"🚀 Proceed to Checkout"})]})]})]})]})}function rO(){const t=Tr(),{items:e,placeOrder:n,subtotal:r}=mo(),i=s=>{if(s.preventDefault(),e.length===0){alert("⚠️ Your cart is empty!");return}n(),alert(`✅ Order placed successfully!

Thank you for shopping with Drift Enterprises!
Your order will be delivered soon. (Demo Mode)`),t("/")};return c.jsxs("div",{className:"page-shell",style:{maxWidth:"1200px"},children:[c.jsx("h1",{className:"checkout-page",children:"💳 Secure Checkout"}),e.length===0?c.jsx("div",{className:"empty-state",children:c.jsx("p",{style:{fontSize:"1.2rem"},children:"Your cart is empty. Add items to proceed with checkout."})}):c.jsxs("div",{className:"checkout-layout",children:[c.jsxs("form",{className:"checkout-form",children:[c.jsxs("section",{children:[c.jsx("h2",{children:"📦 Shipping Address"}),c.jsxs("div",{className:"form-grid",children:[c.jsxs("label",{children:["First Name ",c.jsx("input",{type:"text",placeholder:"Enter first name",required:!0})]}),c.jsxs("label",{children:["Last Name ",c.jsx("input",{type:"text",placeholder:"Enter last name",required:!0})]}),c.jsxs("label",{style:{gridColumn:"1 / -1"},children:["Address ",c.jsx("input",{type:"text",placeholder:"Street address, P.O. box",required:!0})]}),c.jsxs("label",{children:["City ",c.jsx("input",{type:"text",placeholder:"City",required:!0})]}),c.jsxs("label",{children:["State ",c.jsx("input",{type:"text",placeholder:"State/Province",required:!0})]}),c.jsxs("label",{children:["ZIP Code ",c.jsx("input",{type:"text",placeholder:"Postal code",required:!0})]})]})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"💳 Payment Method"}),c.jsxs("div",{className:"form-grid",children:[c.jsxs("label",{style:{gridColumn:"1 / -1"},children:["Card Number ",c.jsx("input",{type:"text",placeholder:"1234 5678 9012 3456",required:!0})]}),c.jsxs("label",{children:["Expiry Date ",c.jsx("input",{type:"text",placeholder:"MM/YY",required:!0})]}),c.jsxs("label",{children:["CVV ",c.jsx("input",{type:"text",placeholder:"123",required:!0})]})]})]})]}),c.jsxs("div",{className:"checkout-summary",children:[c.jsx("h2",{children:"📋 Order Summary"}),c.jsx("ul",{children:e.map(s=>c.jsxs("li",{children:[c.jsxs("span",{children:[s.title," × ",s.quantity]}),c.jsxs("strong",{children:["₹",(s.price*s.quantity).toFixed(2)]})]},s.id))}),c.jsxs("div",{className:"checkout-totals",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Subtotal"})," ",c.jsxs("span",{children:["₹",r.toFixed(2)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Shipping"})," ",c.jsx("span",{style:{color:"#4caf50",fontWeight:"700"},children:"FREE"})]}),c.jsxs("div",{className:"checkout-total-row",children:[c.jsx("span",{children:"Order Total"}),c.jsxs("span",{children:["₹",r.toFixed(2)]})]})]}),c.jsx("button",{type:"button",onClick:i,className:"primary-button",style:{width:"100%",marginTop:"1.5rem",padding:"1rem",fontSize:"1.05rem"},children:"🚀 Place Order"}),c.jsx("p",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"center",lineHeight:"1.6"},children:"By placing your order, you agree to our terms and conditions. Your payment information is secure and encrypted."})]})]})]})}function iO(){const{user:t}=po(),[e,n]=x.useState("products"),[r,i]=x.useState("appliances"),[s,o]=x.useState("refrigerator"),[a,l]=x.useState({title:"",price:"",rating:"",description:"",brand:"",specifications:""}),[u,h]=x.useState([]),[d,f]=x.useState([]),[m,_]=x.useState({category:"appliances",name:""}),[v,w]=x.useState({name:"",description:""}),[g,p]=x.useState({}),[y,E]=x.useState([]),[T,b]=x.useState(!1),[P,A]=x.useState({type:"",message:""});x.useEffect(()=>{ne(),F()},[]);const ne=async()=>{try{const S=await Gi.getAllCategories();p(S);const k=Object.keys(S)[0];k&&(i(k),o(S[k][0]||""),_({category:k,name:""}))}catch(S){console.error("Error loading categories:",S)}},F=async()=>{try{const S=await ys.getAllProducts();E(S)}catch(S){console.error("Error loading products:",S)}},_e=S=>{const{name:k,value:D}=S.target;l(Ke=>({...Ke,[k]:D}))},Qn=S=>{var D;const k=S.target.value;i(k),o(((D=g[k])==null?void 0:D[0])||"")},Xn=S=>{const k=Array.from(S.target.files);h(k);const D=[];k.forEach(Ke=>{const pt=new FileReader;pt.onloadend=()=>{D.push(pt.result),D.length===k.length&&f(D)},pt.readAsDataURL(Ke)})},go=async S=>{if(S.preventDefault(),A({type:"",message:""}),!a.title||!a.price||u.length===0){A({type:"error",message:"Please fill all required fields and upload at least one image"});return}b(!0);try{const k={category:r,subcategory:s,title:a.title,price:parseFloat(a.price),rating:parseFloat(a.rating)||0,description:a.description,brand:a.brand||s,specifications:a.specifications,addedBy:t.uid,addedByName:t.fullName};await ys.createProduct(k,u),A({type:"success",message:"✓ Product added successfully!"}),l({title:"",price:"",rating:"",description:"",brand:"",specifications:""}),h([]),f([]),F(),setTimeout(()=>A({type:"",message:""}),3e3)}catch(k){console.error("Error adding product:",k),A({type:"error",message:"Failed to add product. Please try again."})}finally{b(!1)}},Ml=async S=>{if(S.preventDefault(),!m.name.trim()){alert("Please enter a subsection name");return}const k=m.name.toLowerCase().replace(/\s+/g,"-"),D={...g};if(D[m.category]||(D[m.category]=[]),D[m.category].includes(k)){alert("This subsection already exists");return}D[m.category].push(k);try{await Gi.saveCategory(m.category,D[m.category]),p(D),alert(`Subsection "${k}" added to ${m.category}!`),_({category:m.category,name:""})}catch{alert("Failed to add subsection. Please try again.")}},bi=async(S,k)=>{if(window.confirm(`Remove "${k}" from ${S}?`)){const D={...g};D[S]=D[S].filter(Ke=>Ke!==k);try{await Gi.saveCategory(S,D[S]),p(D),alert(`Subsection "${k}" removed!`)}catch{alert("Failed to remove subsection. Please try again.")}}},Ai=async S=>{if(S.preventDefault(),!v.name.trim()){alert("Please enter a category name");return}const k=v.name.toLowerCase().replace(/\s+/g,"-"),D={...g};if(D[k]){alert("This category already exists");return}D[k]=[];try{await Gi.saveCategory(k,[]),p(D),alert(`Category "${k}" added successfully!`),w({name:"",description:""})}catch{alert("Failed to add category. Please try again.")}},R=async S=>{if(window.confirm(`Remove category "${S}" and all its subsections?`))try{await Gi.deleteCategory(S);const k={...g};delete k[S],p(k),alert(`Category "${S}" removed!`)}catch{alert("Failed to remove category. Please try again.")}},M=async S=>{if(window.confirm("Are you sure you want to delete this product?"))try{await ys.deleteProduct(S),F(),alert("Product deleted successfully!")}catch{alert("Failed to delete product. Please try again.")}};return c.jsxs("div",{className:"page-shell",children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",padding:"2rem",borderRadius:"12px",marginBottom:"2rem",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:[c.jsx("h1",{style:{margin:0,color:"#fff",fontSize:"2.5rem",fontWeight:"800"},children:"⚡ Admin Dashboard"}),c.jsxs("p",{style:{margin:"0.5rem 0 0 0",color:"#e71d36",fontSize:"1.1rem",fontWeight:"600"},children:["Welcome back, ",t==null?void 0:t.fullName]}),c.jsx("p",{style:{margin:"0.3rem 0 0 0",color:"#aaa",fontSize:"0.95rem"},children:"Manage products, categories, and inventory"})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"2rem",borderBottom:"3px solid #1a1a1a",flexWrap:"wrap"},children:[c.jsx("button",{onClick:()=>n("products"),style:{padding:"1rem 2rem",backgroundColor:e==="products"?"#e71d36":"transparent",color:e==="products"?"#fff":"#1a1a1a",border:"none",cursor:"pointer",fontWeight:"700",fontSize:"1rem",borderRadius:"8px 8px 0 0",transition:"all 0.3s ease",transform:e==="products"?"translateY(3px)":"none"},children:"📦 Add Products"}),c.jsx("button",{onClick:()=>n("list"),style:{padding:"1rem 2rem",backgroundColor:e==="list"?"#e71d36":"transparent",color:e==="list"?"#fff":"#1a1a1a",border:"none",cursor:"pointer",fontWeight:"700",fontSize:"1rem",borderRadius:"8px 8px 0 0",transition:"all 0.3s ease",transform:e==="list"?"translateY(3px)":"none"},children:"📋 Product List"}),c.jsx("button",{onClick:()=>n("subsections"),style:{padding:"1rem 2rem",backgroundColor:e==="subsections"?"#e71d36":"transparent",color:e==="subsections"?"#fff":"#1a1a1a",border:"none",cursor:"pointer",fontWeight:"700",fontSize:"1rem",borderRadius:"8px 8px 0 0",transition:"all 0.3s ease",transform:e==="subsections"?"translateY(3px)":"none"},children:"🏷️ Manage Subsections"}),c.jsx("button",{onClick:()=>n("categories"),style:{padding:"1rem 2rem",backgroundColor:e==="categories"?"#e71d36":"transparent",color:e==="categories"?"#fff":"#1a1a1a",border:"none",cursor:"pointer",fontWeight:"700",fontSize:"1rem",borderRadius:"8px 8px 0 0",transition:"all 0.3s ease",transform:e==="categories"?"translateY(3px)":"none"},children:"📁 Manage Categories"})]}),e==="products"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[c.jsx("div",{children:c.jsxs("form",{onSubmit:go,style:{backgroundColor:"#fff",padding:"2rem",borderRadius:"12px",border:"2px solid #1a1a1a",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[c.jsx("h2",{style:{marginTop:0,color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800"},children:"➕ Add New Product"}),P.message&&c.jsx("div",{style:{padding:"1rem",borderRadius:"8px",marginBottom:"1rem",backgroundColor:P.type==="success"?"#d4edda":"#f8d7da",color:P.type==="success"?"#155724":"#721c24",border:`1px solid ${P.type==="success"?"#c3e6cb":"#f5c6cb"}`,fontWeight:"600"},children:P.message}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Category *"}),c.jsx("select",{value:r,onChange:Qn,style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",backgroundColor:"#fff"},children:Object.keys(g).map(S=>c.jsx("option",{value:S,children:S.charAt(0).toUpperCase()+S.slice(1)},S))})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Subcategory *"}),c.jsx("select",{value:s,onChange:S=>o(S.target.value),style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",backgroundColor:"#fff"},children:(g[r]||[]).map(S=>c.jsx("option",{value:S,children:S.charAt(0).toUpperCase()+S.slice(1).replace(/-/g," ")},S))})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Product Title *"}),c.jsx("input",{type:"text",name:"title",value:a.title,onChange:_e,placeholder:"Enter product name",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"}})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1.2rem"},children:[c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Price (₹) *"}),c.jsx("input",{type:"number",name:"price",value:a.price,onChange:_e,placeholder:"0.00",step:"0.01",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"}})]}),c.jsxs("div",{children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Rating (0-5)"}),c.jsx("input",{type:"number",name:"rating",value:a.rating,onChange:_e,placeholder:"0.0",min:"0",max:"5",step:"0.1",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"}})]})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Brand"}),c.jsx("input",{type:"text",name:"brand",value:a.brand,onChange:_e,placeholder:"Brand name (optional)",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"}})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Description"}),c.jsx("textarea",{name:"description",value:a.description,onChange:_e,placeholder:"Enter product description",rows:"4",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontFamily:"inherit",fontWeight:"600"}})]}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Specifications"}),c.jsx("textarea",{name:"specifications",value:a.specifications,onChange:_e,placeholder:"Enter key specifications (one per line)",rows:"3",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontFamily:"inherit",fontWeight:"600"}})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Product Images *"}),c.jsx("input",{type:"file",accept:"image/*",multiple:!0,onChange:Xn,style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"0.95rem",fontWeight:"600"}}),c.jsx("p",{style:{fontSize:"0.85rem",color:"#666",marginTop:"0.5rem",fontWeight:"600"},children:"📸 Recommended: 400x400px, JPG or PNG. You can select multiple images."})]}),c.jsx("button",{type:"submit",disabled:T,style:{width:"100%",padding:"1rem",backgroundColor:T?"#999":"#e71d36",color:"#fff",border:"none",borderRadius:"8px",fontWeight:"800",cursor:T?"not-allowed":"pointer",fontSize:"1.1rem",boxShadow:"0 4px 6px rgba(0,0,0,0.1)",transition:"all 0.3s ease"},children:T?"⏳ Adding Product...":"➕ Add Product"})]})}),c.jsxs("div",{children:[c.jsx("h2",{style:{color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800"},children:"👁️ Product Preview"}),c.jsxs("div",{style:{backgroundColor:"#fff",padding:"2rem",borderRadius:"12px",border:"2px solid #1a1a1a",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[c.jsx("div",{style:{backgroundColor:"#f9f9f9",border:"2px solid #e0e0e0",borderRadius:"8px",overflow:"hidden",textAlign:"center",marginBottom:"1rem"},children:d.length>0?c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"0.5rem",padding:"1rem"},children:d.map((S,k)=>c.jsx("img",{src:S,alt:`Product preview ${k+1}`,style:{width:"100%",height:"150px",objectFit:"contain",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#fff"}},k))}):c.jsx("div",{style:{height:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"#999",fontSize:"1.2rem",fontWeight:"700"},children:"📷 No images selected"})}),c.jsxs("div",{children:[c.jsx("h3",{style:{margin:"0.5rem 0",color:"#1a1a1a",fontSize:"1.5rem",fontWeight:"800"},children:a.title||"Product Name"}),c.jsxs("p",{style:{margin:"0.5rem 0",color:"#e71d36",fontSize:"1.8rem",fontWeight:"900"},children:["₹",a.price||"0.00"]}),c.jsxs("p",{style:{margin:"0.5rem 0",color:"#e71d36",fontSize:"1.1rem",fontWeight:"700"},children:["★".repeat(Math.floor(a.rating||0)),"☆".repeat(5-Math.floor(a.rating||0)),a.rating?` (${a.rating})`:" (0)"]}),a.brand&&c.jsxs("p",{style:{margin:"0.5rem 0",color:"#666",fontSize:"1rem",fontWeight:"700"},children:["Brand: ",a.brand]}),c.jsx("p",{style:{margin:"1rem 0",color:"#555",fontSize:"0.95rem",lineHeight:"1.6",fontWeight:"600"},children:a.description||"Product description will appear here"}),a.specifications&&c.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",backgroundColor:"#f0f0f0",borderRadius:"8px"},children:[c.jsx("p",{style:{fontWeight:"700",marginBottom:"0.5rem",color:"#1a1a1a"},children:"Specifications:"}),c.jsx("p",{style:{fontSize:"0.9rem",color:"#555",whiteSpace:"pre-line",fontWeight:"600"},children:a.specifications})]})]}),c.jsxs("div",{style:{marginTop:"1.5rem",padding:"1rem",backgroundColor:"#1a1a1a",borderRadius:"8px",fontSize:"0.9rem",color:"#fff"},children:[c.jsxs("p",{style:{marginBottom:"0.5rem",fontWeight:"700"},children:[c.jsx("strong",{children:"📁 Category:"})," ",r]}),c.jsxs("p",{style:{margin:0,fontWeight:"700"},children:[c.jsx("strong",{children:"🏷️ Subcategory:"})," ",s]})]})]})]})]}),e==="list"&&c.jsxs("div",{children:[c.jsxs("h2",{style:{color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800",marginBottom:"1.5rem"},children:["📋 All Products (",y.length,")"]}),c.jsx("div",{style:{display:"grid",gap:"1rem"},children:y.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"4rem 2rem",backgroundColor:"#f9f9f9",borderRadius:"12px",border:"2px dashed #ccc"},children:[c.jsx("p",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📦"}),c.jsx("p",{style:{fontSize:"1.3rem",fontWeight:"700",color:"#666"},children:"No products added yet"}),c.jsx("p",{style:{color:"#999",marginTop:"0.5rem"},children:"Add your first product to get started"})]}):y.map(S=>{var k;return c.jsxs("div",{style:{backgroundColor:"#fff",padding:"1.5rem",borderRadius:"12px",border:"2px solid #1a1a1a",display:"grid",gridTemplateColumns:"120px 1fr auto",gap:"1.5rem",alignItems:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[c.jsx("img",{src:((k=S.images)==null?void 0:k[0])||"https://via.placeholder.com/120",alt:S.title,style:{width:"120px",height:"120px",objectFit:"contain",border:"2px solid #e0e0e0",borderRadius:"8px",backgroundColor:"#f9f9f9"}}),c.jsxs("div",{children:[c.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#1a1a1a",fontSize:"1.3rem",fontWeight:"800"},children:S.title}),c.jsxs("p",{style:{margin:"0.3rem 0",color:"#e71d36",fontSize:"1.3rem",fontWeight:"900"},children:["₹",S.price]}),c.jsxs("p",{style:{margin:"0.3rem 0",fontSize:"0.9rem",color:"#666",fontWeight:"700"},children:["📁 ",S.category," / 🏷️ ",S.subcategory]}),c.jsxs("p",{style:{margin:"0.3rem 0",fontSize:"0.85rem",color:"#999",fontWeight:"600"},children:["Added by: ",S.addedByName]})]}),c.jsx("button",{onClick:()=>M(S.id),style:{padding:"0.75rem 1.5rem",backgroundColor:"#e71d36",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontWeight:"700",fontSize:"1rem",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:"🗑️ Delete"})]},S.id)})})]}),e==="subsections"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[c.jsx("div",{children:c.jsxs("form",{onSubmit:Ml,style:{backgroundColor:"#fff",padding:"2rem",borderRadius:"12px",border:"2px solid #1a1a1a",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[c.jsx("h2",{style:{marginTop:0,color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800"},children:"➕ Add New Subsection"}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Select Category *"}),c.jsx("select",{value:m.category,onChange:S=>_({...m,category:S.target.value}),style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"},children:Object.keys(g).map(S=>c.jsx("option",{value:S,children:S.charAt(0).toUpperCase()+S.slice(1)},S))})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Subsection Name *"}),c.jsx("input",{type:"text",value:m.name,onChange:S=>_({...m,name:S.target.value}),placeholder:"e.g., iPhone, iPad, Apple Watch",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"}}),c.jsx("p",{style:{fontSize:"0.85rem",color:"#666",marginTop:"0.5rem",fontWeight:"600"},children:"💡 Name will be converted to lowercase with hyphens"})]}),c.jsx("button",{type:"submit",style:{width:"100%",padding:"1rem",backgroundColor:"#e71d36",color:"#fff",border:"none",borderRadius:"8px",fontWeight:"800",cursor:"pointer",fontSize:"1.1rem",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:"➕ Add Subsection"})]})}),c.jsxs("div",{children:[c.jsx("h2",{style:{color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800",marginBottom:"1rem"},children:"📦 Existing Subsections"}),c.jsx("div",{style:{maxHeight:"600px",overflowY:"auto"},children:Object.entries(g).map(([S,k])=>c.jsxs("div",{style:{marginBottom:"1.5rem",backgroundColor:"#fff",padding:"1.5rem",borderRadius:"12px",border:"2px solid #1a1a1a",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[c.jsx("h3",{style:{margin:"0 0 1rem 0",color:"#e71d36",fontSize:"1.3rem",fontWeight:"800"},children:S.toUpperCase()}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:k.map(D=>c.jsxs("div",{style:{backgroundColor:"#1a1a1a",color:"#fff",padding:"0.6rem 1rem",borderRadius:"8px",display:"flex",alignItems:"center",gap:"0.75rem",fontWeight:"700"},children:[c.jsx("span",{children:D}),c.jsx("button",{onClick:()=>bi(S,D),style:{backgroundColor:"#e71d36",border:"none",color:"#fff",cursor:"pointer",padding:"0.3rem 0.6rem",borderRadius:"4px",fontSize:"0.85rem",fontWeight:"700"},children:"✕"})]},D))})]},S))})]})]}),e==="categories"&&c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[c.jsx("div",{children:c.jsxs("form",{onSubmit:Ai,style:{backgroundColor:"#fff",padding:"2rem",borderRadius:"12px",border:"2px solid #1a1a1a",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[c.jsx("h2",{style:{marginTop:0,color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800"},children:"➕ Add New Category"}),c.jsxs("div",{style:{marginBottom:"1.2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Category Name *"}),c.jsx("input",{type:"text",value:v.name,onChange:S=>w({...v,name:S.target.value}),placeholder:"e.g., Computers, Home & Kitchen",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontWeight:"600"}}),c.jsx("p",{style:{fontSize:"0.85rem",color:"#666",marginTop:"0.5rem",fontWeight:"600"},children:"💡 Name will be converted to lowercase with hyphens"})]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a"},children:"Description"}),c.jsx("textarea",{value:v.description,onChange:S=>w({...v,description:S.target.value}),placeholder:"Optional: Brief description of the category",rows:"3",style:{width:"100%",padding:"0.75rem",border:"2px solid #1a1a1a",borderRadius:"8px",fontSize:"1rem",fontFamily:"inherit",fontWeight:"600"}})]}),c.jsx("button",{type:"submit",style:{width:"100%",padding:"1rem",backgroundColor:"#e71d36",color:"#fff",border:"none",borderRadius:"8px",fontWeight:"800",cursor:"pointer",fontSize:"1.1rem",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"},children:"➕ Add Category"})]})}),c.jsxs("div",{children:[c.jsxs("h2",{style:{color:"#1a1a1a",fontSize:"1.8rem",fontWeight:"800",marginBottom:"1rem"},children:["📁 Existing Categories (",Object.keys(g).length,")"]}),c.jsx("div",{style:{display:"grid",gap:"1rem",maxHeight:"600px",overflowY:"auto"},children:Object.entries(g).map(([S,k])=>c.jsx("div",{style:{backgroundColor:"#fff",padding:"1.5rem",borderRadius:"12px",border:"2px solid #1a1a1a",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[c.jsxs("div",{style:{flex:1},children:[c.jsx("h3",{style:{margin:"0 0 0.75rem 0",color:"#1a1a1a",fontSize:"1.4rem",fontWeight:"800"},children:S.charAt(0).toUpperCase()+S.slice(1)}),c.jsxs("p",{style:{margin:"0.5rem 0",color:"#666",fontSize:"1rem",fontWeight:"700"},children:["📦 ",k.length," subsections"]}),c.jsx("div",{style:{marginTop:"0.75rem",display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:k.map(D=>c.jsx("span",{style:{backgroundColor:"#1a1a1a",color:"#fff",padding:"0.3rem 0.7rem",borderRadius:"6px",fontSize:"0.85rem",fontWeight:"700"},children:D},D))})]}),c.jsx("button",{onClick:()=>R(S),style:{backgroundColor:"#e71d36",border:"none",color:"#fff",cursor:"pointer",padding:"0.75rem 1rem",borderRadius:"8px",fontSize:"1rem",fontWeight:"800",marginLeft:"1rem",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:"🗑️ Delete"})]})},S))})]})]}),c.jsxs("div",{style:{marginTop:"3rem",background:"linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",padding:"2rem",borderRadius:"12px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"1.5rem",boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},children:[c.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#fff",borderRadius:"12px",border:"3px solid #e71d36",textAlign:"center",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[c.jsx("p",{style:{margin:"0 0 0.5rem 0",color:"#666",fontSize:"1rem",fontWeight:"700"},children:"📦 Total Products"}),c.jsx("h3",{style:{margin:0,color:"#e71d36",fontSize:"3rem",fontWeight:"900"},children:y.length})]}),c.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#fff",borderRadius:"12px",border:"3px solid #e71d36",textAlign:"center",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[c.jsx("p",{style:{margin:"0 0 0.5rem 0",color:"#666",fontSize:"1rem",fontWeight:"700"},children:"📁 Total Categories"}),c.jsx("h3",{style:{margin:0,color:"#e71d36",fontSize:"3rem",fontWeight:"900"},children:Object.keys(g).length})]}),c.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#fff",borderRadius:"12px",border:"3px solid #e71d36",textAlign:"center",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[c.jsx("p",{style:{margin:"0 0 0.5rem 0",color:"#666",fontSize:"1rem",fontWeight:"700"},children:"🏷️ Total Subsections"}),c.jsx("h3",{style:{margin:0,color:"#e71d36",fontSize:"3rem",fontWeight:"900"},children:Object.values(g).reduce((S,k)=>S+k.length,0)})]})]})]})}const sO=()=>{const[t,e]=x.useState(""),[n,r]=x.useState("admin@drift.com"),[i,s]=x.useState("Admin User"),[o,a]=x.useState("admin"),[l,u]=x.useState(""),[h,d]=x.useState(!1),{user:f}=po(),m=async v=>{v.preventDefault(),d(!0),u("");try{const w=t||(f?f.uid:"");if(!w){u("❌ Please provide a User UID or login first"),d(!1);return}const g=wt(Et,`users/${w}`);await vi(g,{email:n,fullName:i,username:o,role:"admin",createdAt:Date.now()}),u(`✅ Success! Admin user created for UID: ${w}`),console.log("✅ Admin user added to Realtime Database:",w),e("")}catch(w){console.error("Error setting up admin:",w),u(`❌ Error: ${w.message}`)}finally{d(!1)}},_=()=>{f?(e(f.uid),r(f.email),u(`Using current logged-in user: ${f.email}`)):u("❌ No user is currently logged in")};return c.jsx("div",{style:Z.container,children:c.jsxs("div",{style:Z.card,children:[c.jsx("h1",{style:Z.title,children:"🔧 Admin Setup"}),c.jsx("p",{style:Z.subtitle,children:"Add admin role to a user in Realtime Database"}),f&&c.jsxs("div",{style:Z.infoBox,children:[c.jsx("p",{children:c.jsx("strong",{children:"Currently logged in as:"})}),c.jsx("p",{children:f.email}),c.jsxs("p",{children:[c.jsx("strong",{children:"UID:"})," ",f.uid]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Role:"})," ",f.role]}),c.jsx("button",{type:"button",onClick:_,style:Z.secondaryButton,children:"Use Current User"})]}),c.jsxs("form",{onSubmit:m,style:Z.form,children:[c.jsxs("div",{style:Z.formGroup,children:[c.jsx("label",{style:Z.label,children:"User UID (from Firebase Auth Console)"}),c.jsx("input",{type:"text",value:t,onChange:v=>e(v.target.value),placeholder:"Paste User UID here",style:Z.input}),c.jsx("small",{style:Z.helpText,children:"Get this from Firebase Console → Authentication → Users"})]}),c.jsxs("div",{style:Z.formGroup,children:[c.jsx("label",{style:Z.label,children:"Email"}),c.jsx("input",{type:"email",value:n,onChange:v=>r(v.target.value),required:!0,style:Z.input})]}),c.jsxs("div",{style:Z.formGroup,children:[c.jsx("label",{style:Z.label,children:"Full Name"}),c.jsx("input",{type:"text",value:i,onChange:v=>s(v.target.value),required:!0,style:Z.input})]}),c.jsxs("div",{style:Z.formGroup,children:[c.jsx("label",{style:Z.label,children:"Username"}),c.jsx("input",{type:"text",value:o,onChange:v=>a(v.target.value),required:!0,style:Z.input})]}),c.jsx("button",{type:"submit",disabled:h,style:{...Z.button,opacity:h?.6:1},children:h?"⏳ Setting up...":"✅ Create Admin User"})]}),l&&c.jsx("div",{style:{...Z.message,backgroundColor:l.includes("✅")?"#d4edda":"#f8d7da",color:l.includes("✅")?"#155724":"#721c24",borderColor:l.includes("✅")?"#c3e6cb":"#f5c6cb"},children:l}),c.jsxs("div",{style:Z.instructions,children:[c.jsx("h3",{children:"📋 Instructions:"}),c.jsxs("ol",{children:[c.jsx("li",{children:"Create a user in Firebase Console → Authentication → Add User"}),c.jsx("li",{children:"Copy the User UID from the users list"}),c.jsx("li",{children:"Paste the UID above and fill in the details"}),c.jsx("li",{children:'Click "Create Admin User"'}),c.jsx("li",{children:"Login with the credentials"}),c.jsx("li",{children:"Access admin dashboard at /admin/products"})]})]}),c.jsxs("div",{style:Z.warning,children:["⚠️ ",c.jsx("strong",{children:"Security Note:"})," Remove this component after setting up your admin user!"]})]})})},Z={container:{minHeight:"100vh",background:"linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",padding:"40px 20px",display:"flex",justifyContent:"center",alignItems:"center"},card:{backgroundColor:"#ffffff",borderRadius:"12px",padding:"40px",maxWidth:"600px",width:"100%",boxShadow:"0 10px 40px rgba(231, 29, 54, 0.3)"},title:{fontSize:"32px",fontWeight:"bold",color:"#e71d36",marginBottom:"10px",textAlign:"center"},subtitle:{color:"#666",textAlign:"center",marginBottom:"30px"},infoBox:{backgroundColor:"#f9f9f9",border:"2px solid #e71d36",borderRadius:"8px",padding:"15px",marginBottom:"20px"},form:{display:"flex",flexDirection:"column",gap:"20px"},formGroup:{display:"flex",flexDirection:"column",gap:"8px"},label:{fontWeight:"600",color:"#1a1a1a",fontSize:"14px"},input:{padding:"12px",border:"2px solid #e0e0e0",borderRadius:"6px",fontSize:"14px",transition:"border-color 0.3s",outline:"none"},helpText:{color:"#666",fontSize:"12px"},button:{backgroundColor:"#e71d36",color:"#ffffff",padding:"14px",border:"none",borderRadius:"6px",fontSize:"16px",fontWeight:"bold",cursor:"pointer",transition:"background-color 0.3s",marginTop:"10px"},secondaryButton:{backgroundColor:"#1a1a1a",color:"#ffffff",padding:"10px 20px",border:"none",borderRadius:"6px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",marginTop:"10px"},message:{padding:"15px",borderRadius:"6px",marginTop:"20px",border:"1px solid",fontWeight:"500"},instructions:{backgroundColor:"#f9f9f9",padding:"20px",borderRadius:"8px",marginTop:"30px",borderLeft:"4px solid #e71d36"},warning:{backgroundColor:"#fff3cd",border:"1px solid #ffc107",color:"#856404",padding:"15px",borderRadius:"6px",marginTop:"20px",textAlign:"center"}};function oO(){return c.jsxs("div",{className:"page-shell",style:{maxWidth:"1000px"},children:[c.jsx("h1",{children:"👤 My Account"}),c.jsxs("div",{style:{marginTop:"2rem"},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",padding:"2rem",borderRadius:"20px",marginBottom:"2rem",border:"1px solid #e8e8e8"},children:[c.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"1rem",color:"#1a1a1a"},children:"👋 Welcome to Your Account"}),c.jsx("p",{style:{color:"#666",fontSize:"1rem",lineHeight:"1.6",marginBottom:"1.5rem"},children:"Manage your personal information, track orders, and update your preferences."})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"1.5rem"},children:[c.jsxs(O,{to:"/orders",style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",padding:"2rem",borderRadius:"16px",border:"1px solid #e8e8e8",textAlign:"center",transition:"all 0.3s ease"},className:"account-card",children:[c.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📦"}),c.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.5rem",color:"#1a1a1a"},children:"Your Orders"}),c.jsx("p",{style:{color:"#666",fontSize:"0.9rem"},children:"Track, return, or buy things again"})]}),c.jsxs(O,{to:"/account",style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",padding:"2rem",borderRadius:"16px",border:"1px solid #e8e8e8",textAlign:"center",transition:"all 0.3s ease"},className:"account-card",children:[c.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"🔒"}),c.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.5rem",color:"#1a1a1a"},children:"Login & Security"}),c.jsx("p",{style:{color:"#666",fontSize:"0.9rem"},children:"Edit login, name, and password"})]}),c.jsxs(O,{to:"/account",style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",padding:"2rem",borderRadius:"16px",border:"1px solid #e8e8e8",textAlign:"center",transition:"all 0.3s ease"},className:"account-card",children:[c.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"📍"}),c.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.5rem",color:"#1a1a1a"},children:"Addresses"}),c.jsx("p",{style:{color:"#666",fontSize:"0.9rem"},children:"Edit addresses for orders and gifts"})]}),c.jsxs(O,{to:"/account",style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",padding:"2rem",borderRadius:"16px",border:"1px solid #e8e8e8",textAlign:"center",transition:"all 0.3s ease"},className:"account-card",children:[c.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"💳"}),c.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.5rem",color:"#1a1a1a"},children:"Payment Options"}),c.jsx("p",{style:{color:"#666",fontSize:"0.9rem"},children:"Manage payment methods and settings"})]})]}),c.jsxs("div",{style:{marginTop:"3rem",textAlign:"center"},children:[c.jsx("p",{style:{color:"#999",fontSize:"0.9rem",marginBottom:"1rem"},children:"This is a demo page"}),c.jsx(O,{to:"/",className:"primary-button",style:{display:"inline-block",padding:"1rem 2rem"},children:"🏠 Back to Home"})]})]})]})}function aO(){const{orders:t}=mo();return c.jsxs("div",{className:"page-shell",style:{maxWidth:"1200px"},children:[c.jsx("h1",{children:"📦 Your Orders"}),t.length===0?c.jsxs("div",{className:"empty-state",children:[c.jsx("p",{style:{fontSize:"1.5rem",marginBottom:"1rem"},children:"No orders yet"}),c.jsx("p",{style:{fontSize:"1rem",color:"#666",marginBottom:"2rem"},children:"Looks like you haven't placed any orders. Start shopping now!"}),c.jsx(O,{to:"/products",className:"primary-button",style:{display:"inline-block",padding:"1rem 3rem"},children:"🛍️ Start Shopping"})]}):c.jsxs("div",{style:{marginTop:"2rem"},children:[c.jsxs("p",{style:{color:"#666",marginBottom:"2rem"},children:["You have ",t.length," order",t.length!==1?"s":""]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:t.map(e=>c.jsxs("div",{style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",border:"1px solid #e8e8e8",borderRadius:"20px",padding:"2rem",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.06)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsxs("h3",{style:{fontSize:"1.2rem",color:"#1a1a1a",marginBottom:"0.5rem"},children:["Order #",e.id]}),c.jsxs("p",{style:{color:"#666",fontSize:"0.9rem"},children:["Placed on ",new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})]})]}),c.jsxs("div",{style:{textAlign:"right"},children:[c.jsx("p",{style:{fontSize:"0.9rem",color:"#666",marginBottom:"0.25rem"},children:"Order Total"}),c.jsxs("p",{style:{fontSize:"1.8rem",fontWeight:"800",color:"#e71d36"},children:["₹",e.total.toFixed(2)]})]})]}),c.jsxs("div",{style:{borderTop:"1px solid #e8e8e8",paddingTop:"1.5rem"},children:[c.jsx("h4",{style:{fontSize:"1rem",marginBottom:"1rem",color:"#1a1a1a"},children:"Items:"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:e.items.map(n=>c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.75rem",background:"#ffffff",borderRadius:"12px",border:"1px solid #f0f0f0"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsx("img",{src:n.image,alt:n.title,style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"8px",background:"#fafafa"}}),c.jsxs("div",{children:[c.jsx("p",{style:{fontWeight:"600",color:"#1a1a1a",marginBottom:"0.25rem"},children:n.title}),c.jsxs("p",{style:{color:"#666",fontSize:"0.85rem"},children:["Quantity: ",n.quantity]})]})]}),c.jsxs("p",{style:{fontWeight:"700",color:"#e71d36",fontSize:"1.1rem"},children:["₹",(n.price*n.quantity).toFixed(2)]})]},n.id))})]}),c.jsx("div",{style:{marginTop:"1.5rem",paddingTop:"1.5rem",borderTop:"1px solid #e8e8e8"},children:c.jsxs("div",{style:{background:"linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",padding:"1rem 1.5rem",borderRadius:"12px",display:"flex",alignItems:"center",gap:"1rem"},children:[c.jsx("span",{style:{fontSize:"1.5rem"},children:"✅"}),c.jsxs("div",{children:[c.jsx("p",{style:{fontWeight:"700",color:"#2e7d32",marginBottom:"0.25rem"},children:"Order Confirmed"}),c.jsx("p",{style:{fontSize:"0.85rem",color:"#388e3c"},children:"Your order has been placed successfully (Demo Mode)"})]})]})})]},e.id))})]})]})}function lO(){var m,_;const[t,e]=x.useState(""),[n,r]=x.useState(""),[i,s]=x.useState(""),[o,a]=x.useState(!1),{login:l}=po(),u=Tr(),d=((_=(m=Hn().state)==null?void 0:m.from)==null?void 0:_.pathname)||"/",f=async v=>{v.preventDefault(),s(""),a(!0);try{await l(t,n),u(d,{replace:!0})}catch(w){s(w.message||"Failed to login. Please check your credentials.")}finally{a(!1)}};return c.jsxs("div",{className:"page-shell",style:{maxWidth:"500px",margin:"4rem auto"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[c.jsx("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:"🔐"}),c.jsx("h1",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"Welcome Back"}),c.jsx("p",{style:{color:"#666",fontSize:"1rem"},children:"Sign in to your account"})]}),c.jsxs("form",{onSubmit:f,style:{background:"linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",padding:"2.5rem",borderRadius:"20px",border:"1px solid #e8e8e8",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.08)"},children:[i&&c.jsxs("div",{style:{background:"linear-gradient(135deg, #fee 0%, #fdd 100%)",color:"#c41530",padding:"1rem 1.5rem",borderRadius:"12px",marginBottom:"1.5rem",border:"1px solid #f5c6cb",fontSize:"0.9rem",fontWeight:"600"},children:["⚠️ ",i]}),c.jsxs("div",{style:{marginBottom:"1.5rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a",fontSize:"0.95rem"},children:"Email"}),c.jsx("input",{type:"email",value:t,onChange:v=>e(v.target.value),required:!0,placeholder:"Enter your email",style:{width:"100%",padding:"0.75rem 1rem",border:"2px solid #e8e8e8",borderRadius:"12px",fontSize:"1rem",transition:"all 0.3s ease",background:"#fafafa"},onFocus:v=>{v.target.style.borderColor="#e71d36",v.target.style.background="#ffffff"},onBlur:v=>{v.target.style.borderColor="#e8e8e8",v.target.style.background="#fafafa"}})]}),c.jsxs("div",{style:{marginBottom:"2rem"},children:[c.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontWeight:"700",color:"#1a1a1a",fontSize:"0.95rem"},children:"Password"}),c.jsx("input",{type:"password",value:n,onChange:v=>r(v.target.value),required:!0,placeholder:"Enter your password",style:{width:"100%",padding:"0.75rem 1rem",border:"2px solid #e8e8e8",borderRadius:"12px",fontSize:"1rem",transition:"all 0.3s ease",background:"#fafafa"},onFocus:v=>{v.target.style.borderColor="#e71d36",v.target.style.background="#ffffff"},onBlur:v=>{v.target.style.borderColor="#e8e8e8",v.target.style.background="#fafafa"}})]}),c.jsx("button",{type:"submit",disabled:o,className:"primary-button",style:{width:"100%",padding:"1rem",fontSize:"1.05rem",marginBottom:"1rem",opacity:o?.6:1,cursor:o?"not-allowed":"pointer"},children:o?"Signing in...":"🚀 Sign In"}),c.jsxs("div",{style:{textAlign:"center",paddingTop:"1.5rem",borderTop:"1px solid #e8e8e8",marginTop:"1rem"},children:[c.jsxs("p",{style:{color:"#666",fontSize:"0.9rem",marginBottom:"0.5rem"},children:[c.jsx("strong",{children:"Note:"})," Use Firebase Authentication"]}),c.jsx("p",{style:{color:"#999",fontSize:"0.85rem",marginBottom:"1rem"},children:'Admin users must be configured in Firestore with role: "admin"'}),c.jsx("p",{style:{color:"#666",fontSize:"0.85rem"},children:"💡 Create an account or contact admin for access"})]})]}),c.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:c.jsx(O,{to:"/",style:{color:"#666",fontSize:"0.9rem",textDecoration:"underline"},children:"← Back to Home"})})]})}function cO(){return c.jsx("div",{className:"page-shell",style:{maxWidth:"800px",textAlign:"center"},children:c.jsxs("div",{style:{padding:"4rem 2rem"},children:[c.jsx("div",{style:{fontSize:"8rem",marginBottom:"1rem"},children:"🔍"}),c.jsx("h1",{style:{fontSize:"3rem",marginBottom:"1rem",color:"#1a1a1a"},children:"404 - Page Not Found"}),c.jsxs("p",{style:{fontSize:"1.2rem",color:"#666",marginBottom:"2rem",lineHeight:"1.6"},children:["Oops! The page you're looking for doesn't exist.",c.jsx("br",{}),"It might have been moved or deleted."]}),c.jsxs("div",{style:{background:"linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",padding:"2rem",borderRadius:"20px",marginBottom:"2rem",border:"1px solid #e8e8e8"},children:[c.jsx("h3",{style:{marginBottom:"1rem",color:"#1a1a1a"},children:"Quick Links:"}),c.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[c.jsx(O,{to:"/",className:"primary-button",style:{padding:"0.75rem 1.5rem"},children:"🏠 Home"}),c.jsx(O,{to:"/products",className:"primary-button",style:{padding:"0.75rem 1.5rem",background:"linear-gradient(135deg, #1a1a1a 0%, #000000 100%)"},children:"🛍️ Products"}),c.jsx(O,{to:"/cart",className:"primary-button",style:{padding:"0.75rem 1.5rem",background:"linear-gradient(135deg, #1a1a1a 0%, #000000 100%)"},children:"🛒 Cart"})]})]}),c.jsxs("p",{style:{color:"#999",fontSize:"0.9rem"},children:["Need help? ",c.jsx(O,{to:"/",style:{color:"#e71d36",fontWeight:"700"},children:"Contact Support"})]})]})})}function uO(){return c.jsx(QA,{children:c.jsxs(XA,{children:[c.jsx(JA,{}),c.jsx("main",{className:"amazon-main",children:c.jsxs(BS,{children:[c.jsx(it,{path:"/",element:c.jsx(ZA,{})}),c.jsx(it,{path:"/products",element:c.jsx(eO,{})}),c.jsx(it,{path:"/products/:id",element:c.jsx(tO,{})}),c.jsx(it,{path:"/cart",element:c.jsx(nO,{})}),c.jsx(it,{path:"/checkout",element:c.jsx(rO,{})}),c.jsx(it,{path:"/login",element:c.jsx(lO,{})}),c.jsx(it,{path:"/admin/setup",element:c.jsx(sO,{})}),c.jsx(it,{path:"/admin/products",element:c.jsx(bc,{requireAdmin:!0,children:c.jsx(iO,{})})}),c.jsx(it,{path:"/account",element:c.jsx(bc,{children:c.jsx(oO,{})})}),c.jsx(it,{path:"/orders",element:c.jsx(bc,{children:c.jsx(aO,{})})}),c.jsx(it,{path:"*",element:c.jsx(cO,{})})]})}),c.jsxs("footer",{className:"amazon-footer",children:[c.jsx("div",{className:"amazon-footer-back",children:c.jsx("button",{className:"back-to-top-btn",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"⬆️ Back to Top"})}),c.jsxs("div",{className:"amazon-footer-main",children:[c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"About Us"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(O,{to:"/",children:"🏢 About Drift Enterprises"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"💼 Careers"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"📰 News & Press"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"📝 Blog"})})]})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"Connect"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:"📘 Facebook"})}),c.jsx("li",{children:c.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:"🐦 Twitter"})}),c.jsx("li",{children:c.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:"📸 Instagram"})}),c.jsx("li",{children:c.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:"💼 LinkedIn"})})]})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"For Sellers"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(O,{to:"/admin/products",children:"🛒 Sell with Drift"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"🤝 Partner Program"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"📢 Advertising"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"🚚 Logistics"})})]})]}),c.jsxs("div",{className:"footer-column",children:[c.jsx("h4",{children:"Support"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx(O,{to:"/account",children:"👤 My Account"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"💬 Support Center"})}),c.jsx("li",{children:c.jsx(O,{to:"/",children:"📞 Contact Support"})}),c.jsx("li",{children:c.jsx(O,{to:"/account",children:"⚙️ Preferences"})})]})]})]}),c.jsxs("div",{className:"amazon-footer-bottom",children:[c.jsx("div",{className:"footer-logo",children:"⚡ DRIFT ENTERPRISES"}),c.jsx("div",{className:"footer-copyright",children:"© 2024 Drift Enterprises - All Rights Reserved | Crafted with ❤️"})]})]})]})})}h_(document.getElementById("root")).render(c.jsx(cg.StrictMode,{children:c.jsx(YS,{children:c.jsx(uO,{})})}));
