(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var nu={exports:{}},Al={},ru={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=Symbol.for("react.element"),_d=Symbol.for("react.portal"),Id=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Ld=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),Rd=Symbol.for("react.suspense"),Fd=Symbol.for("react.memo"),$d=Symbol.for("react.lazy"),Us=Symbol.iterator;function Ad(e){return e===null||typeof e!="object"?null:(e=Us&&e[Us]||e["@@iterator"],typeof e=="function"?e:null)}var lu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ou=Object.assign,iu={};function $n(e,t,n){this.props=e,this.context=t,this.refs=iu,this.updater=n||lu}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function su(){}su.prototype=$n.prototype;function Mi(e,t,n){this.props=e,this.context=t,this.refs=iu,this.updater=n||lu}var Ti=Mi.prototype=new su;Ti.constructor=Mi;ou(Ti,$n.prototype);Ti.isPureReactComponent=!0;var Hs=Array.isArray,au=Object.prototype.hasOwnProperty,Li={current:null},uu={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)au.call(t,r)&&!uu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Er,type:e,key:o,ref:i,props:l,_owner:Li.current}}function Bd(e,t){return{$$typeof:Er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Di(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er}function Ud(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bs=/\/+/g;function po(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ud(""+e.key):t.toString(36)}function rl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Er:case _d:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+po(i,0):r,Hs(l)?(n="",e!=null&&(n=e.replace(bs,"$&/")+"/"),rl(l,t,n,"",function(d){return d})):l!=null&&(Di(l)&&(l=Bd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(bs,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Hs(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+po(o,s);i+=rl(o,t,n,a,l)}else if(a=Ad(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+po(o,s++),i+=rl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Br(e,t,n){if(e==null)return e;var r=[],l=0;return rl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Hd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ll={transition:null},bd={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Li};function du(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Br,forEach:function(e,t,n){Br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Br(e,function(){t++}),t},toArray:function(e){return Br(e,function(t){return t})||[]},only:function(e){if(!Di(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=$n;A.Fragment=Id;A.Profiler=Td;A.PureComponent=Mi;A.StrictMode=Md;A.Suspense=Rd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bd;A.act=du;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ou({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Li.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)au.call(t,a)&&!uu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Er,type:e.type,key:l,ref:o,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ld,_context:e},e.Consumer=e};A.createElement=cu;A.createFactory=function(e){var t=cu.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Od,render:e}};A.isValidElement=Di;A.lazy=function(e){return{$$typeof:$d,_payload:{_status:-1,_result:e},_init:Hd}};A.memo=function(e,t){return{$$typeof:Fd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=ll.transition;ll.transition={};try{e()}finally{ll.transition=t}};A.unstable_act=du;A.useCallback=function(e,t){return Pe.current.useCallback(e,t)};A.useContext=function(e){return Pe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};A.useEffect=function(e,t){return Pe.current.useEffect(e,t)};A.useId=function(){return Pe.current.useId()};A.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Pe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};A.useRef=function(e){return Pe.current.useRef(e)};A.useState=function(e){return Pe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Pe.current.useTransition()};A.version="18.3.1";ru.exports=A;var E=ru.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=E,Wd=Symbol.for("react.element"),Qd=Symbol.for("react.fragment"),Kd=Object.prototype.hasOwnProperty,Gd=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yd={key:!0,ref:!0,__self:!0,__source:!0};function fu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Kd.call(t,r)&&!Yd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Wd,type:e,key:o,ref:i,props:l,_owner:Gd.current}}Al.Fragment=Qd;Al.jsx=fu;Al.jsxs=fu;nu.exports=Al;var u=nu.exports,pu={exports:{}},Ue={},mu={exports:{}},hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var T=z.length;z.push(R);e:for(;0<T;){var Y=T-1>>>1,V=z[Y];if(0<l(V,R))z[Y]=R,z[T]=V,T=Y;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],T=z.pop();if(T!==R){z[0]=T;e:for(var Y=0,V=z.length,Qt=V>>>1;Y<Qt;){var be=2*(Y+1)-1,un=z[be],Je=be+1,Nt=z[Je];if(0>l(un,T))Je<V&&0>l(Nt,un)?(z[Y]=Nt,z[Je]=T,Y=Je):(z[Y]=un,z[be]=T,Y=be);else if(Je<V&&0>l(Nt,T))z[Y]=Nt,z[Je]=T,Y=Je;else break e}}return R}function l(z,R){var T=z.sortIndex-R.sortIndex;return T!==0?T:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],d=[],y=1,g=null,h=3,k=!1,N=!1,C=!1,$=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=z)r(d),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(d)}}function x(z){if(C=!1,m(z),!N)if(n(a)!==null)N=!0,Oe(j);else{var R=n(d);R!==null&&Un(x,R.startTime-z)}}function j(z,R){N=!1,C&&(C=!1,p(L),L=-1),k=!0;var T=h;try{for(m(R),g=n(a);g!==null&&(!(g.expirationTime>R)||z&&!ce());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,h=g.priorityLevel;var V=Y(g.expirationTime<=R);R=e.unstable_now(),typeof V=="function"?g.callback=V:g===n(a)&&r(a),m(R)}else r(a);g=n(a)}if(g!==null)var Qt=!0;else{var be=n(d);be!==null&&Un(x,be.startTime-R),Qt=!1}return Qt}finally{g=null,h=T,k=!1}}var S=!1,P=null,L=-1,ee=5,_=-1;function ce(){return!(e.unstable_now()-_<ee)}function kt(){if(P!==null){var z=e.unstable_now();_=z;var R=!0;try{R=P(!0,z)}finally{R?St():(S=!1,P=null)}}else S=!1}var St;if(typeof c=="function")St=function(){c(kt)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Wt=Xe.port2;Xe.port1.onmessage=kt,St=function(){Wt.postMessage(null)}}else St=function(){$(kt,0)};function Oe(z){P=z,S||(S=!0,St())}function Un(z,R){L=$(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||k||(N=!0,Oe(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var T=h;h=R;try{return z()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=h;h=z;try{return R()}finally{h=T}},e.unstable_scheduleCallback=function(z,R,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=T+V,z={id:y++,callback:R,priorityLevel:z,startTime:T,expirationTime:V,sortIndex:-1},T>Y?(z.sortIndex=T,t(d,z),n(a)===null&&z===n(d)&&(C?(p(L),L=-1):C=!0,Un(x,T-Y))):(z.sortIndex=V,t(a,z),N||k||(N=!0,Oe(j))),z},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(z){var R=h;return function(){var T=h;h=R;try{return z.apply(this,arguments)}finally{h=T}}}})(hu);mu.exports=hu;var Xd=mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=E,Be=Xd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gu=new Set,ur={};function sn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(ur[e]=t,e=0;e<t.length;e++)gu.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ao=Object.prototype.hasOwnProperty,Zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vs={},Ws={};function qd(e){return Ao.call(Ws,e)?!0:Ao.call(Vs,e)?!1:Zd.test(e)?Ws[e]=!0:(Vs[e]=!0,!1)}function ef(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tf(e,t,n,r){if(t===null||typeof t>"u"||ef(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oi=/[\-:]([a-z])/g;function Ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oi,Ri);we[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oi,Ri);we[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oi,Ri);we[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fi(e,t,n,r){var l=we.hasOwnProperty(t)?we[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tf(t,n,l,r)&&(n=null),r||l===null?qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ur=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),$i=Symbol.for("react.strict_mode"),Bo=Symbol.for("react.profiler"),yu=Symbol.for("react.provider"),vu=Symbol.for("react.context"),Ai=Symbol.for("react.forward_ref"),Uo=Symbol.for("react.suspense"),Ho=Symbol.for("react.suspense_list"),Bi=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),xu=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function Hn(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,mo;function Xn(e){if(mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mo=t&&t[1]||""}return`
`+mo+e}var ho=!1;function go(e,t){if(!e||ho)return"";ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xn(e):""}function nf(e){switch(e.tag){case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return e=go(e.type,!1),e;case 11:return e=go(e.type.render,!1),e;case 1:return e=go(e.type,!0),e;default:return""}}function bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case Bo:return"Profiler";case $i:return"StrictMode";case Uo:return"Suspense";case Ho:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vu:return(e.displayName||"Context")+".Consumer";case yu:return(e._context.displayName||"Context")+".Provider";case Ai:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bi:return t=e.displayName||null,t!==null?t:bo(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return bo(e(t))}catch{}}return null}function rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bo(t);case 8:return t===$i?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lf(e){var t=wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=lf(e))}function ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vo(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ks(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Su(e,t){t=t.checked,t!=null&&Fi(e,"checked",t,!1)}function Wo(e,t){Su(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qo(e,t,n){(t!=="number"||hl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ko(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ys(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Jn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function Nu(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Go(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,Cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},of=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){of.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Eu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function zu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Eu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var sf=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(e,t){if(t){if(sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Xo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function Ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,En=null,zn=null;function Js(e){if(e=_r(e)){if(typeof Zo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Vl(t),Zo(e.stateNode,e.type,t))}}function Pu(e){En?zn?zn.push(e):zn=[e]:En=e}function _u(){if(En){var e=En,t=zn;if(zn=En=null,Js(e),t)for(e=0;e<t.length;e++)Js(t[e])}}function Iu(e,t){return e(t)}function Mu(){}var yo=!1;function Tu(e,t,n){if(yo)return e(t,n);yo=!0;try{return Iu(e,t,n)}finally{yo=!1,(En!==null||zn!==null)&&(Mu(),_u())}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var qo=!1;if(gt)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){qo=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{qo=!1}function af(e,t,n,r,l,o,i,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(y){this.onError(y)}}var tr=!1,gl=null,yl=!1,ei=null,uf={onError:function(e){tr=!0,gl=e}};function cf(e,t,n,r,l,o,i,s,a){tr=!1,gl=null,af.apply(uf,arguments)}function df(e,t,n,r,l,o,i,s,a){if(cf.apply(this,arguments),tr){if(tr){var d=gl;tr=!1,gl=null}else throw Error(w(198));yl||(yl=!0,ei=d)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zs(e){if(an(e)!==e)throw Error(w(188))}function ff(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Zs(l),e;if(o===r)return Zs(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Du(e){return e=ff(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Ru=Be.unstable_scheduleCallback,qs=Be.unstable_cancelCallback,pf=Be.unstable_shouldYield,mf=Be.unstable_requestPaint,oe=Be.unstable_now,hf=Be.unstable_getCurrentPriorityLevel,Hi=Be.unstable_ImmediatePriority,Fu=Be.unstable_UserBlockingPriority,vl=Be.unstable_NormalPriority,gf=Be.unstable_LowPriority,$u=Be.unstable_IdlePriority,Bl=null,ut=null;function yf(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:wf,vf=Math.log,xf=Math.LN2;function wf(e){return e>>>=0,e===0?32:31-(vf(e)/xf|0)|0}var Vr=64,Wr=4194304;function Zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=Zn(s):(o&=i,o!==0&&(r=Zn(o)))}else i=n&~l,i!==0?r=Zn(i):o!==0&&(r=Zn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function kf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-rt(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=kf(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Au(){var e=Vr;return Vr<<=1,!(Vr&4194240)&&(Vr=64),e}function vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function Nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var b=0;function Bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uu,Vi,Hu,bu,Vu,ni=!1,Qr=[],Tt=null,Lt=null,Dt=null,fr=new Map,pr=new Map,Pt=[],jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ea(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function Vn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=_r(t),t!==null&&Vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Cf(e,t,n,r,l){switch(t){case"focusin":return Tt=Vn(Tt,e,t,n,r,l),!0;case"dragenter":return Lt=Vn(Lt,e,t,n,r,l),!0;case"mouseover":return Dt=Vn(Dt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return fr.set(o,Vn(fr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,pr.set(o,Vn(pr.get(o)||null,e,t,n,r,l)),!0}return!1}function Wu(e){var t=Yt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Lu(n),t!==null){e.blockedOn=t,Vu(e.priority,function(){Hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jo=r,n.target.dispatchEvent(r),Jo=null}else return t=_r(n),t!==null&&Vi(t),e.blockedOn=n,!1;t.shift()}return!0}function ta(e,t,n){ol(e)&&n.delete(t)}function Ef(){ni=!1,Tt!==null&&ol(Tt)&&(Tt=null),Lt!==null&&ol(Lt)&&(Lt=null),Dt!==null&&ol(Dt)&&(Dt=null),fr.forEach(ta),pr.forEach(ta)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,ni||(ni=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,Ef)))}function mr(e){function t(l){return Wn(l,e)}if(0<Qr.length){Wn(Qr[0],e);for(var n=1;n<Qr.length;n++){var r=Qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Wn(Tt,e),Lt!==null&&Wn(Lt,e),Dt!==null&&Wn(Dt,e),fr.forEach(t),pr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Wu(n),n.blockedOn===null&&Pt.shift()}var Pn=wt.ReactCurrentBatchConfig,wl=!0;function zf(e,t,n,r){var l=b,o=Pn.transition;Pn.transition=null;try{b=1,Wi(e,t,n,r)}finally{b=l,Pn.transition=o}}function Pf(e,t,n,r){var l=b,o=Pn.transition;Pn.transition=null;try{b=4,Wi(e,t,n,r)}finally{b=l,Pn.transition=o}}function Wi(e,t,n,r){if(wl){var l=ri(e,t,n,r);if(l===null)Po(e,t,r,kl,n),ea(e,r);else if(Cf(l,e,t,n,r))r.stopPropagation();else if(ea(e,r),t&4&&-1<jf.indexOf(e)){for(;l!==null;){var o=_r(l);if(o!==null&&Uu(o),o=ri(e,t,n,r),o===null&&Po(e,t,r,kl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Po(e,t,r,null,n)}}var kl=null;function ri(e,t,n,r){if(kl=null,e=Ui(r),e=Yt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return kl=e,null}function Qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hf()){case Hi:return 1;case Fu:return 4;case vl:case gf:return 16;case $u:return 536870912;default:return 16}default:return 16}}var It=null,Qi=null,il=null;function Ku(){if(il)return il;var e,t=Qi,n=t.length,r,l="value"in It?It.value:It.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return il=l.slice(e,1<r?1-r:void 0)}function sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function na(){return!1}function He(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Kr:na,this.isPropagationStopped=na,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=He(An),Pr=q({},An,{view:0,detail:0}),_f=He(Pr),xo,wo,Qn,Ul=q({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(xo=e.screenX-Qn.screenX,wo=e.screenY-Qn.screenY):wo=xo=0,Qn=e),xo)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),ra=He(Ul),If=q({},Ul,{dataTransfer:0}),Mf=He(If),Tf=q({},Pr,{relatedTarget:0}),ko=He(Tf),Lf=q({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=He(Lf),Of=q({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rf=He(Of),Ff=q({},An,{data:0}),la=He(Ff),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bf[e])?!!t[e]:!1}function Gi(){return Uf}var Hf=q({},Pr,{key:function(e){if(e.key){var t=$f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gi,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=He(Hf),Vf=q({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oa=He(Vf),Wf=q({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gi}),Qf=He(Wf),Kf=q({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=He(Kf),Yf=q({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=He(Yf),Jf=[9,13,27,32],Yi=gt&&"CompositionEvent"in window,nr=null;gt&&"documentMode"in document&&(nr=document.documentMode);var Zf=gt&&"TextEvent"in window&&!nr,Gu=gt&&(!Yi||nr&&8<nr&&11>=nr),ia=" ",sa=!1;function Yu(e,t){switch(e){case"keyup":return Jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function qf(e,t){switch(e){case"compositionend":return Xu(t);case"keypress":return t.which!==32?null:(sa=!0,ia);case"textInput":return e=t.data,e===ia&&sa?null:e;default:return null}}function ep(e,t){if(hn)return e==="compositionend"||!Yi&&Yu(e,t)?(e=Ku(),il=Qi=It=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gu&&t.locale!=="ko"?null:t.data;default:return null}}var tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function aa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tp[e.type]:t==="textarea"}function Ju(e,t,n,r){Pu(r),t=Sl(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,hr=null;function np(e){ac(e,0)}function Hl(e){var t=vn(e);if(ku(t))return e}function rp(e,t){if(e==="change")return t}var Zu=!1;if(gt){var So;if(gt){var No="oninput"in document;if(!No){var ua=document.createElement("div");ua.setAttribute("oninput","return;"),No=typeof ua.oninput=="function"}So=No}else So=!1;Zu=So&&(!document.documentMode||9<document.documentMode)}function ca(){rr&&(rr.detachEvent("onpropertychange",qu),hr=rr=null)}function qu(e){if(e.propertyName==="value"&&Hl(hr)){var t=[];Ju(t,hr,e,Ui(e)),Tu(np,t)}}function lp(e,t,n){e==="focusin"?(ca(),rr=t,hr=n,rr.attachEvent("onpropertychange",qu)):e==="focusout"&&ca()}function op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(hr)}function ip(e,t){if(e==="click")return Hl(t)}function sp(e,t){if(e==="input"||e==="change")return Hl(t)}function ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:ap;function gr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ao.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fa(e,t){var n=da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=da(n)}}function ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tc(){for(var e=window,t=hl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=hl(e.document)}return t}function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function up(e){var t=tc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ec(n.ownerDocument.documentElement,n)){if(r!==null&&Xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=fa(n,o);var i=fa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var cp=gt&&"documentMode"in document&&11>=document.documentMode,gn=null,li=null,lr=null,oi=!1;function pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oi||gn==null||gn!==hl(r)||(r=gn,"selectionStart"in r&&Xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&gr(lr,r)||(lr=r,r=Sl(li,"onSelect"),0<r.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},jo={},nc={};gt&&(nc=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function bl(e){if(jo[e])return jo[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nc)return jo[e]=t[n];return e}var rc=bl("animationend"),lc=bl("animationiteration"),oc=bl("animationstart"),ic=bl("transitionend"),sc=new Map,ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){sc.set(e,t),sn(t,[e])}for(var Co=0;Co<ma.length;Co++){var Eo=ma[Co],dp=Eo.toLowerCase(),fp=Eo[0].toUpperCase()+Eo.slice(1);Ht(dp,"on"+fp)}Ht(rc,"onAnimationEnd");Ht(lc,"onAnimationIteration");Ht(oc,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(ic,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pp=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,df(r,t,void 0,e),e.currentTarget=null}function ac(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;ha(l,s,d),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,d=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;ha(l,s,d),o=a}}}if(yl)throw e=ei,yl=!1,ei=null,e}function K(e,t){var n=t[ci];n===void 0&&(n=t[ci]=new Set);var r=e+"__bubble";n.has(r)||(uc(t,e,2,!1),n.add(r))}function zo(e,t,n){var r=0;t&&(r|=4),uc(n,e,r,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Yr]){e[Yr]=!0,gu.forEach(function(n){n!=="selectionchange"&&(pp.has(n)||zo(n,!1,e),zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,zo("selectionchange",!1,t))}}function uc(e,t,n,r){switch(Qu(t)){case 1:var l=zf;break;case 4:l=Pf;break;default:l=Wi}n=l.bind(null,t,n,e),l=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Po(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Yt(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Tu(function(){var d=o,y=Ui(n),g=[];e:{var h=sc.get(e);if(h!==void 0){var k=Ki,N=e;switch(e){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":k=bf;break;case"focusin":N="focus",k=ko;break;case"focusout":N="blur",k=ko;break;case"beforeblur":case"afterblur":k=ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Qf;break;case rc:case lc:case oc:k=Df;break;case ic:k=Gf;break;case"scroll":k=_f;break;case"wheel":k=Xf;break;case"copy":case"cut":case"paste":k=Rf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=oa}var C=(t&4)!==0,$=!C&&e==="scroll",p=C?h!==null?h+"Capture":null:h;C=[];for(var c=d,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=dr(c,p),x!=null&&C.push(vr(c,x,m)))),$)break;c=c.return}0<C.length&&(h=new k(h,N,null,n,y),g.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==Jo&&(N=n.relatedTarget||n.fromElement)&&(Yt(N)||N[yt]))break e;if((k||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=d,N=N?Yt(N):null,N!==null&&($=an(N),N!==$||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=d),k!==N)){if(C=ra,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=oa,x="onPointerLeave",p="onPointerEnter",c="pointer"),$=k==null?h:vn(k),m=N==null?h:vn(N),h=new C(x,c+"leave",k,n,y),h.target=$,h.relatedTarget=m,x=null,Yt(y)===d&&(C=new C(p,c+"enter",N,n,y),C.target=m,C.relatedTarget=$,x=C),$=x,k&&N)t:{for(C=k,p=N,c=0,m=C;m;m=fn(m))c++;for(m=0,x=p;x;x=fn(x))m++;for(;0<c-m;)C=fn(C),c--;for(;0<m-c;)p=fn(p),m--;for(;c--;){if(C===p||p!==null&&C===p.alternate)break t;C=fn(C),p=fn(p)}C=null}else C=null;k!==null&&ga(g,h,k,C,!1),N!==null&&$!==null&&ga(g,$,N,C,!0)}}e:{if(h=d?vn(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var j=rp;else if(aa(h))if(Zu)j=sp;else{j=op;var S=lp}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=ip);if(j&&(j=j(e,d))){Ju(g,j,n,y);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Qo(h,"number",h.value)}switch(S=d?vn(d):window,e){case"focusin":(aa(S)||S.contentEditable==="true")&&(gn=S,li=d,lr=null);break;case"focusout":lr=li=gn=null;break;case"mousedown":oi=!0;break;case"contextmenu":case"mouseup":case"dragend":oi=!1,pa(g,n,y);break;case"selectionchange":if(cp)break;case"keydown":case"keyup":pa(g,n,y)}var P;if(Yi)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else hn?Yu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Gu&&n.locale!=="ko"&&(hn||L!=="onCompositionStart"?L==="onCompositionEnd"&&hn&&(P=Ku()):(It=y,Qi="value"in It?It.value:It.textContent,hn=!0)),S=Sl(d,L),0<S.length&&(L=new la(L,e,null,n,y),g.push({event:L,listeners:S}),P?L.data=P:(P=Xu(n),P!==null&&(L.data=P)))),(P=Zf?qf(e,n):ep(e,n))&&(d=Sl(d,"onBeforeInput"),0<d.length&&(y=new la("onBeforeInput","beforeinput",null,n,y),g.push({event:y,listeners:d}),y.data=P))}ac(g,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=dr(e,n),o!=null&&r.unshift(vr(e,o,l)),o=dr(e,t),o!=null&&r.push(vr(e,o,l))),e=e.return}return r}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ga(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=dr(n,o),a!=null&&i.unshift(vr(n,a,s))):l||(a=dr(n,o),a!=null&&i.push(vr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var mp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function ya(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(hp,"")}function Xr(e,t,n){if(t=ya(t),ya(e)!==t&&n)throw Error(w(425))}function Nl(){}var ii=null,si=null;function ai(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ui=typeof setTimeout=="function"?setTimeout:void 0,gp=typeof clearTimeout=="function"?clearTimeout:void 0,va=typeof Promise=="function"?Promise:void 0,yp=typeof queueMicrotask=="function"?queueMicrotask:typeof va<"u"?function(e){return va.resolve(null).then(e).catch(vp)}:ui;function vp(e){setTimeout(function(){throw e})}function _o(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);mr(t)}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),at="__reactFiber$"+Bn,xr="__reactProps$"+Bn,yt="__reactContainer$"+Bn,ci="__reactEvents$"+Bn,xp="__reactListeners$"+Bn,wp="__reactHandles$"+Bn;function Yt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xa(e);e!==null;){if(n=e[at])return n;e=xa(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[at]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Vl(e){return e[xr]||null}var di=[],xn=-1;function bt(e){return{current:e}}function G(e){0>xn||(e.current=di[xn],di[xn]=null,xn--)}function Q(e,t){xn++,di[xn]=e.current,e.current=t}var Ut={},Ce=bt(Ut),Te=bt(!1),tn=Ut;function Tn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function jl(){G(Te),G(Ce)}function wa(e,t,n){if(Ce.current!==Ut)throw Error(w(168));Q(Ce,t),Q(Te,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,rf(e)||"Unknown",l));return q({},n,r)}function Cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,tn=Ce.current,Q(Ce,e),Q(Te,Te.current),!0}function ka(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=cc(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(Ce),Q(Ce,e)):G(Te),Q(Te,n)}var ft=null,Wl=!1,Io=!1;function dc(e){ft===null?ft=[e]:ft.push(e)}function kp(e){Wl=!0,dc(e)}function Vt(){if(!Io&&ft!==null){Io=!0;var e=0,t=b;try{var n=ft;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,Wl=!1}catch(l){throw ft!==null&&(ft=ft.slice(e+1)),Ru(Hi,Vt),l}finally{b=t,Io=!1}}return null}var wn=[],kn=0,El=null,zl=0,Ve=[],We=0,nn=null,pt=1,mt="";function Kt(e,t){wn[kn++]=zl,wn[kn++]=El,El=e,zl=t}function fc(e,t,n){Ve[We++]=pt,Ve[We++]=mt,Ve[We++]=nn,nn=e;var r=pt;e=mt;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var o=32-rt(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,pt=1<<32-rt(t)+l|n<<l|r,mt=o+e}else pt=1<<o|n<<l|r,mt=e}function Ji(e){e.return!==null&&(Kt(e,1),fc(e,1,0))}function Zi(e){for(;e===El;)El=wn[--kn],wn[kn]=null,zl=wn[--kn],wn[kn]=null;for(;e===nn;)nn=Ve[--We],Ve[We]=null,mt=Ve[--We],Ve[We]=null,pt=Ve[--We],Ve[We]=null}var Ae=null,$e=null,X=!1,nt=null;function pc(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,$e=Ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,$e=null,!0):!1;default:return!1}}function fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pi(e){if(X){var t=$e;if(t){var n=t;if(!Sa(e,t)){if(fi(e))throw Error(w(418));t=Ot(n.nextSibling);var r=Ae;t&&Sa(e,t)?pc(r,n):(e.flags=e.flags&-4097|2,X=!1,Ae=e)}}else{if(fi(e))throw Error(w(418));e.flags=e.flags&-4097|2,X=!1,Ae=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Jr(e){if(e!==Ae)return!1;if(!X)return Na(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ai(e.type,e.memoizedProps)),t&&(t=$e)){if(fi(e))throw mc(),Error(w(418));for(;t;)pc(e,t),t=Ot(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ae?Ot(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=$e;e;)e=Ot(e.nextSibling)}function Ln(){$e=Ae=null,X=!1}function qi(e){nt===null?nt=[e]:nt.push(e)}var Sp=wt.ReactCurrentBatchConfig;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Zr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ja(e){var t=e._init;return t(e._payload)}function hc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=At(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Fo(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var j=m.type;return j===mn?y(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Et&&ja(j)===c.type)?(x=l(c,m.props),x.ref=Kn(p,c,m),x.return=p,x):(x=ml(m.type,m.key,m.props,null,p.mode,x),x.ref=Kn(p,c,m),x.return=p,x)}function d(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=$o(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function y(p,c,m,x,j){return c===null||c.tag!==7?(c=en(m,p.mode,x,j),c.return=p,c):(c=l(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Fo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ur:return m=ml(c.type,c.key,c.props,null,p.mode,m),m.ref=Kn(p,null,c),m.return=p,m;case pn:return c=$o(c,p.mode,m),c.return=p,c;case Et:var x=c._init;return g(p,x(c._payload),m)}if(Jn(c)||Hn(c))return c=en(c,p.mode,m,null),c.return=p,c;Zr(p,c)}return null}function h(p,c,m,x){var j=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ur:return m.key===j?a(p,c,m,x):null;case pn:return m.key===j?d(p,c,m,x):null;case Et:return j=m._init,h(p,c,j(m._payload),x)}if(Jn(m)||Hn(m))return j!==null?null:y(p,c,m,x,null);Zr(p,m)}return null}function k(p,c,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ur:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,j);case pn:return p=p.get(x.key===null?m:x.key)||null,d(c,p,x,j);case Et:var S=x._init;return k(p,c,m,S(x._payload),j)}if(Jn(x)||Hn(x))return p=p.get(m)||null,y(c,p,x,j,null);Zr(c,x)}return null}function N(p,c,m,x){for(var j=null,S=null,P=c,L=c=0,ee=null;P!==null&&L<m.length;L++){P.index>L?(ee=P,P=null):ee=P.sibling;var _=h(p,P,m[L],x);if(_===null){P===null&&(P=ee);break}e&&P&&_.alternate===null&&t(p,P),c=o(_,c,L),S===null?j=_:S.sibling=_,S=_,P=ee}if(L===m.length)return n(p,P),X&&Kt(p,L),j;if(P===null){for(;L<m.length;L++)P=g(p,m[L],x),P!==null&&(c=o(P,c,L),S===null?j=P:S.sibling=P,S=P);return X&&Kt(p,L),j}for(P=r(p,P);L<m.length;L++)ee=k(P,p,L,m[L],x),ee!==null&&(e&&ee.alternate!==null&&P.delete(ee.key===null?L:ee.key),c=o(ee,c,L),S===null?j=ee:S.sibling=ee,S=ee);return e&&P.forEach(function(ce){return t(p,ce)}),X&&Kt(p,L),j}function C(p,c,m,x){var j=Hn(m);if(typeof j!="function")throw Error(w(150));if(m=j.call(m),m==null)throw Error(w(151));for(var S=j=null,P=c,L=c=0,ee=null,_=m.next();P!==null&&!_.done;L++,_=m.next()){P.index>L?(ee=P,P=null):ee=P.sibling;var ce=h(p,P,_.value,x);if(ce===null){P===null&&(P=ee);break}e&&P&&ce.alternate===null&&t(p,P),c=o(ce,c,L),S===null?j=ce:S.sibling=ce,S=ce,P=ee}if(_.done)return n(p,P),X&&Kt(p,L),j;if(P===null){for(;!_.done;L++,_=m.next())_=g(p,_.value,x),_!==null&&(c=o(_,c,L),S===null?j=_:S.sibling=_,S=_);return X&&Kt(p,L),j}for(P=r(p,P);!_.done;L++,_=m.next())_=k(P,p,L,_.value,x),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?L:_.key),c=o(_,c,L),S===null?j=_:S.sibling=_,S=_);return e&&P.forEach(function(kt){return t(p,kt)}),X&&Kt(p,L),j}function $(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ur:e:{for(var j=m.key,S=c;S!==null;){if(S.key===j){if(j=m.type,j===mn){if(S.tag===7){n(p,S.sibling),c=l(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Et&&ja(j)===S.type){n(p,S.sibling),c=l(S,m.props),c.ref=Kn(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===mn?(c=en(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=ml(m.type,m.key,m.props,null,p.mode,x),x.ref=Kn(p,c,m),x.return=p,p=x)}return i(p);case pn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=$o(m,p.mode,x),c.return=p,p=c}return i(p);case Et:return S=m._init,$(p,c,S(m._payload),x)}if(Jn(m))return N(p,c,m,x);if(Hn(m))return C(p,c,m,x);Zr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=Fo(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return $}var Dn=hc(!0),gc=hc(!1),Pl=bt(null),_l=null,Sn=null,es=null;function ts(){es=Sn=_l=null}function ns(e){var t=Pl.current;G(Pl),e._currentValue=t}function mi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){_l=e,es=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(es!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(_l===null)throw Error(w(308));Sn=e,_l.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Xt=null;function rs(e){Xt===null?Xt=[e]:Xt.push(e)}function yc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,rs(t)):(n.next=l.next,l.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,vt(e,n)}return l=r.interleaved,l===null?(t.next=t,rs(r)):(t.next=l.next,l.next=t),r.interleaved=t,vt(e,n)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}function Ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Il(e,t,n,r){var l=e.updateQueue;zt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=d:s.next=d,y.lastBaseUpdate=a))}if(o!==null){var g=l.baseState;i=0,y=d=a=null,s=o;do{var h=s.lane,k=s.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(h=t,k=n,C.tag){case 1:if(N=C.payload,typeof N=="function"){g=N.call(k,g,h);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,h=typeof N=="function"?N.call(k,g,h):N,h==null)break e;g=q({},g,h);break e;case 2:zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(d=y=k,a=g):y=y.next=k,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(y===null&&(a=g),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=y,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);ln|=i,e.lanes=i,e.memoizedState=g}}function Ea(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Ir={},ct=bt(Ir),wr=bt(Ir),kr=bt(Ir);function Jt(e){if(e===Ir)throw Error(w(174));return e}function os(e,t){switch(Q(kr,t),Q(wr,e),Q(ct,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Go(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Go(t,e)}G(ct),Q(ct,t)}function On(){G(ct),G(wr),G(kr)}function xc(e){Jt(kr.current);var t=Jt(ct.current),n=Go(t,e.type);t!==n&&(Q(wr,e),Q(ct,n))}function is(e){wr.current===e&&(G(ct),G(wr))}var J=bt(0);function Ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function ss(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var ul=wt.ReactCurrentDispatcher,To=wt.ReactCurrentBatchConfig,rn=0,Z=null,ae=null,he=null,Tl=!1,or=!1,Sr=0,Np=0;function Se(){throw Error(w(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function us(e,t,n,r,l,o){if(rn=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=e===null||e.memoizedState===null?zp:Pp,e=n(r,l),or){o=0;do{if(or=!1,Sr=0,25<=o)throw Error(w(301));o+=1,he=ae=null,t.updateQueue=null,ul.current=_p,e=n(r,l)}while(or)}if(ul.current=Ll,t=ae!==null&&ae.next!==null,rn=0,he=ae=Z=null,Tl=!1,t)throw Error(w(300));return e}function cs(){var e=Sr!==0;return Sr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=e:he=he.next=e,he}function Ye(){if(ae===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=he===null?Z.memoizedState:he.next;if(t!==null)he=t,ae=e;else{if(e===null)throw Error(w(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},he===null?Z.memoizedState=he=e:he=he.next=e}return he}function Nr(e,t){return typeof t=="function"?t(e):t}function Lo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ae,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,d=o;do{var y=d.lane;if((rn&y)===y)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:y,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=g,i=r):a=a.next=g,Z.lanes|=y,ln|=y}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=s,ot(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,Z.lanes|=o,ln|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Do(e){var t=Ye(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ot(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function wc(){}function kc(e,t){var n=Z,r=Ye(),l=t(),o=!ot(r.memoizedState,l);if(o&&(r.memoizedState=l,Me=!0),r=r.queue,ds(jc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,jr(9,Nc.bind(null,n,r,l,t),void 0,null),ge===null)throw Error(w(349));rn&30||Sc(n,t,l)}return l}function Sc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nc(e,t,n,r){t.value=n,t.getSnapshot=r,Cc(t)&&Ec(e)}function jc(e,t,n){return n(function(){Cc(t)&&Ec(e)})}function Cc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Ec(e){var t=vt(e,1);t!==null&&lt(t,e,1,-1)}function za(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,Z,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zc(){return Ye().memoizedState}function cl(e,t,n,r){var l=st();Z.flags|=e,l.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function Ql(e,t,n,r){var l=Ye();r=r===void 0?null:r;var o=void 0;if(ae!==null){var i=ae.memoizedState;if(o=i.destroy,r!==null&&as(r,i.deps)){l.memoizedState=jr(t,n,o,r);return}}Z.flags|=e,l.memoizedState=jr(1|t,n,o,r)}function Pa(e,t){return cl(8390656,8,e,t)}function ds(e,t){return Ql(2048,8,e,t)}function Pc(e,t){return Ql(4,2,e,t)}function _c(e,t){return Ql(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,Ql(4,4,Ic.bind(null,t,e),n)}function fs(){}function Tc(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lc(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&as(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dc(e,t,n){return rn&21?(ot(n,t)||(n=Au(),Z.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function jp(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=To.transition;To.transition={};try{e(!1),t()}finally{b=n,To.transition=r}}function Oc(){return Ye().memoizedState}function Cp(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rc(e))Fc(t,n);else if(n=yc(e,t,n,r),n!==null){var l=ze();lt(n,e,r,l),$c(n,t,r)}}function Ep(e,t,n){var r=$t(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rc(e))Fc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ot(s,i)){var a=t.interleaved;a===null?(l.next=l,rs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=yc(e,t,l,r),n!==null&&(l=ze(),lt(n,e,r,l),$c(n,t,r))}}function Rc(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Fc(e,t){or=Tl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $c(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}var Ll={readContext:Ge,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},zp={readContext:Ge,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Pa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cl(4194308,4,Ic.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return cl(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Cp.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:za,useDebugValue:fs,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=za(!1),t=e[0];return e=jp.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,l=st();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ge===null)throw Error(w(349));rn&30||Sc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Pa(jc.bind(null,r,o,e),[e]),r.flags|=2048,jr(9,Nc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=ge.identifierPrefix;if(X){var n=mt,r=pt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Np++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Pp={readContext:Ge,useCallback:Tc,useContext:Ge,useEffect:ds,useImperativeHandle:Mc,useInsertionEffect:Pc,useLayoutEffect:_c,useMemo:Lc,useReducer:Lo,useRef:zc,useState:function(){return Lo(Nr)},useDebugValue:fs,useDeferredValue:function(e){var t=Ye();return Dc(t,ae.memoizedState,e)},useTransition:function(){var e=Lo(Nr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:Oc,unstable_isNewReconciler:!1},_p={readContext:Ge,useCallback:Tc,useContext:Ge,useEffect:ds,useImperativeHandle:Mc,useInsertionEffect:Pc,useLayoutEffect:_c,useMemo:Lc,useReducer:Do,useRef:zc,useState:function(){return Do(Nr)},useDebugValue:fs,useDeferredValue:function(e){var t=Ye();return ae===null?t.memoizedState=e:Dc(t,ae.memoizedState,e)},useTransition:function(){var e=Do(Nr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:kc,useId:Oc,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Kl={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),l=$t(e),o=ht(r,l);o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,l),t!==null&&(lt(t,e,l,r),al(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),l=$t(e),o=ht(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,l),t!==null&&(lt(t,e,l,r),al(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=$t(e),l=ht(n,r);l.tag=2,t!=null&&(l.callback=t),t=Rt(e,l,r),t!==null&&(lt(t,e,r,n),al(t,e,r))}};function _a(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(l,o):!0}function Ac(e,t,n){var r=!1,l=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(l=Le(t)?tn:Ce.current,r=t.contextTypes,o=(r=r!=null)?Tn(e,l):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Kl.enqueueReplaceState(t,t.state,null)}function gi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ls(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ge(o):(o=Le(t)?tn:Ce.current,l.context=Tn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(hi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Kl.enqueueReplaceState(l,l.state,null),Il(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=nf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Oo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function yi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ip=typeof WeakMap=="function"?WeakMap:Map;function Bc(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,zi=r),yi(e,t)},n}function Uc(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){yi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){yi(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ma(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ip;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Vp.bind(null,e,t,n),t.then(e,e))}function Ta(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function La(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var Mp=wt.ReactCurrentOwner,Me=!1;function Ee(e,t,n,r){t.child=e===null?gc(t,null,n,r):Dn(t,e.child,n,r)}function Da(e,t,n,r,l){n=n.render;var o=t.ref;return _n(t,l),r=us(e,t,n,r,o,l),n=cs(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,xt(e,t,l)):(X&&n&&Ji(t),t.flags|=1,Ee(e,t,r,l),t.child)}function Oa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Hc(e,t,o,r,l)):(e=ml(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(i,r)&&e.ref===t.ref)return xt(e,t,l)}return t.flags|=1,e=At(o,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(gr(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,xt(e,t,l)}return vi(e,t,n,r,l)}function bc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(jn,Fe),Fe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(jn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(jn,Fe),Fe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(jn,Fe),Fe|=r;return Ee(e,t,l,n),t.child}function Vc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function vi(e,t,n,r,l){var o=Le(n)?tn:Ce.current;return o=Tn(t,o),_n(t,l),n=us(e,t,n,r,o,l),r=cs(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,xt(e,t,l)):(X&&r&&Ji(t),t.flags|=1,Ee(e,t,n,l),t.child)}function Ra(e,t,n,r,l){if(Le(n)){var o=!0;Cl(t)}else o=!1;if(_n(t,l),t.stateNode===null)dl(e,t),Ac(t,n,r),gi(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Le(n)?tn:Ce.current,d=Tn(t,d));var y=n.getDerivedStateFromProps,g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Ia(t,i,r,d),zt=!1;var h=t.memoizedState;i.state=h,Il(t,r,i,l),a=t.memoizedState,s!==r||h!==a||Te.current||zt?(typeof y=="function"&&(hi(t,n,y,r),a=t.memoizedState),(s=zt||_a(t,n,s,r,h,a,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,vc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:et(t.type,s),i.props=d,g=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Le(n)?tn:Ce.current,a=Tn(t,a));var k=n.getDerivedStateFromProps;(y=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||h!==a)&&Ia(t,i,r,a),zt=!1,h=t.memoizedState,i.state=h,Il(t,r,i,l);var N=t.memoizedState;s!==g||h!==N||Te.current||zt?(typeof k=="function"&&(hi(t,n,k,r),N=t.memoizedState),(d=zt||_a(t,n,d,r,h,N,a)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xi(e,t,n,r,o,l)}function xi(e,t,n,r,l,o){Vc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&ka(t,n,!1),xt(e,t,o);r=t.stateNode,Mp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Dn(t,e.child,null,o),t.child=Dn(t,null,s,o)):Ee(e,t,s,o),t.memoizedState=r.state,l&&ka(t,n,!0),t.child}function Wc(e){var t=e.stateNode;t.pendingContext?wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wa(e,t.context,!1),os(e,t.containerInfo)}function Fa(e,t,n,r,l){return Ln(),qi(l),t.flags|=256,Ee(e,t,n,r),t.child}var wi={dehydrated:null,treeContext:null,retryLane:0};function ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,t,n){var r=t.pendingProps,l=J.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Q(J,l&1),e===null)return pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Xl(i,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ki(n),t.memoizedState=wi,e):ps(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Tp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=At(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=At(s,o):(o=en(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?ki(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=wi,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ps(e,t){return t=Xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function qr(e,t,n,r){return r!==null&&qi(r),Dn(t,e.child,null,n),e=ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Oo(Error(w(422))),qr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Xl({mode:"visible",children:r.children},l,0,null),o=en(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dn(t,e.child,null,i),t.child.memoizedState=ki(i),t.memoizedState=wi,o);if(!(t.mode&1))return qr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Oo(o,r,void 0),qr(e,t,i,r)}if(s=(i&e.childLanes)!==0,Me||s){if(r=ge,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,vt(e,l),lt(r,e,l,-1))}return xs(),r=Oo(Error(w(421))),qr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Wp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,$e=Ot(l.nextSibling),Ae=t,X=!0,nt=null,e!==null&&(Ve[We++]=pt,Ve[We++]=mt,Ve[We++]=nn,pt=e.id,mt=e.overflow,nn=t),t=ps(t,r.children),t.flags|=4096,t)}function $a(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),mi(e.return,t,n)}function Ro(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Kc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ee(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$a(e,n,t);else if(e.tag===19)$a(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(J,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ml(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ro(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ml(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ro(t,!0,n,null,o);break;case"together":Ro(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lp(e,t,n){switch(t.tag){case 3:Wc(t),Ln();break;case 5:xc(t);break;case 1:Le(t.type)&&Cl(t);break;case 4:os(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Q(Pl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Qc(e,t,n):(Q(J,J.current&1),e=xt(e,t,n),e!==null?e.sibling:null);Q(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Q(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,bc(e,t,n)}return xt(e,t,n)}var Gc,Si,Yc,Xc;Gc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Si=function(){};Yc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Jt(ct.current);var o=null;switch(n){case"input":l=Vo(e,l),r=Vo(e,r),o=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":l=Ko(e,l),r=Ko(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Nl)}Yo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ur.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ur.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&K("scroll",e),o||s===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Dp(e,t,n){var r=t.pendingProps;switch(Zi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Le(t.type)&&jl(),Ne(t),null;case 3:return r=t.stateNode,On(),G(Te),G(Ce),ss(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Ii(nt),nt=null))),Si(e,t),Ne(t),null;case 5:is(t);var l=Jt(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)Yc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return Ne(t),null}if(e=Jt(ct.current),Jr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[xr]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(l=0;l<qn.length;l++)K(qn[l],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ks(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Ys(r,o),K("invalid",r)}Yo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Xr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Xr(r.textContent,s,e),l=["children",""+s]):ur.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&K("scroll",r)}switch(n){case"input":Hr(r),Gs(r,o,!0);break;case"textarea":Hr(r),Xs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[at]=t,e[xr]=r,Gc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Xo(n,r),n){case"dialog":K("cancel",e),K("close",e),l=r;break;case"iframe":case"object":case"embed":K("load",e),l=r;break;case"video":case"audio":for(l=0;l<qn.length;l++)K(qn[l],e);l=r;break;case"source":K("error",e),l=r;break;case"img":case"image":case"link":K("error",e),K("load",e),l=r;break;case"details":K("toggle",e),l=r;break;case"input":Ks(e,r),l=Vo(e,r),K("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ys(e,r),l=Ko(e,r),K("invalid",e);break;default:l=r}Yo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?zu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Cu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&cr(e,a):typeof a=="number"&&cr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ur.hasOwnProperty(o)?a!=null&&o==="onScroll"&&K("scroll",e):a!=null&&Fi(e,o,a,i))}switch(n){case"input":Hr(e),Gs(e,r,!1);break;case"textarea":Hr(e),Xs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)Xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Jt(kr.current),Jt(ct.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return Ne(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&$e!==null&&t.mode&1&&!(t.flags&128))mc(),Ln(),t.flags|=98560,o=!1;else if(o=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[at]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),o=!1}else nt!==null&&(Ii(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ue===0&&(ue=3):xs())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return On(),Si(e,t),e===null&&yr(t.stateNode.containerInfo),Ne(t),null;case 10:return ns(t.type._context),Ne(t),null;case 17:return Le(t.type)&&jl(),Ne(t),null;case 19:if(G(J),o=t.memoizedState,o===null)return Ne(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Gn(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ml(e),i!==null){for(t.flags|=128,Gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Fn&&(t.flags|=128,r=!0,Gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ml(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!X)return Ne(t),null}else 2*oe()-o.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=J.current,Q(J,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Op(e,t){switch(Zi(t),t.tag){case 1:return Le(t.type)&&jl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),G(Te),G(Ce),ss(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return On(),null;case 10:return ns(t.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var el=!1,je=!1,Rp=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Ni(e,t,n){try{n()}catch(r){re(e,t,r)}}var Aa=!1;function Fp(e,t){if(ii=wl,e=tc(),Xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,d=0,y=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(a=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++y===r&&(a=i),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(si={focusedElem:e,selectionRange:n},wl=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,$=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:et(t.type,C),$);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){re(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return N=Aa,Aa=!1,N}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ni(t,n,o)}l=l.next}while(l!==r)}}function Gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jc(e){var t=e.alternate;t!==null&&(e.alternate=null,Jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[xr],delete t[ci],delete t[xp],delete t[wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zc(e){return e.tag===5||e.tag===3||e.tag===4}function Ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nl));else if(r!==4&&(e=e.child,e!==null))for(Ci(e,t,n),e=e.sibling;e!==null;)Ci(e,t,n),e=e.sibling}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}var ve=null,tt=!1;function Ct(e,t,n){for(n=n.child;n!==null;)qc(e,t,n),n=n.sibling}function qc(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:je||Nn(n,t);case 6:var r=ve,l=tt;ve=null,Ct(e,t,n),ve=r,tt=l,ve!==null&&(tt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(tt?(e=ve,n=n.stateNode,e.nodeType===8?_o(e.parentNode,n):e.nodeType===1&&_o(e,n),mr(e)):_o(ve,n.stateNode));break;case 4:r=ve,l=tt,ve=n.stateNode.containerInfo,tt=!0,Ct(e,t,n),ve=r,tt=l;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ni(n,t,i),l=l.next}while(l!==r)}Ct(e,t,n);break;case 1:if(!je&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Ct(e,t,n),je=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Ua(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rp),t.forEach(function(r){var l=Qp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,tt=!1;break e;case 3:ve=s.stateNode.containerInfo,tt=!0;break e;case 4:ve=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(ve===null)throw Error(w(160));qc(o,i,l),ve=null,tt=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){re(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ed(t,e),t=t.sibling}function ed(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),it(e),r&4){try{ir(3,e,e.return),Gl(3,e)}catch(C){re(e,e.return,C)}try{ir(5,e,e.return)}catch(C){re(e,e.return,C)}}break;case 1:qe(t,e),it(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(qe(t,e),it(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var l=e.stateNode;try{cr(l,"")}catch(C){re(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Su(l,o),Xo(s,i);var d=Xo(s,o);for(i=0;i<a.length;i+=2){var y=a[i],g=a[i+1];y==="style"?zu(l,g):y==="dangerouslySetInnerHTML"?Cu(l,g):y==="children"?cr(l,g):Fi(l,y,g,d)}switch(s){case"input":Wo(l,o);break;case"textarea":Nu(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Cn(l,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?Cn(l,!!o.multiple,o.defaultValue,!0):Cn(l,!!o.multiple,o.multiple?[]:"",!1))}l[xr]=o}catch(C){re(e,e.return,C)}}break;case 6:if(qe(t,e),it(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(C){re(e,e.return,C)}}break;case 3:if(qe(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(C){re(e,e.return,C)}break;case 4:qe(t,e),it(e);break;case 13:qe(t,e),it(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(gs=oe())),r&4&&Ua(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(je=(d=je)||y,qe(t,e),je=d):qe(t,e),it(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!y&&e.mode&1)for(I=e,y=e.child;y!==null;){for(g=I=y;I!==null;){switch(h=I,k=h.child,h.tag){case 0:case 11:case 14:case 15:ir(4,h,h.return);break;case 1:Nn(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(C){re(r,n,C)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){ba(g);continue}}k!==null?(k.return=h,I=k):ba(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,a=g.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Eu("display",i))}catch(C){re(e,e.return,C)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(C){re(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:qe(t,e),it(e),r&4&&Ua(e);break;case 21:break;default:qe(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(cr(l,""),r.flags&=-33);var o=Ba(e);Ei(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Ba(e);Ci(e,s,i);break;default:throw Error(w(161))}}catch(a){re(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){I=e,td(e)}function td(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||el;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||je;s=el;var d=je;if(el=i,(je=a)&&!d)for(I=l;I!==null;)i=I,a=i.child,i.tag===22&&i.memoizedState!==null?Va(l):a!==null?(a.return=i,I=a):Va(l);for(;o!==null;)I=o,td(o),o=o.sibling;I=l,el=s,je=d}Ha(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,I=o):Ha(e)}}function Ha(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ea(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ea(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var y=d.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&mr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}je||t.flags&512&&ji(t)}catch(h){re(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function ba(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Va(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gl(4,t)}catch(a){re(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){re(t,l,a)}}var o=t.return;try{ji(t)}catch(a){re(t,o,a)}break;case 5:var i=t.return;try{ji(t)}catch(a){re(t,i,a)}}}catch(a){re(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var Ap=Math.ceil,Dl=wt.ReactCurrentDispatcher,ms=wt.ReactCurrentOwner,Ke=wt.ReactCurrentBatchConfig,B=0,ge=null,se=null,xe=0,Fe=0,jn=bt(0),ue=0,Cr=null,ln=0,Yl=0,hs=0,sr=null,Ie=null,gs=0,Fn=1/0,dt=null,Ol=!1,zi=null,Ft=null,tl=!1,Mt=null,Rl=0,ar=0,Pi=null,fl=-1,pl=0;function ze(){return B&6?oe():fl!==-1?fl:fl=oe()}function $t(e){return e.mode&1?B&2&&xe!==0?xe&-xe:Sp.transition!==null?(pl===0&&(pl=Au()),pl):(e=b,e!==0||(e=window.event,e=e===void 0?16:Qu(e.type)),e):1}function lt(e,t,n,r){if(50<ar)throw ar=0,Pi=null,Error(w(185));zr(e,n,r),(!(B&2)||e!==ge)&&(e===ge&&(!(B&2)&&(Yl|=n),ue===4&&_t(e,xe)),De(e,r),n===1&&B===0&&!(t.mode&1)&&(Fn=oe()+500,Wl&&Vt()))}function De(e,t){var n=e.callbackNode;Sf(e,t);var r=xl(e,e===ge?xe:0);if(r===0)n!==null&&qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qs(n),t===1)e.tag===0?kp(Wa.bind(null,e)):dc(Wa.bind(null,e)),yp(function(){!(B&6)&&Vt()}),n=null;else{switch(Bu(r)){case 1:n=Hi;break;case 4:n=Fu;break;case 16:n=vl;break;case 536870912:n=$u;break;default:n=vl}n=ud(n,nd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nd(e,t){if(fl=-1,pl=0,B&6)throw Error(w(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=xl(e,e===ge?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fl(e,r);else{t=r;var l=B;B|=2;var o=ld();(ge!==e||xe!==t)&&(dt=null,Fn=oe()+500,qt(e,t));do try{Hp();break}catch(s){rd(e,s)}while(!0);ts(),Dl.current=o,B=l,se!==null?t=0:(ge=null,xe=0,t=ue)}if(t!==0){if(t===2&&(l=ti(e),l!==0&&(r=l,t=_i(e,l))),t===1)throw n=Cr,qt(e,0),_t(e,r),De(e,oe()),n;if(t===6)_t(e,r);else{if(l=e.current.alternate,!(r&30)&&!Bp(l)&&(t=Fl(e,r),t===2&&(o=ti(e),o!==0&&(r=o,t=_i(e,o))),t===1))throw n=Cr,qt(e,0),_t(e,r),De(e,oe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Gt(e,Ie,dt);break;case 3:if(_t(e,r),(r&130023424)===r&&(t=gs+500-oe(),10<t)){if(xl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ui(Gt.bind(null,e,Ie,dt),t);break}Gt(e,Ie,dt);break;case 4:if(_t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-rt(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ap(r/1960))-r,10<r){e.timeoutHandle=ui(Gt.bind(null,e,Ie,dt),r);break}Gt(e,Ie,dt);break;case 5:Gt(e,Ie,dt);break;default:throw Error(w(329))}}}return De(e,oe()),e.callbackNode===n?nd.bind(null,e):null}function _i(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Ii(t)),e}function Ii(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Bp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ot(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _t(e,t){for(t&=~hs,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Wa(e){if(B&6)throw Error(w(327));In();var t=xl(e,0);if(!(t&1))return De(e,oe()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var r=ti(e);r!==0&&(t=r,n=_i(e,r))}if(n===1)throw n=Cr,qt(e,0),_t(e,t),De(e,oe()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Ie,dt),De(e,oe()),null}function ys(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Fn=oe()+500,Wl&&Vt())}}function on(e){Mt!==null&&Mt.tag===0&&!(B&6)&&In();var t=B;B|=1;var n=Ke.transition,r=b;try{if(Ke.transition=null,b=1,e)return e()}finally{b=r,Ke.transition=n,B=t,!(B&6)&&Vt()}}function vs(){Fe=jn.current,G(jn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gp(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Zi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jl();break;case 3:On(),G(Te),G(Ce),ss();break;case 5:is(r);break;case 4:On();break;case 13:G(J);break;case 19:G(J);break;case 10:ns(r.type._context);break;case 22:case 23:vs()}n=n.return}if(ge=e,se=e=At(e.current,null),xe=Fe=t,ue=0,Cr=null,hs=Yl=ln=0,Ie=sr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Xt=null}return e}function rd(e,t){do{var n=se;try{if(ts(),ul.current=Ll,Tl){for(var r=Z.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Tl=!1}if(rn=0,he=ae=Z=null,or=!1,Sr=0,ms.current=null,n===null||n.return===null){ue=1,Cr=t,se=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=xe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,y=s,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var k=Ta(i);if(k!==null){k.flags&=-257,La(k,i,s,o,t),k.mode&1&&Ma(o,d,t),t=k,a=d;var N=t.updateQueue;if(N===null){var C=new Set;C.add(a),t.updateQueue=C}else N.add(a);break e}else{if(!(t&1)){Ma(o,d,t),xs();break e}a=Error(w(426))}}else if(X&&s.mode&1){var $=Ta(i);if($!==null){!($.flags&65536)&&($.flags|=256),La($,i,s,o,t),qi(Rn(a,s));break e}}o=a=Rn(a,s),ue!==4&&(ue=2),sr===null?sr=[o]:sr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Bc(o,a,t);Ca(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ft===null||!Ft.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Uc(o,s,t);Ca(o,x);break e}}o=o.return}while(o!==null)}id(n)}catch(j){t=j,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function ld(){var e=Dl.current;return Dl.current=Ll,e===null?Ll:e}function xs(){(ue===0||ue===3||ue===2)&&(ue=4),ge===null||!(ln&268435455)&&!(Yl&268435455)||_t(ge,xe)}function Fl(e,t){var n=B;B|=2;var r=ld();(ge!==e||xe!==t)&&(dt=null,qt(e,t));do try{Up();break}catch(l){rd(e,l)}while(!0);if(ts(),B=n,Dl.current=r,se!==null)throw Error(w(261));return ge=null,xe=0,ue}function Up(){for(;se!==null;)od(se)}function Hp(){for(;se!==null&&!pf();)od(se)}function od(e){var t=ad(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?id(e):se=t,ms.current=null}function id(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Op(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(n=Dp(n,t,Fe),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function Gt(e,t,n){var r=b,l=Ke.transition;try{Ke.transition=null,b=1,bp(e,t,n,r)}finally{Ke.transition=l,b=r}return null}function bp(e,t,n,r){do In();while(Mt!==null);if(B&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Nf(e,o),e===ge&&(se=ge=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,ud(vl,function(){return In(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var i=b;b=1;var s=B;B|=4,ms.current=null,Fp(e,n),ed(n,e),up(si),wl=!!ii,si=ii=null,e.current=n,$p(n),mf(),B=s,b=i,Ke.transition=o}else e.current=n;if(tl&&(tl=!1,Mt=e,Rl=l),o=e.pendingLanes,o===0&&(Ft=null),yf(n.stateNode),De(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ol)throw Ol=!1,e=zi,zi=null,e;return Rl&1&&e.tag!==0&&In(),o=e.pendingLanes,o&1?e===Pi?ar++:(ar=0,Pi=e):ar=0,Vt(),null}function In(){if(Mt!==null){var e=Bu(Rl),t=Ke.transition,n=b;try{if(Ke.transition=null,b=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Rl=0,B&6)throw Error(w(331));var l=B;for(B|=4,I=e.current;I!==null;){var o=I,i=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(I=d;I!==null;){var y=I;switch(y.tag){case 0:case 11:case 15:ir(8,y,o)}var g=y.child;if(g!==null)g.return=y,I=g;else for(;I!==null;){y=I;var h=y.sibling,k=y.return;if(Jc(y),y===d){I=null;break}if(h!==null){h.return=k,I=h;break}I=k}}}var N=o.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var $=C.sibling;C.sibling=null,C=$}while(C!==null)}}I=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,I=i;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ir(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){i=I;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,I=m;else e:for(i=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Gl(9,s)}}catch(j){re(s,s.return,j)}if(s===i){I=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,I=x;break e}I=s.return}}if(B=l,Vt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Bl,e)}catch{}r=!0}return r}finally{b=n,Ke.transition=t}}return!1}function Qa(e,t,n){t=Rn(n,t),t=Bc(e,t,1),e=Rt(e,t,1),t=ze(),e!==null&&(zr(e,1,t),De(e,t))}function re(e,t,n){if(e.tag===3)Qa(e,e,n);else for(;t!==null;){if(t.tag===3){Qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Rn(n,e),e=Uc(t,e,1),t=Rt(t,e,1),e=ze(),t!==null&&(zr(t,1,e),De(t,e));break}}t=t.return}}function Vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(xe&n)===n&&(ue===4||ue===3&&(xe&130023424)===xe&&500>oe()-gs?qt(e,0):hs|=n),De(e,t)}function sd(e,t){t===0&&(e.mode&1?(t=Wr,Wr<<=1,!(Wr&130023424)&&(Wr=4194304)):t=1);var n=ze();e=vt(e,t),e!==null&&(zr(e,t,n),De(e,n))}function Wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(e,n)}function Qp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),sd(e,n)}var ad;ad=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Lp(e,t,n);Me=!!(e.flags&131072)}else Me=!1,X&&t.flags&1048576&&fc(t,zl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;dl(e,t),e=t.pendingProps;var l=Tn(t,Ce.current);_n(t,n),l=us(null,t,r,e,l,n);var o=cs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,Cl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ls(t),l.updater=Kl,t.stateNode=l,l._reactInternals=t,gi(t,r,e,n),t=xi(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Ji(t),Ee(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(dl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Gp(r),e=et(r,e),l){case 0:t=vi(null,t,r,e,n);break e;case 1:t=Ra(null,t,r,e,n);break e;case 11:t=Da(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,et(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),vi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),Ra(e,t,r,l,n);case 3:e:{if(Wc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,vc(e,t),Il(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Rn(Error(w(423)),t),t=Fa(e,t,r,n,l);break e}else if(r!==l){l=Rn(Error(w(424)),t),t=Fa(e,t,r,n,l);break e}else for($e=Ot(t.stateNode.containerInfo.firstChild),Ae=t,X=!0,nt=null,n=gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===l){t=xt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return xc(t),e===null&&pi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ai(r,l)?i=null:o!==null&&ai(r,o)&&(t.flags|=32),Vc(e,t),Ee(e,t,i,n),t.child;case 6:return e===null&&pi(t),null;case 13:return Qc(e,t,n);case 4:return os(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),Da(e,t,r,l,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,Q(Pl,r._currentValue),r._currentValue=i,o!==null)if(ot(o.value,i)){if(o.children===l.children&&!Te.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ht(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var y=d.pending;y===null?a.next=a:(a.next=y.next,y.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mi(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),mi(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ee(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,_n(t,n),l=Ge(l),r=r(l),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,l=et(r,t.pendingProps),l=et(r.type,l),Oa(e,t,r,l,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),dl(e,t),t.tag=1,Le(r)?(e=!0,Cl(t)):e=!1,_n(t,n),Ac(t,r,l),gi(t,r,l,n),xi(null,t,r,!0,e,n);case 19:return Kc(e,t,n);case 22:return bc(e,t,n)}throw Error(w(156,t.tag))};function ud(e,t){return Ru(e,t)}function Kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Kp(e,t,n,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gp(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ai)return 11;if(e===Bi)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ml(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ws(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case mn:return en(n.children,l,o,t);case $i:i=8,l|=8;break;case Bo:return e=Qe(12,n,t,l|2),e.elementType=Bo,e.lanes=o,e;case Uo:return e=Qe(13,n,t,l),e.elementType=Uo,e.lanes=o,e;case Ho:return e=Qe(19,n,t,l),e.elementType=Ho,e.lanes=o,e;case xu:return Xl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yu:i=10;break e;case vu:i=9;break e;case Ai:i=11;break e;case Bi:i=14;break e;case Et:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Qe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Xl(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=xu,e.lanes=n,e.stateNode={isHidden:!1},e}function Fo(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function $o(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vo(0),this.expirationTimes=vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ks(e,t,n,r,l,o,i,s,a){return e=new Yp(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ls(o),e}function Xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cd(e){if(!e)return Ut;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Le(n))return cc(e,n,t)}return t}function dd(e,t,n,r,l,o,i,s,a){return e=ks(n,r,!0,e,l,o,i,s,a),e.context=cd(null),n=e.current,r=ze(),l=$t(n),o=ht(r,l),o.callback=t??null,Rt(n,o,l),e.current.lanes=l,zr(e,l,r),De(e,r),e}function Jl(e,t,n,r){var l=t.current,o=ze(),i=$t(l);return n=cd(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(l,t,i),e!==null&&(lt(e,l,i,o),al(e,l,i)),i}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ka(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ss(e,t){Ka(e,t),(e=e.alternate)&&Ka(e,t)}function Jp(){return null}var fd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ns(e){this._internalRoot=e}Zl.prototype.render=Ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Jl(e,t,null,null)};Zl.prototype.unmount=Ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Jl(null,e,null,null)}),t[yt]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Wu(e)}};function js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ga(){}function Zp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=$l(i);o.call(d)}}var i=dd(t,r,e,0,null,!1,!1,"",Ga);return e._reactRootContainer=i,e[yt]=i.current,yr(e.nodeType===8?e.parentNode:e),on(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=$l(a);s.call(d)}}var a=ks(e,0,!1,null,null,!1,!1,"",Ga);return e._reactRootContainer=a,e[yt]=a.current,yr(e.nodeType===8?e.parentNode:e),on(function(){Jl(t,a,n,r)}),a}function eo(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=$l(i);s.call(a)}}Jl(t,i,e,l)}else i=Zp(n,t,e,l,r);return $l(i)}Uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zn(t.pendingLanes);n!==0&&(bi(t,n|1),De(t,oe()),!(B&6)&&(Fn=oe()+500,Vt()))}break;case 13:on(function(){var r=vt(e,1);if(r!==null){var l=ze();lt(r,e,1,l)}}),Ss(e,1)}};Vi=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=ze();lt(t,e,134217728,n)}Ss(e,134217728)}};Hu=function(e){if(e.tag===13){var t=$t(e),n=vt(e,t);if(n!==null){var r=ze();lt(n,e,t,r)}Ss(e,t)}};bu=function(){return b};Vu=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Zo=function(e,t,n){switch(t){case"input":if(Wo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Vl(r);if(!l)throw Error(w(90));ku(r),Wo(r,l)}}}break;case"textarea":Nu(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};Iu=ys;Mu=on;var qp={usingClientEntryPoint:!1,Events:[_r,vn,Vl,Pu,_u,ys]},Yn={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},em={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||Jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Bl=nl.inject(em),ut=nl}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qp;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!js(t))throw Error(w(200));return Xp(e,t,null,n)};Ue.createRoot=function(e,t){if(!js(e))throw Error(w(299));var n=!1,r="",l=fd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ks(e,1,!1,null,null,n,!1,r,l),e[yt]=t.current,yr(e.nodeType===8?e.parentNode:e),new Ns(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Du(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return on(e)};Ue.hydrate=function(e,t,n){if(!ql(t))throw Error(w(200));return eo(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!js(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=fd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=dd(t,null,e,1,n??null,l,!1,o,i),e[yt]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Zl(t)};Ue.render=function(e,t,n){if(!ql(t))throw Error(w(200));return eo(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!ql(e))throw Error(w(40));return e._reactRootContainer?(on(function(){eo(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ue.unstable_batchedUpdates=ys;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return eo(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function pd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pd)}catch(e){console.error(e)}}pd(),pu.exports=Ue;var tm=pu.exports,md,Ya=tm;md=Ya.createRoot,Ya.hydrateRoot;const to="/claude",nm="https://stelle-972218119922.europe-west1.run.app/api",hd=nm;function rm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function lm(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`,n=await fetch(to,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})}),r=await n.json();if(!n.ok)throw new Error(r.error||"Claude CLI error");return r.text||"Nessun contenuto estratto."}async function Xa(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`,r=await fetch(to,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");return l.text||"Nessun contenuto estratto."}async function om(e,t,n){const r=e.map(y=>`### ${y.name}
${y.content}`).join(`

`);n&&n.length>0&&n.join(", ");const l=n&&n.length>0?n:["GitHub Trending","trendshift.io","Hacker News"],o=`Hai i seguenti segnali da pensatori tech/AI e la loro cross-synthesis:

SEGNALI:
${r}

SYNTHESIS:
${t}

Cerca i progetti, repository GitHub, tool e librerie più rilevanti ed emergenti legati ai temi trattati sopra.

REGOLE:
1. Includi tutti i progetti/repo citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 progetto: ${l.join(", ")}. Cerca su ciascuna fonte i progetti trending più correlati ai temi.
3. Per ogni progetto assegna due punteggi da 1 a 10:
   - "maturity": maturità del progetto (1=appena nato, 10=consolidato con grande community)
   - "momentum": quanto è caldo/discusso ora (1=stabile/silenzioso, 10=trending/virale)
4. Massimo 12 progetti totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido (nessun testo prima o dopo, nessun blocco markdown \`\`\`). Ogni elemento:
{"name": "nome-progetto", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,i=await fetch(to,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:o})}),s=await i.json();if(!i.ok)throw new Error(s.error||"Claude CLI error");const d=(s.text||"").trim().match(/\[[\s\S]*\]/);if(!d)throw new Error("Formato risposta non valido");return JSON.parse(d[0])}async function Ja(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
${e}

SINTESI ATTUALE:
${t}

Rispondi ESCLUSIVAMENTE con un JSON valido (nessun testo prima o dopo, nessun blocco markdown). Struttura:
{
  "emerging": [{"concept": "titolo breve", "who": ["Nome Persona"], "detail": "spiegazione in 1 frase"}],
  "disappeared": [{"concept": "titolo breve", "who": ["Nome Persona"], "detail": "spiegazione in 1 frase"}],
  "evolved": [{"concept": "titolo breve", "from": "come era prima", "to": "come è ora", "who": ["Nome Persona"]}],
  "stable": [{"concept": "titolo breve", "who": ["Nome Persona"]}],
  "tensions": [{"axis": "descrizione della tensione", "sides": ["Persona A: posizione", "Persona B: posizione"]}]
}

Regole:
- "emerging": concetti/temi NUOVI che non c'erano nella sintesi precedente
- "disappeared": concetti che c'erano prima e ora sono scomparsi
- "evolved": concetti presenti in entrambe ma che si sono trasformati
- "stable": concetti confermati e invariati
- "tensions": le polarità/dibattiti chiave tra pensatori
- Massimo 5 elementi per categoria
- In italiano`,r=await fetch(to,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");const i=(l.text||"").trim().match(/\{[\s\S]*\}/);if(!i)throw new Error("Formato risposta non valido");return JSON.parse(i[0])}let Za=!1;async function im(){if(Za)return;if(!(await fetch(`${hd}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");Za=!0}async function sm(e,t,n){await im();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${hd}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:d}=await o.read();if(a)break;s+=i.decode(d,{stream:!0});const y=s.split(`
`);s=y.pop()||"";let g="";for(const h of y)if(h.startsWith("event: "))g=h.slice(7).trim();else if(h.startsWith("data: ")&&g){try{const k=JSON.parse(h.slice(6));n(g,k)}catch{}g=""}}}function Zt(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function am(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function um(e,t){if(!e)return"";if(!t)return Zt(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>am(o,a)>.7),s=Zt(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function cm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const qa="​‌",eu="‌​";function dm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let g=1;g<=l;g++)for(let h=1;h<=o;h++)i[g][h]=n[g-1]===r[h-1]?i[g-1][h-1]+1:Math.max(i[g-1][h],i[g][h-1]);const s=[];let a=l,d=o;for(;a>0||d>0;)a>0&&d>0&&n[a-1]===r[d-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,d--):d>0&&(a===0||i[a][d-1]>=i[a-1][d])?(s.unshift({type:"added",text:r[d-1]}),d--):(s.unshift({type:"removed",text:n[a-1]}),a--);const y=[];for(const g of s)y.length>0&&y[y.length-1].type===g.type?y[y.length-1].text+=g.text:y.push({...g});return y}function tu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=qa+s.text+eu:l+=s.text);let o=Zt(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${qa}(.*?)${eu}`,"gs"),`<span class="${i}">$1</span>`),o}function fm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function pm(){const[e,t]=E.useState(!1),[n,r]=E.useState(-1),[l,o]=E.useState([]),i=E.useRef([]),s=E.useRef(null),a=E.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),d=E.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),y=E.useCallback(($,p=0)=>{speechSynthesis.cancel(),i.current=$.slice(p),o($);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=$.indexOf(m);r(x);const j=`${m.title}. ${fm(m.text)}`,S=new SpeechSynthesisUtterance(j);S.lang="it-IT",S.rate=1;const P=a();P&&(S.voice=P),S.onend=c,S.onerror=c,s.current=S,speechSynthesis.speak(S)};t(!0),c()},[a]),g=E.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=E.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),k=E.useCallback(()=>{speechSynthesis.cancel()},[]),N=E.useCallback(($,p,c,m)=>{const x=[];$&&x.push({title:"Cross-Synthesis",text:$,type:"synthesis"});for(const j of c)p[j.id]&&!p[j.id].startsWith("Errore")&&x.push({title:j.name,text:p[j.id],type:"thinker"});if(m&&m.length>0){const j=m.map(S=>{var P;return`${S.name}: ${S.description}${(P=S.citedBy)!=null&&P.length?`. Citato da ${S.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:j,type:"projects"})}y(x)},[y]),C=E.useCallback(($,p)=>{y([{title:$,text:p,type:"single"}])},[y]);return E.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:N,playSingle:C,pause:g,resume:h,stop:d,skipForward:k}}const mm=[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / Meta",active:!0},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Pratical AI",active:!0},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0}],hm=["trendshift.io","GitHub Trending","Hacker News"],gm=`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
`,ym=`
  ${gm}

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f5f4f0; }

  .dashboard {
    min-height: 100vh;
    background: #f5f4f0;
    color: #1a1a2e;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    line-height: 1.6;
  }

  .scanline {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #2563eb44, transparent);
    animation: scan 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 100;
  }
  @keyframes scan { 0% { top: 0; opacity: 1; } 100% { top: 100vh; opacity: 0; } }

  .header {
    background: #faf9f6;
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(8px);
    box-shadow: 0 1px 0 #e2ddd6;
    border-bottom: 1px solid #e2ddd6;
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
  .logo span { color: #2563eb; }

  .tagline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #9ca3af;
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
    color: #9ca3af;
  }

  /* Tab bar */
  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0 32px;
    border-top: 1px solid #e2ddd6;
  }

  .tab-btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 400;
    color: #9ca3af;
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
    color: #2563eb;
    border-bottom-color: #2563eb;
    font-weight: 500;
  }
  .tab-btn .tab-badge {
    font-size: 9px;
    background: #eff6ff;
    color: #2563eb;
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
  .btn-primary { background: #2563eb; color: #ffffff; border: 1px solid #1d4ed8; }
  .btn-primary:hover:not(:disabled) { background: #1d4ed8; }
  .btn-primary:disabled { opacity: 0.35; cursor: not-allowed; }
  .btn-synthesis { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
  .btn-synthesis:hover:not(:disabled) { background: #dcfce7; color: #15803d; }
  .btn-synthesis:disabled { opacity: 0.35; cursor: not-allowed; }
  .btn-small { padding: 4px 10px; font-size: 10px; }
  .btn-ghost { background: transparent; color: #6b7280; border: 1px solid #d1cdc7; }
  .btn-ghost:hover { color: #374151; border-color: #9ca3af; background: #f3f4f6; }

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
    border: 1px solid #e2ddd6;
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
    background: #faf9f6;
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
    color: #9ca3af;
    font-weight: 400;
    text-decoration: none;
  }
  .card-handle:hover { color: #2563eb; text-decoration: underline; }
  .card-domain {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #9ca3af;
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
  .card-body { padding: 18px 18px; }
  .card-content {
    font-size: 12.5px;
    color: #374151;
    line-height: 1.9;
    white-space: pre-wrap;
  }

  /* Links in cards and synthesis */
  .card-content a, .synthesis-body a {
    color: #2563eb;
    text-decoration: underline;
    text-decoration-color: #93c5fd;
    text-underline-offset: 2px;
  }
  .card-content a:hover, .synthesis-body a:hover {
    color: #1d4ed8;
    text-decoration-color: #2563eb;
  }

  .diff-unchanged { color: inherit; }
  .diff-new { color: #dc2626; font-weight: 500; }

  .synthesis-body a.thinker-link {
    color: #374151;
    text-decoration: underline;
    text-decoration-style: dotted;
    text-decoration-color: #9ca3af;
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
    color: #9ca3af;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    padding: 20px 0;
  }
  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid #e5e7eb;
    border-top-color: #f59e0b;
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
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .progress-bar { height: 2px; background: #e5e7eb; margin-bottom: 24px; border-radius: 1px; overflow: hidden; }
  .progress-fill { height: 100%; background: linear-gradient(90deg, #2563eb, #60a5fa); transition: width 0.3s ease; }

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 80px 20px;
    color: #9ca3af;
  }
  .empty-icon { font-size: 48px; margin-bottom: 16px; }
  .empty-title {
    font-family: 'Fraunces', serif;
    font-size: 18px;
    font-weight: 300;
    color: #6b7280;
    margin-bottom: 8px;
    font-style: italic;
  }
  .empty-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    line-height: 1.8;
    max-width: 400px;
    margin: 0 auto;
    color: #9ca3af;
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
  .history-select:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #bfdbfe55; }
  .history-select-locked {
    background: #faf8f4;
    color: #6b7280;
    cursor: default;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .history-vs {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }
  .diff-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .diff-panel {
    background: #ffffff;
    border: 1px solid #e2ddd6;
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
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }
  .diff-panel-date { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #6b7280; margin-bottom: 4px; }
  .diff-panel-thinkers { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: #9ca3af; margin-bottom: 14px; }
  .diff-panel-body { font-size: 13px; color: #1f2937; line-height: 1.85; white-space: pre-wrap; }
  .diff-word-removed { background: #fee2e2; color: #991b1b; text-decoration: line-through; text-decoration-color: #f87171; border-radius: 2px; padding: 0 2px; }
  .diff-word-added { background: #dcfce7; color: #166534; border-radius: 2px; padding: 0 2px; }
  /* Concept diff */
  .concept-diff {
    background: #ffffff;
    border: 1px solid #e2ddd6;
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
    color: #6b7280;
  }
  .concept-item-who {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #9ca3af;
    margin-top: 2px;
  }
  .concept-emerging { background: #f0fdf4; border-left: 3px solid #22c55e; }
  .concept-disappeared { background: #fef2f2; border-left: 3px solid #ef4444; }
  .concept-evolved { background: #fffbeb; border-left: 3px solid #f59e0b; }
  .concept-stable { background: #f9fafb; border-left: 3px solid #d1d5db; }
  .concept-tension { background: #faf5ff; border-left: 3px solid #7c3aed; }

  .concept-tabs {
    display: flex;
    gap: 2px;
    border-bottom: 1px solid #e2ddd6;
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
    color: #9ca3af;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .concept-tab:hover:not(.active) { color: #6b7280; }
  .concept-tab.active { color: #374151; border-bottom-color: currentColor; }
  .concept-tab-count {
    font-size: 9px;
    color: #9ca3af;
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
    color: #9ca3af;
  }

  .history-empty { text-align: center; padding: 60px 20px; color: #9ca3af; font-family: 'IBM Plex Mono', monospace; font-size: 12px; }

  /* Config tab */
  .config-section {
    margin-bottom: 32px;
  }
  .config-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #9ca3af;
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
    border: 1px solid #e2ddd6;
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
  .thinker-row.active .thinker-check { background: #2563eb; border-color: #2563eb; }
  .check-icon { width: 8px; height: 6px; fill: none; stroke: #ffffff; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .thinker-info { flex: 1; min-width: 0; }
  .thinker-name { font-size: 12px; color: #374151; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .thinker-row.active .thinker-name { color: #1d4ed8; }
  .thinker-meta { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: #9ca3af; margin-top: 1px; }
  .thinker-meta a { color: #9ca3af; text-decoration: none; }
  .thinker-meta a:hover { color: #2563eb; text-decoration: underline; }
  .thinker-status {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .thinker-status.loading { background: #f59e0b; animation: pulse-dot 1.5s ease infinite; }
  .thinker-status.done { background: #22c55e; }
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
  .input-field:focus { border-color: #2563eb; box-shadow: 0 0 0 2px #bfdbfe55; }
  .input-field::placeholder { color: #d1d5db; }

  .source-list { margin-bottom: 8px; }
  .source-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 14px;
    border: 1px solid #e2ddd6;
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
    border: 1px solid #e2ddd6;
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
    color: #2563eb;
    text-decoration: underline;
  }
  .project-source {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #9ca3af;
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
    color: #6b7280;
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
    color: #2563eb;
    padding: 2px 8px;
    border-radius: 10px;
  }

  /* Quadrant chart */
  .quadrant-container {
    background: #ffffff;
    border: 1px solid #e2ddd6;
    border-radius: 4px;
    padding: 24px 28px;
    margin-bottom: 24px;
  }
  .quadrant-title {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    color: #9ca3af;
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
    background: #faf9f6;
    border: 1px solid #e2ddd6;
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
  .about-logo span { color: #2563eb; }
  .about-tagline {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #9ca3af;
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
    color: #9ca3af;
    line-height: 1.8;
  }
  .about-footer a {
    color: #2563eb;
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
    color: #9ca3af;
  }
  .player-chapter strong { color: #ffffff; }

  /* Listen button on cards */
  .btn-listen {
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    font-size: 14px;
    padding: 2px 6px;
    border-radius: 3px;
  }
  .btn-listen:hover { color: #2563eb; background: #eff6ff; }

  .count-badge {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #6b7280;
    margin-top: 4px;
  }
`;function vm(){const[e,t]=E.useState(mm),[n,r]=E.useState({}),[l,o]=E.useState({}),[i,s]=E.useState({}),[a,d]=E.useState(null),[y,g]=E.useState("idle"),[h,k]=E.useState(!1),[N,C]=E.useState(""),[$,p]=E.useState(""),[c,m]=E.useState(null),[x,j]=E.useState(null),[S,P]=E.useState(8),[L,ee]=E.useState(!1),[_,ce]=E.useState([]),[kt,St]=E.useState(null),[Xe,Wt]=E.useState("signals"),[Oe,Un]=E.useState({leftIdx:1,rightIdx:0}),[z,R]=E.useState("emerging"),[T,Y]=E.useState([]),[V,Qt]=E.useState([]),[be,un]=E.useState(null),[Je,Nt]=E.useState("idle"),[jt,no]=E.useState(hm),[Cs,Es]=E.useState(""),[gd,ro]=E.useState(!1),[zs,yd]=E.useState(!1),[cn,vd]=E.useState(""),[Mr,Ps]=E.useState([]),[Tr,lo]=E.useState("idle"),[Lr,oo]=E.useState(null),[_s,Is]=E.useState(null),[Ms,io]=E.useState("idle"),so=E.useRef(null),de=pm(),[xd,wd]=E.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),fe=e.filter(f=>f.active),dn=Object.values(i).filter(f=>f==="done").length,ao=fe.length;E.useEffect(()=>{(async()=>{try{const f=await window.storage.get("signal-state");if(f){const v=JSON.parse(f.value);if(v.results){r(v.results);const M={};for(const D of Object.keys(v.results))M[D]=v.results[D].startsWith("Errore")?"error":"done";s(M)}if(v.prevResults&&o(v.prevResults),v.lastScanTime&&m(v.lastScanTime),v.intervalHours&&P(v.intervalHours),v.synthesis&&(d(v.synthesis),g("done")),v.synthesisHistory){const M=v.synthesisHistory.map((D,ie,le)=>{if(D.conceptDiff&&!D.conceptDiffs){const pe=le[ie+1],{conceptDiff:Ze,...Re}=D;return pe?{...Re,conceptDiffs:{[pe.id]:Ze}}:Re}return D});ce(M)}v.projects&&Y(v.projects),v.prevProjects&&Qt(v.prevProjects),v.projectsTime&&un(v.projectsTime),v.projectSources&&no(v.projectSources)}}catch{}})()},[]);const ye=E.useCallback(async(f={})=>{try{const v=await window.storage.get("signal-state"),D={...v?JSON.parse(v.value):{},...f};await window.storage.set("signal-state",JSON.stringify(D))}catch{}},[]);E.useCallback(async(f={})=>{await ye({results:n,prevResults:l,lastScanTime:c,intervalHours:S,synthesis:a,synthesisHistory:_,projects:T,prevProjects:V,projectsTime:be,projectSources:jt,...f})},[n,l,c,S,a,_,T,V,be,jt,ye]);const Dr=E.useCallback((f,v)=>v.length>0&&v[0].text===f?v:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:f,thinkers:fe.map(D=>D.name),conceptDiffs:{}},...v].slice(0,50),[fe]),Or=E.useCallback(async f=>{var D;if(f.length<2)return f;const v=f[0],M=f[1];if((D=v.conceptDiffs)!=null&&D[M.id])return f;try{const ie=await Ja(M.text,v.text),le=[...f];return le[0]={...le[0],conceptDiffs:{...le[0].conceptDiffs||{},[M.id]:ie}},ce(le),await ye({synthesisHistory:le}),le}catch(ie){return console.error("[concept-diff auto]",ie),f}},[ye]),Ts=E.useCallback(async(f,v)=>{try{await navigator.clipboard.writeText(f)}catch{const M=document.createElement("textarea");M.value=f,document.body.appendChild(M),M.select(),document.execCommand("copy"),document.body.removeChild(M)}St(v),setTimeout(()=>St(null),2e3)},[]);E.useCallback(async f=>{const v=_.filter(M=>M.id!==f);ce(v),await ye({synthesisHistory:v})},[_,ye]),E.useEffect(()=>{const f=()=>{if(!c){j(null);return}const D=c+S*3600*1e3-Date.now();if(D<=0){j("ora");return}const ie=Math.floor(D/36e5),le=Math.floor(D%36e5/6e4),pe=Math.floor(D%6e4/1e3);j(`${ie}h ${le}m ${pe}s`)};f();const v=setInterval(f,1e3);return()=>clearInterval(v)},[c,S]);const uo=E.useRef(null),Ls=E.useRef(null);E.useEffect(()=>{const f=setInterval(()=>{const v=new Date,M=v.getHours(),D=`${v.toDateString()}-${M}`;(M===5||M===17)&&Ls.current!==D&&uo.current&&!h&&(Ls.current=D,uo.current(!0))},6e4);return()=>clearInterval(f)},[h]);const kd=(f,v)=>{if(!f||!v)return 0;const M=new Set(f.toLowerCase().split(/\s+/)),D=new Set(v.toLowerCase().split(/\s+/));return[...M].filter(le=>D.has(le)).length/Math.max(M.size,D.size)},Ds=f=>!l[f]||!n[f]?!1:kd(l[f],n[f])<.72;fe.filter(f=>i[f.id]==="done"&&Ds(f.id)).length;const Os=e.length>0&&e.every(f=>f.active),Sd=()=>{h||t(f=>f.map(v=>({...v,active:!Os})))},co=()=>{N.trim()&&(t(f=>[...f,{id:Date.now(),name:N.trim(),handle:$.trim()||"@?",domain:"Custom",active:!0}]),C(""),p(""))},Rs=()=>{const f=Cs.trim();if(!f||jt.includes(f))return;const v=[...jt,f];no(v),Es(""),ye({projectSources:v})},Nd=f=>{const v=jt.filter(M=>M!==f);no(v),ye({projectSources:v})},[jd,Fs]=E.useState(null),Rr=E.useCallback(async(f,v)=>{Nt("loading"),Fs(null);try{const M=await om(v,f,jt);Qt(T),Y(M);const D=Date.now();un(D),Nt("done"),await ye({projects:M,prevProjects:T,projectsTime:D})}catch(M){console.error("[Signal.Brief] fetchProjects error:",M),Nt("error"),Fs(M.message)}},[jt,ye,T]),$s=2*3600*1e3,Fr=E.useCallback(async(f=!1)=>{if(fe.length===0)return;if(!f&&c&&Date.now()-c<$s){const F=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${F} minuti fa. Cache valida per ancora ${Math.round(($s-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}Wt("signals"),k(!0),d(null),g("idle"),o(F=>({...F,...n}));const v={...n},M={};fe.forEach(F=>{M[F.id]="loading"}),s(M),r({});const D={},ie=2,le=F=>new Promise(me=>setTimeout(me,F));for(let F=0;F<fe.length;F+=ie){const me=fe.slice(F,F+ie);await Promise.all(me.map(async ke=>{try{const te=await lm(ke);D[ke.id]=te,r(W=>({...W,[ke.id]:te})),s(W=>({...W,[ke.id]:"done"}))}catch(te){D[ke.id]=`Errore: ${te.message}`,r(W=>({...W,[ke.id]:`Errore: ${te.message}`})),s(W=>({...W,[ke.id]:"error"}))}})),F+ie<fe.length&&await le(1200)}const pe=rm(D),Ze=pe?Date.now():c;pe&&(m(Ze),wd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await ye({results:D,prevResults:v,lastScanTime:Ze,intervalHours:S,synthesis:a,synthesisHistory:_}),k(!1);const Re=fe.filter(F=>D[F.id]&&!D[F.id].startsWith("Errore")).map(F=>({name:F.name,domain:F.domain,content:D[F.id]}));if(Re.length>=2){g("loading");try{const F=await Xa(Re);d(F),g("done");const me=Dr(F,_);ce(me),await ye({results:D,prevResults:v,lastScanTime:Ze,intervalHours:S,synthesis:F,synthesisHistory:me}),Or(me),Rr(F,Re)}catch{g("error")}}},[fe,n,S,ye,a,_,Dr,c,Rr,Or]);E.useEffect(()=>{uo.current=Fr},[Fr]);const Cd=E.useCallback(async()=>{const f=fe.filter(v=>i[v.id]==="done").map(v=>({name:v.name,domain:v.domain,content:n[v.id]}));if(!(f.length<2)){g("loading");try{const v=await Xa(f);d(v),g("done");const M=Dr(v,_);ce(M),await ye({synthesis:v,synthesisHistory:M}),Or(M),Rr(v,f)}catch(v){d(`Errore nella sintesi: ${v.message}`),g("error")}}},[fe,i,n,ye,_,Dr,Rr,Or]),As=E.useCallback(async()=>{if(cn.trim()){Ps([]),oo(null),Is(null),lo("loading");try{await sm(cn,a,(f,v)=>{if(f==="session_started"&&v.session_id&&Is(v.session_id),f==="sage_speaks"&&v.content&&Ps(M=>[...M,{name:v.persona_name,icon:v.persona_icon,color:v.persona_color,content:v.content}]),f==="moderator_synthesis"&&v.content&&oo(v.content),f==="moderator"){const M=v.content||v.decision||v.synthesis||"";M&&oo(M)}}),lo("done")}catch(f){console.error("[council]",f),lo("error")}}},[cn,a]),Ed=dn>=2&&!h&&y!=="loading",Bs=Object.keys(n).length>0,$r="Disponibile solo in locale (richiede Claude CLI)",zd=fe.filter(f=>i[f.id]?L?i[f.id]==="done"&&Ds(f.id):!0:!1);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:ym}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>ro(!0),children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"tagline",children:"Intelligence Dashboard · AI-Powered"})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",xd]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Cd,disabled:!Ed||!0,title:$r,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!so.current){const v=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);v.onerror=()=>{v.src="/signal-brief/podcast/episodes/2026-04-12.mp3",v.play()},so.current=v}const f=so.current;f.paused?f.play():f.pause()},title:"Ascolta podcast",children:"🎙 Podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Fr(!0),disabled:h||fe.length===0||!0,title:$r,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Fr(!1),disabled:h||fe.length===0||!0,title:$r,children:h?`Scanning ${dn}/${ao}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${Xe==="signals"?"active":""}`,onClick:()=>Wt("signals"),children:["Segnali",dn>0&&u.jsx("span",{className:"tab-badge",children:dn})]}),u.jsxs("button",{className:`tab-btn ${Xe==="projects"?"active":""}`,onClick:()=>Wt("projects"),children:["Progetti",T.length>0&&u.jsx("span",{className:"tab-badge",children:T.length})]}),u.jsxs("button",{className:`tab-btn ${Xe==="history"?"active":""}`,onClick:()=>Wt("history"),children:["Cronologia",_.length>0&&u.jsx("span",{className:"tab-badge",children:_.length})]}),u.jsx("button",{className:`tab-btn ${Xe==="config"?"active":""}`,onClick:()=>Wt("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[Xe==="signals"&&u.jsxs(u.Fragment,{children:[h&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${ao>0?dn/ao*100:0}%`}})}),(a||y==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:y==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),y==="done"&&_.length>0&&u.jsx("span",{className:"timestamp",children:new Date(_[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),y==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>de.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>yd(f=>!f),title:"Chiedi ai thinkers",style:zs?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Ts(a,"synth"),children:kt==="synth"?"Copiato ✓":"Copia ❐"})]})]}),y==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:cm(_.length>1?um(a,_[1].text):Zt(a),fe)}}),zs&&y==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[_s?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${_s}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:cn,onChange:f=>vd(f.target.value),onKeyDown:f=>f.key==="Enter"&&As(),disabled:Tr==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:As,disabled:Tr==="loading"||!cn.trim(),children:Tr==="loading"?"In deliberazione…":"Chiedi"})]}),Mr.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Mr.map((f,v)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:f.color},children:[f.icon," ",f.name]}),u.jsx("div",{children:f.content})]},v))}),Lr&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const f=Mr.map(v=>`${v.name}: ${v.content}`).join(`

`)+`

Sintesi: `+Lr;de.playSingle("Deliberazione",f)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const f=`Domanda: ${cn}

`+Mr.map(v=>`${v.icon} ${v.name}:
${v.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Lr}`;Ts(f,"council")},children:kt==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:Zt(Lr)}})]}),Tr==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),Bs&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",dn," acquisiti"]})}),!Bs&&!h?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:zd.map(f=>{const v=i[f.id];return u.jsxs("div",{id:`thinker-${f.id}`,className:`card ${v}`,children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[f.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",children:f.handle})]}),u.jsx("div",{className:"card-domain",children:f.domain})]}),v==="done"&&u.jsx("button",{className:"btn-listen",onClick:()=>de.playSingle(f.name,n[f.id]),title:"Ascolta",children:"🔊"}),v==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),v==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),v==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"})]}),u.jsxs("div",{className:"card-body",children:[v==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),v==="done"&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:Zt(n[f.id])}}),v==="error"&&u.jsx("div",{className:"card-error",children:n[f.id]})]})]},f.id)})})]}),Xe==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",T.length>0&&` · ${T.length} trovati`]})}),Je==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),Je==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",jd||"errore sconosciuto"]}),T.length===0&&Je!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),T.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),be&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(be).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),T.some(f=>f.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),V.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),T.map((f,v)=>{const M=f.maturity!=null&&f.momentum!=null,D=Math.ceil(Math.sqrt(T.length)),ie=Math.floor(v/D),le=v%D,pe=M?f.maturity:2+le/Math.max(D-1,1)*7,Ze=M?f.momentum:8-ie/Math.max(Math.ceil(T.length/D)-1,1)*7,Re=50+(pe-1)/9*420,F=370-(Ze-1)/9*360,me=V.length>0&&!V.some(te=>te.name===f.name),ke=me?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:Re,cy:F,r:me?6:5,fill:ke,opacity:"0.85",stroke:me?"#fca5a5":"none",strokeWidth:me?2:0,onClick:()=>window.open(f.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:Re+9,y:F+3,style:{fontSize:f.name.length>18?"8px":"9px",fill:me?"#dc2626":"#374151",fontWeight:me?600:400},children:f.name.length>22?f.name.slice(0,20)+"…":f.name})]},v)})]})]}),T.length>0&&u.jsx("div",{className:"projects-grid",children:T.map((f,v)=>u.jsxs("div",{className:"project-card",style:V.length>0&&!V.some(M=>M.name===f.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",children:f.name}),V.length>0&&!V.some(M=>M.name===f.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.source&&u.jsx("span",{className:"project-source",children:f.source}),f.maturity&&f.momentum&&u.jsxs("span",{className:"project-source",children:["M:",f.maturity," · P:",f.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:f.description}),u.jsxs("div",{className:"project-footer",children:[f.citedBy&&f.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",f.citedBy.join(", ")]}),f.themes&&f.themes.length>0&&u.jsx("div",{className:"project-themes",children:f.themes.map((M,D)=>u.jsx("span",{className:"project-theme",children:M},D))})]})]},v))})]}),Xe==="history"&&u.jsx(u.Fragment,{children:_.length<2?u.jsxs("div",{className:"history-empty",children:[_.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",_.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(_[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Zt(_[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const f=Date.now(),v=864e5,M=f-7*v,D=f-21*v,ie=_.filter(O=>O.timestamp>=M),le=_.filter(O=>O.timestamp>=D&&O.timestamp<M),pe={};for(const O of le){const U=new Date(O.timestamp),ne=new Date(U);ne.setDate(ne.getDate()-ne.getDay());const H=ne.toISOString().slice(0,10);(!pe[H]||O.timestamp>pe[H].timestamp)&&(pe[H]=O)}const Ze=Object.values(pe).sort((O,U)=>U.timestamp-O.timestamp),Re=_.filter(O=>O.timestamp<D),F={};for(const O of Re){const U=new Date(O.timestamp),ne=new Date(U);ne.setDate(ne.getDate()-ne.getDay());const H=ne.toISOString().slice(0,10);(!F[H]||O.timestamp>F[H].timestamp)&&(F[H]=O)}const me=Object.values(F).sort((O,U)=>U.timestamp-O.timestamp),ke=(O,U,ne)=>O.length===0?null:u.jsx("optgroup",{label:U,children:O.map(H=>{const fo=_.indexOf(H),Ar=new Date(H.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),Pd=ne?`Sett. ${Ar.split(",")[0]} — ${H.thinkers.slice(0,3).join(", ")}${H.thinkers.length>3?` +${H.thinkers.length-3}`:""}`:`${Ar} — ${H.thinkers.slice(0,3).join(", ")}${H.thinkers.length>3?` +${H.thinkers.length-3}`:""}`;return u.jsx("option",{value:fo,children:Pd},H.id)})},U),te=_[0],W=te?`${new Date(te.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${te.thinkers.slice(0,3).join(", ")}${te.thinkers.length>3?` +${te.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Oe.leftIdx,onChange:O=>Un(U=>({...U,leftIdx:Number(O.target.value)})),children:[ke(ie,"Ultimi 7 giorni",!1),ke(Ze,"Ultime 3 settimane",!0),ke(me,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[W," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ke;const f=_[Oe.rightIdx],v=_[Oe.leftIdx];if(!f||!v||Oe.leftIdx===Oe.rightIdx)return null;const M=f.timestamp>=v.timestamp?f:v,D=M===f?v:f,ie=M===f?Oe.rightIdx:Oe.leftIdx,le=((ke=M.conceptDiffs)==null?void 0:ke[D.id])||null,pe=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],Ze=(te,W)=>{const O=te[W]||[];return O.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):W==="emerging"||W==="disappeared"?O.map((U,ne)=>{var H;return u.jsxs("div",{className:`concept-item concept-${W}`,children:[u.jsx("div",{className:"concept-item-title",children:U.concept}),u.jsx("div",{className:"concept-item-detail",children:U.detail}),((H=U.who)==null?void 0:H.length)>0&&u.jsx("div",{className:"concept-item-who",children:U.who.join(", ")})]},ne)}):W==="evolved"?O.map((U,ne)=>{var H;return u.jsxs("div",{className:"concept-item concept-evolved",children:[u.jsx("div",{className:"concept-item-title",children:U.concept}),u.jsxs("div",{className:"concept-item-detail",children:[U.from," → ",U.to]}),((H=U.who)==null?void 0:H.length)>0&&u.jsx("div",{className:"concept-item-who",children:U.who.join(", ")})]},ne)}):W==="stable"?O.map((U,ne)=>{var H;return u.jsxs("div",{className:"concept-item concept-stable",children:[u.jsx("div",{className:"concept-item-title",children:U.concept}),((H=U.who)==null?void 0:H.length)>0&&u.jsx("div",{className:"concept-item-who",children:U.who.join(", ")})]},ne)}):O.map((U,ne)=>{var H;return u.jsxs("div",{className:"concept-item concept-tension",children:[u.jsx("div",{className:"concept-item-title",children:U.axis}),(H=U.sides)==null?void 0:H.map((fo,Ar)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",fo]},Ar))]},ne)})},Re=te=>{const W=pe.find(O=>O.key===z)?z:"emerging";return pe.find(O=>O.key===W),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:pe.map(O=>{const U=(te[O.key]||[]).length,ne=O.key===W;return u.jsxs("button",{className:`concept-tab ${ne?"active":""}`,onClick:()=>R(O.key),style:ne?{color:O.color,borderBottomColor:O.color}:void 0,children:[u.jsxs("span",{children:[O.icon," ",O.label]}),u.jsx("span",{className:"concept-tab-count",children:U})]},O.key)})}),u.jsx("div",{className:"concept-tab-body",children:Ze(te,W)})]})};if(le)return Re(le);const F=Ms==="loading",me=Ms==="error";return u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,marginBottom:20},children:[u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:F||!0,title:$r,style:{display:"inline-flex",alignItems:"center",gap:8},onClick:async()=>{io("loading");try{const te=await Ja(D.text,M.text),W=[..._],O=W[ie].conceptDiffs||{};W[ie]={...W[ie],conceptDiffs:{...O,[D.id]:te}},ce(W),await ye({synthesisHistory:W}),io("done")}catch(te){console.error("[concept-diff]",te),io("error")}},children:[F&&u.jsx("span",{className:"spinner",style:{width:12,height:12,borderWidth:2,display:"inline-block"}}),F?"Analisi in corso…":"◈ Genera Concept Diff"]}),me&&u.jsx("div",{style:{fontSize:10,color:"#dc2626",fontFamily:"IBM Plex Mono,monospace"},children:"Errore generazione. Riprova."})]})})(),(()=>{const f=_[Oe.leftIdx],v=_[Oe.rightIdx];if(!f||!v)return null;const M=dm(f.text,v.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(f.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:f.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:tu(M,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(v.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:v.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:tu(M,"right")}})]})]})})()]})}),Xe==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",fe.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Sd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Os?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(f=>u.jsxs("div",{className:`thinker-row ${f.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:f.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:f.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:v=>v.stopPropagation(),children:f.handle})," · ",f.domain]})]}),u.jsx("div",{className:`thinker-status ${i[f.id]||""}`})]},f.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:N,disabled:!0,onChange:f=>C(f.target.value),onKeyDown:f=>f.key==="Enter"&&co(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:$,disabled:!0,onChange:f=>p(f.target.value),onKeyDown:f=>f.key==="Enter"&&co(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:co,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(f=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:S===f?"#eff6ff":"",color:S===f?"#2563eb":"",borderColor:S===f?"#bfdbfe":""},onClick:()=>{P(f),ye({intervalHours:f})},children:[f,"h"]},f)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:jt.map(f=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:f}),u.jsx("button",{className:"source-delete",onClick:()=>Nd(f),disabled:!0,children:"×"})]},f))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Cs,disabled:!0,onChange:f=>Es(f.target.value),onKeyDown:f=>f.key==="Enter"&&Rs(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Rs,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(de.isPlaying||de.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:de.isPlaying?de.pause:de.resume,children:de.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:de.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:de.currentChapter>=0&&de.chapters[de.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:de.chapters[de.currentChapter].title})," — ",de.currentChapter+1,"/",de.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:de.stop,title:"Stop",children:"⏹"})]}),gd&&u.jsx("div",{className:"about-backdrop",onClick:()=>ro(!1),children:u.jsxs("div",{className:"about-panel",onClick:f=>f.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsxs("div",{className:"about-logo",children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"about-tagline",children:"Intelligence Dashboard · AI-Powered"}),u.jsx("div",{className:"about-desc",children:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano."}),u.jsxs("div",{className:"about-footer",children:["Ideato da Mike · ",u.jsx("a",{href:"https://www.instagram.com/it.mikesoft",target:"_blank",rel:"noopener noreferrer",children:"MikeSoft"}),u.jsx("br",{}),"100% AI-generated · Made in Italy · 2026"]}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>ro(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};md(document.getElementById("root")).render(u.jsx(E.StrictMode,{children:u.jsx(vm,{})}));
