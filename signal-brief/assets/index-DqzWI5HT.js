(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var su={exports:{}},Vl={},au={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),Ld=Symbol.for("react.portal"),Dd=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),$d=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),bd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Ks=Symbol.iterator;function Hd(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cu=Object.assign,du={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=du,this.updater=n||uu}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fu(){}fu.prototype=Vn.prototype;function Ri(e,t,n){this.props=e,this.context=t,this.refs=du,this.updater=n||uu}var Ai=Ri.prototype=new fu;Ai.constructor=Ri;cu(Ai,Vn.prototype);Ai.isPureReactComponent=!0;var Gs=Array.isArray,pu=Object.prototype.hasOwnProperty,$i={current:null},mu={key:!0,ref:!0,__self:!0,__source:!0};function hu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)pu.call(t,r)&&!mu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Lr,type:e,key:o,ref:i,props:l,_owner:$i.current}}function Vd(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function Wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ys=/\/+/g;function vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wd(""+e.key):t.toString(36)}function al(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Lr:case Ld:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+vo(i,0):r,Gs(l)?(n="",e!=null&&(n=e.replace(Ys,"$&/")+"/"),al(l,t,n,"",function(d){return d})):l!=null&&(Fi(l)&&(l=Vd(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Ys,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Gs(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+vo(o,s);i+=al(o,t,n,a,l)}else if(a=Hd(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+vo(o,s++),i+=al(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Wr(e,t,n){if(e==null)return e;var r=[],l=0;return al(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},ul={transition:null},Kd={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:ul,ReactCurrentOwner:$i};function gu(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!Fi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Vn;B.Fragment=Dd;B.Profiler=Rd;B.PureComponent=Ri;B.StrictMode=Od;B.Suspense=Bd;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kd;B.act=gu;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=$i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)pu.call(t,a)&&!mu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Lr,type:e.type,key:l,ref:o,props:r,_owner:i}};B.createContext=function(e){return e={$$typeof:$d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ad,_context:e},e.Consumer=e};B.createElement=hu;B.createFactory=function(e){var t=hu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Fd,render:e}};B.isValidElement=Fi;B.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:Qd}};B.memo=function(e,t){return{$$typeof:bd,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=ul.transition;ul.transition={};try{e()}finally{ul.transition=t}};B.unstable_act=gu;B.useCallback=function(e,t){return Ie.current.useCallback(e,t)};B.useContext=function(e){return Ie.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ie.current.useEffect(e,t)};B.useId=function(){return Ie.current.useId()};B.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ie.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};B.useRef=function(e){return Ie.current.useRef(e)};B.useState=function(e){return Ie.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Ie.current.useTransition()};B.version="18.3.1";au.exports=B;var z=au.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd=z,Yd=Symbol.for("react.element"),Xd=Symbol.for("react.fragment"),Jd=Object.prototype.hasOwnProperty,qd=Gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Jd.call(t,r)&&!Zd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Yd,type:e,key:o,ref:i,props:l,_owner:qd.current}}Vl.Fragment=Xd;Vl.jsx=yu;Vl.jsxs=yu;su.exports=Vl;var u=su.exports,vu={exports:{}},We={},xu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,$){var L=P.length;P.push($);e:for(;0<L;){var J=L-1>>>1,Q=P[J];if(0<l(Q,$))P[J]=$,P[L]=Q,L=J;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],L=P.pop();if(L!==$){P[0]=L;e:for(var J=0,Q=P.length,qt=Q>>>1;J<qt;){var Ke=2*(J+1)-1,hn=P[Ke],tt=Ke+1,It=P[tt];if(0>l(hn,L))tt<Q&&0>l(It,hn)?(P[J]=It,P[tt]=L,J=tt):(P[J]=hn,P[Ke]=L,J=Ke);else if(tt<Q&&0>l(It,L))P[J]=It,P[tt]=L,J=tt;else break e}}return $}function l(P,$){var L=P.sortIndex-$.sortIndex;return L!==0?L:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],d=[],v=1,g=null,h=3,k=!1,N=!1,C=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var $=n(d);$!==null;){if($.callback===null)r(d);else if($.startTime<=P)r(d),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(d)}}function x(P){if(C=!1,m(P),!N)if(n(a)!==null)N=!0,$e(j);else{var $=n(d);$!==null&&Kn(x,$.startTime-P)}}function j(P,$){N=!1,C&&(C=!1,p(O),O=-1),k=!0;var L=h;try{for(m($),g=n(a);g!==null&&(!(g.expirationTime>$)||P&&!ge());){var J=g.callback;if(typeof J=="function"){g.callback=null,h=g.priorityLevel;var Q=J(g.expirationTime<=$);$=e.unstable_now(),typeof Q=="function"?g.callback=Q:g===n(a)&&r(a),m($)}else r(a);g=n(a)}if(g!==null)var qt=!0;else{var Ke=n(d);Ke!==null&&Kn(x,Ke.startTime-$),qt=!1}return qt}finally{g=null,h=L,k=!1}}var S=!1,I=null,O=-1,Z=5,M=-1;function ge(){return!(e.unstable_now()-M<Z)}function zt(){if(I!==null){var P=e.unstable_now();M=P;var $=!0;try{$=I(!0,P)}finally{$?Pt():(S=!1,I=null)}}else S=!1}var Pt;if(typeof c=="function")Pt=function(){c(zt)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,_t=et.port2;et.port1.onmessage=zt,Pt=function(){_t.postMessage(null)}}else Pt=function(){F(zt,0)};function $e(P){I=P,S||(S=!0,Pt())}function Kn(P,$){O=F(function(){P(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){N||k||(N=!0,$e(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var L=h;h=$;try{return P()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return $()}finally{h=L}},e.unstable_scheduleCallback=function(P,$,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,P){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=L+Q,P={id:v++,callback:$,priorityLevel:P,startTime:L,expirationTime:Q,sortIndex:-1},L>J?(P.sortIndex=L,t(d,P),n(a)===null&&P===n(d)&&(C?(p(O),O=-1):C=!0,Kn(x,L-J))):(P.sortIndex=Q,t(a,P),N||k||(N=!0,$e(j))),P},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(P){var $=h;return function(){var L=h;h=$;try{return P.apply(this,arguments)}finally{h=L}}}})(wu);xu.exports=wu;var ef=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf=z,Ve=ef;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ku=new Set,gr={};function pn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(gr[e]=t,e=0;e<t.length;e++)ku.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=Object.prototype.hasOwnProperty,nf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xs={},Js={};function rf(e){return Vo.call(Js,e)?!0:Vo.call(Xs,e)?!1:nf.test(e)?Js[e]=!0:(Xs[e]=!0,!1)}function lf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function of(e,t,n,r){if(t===null||typeof t>"u"||lf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bi,bi);ke[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bi,bi);ke[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bi,bi);ke[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ui(e,t,n,r){var l=ke.hasOwnProperty(t)?ke[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(of(t,n,l,r)&&(n=null),r||l===null?rf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Hi=Symbol.for("react.strict_mode"),Wo=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Nu=Symbol.for("react.context"),Vi=Symbol.for("react.forward_ref"),Qo=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),Wi=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),ju=Symbol.for("react.offscreen"),qs=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,xo;function rr(e){if(xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xo=t&&t[1]||""}return`
`+xo+e}var wo=!1;function ko(e,t){if(!e||wo)return"";wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function sf(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function Go(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case xn:return"Portal";case Wo:return"Profiler";case Hi:return"StrictMode";case Qo:return"Suspense";case Ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case Vi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wi:return t=e.displayName||null,t!==null?t:Go(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Go(e(t))}catch{}}return null}function af(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Go(t);case 8:return t===Hi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e){var t=Cu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=uf(e))}function Eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yo(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zu(e,t){t=t.checked,t!=null&&Ui(e,"checked",t,!1)}function Xo(e,t){zu(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jo(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ea(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jo(e,t,n){(t!=="number"||wl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var lr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ta(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(lr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Pu(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function na(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,Iu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cf=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(e){cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sr[t]=sr[e]})});function Tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sr.hasOwnProperty(e)&&sr[e]?(""+t).trim():t+"px"}function Mu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var df=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ei(e,t){if(t){if(df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ti(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ni=null;function Qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ri=null,Mn=null,Ln=null;function ra(e){if(e=Rr(e)){if(typeof ri!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Yl(t),ri(e.stateNode,e.type,t))}}function Lu(e){Mn?Ln?Ln.push(e):Ln=[e]:Mn=e}function Du(){if(Mn){var e=Mn,t=Ln;if(Ln=Mn=null,ra(e),t)for(e=0;e<t.length;e++)ra(t[e])}}function Ou(e,t){return e(t)}function Ru(){}var So=!1;function Au(e,t,n){if(So)return e(t,n);So=!0;try{return Ou(e,t,n)}finally{So=!1,(Mn!==null||Ln!==null)&&(Ru(),Du())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var li=!1;if(St)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){li=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{li=!1}function ff(e,t,n,r,l,o,i,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var ar=!1,kl=null,Sl=!1,oi=null,pf={onError:function(e){ar=!0,kl=e}};function mf(e,t,n,r,l,o,i,s,a){ar=!1,kl=null,ff.apply(pf,arguments)}function hf(e,t,n,r,l,o,i,s,a){if(mf.apply(this,arguments),ar){if(ar){var d=kl;ar=!1,kl=null}else throw Error(w(198));Sl||(Sl=!0,oi=d)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function la(e){if(mn(e)!==e)throw Error(w(188))}function gf(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return la(l),e;if(o===r)return la(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Fu(e){return e=gf(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bu(e);if(t!==null)return t;e=e.sibling}return null}var bu=Ve.unstable_scheduleCallback,oa=Ve.unstable_cancelCallback,yf=Ve.unstable_shouldYield,vf=Ve.unstable_requestPaint,ie=Ve.unstable_now,xf=Ve.unstable_getCurrentPriorityLevel,Ki=Ve.unstable_ImmediatePriority,Uu=Ve.unstable_UserBlockingPriority,Nl=Ve.unstable_NormalPriority,wf=Ve.unstable_LowPriority,Hu=Ve.unstable_IdlePriority,Wl=null,ht=null;function kf(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(Wl,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:jf,Sf=Math.log,Nf=Math.LN2;function jf(e){return e>>>=0,e===0?32:31-(Sf(e)/Nf|0)|0}var Yr=64,Xr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=or(s):(o&=i,o!==0&&(r=or(o)))}else i=n&~l,i!==0?r=or(i):o!==0&&(r=or(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function Cf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=Cf(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function ii(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function No(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function zf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function Wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qu,Yi,Ku,Gu,Yu,si=!1,Jr=[],Ft=null,Bt=null,bt=null,xr=new Map,wr=new Map,Ot=[],Pf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ia(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":xr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(t.pointerId)}}function Jn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Rr(t),t!==null&&Yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _f(e,t,n,r,l){switch(t){case"focusin":return Ft=Jn(Ft,e,t,n,r,l),!0;case"dragenter":return Bt=Jn(Bt,e,t,n,r,l),!0;case"mouseover":return bt=Jn(bt,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return xr.set(o,Jn(xr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,wr.set(o,Jn(wr.get(o)||null,e,t,n,r,l)),!0}return!1}function Xu(e){var t=tn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=$u(n),t!==null){e.blockedOn=t,Yu(e.priority,function(){Ku(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ni=r,n.target.dispatchEvent(r),ni=null}else return t=Rr(n),t!==null&&Yi(t),e.blockedOn=n,!1;t.shift()}return!0}function sa(e,t,n){cl(e)&&n.delete(t)}function If(){si=!1,Ft!==null&&cl(Ft)&&(Ft=null),Bt!==null&&cl(Bt)&&(Bt=null),bt!==null&&cl(bt)&&(bt=null),xr.forEach(sa),wr.forEach(sa)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,si||(si=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,If)))}function kr(e){function t(l){return qn(l,e)}if(0<Jr.length){qn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&qn(Ft,e),Bt!==null&&qn(Bt,e),bt!==null&&qn(bt,e),xr.forEach(t),wr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Xu(n),n.blockedOn===null&&Ot.shift()}var Dn=Et.ReactCurrentBatchConfig,Cl=!0;function Tf(e,t,n,r){var l=W,o=Dn.transition;Dn.transition=null;try{W=1,Xi(e,t,n,r)}finally{W=l,Dn.transition=o}}function Mf(e,t,n,r){var l=W,o=Dn.transition;Dn.transition=null;try{W=4,Xi(e,t,n,r)}finally{W=l,Dn.transition=o}}function Xi(e,t,n,r){if(Cl){var l=ai(e,t,n,r);if(l===null)Lo(e,t,r,El,n),ia(e,r);else if(_f(l,e,t,n,r))r.stopPropagation();else if(ia(e,r),t&4&&-1<Pf.indexOf(e)){for(;l!==null;){var o=Rr(l);if(o!==null&&Qu(o),o=ai(e,t,n,r),o===null&&Lo(e,t,r,El,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Lo(e,t,r,null,n)}}var El=null;function ai(e,t,n,r){if(El=null,e=Qi(r),e=tn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$u(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return El=e,null}function Ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xf()){case Ki:return 1;case Uu:return 4;case Nl:case wf:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var At=null,Ji=null,dl=null;function qu(){if(dl)return dl;var e,t=Ji,n=t.length,r,l="value"in At?At.value:At.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return dl=l.slice(e,1<r?1-r:void 0)}function fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function aa(){return!1}function Qe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qr:aa,this.isPropagationStopped=aa,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=Qe(Wn),Or=re({},Wn,{view:0,detail:0}),Lf=Qe(Or),jo,Co,Zn,Ql=re({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(jo=e.screenX-Zn.screenX,Co=e.screenY-Zn.screenY):Co=jo=0,Zn=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),ua=Qe(Ql),Df=re({},Ql,{dataTransfer:0}),Of=Qe(Df),Rf=re({},Or,{relatedTarget:0}),Eo=Qe(Rf),Af=re({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),$f=Qe(Af),Ff=re({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bf=Qe(Ff),bf=re({},Wn,{data:0}),ca=Qe(bf),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vf[e])?!!t[e]:!1}function Zi(){return Wf}var Qf=re({},Or,{key:function(e){if(e.key){var t=Uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zi,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kf=Qe(Qf),Gf=re({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),da=Qe(Gf),Yf=re({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zi}),Xf=Qe(Yf),Jf=re({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=Qe(Jf),Zf=re({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=Qe(Zf),tp=[9,13,27,32],es=St&&"CompositionEvent"in window,ur=null;St&&"documentMode"in document&&(ur=document.documentMode);var np=St&&"TextEvent"in window&&!ur,Zu=St&&(!es||ur&&8<ur&&11>=ur),fa=" ",pa=!1;function ec(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function rp(e,t){switch(e){case"compositionend":return tc(t);case"keypress":return t.which!==32?null:(pa=!0,fa);case"textInput":return e=t.data,e===fa&&pa?null:e;default:return null}}function lp(e,t){if(kn)return e==="compositionend"||!es&&ec(e,t)?(e=qu(),dl=Ji=At=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zu&&t.locale!=="ko"?null:t.data;default:return null}}var op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!op[e.type]:t==="textarea"}function nc(e,t,n,r){Lu(r),t=zl(t,"onChange"),0<t.length&&(n=new qi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var cr=null,Sr=null;function ip(e){pc(e,0)}function Kl(e){var t=jn(e);if(Eu(t))return e}function sp(e,t){if(e==="change")return t}var rc=!1;if(St){var zo;if(St){var Po="oninput"in document;if(!Po){var ha=document.createElement("div");ha.setAttribute("oninput","return;"),Po=typeof ha.oninput=="function"}zo=Po}else zo=!1;rc=zo&&(!document.documentMode||9<document.documentMode)}function ga(){cr&&(cr.detachEvent("onpropertychange",lc),Sr=cr=null)}function lc(e){if(e.propertyName==="value"&&Kl(Sr)){var t=[];nc(t,Sr,e,Qi(e)),Au(ip,t)}}function ap(e,t,n){e==="focusin"?(ga(),cr=t,Sr=n,cr.attachEvent("onpropertychange",lc)):e==="focusout"&&ga()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Sr)}function cp(e,t){if(e==="click")return Kl(t)}function dp(e,t){if(e==="input"||e==="change")return Kl(t)}function fp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:fp;function Nr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Vo.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function ya(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function va(e,t){var n=ya(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ya(n)}}function oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=wl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pp(e){var t=ic(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oc(n.ownerDocument.documentElement,n)){if(r!==null&&ts(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=va(n,o);var i=va(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=St&&"documentMode"in document&&11>=document.documentMode,Sn=null,ui=null,dr=null,ci=!1;function xa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||Sn==null||Sn!==wl(r)||(r=Sn,"selectionStart"in r&&ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),dr&&Nr(dr,r)||(dr=r,r=zl(ui,"onSelect"),0<r.length&&(t=new qi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},_o={},sc={};St&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Gl(e){if(_o[e])return _o[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sc)return _o[e]=t[n];return e}var ac=Gl("animationend"),uc=Gl("animationiteration"),cc=Gl("animationstart"),dc=Gl("transitionend"),fc=new Map,wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){fc.set(e,t),pn(t,[e])}for(var Io=0;Io<wa.length;Io++){var To=wa[Io],hp=To.toLowerCase(),gp=To[0].toUpperCase()+To.slice(1);Yt(hp,"on"+gp)}Yt(ac,"onAnimationEnd");Yt(uc,"onAnimationIteration");Yt(cc,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(dc,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));function ka(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hf(r,t,void 0,e),e.currentTarget=null}function pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;ka(l,s,d),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,d=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;ka(l,s,d),o=a}}}if(Sl)throw e=oi,Sl=!1,oi=null,e}function Y(e,t){var n=t[hi];n===void 0&&(n=t[hi]=new Set);var r=e+"__bubble";n.has(r)||(mc(t,e,2,!1),n.add(r))}function Mo(e,t,n){var r=0;t&&(r|=4),mc(n,e,r,t)}var el="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[el]){e[el]=!0,ku.forEach(function(n){n!=="selectionchange"&&(yp.has(n)||Mo(n,!1,e),Mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[el]||(t[el]=!0,Mo("selectionchange",!1,t))}}function mc(e,t,n,r){switch(Ju(t)){case 1:var l=Tf;break;case 4:l=Mf;break;default:l=Xi}n=l.bind(null,t,n,e),l=void 0,!li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Lo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=tn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Au(function(){var d=o,v=Qi(n),g=[];e:{var h=fc.get(e);if(h!==void 0){var k=qi,N=e;switch(e){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":k=Kf;break;case"focusin":N="focus",k=Eo;break;case"focusout":N="blur",k=Eo;break;case"beforeblur":case"afterblur":k=Eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Xf;break;case ac:case uc:case cc:k=$f;break;case dc:k=qf;break;case"scroll":k=Lf;break;case"wheel":k=ep;break;case"copy":case"cut":case"paste":k=Bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=da}var C=(t&4)!==0,F=!C&&e==="scroll",p=C?h!==null?h+"Capture":null:h;C=[];for(var c=d,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=vr(c,p),x!=null&&C.push(Cr(c,x,m)))),F)break;c=c.return}0<C.length&&(h=new k(h,N,null,n,v),g.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ni&&(N=n.relatedTarget||n.fromElement)&&(tn(N)||N[Nt]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=d,N=N?tn(N):null,N!==null&&(F=mn(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=d),k!==N)){if(C=ua,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=da,x="onPointerLeave",p="onPointerEnter",c="pointer"),F=k==null?h:jn(k),m=N==null?h:jn(N),h=new C(x,c+"leave",k,n,v),h.target=F,h.relatedTarget=m,x=null,tn(v)===d&&(C=new C(p,c+"enter",N,n,v),C.target=m,C.relatedTarget=F,x=C),F=x,k&&N)t:{for(C=k,p=N,c=0,m=C;m;m=vn(m))c++;for(m=0,x=p;x;x=vn(x))m++;for(;0<c-m;)C=vn(C),c--;for(;0<m-c;)p=vn(p),m--;for(;c--;){if(C===p||p!==null&&C===p.alternate)break t;C=vn(C),p=vn(p)}C=null}else C=null;k!==null&&Sa(g,h,k,C,!1),N!==null&&F!==null&&Sa(g,F,N,C,!0)}}e:{if(h=d?jn(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var j=sp;else if(ma(h))if(rc)j=dp;else{j=up;var S=ap}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=cp);if(j&&(j=j(e,d))){nc(g,j,n,v);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Jo(h,"number",h.value)}switch(S=d?jn(d):window,e){case"focusin":(ma(S)||S.contentEditable==="true")&&(Sn=S,ui=d,dr=null);break;case"focusout":dr=ui=Sn=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,xa(g,n,v);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":xa(g,n,v)}var I;if(es)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else kn?ec(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Zu&&n.locale!=="ko"&&(kn||O!=="onCompositionStart"?O==="onCompositionEnd"&&kn&&(I=qu()):(At=v,Ji="value"in At?At.value:At.textContent,kn=!0)),S=zl(d,O),0<S.length&&(O=new ca(O,e,null,n,v),g.push({event:O,listeners:S}),I?O.data=I:(I=tc(n),I!==null&&(O.data=I)))),(I=np?rp(e,n):lp(e,n))&&(d=zl(d,"onBeforeInput"),0<d.length&&(v=new ca("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:d}),v.data=I))}pc(g,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=vr(e,n),o!=null&&r.unshift(Cr(e,o,l)),o=vr(e,t),o!=null&&r.push(Cr(e,o,l))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=vr(n,o),a!=null&&i.unshift(Cr(n,a,s))):l||(a=vr(n,o),a!=null&&i.push(Cr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var vp=/\r\n?/g,xp=/\u0000|\uFFFD/g;function Na(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(xp,"")}function tl(e,t,n){if(t=Na(t),Na(e)!==t&&n)throw Error(w(425))}function Pl(){}var di=null,fi=null;function pi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mi=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,ja=typeof Promise=="function"?Promise:void 0,kp=typeof queueMicrotask=="function"?queueMicrotask:typeof ja<"u"?function(e){return ja.resolve(null).then(e).catch(Sp)}:mi;function Sp(e){setTimeout(function(){throw e})}function Do(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);kr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ca(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Qn,Er="__reactProps$"+Qn,Nt="__reactContainer$"+Qn,hi="__reactEvents$"+Qn,Np="__reactListeners$"+Qn,jp="__reactHandles$"+Qn;function tn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ca(e);e!==null;){if(n=e[mt])return n;e=Ca(e)}return t}e=n,n=e.parentNode}return null}function Rr(e){return e=e[mt]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Yl(e){return e[Er]||null}var gi=[],Cn=-1;function Xt(e){return{current:e}}function X(e){0>Cn||(e.current=gi[Cn],gi[Cn]=null,Cn--)}function K(e,t){Cn++,gi[Cn]=e.current,e.current=t}var Gt={},ze=Xt(Gt),Oe=Xt(!1),an=Gt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Gt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Re(e){return e=e.childContextTypes,e!=null}function _l(){X(Oe),X(ze)}function Ea(e,t,n){if(ze.current!==Gt)throw Error(w(168));K(ze,t),K(Oe,n)}function hc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,af(e)||"Unknown",l));return re({},n,r)}function Il(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,an=ze.current,K(ze,e),K(Oe,Oe.current),!0}function za(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=hc(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,X(Oe),X(ze),K(ze,e)):X(Oe),K(Oe,n)}var vt=null,Xl=!1,Oo=!1;function gc(e){vt===null?vt=[e]:vt.push(e)}function Cp(e){Xl=!0,gc(e)}function Jt(){if(!Oo&&vt!==null){Oo=!0;var e=0,t=W;try{var n=vt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,Xl=!1}catch(l){throw vt!==null&&(vt=vt.slice(e+1)),bu(Ki,Jt),l}finally{W=t,Oo=!1}}return null}var En=[],zn=0,Tl=null,Ml=0,Ge=[],Ye=0,un=null,xt=1,wt="";function Zt(e,t){En[zn++]=Ml,En[zn++]=Tl,Tl=e,Ml=t}function yc(e,t,n){Ge[Ye++]=xt,Ge[Ye++]=wt,Ge[Ye++]=un,un=e;var r=xt;e=wt;var l=32-at(r)-1;r&=~(1<<l),n+=1;var o=32-at(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,xt=1<<32-at(t)+l|n<<l|r,wt=o+e}else xt=1<<o|n<<l|r,wt=e}function ns(e){e.return!==null&&(Zt(e,1),yc(e,1,0))}function rs(e){for(;e===Tl;)Tl=En[--zn],En[zn]=null,Ml=En[--zn],En[zn]=null;for(;e===un;)un=Ge[--Ye],Ge[Ye]=null,wt=Ge[--Ye],Ge[Ye]=null,xt=Ge[--Ye],Ge[Ye]=null}var He=null,Ue=null,q=!1,st=null;function vc(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:xt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vi(e){if(q){var t=Ue;if(t){var n=t;if(!Pa(e,t)){if(yi(e))throw Error(w(418));t=Ut(n.nextSibling);var r=He;t&&Pa(e,t)?vc(r,n):(e.flags=e.flags&-4097|2,q=!1,He=e)}}else{if(yi(e))throw Error(w(418));e.flags=e.flags&-4097|2,q=!1,He=e}}}function _a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function nl(e){if(e!==He)return!1;if(!q)return _a(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pi(e.type,e.memoizedProps)),t&&(t=Ue)){if(yi(e))throw xc(),Error(w(418));for(;t;)vc(e,t),t=Ut(t.nextSibling)}if(_a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?Ut(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=Ue;e;)e=Ut(e.nextSibling)}function Fn(){Ue=He=null,q=!1}function ls(e){st===null?st=[e]:st.push(e)}var Ep=Et.ReactCurrentBatchConfig;function er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function rl(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ia(e){var t=e._init;return t(e._payload)}function wc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Qt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Uo(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var j=m.type;return j===wn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lt&&Ia(j)===c.type)?(x=l(c,m.props),x.ref=er(p,c,m),x.return=p,x):(x=xl(m.type,m.key,m.props,null,p.mode,x),x.ref=er(p,c,m),x.return=p,x)}function d(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Ho(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,j){return c===null||c.tag!==7?(c=sn(m,p.mode,x,j),c.return=p,c):(c=l(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Uo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return m=xl(c.type,c.key,c.props,null,p.mode,m),m.ref=er(p,null,c),m.return=p,m;case xn:return c=Ho(c,p.mode,m),c.return=p,c;case Lt:var x=c._init;return g(p,x(c._payload),m)}if(lr(c)||Yn(c))return c=sn(c,p.mode,m,null),c.return=p,c;rl(p,c)}return null}function h(p,c,m,x){var j=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:return m.key===j?a(p,c,m,x):null;case xn:return m.key===j?d(p,c,m,x):null;case Lt:return j=m._init,h(p,c,j(m._payload),x)}if(lr(m)||Yn(m))return j!==null?null:v(p,c,m,x,null);rl(p,m)}return null}function k(p,c,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,j);case xn:return p=p.get(x.key===null?m:x.key)||null,d(c,p,x,j);case Lt:var S=x._init;return k(p,c,m,S(x._payload),j)}if(lr(x)||Yn(x))return p=p.get(m)||null,v(c,p,x,j,null);rl(c,x)}return null}function N(p,c,m,x){for(var j=null,S=null,I=c,O=c=0,Z=null;I!==null&&O<m.length;O++){I.index>O?(Z=I,I=null):Z=I.sibling;var M=h(p,I,m[O],x);if(M===null){I===null&&(I=Z);break}e&&I&&M.alternate===null&&t(p,I),c=o(M,c,O),S===null?j=M:S.sibling=M,S=M,I=Z}if(O===m.length)return n(p,I),q&&Zt(p,O),j;if(I===null){for(;O<m.length;O++)I=g(p,m[O],x),I!==null&&(c=o(I,c,O),S===null?j=I:S.sibling=I,S=I);return q&&Zt(p,O),j}for(I=r(p,I);O<m.length;O++)Z=k(I,p,O,m[O],x),Z!==null&&(e&&Z.alternate!==null&&I.delete(Z.key===null?O:Z.key),c=o(Z,c,O),S===null?j=Z:S.sibling=Z,S=Z);return e&&I.forEach(function(ge){return t(p,ge)}),q&&Zt(p,O),j}function C(p,c,m,x){var j=Yn(m);if(typeof j!="function")throw Error(w(150));if(m=j.call(m),m==null)throw Error(w(151));for(var S=j=null,I=c,O=c=0,Z=null,M=m.next();I!==null&&!M.done;O++,M=m.next()){I.index>O?(Z=I,I=null):Z=I.sibling;var ge=h(p,I,M.value,x);if(ge===null){I===null&&(I=Z);break}e&&I&&ge.alternate===null&&t(p,I),c=o(ge,c,O),S===null?j=ge:S.sibling=ge,S=ge,I=Z}if(M.done)return n(p,I),q&&Zt(p,O),j;if(I===null){for(;!M.done;O++,M=m.next())M=g(p,M.value,x),M!==null&&(c=o(M,c,O),S===null?j=M:S.sibling=M,S=M);return q&&Zt(p,O),j}for(I=r(p,I);!M.done;O++,M=m.next())M=k(I,p,O,M.value,x),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?O:M.key),c=o(M,c,O),S===null?j=M:S.sibling=M,S=M);return e&&I.forEach(function(zt){return t(p,zt)}),q&&Zt(p,O),j}function F(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Qr:e:{for(var j=m.key,S=c;S!==null;){if(S.key===j){if(j=m.type,j===wn){if(S.tag===7){n(p,S.sibling),c=l(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Lt&&Ia(j)===S.type){n(p,S.sibling),c=l(S,m.props),c.ref=er(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===wn?(c=sn(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=xl(m.type,m.key,m.props,null,p.mode,x),x.ref=er(p,c,m),x.return=p,p=x)}return i(p);case xn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Ho(m,p.mode,x),c.return=p,p=c}return i(p);case Lt:return S=m._init,F(p,c,S(m._payload),x)}if(lr(m))return N(p,c,m,x);if(Yn(m))return C(p,c,m,x);rl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=Uo(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return F}var Bn=wc(!0),kc=wc(!1),Ll=Xt(null),Dl=null,Pn=null,os=null;function is(){os=Pn=Dl=null}function ss(e){var t=Ll.current;X(Ll),e._currentValue=t}function xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Dl=e,os=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(os!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Dl===null)throw Error(w(308));Pn=e,Dl.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var nn=null;function as(e){nn===null?nn=[e]:nn.push(e)}function Sc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,as(t)):(n.next=l.next,l.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,jt(e,n)}return l=r.interleaved,l===null?(t.next=t,as(r)):(t.next=l.next,l.next=t),r.interleaved=t,jt(e,n)}function pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gi(e,n)}}function Ta(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ol(e,t,n,r){var l=e.updateQueue;Dt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=a))}if(o!==null){var g=l.baseState;i=0,v=d=a=null,s=o;do{var h=s.lane,k=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(h=t,k=n,C.tag){case 1:if(N=C.payload,typeof N=="function"){g=N.call(k,g,h);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,h=typeof N=="function"?N.call(k,g,h):N,h==null)break e;g=re({},g,h);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=k,a=g):v=v.next=k,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(a=g),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);dn|=i,e.lanes=i,e.memoizedState=g}}function Ma(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Ar={},gt=Xt(Ar),zr=Xt(Ar),Pr=Xt(Ar);function rn(e){if(e===Ar)throw Error(w(174));return e}function cs(e,t){switch(K(Pr,t),K(zr,e),K(gt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zo(t,e)}X(gt),K(gt,t)}function bn(){X(gt),X(zr),X(Pr)}function jc(e){rn(Pr.current);var t=rn(gt.current),n=Zo(t,e.type);t!==n&&(K(zr,e),K(gt,n))}function ds(e){zr.current===e&&(X(gt),X(zr))}var te=Xt(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=[];function fs(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var ml=Et.ReactCurrentDispatcher,Ao=Et.ReactCurrentBatchConfig,cn=0,ne=null,ce=null,me=null,Al=!1,fr=!1,_r=0,zp=0;function je(){throw Error(w(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function ms(e,t,n,r,l,o){if(cn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ml.current=e===null||e.memoizedState===null?Tp:Mp,e=n(r,l),fr){o=0;do{if(fr=!1,_r=0,25<=o)throw Error(w(301));o+=1,me=ce=null,t.updateQueue=null,ml.current=Lp,e=n(r,l)}while(fr)}if(ml.current=$l,t=ce!==null&&ce.next!==null,cn=0,me=ce=ne=null,Al=!1,t)throw Error(w(300));return e}function hs(){var e=_r!==0;return _r=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=e:me=me.next=e,me}function Ze(){if(ce===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=me===null?ne.memoizedState:me.next;if(t!==null)me=t,ce=e;else{if(e===null)throw Error(w(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},me===null?ne.memoizedState=me=e:me=me.next=e}return me}function Ir(e,t){return typeof t=="function"?t(e):t}function $o(e){var t=Ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ce,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,d=o;do{var v=d.lane;if((cn&v)===v)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=g,i=r):a=a.next=g,ne.lanes|=v,dn|=v}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ne.lanes|=o,dn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fo(e){var t=Ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ct(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Cc(){}function Ec(e,t){var n=ne,r=Ze(),l=t(),o=!ct(r.memoizedState,l);if(o&&(r.memoizedState=l,De=!0),r=r.queue,gs(_c.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Tr(9,Pc.bind(null,n,r,l,t),void 0,null),he===null)throw Error(w(349));cn&30||zc(n,t,l)}return l}function zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pc(e,t,n,r){t.value=n,t.getSnapshot=r,Ic(t)&&Tc(e)}function _c(e,t,n){return n(function(){Ic(t)&&Tc(e)})}function Ic(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Tc(e){var t=jt(e,1);t!==null&&ut(t,e,1,-1)}function La(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Ip.bind(null,ne,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mc(){return Ze().memoizedState}function hl(e,t,n,r){var l=pt();ne.flags|=e,l.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function Jl(e,t,n,r){var l=Ze();r=r===void 0?null:r;var o=void 0;if(ce!==null){var i=ce.memoizedState;if(o=i.destroy,r!==null&&ps(r,i.deps)){l.memoizedState=Tr(t,n,o,r);return}}ne.flags|=e,l.memoizedState=Tr(1|t,n,o,r)}function Da(e,t){return hl(8390656,8,e,t)}function gs(e,t){return Jl(2048,8,e,t)}function Lc(e,t){return Jl(4,2,e,t)}function Dc(e,t){return Jl(4,4,e,t)}function Oc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,Jl(4,4,Oc.bind(null,t,e),n)}function ys(){}function Ac(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $c(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fc(e,t,n){return cn&21?(ct(n,t)||(n=Vu(),ne.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Pp(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),t()}finally{W=n,Ao.transition=r}}function Bc(){return Ze().memoizedState}function _p(e,t,n){var r=Wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bc(e))Uc(t,n);else if(n=Sc(e,t,n,r),n!==null){var l=_e();ut(n,e,r,l),Hc(n,t,r)}}function Ip(e,t,n){var r=Wt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bc(e))Uc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(l.next=l,as(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Sc(e,t,l,r),n!==null&&(l=_e(),ut(n,e,r,l),Hc(n,t,r))}}function bc(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Uc(e,t){fr=Al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gi(e,n)}}var $l={readContext:qe,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Tp={readContext:qe,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Da,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hl(4194308,4,Oc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hl(4194308,4,e,t)},useInsertionEffect:function(e,t){return hl(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_p.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:La,useDebugValue:ys,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=Pp.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,l=pt();if(q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),he===null)throw Error(w(349));cn&30||zc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Da(_c.bind(null,r,o,e),[e]),r.flags|=2048,Tr(9,Pc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=pt(),t=he.identifierPrefix;if(q){var n=wt,r=xt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:qe,useCallback:Ac,useContext:qe,useEffect:gs,useImperativeHandle:Rc,useInsertionEffect:Lc,useLayoutEffect:Dc,useMemo:$c,useReducer:$o,useRef:Mc,useState:function(){return $o(Ir)},useDebugValue:ys,useDeferredValue:function(e){var t=Ze();return Fc(t,ce.memoizedState,e)},useTransition:function(){var e=$o(Ir)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Cc,useSyncExternalStore:Ec,useId:Bc,unstable_isNewReconciler:!1},Lp={readContext:qe,useCallback:Ac,useContext:qe,useEffect:gs,useImperativeHandle:Rc,useInsertionEffect:Lc,useLayoutEffect:Dc,useMemo:$c,useReducer:Fo,useRef:Mc,useState:function(){return Fo(Ir)},useDebugValue:ys,useDeferredValue:function(e){var t=Ze();return ce===null?t.memoizedState=e:Fc(t,ce.memoizedState,e)},useTransition:function(){var e=Fo(Ir)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Cc,useSyncExternalStore:Ec,useId:Bc,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function wi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ql={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),l=Wt(e),o=kt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,l),t!==null&&(ut(t,e,l,r),pl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),l=Wt(e),o=kt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ht(e,o,l),t!==null&&(ut(t,e,l,r),pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Wt(e),l=kt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ht(e,l,r),t!==null&&(ut(t,e,r,n),pl(t,e,r))}};function Oa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(l,o):!0}function Vc(e,t,n){var r=!1,l=Gt,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(l=Re(t)?an:ze.current,r=t.contextTypes,o=(r=r!=null)?$n(e,l):Gt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ra(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ql.enqueueReplaceState(t,t.state,null)}function ki(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},us(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=qe(o):(o=Re(t)?an:ze.current,l.context=$n(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ql.enqueueReplaceState(l,l.state,null),Ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=sf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Si(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dp=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,Mi=r),Si(e,t)},n}function Qc(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Si(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Si(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Aa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Gp.bind(null,e,t,n),t.then(e,e))}function $a(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var Op=Et.ReactCurrentOwner,De=!1;function Pe(e,t,n,r){t.child=e===null?kc(t,null,n,r):Bn(t,e.child,n,r)}function Ba(e,t,n,r,l){n=n.render;var o=t.ref;return On(t,l),r=ms(e,t,n,r,o,l),n=hs(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ct(e,t,l)):(q&&n&&ns(t),t.flags|=1,Pe(e,t,r,l),t.child)}function ba(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Cs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kc(e,t,o,r,l)):(e=xl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(i,r)&&e.ref===t.ref)return Ct(e,t,l)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Nr(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Ct(e,t,l)}return Ni(e,t,n,r,l)}function Gc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(In,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(In,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,K(In,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,K(In,be),be|=r;return Pe(e,t,l,n),t.child}function Yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ni(e,t,n,r,l){var o=Re(n)?an:ze.current;return o=$n(t,o),On(t,l),n=ms(e,t,n,r,o,l),r=hs(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ct(e,t,l)):(q&&r&&ns(t),t.flags|=1,Pe(e,t,n,l),t.child)}function Ua(e,t,n,r,l){if(Re(n)){var o=!0;Il(t)}else o=!1;if(On(t,l),t.stateNode===null)gl(e,t),Vc(t,n,r),ki(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=qe(d):(d=Re(n)?an:ze.current,d=$n(t,d));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Ra(t,i,r,d),Dt=!1;var h=t.memoizedState;i.state=h,Ol(t,r,i,l),a=t.memoizedState,s!==r||h!==a||Oe.current||Dt?(typeof v=="function"&&(wi(t,n,v,r),a=t.memoizedState),(s=Dt||Oa(t,n,s,r,h,a,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Nc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ot(t.type,s),i.props=d,g=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Re(n)?an:ze.current,a=$n(t,a));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||h!==a)&&Ra(t,i,r,a),Dt=!1,h=t.memoizedState,i.state=h,Ol(t,r,i,l);var N=t.memoizedState;s!==g||h!==N||Oe.current||Dt?(typeof k=="function"&&(wi(t,n,k,r),N=t.memoizedState),(d=Dt||Oa(t,n,d,r,h,N,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ji(e,t,n,r,o,l)}function ji(e,t,n,r,l,o){Yc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&za(t,n,!1),Ct(e,t,o);r=t.stateNode,Op.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,s,o)):Pe(e,t,s,o),t.memoizedState=r.state,l&&za(t,n,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?Ea(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ea(e,t.context,!1),cs(e,t.containerInfo)}function Ha(e,t,n,r,l){return Fn(),ls(l),t.flags|=256,Pe(e,t,n,r),t.child}var Ci={dehydrated:null,treeContext:null,retryLane:0};function Ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jc(e,t,n){var r=t.pendingProps,l=te.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),K(te,l&1),e===null)return vi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=to(i,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ei(n),t.memoizedState=Ci,e):vs(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Rp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Qt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Qt(s,o):(o=sn(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ei(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Ci,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vs(e,t){return t=to({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ll(e,t,n,r){return r!==null&&ls(r),Bn(t,e.child,null,n),e=vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Rp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Bo(Error(w(422))),ll(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=to({mode:"visible",children:r.children},l,0,null),o=sn(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,i),t.child.memoizedState=Ei(i),t.memoizedState=Ci,o);if(!(t.mode&1))return ll(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Bo(o,r,void 0),ll(e,t,i,r)}if(s=(i&e.childLanes)!==0,De||s){if(r=he,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,jt(e,l),ut(r,e,l,-1))}return js(),r=Bo(Error(w(421))),ll(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ue=Ut(l.nextSibling),He=t,q=!0,st=null,e!==null&&(Ge[Ye++]=xt,Ge[Ye++]=wt,Ge[Ye++]=un,xt=e.id,wt=e.overflow,un=t),t=vs(t,r.children),t.flags|=4096,t)}function Va(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xi(e.return,t,n)}function bo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function qc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Pe(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Va(e,n,t);else if(e.tag===19)Va(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(te,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Rl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),bo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}bo(t,!0,n,null,o);break;case"together":bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ap(e,t,n){switch(t.tag){case 3:Xc(t),Fn();break;case 5:jc(t);break;case 1:Re(t.type)&&Il(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;K(Ll,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Jc(e,t,n):(K(te,te.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);K(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Gc(e,t,n)}return Ct(e,t,n)}var Zc,zi,ed,td;Zc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zi=function(){};ed=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,rn(gt.current);var o=null;switch(n){case"input":l=Yo(e,l),r=Yo(e,r),o=[];break;case"select":l=re({},l,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":l=qo(e,l),r=qo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pl)}ei(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(gr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(gr.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&Y("scroll",e),o||s===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};td=function(e,t,n,r){n!==r&&(t.flags|=4)};function tr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $p(e,t,n){var r=t.pendingProps;switch(rs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Re(t.type)&&_l(),Ce(t),null;case 3:return r=t.stateNode,bn(),X(Oe),X(ze),fs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Oi(st),st=null))),zi(e,t),Ce(t),null;case 5:ds(t);var l=rn(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return Ce(t),null}if(e=rn(gt.current),nl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mt]=t,r[Er]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(l=0;l<ir.length;l++)Y(ir[l],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Zs(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":ta(r,o),Y("invalid",r)}ei(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&tl(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&tl(r.textContent,s,e),l=["children",""+s]):gr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Y("scroll",r)}switch(n){case"input":Kr(r),ea(r,o,!0);break;case"textarea":Kr(r),na(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Pl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[mt]=t,e[Er]=r,Zc(e,t,!1,!1),t.stateNode=e;e:{switch(i=ti(n,r),n){case"dialog":Y("cancel",e),Y("close",e),l=r;break;case"iframe":case"object":case"embed":Y("load",e),l=r;break;case"video":case"audio":for(l=0;l<ir.length;l++)Y(ir[l],e);l=r;break;case"source":Y("error",e),l=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),l=r;break;case"details":Y("toggle",e),l=r;break;case"input":Zs(e,r),l=Yo(e,r),Y("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=re({},r,{value:void 0}),Y("invalid",e);break;case"textarea":ta(e,r),l=qo(e,r),Y("invalid",e);break;default:l=r}ei(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Mu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Iu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&yr(e,a):typeof a=="number"&&yr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(gr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Y("scroll",e):a!=null&&Ui(e,o,a,i))}switch(n){case"input":Kr(e),ea(e,r,!1);break;case"textarea":Kr(e),na(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=rn(Pr.current),rn(gt.current),nl(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:tl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ce(t),null;case 13:if(X(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ue!==null&&t.mode&1&&!(t.flags&128))xc(),Fn(),t.flags|=98560,o=!1;else if(o=nl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[mt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else st!==null&&(Oi(st),st=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?de===0&&(de=3):js())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return bn(),zi(e,t),e===null&&jr(t.stateNode.containerInfo),Ce(t),null;case 10:return ss(t.type._context),Ce(t),null;case 17:return Re(t.type)&&_l(),Ce(t),null;case 19:if(X(te),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)tr(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Rl(e),i!==null){for(t.flags|=128,tr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Hn&&(t.flags|=128,r=!0,tr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Rl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),tr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!q)return Ce(t),null}else 2*ie()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,tr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=te.current,K(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ns(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Fp(e,t){switch(rs(t),t.tag){case 1:return Re(t.type)&&_l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),X(Oe),X(ze),fs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ds(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return bn(),null;case 10:return ss(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var ol=!1,Ee=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,T=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Pi(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Wa=!1;function bp(e,t){if(di=Cl,e=ic(),ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,d=0,v=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(a=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++v===r&&(a=i),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fi={focusedElem:e,selectionRange:n},Cl=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,F=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:ot(t.type,C),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){oe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return N=Wa,Wa=!1,N}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Pi(t,n,o)}l=l.next}while(l!==r)}}function Zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function _i(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Er],delete t[hi],delete t[Np],delete t[jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function Qa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Pl));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Ti(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ti(e,t,n),e=e.sibling;e!==null;)Ti(e,t,n),e=e.sibling}var xe=null,it=!1;function Mt(e,t,n){for(n=n.child;n!==null;)ld(e,t,n),n=n.sibling}function ld(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Ee||_n(n,t);case 6:var r=xe,l=it;xe=null,Mt(e,t,n),xe=r,it=l,xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?Do(e.parentNode,n):e.nodeType===1&&Do(e,n),kr(e)):Do(xe,n.stateNode));break;case 4:r=xe,l=it,xe=n.stateNode.containerInfo,it=!0,Mt(e,t,n),xe=r,it=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Pi(n,t,i),l=l.next}while(l!==r)}Mt(e,t,n);break;case 1:if(!Ee&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Mt(e,t,n),Ee=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function Ka(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bp),t.forEach(function(r){var l=Xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,it=!1;break e;case 3:xe=s.stateNode.containerInfo,it=!0;break e;case 4:xe=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(xe===null)throw Error(w(160));ld(o,i,l),xe=null,it=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){oe(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),ft(e),r&4){try{pr(3,e,e.return),Zl(3,e)}catch(C){oe(e,e.return,C)}try{pr(5,e,e.return)}catch(C){oe(e,e.return,C)}}break;case 1:lt(t,e),ft(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(lt(t,e),ft(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var l=e.stateNode;try{yr(l,"")}catch(C){oe(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&zu(l,o),ti(s,i);var d=ti(s,o);for(i=0;i<a.length;i+=2){var v=a[i],g=a[i+1];v==="style"?Mu(l,g):v==="dangerouslySetInnerHTML"?Iu(l,g):v==="children"?yr(l,g):Ui(l,v,g,d)}switch(s){case"input":Xo(l,o);break;case"textarea":Pu(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Tn(l,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?Tn(l,!!o.multiple,o.defaultValue,!0):Tn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Er]=o}catch(C){oe(e,e.return,C)}}break;case 6:if(lt(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(C){oe(e,e.return,C)}}break;case 3:if(lt(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(C){oe(e,e.return,C)}break;case 4:lt(t,e),ft(e);break;case 13:lt(t,e),ft(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ks=ie())),r&4&&Ka(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(d=Ee)||v,lt(t,e),Ee=d):lt(t,e),ft(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(g=T=v;T!==null;){switch(h=T,k=h.child,h.tag){case 0:case 11:case 14:case 15:pr(4,h,h.return);break;case 1:_n(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(C){oe(r,n,C)}}break;case 5:_n(h,h.return);break;case 22:if(h.memoizedState!==null){Ya(g);continue}}k!==null?(k.return=h,T=k):Ya(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,a=g.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Tu("display",i))}catch(C){oe(e,e.return,C)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(C){oe(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:lt(t,e),ft(e),r&4&&Ka(e);break;case 21:break;default:lt(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(yr(l,""),r.flags&=-33);var o=Qa(e);Ti(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=Qa(e);Ii(e,s,i);break;default:throw Error(w(161))}}catch(a){oe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e,t,n){T=e,id(e)}function id(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||ol;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=ol;var d=Ee;if(ol=i,(Ee=a)&&!d)for(T=l;T!==null;)i=T,a=i.child,i.tag===22&&i.memoizedState!==null?Xa(l):a!==null?(a.return=i,T=a):Xa(l);for(;o!==null;)T=o,id(o),o=o.sibling;T=l,ol=s,Ee=d}Ga(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):Ga(e)}}function Ga(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ma(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ma(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&kr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||t.flags&512&&_i(t)}catch(h){oe(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Ya(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Xa(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zl(4,t)}catch(a){oe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){oe(t,l,a)}}var o=t.return;try{_i(t)}catch(a){oe(t,o,a)}break;case 5:var i=t.return;try{_i(t)}catch(a){oe(t,i,a)}}}catch(a){oe(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Hp=Math.ceil,Fl=Et.ReactCurrentDispatcher,xs=Et.ReactCurrentOwner,Je=Et.ReactCurrentBatchConfig,U=0,he=null,se=null,we=0,be=0,In=Xt(0),de=0,Mr=null,dn=0,eo=0,ws=0,mr=null,Le=null,ks=0,Hn=1/0,yt=null,Bl=!1,Mi=null,Vt=null,il=!1,$t=null,bl=0,hr=0,Li=null,yl=-1,vl=0;function _e(){return U&6?ie():yl!==-1?yl:yl=ie()}function Wt(e){return e.mode&1?U&2&&we!==0?we&-we:Ep.transition!==null?(vl===0&&(vl=Vu()),vl):(e=W,e!==0||(e=window.event,e=e===void 0?16:Ju(e.type)),e):1}function ut(e,t,n,r){if(50<hr)throw hr=0,Li=null,Error(w(185));Dr(e,n,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(eo|=n),de===4&&Rt(e,we)),Ae(e,r),n===1&&U===0&&!(t.mode&1)&&(Hn=ie()+500,Xl&&Jt()))}function Ae(e,t){var n=e.callbackNode;Ef(e,t);var r=jl(e,e===he?we:0);if(r===0)n!==null&&oa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oa(n),t===1)e.tag===0?Cp(Ja.bind(null,e)):gc(Ja.bind(null,e)),kp(function(){!(U&6)&&Jt()}),n=null;else{switch(Wu(r)){case 1:n=Ki;break;case 4:n=Uu;break;case 16:n=Nl;break;case 536870912:n=Hu;break;default:n=Nl}n=md(n,sd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sd(e,t){if(yl=-1,vl=0,U&6)throw Error(w(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=jl(e,e===he?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ul(e,r);else{t=r;var l=U;U|=2;var o=ud();(he!==e||we!==t)&&(yt=null,Hn=ie()+500,on(e,t));do try{Qp();break}catch(s){ad(e,s)}while(!0);is(),Fl.current=o,U=l,se!==null?t=0:(he=null,we=0,t=de)}if(t!==0){if(t===2&&(l=ii(e),l!==0&&(r=l,t=Di(e,l))),t===1)throw n=Mr,on(e,0),Rt(e,r),Ae(e,ie()),n;if(t===6)Rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Vp(l)&&(t=Ul(e,r),t===2&&(o=ii(e),o!==0&&(r=o,t=Di(e,o))),t===1))throw n=Mr,on(e,0),Rt(e,r),Ae(e,ie()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:en(e,Le,yt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=ks+500-ie(),10<t)){if(jl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=mi(en.bind(null,e,Le,yt),t);break}en(e,Le,yt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-at(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=mi(en.bind(null,e,Le,yt),r);break}en(e,Le,yt);break;case 5:en(e,Le,yt);break;default:throw Error(w(329))}}}return Ae(e,ie()),e.callbackNode===n?sd.bind(null,e):null}function Di(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Ul(e,t),e!==2&&(t=Le,Le=n,t!==null&&Oi(t)),e}function Oi(e){Le===null?Le=e:Le.push.apply(Le,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~ws,t&=~eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function Ja(e){if(U&6)throw Error(w(327));Rn();var t=jl(e,0);if(!(t&1))return Ae(e,ie()),null;var n=Ul(e,t);if(e.tag!==0&&n===2){var r=ii(e);r!==0&&(t=r,n=Di(e,r))}if(n===1)throw n=Mr,on(e,0),Rt(e,t),Ae(e,ie()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Le,yt),Ae(e,ie()),null}function Ss(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Hn=ie()+500,Xl&&Jt())}}function fn(e){$t!==null&&$t.tag===0&&!(U&6)&&Rn();var t=U;U|=1;var n=Je.transition,r=W;try{if(Je.transition=null,W=1,e)return e()}finally{W=r,Je.transition=n,U=t,!(U&6)&&Jt()}}function Ns(){be=In.current,X(In)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wp(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_l();break;case 3:bn(),X(Oe),X(ze),fs();break;case 5:ds(r);break;case 4:bn();break;case 13:X(te);break;case 19:X(te);break;case 10:ss(r.type._context);break;case 22:case 23:Ns()}n=n.return}if(he=e,se=e=Qt(e.current,null),we=be=t,de=0,Mr=null,ws=eo=dn=0,Le=mr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}nn=null}return e}function ad(e,t){do{var n=se;try{if(is(),ml.current=$l,Al){for(var r=ne.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Al=!1}if(cn=0,me=ce=ne=null,fr=!1,_r=0,xs.current=null,n===null||n.return===null){de=1,Mr=t,se=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=we,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,v=s,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=$a(i);if(k!==null){k.flags&=-257,Fa(k,i,s,o,t),k.mode&1&&Aa(o,d,t),t=k,a=d;var N=t.updateQueue;if(N===null){var C=new Set;C.add(a),t.updateQueue=C}else N.add(a);break e}else{if(!(t&1)){Aa(o,d,t),js();break e}a=Error(w(426))}}else if(q&&s.mode&1){var F=$a(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Fa(F,i,s,o,t),ls(Un(a,s));break e}}o=a=Un(a,s),de!==4&&(de=2),mr===null?mr=[o]:mr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Wc(o,a,t);Ta(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Qc(o,s,t);Ta(o,x);break e}}o=o.return}while(o!==null)}dd(n)}catch(j){t=j,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function ud(){var e=Fl.current;return Fl.current=$l,e===null?$l:e}function js(){(de===0||de===3||de===2)&&(de=4),he===null||!(dn&268435455)&&!(eo&268435455)||Rt(he,we)}function Ul(e,t){var n=U;U|=2;var r=ud();(he!==e||we!==t)&&(yt=null,on(e,t));do try{Wp();break}catch(l){ad(e,l)}while(!0);if(is(),U=n,Fl.current=r,se!==null)throw Error(w(261));return he=null,we=0,de}function Wp(){for(;se!==null;)cd(se)}function Qp(){for(;se!==null&&!yf();)cd(se)}function cd(e){var t=pd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?dd(e):se=t,xs.current=null}function dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fp(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,se=null;return}}else if(n=$p(n,t,be),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);de===0&&(de=5)}function en(e,t,n){var r=W,l=Je.transition;try{Je.transition=null,W=1,Kp(e,t,n,r)}finally{Je.transition=l,W=r}return null}function Kp(e,t,n,r){do Rn();while($t!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(zf(e,o),e===he&&(se=he=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,md(Nl,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var i=W;W=1;var s=U;U|=4,xs.current=null,bp(e,n),od(n,e),pp(fi),Cl=!!di,fi=di=null,e.current=n,Up(n),vf(),U=s,W=i,Je.transition=o}else e.current=n;if(il&&(il=!1,$t=e,bl=l),o=e.pendingLanes,o===0&&(Vt=null),kf(n.stateNode),Ae(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bl)throw Bl=!1,e=Mi,Mi=null,e;return bl&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===Li?hr++:(hr=0,Li=e):hr=0,Jt(),null}function Rn(){if($t!==null){var e=Wu(bl),t=Je.transition,n=W;try{if(Je.transition=null,W=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,bl=0,U&6)throw Error(w(331));var l=U;for(U|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(T=d;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:pr(8,v,o)}var g=v.child;if(g!==null)g.return=v,T=g;else for(;T!==null;){v=T;var h=v.sibling,k=v.return;if(nd(v),v===d){T=null;break}if(h!==null){h.return=k,T=h;break}T=k}}}var N=o.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var F=C.sibling;C.sibling=null,C=F}while(C!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:pr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zl(9,s)}}catch(j){oe(s,s.return,j)}if(s===i){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(U=l,Jt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(Wl,e)}catch{}r=!0}return r}finally{W=n,Je.transition=t}}return!1}function qa(e,t,n){t=Un(n,t),t=Wc(e,t,1),e=Ht(e,t,1),t=_e(),e!==null&&(Dr(e,1,t),Ae(e,t))}function oe(e,t,n){if(e.tag===3)qa(e,e,n);else for(;t!==null;){if(t.tag===3){qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Un(n,e),e=Qc(t,e,1),t=Ht(t,e,1),e=_e(),t!==null&&(Dr(t,1,e),Ae(t,e));break}}t=t.return}}function Gp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>ie()-ks?on(e,0):ws|=n),Ae(e,t)}function fd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=_e();e=jt(e,t),e!==null&&(Dr(e,t,n),Ae(e,n))}function Yp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fd(e,n)}function Xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),fd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,Ap(e,t,n);De=!!(e.flags&131072)}else De=!1,q&&t.flags&1048576&&yc(t,Ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gl(e,t),e=t.pendingProps;var l=$n(t,ze.current);On(t,n),l=ms(null,t,r,e,l,n);var o=hs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,Il(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,us(t),l.updater=ql,t.stateNode=l,l._reactInternals=t,ki(t,r,e,n),t=ji(null,t,r,!0,o,n)):(t.tag=0,q&&o&&ns(t),Pe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(gl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=qp(r),e=ot(r,e),l){case 0:t=Ni(null,t,r,e,n);break e;case 1:t=Ua(null,t,r,e,n);break e;case 11:t=Ba(null,t,r,e,n);break e;case 14:t=ba(null,t,r,ot(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ni(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ua(e,t,r,l,n);case 3:e:{if(Xc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Nc(e,t),Ol(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Un(Error(w(423)),t),t=Ha(e,t,r,n,l);break e}else if(r!==l){l=Un(Error(w(424)),t),t=Ha(e,t,r,n,l);break e}else for(Ue=Ut(t.stateNode.containerInfo.firstChild),He=t,q=!0,st=null,n=kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===l){t=Ct(e,t,n);break e}Pe(e,t,r,n)}t=t.child}return t;case 5:return jc(t),e===null&&vi(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,pi(r,l)?i=null:o!==null&&pi(r,o)&&(t.flags|=32),Yc(e,t),Pe(e,t,i,n),t.child;case 6:return e===null&&vi(t),null;case 13:return Jc(e,t,n);case 4:return cs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):Pe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ba(e,t,r,l,n);case 7:return Pe(e,t,t.pendingProps,n),t.child;case 8:return Pe(e,t,t.pendingProps.children,n),t.child;case 12:return Pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,K(Ll,r._currentValue),r._currentValue=i,o!==null)if(ct(o.value,i)){if(o.children===l.children&&!Oe.current){t=Ct(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=kt(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?a.next=a:(a.next=v.next,v.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xi(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),xi(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Pe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,On(t,n),l=qe(l),r=r(l),t.flags|=1,Pe(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),ba(e,t,r,l,n);case 15:return Kc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),gl(e,t),t.tag=1,Re(r)?(e=!0,Il(t)):e=!1,On(t,n),Vc(t,r,l),ki(t,r,l,n),ji(null,t,r,!0,e,n);case 19:return qc(e,t,n);case 22:return Gc(e,t,n)}throw Error(w(156,t.tag))};function md(e,t){return bu(e,t)}function Jp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new Jp(e,t,n,r)}function Cs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qp(e){if(typeof e=="function")return Cs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vi)return 11;if(e===Wi)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Cs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wn:return sn(n.children,l,o,t);case Hi:i=8,l|=8;break;case Wo:return e=Xe(12,n,t,l|2),e.elementType=Wo,e.lanes=o,e;case Qo:return e=Xe(13,n,t,l),e.elementType=Qo,e.lanes=o,e;case Ko:return e=Xe(19,n,t,l),e.elementType=Ko,e.lanes=o,e;case ju:return to(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:i=10;break e;case Nu:i=9;break e;case Vi:i=11;break e;case Wi:i=14;break e;case Lt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Xe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function to(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=ju,e.lanes=n,e.stateNode={isHidden:!1},e}function Uo(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function Ho(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Es(e,t,n,r,l,o,i,s,a){return e=new Zp(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},us(o),e}function em(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hd(e){if(!e)return Gt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Re(n))return hc(e,n,t)}return t}function gd(e,t,n,r,l,o,i,s,a){return e=Es(n,r,!0,e,l,o,i,s,a),e.context=hd(null),n=e.current,r=_e(),l=Wt(n),o=kt(r,l),o.callback=t??null,Ht(n,o,l),e.current.lanes=l,Dr(e,l,r),Ae(e,r),e}function no(e,t,n,r){var l=t.current,o=_e(),i=Wt(l);return n=hd(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(l,t,i),e!==null&&(ut(e,l,i,o),pl(e,l,i)),i}function Hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Za(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zs(e,t){Za(e,t),(e=e.alternate)&&Za(e,t)}function tm(){return null}var yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ps(e){this._internalRoot=e}ro.prototype.render=Ps.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));no(e,t,null,null)};ro.prototype.unmount=Ps.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){no(null,e,null,null)}),t[Nt]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&Xu(e)}};function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eu(){}function nm(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=Hl(i);o.call(d)}}var i=gd(t,r,e,0,null,!1,!1,"",eu);return e._reactRootContainer=i,e[Nt]=i.current,jr(e.nodeType===8?e.parentNode:e),fn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=Hl(a);s.call(d)}}var a=Es(e,0,!1,null,null,!1,!1,"",eu);return e._reactRootContainer=a,e[Nt]=a.current,jr(e.nodeType===8?e.parentNode:e),fn(function(){no(t,a,n,r)}),a}function oo(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Hl(i);s.call(a)}}no(t,i,e,l)}else i=nm(n,t,e,l,r);return Hl(i)}Qu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(Gi(t,n|1),Ae(t,ie()),!(U&6)&&(Hn=ie()+500,Jt()))}break;case 13:fn(function(){var r=jt(e,1);if(r!==null){var l=_e();ut(r,e,1,l)}}),zs(e,1)}};Yi=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=_e();ut(t,e,134217728,n)}zs(e,134217728)}};Ku=function(e){if(e.tag===13){var t=Wt(e),n=jt(e,t);if(n!==null){var r=_e();ut(n,e,t,r)}zs(e,t)}};Gu=function(){return W};Yu=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};ri=function(e,t,n){switch(t){case"input":if(Xo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Yl(r);if(!l)throw Error(w(90));Eu(r),Xo(r,l)}}}break;case"textarea":Pu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Ou=Ss;Ru=fn;var rm={usingClientEntryPoint:!1,Events:[Rr,jn,Yl,Lu,Du,Ss]},nr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fu(e),e===null?null:e.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Wl=sl.inject(lm),ht=sl}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_s(t))throw Error(w(200));return em(e,t,null,n)};We.createRoot=function(e,t){if(!_s(e))throw Error(w(299));var n=!1,r="",l=yd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Es(e,1,!1,null,null,n,!1,r,l),e[Nt]=t.current,jr(e.nodeType===8?e.parentNode:e),new Ps(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Fu(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return fn(e)};We.hydrate=function(e,t,n){if(!lo(t))throw Error(w(200));return oo(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!_s(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=yd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=gd(t,null,e,1,n??null,l,!1,o,i),e[Nt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ro(t)};We.render=function(e,t,n){if(!lo(t))throw Error(w(200));return oo(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!lo(e))throw Error(w(40));return e._reactRootContainer?(fn(function(){oo(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};We.unstable_batchedUpdates=Ss;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!lo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return oo(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vu.exports=We;var om=vu.exports,xd,tu=om;xd=tu.createRoot,tu.hydrateRoot;const io="/claude",im="https://stelle-972218119922.europe-west1.run.app/api",wd=im;function sm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function am(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`,n=await fetch(io,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})}),r=await n.json();if(!n.ok)throw new Error(r.error||"Claude CLI error");return r.text||"Nessun contenuto estratto."}async function nu(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`,r=await fetch(io,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");return l.text||"Nessun contenuto estratto."}async function um(e,t,n){const r=e.map(v=>`### ${v.name}
${v.content}`).join(`

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

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,i=await fetch(io,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:o})}),s=await i.json();if(!i.ok)throw new Error(s.error||"Claude CLI error");const d=(s.text||"").trim().match(/\[[\s\S]*\]/);if(!d)throw new Error("Formato risposta non valido");return JSON.parse(d[0])}async function cm(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

SINTESI PRECEDENTE:
${e}

SINTESI ATTUALE:
${t}

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
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.`,r=await fetch(io,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");const i=(l.text||"").trim().match(/\{[\s\S]*\}/);if(!i)throw new Error("Formato risposta non valido");return JSON.parse(i[0])}let ru=!1;async function dm(){if(ru)return;if(!(await fetch(`${wd}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");ru=!0}async function fm(e,t,n){await dm();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${wd}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:d}=await o.read();if(a)break;s+=i.decode(d,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let g="";for(const h of v)if(h.startsWith("event: "))g=h.slice(7).trim();else if(h.startsWith("data: ")&&g){try{const k=JSON.parse(h.slice(6));n(g,k)}catch{}g=""}}}function ln(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function pm(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function mm(e,t){if(!e)return"";if(!t)return ln(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>pm(o,a)>.7),s=ln(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function hm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const lu="​‌",ou="‌​";function gm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let g=1;g<=l;g++)for(let h=1;h<=o;h++)i[g][h]=n[g-1]===r[h-1]?i[g-1][h-1]+1:Math.max(i[g-1][h],i[g][h-1]);const s=[];let a=l,d=o;for(;a>0||d>0;)a>0&&d>0&&n[a-1]===r[d-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,d--):d>0&&(a===0||i[a][d-1]>=i[a-1][d])?(s.unshift({type:"added",text:r[d-1]}),d--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const g of s)v.length>0&&v[v.length-1].type===g.type?v[v.length-1].text+=g.text:v.push({...g});return v}function iu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=lu+s.text+ou:l+=s.text);let o=ln(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${lu}(.*?)${ou}`,"gs"),`<span class="${i}">$1</span>`),o}function ym(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function vm(){const[e,t]=z.useState(!1),[n,r]=z.useState(-1),[l,o]=z.useState([]),i=z.useRef([]),s=z.useRef(null),a=z.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),d=z.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=z.useCallback((F,p=0)=>{speechSynthesis.cancel(),i.current=F.slice(p),o(F);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=F.indexOf(m);r(x);const j=`${m.title}. ${ym(m.text)}`,S=new SpeechSynthesisUtterance(j);S.lang="it-IT",S.rate=1;const I=a();I&&(S.voice=I),S.onend=c,S.onerror=c,s.current=S,speechSynthesis.speak(S)};t(!0),c()},[a]),g=z.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=z.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),k=z.useCallback(()=>{speechSynthesis.cancel()},[]),N=z.useCallback((F,p,c,m)=>{const x=[];F&&x.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const j of c)p[j.id]&&!p[j.id].startsWith("Errore")&&x.push({title:j.name,text:p[j.id],type:"thinker"});if(m&&m.length>0){const j=m.map(S=>{var I;return`${S.name}: ${S.description}${(I=S.citedBy)!=null&&I.length?`. Citato da ${S.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:j,type:"projects"})}v(x)},[v]),C=z.useCallback((F,p)=>{v([{title:F,text:p,type:"single"}])},[v]);return z.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:N,playSingle:C,pause:g,resume:h,stop:d,skipForward:k}}const xm=[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / Meta",active:!0},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Pratical AI",active:!0},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0}],wm=["trendshift.io","GitHub Trending","Hacker News"],km=`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
`,Sm=`
  ${km}

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
  .concept-who-link {
    color: #2563eb;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px dotted #93c5fd;
  }
  .concept-who-link:hover { color: #1d4ed8; border-bottom-color: #1d4ed8; }
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
`;function Nm(){const[e,t]=z.useState(xm),[n,r]=z.useState({}),[l,o]=z.useState({}),[i,s]=z.useState({}),[a,d]=z.useState(null),[v,g]=z.useState("idle"),[h,k]=z.useState(!1),[N,C]=z.useState(""),[F,p]=z.useState(""),[c,m]=z.useState(null),[x,j]=z.useState(null),[S,I]=z.useState(8),[O,Z]=z.useState(!1),[M,ge]=z.useState([]),[zt,Pt]=z.useState(null),[et,_t]=z.useState("signals"),[$e,Kn]=z.useState({leftIdx:1,rightIdx:0}),[P,$]=z.useState("emerging"),[L,J]=z.useState([]),[Q,qt]=z.useState([]),[Ke,hn]=z.useState(null),[tt,It]=z.useState("idle"),[Tt,so]=z.useState(wm),[Is,Ts]=z.useState(""),[kd,ao]=z.useState(!1),[Ms,Sd]=z.useState(!1),[gn,Nd]=z.useState(""),[$r,Ls]=z.useState([]),[Fr,uo]=z.useState("idle"),[Br,co]=z.useState(null),[Ds,Os]=z.useState(null),[jm,Cm]=z.useState("idle"),fo=z.useRef(null),fe=vm(),[jd,Cd]=z.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),pe=e.filter(f=>f.active),yn=Object.values(i).filter(f=>f==="done").length,po=pe.length;z.useEffect(()=>{(async()=>{try{const f=await window.storage.get("signal-state");if(f){const y=JSON.parse(f.value);if(y.results){r(y.results);const _={};for(const D of Object.keys(y.results))_[D]=y.results[D].startsWith("Errore")?"error":"done";s(_)}if(y.prevResults&&o(y.prevResults),y.lastScanTime&&m(y.lastScanTime),y.intervalHours&&I(y.intervalHours),y.synthesis&&(d(y.synthesis),g("done")),y.synthesisHistory){const _=y.synthesisHistory.map((D,ee,le)=>{if(D.conceptDiff&&!D.conceptDiffs){const Ne=le[ee+1],{conceptDiff:nt,...Fe}=D;return Ne?{...Fe,conceptDiffs:{[Ne.id]:nt}}:Fe}return D});ge(_)}y.projects&&J(y.projects),y.prevProjects&&qt(y.prevProjects),y.projectsTime&&hn(y.projectsTime),y.projectSources&&so(y.projectSources)}}catch{}})()},[]);const Se=z.useCallback(async(f={})=>{try{const y=await window.storage.get("signal-state"),D={...y?JSON.parse(y.value):{},...f};await window.storage.set("signal-state",JSON.stringify(D))}catch{}},[]);z.useCallback(async(f={})=>{await Se({results:n,prevResults:l,lastScanTime:c,intervalHours:S,synthesis:a,synthesisHistory:M,projects:L,prevProjects:Q,projectsTime:Ke,projectSources:Tt,...f})},[n,l,c,S,a,M,L,Q,Ke,Tt,Se]);const br=z.useCallback((f,y)=>y.length>0&&y[0].text===f?y:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:f,thinkers:pe.map(D=>D.name),conceptDiffs:{}},...y].slice(0,50),[pe]),Ur=z.useCallback(async f=>{var D;if(f.length<2)return f;const y=f[0],_=f[1];if((D=y.conceptDiffs)!=null&&D[_.id])return f;try{const ee=await cm(_.text,y.text),le=[...f];return le[0]={...le[0],conceptDiffs:{...le[0].conceptDiffs||{},[_.id]:ee}},ge(le),await Se({synthesisHistory:le}),le}catch(ee){return console.error("[concept-diff auto]",ee),f}},[Se]),Rs=z.useCallback(async(f,y)=>{try{await navigator.clipboard.writeText(f)}catch{const _=document.createElement("textarea");_.value=f,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_)}Pt(y),setTimeout(()=>Pt(null),2e3)},[]);z.useCallback(async f=>{const y=M.filter(_=>_.id!==f);ge(y),await Se({synthesisHistory:y})},[M,Se]),z.useEffect(()=>{const f=()=>{if(!c){j(null);return}const D=c+S*3600*1e3-Date.now();if(D<=0){j("ora");return}const ee=Math.floor(D/36e5),le=Math.floor(D%36e5/6e4),Ne=Math.floor(D%6e4/1e3);j(`${ee}h ${le}m ${Ne}s`)};f();const y=setInterval(f,1e3);return()=>clearInterval(y)},[c,S]);const mo=z.useRef(null),As=z.useRef(null);z.useEffect(()=>{const f=setInterval(()=>{const y=new Date,_=y.getHours(),D=`${y.toDateString()}-${_}`;(_===5||_===17)&&As.current!==D&&mo.current&&!h&&(As.current=D,mo.current(!0))},6e4);return()=>clearInterval(f)},[h]);const $s=z.useCallback(f=>{if(!f)return;const y=f.trim().toLowerCase();if(!y)return;const _=e.find(D=>{const ee=D.name.toLowerCase();return ee===y||ee.includes(y)||y.includes(ee)});_&&(_t("signals"),Z(!1),setTimeout(()=>{const D=document.getElementById(`thinker-${_.id}`);D&&(D.scrollIntoView({behavior:"smooth",block:"start"}),D.classList.add("thinker-card-highlight"),setTimeout(()=>D.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Ed=(f,y)=>{if(!f||!y)return 0;const _=new Set(f.toLowerCase().split(/\s+/)),D=new Set(y.toLowerCase().split(/\s+/));return[..._].filter(le=>D.has(le)).length/Math.max(_.size,D.size)},Fs=f=>!l[f]||!n[f]?!1:Ed(l[f],n[f])<.72;pe.filter(f=>i[f.id]==="done"&&Fs(f.id)).length;const Bs=e.length>0&&e.every(f=>f.active),zd=()=>{h||t(f=>f.map(y=>({...y,active:!Bs})))},ho=()=>{N.trim()&&(t(f=>[...f,{id:Date.now(),name:N.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),C(""),p(""))},bs=()=>{const f=Is.trim();if(!f||Tt.includes(f))return;const y=[...Tt,f];so(y),Ts(""),Se({projectSources:y})},Pd=f=>{const y=Tt.filter(_=>_!==f);so(y),Se({projectSources:y})},[_d,Us]=z.useState(null),Hr=z.useCallback(async(f,y)=>{It("loading"),Us(null);try{const _=await um(y,f,Tt);qt(L),J(_);const D=Date.now();hn(D),It("done"),await Se({projects:_,prevProjects:L,projectsTime:D})}catch(_){console.error("[Signal.Brief] fetchProjects error:",_),It("error"),Us(_.message)}},[Tt,Se,L]),Hs=2*3600*1e3,Vr=z.useCallback(async(f=!1)=>{if(pe.length===0)return;if(!f&&c&&Date.now()-c<Hs){const b=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${b} minuti fa. Cache valida per ancora ${Math.round((Hs-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}_t("signals"),k(!0),d(null),g("idle"),o(b=>({...b,...n}));const y={...n},_={};pe.forEach(b=>{_[b.id]="loading"}),s(_),r({});const D={},ee=2,le=b=>new Promise(ae=>setTimeout(ae,b));for(let b=0;b<pe.length;b+=ee){const ae=pe.slice(b,b+ee);await Promise.all(ae.map(async ye=>{try{const ve=await am(ye);D[ye.id]=ve,r(rt=>({...rt,[ye.id]:ve})),s(rt=>({...rt,[ye.id]:"done"}))}catch(ve){D[ye.id]=`Errore: ${ve.message}`,r(rt=>({...rt,[ye.id]:`Errore: ${ve.message}`})),s(rt=>({...rt,[ye.id]:"error"}))}})),b+ee<pe.length&&await le(1200)}const Ne=sm(D),nt=Ne?Date.now():c;Ne&&(m(nt),Cd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Se({results:D,prevResults:y,lastScanTime:nt,intervalHours:S,synthesis:a,synthesisHistory:M}),k(!1);const Fe=pe.filter(b=>D[b.id]&&!D[b.id].startsWith("Errore")).map(b=>({name:b.name,domain:b.domain,content:D[b.id]}));if(Fe.length>=2){g("loading");try{const b=await nu(Fe);d(b),g("done");const ae=br(b,M);ge(ae),await Se({results:D,prevResults:y,lastScanTime:nt,intervalHours:S,synthesis:b,synthesisHistory:ae}),Ur(ae),Hr(b,Fe)}catch{g("error")}}},[pe,n,S,Se,a,M,br,c,Hr,Ur]);z.useEffect(()=>{mo.current=Vr},[Vr]);const Id=z.useCallback(async()=>{const f=pe.filter(y=>i[y.id]==="done").map(y=>({name:y.name,domain:y.domain,content:n[y.id]}));if(!(f.length<2)){g("loading");try{const y=await nu(f);d(y),g("done");const _=br(y,M);ge(_),await Se({synthesis:y,synthesisHistory:_}),Ur(_),Hr(y,f)}catch(y){d(`Errore nella sintesi: ${y.message}`),g("error")}}},[pe,i,n,Se,M,br,Hr,Ur]),Vs=z.useCallback(async()=>{if(gn.trim()){Ls([]),co(null),Os(null),uo("loading");try{await fm(gn,a,(f,y)=>{if(f==="session_started"&&y.session_id&&Os(y.session_id),f==="sage_speaks"&&y.content&&Ls(_=>[..._,{name:y.persona_name,icon:y.persona_icon,color:y.persona_color,content:y.content}]),f==="moderator_synthesis"&&y.content&&co(y.content),f==="moderator"){const _=y.content||y.decision||y.synthesis||"";_&&co(_)}}),uo("done")}catch(f){console.error("[council]",f),uo("error")}}},[gn,a]),Td=yn>=2&&!h&&v!=="loading",Ws=Object.keys(n).length>0,go="Disponibile solo in locale (richiede Claude CLI)",Md=pe.filter(f=>i[f.id]?O?i[f.id]==="done"&&Fs(f.id):!0:!1);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Sm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>ao(!0),children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"tagline",children:"Intelligence Dashboard · AI-Powered"})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",jd]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Id,disabled:!Td||!0,title:go,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!fo.current){const y=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);y.onerror=()=>{y.src="/signal-brief/podcast/episodes/2026-04-12.mp3",y.play()},fo.current=y}const f=fo.current;f.paused?f.play():f.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Vr(!0),disabled:h||pe.length===0||!0,title:go,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Vr(!1),disabled:h||pe.length===0||!0,title:go,children:h?`Scanning ${yn}/${po}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${et==="signals"?"active":""}`,onClick:()=>_t("signals"),children:["Segnali",yn>0&&u.jsx("span",{className:"tab-badge",children:yn})]}),u.jsxs("button",{className:`tab-btn ${et==="projects"?"active":""}`,onClick:()=>_t("projects"),children:["Progetti",L.length>0&&u.jsx("span",{className:"tab-badge",children:L.length})]}),u.jsxs("button",{className:`tab-btn ${et==="history"?"active":""}`,onClick:()=>_t("history"),children:["Cronologia",M.length>0&&u.jsx("span",{className:"tab-badge",children:M.length})]}),u.jsx("button",{className:`tab-btn ${et==="config"?"active":""}`,onClick:()=>_t("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[et==="signals"&&u.jsxs(u.Fragment,{children:[h&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${po>0?yn/po*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&M.length>0&&u.jsx("span",{className:"timestamp",children:new Date(M[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>fe.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Sd(f=>!f),title:"Chiedi ai thinkers",style:Ms?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Rs(a,"synth"),children:zt==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:hm(M.length>1?mm(a,M[1].text):ln(a),pe)}}),Ms&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Ds?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Ds}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:gn,onChange:f=>Nd(f.target.value),onKeyDown:f=>f.key==="Enter"&&Vs(),disabled:Fr==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:Vs,disabled:Fr==="loading"||!gn.trim(),children:Fr==="loading"?"In deliberazione…":"Chiedi"})]}),$r.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:$r.map((f,y)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:f.color},children:[f.icon," ",f.name]}),u.jsx("div",{children:f.content})]},y))}),Br&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const f=$r.map(y=>`${y.name}: ${y.content}`).join(`

`)+`

Sintesi: `+Br;fe.playSingle("Deliberazione",f)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const f=`Domanda: ${gn}

`+$r.map(y=>`${y.icon} ${y.name}:
${y.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Br}`;Rs(f,"council")},children:zt==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:ln(Br)}})]}),Fr==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),Ws&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",yn," acquisiti"]})}),!Ws&&!h?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:Md.map(f=>{const y=i[f.id];return u.jsxs("div",{id:`thinker-${f.id}`,className:`card ${y}`,children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[f.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",children:f.handle})]}),u.jsx("div",{className:"card-domain",children:f.domain})]}),y==="done"&&u.jsx("button",{className:"btn-listen",onClick:()=>fe.playSingle(f.name,n[f.id]),title:"Ascolta",children:"🔊"}),y==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),y==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),y==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"})]}),u.jsxs("div",{className:"card-body",children:[y==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),y==="done"&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:ln(n[f.id])}}),y==="error"&&u.jsx("div",{className:"card-error",children:n[f.id]})]})]},f.id)})})]}),et==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",L.length>0&&` · ${L.length} trovati`]})}),tt==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),tt==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",_d||"errore sconosciuto"]}),L.length===0&&tt!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),L.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),Ke&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(Ke).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),L.some(f=>f.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),Q.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),L.map((f,y)=>{const _=f.maturity!=null&&f.momentum!=null,D=Math.ceil(Math.sqrt(L.length)),ee=Math.floor(y/D),le=y%D,Ne=_?f.maturity:2+le/Math.max(D-1,1)*7,nt=_?f.momentum:8-ee/Math.max(Math.ceil(L.length/D)-1,1)*7,Fe=50+(Ne-1)/9*420,b=370-(nt-1)/9*360,ae=Q.length>0&&!Q.some(ve=>ve.name===f.name),ye=ae?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:Fe,cy:b,r:ae?6:5,fill:ye,opacity:"0.85",stroke:ae?"#fca5a5":"none",strokeWidth:ae?2:0,onClick:()=>window.open(f.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:Fe+9,y:b+3,style:{fontSize:f.name.length>18?"8px":"9px",fill:ae?"#dc2626":"#374151",fontWeight:ae?600:400},children:f.name.length>22?f.name.slice(0,20)+"…":f.name})]},y)})]})]}),L.length>0&&u.jsx("div",{className:"projects-grid",children:L.map((f,y)=>u.jsxs("div",{className:"project-card",style:Q.length>0&&!Q.some(_=>_.name===f.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",children:f.name}),Q.length>0&&!Q.some(_=>_.name===f.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.source&&u.jsx("span",{className:"project-source",children:f.source}),f.maturity&&f.momentum&&u.jsxs("span",{className:"project-source",children:["M:",f.maturity," · P:",f.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:f.description}),u.jsxs("div",{className:"project-footer",children:[f.citedBy&&f.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",f.citedBy.join(", ")]}),f.themes&&f.themes.length>0&&u.jsx("div",{className:"project-themes",children:f.themes.map((_,D)=>u.jsx("span",{className:"project-theme",children:_},D))})]})]},y))})]}),et==="history"&&u.jsx(u.Fragment,{children:M.length<2?u.jsxs("div",{className:"history-empty",children:[M.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",M.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(M[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:ln(M[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const f=Date.now(),y=864e5,_=f-7*y,D=f-21*y,ee=M.filter(G=>G.timestamp>=_),le=M.filter(G=>G.timestamp>=D&&G.timestamp<_),Ne={};for(const G of le){const Me=new Date(G.timestamp),Be=new Date(Me);Be.setDate(Be.getDate()-Be.getDay());const ue=Be.toISOString().slice(0,10);(!Ne[ue]||G.timestamp>Ne[ue].timestamp)&&(Ne[ue]=G)}const nt=Object.values(Ne).sort((G,Me)=>Me.timestamp-G.timestamp),Fe=M.filter(G=>G.timestamp<D),b={};for(const G of Fe){const Me=new Date(G.timestamp),Be=new Date(Me);Be.setDate(Be.getDate()-Be.getDay());const ue=Be.toISOString().slice(0,10);(!b[ue]||G.timestamp>b[ue].timestamp)&&(b[ue]=G)}const ae=Object.values(b).sort((G,Me)=>Me.timestamp-G.timestamp),ye=(G,Me,Be)=>G.length===0?null:u.jsx("optgroup",{label:Me,children:G.map(ue=>{const yo=M.indexOf(ue),Gn=new Date(ue.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),E=Be?`Sett. ${Gn.split(",")[0]} — ${ue.thinkers.slice(0,3).join(", ")}${ue.thinkers.length>3?` +${ue.thinkers.length-3}`:""}`:`${Gn} — ${ue.thinkers.slice(0,3).join(", ")}${ue.thinkers.length>3?` +${ue.thinkers.length-3}`:""}`;return u.jsx("option",{value:yo,children:E},ue.id)})},Me),ve=M[0],rt=ve?`${new Date(ve.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${ve.thinkers.slice(0,3).join(", ")}${ve.thinkers.length>3?` +${ve.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:$e.leftIdx,onChange:G=>Kn(Me=>({...Me,leftIdx:Number(G.target.value)})),children:[ye(ee,"Ultimi 7 giorni",!1),ye(nt,"Ultime 3 settimane",!0),ye(ae,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[rt," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var Gn;const f=M[$e.rightIdx],y=M[$e.leftIdx];if(!f||!y||$e.leftIdx===$e.rightIdx)return null;const _=f.timestamp>=y.timestamp?f:y,D=_===f?y:f;_===f?$e.rightIdx:$e.leftIdx;const ee=((Gn=_.conceptDiffs)==null?void 0:Gn[D.id])||null,le=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],Ne={DHH:["hansson","heinemeier","37signals"]},nt=E=>{if(!E)return null;const R=E.trim().toLowerCase();if(!R)return null;for(const A of e){const H=A.name.toLowerCase();if(H===R||H.includes(R)||R.includes(H))return A;const V=Ne[A.name]||[];for(const dt of V)if(R.includes(dt)||dt.includes(R))return A}return null},Fe=E=>{if(!E)return[];const R=[],A=new Set,H=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let V;for(;(V=H.exec(E))!==null;){let dt=V[2].replace(/[.,;)]+$/,"");A.has(dt)||(A.add(dt),R.push({url:dt,title:V[1].trim()}))}return R},b=E=>{const R=nt(E);return R?Fe(n[R.id]||""):[]},ae=(()=>{const E=new Set,R=[];for(const A of e){E.has(A.name)||(E.add(A.name),R.push(A.name));const H=A.name.split(/\s+/);if(H.length>1){const V=H[H.length-1];V.length>=4&&!E.has(V)&&(E.add(V),R.push(V))}}return R.sort((A,H)=>H.length-A.length)})(),ye=ae.length?new RegExp(`\\b(${ae.map(E=>E.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,ve=E=>{if(!E||typeof E!="string"||!ye)return E;const R=[];let A=0,H;for(ye.lastIndex=0;(H=ye.exec(E))!==null;){H.index>A&&R.push(E.slice(A,H.index));const V=H[0];R.push(u.jsx("span",{className:"concept-who-link",onClick:dt=>{dt.stopPropagation(),$s(V)},children:V},R.length)),A=H.index+V.length}return R.length===0?E:(A<E.length&&R.push(E.slice(A)),R)},rt=(E,R)=>{if(E==null)return null;if(typeof E=="string")return{title:E,detail:"",who:[],sides:[]};if(typeof E!="object")return null;if(R==="evolved"){const A=E.from??E.da??E.before??"",H=E.to??E.a??E.after??"",V=A&&H?`${A} → ${H}`:A||H||E.detail||"";return{title:E.concept||E.title||E.name||"",detail:V,who:E.who||[],sides:[]}}return R==="tensions"?{title:E.axis||E.concept||E.title||"",detail:E.detail||"",who:E.who||[],sides:E.sides||[]}:{title:E.concept||E.title||E.name||"",detail:E.detail||E.description||"",who:E.who||[],sides:[]}},G=E=>E!=null&&E.length?E.slice(0,4).map((R,A)=>u.jsx("a",{className:"concept-cite",href:R.url,target:"_blank",rel:"noopener noreferrer",title:R.title||R.url,onClick:H=>H.stopPropagation(),children:A+1},A)):null,Me=E=>E!=null&&E.length?u.jsx("div",{className:"concept-item-who",children:E.map((R,A)=>{const H=b(R);return u.jsxs("span",{className:"concept-who-item",children:[A>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${R}`,onClick:V=>{V.stopPropagation(),$s(R)},children:R}),H.length>0&&u.jsx("sup",{className:"concept-cites",children:G(H)})]},A)})}):null,Be=(E,R)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",ve(E)]},R),ue=(E,R)=>{const H=(E[R]||[]).map(V=>rt(V,R)).filter(Boolean);return H.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):H.map((V,dt)=>{var Qs;return u.jsxs("div",{className:`concept-item concept-${R==="tensions"?"tension":R}`,children:[V.title&&u.jsx("div",{className:"concept-item-title",children:ve(V.title)}),V.detail&&u.jsx("div",{className:"concept-item-detail",children:ve(V.detail)}),R==="tensions"&&((Qs=V.sides)==null?void 0:Qs.map(Be)),Me(V.who)]},dt)})},yo=E=>{const R=le.find(A=>A.key===P)?P:"emerging";return le.find(A=>A.key===R),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:le.map(A=>{const H=(E[A.key]||[]).length,V=A.key===R;return u.jsxs("button",{className:`concept-tab ${V?"active":""}`,onClick:()=>$(A.key),style:V?{color:A.color,borderBottomColor:A.color}:void 0,children:[u.jsxs("span",{children:[A.icon," ",A.label]}),u.jsx("span",{className:"concept-tab-count",children:H})]},A.key)})}),u.jsx("div",{className:"concept-tab-body",children:ue(E,R)})]})};return ee?yo(ee):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const f=M[$e.leftIdx],y=M[$e.rightIdx];if(!f||!y)return null;const _=gm(f.text,y.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(f.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:f.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:iu(_,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(y.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:y.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:iu(_,"right")}})]})]})})()]})}),et==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",pe.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:zd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Bs?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(f=>u.jsxs("div",{className:`thinker-row ${f.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:f.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:f.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:f.handle})," · ",f.domain]})]}),u.jsx("div",{className:`thinker-status ${i[f.id]||""}`})]},f.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:N,disabled:!0,onChange:f=>C(f.target.value),onKeyDown:f=>f.key==="Enter"&&ho(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:f=>p(f.target.value),onKeyDown:f=>f.key==="Enter"&&ho(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:ho,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(f=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:S===f?"#eff6ff":"",color:S===f?"#2563eb":"",borderColor:S===f?"#bfdbfe":""},onClick:()=>{I(f),Se({intervalHours:f})},children:[f,"h"]},f)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Tt.map(f=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:f}),u.jsx("button",{className:"source-delete",onClick:()=>Pd(f),disabled:!0,children:"×"})]},f))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Is,disabled:!0,onChange:f=>Ts(f.target.value),onKeyDown:f=>f.key==="Enter"&&bs(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:bs,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(fe.isPlaying||fe.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:fe.isPlaying?fe.pause:fe.resume,children:fe.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:fe.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:fe.currentChapter>=0&&fe.chapters[fe.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:fe.chapters[fe.currentChapter].title})," — ",fe.currentChapter+1,"/",fe.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:fe.stop,title:"Stop",children:"⏹"})]}),kd&&u.jsx("div",{className:"about-backdrop",onClick:()=>ao(!1),children:u.jsxs("div",{className:"about-panel",onClick:f=>f.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsxs("div",{className:"about-logo",children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"about-tagline",children:"Intelligence Dashboard · AI-Powered"}),u.jsx("div",{className:"about-desc",children:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano."}),u.jsxs("div",{className:"about-footer",children:["Ideato da Mike · ",u.jsx("a",{href:"https://www.instagram.com/it.mikesoft",target:"_blank",rel:"noopener noreferrer",children:"MikeSoft"}),u.jsx("br",{}),"100% AI-generated · Made in Italy · 2026"]}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>ao(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};xd(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Nm,{})}));
