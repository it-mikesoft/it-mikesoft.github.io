(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Tc={exports:{}},na={},Pc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),vp=Symbol.for("react.portal"),yp=Symbol.for("react.fragment"),Sp=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Np=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Ip=Symbol.for("react.memo"),kp=Symbol.for("react.lazy"),ms=Symbol.iterator;function wp(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var Ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Oc={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=Oc,this.updater=n||Ac}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rc(){}Rc.prototype=Yn.prototype;function Xr(e,t,n){this.props=e,this.context=t,this.refs=Oc,this.updater=n||Ac}var el=Xr.prototype=new Rc;el.constructor=Xr;Mc(el,Yn.prototype);el.isPureReactComponent=!0;var fs=Array.isArray,jc=Object.prototype.hasOwnProperty,tl={current:null},Lc={key:!0,ref:!0,__self:!0,__source:!0};function _c(e,t,n){var i,o={},a=null,r=null;if(t!=null)for(i in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(a=""+t.key),t)jc.call(t,i)&&!Lc.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)o[i]===void 0&&(o[i]=l[i]);return{$$typeof:Hi,type:e,key:a,ref:r,props:o,_owner:tl.current}}function Cp(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function Tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gs=/\/+/g;function Ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tp(""+e.key):t.toString(36)}function xo(e,t,n,i,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Hi:case vp:r=!0}}if(r)return r=e,o=o(r),e=i===""?"."+Ra(r,0):i,fs(o)?(n="",e!=null&&(n=e.replace(gs,"$&/")+"/"),xo(o,t,n,"",function(p){return p})):o!=null&&(nl(o)&&(o=Cp(o,n+(!o.key||r&&r.key===o.key?"":(""+o.key).replace(gs,"$&/")+"/")+e)),t.push(o)),1;if(r=0,i=i===""?".":i+":",fs(e))for(var l=0;l<e.length;l++){a=e[l];var s=i+Ra(a,l);r+=xo(a,t,n,s,o)}else if(s=wp(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=i+Ra(a,l++),r+=xo(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function no(e,t,n){if(e==null)return e;var i=[],o=0;return xo(e,i,"","",function(a){return t.call(n,a,o++)}),i}function Pp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},Eo={transition:null},Ap={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:tl};function Dc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:no,forEach:function(e,t,n){no(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return no(e,function(){t++}),t},toArray:function(e){return no(e,function(t){return t})||[]},only:function(e){if(!nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Yn;B.Fragment=yp;B.Profiler=xp;B.PureComponent=Xr;B.StrictMode=Sp;B.Suspense=zp;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;B.act=Dc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Mc({},e.props),o=e.key,a=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,r=tl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)jc.call(t,s)&&!Lc.hasOwnProperty(s)&&(i[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];i.children=l}return{$$typeof:Hi,type:e.type,key:o,ref:a,props:i,_owner:r}};B.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ep,_context:e},e.Consumer=e};B.createElement=_c;B.createFactory=function(e){var t=_c.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:bp,render:e}};B.isValidElement=nl;B.lazy=function(e){return{$$typeof:kp,_payload:{_status:-1,_result:e},_init:Pp}};B.memo=function(e,t){return{$$typeof:Ip,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};B.unstable_act=Dc;B.useCallback=function(e,t){return je.current.useCallback(e,t)};B.useContext=function(e){return je.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return je.current.useDeferredValue(e)};B.useEffect=function(e,t){return je.current.useEffect(e,t)};B.useId=function(){return je.current.useId()};B.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return je.current.useMemo(e,t)};B.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};B.useRef=function(e){return je.current.useRef(e)};B.useState=function(e){return je.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return je.current.useTransition()};B.version="18.3.1";Pc.exports=B;var w=Pc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=w,Op=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),jp=Object.prototype.hasOwnProperty,Lp=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var i,o={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)jp.call(t,i)&&!_p.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Op,type:e,key:a,ref:r,props:o,_owner:Lp.current}}na.Fragment=Rp;na.jsx=Fc;na.jsxs=Fc;Tc.exports=na;var c=Tc.exports,Bc={exports:{}},Ke={},Uc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var _=C.length;C.push(L);e:for(;0<_;){var ee=_-1>>>1,ae=C[ee];if(0<o(ae,L))C[ee]=L,C[_]=ae,_=ee;else break e}}function n(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var L=C[0],_=C.pop();if(_!==L){C[0]=_;e:for(var ee=0,ae=C.length,Pt=ae>>>1;ee<Pt;){var Ie=2*(ee+1)-1,Zt=C[Ie],dt=Ie+1,Xt=C[dt];if(0>o(Zt,_))dt<ae&&0>o(Xt,Zt)?(C[ee]=Xt,C[dt]=_,ee=dt):(C[ee]=Zt,C[Ie]=_,ee=Ie);else if(dt<ae&&0>o(Xt,_))C[ee]=Xt,C[dt]=_,ee=dt;else break e}}return L}function o(C,L){var _=C.sortIndex-L.sortIndex;return _!==0?_:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var r=Date,l=r.now();e.unstable_now=function(){return r.now()-l}}var s=[],p=[],y=1,v=null,h=3,b=!1,z=!1,T=!1,F=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var L=n(p);L!==null;){if(L.callback===null)i(p);else if(L.startTime<=C)i(p),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(p)}}function S(C){if(T=!1,f(C),!z)if(n(s)!==null)z=!0,se(k);else{var L=n(p);L!==null&&yn(S,L.startTime-C)}}function k(C,L){z=!1,T&&(T=!1,m(O),O=-1),b=!0;var _=h;try{for(f(L),v=n(s);v!==null&&(!(v.expirationTime>L)||C&&!pe());){var ee=v.callback;if(typeof ee=="function"){v.callback=null,h=v.priorityLevel;var ae=ee(v.expirationTime<=L);L=e.unstable_now(),typeof ae=="function"?v.callback=ae:v===n(s)&&i(s),f(L)}else i(s);v=n(s)}if(v!==null)var Pt=!0;else{var Ie=n(p);Ie!==null&&yn(S,Ie.startTime-L),Pt=!1}return Pt}finally{v=null,h=_,b=!1}}var x=!1,P=null,O=-1,X=5,j=-1;function pe(){return!(e.unstable_now()-j<X)}function Pe(){if(P!==null){var C=e.unstable_now();j=C;var L=!0;try{L=P(!0,C)}finally{L?Jt():(x=!1,P=null)}}else x=!1}var Jt;if(typeof u=="function")Jt=function(){u(Pe)};else if(typeof MessageChannel<"u"){var Xn=new MessageChannel,Ea=Xn.port2;Xn.port1.onmessage=Pe,Jt=function(){Ea.postMessage(null)}}else Jt=function(){F(Pe,0)};function se(C){P=C,x||(x=!0,Jt())}function yn(C,L){O=F(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){z||b||(z=!0,se(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var _=h;h=L;try{return C()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var _=h;h=C;try{return L()}finally{h=_}},e.unstable_scheduleCallback=function(C,L,_){var ee=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ee+_:ee):_=ee,C){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=_+ae,C={id:y++,callback:L,priorityLevel:C,startTime:_,expirationTime:ae,sortIndex:-1},_>ee?(C.sortIndex=_,t(p,C),n(s)===null&&C===n(p)&&(T?(m(O),O=-1):T=!0,yn(S,_-ee))):(C.sortIndex=ae,t(s,C),z||b||(z=!0,se(k))),C},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(C){var L=h;return function(){var _=h;h=L;try{return C.apply(this,arguments)}finally{h=_}}}})(Hc);Uc.exports=Hc;var Dp=Uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=w,Qe=Dp;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vc=new Set,Ii={};function gn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Ii[e]=t,e=0;e<t.length;e++)Vc.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lr=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hs={},vs={};function Up(e){return lr.call(vs,e)?!0:lr.call(hs,e)?!1:Bp.test(e)?vs[e]=!0:(hs[e]=!0,!1)}function Hp(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vp(e,t,n,i){if(t===null||typeof t>"u"||Hp(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,i,o,a,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=r}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ol(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,ol);ze[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,ol);ze[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,ol);ze[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function al(e,t,n,i){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vp(t,n,o,i)&&(n=null),i||o===null?Up(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Tt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),zn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),sr=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),qc=Symbol.for("react.context"),ll=Symbol.for("react.forward_ref"),cr=Symbol.for("react.suspense"),ur=Symbol.for("react.suspense_list"),sl=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Gc=Symbol.for("react.offscreen"),ys=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ja;function pi(e){if(ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ja=t&&t[1]||""}return`
`+ja+e}var La=!1;function _a(e,t){if(!e||La)return"";La=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var i=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){i=p}e.call(t.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),a=i.stack.split(`
`),r=o.length-1,l=a.length-1;1<=r&&0<=l&&o[r]!==a[l];)l--;for(;1<=r&&0<=l;r--,l--)if(o[r]!==a[l]){if(r!==1||l!==1)do if(r--,l--,0>l||o[r]!==a[l]){var s=`
`+o[r].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=r&&0<=l);break}}}finally{La=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pi(e):""}function $p(e){switch(e.tag){case 5:return pi(e.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return e=_a(e.type,!1),e;case 11:return e=_a(e.type.render,!1),e;case 1:return e=_a(e.type,!0),e;default:return""}}function dr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case zn:return"Portal";case sr:return"Profiler";case rl:return"StrictMode";case cr:return"Suspense";case ur:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qc:return(e.displayName||"Context")+".Consumer";case $c:return(e._context.displayName||"Context")+".Provider";case ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sl:return t=e.displayName||null,t!==null?t:dr(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return dr(e(t))}catch{}}return null}function qp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dr(t);case 8:return t===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gp(e){var t=Wc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=Gp(e))}function Qc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Wc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pr(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ss(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kc(e,t){t=t.checked,t!=null&&al(e,"checked",t,!1)}function mr(e,t){Kc(e,t);var n=Gt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fr(e,t.type,n):t.hasOwnProperty("defaultValue")&&fr(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fr(e,t,n){(t!=="number"||Mo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mi=Array.isArray;function Ln(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(mi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Yc(e,t){var n=Gt(t.value),i=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Ns(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,Zc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wp=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(e){Wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hi[t]=hi[e]})});function Xc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hi.hasOwnProperty(e)&&hi[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=Xc(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var Qp=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vr(e,t){if(t){if(Qp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function yr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sr=null;function cl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,_n=null,Dn=null;function bs(e){if(e=qi(e)){if(typeof xr!="function")throw Error(E(280));var t=e.stateNode;t&&(t=la(t),xr(e.stateNode,e.type,t))}}function tu(e){_n?Dn?Dn.push(e):Dn=[e]:_n=e}function nu(){if(_n){var e=_n,t=Dn;if(Dn=_n=null,bs(e),t)for(e=0;e<t.length;e++)bs(t[e])}}function iu(e,t){return e(t)}function ou(){}var Da=!1;function au(e,t,n){if(Da)return e(t,n);Da=!0;try{return iu(e,t,n)}finally{Da=!1,(_n!==null||Dn!==null)&&(ou(),nu())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var i=la(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Er=!1;if(It)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Er=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Er=!1}function Kp(e,t,n,i,o,a,r,l,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var vi=!1,Oo=null,Ro=!1,Nr=null,Yp={onError:function(e){vi=!0,Oo=e}};function Jp(e,t,n,i,o,a,r,l,s){vi=!1,Oo=null,Kp.apply(Yp,arguments)}function Zp(e,t,n,i,o,a,r,l,s){if(Jp.apply(this,arguments),vi){if(vi){var p=Oo;vi=!1,Oo=null}else throw Error(E(198));Ro||(Ro=!0,Nr=p)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zs(e){if(hn(e)!==e)throw Error(E(188))}function Xp(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return zs(o),e;if(a===i)return zs(o),t;a=a.sibling}throw Error(E(188))}if(n.return!==i.return)n=o,i=a;else{for(var r=!1,l=o.child;l;){if(l===n){r=!0,n=o,i=a;break}if(l===i){r=!0,i=o,n=a;break}l=l.sibling}if(!r){for(l=a.child;l;){if(l===n){r=!0,n=a,i=o;break}if(l===i){r=!0,i=a,n=o;break}l=l.sibling}if(!r)throw Error(E(189))}}if(n.alternate!==i)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function lu(e){return e=Xp(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var cu=Qe.unstable_scheduleCallback,Is=Qe.unstable_cancelCallback,em=Qe.unstable_shouldYield,tm=Qe.unstable_requestPaint,ue=Qe.unstable_now,nm=Qe.unstable_getCurrentPriorityLevel,ul=Qe.unstable_ImmediatePriority,uu=Qe.unstable_UserBlockingPriority,jo=Qe.unstable_NormalPriority,im=Qe.unstable_LowPriority,du=Qe.unstable_IdlePriority,ia=null,gt=null;function om(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:lm,am=Math.log,rm=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(am(e)/rm|0)|0}var ro=64,lo=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes,r=n&268435455;if(r!==0){var l=r&~o;l!==0?i=fi(l):(a&=r,a!==0&&(i=fi(a)))}else r=n&~o,r!==0?i=fi(r):a!==0&&(i=fi(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-st(t),o=1<<n,i|=e[n],t&=~o;return i}function sm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var r=31-st(a),l=1<<r,s=o[r];s===-1?(!(l&n)||l&i)&&(o[r]=sm(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function br(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pu(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function Fa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function um(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-st(n),a=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~a}}function dl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-st(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var W=0;function mu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fu,pl,gu,hu,vu,zr=!1,so=[],Dt=null,Ft=null,Bt=null,Ci=new Map,Ti=new Map,Rt=[],dm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ks(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function ri(e,t,n,i,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},t!==null&&(t=qi(t),t!==null&&pl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function pm(e,t,n,i,o){switch(t){case"focusin":return Dt=ri(Dt,e,t,n,i,o),!0;case"dragenter":return Ft=ri(Ft,e,t,n,i,o),!0;case"mouseover":return Bt=ri(Bt,e,t,n,i,o),!0;case"pointerover":var a=o.pointerId;return Ci.set(a,ri(Ci.get(a)||null,e,t,n,i,o)),!0;case"gotpointercapture":return a=o.pointerId,Ti.set(a,ri(Ti.get(a)||null,e,t,n,i,o)),!0}return!1}function yu(e){var t=on(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=ru(n),t!==null){e.blockedOn=t,vu(e.priority,function(){gu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ir(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Sr=i,n.target.dispatchEvent(i),Sr=null}else return t=qi(n),t!==null&&pl(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){No(e)&&n.delete(t)}function mm(){zr=!1,Dt!==null&&No(Dt)&&(Dt=null),Ft!==null&&No(Ft)&&(Ft=null),Bt!==null&&No(Bt)&&(Bt=null),Ci.forEach(ws),Ti.forEach(ws)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,zr||(zr=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,mm)))}function Pi(e){function t(o){return li(o,e)}if(0<so.length){li(so[0],e);for(var n=1;n<so.length;n++){var i=so[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Dt!==null&&li(Dt,e),Ft!==null&&li(Ft,e),Bt!==null&&li(Bt,e),Ci.forEach(t),Ti.forEach(t),n=0;n<Rt.length;n++)i=Rt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)yu(n),n.blockedOn===null&&Rt.shift()}var Fn=Tt.ReactCurrentBatchConfig,_o=!0;function fm(e,t,n,i){var o=W,a=Fn.transition;Fn.transition=null;try{W=1,ml(e,t,n,i)}finally{W=o,Fn.transition=a}}function gm(e,t,n,i){var o=W,a=Fn.transition;Fn.transition=null;try{W=4,ml(e,t,n,i)}finally{W=o,Fn.transition=a}}function ml(e,t,n,i){if(_o){var o=Ir(e,t,n,i);if(o===null)Ka(e,t,i,Do,n),ks(e,i);else if(pm(o,e,t,n,i))i.stopPropagation();else if(ks(e,i),t&4&&-1<dm.indexOf(e)){for(;o!==null;){var a=qi(o);if(a!==null&&fu(a),a=Ir(e,t,n,i),a===null&&Ka(e,t,i,Do,n),a===o)break;o=a}o!==null&&i.stopPropagation()}else Ka(e,t,i,null,n)}}var Do=null;function Ir(e,t,n,i){if(Do=null,e=cl(i),e=on(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function Su(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nm()){case ul:return 1;case uu:return 4;case jo:case im:return 16;case du:return 536870912;default:return 16}default:return 16}}var Lt=null,fl=null,bo=null;function xu(){if(bo)return bo;var e,t=fl,n=t.length,i,o="value"in Lt?Lt.value:Lt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===o[a-i];i++);return bo=o.slice(e,1<i?1-i:void 0)}function zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function co(){return!0}function Cs(){return!1}function Ye(e){function t(n,i,o,a,r){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?co:Cs,this.isPropagationStopped=Cs,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Ye(Jn),$i=oe({},Jn,{view:0,detail:0}),hm=Ye($i),Ba,Ua,si,oa=oe({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Ba=e.screenX-si.screenX,Ua=e.screenY-si.screenY):Ua=Ba=0,si=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Ua}}),Ts=Ye(oa),vm=oe({},oa,{dataTransfer:0}),ym=Ye(vm),Sm=oe({},$i,{relatedTarget:0}),Ha=Ye(Sm),xm=oe({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=Ye(xm),Nm=oe({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bm=Ye(Nm),zm=oe({},Jn,{data:0}),Ps=Ye(zm),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},km={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wm[e])?!!t[e]:!1}function hl(){return Cm}var Tm=oe({},$i,{key:function(e){if(e.key){var t=Im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?km[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pm=Ye(Tm),Am=oe({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),As=Ye(Am),Mm=oe({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),Om=Ye(Mm),Rm=oe({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jm=Ye(Rm),Lm=oe({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_m=Ye(Lm),Dm=[9,13,27,32],vl=It&&"CompositionEvent"in window,yi=null;It&&"documentMode"in document&&(yi=document.documentMode);var Fm=It&&"TextEvent"in window&&!yi,Eu=It&&(!vl||yi&&8<yi&&11>=yi),Ms=" ",Os=!1;function Nu(e,t){switch(e){case"keyup":return Dm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Bm(e,t){switch(e){case"compositionend":return bu(t);case"keypress":return t.which!==32?null:(Os=!0,Ms);case"textInput":return e=t.data,e===Ms&&Os?null:e;default:return null}}function Um(e,t){if(kn)return e==="compositionend"||!vl&&Nu(e,t)?(e=xu(),bo=fl=Lt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eu&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hm[e.type]:t==="textarea"}function zu(e,t,n,i){tu(i),t=Fo(t,"onChange"),0<t.length&&(n=new gl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Si=null,Ai=null;function Vm(e){ju(e,0)}function aa(e){var t=Tn(e);if(Qc(t))return e}function $m(e,t){if(e==="change")return t}var Iu=!1;if(It){var Va;if(It){var $a="oninput"in document;if(!$a){var js=document.createElement("div");js.setAttribute("oninput","return;"),$a=typeof js.oninput=="function"}Va=$a}else Va=!1;Iu=Va&&(!document.documentMode||9<document.documentMode)}function Ls(){Si&&(Si.detachEvent("onpropertychange",ku),Ai=Si=null)}function ku(e){if(e.propertyName==="value"&&aa(Ai)){var t=[];zu(t,Ai,e,cl(e)),au(Vm,t)}}function qm(e,t,n){e==="focusin"?(Ls(),Si=t,Ai=n,Si.attachEvent("onpropertychange",ku)):e==="focusout"&&Ls()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(Ai)}function Wm(e,t){if(e==="click")return aa(t)}function Qm(e,t){if(e==="input"||e==="change")return aa(t)}function Km(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Km;function Mi(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!lr.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function _s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ds(e,t){var n=_s(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_s(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cu(){for(var e=window,t=Mo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ym(e){var t=Cu(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(i!==null&&yl(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!e.extend&&a>i&&(o=i,i=a,a=o),o=Ds(n,a);var r=Ds(n,i);o&&r&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jm=It&&"documentMode"in document&&11>=document.documentMode,wn=null,kr=null,xi=null,wr=!1;function Fs(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wr||wn==null||wn!==Mo(i)||(i=wn,"selectionStart"in i&&yl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xi&&Mi(xi,i)||(xi=i,i=Fo(kr,"onSelect"),0<i.length&&(t=new gl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=wn)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},qa={},Tu={};It&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function ra(e){if(qa[e])return qa[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tu)return qa[e]=t[n];return e}var Pu=ra("animationend"),Au=ra("animationiteration"),Mu=ra("animationstart"),Ou=ra("transitionend"),Ru=new Map,Bs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Ru.set(e,t),gn(t,[e])}for(var Ga=0;Ga<Bs.length;Ga++){var Wa=Bs[Ga],Zm=Wa.toLowerCase(),Xm=Wa[0].toUpperCase()+Wa.slice(1);Qt(Zm,"on"+Xm)}Qt(Pu,"onAnimationEnd");Qt(Au,"onAnimationIteration");Qt(Mu,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Ou,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function Us(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Zp(i,t,void 0,e),e.currentTarget=null}function ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var l=i[r],s=l.instance,p=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Us(o,l,p),a=s}else for(r=0;r<i.length;r++){if(l=i[r],s=l.instance,p=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Us(o,l,p),a=s}}}if(Ro)throw e=Nr,Ro=!1,Nr=null,e}function J(e,t){var n=t[Mr];n===void 0&&(n=t[Mr]=new Set);var i=e+"__bubble";n.has(i)||(Lu(t,e,2,!1),n.add(i))}function Qa(e,t,n){var i=0;t&&(i|=4),Lu(n,e,i,t)}var po="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[po]){e[po]=!0,Vc.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||Qa(n,!1,e),Qa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[po]||(t[po]=!0,Qa("selectionchange",!1,t))}}function Lu(e,t,n,i){switch(Su(t)){case 1:var o=fm;break;case 4:o=gm;break;default:o=ml}n=o.bind(null,t,n,e),o=void 0,!Er||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ka(e,t,n,i,o){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var l=i.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(r===4)for(r=i.return;r!==null;){var s=r.tag;if((s===3||s===4)&&(s=r.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;r=r.return}for(;l!==null;){if(r=on(l),r===null)return;if(s=r.tag,s===5||s===6){i=a=r;continue e}l=l.parentNode}}i=i.return}au(function(){var p=a,y=cl(n),v=[];e:{var h=Ru.get(e);if(h!==void 0){var b=gl,z=e;switch(e){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":b=Pm;break;case"focusin":z="focus",b=Ha;break;case"focusout":z="blur",b=Ha;break;case"beforeblur":case"afterblur":b=Ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=ym;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Om;break;case Pu:case Au:case Mu:b=Em;break;case Ou:b=jm;break;case"scroll":b=hm;break;case"wheel":b=_m;break;case"copy":case"cut":case"paste":b=bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=As}var T=(t&4)!==0,F=!T&&e==="scroll",m=T?h!==null?h+"Capture":null:h;T=[];for(var u=p,f;u!==null;){f=u;var S=f.stateNode;if(f.tag===5&&S!==null&&(f=S,m!==null&&(S=wi(u,m),S!=null&&T.push(Ri(u,S,f)))),F)break;u=u.return}0<T.length&&(h=new b(h,z,null,n,y),v.push({event:h,listeners:T}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&n!==Sr&&(z=n.relatedTarget||n.fromElement)&&(on(z)||z[kt]))break e;if((b||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,b?(z=n.relatedTarget||n.toElement,b=p,z=z?on(z):null,z!==null&&(F=hn(z),z!==F||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=p),b!==z)){if(T=Ts,S="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(T=As,S="onPointerLeave",m="onPointerEnter",u="pointer"),F=b==null?h:Tn(b),f=z==null?h:Tn(z),h=new T(S,u+"leave",b,n,y),h.target=F,h.relatedTarget=f,S=null,on(y)===p&&(T=new T(m,u+"enter",z,n,y),T.target=f,T.relatedTarget=F,S=T),F=S,b&&z)t:{for(T=b,m=z,u=0,f=T;f;f=bn(f))u++;for(f=0,S=m;S;S=bn(S))f++;for(;0<u-f;)T=bn(T),u--;for(;0<f-u;)m=bn(m),f--;for(;u--;){if(T===m||m!==null&&T===m.alternate)break t;T=bn(T),m=bn(m)}T=null}else T=null;b!==null&&Hs(v,h,b,T,!1),z!==null&&F!==null&&Hs(v,F,z,T,!0)}}e:{if(h=p?Tn(p):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var k=$m;else if(Rs(h))if(Iu)k=Qm;else{k=Gm;var x=qm}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Wm);if(k&&(k=k(e,p))){zu(v,k,n,y);break e}x&&x(e,h,p),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&fr(h,"number",h.value)}switch(x=p?Tn(p):window,e){case"focusin":(Rs(x)||x.contentEditable==="true")&&(wn=x,kr=p,xi=null);break;case"focusout":xi=kr=wn=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,Fs(v,n,y);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":Fs(v,n,y)}var P;if(vl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else kn?Nu(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Eu&&n.locale!=="ko"&&(kn||O!=="onCompositionStart"?O==="onCompositionEnd"&&kn&&(P=xu()):(Lt=y,fl="value"in Lt?Lt.value:Lt.textContent,kn=!0)),x=Fo(p,O),0<x.length&&(O=new Ps(O,e,null,n,y),v.push({event:O,listeners:x}),P?O.data=P:(P=bu(n),P!==null&&(O.data=P)))),(P=Fm?Bm(e,n):Um(e,n))&&(p=Fo(p,"onBeforeInput"),0<p.length&&(y=new Ps("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=P))}ju(v,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=wi(e,n),a!=null&&i.unshift(Ri(e,a,o)),a=wi(e,t),a!=null&&i.push(Ri(e,a,o))),e=e.return}return i}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hs(e,t,n,i,o){for(var a=t._reactName,r=[];n!==null&&n!==i;){var l=n,s=l.alternate,p=l.stateNode;if(s!==null&&s===i)break;l.tag===5&&p!==null&&(l=p,o?(s=wi(n,a),s!=null&&r.unshift(Ri(n,s,l))):o||(s=wi(n,a),s!=null&&r.push(Ri(n,s,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function Vs(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(nf,"")}function mo(e,t,n){if(t=Vs(t),Vs(e)!==t&&n)throw Error(E(425))}function Bo(){}var Cr=null,Tr=null;function Pr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ar=typeof setTimeout=="function"?setTimeout:void 0,of=typeof clearTimeout=="function"?clearTimeout:void 0,$s=typeof Promise=="function"?Promise:void 0,af=typeof queueMicrotask=="function"?queueMicrotask:typeof $s<"u"?function(e){return $s.resolve(null).then(e).catch(rf)}:Ar;function rf(e){setTimeout(function(){throw e})}function Ya(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),Pi(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);Pi(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),ft="__reactFiber$"+Zn,ji="__reactProps$"+Zn,kt="__reactContainer$"+Zn,Mr="__reactEvents$"+Zn,lf="__reactListeners$"+Zn,sf="__reactHandles$"+Zn;function on(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qs(e);e!==null;){if(n=e[ft])return n;e=qs(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[ft]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function la(e){return e[ji]||null}var Or=[],Pn=-1;function Kt(e){return{current:e}}function Z(e){0>Pn||(e.current=Or[Pn],Or[Pn]=null,Pn--)}function K(e,t){Pn++,Or[Pn]=e.current,e.current=t}var Wt={},Te=Kt(Wt),Ue=Kt(!1),un=Wt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function Uo(){Z(Ue),Z(Te)}function Gs(e,t,n){if(Te.current!==Wt)throw Error(E(168));K(Te,t),K(Ue,n)}function _u(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(E(108,qp(e)||"Unknown",o));return oe({},n,i)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,un=Te.current,K(Te,e),K(Ue,Ue.current),!0}function Ws(e,t,n){var i=e.stateNode;if(!i)throw Error(E(169));n?(e=_u(e,t,un),i.__reactInternalMemoizedMergedChildContext=e,Z(Ue),Z(Te),K(Te,e)):Z(Ue),K(Ue,n)}var Et=null,sa=!1,Ja=!1;function Du(e){Et===null?Et=[e]:Et.push(e)}function cf(e){sa=!0,Du(e)}function Yt(){if(!Ja&&Et!==null){Ja=!0;var e=0,t=W;try{var n=Et;for(W=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Et=null,sa=!1}catch(o){throw Et!==null&&(Et=Et.slice(e+1)),cu(ul,Yt),o}finally{W=t,Ja=!1}}return null}var An=[],Mn=0,Vo=null,$o=0,Ze=[],Xe=0,dn=null,Nt=1,bt="";function en(e,t){An[Mn++]=$o,An[Mn++]=Vo,Vo=e,$o=t}function Fu(e,t,n){Ze[Xe++]=Nt,Ze[Xe++]=bt,Ze[Xe++]=dn,dn=e;var i=Nt;e=bt;var o=32-st(i)-1;i&=~(1<<o),n+=1;var a=32-st(t)+o;if(30<a){var r=o-o%5;a=(i&(1<<r)-1).toString(32),i>>=r,o-=r,Nt=1<<32-st(t)+o|n<<o|i,bt=a+e}else Nt=1<<a|n<<o|i,bt=e}function Sl(e){e.return!==null&&(en(e,1),Fu(e,1,0))}function xl(e){for(;e===Vo;)Vo=An[--Mn],An[Mn]=null,$o=An[--Mn],An[Mn]=null;for(;e===dn;)dn=Ze[--Xe],Ze[Xe]=null,bt=Ze[--Xe],Ze[Xe]=null,Nt=Ze[--Xe],Ze[Xe]=null}var We=null,Ge=null,te=!1,lt=null;function Bu(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ge=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:Nt,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ge=null,!0):!1;default:return!1}}function Rr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jr(e){if(te){var t=Ge;if(t){var n=t;if(!Qs(e,t)){if(Rr(e))throw Error(E(418));t=Ut(n.nextSibling);var i=We;t&&Qs(e,t)?Bu(i,n):(e.flags=e.flags&-4097|2,te=!1,We=e)}}else{if(Rr(e))throw Error(E(418));e.flags=e.flags&-4097|2,te=!1,We=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function fo(e){if(e!==We)return!1;if(!te)return Ks(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pr(e.type,e.memoizedProps)),t&&(t=Ge)){if(Rr(e))throw Uu(),Error(E(418));for(;t;)Bu(e,t),t=Ut(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=We?Ut(e.stateNode.nextSibling):null;return!0}function Uu(){for(var e=Ge;e;)e=Ut(e.nextSibling)}function $n(){Ge=We=null,te=!1}function El(e){lt===null?lt=[e]:lt.push(e)}var uf=Tt.ReactCurrentBatchConfig;function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var i=n.stateNode}if(!i)throw Error(E(147,e));var o=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(r){var l=o.refs;r===null?delete l[a]:l[a]=r},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ys(e){var t=e._init;return t(e._payload)}function Hu(e){function t(m,u){if(e){var f=m.deletions;f===null?(m.deletions=[u],m.flags|=16):f.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function i(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function o(m,u){return m=qt(m,u),m.index=0,m.sibling=null,m}function a(m,u,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<u?(m.flags|=2,u):f):(m.flags|=2,u)):(m.flags|=1048576,u)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,f,S){return u===null||u.tag!==6?(u=or(f,m.mode,S),u.return=m,u):(u=o(u,f),u.return=m,u)}function s(m,u,f,S){var k=f.type;return k===In?y(m,u,f.props.children,S,f.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mt&&Ys(k)===u.type)?(S=o(u,f.props),S.ref=ci(m,u,f),S.return=m,S):(S=Ao(f.type,f.key,f.props,null,m.mode,S),S.ref=ci(m,u,f),S.return=m,S)}function p(m,u,f,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ar(f,m.mode,S),u.return=m,u):(u=o(u,f.children||[]),u.return=m,u)}function y(m,u,f,S,k){return u===null||u.tag!==7?(u=sn(f,m.mode,S,k),u.return=m,u):(u=o(u,f),u.return=m,u)}function v(m,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=or(""+u,m.mode,f),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case io:return f=Ao(u.type,u.key,u.props,null,m.mode,f),f.ref=ci(m,null,u),f.return=m,f;case zn:return u=ar(u,m.mode,f),u.return=m,u;case Mt:var S=u._init;return v(m,S(u._payload),f)}if(mi(u)||oi(u))return u=sn(u,m.mode,f,null),u.return=m,u;go(m,u)}return null}function h(m,u,f,S){var k=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return k!==null?null:l(m,u,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case io:return f.key===k?s(m,u,f,S):null;case zn:return f.key===k?p(m,u,f,S):null;case Mt:return k=f._init,h(m,u,k(f._payload),S)}if(mi(f)||oi(f))return k!==null?null:y(m,u,f,S,null);go(m,f)}return null}function b(m,u,f,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(f)||null,l(u,m,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case io:return m=m.get(S.key===null?f:S.key)||null,s(u,m,S,k);case zn:return m=m.get(S.key===null?f:S.key)||null,p(u,m,S,k);case Mt:var x=S._init;return b(m,u,f,x(S._payload),k)}if(mi(S)||oi(S))return m=m.get(f)||null,y(u,m,S,k,null);go(u,S)}return null}function z(m,u,f,S){for(var k=null,x=null,P=u,O=u=0,X=null;P!==null&&O<f.length;O++){P.index>O?(X=P,P=null):X=P.sibling;var j=h(m,P,f[O],S);if(j===null){P===null&&(P=X);break}e&&P&&j.alternate===null&&t(m,P),u=a(j,u,O),x===null?k=j:x.sibling=j,x=j,P=X}if(O===f.length)return n(m,P),te&&en(m,O),k;if(P===null){for(;O<f.length;O++)P=v(m,f[O],S),P!==null&&(u=a(P,u,O),x===null?k=P:x.sibling=P,x=P);return te&&en(m,O),k}for(P=i(m,P);O<f.length;O++)X=b(P,m,O,f[O],S),X!==null&&(e&&X.alternate!==null&&P.delete(X.key===null?O:X.key),u=a(X,u,O),x===null?k=X:x.sibling=X,x=X);return e&&P.forEach(function(pe){return t(m,pe)}),te&&en(m,O),k}function T(m,u,f,S){var k=oi(f);if(typeof k!="function")throw Error(E(150));if(f=k.call(f),f==null)throw Error(E(151));for(var x=k=null,P=u,O=u=0,X=null,j=f.next();P!==null&&!j.done;O++,j=f.next()){P.index>O?(X=P,P=null):X=P.sibling;var pe=h(m,P,j.value,S);if(pe===null){P===null&&(P=X);break}e&&P&&pe.alternate===null&&t(m,P),u=a(pe,u,O),x===null?k=pe:x.sibling=pe,x=pe,P=X}if(j.done)return n(m,P),te&&en(m,O),k;if(P===null){for(;!j.done;O++,j=f.next())j=v(m,j.value,S),j!==null&&(u=a(j,u,O),x===null?k=j:x.sibling=j,x=j);return te&&en(m,O),k}for(P=i(m,P);!j.done;O++,j=f.next())j=b(P,m,O,j.value,S),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?O:j.key),u=a(j,u,O),x===null?k=j:x.sibling=j,x=j);return e&&P.forEach(function(Pe){return t(m,Pe)}),te&&en(m,O),k}function F(m,u,f,S){if(typeof f=="object"&&f!==null&&f.type===In&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case io:e:{for(var k=f.key,x=u;x!==null;){if(x.key===k){if(k=f.type,k===In){if(x.tag===7){n(m,x.sibling),u=o(x,f.props.children),u.return=m,m=u;break e}}else if(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mt&&Ys(k)===x.type){n(m,x.sibling),u=o(x,f.props),u.ref=ci(m,x,f),u.return=m,m=u;break e}n(m,x);break}else t(m,x);x=x.sibling}f.type===In?(u=sn(f.props.children,m.mode,S,f.key),u.return=m,m=u):(S=Ao(f.type,f.key,f.props,null,m.mode,S),S.ref=ci(m,u,f),S.return=m,m=S)}return r(m);case zn:e:{for(x=f.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(m,u.sibling),u=o(u,f.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=ar(f,m.mode,S),u.return=m,m=u}return r(m);case Mt:return x=f._init,F(m,u,x(f._payload),S)}if(mi(f))return z(m,u,f,S);if(oi(f))return T(m,u,f,S);go(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(m,u.sibling),u=o(u,f),u.return=m,m=u):(n(m,u),u=or(f,m.mode,S),u.return=m,m=u),r(m)):n(m,u)}return F}var qn=Hu(!0),Vu=Hu(!1),qo=Kt(null),Go=null,On=null,Nl=null;function bl(){Nl=On=Go=null}function zl(e){var t=qo.current;Z(qo),e._currentValue=t}function Lr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){Go=e,Nl=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Nl!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(Go===null)throw Error(E(308));On=e,Go.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var an=null;function Il(e){an===null?an=[e]:an.push(e)}function $u(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,Il(t)):(n.next=o.next,o.next=n),t.interleaved=n,wt(e,i)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,$&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,wt(e,n)}return o=i.interleaved,o===null?(t.next=t,Il(i)):(t.next=o.next,o.next=t),i.interleaved=t,wt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,dl(e,n)}}function Js(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,i){var o=e.updateQueue;Ot=!1;var a=o.firstBaseUpdate,r=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,p=s.next;s.next=null,r===null?a=p:r.next=p,r=s;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==r&&(l===null?y.firstBaseUpdate=p:l.next=p,y.lastBaseUpdate=s))}if(a!==null){var v=o.baseState;r=0,y=p=s=null,l=a;do{var h=l.lane,b=l.eventTime;if((i&h)===h){y!==null&&(y=y.next={eventTime:b,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var z=e,T=l;switch(h=t,b=n,T.tag){case 1:if(z=T.payload,typeof z=="function"){v=z.call(b,v,h);break e}v=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=T.payload,h=typeof z=="function"?z.call(b,v,h):z,h==null)break e;v=oe({},v,h);break e;case 2:Ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else b={eventTime:b,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(p=y=b,s=v):y=y.next=b,r|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(y===null&&(s=v),o.baseState=s,o.firstBaseUpdate=p,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do r|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);mn|=r,e.lanes=r,e.memoizedState=v}}function Zs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(E(191,o));o.call(i)}}}var Gi={},ht=Kt(Gi),Li=Kt(Gi),_i=Kt(Gi);function rn(e){if(e===Gi)throw Error(E(174));return e}function wl(e,t){switch(K(_i,t),K(Li,e),K(ht,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hr(t,e)}Z(ht),K(ht,t)}function Gn(){Z(ht),Z(Li),Z(_i)}function Gu(e){rn(_i.current);var t=rn(ht.current),n=hr(t,e.type);t!==n&&(K(Li,e),K(ht,n))}function Cl(e){Li.current===e&&(Z(ht),Z(Li))}var ne=Kt(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function Tl(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var ko=Tt.ReactCurrentDispatcher,Xa=Tt.ReactCurrentBatchConfig,pn=0,ie=null,fe=null,ye=null,Ko=!1,Ei=!1,Di=0,df=0;function ke(){throw Error(E(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Al(e,t,n,i,o,a){if(pn=a,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?gf:hf,e=n(i,o),Ei){a=0;do{if(Ei=!1,Di=0,25<=a)throw Error(E(301));a+=1,ye=fe=null,t.updateQueue=null,ko.current=vf,e=n(i,o)}while(Ei)}if(ko.current=Yo,t=fe!==null&&fe.next!==null,pn=0,ye=fe=ie=null,Ko=!1,t)throw Error(E(300));return e}function Ml(){var e=Di!==0;return Di=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=e:ye=ye.next=e,ye}function it(){if(fe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ye===null?ie.memoizedState:ye.next;if(t!==null)ye=t,fe=e;else{if(e===null)throw Error(E(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ye===null?ie.memoizedState=ye=e:ye=ye.next=e}return ye}function Fi(e,t){return typeof t=="function"?t(e):t}function er(e){var t=it(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var i=fe,o=i.baseQueue,a=n.pending;if(a!==null){if(o!==null){var r=o.next;o.next=a.next,a.next=r}i.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,i=i.baseState;var l=r=null,s=null,p=a;do{var y=p.lane;if((pn&y)===y)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(l=s=v,r=i):s=s.next=v,ie.lanes|=y,mn|=y}p=p.next}while(p!==null&&p!==a);s===null?r=i:s.next=l,ut(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseState=r,t.baseQueue=s,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ie.lanes|=a,mn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tr(e){var t=it(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var r=o=o.next;do a=e(a,r.action),r=r.next;while(r!==o);ut(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Wu(){}function Qu(e,t){var n=ie,i=it(),o=t(),a=!ut(i.memoizedState,o);if(a&&(i.memoizedState=o,Be=!0),i=i.queue,Ol(Ju.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Bi(9,Yu.bind(null,n,i,o,t),void 0,null),Se===null)throw Error(E(349));pn&30||Ku(n,t,o)}return o}function Ku(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yu(e,t,n,i){t.value=n,t.getSnapshot=i,Zu(t)&&Xu(e)}function Ju(e,t,n){return n(function(){Zu(t)&&Xu(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Xu(e){var t=wt(e,1);t!==null&&ct(t,e,1,-1)}function Xs(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,ie,e),[t.memoizedState,e]}function Bi(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function ed(){return it().memoizedState}function wo(e,t,n,i){var o=mt();ie.flags|=e,o.memoizedState=Bi(1|t,n,void 0,i===void 0?null:i)}function ca(e,t,n,i){var o=it();i=i===void 0?null:i;var a=void 0;if(fe!==null){var r=fe.memoizedState;if(a=r.destroy,i!==null&&Pl(i,r.deps)){o.memoizedState=Bi(t,n,a,i);return}}ie.flags|=e,o.memoizedState=Bi(1|t,n,a,i)}function ec(e,t){return wo(8390656,8,e,t)}function Ol(e,t){return ca(2048,8,e,t)}function td(e,t){return ca(4,2,e,t)}function nd(e,t){return ca(4,4,e,t)}function id(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,n){return n=n!=null?n.concat([e]):null,ca(4,4,id.bind(null,t,e),n)}function Rl(){}function ad(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Pl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function rd(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&Pl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function ld(e,t,n){return pn&21?(ut(n,t)||(n=pu(),ie.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function pf(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var i=Xa.transition;Xa.transition={};try{e(!1),t()}finally{W=n,Xa.transition=i}}function sd(){return it().memoizedState}function mf(e,t,n){var i=$t(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cd(e))ud(t,n);else if(n=$u(e,t,n,i),n!==null){var o=Re();ct(n,e,i,o),dd(n,t,i)}}function ff(e,t,n){var i=$t(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cd(e))ud(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,l=a(r,n);if(o.hasEagerState=!0,o.eagerState=l,ut(l,r)){var s=t.interleaved;s===null?(o.next=o,Il(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=$u(e,t,o,i),n!==null&&(o=Re(),ct(n,e,i,o),dd(n,t,i))}}function cd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function ud(e,t){Ei=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dd(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,dl(e,n)}}var Yo={readContext:nt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},gf={readContext:nt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=mt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=mf.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:Xs,useDebugValue:Rl,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=Xs(!1),t=e[0];return e=pf.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ie,o=mt();if(te){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));pn&30||Ku(i,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,ec(Ju.bind(null,i,a,e),[e]),i.flags|=2048,Bi(9,Yu.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=mt(),t=Se.identifierPrefix;if(te){var n=bt,i=Nt;n=(i&~(1<<32-st(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hf={readContext:nt,useCallback:ad,useContext:nt,useEffect:Ol,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:rd,useReducer:er,useRef:ed,useState:function(){return er(Fi)},useDebugValue:Rl,useDeferredValue:function(e){var t=it();return ld(t,fe.memoizedState,e)},useTransition:function(){var e=er(Fi)[0],t=it().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Qu,useId:sd,unstable_isNewReconciler:!1},vf={readContext:nt,useCallback:ad,useContext:nt,useEffect:Ol,useImperativeHandle:od,useInsertionEffect:td,useLayoutEffect:nd,useMemo:rd,useReducer:tr,useRef:ed,useState:function(){return tr(Fi)},useDebugValue:Rl,useDeferredValue:function(e){var t=it();return fe===null?t.memoizedState=e:ld(t,fe.memoizedState,e)},useTransition:function(){var e=tr(Fi)[0],t=it().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Qu,useId:sd,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _r(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Re(),o=$t(e),a=zt(i,o);a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,o),t!==null&&(ct(t,e,o,i),Io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Re(),o=$t(e),a=zt(i,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,o),t!==null&&(ct(t,e,o,i),Io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),i=$t(e),o=zt(n,i);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,i),t!==null&&(ct(t,e,i,n),Io(t,e,i))}};function tc(e,t,n,i,o,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Mi(n,i)||!Mi(o,a):!0}function pd(e,t,n){var i=!1,o=Wt,a=t.contextType;return typeof a=="object"&&a!==null?a=nt(a):(o=He(t)?un:Te.current,i=t.contextTypes,a=(i=i!=null)?Vn(e,o):Wt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function nc(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function Dr(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},kl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=nt(a):(a=He(t)?un:Te.current,o.context=Vn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_r(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ua.enqueueReplaceState(o,o.state,null),Wo(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",i=t;do n+=$p(i),i=i.return;while(i);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function nr(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fr(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yf=typeof WeakMap=="function"?WeakMap:Map;function md(e,t,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Zo||(Zo=!0,Kr=i),Fr(e,t)},n}function fd(e,t,n){n=zt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){Fr(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Fr(e,t),typeof i!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function ic(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new yf;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=Mf.bind(null,e,t,n),t.then(e,e))}function oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=zt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var Sf=Tt.ReactCurrentOwner,Be=!1;function Oe(e,t,n,i){t.child=e===null?Vu(t,null,n,i):qn(t,e.child,n,i)}function rc(e,t,n,i,o){n=n.render;var a=t.ref;return Bn(t,o),i=Al(e,t,n,i,a,o),n=Ml(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(te&&n&&Sl(t),t.flags|=1,Oe(e,t,i,o),t.child)}function lc(e,t,n,i,o){if(e===null){var a=n.type;return typeof a=="function"&&!Hl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,gd(e,t,a,i,o)):(e=Ao(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(r,i)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=qt(a,i),e.ref=t.ref,e.return=t,t.child=e}function gd(e,t,n,i,o){if(e!==null){var a=e.memoizedProps;if(Mi(a,i)&&e.ref===t.ref)if(Be=!1,t.pendingProps=i=a,(e.lanes&o)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return Br(e,t,n,i,o)}function hd(e,t,n){var i=t.pendingProps,o=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(jn,qe),qe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(jn,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,K(jn,qe),qe|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,K(jn,qe),qe|=i;return Oe(e,t,o,n),t.child}function vd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Br(e,t,n,i,o){var a=He(n)?un:Te.current;return a=Vn(t,a),Bn(t,o),n=Al(e,t,n,i,a,o),i=Ml(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(te&&i&&Sl(t),t.flags|=1,Oe(e,t,n,o),t.child)}function sc(e,t,n,i,o){if(He(n)){var a=!0;Ho(t)}else a=!1;if(Bn(t,o),t.stateNode===null)Co(e,t),pd(t,n,i),Dr(t,n,i,o),i=!0;else if(e===null){var r=t.stateNode,l=t.memoizedProps;r.props=l;var s=r.context,p=n.contextType;typeof p=="object"&&p!==null?p=nt(p):(p=He(n)?un:Te.current,p=Vn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function";v||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==i||s!==p)&&nc(t,r,i,p),Ot=!1;var h=t.memoizedState;r.state=h,Wo(t,i,r,o),s=t.memoizedState,l!==i||h!==s||Ue.current||Ot?(typeof y=="function"&&(_r(t,n,y,i),s=t.memoizedState),(l=Ot||tc(t,n,l,i,h,s,p))?(v||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=s),r.props=i,r.state=s,r.context=p,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,qu(e,t),l=t.memoizedProps,p=t.type===t.elementType?l:at(t.type,l),r.props=p,v=t.pendingProps,h=r.context,s=n.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=He(n)?un:Te.current,s=Vn(t,s));var b=n.getDerivedStateFromProps;(y=typeof b=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==v||h!==s)&&nc(t,r,i,s),Ot=!1,h=t.memoizedState,r.state=h,Wo(t,i,r,o);var z=t.memoizedState;l!==v||h!==z||Ue.current||Ot?(typeof b=="function"&&(_r(t,n,b,i),z=t.memoizedState),(p=Ot||tc(t,n,p,i,h,z,s)||!1)?(y||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,z,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,z,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=z),r.props=i,r.state=z,r.context=s,i=p):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return Ur(e,t,n,i,a,o)}function Ur(e,t,n,i,o,a){vd(e,t);var r=(t.flags&128)!==0;if(!i&&!r)return o&&Ws(t,n,!1),Ct(e,t,a);i=t.stateNode,Sf.current=t;var l=r&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&r?(t.child=qn(t,e.child,null,a),t.child=qn(t,null,l,a)):Oe(e,t,l,a),t.memoizedState=i.state,o&&Ws(t,n,!0),t.child}function yd(e){var t=e.stateNode;t.pendingContext?Gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gs(e,t.context,!1),wl(e,t.containerInfo)}function cc(e,t,n,i,o){return $n(),El(o),t.flags|=256,Oe(e,t,n,i),t.child}var Hr={dehydrated:null,treeContext:null,retryLane:0};function Vr(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sd(e,t,n){var i=t.pendingProps,o=ne.current,a=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(ne,o&1),e===null)return jr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=i.children,e=i.fallback,a?(i=t.mode,a=t.child,r={mode:"hidden",children:r},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=r):a=ma(r,i,0,null),e=sn(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Vr(n),t.memoizedState=Hr,e):jl(t,r));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return xf(e,t,r,i,l,o,n);if(a){a=i.fallback,r=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:i.children};return!(r&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=s,t.deletions=null):(i=qt(o,s),i.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=qt(l,a):(a=sn(a,r,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,r=e.child.memoizedState,r=r===null?Vr(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},a.memoizedState=r,a.childLanes=e.childLanes&~n,t.memoizedState=Hr,i}return a=e.child,e=a.sibling,i=qt(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function jl(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,i){return i!==null&&El(i),qn(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xf(e,t,n,i,o,a,r){if(n)return t.flags&256?(t.flags&=-257,i=nr(Error(E(422))),ho(e,t,r,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,o=t.mode,i=ma({mode:"visible",children:i.children},o,0,null),a=sn(a,o,r,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&qn(t,e.child,null,r),t.child.memoizedState=Vr(r),t.memoizedState=Hr,a);if(!(t.mode&1))return ho(e,t,r,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(E(419)),i=nr(a,i,void 0),ho(e,t,r,i)}if(l=(r&e.childLanes)!==0,Be||l){if(i=Se,i!==null){switch(r&-r){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|r)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,wt(e,o),ct(i,e,o,-1))}return Ul(),i=nr(Error(E(421))),ho(e,t,r,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Of.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Ge=Ut(o.nextSibling),We=t,te=!0,lt=null,e!==null&&(Ze[Xe++]=Nt,Ze[Xe++]=bt,Ze[Xe++]=dn,Nt=e.id,bt=e.overflow,dn=t),t=jl(t,i.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Lr(e.return,t,n)}function ir(e,t,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=o)}function xd(e,t,n){var i=t.pendingProps,o=i.revealOrder,a=i.tail;if(Oe(e,t,i.children,n),i=ne.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(K(ne,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ir(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ir(t,!0,n,null,a);break;case"together":ir(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Co(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ef(e,t,n){switch(t.tag){case 3:yd(t),$n();break;case 5:Gu(t);break;case 1:He(t.type)&&Ho(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;K(qo,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?Sd(e,t,n):(K(ne,ne.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return xd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(ne,ne.current),i)break;return null;case 22:case 23:return t.lanes=0,hd(e,t,n)}return Ct(e,t,n)}var Ed,$r,Nd,bd;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$r=function(){};Nd=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,rn(ht.current);var a=null;switch(n){case"input":o=pr(e,o),i=pr(e,i),a=[];break;case"select":o=oe({},o,{value:void 0}),i=oe({},i,{value:void 0}),a=[];break;case"textarea":o=gr(e,o),i=gr(e,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Bo)}vr(n,i);var r;n=null;for(p in o)if(!i.hasOwnProperty(p)&&o.hasOwnProperty(p)&&o[p]!=null)if(p==="style"){var l=o[p];for(r in l)l.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ii.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in i){var s=i[p];if(l=o!=null?o[p]:void 0,i.hasOwnProperty(p)&&s!==l&&(s!=null||l!=null))if(p==="style")if(l){for(r in l)!l.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in s)s.hasOwnProperty(r)&&l[r]!==s[r]&&(n||(n={}),n[r]=s[r])}else n||(a||(a=[]),a.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&J("scroll",e),a||l===s||(a=[])):(a=a||[]).push(p,s))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};bd=function(e,t,n,i){n!==i&&(t.flags|=4)};function ui(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Nf(e,t,n){var i=t.pendingProps;switch(xl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return He(t.type)&&Uo(),we(t),null;case 3:return i=t.stateNode,Gn(),Z(Ue),Z(Te),Tl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Zr(lt),lt=null))),$r(e,t),we(t),null;case 5:Cl(t);var o=rn(_i.current);if(n=t.type,e!==null&&t.stateNode!=null)Nd(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return we(t),null}if(e=rn(ht.current),fo(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[ft]=t,i[ji]=a,e=(t.mode&1)!==0,n){case"dialog":J("cancel",i),J("close",i);break;case"iframe":case"object":case"embed":J("load",i);break;case"video":case"audio":for(o=0;o<gi.length;o++)J(gi[o],i);break;case"source":J("error",i);break;case"img":case"image":case"link":J("error",i),J("load",i);break;case"details":J("toggle",i);break;case"input":Ss(i,a),J("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},J("invalid",i);break;case"textarea":Es(i,a),J("invalid",i)}vr(n,a),o=null;for(var r in a)if(a.hasOwnProperty(r)){var l=a[r];r==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&mo(i.textContent,l,e),o=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&mo(i.textContent,l,e),o=["children",""+l]):Ii.hasOwnProperty(r)&&l!=null&&r==="onScroll"&&J("scroll",i)}switch(n){case"input":oo(i),xs(i,a,!0);break;case"textarea":oo(i),Ns(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Bo)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{r=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=r.createElement(n,{is:i.is}):(e=r.createElement(n),n==="select"&&(r=e,i.multiple?r.multiple=!0:i.size&&(r.size=i.size))):e=r.createElementNS(e,n),e[ft]=t,e[ji]=i,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(r=yr(n,i),n){case"dialog":J("cancel",e),J("close",e),o=i;break;case"iframe":case"object":case"embed":J("load",e),o=i;break;case"video":case"audio":for(o=0;o<gi.length;o++)J(gi[o],e);o=i;break;case"source":J("error",e),o=i;break;case"img":case"image":case"link":J("error",e),J("load",e),o=i;break;case"details":J("toggle",e),o=i;break;case"input":Ss(e,i),o=pr(e,i),J("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=oe({},i,{value:void 0}),J("invalid",e);break;case"textarea":Es(e,i),o=gr(e,i),J("invalid",e);break;default:o=i}vr(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?eu(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Zc(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ki(e,s):typeof s=="number"&&ki(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ii.hasOwnProperty(a)?s!=null&&a==="onScroll"&&J("scroll",e):s!=null&&al(e,a,s,r))}switch(n){case"input":oo(e),xs(e,i,!1);break;case"textarea":oo(e),Ns(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Gt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Ln(e,!!i.multiple,a,!1):i.defaultValue!=null&&Ln(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)bd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(n=rn(_i.current),rn(ht.current),fo(t)){if(i=t.stateNode,n=t.memoizedProps,i[ft]=t,(a=i.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:mo(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ft]=t,t.stateNode=i}return we(t),null;case 13:if(Z(ne),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ge!==null&&t.mode&1&&!(t.flags&128))Uu(),$n(),t.flags|=98560,a=!1;else if(a=fo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[ft]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),a=!1}else lt!==null&&(Zr(lt),lt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ge===0&&(ge=3):Ul())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Gn(),$r(e,t),e===null&&Oi(t.stateNode.containerInfo),we(t),null;case 10:return zl(t.type._context),we(t),null;case 17:return He(t.type)&&Uo(),we(t),null;case 19:if(Z(ne),a=t.memoizedState,a===null)return we(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)ui(a,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Qo(e),r!==null){for(t.flags|=128,ui(a,!1),i=r.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,r=a.alternate,r===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,a.type=r.type,e=r.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&ue()>Qn&&(t.flags|=128,i=!0,ui(a,!1),t.lanes=4194304)}else{if(!i)if(e=Qo(r),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ui(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!te)return we(t),null}else 2*ue()-a.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,i=!0,ui(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(n=a.last,n!==null?n.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ue(),t.sibling=null,n=ne.current,K(ne,i?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Bl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qe&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function bf(e,t){switch(xl(t),t.tag){case 1:return He(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),Z(Ue),Z(Te),Tl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(Z(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ne),null;case 4:return Gn(),null;case 10:return zl(t.type._context),null;case 22:case 23:return Bl(),null;case 24:return null;default:return null}}var vo=!1,Ce=!1,zf=typeof WeakSet=="function"?WeakSet:Set,M=null;function Rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){le(e,t,i)}else n.current=null}function qr(e,t,n){try{n()}catch(i){le(e,t,i)}}var dc=!1;function If(e,t){if(Cr=_o,e=Cu(),yl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,l=-1,s=-1,p=0,y=0,v=e,h=null;t:for(;;){for(var b;v!==n||o!==0&&v.nodeType!==3||(l=r+o),v!==a||i!==0&&v.nodeType!==3||(s=r+i),v.nodeType===3&&(r+=v.nodeValue.length),(b=v.firstChild)!==null;)h=v,v=b;for(;;){if(v===e)break t;if(h===n&&++p===o&&(l=r),h===a&&++y===i&&(s=r),(b=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=b}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tr={focusedElem:e,selectionRange:n},_o=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var z=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var T=z.memoizedProps,F=z.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?T:at(t.type,T),F);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){le(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return z=dc,dc=!1,z}function Ni(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&qr(t,n,a)}o=o.next}while(o!==i)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Gr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[ji],delete t[Mr],delete t[lf],delete t[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(i!==4&&(e=e.child,e!==null))for(Wr(e,t,n),e=e.sibling;e!==null;)Wr(e,t,n),e=e.sibling}function Qr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Qr(e,t,n),e=e.sibling;e!==null;)Qr(e,t,n),e=e.sibling}var Ne=null,rt=!1;function At(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ia,n)}catch{}switch(n.tag){case 5:Ce||Rn(n,t);case 6:var i=Ne,o=rt;Ne=null,At(e,t,n),Ne=i,rt=o,Ne!==null&&(rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(rt?(e=Ne,n=n.stateNode,e.nodeType===8?Ya(e.parentNode,n):e.nodeType===1&&Ya(e,n),Pi(e)):Ya(Ne,n.stateNode));break;case 4:i=Ne,o=rt,Ne=n.stateNode.containerInfo,rt=!0,At(e,t,n),Ne=i,rt=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,r=a.destroy;a=a.tag,r!==void 0&&(a&2||a&4)&&qr(n,t,r),o=o.next}while(o!==i)}At(e,t,n);break;case 1:if(!Ce&&(Rn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){le(n,t,l)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Ce=(i=Ce)||n.memoizedState!==null,At(e,t,n),Ce=i):At(e,t,n);break;default:At(e,t,n)}}function mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zf),t.forEach(function(i){var o=Rf.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var a=e,r=t,l=r;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,rt=!1;break e;case 3:Ne=l.stateNode.containerInfo,rt=!0;break e;case 4:Ne=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(Ne===null)throw Error(E(160));kd(a,r,o),Ne=null,rt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(p){le(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wd(t,e),t=t.sibling}function wd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),i&4){try{Ni(3,e,e.return),da(3,e)}catch(T){le(e,e.return,T)}try{Ni(5,e,e.return)}catch(T){le(e,e.return,T)}}break;case 1:ot(t,e),pt(e),i&512&&n!==null&&Rn(n,n.return);break;case 5:if(ot(t,e),pt(e),i&512&&n!==null&&Rn(n,n.return),e.flags&32){var o=e.stateNode;try{ki(o,"")}catch(T){le(e,e.return,T)}}if(i&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,r=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Kc(o,a),yr(l,r);var p=yr(l,a);for(r=0;r<s.length;r+=2){var y=s[r],v=s[r+1];y==="style"?eu(o,v):y==="dangerouslySetInnerHTML"?Zc(o,v):y==="children"?ki(o,v):al(o,y,v,p)}switch(l){case"input":mr(o,a);break;case"textarea":Yc(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?Ln(o,!!a.multiple,b,!1):h!==!!a.multiple&&(a.defaultValue!=null?Ln(o,!!a.multiple,a.defaultValue,!0):Ln(o,!!a.multiple,a.multiple?[]:"",!1))}o[ji]=a}catch(T){le(e,e.return,T)}}break;case 6:if(ot(t,e),pt(e),i&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(T){le(e,e.return,T)}}break;case 3:if(ot(t,e),pt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(T){le(e,e.return,T)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Dl=ue())),i&4&&mc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(p=Ce)||y,ot(t,e),Ce=p):ot(t,e),pt(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(M=e,y=e.child;y!==null;){for(v=M=y;M!==null;){switch(h=M,b=h.child,h.tag){case 0:case 11:case 14:case 15:Ni(4,h,h.return);break;case 1:Rn(h,h.return);var z=h.stateNode;if(typeof z.componentWillUnmount=="function"){i=h,n=h.return;try{t=i,z.props=t.memoizedProps,z.state=t.memoizedState,z.componentWillUnmount()}catch(T){le(i,n,T)}}break;case 5:Rn(h,h.return);break;case 22:if(h.memoizedState!==null){gc(v);continue}}b!==null?(b.return=h,M=b):gc(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{o=v.stateNode,p?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=v.stateNode,s=v.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Xc("display",r))}catch(T){le(e,e.return,T)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(T){le(e,e.return,T)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),pt(e),i&4&&mc(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Id(n)){var i=n;break e}n=n.return}throw Error(E(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(ki(o,""),i.flags&=-33);var a=pc(e);Qr(e,a,o);break;case 3:case 4:var r=i.stateNode.containerInfo,l=pc(e);Wr(e,l,r);break;default:throw Error(E(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){M=e,Cd(e)}function Cd(e,t,n){for(var i=(e.mode&1)!==0;M!==null;){var o=M,a=o.child;if(o.tag===22&&i){var r=o.memoizedState!==null||vo;if(!r){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ce;l=vo;var p=Ce;if(vo=r,(Ce=s)&&!p)for(M=o;M!==null;)r=M,s=r.child,r.tag===22&&r.memoizedState!==null?hc(o):s!==null?(s.return=r,M=s):hc(o);for(;a!==null;)M=a,Cd(a),a=a.sibling;M=o,vo=l,Ce=p}fc(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,M=a):fc(e)}}function fc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||da(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ce)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zs(t,a,i);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zs(t,r,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Pi(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||t.flags&512&&Gr(t)}catch(h){le(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function gc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function hc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(s){le(t,n,s)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(s){le(t,o,s)}}var a=t.return;try{Gr(t)}catch(s){le(t,a,s)}break;case 5:var r=t.return;try{Gr(t)}catch(s){le(t,r,s)}}}catch(s){le(t,t.return,s)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var wf=Math.ceil,Jo=Tt.ReactCurrentDispatcher,Ll=Tt.ReactCurrentOwner,tt=Tt.ReactCurrentBatchConfig,$=0,Se=null,de=null,be=0,qe=0,jn=Kt(0),ge=0,Ui=null,mn=0,pa=0,_l=0,bi=null,Fe=null,Dl=0,Qn=1/0,xt=null,Zo=!1,Kr=null,Vt=null,yo=!1,_t=null,Xo=0,zi=0,Yr=null,To=-1,Po=0;function Re(){return $&6?ue():To!==-1?To:To=ue()}function $t(e){return e.mode&1?$&2&&be!==0?be&-be:uf.transition!==null?(Po===0&&(Po=pu()),Po):(e=W,e!==0||(e=window.event,e=e===void 0?16:Su(e.type)),e):1}function ct(e,t,n,i){if(50<zi)throw zi=0,Yr=null,Error(E(185));Vi(e,n,i),(!($&2)||e!==Se)&&(e===Se&&(!($&2)&&(pa|=n),ge===4&&jt(e,be)),Ve(e,i),n===1&&$===0&&!(t.mode&1)&&(Qn=ue()+500,sa&&Yt()))}function Ve(e,t){var n=e.callbackNode;cm(e,t);var i=Lo(e,e===Se?be:0);if(i===0)n!==null&&Is(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Is(n),t===1)e.tag===0?cf(vc.bind(null,e)):Du(vc.bind(null,e)),af(function(){!($&6)&&Yt()}),n=null;else{switch(mu(i)){case 1:n=ul;break;case 4:n=uu;break;case 16:n=jo;break;case 536870912:n=du;break;default:n=jo}n=Ld(n,Td.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Td(e,t){if(To=-1,Po=0,$&6)throw Error(E(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var i=Lo(e,e===Se?be:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ea(e,i);else{t=i;var o=$;$|=2;var a=Ad();(Se!==e||be!==t)&&(xt=null,Qn=ue()+500,ln(e,t));do try{Pf();break}catch(l){Pd(e,l)}while(!0);bl(),Jo.current=a,$=o,de!==null?t=0:(Se=null,be=0,t=ge)}if(t!==0){if(t===2&&(o=br(e),o!==0&&(i=o,t=Jr(e,o))),t===1)throw n=Ui,ln(e,0),jt(e,i),Ve(e,ue()),n;if(t===6)jt(e,i);else{if(o=e.current.alternate,!(i&30)&&!Cf(o)&&(t=ea(e,i),t===2&&(a=br(e),a!==0&&(i=a,t=Jr(e,a))),t===1))throw n=Ui,ln(e,0),jt(e,i),Ve(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:tn(e,Fe,xt);break;case 3:if(jt(e,i),(i&130023424)===i&&(t=Dl+500-ue(),10<t)){if(Lo(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ar(tn.bind(null,e,Fe,xt),t);break}tn(e,Fe,xt);break;case 4:if(jt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var r=31-st(i);a=1<<r,r=t[r],r>o&&(o=r),i&=~a}if(i=o,i=ue()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wf(i/1960))-i,10<i){e.timeoutHandle=Ar(tn.bind(null,e,Fe,xt),i);break}tn(e,Fe,xt);break;case 5:tn(e,Fe,xt);break;default:throw Error(E(329))}}}return Ve(e,ue()),e.callbackNode===n?Td.bind(null,e):null}function Jr(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=ea(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Zr(t)),e}function Zr(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],a=o.getSnapshot;o=o.value;try{if(!ut(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~_l,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),i=1<<n;e[n]=-1,t&=~i}}function vc(e){if($&6)throw Error(E(327));Un();var t=Lo(e,0);if(!(t&1))return Ve(e,ue()),null;var n=ea(e,t);if(e.tag!==0&&n===2){var i=br(e);i!==0&&(t=i,n=Jr(e,i))}if(n===1)throw n=Ui,ln(e,0),jt(e,t),Ve(e,ue()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Fe,xt),Ve(e,ue()),null}function Fl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Qn=ue()+500,sa&&Yt())}}function fn(e){_t!==null&&_t.tag===0&&!($&6)&&Un();var t=$;$|=1;var n=tt.transition,i=W;try{if(tt.transition=null,W=1,e)return e()}finally{W=i,tt.transition=n,$=t,!($&6)&&Yt()}}function Bl(){qe=jn.current,Z(jn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,of(n)),de!==null)for(n=de.return;n!==null;){var i=n;switch(xl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uo();break;case 3:Gn(),Z(Ue),Z(Te),Tl();break;case 5:Cl(i);break;case 4:Gn();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:zl(i.type._context);break;case 22:case 23:Bl()}n=n.return}if(Se=e,de=e=qt(e.current,null),be=qe=t,ge=0,Ui=null,_l=pa=mn=0,Fe=bi=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,a=n.pending;if(a!==null){var r=a.next;a.next=o,i.next=r}n.pending=i}an=null}return e}function Pd(e,t){do{var n=de;try{if(bl(),ko.current=Yo,Ko){for(var i=ie.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ko=!1}if(pn=0,ye=fe=ie=null,Ei=!1,Di=0,Ll.current=null,n===null||n.return===null){ge=1,Ui=t,de=null;break}e:{var a=e,r=n.return,l=n,s=t;if(t=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,y=l,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var b=oc(r);if(b!==null){b.flags&=-257,ac(b,r,l,a,t),b.mode&1&&ic(a,p,t),t=b,s=p;var z=t.updateQueue;if(z===null){var T=new Set;T.add(s),t.updateQueue=T}else z.add(s);break e}else{if(!(t&1)){ic(a,p,t),Ul();break e}s=Error(E(426))}}else if(te&&l.mode&1){var F=oc(r);if(F!==null){!(F.flags&65536)&&(F.flags|=256),ac(F,r,l,a,t),El(Wn(s,l));break e}}a=s=Wn(s,l),ge!==4&&(ge=2),bi===null?bi=[a]:bi.push(a),a=r;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=md(a,s,t);Js(a,m);break e;case 1:l=s;var u=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Vt===null||!Vt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=fd(a,l,t);Js(a,S);break e}}a=a.return}while(a!==null)}Od(n)}catch(k){t=k,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Ad(){var e=Jo.current;return Jo.current=Yo,e===null?Yo:e}function Ul(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||!(mn&268435455)&&!(pa&268435455)||jt(Se,be)}function ea(e,t){var n=$;$|=2;var i=Ad();(Se!==e||be!==t)&&(xt=null,ln(e,t));do try{Tf();break}catch(o){Pd(e,o)}while(!0);if(bl(),$=n,Jo.current=i,de!==null)throw Error(E(261));return Se=null,be=0,ge}function Tf(){for(;de!==null;)Md(de)}function Pf(){for(;de!==null&&!em();)Md(de)}function Md(e){var t=jd(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Od(e):de=t,Ll.current=null}function Od(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bf(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,de=null;return}}else if(n=Nf(n,t,qe),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ge===0&&(ge=5)}function tn(e,t,n){var i=W,o=tt.transition;try{tt.transition=null,W=1,Af(e,t,n,i)}finally{tt.transition=o,W=i}return null}function Af(e,t,n,i){do Un();while(_t!==null);if($&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(um(e,a),e===Se&&(de=Se=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,Ld(jo,function(){return Un(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=tt.transition,tt.transition=null;var r=W;W=1;var l=$;$|=4,Ll.current=null,If(e,n),wd(n,e),Ym(Tr),_o=!!Cr,Tr=Cr=null,e.current=n,kf(n),tm(),$=l,W=r,tt.transition=a}else e.current=n;if(yo&&(yo=!1,_t=e,Xo=o),a=e.pendingLanes,a===0&&(Vt=null),om(n.stateNode),Ve(e,ue()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Zo)throw Zo=!1,e=Kr,Kr=null,e;return Xo&1&&e.tag!==0&&Un(),a=e.pendingLanes,a&1?e===Yr?zi++:(zi=0,Yr=e):zi=0,Yt(),null}function Un(){if(_t!==null){var e=mu(Xo),t=tt.transition,n=W;try{if(tt.transition=null,W=16>e?16:e,_t===null)var i=!1;else{if(e=_t,_t=null,Xo=0,$&6)throw Error(E(331));var o=$;for($|=4,M=e.current;M!==null;){var a=M,r=a.child;if(M.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var p=l[s];for(M=p;M!==null;){var y=M;switch(y.tag){case 0:case 11:case 15:Ni(8,y,a)}var v=y.child;if(v!==null)v.return=y,M=v;else for(;M!==null;){y=M;var h=y.sibling,b=y.return;if(zd(y),y===p){M=null;break}if(h!==null){h.return=b,M=h;break}M=b}}}var z=a.alternate;if(z!==null){var T=z.child;if(T!==null){z.child=null;do{var F=T.sibling;T.sibling=null,T=F}while(T!==null)}}M=a}}if(a.subtreeFlags&2064&&r!==null)r.return=a,M=r;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ni(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}var u=e.current;for(M=u;M!==null;){r=M;var f=r.child;if(r.subtreeFlags&2064&&f!==null)f.return=r,M=f;else e:for(r=u;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:da(9,l)}}catch(k){le(l,l.return,k)}if(l===r){M=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,M=S;break e}M=l.return}}if($=o,Yt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ia,e)}catch{}i=!0}return i}finally{W=n,tt.transition=t}}return!1}function yc(e,t,n){t=Wn(n,t),t=md(e,t,1),e=Ht(e,t,1),t=Re(),e!==null&&(Vi(e,1,t),Ve(e,t))}function le(e,t,n){if(e.tag===3)yc(e,e,n);else for(;t!==null;){if(t.tag===3){yc(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vt===null||!Vt.has(i))){e=Wn(n,e),e=fd(t,e,1),t=Ht(t,e,1),e=Re(),t!==null&&(Vi(t,1,e),Ve(t,e));break}}t=t.return}}function Mf(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(be&n)===n&&(ge===4||ge===3&&(be&130023424)===be&&500>ue()-Dl?ln(e,0):_l|=n),Ve(e,t)}function Rd(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=Re();e=wt(e,t),e!==null&&(Vi(e,t,n),Ve(e,n))}function Of(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Rf(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),Rd(e,n)}var jd;jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,Ef(e,t,n);Be=!!(e.flags&131072)}else Be=!1,te&&t.flags&1048576&&Fu(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Co(e,t),e=t.pendingProps;var o=Vn(t,Te.current);Bn(t,n),o=Al(null,t,i,e,o,n);var a=Ml();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(i)?(a=!0,Ho(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,kl(t),o.updater=ua,t.stateNode=o,o._reactInternals=t,Dr(t,i,e,n),t=Ur(null,t,i,!0,a,n)):(t.tag=0,te&&a&&Sl(t),Oe(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Co(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Lf(i),e=at(i,e),o){case 0:t=Br(null,t,i,e,n);break e;case 1:t=sc(null,t,i,e,n);break e;case 11:t=rc(null,t,i,e,n);break e;case 14:t=lc(null,t,i,at(i.type,e),n);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),Br(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),sc(e,t,i,o,n);case 3:e:{if(yd(t),e===null)throw Error(E(387));i=t.pendingProps,a=t.memoizedState,o=a.element,qu(e,t),Wo(t,i,null,n);var r=t.memoizedState;if(i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Wn(Error(E(423)),t),t=cc(e,t,i,n,o);break e}else if(i!==o){o=Wn(Error(E(424)),t),t=cc(e,t,i,n,o);break e}else for(Ge=Ut(t.stateNode.containerInfo.firstChild),We=t,te=!0,lt=null,n=Vu(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),i===o){t=Ct(e,t,n);break e}Oe(e,t,i,n)}t=t.child}return t;case 5:return Gu(t),e===null&&jr(t),i=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,r=o.children,Pr(i,o)?r=null:a!==null&&Pr(i,a)&&(t.flags|=32),vd(e,t),Oe(e,t,r,n),t.child;case 6:return e===null&&jr(t),null;case 13:return Sd(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=qn(t,null,i,n):Oe(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),rc(e,t,i,o,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,a=t.memoizedProps,r=o.value,K(qo,i._currentValue),i._currentValue=r,a!==null)if(ut(a.value,r)){if(a.children===o.children&&!Ue.current){t=Ct(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){r=a.child;for(var s=l.firstContext;s!==null;){if(s.context===i){if(a.tag===1){s=zt(-1,n&-n),s.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?s.next=s:(s.next=y.next,y.next=s),p.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Lr(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)r=a.type===t.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(E(341));r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Lr(r,n,t),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}Oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Bn(t,n),o=nt(o),i=i(o),t.flags|=1,Oe(e,t,i,n),t.child;case 14:return i=t.type,o=at(i,t.pendingProps),o=at(i.type,o),lc(e,t,i,o,n);case 15:return gd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),Co(e,t),t.tag=1,He(i)?(e=!0,Ho(t)):e=!1,Bn(t,n),pd(t,i,o),Dr(t,i,o,n),Ur(null,t,i,!0,e,n);case 19:return xd(e,t,n);case 22:return hd(e,t,n)}throw Error(E(156,t.tag))};function Ld(e,t){return cu(e,t)}function jf(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,i){return new jf(e,t,n,i)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ll)return 11;if(e===sl)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,i,o,a){var r=2;if(i=e,typeof e=="function")Hl(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case In:return sn(n.children,o,a,t);case rl:r=8,o|=8;break;case sr:return e=et(12,n,t,o|2),e.elementType=sr,e.lanes=a,e;case cr:return e=et(13,n,t,o),e.elementType=cr,e.lanes=a,e;case ur:return e=et(19,n,t,o),e.elementType=ur,e.lanes=a,e;case Gc:return ma(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $c:r=10;break e;case qc:r=9;break e;case ll:r=11;break e;case sl:r=14;break e;case Mt:r=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=et(r,n,t,o),t.elementType=e,t.type=i,t.lanes=a,t}function sn(e,t,n,i){return e=et(7,e,i,t),e.lanes=n,e}function ma(e,t,n,i){return e=et(22,e,i,t),e.elementType=Gc,e.lanes=n,e.stateNode={isHidden:!1},e}function or(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ar(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fa(0),this.expirationTimes=Fa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fa(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Vl(e,t,n,i,o,a,r,l,s){return e=new _f(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(a),e}function Df(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function _d(e){if(!e)return Wt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(He(n))return _u(e,n,t)}return t}function Dd(e,t,n,i,o,a,r,l,s){return e=Vl(n,i,!0,e,o,a,r,l,s),e.context=_d(null),n=e.current,i=Re(),o=$t(n),a=zt(i,o),a.callback=t??null,Ht(n,a,o),e.current.lanes=o,Vi(e,o,i),Ve(e,i),e}function fa(e,t,n,i){var o=t.current,a=Re(),r=$t(o);return n=_d(n),t.context===null?t.context=n:t.pendingContext=n,t=zt(a,r),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Ht(o,t,r),e!==null&&(ct(e,o,r,a),Io(e,o,r)),r}function ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $l(e,t){Sc(e,t),(e=e.alternate)&&Sc(e,t)}function Ff(){return null}var Fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ql(e){this._internalRoot=e}ga.prototype.render=ql.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));fa(e,t,null,null)};ga.prototype.unmount=ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){fa(null,e,null,null)}),t[kt]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=hu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&yu(e)}};function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function Bf(e,t,n,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var p=ta(r);a.call(p)}}var r=Dd(t,i,e,0,null,!1,!1,"",xc);return e._reactRootContainer=r,e[kt]=r.current,Oi(e.nodeType===8?e.parentNode:e),fn(),r}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var l=i;i=function(){var p=ta(s);l.call(p)}}var s=Vl(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=s,e[kt]=s.current,Oi(e.nodeType===8?e.parentNode:e),fn(function(){fa(t,s,n,i)}),s}function va(e,t,n,i,o){var a=n._reactRootContainer;if(a){var r=a;if(typeof o=="function"){var l=o;o=function(){var s=ta(r);l.call(s)}}fa(t,r,e,o)}else r=Bf(n,t,e,o,i);return ta(r)}fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(dl(t,n|1),Ve(t,ue()),!($&6)&&(Qn=ue()+500,Yt()))}break;case 13:fn(function(){var i=wt(e,1);if(i!==null){var o=Re();ct(i,e,1,o)}}),$l(e,1)}};pl=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Re();ct(t,e,134217728,n)}$l(e,134217728)}};gu=function(e){if(e.tag===13){var t=$t(e),n=wt(e,t);if(n!==null){var i=Re();ct(n,e,t,i)}$l(e,t)}};hu=function(){return W};vu=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};xr=function(e,t,n){switch(t){case"input":if(mr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=la(i);if(!o)throw Error(E(90));Qc(i),mr(i,o)}}}break;case"textarea":Yc(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};iu=Fl;ou=fn;var Uf={usingClientEntryPoint:!1,Events:[qi,Tn,la,tu,nu,Fl]},di={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hf={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{ia=So.inject(Hf),gt=So}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uf;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gl(t))throw Error(E(200));return Df(e,t,null,n)};Ke.createRoot=function(e,t){if(!Gl(e))throw Error(E(299));var n=!1,i="",o=Fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Vl(e,1,!1,null,null,n,!1,i,o),e[kt]=t.current,Oi(e.nodeType===8?e.parentNode:e),new ql(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return fn(e)};Ke.hydrate=function(e,t,n){if(!ha(t))throw Error(E(200));return va(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Gl(e))throw Error(E(405));var i=n!=null&&n.hydratedSources||null,o=!1,a="",r=Fd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=Dd(t,null,e,1,n??null,o,!1,a,r),e[kt]=t.current,Oi(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ga(t)};Ke.render=function(e,t,n){if(!ha(t))throw Error(E(200));return va(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!ha(e))throw Error(E(40));return e._reactRootContainer?(fn(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Fl;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!ha(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return va(e,t,n,!1,i)};Ke.version="18.3.1-next-f1338f8080-20240426";function Bd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bd)}catch(e){console.error(e)}}Bd(),Bc.exports=Ke;var Vf=Bc.exports,Ud,Ec=Vf;Ud=Ec.createRoot,Ec.hydrateRoot;var Nc={ai:{thinkers:[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0,desc:"Ex direttore AI di Tesla e cofondatore OpenAI. Oggi si concentra su agenti, wiki di conoscenza e autoresearch."},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0,desc:"Cofondatore di Twitter e Block. Radicale sulla decentralizzazione, ha abolito la gerarchia aziendale in Block."},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0,desc:"Cofondatore di Y Combinator. Saggista influente su startup, linguaggi e cultura tech."},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0,desc:"CEO di Tesla, SpaceX e xAI. Figura polarizzante che opera tra AI, spazio e politica americana."},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0,desc:"CEO di OpenAI. Al centro del dibattito su AGI, regolamentazione e il futuro del lavoro."},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0,desc:"Investitore e filosofo della Silicon Valley. Noto per le sue riflessioni su ricchezza, felicità e leverage."},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0,desc:"Analista tech indipendente, ex a16z. Saggi rigorosi e data-driven sulle dinamiche del settore."},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0,desc:"Ex CTO di Coinbase. Teorico del Network State e della sovranità computazionale."},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0,desc:"Premio Nobel, padre delle reti neurali. Ha lasciato Google per dedicarsi ai rischi dell'AI."},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0,desc:"Cofondatore di a16z. Investitore in difesa tech e voce del techno-ottimismo radicale."},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / AMI Labs",active:!0,desc:"Premio Turing, inventore delle reti convoluzionali. Ha lasciato Meta per fondare AMI Labs."},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0,desc:"CEO di Google DeepMind. Nobel per la chimica grazie ad AlphaFold."},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0,desc:"Ex chief scientist di OpenAI. Ha fondato Safe Superintelligence con 3 miliardi per ripensare l'AI da zero."},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0,desc:"CEO di NVIDIA. L'uomo dietro le GPU che alimentano la corsa all'AI."},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0,desc:"Creatore di Ethereum. Lavora su AI locale, privacy e verifica crittografica."},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0,desc:"CEO di Stripe. Finanzia ricerca scientifica e ragiona sul software come pizza fatta al momento."},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0,desc:"Creatore di Doom e Quake. Oggi guida Keen Technologies, agenti embodied con pochi parametri."},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Practical AI",active:!0,desc:"Creatore di Datasette. Scrive il 95% del suo codice dal telefono usando agenti AI."},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0,desc:"Creatore di Ruby on Rails. 18 mesi di AI in Basecamp, zero rilasci: ora rende i prodotti accessibili agli agenti."},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0,desc:"Creatore di Keras e del benchmark ARC-AGI. Sostiene che i LLM non ragionano davvero."},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0,desc:"Ex CEO di GitHub, ora VP di Meta Superintelligence Labs. Ha lanciato Entire per ripensare Git per gli agenti."},{id:22,name:"TLDR Founders",handle:"@taborfaltra",domain:"Newsletter / Startup Strategy",active:!0,desc:"Newsletter quotidiana per founder: fundraising, crescita, lezioni dal campo. Curata da Dan Ni."},{id:23,name:"TLDR Tech",handle:"@tlaborfaltra",domain:"Newsletter / Tech Daily",active:!0,desc:"Newsletter quotidiana con le notizie tech più rilevanti, in formato breve e denso.",fontiOnly:!0}],sources:["trendshift.io","GitHub Trending","Hacker News"],branding:{name:"Signal.Brief",nameHtml:"Signal<span>.</span>Brief",tagline:"Intelligence Dashboard · AI-Powered",htmlTitle:"Signal.Brief — Intelligence Dashboard",language:"it",aboutDescription:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/ai/",siteUrl:"https://it-mikesoft.github.io/signal-brief/ai",colors:{primary:"#2563eb",primaryHover:"#1d4ed8",accent:"#f59e0b",bg:"#f5f4f0",headerBg:"#faf9f6",cardBg:"#ffffff",border:"#e2ddd6",text:"#1a1a2e",textSecondary:"#6b7280",textMuted:"#9ca3af"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"0fcf5005-bf4f-46ba-92c2-bd358141e7d6",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · AI",channelDescription:"Intelligence briefing giornaliero su tech, AI e innovazione. Monitora i pensatori più influenti, identifica temi emergenti e progetti da seguire.",author:"Signal.Brief · AI by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Technology",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Intelligence briefing quotidiano su tech, AI e innovazione. Temi emergenti, pensatori chiave, progetti da seguire."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · AI",album:"Signal.Brief · AI Daily Intelligence",genre:"Technology"},podcastEnabled:!0,podcastTargetMinutes:20},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da pensatori tech/AI e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca i progetti, repository GitHub, tool e librerie più rilevanti ed emergenti legati ai temi trattati sopra.

REGOLE:
1. Includi tutti i progetti/repo citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 progetto: {sources_list}. Cerca su ciascuna fonte i progetti trending più correlati ai temi.
3. Per ogni progetto assegna due punteggi da 1 a 10:
   - "maturity": maturità del progetto (1=appena nato, 10=consolidato con grande community)
   - "momentum": quanto è caldo/discusso ora (1=stabile/silenzioso, 10=trending/virale)
4. Massimo 12 progetti totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido (nessun testo prima o dopo, nessun blocco markdown). Ogni elemento:
{"name": "nome-progetto", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing di intelligence tech/AI come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Brief è un podcast di orientamento strategico per decisori curiosi e lettori colti non tecnici. Viene ascoltato in auto o in cuffia mentre si cammina — attenzione intermittente, niente possibilità di rileggere. Chi ascolta NON vuole sapere esattamente cosa è successo ieri, vuole capire DOVE STA ANDANDO il mondo tech e collocarlo dentro dinamiche di lungo periodo.
La voce narrante è un divulgatore con testa filosofica: traduce idee grandi in immagini concrete e vede la storia lunga dietro le notizie brevi. Il modello di riferimento è Digitalia — pacato, conversazionale, colto ma accessibile, competente senza paludamento, con ironia misurata e paragoni storici.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON è una rassegna stampa. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo è il cuore narrativo.
Tutto il resto (sintesi, schede thinker, progetti) serve a illustrare questi due fili.
Se il CONCEPT DIFF è vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove stanno andando le cose), non un ELENCO (cosa è successo). Se stai scrivendo fatti che non lasciano una direzione, stai scrivendo la cosa sbagliata.

TONO E REGISTRO (regola importante, leggi con attenzione):
È un RACCONTO, non un trattato scientifico, non un saggio universitario, non un editoriale del Financial Times. Il testo deve suonare come una persona competente e pacata che PARLA a un amico curioso ma non tecnico. Scrivi come se stessi raccontando, non come se stessi argomentando.

COSA NON FARE — due categorie di errori opposti, entrambe gravi:

(A) Registro sensazionalistico / da clickbait:
- NIENTE interiezioni enfatiche ("pazzesco", "incredibile", "non ci crederete").
- NIENTE domande retoriche caricate di suspense.
- NIENTE transizioni tipo "e qui arriva il bello", "proprio su questo".
- NIENTE iperbole, superlativi, urgenza artificiale.
- NIENTE frasi che annunciano quello che stai per dire ("ora vi spiego", "fate attenzione").

(B) Registro accademico / trattatistico — questo è il problema da cui ci stiamo allontanando:
- NIENTE parole complicate quando ne esistono di semplici. Evita "asimmetria epistemica", "sovranità computazionale", "tassonomia tripartita", "pluralismo interpretativo", "frammentazione del consenso", "materializzazione operativa". Se l'ascoltatore in auto deve fermarsi a capire una parola, la parola è sbagliata.
- NIENTE definizioni didascaliche ("un embedding è una rappresentazione numerica di..."). Se devi nominare un concetto tecnico, descrivilo per EFFETTO, non per definizione — "quella cosa che permette ai modelli di confrontare idee simili" — oppure evitalo del tutto e racconta cosa fa.
- NIENTE struttura premessa / evidenza / implicazione. I capitoli fluiscono come un racconto.
- NIENTE elenchi di tesi e controtesi. Racconta scene, gesti, dichiarazioni, decisioni concrete.
- NIENTE frasi lunghissime con tre subordinate. L'ascoltatore in cuffia perde il filo. Lunghezza media, ritmo naturale.

COSA FARE:
- CONCRETEZZA per prima: quando un thinker fa qualcosa di specifico (rilascia un paper, lascia un'azienda, pubblica un post, parla in un podcast), RACCONTA il gesto — cosa, dove, quando — e poi allarga al significato. Le immagini concrete sono il motore.
- PARAGONI STORICI. Collega il presente a dinamiche di lungo periodo ("come quando i treni hanno sostituito le diligenze", "è la stessa cosa successa col cloud 15 anni fa", "ricorda il passaggio dal vapore all'elettricità nelle fabbriche"). Almeno 2-3 paragoni di questo tipo per episodio. È il marchio dell'osservatore filosofico.
- PUNTO DI VISTA ESPLICITO ma misurato. La voce ha una posizione e la dice con calma: "mi sembra che", "la cosa più interessante per me è", "vale la pena notare che". Mai neutra da agenzia di stampa, mai ideologica.
- IMMAGINI OLTRE ASTRAZIONI. Invece di "asimmetria computazionale" → "da una parte c'è chi ha fabbriche di calcolo grandi come città, dall'altra chi fa girare tutto su un laptop". Invece di "convergenza architetturale" → "stanno tutti arrivando alla stessa casa da strade diverse".
- RIPRESE DEL FILO per chi si distrae. 1 o 2 volte per episodio, torna esplicitamente sul tema centrale ("ricapitoliamo un attimo", "torniamo al filo"). L'attenzione in auto è intermittente, lo rispetta.
- ATTRIBUZIONI NATURALI dentro il racconto: "Karpathy racconta che", "Dorsey ha deciso di", "nel suo ultimo post Willison nota che". Mai formulaiche.
- TRANSIZIONI FLUIDE: "in parallelo", "nello stesso giorno", "dall'altra parte dell'oceano", "pochi giorni dopo", "mentre succedeva tutto questo", "vale la pena collegare".
- ZERO GERGO non strettamente necessario. Se "rete neurale" basta, non dire "transformer". Se "software" basta, non dire "framework". Il gergo è un costo: per questo pubblico è un costo alto.
- FRASI CORTE per i punti chiave. Frasi medie per lo sviluppo. Mai lunghissime.

ESEMPI di buon registro vs cattivo registro (per ancorarti):
  BAD: "La sovranità computazionale emerge come asse politico dominante, sostituendo il precedente dibattito sul capitale di rischio."
  GOOD: "Fino a pochi mesi fa si discuteva di chi avrebbe messo i soldi sull'AI. Adesso si discute di chi la controlla. È un passaggio enorme, ed è successo in fretta."

  BAD: "Il modello autoregressivo rivela i propri limiti attraverso la stabilizzazione delle performance sui benchmark di reasoning strutturato."
  GOOD: "I modelli linguistici di oggi funzionano bene su molte cose, ma su un tipo preciso di test — quelli dove bisogna davvero ragionare — hanno smesso di migliorare. E questo dice qualcosa di importante."

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema centrale dell'episodio — NON una data, NON "Signal Brief", NON formule generiche come "briefing quotidiano". Deve leggersi come il titolo di un articolo di giornale sobrio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing in modo sobrio e invogliante ma senza sensazionalismo. Niente formule generiche ripetute ogni giorno.>

Queste due righe servono per il feed RSS e la pagina archivio, non vanno lette dal TTS — lo script di build le rimuoverà prima della sintesi vocale. Metti una riga vuota dopo [DESCRIPTION] e poi inizia con il primo [CHAPTER mood=geo].

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule di benvenuto standardizzate. Il nome del podcast e la data compaiono UNA sola volta nel capitolo, in modo naturale, mai come prima parola.
Chiudi il capitolo con un gancio narrativo — non un'enunciazione di tesi ("oggi vediamo che..."), ma una frase che sposta lo sguardo sulla scena principale del giorno, come farebbe un racconto breve nelle sue prime righe.
Massimo 100 parole.

[CHAPTER mood=soft]
È il cuore del racconto, non un'introduzione argomentativa.
Scrivilo come l'apertura di un lungo pezzo narrativo. Parti SEMPRE da una scena concreta, un gesto specifico, una dichiarazione reale di qualcuno — non da un concetto astratto. Da lì allarga lo sguardo ai temi di fondo, e intreccia 2-3 degli emergenti del concept diff come fili di una stessa storia.
Colloca quello che sta succedendo dentro una dinamica di lungo periodo: un paragone storico, un riferimento a cosa è già successo anni fa, un'immagine che aiuti l'ascoltatore a collocare il presente. Questo è obbligatorio — almeno UN paragone di questo tipo in questo capitolo.
Cita i thinker come personaggi di questa giornata, con quello che hanno detto o fatto, mai come autori di tesi astratte.
Evita parole difficili. Se ti serve un concetto tecnico, descrivine l'effetto, non la definizione. Massimo 600 parole. È il capitolo che fissa il tono — deve attirare e accompagnare.

[CHAPTER mood=tech]
Un ritratto narrativo, non una scheda.
Non usare una struttura a punti. Fluiscilo come un piccolo reportage di 350-450 parole:
- Una o due frasi di collocazione (chi è questa persona, senza CV, solo quel tanto che serve a orientare chi non lo conosce).
- Una scena concreta di questa settimana: il post, il paper, la dichiarazione, la decisione, il gesto pubblico. Raccontala prima di interpretarla.
- Come questa scena si collega al filo della giornata — l'emergente o la tensione di cui stiamo parlando nell'episodio. Rendi il collegamento esplicito ma narrativo, non schematico.
- Un pensiero di chiusura che non sia una sentenza accademica, ma una riflessione che nasce dal racconto stesso. Può essere un'osservazione, un dubbio, una connessione con qualcosa di già detto prima nell'episodio.
Trattalo come un personaggio, non come un'argomentazione.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli thinker totali — non di più. Seleziona solo quelli che hanno fatto QUALCOSA di concreto questa settimana e che parla direttamente al filo conduttore del giorno. Meglio 4 ritratti pieni di scena che 6 tirati via.

UNA VOLTA NELL'EPISODIO — tra un capitolo thinker e il successivo, oppure prima del capitolo progetti — inserisci una RIPRESA DEL FILO esplicita: una frase del tipo "ricapitoliamo un attimo dove siamo", "torniamo sul filo di oggi", "teniamo presente che...". Serve a chi si è distratto in auto. Non esagerare: una sola volta per episodio, e solo se aiuta davvero.

[CHAPTER mood=upbeat]
"Progetti da osservare."
4-5 progetti, raccontati come piccole storie, non come schede tecniche. Per ciascuno: cosa fa in parole semplici (come lo spiegheresti a un amico designer o a un consulente non ingegnere), e perché risuona con il filo raccontato negli altri capitoli. Se un progetto si chiama con una sigla, usala ma chiarisci subito a cosa serve. Mai linguaggio da pitch.
Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano la scena o l'immagine più forte del racconto e lasciano un pensiero aperto — non una tesi conclusiva, non un riassunto, un pensiero che resta in testa per il resto della giornata. Formula finale sobria: "È stato Signal Brief. Alla prossima." o equivalente.
Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica (niente *pausa*, [musica], ecc.).
- Tra un capitolo e l'altro lascia due righe vuote.
- Target totale: 2800-3500 parole (≈ 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.`,introStyles:{quadro:"Apri con un QUADRO misurato della situazione attuale in 2-3 frasi: dove siamo su questo tema, cosa sta cambiando, con che velocità. Tono descrittivo, non drammatico. Poi, in modo piano, in una frase separata: 'È {giorno} {today_it}, questo è Signal Brief.'",definizione:"Apri DEFINENDO il concetto emergente centrale del giorno: una frase che spiega cos'è, una frase che spiega perché oggi è importante. Nessuna enfasi. Poi: 'Questo è Signal Brief, {giorno} {today_it}. Oggi ragioniamo intorno a questa idea.'",tesi:"Enuncia direttamente la TESI che il briefing svilupperà — una frase dichiarativa, precisa, senza sensazionalismo. Una seconda frase che la motiva in termini generali. Poi: '{giorno} {today_it}. Signal Brief.'",esempio:"Apri con un ESEMPIO CONCRETO che illustra il tema centrale: un caso specifico, un numero, una dichiarazione riportata, un paper. Poi una frase che generalizza l'esempio al tema del giorno. Poi: 'Signal Brief, {giorno} {today_it}.'",contesto_storico:"Metti il tema del giorno in CONTESTO STORICO con una frase sobria (cos'è già successo in passato su questo stesso terreno). Una seconda frase che indica cosa rende diverso il momento attuale. Poi: 'È {giorno} {today_it}. Questo è Signal Brief.'",rassegna:"Riassumi in due frasi misurate COSA È CAMBIATO rispetto al briefing precedente — usando l'asse degli emergenti del concept diff. Niente ganci drammatici. Poi: 'Questo è Signal Brief, {giorno} {today_it}.'"}}},collectibles:{thinkers:[{id:1,name:"Melanie Gerlis",handle:"@melaniegerlis",domain:"Economia dell'arte / FT",active:!0,desc:"Giornalista del Financial Times specializzata in economia dell'arte. Analisi lucide sul mercato, le aste e i flussi di capitale nel mondo dell'arte."},{id:2,name:"Scott Reyburn",handle:"@ScottReyburn",domain:"Giornalismo d'asta",active:!0,desc:"Giornalista specializzato in aste e mercato dell'arte. Cronista di Christie's, Sotheby's e dei grandi passaggi di proprieta."},{id:3,name:"Ben Clymer",handle:"@hodinkee",domain:"Orologi / Hodinkee",active:!0,desc:"Fondatore di Hodinkee, la piattaforma di riferimento per l'orologeria. Ha trasformato gli orologi in oggetto culturale per una nuova generazione."},{id:4,name:"Eric Wind",handle:"@EricWind",domain:"Orologi vintage",active:!0,desc:"Dealer e collezionista di orologi vintage di alto livello. Esperto di Rolex, Patek Philippe e del mercato secondario."},{id:5,name:"Magnus Resch",handle:"@MagnusResch",domain:"Dati sul mercato dell'arte",active:!0,desc:"Imprenditore e accademico. Analisi data-driven del mercato dell'arte, critico delle inefficienze delle gallerie."},{id:6,name:"Jerry Saltz",handle:"@jerrysaltz",domain:"Critica d'arte / Anti-mercato",active:!0,desc:"Critico d'arte del New York Magazine, premio Pulitzer. Voce populista e provocatoria, critico del mercato speculativo."},{id:7,name:"Kenny Schachter",handle:"@kennyschachter",domain:"Arte + NFT + Crypto",active:!0,desc:"Artista, critico e dealer. Ponte tra arte contemporanea, NFT e criptovalute. Voce irriverente e insider del mercato."},{id:8,name:"Andrew Shirley",handle:"@AndrewShirleyKF",domain:"Investimenti di lusso",active:!0,desc:"Responsabile del Wealth Report di Knight Frank. Autore del Luxury Investment Index che traccia vino, arte, orologi e auto d'epoca."},{id:9,name:"Alain Zimmermann",handle:"@AlainZimmermann",domain:"Industria orologiera svizzera",active:!0,desc:"Analista dell'industria orologiera svizzera. Esperto di dinamiche di mercato, export e posizionamento dei brand di alta orologeria."},{id:10,name:"Noah Davis",handle:"@NoahDavis",domain:"Crypto-art / Aste digitali",active:!0,desc:"Ex specialista di Christie's, ha gestito la vendita record di Beeple. Figura chiave nell'intersezione tra arte tradizionale e digitale."},{id:11,name:"Artnet",handle:"@artnet",domain:"Analytics del mercato dell'arte",active:!0,desc:"Piattaforma di analytics e news sul mercato dell'arte. Database di prezzi d'asta, indici di mercato e intelligence per collezionisti."},{id:12,name:"Rally",handle:"@rallyrd",domain:"Investimento frazionato",active:!0,desc:"Piattaforma di investimento frazionato in collectibles: auto d'epoca, carte sportive, orologi, memorabilia. Democratizzazione dell'accesso."}],sources:["Artnet","Hodinkee","Knight Frank Wealth Report"],branding:{name:"Signal.Collectibles",nameHtml:"Signal<span>.</span>Collectibles",tagline:"Collectibles & Art Investment Intelligence · AI-Powered",htmlTitle:"Signal.Collectibles — Investment Intelligence",language:"it",aboutDescription:"Signal.Collectibles e un intelligence dashboard per collezionisti e investitori in beni alternativi. Ogni giorno raccoglie e analizza le idee dei critici, dealer e analisti piu influenti nel mondo dell'arte, degli orologi e dei collectibles, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/collectibles/",siteUrl:"https://it-mikesoft.github.io/signal-brief/collectibles",colors:{primary:"#b45309",primaryHover:"#92400e",accent:"#d97706",bg:"#fffbeb",headerBg:"#fef3c7",cardBg:"#ffffff",border:"#fcd34d",text:"#2e2a1a",textSecondary:"#6b5b3a",textMuted:"#9c8a6a"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"7ab1a958-7037-4507-ad92-dee1d815dc70",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Collectibles",channelDescription:"Briefing quotidiano su arte, orologi, collectibles e beni d'investimento alternativi. Analisi dei critici e dealer piu influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Collectibles by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Business",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su arte, orologi, collectibles e beni d'investimento alternativi."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Collectibles",album:"Signal.Brief · Collectibles Daily Intelligence",genre:"Collectibles & Art"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- Le tesi sul mercato dell'arte, degli orologi, dei collectibles o dei beni d'investimento alternativi su cui si sta concentrando
- Posizioni specifiche su artisti, case d'asta, brand orologieri, asset class alternative o tendenze di mercato
- Eventuali cambi di view rispetto al passato
- Link o riferimenti a interviste, articoli, report, analisi recenti se disponibili

Stile: sintetico, denso, orientato al contenuto su collectibles e beni d'investimento. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi critici, dealer e analisti del mondo dei collectibles e beni d'investimento:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali nel mondo dell'arte, degli orologi e dei collectibles? Dove convergono, dove divergono? Quale tensione di fondo emerge su speculazione vs passione, digitale vs fisico, democratizzazione vs esclusivita, mercato primario vs secondario?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da critici/dealer/analisti dei collectibles e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca le opere, gli orologi, le piattaforme, gli artisti, i fondi e le risorse piu rilevanti ed emergenti legati ai temi trattati sopra.

REGOLE:
1. Includi tutti gli asset/piattaforme citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}. Cerca su ciascuna fonte i progetti trending piu correlati ai temi.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturita dell'asset/piattaforma (1=appena lanciato, 10=consolidato)
   - "momentum": quanto e discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing sui collectibles come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Collectibles e un podcast di orientamento per collezionisti e investitori in beni alternativi — arte, orologi, memorabilia, asset fisici e digitali. Viene ascoltato in auto o in cuffia camminando — attenzione intermittente, niente possibilita di rileggere. Chi ascolta NON vuole una lista di lotti battuti all'asta, vuole capire le DINAMICHE di fondo: cosa stanno pensando i critici e i dealer piu influenti, dove si sposta il valore, quali categorie emergono, quale tensione esiste tra speculazione e passione.
La voce narrante e un osservatore del mercato dei beni rari con sensibilita storica: traduce battute d'asta e quotazioni in storie di gusto, cultura e valore, collega il presente alla storia del collezionismo, e ha un punto di vista — non e un catalogo d'asta.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON e un bollettino di risultati d'asta. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo e il cuore narrativo.
Tutto il resto (sintesi, schede pensatori, progetti) serve a illustrare questi due fili.
Se il CONCEPT DIFF e vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove sta andando il mercato dei collectibles), non un ELENCO (cosa e stato venduto e a quanto).

TONO E REGISTRO:
E un RACCONTO sugli oggetti che valgono e sulle persone che li cercano, non un trattato di economia dell'arte. Il testo deve suonare come un amico competente che racconta cosa sta succedendo nel mondo del collezionismo, senza gergo finanziario e senza elitarismo.

COSA NON FARE:
(A) Sensazionalistico: niente "record storico assoluto", "l'orologio che vale una casa", "investimento della vita", urgenza artificiale.
(B) Accademico: niente "asimmetria informativa del mercato primario", "decorrelazione degli asset alternativi", "teoria del valore intrinseco". Se l'ascoltatore in auto deve fermarsi a capire, la parola e sbagliata.

COSA FARE:
- Concretezza: quando un dealer fa una mossa (compra, vende, pubblica un'analisi, cambia strategia), racconta il gesto prima di interpretarlo.
- Paragoni storici: collega i trend attuali a momenti passati del collezionismo ("come la bolla degli Impressionisti degli anni '80", "ricorda il boom delle carte sportive del 1991", "e la stessa dinamica dei Rolex Daytona pre-2020"). Almeno 2-3 per episodio.
- Punto di vista misurato: la voce ha un'opinione e la esprime con calma.
- Immagini concrete: invece di "apprezzamento degli asset alternativi" -> "un Nautilus che tre anni fa costava quanto un'utilitaria e oggi vale piu di un bilocale".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si e distratto.
- Zero gergo non necessario: se "prezzo" basta, non dire "hammer price". Se "asta" basta, non dire "auction lot".

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo che apre il racconto del giorno.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi emergenti del mondo dei collectibles come fili di una stessa storia. Parti da un gesto concreto di un dealer o critico, poi allarga. Paragone storico obbligatorio. Cita i pensatori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un pensatore/dealer. Chi e (1-2 frasi), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli totali. Meglio 4 pieni che 6 vuoti.

[CHAPTER mood=upbeat]
"Asset e risorse da osservare."
4-5 opere/orologi/piattaforme/fondi, raccontati in parole semplici. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine piu forte e lasciano un pensiero. "E stato Signal Collectibles. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: 2800-3500 parole (circa 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{asta:"Apri con un'IMMAGINE dall'asta o dalla collezione: un martello che batte, un quadro che cambia proprietario, un orologio sotto una lente. Una frase che lo contestualizza. Poi: 'Signal Collectibles, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un prezzo battuto, un indice di mercato, una quotazione). Una frase che lo contestualizza. Poi: 'Signal Collectibles, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI di mercato che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Collectibles.'",paragone:"Apri con un PARAGONE STORICO: un momento passato del collezionismo che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Collectibles.'",scena:"Apri con una SCENA concreta: un lotto battuto all'asta, un orologio raro che riappare sul mercato, una galleria che cambia strategia. Poi: 'Signal Collectibles, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nel mercato dei collectibles rispetto al briefing precedente. Poi: 'Questo e Signal Collectibles, {giorno} {today_it}.'"}}},finanza:{thinkers:[{id:1,name:"Ray Dalio",handle:"@RayDalio",domain:"Macro / All-Weather",active:!0,desc:"Fondatore di Bridgewater, il più grande hedge fund al mondo. Teorico dei cicli di debito e dell'All-Weather portfolio."},{id:2,name:"Howard Marks",handle:"@HowardMarksBook",domain:"Value Investing / Rischio",active:!0,desc:"Co-fondatore di Oaktree Capital. I suoi memo sul rischio e il market sentiment sono lettura obbligatoria a Wall Street."},{id:3,name:"Cathie Wood",handle:"@CathieDWood",domain:"Growth / Innovazione",active:!0,desc:"CEO di ARK Invest. Scommesse ad alta convinzione su AI, genomica, robotica e blockchain."},{id:4,name:"Nassim Taleb",handle:"@nntaleb",domain:"Antifragilità / Tail Risk",active:!0,desc:"Autore di Il Cigno Nero e Antifragile. Matematico, trader, critico feroce della finanza convenzionale."},{id:5,name:"Matt Levine",handle:"@matt_levine",domain:"Giornalismo finanziario",active:!0,desc:"Columnist di Bloomberg. Analisi sarcastiche e profonde sulla struttura dei mercati, dei deal e della regolamentazione."},{id:6,name:"Morgan Housel",handle:"@morganhousel",domain:"Finanza comportamentale",active:!0,desc:"Autore di La Psicologia dei Soldi. Scrive sul rapporto tra psicologia, tempo e denaro."},{id:7,name:"Lyn Alden",handle:"@LynAldenContact",domain:"Macro / Cripto bilanciato",active:!0,desc:"Analista macro indipendente. Ponte tra investimento tradizionale e cripto, con rigore quantitativo."},{id:8,name:"Ben Felix",handle:"@BenFelixCSI",domain:"Investimento passivo / Evidence",active:!0,desc:"Portfolio manager e YouTuber canadese. Paladino dell'investimento evidence-based, anti-stock-picking."},{id:9,name:"Peter Schiff",handle:"@PeterSchiff",domain:"Oro / Austrian Economics",active:!0,desc:"CEO di Euro Pacific Capital. Permabear, critico della Fed, sostenitore dell'oro come riserva di valore."},{id:10,name:"Ramit Sethi",handle:"@ramit",domain:"Finanza personale pratica",active:!0,desc:"Autore di I Will Teach You to Be Rich. Anti-frugalità, pro-sistemi automatici e spesa consapevole."},{id:11,name:"Chamath Palihapitiya",handle:"@chamath",domain:"Tech investing / Contrarian",active:!0,desc:"CEO di Social Capital, ex Facebook. Investitore tech contrarian con forti posizioni politiche."},{id:12,name:"Suze Orman",handle:"@SuzeOrmanShow",domain:"Finanza mainstream / TV",active:!0,desc:"Volto televisivo della finanza personale americana. Budgeting tradizionale, approccio conservativo."}],sources:["Finviz","Bloomberg Trending","Seeking Alpha"],branding:{name:"Signal.Finance",nameHtml:"Signal<span>.</span>Finance",tagline:"Investment Intelligence · AI-Powered",htmlTitle:"Signal.Finance — Investment Intelligence",language:"it",aboutDescription:"Signal.Finance è un intelligence dashboard per investitori e decisori. Ogni giorno raccoglie e analizza le idee degli investitori e analisti più influenti, produce sintesi trasversali sui trend di mercato, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/finanza/",siteUrl:"https://it-mikesoft.github.io/signal-brief/finanza",colors:{primary:"#059669",primaryHover:"#047857",accent:"#d97706",bg:"#f8faf9",headerBg:"#f0fdf4",cardBg:"#ffffff",border:"#d1e7dd",text:"#1a2e1a",textSecondary:"#4b6b4b",textMuted:"#7c9a7c"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"bffb56df-3059-4493-9275-23396c18e129",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Finance",channelDescription:"Briefing quotidiano su mercati, investimenti e finanza personale. Analisi degli investitori più influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Finance by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Business",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su mercati, investimenti e finanza personale."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Finance",album:"Signal.Brief · Finance Daily Intelligence",genre:"Business"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- Le tesi di mercato o macro su cui si sta concentrando
- Posizioni specifiche su asset, settori o tendenze economiche
- Eventuali cambi di view rispetto al passato
- Link o riferimenti a interviste, memo, paper, newsletter recenti se disponibili

Stile: sintetico, denso, orientato al contenuto finanziario. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi investitori e analisti di riferimento:

{summaries}

Ora produci una cross-synthesis: quali sono i temi di mercato emergenti trasversali? Dove convergono, dove divergono? Quale tensione di fondo emerge su rischio, allocazione, politica monetaria o ciclo economico?

Regole:
- Quando citi un'idea riconducibile a un investitore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un investitore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da investitori/analisti e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca gli strumenti, le piattaforme e i prodotti finanziari più rilevanti ed emergenti legati ai temi trattati sopra.

TIPOLOGIE DA CERCARE (l'ecosistema dell'investimento):
- ETF tematici o innovativi legati ai trend discussi dai thinker
- Piattaforme di investimento (Robinhood, Interactive Brokers, Trade Republic, ecc.)
- Tool di analisi e screener (Portfolio Visualizer, Koyfin, TradingView)
- Newsletter e servizi di ricerca indipendente
- Strategie o modelli di portafoglio citati (All-Weather, Permanent Portfolio, ecc.)
- Piattaforme di finanza personale e budgeting (YNAB, Monarch, ecc.)
- Progetti DeFi o crypto rilevanti per il contesto macro
- Libri o pubblicazioni recenti citati dai thinker
- Broker, robo-advisor o servizi di wealth management innovativi

REGOLE:
1. Includi tutti gli strumenti/prodotti citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}. Cerca su ciascuna fonte gli strumenti trending più correlati ai temi.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturità dello strumento (1=appena lanciato, 10=consolidato)
   - "momentum": quanto è discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing di investimento come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Finance è un podcast di orientamento per investitori e decisori che vogliono capire dove stanno andando i mercati. Viene ascoltato in auto o in cuffia camminando — attenzione intermittente, niente possibilità di rileggere. Chi ascolta NON vuole un bollettino di borsa, vuole capire le DINAMICHE di fondo: cosa stanno pensando gli investitori più influenti, su cosa scommettono, dove vedono rischio e dove vedono opportunità.
La voce narrante è un divulgatore finanziario con prospettiva storica: traduce concetti macro in immagini concrete, collega il presente a cicli passati, e ha un punto di vista — non è un telegiornale economico.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON è un bollettino di mercato. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo è il cuore narrativo.
Tutto il resto (sintesi, schede investitori, strumenti) serve a illustrare questi due fili.
Se il CONCEPT DIFF è vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove stanno andando i mercati), non un ELENCO (cosa è successo in borsa).

TONO E REGISTRO:
È un RACCONTO sui soldi e sul rischio, non un trattato di economia. Il testo deve suonare come un amico competente che racconta cosa sta succedendo nei mercati, senza gergo inutile e senza ansia.

COSA NON FARE:
(A) Sensazionalistico: niente "crollo imminente", "opportunità imperdibile", "non ci crederete", urgenza artificiale.
(B) Accademico: niente "asimmetria informativa", "decorrelazione degli asset", "tassonomia del rischio". Se l'ascoltatore in auto deve fermarsi a capire, la parola è sbagliata.

COSA FARE:
- Concretezza: quando un investitore fa una mossa (compra, vende, pubblica un memo, cambia allocazione), racconta il gesto prima di interpretarlo.
- Paragoni storici: collega i trend attuali a cicli passati ("come nel 2008", "ricorda la bolla dot-com", "è la stessa dinamica dei tassi degli anni '70"). Almeno 2-3 per episodio.
- Punto di vista misurato: la voce ha un'opinione e la esprime con calma.
- Immagini concrete: invece di "volatilità del mercato obbligazionario" → "i bond si muovono come se nessuno sapesse cosa farà la Fed".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si è distratto.
- Zero gergo non necessario: se "azioni" basta, non dire "equity". Se "rischio" basta, non dire "downside exposure".

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema di mercato centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing finanziario>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo che apre il racconto finanziario del giorno.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi di mercato emergenti come fili di una stessa storia. Parti da un gesto concreto di un investitore, poi allarga. Paragone storico obbligatorio. Cita gli investitori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un investitore/analista. Chi è (1-2 frasi), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli totali. Meglio 4 pieni che 6 vuoti.

[CHAPTER mood=upbeat]
"Strumenti e risorse da osservare."
4-5 strumenti/ETF/piattaforme, raccontati in parole semplici. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine più forte e lasciano un pensiero. "È stato Signal Finance. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: 2800-3500 parole (≈ 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{quadro:"Apri con un QUADRO misurato dei mercati: dove siamo, cosa si muove, con che velocità. Tono descrittivo, non drammatico. Poi: 'È {giorno} {today_it}, questo è Signal Finance.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un rendimento, un flusso di capitali, un prezzo, un rapporto). Una frase che lo contestualizza. Poi: 'Signal Finance, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI di mercato che il briefing svilupperà — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Finance.'",paragone:"Apri con un PARAGONE STORICO: un momento passato dei mercati che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'È {giorno} {today_it}. Questo è Signal Finance.'",scena:"Apri con una SCENA concreta: un investitore che prende una decisione, un memo appena pubblicato, un numero su uno schermo. Poi: 'Signal Finance, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA È CAMBIATO nei mercati rispetto al briefing precedente. Poi: 'Questo è Signal Finance, {giorno} {today_it}.'"}}},medicina:{thinkers:[{id:1,name:"Andrew Weil",handle:"@DrWeil",domain:"Medicina integrativa",active:!0,desc:"Medico di Harvard, fondatore della medicina integrativa. Da 40 anni costruisce il ponte tra medicina convenzionale e tradizioni curative."},{id:2,name:"Deepak Chopra",handle:"@DeepakChopra",domain:"Mente-corpo / Ayurveda",active:!0,desc:"Endocrinologo e divulgatore ayurvedico. Controverso ma influente: ha portato la connessione mente-corpo nel mainstream occidentale."},{id:3,name:"Mark Hyman",handle:"@drmarkhyman",domain:"Medicina funzionale",active:!0,desc:"Fondatore dell'UltraWellness Center. Pioniere della medicina funzionale e dell'approccio 'cibo come medicina'."},{id:4,name:"Peter Attia",handle:"@PeterAttiaMD",domain:"Longevità / Evidence-based",active:!0,desc:"Medico specializzato in longevità. Approccio rigoroso, dati alla mano, ponte tra scienza dura e prevenzione."},{id:5,name:"Gabor Maté",handle:"@DrGaborMate",domain:"Trauma / Dipendenze",active:!0,desc:"Medico ungherese-canadese. Ha ridefinito il rapporto tra trauma infantile, dipendenze e malattie croniche."},{id:6,name:"Giovanni Maciocia",handle:"",domain:"Medicina cinese / Agopuntura",active:!0,desc:"Il più influente autore occidentale di medicina tradizionale cinese. I suoi testi sono riferimento mondiale per agopuntura e fitoterapia cinese."},{id:7,name:"Mantak Chia",handle:"@mantakchia",domain:"Taoismo / Qigong",active:!0,desc:"Maestro taoista thailandese-cinese. Ha sistematizzato le pratiche taoiste di coltivazione dell'energia interna per l'Occidente."},{id:8,name:"Vandana Shiva",handle:"@daborrvandanashiva",domain:"Ecologia / Semi / Sovranità alimentare",active:!0,desc:"Fisica e attivista indiana. Difende la biodiversità e l'agricoltura tradizionale contro i brevetti sulle sementi e l'agroindustria."},{id:9,name:"Edzard Ernst",handle:"@EdzardErnst",domain:"Critica della medicina alternativa",active:!0,desc:"Primo professore universitario di medicina complementare. Ex praticante omeopatico, oggi il critico scientifico più rigoroso delle terapie alternative."},{id:10,name:"Byung-Chul Han",handle:"",domain:"Filosofia / Società della stanchezza",active:!0,desc:"Filosofo coreano-tedesco. Analizza come la società delle prestazioni produce burnout, depressione e malattia. Critico della positività tossica."},{id:11,name:"Bessel van der Kolk",handle:"@BesselvdKolk",domain:"Trauma / Il corpo tiene il conto",active:!0,desc:"Psichiatra olandese-americano. Ha dimostrato come il trauma si inscrive nel corpo e si cura con approcci somatici, non solo parlati."},{id:12,name:"Claudia Welch",handle:"@drclaudiawelch",domain:"Ayurveda / Equilibrio ormonale",active:!0,desc:"Medico ayurvedico e agopuntrice. Specializzata nell'equilibrio ormonale femminile attraverso la lente delle medicine tradizionali."},{id:13,name:"Matthieu Ricard",handle:"@MatthieuRicard",domain:"Buddhismo / Neuroscienze contemplative",active:!0,desc:"Monaco buddhista e biologo molecolare. I suoi studi sulla meditazione con Richard Davidson hanno dimostrato la plasticità cerebrale dei contemplatori."},{id:14,name:"Stefano Mancuso",handle:"@StMancuso",domain:"Neurobiologia vegetale / Intelligenza delle piante",active:!0,desc:"Neurobiologo vegetale italiano. Ha rivoluzionato la comprensione delle piante come organismi intelligenti, con implicazioni per la fitoterapia e l'ecologia."}],sources:["PubMed Integrative","Examine.com","Green Medinfo"],branding:{name:"Signal.Natura",nameHtml:"Signal<span>.</span>Natura",tagline:"Medicina Naturale Intelligence · AI-Powered",htmlTitle:"Signal.Natura — Medicina Naturale Intelligence",language:"it",aboutDescription:"Signal.Natura è un intelligence dashboard sulla medicina naturale e integrativa. Ogni giorno raccoglie le idee di medici non convenzionali, maestri di medicine tradizionali, filosofi e ricercatori, produce sintesi trasversali e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/medicina/",siteUrl:"https://it-mikesoft.github.io/signal-brief/medicina",colors:{primary:"#16a34a",primaryHover:"#15803d",accent:"#a3e635",bg:"#f7fdf9",headerBg:"#ecfdf5",cardBg:"#ffffff",border:"#bbf7d0",text:"#14532d",textSecondary:"#4d7c5e",textMuted:"#86a896"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"a61f20b2-3c6a-45e3-8307-9c7b08430032",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Natura",channelDescription:"Briefing quotidiano su medicina naturale, integrativa e tradizionale. Analisi dei pensatori più influenti tra medici non convenzionali, maestri orientali e filosofi.",author:"Signal.Brief · Natura by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Health & Fitness",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su medicina naturale e integrativa."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Natura",album:"Signal.Brief · Natura Daily Intelligence",genre:"Health & Fitness"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- I temi principali su cui si sta concentrando in ambito salute, medicina naturale o filosofia della cura
- Posizioni specifiche su approcci terapeutici, ricerche, pratiche contemplative o critiche
- Eventuali cambi di prospettiva rispetto al passato
- Link o riferimenti a libri, paper, interviste, podcast recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi pensatori di riferimento nella medicina naturale, integrativa e nella filosofia della cura:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale tensione di fondo emerge tra approcci convenzionali e non convenzionali, tra scienza e tradizione, tra cura del corpo e cura della mente?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da pensatori della medicina naturale e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca i progetti, le risorse, le piattaforme e gli strumenti più rilevanti ed emergenti nella medicina naturale e integrativa, legati ai temi trattati sopra.

TIPOLOGIE DA CERCARE (l'ecosistema della cura non convenzionale):
- App per meditazione, qigong, breathwork (Insight Timer, Waking Up, ecc.)
- Piattaforme di telemedicina integrativa o funzionale
- Protocolli di longevità o biohacking con evidenze
- Centri di ricerca sulla medicina mente-corpo (es. NCCIH, Mind & Life Institute)
- Progetti open source per fitoterapia, erbe medicinali, farmacopee tradizionali
- Database di interazioni erbe-farmaci, safety profiles
- Comunità o reti di praticanti (agopuntura, ayurveda, naturopatia)
- Libri, corsi o pubblicazioni recenti citati dai thinker
- Iniziative di agricoltura medicinale, orti terapeutici, food as medicine

REGOLE:
1. Includi tutti gli strumenti/risorse citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturità (1=appena nato, 10=consolidato)
   - "momentum": quanto è discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing sulla medicina naturale e integrativa come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Natura è un podcast per chi vuole capire dove sta andando il mondo della salute naturale — le tensioni tra scienza e tradizione, tra medicina convenzionale e approcci integrativi, tra tecnologia e pratiche contemplative millenarie. Viene ascoltato in auto o in cuffia camminando. Chi ascolta NON vuole un bollettino sanitario, vuole capire le CORRENTI DI PENSIERO che attraversano il mondo della cura: cosa stanno dicendo i medici integrativi, i maestri orientali, i filosofi, i ricercatori.
La voce narrante è un divulgatore con sensibilità umanistica: traduce concetti medici e filosofici in immagini concrete, collega il presente a tradizioni millenarie, e ha un punto di vista — non è un telegiornale sulla salute.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON è una rassegna di novità mediche. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo è il cuore narrativo.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove stanno andando le idee sulla cura), non un ELENCO (cosa è successo questa settimana).

TONO E REGISTRO:
È un RACCONTO sul prendersi cura — di sé, degli altri, del pianeta. Il testo deve suonare come un amico colto e curioso che racconta cosa si muove nel mondo delle medicine, senza gergo medico inutile e senza dogmatismo.

COSA NON FARE:
(A) Sensazionalistico: niente "scoperta rivoluzionaria", "rimedio miracoloso", "la scienza conferma che...", urgenza artificiale.
(B) Accademico: niente "pathway neuroendocrino", "asse HPA", "modello biopsicosociale" senza spiegazione. Se l'ascoltatore in auto deve fermarsi a capire, la parola è sbagliata.
(C) Dogmatico: niente "la medicina occidentale è sbagliata" né "le medicine alternative non funzionano". Il podcast esplora con rispetto e curiosità, senza schierarsi ideologicamente.

COSA FARE:
- Concretezza: quando un pensatore fa qualcosa (pubblica uno studio, tiene un ritiro, scrive un libro, cambia posizione), racconta il gesto.
- Paragoni tra tradizioni: collega la medicina cinese all'ayurveda, la neuroplasticità alla meditazione, il trauma al corpo. Almeno 2-3 ponti tra mondi per episodio.
- Punto di vista misurato: la voce ha un'opinione e la esprime con calma.
- Immagini concrete: invece di "disregolazione del sistema nervoso autonomo" → "quel momento in cui il corpo resta in allarme anche quando il pericolo è passato".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si è distratto.
- Zero gergo non necessario. Se "stress" basta, non dire "cortisolo". Se "respiro" basta, non dire "pranayama".

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema della cura centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi emergenti come fili di una stessa storia sulla cura. Parti da una scena concreta. Paragone tra tradizioni obbligatorio. Cita i pensatori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un pensatore. Chi è (1-2 frasi), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli totali. Meglio 4 pieni che 6 vuoti.

[CHAPTER mood=upbeat]
"Risorse da esplorare."
4-5 risorse, raccontate in parole semplici. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine più forte e lasciano un pensiero. "È stato Signal Natura. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: {target_words} parole (≈ {target_minutes} minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{quadro:"Apri con un QUADRO pacato di dove sta il mondo della cura naturale: cosa si muove, cosa torna, cosa viene messo in discussione. Poi: 'È {giorno} {today_it}, questo è Signal Natura.'",tradizione:"Apri con una CITAZIONE o un principio da una tradizione medica antica (cinese, ayurvedica, ippocratica) che risuona col tema del giorno. Una frase che la collega al presente. Poi: 'Signal Natura, {giorno} {today_it}.'",corpo:"Apri con una SENSAZIONE CORPOREA che tutti conoscono — una tensione, un respiro, un dolore — e collegala al tema della giornata come metafora concreta. Poi: '{giorno} {today_it}. Questo è Signal Natura.'",ricerca:"Apri con un DATO o un risultato di ricerca recente che illumina il tema del giorno — un numero, uno studio, una scoperta. Una frase che lo contestualizza. Poi: 'È {giorno} {today_it}. Signal Natura.'",domanda:"Apri con una DOMANDA genuina sulla cura che il briefing proverà a esplorare. Non retorica, non provocatoria — una vera curiosità. Poi: 'Signal Natura, {giorno} {today_it}.'",scena:"Apri con una SCENA: un medico in un ambulatorio, un monaco in un giardino, una persona che si ferma a respirare. Due frasi vivide. Poi: '{giorno} {today_it}, Signal Natura.'"}}},moda:{thinkers:[{id:1,name:"Imran Amed",handle:"@imaboranaboramed",domain:"Industria / Business of Fashion",active:!0,desc:"Fondatore e CEO di Business of Fashion, la piattaforma di intelligence sull'industria della moda globale."},{id:2,name:"Vanessa Friedman",handle:"@VVFriedman",domain:"Critica / NYT",active:!0,desc:"Fashion critic del New York Times. Voce dell'establishment, analisi politica e culturale della moda."},{id:3,name:"Diet Prada",handle:"@diet_prada",domain:"Accountability / Call-out",active:!0,desc:"Account di watchdog della moda. Smaschera plagi, appropriazione culturale e pratiche scorrette dell'industria."},{id:4,name:"Tim Blanks",handle:"@TimBlanks",domain:"Giornalismo enciclopedico",active:!0,desc:"Critico di moda veterano, enciclopedico. Decenni di copertura delle sfilate e conoscenza storica del settore."},{id:5,name:"Li Edelkoort",handle:"@edelkoort",domain:"Trend forecasting / Anti-fashion",active:!0,desc:"Trend forecaster olandese di fama mondiale. Ha dichiarato la morte della moda come la conosciamo."},{id:6,name:"Demna",handle:"@demna",domain:"Provocazione / Ironia",active:!0,desc:"Direttore creativo di Balenciaga. Maestro della provocazione, ironia concettuale e decostruzione del lusso."},{id:7,name:"Jerry Lorenzo",handle:"@fearofgod",domain:"Streetwear / Spiritualita",active:!0,desc:"Fondatore di Fear of God. Fusione di spiritualita, streetwear e lusso americano."},{id:8,name:"Telfar Clemens",handle:"@telfar",domain:"Lusso accessibile",active:!0,desc:"Designer liberiano-americano. Ha ridefinito il concetto di lusso democratico con la Shopping Bag virale."},{id:9,name:"Angelo Flaccavento",handle:"@aflaboraccavento",domain:"Artigianato italiano",active:!0,desc:"Critico di moda italiano. Difensore dell'artigianato, della lentezza e della tradizione sartoriale italiana."},{id:10,name:"Orsola de Castro",handle:"@orsoladecastro",domain:"Sostenibilita radicale",active:!0,desc:"Co-fondatrice di Fashion Revolution. Attivista per la trasparenza e la sostenibilita radicale nella moda."},{id:11,name:"Virginie Viard",handle:"@VirginieViard",domain:"Tradizione / Haute Couture",active:!0,desc:"Ex direttrice artistica di Chanel, erede di Lagerfeld. Rappresenta la continuita e la tradizione dell'alta moda."},{id:12,name:"Lyst",handle:"@lyst",domain:"Dati algoritmici / Fashion data",active:!0,desc:"Piattaforma di search e analytics della moda. I suoi indici misurano cosa cerca e compra realmente il mercato."}],sources:["Business of Fashion","Vogue Business","Highsnobiety"],branding:{name:"Signal.Moda",nameHtml:"Signal<span>.</span>Moda",tagline:"Fashion Intelligence · AI-Powered",htmlTitle:"Signal.Moda — Fashion Intelligence",language:"it",aboutDescription:"Signal.Moda e un intelligence dashboard per chi lavora nella moda e nel lusso. Ogni giorno raccoglie e analizza le idee dei critici, designer e analisti piu influenti, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/moda/",siteUrl:"https://it-mikesoft.github.io/signal-brief/moda",colors:{primary:"#be185d",primaryHover:"#9d174d",accent:"#e11d48",bg:"#fdf2f8",headerBg:"#fce7f3",cardBg:"#ffffff",border:"#f9a8d4",text:"#1a1a2e",textSecondary:"#6b4b6b",textMuted:"#9c7a9c"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"d40deeb9-31c5-4142-bf5a-689a9f926c1f",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Moda",channelDescription:"Briefing quotidiano su moda, lusso e cultura del vestire. Analisi dei critici e designer piu influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Moda by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Arts",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su moda, lusso e cultura del vestire."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Moda",album:"Signal.Brief · Moda Daily Intelligence",genre:"Fashion"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- Le tesi sulla moda, il lusso o l'industria del vestire su cui si sta concentrando
- Posizioni specifiche su brand, collezioni, tendenze culturali o estetiche
- Eventuali cambi di view rispetto al passato
- Link o riferimenti a interviste, articoli, review, post recenti se disponibili

Stile: sintetico, denso, orientato al contenuto sulla moda e il lusso. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi critici, designer e analisti della moda:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali nel mondo della moda e del lusso? Dove convergono, dove divergono? Quale tensione di fondo emerge su sostenibilita, identita, accessibilita, artigianato o cultura del consumo?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da critici/designer/analisti della moda e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca i brand, le collezioni, le piattaforme, i progetti e le risorse piu rilevanti ed emergenti legati ai temi trattati sopra.

REGOLE:
1. Includi tutti i brand/progetti citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}. Cerca su ciascuna fonte i progetti trending piu correlati ai temi.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturita del brand/progetto (1=appena lanciato, 10=consolidato)
   - "momentum": quanto e discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing sulla moda come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Moda e un podcast di orientamento per chi lavora nella moda, nel lusso e nella cultura del vestire. Viene ascoltato in auto o in cuffia camminando — attenzione intermittente, niente possibilita di rileggere. Chi ascolta NON vuole un bollettino di sfilate, vuole capire le DINAMICHE di fondo: cosa stanno pensando i critici e i designer piu influenti, su cosa scommettono i brand, dove si muove il gusto e dove si muove il mercato.
La voce narrante e un osservatore della moda con sensibilita culturale: traduce movimenti estetici in significati sociali, collega il presente alla storia del costume, e ha un punto di vista — non e un telegiornale della moda.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON e una rassegna di sfilate. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo e il cuore narrativo.
Tutto il resto (sintesi, schede pensatori, progetti) serve a illustrare questi due fili.
Se il CONCEPT DIFF e vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove sta andando la moda), non un ELENCO (cosa hanno sfilato i brand).

TONO E REGISTRO:
E un RACCONTO sulla moda e sul suo significato culturale, non un trattato di semiotica. Il testo deve suonare come un amico competente che racconta cosa sta succedendo nel mondo della moda, senza gergo accademico e senza frivolezza.

COSA NON FARE:
(A) Sensazionalistico: niente "rivoluzione epocale", "il brand che cambiera tutto", "tendenza imperdibile", urgenza artificiale.
(B) Accademico: niente "decostruzione semiotica", "paradigma post-strutturalista", "agency del corpo vestito". Se l'ascoltatore in auto deve fermarsi a capire, la parola e sbagliata.

COSA FARE:
- Concretezza: quando un designer fa una scelta (cambia direzione, lancia una collezione, rilascia un'intervista), racconta il gesto prima di interpretarlo.
- Paragoni storici: collega i trend attuali a momenti passati della moda ("come negli anni '90 di Margiela", "ricorda il minimalismo di Jil Sander", "e la stessa tensione tra Yves Saint Laurent e Courreges"). Almeno 2-3 per episodio.
- Punto di vista misurato: la voce ha un'opinione e la esprime con calma.
- Immagini concrete: invece di "democratizzazione del lusso" -> "una borsa da 150 euro con la stessa lista d'attesa di una Birkin".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si e distratto.
- Zero gergo non necessario: se "vestito" basta, non dire "garment". Se "tendenza" basta, non dire "macro-trend".

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo che apre il racconto del giorno.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi emergenti della moda come fili di una stessa storia. Parti da un gesto concreto di un designer o critico, poi allarga. Paragone storico obbligatorio. Cita i pensatori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un pensatore/designer. Chi e (1-2 frasi), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli totali. Meglio 4 pieni che 6 vuoti.

[CHAPTER mood=upbeat]
"Brand e progetti da osservare."
4-5 brand/collezioni/piattaforme, raccontati in parole semplici. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine piu forte e lasciano un pensiero. "E stato Signal Moda. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: 2800-3500 parole (circa 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{passerella:"Apri con un'IMMAGINE dalla passerella o dalla strada: un capo, un gesto, un dettaglio che illumina il tema del giorno. Una frase che lo contestualizza. Poi: 'Signal Moda, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (una vendita, un indice di ricerca, una quota di mercato). Una frase che lo contestualizza. Poi: 'Signal Moda, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI culturale che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Moda.'",paragone:"Apri con un PARAGONE STORICO: un momento passato della moda che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Moda.'",scena:"Apri con una SCENA concreta: un designer che presenta una collezione, un editoriale appena uscito, un post virale. Poi: 'Signal Moda, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nella moda rispetto al briefing precedente. Poi: 'Questo e Signal Moda, {giorno} {today_it}.'"}}},motori:{thinkers:[{id:1,name:"Kevin Cameron",handle:"cycleworld.com/author/kevin-cameron",domain:"Tecnica Motori ICE",active:!0,desc:"Technical Editor di Cycle World. Miglior divulgatore tecnico mondiale sui motori a combustione interna per moto — 2T, 4T, combustione, dinamica del motore. Pubblica analisi profonde e rare."},{id:2,name:"Mat Oxley",handle:"@matoxley",domain:"Giornalismo MotoGP / Storia Moto",active:!0,desc:"Giornalista e storico del motociclismo per Motor Sport Magazine. Conosce la tecnologia MotoGP in profondità: motori, telai, gomme. Autore di libri su Rossi, Agostini e i costruttori italiani."},{id:3,name:"Claudio Domenicali",handle:"Ducati Motor Holding",domain:"Industria Moto Italiana / ICE",active:!0,desc:"CEO di Ducati Motor Holding. Voce più autorevole dell'industria moto italiana sul futuro del motore a combustione, la manifattura italiana e il rapporto tra racing e strada."},{id:4,name:"Massimo Rivola",handle:"Aprilia Racing",domain:"Racing / Gruppo Piaggio",active:!0,desc:"CEO di Aprilia Racing, divisione sportiva del Gruppo Piaggio. Collegamento diretto al mondo Piaggio. Parla di sviluppo motori, strategia racing e futuro della moto sportiva italiana."},{id:5,name:"Neil Spalding",handle:"motorsport.com/neil-spalding",domain:"Tecnica MotoGP",active:!0,desc:"Corrispondente tecnico MotoGP per Motorsport.com. Pubblica le analisi tecniche più dettagliate disponibili pubblicamente su motori, telai ed elettronica nelle moto da gara."},{id:6,name:"Luca Semprini",handle:"Piaggio Group",domain:"Industria / Vespa / Piaggio",active:!0,desc:"CEO del Gruppo Piaggio, che controlla Vespa, Piaggio, Aprilia e Moto Guzzi. Parla di futuro dello scooter, mobilità urbana, ICE vs elettrico e manifattura italiana di piccola cilindrata."},{id:7,name:"Jonny Walker",handle:"@JonnyWalker_ER",domain:"Enduro / Off-Road",active:!0,desc:"Pilota EnduroGP e Hard Enduro di livello mondiale. Punto di riferimento per il fuoristrada estremo — il mondo dove opera TM Racing. Pubblica su YT e social con contenuto tecnico e di guida."},{id:8,name:"Octane Press",handle:"@OctanePress",domain:"Editoria Moto / Tecnica",active:!0,desc:"Casa editrice specializzata in moto e motorsport (octanepress.com). Pubblica libri tecnici, storie di costruttori e guide di restauro. Connette storia meccanica, cultura moto e tecnica d'epoca."}],sources:[],branding:{name:"Signal.Motori",nameHtml:"Signal<span>.</span>Motori",tagline:"Motori, Meccanica & Motorsport Intelligence · AI-Powered",htmlTitle:"Signal.Motori — Motori & Motorsport Intelligence",language:"it",aboutDescription:"Signal.Motori è un intelligence dashboard per appassionati di motori a combustione, moto e motorsport. Ogni settimana raccoglie e analizza le voci di ingegneri, giornalisti tecnici e piloti di livello mondiale — da Kevin Cameron a Jonny Walker — produce sintesi trasversali sui trend del settore e genera un podcast ogni venerdì.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/motori/",siteUrl:"https://it-mikesoft.github.io/signal-brief/motori",colors:{primary:"#b91c1c",primaryHover:"#991b1b",accent:"#ef4444",bg:"#fff5f5",headerBg:"#fee2e2",cardBg:"#ffffff",border:"#fca5a5",text:"#1c1917",textSecondary:"#57534e",textMuted:"#a8a29e"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"9944fc92-5ad6-4a47-9993-394d7e83a1bd",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Motori",channelDescription:"Briefing settimanale su motori a combustione, meccanica, moto e motorsport. Dalle voci di Kevin Cameron, Mat Oxley, Ducati, Aprilia e Piaggio al mondo dell'enduro con Jonny Walker.",author:"Signal.Brief · Motori by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Sports",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing su motori, meccanica, moto italiane e motorsport."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Motori",album:"Signal.Brief · Motori Weekly",genre:"Motorsport"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- I temi principali su cui si sta concentrando (tecnica motori, racing, industria, meccanica, off-road)
- Idee specifiche, analisi tecniche, posizioni o dichiarazioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a articoli, interviste, video, post recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi protagonisti del mondo dei motori, delle moto e del motorsport:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale tensione di fondo emerge tra ICE e elettrico, tra racing e strada, tra artigianato italiano e industria globale, tra passione meccanica e regolamentazione?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:"",conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing sul mondo dei motori come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Motori è un podcast per appassionati di meccanica, moto e motorsport — chi sente il suono di un motore a combustione come musica, chi sa la differenza tra un 2T e un 4T, chi segue Piaggio e il mondo enduro con Jonny Walker. Viene ascoltato in auto, in officina o in cuffia — attenzione intermittente, niente possibilità di rileggere. Chi ascolta NON vuole una lista di risultati di gara, vuole capire dove sta andando il mondo dei motori: cosa progettano gli ingegneri italiani, dove va la meccanica a combustione, quali tensioni esistono tra ICE e elettrico, cosa sta succedendo nel racing che poi arriva sulla strada.
La voce narrante è un appassionato competente con sensibilità storica: racconta il motore come oggetto culturale, collega le scelte tecniche di oggi alle grandi stagioni della meccanica italiana, e ha un punto di vista — non è una rivista di settore.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON è una rassegna di gare. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo è il cuore narrativo.
Tutto il resto (sintesi, schede pensatori, progetti) serve a illustrare questi fili.
Se il CONCEPT DIFF è vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove sta andando il mondo dei motori), non un ELENCO (chi ha vinto e chi ha perso).

TONO E REGISTRO:
È un RACCONTO sulla meccanica e sulle persone che la vivono, non un manuale tecnico. Il testo deve suonare come un amico appassionato che ha appena letto tutto quello che c'è da leggere sul tema e te lo racconta con entusiasmo misurato — competente ma non pedante, preciso ma non freddo.

COSA NON FARE:
(A) Sensazionalistico: niente "straordinario", "rivoluzionario", "non ci crederete", urgenza artificiale.
(B) Accademico/tecnico: niente "cinematica del manovellismo", "combustione stechiometrica detonante", "mappatura tridimensionale dell'iniezione". Se l'ascoltatore in officina deve fermarsi a capire, la parola è sbagliata.

COSA FARE:
- Concretezza: quando un ingegnere o un pilota fa qualcosa di specifico (presenta un motore, pubblica un'analisi, prova un prototipo, parla in un'intervista), racconta il gesto prima di interpretarlo.
- Paragoni storici: collega i trend attuali a momenti della meccanica italiana o del motorsport ("come quando Ducati portò il desmovalve in MotoGP", "è la stessa scommessa che Piaggio fece con il Ciao nel '68", "ricorda il passaggio dal carburatore all'iniezione negli anni '90"). Almeno 2-3 per episodio.
- Punto di vista misurato: la voce ha un'opinione sulla meccanica e la dice con calma.
- Immagini concrete: invece di "ottimizzazione termodinamica" → "il motore brucia meno carburante per fare la stessa potenza". Invece di "geometria sospensiva evolutiva" → "il mono ammortizzatore che assorbe le radici senza perdere contatto con il terreno".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si è distratto.
- Nomi italiani e marchi noti trattati come personaggi, non come brand.

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo che apre il racconto del giorno.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi emergenti del mondo dei motori come fili di una stessa storia. Parti da un gesto concreto (un annuncio, un test, una dichiarazione), poi allarga. Paragone storico obbligatorio. Cita i pensatori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un protagonista. Chi è (1-2 frasi, senza CV), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli thinker totali. Meglio 4 pieni di scena che 6 vuoti.

[CHAPTER mood=upbeat]
"Motori e progetti da osservare."
4-5 moto, tecnologie, competizioni o uscite editoriali, raccontati in parole semplici. Perché valgono l'attenzione di chi ama la meccanica. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine più forte del racconto e lasciano un pensiero. "È stato Signal Motori. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: 2800-3500 parole (circa 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{rombo:"Apri con un SUONO o una SENSAZIONE fisica legata ai motori: il rombo di un bicilindrico al minimo, l'odore di benzina bruciata, la vibrazione di un monocilindrico in accelerazione. Una frase che lo contestualizza. Poi: 'Signal Motori, {giorno} {today_it}.'",dato:"Apri con UN DATO tecnico o di mercato preciso che illumina il tema del giorno (una potenza, un peso, un tempo sul giro, una quota di vendita). Una frase che lo contestualizza. Poi: 'Signal Motori, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI tecnica o industriale che il briefing svilupperà — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Motori.'",paragone:"Apri con un PARAGONE STORICO: un momento passato della meccanica o del motorsport italiano che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'È {giorno} {today_it}. Questo è Signal Motori.'",scena:"Apri con una SCENA concreta: un pilota che prova un prototipo, un ingegnere che smonta un motore, una moto che esce dalla catena di montaggio. Poi: 'Signal Motori, {giorno} {today_it}.'",evoluzione:"Riassumi in due frasi COSA È CAMBIATO nel mondo dei motori rispetto al briefing precedente. Poi: 'Questo è Signal Motori, {giorno} {today_it}.'"}}},travel:{thinkers:[{id:1,name:"Rick Steves",handle:"@RickSteves",domain:"Viaggio culturale europeo",active:!0,desc:"Autore e conduttore TV americano. Paladino del viaggio culturale in Europa, budget consapevole, anti-turismo di massa."},{id:2,name:"Pico Iyer",handle:"@PicoIyer",domain:"Viaggio filosofico / Slow travel",active:!0,desc:"Scrittore e saggista. Poeta del viaggio lento, della quiete e del perdersi come forma di conoscenza."},{id:3,name:"Nomadic Matt",handle:"@nomadicmatt",domain:"Budget backpacking",active:!0,desc:"Blogger e autore. Riferimento mondiale per il viaggio low-cost, guide pratiche e democratizzazione dell'accesso."},{id:4,name:"Brian Kelly",handle:"@thepointsguy",domain:"Loyalty / Miles optimization",active:!0,desc:"Fondatore di The Points Guy. Massimo esperto di programmi fedelta, miglia aeree e ottimizzazione del viaggio premium."},{id:5,name:"Rafat Ali",handle:"@Skift",domain:"Travel industry intelligence",active:!0,desc:"Fondatore di Skift, la piattaforma di intelligence sull'industria del turismo. Analisi di dati, trend e strategie del settore."},{id:6,name:"Paul Theroux",handle:"@pabortheaboroux",domain:"Anti-turismo / Letteratura",active:!0,desc:"Scrittore e viaggiatore. Maestro del viaggio letterario, critico feroce del turismo organizzato e della globalizzazione."},{id:7,name:"Mark Ellingham",handle:"@MarkEllingham",domain:"Turismo sostenibile",active:!0,desc:"Fondatore delle Rough Guides. Pioniere del turismo responsabile e della sostenibilita nel settore dei viaggi."},{id:8,name:"Oneika Raymond",handle:"@oneikaRaymond",domain:"Diversita nel viaggio",active:!0,desc:"Travel journalist e conduttrice TV. Voce per la diversita e l'inclusione nel mondo dei viaggi."},{id:9,name:"Johnny Jet",handle:"@JohnnyJet",domain:"Travel hacking",active:!0,desc:"Esperto di travel hacking, offerte aeree e trucchi per viaggiare meglio spendendo meno."},{id:10,name:"Conde Nast Traveller",handle:"@CNTraveller",domain:"Lusso / Esperienze premium",active:!0,desc:"La bibbia del viaggio di lusso. Definisce il canone dell'hotel, della destinazione e dell'esperienza premium."},{id:11,name:"Scott's Cheap Flights",handle:"@scottscheapflt",domain:"Errori tariffari / Accesso",active:!0,desc:"Servizio di alert per tariffe aeree scontate ed errori tariffari. Simbolo della democratizzazione del volo a basso costo."},{id:12,name:"Samantha Brown",handle:"@SamanthaBrown",domain:"Mainstream accessibile / PBS",active:!0,desc:"Conduttrice PBS e autrice. Volto del viaggio accessibile, mainstream e familiare per il pubblico americano."}],sources:["Skift","Conde Nast Traveller","Lonely Planet"],branding:{name:"Signal.Travel",nameHtml:"Signal<span>.</span>Travel",tagline:"Travel Intelligence · AI-Powered",htmlTitle:"Signal.Travel — Travel Intelligence",language:"it",aboutDescription:"Signal.Travel e un intelligence dashboard per viaggiatori consapevoli e operatori del turismo. Ogni giorno raccoglie e analizza le idee degli scrittori, esperti e analisti piu influenti del mondo dei viaggi, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/travel/",siteUrl:"https://it-mikesoft.github.io/signal-brief/travel",colors:{primary:"#0d9488",primaryHover:"#0f766e",accent:"#14b8a6",bg:"#f0fdfa",headerBg:"#ccfbf1",cardBg:"#ffffff",border:"#99f6e4",text:"#1a2e2e",textSecondary:"#4b6b6b",textMuted:"#7c9a9a"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"ec5e4263-2247-4fd7-a098-37cdcfe972ae",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Travel",channelDescription:"Briefing quotidiano su viaggi, turismo e cultura del viaggio. Analisi degli scrittori e analisti piu influenti, destinazioni emergenti e trend da osservare.",author:"Signal.Brief · Travel by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Leisure",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su viaggi, turismo e cultura del viaggio."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Travel",album:"Signal.Brief · Travel Daily Intelligence",genre:"Travel"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- Le tesi sul viaggio, il turismo o l'industria dei trasporti su cui si sta concentrando
- Posizioni specifiche su destinazioni, compagnie aeree, catene alberghiere, tendenze di viaggio o politiche turistiche
- Eventuali cambi di view rispetto al passato
- Link o riferimenti a interviste, articoli, guide, post recenti se disponibili

Stile: sintetico, denso, orientato al contenuto sul turismo e i viaggi. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi scrittori, esperti e analisti del mondo dei viaggi:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali nel mondo del turismo e dei viaggi? Dove convergono, dove divergono? Quale tensione di fondo emerge su overtourism vs accesso, lusso vs budget, slow travel vs iperconnessione, sostenibilita vs crescita del settore?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da scrittori/esperti/analisti del viaggio e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca le destinazioni, le piattaforme, le app, le compagnie, i servizi e le risorse piu rilevanti ed emergenti legati ai temi trattati sopra.

REGOLE:
1. Includi tutte le destinazioni/servizi citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}. Cerca su ciascuna fonte i progetti trending piu correlati ai temi.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturita della destinazione/servizio (1=appena lanciato, 10=consolidato)
   - "momentum": quanto e discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing sui viaggi come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Travel e un podcast di orientamento per viaggiatori consapevoli e operatori del turismo. Viene ascoltato in auto o in cuffia camminando — attenzione intermittente, niente possibilita di rileggere. Chi ascolta NON vuole una lista di destinazioni, vuole capire le DINAMICHE di fondo: cosa stanno pensando gli scrittori e gli analisti piu influenti, dove si muove il turismo, quali destinazioni emergono, quale tensione esiste tra overtourism e accesso, tra lusso e avventura.
La voce narrante e un narratore di viaggio con cultura geografica e storica: traduce flussi turistici e dati del settore in storie di luoghi e persone, collega il presente alla storia del viaggio, e ha un punto di vista — non e una guida turistica.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON e una rassegna di destinazioni. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo e il cuore narrativo.
Tutto il resto (sintesi, schede pensatori, progetti) serve a illustrare questi due fili.
Se il CONCEPT DIFF e vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove sta andando il mondo del turismo), non un ELENCO (dove andare in vacanza).

TONO E REGISTRO:
E un RACCONTO sul viaggio e sul suo significato, non un trattato di geografia economica. Il testo deve suonare come un amico competente che racconta cosa sta succedendo nel mondo dei viaggi, senza gergo tecnico e senza banalita da depliant.

COSA NON FARE:
(A) Sensazionalistico: niente "la destinazione dell'anno", "il viaggio che ti cambiera la vita", "offerta imperdibile", urgenza artificiale.
(B) Accademico: niente "carrying capacity turistica", "fenomeno di touristification", "elasticita della domanda leisure". Se l'ascoltatore in auto deve fermarsi a capire, la parola e sbagliata.

COSA FARE:
- Concretezza: quando un esperto fa una mossa (pubblica una guida, cambia una raccomandazione, lancia un allarme su una destinazione), racconta il gesto prima di interpretarlo.
- Paragoni storici: collega i trend attuali a momenti passati del turismo ("come il Grand Tour del Settecento", "ricorda il boom dei charter degli anni '70", "e la stessa dinamica di Bali prima del 2010"). Almeno 2-3 per episodio.
- Punto di vista misurato: la voce ha un'opinione e la esprime con calma.
- Immagini concrete: invece di "saturazione della destinazione" -> "una calle di Venezia dove i residenti sono meno dei turisti che la fotografano".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si e distratto.
- Zero gergo non necessario: se "volo economico" basta, non dire "low-cost carrier". Se "albergo" basta, non dire "property".

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo che apre il racconto del giorno.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi emergenti del mondo del viaggio come fili di una stessa storia. Parti da un gesto concreto di un esperto o scrittore, poi allarga. Paragone storico obbligatorio. Cita i pensatori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un pensatore/esperto. Chi e (1-2 frasi), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli totali. Meglio 4 pieni che 6 vuoti.

[CHAPTER mood=upbeat]
"Destinazioni e risorse da osservare."
4-5 destinazioni/servizi/piattaforme, raccontati in parole semplici. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine piu forte e lasciano un pensiero. "E stato Signal Travel. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: 2800-3500 parole (circa 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{cartolina:"Apri con un'IMMAGINE da un luogo: un aeroporto, una strada, un paesaggio che illumina il tema del giorno. Una frase che lo contestualizza. Poi: 'Signal Travel, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un flusso di passeggeri, una tariffa, un tasso di occupazione). Una frase che lo contestualizza. Poi: 'Signal Travel, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI sul turismo che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Travel.'",paragone:"Apri con un PARAGONE STORICO: un momento passato del turismo che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Travel.'",scena:"Apri con una SCENA concreta: un viaggiatore in un luogo, una compagnia aerea che annuncia una rotta, una citta che cambia le sue regole. Poi: 'Signal Travel, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nel mondo dei viaggi rispetto al briefing precedente. Poi: 'Questo e Signal Travel, {giorno} {today_it}.'"}}},vino:{thinkers:[{id:1,name:"Jancis Robinson",handle:"@JancisRobinson",domain:"Autorita enciclopedica / MW",active:!0,desc:"Master of Wine, autrice del Wine Atlas. Autorita enciclopedica mondiale, riferimento assoluto per vitigni e terroir."},{id:2,name:"Antonio Galloni",handle:"@agalloni",domain:"Critica italiana / Vinous",active:!0,desc:"Fondatore di Vinous. Critico italo-americano con la conoscenza piu profonda dei vini italiani nel mondo anglofono."},{id:3,name:"Alice Feiring",handle:"@alicefeiring",domain:"Vino naturale radicale",active:!0,desc:"Giornalista e autrice. Pioniera della difesa del vino naturale, critica feroce dell'enologia interventista."},{id:4,name:"Jamie Goode",handle:"@jamiegoode",domain:"Scienza del vino / Terroir",active:!0,desc:"Giornalista e divulgatore scientifico del vino. Ponte tra laboratorio e vigna, esperto di terroir e microbiologia."},{id:5,name:"Eric Asimov",handle:"@ericasimov",domain:"Anti-punteggi / NYT",active:!0,desc:"Wine critic del New York Times. Nemico dei punteggi, paladino del vino come esperienza culturale e conviviale."},{id:6,name:"Rajat Parr",handle:"@rajatparr",domain:"Sommelier e produttore",active:!0,desc:"Sommelier leggendario diventato produttore. Incarna il passaggio dal servizio alla vigna, dalla California alla Borgogna."},{id:7,name:"Madeline Puckette",handle:"@WineFolly",domain:"Democratizzazione del vino",active:!0,desc:"Fondatrice di Wine Folly. Ha reso il vino accessibile a milioni di persone con infografiche e linguaggio diretto."},{id:8,name:"Ian D'Agata",handle:"@iandagata",domain:"Vitigni autoctoni italiani",active:!0,desc:"Massimo esperto mondiale di vitigni autoctoni italiani. Enciclopedico, rigoroso, ponte tra scienza e tradizione."},{id:9,name:"Isabelle Legeron",handle:"@isabellegeron",domain:"Raw Wine / MW",active:!0,desc:"Master of Wine, fondatrice di RAW WINE. Pioniera delle fiere di vino naturale, attivista per la trasparenza in etichetta."},{id:10,name:"Arianna Occhipinti",handle:"@ariannaocchipinti",domain:"Vino naturale siciliano",active:!0,desc:"Produttrice siciliana di vino naturale a Vittoria. Icona della nuova generazione di vignaioli artigianali italiani."},{id:11,name:"Robert Parker",handle:"@Wine_Advocate",domain:"Punteggi / 100 punti",active:!0,desc:"Fondatore di Wine Advocate e del sistema a 100 punti. Ha definito (e polarizzato) il mercato del vino per decenni."},{id:12,name:"Hugh Johnson",handle:"@HughJohnsonWine",domain:"Enciclopedia / Old school",active:!0,desc:"Autore del Pocket Wine Book, il manuale piu venduto al mondo. Approccio britannico classico, enciclopedico, anti-moda."}],sources:["Vinous","Wine Spectator","Decanter"],branding:{name:"Signal.Vino",nameHtml:"Signal<span>.</span>Vino",tagline:"Wine Intelligence · AI-Powered",htmlTitle:"Signal.Vino — Wine Intelligence",language:"it",aboutDescription:"Signal.Vino e un intelligence dashboard per appassionati, professionisti e operatori del mondo del vino. Ogni giorno raccoglie e analizza le idee dei critici, produttori e divulgatori piu influenti, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/vino/",siteUrl:"https://it-mikesoft.github.io/signal-brief/vino",colors:{primary:"#881337",primaryHover:"#6b1030",accent:"#be123c",bg:"#fdf2f4",headerBg:"#fce4ec",cardBg:"#ffffff",border:"#e8a0b0",text:"#2e1a1a",textSecondary:"#6b4b4b",textMuted:"#9c7a7a"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"c9c93984-4fd7-4c6e-8064-49fdfc5b437d",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Vino",channelDescription:"Briefing quotidiano su vino, terroir e cultura enologica. Analisi dei critici e produttori piu influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Vino by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Leisure",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su vino, terroir e cultura enologica."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Vino",album:"Signal.Brief · Vino Daily Intelligence",genre:"Food & Wine"},podcastEnabled:!0,podcastTargetMinutes:5,podcastDays:["friday"]},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- Le tesi sul vino, i terroir o l'industria enologica su cui si sta concentrando
- Posizioni specifiche su regioni, vitigni, produttori, annate o tendenze di mercato
- Eventuali cambi di view rispetto al passato
- Link o riferimenti a interviste, articoli, degustazioni, review recenti se disponibili

Stile: sintetico, denso, orientato al contenuto enologico. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi critici, produttori e divulgatori del vino:

{summaries}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali nel mondo del vino? Dove convergono, dove divergono? Quale tensione di fondo emerge su naturale vs convenzionale, punteggi vs narrazione, tradizione vs innovazione, terroir vs mercato?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da critici/produttori/divulgatori del vino e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca i progetti, le cantine, le piattaforme, le app e le iniziative più rilevanti ed emergenti nel mondo del vino, legati ai temi trattati sopra.

TIPOLOGIE DA CERCARE (non solo vini, ma l'ecosistema intorno):
- Cantine e produttori innovativi citati dai thinker
- App e piattaforme (Vivino, CellarTracker, RawWine, ecc.)
- Progetti open source per enologia, analisi del terroir, viticoltura di precisione
- Iniziative di agricoltura biodinamica o rigenerativa per la vigna
- Database di vitigni autoctoni, mappe interattive del terroir
- Marketplace per vino naturale o piccoli produttori
- Festival, fiere o eventi significativi
- Libri o pubblicazioni recenti citate dai thinker

REGOLE:
1. Includi tutti i vini/cantine/risorse citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}. Cerca su ciascuna fonte i progetti trending piu correlati ai temi.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturita del produttore/progetto (1=appena lanciato, 10=consolidato)
   - "momentum": quanto e discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`,podcast:`Riscrivi il seguente briefing sul vino come script per un podcast audio in italiano.

CONTENUTO:
{content}

PROPOSITO DEL PODCAST (questo guida tutto il resto):
Signal Vino e un podcast di orientamento per appassionati, sommelier e operatori del mondo del vino. Viene ascoltato in auto o in cuffia camminando — attenzione intermittente, niente possibilita di rileggere. Chi ascolta NON vuole un bollettino di punteggi, vuole capire le DINAMICHE di fondo: cosa stanno pensando i critici e i produttori piu influenti, dove si muove il gusto, quali territori emergono, quale tensione esiste tra tradizione e innovazione.
La voce narrante e un narratore del vino con cultura del territorio: traduce terroir e tecniche in storie umane, collega il presente alla storia enologica, e ha un punto di vista — non e un catalogo di degustazione.

PRINCIPIO GUIDA (importantissimo):
Il podcast NON e una lista di assaggi. Ha un FOCUS chiaro: quello che il blocco CONCEPT DIFF chiama EMERGENTI e TENSIONI. Questo e il cuore narrativo.
Tutto il resto (sintesi, schede pensatori, progetti) serve a illustrare questi due fili.
Se il CONCEPT DIFF e vuoto o assente, usa la SYNTHESIS come spina dorsale.
Alla fine di ogni capitolo l'ascoltatore deve avere in testa una MAPPA (dove sta andando il mondo del vino), non un ELENCO (cosa ha preso 95 punti).

TONO E REGISTRO:
E un RACCONTO sul vino e sulle persone che lo fanno, non un trattato di enologia. Il testo deve suonare come un amico competente che racconta cosa sta succedendo nel mondo del vino, senza gergo tecnico inutile e senza snobismo.

COSA NON FARE:
(A) Sensazionalistico: niente "l'annata del secolo", "il vino che cambiera tutto", "scoperta imperdibile", urgenza artificiale.
(B) Accademico: niente "profilo organolettico complesso", "malolattica secondaria", "vinificazione riduttiva spinta". Se l'ascoltatore in auto deve fermarsi a capire, la parola e sbagliata.

COSA FARE:
- Concretezza: quando un produttore fa una scelta (cambia vitigno, adotta una tecnica, rilascia un'annata attesa), racconta il gesto prima di interpretarlo.
- Paragoni storici: collega i trend attuali a momenti passati del vino ("come il Barolo degli anni '80", "ricorda la rivoluzione dei Super Tuscan", "e la stessa dinamica della Borgogna pre-2010"). Almeno 2-3 per episodio.
- Punto di vista misurato: la voce ha un'opinione e la esprime con calma.
- Immagini concrete: invece di "terroir ad alta vocazione" -> "una vigna a 800 metri dove la neve arriva a novembre e l'uva matura sotto un sole che non scotta".
- Riprese del filo: 1-2 volte, torna sul tema centrale per chi si e distratto.
- Zero gergo non necessario: se "annata" basta, non dire "millesimo". Se "profumo" basta, non dire "bouquet".

PRIMA DELLO SCRIPT (due righe obbligatorie, PRIMA di qualsiasi [CHAPTER]):
[TITLE] <titolo breve, 3-7 parole, che cattura il tema centrale dell'episodio>
[DESCRIPTION] <descrizione di 1-2 frasi, massimo 200 caratteri, che riassume il cuore del briefing>

STRUTTURA (usa ESATTAMENTE questi marcatori di capitolo):

[CHAPTER mood=geo]
{intro_guide}
Niente formule standardizzate. Nome del podcast e data UNA sola volta, naturalmente.
Chiudi con un gancio narrativo che apre il racconto del giorno.
Massimo 100 parole.

[CHAPTER mood=soft]
Il cuore del racconto: intreccia i 2-3 temi emergenti del mondo del vino come fili di una stessa storia. Parti da un gesto concreto di un produttore o critico, poi allarga. Paragone storico obbligatorio. Cita i pensatori come personaggi. Massimo 600 parole.

[CHAPTER mood=tech]
Ritratto narrativo di un pensatore/produttore. Chi e (1-2 frasi), cosa ha fatto o detto di recente (scena concreta), come si collega al tema del giorno, un pensiero di chiusura. 350-450 parole.

[CHAPTER mood=tech]
Un altro ritratto, stesso taglio, 350-450 parole.
Includi 4 o 5 capitoli totali. Meglio 4 pieni che 6 vuoti.

[CHAPTER mood=upbeat]
"Vini e risorse da osservare."
4-5 vini/cantine/piattaforme, raccontati in parole semplici. Massimo 320 parole.

[CHAPTER mood=soft]
Chiusura: 2-3 frasi che richiamano l'immagine piu forte e lasciano un pensiero. "E stato Signal Vino. Alla prossima." Massimo 70 parole.

VINCOLI TECNICI:
- NESSUN link, URL, markdown, handle Twitter nel testo parlato.
- NESSUNA indicazione scenica.
- Tra un capitolo e l'altro due righe vuote.
- Target totale: 2800-3500 parole (circa 20 minuti di ascolto).
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.
`,introStyles:{vigna:"Apri con un'IMMAGINE dalla vigna o dalla cantina: un gesto, un profumo, un paesaggio che illumina il tema del giorno. Una frase che lo contestualizza. Poi: 'Signal Vino, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un'annata, un prezzo all'asta, una resa per ettaro, un punteggio). Una frase che lo contestualizza. Poi: 'Signal Vino, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI enologica che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Vino.'",paragone:"Apri con un PARAGONE STORICO: un momento passato del mondo del vino che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Vino.'",scena:"Apri con una SCENA concreta: un produttore in vigna, una degustazione appena avvenuta, un'asta record. Poi: 'Signal Vino, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nel mondo del vino rispetto al briefing precedente. Poi: 'Questo e Signal Vino, {giorno} {today_it}.'"}}}},$f={thinkers:[{id:1,name:"Ray Dalio",handle:"@RayDalio",domain:"Macro / All-Weather",active:!0,desc:"Fondatore di Bridgewater, il più grande hedge fund al mondo. Teorico dei cicli di debito e dell'All-Weather portfolio."},{id:2,name:"Howard Marks",handle:"@HowardMarksBook",domain:"Value Investing / Rischio",active:!0,desc:"Co-fondatore di Oaktree Capital. I suoi memo sul rischio e il market sentiment sono lettura obbligatoria a Wall Street."},{id:3,name:"Cathie Wood",handle:"@CathieDWood",domain:"Growth / Innovazione",active:!0,desc:"CEO di ARK Invest. Scommesse ad alta convinzione su AI, genomica, robotica e blockchain."},{id:4,name:"Nassim Taleb",handle:"@nntaleb",domain:"Antifragilità / Tail Risk",active:!0,desc:"Autore di Il Cigno Nero e Antifragile. Matematico, trader, critico feroce della finanza convenzionale."},{id:5,name:"Matt Levine",handle:"@matt_levine",domain:"Giornalismo finanziario",active:!0,desc:"Columnist di Bloomberg. Analisi sarcastiche e profonde sulla struttura dei mercati, dei deal e della regolamentazione."},{id:6,name:"Morgan Housel",handle:"@morganhousel",domain:"Finanza comportamentale",active:!0,desc:"Autore di La Psicologia dei Soldi. Scrive sul rapporto tra psicologia, tempo e denaro."},{id:7,name:"Lyn Alden",handle:"@LynAldenContact",domain:"Macro / Cripto bilanciato",active:!0,desc:"Analista macro indipendente. Ponte tra investimento tradizionale e cripto, con rigore quantitativo."},{id:8,name:"Ben Felix",handle:"@BenFelixCSI",domain:"Investimento passivo / Evidence",active:!0,desc:"Portfolio manager e YouTuber canadese. Paladino dell'investimento evidence-based, anti-stock-picking."},{id:9,name:"Peter Schiff",handle:"@PeterSchiff",domain:"Oro / Austrian Economics",active:!0,desc:"CEO di Euro Pacific Capital. Permabear, critico della Fed, sostenitore dell'oro come riserva di valore."},{id:10,name:"Ramit Sethi",handle:"@ramit",domain:"Finanza personale pratica",active:!0,desc:"Autore di I Will Teach You to Be Rich. Anti-frugalità, pro-sistemi automatici e spesa consapevole."},{id:11,name:"Chamath Palihapitiya",handle:"@chamath",domain:"Tech investing / Contrarian",active:!0,desc:"CEO di Social Capital, ex Facebook. Investitore tech contrarian con forti posizioni politiche."},{id:12,name:"Suze Orman",handle:"@SuzeOrmanShow",domain:"Finanza mainstream / TV",active:!0,desc:"Volto televisivo della finanza personale americana. Budgeting tradizionale, approccio conservativo."}],sources:["Finviz","Bloomberg Trending","Seeking Alpha"],branding:{nameHtml:"Signal<span>.</span>Finance",tagline:"Investment Intelligence · AI-Powered",aboutDescription:"Signal.Finance è un intelligence dashboard per investitori e decisori. Ogni giorno raccoglie e analizza le idee degli investitori e analisti più influenti, produce sintesi trasversali sui trend di mercato, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',colors:{primary:"#059669",primaryHover:"#047857",accent:"#d97706",bg:"#f8faf9",headerBg:"#f0fdf4",cardBg:"#ffffff",border:"#d1e7dd",text:"#1a2e1a",textSecondary:"#4b6b4b",textMuted:"#7c9a7c"},fonts:{googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"bffb56df-3059-4493-9275-23396c18e129",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{},podcastConfig:{},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

Includi:
- Le tesi di mercato o macro su cui si sta concentrando
- Posizioni specifiche su asset, settori o tendenze economiche
- Eventuali cambi di view rispetto al passato
- Link o riferimenti a interviste, memo, paper, newsletter recenti se disponibili

Stile: sintetico, denso, orientato al contenuto finanziario. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.
`,synthesis:`Hai appena letto i segnali recenti di questi investitori e analisti di riferimento:

{summaries}

Ora produci una cross-synthesis: quali sono i temi di mercato emergenti trasversali? Dove convergono, dove divergono? Quale tensione di fondo emerge su rischio, allocazione, politica monetaria o ciclo economico?

Regole:
- Quando citi un'idea riconducibile a un investitore specifico, includi il link alla fonte originale usando il formato markdown [testo](url).
- Quando menzioni il nome di un investitore, scrivilo esattamente come appare sopra.
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.
`,projects:`Hai i seguenti segnali da investitori/analisti e la loro cross-synthesis:

SEGNALI:
{signals}

SYNTHESIS:
{synthesis}

Cerca gli strumenti, le piattaforme e i prodotti finanziari più rilevanti ed emergenti legati ai temi trattati sopra.

TIPOLOGIE DA CERCARE (l'ecosistema dell'investimento):
- ETF tematici o innovativi legati ai trend discussi dai thinker
- Piattaforme di investimento (Robinhood, Interactive Brokers, Trade Republic, ecc.)
- Tool di analisi e screener (Portfolio Visualizer, Koyfin, TradingView)
- Newsletter e servizi di ricerca indipendente
- Strategie o modelli di portafoglio citati (All-Weather, Permanent Portfolio, ecc.)
- Piattaforme di finanza personale e budgeting (YNAB, Monarch, ecc.)
- Progetti DeFi o crypto rilevanti per il contesto macro
- Libri o pubblicazioni recenti citati dai thinker
- Broker, robo-advisor o servizi di wealth management innovativi

REGOLE:
1. Includi tutti gli strumenti/prodotti citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 elemento: {sources_list}. Cerca su ciascuna fonte gli strumenti trending più correlati ai temi.
3. Per ogni elemento assegna due punteggi da 1 a 10:
   - "maturity": maturità dello strumento (1=appena lanciato, 10=consolidato)
   - "momentum": quanto è discusso ora (1=stabile, 10=trending)
4. Massimo 12 elementi totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido. Ogni elemento:
{"name": "nome", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}
`,conceptDiff:`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
{old_synthesis}

SINTESI ATTUALE:
{new_synthesis}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Lo schema DEVE essere rispettato ALLA LETTERA — chiavi ESATTE (in inglese), niente varianti italiane tipo "da"/"a", niente stringhe nude al posto degli oggetti.

{
  "emerging":    [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "disappeared": [{"concept": "titolo breve", "detail": "spiegazione in 1 frase", "who": ["Nome Persona"]}],
  "evolved":     [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable":      [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions":    [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione A", "Persona B: posizione B"]}]
}

Regole vincolanti sullo schema:
- OGNI elemento di OGNI array DEVE essere un oggetto con le chiavi sopra indicate. MAI una stringa nuda.
- Usa ESATTAMENTE le chiavi inglesi: "concept", "detail", "from", "to", "who", "axis", "sides". Non tradurle.
- "who" è SEMPRE un array di stringhe (anche se contiene un solo nome). Se nessun pensatore è attribuibile, usa [].
- "sides" in "tensions" è un array di stringhe del tipo "NomePersona: posizione".

Regole sul contenuto:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati (fornisci SEMPRE entrambi "from" e "to")
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 6 elementi per categoria
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.
`}};const Hd=typeof Nc<"u"?Nc:{},qf=$f;function Gf(){if(typeof window>"u")return null;const e="/signal-brief/finanza/".replace(/\/$/,"");let t=window.location.pathname;e&&t.startsWith(e)&&(t=t.slice(e.length));const n=t.split("/").filter(Boolean)[0];return n&&Hd[n]?n:null}const Kn=Gf(),vn=Kn?Hd[Kn]:qf,Wf=vn.thinkers,Qf=vn.sources,ve=vn.branding,ya=vn.prompts,nn=vn.council;vn.rss;vn.podcastConfig;function Sa(e,t){return Object.entries(t).reduce((n,[i,o])=>n.replaceAll(`{${i}}`,String(o??"")),e)}const Kf="/claude",Yf="https://summon-star.casamon.dev/api",Jf=Yf;async function xa(e){const t=await fetch(Kf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const o=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${o}…`)}const i=await t.json();if(!t.ok)throw new Error(i.error||"Claude CLI error");return i}function Zf(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Xf(e){const t=Sa(ya.scan,{thinker_name:e.name,thinker_handle:e.handle});return(await xa(t)).text||"Nessun contenuto estratto."}async function bc(e){const t=e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`),n=Sa(ya.synthesis,{summaries:t});return(await xa(n)).text||"Nessun contenuto estratto."}async function eg(e,t,n){const i=e.map(p=>`### ${p.name}
${p.content}`).join(`

`),o=n&&n.length>0?n.join(", "):"GitHub Trending, trendshift.io, Hacker News",a=Sa(ya.projects,{signals:i,synthesis:t,sources_list:o}),s=((await xa(a)).text||"").trim().match(/\[[\s\S]*\]/);if(!s)throw new Error("Formato risposta non valido");return JSON.parse(s[0])}async function tg(e,t){const n=Sa(ya.conceptDiff,{old_synthesis:e,new_synthesis:t}),a=((await xa(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}const zc="https://summon-star.casamon.dev";function Vd(e,t={}){return fetch(`${Jf}${e}`,{credentials:"include",...t})}async function ng(e){if(!e)return[];try{const t=await Vd(`/profiles/${e}/personas`);if(!t.ok)return[];const n=await t.json();return Array.isArray(n)?n:[]}catch{return[]}}async function ig(e,t,n,i){const o=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,a=await Vd("/council/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:o,board_id:i||nn.boardId,stop_mode:"cost",budget_usd:nn.budgetUsd,user_language:nn.userLanguage,max_words:nn.maxWords,rounds:nn.rounds,include_moderation:!0,skip_sage_questions:!0})});if(a.status===401||a.status===403){const p=new Error("Accesso non autorizzato — login richiesto");throw p.code="AUTH_REQUIRED",p}if(!a.ok){const p=await a.json().catch(()=>({}));throw new Error(p.detail||p.error||"Errore council stream")}const r=a.body.getReader(),l=new TextDecoder;let s="";for(;;){const{done:p,value:y}=await r.read();if(p)break;s+=l.decode(y,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let h="";for(const b of v)if(b.startsWith("event: "))h=b.slice(7).trim();else if(b.startsWith("data: ")&&h){try{const z=JSON.parse(b.slice(6));n(h,z)}catch{}h=""}}}function cn(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function og(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return cn(e);let i="";for(let o=0;o<n.length;o++){const a=n[o].trim();if(a)if(t.test(a)){t.lastIndex=0;const r=a.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),l=o+1<n.length?n[o+1].trim():"";l?(i+=`<details open><summary>${Ic(r)}</summary>${cn(l)}</details>`,o++):i+=`<strong>${Ic(r)}</strong>`}else i+=cn(a)}return i}function Ic(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ag(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((i,o)=>o.name.length-i.name.length);for(const i of n){const o=i.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`(?!<a[^>]*>)(${o})(?![^<]*<\\/a>)`,"g");e=e.replace(a,`<a href="#thinker-${i.id}" class="thinker-link">$1</a>`)}return e}const kc="​‌",wc="‌​";function rg(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),i=t.split(/(\s+)/),o=n.length,a=i.length,r=Array.from({length:o+1},()=>new Uint16Array(a+1));for(let v=1;v<=o;v++)for(let h=1;h<=a;h++)r[v][h]=n[v-1]===i[h-1]?r[v-1][h-1]+1:Math.max(r[v-1][h],r[v][h-1]);const l=[];let s=o,p=a;for(;s>0||p>0;)s>0&&p>0&&n[s-1]===i[p-1]?(l.unshift({type:"equal",text:n[s-1]}),s--,p--):p>0&&(s===0||r[s][p-1]>=r[s-1][p])?(l.unshift({type:"added",text:i[p-1]}),p--):(l.unshift({type:"removed",text:n[s-1]}),s--);const y=[];for(const v of l)y.length>0&&y[y.length-1].type===v.type?y[y.length-1].text+=v.text:y.push({...v});return y}function Cc(e,t){const n=t==="left"?"added":"removed",i=t==="left"?"removed":"added";let o="";for(const l of e)l.type!==n&&(l.type===i?o+=kc+l.text+wc:o+=l.text);let a=cn(o);const r=t==="left"?"diff-word-removed":"diff-word-added";return a=a.replace(new RegExp(`${kc}(.*?)${wc}`,"gs"),`<span class="${r}">$1</span>`),a}function lg(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function sg(){const[e,t]=w.useState(!1),[n,i]=w.useState(-1),[o,a]=w.useState([]),r=w.useRef([]),l=w.useRef(null),s=w.useCallback(()=>{const m=speechSynthesis.getVoices().filter(u=>u.lang.startsWith("it"));return m.find(u=>u.name.includes("Emma"))||m.find(u=>u.name.includes("Enhanced")||u.name.includes("Premium"))||m[0]||null},[]),p=w.useCallback(()=>{speechSynthesis.cancel(),r.current=[],t(!1),i(-1)},[]),y=w.useCallback((F,m=0)=>{speechSynthesis.cancel(),r.current=F.slice(m),a(F);const u=()=>{if(r.current.length===0){t(!1),i(-1);return}const f=r.current.shift(),S=F.indexOf(f);i(S);const k=`${f.title}. ${lg(f.text)}`,x=new SpeechSynthesisUtterance(k);x.lang="it-IT",x.rate=1;const P=s();P&&(x.voice=P),x.onend=u,x.onerror=u,l.current=x,speechSynthesis.speak(x)};t(!0),u()},[s]),v=w.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=w.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),b=w.useCallback(()=>{speechSynthesis.cancel()},[]),z=w.useCallback((F,m,u,f)=>{const S=[];F&&S.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const k of u)m[k.id]&&!m[k.id].startsWith("Errore")&&S.push({title:k.name,text:m[k.id],type:"thinker"});if(f&&f.length>0){const k=f.map(x=>{var P;return`${x.name}: ${x.description}${(P=x.citedBy)!=null&&P.length?`. Citato da ${x.citedBy.join(", ")}`:""}`}).join(`.

`);S.push({title:"Progetti Emergenti",text:k,type:"projects"})}y(S)},[y]),T=w.useCallback((F,m)=>{y([{title:F,text:m,type:"single"}])},[y]);return w.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:o,playAll:z,playSingle:T,pause:v,resume:h,stop:p,skipForward:b}}const rr=Kn?`?theme=${Kn}`:"",cg=`
  @import url('${ve.fonts.googleFontsUrl}');
`,ug=`
  :root {
    --sb-primary: ${ve.colors.primary};
    --sb-primary-hover: ${ve.colors.primaryHover};
    --sb-accent: ${ve.colors.accent};
    --sb-bg: ${ve.colors.bg};
    --sb-header-bg: ${ve.colors.headerBg||ve.colors.bg};
    --sb-card-bg: ${ve.colors.cardBg||"#ffffff"};
    --sb-border: ${ve.colors.border};
    --sb-text: ${ve.colors.text};
    --sb-text-secondary: ${ve.colors.textSecondary||"#6b7280"};
    --sb-text-muted: ${ve.colors.textMuted||"#9ca3af"};
  }
`,dg=`
  ${cg}
  ${ug}

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--sb-bg); }

  .dashboard {
    min-height: 100vh;
    background: var(--sb-bg);
    color: var(--sb-text);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    line-height: 1.6;
  }

  .scanline {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--sb-primary)44, transparent);
    animation: scan 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 100;
  }
  @keyframes scan { 0% { top: 0; opacity: 1; } 100% { top: 100vh; opacity: 0; } }

  .header {
    background: var(--sb-header-bg);
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 0 var(--sb-border);
    border-bottom: 1px solid var(--sb-border);
  }

  .header-top {
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    align-items: baseline;
    gap: 16px;
  }

  .logo {
    font-family: 'Fraunces', serif;
    font-size: 22px;
    font-weight: 600;
    color: #111827;
    letter-spacing: -0.5px;
  }
  .logo span { color: var(--sb-primary); }

  .tagline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .timestamp {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
  }

  /* Tab bar */
  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0 32px;
    border-top: 1px solid var(--sb-border);
  }

  .tab-btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    color: var(--sb-text-muted);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    padding: 12px 20px;
    cursor: pointer;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: all 0.15s;
  }
  .tab-btn:hover { color: #374151; }
  .tab-btn.active {
    color: var(--sb-primary);
    border-bottom-color: var(--sb-primary);
    font-weight: 500;
  }
  .tab-btn .tab-badge {
    font-size: 9px;
    background: #eff6ff;
    color: var(--sb-primary);
    border-radius: 8px;
    padding: 1px 6px;
    margin-left: 6px;
  }

  /* Main content */
  .tab-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 28px 32px;
  }

  /* Buttons */
  .btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    padding: 8px 18px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: all 0.15s ease;
  }
  .btn-primary { background: var(--sb-primary); color: #ffffff; border: 1px solid var(--sb-primary-hover); }
  .btn-primary:hover:not(:disabled) { background: var(--sb-primary-hover); }
  .btn-primary:disabled { opacity: 0.35; cursor: not-allowed; }
  .btn-synthesis { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
  .btn-synthesis:hover:not(:disabled) { background: #dcfce7; color: #15803d; }
  .btn-synthesis:disabled { opacity: 0.35; cursor: not-allowed; }
  .btn-small { padding: 4px 10px; font-size: 10px; }
  .btn-ghost { background: transparent; color: var(--sb-text-secondary); border: 1px solid #d1cdc7; }
  .btn-ghost:hover { color: #374151; border-color: var(--sb-text-muted); background: #f3f4f6; }

  /* Synthesis panel */
  .synthesis-panel {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 4px;
    padding: 24px 28px;
    margin-bottom: 28px;
    position: relative;
    overflow: hidden;
  }
  .synthesis-panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #22c55e88, transparent);
  }
  .synthesis-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }
  .synthesis-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #15803d;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #dcfce7;
    padding: 3px 8px;
    border-radius: 2px;
  }
  .synthesis-title {
    font-family: 'Fraunces', serif;
    font-size: 16px;
    font-weight: 300;
    color: #166534;
    font-style: italic;
  }
  .synthesis-body {
    font-size: 13px;
    color: #1f2937;
    line-height: 1.85;
    white-space: pre-wrap;
  }
  .synthesis-actions {
    margin-left: auto;
    display: flex;
    gap: 6px;
  }

  /* Cards */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    gap: 16px;
  }
  .card {
    background: #ffffff;
    border: 1px solid var(--sb-border);
    border-radius: 4px;
    overflow: hidden;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    border-color: #bfdbfe;
    box-shadow: 0 2px 8px rgba(37,99,235,0.06);
  }
  .card-header {
    padding: 14px 18px;
    border-bottom: 1px solid #f0ece6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--sb-header-bg);
  }
  .card-identity { flex: 1; min-width: 0; }
  .card-name {
    font-size: 14px;
    font-weight: 500;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .card-handle {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
    font-weight: 400;
    text-decoration: none;
  }
  .card-handle:hover { color: var(--sb-primary); text-decoration: underline; }
  .card-domain {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
    margin-top: 2px;
  }
  .card-status-pill {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    padding: 3px 10px;
    border-radius: 20px;
    letter-spacing: 0.04em;
    flex-shrink: 0;
  }
  .pill-loading { background: #fffbeb; color: #b45309; }
  .pill-done { background: #f0fdf4; color: #16a34a; }
  .pill-error { background: #fef2f2; color: #dc2626; }
  .pill-stale { background: #fef3c7; color: #92400e; border: 1px dashed var(--sb-accent); cursor: help; }
  .pill-fonti-only { background: #eff6ff; color: var(--sb-primary); font-size: 8px; border: 1px solid #bfdbfe; }

  .card-desc {
    font-size: 11.5px;
    color: var(--sb-text-secondary);
    line-height: 1.5;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f0ede8;
    font-style: italic;
  }
  .card-toggle {
    cursor: pointer;
    user-select: none;
  }
  .card-toggle .toggle-icon {
    display: inline-block;
    font-size: 9px;
    color: var(--sb-text-muted);
    margin-right: 6px;
    transition: transform 0.15s;
  }
  .card-toggle.collapsed .toggle-icon { transform: rotate(-90deg); }

  /* Collapsible sections inside the signal content */
  .card-content details {
    margin-bottom: 8px;
    border-left: 2px solid #e5e7eb;
    padding-left: 10px;
  }
  .card-content details summary {
    cursor: pointer;
    font-weight: 600;
    font-size: 12px;
    color: #374151;
    margin-bottom: 4px;
    list-style: none;
    user-select: none;
  }
  .card-content details summary::marker,
  .card-content details summary::-webkit-details-marker { display: none; }
  .card-content details summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 6px;
    font-size: 10px;
    color: var(--sb-text-muted);
    transition: transform 0.15s;
  }
  .card-content details[open] summary::before { transform: rotate(90deg); }
  .card-body { padding: 18px 18px; }
  .card-content {
    font-size: 12.5px;
    color: #374151;
    line-height: 1.9;
    white-space: pre-wrap;
  }

  /* Links in cards and synthesis */
  .card-content a, .synthesis-body a {
    color: var(--sb-primary);
    text-decoration: underline;
    text-decoration-color: #93c5fd;
    text-underline-offset: 2px;
  }
  .card-content a:hover, .synthesis-body a:hover {
    color: var(--sb-primary-hover);
    text-decoration-color: var(--sb-primary);
  }

  .diff-unchanged { color: inherit; }
  .diff-new { color: inherit; }

  .synthesis-body a.thinker-link {
    color: #374151;
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: var(--sb-text-muted);
    text-underline-offset: 2px;
    font-weight: 500;
    cursor: pointer;
  }
  .synthesis-body a.thinker-link:hover {
    color: #111827;
    text-decoration-style: solid;
    text-decoration-color: #374151;
  }

  /* Loading / error */
  .card-loading-state {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--sb-text-muted);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    padding: 20px 0;
  }
  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #e5e7eb;
    border-top-color: var(--sb-accent);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    flex-shrink: 0;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .card-error {
    color: #dc2626;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    padding: 16px 0;
  }

  /* Section header / toolbar */
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .section-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .progress-bar { height: 2px; background: #e5e7eb; margin-bottom: 24px; border-radius: 1px; overflow: hidden; }
  .progress-fill { height: 100%; background: linear-gradient(90deg, var(--sb-primary), #60a5fa); transition: width 0.3s ease; }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 80px 20px;
    color: var(--sb-text-muted);
  }
  .empty-icon { font-size: 48px; margin-bottom: 16px; }
  .empty-title {
    font-family: 'Fraunces', serif;
    font-size: 18px;
    font-weight: 300;
    color: var(--sb-text-secondary);
    margin-bottom: 8px;
    font-style: italic;
  }
  .empty-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    line-height: 1.8;
    max-width: 400px;
    margin: 0 auto;
    color: var(--sb-text-muted);
  }

  /* History diff */
  .history-page-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
  .history-page-title {
    font-family: 'Fraunces', serif;
    font-size: 20px;
    font-weight: 300;
    color: #111827;
    font-style: italic;
  }
  .history-selectors {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    align-items: center;
  }
  .history-select {
    flex: 1;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    padding: 8px 12px;
    border: 1px solid #d1cdc7;
    border-radius: 3px;
    background: #ffffff;
    color: #374151;
    cursor: pointer;
    outline: none;
  }
  .history-select:focus { border-color: var(--sb-primary); box-shadow: 0 0 0 2px #bfdbfe55; }
  .history-select-locked {
    background: #faf8f4;
    color: var(--sb-text-secondary);
    cursor: default;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .history-vs {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }
  .diff-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .diff-panel {
    background: #ffffff;
    border: 1px solid var(--sb-border);
    border-radius: 4px;
    padding: 20px 24px;
    overflow-y: auto;
    max-height: calc(100vh - 280px);
  }
  .diff-panel-left { border-top: 2px solid #fca5a5; }
  .diff-panel-right { border-top: 2px solid #86efac; }
  .diff-panel-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }
  .diff-panel-date { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--sb-text-secondary); margin-bottom: 4px; }
  .diff-panel-thinkers { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--sb-text-muted); margin-bottom: 14px; }
  .diff-panel-body { font-size: 13px; color: #1f2937; line-height: 1.85; white-space: pre-wrap; }
  .diff-word-removed { color: var(--sb-text-muted); }
  .diff-word-added { }
  /* Concept diff */
  .concept-diff {
    background: #ffffff;
    border: 1px solid var(--sb-border);
    border-radius: 4px;
    padding: 24px 28px;
    margin-bottom: 24px;
  }
  .concept-section {
    margin-bottom: 20px;
  }
  .concept-section:last-child { margin-bottom: 0; }
  .concept-section-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .concept-item {
    padding: 8px 12px;
    margin-bottom: 4px;
    border-radius: 3px;
    font-size: 12.5px;
    line-height: 1.6;
  }
  .concept-item-title {
    font-weight: 500;
    margin-bottom: 2px;
  }
  .concept-item-detail {
    font-size: 11px;
    color: var(--sb-text-secondary);
  }
  .concept-item-who {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
    margin-top: 2px;
  }
  .concept-emerging { background: #f0fdf4; border-left: 3px solid #22c55e; }
  .concept-disappeared { background: #fef2f2; border-left: 3px solid #ef4444; }
  .concept-evolved { background: #fffbeb; border-left: 3px solid var(--sb-accent); }
  .concept-stable { background: #f9fafb; border-left: 3px solid #d1d5db; }
  .concept-tension { background: #faf5ff; border-left: 3px solid #7c3aed; }

  .concept-tabs {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid var(--sb-border);
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  .concept-tab {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 8px 14px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--sb-text-muted);
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .concept-tab:hover:not(.active) { color: var(--sb-text-secondary); }
  .concept-tab.active { color: #374151; border-bottom-color: currentColor; }
  .concept-tab-count {
    font-size: 9px;
    color: var(--sb-text-muted);
    background: #f3f4f6;
    border-radius: 8px;
    padding: 1px 6px;
  }
  .concept-tab.active .concept-tab-count { color: #374151; background: #eef2ff; }
  .concept-tab-empty {
    text-align: center;
    padding: 24px 12px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--sb-text-muted);
  }
  .concept-who-link {
    color: var(--sb-primary);
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px dotted #93c5fd;
  }
  .concept-who-link:hover { color: var(--sb-primary-hover); border-bottom-color: var(--sb-primary-hover); }
  .concept-who-item { white-space: nowrap; }
  .concept-cites {
    font-size: 9px;
    margin-left: 2px;
    line-height: 0;
    vertical-align: super;
  }
  .concept-cite {
    display: inline-block;
    padding: 0 3px;
    margin-left: 1px;
    border-radius: 2px;
    background: #e0e7ff;
    color: #3730a3;
    text-decoration: none;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 500;
  }
  .concept-cite:hover { background: #c7d2fe; color: #1e1b4b; }
  .thinker-card-highlight {
    animation: thinker-pulse 1.6s ease-out;
  }
  @keyframes thinker-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.55); }
    40%  { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0.20); }
    100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
  }

  .history-empty { text-align: center; padding: 60px 20px; color: var(--sb-text-muted); font-family: 'IBM Plex Mono', monospace; font-size: 12px; }

  /* Log tab */
  .log-pane { margin-bottom: 24px; }
  .log-pane-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  .log-box {
    background: #1f1d18;
    border: 1px solid #3a352d;
    border-radius: 4px;
    padding: 12px 14px;
    font-family: 'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace;
    font-size: 11px;
    line-height: 1.55;
    color: #d4d4d4;
    max-height: 360px;
    overflow-y: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .log-line { display: block; }
  .log-line.log-event   { color: #a3a3a3; }
  .log-line.log-success { color: #86efac; }
  .log-line.log-error   { color: #fca5a5; }
  .log-line.log-warn    { color: #fcd34d; }
  .log-line.log-info    { color: #d4d4d4; }
  .log-empty {
    padding: 24px 12px;
    text-align: center;
    color: var(--sb-text-secondary);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
  }

  /* Config tab */
  .config-section {
    margin-bottom: 32px;
  }
  .config-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .thinker-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 6px;
    margin-bottom: 12px;
  }
  .thinker-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 14px;
    cursor: pointer;
    transition: background 0.1s;
    border: 1px solid var(--sb-border);
    border-radius: 3px;
    background: #ffffff;
  }
  .thinker-row:hover { background: #eeece8; }
  .thinker-row.active { border-color: #bfdbfe; background: #eff6ff; }
  .thinker-check {
    width: 14px; height: 14px;
    border: 1px solid #d1cdc7;
    border-radius: 2px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    background: #ffffff;
    transition: all 0.1s;
  }
  .thinker-row.active .thinker-check { background: var(--sb-primary); border-color: var(--sb-primary); }
  .check-icon { width: 8px; height: 6px; fill: none; stroke: #ffffff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .thinker-info { flex: 1; min-width: 0; }
  .thinker-name { font-size: 12px; color: #374151; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .thinker-row.active .thinker-name { color: var(--sb-primary-hover); }
  .thinker-meta { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--sb-text-muted); margin-top: 1px; }
  .thinker-meta a { color: var(--sb-text-muted); text-decoration: none; }
  .thinker-meta a:hover { color: var(--sb-primary); text-decoration: underline; }
  .thinker-status {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .thinker-status.loading { background: var(--sb-accent); animation: pulse-dot 1.5s ease infinite; }
  .thinker-status.done { background: #22c55e; }
  .thinker-status.stale { background: var(--sb-accent); box-shadow: 0 0 0 2px #fef3c7; }
  .thinker-status.error { background: #ef4444; }
  @keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

  .add-thinker-row {
    display: flex;
    gap: 6px;
    padding: 8px 0;
  }
  .input-field {
    border: 1px solid #d1cdc7;
    border-radius: 3px;
    padding: 5px 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #374151;
    outline: none;
  }
  .input-field:focus { border-color: var(--sb-primary); box-shadow: 0 0 0 2px #bfdbfe55; }
  .input-field::placeholder { color: #d1d5db; }

  .source-list { margin-bottom: 8px; }
  .source-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    border: 1px solid var(--sb-border);
    border-radius: 3px;
    background: #ffffff;
    margin-bottom: 4px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #374151;
  }
  .source-delete {
    background: none;
    border: none;
    color: #d1d5db;
    cursor: pointer;
    font-size: 14px;
    padding: 0 4px;
  }
  .source-delete:hover { color: #ef4444; }

  /* Projects tab */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
    gap: 16px;
  }
  .project-card {
    background: #ffffff;
    border: 1px solid var(--sb-border);
    border-radius: 4px;
    padding: 18px 20px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .project-card:hover {
    border-color: #bfdbfe;
    box-shadow: 0 2px 8px rgba(37,99,235,0.06);
  }
  .project-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .project-name {
    font-size: 14px;
    font-weight: 500;
    color: #111827;
  }
  .project-name a {
    color: #111827;
    text-decoration: none;
  }
  .project-name a:hover {
    color: var(--sb-primary);
    text-decoration: underline;
  }
  .project-source {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
  }
  .project-desc {
    font-size: 12.5px;
    color: #374151;
    line-height: 1.7;
    margin-bottom: 10px;
  }
  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }
  .project-cited {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-secondary);
  }
  .project-themes {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }
  .project-theme {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    background: #eff6ff;
    color: var(--sb-primary);
    padding: 2px 8px;
    border-radius: 10px;
  }

  /* Quadrant chart */
  .quadrant-container {
    background: #ffffff;
    border: 1px solid var(--sb-border);
    border-radius: 4px;
    padding: 24px 28px;
    margin-bottom: 24px;
  }
  .quadrant-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
  }
  .quadrant-svg {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    display: block;
  }
  .quadrant-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    fill: #d1d5db;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .quadrant-axis-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 8px;
    fill: #9ca3af;
  }
  .quadrant-dot {
    cursor: pointer;
    transition: r 0.15s;
  }
  .quadrant-dot:hover {
    r: 7;
  }
  .quadrant-dot-label {
    font-family: 'Inter', sans-serif;
    font-size: 9px;
    fill: #374151;
    pointer-events: none;
  }

  /* Council panel */
  .council-panel {
    background: #faf5ff;
    border: 1px solid #e9d5ff;
    border-radius: 4px;
    padding: 20px 24px;
    margin-top: 20px;
  }
  .council-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }
  .council-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #7c3aed;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #ede9fe;
    padding: 3px 8px;
    border-radius: 2px;
  }
  .council-input-row {
    display: flex;
    gap: 8px;
    margin-bottom: 14px;
  }
  .council-input {
    flex: 1;
    border: 1px solid #d8b4fe;
    border-radius: 3px;
    padding: 8px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: #374151;
    outline: none;
  }
  .council-input:focus { border-color: #7c3aed; box-shadow: 0 0 0 2px #ede9fe; }
  .council-input::placeholder { color: #c4b5fd; }
  .council-msg {
    padding: 10px 0;
    border-bottom: 1px solid #f3e8ff;
    font-size: 12.5px;
    line-height: 1.7;
  }
  .council-msg-name {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .council-composition {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #e9d5ff;
  }
  .council-persona-chip {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px 3px 5px;
    border-radius: 20px;
    border: 1px solid #e9d5ff;
    background: #faf5ff;
    font-size: 11px;
    color: #374151;
    white-space: nowrap;
  }
  .council-persona-chip .chip-icon { font-size: 13px; }
  .council-persona-chip .chip-name { font-weight: 500; }
  .council-persona-chip.is-moderator { background: #ede9fe; border-color: #c4b5fd; color: #6d28d9; }
  .council-msg {
    padding: 10px 0;
    border-bottom: 1px solid #f3e8ff;
    font-size: 12.5px;
    line-height: 1.7;
  }
  .council-msg.speaking { opacity: 0.85; }
  .council-msg-name {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .council-msg-speaking-dot {
    display: inline-block;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse-dot 1s ease-in-out infinite;
  }
  @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .council-synthesis {
    background: #ede9fe;
    border-radius: 3px;
    padding: 14px 16px;
    margin-top: 14px;
    font-size: 13px;
    line-height: 1.8;
  }
  .council-synthesis-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #7c3aed;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  .council-auth-notice {
    font-size: 12px;
    color: #7c3aed;
    background: #faf5ff;
    border: 1px solid #e9d5ff;
    border-radius: 3px;
    padding: 10px 14px;
    margin-top: 8px;
  }

  /* About modal */
  .about-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.3);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-panel {
    background: var(--sb-header-bg);
    border: 1px solid var(--sb-border);
    border-radius: 6px;
    padding: 40px 44px;
    max-width: 480px;
    width: 90vw;
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
    text-align: center;
  }
  .about-logo {
    font-family: 'Fraunces', serif;
    font-size: 28px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 4px;
  }
  .about-logo span { color: var(--sb-primary); }
  .about-tagline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 24px;
  }
  .about-desc {
    font-size: 13px;
    color: #374151;
    line-height: 1.8;
    margin-bottom: 24px;
    text-align: left;
  }
  .about-footer {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-muted);
    line-height: 1.8;
  }
  .about-footer a {
    color: var(--sb-primary);
    text-decoration: none;
  }
  .about-footer a:hover {
    text-decoration: underline;
  }

  /* Player bar */
  .player-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    background: #111827;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 24px;
    z-index: 200;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    box-shadow: 0 -2px 8px rgba(0,0,0,0.15);
  }
  .player-btn {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .player-btn:hover { background: rgba(255,255,255,0.1); }
  .player-chapter {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--sb-text-muted);
  }
  .player-chapter strong { color: #ffffff; }

  /* Listen button on cards */
  .btn-listen {
    background: none;
    border: none;
    color: var(--sb-text-muted);
    cursor: pointer;
    font-size: 14px;
    padding: 2px 6px;
    border-radius: 3px;
  }
  .btn-listen:hover { color: var(--sb-primary); background: #eff6ff; }

  .count-badge {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--sb-text-secondary);
    margin-top: 4px;
  }
`;function pg(){const[e,t]=w.useState(Wf),[n,i]=w.useState({}),[o,a]=w.useState({}),[r,l]=w.useState({}),[s,p]=w.useState(null),[y,v]=w.useState("idle"),[h,b]=w.useState(!1),[z,T]=w.useState(""),[F,m]=w.useState(""),[u,f]=w.useState(null),[S,k]=w.useState(!1),[x,P]=w.useState([]),[O,X]=w.useState(null),[j,pe]=w.useState("signals"),[Pe,Jt]=w.useState({leftIdx:1,rightIdx:0}),[Xn,Ea]=w.useState("emerging"),[se,yn]=w.useState([]),[C,L]=w.useState([]),[_,ee]=w.useState(null),[ae,Pt]=w.useState("idle"),[Ie,Zt]=w.useState(Qf),[dt,Xt]=w.useState(""),[$d,Na]=w.useState(!1),[Wi,qd]=w.useState(!1),[Sn,Gd]=w.useState(""),[ei,Wl]=w.useState([]),[vt,xn]=w.useState("idle"),[Wd,Ql]=w.useState(!1),[Qi,ba]=w.useState(null),[Kl,Yl]=w.useState(null),[Ki,Qd]=w.useState([]),[Jl,En]=w.useState(null),[mg,fg]=w.useState("idle"),[Zl,Kd]=w.useState({scan:"",launchd:""}),[Yi,za]=w.useState("idle"),[gg,Xl]=w.useState([]),[Yd,Jd]=w.useState({}),[Zd,Xd]=w.useState(new Set),Ia=w.useRef(null),he=sg(),[ep,tp]=w.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),xe=e.filter(d=>d.active),es=xe.filter(d=>!d.fontiOnly),Nn=Object.values(r).filter(d=>d==="done"||d==="stale").length,ka=xe.length;w.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const g=JSON.parse(d.value);if(g.results){i(g.results);const N=new Set((g.staleIds||[]).map(String)),A={};for(const H of Object.keys(g.results))g.results[H].startsWith("Errore")?A[H]="error":N.has(String(H))?A[H]="stale":A[H]="done";l(A),g.staleIds&&Xl(g.staleIds)}if(g.prevResults&&a(g.prevResults),g.lastScanTime&&f(g.lastScanTime),g.synthesis&&(p(g.synthesis),v("done")),g.synthesisHistory){const N=g.synthesisHistory.map((A,H,G)=>{if(A.conceptDiff&&!A.conceptDiffs){const Ee=G[H+1],{conceptDiff:_e,...Je}=A;return Ee?{...Je,conceptDiffs:{[Ee.id]:_e}}:Je}return A});P(N)}g.projects&&yn(g.projects),g.prevProjects&&L(g.prevProjects),g.projectsTime&&ee(g.projectsTime),g.projectSources&&Zt(g.projectSources)}}catch{}})()},[]);const Ae=w.useCallback(async(d={})=>{try{const g=await window.storage.get("signal-state"),A={...g?JSON.parse(g.value):{},...d};await window.storage.set("signal-state",JSON.stringify(A))}catch{}},[]);w.useCallback(async(d={})=>{await Ae({results:n,prevResults:o,lastScanTime:u,synthesis:s,synthesisHistory:x,projects:se,prevProjects:C,projectsTime:_,projectSources:Ie,...d})},[n,o,u,s,x,se,C,_,Ie,Ae]);const Ji=w.useCallback((d,g)=>g.length>0&&g[0].text===d?g:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:xe.map(A=>A.name),conceptDiffs:{}},...g].slice(0,50),[xe]),Zi=w.useCallback(async d=>{var A;if(d.length<2)return d;const g=d[0],N=d[1];if((A=g.conceptDiffs)!=null&&A[N.id])return d;try{const H=await tg(N.text,g.text),G=[...d];return G[0]={...G[0],conceptDiffs:{...G[0].conceptDiffs||{},[N.id]:H}},P(G),await Ae({synthesisHistory:G}),G}catch(H){return console.error("[concept-diff auto]",H),d}},[Ae]),ts=w.useCallback(async(d,g)=>{try{await navigator.clipboard.writeText(d)}catch{const N=document.createElement("textarea");N.value=d,document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N)}X(g),setTimeout(()=>X(null),2e3)},[]);w.useCallback(async d=>{const g=x.filter(N=>N.id!==d);P(g),await Ae({synthesisHistory:g})},[x,Ae]);const wa=w.useCallback(async()=>{za("loading");const d="/signal-brief/finanza/";try{const[g,N]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),A=g.ok?await g.text():"",H=N.ok?await N.text():"";Kd({scan:A,launchd:H}),za("done")}catch(g){console.error("[logs]",g),za("error")}},[]);w.useEffect(()=>{j==="log"&&wa()},[j,wa]);const ns=w.useCallback(d=>{if(!d)return;const g=d.trim().toLowerCase();if(!g)return;const N=e.find(A=>{const H=A.name.toLowerCase();return H===g||H.includes(g)||g.includes(H)});N&&(pe("signals"),k(!1),setTimeout(()=>{const A=document.getElementById(`thinker-${N.id}`);A&&(A.scrollIntoView({behavior:"smooth",block:"start"}),A.classList.add("thinker-card-highlight"),setTimeout(()=>A.classList.remove("thinker-card-highlight"),1800))},60))},[e]),np=(d,g)=>{if(!d||!g)return 0;const N=new Set(d.toLowerCase().split(/\s+/)),A=new Set(g.toLowerCase().split(/\s+/));return[...N].filter(G=>A.has(G)).length/Math.max(N.size,A.size)},is=d=>!o[d]||!n[d]?!1:np(o[d],n[d])<.72;xe.filter(d=>r[d.id]==="done"&&is(d.id)).length;const os=e.length>0&&e.every(d=>d.active),ip=()=>{h||t(d=>d.map(g=>({...g,active:!os})))},Ca=()=>{z.trim()&&(t(d=>[...d,{id:Date.now(),name:z.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),T(""),m(""))},as=()=>{const d=dt.trim();if(!d||Ie.includes(d))return;const g=[...Ie,d];Zt(g),Xt(""),Ae({projectSources:g})},op=d=>{const g=Ie.filter(N=>N!==d);Zt(g),Ae({projectSources:g})},[ap,rs]=w.useState(null),Xi=w.useCallback(async(d,g)=>{Pt("loading"),rs(null);try{const N=await eg(g,d,Ie);L(se),yn(N);const A=Date.now();ee(A),Pt("done"),await Ae({projects:N,prevProjects:se,projectsTime:A})}catch(N){console.error("[Signal.Brief] fetchProjects error:",N),Pt("error"),rs(N.message)}},[Ie,Ae,se]),rp=w.useCallback(async()=>{if(xe.length===0)return;pe("signals"),b(!0),p(null),v("idle"),a(U=>({...U,...n}));const d={...n},g={};for(const U of xe){const ce=d[U.id];ce&&!ce.startsWith("Errore")&&(g[U.id]=ce)}const N={};xe.forEach(U=>{N[U.id]="loading"}),l(N),i(g);const A={...g},H=[],G={},Ee=2,_e=U=>new Promise(ce=>setTimeout(ce,U));for(let U=0;U<xe.length;U+=Ee){const ce=xe.slice(U,U+Ee);await Promise.all(ce.map(async Me=>{try{const V=await Xf(Me);A[Me.id]=V,i(re=>({...re,[Me.id]:V})),l(re=>({...re,[Me.id]:"done"}))}catch(V){const re=g[Me.id]!=null,me=V.message||V.name||(typeof V=="string"?V:"errore sconosciuto");G[Me.id]=me,re?(H.push(String(Me.id)),l(Y=>({...Y,[Me.id]:"stale"}))):(A[Me.id]=`Errore: ${me}`,i(Y=>({...Y,[Me.id]:`Errore: ${me}`})),l(Y=>({...Y,[Me.id]:"error"})))}})),U+Ee<xe.length&&await _e(1200)}Xl(H),Jd(G);const Je=Zf(A),$e=Je?Date.now():u;Je&&(f($e),tp(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Ae({results:A,prevResults:d,lastScanTime:$e,synthesis:s,synthesisHistory:x,staleIds:H}),b(!1);const De=es.filter(U=>A[U.id]&&!A[U.id].startsWith("Errore")).map(U=>({name:U.name,domain:U.domain,content:A[U.id]}));if(De.length>=2){v("loading");try{const U=await bc(De);p(U),v("done");const ce=Ji(U,x);P(ce),await Ae({results:A,prevResults:d,lastScanTime:$e,synthesis:U,synthesisHistory:ce}),Zi(ce),Xi(U,De)}catch{v("error")}}},[xe,n,Ae,s,x,Ji,u,Xi,Zi]),lp=w.useCallback(async()=>{const d=es.filter(g=>r[g.id]==="done"||r[g.id]==="stale").map(g=>({name:g.name,domain:g.domain,content:n[g.id]}));if(!(d.length<2)){v("loading");try{const g=await bc(d);p(g),v("done");const N=Ji(g,x);P(N),await Ae({synthesis:g,synthesisHistory:N}),Zi(N),Xi(g,d)}catch(g){p(`Errore nella sintesi: ${g.message}`),v("error")}}},[xe,r,n,Ae,x,Ji,Xi,Zi]),[ti,sp]=w.useState(nn.boardId),[ls,cp]=w.useState(nn.provisioned!==!1);w.useEffect(()=>{!Wi||!ti||ng(ti).then(d=>Qd(d))},[Wi,ti]);const ss=w.useCallback(async()=>{if(!Sn.trim())return;Wl([]),ba(null),Yl(null);let d=ti;if(!ls&&Kn){xn("provisioning");try{const g=await fetch(`/admin/api/themes/${Kn}/provision-council`,{method:"POST"}),N=await g.json();if(!g.ok||!N.ok)throw new Error(N.error||`HTTP ${g.status}`);d=N.boardId,sp(d),cp(!0)}catch(g){console.error("[council] provisioning failed",g),xn("error");return}}xn("loading"),Ql(!1),En(null);try{await ig(Sn,s,(g,N)=>{if(g==="session_started"&&N.session_id&&Yl(N.session_id),g==="sage_speaks"&&N.content&&(En(N.persona_name),Wl(A=>[...A,{name:N.persona_name,icon:N.persona_icon,color:N.persona_color,content:N.content,speaking:!1}])),g==="moderator_synthesis"&&N.content&&(En("moderatore"),ba(N.content)),g==="moderator"){const A=N.content||N.decision||N.synthesis||"";A&&ba(A)}g==="done"&&En(null)},d),En(null),xn("done")}catch(g){console.error("[council]",g),En(null),g.code==="AUTH_REQUIRED"?(Ql(!0),xn("idle")):xn("error")}},[Sn,s,ti,ls]),up=Nn>=2&&!h&&y!=="loading",cs=Object.keys(n).length>0,us="Disponibile solo in locale (richiede Claude CLI)",dp=xe.filter(d=>{if(!r[d.id])return!1;if(S){const g=r[d.id];return(g==="done"||g==="stale")&&is(d.id)}return!0});return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:dg}),c.jsxs("div",{className:"dashboard",children:[c.jsx("div",{className:"scanline"}),c.jsxs("header",{className:"header",children:[c.jsxs("div",{className:"header-top",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>Na(!0),dangerouslySetInnerHTML:{__html:ve.nameHtml}}),c.jsx("div",{className:"tagline",children:ve.tagline})]}),c.jsxs("div",{className:"header-right",children:[u&&c.jsxs("span",{className:"timestamp",children:["ultimo: ",ep]}),c.jsx("button",{className:"btn btn-synthesis btn-small",onClick:lp,disabled:!up||!0,title:us,children:"◈ Synth"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!Ia.current){const g=new Audio(`/signal-brief/finanza/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3${rr}`);g.onerror=()=>{g.src=`/signal-brief/finanza/podcast/episodes/2026-04-12.mp3${rr}`,g.play()},Ia.current=g}const d=Ia.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),c.jsx("a",{className:"btn btn-ghost btn-small",href:`/signal-brief/finanza/podcast/${rr}`,title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>rp(),disabled:h||xe.length===0||!0,title:us,children:h?`Scanning ${Nn}/${ka}…`:"▶ Scan"})]})]}),c.jsxs("nav",{className:"tab-bar",children:[c.jsxs("button",{className:`tab-btn ${j==="signals"?"active":""}`,onClick:()=>pe("signals"),children:["Segnali",Nn>0&&c.jsx("span",{className:"tab-badge",children:Nn})]}),c.jsxs("button",{className:`tab-btn ${j==="projects"?"active":""}`,onClick:()=>pe("projects"),children:["Progetti",se.length>0&&c.jsx("span",{className:"tab-badge",children:se.length})]}),c.jsxs("button",{className:`tab-btn ${j==="history"?"active":""}`,onClick:()=>pe("history"),children:["Cronologia",x.length>0&&c.jsx("span",{className:"tab-badge",children:x.length})]}),c.jsx("button",{className:`tab-btn ${j==="log"?"active":""}`,onClick:()=>pe("log"),children:"▤ Log"}),c.jsx("button",{className:`tab-btn ${j==="config"?"active":""}`,onClick:()=>pe("config"),children:"⚙ Configurazione"})]})]}),c.jsxs("div",{className:"tab-content",children:[j==="signals"&&c.jsxs(c.Fragment,{children:[h&&c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${ka>0?Nn/ka*100:0}%`}})}),(s||y==="loading")&&c.jsxs("div",{className:"synthesis-panel",children:[c.jsxs("div",{className:"synthesis-header",children:[c.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),c.jsx("span",{className:"synthesis-title",children:y==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),y==="done"&&x.length>0&&c.jsx("span",{className:"timestamp",children:new Date(x[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),y==="done"&&c.jsxs("div",{className:"synthesis-actions",children:[c.jsx("button",{className:"btn-listen",onClick:()=>he.playSingle("Cross-Synthesis",s),title:"Ascolta",children:"🔊"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>qd(d=>!d),title:"Chiedi ai thinkers",style:Wi?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>ts(s,"synth"),children:O==="synth"?"Copiato ✓":"Copia ❐"})]})]}),y==="loading"?c.jsxs("div",{className:"card-loading-state",children:[c.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):c.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:ag(cn(s),xe)}}),Wi&&y==="done"&&c.jsxs("div",{className:"council-panel",children:[c.jsxs("div",{className:"council-header",children:[Kl?c.jsx("a",{className:"council-label",href:`${zc}/?context=session:${Kl}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):c.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),Ki.length>0&&c.jsxs("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"var(--sb-text-muted)"},children:[Ki.filter(d=>!d.is_moderator).length," thinker · Summon Stars"]})]}),Ki.length>0&&c.jsx("div",{className:"council-composition",children:Ki.map(d=>c.jsxs("div",{className:`council-persona-chip${d.is_moderator?" is-moderator":""}`,title:d.title||"",children:[c.jsx("span",{className:"chip-icon",children:d.icon||"⭐"}),c.jsx("span",{className:"chip-name",style:d.is_moderator?{}:{color:d.color},children:d.name})]},d.id))}),Wd&&c.jsxs("div",{className:"council-auth-notice",children:["🔒 Accesso non autorizzato. Effettua il login su"," ",c.jsx("a",{href:zc,target:"_blank",rel:"noopener noreferrer",children:"Summon Stars"})," ","e riprova."]}),c.jsxs("div",{className:"council-input-row",children:[c.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:Sn,onChange:d=>Gd(d.target.value),onKeyDown:d=>d.key==="Enter"&&ss(),disabled:vt==="loading"||vt==="provisioning"}),c.jsx("button",{className:"btn btn-primary btn-small",onClick:ss,disabled:vt==="loading"||vt==="provisioning"||!Sn.trim(),children:vt==="provisioning"?"Creazione assemblea…":vt==="loading"?"In deliberazione…":"Chiedi"})]}),ei.length>0&&c.jsxs("div",{style:{maxHeight:420,overflowY:"auto"},children:[ei.map((d,g)=>{const A=g===ei.length-1&&vt==="loading"&&Jl===d.name;return c.jsxs("div",{className:`council-msg${A?" speaking":""}`,children:[c.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name,A&&c.jsx("span",{className:"council-msg-speaking-dot"})]}),c.jsx("div",{children:d.content})]},g)}),vt==="loading"&&Jl==="moderatore"&&c.jsx("div",{className:"council-msg speaking",children:c.jsxs("div",{className:"council-msg-name",style:{color:"#7c3aed"},children:["📡 Moderatore",c.jsx("span",{className:"council-msg-speaking-dot"})]})})]}),Qi&&c.jsxs("div",{className:"council-synthesis",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),c.jsxs("div",{style:{display:"flex",gap:4},children:[c.jsx("button",{className:"btn-listen",onClick:()=>{const d=ei.map(g=>`${g.name}: ${g.content}`).join(`

`)+`

Sintesi: `+Qi;he.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${Sn}

`+ei.map(g=>`${g.icon} ${g.name}:
${g.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Qi}`;ts(d,"council")},children:O==="council"?"Copiato ✓":"Copia ❐"})]})]}),c.jsx("div",{dangerouslySetInnerHTML:{__html:cn(Qi)}})]}),vt==="error"&&c.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),cs&&c.jsx("div",{className:"section-header",children:c.jsxs("span",{className:"section-title",children:["Segnali · ",Nn," acquisiti"]})}),!cs&&!h?c.jsxs("div",{className:"empty-state",children:[c.jsx("div",{className:"empty-icon",children:"◉"}),c.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),c.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",c.jsx("strong",{children:"Configurazione"})," e premi ",c.jsx("strong",{children:"▶ Scan"}),".",c.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):c.jsx("div",{className:"cards-grid",children:dp.map(d=>{const g=r[d.id],N=Yd[d.id],A=Zd.has(d.id),H=G=>{G.stopPropagation(),Xd(Ee=>{const _e=new Set(Ee);return _e.has(d.id)?_e.delete(d.id):_e.add(d.id),_e})};return c.jsxs("div",{id:`thinker-${d.id}`,className:`card ${g}`,children:[c.jsxs("div",{className:`card-header card-toggle ${A?"collapsed":""}`,onClick:H,children:[c.jsxs("div",{className:"card-identity",children:[c.jsxs("div",{className:"card-name",children:[c.jsx("span",{className:"toggle-icon",children:"▾"}),d.name,c.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:G=>G.stopPropagation(),children:d.handle})]}),c.jsx("div",{className:"card-domain",children:d.domain})]}),(g==="done"||g==="stale")&&c.jsx("button",{className:"btn-listen",onClick:G=>{G.stopPropagation(),he.playSingle(d.name,n[d.id])},title:"Ascolta",children:"🔊"}),g==="loading"&&c.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),g==="done"&&c.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),g==="stale"&&c.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${N?": "+N:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),g==="error"&&c.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),d.fontiOnly&&c.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!A&&c.jsxs("div",{className:"card-body",children:[d.desc&&c.jsx("div",{className:"card-desc",children:d.desc}),g==="loading"&&c.jsxs("div",{className:"card-loading-state",children:[c.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(g==="done"||g==="stale")&&c.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:og(n[d.id])}}),g==="error"&&c.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),j==="projects"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"section-header",children:c.jsxs("span",{className:"section-title",children:["Progetti emergenti",se.length>0&&` · ${se.length} trovati`]})}),ae==="loading"&&c.jsxs("div",{className:"card-loading-state",children:[c.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),ae==="error"&&c.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",ap||"errore sconosciuto"]}),se.length===0&&ae!=="loading"&&c.jsxs("div",{className:"empty-state",children:[c.jsx("div",{className:"empty-icon",children:"◈"}),c.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),c.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",c.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),se.length>0&&c.jsxs("div",{className:"quadrant-container",children:[c.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),_&&c.jsx("span",{style:{fontWeight:400,color:"var(--sb-text-muted)"},children:new Date(_).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),c.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[c.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),c.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),c.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),c.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),c.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),c.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),c.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),c.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),c.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),c.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),c.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),c.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),se.some(d=>d.maturity==null)&&c.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),C.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),c.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),c.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"var(--sb-primary)"}),c.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),se.map((d,g)=>{const N=d.maturity!=null&&d.momentum!=null,A=Math.ceil(Math.sqrt(se.length)),H=Math.floor(g/A),G=g%A,Ee=N?d.maturity:2+G/Math.max(A-1,1)*7,_e=N?d.momentum:8-H/Math.max(Math.ceil(se.length/A)-1,1)*7,Je=50+(Ee-1)/9*420,$e=370-(_e-1)/9*360,De=C.length>0&&!C.some(ce=>ce.name===d.name),U=De?"#dc2626":"var(--sb-primary)";return c.jsxs("g",{children:[c.jsx("circle",{className:"quadrant-dot",cx:Je,cy:$e,r:De?6:5,fill:U,opacity:"0.85",stroke:De?"#fca5a5":"none",strokeWidth:De?2:0,onClick:()=>window.open(d.url,"_blank")}),c.jsx("text",{className:"quadrant-dot-label",x:Je+9,y:$e+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:De?"#dc2626":"#374151",fontWeight:De?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},g)})]})]}),se.length>0&&c.jsx("div",{className:"projects-grid",children:se.map((d,g)=>c.jsxs("div",{className:"project-card",style:C.length>0&&!C.some(N=>N.name===d.name)?{borderColor:"#fca5a5"}:{},children:[c.jsxs("div",{className:"project-header",children:[c.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),C.length>0&&!C.some(N=>N.name===d.name)&&c.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&c.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&c.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),c.jsx("div",{className:"project-desc",children:d.description}),c.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&c.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&c.jsx("div",{className:"project-themes",children:d.themes.map((N,A)=>c.jsx("span",{className:"project-theme",children:N},A))})]})]},g))})]}),j==="history"&&c.jsx(c.Fragment,{children:x.length<2?c.jsxs("div",{className:"history-empty",children:[x.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",x.length===1&&c.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[c.jsx("div",{className:"diff-panel-date",children:new Date(x[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),c.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:cn(x[0].text)}})]})]}):c.jsxs(c.Fragment,{children:[(()=>{const d=Date.now(),g=864e5,N=d-7*g,A=d-21*g,H=x.filter(V=>V.timestamp>=N),G=x.filter(V=>V.timestamp>=A&&V.timestamp<N),Ee={};for(const V of G){const re=new Date(V.timestamp),me=new Date(re);me.setDate(me.getDate()-me.getDay());const Y=me.toISOString().slice(0,10);(!Ee[Y]||V.timestamp>Ee[Y].timestamp)&&(Ee[Y]=V)}const _e=Object.values(Ee).sort((V,re)=>re.timestamp-V.timestamp),Je=x.filter(V=>V.timestamp<A),$e={};for(const V of Je){const re=new Date(V.timestamp),me=new Date(re);me.setDate(me.getDate()-me.getDay());const Y=me.toISOString().slice(0,10);(!$e[Y]||V.timestamp>$e[Y].timestamp)&&($e[Y]=V)}const De=Object.values($e).sort((V,re)=>re.timestamp-V.timestamp),U=(V,re,me)=>V.length===0?null:c.jsx("optgroup",{label:re,children:V.map(Y=>{const Ta=x.indexOf(Y),eo=new Date(Y.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),Pa=me?`Sett. ${eo.split(",")[0]} — ${Y.thinkers.slice(0,3).join(", ")}${Y.thinkers.length>3?` +${Y.thinkers.length-3}`:""}`:`${eo} — ${Y.thinkers.slice(0,3).join(", ")}${Y.thinkers.length>3?` +${Y.thinkers.length-3}`:""}`;return c.jsx("option",{value:Ta,children:Pa},Y.id)})},re),ce=x[0],Me=ce?`${new Date(ce.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${ce.thinkers.slice(0,3).join(", ")}${ce.thinkers.length>3?` +${ce.thinkers.length-3}`:""}`:"";return c.jsxs("div",{className:"history-selectors",children:[c.jsxs("select",{className:"history-select",value:Pe.leftIdx,onChange:V=>Jt(re=>({...re,leftIdx:Number(V.target.value)})),children:[U(H,"Ultimi 7 giorni",!1),U(_e,"Ultime 3 settimane",!0),U(De,"Precedenti",!0)]}),c.jsx("span",{className:"history-vs",children:"vs"}),c.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[Me," ",c.jsx("span",{style:{color:"var(--sb-text-muted)",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ds;const d=x[Pe.rightIdx],g=x[Pe.leftIdx];if(!d||!g||Pe.leftIdx===Pe.rightIdx)return null;const N=d.timestamp>=g.timestamp?d:g,A=N===d?g:d;N===d?Pe.rightIdx:Pe.leftIdx;const H=((ds=N.conceptDiffs)==null?void 0:ds[A.id])||null,G=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],Ee={DHH:["hansson","heinemeier","37signals"]},_e=I=>{if(!I)return null;const R=I.trim().toLowerCase();if(!R)return null;for(const D of e){const q=D.name.toLowerCase();if(q===R||q.includes(R)||R.includes(q))return D;const Q=Ee[D.name]||[];for(const yt of Q)if(R.includes(yt)||yt.includes(R))return D}return null},Je=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),$e=I=>(I||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(R=>R.length>=4&&!Je.has(R)),De=I=>I.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),U=I=>{const R=I.split(/\s+/);return R.length>40?R.slice(0,40).join(" ")+"...":I},ce=I=>{if(!I)return[];const R=I.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),q=(R!==-1?I.slice(0,R):I).split(/\n\n+/).map(St=>De(St)).filter(St=>St.length>120),Q=St=>{const ii=$e(St);if(!ii.length||!q.length)return"";let to="",Ma=0;for(const ps of q){const gp=ps.toLowerCase();let Oa=0;for(const hp of ii)gp.includes(hp)&&Oa++;Oa>Ma&&(to=ps,Ma=Oa)}return Ma>0?to:""},yt=[],ni=new Set,fp=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let Aa;for(;(Aa=fp.exec(I))!==null;){const St=Aa[2].replace(/[.,;)]+$/,"");if(ni.has(St))continue;ni.add(St);const ii=Aa[1].trim(),to=U(Q(ii));yt.push({url:St,title:ii,snippet:to})}return yt},Me=I=>{const R=_e(I);return R?ce(n[R.id]||""):[]},V=(()=>{const I=new Set,R=[];for(const D of e){I.has(D.name)||(I.add(D.name),R.push(D.name));const q=D.name.split(/\s+/);if(q.length>1){const Q=q[q.length-1];Q.length>=4&&!I.has(Q)&&(I.add(Q),R.push(Q))}}return R.sort((D,q)=>q.length-D.length)})(),re=V.length?new RegExp(`\\b(${V.map(I=>I.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,me=I=>{if(!I||typeof I!="string"||!re)return I;const R=[];let D=0,q;for(re.lastIndex=0;(q=re.exec(I))!==null;){q.index>D&&R.push(I.slice(D,q.index));const Q=q[0];R.push(c.jsx("span",{className:"concept-who-link",onClick:yt=>{yt.stopPropagation(),ns(Q)},children:Q},R.length)),D=q.index+Q.length}return R.length===0?I:(D<I.length&&R.push(I.slice(D)),R)},Y=(I,R)=>{if(I==null)return null;if(typeof I=="string")return{title:I,detail:"",who:[],sides:[]};if(typeof I!="object")return null;if(R==="evolved"){const D=I.from??I.da??I.before??"",q=I.to??I.a??I.after??"",Q=D&&q?`${D} → ${q}`:D||q||I.detail||"";return{title:I.concept||I.title||I.name||"",detail:Q,who:I.who||[],sides:[]}}return R==="tensions"?{title:I.axis||I.concept||I.title||"",detail:I.detail||"",who:I.who||[],sides:I.sides||[]}:{title:I.concept||I.title||I.name||"",detail:I.detail||I.description||"",who:I.who||[],sides:[]}},Ta=I=>I!=null&&I.length?I.slice(0,4).map((R,D)=>c.jsx("a",{className:"concept-cite",href:R.url,target:"_blank",rel:"noopener noreferrer",title:R.snippet||R.title||R.url,onClick:q=>q.stopPropagation(),children:D+1},D)):null,eo=I=>I!=null&&I.length?c.jsx("div",{className:"concept-item-who",children:I.map((R,D)=>{const q=Me(R);return c.jsxs("span",{className:"concept-who-item",children:[D>0&&", ",c.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${R}`,onClick:Q=>{Q.stopPropagation(),ns(R)},children:R}),q.length>0&&c.jsx("sup",{className:"concept-cites",children:Ta(q)})]},D)})}):null,Pa=(I,R)=>c.jsxs("div",{className:"concept-item-detail",children:["• ",me(I)]},R),pp=(I,R)=>{const q=(I[R]||[]).map(Q=>Y(Q,R)).filter(Boolean);return q.length===0?c.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):q.map((Q,yt)=>{var ni;return c.jsxs("div",{className:`concept-item concept-${R==="tensions"?"tension":R}`,children:[Q.title&&c.jsx("div",{className:"concept-item-title",children:me(Q.title)}),Q.detail&&c.jsx("div",{className:"concept-item-detail",children:me(Q.detail)}),R==="tensions"&&((ni=Q.sides)==null?void 0:ni.map(Pa)),eo(Q.who)]},yt)})},mp=I=>{const R=G.find(D=>D.key===Xn)?Xn:"emerging";return G.find(D=>D.key===R),c.jsxs("div",{className:"concept-diff",children:[c.jsx("div",{className:"concept-tabs",children:G.map(D=>{const q=(I[D.key]||[]).length,Q=D.key===R;return c.jsxs("button",{className:`concept-tab ${Q?"active":""}`,onClick:()=>Ea(D.key),style:Q?{color:D.color,borderBottomColor:D.color}:void 0,children:[c.jsxs("span",{children:[D.icon," ",D.label]}),c.jsx("span",{className:"concept-tab-count",children:q})]},D.key)})}),c.jsx("div",{className:"concept-tab-body",children:pp(I,R)})]})};return H?mp(H):c.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"var(--sb-text-muted)",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",c.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=x[Pe.leftIdx],g=x[Pe.rightIdx];if(!d||!g)return null;const N=rg(d.text,g.text);return c.jsxs("div",{className:"diff-columns",children:[c.jsxs("div",{className:"diff-panel diff-panel-left",children:[c.jsx("div",{className:"diff-panel-label",children:"Precedente"}),c.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),c.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),c.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Cc(N,"left")}})]}),c.jsxs("div",{className:"diff-panel diff-panel-right",children:[c.jsx("div",{className:"diff-panel-label",children:"Attuale"}),c.jsx("div",{className:"diff-panel-date",children:new Date(g.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),c.jsx("div",{className:"diff-panel-thinkers",children:g.thinkers.join(", ")}),c.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Cc(N,"right")}})]})]})})()]})}),j==="log"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section-header",children:[c.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:wa,disabled:Yi==="loading",children:Yi==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=N=>{if(!N)return"info";const A=N.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(A)?"error":/\b(warn|attenzione|warning)/i.test(A)?"warn":/^\s*[✓]\s/.test(N)||/\b(ok|done|complete|pushato|ready)\b/i.test(A)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(N)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(N)?"event":"info"},g=N=>{if(!N||!N.trim())return c.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const A=N.split(`
`);return c.jsx("div",{className:"log-box",children:A.map((H,G)=>c.jsx("span",{className:`log-line log-${d(H)}`,children:H||" "},G))})};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"log-pane",children:[c.jsx("div",{className:"log-pane-header",children:c.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Yi==="error"?c.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):g(Zl.scan)]}),c.jsxs("div",{className:"log-pane",children:[c.jsx("div",{className:"log-pane-header",children:c.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Yi==="error"?c.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):g(Zl.launchd)]})]})})()]}),j==="config"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[c.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),c.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[c.jsxs("div",{className:"config-label",children:[c.jsxs("span",{children:["Thinker seguiti · ",xe.length," selezionati"]}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:ip,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:os?"Deseleziona tutti":"Seleziona tutti"})]}),c.jsx("div",{className:"thinker-grid",children:e.map(d=>c.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[c.jsx("div",{className:"thinker-check",children:d.active&&c.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:c.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),c.jsxs("div",{className:"thinker-info",children:[c.jsx("div",{className:"thinker-name",children:d.name}),c.jsxs("div",{className:"thinker-meta",children:[c.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:g=>g.stopPropagation(),children:d.handle})," · ",d.domain]})]}),c.jsx("div",{className:`thinker-status ${r[d.id]||""}`})]},d.id))}),c.jsxs("div",{className:"add-thinker-row",children:[c.jsx("input",{className:"input-field",placeholder:"Nome",value:z,disabled:!0,onChange:d=>T(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ca(),style:{flex:2}}),c.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:d=>m(d.target.value),onKeyDown:d=>d.key==="Enter"&&Ca(),style:{flex:1}}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:Ca,disabled:!0,children:"+ Aggiungi"})]})]}),c.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[c.jsx("div",{className:"config-label",children:c.jsx("span",{children:"Fonti progetti"})}),c.jsx("div",{className:"source-list",children:Ie.map(d=>c.jsxs("div",{className:"source-row",children:[c.jsx("span",{children:d}),c.jsx("button",{className:"source-delete",onClick:()=>op(d),disabled:!0,children:"×"})]},d))}),c.jsxs("div",{className:"add-thinker-row",children:[c.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:dt,disabled:!0,onChange:d=>Xt(d.target.value),onKeyDown:d=>d.key==="Enter"&&as(),style:{flex:1}}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:as,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(he.isPlaying||he.currentChapter>=0)&&c.jsxs("div",{className:"player-bar",children:[c.jsx("button",{className:"player-btn",onClick:he.isPlaying?he.pause:he.resume,children:he.isPlaying?"⏸":"▶"}),c.jsx("button",{className:"player-btn",onClick:he.skipForward,title:"Prossimo capitolo",children:"⏭"}),c.jsx("div",{className:"player-chapter",children:he.currentChapter>=0&&he.chapters[he.currentChapter]&&c.jsxs(c.Fragment,{children:[c.jsx("strong",{children:he.chapters[he.currentChapter].title})," — ",he.currentChapter+1,"/",he.chapters.length]})}),c.jsx("button",{className:"player-btn",onClick:he.stop,title:"Stop",children:"⏹"})]}),$d&&c.jsx("div",{className:"about-backdrop",onClick:()=>Na(!1),children:c.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[c.jsx("img",{src:"/signal-brief/finanza/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid var(--sb-border)"}}),c.jsx("div",{className:"about-logo",dangerouslySetInnerHTML:{__html:ve.nameHtml}}),c.jsx("div",{className:"about-tagline",children:ve.tagline}),c.jsx("div",{className:"about-desc",children:ve.aboutDescription}),c.jsx("div",{className:"about-footer",dangerouslySetInnerHTML:{__html:ve.aboutFooter}}),c.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>Na(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const i=await fetch("/signal-brief/finanza/signal-state.json");if(i.ok){const o=await i.json();return o[e]!=null?{key:e,value:o[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const i=await fetch("/state");return i.ok&&i.status!==204&&(n=await i.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};Ud(document.getElementById("root")).render(c.jsx(w.StrictMode,{children:c.jsx(pg,{})}));
