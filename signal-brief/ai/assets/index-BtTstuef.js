(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Ic={exports:{}},Xo={},bc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),pp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),Sp=Symbol.for("react.suspense"),xp=Symbol.for("react.memo"),Ep=Symbol.for("react.lazy"),us=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,Tc={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||zc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=Qn.prototype;function Kr(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||zc}var Yr=Kr.prototype=new Pc;Yr.constructor=Kr;Cc(Yr,Qn.prototype);Yr.isPureReactComponent=!0;var ds=Array.isArray,Ac=Object.prototype.hasOwnProperty,Jr={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function Oc(e,t,n){var i,o={},a=null,r=null;if(t!=null)for(i in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(a=""+t.key),t)Ac.call(t,i)&&!Mc.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)o[i]===void 0&&(o[i]=l[i]);return{$$typeof:Fi,type:e,key:a,ref:r,props:o,_owner:Jr.current}}function wp(e,t){return{$$typeof:Fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xr(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fi}function kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ps=/\/+/g;function Pa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kp(""+e.key):t.toString(36)}function ho(e,t,n,i,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Fi:case pp:r=!0}}if(r)return r=e,o=o(r),e=i===""?"."+Pa(r,0):i,ds(o)?(n="",e!=null&&(n=e.replace(ps,"$&/")+"/"),ho(o,t,n,"",function(d){return d})):o!=null&&(Xr(o)&&(o=wp(o,n+(!o.key||r&&r.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(r=0,i=i===""?".":i+":",ds(e))for(var l=0;l<e.length;l++){a=e[l];var s=i+Pa(a,l);r+=ho(a,t,n,s,o)}else if(s=Np(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=i+Pa(a,l++),r+=ho(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function Xi(e,t,n){if(e==null)return e;var i=[],o=0;return ho(e,i,"","",function(a){return t.call(n,a,o++)}),i}function Ip(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var je={current:null},vo={transition:null},bp={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Jr};function Rc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Xi,forEach:function(e,t,n){Xi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xi(e,function(){t++}),t},toArray:function(e){return Xi(e,function(t){return t})||[]},only:function(e){if(!Xr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Qn;B.Fragment=fp;B.Profiler=gp;B.PureComponent=Kr;B.StrictMode=mp;B.Suspense=Sp;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;B.act=Rc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Cc({},e.props),o=e.key,a=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,r=Jr.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Ac.call(t,s)&&!Mc.hasOwnProperty(s)&&(i[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:Fi,type:e.type,key:o,ref:a,props:i,_owner:r}};B.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};B.createElement=Oc;B.createFactory=function(e){var t=Oc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:yp,render:e}};B.isValidElement=Xr;B.lazy=function(e){return{$$typeof:Ep,_payload:{_status:-1,_result:e},_init:Ip}};B.memo=function(e,t){return{$$typeof:xp,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};B.unstable_act=Rc;B.useCallback=function(e,t){return je.current.useCallback(e,t)};B.useContext=function(e){return je.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return je.current.useDeferredValue(e)};B.useEffect=function(e,t){return je.current.useEffect(e,t)};B.useId=function(){return je.current.useId()};B.useImperativeHandle=function(e,t,n){return je.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return je.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return je.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return je.current.useMemo(e,t)};B.useReducer=function(e,t,n){return je.current.useReducer(e,t,n)};B.useRef=function(e){return je.current.useRef(e)};B.useState=function(e){return je.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return je.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return je.current.useTransition()};B.version="18.3.1";bc.exports=B;var T=bc.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=T,Cp=Symbol.for("react.element"),Tp=Symbol.for("react.fragment"),Pp=Object.prototype.hasOwnProperty,Ap=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mp={key:!0,ref:!0,__self:!0,__source:!0};function jc(e,t,n){var i,o={},a=null,r=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)Pp.call(t,i)&&!Mp.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Cp,type:e,key:a,ref:r,props:o,_owner:Ap.current}}Xo.Fragment=Tp;Xo.jsx=jc;Xo.jsxs=jc;Ic.exports=Xo;var c=Ic.exports,Lc={exports:{}},Ke={},_c={exports:{}},Dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var _=z.length;z.push(L);e:for(;0<_;){var ee=_-1>>>1,ae=z[ee];if(0<o(ae,L))z[ee]=L,z[_]=ae,_=ee;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var L=z[0],_=z.pop();if(_!==L){z[0]=_;e:for(var ee=0,ae=z.length,Pt=ae>>>1;ee<Pt;){var Ie=2*(ee+1)-1,Xt=z[Ie],dt=Ie+1,Zt=z[dt];if(0>o(Xt,_))dt<ae&&0>o(Zt,Xt)?(z[ee]=Zt,z[dt]=_,ee=dt):(z[ee]=Xt,z[Ie]=_,ee=Ie);else if(dt<ae&&0>o(Zt,_))z[ee]=Zt,z[dt]=_,ee=dt;else break e}}return L}function o(z,L){var _=z.sortIndex-L.sortIndex;return _!==0?_:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var r=Date,l=r.now();e.unstable_now=function(){return r.now()-l}}var s=[],d=[],y=1,v=null,h=3,w=!1,k=!1,C=!1,F=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var L=n(d);L!==null;){if(L.callback===null)i(d);else if(L.startTime<=z)i(d),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(d)}}function S(z){if(C=!1,m(z),!k)if(n(s)!==null)k=!0,se(b);else{var L=n(d);L!==null&&yn(S,L.startTime-z)}}function b(z,L){k=!1,C&&(C=!1,f(O),O=-1),w=!0;var _=h;try{for(m(L),v=n(s);v!==null&&(!(v.expirationTime>L)||z&&!pe());){var ee=v.callback;if(typeof ee=="function"){v.callback=null,h=v.priorityLevel;var ae=ee(v.expirationTime<=L);L=e.unstable_now(),typeof ae=="function"?v.callback=ae:v===n(s)&&i(s),m(L)}else i(s);v=n(s)}if(v!==null)var Pt=!0;else{var Ie=n(d);Ie!==null&&yn(S,Ie.startTime-L),Pt=!1}return Pt}finally{v=null,h=_,w=!1}}var x=!1,P=null,O=-1,Z=5,j=-1;function pe(){return!(e.unstable_now()-j<Z)}function Pe(){if(P!==null){var z=e.unstable_now();j=z;var L=!0;try{L=P(!0,z)}finally{L?Jt():(x=!1,P=null)}}else x=!1}var Jt;if(typeof u=="function")Jt=function(){u(Pe)};else if(typeof MessageChannel<"u"){var Jn=new MessageChannel,va=Jn.port2;Jn.port1.onmessage=Pe,Jt=function(){va.postMessage(null)}}else Jt=function(){F(Pe,0)};function se(z){P=z,x||(x=!0,Jt())}function yn(z,L){O=F(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,se(b))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var _=h;h=L;try{return z()}finally{h=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=h;h=z;try{return L()}finally{h=_}},e.unstable_scheduleCallback=function(z,L,_){var ee=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?ee+_:ee):_=ee,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=_+ae,z={id:y++,callback:L,priorityLevel:z,startTime:_,expirationTime:ae,sortIndex:-1},_>ee?(z.sortIndex=_,t(d,z),n(s)===null&&z===n(d)&&(C?(f(O),O=-1):C=!0,yn(S,_-ee))):(z.sortIndex=ae,t(s,z),k||w||(k=!0,se(b))),z},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(z){var L=h;return function(){var _=h;h=L;try{return z.apply(this,arguments)}finally{h=_}}}})(Dc);_c.exports=Dc;var Op=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp=T,Qe=Op;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,Ni={};function gn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Ni[e]=t,e=0;e<t.length;e++)Fc.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ir=Object.prototype.hasOwnProperty,jp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},ms={};function Lp(e){return ir.call(ms,e)?!0:ir.call(fs,e)?!1:jp.test(e)?ms[e]=!0:(fs[e]=!0,!1)}function _p(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,i){if(t===null||typeof t>"u"||_p(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,i,o,a,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=r}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zr=/[\-:]([a-z])/g;function el(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zr,el);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zr,el);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zr,el);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,t,n,i){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,o,i)&&(n=null),i||o===null?Lp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Tt=Rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),Bc=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),ar=Symbol.for("react.suspense"),rr=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Hc=Symbol.for("react.offscreen"),gs=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Aa;function ci(e){if(Aa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Aa=t&&t[1]||""}return`
`+Aa+e}var Ma=!1;function Oa(e,t){if(!e||Ma)return"";Ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var i=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){i=d}e.call(t.prototype)}else{try{throw Error()}catch(d){i=d}e()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),a=i.stack.split(`
`),r=o.length-1,l=a.length-1;1<=r&&0<=l&&o[r]!==a[l];)l--;for(;1<=r&&0<=l;r--,l--)if(o[r]!==a[l]){if(r!==1||l!==1)do if(r--,l--,0>l||o[r]!==a[l]){var s=`
`+o[r].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=r&&0<=l);break}}}finally{Ma=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ci(e):""}function Fp(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function lr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case Nn:return"Portal";case or:return"Profiler";case nl:return"StrictMode";case ar:return"Suspense";case rr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uc:return(e.displayName||"Context")+".Consumer";case Bc:return(e._context.displayName||"Context")+".Provider";case il:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return t=e.displayName||null,t!==null?t:lr(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return lr(e(t))}catch{}}return null}function Bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lr(t);case 8:return t===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Up(e){var t=Vc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(r){i=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function eo(e){e._valueTracker||(e._valueTracker=Up(e))}function $c(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Vc(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function sr(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qc(e,t){t=t.checked,t!=null&&tl(e,"checked",t,!1)}function cr(e,t){qc(e,t);var n=Gt(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ur(e,t.type,n):t.hasOwnProperty("defaultValue")&&ur(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ur(e,t,n){(t!=="number"||Co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ui=Array.isArray;function Rn(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function dr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(ui(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Gc(e,t){var n=Gt(t.value),i=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var to,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(to=to||document.createElement("div"),to.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=to.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hp=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Hp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Yc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=Kc(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var Vp=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fr(e,t){if(t){if(Vp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function mr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gr=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hr=null,jn=null,Ln=null;function xs(e){if(e=Hi(e)){if(typeof hr!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ia(t),hr(e.stateNode,e.type,t))}}function Jc(e){jn?Ln?Ln.push(e):Ln=[e]:jn=e}function Xc(){if(jn){var e=jn,t=Ln;if(Ln=jn=null,xs(e),t)for(e=0;e<t.length;e++)xs(t[e])}}function Zc(e,t){return e(t)}function eu(){}var Ra=!1;function tu(e,t,n){if(Ra)return e(t,n);Ra=!0;try{return Zc(e,t,n)}finally{Ra=!1,(jn!==null||Ln!==null)&&(eu(),Xc())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var i=ia(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var vr=!1;if(It)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){vr=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{vr=!1}function $p(e,t,n,i,o,a,r,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var mi=!1,To=null,Po=!1,yr=null,qp={onError:function(e){mi=!0,To=e}};function Gp(e,t,n,i,o,a,r,l,s){mi=!1,To=null,$p.apply(qp,arguments)}function Wp(e,t,n,i,o,a,r,l,s){if(Gp.apply(this,arguments),mi){if(mi){var d=To;mi=!1,To=null}else throw Error(E(198));Po||(Po=!0,yr=d)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Es(e){if(hn(e)!==e)throw Error(E(188))}function Qp(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Es(o),e;if(a===i)return Es(o),t;a=a.sibling}throw Error(E(188))}if(n.return!==i.return)n=o,i=a;else{for(var r=!1,l=o.child;l;){if(l===n){r=!0,n=o,i=a;break}if(l===i){r=!0,i=o,n=a;break}l=l.sibling}if(!r){for(l=a.child;l;){if(l===n){r=!0,n=a,i=o;break}if(l===i){r=!0,i=a,n=o;break}l=l.sibling}if(!r)throw Error(E(189))}}if(n.alternate!==i)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function iu(e){return e=Qp(e),e!==null?ou(e):null}function ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ou(e);if(t!==null)return t;e=e.sibling}return null}var au=Qe.unstable_scheduleCallback,Ns=Qe.unstable_cancelCallback,Kp=Qe.unstable_shouldYield,Yp=Qe.unstable_requestPaint,ue=Qe.unstable_now,Jp=Qe.unstable_getCurrentPriorityLevel,rl=Qe.unstable_ImmediatePriority,ru=Qe.unstable_UserBlockingPriority,Ao=Qe.unstable_NormalPriority,Xp=Qe.unstable_LowPriority,lu=Qe.unstable_IdlePriority,Zo=null,gt=null;function Zp(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Zo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:nf,ef=Math.log,tf=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var no=64,io=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes,r=n&268435455;if(r!==0){var l=r&~o;l!==0?i=di(l):(a&=r,a!==0&&(i=di(a)))}else r=n&~o,r!==0?i=di(r):a!==0&&(i=di(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-st(t),o=1<<n,i|=e[n],t&=~o;return i}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var r=31-st(a),l=1<<r,s=o[r];s===-1?(!(l&n)||l&i)&&(o[r]=of(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Sr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function su(){var e=no;return no<<=1,!(no&4194240)&&(no=64),e}function ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function rf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-st(n),a=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~a}}function ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-st(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var W=0;function cu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,sl,du,pu,fu,xr=!1,oo=[],Dt=null,Ft=null,Bt=null,Ii=new Map,bi=new Map,Rt=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ws(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(t.pointerId)}}function ii(e,t,n,i,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Hi(t),t!==null&&sl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sf(e,t,n,i,o){switch(t){case"focusin":return Dt=ii(Dt,e,t,n,i,o),!0;case"dragenter":return Ft=ii(Ft,e,t,n,i,o),!0;case"mouseover":return Bt=ii(Bt,e,t,n,i,o),!0;case"pointerover":var a=o.pointerId;return Ii.set(a,ii(Ii.get(a)||null,e,t,n,i,o)),!0;case"gotpointercapture":return a=o.pointerId,bi.set(a,ii(bi.get(a)||null,e,t,n,i,o)),!0}return!1}function mu(e){var t=an(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=nu(n),t!==null){e.blockedOn=t,fu(e.priority,function(){du(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Er(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);gr=i,n.target.dispatchEvent(i),gr=null}else return t=Hi(n),t!==null&&sl(t),e.blockedOn=n,!1;t.shift()}return!0}function ks(e,t,n){yo(e)&&n.delete(t)}function cf(){xr=!1,Dt!==null&&yo(Dt)&&(Dt=null),Ft!==null&&yo(Ft)&&(Ft=null),Bt!==null&&yo(Bt)&&(Bt=null),Ii.forEach(ks),bi.forEach(ks)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,xr||(xr=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,cf)))}function zi(e){function t(o){return oi(o,e)}if(0<oo.length){oi(oo[0],e);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Dt!==null&&oi(Dt,e),Ft!==null&&oi(Ft,e),Bt!==null&&oi(Bt,e),Ii.forEach(t),bi.forEach(t),n=0;n<Rt.length;n++)i=Rt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)mu(n),n.blockedOn===null&&Rt.shift()}var _n=Tt.ReactCurrentBatchConfig,Oo=!0;function uf(e,t,n,i){var o=W,a=_n.transition;_n.transition=null;try{W=1,cl(e,t,n,i)}finally{W=o,_n.transition=a}}function df(e,t,n,i){var o=W,a=_n.transition;_n.transition=null;try{W=4,cl(e,t,n,i)}finally{W=o,_n.transition=a}}function cl(e,t,n,i){if(Oo){var o=Er(e,t,n,i);if(o===null)qa(e,t,i,Ro,n),ws(e,i);else if(sf(o,e,t,n,i))i.stopPropagation();else if(ws(e,i),t&4&&-1<lf.indexOf(e)){for(;o!==null;){var a=Hi(o);if(a!==null&&uu(a),a=Er(e,t,n,i),a===null&&qa(e,t,i,Ro,n),a===o)break;o=a}o!==null&&i.stopPropagation()}else qa(e,t,i,null,n)}}var Ro=null;function Er(e,t,n,i){if(Ro=null,e=al(i),e=an(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ro=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jp()){case rl:return 1;case ru:return 4;case Ao:case Xp:return 16;case lu:return 536870912;default:return 16}default:return 16}}var Lt=null,ul=null,So=null;function hu(){if(So)return So;var e,t=ul,n=t.length,i,o="value"in Lt?Lt.value:Lt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===o[a-i];i++);return So=o.slice(e,1<i?1-i:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function Is(){return!1}function Ye(e){function t(n,i,o,a,r){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ao:Is,this.isPropagationStopped=Is,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Ye(Kn),Ui=oe({},Kn,{view:0,detail:0}),pf=Ye(Ui),La,_a,ai,ea=oe({},Ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(La=e.screenX-ai.screenX,_a=e.screenY-ai.screenY):_a=La=0,ai=e),La)},movementY:function(e){return"movementY"in e?e.movementY:_a}}),bs=Ye(ea),ff=oe({},ea,{dataTransfer:0}),mf=Ye(ff),gf=oe({},Ui,{relatedTarget:0}),Da=Ye(gf),hf=oe({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),vf=Ye(hf),yf=oe({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=Ye(yf),xf=oe({},Kn,{data:0}),zs=Ye(xf),Ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wf[e])?!!t[e]:!1}function pl(){return kf}var If=oe({},Ui,{key:function(e){if(e.key){var t=Ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=Ye(If),zf=oe({},ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=Ye(zf),Cf=oe({},Ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),Tf=Ye(Cf),Pf=oe({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=Ye(Pf),Mf=oe({},ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Of=Ye(Mf),Rf=[9,13,27,32],fl=It&&"CompositionEvent"in window,gi=null;It&&"documentMode"in document&&(gi=document.documentMode);var jf=It&&"TextEvent"in window&&!gi,vu=It&&(!fl||gi&&8<gi&&11>=gi),Ts=" ",Ps=!1;function yu(e,t){switch(e){case"keyup":return Rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Lf(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(Ps=!0,Ts);case"textInput":return e=t.data,e===Ts&&Ps?null:e;default:return null}}function _f(e,t){if(kn)return e==="compositionend"||!fl&&yu(e,t)?(e=hu(),So=ul=Lt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var Df={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function As(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Df[e.type]:t==="textarea"}function xu(e,t,n,i){Jc(i),t=jo(t,"onChange"),0<t.length&&(n=new dl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var hi=null,Ci=null;function Ff(e){Au(e,0)}function ta(e){var t=zn(e);if($c(t))return e}function Bf(e,t){if(e==="change")return t}var Eu=!1;if(It){var Fa;if(It){var Ba="oninput"in document;if(!Ba){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Ba=typeof Ms.oninput=="function"}Fa=Ba}else Fa=!1;Eu=Fa&&(!document.documentMode||9<document.documentMode)}function Os(){hi&&(hi.detachEvent("onpropertychange",Nu),Ci=hi=null)}function Nu(e){if(e.propertyName==="value"&&ta(Ci)){var t=[];xu(t,Ci,e,al(e)),tu(Ff,t)}}function Uf(e,t,n){e==="focusin"?(Os(),hi=t,Ci=n,hi.attachEvent("onpropertychange",Nu)):e==="focusout"&&Os()}function Hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ta(Ci)}function Vf(e,t){if(e==="click")return ta(t)}function $f(e,t){if(e==="input"||e==="change")return ta(t)}function qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:qf;function Ti(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!ir.call(t,o)||!ut(e[o],t[o]))return!1}return!0}function Rs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function js(e,t){var n=Rs(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rs(n)}}function wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ku(){for(var e=window,t=Co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Co(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gf(e){var t=ku(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wu(n.ownerDocument.documentElement,n)){if(i!==null&&ml(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!e.extend&&a>i&&(o=i,i=a,a=o),o=js(n,a);var r=js(n,i);o&&r&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wf=It&&"documentMode"in document&&11>=document.documentMode,In=null,Nr=null,vi=null,wr=!1;function Ls(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wr||In==null||In!==Co(i)||(i=In,"selectionStart"in i&&ml(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vi&&Ti(vi,i)||(vi=i,i=jo(Nr,"onSelect"),0<i.length&&(t=new dl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=In)))}function ro(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Ua={},Iu={};It&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function na(e){if(Ua[e])return Ua[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iu)return Ua[e]=t[n];return e}var bu=na("animationend"),zu=na("animationiteration"),Cu=na("animationstart"),Tu=na("transitionend"),Pu=new Map,_s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Pu.set(e,t),gn(t,[e])}for(var Ha=0;Ha<_s.length;Ha++){var Va=_s[Ha],Qf=Va.toLowerCase(),Kf=Va[0].toUpperCase()+Va.slice(1);Qt(Qf,"on"+Kf)}Qt(bu,"onAnimationEnd");Qt(zu,"onAnimationIteration");Qt(Cu,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Tu,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function Ds(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Wp(i,t,void 0,e),e.currentTarget=null}function Au(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var l=i[r],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Ds(o,l,d),a=s}else for(r=0;r<i.length;r++){if(l=i[r],s=l.instance,d=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Ds(o,l,d),a=s}}}if(Po)throw e=yr,Po=!1,yr=null,e}function J(e,t){var n=t[Cr];n===void 0&&(n=t[Cr]=new Set);var i=e+"__bubble";n.has(i)||(Mu(t,e,2,!1),n.add(i))}function $a(e,t,n){var i=0;t&&(i|=4),Mu(n,e,i,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[lo]){e[lo]=!0,Fc.forEach(function(n){n!=="selectionchange"&&(Yf.has(n)||$a(n,!1,e),$a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,$a("selectionchange",!1,t))}}function Mu(e,t,n,i){switch(gu(t)){case 1:var o=uf;break;case 4:o=df;break;default:o=cl}n=o.bind(null,t,n,e),o=void 0,!vr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qa(e,t,n,i,o){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var l=i.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(r===4)for(r=i.return;r!==null;){var s=r.tag;if((s===3||s===4)&&(s=r.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;r=r.return}for(;l!==null;){if(r=an(l),r===null)return;if(s=r.tag,s===5||s===6){i=a=r;continue e}l=l.parentNode}}i=i.return}tu(function(){var d=a,y=al(n),v=[];e:{var h=Pu.get(e);if(h!==void 0){var w=dl,k=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":w=bf;break;case"focusin":k="focus",w=Da;break;case"focusout":k="blur",w=Da;break;case"beforeblur":case"afterblur":w=Da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tf;break;case bu:case zu:case Cu:w=vf;break;case Tu:w=Af;break;case"scroll":w=pf;break;case"wheel":w=Of;break;case"copy":case"cut":case"paste":w=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Cs}var C=(t&4)!==0,F=!C&&e==="scroll",f=C?h!==null?h+"Capture":null:h;C=[];for(var u=d,m;u!==null;){m=u;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,f!==null&&(S=ki(u,f),S!=null&&C.push(Ai(u,S,m)))),F)break;u=u.return}0<C.length&&(h=new w(h,k,null,n,y),v.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==gr&&(k=n.relatedTarget||n.fromElement)&&(an(k)||k[bt]))break e;if((w||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=d,k=k?an(k):null,k!==null&&(F=hn(k),k!==F||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=d),w!==k)){if(C=bs,S="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=Cs,S="onPointerLeave",f="onPointerEnter",u="pointer"),F=w==null?h:zn(w),m=k==null?h:zn(k),h=new C(S,u+"leave",w,n,y),h.target=F,h.relatedTarget=m,S=null,an(y)===d&&(C=new C(f,u+"enter",k,n,y),C.target=m,C.relatedTarget=F,S=C),F=S,w&&k)t:{for(C=w,f=k,u=0,m=C;m;m=En(m))u++;for(m=0,S=f;S;S=En(S))m++;for(;0<u-m;)C=En(C),u--;for(;0<m-u;)f=En(f),m--;for(;u--;){if(C===f||f!==null&&C===f.alternate)break t;C=En(C),f=En(f)}C=null}else C=null;w!==null&&Fs(v,h,w,C,!1),k!==null&&F!==null&&Fs(v,F,k,C,!0)}}e:{if(h=d?zn(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var b=Bf;else if(As(h))if(Eu)b=$f;else{b=Hf;var x=Uf}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Vf);if(b&&(b=b(e,d))){xu(v,b,n,y);break e}x&&x(e,h,d),e==="focusout"&&(x=h._wrapperState)&&x.controlled&&h.type==="number"&&ur(h,"number",h.value)}switch(x=d?zn(d):window,e){case"focusin":(As(x)||x.contentEditable==="true")&&(In=x,Nr=d,vi=null);break;case"focusout":vi=Nr=In=null;break;case"mousedown":wr=!0;break;case"contextmenu":case"mouseup":case"dragend":wr=!1,Ls(v,n,y);break;case"selectionchange":if(Wf)break;case"keydown":case"keyup":Ls(v,n,y)}var P;if(fl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else kn?yu(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(vu&&n.locale!=="ko"&&(kn||O!=="onCompositionStart"?O==="onCompositionEnd"&&kn&&(P=hu()):(Lt=y,ul="value"in Lt?Lt.value:Lt.textContent,kn=!0)),x=jo(d,O),0<x.length&&(O=new zs(O,e,null,n,y),v.push({event:O,listeners:x}),P?O.data=P:(P=Su(n),P!==null&&(O.data=P)))),(P=jf?Lf(e,n):_f(e,n))&&(d=jo(d,"onBeforeInput"),0<d.length&&(y=new zs("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:d}),y.data=P))}Au(v,t)})}function Ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jo(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=ki(e,n),a!=null&&i.unshift(Ai(e,a,o)),a=ki(e,t),a!=null&&i.push(Ai(e,a,o))),e=e.return}return i}function En(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,t,n,i,o){for(var a=t._reactName,r=[];n!==null&&n!==i;){var l=n,s=l.alternate,d=l.stateNode;if(s!==null&&s===i)break;l.tag===5&&d!==null&&(l=d,o?(s=ki(n,a),s!=null&&r.unshift(Ai(n,s,l))):o||(s=ki(n,a),s!=null&&r.push(Ai(n,s,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Jf=/\r\n?/g,Xf=/\u0000|\uFFFD/g;function Bs(e){return(typeof e=="string"?e:""+e).replace(Jf,`
`).replace(Xf,"")}function so(e,t,n){if(t=Bs(t),Bs(e)!==t&&n)throw Error(E(425))}function Lo(){}var kr=null,Ir=null;function br(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zr=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(tm)}:zr;function tm(e){setTimeout(function(){throw e})}function Ga(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),zi(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);zi(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Yn,Mi="__reactProps$"+Yn,bt="__reactContainer$"+Yn,Cr="__reactEvents$"+Yn,nm="__reactListeners$"+Yn,im="__reactHandles$"+Yn;function an(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hs(e);e!==null;){if(n=e[mt])return n;e=Hs(e)}return t}e=n,n=e.parentNode}return null}function Hi(e){return e=e[mt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ia(e){return e[Mi]||null}var Tr=[],Cn=-1;function Kt(e){return{current:e}}function X(e){0>Cn||(e.current=Tr[Cn],Tr[Cn]=null,Cn--)}function K(e,t){Cn++,Tr[Cn]=e.current,e.current=t}var Wt={},Te=Kt(Wt),Ue=Kt(!1),un=Wt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Wt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function He(e){return e=e.childContextTypes,e!=null}function _o(){X(Ue),X(Te)}function Vs(e,t,n){if(Te.current!==Wt)throw Error(E(168));K(Te,t),K(Ue,n)}function Ou(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(E(108,Bp(e)||"Unknown",o));return oe({},n,i)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,un=Te.current,K(Te,e),K(Ue,Ue.current),!0}function $s(e,t,n){var i=e.stateNode;if(!i)throw Error(E(169));n?(e=Ou(e,t,un),i.__reactInternalMemoizedMergedChildContext=e,X(Ue),X(Te),K(Te,e)):X(Ue),K(Ue,n)}var xt=null,oa=!1,Wa=!1;function Ru(e){xt===null?xt=[e]:xt.push(e)}function om(e){oa=!0,Ru(e)}function Yt(){if(!Wa&&xt!==null){Wa=!0;var e=0,t=W;try{var n=xt;for(W=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}xt=null,oa=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),au(rl,Yt),o}finally{W=t,Wa=!1}}return null}var Tn=[],Pn=0,Fo=null,Bo=0,Xe=[],Ze=0,dn=null,Et=1,Nt="";function tn(e,t){Tn[Pn++]=Bo,Tn[Pn++]=Fo,Fo=e,Bo=t}function ju(e,t,n){Xe[Ze++]=Et,Xe[Ze++]=Nt,Xe[Ze++]=dn,dn=e;var i=Et;e=Nt;var o=32-st(i)-1;i&=~(1<<o),n+=1;var a=32-st(t)+o;if(30<a){var r=o-o%5;a=(i&(1<<r)-1).toString(32),i>>=r,o-=r,Et=1<<32-st(t)+o|n<<o|i,Nt=a+e}else Et=1<<a|n<<o|i,Nt=e}function gl(e){e.return!==null&&(tn(e,1),ju(e,1,0))}function hl(e){for(;e===Fo;)Fo=Tn[--Pn],Tn[Pn]=null,Bo=Tn[--Pn],Tn[Pn]=null;for(;e===dn;)dn=Xe[--Ze],Xe[Ze]=null,Nt=Xe[--Ze],Xe[Ze]=null,Et=Xe[--Ze],Xe[Ze]=null}var We=null,Ge=null,te=!1,lt=null;function Lu(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ge=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:Et,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ge=null,!0):!1;default:return!1}}function Pr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ar(e){if(te){var t=Ge;if(t){var n=t;if(!qs(e,t)){if(Pr(e))throw Error(E(418));t=Ut(n.nextSibling);var i=We;t&&qs(e,t)?Lu(i,n):(e.flags=e.flags&-4097|2,te=!1,We=e)}}else{if(Pr(e))throw Error(E(418));e.flags=e.flags&-4097|2,te=!1,We=e}}}function Gs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function co(e){if(e!==We)return!1;if(!te)return Gs(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!br(e.type,e.memoizedProps)),t&&(t=Ge)){if(Pr(e))throw _u(),Error(E(418));for(;t;)Lu(e,t),t=Ut(t.nextSibling)}if(Gs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=We?Ut(e.stateNode.nextSibling):null;return!0}function _u(){for(var e=Ge;e;)e=Ut(e.nextSibling)}function Hn(){Ge=We=null,te=!1}function vl(e){lt===null?lt=[e]:lt.push(e)}var am=Tt.ReactCurrentBatchConfig;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var i=n.stateNode}if(!i)throw Error(E(147,e));var o=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(r){var l=o.refs;r===null?delete l[a]:l[a]=r},t._stringRef=a,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ws(e){var t=e._init;return t(e._payload)}function Du(e){function t(f,u){if(e){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function i(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=qt(f,u),f.index=0,f.sibling=null,f}function a(f,u,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=2,u):m):(f.flags|=2,u)):(f.flags|=1048576,u)}function r(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,m,S){return u===null||u.tag!==6?(u=er(m,f.mode,S),u.return=f,u):(u=o(u,m),u.return=f,u)}function s(f,u,m,S){var b=m.type;return b===wn?y(f,u,m.props.children,S,m.key):u!==null&&(u.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mt&&Ws(b)===u.type)?(S=o(u,m.props),S.ref=ri(f,u,m),S.return=f,S):(S=zo(m.type,m.key,m.props,null,f.mode,S),S.ref=ri(f,u,m),S.return=f,S)}function d(f,u,m,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=tr(m,f.mode,S),u.return=f,u):(u=o(u,m.children||[]),u.return=f,u)}function y(f,u,m,S,b){return u===null||u.tag!==7?(u=cn(m,f.mode,S,b),u.return=f,u):(u=o(u,m),u.return=f,u)}function v(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=er(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Zi:return m=zo(u.type,u.key,u.props,null,f.mode,m),m.ref=ri(f,null,u),m.return=f,m;case Nn:return u=tr(u,f.mode,m),u.return=f,u;case Mt:var S=u._init;return v(f,S(u._payload),m)}if(ui(u)||ti(u))return u=cn(u,f.mode,m,null),u.return=f,u;uo(f,u)}return null}function h(f,u,m,S){var b=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:l(f,u,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Zi:return m.key===b?s(f,u,m,S):null;case Nn:return m.key===b?d(f,u,m,S):null;case Mt:return b=m._init,h(f,u,b(m._payload),S)}if(ui(m)||ti(m))return b!==null?null:y(f,u,m,S,null);uo(f,m)}return null}function w(f,u,m,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(m)||null,l(u,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Zi:return f=f.get(S.key===null?m:S.key)||null,s(u,f,S,b);case Nn:return f=f.get(S.key===null?m:S.key)||null,d(u,f,S,b);case Mt:var x=S._init;return w(f,u,m,x(S._payload),b)}if(ui(S)||ti(S))return f=f.get(m)||null,y(u,f,S,b,null);uo(u,S)}return null}function k(f,u,m,S){for(var b=null,x=null,P=u,O=u=0,Z=null;P!==null&&O<m.length;O++){P.index>O?(Z=P,P=null):Z=P.sibling;var j=h(f,P,m[O],S);if(j===null){P===null&&(P=Z);break}e&&P&&j.alternate===null&&t(f,P),u=a(j,u,O),x===null?b=j:x.sibling=j,x=j,P=Z}if(O===m.length)return n(f,P),te&&tn(f,O),b;if(P===null){for(;O<m.length;O++)P=v(f,m[O],S),P!==null&&(u=a(P,u,O),x===null?b=P:x.sibling=P,x=P);return te&&tn(f,O),b}for(P=i(f,P);O<m.length;O++)Z=w(P,f,O,m[O],S),Z!==null&&(e&&Z.alternate!==null&&P.delete(Z.key===null?O:Z.key),u=a(Z,u,O),x===null?b=Z:x.sibling=Z,x=Z);return e&&P.forEach(function(pe){return t(f,pe)}),te&&tn(f,O),b}function C(f,u,m,S){var b=ti(m);if(typeof b!="function")throw Error(E(150));if(m=b.call(m),m==null)throw Error(E(151));for(var x=b=null,P=u,O=u=0,Z=null,j=m.next();P!==null&&!j.done;O++,j=m.next()){P.index>O?(Z=P,P=null):Z=P.sibling;var pe=h(f,P,j.value,S);if(pe===null){P===null&&(P=Z);break}e&&P&&pe.alternate===null&&t(f,P),u=a(pe,u,O),x===null?b=pe:x.sibling=pe,x=pe,P=Z}if(j.done)return n(f,P),te&&tn(f,O),b;if(P===null){for(;!j.done;O++,j=m.next())j=v(f,j.value,S),j!==null&&(u=a(j,u,O),x===null?b=j:x.sibling=j,x=j);return te&&tn(f,O),b}for(P=i(f,P);!j.done;O++,j=m.next())j=w(P,f,O,j.value,S),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?O:j.key),u=a(j,u,O),x===null?b=j:x.sibling=j,x=j);return e&&P.forEach(function(Pe){return t(f,Pe)}),te&&tn(f,O),b}function F(f,u,m,S){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Zi:e:{for(var b=m.key,x=u;x!==null;){if(x.key===b){if(b=m.type,b===wn){if(x.tag===7){n(f,x.sibling),u=o(x,m.props.children),u.return=f,f=u;break e}}else if(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Mt&&Ws(b)===x.type){n(f,x.sibling),u=o(x,m.props),u.ref=ri(f,x,m),u.return=f,f=u;break e}n(f,x);break}else t(f,x);x=x.sibling}m.type===wn?(u=cn(m.props.children,f.mode,S,m.key),u.return=f,f=u):(S=zo(m.type,m.key,m.props,null,f.mode,S),S.ref=ri(f,u,m),S.return=f,f=S)}return r(f);case Nn:e:{for(x=m.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(f,u.sibling),u=o(u,m.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=tr(m,f.mode,S),u.return=f,f=u}return r(f);case Mt:return x=m._init,F(f,u,x(m._payload),S)}if(ui(m))return k(f,u,m,S);if(ti(m))return C(f,u,m,S);uo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,m),u.return=f,f=u):(n(f,u),u=er(m,f.mode,S),u.return=f,f=u),r(f)):n(f,u)}return F}var Vn=Du(!0),Fu=Du(!1),Uo=Kt(null),Ho=null,An=null,yl=null;function Sl(){yl=An=Ho=null}function xl(e){var t=Uo.current;X(Uo),e._currentValue=t}function Mr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Ho=e,yl=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Ho===null)throw Error(E(308));An=e,Ho.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var rn=null;function El(e){rn===null?rn=[e]:rn.push(e)}function Bu(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,El(t)):(n.next=o.next,o.next=n),t.interleaved=n,zt(e,i)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,$&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,zt(e,n)}return o=i.interleaved,o===null?(t.next=t,El(i)):(t.next=o.next,o.next=t),i.interleaved=t,zt(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ll(e,n)}}function Qs(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vo(e,t,n,i){var o=e.updateQueue;Ot=!1;var a=o.firstBaseUpdate,r=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,d=s.next;s.next=null,r===null?a=d:r.next=d,r=s;var y=e.alternate;y!==null&&(y=y.updateQueue,l=y.lastBaseUpdate,l!==r&&(l===null?y.firstBaseUpdate=d:l.next=d,y.lastBaseUpdate=s))}if(a!==null){var v=o.baseState;r=0,y=d=s=null,l=a;do{var h=l.lane,w=l.eventTime;if((i&h)===h){y!==null&&(y=y.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,C=l;switch(h=t,w=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){v=k.call(w,v,h);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,h=typeof k=="function"?k.call(w,v,h):k,h==null)break e;v=oe({},v,h);break e;case 2:Ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else w={eventTime:w,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},y===null?(d=y=w,s=v):y=y.next=w,r|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(y===null&&(s=v),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do r|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);fn|=r,e.lanes=r,e.memoizedState=v}}function Ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(E(191,o));o.call(i)}}}var Vi={},ht=Kt(Vi),Oi=Kt(Vi),Ri=Kt(Vi);function ln(e){if(e===Vi)throw Error(E(174));return e}function wl(e,t){switch(K(Ri,t),K(Oi,e),K(ht,Vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pr(t,e)}X(ht),K(ht,t)}function $n(){X(ht),X(Oi),X(Ri)}function Hu(e){ln(Ri.current);var t=ln(ht.current),n=pr(t,e.type);t!==n&&(K(Oi,e),K(ht,n))}function kl(e){Oi.current===e&&(X(ht),X(Oi))}var ne=Kt(0);function $o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qa=[];function Il(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var No=Tt.ReactCurrentDispatcher,Ka=Tt.ReactCurrentBatchConfig,pn=0,ie=null,me=null,ye=null,qo=!1,yi=!1,ji=0,rm=0;function be(){throw Error(E(321))}function bl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function zl(e,t,n,i,o,a){if(pn=a,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?um:dm,e=n(i,o),yi){a=0;do{if(yi=!1,ji=0,25<=a)throw Error(E(301));a+=1,ye=me=null,t.updateQueue=null,No.current=pm,e=n(i,o)}while(yi)}if(No.current=Go,t=me!==null&&me.next!==null,pn=0,ye=me=ie=null,qo=!1,t)throw Error(E(300));return e}function Cl(){var e=ji!==0;return ji=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=e:ye=ye.next=e,ye}function it(){if(me===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?ie.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(E(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ie.memoizedState=ye=e:ye=ye.next=e}return ye}function Li(e,t){return typeof t=="function"?t(e):t}function Ya(e){var t=it(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var i=me,o=i.baseQueue,a=n.pending;if(a!==null){if(o!==null){var r=o.next;o.next=a.next,a.next=r}i.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,i=i.baseState;var l=r=null,s=null,d=a;do{var y=d.lane;if((pn&y)===y)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:e(i,d.action);else{var v={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=v,r=i):s=s.next=v,ie.lanes|=y,fn|=y}d=d.next}while(d!==null&&d!==a);s===null?r=i:s.next=l,ut(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseState=r,t.baseQueue=s,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ie.lanes|=a,fn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ja(e){var t=it(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var r=o=o.next;do a=e(a,r.action),r=r.next;while(r!==o);ut(a,t.memoizedState)||(Be=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Vu(){}function $u(e,t){var n=ie,i=it(),o=t(),a=!ut(i.memoizedState,o);if(a&&(i.memoizedState=o,Be=!0),i=i.queue,Tl(Wu.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,_i(9,Gu.bind(null,n,i,o,t),void 0,null),Se===null)throw Error(E(349));pn&30||qu(n,t,o)}return o}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gu(e,t,n,i){t.value=n,t.getSnapshot=i,Qu(t)&&Ku(e)}function Wu(e,t,n){return n(function(){Qu(t)&&Ku(e)})}function Qu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ku(e){var t=zt(e,1);t!==null&&ct(t,e,1,-1)}function Ys(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=cm.bind(null,ie,e),[t.memoizedState,e]}function _i(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Yu(){return it().memoizedState}function wo(e,t,n,i){var o=ft();ie.flags|=e,o.memoizedState=_i(1|t,n,void 0,i===void 0?null:i)}function aa(e,t,n,i){var o=it();i=i===void 0?null:i;var a=void 0;if(me!==null){var r=me.memoizedState;if(a=r.destroy,i!==null&&bl(i,r.deps)){o.memoizedState=_i(t,n,a,i);return}}ie.flags|=e,o.memoizedState=_i(1|t,n,a,i)}function Js(e,t){return wo(8390656,8,e,t)}function Tl(e,t){return aa(2048,8,e,t)}function Ju(e,t){return aa(4,2,e,t)}function Xu(e,t){return aa(4,4,e,t)}function Zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,n){return n=n!=null?n.concat([e]):null,aa(4,4,Zu.bind(null,t,e),n)}function Pl(){}function td(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&bl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function nd(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&bl(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return pn&21?(ut(n,t)||(n=su(),ie.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function lm(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var i=Ka.transition;Ka.transition={};try{e(!1),t()}finally{W=n,Ka.transition=i}}function od(){return it().memoizedState}function sm(e,t,n){var i=$t(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ad(e))rd(t,n);else if(n=Bu(e,t,n,i),n!==null){var o=Re();ct(n,e,i,o),ld(n,t,i)}}function cm(e,t,n){var i=$t(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ad(e))rd(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,l=a(r,n);if(o.hasEagerState=!0,o.eagerState=l,ut(l,r)){var s=t.interleaved;s===null?(o.next=o,El(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Bu(e,t,o,i),n!==null&&(o=Re(),ct(n,e,i,o),ld(n,t,i))}}function ad(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function rd(e,t){yi=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ld(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ll(e,n)}}var Go={readContext:nt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},um={readContext:nt,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,Zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=ft();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=sm.bind(null,ie,e),[i.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Ys,useDebugValue:Pl,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Ys(!1),t=e[0];return e=lm.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=ie,o=ft();if(te){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),Se===null)throw Error(E(349));pn&30||qu(i,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Js(Wu.bind(null,i,a,e),[e]),i.flags|=2048,_i(9,Gu.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=ft(),t=Se.identifierPrefix;if(te){var n=Nt,i=Et;n=(i&~(1<<32-st(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=ji++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dm={readContext:nt,useCallback:td,useContext:nt,useEffect:Tl,useImperativeHandle:ed,useInsertionEffect:Ju,useLayoutEffect:Xu,useMemo:nd,useReducer:Ya,useRef:Yu,useState:function(){return Ya(Li)},useDebugValue:Pl,useDeferredValue:function(e){var t=it();return id(t,me.memoizedState,e)},useTransition:function(){var e=Ya(Li)[0],t=it().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:$u,useId:od,unstable_isNewReconciler:!1},pm={readContext:nt,useCallback:td,useContext:nt,useEffect:Tl,useImperativeHandle:ed,useInsertionEffect:Ju,useLayoutEffect:Xu,useMemo:nd,useReducer:Ja,useRef:Yu,useState:function(){return Ja(Li)},useDebugValue:Pl,useDeferredValue:function(e){var t=it();return me===null?t.memoizedState=e:id(t,me.memoizedState,e)},useTransition:function(){var e=Ja(Li)[0],t=it().memoizedState;return[e,t]},useMutableSource:Vu,useSyncExternalStore:$u,useId:od,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Or(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Re(),o=$t(e),a=wt(i,o);a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,o),t!==null&&(ct(t,e,o,i),Eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Re(),o=$t(e),a=wt(i,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ht(e,a,o),t!==null&&(ct(t,e,o,i),Eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),i=$t(e),o=wt(n,i);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,i),t!==null&&(ct(t,e,i,n),Eo(t,e,i))}};function Xs(e,t,n,i,o,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,i)||!Ti(o,a):!0}function sd(e,t,n){var i=!1,o=Wt,a=t.contextType;return typeof a=="object"&&a!==null?a=nt(a):(o=He(t)?un:Te.current,i=t.contextTypes,a=(i=i!=null)?Un(e,o):Wt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Zs(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Rr(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Nl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=nt(a):(a=He(t)?un:Te.current,o.context=Un(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Or(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ra.enqueueReplaceState(o,o.state,null),Vo(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t){try{var n="",i=t;do n+=Fp(i),i=i.return;while(i);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jr(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fm=typeof WeakMap=="function"?WeakMap:Map;function cd(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Qo||(Qo=!0,qr=i),jr(e,t)},n}function ud(e,t,n){n=wt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){jr(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){jr(e,t),typeof i!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),n}function ec(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new fm;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=zm.bind(null,e,t,n),t.then(e,e))}function tc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nc(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var mm=Tt.ReactCurrentOwner,Be=!1;function Oe(e,t,n,i){t.child=e===null?Fu(t,null,n,i):Vn(t,e.child,n,i)}function ic(e,t,n,i,o){n=n.render;var a=t.ref;return Dn(t,o),i=zl(e,t,n,i,a,o),n=Cl(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(te&&n&&gl(t),t.flags|=1,Oe(e,t,i,o),t.child)}function oc(e,t,n,i,o){if(e===null){var a=n.type;return typeof a=="function"&&!Dl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,dd(e,t,a,i,o)):(e=zo(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(r,i)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=qt(a,i),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,n,i,o){if(e!==null){var a=e.memoizedProps;if(Ti(a,i)&&e.ref===t.ref)if(Be=!1,t.pendingProps=i=a,(e.lanes&o)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return Lr(e,t,n,i,o)}function pd(e,t,n){var i=t.pendingProps,o=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(On,qe),qe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(On,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,K(On,qe),qe|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,K(On,qe),qe|=i;return Oe(e,t,o,n),t.child}function fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Lr(e,t,n,i,o){var a=He(n)?un:Te.current;return a=Un(t,a),Dn(t,o),n=zl(e,t,n,i,a,o),i=Cl(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(te&&i&&gl(t),t.flags|=1,Oe(e,t,n,o),t.child)}function ac(e,t,n,i,o){if(He(n)){var a=!0;Do(t)}else a=!1;if(Dn(t,o),t.stateNode===null)ko(e,t),sd(t,n,i),Rr(t,n,i,o),i=!0;else if(e===null){var r=t.stateNode,l=t.memoizedProps;r.props=l;var s=r.context,d=n.contextType;typeof d=="object"&&d!==null?d=nt(d):(d=He(n)?un:Te.current,d=Un(t,d));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof r.getSnapshotBeforeUpdate=="function";v||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==i||s!==d)&&Zs(t,r,i,d),Ot=!1;var h=t.memoizedState;r.state=h,Vo(t,i,r,o),s=t.memoizedState,l!==i||h!==s||Ue.current||Ot?(typeof y=="function"&&(Or(t,n,y,i),s=t.memoizedState),(l=Ot||Xs(t,n,l,i,h,s,d))?(v||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=s),r.props=i,r.state=s,r.context=d,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Uu(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:at(t.type,l),r.props=d,v=t.pendingProps,h=r.context,s=n.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=He(n)?un:Te.current,s=Un(t,s));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(l!==v||h!==s)&&Zs(t,r,i,s),Ot=!1,h=t.memoizedState,r.state=h,Vo(t,i,r,o);var k=t.memoizedState;l!==v||h!==k||Ue.current||Ot?(typeof w=="function"&&(Or(t,n,w,i),k=t.memoizedState),(d=Ot||Xs(t,n,d,i,h,k,s)||!1)?(y||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,k,s),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,k,s)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=k),r.props=i,r.state=k,r.context=s,i=d):(typeof r.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return _r(e,t,n,i,a,o)}function _r(e,t,n,i,o,a){fd(e,t);var r=(t.flags&128)!==0;if(!i&&!r)return o&&$s(t,n,!1),Ct(e,t,a);i=t.stateNode,mm.current=t;var l=r&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&r?(t.child=Vn(t,e.child,null,a),t.child=Vn(t,null,l,a)):Oe(e,t,l,a),t.memoizedState=i.state,o&&$s(t,n,!0),t.child}function md(e){var t=e.stateNode;t.pendingContext?Vs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vs(e,t.context,!1),wl(e,t.containerInfo)}function rc(e,t,n,i,o){return Hn(),vl(o),t.flags|=256,Oe(e,t,n,i),t.child}var Dr={dehydrated:null,treeContext:null,retryLane:0};function Fr(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,t,n){var i=t.pendingProps,o=ne.current,a=!1,r=(t.flags&128)!==0,l;if((l=r)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(ne,o&1),e===null)return Ar(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=i.children,e=i.fallback,a?(i=t.mode,a=t.child,r={mode:"hidden",children:r},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=r):a=ca(r,i,0,null),e=cn(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Fr(n),t.memoizedState=Dr,e):Al(t,r));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gm(e,t,r,i,l,o,n);if(a){a=i.fallback,r=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:i.children};return!(r&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=s,t.deletions=null):(i=qt(o,s),i.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=qt(l,a):(a=cn(a,r,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,r=e.child.memoizedState,r=r===null?Fr(n):{baseLanes:r.baseLanes|n,cachePool:null,transitions:r.transitions},a.memoizedState=r,a.childLanes=e.childLanes&~n,t.memoizedState=Dr,i}return a=e.child,e=a.sibling,i=qt(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Al(e,t){return t=ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,n,i){return i!==null&&vl(i),Vn(t,e.child,null,n),e=Al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gm(e,t,n,i,o,a,r){if(n)return t.flags&256?(t.flags&=-257,i=Xa(Error(E(422))),po(e,t,r,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,o=t.mode,i=ca({mode:"visible",children:i.children},o,0,null),a=cn(a,o,r,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&Vn(t,e.child,null,r),t.child.memoizedState=Fr(r),t.memoizedState=Dr,a);if(!(t.mode&1))return po(e,t,r,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(E(419)),i=Xa(a,i,void 0),po(e,t,r,i)}if(l=(r&e.childLanes)!==0,Be||l){if(i=Se,i!==null){switch(r&-r){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|r)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,zt(e,o),ct(i,e,o,-1))}return _l(),i=Xa(Error(E(421))),po(e,t,r,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Cm.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Ge=Ut(o.nextSibling),We=t,te=!0,lt=null,e!==null&&(Xe[Ze++]=Et,Xe[Ze++]=Nt,Xe[Ze++]=dn,Et=e.id,Nt=e.overflow,dn=t),t=Al(t,i.children),t.flags|=4096,t)}function lc(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Mr(e.return,t,n)}function Za(e,t,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=o)}function hd(e,t,n){var i=t.pendingProps,o=i.revealOrder,a=i.tail;if(Oe(e,t,i.children,n),i=ne.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lc(e,n,t);else if(e.tag===19)lc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(K(ne,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$o(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Za(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$o(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Za(t,!0,n,null,a);break;case"together":Za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hm(e,t,n){switch(t.tag){case 3:md(t),Hn();break;case 5:Hu(t);break;case 1:He(t.type)&&Do(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;K(Uo,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(K(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?gd(e,t,n):(K(ne,ne.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);K(ne,ne.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(ne,ne.current),i)break;return null;case 22:case 23:return t.lanes=0,pd(e,t,n)}return Ct(e,t,n)}var vd,Br,yd,Sd;vd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Br=function(){};yd=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,ln(ht.current);var a=null;switch(n){case"input":o=sr(e,o),i=sr(e,i),a=[];break;case"select":o=oe({},o,{value:void 0}),i=oe({},i,{value:void 0}),a=[];break;case"textarea":o=dr(e,o),i=dr(e,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Lo)}fr(n,i);var r;n=null;for(d in o)if(!i.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(r in l)l.hasOwnProperty(r)&&(n||(n={}),n[r]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ni.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in i){var s=i[d];if(l=o!=null?o[d]:void 0,i.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(r in l)!l.hasOwnProperty(r)||s&&s.hasOwnProperty(r)||(n||(n={}),n[r]="");for(r in s)s.hasOwnProperty(r)&&l[r]!==s[r]&&(n||(n={}),n[r]=s[r])}else n||(a||(a=[]),a.push(d,n)),n=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&J("scroll",e),a||l===s||(a=[])):(a=a||[]).push(d,s))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Sd=function(e,t,n,i){n!==i&&(t.flags|=4)};function li(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function vm(e,t,n){var i=t.pendingProps;switch(hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return He(t.type)&&_o(),ze(t),null;case 3:return i=t.stateNode,$n(),X(Ue),X(Te),Il(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Qr(lt),lt=null))),Br(e,t),ze(t),null;case 5:kl(t);var o=ln(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)yd(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return ze(t),null}if(e=ln(ht.current),co(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[mt]=t,i[Mi]=a,e=(t.mode&1)!==0,n){case"dialog":J("cancel",i),J("close",i);break;case"iframe":case"object":case"embed":J("load",i);break;case"video":case"audio":for(o=0;o<pi.length;o++)J(pi[o],i);break;case"source":J("error",i);break;case"img":case"image":case"link":J("error",i),J("load",i);break;case"details":J("toggle",i);break;case"input":hs(i,a),J("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},J("invalid",i);break;case"textarea":ys(i,a),J("invalid",i)}fr(n,a),o=null;for(var r in a)if(a.hasOwnProperty(r)){var l=a[r];r==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&so(i.textContent,l,e),o=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&so(i.textContent,l,e),o=["children",""+l]):Ni.hasOwnProperty(r)&&l!=null&&r==="onScroll"&&J("scroll",i)}switch(n){case"input":eo(i),vs(i,a,!0);break;case"textarea":eo(i),Ss(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Lo)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{r=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=r.createElement(n,{is:i.is}):(e=r.createElement(n),n==="select"&&(r=e,i.multiple?r.multiple=!0:i.size&&(r.size=i.size))):e=r.createElementNS(e,n),e[mt]=t,e[Mi]=i,vd(e,t,!1,!1),t.stateNode=e;e:{switch(r=mr(n,i),n){case"dialog":J("cancel",e),J("close",e),o=i;break;case"iframe":case"object":case"embed":J("load",e),o=i;break;case"video":case"audio":for(o=0;o<pi.length;o++)J(pi[o],e);o=i;break;case"source":J("error",e),o=i;break;case"img":case"image":case"link":J("error",e),J("load",e),o=i;break;case"details":J("toggle",e),o=i;break;case"input":hs(e,i),o=sr(e,i),J("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=oe({},i,{value:void 0}),J("invalid",e);break;case"textarea":ys(e,i),o=dr(e,i),J("invalid",e);break;default:o=i}fr(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Yc(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qc(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wi(e,s):typeof s=="number"&&wi(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ni.hasOwnProperty(a)?s!=null&&a==="onScroll"&&J("scroll",e):s!=null&&tl(e,a,s,r))}switch(n){case"input":eo(e),vs(e,i,!1);break;case"textarea":eo(e),Ss(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Gt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Rn(e,!!i.multiple,a,!1):i.defaultValue!=null&&Rn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Sd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(n=ln(Ri.current),ln(ht.current),co(t)){if(i=t.stateNode,n=t.memoizedProps,i[mt]=t,(a=i.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:so(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mt]=t,t.stateNode=i}return ze(t),null;case 13:if(X(ne),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ge!==null&&t.mode&1&&!(t.flags&128))_u(),Hn(),t.flags|=98560,a=!1;else if(a=co(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(E(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(E(317));a[mt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),a=!1}else lt!==null&&(Qr(lt),lt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ge===0&&(ge=3):_l())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return $n(),Br(e,t),e===null&&Pi(t.stateNode.containerInfo),ze(t),null;case 10:return xl(t.type._context),ze(t),null;case 17:return He(t.type)&&_o(),ze(t),null;case 19:if(X(ne),a=t.memoizedState,a===null)return ze(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)li(a,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=$o(e),r!==null){for(t.flags|=128,li(a,!1),i=r.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,r=a.alternate,r===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,a.type=r.type,e=r.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(ne,ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&ue()>Gn&&(t.flags|=128,i=!0,li(a,!1),t.lanes=4194304)}else{if(!i)if(e=$o(r),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!te)return ze(t),null}else 2*ue()-a.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,i=!0,li(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(n=a.last,n!==null?n.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ue(),t.sibling=null,n=ne.current,K(ne,i?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Ll(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qe&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function ym(e,t){switch(hl(t),t.tag){case 1:return He(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),X(Ue),X(Te),Il(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kl(t),null;case 13:if(X(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ne),null;case 4:return $n(),null;case 10:return xl(t.type._context),null;case 22:case 23:return Ll(),null;case 24:return null;default:return null}}var fo=!1,Ce=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){le(e,t,i)}else n.current=null}function Ur(e,t,n){try{n()}catch(i){le(e,t,i)}}var sc=!1;function xm(e,t){if(kr=Oo,e=ku(),ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var r=0,l=-1,s=-1,d=0,y=0,v=e,h=null;t:for(;;){for(var w;v!==n||o!==0&&v.nodeType!==3||(l=r+o),v!==a||i!==0&&v.nodeType!==3||(s=r+i),v.nodeType===3&&(r+=v.nodeValue.length),(w=v.firstChild)!==null;)h=v,v=w;for(;;){if(v===e)break t;if(h===n&&++d===o&&(l=r),h===a&&++y===i&&(s=r),(w=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=w}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ir={focusedElem:e,selectionRange:n},Oo=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,F=k.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:at(t.type,C),F);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){le(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return k=sc,sc=!1,k}function Si(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Ur(t,n,a)}o=o.next}while(o!==i)}}function la(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Hr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Mi],delete t[Cr],delete t[nm],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ed(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(i!==4&&(e=e.child,e!==null))for(Vr(e,t,n),e=e.sibling;e!==null;)Vr(e,t,n),e=e.sibling}function $r(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for($r(e,t,n),e=e.sibling;e!==null;)$r(e,t,n),e=e.sibling}var Ne=null,rt=!1;function At(e,t,n){for(n=n.child;n!==null;)Nd(e,t,n),n=n.sibling}function Nd(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:Ce||Mn(n,t);case 6:var i=Ne,o=rt;Ne=null,At(e,t,n),Ne=i,rt=o,Ne!==null&&(rt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(rt?(e=Ne,n=n.stateNode,e.nodeType===8?Ga(e.parentNode,n):e.nodeType===1&&Ga(e,n),zi(e)):Ga(Ne,n.stateNode));break;case 4:i=Ne,o=rt,Ne=n.stateNode.containerInfo,rt=!0,At(e,t,n),Ne=i,rt=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,r=a.destroy;a=a.tag,r!==void 0&&(a&2||a&4)&&Ur(n,t,r),o=o.next}while(o!==i)}At(e,t,n);break;case 1:if(!Ce&&(Mn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){le(n,t,l)}At(e,t,n);break;case 21:At(e,t,n);break;case 22:n.mode&1?(Ce=(i=Ce)||n.memoizedState!==null,At(e,t,n),Ce=i):At(e,t,n);break;default:At(e,t,n)}}function uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(i){var o=Tm.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var a=e,r=t,l=r;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,rt=!1;break e;case 3:Ne=l.stateNode.containerInfo,rt=!0;break e;case 4:Ne=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(Ne===null)throw Error(E(160));Nd(a,r,o),Ne=null,rt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(d){le(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wd(t,e),t=t.sibling}function wd(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),i&4){try{Si(3,e,e.return),la(3,e)}catch(C){le(e,e.return,C)}try{Si(5,e,e.return)}catch(C){le(e,e.return,C)}}break;case 1:ot(t,e),pt(e),i&512&&n!==null&&Mn(n,n.return);break;case 5:if(ot(t,e),pt(e),i&512&&n!==null&&Mn(n,n.return),e.flags&32){var o=e.stateNode;try{wi(o,"")}catch(C){le(e,e.return,C)}}if(i&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,r=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&qc(o,a),mr(l,r);var d=mr(l,a);for(r=0;r<s.length;r+=2){var y=s[r],v=s[r+1];y==="style"?Yc(o,v):y==="dangerouslySetInnerHTML"?Qc(o,v):y==="children"?wi(o,v):tl(o,y,v,d)}switch(l){case"input":cr(o,a);break;case"textarea":Gc(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?Rn(o,!!a.multiple,w,!1):h!==!!a.multiple&&(a.defaultValue!=null?Rn(o,!!a.multiple,a.defaultValue,!0):Rn(o,!!a.multiple,a.multiple?[]:"",!1))}o[Mi]=a}catch(C){le(e,e.return,C)}}break;case 6:if(ot(t,e),pt(e),i&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(C){le(e,e.return,C)}}break;case 3:if(ot(t,e),pt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(t.containerInfo)}catch(C){le(e,e.return,C)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Rl=ue())),i&4&&uc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(d=Ce)||y,ot(t,e),Ce=d):ot(t,e),pt(e),i&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(M=e,y=e.child;y!==null;){for(v=M=y;M!==null;){switch(h=M,w=h.child,h.tag){case 0:case 11:case 14:case 15:Si(4,h,h.return);break;case 1:Mn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){i=h,n=h.return;try{t=i,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){le(i,n,C)}}break;case 5:Mn(h,h.return);break;case 22:if(h.memoizedState!==null){pc(v);continue}}w!==null?(w.return=h,M=w):pc(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{o=v.stateNode,d?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=v.stateNode,s=v.memoizedProps.style,r=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Kc("display",r))}catch(C){le(e,e.return,C)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(C){le(e,e.return,C)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),pt(e),i&4&&uc(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ed(n)){var i=n;break e}n=n.return}throw Error(E(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(wi(o,""),i.flags&=-33);var a=cc(e);$r(e,a,o);break;case 3:case 4:var r=i.stateNode.containerInfo,l=cc(e);Vr(e,l,r);break;default:throw Error(E(161))}}catch(s){le(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Em(e,t,n){M=e,kd(e)}function kd(e,t,n){for(var i=(e.mode&1)!==0;M!==null;){var o=M,a=o.child;if(o.tag===22&&i){var r=o.memoizedState!==null||fo;if(!r){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Ce;l=fo;var d=Ce;if(fo=r,(Ce=s)&&!d)for(M=o;M!==null;)r=M,s=r.child,r.tag===22&&r.memoizedState!==null?fc(o):s!==null?(s.return=r,M=s):fc(o);for(;a!==null;)M=a,kd(a),a=a.sibling;M=o,fo=l,Ce=d}dc(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,M=a):dc(e)}}function dc(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||la(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ce)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ks(t,a,i);break;case 3:var r=t.updateQueue;if(r!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ks(t,r,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&zi(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||t.flags&512&&Hr(t)}catch(h){le(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function pc(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function fc(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{la(4,t)}catch(s){le(t,n,s)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(s){le(t,o,s)}}var a=t.return;try{Hr(t)}catch(s){le(t,a,s)}break;case 5:var r=t.return;try{Hr(t)}catch(s){le(t,r,s)}}}catch(s){le(t,t.return,s)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var Nm=Math.ceil,Wo=Tt.ReactCurrentDispatcher,Ml=Tt.ReactCurrentOwner,tt=Tt.ReactCurrentBatchConfig,$=0,Se=null,de=null,we=0,qe=0,On=Kt(0),ge=0,Di=null,fn=0,sa=0,Ol=0,xi=null,Fe=null,Rl=0,Gn=1/0,St=null,Qo=!1,qr=null,Vt=null,mo=!1,_t=null,Ko=0,Ei=0,Gr=null,Io=-1,bo=0;function Re(){return $&6?ue():Io!==-1?Io:Io=ue()}function $t(e){return e.mode&1?$&2&&we!==0?we&-we:am.transition!==null?(bo===0&&(bo=su()),bo):(e=W,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function ct(e,t,n,i){if(50<Ei)throw Ei=0,Gr=null,Error(E(185));Bi(e,n,i),(!($&2)||e!==Se)&&(e===Se&&(!($&2)&&(sa|=n),ge===4&&jt(e,we)),Ve(e,i),n===1&&$===0&&!(t.mode&1)&&(Gn=ue()+500,oa&&Yt()))}function Ve(e,t){var n=e.callbackNode;af(e,t);var i=Mo(e,e===Se?we:0);if(i===0)n!==null&&Ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&Ns(n),t===1)e.tag===0?om(mc.bind(null,e)):Ru(mc.bind(null,e)),em(function(){!($&6)&&Yt()}),n=null;else{switch(cu(i)){case 1:n=rl;break;case 4:n=ru;break;case 16:n=Ao;break;case 536870912:n=lu;break;default:n=Ao}n=Md(n,Id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Id(e,t){if(Io=-1,bo=0,$&6)throw Error(E(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var i=Mo(e,e===Se?we:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Yo(e,i);else{t=i;var o=$;$|=2;var a=zd();(Se!==e||we!==t)&&(St=null,Gn=ue()+500,sn(e,t));do try{Im();break}catch(l){bd(e,l)}while(!0);Sl(),Wo.current=a,$=o,de!==null?t=0:(Se=null,we=0,t=ge)}if(t!==0){if(t===2&&(o=Sr(e),o!==0&&(i=o,t=Wr(e,o))),t===1)throw n=Di,sn(e,0),jt(e,i),Ve(e,ue()),n;if(t===6)jt(e,i);else{if(o=e.current.alternate,!(i&30)&&!wm(o)&&(t=Yo(e,i),t===2&&(a=Sr(e),a!==0&&(i=a,t=Wr(e,a))),t===1))throw n=Di,sn(e,0),jt(e,i),Ve(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:nn(e,Fe,St);break;case 3:if(jt(e,i),(i&130023424)===i&&(t=Rl+500-ue(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zr(nn.bind(null,e,Fe,St),t);break}nn(e,Fe,St);break;case 4:if(jt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var r=31-st(i);a=1<<r,r=t[r],r>o&&(o=r),i&=~a}if(i=o,i=ue()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Nm(i/1960))-i,10<i){e.timeoutHandle=zr(nn.bind(null,e,Fe,St),i);break}nn(e,Fe,St);break;case 5:nn(e,Fe,St);break;default:throw Error(E(329))}}}return Ve(e,ue()),e.callbackNode===n?Id.bind(null,e):null}function Wr(e,t){var n=xi;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Qr(t)),e}function Qr(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],a=o.getSnapshot;o=o.value;try{if(!ut(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Ol,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),i=1<<n;e[n]=-1,t&=~i}}function mc(e){if($&6)throw Error(E(327));Fn();var t=Mo(e,0);if(!(t&1))return Ve(e,ue()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var i=Sr(e);i!==0&&(t=i,n=Wr(e,i))}if(n===1)throw n=Di,sn(e,0),jt(e,t),Ve(e,ue()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Fe,St),Ve(e,ue()),null}function jl(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Gn=ue()+500,oa&&Yt())}}function mn(e){_t!==null&&_t.tag===0&&!($&6)&&Fn();var t=$;$|=1;var n=tt.transition,i=W;try{if(tt.transition=null,W=1,e)return e()}finally{W=i,tt.transition=n,$=t,!($&6)&&Yt()}}function Ll(){qe=On.current,X(On)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zf(n)),de!==null)for(n=de.return;n!==null;){var i=n;switch(hl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_o();break;case 3:$n(),X(Ue),X(Te),Il();break;case 5:kl(i);break;case 4:$n();break;case 13:X(ne);break;case 19:X(ne);break;case 10:xl(i.type._context);break;case 22:case 23:Ll()}n=n.return}if(Se=e,de=e=qt(e.current,null),we=qe=t,ge=0,Di=null,Ol=sa=fn=0,Fe=xi=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,a=n.pending;if(a!==null){var r=a.next;a.next=o,i.next=r}n.pending=i}rn=null}return e}function bd(e,t){do{var n=de;try{if(Sl(),No.current=Go,qo){for(var i=ie.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}qo=!1}if(pn=0,ye=me=ie=null,yi=!1,ji=0,Ml.current=null,n===null||n.return===null){ge=1,Di=t,de=null;break}e:{var a=e,r=n.return,l=n,s=t;if(t=we,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,y=l,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=tc(r);if(w!==null){w.flags&=-257,nc(w,r,l,a,t),w.mode&1&&ec(a,d,t),t=w,s=d;var k=t.updateQueue;if(k===null){var C=new Set;C.add(s),t.updateQueue=C}else k.add(s);break e}else{if(!(t&1)){ec(a,d,t),_l();break e}s=Error(E(426))}}else if(te&&l.mode&1){var F=tc(r);if(F!==null){!(F.flags&65536)&&(F.flags|=256),nc(F,r,l,a,t),vl(qn(s,l));break e}}a=s=qn(s,l),ge!==4&&(ge=2),xi===null?xi=[a]:xi.push(a),a=r;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=cd(a,s,t);Qs(a,f);break e;case 1:l=s;var u=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=ud(a,l,t);Qs(a,S);break e}}a=a.return}while(a!==null)}Td(n)}catch(b){t=b,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function zd(){var e=Wo.current;return Wo.current=Go,e===null?Go:e}function _l(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||!(fn&268435455)&&!(sa&268435455)||jt(Se,we)}function Yo(e,t){var n=$;$|=2;var i=zd();(Se!==e||we!==t)&&(St=null,sn(e,t));do try{km();break}catch(o){bd(e,o)}while(!0);if(Sl(),$=n,Wo.current=i,de!==null)throw Error(E(261));return Se=null,we=0,ge}function km(){for(;de!==null;)Cd(de)}function Im(){for(;de!==null&&!Kp();)Cd(de)}function Cd(e){var t=Ad(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Td(e):de=t,Ml.current=null}function Td(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ym(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,de=null;return}}else if(n=vm(n,t,qe),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ge===0&&(ge=5)}function nn(e,t,n){var i=W,o=tt.transition;try{tt.transition=null,W=1,bm(e,t,n,i)}finally{tt.transition=o,W=i}return null}function bm(e,t,n,i){do Fn();while(_t!==null);if($&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(rf(e,a),e===Se&&(de=Se=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Md(Ao,function(){return Fn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=tt.transition,tt.transition=null;var r=W;W=1;var l=$;$|=4,Ml.current=null,xm(e,n),wd(n,e),Gf(Ir),Oo=!!kr,Ir=kr=null,e.current=n,Em(n),Yp(),$=l,W=r,tt.transition=a}else e.current=n;if(mo&&(mo=!1,_t=e,Ko=o),a=e.pendingLanes,a===0&&(Vt=null),Zp(n.stateNode),Ve(e,ue()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=qr,qr=null,e;return Ko&1&&e.tag!==0&&Fn(),a=e.pendingLanes,a&1?e===Gr?Ei++:(Ei=0,Gr=e):Ei=0,Yt(),null}function Fn(){if(_t!==null){var e=cu(Ko),t=tt.transition,n=W;try{if(tt.transition=null,W=16>e?16:e,_t===null)var i=!1;else{if(e=_t,_t=null,Ko=0,$&6)throw Error(E(331));var o=$;for($|=4,M=e.current;M!==null;){var a=M,r=a.child;if(M.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(M=d;M!==null;){var y=M;switch(y.tag){case 0:case 11:case 15:Si(8,y,a)}var v=y.child;if(v!==null)v.return=y,M=v;else for(;M!==null;){y=M;var h=y.sibling,w=y.return;if(xd(y),y===d){M=null;break}if(h!==null){h.return=w,M=h;break}M=w}}}var k=a.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var F=C.sibling;C.sibling=null,C=F}while(C!==null)}}M=a}}if(a.subtreeFlags&2064&&r!==null)r.return=a,M=r;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Si(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,M=f;break e}M=a.return}}var u=e.current;for(M=u;M!==null;){r=M;var m=r.child;if(r.subtreeFlags&2064&&m!==null)m.return=r,M=m;else e:for(r=u;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:la(9,l)}}catch(b){le(l,l.return,b)}if(l===r){M=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,M=S;break e}M=l.return}}if($=o,Yt(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Zo,e)}catch{}i=!0}return i}finally{W=n,tt.transition=t}}return!1}function gc(e,t,n){t=qn(n,t),t=cd(e,t,1),e=Ht(e,t,1),t=Re(),e!==null&&(Bi(e,1,t),Ve(e,t))}function le(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vt===null||!Vt.has(i))){e=qn(n,e),e=ud(t,e,1),t=Ht(t,e,1),e=Re(),t!==null&&(Bi(t,1,e),Ve(t,e));break}}t=t.return}}function zm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(we&n)===n&&(ge===4||ge===3&&(we&130023424)===we&&500>ue()-Rl?sn(e,0):Ol|=n),Ve(e,t)}function Pd(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=Re();e=zt(e,t),e!==null&&(Bi(e,t,n),Ve(e,n))}function Cm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pd(e,n)}function Tm(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),Pd(e,n)}var Ad;Ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,hm(e,t,n);Be=!!(e.flags&131072)}else Be=!1,te&&t.flags&1048576&&ju(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ko(e,t),e=t.pendingProps;var o=Un(t,Te.current);Dn(t,n),o=zl(null,t,i,e,o,n);var a=Cl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(i)?(a=!0,Do(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Nl(t),o.updater=ra,t.stateNode=o,o._reactInternals=t,Rr(t,i,e,n),t=_r(null,t,i,!0,a,n)):(t.tag=0,te&&a&&gl(t),Oe(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(ko(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=Am(i),e=at(i,e),o){case 0:t=Lr(null,t,i,e,n);break e;case 1:t=ac(null,t,i,e,n);break e;case 11:t=ic(null,t,i,e,n);break e;case 14:t=oc(null,t,i,at(i.type,e),n);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),Lr(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),ac(e,t,i,o,n);case 3:e:{if(md(t),e===null)throw Error(E(387));i=t.pendingProps,a=t.memoizedState,o=a.element,Uu(e,t),Vo(t,i,null,n);var r=t.memoizedState;if(i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=qn(Error(E(423)),t),t=rc(e,t,i,n,o);break e}else if(i!==o){o=qn(Error(E(424)),t),t=rc(e,t,i,n,o);break e}else for(Ge=Ut(t.stateNode.containerInfo.firstChild),We=t,te=!0,lt=null,n=Fu(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),i===o){t=Ct(e,t,n);break e}Oe(e,t,i,n)}t=t.child}return t;case 5:return Hu(t),e===null&&Ar(t),i=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,r=o.children,br(i,o)?r=null:a!==null&&br(i,a)&&(t.flags|=32),fd(e,t),Oe(e,t,r,n),t.child;case 6:return e===null&&Ar(t),null;case 13:return gd(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Vn(t,null,i,n):Oe(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),ic(e,t,i,o,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,a=t.memoizedProps,r=o.value,K(Uo,i._currentValue),i._currentValue=r,a!==null)if(ut(a.value,r)){if(a.children===o.children&&!Ue.current){t=Ct(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){r=a.child;for(var s=l.firstContext;s!==null;){if(s.context===i){if(a.tag===1){s=wt(-1,n&-n),s.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?s.next=s:(s.next=y.next,y.next=s),d.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Mr(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)r=a.type===t.type?null:a.child;else if(a.tag===18){if(r=a.return,r===null)throw Error(E(341));r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Mr(r,n,t),r=a.sibling}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}Oe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Dn(t,n),o=nt(o),i=i(o),t.flags|=1,Oe(e,t,i,n),t.child;case 14:return i=t.type,o=at(i,t.pendingProps),o=at(i.type,o),oc(e,t,i,o,n);case 15:return dd(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:at(i,o),ko(e,t),t.tag=1,He(i)?(e=!0,Do(t)):e=!1,Dn(t,n),sd(t,i,o),Rr(t,i,o,n),_r(null,t,i,!0,e,n);case 19:return hd(e,t,n);case 22:return pd(e,t,n)}throw Error(E(156,t.tag))};function Md(e,t){return au(e,t)}function Pm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,i){return new Pm(e,t,n,i)}function Dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Am(e){if(typeof e=="function")return Dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===ol)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zo(e,t,n,i,o,a){var r=2;if(i=e,typeof e=="function")Dl(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case wn:return cn(n.children,o,a,t);case nl:r=8,o|=8;break;case or:return e=et(12,n,t,o|2),e.elementType=or,e.lanes=a,e;case ar:return e=et(13,n,t,o),e.elementType=ar,e.lanes=a,e;case rr:return e=et(19,n,t,o),e.elementType=rr,e.lanes=a,e;case Hc:return ca(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bc:r=10;break e;case Uc:r=9;break e;case il:r=11;break e;case ol:r=14;break e;case Mt:r=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=et(r,n,t,o),t.elementType=e,t.type=i,t.lanes=a,t}function cn(e,t,n,i){return e=et(7,e,i,t),e.lanes=n,e}function ca(e,t,n,i){return e=et(22,e,i,t),e.elementType=Hc,e.lanes=n,e.stateNode={isHidden:!1},e}function er(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function tr(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mm(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ja(0),this.expirationTimes=ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ja(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fl(e,t,n,i,o,a,r,l,s){return e=new Mm(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=et(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(a),e}function Om(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function Od(e){if(!e)return Wt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(He(n))return Ou(e,n,t)}return t}function Rd(e,t,n,i,o,a,r,l,s){return e=Fl(n,i,!0,e,o,a,r,l,s),e.context=Od(null),n=e.current,i=Re(),o=$t(n),a=wt(i,o),a.callback=t??null,Ht(n,a,o),e.current.lanes=o,Bi(e,o,i),Ve(e,i),e}function ua(e,t,n,i){var o=t.current,a=Re(),r=$t(o);return n=Od(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(a,r),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Ht(o,t,r),e!==null&&(ct(e,o,r,a),Eo(e,o,r)),r}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bl(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}function Rm(){return null}var jd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}da.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ua(e,t,null,null)};da.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){ua(null,e,null,null)}),t[bt]=null}};function da(e){this._internalRoot=e}da.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&mu(e)}};function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vc(){}function jm(e,t,n,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var d=Jo(r);a.call(d)}}var r=Rd(t,i,e,0,null,!1,!1,"",vc);return e._reactRootContainer=r,e[bt]=r.current,Pi(e.nodeType===8?e.parentNode:e),mn(),r}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var l=i;i=function(){var d=Jo(s);l.call(d)}}var s=Fl(e,0,!1,null,null,!1,!1,"",vc);return e._reactRootContainer=s,e[bt]=s.current,Pi(e.nodeType===8?e.parentNode:e),mn(function(){ua(t,s,n,i)}),s}function fa(e,t,n,i,o){var a=n._reactRootContainer;if(a){var r=a;if(typeof o=="function"){var l=o;o=function(){var s=Jo(r);l.call(s)}}ua(t,r,e,o)}else r=jm(n,t,e,o,i);return Jo(r)}uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=di(t.pendingLanes);n!==0&&(ll(t,n|1),Ve(t,ue()),!($&6)&&(Gn=ue()+500,Yt()))}break;case 13:mn(function(){var i=zt(e,1);if(i!==null){var o=Re();ct(i,e,1,o)}}),Bl(e,1)}};sl=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Re();ct(t,e,134217728,n)}Bl(e,134217728)}};du=function(e){if(e.tag===13){var t=$t(e),n=zt(e,t);if(n!==null){var i=Re();ct(n,e,t,i)}Bl(e,t)}};pu=function(){return W};fu=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};hr=function(e,t,n){switch(t){case"input":if(cr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=ia(i);if(!o)throw Error(E(90));$c(i),cr(i,o)}}}break;case"textarea":Gc(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};Zc=jl;eu=mn;var Lm={usingClientEntryPoint:!1,Events:[Hi,zn,ia,Jc,Xc,jl]},si={findFiberByHostInstance:an,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Zo=go.inject(_m),gt=go}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hl(t))throw Error(E(200));return Om(e,t,null,n)};Ke.createRoot=function(e,t){if(!Hl(e))throw Error(E(299));var n=!1,i="",o=jd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Fl(e,1,!1,null,null,n,!1,i,o),e[bt]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Ul(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return mn(e)};Ke.hydrate=function(e,t,n){if(!pa(t))throw Error(E(200));return fa(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Hl(e))throw Error(E(405));var i=n!=null&&n.hydratedSources||null,o=!1,a="",r=jd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),t=Rd(t,null,e,1,n??null,o,!1,a,r),e[bt]=t.current,Pi(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new da(t)};Ke.render=function(e,t,n){if(!pa(t))throw Error(E(200));return fa(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!pa(e))throw Error(E(40));return e._reactRootContainer?(mn(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};Ke.unstable_batchedUpdates=jl;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!pa(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return fa(e,t,n,!1,i)};Ke.version="18.3.1-next-f1338f8080-20240426";function Ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld)}catch(e){console.error(e)}}Ld(),Lc.exports=Ke;var Dm=Lc.exports,_d,yc=Dm;_d=yc.createRoot,yc.hydrateRoot;var Sc={ai:{thinkers:[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0,desc:"Ex direttore AI di Tesla e cofondatore OpenAI. Oggi si concentra su agenti, wiki di conoscenza e autoresearch."},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0,desc:"Cofondatore di Twitter e Block. Radicale sulla decentralizzazione, ha abolito la gerarchia aziendale in Block."},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0,desc:"Cofondatore di Y Combinator. Saggista influente su startup, linguaggi e cultura tech."},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0,desc:"CEO di Tesla, SpaceX e xAI. Figura polarizzante che opera tra AI, spazio e politica americana."},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0,desc:"CEO di OpenAI. Al centro del dibattito su AGI, regolamentazione e il futuro del lavoro."},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0,desc:"Investitore e filosofo della Silicon Valley. Noto per le sue riflessioni su ricchezza, felicità e leverage."},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0,desc:"Analista tech indipendente, ex a16z. Saggi rigorosi e data-driven sulle dinamiche del settore."},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0,desc:"Ex CTO di Coinbase. Teorico del Network State e della sovranità computazionale."},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0,desc:"Premio Nobel, padre delle reti neurali. Ha lasciato Google per dedicarsi ai rischi dell'AI."},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0,desc:"Cofondatore di a16z. Investitore in difesa tech e voce del techno-ottimismo radicale."},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / AMI Labs",active:!0,desc:"Premio Turing, inventore delle reti convoluzionali. Ha lasciato Meta per fondare AMI Labs."},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0,desc:"CEO di Google DeepMind. Nobel per la chimica grazie ad AlphaFold."},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0,desc:"Ex chief scientist di OpenAI. Ha fondato Safe Superintelligence con 3 miliardi per ripensare l'AI da zero."},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0,desc:"CEO di NVIDIA. L'uomo dietro le GPU che alimentano la corsa all'AI."},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0,desc:"Creatore di Ethereum. Lavora su AI locale, privacy e verifica crittografica."},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0,desc:"CEO di Stripe. Finanzia ricerca scientifica e ragiona sul software come pizza fatta al momento."},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0,desc:"Creatore di Doom e Quake. Oggi guida Keen Technologies, agenti embodied con pochi parametri."},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Practical AI",active:!0,desc:"Creatore di Datasette. Scrive il 95% del suo codice dal telefono usando agenti AI."},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0,desc:"Creatore di Ruby on Rails. 18 mesi di AI in Basecamp, zero rilasci: ora rende i prodotti accessibili agli agenti."},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0,desc:"Creatore di Keras e del benchmark ARC-AGI. Sostiene che i LLM non ragionano davvero."},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0,desc:"Ex CEO di GitHub, ora VP di Meta Superintelligence Labs. Ha lanciato Entire per ripensare Git per gli agenti."},{id:22,name:"TLDR Founders",handle:"@taborfaltra",domain:"Newsletter / Startup Strategy",active:!0,desc:"Newsletter quotidiana per founder: fundraising, crescita, lezioni dal campo. Curata da Dan Ni."},{id:23,name:"TLDR Tech",handle:"@tlaborfaltra",domain:"Newsletter / Tech Daily",active:!0,desc:"Newsletter quotidiana con le notizie tech più rilevanti, in formato breve e denso.",fontiOnly:!0}],sources:["trendshift.io","GitHub Trending","Hacker News"],branding:{name:"Signal.Brief",nameHtml:"Signal<span>.</span>Brief",tagline:"Intelligence Dashboard · AI-Powered",htmlTitle:"Signal.Brief — Intelligence Dashboard",language:"it",aboutDescription:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/ai/",siteUrl:"https://it-mikesoft.github.io/signal-brief/ai",colors:{primary:"#2563eb",primaryHover:"#1d4ed8",accent:"#f59e0b",bg:"#f5f4f0",headerBg:"#faf9f6",cardBg:"#ffffff",border:"#e2ddd6",text:"#1a1a2e",textSecondary:"#6b7280",textMuted:"#9ca3af"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"0fcf5005-bf4f-46ba-92c2-bd358141e7d6",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · AI",channelDescription:"Intelligence briefing giornaliero su tech, AI e innovazione. Monitora i pensatori più influenti, identifica temi emergenti e progetti da seguire.",author:"Signal.Brief · AI by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Technology",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Intelligence briefing quotidiano su tech, AI e innovazione. Temi emergenti, pensatori chiave, progetti da seguire."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · AI",album:"Signal.Brief · AI Daily Intelligence",genre:"Technology"},podcastEnabled:!0,podcastTargetMinutes:20},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
- Scrivi SOLO lo script con i marcatori [CHAPTER], niente altro.`,introStyles:{quadro:"Apri con un QUADRO misurato della situazione attuale in 2-3 frasi: dove siamo su questo tema, cosa sta cambiando, con che velocità. Tono descrittivo, non drammatico. Poi, in modo piano, in una frase separata: 'È {giorno} {today_it}, questo è Signal Brief.'",definizione:"Apri DEFINENDO il concetto emergente centrale del giorno: una frase che spiega cos'è, una frase che spiega perché oggi è importante. Nessuna enfasi. Poi: 'Questo è Signal Brief, {giorno} {today_it}. Oggi ragioniamo intorno a questa idea.'",tesi:"Enuncia direttamente la TESI che il briefing svilupperà — una frase dichiarativa, precisa, senza sensazionalismo. Una seconda frase che la motiva in termini generali. Poi: '{giorno} {today_it}. Signal Brief.'",esempio:"Apri con un ESEMPIO CONCRETO che illustra il tema centrale: un caso specifico, un numero, una dichiarazione riportata, un paper. Poi una frase che generalizza l'esempio al tema del giorno. Poi: 'Signal Brief, {giorno} {today_it}.'",contesto_storico:"Metti il tema del giorno in CONTESTO STORICO con una frase sobria (cos'è già successo in passato su questo stesso terreno). Una seconda frase che indica cosa rende diverso il momento attuale. Poi: 'È {giorno} {today_it}. Questo è Signal Brief.'",rassegna:"Riassumi in due frasi misurate COSA È CAMBIATO rispetto al briefing precedente — usando l'asse degli emergenti del concept diff. Niente ganci drammatici. Poi: 'Questo è Signal Brief, {giorno} {today_it}.'"}}},collectibles:{thinkers:[{id:1,name:"Melanie Gerlis",handle:"@melaniegerlis",domain:"Economia dell'arte / FT",active:!0,desc:"Giornalista del Financial Times specializzata in economia dell'arte. Analisi lucide sul mercato, le aste e i flussi di capitale nel mondo dell'arte."},{id:2,name:"Scott Reyburn",handle:"@ScottReyburn",domain:"Giornalismo d'asta",active:!0,desc:"Giornalista specializzato in aste e mercato dell'arte. Cronista di Christie's, Sotheby's e dei grandi passaggi di proprieta."},{id:3,name:"Ben Clymer",handle:"@hodinkee",domain:"Orologi / Hodinkee",active:!0,desc:"Fondatore di Hodinkee, la piattaforma di riferimento per l'orologeria. Ha trasformato gli orologi in oggetto culturale per una nuova generazione."},{id:4,name:"Eric Wind",handle:"@EricWind",domain:"Orologi vintage",active:!0,desc:"Dealer e collezionista di orologi vintage di alto livello. Esperto di Rolex, Patek Philippe e del mercato secondario."},{id:5,name:"Magnus Resch",handle:"@MagnusResch",domain:"Dati sul mercato dell'arte",active:!0,desc:"Imprenditore e accademico. Analisi data-driven del mercato dell'arte, critico delle inefficienze delle gallerie."},{id:6,name:"Jerry Saltz",handle:"@jerrysaltz",domain:"Critica d'arte / Anti-mercato",active:!0,desc:"Critico d'arte del New York Magazine, premio Pulitzer. Voce populista e provocatoria, critico del mercato speculativo."},{id:7,name:"Kenny Schachter",handle:"@kennyschachter",domain:"Arte + NFT + Crypto",active:!0,desc:"Artista, critico e dealer. Ponte tra arte contemporanea, NFT e criptovalute. Voce irriverente e insider del mercato."},{id:8,name:"Andrew Shirley",handle:"@AndrewShirleyKF",domain:"Investimenti di lusso",active:!0,desc:"Responsabile del Wealth Report di Knight Frank. Autore del Luxury Investment Index che traccia vino, arte, orologi e auto d'epoca."},{id:9,name:"Alain Zimmermann",handle:"@AlainZimmermann",domain:"Industria orologiera svizzera",active:!0,desc:"Analista dell'industria orologiera svizzera. Esperto di dinamiche di mercato, export e posizionamento dei brand di alta orologeria."},{id:10,name:"Noah Davis",handle:"@NoahDavis",domain:"Crypto-art / Aste digitali",active:!0,desc:"Ex specialista di Christie's, ha gestito la vendita record di Beeple. Figura chiave nell'intersezione tra arte tradizionale e digitale."},{id:11,name:"Artnet",handle:"@artnet",domain:"Analytics del mercato dell'arte",active:!0,desc:"Piattaforma di analytics e news sul mercato dell'arte. Database di prezzi d'asta, indici di mercato e intelligence per collezionisti."},{id:12,name:"Rally",handle:"@rallyrd",domain:"Investimento frazionato",active:!0,desc:"Piattaforma di investimento frazionato in collectibles: auto d'epoca, carte sportive, orologi, memorabilia. Democratizzazione dell'accesso."}],sources:["Artnet","Hodinkee","Knight Frank Wealth Report"],branding:{name:"Signal.Collectibles",nameHtml:"Signal<span>.</span>Collectibles",tagline:"Collectibles & Art Investment Intelligence · AI-Powered",htmlTitle:"Signal.Collectibles — Investment Intelligence",language:"it",aboutDescription:"Signal.Collectibles e un intelligence dashboard per collezionisti e investitori in beni alternativi. Ogni giorno raccoglie e analizza le idee dei critici, dealer e analisti piu influenti nel mondo dell'arte, degli orologi e dei collectibles, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/collectibles/",siteUrl:"https://it-mikesoft.github.io/signal-brief/collectibles",colors:{primary:"#b45309",primaryHover:"#92400e",accent:"#d97706",bg:"#fffbeb",headerBg:"#fef3c7",cardBg:"#ffffff",border:"#fcd34d",text:"#2e2a1a",textSecondary:"#6b5b3a",textMuted:"#9c8a6a"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"7ab1a958-7037-4507-ad92-dee1d815dc70",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Collectibles",channelDescription:"Briefing quotidiano su arte, orologi, collectibles e beni d'investimento alternativi. Analisi dei critici e dealer piu influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Collectibles by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Business",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su arte, orologi, collectibles e beni d'investimento alternativi."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Collectibles",album:"Signal.Brief · Collectibles Daily Intelligence",genre:"Collectibles & Art"},podcastEnabled:!1,podcastTargetMinutes:5},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`,introStyles:{asta:"Apri con un'IMMAGINE dall'asta o dalla collezione: un martello che batte, un quadro che cambia proprietario, un orologio sotto una lente. Una frase che lo contestualizza. Poi: 'Signal Collectibles, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un prezzo battuto, un indice di mercato, una quotazione). Una frase che lo contestualizza. Poi: 'Signal Collectibles, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI di mercato che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Collectibles.'",paragone:"Apri con un PARAGONE STORICO: un momento passato del collezionismo che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Collectibles.'",scena:"Apri con una SCENA concreta: un lotto battuto all'asta, un orologio raro che riappare sul mercato, una galleria che cambia strategia. Poi: 'Signal Collectibles, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nel mercato dei collectibles rispetto al briefing precedente. Poi: 'Questo e Signal Collectibles, {giorno} {today_it}.'"}}},finanza:{thinkers:[{id:1,name:"Ray Dalio",handle:"@RayDalio",domain:"Macro / All-Weather",active:!0,desc:"Fondatore di Bridgewater, il più grande hedge fund al mondo. Teorico dei cicli di debito e dell'All-Weather portfolio."},{id:2,name:"Howard Marks",handle:"@HowardMarksBook",domain:"Value Investing / Rischio",active:!0,desc:"Co-fondatore di Oaktree Capital. I suoi memo sul rischio e il market sentiment sono lettura obbligatoria a Wall Street."},{id:3,name:"Cathie Wood",handle:"@CathieDWood",domain:"Growth / Innovazione",active:!0,desc:"CEO di ARK Invest. Scommesse ad alta convinzione su AI, genomica, robotica e blockchain."},{id:4,name:"Nassim Taleb",handle:"@nntaleb",domain:"Antifragilità / Tail Risk",active:!0,desc:"Autore di Il Cigno Nero e Antifragile. Matematico, trader, critico feroce della finanza convenzionale."},{id:5,name:"Matt Levine",handle:"@matt_levine",domain:"Giornalismo finanziario",active:!0,desc:"Columnist di Bloomberg. Analisi sarcastiche e profonde sulla struttura dei mercati, dei deal e della regolamentazione."},{id:6,name:"Morgan Housel",handle:"@morganhousel",domain:"Finanza comportamentale",active:!0,desc:"Autore di La Psicologia dei Soldi. Scrive sul rapporto tra psicologia, tempo e denaro."},{id:7,name:"Lyn Alden",handle:"@LynAldenContact",domain:"Macro / Cripto bilanciato",active:!0,desc:"Analista macro indipendente. Ponte tra investimento tradizionale e cripto, con rigore quantitativo."},{id:8,name:"Ben Felix",handle:"@BenFelixCSI",domain:"Investimento passivo / Evidence",active:!0,desc:"Portfolio manager e YouTuber canadese. Paladino dell'investimento evidence-based, anti-stock-picking."},{id:9,name:"Peter Schiff",handle:"@PeterSchiff",domain:"Oro / Austrian Economics",active:!0,desc:"CEO di Euro Pacific Capital. Permabear, critico della Fed, sostenitore dell'oro come riserva di valore."},{id:10,name:"Ramit Sethi",handle:"@ramit",domain:"Finanza personale pratica",active:!0,desc:"Autore di I Will Teach You to Be Rich. Anti-frugalità, pro-sistemi automatici e spesa consapevole."},{id:11,name:"Chamath Palihapitiya",handle:"@chamath",domain:"Tech investing / Contrarian",active:!0,desc:"CEO di Social Capital, ex Facebook. Investitore tech contrarian con forti posizioni politiche."},{id:12,name:"Suze Orman",handle:"@SuzeOrmanShow",domain:"Finanza mainstream / TV",active:!0,desc:"Volto televisivo della finanza personale americana. Budgeting tradizionale, approccio conservativo."}],sources:["Finviz","Bloomberg Trending","Seeking Alpha"],branding:{name:"Signal.Finance",nameHtml:"Signal<span>.</span>Finance",tagline:"Investment Intelligence · AI-Powered",htmlTitle:"Signal.Finance — Investment Intelligence",language:"it",aboutDescription:"Signal.Finance è un intelligence dashboard per investitori e decisori. Ogni giorno raccoglie e analizza le idee degli investitori e analisti più influenti, produce sintesi trasversali sui trend di mercato, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/finanza/",siteUrl:"https://it-mikesoft.github.io/signal-brief/finanza",colors:{primary:"#059669",primaryHover:"#047857",accent:"#d97706",bg:"#f8faf9",headerBg:"#f0fdf4",cardBg:"#ffffff",border:"#d1e7dd",text:"#1a2e1a",textSecondary:"#4b6b4b",textMuted:"#7c9a7c"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"bffb56df-3059-4493-9275-23396c18e129",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Finance",channelDescription:"Briefing quotidiano su mercati, investimenti e finanza personale. Analisi degli investitori più influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Finance by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Business",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su mercati, investimenti e finanza personale."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Finance",album:"Signal.Brief · Finance Daily Intelligence",genre:"Business"},podcastEnabled:!1,podcastTargetMinutes:5},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`,introStyles:{quadro:"Apri con un QUADRO misurato dei mercati: dove siamo, cosa si muove, con che velocità. Tono descrittivo, non drammatico. Poi: 'È {giorno} {today_it}, questo è Signal Finance.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un rendimento, un flusso di capitali, un prezzo, un rapporto). Una frase che lo contestualizza. Poi: 'Signal Finance, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI di mercato che il briefing svilupperà — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Finance.'",paragone:"Apri con un PARAGONE STORICO: un momento passato dei mercati che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'È {giorno} {today_it}. Questo è Signal Finance.'",scena:"Apri con una SCENA concreta: un investitore che prende una decisione, un memo appena pubblicato, un numero su uno schermo. Poi: 'Signal Finance, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA È CAMBIATO nei mercati rispetto al briefing precedente. Poi: 'Questo è Signal Finance, {giorno} {today_it}.'"}}},medicina:{thinkers:[{id:1,name:"Andrew Weil",handle:"@DrWeil",domain:"Medicina integrativa",active:!0,desc:"Medico di Harvard, fondatore della medicina integrativa. Da 40 anni costruisce il ponte tra medicina convenzionale e tradizioni curative."},{id:2,name:"Deepak Chopra",handle:"@DeepakChopra",domain:"Mente-corpo / Ayurveda",active:!0,desc:"Endocrinologo e divulgatore ayurvedico. Controverso ma influente: ha portato la connessione mente-corpo nel mainstream occidentale."},{id:3,name:"Mark Hyman",handle:"@drmarkhyman",domain:"Medicina funzionale",active:!0,desc:"Fondatore dell'UltraWellness Center. Pioniere della medicina funzionale e dell'approccio 'cibo come medicina'."},{id:4,name:"Peter Attia",handle:"@PeterAttiaMD",domain:"Longevità / Evidence-based",active:!0,desc:"Medico specializzato in longevità. Approccio rigoroso, dati alla mano, ponte tra scienza dura e prevenzione."},{id:5,name:"Gabor Maté",handle:"@DrGaborMate",domain:"Trauma / Dipendenze",active:!0,desc:"Medico ungherese-canadese. Ha ridefinito il rapporto tra trauma infantile, dipendenze e malattie croniche."},{id:6,name:"Giovanni Maciocia",handle:"",domain:"Medicina cinese / Agopuntura",active:!0,desc:"Il più influente autore occidentale di medicina tradizionale cinese. I suoi testi sono riferimento mondiale per agopuntura e fitoterapia cinese."},{id:7,name:"Mantak Chia",handle:"@mantakchia",domain:"Taoismo / Qigong",active:!0,desc:"Maestro taoista thailandese-cinese. Ha sistematizzato le pratiche taoiste di coltivazione dell'energia interna per l'Occidente."},{id:8,name:"Vandana Shiva",handle:"@daborrvandanashiva",domain:"Ecologia / Semi / Sovranità alimentare",active:!0,desc:"Fisica e attivista indiana. Difende la biodiversità e l'agricoltura tradizionale contro i brevetti sulle sementi e l'agroindustria."},{id:9,name:"Edzard Ernst",handle:"@EdzardErnst",domain:"Critica della medicina alternativa",active:!0,desc:"Primo professore universitario di medicina complementare. Ex praticante omeopatico, oggi il critico scientifico più rigoroso delle terapie alternative."},{id:10,name:"Byung-Chul Han",handle:"",domain:"Filosofia / Società della stanchezza",active:!0,desc:"Filosofo coreano-tedesco. Analizza come la società delle prestazioni produce burnout, depressione e malattia. Critico della positività tossica."},{id:11,name:"Bessel van der Kolk",handle:"@BesselvdKolk",domain:"Trauma / Il corpo tiene il conto",active:!0,desc:"Psichiatra olandese-americano. Ha dimostrato come il trauma si inscrive nel corpo e si cura con approcci somatici, non solo parlati."},{id:12,name:"Claudia Welch",handle:"@drclaudiawelch",domain:"Ayurveda / Equilibrio ormonale",active:!0,desc:"Medico ayurvedico e agopuntrice. Specializzata nell'equilibrio ormonale femminile attraverso la lente delle medicine tradizionali."},{id:13,name:"Matthieu Ricard",handle:"@MatthieuRicard",domain:"Buddhismo / Neuroscienze contemplative",active:!0,desc:"Monaco buddhista e biologo molecolare. I suoi studi sulla meditazione con Richard Davidson hanno dimostrato la plasticità cerebrale dei contemplatori."},{id:14,name:"Stefano Mancuso",handle:"@StMancuso",domain:"Neurobiologia vegetale / Intelligenza delle piante",active:!0,desc:"Neurobiologo vegetale italiano. Ha rivoluzionato la comprensione delle piante come organismi intelligenti, con implicazioni per la fitoterapia e l'ecologia."}],sources:["PubMed Integrative","Examine.com","Green Medinfo"],branding:{name:"Signal.Natura",nameHtml:"Signal<span>.</span>Natura",tagline:"Medicina Naturale Intelligence · AI-Powered",htmlTitle:"Signal.Natura — Medicina Naturale Intelligence",language:"it",aboutDescription:"Signal.Natura è un intelligence dashboard sulla medicina naturale e integrativa. Ogni giorno raccoglie le idee di medici non convenzionali, maestri di medicine tradizionali, filosofi e ricercatori, produce sintesi trasversali e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/medicina/",siteUrl:"https://it-mikesoft.github.io/signal-brief/medicina",colors:{primary:"#16a34a",primaryHover:"#15803d",accent:"#a3e635",bg:"#f7fdf9",headerBg:"#ecfdf5",cardBg:"#ffffff",border:"#bbf7d0",text:"#14532d",textSecondary:"#4d7c5e",textMuted:"#86a896"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"a61f20b2-3c6a-45e3-8307-9c7b08430032",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Natura",channelDescription:"Briefing quotidiano su medicina naturale, integrativa e tradizionale. Analisi dei pensatori più influenti tra medici non convenzionali, maestri orientali e filosofi.",author:"Signal.Brief · Natura by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Health & Fitness",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su medicina naturale e integrativa."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Natura",album:"Signal.Brief · Natura Daily Intelligence",genre:"Health & Fitness"},podcastEnabled:!1,podcastTargetMinutes:5},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`,introStyles:{quadro:"Apri con un QUADRO pacato di dove sta il mondo della cura naturale: cosa si muove, cosa torna, cosa viene messo in discussione. Poi: 'È {giorno} {today_it}, questo è Signal Natura.'",tradizione:"Apri con una CITAZIONE o un principio da una tradizione medica antica (cinese, ayurvedica, ippocratica) che risuona col tema del giorno. Una frase che la collega al presente. Poi: 'Signal Natura, {giorno} {today_it}.'",corpo:"Apri con una SENSAZIONE CORPOREA che tutti conoscono — una tensione, un respiro, un dolore — e collegala al tema della giornata come metafora concreta. Poi: '{giorno} {today_it}. Questo è Signal Natura.'",ricerca:"Apri con un DATO o un risultato di ricerca recente che illumina il tema del giorno — un numero, uno studio, una scoperta. Una frase che lo contestualizza. Poi: 'È {giorno} {today_it}. Signal Natura.'",domanda:"Apri con una DOMANDA genuina sulla cura che il briefing proverà a esplorare. Non retorica, non provocatoria — una vera curiosità. Poi: 'Signal Natura, {giorno} {today_it}.'",scena:"Apri con una SCENA: un medico in un ambulatorio, un monaco in un giardino, una persona che si ferma a respirare. Due frasi vivide. Poi: '{giorno} {today_it}, Signal Natura.'"}}},moda:{thinkers:[{id:1,name:"Imran Amed",handle:"@imaboranaboramed",domain:"Industria / Business of Fashion",active:!0,desc:"Fondatore e CEO di Business of Fashion, la piattaforma di intelligence sull'industria della moda globale."},{id:2,name:"Vanessa Friedman",handle:"@VVFriedman",domain:"Critica / NYT",active:!0,desc:"Fashion critic del New York Times. Voce dell'establishment, analisi politica e culturale della moda."},{id:3,name:"Diet Prada",handle:"@diet_prada",domain:"Accountability / Call-out",active:!0,desc:"Account di watchdog della moda. Smaschera plagi, appropriazione culturale e pratiche scorrette dell'industria."},{id:4,name:"Tim Blanks",handle:"@TimBlanks",domain:"Giornalismo enciclopedico",active:!0,desc:"Critico di moda veterano, enciclopedico. Decenni di copertura delle sfilate e conoscenza storica del settore."},{id:5,name:"Li Edelkoort",handle:"@edelkoort",domain:"Trend forecasting / Anti-fashion",active:!0,desc:"Trend forecaster olandese di fama mondiale. Ha dichiarato la morte della moda come la conosciamo."},{id:6,name:"Demna",handle:"@demna",domain:"Provocazione / Ironia",active:!0,desc:"Direttore creativo di Balenciaga. Maestro della provocazione, ironia concettuale e decostruzione del lusso."},{id:7,name:"Jerry Lorenzo",handle:"@fearofgod",domain:"Streetwear / Spiritualita",active:!0,desc:"Fondatore di Fear of God. Fusione di spiritualita, streetwear e lusso americano."},{id:8,name:"Telfar Clemens",handle:"@telfar",domain:"Lusso accessibile",active:!0,desc:"Designer liberiano-americano. Ha ridefinito il concetto di lusso democratico con la Shopping Bag virale."},{id:9,name:"Angelo Flaccavento",handle:"@aflaboraccavento",domain:"Artigianato italiano",active:!0,desc:"Critico di moda italiano. Difensore dell'artigianato, della lentezza e della tradizione sartoriale italiana."},{id:10,name:"Orsola de Castro",handle:"@orsoladecastro",domain:"Sostenibilita radicale",active:!0,desc:"Co-fondatrice di Fashion Revolution. Attivista per la trasparenza e la sostenibilita radicale nella moda."},{id:11,name:"Virginie Viard",handle:"@VirginieViard",domain:"Tradizione / Haute Couture",active:!0,desc:"Ex direttrice artistica di Chanel, erede di Lagerfeld. Rappresenta la continuita e la tradizione dell'alta moda."},{id:12,name:"Lyst",handle:"@lyst",domain:"Dati algoritmici / Fashion data",active:!0,desc:"Piattaforma di search e analytics della moda. I suoi indici misurano cosa cerca e compra realmente il mercato."}],sources:["Business of Fashion","Vogue Business","Highsnobiety"],branding:{name:"Signal.Moda",nameHtml:"Signal<span>.</span>Moda",tagline:"Fashion Intelligence · AI-Powered",htmlTitle:"Signal.Moda — Fashion Intelligence",language:"it",aboutDescription:"Signal.Moda e un intelligence dashboard per chi lavora nella moda e nel lusso. Ogni giorno raccoglie e analizza le idee dei critici, designer e analisti piu influenti, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/moda/",siteUrl:"https://it-mikesoft.github.io/signal-brief/moda",colors:{primary:"#be185d",primaryHover:"#9d174d",accent:"#e11d48",bg:"#fdf2f8",headerBg:"#fce7f3",cardBg:"#ffffff",border:"#f9a8d4",text:"#1a1a2e",textSecondary:"#6b4b6b",textMuted:"#9c7a9c"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"d40deeb9-31c5-4142-bf5a-689a9f926c1f",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Moda",channelDescription:"Briefing quotidiano su moda, lusso e cultura del vestire. Analisi dei critici e designer piu influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Moda by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Arts",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su moda, lusso e cultura del vestire."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Moda",album:"Signal.Brief · Moda Daily Intelligence",genre:"Fashion"},podcastEnabled:!1,podcastTargetMinutes:5},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`,introStyles:{passerella:"Apri con un'IMMAGINE dalla passerella o dalla strada: un capo, un gesto, un dettaglio che illumina il tema del giorno. Una frase che lo contestualizza. Poi: 'Signal Moda, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (una vendita, un indice di ricerca, una quota di mercato). Una frase che lo contestualizza. Poi: 'Signal Moda, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI culturale che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Moda.'",paragone:"Apri con un PARAGONE STORICO: un momento passato della moda che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Moda.'",scena:"Apri con una SCENA concreta: un designer che presenta una collezione, un editoriale appena uscito, un post virale. Poi: 'Signal Moda, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nella moda rispetto al briefing precedente. Poi: 'Questo e Signal Moda, {giorno} {today_it}.'"}}},travel:{thinkers:[{id:1,name:"Rick Steves",handle:"@RickSteves",domain:"Viaggio culturale europeo",active:!0,desc:"Autore e conduttore TV americano. Paladino del viaggio culturale in Europa, budget consapevole, anti-turismo di massa."},{id:2,name:"Pico Iyer",handle:"@PicoIyer",domain:"Viaggio filosofico / Slow travel",active:!0,desc:"Scrittore e saggista. Poeta del viaggio lento, della quiete e del perdersi come forma di conoscenza."},{id:3,name:"Nomadic Matt",handle:"@nomadicmatt",domain:"Budget backpacking",active:!0,desc:"Blogger e autore. Riferimento mondiale per il viaggio low-cost, guide pratiche e democratizzazione dell'accesso."},{id:4,name:"Brian Kelly",handle:"@thepointsguy",domain:"Loyalty / Miles optimization",active:!0,desc:"Fondatore di The Points Guy. Massimo esperto di programmi fedelta, miglia aeree e ottimizzazione del viaggio premium."},{id:5,name:"Rafat Ali",handle:"@Skift",domain:"Travel industry intelligence",active:!0,desc:"Fondatore di Skift, la piattaforma di intelligence sull'industria del turismo. Analisi di dati, trend e strategie del settore."},{id:6,name:"Paul Theroux",handle:"@pabortheaboroux",domain:"Anti-turismo / Letteratura",active:!0,desc:"Scrittore e viaggiatore. Maestro del viaggio letterario, critico feroce del turismo organizzato e della globalizzazione."},{id:7,name:"Mark Ellingham",handle:"@MarkEllingham",domain:"Turismo sostenibile",active:!0,desc:"Fondatore delle Rough Guides. Pioniere del turismo responsabile e della sostenibilita nel settore dei viaggi."},{id:8,name:"Oneika Raymond",handle:"@oneikaRaymond",domain:"Diversita nel viaggio",active:!0,desc:"Travel journalist e conduttrice TV. Voce per la diversita e l'inclusione nel mondo dei viaggi."},{id:9,name:"Johnny Jet",handle:"@JohnnyJet",domain:"Travel hacking",active:!0,desc:"Esperto di travel hacking, offerte aeree e trucchi per viaggiare meglio spendendo meno."},{id:10,name:"Conde Nast Traveller",handle:"@CNTraveller",domain:"Lusso / Esperienze premium",active:!0,desc:"La bibbia del viaggio di lusso. Definisce il canone dell'hotel, della destinazione e dell'esperienza premium."},{id:11,name:"Scott's Cheap Flights",handle:"@scottscheapflt",domain:"Errori tariffari / Accesso",active:!0,desc:"Servizio di alert per tariffe aeree scontate ed errori tariffari. Simbolo della democratizzazione del volo a basso costo."},{id:12,name:"Samantha Brown",handle:"@SamanthaBrown",domain:"Mainstream accessibile / PBS",active:!0,desc:"Conduttrice PBS e autrice. Volto del viaggio accessibile, mainstream e familiare per il pubblico americano."}],sources:["Skift","Conde Nast Traveller","Lonely Planet"],branding:{name:"Signal.Travel",nameHtml:"Signal<span>.</span>Travel",tagline:"Travel Intelligence · AI-Powered",htmlTitle:"Signal.Travel — Travel Intelligence",language:"it",aboutDescription:"Signal.Travel e un intelligence dashboard per viaggiatori consapevoli e operatori del turismo. Ogni giorno raccoglie e analizza le idee degli scrittori, esperti e analisti piu influenti del mondo dei viaggi, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/travel/",siteUrl:"https://it-mikesoft.github.io/signal-brief/travel",colors:{primary:"#0d9488",primaryHover:"#0f766e",accent:"#14b8a6",bg:"#f0fdfa",headerBg:"#ccfbf1",cardBg:"#ffffff",border:"#99f6e4",text:"#1a2e2e",textSecondary:"#4b6b6b",textMuted:"#7c9a9a"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"ec5e4263-2247-4fd7-a098-37cdcfe972ae",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Travel",channelDescription:"Briefing quotidiano su viaggi, turismo e cultura del viaggio. Analisi degli scrittori e analisti piu influenti, destinazioni emergenti e trend da osservare.",author:"Signal.Brief · Travel by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Leisure",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su viaggi, turismo e cultura del viaggio."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Travel",album:"Signal.Brief · Travel Daily Intelligence",genre:"Travel"},podcastEnabled:!1,podcastTargetMinutes:5},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`,introStyles:{cartolina:"Apri con un'IMMAGINE da un luogo: un aeroporto, una strada, un paesaggio che illumina il tema del giorno. Una frase che lo contestualizza. Poi: 'Signal Travel, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un flusso di passeggeri, una tariffa, un tasso di occupazione). Una frase che lo contestualizza. Poi: 'Signal Travel, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI sul turismo che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Travel.'",paragone:"Apri con un PARAGONE STORICO: un momento passato del turismo che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Travel.'",scena:"Apri con una SCENA concreta: un viaggiatore in un luogo, una compagnia aerea che annuncia una rotta, una citta che cambia le sue regole. Poi: 'Signal Travel, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nel mondo dei viaggi rispetto al briefing precedente. Poi: 'Questo e Signal Travel, {giorno} {today_it}.'"}}},vino:{thinkers:[{id:1,name:"Jancis Robinson",handle:"@JancisRobinson",domain:"Autorita enciclopedica / MW",active:!0,desc:"Master of Wine, autrice del Wine Atlas. Autorita enciclopedica mondiale, riferimento assoluto per vitigni e terroir."},{id:2,name:"Antonio Galloni",handle:"@agalloni",domain:"Critica italiana / Vinous",active:!0,desc:"Fondatore di Vinous. Critico italo-americano con la conoscenza piu profonda dei vini italiani nel mondo anglofono."},{id:3,name:"Alice Feiring",handle:"@alicefeiring",domain:"Vino naturale radicale",active:!0,desc:"Giornalista e autrice. Pioniera della difesa del vino naturale, critica feroce dell'enologia interventista."},{id:4,name:"Jamie Goode",handle:"@jamiegoode",domain:"Scienza del vino / Terroir",active:!0,desc:"Giornalista e divulgatore scientifico del vino. Ponte tra laboratorio e vigna, esperto di terroir e microbiologia."},{id:5,name:"Eric Asimov",handle:"@ericasimov",domain:"Anti-punteggi / NYT",active:!0,desc:"Wine critic del New York Times. Nemico dei punteggi, paladino del vino come esperienza culturale e conviviale."},{id:6,name:"Rajat Parr",handle:"@rajatparr",domain:"Sommelier e produttore",active:!0,desc:"Sommelier leggendario diventato produttore. Incarna il passaggio dal servizio alla vigna, dalla California alla Borgogna."},{id:7,name:"Madeline Puckette",handle:"@WineFolly",domain:"Democratizzazione del vino",active:!0,desc:"Fondatrice di Wine Folly. Ha reso il vino accessibile a milioni di persone con infografiche e linguaggio diretto."},{id:8,name:"Ian D'Agata",handle:"@iandagata",domain:"Vitigni autoctoni italiani",active:!0,desc:"Massimo esperto mondiale di vitigni autoctoni italiani. Enciclopedico, rigoroso, ponte tra scienza e tradizione."},{id:9,name:"Isabelle Legeron",handle:"@isabellegeron",domain:"Raw Wine / MW",active:!0,desc:"Master of Wine, fondatrice di RAW WINE. Pioniera delle fiere di vino naturale, attivista per la trasparenza in etichetta."},{id:10,name:"Arianna Occhipinti",handle:"@ariannaocchipinti",domain:"Vino naturale siciliano",active:!0,desc:"Produttrice siciliana di vino naturale a Vittoria. Icona della nuova generazione di vignaioli artigianali italiani."},{id:11,name:"Robert Parker",handle:"@Wine_Advocate",domain:"Punteggi / 100 punti",active:!0,desc:"Fondatore di Wine Advocate e del sistema a 100 punti. Ha definito (e polarizzato) il mercato del vino per decenni."},{id:12,name:"Hugh Johnson",handle:"@HughJohnsonWine",domain:"Enciclopedia / Old school",active:!0,desc:"Autore del Pocket Wine Book, il manuale piu venduto al mondo. Approccio britannico classico, enciclopedico, anti-moda."}],sources:["Vinous","Wine Spectator","Decanter"],branding:{name:"Signal.Vino",nameHtml:"Signal<span>.</span>Vino",tagline:"Wine Intelligence · AI-Powered",htmlTitle:"Signal.Vino — Wine Intelligence",language:"it",aboutDescription:"Signal.Vino e un intelligence dashboard per appassionati, professionisti e operatori del mondo del vino. Ogni giorno raccoglie e analizza le idee dei critici, produttori e divulgatori piu influenti, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',basePath:"/signal-brief/vino/",siteUrl:"https://it-mikesoft.github.io/signal-brief/vino",colors:{primary:"#881337",primaryHover:"#6b1030",accent:"#be123c",bg:"#fdf2f4",headerBg:"#fce4ec",cardBg:"#ffffff",border:"#e8a0b0",text:"#2e1a1a",textSecondary:"#6b4b4b",textMuted:"#9c7a7a"},fonts:{heading:"Fraunces",mono:"IBM Plex Mono",body:"Inter",googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"c9c93984-4fd7-4c6e-8064-49fdfc5b437d",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{channelTitle:"Signal.Brief · Vino",channelDescription:"Briefing quotidiano su vino, terroir e cultura enologica. Analisi dei critici e produttori piu influenti, temi emergenti e trend da osservare.",author:"Signal.Brief · Vino by MikeSoft",ownerName:"MikeSoft",ownerEmail:"info@mikesoft.it",category:"Leisure",copyright:"MikeSoft 2026",coverImage:"podcast-cover.png",defaultDescription:"Briefing quotidiano su vino, terroir e cultura enologica."},podcastConfig:{ttsEngine:"edge-tts",narrator:"it-IT-IsabellaNeural",thinkerVoices:["it-IT-GiuseppeMultilingualNeural","it-IT-DiegoNeural","it-IT-ElsaNeural"],thinkerVoiceNames:["Giuseppe","Diego","Elsa"],voiceTuning:{"it-IT-IsabellaNeural":{rate:"+12%",pitch:"+0Hz"},"it-IT-ElsaNeural":{rate:"-2%",pitch:"-1Hz"},"it-IT-GiuseppeMultilingualNeural":{rate:"-3%",pitch:"-5Hz"},"it-IT-DiegoNeural":{rate:"+0%",pitch:"-12Hz"}},musicVolume:.08,generateAt:"05:00",mp3Metadata:{artist:"Signal.Brief · Vino",album:"Signal.Brief · Vino Daily Intelligence",genre:"Food & Wine"},podcastEnabled:!1,podcastTargetMinutes:5},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`,introStyles:{vigna:"Apri con un'IMMAGINE dalla vigna o dalla cantina: un gesto, un profumo, un paesaggio che illumina il tema del giorno. Una frase che lo contestualizza. Poi: 'Signal Vino, {giorno} {today_it}.'",dato:"Apri con UN DATO o UN NUMERO preciso che illumina il tema del giorno (un'annata, un prezzo all'asta, una resa per ettaro, un punteggio). Una frase che lo contestualizza. Poi: 'Signal Vino, {giorno} {today_it}.'",tesi:"Enuncia direttamente la TESI enologica che il briefing sviluppera — una frase dichiarativa, precisa. Una seconda frase che la motiva. Poi: '{giorno} {today_it}. Signal Vino.'",paragone:"Apri con un PARAGONE STORICO: un momento passato del mondo del vino che somiglia a quello attuale. Una frase che spiega cosa rende diverso oggi. Poi: 'E {giorno} {today_it}. Questo e Signal Vino.'",scena:"Apri con una SCENA concreta: un produttore in vigna, una degustazione appena avvenuta, un'asta record. Poi: 'Signal Vino, {giorno} {today_it}.'",rassegna:"Riassumi in due frasi COSA E CAMBIATO nel mondo del vino rispetto al briefing precedente. Poi: 'Questo e Signal Vino, {giorno} {today_it}.'"}}}},Fm={thinkers:[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0,desc:"Ex direttore AI di Tesla e cofondatore OpenAI. Oggi si concentra su agenti, wiki di conoscenza e autoresearch."},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0,desc:"Cofondatore di Twitter e Block. Radicale sulla decentralizzazione, ha abolito la gerarchia aziendale in Block."},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0,desc:"Cofondatore di Y Combinator. Saggista influente su startup, linguaggi e cultura tech."},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0,desc:"CEO di Tesla, SpaceX e xAI. Figura polarizzante che opera tra AI, spazio e politica americana."},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0,desc:"CEO di OpenAI. Al centro del dibattito su AGI, regolamentazione e il futuro del lavoro."},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0,desc:"Investitore e filosofo della Silicon Valley. Noto per le sue riflessioni su ricchezza, felicità e leverage."},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0,desc:"Analista tech indipendente, ex a16z. Saggi rigorosi e data-driven sulle dinamiche del settore."},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0,desc:"Ex CTO di Coinbase. Teorico del Network State e della sovranità computazionale."},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0,desc:"Premio Nobel, padre delle reti neurali. Ha lasciato Google per dedicarsi ai rischi dell'AI."},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0,desc:"Cofondatore di a16z. Investitore in difesa tech e voce del techno-ottimismo radicale."},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / AMI Labs",active:!0,desc:"Premio Turing, inventore delle reti convoluzionali. Ha lasciato Meta per fondare AMI Labs."},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0,desc:"CEO di Google DeepMind. Nobel per la chimica grazie ad AlphaFold."},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0,desc:"Ex chief scientist di OpenAI. Ha fondato Safe Superintelligence con 3 miliardi per ripensare l'AI da zero."},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0,desc:"CEO di NVIDIA. L'uomo dietro le GPU che alimentano la corsa all'AI."},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0,desc:"Creatore di Ethereum. Lavora su AI locale, privacy e verifica crittografica."},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0,desc:"CEO di Stripe. Finanzia ricerca scientifica e ragiona sul software come pizza fatta al momento."},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0,desc:"Creatore di Doom e Quake. Oggi guida Keen Technologies, agenti embodied con pochi parametri."},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Practical AI",active:!0,desc:"Creatore di Datasette. Scrive il 95% del suo codice dal telefono usando agenti AI."},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0,desc:"Creatore di Ruby on Rails. 18 mesi di AI in Basecamp, zero rilasci: ora rende i prodotti accessibili agli agenti."},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0,desc:"Creatore di Keras e del benchmark ARC-AGI. Sostiene che i LLM non ragionano davvero."},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0,desc:"Ex CEO di GitHub, ora VP di Meta Superintelligence Labs. Ha lanciato Entire per ripensare Git per gli agenti."},{id:22,name:"TLDR Founders",handle:"@taborfaltra",domain:"Newsletter / Startup Strategy",active:!0,desc:"Newsletter quotidiana per founder: fundraising, crescita, lezioni dal campo. Curata da Dan Ni."},{id:23,name:"TLDR Tech",handle:"@tlaborfaltra",domain:"Newsletter / Tech Daily",active:!0,desc:"Newsletter quotidiana con le notizie tech più rilevanti, in formato breve e denso.",fontiOnly:!0}],sources:["trendshift.io","GitHub Trending","Hacker News"],branding:{nameHtml:"Signal<span>.</span>Brief",tagline:"Intelligence Dashboard · AI-Powered",aboutDescription:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',colors:{primary:"#2563eb",primaryHover:"#1d4ed8",accent:"#f59e0b",bg:"#f5f4f0",headerBg:"#faf9f6",cardBg:"#ffffff",border:"#e2ddd6",text:"#1a1a2e",textSecondary:"#6b7280",textMuted:"#9ca3af"},fonts:{googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"0fcf5005-bf4f-46ba-92c2-bd358141e7d6",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1,provisioned:!0},rss:{},podcastConfig:{},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`}};const Dd=typeof Sc<"u"?Sc:{},Bm=Fm;function Um(){if(typeof window>"u")return null;const e="/signal-brief/ai/".replace(/\/$/,"");let t=window.location.pathname;e&&t.startsWith(e)&&(t=t.slice(e.length));const n=t.split("/").filter(Boolean)[0];return n&&Dd[n]?n:null}const Wn=Um(),vn=Wn?Dd[Wn]:Bm,Hm=vn.thinkers,Vm=vn.sources,ve=vn.branding,ma=vn.prompts,on=vn.council;vn.rss;vn.podcastConfig;function ga(e,t){return Object.entries(t).reduce((n,[i,o])=>n.replaceAll(`{${i}}`,String(o??"")),e)}const $m="/claude",qm="https://summon-star.casamon.dev/api",Gm=qm;async function ha(e){const t=await fetch($m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const o=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${o}…`)}const i=await t.json();if(!t.ok)throw new Error(i.error||"Claude CLI error");return i}function Wm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Qm(e){const t=ga(ma.scan,{thinker_name:e.name,thinker_handle:e.handle});return(await ha(t)).text||"Nessun contenuto estratto."}async function xc(e){const t=e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`),n=ga(ma.synthesis,{summaries:t});return(await ha(n)).text||"Nessun contenuto estratto."}async function Km(e,t,n){const i=e.map(d=>`### ${d.name}
${d.content}`).join(`

`),o=n&&n.length>0?n.join(", "):"GitHub Trending, trendshift.io, Hacker News",a=ga(ma.projects,{signals:i,synthesis:t,sources_list:o}),s=((await ha(a)).text||"").trim().match(/\[[\s\S]*\]/);if(!s)throw new Error("Formato risposta non valido");return JSON.parse(s[0])}async function Ym(e,t){const n=ga(ma.conceptDiff,{old_synthesis:e,new_synthesis:t}),a=((await ha(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}const Fd="https://summon-star.casamon.dev/";async function Jm(e,t,n,i){const o=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,a=await fetch(`${Gm}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:o,board_id:i||on.boardId,stop_mode:"cost",budget_usd:on.budgetUsd,user_language:on.userLanguage,max_words:on.maxWords,rounds:on.rounds,include_moderation:!0,skip_sage_questions:!0})});if(a.status===401){const d=new Error("auth_required");throw d.loginUrl=Fd,d}if(!a.ok){const d=await a.json().catch(()=>({}));throw new Error(d.detail||d.error||"Errore council stream")}const r=a.body.getReader(),l=new TextDecoder;let s="";for(;;){const{done:d,value:y}=await r.read();if(d)break;s+=l.decode(y,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let h="";for(const w of v)if(w.startsWith("event: "))h=w.slice(7).trim();else if(w.startsWith("data: ")&&h){try{const k=JSON.parse(w.slice(6));n(h,k)}catch{}h=""}}}function kt(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function Xm(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return kt(e);let i="";for(let o=0;o<n.length;o++){const a=n[o].trim();if(a)if(t.test(a)){t.lastIndex=0;const r=a.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),l=o+1<n.length?n[o+1].trim():"";l?(i+=`<details open><summary>${Ec(r)}</summary>${kt(l)}</details>`,o++):i+=`<strong>${Ec(r)}</strong>`}else i+=kt(a)}return i}function Ec(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Zm(e,t){const n=new Set(e.split(/\s+/)),i=new Set(t.split(/\s+/));return[...n].filter(a=>i.has(a)).length/Math.max(n.size,i.size)}function eg(e,t){if(!e)return"";if(!t)return kt(e);const n=t.split(`
`).map(i=>i.trim().toLowerCase()).filter(i=>i.length>0);return e.split(`
`).map(i=>{const o=i.trim();if(!o)return"";const a=o.toLowerCase(),r=n.some(s=>Zm(a,s)>.7),l=kt(i);return r?l:`<span class="diff-new">${l}</span>`}).join(`
`)}function tg(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((i,o)=>o.name.length-i.name.length);for(const i of n){const o=i.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp(`(?!<a[^>]*>)(${o})(?![^<]*<\\/a>)`,"g");e=e.replace(a,`<a href="#thinker-${i.id}" class="thinker-link">$1</a>`)}return e}const Nc="​‌",wc="‌​";function ng(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),i=t.split(/(\s+)/),o=n.length,a=i.length,r=Array.from({length:o+1},()=>new Uint16Array(a+1));for(let v=1;v<=o;v++)for(let h=1;h<=a;h++)r[v][h]=n[v-1]===i[h-1]?r[v-1][h-1]+1:Math.max(r[v-1][h],r[v][h-1]);const l=[];let s=o,d=a;for(;s>0||d>0;)s>0&&d>0&&n[s-1]===i[d-1]?(l.unshift({type:"equal",text:n[s-1]}),s--,d--):d>0&&(s===0||r[s][d-1]>=r[s-1][d])?(l.unshift({type:"added",text:i[d-1]}),d--):(l.unshift({type:"removed",text:n[s-1]}),s--);const y=[];for(const v of l)y.length>0&&y[y.length-1].type===v.type?y[y.length-1].text+=v.text:y.push({...v});return y}function kc(e,t){const n=t==="left"?"added":"removed",i=t==="left"?"removed":"added";let o="";for(const l of e)l.type!==n&&(l.type===i?o+=Nc+l.text+wc:o+=l.text);let a=kt(o);const r=t==="left"?"diff-word-removed":"diff-word-added";return a=a.replace(new RegExp(`${Nc}(.*?)${wc}`,"gs"),`<span class="${r}">$1</span>`),a}function ig(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function og(){const[e,t]=T.useState(!1),[n,i]=T.useState(-1),[o,a]=T.useState([]),r=T.useRef([]),l=T.useRef(null),s=T.useCallback(()=>{const f=speechSynthesis.getVoices().filter(u=>u.lang.startsWith("it"));return f.find(u=>u.name.includes("Emma"))||f.find(u=>u.name.includes("Enhanced")||u.name.includes("Premium"))||f[0]||null},[]),d=T.useCallback(()=>{speechSynthesis.cancel(),r.current=[],t(!1),i(-1)},[]),y=T.useCallback((F,f=0)=>{speechSynthesis.cancel(),r.current=F.slice(f),a(F);const u=()=>{if(r.current.length===0){t(!1),i(-1);return}const m=r.current.shift(),S=F.indexOf(m);i(S);const b=`${m.title}. ${ig(m.text)}`,x=new SpeechSynthesisUtterance(b);x.lang="it-IT",x.rate=1;const P=s();P&&(x.voice=P),x.onend=u,x.onerror=u,l.current=x,speechSynthesis.speak(x)};t(!0),u()},[s]),v=T.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=T.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),w=T.useCallback(()=>{speechSynthesis.cancel()},[]),k=T.useCallback((F,f,u,m)=>{const S=[];F&&S.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const b of u)f[b.id]&&!f[b.id].startsWith("Errore")&&S.push({title:b.name,text:f[b.id],type:"thinker"});if(m&&m.length>0){const b=m.map(x=>{var P;return`${x.name}: ${x.description}${(P=x.citedBy)!=null&&P.length?`. Citato da ${x.citedBy.join(", ")}`:""}`}).join(`.

`);S.push({title:"Progetti Emergenti",text:b,type:"projects"})}y(S)},[y]),C=T.useCallback((F,f)=>{y([{title:F,text:f,type:"single"}])},[y]);return T.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:o,playAll:k,playSingle:C,pause:v,resume:h,stop:d,skipForward:w}}const nr=Wn?`?theme=${Wn}`:"",ag=`
  @import url('${ve.fonts.googleFontsUrl}');
`,rg=`
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
`,lg=`
  ${ag}
  ${rg}

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
  .diff-new { color: #dc2626; font-weight: 500; }

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
  .diff-word-removed { background: #fee2e2; color: #991b1b; text-decoration: line-through; text-decoration-color: #f87171; border-radius: 2px; padding: 0 2px; }
  .diff-word-added { background: #dcfce7; color: #166534; border-radius: 2px; padding: 0 2px; }
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
`;function sg(){const[e,t]=T.useState(Hm),[n,i]=T.useState({}),[o,a]=T.useState({}),[r,l]=T.useState({}),[s,d]=T.useState(null),[y,v]=T.useState("idle"),[h,w]=T.useState(!1),[k,C]=T.useState(""),[F,f]=T.useState(""),[u,m]=T.useState(null),[S,b]=T.useState(!1),[x,P]=T.useState([]),[O,Z]=T.useState(null),[j,pe]=T.useState("signals"),[Pe,Jt]=T.useState({leftIdx:1,rightIdx:0}),[Jn,va]=T.useState("emerging"),[se,yn]=T.useState([]),[z,L]=T.useState([]),[_,ee]=T.useState(null),[ae,Pt]=T.useState("idle"),[Ie,Xt]=T.useState(Vm),[dt,Zt]=T.useState(""),[Bd,ya]=T.useState(!1),[Vl,Ud]=T.useState(!1),[Sn,Hd]=T.useState(""),[$i,$l]=T.useState([]),[en,Xn]=T.useState("idle"),[Vd,ql]=T.useState(!1),[qi,Sa]=T.useState(null),[Gl,Wl]=T.useState(null),[cg,ug]=T.useState("idle"),[Ql,$d]=T.useState({scan:"",launchd:""}),[Gi,xa]=T.useState("idle"),[dg,Kl]=T.useState([]),[qd,Gd]=T.useState({}),[Wd,Qd]=T.useState(new Set),Ea=T.useRef(null),he=og(),[Kd,Yd]=T.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),xe=e.filter(p=>p.active),Yl=xe.filter(p=>!p.fontiOnly),xn=Object.values(r).filter(p=>p==="done"||p==="stale").length,Na=xe.length;T.useEffect(()=>{(async()=>{try{const p=await window.storage.get("signal-state");if(p){const g=JSON.parse(p.value);if(g.results){i(g.results);const N=new Set((g.staleIds||[]).map(String)),A={};for(const H of Object.keys(g.results))g.results[H].startsWith("Errore")?A[H]="error":N.has(String(H))?A[H]="stale":A[H]="done";l(A),g.staleIds&&Kl(g.staleIds)}if(g.prevResults&&a(g.prevResults),g.lastScanTime&&m(g.lastScanTime),g.synthesis&&(d(g.synthesis),v("done")),g.synthesisHistory){const N=g.synthesisHistory.map((A,H,G)=>{if(A.conceptDiff&&!A.conceptDiffs){const Ee=G[H+1],{conceptDiff:_e,...Je}=A;return Ee?{...Je,conceptDiffs:{[Ee.id]:_e}}:Je}return A});P(N)}g.projects&&yn(g.projects),g.prevProjects&&L(g.prevProjects),g.projectsTime&&ee(g.projectsTime),g.projectSources&&Xt(g.projectSources)}}catch{}})()},[]);const Ae=T.useCallback(async(p={})=>{try{const g=await window.storage.get("signal-state"),A={...g?JSON.parse(g.value):{},...p};await window.storage.set("signal-state",JSON.stringify(A))}catch{}},[]);T.useCallback(async(p={})=>{await Ae({results:n,prevResults:o,lastScanTime:u,synthesis:s,synthesisHistory:x,projects:se,prevProjects:z,projectsTime:_,projectSources:Ie,...p})},[n,o,u,s,x,se,z,_,Ie,Ae]);const Wi=T.useCallback((p,g)=>g.length>0&&g[0].text===p?g:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:p,thinkers:xe.map(A=>A.name),conceptDiffs:{}},...g].slice(0,50),[xe]),Qi=T.useCallback(async p=>{var A;if(p.length<2)return p;const g=p[0],N=p[1];if((A=g.conceptDiffs)!=null&&A[N.id])return p;try{const H=await Ym(N.text,g.text),G=[...p];return G[0]={...G[0],conceptDiffs:{...G[0].conceptDiffs||{},[N.id]:H}},P(G),await Ae({synthesisHistory:G}),G}catch(H){return console.error("[concept-diff auto]",H),p}},[Ae]),Jl=T.useCallback(async(p,g)=>{try{await navigator.clipboard.writeText(p)}catch{const N=document.createElement("textarea");N.value=p,document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N)}Z(g),setTimeout(()=>Z(null),2e3)},[]);T.useCallback(async p=>{const g=x.filter(N=>N.id!==p);P(g),await Ae({synthesisHistory:g})},[x,Ae]);const wa=T.useCallback(async()=>{xa("loading");const p="/signal-brief/ai/";try{const[g,N]=await Promise.all([fetch(`${p}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${p}logs/launchd-out.log`,{cache:"no-cache"})]),A=g.ok?await g.text():"",H=N.ok?await N.text():"";$d({scan:A,launchd:H}),xa("done")}catch(g){console.error("[logs]",g),xa("error")}},[]);T.useEffect(()=>{j==="log"&&wa()},[j,wa]);const Xl=T.useCallback(p=>{if(!p)return;const g=p.trim().toLowerCase();if(!g)return;const N=e.find(A=>{const H=A.name.toLowerCase();return H===g||H.includes(g)||g.includes(H)});N&&(pe("signals"),b(!1),setTimeout(()=>{const A=document.getElementById(`thinker-${N.id}`);A&&(A.scrollIntoView({behavior:"smooth",block:"start"}),A.classList.add("thinker-card-highlight"),setTimeout(()=>A.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Jd=(p,g)=>{if(!p||!g)return 0;const N=new Set(p.toLowerCase().split(/\s+/)),A=new Set(g.toLowerCase().split(/\s+/));return[...N].filter(G=>A.has(G)).length/Math.max(N.size,A.size)},Zl=p=>!o[p]||!n[p]?!1:Jd(o[p],n[p])<.72;xe.filter(p=>r[p.id]==="done"&&Zl(p.id)).length;const es=e.length>0&&e.every(p=>p.active),Xd=()=>{h||t(p=>p.map(g=>({...g,active:!es})))},ka=()=>{k.trim()&&(t(p=>[...p,{id:Date.now(),name:k.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),C(""),f(""))},ts=()=>{const p=dt.trim();if(!p||Ie.includes(p))return;const g=[...Ie,p];Xt(g),Zt(""),Ae({projectSources:g})},Zd=p=>{const g=Ie.filter(N=>N!==p);Xt(g),Ae({projectSources:g})},[ep,ns]=T.useState(null),Ki=T.useCallback(async(p,g)=>{Pt("loading"),ns(null);try{const N=await Km(g,p,Ie);L(se),yn(N);const A=Date.now();ee(A),Pt("done"),await Ae({projects:N,prevProjects:se,projectsTime:A})}catch(N){console.error("[Signal.Brief] fetchProjects error:",N),Pt("error"),ns(N.message)}},[Ie,Ae,se]),tp=T.useCallback(async()=>{if(xe.length===0)return;pe("signals"),w(!0),d(null),v("idle"),a(U=>({...U,...n}));const p={...n},g={};for(const U of xe){const ce=p[U.id];ce&&!ce.startsWith("Errore")&&(g[U.id]=ce)}const N={};xe.forEach(U=>{N[U.id]="loading"}),l(N),i(g);const A={...g},H=[],G={},Ee=2,_e=U=>new Promise(ce=>setTimeout(ce,U));for(let U=0;U<xe.length;U+=Ee){const ce=xe.slice(U,U+Ee);await Promise.all(ce.map(async Me=>{try{const V=await Qm(Me);A[Me.id]=V,i(re=>({...re,[Me.id]:V})),l(re=>({...re,[Me.id]:"done"}))}catch(V){const re=g[Me.id]!=null,fe=V.message||V.name||(typeof V=="string"?V:"errore sconosciuto");G[Me.id]=fe,re?(H.push(String(Me.id)),l(Y=>({...Y,[Me.id]:"stale"}))):(A[Me.id]=`Errore: ${fe}`,i(Y=>({...Y,[Me.id]:`Errore: ${fe}`})),l(Y=>({...Y,[Me.id]:"error"})))}})),U+Ee<xe.length&&await _e(1200)}Kl(H),Gd(G);const Je=Wm(A),$e=Je?Date.now():u;Je&&(m($e),Yd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Ae({results:A,prevResults:p,lastScanTime:$e,synthesis:s,synthesisHistory:x,staleIds:H}),w(!1);const De=Yl.filter(U=>A[U.id]&&!A[U.id].startsWith("Errore")).map(U=>({name:U.name,domain:U.domain,content:A[U.id]}));if(De.length>=2){v("loading");try{const U=await xc(De);d(U),v("done");const ce=Wi(U,x);P(ce),await Ae({results:A,prevResults:p,lastScanTime:$e,synthesis:U,synthesisHistory:ce}),Qi(ce),Ki(U,De)}catch{v("error")}}},[xe,n,Ae,s,x,Wi,u,Ki,Qi]),np=T.useCallback(async()=>{const p=Yl.filter(g=>r[g.id]==="done"||r[g.id]==="stale").map(g=>({name:g.name,domain:g.domain,content:n[g.id]}));if(!(p.length<2)){v("loading");try{const g=await xc(p);d(g),v("done");const N=Wi(g,x);P(N),await Ae({synthesis:g,synthesisHistory:N}),Qi(N),Ki(g,p)}catch(g){d(`Errore nella sintesi: ${g.message}`),v("error")}}},[xe,r,n,Ae,x,Wi,Ki,Qi]),[is,ip]=T.useState(on.boardId),[os,op]=T.useState(on.provisioned!==!1),as=T.useCallback(async()=>{if(!Sn.trim())return;$l([]),Sa(null),Wl(null);let p=is;if(!os&&Wn){Xn("provisioning");try{const g=await fetch(`/admin/api/themes/${Wn}/provision-council`,{method:"POST"}),N=await g.json();if(!g.ok||!N.ok)throw new Error(N.error||`HTTP ${g.status}`);p=N.boardId,ip(p),op(!0)}catch(g){console.error("[council] provisioning failed",g),Xn("error");return}}Xn("loading"),ql(!1);try{await Jm(Sn,s,(g,N)=>{if(g==="session_started"&&N.session_id&&Wl(N.session_id),g==="sage_speaks"&&N.content&&$l(A=>[...A,{name:N.persona_name,icon:N.persona_icon,color:N.persona_color,content:N.content}]),g==="moderator_synthesis"&&N.content&&Sa(N.content),g==="moderator"){const A=N.content||N.decision||N.synthesis||"";A&&Sa(A)}},p),Xn("done")}catch(g){console.error("[council]",g),g.message==="auth_required"&&ql(!0),Xn("error")}},[Sn,s,is,os]),ap=xn>=2&&!h&&y!=="loading",rs=Object.keys(n).length>0,ls="Disponibile solo in locale (richiede Claude CLI)",rp=xe.filter(p=>{if(!r[p.id])return!1;if(S){const g=r[p.id];return(g==="done"||g==="stale")&&Zl(p.id)}return!0});return c.jsxs(c.Fragment,{children:[c.jsx("style",{children:lg}),c.jsxs("div",{className:"dashboard",children:[c.jsx("div",{className:"scanline"}),c.jsxs("header",{className:"header",children:[c.jsxs("div",{className:"header-top",children:[c.jsxs("div",{className:"header-left",children:[c.jsx("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>ya(!0),dangerouslySetInnerHTML:{__html:ve.nameHtml}}),c.jsx("div",{className:"tagline",children:ve.tagline})]}),c.jsxs("div",{className:"header-right",children:[u&&c.jsxs("span",{className:"timestamp",children:["ultimo: ",Kd]}),c.jsx("button",{className:"btn btn-synthesis btn-small",onClick:np,disabled:!ap||!0,title:ls,children:"◈ Synth"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!Ea.current){const g=new Audio(`/signal-brief/ai/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3${nr}`);g.onerror=()=>{g.src=`/signal-brief/ai/podcast/episodes/2026-04-12.mp3${nr}`,g.play()},Ea.current=g}const p=Ea.current;p.paused?p.play():p.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),c.jsx("a",{className:"btn btn-ghost btn-small",href:`/signal-brief/ai/podcast/${nr}`,title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),c.jsx("button",{className:"btn btn-primary",onClick:()=>tp(),disabled:h||xe.length===0||!0,title:ls,children:h?`Scanning ${xn}/${Na}…`:"▶ Scan"})]})]}),c.jsxs("nav",{className:"tab-bar",children:[c.jsxs("button",{className:`tab-btn ${j==="signals"?"active":""}`,onClick:()=>pe("signals"),children:["Segnali",xn>0&&c.jsx("span",{className:"tab-badge",children:xn})]}),c.jsxs("button",{className:`tab-btn ${j==="projects"?"active":""}`,onClick:()=>pe("projects"),children:["Progetti",se.length>0&&c.jsx("span",{className:"tab-badge",children:se.length})]}),c.jsxs("button",{className:`tab-btn ${j==="history"?"active":""}`,onClick:()=>pe("history"),children:["Cronologia",x.length>0&&c.jsx("span",{className:"tab-badge",children:x.length})]}),c.jsx("button",{className:`tab-btn ${j==="log"?"active":""}`,onClick:()=>pe("log"),children:"▤ Log"}),c.jsx("button",{className:`tab-btn ${j==="config"?"active":""}`,onClick:()=>pe("config"),children:"⚙ Configurazione"})]})]}),c.jsxs("div",{className:"tab-content",children:[j==="signals"&&c.jsxs(c.Fragment,{children:[h&&c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${Na>0?xn/Na*100:0}%`}})}),(s||y==="loading")&&c.jsxs("div",{className:"synthesis-panel",children:[c.jsxs("div",{className:"synthesis-header",children:[c.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),c.jsx("span",{className:"synthesis-title",children:y==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),y==="done"&&x.length>0&&c.jsx("span",{className:"timestamp",children:new Date(x[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),y==="done"&&c.jsxs("div",{className:"synthesis-actions",children:[c.jsx("button",{className:"btn-listen",onClick:()=>he.playSingle("Cross-Synthesis",s),title:"Ascolta",children:"🔊"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Ud(p=>!p),title:"Chiedi ai thinkers",style:Vl?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Jl(s,"synth"),children:O==="synth"?"Copiato ✓":"Copia ❐"})]})]}),y==="loading"?c.jsxs("div",{className:"card-loading-state",children:[c.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):c.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:tg(x.length>1?eg(s,x[1].text):kt(s),xe)}}),Vl&&y==="done"&&c.jsxs("div",{className:"council-panel",children:[c.jsxs("div",{className:"council-header",children:[Gl?c.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Gl}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):c.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),c.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"var(--sb-text-muted)"},children:"21 thinker · Summon Stars"})]}),c.jsxs("div",{className:"council-input-row",children:[c.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:Sn,onChange:p=>Hd(p.target.value),onKeyDown:p=>p.key==="Enter"&&as(),disabled:en==="loading"||en==="provisioning"}),c.jsx("button",{className:"btn btn-primary btn-small",onClick:as,disabled:en==="loading"||en==="provisioning"||!Sn.trim(),children:en==="provisioning"?"Creazione assemblea…":en==="loading"?"In deliberazione…":"Chiedi"})]}),$i.length>0&&c.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:$i.map((p,g)=>c.jsxs("div",{className:"council-msg",children:[c.jsxs("div",{className:"council-msg-name",style:{color:p.color},children:[p.icon," ",p.name]}),c.jsx("div",{children:p.content})]},g))}),qi&&c.jsxs("div",{className:"council-synthesis",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),c.jsxs("div",{style:{display:"flex",gap:4},children:[c.jsx("button",{className:"btn-listen",onClick:()=>{const p=$i.map(g=>`${g.name}: ${g.content}`).join(`

`)+`

Sintesi: `+qi;he.playSingle("Deliberazione",p)},title:"Ascolta deliberazione",children:"🔊"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const p=`Domanda: ${Sn}

`+$i.map(g=>`${g.icon} ${g.name}:
${g.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${qi}`;Jl(p,"council")},children:O==="council"?"Copiato ✓":"Copia ❐"})]})]}),c.jsx("div",{dangerouslySetInnerHTML:{__html:kt(qi)}})]}),en==="error"&&c.jsx("div",{className:"card-error",children:Vd?c.jsxs(c.Fragment,{children:["Per usare l'Assemblea devi prima loggarti su ",c.jsx("a",{href:Fd,target:"_blank",rel:"noopener noreferrer",children:"summon-star.casamon.dev"}),", poi riprova."]}):c.jsx(c.Fragment,{children:"Errore nella deliberazione. Riprova."})})]})]}),rs&&c.jsx("div",{className:"section-header",children:c.jsxs("span",{className:"section-title",children:["Segnali · ",xn," acquisiti"]})}),!rs&&!h?c.jsxs("div",{className:"empty-state",children:[c.jsx("div",{className:"empty-icon",children:"◉"}),c.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),c.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",c.jsx("strong",{children:"Configurazione"})," e premi ",c.jsx("strong",{children:"▶ Scan"}),".",c.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):c.jsx("div",{className:"cards-grid",children:rp.map(p=>{const g=r[p.id],N=qd[p.id],A=Wd.has(p.id),H=G=>{G.stopPropagation(),Qd(Ee=>{const _e=new Set(Ee);return _e.has(p.id)?_e.delete(p.id):_e.add(p.id),_e})};return c.jsxs("div",{id:`thinker-${p.id}`,className:`card ${g}`,children:[c.jsxs("div",{className:`card-header card-toggle ${A?"collapsed":""}`,onClick:H,children:[c.jsxs("div",{className:"card-identity",children:[c.jsxs("div",{className:"card-name",children:[c.jsx("span",{className:"toggle-icon",children:"▾"}),p.name,c.jsx("a",{className:"card-handle",href:`https://x.com/${p.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:G=>G.stopPropagation(),children:p.handle})]}),c.jsx("div",{className:"card-domain",children:p.domain})]}),(g==="done"||g==="stale")&&c.jsx("button",{className:"btn-listen",onClick:G=>{G.stopPropagation(),he.playSingle(p.name,n[p.id])},title:"Ascolta",children:"🔊"}),g==="loading"&&c.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),g==="done"&&c.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),g==="stale"&&c.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${N?": "+N:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),g==="error"&&c.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),p.fontiOnly&&c.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!A&&c.jsxs("div",{className:"card-body",children:[p.desc&&c.jsx("div",{className:"card-desc",children:p.desc}),g==="loading"&&c.jsxs("div",{className:"card-loading-state",children:[c.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(g==="done"||g==="stale")&&c.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:Xm(n[p.id])}}),g==="error"&&c.jsx("div",{className:"card-error",children:n[p.id]})]})]},p.id)})})]}),j==="projects"&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"section-header",children:c.jsxs("span",{className:"section-title",children:["Progetti emergenti",se.length>0&&` · ${se.length} trovati`]})}),ae==="loading"&&c.jsxs("div",{className:"card-loading-state",children:[c.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),ae==="error"&&c.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",ep||"errore sconosciuto"]}),se.length===0&&ae!=="loading"&&c.jsxs("div",{className:"empty-state",children:[c.jsx("div",{className:"empty-icon",children:"◈"}),c.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),c.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",c.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),se.length>0&&c.jsxs("div",{className:"quadrant-container",children:[c.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),_&&c.jsx("span",{style:{fontWeight:400,color:"var(--sb-text-muted)"},children:new Date(_).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),c.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[c.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),c.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),c.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),c.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),c.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),c.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),c.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),c.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),c.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),c.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),c.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),c.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),se.some(p=>p.maturity==null)&&c.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),z.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),c.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),c.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"var(--sb-primary)"}),c.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),se.map((p,g)=>{const N=p.maturity!=null&&p.momentum!=null,A=Math.ceil(Math.sqrt(se.length)),H=Math.floor(g/A),G=g%A,Ee=N?p.maturity:2+G/Math.max(A-1,1)*7,_e=N?p.momentum:8-H/Math.max(Math.ceil(se.length/A)-1,1)*7,Je=50+(Ee-1)/9*420,$e=370-(_e-1)/9*360,De=z.length>0&&!z.some(ce=>ce.name===p.name),U=De?"#dc2626":"var(--sb-primary)";return c.jsxs("g",{children:[c.jsx("circle",{className:"quadrant-dot",cx:Je,cy:$e,r:De?6:5,fill:U,opacity:"0.85",stroke:De?"#fca5a5":"none",strokeWidth:De?2:0,onClick:()=>window.open(p.url,"_blank")}),c.jsx("text",{className:"quadrant-dot-label",x:Je+9,y:$e+3,style:{fontSize:p.name.length>18?"8px":"9px",fill:De?"#dc2626":"#374151",fontWeight:De?600:400},children:p.name.length>22?p.name.slice(0,20)+"…":p.name})]},g)})]})]}),se.length>0&&c.jsx("div",{className:"projects-grid",children:se.map((p,g)=>c.jsxs("div",{className:"project-card",style:z.length>0&&!z.some(N=>N.name===p.name)?{borderColor:"#fca5a5"}:{},children:[c.jsxs("div",{className:"project-header",children:[c.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[c.jsx("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",children:p.name}),z.length>0&&!z.some(N=>N.name===p.name)&&c.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.source&&c.jsx("span",{className:"project-source",children:p.source}),p.maturity&&p.momentum&&c.jsxs("span",{className:"project-source",children:["M:",p.maturity," · P:",p.momentum]})]})]}),c.jsx("div",{className:"project-desc",children:p.description}),c.jsxs("div",{className:"project-footer",children:[p.citedBy&&p.citedBy.length>0&&c.jsxs("span",{className:"project-cited",children:["Citato da: ",p.citedBy.join(", ")]}),p.themes&&p.themes.length>0&&c.jsx("div",{className:"project-themes",children:p.themes.map((N,A)=>c.jsx("span",{className:"project-theme",children:N},A))})]})]},g))})]}),j==="history"&&c.jsx(c.Fragment,{children:x.length<2?c.jsxs("div",{className:"history-empty",children:[x.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",x.length===1&&c.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[c.jsx("div",{className:"diff-panel-date",children:new Date(x[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),c.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:kt(x[0].text)}})]})]}):c.jsxs(c.Fragment,{children:[(()=>{const p=Date.now(),g=864e5,N=p-7*g,A=p-21*g,H=x.filter(V=>V.timestamp>=N),G=x.filter(V=>V.timestamp>=A&&V.timestamp<N),Ee={};for(const V of G){const re=new Date(V.timestamp),fe=new Date(re);fe.setDate(fe.getDate()-fe.getDay());const Y=fe.toISOString().slice(0,10);(!Ee[Y]||V.timestamp>Ee[Y].timestamp)&&(Ee[Y]=V)}const _e=Object.values(Ee).sort((V,re)=>re.timestamp-V.timestamp),Je=x.filter(V=>V.timestamp<A),$e={};for(const V of Je){const re=new Date(V.timestamp),fe=new Date(re);fe.setDate(fe.getDate()-fe.getDay());const Y=fe.toISOString().slice(0,10);(!$e[Y]||V.timestamp>$e[Y].timestamp)&&($e[Y]=V)}const De=Object.values($e).sort((V,re)=>re.timestamp-V.timestamp),U=(V,re,fe)=>V.length===0?null:c.jsx("optgroup",{label:re,children:V.map(Y=>{const Ia=x.indexOf(Y),Yi=new Date(Y.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),ba=fe?`Sett. ${Yi.split(",")[0]} — ${Y.thinkers.slice(0,3).join(", ")}${Y.thinkers.length>3?` +${Y.thinkers.length-3}`:""}`:`${Yi} — ${Y.thinkers.slice(0,3).join(", ")}${Y.thinkers.length>3?` +${Y.thinkers.length-3}`:""}`;return c.jsx("option",{value:Ia,children:ba},Y.id)})},re),ce=x[0],Me=ce?`${new Date(ce.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${ce.thinkers.slice(0,3).join(", ")}${ce.thinkers.length>3?` +${ce.thinkers.length-3}`:""}`:"";return c.jsxs("div",{className:"history-selectors",children:[c.jsxs("select",{className:"history-select",value:Pe.leftIdx,onChange:V=>Jt(re=>({...re,leftIdx:Number(V.target.value)})),children:[U(H,"Ultimi 7 giorni",!1),U(_e,"Ultime 3 settimane",!0),U(De,"Precedenti",!0)]}),c.jsx("span",{className:"history-vs",children:"vs"}),c.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[Me," ",c.jsx("span",{style:{color:"var(--sb-text-muted)",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ss;const p=x[Pe.rightIdx],g=x[Pe.leftIdx];if(!p||!g||Pe.leftIdx===Pe.rightIdx)return null;const N=p.timestamp>=g.timestamp?p:g,A=N===p?g:p;N===p?Pe.rightIdx:Pe.leftIdx;const H=((ss=N.conceptDiffs)==null?void 0:ss[A.id])||null,G=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],Ee={DHH:["hansson","heinemeier","37signals"]},_e=I=>{if(!I)return null;const R=I.trim().toLowerCase();if(!R)return null;for(const D of e){const q=D.name.toLowerCase();if(q===R||q.includes(R)||R.includes(q))return D;const Q=Ee[D.name]||[];for(const vt of Q)if(R.includes(vt)||vt.includes(R))return D}return null},Je=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),$e=I=>(I||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(R=>R.length>=4&&!Je.has(R)),De=I=>I.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),U=I=>{const R=I.split(/\s+/);return R.length>40?R.slice(0,40).join(" ")+"...":I},ce=I=>{if(!I)return[];const R=I.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),q=(R!==-1?I.slice(0,R):I).split(/\n\n+/).map(yt=>De(yt)).filter(yt=>yt.length>120),Q=yt=>{const ei=$e(yt);if(!ei.length||!q.length)return"";let Ji="",Ca=0;for(const cs of q){const up=cs.toLowerCase();let Ta=0;for(const dp of ei)up.includes(dp)&&Ta++;Ta>Ca&&(Ji=cs,Ca=Ta)}return Ca>0?Ji:""},vt=[],Zn=new Set,cp=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let za;for(;(za=cp.exec(I))!==null;){const yt=za[2].replace(/[.,;)]+$/,"");if(Zn.has(yt))continue;Zn.add(yt);const ei=za[1].trim(),Ji=U(Q(ei));vt.push({url:yt,title:ei,snippet:Ji})}return vt},Me=I=>{const R=_e(I);return R?ce(n[R.id]||""):[]},V=(()=>{const I=new Set,R=[];for(const D of e){I.has(D.name)||(I.add(D.name),R.push(D.name));const q=D.name.split(/\s+/);if(q.length>1){const Q=q[q.length-1];Q.length>=4&&!I.has(Q)&&(I.add(Q),R.push(Q))}}return R.sort((D,q)=>q.length-D.length)})(),re=V.length?new RegExp(`\\b(${V.map(I=>I.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,fe=I=>{if(!I||typeof I!="string"||!re)return I;const R=[];let D=0,q;for(re.lastIndex=0;(q=re.exec(I))!==null;){q.index>D&&R.push(I.slice(D,q.index));const Q=q[0];R.push(c.jsx("span",{className:"concept-who-link",onClick:vt=>{vt.stopPropagation(),Xl(Q)},children:Q},R.length)),D=q.index+Q.length}return R.length===0?I:(D<I.length&&R.push(I.slice(D)),R)},Y=(I,R)=>{if(I==null)return null;if(typeof I=="string")return{title:I,detail:"",who:[],sides:[]};if(typeof I!="object")return null;if(R==="evolved"){const D=I.from??I.da??I.before??"",q=I.to??I.a??I.after??"",Q=D&&q?`${D} → ${q}`:D||q||I.detail||"";return{title:I.concept||I.title||I.name||"",detail:Q,who:I.who||[],sides:[]}}return R==="tensions"?{title:I.axis||I.concept||I.title||"",detail:I.detail||"",who:I.who||[],sides:I.sides||[]}:{title:I.concept||I.title||I.name||"",detail:I.detail||I.description||"",who:I.who||[],sides:[]}},Ia=I=>I!=null&&I.length?I.slice(0,4).map((R,D)=>c.jsx("a",{className:"concept-cite",href:R.url,target:"_blank",rel:"noopener noreferrer",title:R.snippet||R.title||R.url,onClick:q=>q.stopPropagation(),children:D+1},D)):null,Yi=I=>I!=null&&I.length?c.jsx("div",{className:"concept-item-who",children:I.map((R,D)=>{const q=Me(R);return c.jsxs("span",{className:"concept-who-item",children:[D>0&&", ",c.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${R}`,onClick:Q=>{Q.stopPropagation(),Xl(R)},children:R}),q.length>0&&c.jsx("sup",{className:"concept-cites",children:Ia(q)})]},D)})}):null,ba=(I,R)=>c.jsxs("div",{className:"concept-item-detail",children:["• ",fe(I)]},R),lp=(I,R)=>{const q=(I[R]||[]).map(Q=>Y(Q,R)).filter(Boolean);return q.length===0?c.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):q.map((Q,vt)=>{var Zn;return c.jsxs("div",{className:`concept-item concept-${R==="tensions"?"tension":R}`,children:[Q.title&&c.jsx("div",{className:"concept-item-title",children:fe(Q.title)}),Q.detail&&c.jsx("div",{className:"concept-item-detail",children:fe(Q.detail)}),R==="tensions"&&((Zn=Q.sides)==null?void 0:Zn.map(ba)),Yi(Q.who)]},vt)})},sp=I=>{const R=G.find(D=>D.key===Jn)?Jn:"emerging";return G.find(D=>D.key===R),c.jsxs("div",{className:"concept-diff",children:[c.jsx("div",{className:"concept-tabs",children:G.map(D=>{const q=(I[D.key]||[]).length,Q=D.key===R;return c.jsxs("button",{className:`concept-tab ${Q?"active":""}`,onClick:()=>va(D.key),style:Q?{color:D.color,borderBottomColor:D.color}:void 0,children:[c.jsxs("span",{children:[D.icon," ",D.label]}),c.jsx("span",{className:"concept-tab-count",children:q})]},D.key)})}),c.jsx("div",{className:"concept-tab-body",children:lp(I,R)})]})};return H?sp(H):c.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"var(--sb-text-muted)",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",c.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const p=x[Pe.leftIdx],g=x[Pe.rightIdx];if(!p||!g)return null;const N=ng(p.text,g.text);return c.jsxs("div",{className:"diff-columns",children:[c.jsxs("div",{className:"diff-panel diff-panel-left",children:[c.jsx("div",{className:"diff-panel-label",children:"Precedente"}),c.jsx("div",{className:"diff-panel-date",children:new Date(p.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),c.jsx("div",{className:"diff-panel-thinkers",children:p.thinkers.join(", ")}),c.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:kc(N,"left")}})]}),c.jsxs("div",{className:"diff-panel diff-panel-right",children:[c.jsx("div",{className:"diff-panel-label",children:"Attuale"}),c.jsx("div",{className:"diff-panel-date",children:new Date(g.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),c.jsx("div",{className:"diff-panel-thinkers",children:g.thinkers.join(", ")}),c.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:kc(N,"right")}})]})]})})()]})}),j==="log"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section-header",children:[c.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:wa,disabled:Gi==="loading",children:Gi==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const p=N=>{if(!N)return"info";const A=N.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(A)?"error":/\b(warn|attenzione|warning)/i.test(A)?"warn":/^\s*[✓]\s/.test(N)||/\b(ok|done|complete|pushato|ready)\b/i.test(A)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(N)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(N)?"event":"info"},g=N=>{if(!N||!N.trim())return c.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const A=N.split(`
`);return c.jsx("div",{className:"log-box",children:A.map((H,G)=>c.jsx("span",{className:`log-line log-${p(H)}`,children:H||" "},G))})};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"log-pane",children:[c.jsx("div",{className:"log-pane-header",children:c.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Gi==="error"?c.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):g(Ql.scan)]}),c.jsxs("div",{className:"log-pane",children:[c.jsx("div",{className:"log-pane-header",children:c.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Gi==="error"?c.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):g(Ql.launchd)]})]})})()]}),j==="config"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[c.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),c.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[c.jsxs("div",{className:"config-label",children:[c.jsxs("span",{children:["Thinker seguiti · ",xe.length," selezionati"]}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:Xd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:es?"Deseleziona tutti":"Seleziona tutti"})]}),c.jsx("div",{className:"thinker-grid",children:e.map(p=>c.jsxs("div",{className:`thinker-row ${p.active?"active":""}`,onClick:void 0,children:[c.jsx("div",{className:"thinker-check",children:p.active&&c.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:c.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),c.jsxs("div",{className:"thinker-info",children:[c.jsx("div",{className:"thinker-name",children:p.name}),c.jsxs("div",{className:"thinker-meta",children:[c.jsx("a",{href:`https://x.com/${p.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:g=>g.stopPropagation(),children:p.handle})," · ",p.domain]})]}),c.jsx("div",{className:`thinker-status ${r[p.id]||""}`})]},p.id))}),c.jsxs("div",{className:"add-thinker-row",children:[c.jsx("input",{className:"input-field",placeholder:"Nome",value:k,disabled:!0,onChange:p=>C(p.target.value),onKeyDown:p=>p.key==="Enter"&&ka(),style:{flex:2}}),c.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:p=>f(p.target.value),onKeyDown:p=>p.key==="Enter"&&ka(),style:{flex:1}}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:ka,disabled:!0,children:"+ Aggiungi"})]})]}),c.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[c.jsx("div",{className:"config-label",children:c.jsx("span",{children:"Fonti progetti"})}),c.jsx("div",{className:"source-list",children:Ie.map(p=>c.jsxs("div",{className:"source-row",children:[c.jsx("span",{children:p}),c.jsx("button",{className:"source-delete",onClick:()=>Zd(p),disabled:!0,children:"×"})]},p))}),c.jsxs("div",{className:"add-thinker-row",children:[c.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:dt,disabled:!0,onChange:p=>Zt(p.target.value),onKeyDown:p=>p.key==="Enter"&&ts(),style:{flex:1}}),c.jsx("button",{className:"btn btn-ghost btn-small",onClick:ts,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(he.isPlaying||he.currentChapter>=0)&&c.jsxs("div",{className:"player-bar",children:[c.jsx("button",{className:"player-btn",onClick:he.isPlaying?he.pause:he.resume,children:he.isPlaying?"⏸":"▶"}),c.jsx("button",{className:"player-btn",onClick:he.skipForward,title:"Prossimo capitolo",children:"⏭"}),c.jsx("div",{className:"player-chapter",children:he.currentChapter>=0&&he.chapters[he.currentChapter]&&c.jsxs(c.Fragment,{children:[c.jsx("strong",{children:he.chapters[he.currentChapter].title})," — ",he.currentChapter+1,"/",he.chapters.length]})}),c.jsx("button",{className:"player-btn",onClick:he.stop,title:"Stop",children:"⏹"})]}),Bd&&c.jsx("div",{className:"about-backdrop",onClick:()=>ya(!1),children:c.jsxs("div",{className:"about-panel",onClick:p=>p.stopPropagation(),children:[c.jsx("img",{src:"/signal-brief/ai/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid var(--sb-border)"}}),c.jsx("div",{className:"about-logo",dangerouslySetInnerHTML:{__html:ve.nameHtml}}),c.jsx("div",{className:"about-tagline",children:ve.tagline}),c.jsx("div",{className:"about-desc",children:ve.aboutDescription}),c.jsx("div",{className:"about-footer",dangerouslySetInnerHTML:{__html:ve.aboutFooter}}),c.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>ya(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const i=await fetch("/signal-brief/ai/signal-state.json");if(i.ok){const o=await i.json();return o[e]!=null?{key:e,value:o[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const i=await fetch("/state");return i.ok&&i.status!==204&&(n=await i.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};_d(document.getElementById("root")).render(c.jsx(T.StrictMode,{children:c.jsx(sg,{})}));
