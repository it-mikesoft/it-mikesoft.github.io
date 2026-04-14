(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var gu={exports:{}},Gl={},yu={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),Jd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),na=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xu=Object.assign,wu={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||vu}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ku(){}ku.prototype=Wn.prototype;function Vi(e,t,n){this.props=e,this.context=t,this.refs=wu,this.updater=n||vu}var Wi=Vi.prototype=new ku;Wi.constructor=Vi;xu(Wi,Wn.prototype);Wi.isPureReactComponent=!0;var ra=Array.isArray,Su=Object.prototype.hasOwnProperty,Qi={current:null},Nu={key:!0,ref:!0,__self:!0,__source:!0};function Cu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Su.call(t,r)&&!Nu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Or,type:e,key:o,ref:i,props:l,_owner:Qi.current}}function lf(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ki(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var la=/\/+/g;function Eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):t.toString(36)}function fl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Or:case Kd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Eo(i,0):r,ra(l)?(n="",e!=null&&(n=e.replace(la,"$&/")+"/"),fl(l,t,n,"",function(d){return d})):l!=null&&(Ki(l)&&(l=lf(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(la,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ra(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Eo(o,s);i+=fl(o,t,n,a,l)}else if(a=rf(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Eo(o,s++),i+=fl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Yr(e,t,n){if(e==null)return e;var r=[],l=0;return fl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function sf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},pl={transition:null},af={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Qi};function ju(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!Ki(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Wn;B.Fragment=Gd;B.Profiler=Xd;B.PureComponent=Vi;B.StrictMode=Yd;B.Suspense=ef;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;B.act=ju;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Qi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Su.call(t,a)&&!Nu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Or,type:e.type,key:l,ref:o,props:r,_owner:i}};B.createContext=function(e){return e={$$typeof:qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jd,_context:e},e.Consumer=e};B.createElement=Cu;B.createFactory=function(e){var t=Cu.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Zd,render:e}};B.isValidElement=Ki;B.lazy=function(e){return{$$typeof:nf,_payload:{_status:-1,_result:e},_init:sf}};B.memo=function(e,t){return{$$typeof:tf,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=pl.transition;pl.transition={};try{e()}finally{pl.transition=t}};B.unstable_act=ju;B.useCallback=function(e,t){return Me.current.useCallback(e,t)};B.useContext=function(e){return Me.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};B.useEffect=function(e,t){return Me.current.useEffect(e,t)};B.useId=function(){return Me.current.useId()};B.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Me.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};B.useRef=function(e){return Me.current.useRef(e)};B.useState=function(e){return Me.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Me.current.useTransition()};B.version="18.3.1";yu.exports=B;var z=yu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=z,cf=Symbol.for("react.element"),df=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,pf=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function Eu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)ff.call(t,r)&&!mf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:cf,type:e,key:o,ref:i,props:l,_owner:pf.current}}Gl.Fragment=df;Gl.jsx=Eu;Gl.jsxs=Eu;gu.exports=Gl;var u=gu.exports,zu={exports:{}},We={},Pu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var L=P.length;P.push(A);e:for(;0<L;){var J=L-1>>>1,W=P[J];if(0<l(W,A))P[J]=A,P[L]=W,L=J;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],L=P.pop();if(L!==A){P[0]=L;e:for(var J=0,W=P.length,Zt=W>>>1;J<Zt;){var Ke=2*(J+1)-1,gn=P[Ke],tt=Ke+1,Tt=P[tt];if(0>l(gn,L))tt<W&&0>l(Tt,gn)?(P[J]=Tt,P[tt]=L,J=tt):(P[J]=gn,P[Ke]=L,J=Ke);else if(tt<W&&0>l(Tt,L))P[J]=Tt,P[tt]=L,J=tt;else break e}}return A}function l(P,A){var L=P.sortIndex-A.sortIndex;return L!==0?L:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],d=[],v=1,g=null,h=3,k=!1,N=!1,E=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var A=n(d);A!==null;){if(A.callback===null)r(d);else if(A.startTime<=P)r(d),A.sortIndex=A.expirationTime,t(a,A);else break;A=n(d)}}function x(P){if(E=!1,m(P),!N)if(n(a)!==null)N=!0,Fe(j);else{var A=n(d);A!==null&&Gn(x,A.startTime-P)}}function j(P,A){N=!1,E&&(E=!1,p(O),O=-1),k=!0;var L=h;try{for(m(A),g=n(a);g!==null&&(!(g.expirationTime>A)||P&&!ge());){var J=g.callback;if(typeof J=="function"){g.callback=null,h=g.priorityLevel;var W=J(g.expirationTime<=A);A=e.unstable_now(),typeof W=="function"?g.callback=W:g===n(a)&&r(a),m(A)}else r(a);g=n(a)}if(g!==null)var Zt=!0;else{var Ke=n(d);Ke!==null&&Gn(x,Ke.startTime-A),Zt=!1}return Zt}finally{g=null,h=L,k=!1}}var S=!1,I=null,O=-1,Z=5,M=-1;function ge(){return!(e.unstable_now()-M<Z)}function Pt(){if(I!==null){var P=e.unstable_now();M=P;var A=!0;try{A=I(!0,P)}finally{A?_t():(S=!1,I=null)}}else S=!1}var _t;if(typeof c=="function")_t=function(){c(Pt)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,It=et.port2;et.port1.onmessage=Pt,_t=function(){It.postMessage(null)}}else _t=function(){F(Pt,0)};function Fe(P){I=P,S||(S=!0,_t())}function Gn(P,A){O=F(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){N||k||(N=!0,Fe(j))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var L=h;h=A;try{return P()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return A()}finally{h=L}},e.unstable_scheduleCallback=function(P,A,L){var J=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?J+L:J):L=J,P){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=L+W,P={id:v++,callback:A,priorityLevel:P,startTime:L,expirationTime:W,sortIndex:-1},L>J?(P.sortIndex=L,t(d,P),n(a)===null&&P===n(d)&&(E?(p(O),O=-1):E=!0,Gn(x,L-J))):(P.sortIndex=W,t(a,P),N||k||(N=!0,Fe(j))),P},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(P){var A=h;return function(){var L=h;h=A;try{return P.apply(this,arguments)}finally{h=L}}}})(_u);Pu.exports=_u;var hf=Pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=z,Ve=hf;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Iu=new Set,vr={};function mn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(vr[e]=t,e=0;e<t.length;e++)Iu.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=Object.prototype.hasOwnProperty,yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa={},ia={};function vf(e){return qo.call(ia,e)?!0:qo.call(oa,e)?!1:yf.test(e)?ia[e]=!0:(oa[e]=!0,!1)}function xf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wf(e,t,n,r){if(t===null||typeof t>"u"||xf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function Yi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,Yi);xe[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,Yi);xe[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,Yi);xe[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xi(e,t,n,r){var l=xe.hasOwnProperty(t)?xe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wf(t,n,l,r)&&(n=null),r||l===null?vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xr=Symbol.for("react.element"),wn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),Ji=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Mu=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),ei=Symbol.for("react.suspense"),ti=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),sa=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,zo;function or(e){if(zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zo=t&&t[1]||""}return`
`+zo+e}var Po=!1;function _o(e,t){if(!e||Po)return"";Po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function kf(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=_o(e.type,!1),e;case 11:return e=_o(e.type.render,!1),e;case 1:return e=_o(e.type,!0),e;default:return""}}function ni(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case wn:return"Portal";case Zo:return"Profiler";case Ji:return"StrictMode";case ei:return"Suspense";case ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mu:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:ni(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return ni(e(t))}catch{}}return null}function Sf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ni(t);case 8:return t===Ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nf(e){var t=Du(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=Nf(e))}function Ou(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Du(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ri(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ru(e,t){t=t.checked,t!=null&&Xi(e,"checked",t,!1)}function li(e,t){Ru(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ua(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(ir(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Au(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function $u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?$u(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,Fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cf=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Bu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function bu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Bu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var jf=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ai(e,t){if(t){if(jf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=null;function es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var di=null,Ln=null,Dn=null;function fa(e){if(e=$r(e)){if(typeof di!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Zl(t),di(e.stateNode,e.type,t))}}function Uu(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function Hu(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,fa(e),t)for(e=0;e<t.length;e++)fa(t[e])}}function Vu(e,t){return e(t)}function Wu(){}var Io=!1;function Qu(e,t,n){if(Io)return e(t,n);Io=!0;try{return Vu(e,t,n)}finally{Io=!1,(Ln!==null||Dn!==null)&&(Wu(),Hu())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var fi=!1;if(Nt)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){fi=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{fi=!1}function Ef(e,t,n,r,l,o,i,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var cr=!1,jl=null,El=!1,pi=null,zf={onError:function(e){cr=!0,jl=e}};function Pf(e,t,n,r,l,o,i,s,a){cr=!1,jl=null,Ef.apply(zf,arguments)}function _f(e,t,n,r,l,o,i,s,a){if(Pf.apply(this,arguments),cr){if(cr){var d=jl;cr=!1,jl=null}else throw Error(w(198));El||(El=!0,pi=d)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pa(e){if(hn(e)!==e)throw Error(w(188))}function If(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return pa(l),e;if(o===r)return pa(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Gu(e){return e=If(e),e!==null?Yu(e):null}function Yu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yu(e);if(t!==null)return t;e=e.sibling}return null}var Xu=Ve.unstable_scheduleCallback,ma=Ve.unstable_cancelCallback,Tf=Ve.unstable_shouldYield,Mf=Ve.unstable_requestPaint,ie=Ve.unstable_now,Lf=Ve.unstable_getCurrentPriorityLevel,ts=Ve.unstable_ImmediatePriority,Ju=Ve.unstable_UserBlockingPriority,zl=Ve.unstable_NormalPriority,Df=Ve.unstable_LowPriority,qu=Ve.unstable_IdlePriority,Yl=null,mt=null;function Of(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Yl,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:$f,Rf=Math.log,Af=Math.LN2;function $f(e){return e>>>=0,e===0?32:31-(Rf(e)/Af|0)|0}var Zr=64,el=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Pl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=sr(s):(o&=i,o!==0&&(r=sr(o)))}else i=n&~l,i!==0?r=sr(i):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function Ff(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=Ff(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zu(){var e=Zr;return Zr<<=1,!(Zr&4194240)&&(Zr=64),e}function To(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function bf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ns(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var V=0;function ec(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tc,rs,nc,rc,lc,hi=!1,tl=[],Bt=null,bt=null,Ut=null,kr=new Map,Sr=new Map,Rt=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=$r(t),t!==null&&rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Hf(e,t,n,r,l){switch(t){case"focusin":return Bt=Zn(Bt,e,t,n,r,l),!0;case"dragenter":return bt=Zn(bt,e,t,n,r,l),!0;case"mouseover":return Ut=Zn(Ut,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return kr.set(o,Zn(kr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Zn(Sr.get(o)||null,e,t,n,r,l)),!0}return!1}function oc(e){var t=nn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ku(n),t!==null){e.blockedOn=t,lc(e.priority,function(){nc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ml(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ci=r,n.target.dispatchEvent(r),ci=null}else return t=$r(n),t!==null&&rs(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){ml(e)&&n.delete(t)}function Vf(){hi=!1,Bt!==null&&ml(Bt)&&(Bt=null),bt!==null&&ml(bt)&&(bt=null),Ut!==null&&ml(Ut)&&(Ut=null),kr.forEach(ga),Sr.forEach(ga)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,hi||(hi=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Vf)))}function Nr(e){function t(l){return er(l,e)}if(0<tl.length){er(tl[0],e);for(var n=1;n<tl.length;n++){var r=tl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&er(Bt,e),bt!==null&&er(bt,e),Ut!==null&&er(Ut,e),kr.forEach(t),Sr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)oc(n),n.blockedOn===null&&Rt.shift()}var On=zt.ReactCurrentBatchConfig,_l=!0;function Wf(e,t,n,r){var l=V,o=On.transition;On.transition=null;try{V=1,ls(e,t,n,r)}finally{V=l,On.transition=o}}function Qf(e,t,n,r){var l=V,o=On.transition;On.transition=null;try{V=4,ls(e,t,n,r)}finally{V=l,On.transition=o}}function ls(e,t,n,r){if(_l){var l=gi(e,t,n,r);if(l===null)bo(e,t,r,Il,n),ha(e,r);else if(Hf(l,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<Uf.indexOf(e)){for(;l!==null;){var o=$r(l);if(o!==null&&tc(o),o=gi(e,t,n,r),o===null&&bo(e,t,r,Il,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else bo(e,t,r,null,n)}}var Il=null;function gi(e,t,n,r){if(Il=null,e=es(r),e=nn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ku(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Il=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lf()){case ts:return 1;case Ju:return 4;case zl:case Df:return 16;case qu:return 536870912;default:return 16}default:return 16}}var $t=null,os=null,hl=null;function sc(){if(hl)return hl;var e,t=os,n=t.length,r,l="value"in $t?$t.value:$t.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return hl=l.slice(e,1<r?1-r:void 0)}function gl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function ya(){return!1}function Qe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?nl:ya,this.isPropagationStopped=ya,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=Qe(Qn),Ar=re({},Qn,{view:0,detail:0}),Kf=Qe(Ar),Mo,Lo,tr,Xl=re({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Mo=e.screenX-tr.screenX,Lo=e.screenY-tr.screenY):Lo=Mo=0,tr=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Lo}}),va=Qe(Xl),Gf=re({},Xl,{dataTransfer:0}),Yf=Qe(Gf),Xf=re({},Ar,{relatedTarget:0}),Do=Qe(Xf),Jf=re({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=Qe(Jf),Zf=re({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ep=Qe(Zf),tp=re({},Qn,{data:0}),xa=Qe(tp),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lp[e])?!!t[e]:!1}function ss(){return op}var ip=re({},Ar,{key:function(e){if(e.key){var t=np[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=Qe(ip),ap=re({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=Qe(ap),up=re({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),cp=Qe(up),dp=re({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fp=Qe(dp),pp=re({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mp=Qe(pp),hp=[9,13,27,32],as=Nt&&"CompositionEvent"in window,dr=null;Nt&&"documentMode"in document&&(dr=document.documentMode);var gp=Nt&&"TextEvent"in window&&!dr,ac=Nt&&(!as||dr&&8<dr&&11>=dr),ka=" ",Sa=!1;function uc(e,t){switch(e){case"keyup":return hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function yp(e,t){switch(e){case"compositionend":return cc(t);case"keypress":return t.which!==32?null:(Sa=!0,ka);case"textInput":return e=t.data,e===ka&&Sa?null:e;default:return null}}function vp(e,t){if(Sn)return e==="compositionend"||!as&&uc(e,t)?(e=sc(),hl=os=$t=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ac&&t.locale!=="ko"?null:t.data;default:return null}}var xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xp[e.type]:t==="textarea"}function dc(e,t,n,r){Uu(r),t=Tl(t,"onChange"),0<t.length&&(n=new is("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Cr=null;function wp(e){Sc(e,0)}function Jl(e){var t=jn(e);if(Ou(t))return e}function kp(e,t){if(e==="change")return t}var fc=!1;if(Nt){var Oo;if(Nt){var Ro="oninput"in document;if(!Ro){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),Ro=typeof Ca.oninput=="function"}Oo=Ro}else Oo=!1;fc=Oo&&(!document.documentMode||9<document.documentMode)}function ja(){fr&&(fr.detachEvent("onpropertychange",pc),Cr=fr=null)}function pc(e){if(e.propertyName==="value"&&Jl(Cr)){var t=[];dc(t,Cr,e,es(e)),Qu(wp,t)}}function Sp(e,t,n){e==="focusin"?(ja(),fr=t,Cr=n,fr.attachEvent("onpropertychange",pc)):e==="focusout"&&ja()}function Np(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(Cr)}function Cp(e,t){if(e==="click")return Jl(t)}function jp(e,t){if(e==="input"||e==="change")return Jl(t)}function Ep(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Ep;function jr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!qo.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function Ea(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function za(e,t){var n=Ea(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ea(n)}}function mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=Cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cl(e.document)}return t}function us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zp(e){var t=hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mc(n.ownerDocument.documentElement,n)){if(r!==null&&us(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=za(n,o);var i=za(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pp=Nt&&"documentMode"in document&&11>=document.documentMode,Nn=null,yi=null,pr=null,vi=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vi||Nn==null||Nn!==Cl(r)||(r=Nn,"selectionStart"in r&&us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&jr(pr,r)||(pr=r,r=Tl(yi,"onSelect"),0<r.length&&(t=new is("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function rl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Ao={},gc={};Nt&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function ql(e){if(Ao[e])return Ao[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gc)return Ao[e]=t[n];return e}var yc=ql("animationend"),vc=ql("animationiteration"),xc=ql("animationstart"),wc=ql("transitionend"),kc=new Map,_a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){kc.set(e,t),mn(t,[e])}for(var $o=0;$o<_a.length;$o++){var Fo=_a[$o],_p=Fo.toLowerCase(),Ip=Fo[0].toUpperCase()+Fo.slice(1);Xt(_p,"on"+Ip)}Xt(yc,"onAnimationEnd");Xt(vc,"onAnimationIteration");Xt(xc,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(wc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Ia(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_f(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;Ia(l,s,d),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,d=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;Ia(l,s,d),o=a}}}if(El)throw e=pi,El=!1,pi=null,e}function Y(e,t){var n=t[Ni];n===void 0&&(n=t[Ni]=new Set);var r=e+"__bubble";n.has(r)||(Nc(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Nc(n,e,r,t)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ll]){e[ll]=!0,Iu.forEach(function(n){n!=="selectionchange"&&(Tp.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ll]||(t[ll]=!0,Bo("selectionchange",!1,t))}}function Nc(e,t,n,r){switch(ic(t)){case 1:var l=Wf;break;case 4:l=Qf;break;default:l=ls}n=l.bind(null,t,n,e),l=void 0,!fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function bo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=nn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Qu(function(){var d=o,v=es(n),g=[];e:{var h=kc.get(e);if(h!==void 0){var k=is,N=e;switch(e){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":k=sp;break;case"focusin":N="focus",k=Do;break;case"focusout":N="blur",k=Do;break;case"beforeblur":case"afterblur":k=Do;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=cp;break;case yc:case vc:case xc:k=qf;break;case wc:k=fp;break;case"scroll":k=Kf;break;case"wheel":k=mp;break;case"copy":case"cut":case"paste":k=ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=wa}var E=(t&4)!==0,F=!E&&e==="scroll",p=E?h!==null?h+"Capture":null:h;E=[];for(var c=d,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=wr(c,p),x!=null&&E.push(zr(c,x,m)))),F)break;c=c.return}0<E.length&&(h=new k(h,N,null,n,v),g.push({event:h,listeners:E}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==ci&&(N=n.relatedTarget||n.fromElement)&&(nn(N)||N[Ct]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=d,N=N?nn(N):null,N!==null&&(F=hn(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=d),k!==N)){if(E=va,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=wa,x="onPointerLeave",p="onPointerEnter",c="pointer"),F=k==null?h:jn(k),m=N==null?h:jn(N),h=new E(x,c+"leave",k,n,v),h.target=F,h.relatedTarget=m,x=null,nn(v)===d&&(E=new E(p,c+"enter",N,n,v),E.target=m,E.relatedTarget=F,x=E),F=x,k&&N)t:{for(E=k,p=N,c=0,m=E;m;m=xn(m))c++;for(m=0,x=p;x;x=xn(x))m++;for(;0<c-m;)E=xn(E),c--;for(;0<m-c;)p=xn(p),m--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break t;E=xn(E),p=xn(p)}E=null}else E=null;k!==null&&Ta(g,h,k,E,!1),N!==null&&F!==null&&Ta(g,F,N,E,!0)}}e:{if(h=d?jn(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var j=kp;else if(Na(h))if(fc)j=jp;else{j=Np;var S=Sp}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Cp);if(j&&(j=j(e,d))){dc(g,j,n,v);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&oi(h,"number",h.value)}switch(S=d?jn(d):window,e){case"focusin":(Na(S)||S.contentEditable==="true")&&(Nn=S,yi=d,pr=null);break;case"focusout":pr=yi=Nn=null;break;case"mousedown":vi=!0;break;case"contextmenu":case"mouseup":case"dragend":vi=!1,Pa(g,n,v);break;case"selectionchange":if(Pp)break;case"keydown":case"keyup":Pa(g,n,v)}var I;if(as)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Sn?uc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ac&&n.locale!=="ko"&&(Sn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Sn&&(I=sc()):($t=v,os="value"in $t?$t.value:$t.textContent,Sn=!0)),S=Tl(d,O),0<S.length&&(O=new xa(O,e,null,n,v),g.push({event:O,listeners:S}),I?O.data=I:(I=cc(n),I!==null&&(O.data=I)))),(I=gp?yp(e,n):vp(e,n))&&(d=Tl(d,"onBeforeInput"),0<d.length&&(v=new xa("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:d}),v.data=I))}Sc(g,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=wr(e,n),o!=null&&r.unshift(zr(e,o,l)),o=wr(e,t),o!=null&&r.push(zr(e,o,l))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=wr(n,o),a!=null&&i.unshift(zr(n,a,s))):l||(a=wr(n,o),a!=null&&i.push(zr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Mp=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Lp,"")}function ol(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(w(425))}function Ml(){}var xi=null,wi=null;function ki(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Si=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,La=typeof Promise=="function"?Promise:void 0,Op=typeof queueMicrotask=="function"?queueMicrotask:typeof La<"u"?function(e){return La.resolve(null).then(e).catch(Rp)}:Si;function Rp(e){setTimeout(function(){throw e})}function Uo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Nr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Kn,Pr="__reactProps$"+Kn,Ct="__reactContainer$"+Kn,Ni="__reactEvents$"+Kn,Ap="__reactListeners$"+Kn,$p="__reactHandles$"+Kn;function nn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Da(e);e!==null;){if(n=e[pt])return n;e=Da(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[pt]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Zl(e){return e[Pr]||null}var Ci=[],En=-1;function Jt(e){return{current:e}}function X(e){0>En||(e.current=Ci[En],Ci[En]=null,En--)}function G(e,t){En++,Ci[En]=e.current,e.current=t}var Yt={},Ee=Jt(Yt),Re=Jt(!1),un=Yt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ae(e){return e=e.childContextTypes,e!=null}function Ll(){X(Re),X(Ee)}function Oa(e,t,n){if(Ee.current!==Yt)throw Error(w(168));G(Ee,t),G(Re,n)}function Cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Sf(e)||"Unknown",l));return re({},n,r)}function Dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,un=Ee.current,G(Ee,e),G(Re,Re.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Cc(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,X(Re),X(Ee),G(Ee,e)):X(Re),G(Re,n)}var xt=null,eo=!1,Ho=!1;function jc(e){xt===null?xt=[e]:xt.push(e)}function Fp(e){eo=!0,jc(e)}function qt(){if(!Ho&&xt!==null){Ho=!0;var e=0,t=V;try{var n=xt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,eo=!1}catch(l){throw xt!==null&&(xt=xt.slice(e+1)),Xu(ts,qt),l}finally{V=t,Ho=!1}}return null}var zn=[],Pn=0,Ol=null,Rl=0,Ge=[],Ye=0,cn=null,wt=1,kt="";function en(e,t){zn[Pn++]=Rl,zn[Pn++]=Ol,Ol=e,Rl=t}function Ec(e,t,n){Ge[Ye++]=wt,Ge[Ye++]=kt,Ge[Ye++]=cn,cn=e;var r=wt;e=kt;var l=32-at(r)-1;r&=~(1<<l),n+=1;var o=32-at(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,wt=1<<32-at(t)+l|n<<l|r,kt=o+e}else wt=1<<o|n<<l|r,kt=e}function cs(e){e.return!==null&&(en(e,1),Ec(e,1,0))}function ds(e){for(;e===Ol;)Ol=zn[--Pn],zn[Pn]=null,Rl=zn[--Pn],zn[Pn]=null;for(;e===cn;)cn=Ge[--Ye],Ge[Ye]=null,kt=Ge[--Ye],Ge[Ye]=null,wt=Ge[--Ye],Ge[Ye]=null}var He=null,Ue=null,q=!1,st=null;function zc(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:wt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(q){var t=Ue;if(t){var n=t;if(!Aa(e,t)){if(ji(e))throw Error(w(418));t=Ht(n.nextSibling);var r=He;t&&Aa(e,t)?zc(r,n):(e.flags=e.flags&-4097|2,q=!1,He=e)}}else{if(ji(e))throw Error(w(418));e.flags=e.flags&-4097|2,q=!1,He=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function il(e){if(e!==He)return!1;if(!q)return $a(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ki(e.type,e.memoizedProps)),t&&(t=Ue)){if(ji(e))throw Pc(),Error(w(418));for(;t;)zc(e,t),t=Ht(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?Ht(e.stateNode.nextSibling):null;return!0}function Pc(){for(var e=Ue;e;)e=Ht(e.nextSibling)}function Bn(){Ue=He=null,q=!1}function fs(e){st===null?st=[e]:st.push(e)}var Bp=zt.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fa(e){var t=e._init;return t(e._payload)}function _c(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Kt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Xo(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var j=m.type;return j===kn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Fa(j)===c.type)?(x=l(c,m.props),x.ref=nr(p,c,m),x.return=p,x):(x=Nl(m.type,m.key,m.props,null,p.mode,x),x.ref=nr(p,c,m),x.return=p,x)}function d(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Jo(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,j){return c===null||c.tag!==7?(c=an(m,p.mode,x,j),c.return=p,c):(c=l(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Xr:return m=Nl(c.type,c.key,c.props,null,p.mode,m),m.ref=nr(p,null,c),m.return=p,m;case wn:return c=Jo(c,p.mode,m),c.return=p,c;case Dt:var x=c._init;return g(p,x(c._payload),m)}if(ir(c)||Jn(c))return c=an(c,p.mode,m,null),c.return=p,c;sl(p,c)}return null}function h(p,c,m,x){var j=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:return m.key===j?a(p,c,m,x):null;case wn:return m.key===j?d(p,c,m,x):null;case Dt:return j=m._init,h(p,c,j(m._payload),x)}if(ir(m)||Jn(m))return j!==null?null:v(p,c,m,x,null);sl(p,m)}return null}function k(p,c,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,j);case wn:return p=p.get(x.key===null?m:x.key)||null,d(c,p,x,j);case Dt:var S=x._init;return k(p,c,m,S(x._payload),j)}if(ir(x)||Jn(x))return p=p.get(m)||null,v(c,p,x,j,null);sl(c,x)}return null}function N(p,c,m,x){for(var j=null,S=null,I=c,O=c=0,Z=null;I!==null&&O<m.length;O++){I.index>O?(Z=I,I=null):Z=I.sibling;var M=h(p,I,m[O],x);if(M===null){I===null&&(I=Z);break}e&&I&&M.alternate===null&&t(p,I),c=o(M,c,O),S===null?j=M:S.sibling=M,S=M,I=Z}if(O===m.length)return n(p,I),q&&en(p,O),j;if(I===null){for(;O<m.length;O++)I=g(p,m[O],x),I!==null&&(c=o(I,c,O),S===null?j=I:S.sibling=I,S=I);return q&&en(p,O),j}for(I=r(p,I);O<m.length;O++)Z=k(I,p,O,m[O],x),Z!==null&&(e&&Z.alternate!==null&&I.delete(Z.key===null?O:Z.key),c=o(Z,c,O),S===null?j=Z:S.sibling=Z,S=Z);return e&&I.forEach(function(ge){return t(p,ge)}),q&&en(p,O),j}function E(p,c,m,x){var j=Jn(m);if(typeof j!="function")throw Error(w(150));if(m=j.call(m),m==null)throw Error(w(151));for(var S=j=null,I=c,O=c=0,Z=null,M=m.next();I!==null&&!M.done;O++,M=m.next()){I.index>O?(Z=I,I=null):Z=I.sibling;var ge=h(p,I,M.value,x);if(ge===null){I===null&&(I=Z);break}e&&I&&ge.alternate===null&&t(p,I),c=o(ge,c,O),S===null?j=ge:S.sibling=ge,S=ge,I=Z}if(M.done)return n(p,I),q&&en(p,O),j;if(I===null){for(;!M.done;O++,M=m.next())M=g(p,M.value,x),M!==null&&(c=o(M,c,O),S===null?j=M:S.sibling=M,S=M);return q&&en(p,O),j}for(I=r(p,I);!M.done;O++,M=m.next())M=k(I,p,O,M.value,x),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?O:M.key),c=o(M,c,O),S===null?j=M:S.sibling=M,S=M);return e&&I.forEach(function(Pt){return t(p,Pt)}),q&&en(p,O),j}function F(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xr:e:{for(var j=m.key,S=c;S!==null;){if(S.key===j){if(j=m.type,j===kn){if(S.tag===7){n(p,S.sibling),c=l(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dt&&Fa(j)===S.type){n(p,S.sibling),c=l(S,m.props),c.ref=nr(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===kn?(c=an(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=Nl(m.type,m.key,m.props,null,p.mode,x),x.ref=nr(p,c,m),x.return=p,p=x)}return i(p);case wn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Jo(m,p.mode,x),c.return=p,p=c}return i(p);case Dt:return S=m._init,F(p,c,S(m._payload),x)}if(ir(m))return N(p,c,m,x);if(Jn(m))return E(p,c,m,x);sl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=Xo(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return F}var bn=_c(!0),Ic=_c(!1),Al=Jt(null),$l=null,_n=null,ps=null;function ms(){ps=_n=$l=null}function hs(e){var t=Al.current;X(Al),e._currentValue=t}function zi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){$l=e,ps=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(ps!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if($l===null)throw Error(w(308));_n=e,$l.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var rn=null;function gs(e){rn===null?rn=[e]:rn.push(e)}function Tc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,gs(t)):(n.next=l.next,l.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,jt(e,n)}return l=r.interleaved,l===null?(t.next=t,gs(r)):(t.next=l.next,l.next=t),r.interleaved=t,jt(e,n)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ns(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fl(e,t,n,r){var l=e.updateQueue;Ot=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=a))}if(o!==null){var g=l.baseState;i=0,v=d=a=null,s=o;do{var h=s.lane,k=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,E=s;switch(h=t,k=n,E.tag){case 1:if(N=E.payload,typeof N=="function"){g=N.call(k,g,h);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=E.payload,h=typeof N=="function"?N.call(k,g,h):N,h==null)break e;g=re({},g,h);break e;case 2:Ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=k,a=g):v=v.next=k,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(a=g),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);fn|=i,e.lanes=i,e.memoizedState=g}}function ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Fr={},ht=Jt(Fr),_r=Jt(Fr),Ir=Jt(Fr);function ln(e){if(e===Fr)throw Error(w(174));return e}function vs(e,t){switch(G(Ir,t),G(_r,e),G(ht,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=si(t,e)}X(ht),G(ht,t)}function Un(){X(ht),X(_r),X(Ir)}function Lc(e){ln(Ir.current);var t=ln(ht.current),n=si(t,e.type);t!==n&&(G(_r,e),G(ht,n))}function xs(e){_r.current===e&&(X(ht),X(_r))}var te=Jt(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=[];function ws(){for(var e=0;e<Vo.length;e++)Vo[e]._workInProgressVersionPrimary=null;Vo.length=0}var vl=zt.ReactCurrentDispatcher,Wo=zt.ReactCurrentBatchConfig,dn=0,ne=null,ue=null,me=null,bl=!1,mr=!1,Tr=0,bp=0;function Ne(){throw Error(w(321))}function ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ss(e,t,n,r,l,o){if(dn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vl.current=e===null||e.memoizedState===null?Wp:Qp,e=n(r,l),mr){o=0;do{if(mr=!1,Tr=0,25<=o)throw Error(w(301));o+=1,me=ue=null,t.updateQueue=null,vl.current=Kp,e=n(r,l)}while(mr)}if(vl.current=Ul,t=ue!==null&&ue.next!==null,dn=0,me=ue=ne=null,bl=!1,t)throw Error(w(300));return e}function Ns(){var e=Tr!==0;return Tr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=e:me=me.next=e,me}function Ze(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=me===null?ne.memoizedState:me.next;if(t!==null)me=t,ue=e;else{if(e===null)throw Error(w(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?ne.memoizedState=me=e:me=me.next=e}return me}function Mr(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=Ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ue,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,d=o;do{var v=d.lane;if((dn&v)===v)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=g,i=r):a=a.next=g,ne.lanes|=v,fn|=v}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ne.lanes|=o,fn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ko(e){var t=Ze(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ct(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dc(){}function Oc(e,t){var n=ne,r=Ze(),l=t(),o=!ct(r.memoizedState,l);if(o&&(r.memoizedState=l,Oe=!0),r=r.queue,Cs($c.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Ac.bind(null,n,r,l,t),void 0,null),he===null)throw Error(w(349));dn&30||Rc(n,t,l)}return l}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ac(e,t,n,r){t.value=n,t.getSnapshot=r,Fc(t)&&Bc(e)}function $c(e,t,n){return n(function(){Fc(t)&&Bc(e)})}function Fc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Bc(e){var t=jt(e,1);t!==null&&ut(t,e,1,-1)}function Ua(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Vp.bind(null,ne,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bc(){return Ze().memoizedState}function xl(e,t,n,r){var l=ft();ne.flags|=e,l.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function to(e,t,n,r){var l=Ze();r=r===void 0?null:r;var o=void 0;if(ue!==null){var i=ue.memoizedState;if(o=i.destroy,r!==null&&ks(r,i.deps)){l.memoizedState=Lr(t,n,o,r);return}}ne.flags|=e,l.memoizedState=Lr(1|t,n,o,r)}function Ha(e,t){return xl(8390656,8,e,t)}function Cs(e,t){return to(2048,8,e,t)}function Uc(e,t){return to(4,2,e,t)}function Hc(e,t){return to(4,4,e,t)}function Vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wc(e,t,n){return n=n!=null?n.concat([e]):null,to(4,4,Vc.bind(null,t,e),n)}function js(){}function Qc(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kc(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gc(e,t,n){return dn&21?(ct(n,t)||(n=Zu(),ne.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Up(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Wo.transition;Wo.transition={};try{e(!1),t()}finally{V=n,Wo.transition=r}}function Yc(){return Ze().memoizedState}function Hp(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xc(e))Jc(t,n);else if(n=Tc(e,t,n,r),n!==null){var l=Te();ut(n,e,r,l),qc(n,t,r)}}function Vp(e,t,n){var r=Qt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))Jc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(l.next=l,gs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Tc(e,t,l,r),n!==null&&(l=Te(),ut(n,e,r,l),qc(n,t,r))}}function Xc(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Jc(e,t){mr=bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ns(e,n)}}var Ul={readContext:qe,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Wp={readContext:qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xl(4194308,4,Vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xl(4194308,4,e,t)},useInsertionEffect:function(e,t){return xl(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hp.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Ua,useDebugValue:js,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Ua(!1),t=e[0];return e=Up.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,l=ft();if(q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),he===null)throw Error(w(349));dn&30||Rc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ha($c.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,Ac.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=he.identifierPrefix;if(q){var n=kt,r=wt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qp={readContext:qe,useCallback:Qc,useContext:qe,useEffect:Cs,useImperativeHandle:Wc,useInsertionEffect:Uc,useLayoutEffect:Hc,useMemo:Kc,useReducer:Qo,useRef:bc,useState:function(){return Qo(Mr)},useDebugValue:js,useDeferredValue:function(e){var t=Ze();return Gc(t,ue.memoizedState,e)},useTransition:function(){var e=Qo(Mr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Oc,useId:Yc,unstable_isNewReconciler:!1},Kp={readContext:qe,useCallback:Qc,useContext:qe,useEffect:Cs,useImperativeHandle:Wc,useInsertionEffect:Uc,useLayoutEffect:Hc,useMemo:Kc,useReducer:Ko,useRef:bc,useState:function(){return Ko(Mr)},useDebugValue:js,useDeferredValue:function(e){var t=Ze();return ue===null?t.memoizedState=e:Gc(t,ue.memoizedState,e)},useTransition:function(){var e=Ko(Mr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Dc,useSyncExternalStore:Oc,useId:Yc,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var no={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Qt(e),o=St(r,l);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,l),t!==null&&(ut(t,e,l,r),yl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Qt(e),o=St(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,l),t!==null&&(ut(t,e,l,r),yl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Qt(e),l=St(n,r);l.tag=2,t!=null&&(l.callback=t),t=Vt(e,l,r),t!==null&&(ut(t,e,r,n),yl(t,e,r))}};function Va(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(l,o):!0}function Zc(e,t,n){var r=!1,l=Yt,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(l=Ae(t)?un:Ee.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,l):Yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=no,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&no.enqueueReplaceState(t,t.state,null)}function _i(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ys(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=qe(o):(o=Ae(t)?un:Ee.current,l.context=Fn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&no.enqueueReplaceState(l,l.state,null),Fl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=kf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gp=typeof WeakMap=="function"?WeakMap:Map;function ed(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vl||(Vl=!0,Bi=r),Ii(e,t)},n}function td(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ii(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=am.bind(null,e,t,n),t.then(e,e))}function Ka(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ga(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var Yp=zt.ReactCurrentOwner,Oe=!1;function Ie(e,t,n,r){t.child=e===null?Ic(t,null,n,r):bn(t,e.child,n,r)}function Ya(e,t,n,r,l){n=n.render;var o=t.ref;return Rn(t,l),r=Ss(e,t,n,r,o,l),n=Ns(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(q&&n&&cs(t),t.flags|=1,Ie(e,t,r,l),t.child)}function Xa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ls(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,nd(e,t,o,r,l)):(e=Nl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(i,r)&&e.ref===t.ref)return Et(e,t,l)}return t.flags|=1,e=Kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function nd(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Et(e,t,l)}return Ti(e,t,n,r,l)}function rd(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Tn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Tn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(Tn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(Tn,be),be|=r;return Ie(e,t,l,n),t.child}function ld(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var o=Ae(n)?un:Ee.current;return o=Fn(t,o),Rn(t,l),n=Ss(e,t,n,r,o,l),r=Ns(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Et(e,t,l)):(q&&r&&cs(t),t.flags|=1,Ie(e,t,n,l),t.child)}function Ja(e,t,n,r,l){if(Ae(n)){var o=!0;Dl(t)}else o=!1;if(Rn(t,l),t.stateNode===null)wl(e,t),Zc(t,n,r),_i(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=qe(d):(d=Ae(n)?un:Ee.current,d=Fn(t,d));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Wa(t,i,r,d),Ot=!1;var h=t.memoizedState;i.state=h,Fl(t,r,i,l),a=t.memoizedState,s!==r||h!==a||Re.current||Ot?(typeof v=="function"&&(Pi(t,n,v,r),a=t.memoizedState),(s=Ot||Va(t,n,s,r,h,a,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Mc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ot(t.type,s),i.props=d,g=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Ae(n)?un:Ee.current,a=Fn(t,a));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||h!==a)&&Wa(t,i,r,a),Ot=!1,h=t.memoizedState,i.state=h,Fl(t,r,i,l);var N=t.memoizedState;s!==g||h!==N||Re.current||Ot?(typeof k=="function"&&(Pi(t,n,k,r),N=t.memoizedState),(d=Ot||Va(t,n,d,r,h,N,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Mi(e,t,n,r,o,l)}function Mi(e,t,n,r,l,o){ld(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Ra(t,n,!1),Et(e,t,o);r=t.stateNode,Yp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=bn(t,e.child,null,o),t.child=bn(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,l&&Ra(t,n,!0),t.child}function od(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),vs(e,t.containerInfo)}function qa(e,t,n,r,l){return Bn(),fs(l),t.flags|=256,Ie(e,t,n,r),t.child}var Li={dehydrated:null,treeContext:null,retryLane:0};function Di(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,n){var r=t.pendingProps,l=te.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),G(te,l&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=oo(i,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Di(n),t.memoizedState=Li,e):Es(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Xp(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Kt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Kt(s,o):(o=an(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Di(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Li,r}return o=e.child,e=o.sibling,r=Kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Es(e,t){return t=oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&fs(r),bn(t,e.child,null,n),e=Es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xp(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Go(Error(w(422))),al(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=oo({mode:"visible",children:r.children},l,0,null),o=an(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bn(t,e.child,null,i),t.child.memoizedState=Di(i),t.memoizedState=Li,o);if(!(t.mode&1))return al(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Go(o,r,void 0),al(e,t,i,r)}if(s=(i&e.childLanes)!==0,Oe||s){if(r=he,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,jt(e,l),ut(r,e,l,-1))}return Ms(),r=Go(Error(w(421))),al(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=um.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ue=Ht(l.nextSibling),He=t,q=!0,st=null,e!==null&&(Ge[Ye++]=wt,Ge[Ye++]=kt,Ge[Ye++]=cn,wt=e.id,kt=e.overflow,cn=t),t=Es(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zi(e.return,t,n)}function Yo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function sd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(te,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yo(t,!0,n,null,o);break;case"together":Yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jp(e,t,n){switch(t.tag){case 3:od(t),Bn();break;case 5:Lc(t);break;case 1:Ae(t.type)&&Dl(t);break;case 4:vs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;G(Al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?id(e,t,n):(G(te,te.current&1),e=Et(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,rd(e,t,n)}return Et(e,t,n)}var ad,Oi,ud,cd;ad=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oi=function(){};ud=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,ln(ht.current);var o=null;switch(n){case"input":l=ri(e,l),r=ri(e,r),o=[];break;case"select":l=re({},l,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":l=ii(e,l),r=ii(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ml)}ai(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(vr.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(vr.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&Y("scroll",e),o||s===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};cd=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qp(e,t,n){var r=t.pendingProps;switch(ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ae(t.type)&&Ll(),Ce(t),null;case 3:return r=t.stateNode,Un(),X(Re),X(Ee),ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(il(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Hi(st),st=null))),Oi(e,t),Ce(t),null;case 5:xs(t);var l=ln(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)ud(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return Ce(t),null}if(e=ln(ht.current),il(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[Pr]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(l=0;l<ar.length;l++)Y(ar[l],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":aa(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":ca(r,o),Y("invalid",r)}ai(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ol(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ol(r.textContent,s,e),l=["children",""+s]):vr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Y("scroll",r)}switch(n){case"input":Jr(r),ua(r,o,!0);break;case"textarea":Jr(r),da(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ml)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$u(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[Pr]=r,ad(e,t,!1,!1),t.stateNode=e;e:{switch(i=ui(n,r),n){case"dialog":Y("cancel",e),Y("close",e),l=r;break;case"iframe":case"object":case"embed":Y("load",e),l=r;break;case"video":case"audio":for(l=0;l<ar.length;l++)Y(ar[l],e);l=r;break;case"source":Y("error",e),l=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),l=r;break;case"details":Y("toggle",e),l=r;break;case"input":aa(e,r),l=ri(e,r),Y("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=re({},r,{value:void 0}),Y("invalid",e);break;case"textarea":ca(e,r),l=ii(e,r),Y("invalid",e);break;default:l=r}ai(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?bu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Fu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Y("scroll",e):a!=null&&Xi(e,o,a,i))}switch(n){case"input":Jr(e),ua(e,r,!1);break;case"textarea":Jr(e),da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)cd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=ln(Ir.current),ln(ht.current),il(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ce(t),null;case 13:if(X(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ue!==null&&t.mode&1&&!(t.flags&128))Pc(),Bn(),t.flags|=98560,o=!1;else if(o=il(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[pt]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else st!==null&&(Hi(st),st=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ce===0&&(ce=3):Ms())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Un(),Oi(e,t),e===null&&Er(t.stateNode.containerInfo),Ce(t),null;case 10:return hs(t.type._context),Ce(t),null;case 17:return Ae(t.type)&&Ll(),Ce(t),null;case 19:if(X(te),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)rr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Bl(e),i!==null){for(t.flags|=128,rr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Vn&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!q)return Ce(t),null}else 2*ie()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=te.current,G(te,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ts(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Zp(e,t){switch(ds(t),t.tag){case 1:return Ae(t.type)&&Ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),X(Re),X(Ee),ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xs(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return Un(),null;case 10:return hs(t.type._context),null;case 22:case 23:return Ts(),null;case 24:return null;default:return null}}var ul=!1,je=!1,em=typeof WeakSet=="function"?WeakSet:Set,T=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Ri(e,t,n){try{n()}catch(r){oe(e,t,r)}}var eu=!1;function tm(e,t){if(xi=_l,e=hc(),us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,d=0,v=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(a=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++v===r&&(a=i),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(wi={focusedElem:e,selectionRange:n},_l=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var E=N.memoizedProps,F=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:ot(t.type,E),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){oe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return N=eu,eu=!1,N}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ri(t,n,o)}l=l.next}while(l!==r)}}function ro(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Pr],delete t[Ni],delete t[Ap],delete t[$p])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fd(e){return e.tag===5||e.tag===3||e.tag===4}function tu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ml));else if(r!==4&&(e=e.child,e!==null))for($i(e,t,n),e=e.sibling;e!==null;)$i(e,t,n),e=e.sibling}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}var ye=null,it=!1;function Lt(e,t,n){for(n=n.child;n!==null;)pd(e,t,n),n=n.sibling}function pd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Yl,n)}catch{}switch(n.tag){case 5:je||In(n,t);case 6:var r=ye,l=it;ye=null,Lt(e,t,n),ye=r,it=l,ye!==null&&(it?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(it?(e=ye,n=n.stateNode,e.nodeType===8?Uo(e.parentNode,n):e.nodeType===1&&Uo(e,n),Nr(e)):Uo(ye,n.stateNode));break;case 4:r=ye,l=it,ye=n.stateNode.containerInfo,it=!0,Lt(e,t,n),ye=r,it=l;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Ri(n,t,i),l=l.next}while(l!==r)}Lt(e,t,n);break;case 1:if(!je&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Lt(e,t,n),je=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function nu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new em),t.forEach(function(r){var l=cm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,it=!1;break e;case 3:ye=s.stateNode.containerInfo,it=!0;break e;case 4:ye=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(ye===null)throw Error(w(160));pd(o,i,l),ye=null,it=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){oe(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)md(t,e),t=t.sibling}function md(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),dt(e),r&4){try{hr(3,e,e.return),ro(3,e)}catch(E){oe(e,e.return,E)}try{hr(5,e,e.return)}catch(E){oe(e,e.return,E)}}break;case 1:lt(t,e),dt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(lt(t,e),dt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(E){oe(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ru(l,o),ui(s,i);var d=ui(s,o);for(i=0;i<a.length;i+=2){var v=a[i],g=a[i+1];v==="style"?bu(l,g):v==="dangerouslySetInnerHTML"?Fu(l,g):v==="children"?xr(l,g):Xi(l,v,g,d)}switch(s){case"input":li(l,o);break;case"textarea":Au(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Mn(l,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?Mn(l,!!o.multiple,o.defaultValue,!0):Mn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Pr]=o}catch(E){oe(e,e.return,E)}}break;case 6:if(lt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(E){oe(e,e.return,E)}}break;case 3:if(lt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(E){oe(e,e.return,E)}break;case 4:lt(t,e),dt(e);break;case 13:lt(t,e),dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(_s=ie())),r&4&&nu(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(je=(d=je)||v,lt(t,e),je=d):lt(t,e),dt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(T=e,v=e.child;v!==null;){for(g=T=v;T!==null;){switch(h=T,k=h.child,h.tag){case 0:case 11:case 14:case 15:hr(4,h,h.return);break;case 1:In(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(E){oe(r,n,E)}}break;case 5:In(h,h.return);break;case 22:if(h.memoizedState!==null){lu(g);continue}}k!==null?(k.return=h,T=k):lu(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,a=g.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Bu("display",i))}catch(E){oe(e,e.return,E)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(E){oe(e,e.return,E)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:lt(t,e),dt(e),r&4&&nu(e);break;case 21:break;default:lt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xr(l,""),r.flags&=-33);var o=tu(e);Fi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=tu(e);$i(e,s,i);break;default:throw Error(w(161))}}catch(a){oe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e,t,n){T=e,hd(e)}function hd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var l=T,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||ul;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||je;s=ul;var d=je;if(ul=i,(je=a)&&!d)for(T=l;T!==null;)i=T,a=i.child,i.tag===22&&i.memoizedState!==null?ou(l):a!==null?(a.return=i,T=a):ou(l);for(;o!==null;)T=o,hd(o),o=o.sibling;T=l,ul=s,je=d}ru(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,T=o):ru(e)}}function ru(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||ro(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ba(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ba(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Nr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}je||t.flags&512&&Ai(t)}catch(h){oe(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function lu(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ou(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ro(4,t)}catch(a){oe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){oe(t,l,a)}}var o=t.return;try{Ai(t)}catch(a){oe(t,o,a)}break;case 5:var i=t.return;try{Ai(t)}catch(a){oe(t,i,a)}}}catch(a){oe(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var rm=Math.ceil,Hl=zt.ReactCurrentDispatcher,zs=zt.ReactCurrentOwner,Je=zt.ReactCurrentBatchConfig,U=0,he=null,se=null,ve=0,be=0,Tn=Jt(0),ce=0,Dr=null,fn=0,lo=0,Ps=0,gr=null,De=null,_s=0,Vn=1/0,vt=null,Vl=!1,Bi=null,Wt=null,cl=!1,Ft=null,Wl=0,yr=0,bi=null,kl=-1,Sl=0;function Te(){return U&6?ie():kl!==-1?kl:kl=ie()}function Qt(e){return e.mode&1?U&2&&ve!==0?ve&-ve:Bp.transition!==null?(Sl===0&&(Sl=Zu()),Sl):(e=V,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function ut(e,t,n,r){if(50<yr)throw yr=0,bi=null,Error(w(185));Rr(e,n,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(lo|=n),ce===4&&At(e,ve)),$e(e,r),n===1&&U===0&&!(t.mode&1)&&(Vn=ie()+500,eo&&qt()))}function $e(e,t){var n=e.callbackNode;Bf(e,t);var r=Pl(e,e===he?ve:0);if(r===0)n!==null&&ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ma(n),t===1)e.tag===0?Fp(iu.bind(null,e)):jc(iu.bind(null,e)),Op(function(){!(U&6)&&qt()}),n=null;else{switch(ec(r)){case 1:n=ts;break;case 4:n=Ju;break;case 16:n=zl;break;case 536870912:n=qu;break;default:n=zl}n=Nd(n,gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gd(e,t){if(kl=-1,Sl=0,U&6)throw Error(w(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Pl(e,e===he?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ql(e,r);else{t=r;var l=U;U|=2;var o=vd();(he!==e||ve!==t)&&(vt=null,Vn=ie()+500,sn(e,t));do try{im();break}catch(s){yd(e,s)}while(!0);ms(),Hl.current=o,U=l,se!==null?t=0:(he=null,ve=0,t=ce)}if(t!==0){if(t===2&&(l=mi(e),l!==0&&(r=l,t=Ui(e,l))),t===1)throw n=Dr,sn(e,0),At(e,r),$e(e,ie()),n;if(t===6)At(e,r);else{if(l=e.current.alternate,!(r&30)&&!lm(l)&&(t=Ql(e,r),t===2&&(o=mi(e),o!==0&&(r=o,t=Ui(e,o))),t===1))throw n=Dr,sn(e,0),At(e,r),$e(e,ie()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:tn(e,De,vt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=_s+500-ie(),10<t)){if(Pl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Si(tn.bind(null,e,De,vt),t);break}tn(e,De,vt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-at(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rm(r/1960))-r,10<r){e.timeoutHandle=Si(tn.bind(null,e,De,vt),r);break}tn(e,De,vt);break;case 5:tn(e,De,vt);break;default:throw Error(w(329))}}}return $e(e,ie()),e.callbackNode===n?gd.bind(null,e):null}function Ui(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Ql(e,t),e!==2&&(t=De,De=n,t!==null&&Hi(t)),e}function Hi(e){De===null?De=e:De.push.apply(De,e)}function lm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Ps,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function iu(e){if(U&6)throw Error(w(327));An();var t=Pl(e,0);if(!(t&1))return $e(e,ie()),null;var n=Ql(e,t);if(e.tag!==0&&n===2){var r=mi(e);r!==0&&(t=r,n=Ui(e,r))}if(n===1)throw n=Dr,sn(e,0),At(e,t),$e(e,ie()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,De,vt),$e(e,ie()),null}function Is(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Vn=ie()+500,eo&&qt())}}function pn(e){Ft!==null&&Ft.tag===0&&!(U&6)&&An();var t=U;U|=1;var n=Je.transition,r=V;try{if(Je.transition=null,V=1,e)return e()}finally{V=r,Je.transition=n,U=t,!(U&6)&&qt()}}function Ts(){be=Tn.current,X(Tn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dp(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(ds(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:Un(),X(Re),X(Ee),ws();break;case 5:xs(r);break;case 4:Un();break;case 13:X(te);break;case 19:X(te);break;case 10:hs(r.type._context);break;case 22:case 23:Ts()}n=n.return}if(he=e,se=e=Kt(e.current,null),ve=be=t,ce=0,Dr=null,Ps=lo=fn=0,De=gr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}rn=null}return e}function yd(e,t){do{var n=se;try{if(ms(),vl.current=Ul,bl){for(var r=ne.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}bl=!1}if(dn=0,me=ue=ne=null,mr=!1,Tr=0,zs.current=null,n===null||n.return===null){ce=1,Dr=t,se=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=ve,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,v=s,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Ka(i);if(k!==null){k.flags&=-257,Ga(k,i,s,o,t),k.mode&1&&Qa(o,d,t),t=k,a=d;var N=t.updateQueue;if(N===null){var E=new Set;E.add(a),t.updateQueue=E}else N.add(a);break e}else{if(!(t&1)){Qa(o,d,t),Ms();break e}a=Error(w(426))}}else if(q&&s.mode&1){var F=Ka(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ga(F,i,s,o,t),fs(Hn(a,s));break e}}o=a=Hn(a,s),ce!==4&&(ce=2),gr===null?gr=[o]:gr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ed(o,a,t);Ba(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=td(o,s,t);Ba(o,x);break e}}o=o.return}while(o!==null)}wd(n)}catch(j){t=j,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function vd(){var e=Hl.current;return Hl.current=Ul,e===null?Ul:e}function Ms(){(ce===0||ce===3||ce===2)&&(ce=4),he===null||!(fn&268435455)&&!(lo&268435455)||At(he,ve)}function Ql(e,t){var n=U;U|=2;var r=vd();(he!==e||ve!==t)&&(vt=null,sn(e,t));do try{om();break}catch(l){yd(e,l)}while(!0);if(ms(),U=n,Hl.current=r,se!==null)throw Error(w(261));return he=null,ve=0,ce}function om(){for(;se!==null;)xd(se)}function im(){for(;se!==null&&!Tf();)xd(se)}function xd(e){var t=Sd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?wd(e):se=t,zs.current=null}function wd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zp(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=qp(n,t,be),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function tn(e,t,n){var r=V,l=Je.transition;try{Je.transition=null,V=1,sm(e,t,n,r)}finally{Je.transition=l,V=r}return null}function sm(e,t,n,r){do An();while(Ft!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(bf(e,o),e===he&&(se=he=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,Nd(zl,function(){return An(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var i=V;V=1;var s=U;U|=4,zs.current=null,tm(e,n),md(n,e),zp(wi),_l=!!xi,wi=xi=null,e.current=n,nm(n),Mf(),U=s,V=i,Je.transition=o}else e.current=n;if(cl&&(cl=!1,Ft=e,Wl=l),o=e.pendingLanes,o===0&&(Wt=null),Of(n.stateNode),$e(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Vl)throw Vl=!1,e=Bi,Bi=null,e;return Wl&1&&e.tag!==0&&An(),o=e.pendingLanes,o&1?e===bi?yr++:(yr=0,bi=e):yr=0,qt(),null}function An(){if(Ft!==null){var e=ec(Wl),t=Je.transition,n=V;try{if(Je.transition=null,V=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Wl=0,U&6)throw Error(w(331));var l=U;for(U|=4,T=e.current;T!==null;){var o=T,i=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(T=d;T!==null;){var v=T;switch(v.tag){case 0:case 11:case 15:hr(8,v,o)}var g=v.child;if(g!==null)g.return=v,T=g;else for(;T!==null;){v=T;var h=v.sibling,k=v.return;if(dd(v),v===d){T=null;break}if(h!==null){h.return=k,T=h;break}T=k}}}var N=o.alternate;if(N!==null){var E=N.child;if(E!==null){N.child=null;do{var F=E.sibling;E.sibling=null,E=F}while(E!==null)}}T=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,T=i;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ro(9,s)}}catch(j){oe(s,s.return,j)}if(s===i){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(U=l,qt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Yl,e)}catch{}r=!0}return r}finally{V=n,Je.transition=t}}return!1}function su(e,t,n){t=Hn(n,t),t=ed(e,t,1),e=Vt(e,t,1),t=Te(),e!==null&&(Rr(e,1,t),$e(e,t))}function oe(e,t,n){if(e.tag===3)su(e,e,n);else for(;t!==null;){if(t.tag===3){su(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Hn(n,e),e=td(t,e,1),t=Vt(t,e,1),e=Te(),t!==null&&(Rr(t,1,e),$e(t,e));break}}t=t.return}}function am(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>ie()-_s?sn(e,0):Ps|=n),$e(e,t)}function kd(e,t){t===0&&(e.mode&1?(t=el,el<<=1,!(el&130023424)&&(el=4194304)):t=1);var n=Te();e=jt(e,t),e!==null&&(Rr(e,t,n),$e(e,n))}function um(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kd(e,n)}function cm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),kd(e,n)}var Sd;Sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,Jp(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,q&&t.flags&1048576&&Ec(t,Rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wl(e,t),e=t.pendingProps;var l=Fn(t,Ee.current);Rn(t,n),l=Ss(null,t,r,e,l,n);var o=Ns();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Dl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ys(t),l.updater=no,t.stateNode=l,l._reactInternals=t,_i(t,r,e,n),t=Mi(null,t,r,!0,o,n)):(t.tag=0,q&&o&&cs(t),Ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=fm(r),e=ot(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Ya(null,t,r,e,n);break e;case 14:t=Xa(null,t,r,ot(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ja(e,t,r,l,n);case 3:e:{if(od(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Mc(e,t),Fl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Hn(Error(w(423)),t),t=qa(e,t,r,n,l);break e}else if(r!==l){l=Hn(Error(w(424)),t),t=qa(e,t,r,n,l);break e}else for(Ue=Ht(t.stateNode.containerInfo.firstChild),He=t,q=!0,st=null,n=Ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===l){t=Et(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Lc(t),e===null&&Ei(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ki(r,l)?i=null:o!==null&&ki(r,o)&&(t.flags|=32),ld(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return id(e,t,n);case 4:return vs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ya(e,t,r,l,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,G(Al,r._currentValue),r._currentValue=i,o!==null)if(ct(o.value,i)){if(o.children===l.children&&!Re.current){t=Et(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=St(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?a.next=a:(a.next=v.next,v.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zi(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),zi(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Rn(t,n),l=qe(l),r=r(l),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Xa(e,t,r,l,n);case 15:return nd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),wl(e,t),t.tag=1,Ae(r)?(e=!0,Dl(t)):e=!1,Rn(t,n),Zc(t,r,l),_i(t,r,l,n),Mi(null,t,r,!0,e,n);case 19:return sd(e,t,n);case 22:return rd(e,t,n)}throw Error(w(156,t.tag))};function Nd(e,t){return Xu(e,t)}function dm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new dm(e,t,n,r)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fm(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===Zi)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ls(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kn:return an(n.children,l,o,t);case Ji:i=8,l|=8;break;case Zo:return e=Xe(12,n,t,l|2),e.elementType=Zo,e.lanes=o,e;case ei:return e=Xe(13,n,t,l),e.elementType=ei,e.lanes=o,e;case ti:return e=Xe(19,n,t,l),e.elementType=ti,e.lanes=o,e;case Lu:return oo(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:i=10;break e;case Mu:i=9;break e;case qi:i=11;break e;case Zi:i=14;break e;case Dt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Xe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function oo(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=Lu,e.lanes=n,e.stateNode={isHidden:!1},e}function Xo(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function Jo(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=To(0),this.expirationTimes=To(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ds(e,t,n,r,l,o,i,s,a){return e=new pm(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(o),e}function mm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cd(e){if(!e)return Yt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Cc(e,n,t)}return t}function jd(e,t,n,r,l,o,i,s,a){return e=Ds(n,r,!0,e,l,o,i,s,a),e.context=Cd(null),n=e.current,r=Te(),l=Qt(n),o=St(r,l),o.callback=t??null,Vt(n,o,l),e.current.lanes=l,Rr(e,l,r),$e(e,r),e}function io(e,t,n,r){var l=t.current,o=Te(),i=Qt(l);return n=Cd(n),t.context===null?t.context=n:t.pendingContext=n,t=St(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(l,t,i),e!==null&&(ut(e,l,i,o),yl(e,l,i)),i}function Kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){au(e,t),(e=e.alternate)&&au(e,t)}function hm(){return null}var Ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rs(e){this._internalRoot=e}so.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));io(e,t,null,null)};so.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){io(null,e,null,null)}),t[Ct]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=rc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&oc(e)}};function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ao(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uu(){}function gm(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=Kl(i);o.call(d)}}var i=jd(t,r,e,0,null,!1,!1,"",uu);return e._reactRootContainer=i,e[Ct]=i.current,Er(e.nodeType===8?e.parentNode:e),pn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=Kl(a);s.call(d)}}var a=Ds(e,0,!1,null,null,!1,!1,"",uu);return e._reactRootContainer=a,e[Ct]=a.current,Er(e.nodeType===8?e.parentNode:e),pn(function(){io(t,a,n,r)}),a}function uo(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Kl(i);s.call(a)}}io(t,i,e,l)}else i=gm(n,t,e,l,r);return Kl(i)}tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(ns(t,n|1),$e(t,ie()),!(U&6)&&(Vn=ie()+500,qt()))}break;case 13:pn(function(){var r=jt(e,1);if(r!==null){var l=Te();ut(r,e,1,l)}}),Os(e,1)}};rs=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}Os(e,134217728)}};nc=function(e){if(e.tag===13){var t=Qt(e),n=jt(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}Os(e,t)}};rc=function(){return V};lc=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};di=function(e,t,n){switch(t){case"input":if(li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Zl(r);if(!l)throw Error(w(90));Ou(r),li(r,l)}}}break;case"textarea":Au(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Vu=Is;Wu=pn;var ym={usingClientEntryPoint:!1,Events:[$r,jn,Zl,Uu,Hu,Is]},lr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Yl=dl.inject(vm),mt=dl}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!As(t))throw Error(w(200));return mm(e,t,null,n)};We.createRoot=function(e,t){if(!As(e))throw Error(w(299));var n=!1,r="",l=Ed;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ds(e,1,!1,null,null,n,!1,r,l),e[Ct]=t.current,Er(e.nodeType===8?e.parentNode:e),new Rs(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Gu(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return pn(e)};We.hydrate=function(e,t,n){if(!ao(t))throw Error(w(200));return uo(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!As(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Ed;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=jd(t,null,e,1,n??null,l,!1,o,i),e[Ct]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new so(t)};We.render=function(e,t,n){if(!ao(t))throw Error(w(200));return uo(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ao(e))throw Error(w(40));return e._reactRootContainer?(pn(function(){uo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};We.unstable_batchedUpdates=Is;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ao(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return uo(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd)}catch(e){console.error(e)}}zd(),zu.exports=We;var xm=zu.exports,Pd,cu=xm;Pd=cu.createRoot,cu.hydrateRoot;const co="/claude",wm="https://stelle-972218119922.europe-west1.run.app/api",_d=wm;function km(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Sm(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`,n=await fetch(co,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})}),r=await n.json();if(!n.ok)throw new Error(r.error||"Claude CLI error");return r.text||"Nessun contenuto estratto."}async function du(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`,r=await fetch(co,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");return l.text||"Nessun contenuto estratto."}async function Nm(e,t,n){const r=e.map(v=>`### ${v.name}
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

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,i=await fetch(co,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:o})}),s=await i.json();if(!i.ok)throw new Error(s.error||"Claude CLI error");const d=(s.text||"").trim().match(/\[[\s\S]*\]/);if(!d)throw new Error("Formato risposta non valido");return JSON.parse(d[0])}async function Cm(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

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
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.`,r=await fetch(co,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");const i=(l.text||"").trim().match(/\{[\s\S]*\}/);if(!i)throw new Error("Formato risposta non valido");return JSON.parse(i[0])}let fu=!1;async function jm(){if(fu)return;if(!(await fetch(`${_d}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");fu=!0}async function Em(e,t,n){await jm();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${_d}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:d}=await o.read();if(a)break;s+=i.decode(d,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let g="";for(const h of v)if(h.startsWith("event: "))g=h.slice(7).trim();else if(h.startsWith("data: ")&&g){try{const k=JSON.parse(h.slice(6));n(g,k)}catch{}g=""}}}function on(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function zm(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function Pm(e,t){if(!e)return"";if(!t)return on(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>zm(o,a)>.7),s=on(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function _m(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const pu="​‌",mu="‌​";function Im(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let g=1;g<=l;g++)for(let h=1;h<=o;h++)i[g][h]=n[g-1]===r[h-1]?i[g-1][h-1]+1:Math.max(i[g-1][h],i[g][h-1]);const s=[];let a=l,d=o;for(;a>0||d>0;)a>0&&d>0&&n[a-1]===r[d-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,d--):d>0&&(a===0||i[a][d-1]>=i[a-1][d])?(s.unshift({type:"added",text:r[d-1]}),d--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const g of s)v.length>0&&v[v.length-1].type===g.type?v[v.length-1].text+=g.text:v.push({...g});return v}function hu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=pu+s.text+mu:l+=s.text);let o=on(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${pu}(.*?)${mu}`,"gs"),`<span class="${i}">$1</span>`),o}function Tm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function Mm(){const[e,t]=z.useState(!1),[n,r]=z.useState(-1),[l,o]=z.useState([]),i=z.useRef([]),s=z.useRef(null),a=z.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),d=z.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=z.useCallback((F,p=0)=>{speechSynthesis.cancel(),i.current=F.slice(p),o(F);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=F.indexOf(m);r(x);const j=`${m.title}. ${Tm(m.text)}`,S=new SpeechSynthesisUtterance(j);S.lang="it-IT",S.rate=1;const I=a();I&&(S.voice=I),S.onend=c,S.onerror=c,s.current=S,speechSynthesis.speak(S)};t(!0),c()},[a]),g=z.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=z.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),k=z.useCallback(()=>{speechSynthesis.cancel()},[]),N=z.useCallback((F,p,c,m)=>{const x=[];F&&x.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const j of c)p[j.id]&&!p[j.id].startsWith("Errore")&&x.push({title:j.name,text:p[j.id],type:"thinker"});if(m&&m.length>0){const j=m.map(S=>{var I;return`${S.name}: ${S.description}${(I=S.citedBy)!=null&&I.length?`. Citato da ${S.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:j,type:"projects"})}v(x)},[v]),E=z.useCallback((F,p)=>{v([{title:F,text:p,type:"single"}])},[v]);return z.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:N,playSingle:E,pause:g,resume:h,stop:d,skipForward:k}}const Lm=[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / Meta",active:!0},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Pratical AI",active:!0},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0}],Dm=["trendshift.io","GitHub Trending","Hacker News"],Om=`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
`,Rm=`
  ${Om}

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
`;function Am(){const[e,t]=z.useState(Lm),[n,r]=z.useState({}),[l,o]=z.useState({}),[i,s]=z.useState({}),[a,d]=z.useState(null),[v,g]=z.useState("idle"),[h,k]=z.useState(!1),[N,E]=z.useState(""),[F,p]=z.useState(""),[c,m]=z.useState(null),[x,j]=z.useState(null),[S,I]=z.useState(8),[O,Z]=z.useState(!1),[M,ge]=z.useState([]),[Pt,_t]=z.useState(null),[et,It]=z.useState("signals"),[Fe,Gn]=z.useState({leftIdx:1,rightIdx:0}),[P,A]=z.useState("emerging"),[L,J]=z.useState([]),[W,Zt]=z.useState([]),[Ke,gn]=z.useState(null),[tt,Tt]=z.useState("idle"),[Mt,fo]=z.useState(Dm),[$s,Fs]=z.useState(""),[Id,po]=z.useState(!1),[Bs,Td]=z.useState(!1),[yn,Md]=z.useState(""),[Br,bs]=z.useState([]),[br,mo]=z.useState("idle"),[Ur,ho]=z.useState(null),[Us,Hs]=z.useState(null),[$m,Fm]=z.useState("idle"),go=z.useRef(null),de=Mm(),[Ld,Dd]=z.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),fe=e.filter(f=>f.active),vn=Object.values(i).filter(f=>f==="done").length,yo=fe.length;z.useEffect(()=>{(async()=>{try{const f=await window.storage.get("signal-state");if(f){const y=JSON.parse(f.value);if(y.results){r(y.results);const _={};for(const D of Object.keys(y.results))_[D]=y.results[D].startsWith("Errore")?"error":"done";s(_)}if(y.prevResults&&o(y.prevResults),y.lastScanTime&&m(y.lastScanTime),y.intervalHours&&I(y.intervalHours),y.synthesis&&(d(y.synthesis),g("done")),y.synthesisHistory){const _=y.synthesisHistory.map((D,ee,le)=>{if(D.conceptDiff&&!D.conceptDiffs){const ke=le[ee+1],{conceptDiff:nt,...Be}=D;return ke?{...Be,conceptDiffs:{[ke.id]:nt}}:Be}return D});ge(_)}y.projects&&J(y.projects),y.prevProjects&&Zt(y.prevProjects),y.projectsTime&&gn(y.projectsTime),y.projectSources&&fo(y.projectSources)}}catch{}})()},[]);const we=z.useCallback(async(f={})=>{try{const y=await window.storage.get("signal-state"),D={...y?JSON.parse(y.value):{},...f};await window.storage.set("signal-state",JSON.stringify(D))}catch{}},[]);z.useCallback(async(f={})=>{await we({results:n,prevResults:l,lastScanTime:c,intervalHours:S,synthesis:a,synthesisHistory:M,projects:L,prevProjects:W,projectsTime:Ke,projectSources:Mt,...f})},[n,l,c,S,a,M,L,W,Ke,Mt,we]);const Hr=z.useCallback((f,y)=>y.length>0&&y[0].text===f?y:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:f,thinkers:fe.map(D=>D.name),conceptDiffs:{}},...y].slice(0,50),[fe]),Vr=z.useCallback(async f=>{var D;if(f.length<2)return f;const y=f[0],_=f[1];if((D=y.conceptDiffs)!=null&&D[_.id])return f;try{const ee=await Cm(_.text,y.text),le=[...f];return le[0]={...le[0],conceptDiffs:{...le[0].conceptDiffs||{},[_.id]:ee}},ge(le),await we({synthesisHistory:le}),le}catch(ee){return console.error("[concept-diff auto]",ee),f}},[we]),Vs=z.useCallback(async(f,y)=>{try{await navigator.clipboard.writeText(f)}catch{const _=document.createElement("textarea");_.value=f,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_)}_t(y),setTimeout(()=>_t(null),2e3)},[]);z.useCallback(async f=>{const y=M.filter(_=>_.id!==f);ge(y),await we({synthesisHistory:y})},[M,we]),z.useEffect(()=>{const f=()=>{if(!c){j(null);return}const D=c+S*3600*1e3-Date.now();if(D<=0){j("ora");return}const ee=Math.floor(D/36e5),le=Math.floor(D%36e5/6e4),ke=Math.floor(D%6e4/1e3);j(`${ee}h ${le}m ${ke}s`)};f();const y=setInterval(f,1e3);return()=>clearInterval(y)},[c,S]);const vo=z.useRef(null),Ws=z.useRef(null);z.useEffect(()=>{const f=setInterval(()=>{const y=new Date,_=y.getHours(),D=`${y.toDateString()}-${_}`;(_===5||_===17)&&Ws.current!==D&&vo.current&&!h&&(Ws.current=D,vo.current(!0))},6e4);return()=>clearInterval(f)},[h]);const Qs=z.useCallback(f=>{if(!f)return;const y=f.trim().toLowerCase();if(!y)return;const _=e.find(D=>{const ee=D.name.toLowerCase();return ee===y||ee.includes(y)||y.includes(ee)});_&&(It("signals"),Z(!1),setTimeout(()=>{const D=document.getElementById(`thinker-${_.id}`);D&&(D.scrollIntoView({behavior:"smooth",block:"start"}),D.classList.add("thinker-card-highlight"),setTimeout(()=>D.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Od=(f,y)=>{if(!f||!y)return 0;const _=new Set(f.toLowerCase().split(/\s+/)),D=new Set(y.toLowerCase().split(/\s+/));return[..._].filter(le=>D.has(le)).length/Math.max(_.size,D.size)},Ks=f=>!l[f]||!n[f]?!1:Od(l[f],n[f])<.72;fe.filter(f=>i[f.id]==="done"&&Ks(f.id)).length;const Gs=e.length>0&&e.every(f=>f.active),Rd=()=>{h||t(f=>f.map(y=>({...y,active:!Gs})))},xo=()=>{N.trim()&&(t(f=>[...f,{id:Date.now(),name:N.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),E(""),p(""))},Ys=()=>{const f=$s.trim();if(!f||Mt.includes(f))return;const y=[...Mt,f];fo(y),Fs(""),we({projectSources:y})},Ad=f=>{const y=Mt.filter(_=>_!==f);fo(y),we({projectSources:y})},[$d,Xs]=z.useState(null),Wr=z.useCallback(async(f,y)=>{Tt("loading"),Xs(null);try{const _=await Nm(y,f,Mt);Zt(L),J(_);const D=Date.now();gn(D),Tt("done"),await we({projects:_,prevProjects:L,projectsTime:D})}catch(_){console.error("[Signal.Brief] fetchProjects error:",_),Tt("error"),Xs(_.message)}},[Mt,we,L]),Js=2*3600*1e3,Qr=z.useCallback(async(f=!1)=>{if(fe.length===0)return;if(!f&&c&&Date.now()-c<Js){const b=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${b} minuti fa. Cache valida per ancora ${Math.round((Js-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}It("signals"),k(!0),d(null),g("idle"),o(b=>({...b,...n}));const y={...n},_={};fe.forEach(b=>{_[b.id]="loading"}),s(_),r({});const D={},ee=2,le=b=>new Promise(pe=>setTimeout(pe,b));for(let b=0;b<fe.length;b+=ee){const pe=fe.slice(b,b+ee);await Promise.all(pe.map(async ze=>{try{const Pe=await Sm(ze);D[ze.id]=Pe,r(rt=>({...rt,[ze.id]:Pe})),s(rt=>({...rt,[ze.id]:"done"}))}catch(Pe){D[ze.id]=`Errore: ${Pe.message}`,r(rt=>({...rt,[ze.id]:`Errore: ${Pe.message}`})),s(rt=>({...rt,[ze.id]:"error"}))}})),b+ee<fe.length&&await le(1200)}const ke=km(D),nt=ke?Date.now():c;ke&&(m(nt),Dd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await we({results:D,prevResults:y,lastScanTime:nt,intervalHours:S,synthesis:a,synthesisHistory:M}),k(!1);const Be=fe.filter(b=>D[b.id]&&!D[b.id].startsWith("Errore")).map(b=>({name:b.name,domain:b.domain,content:D[b.id]}));if(Be.length>=2){g("loading");try{const b=await du(Be);d(b),g("done");const pe=Hr(b,M);ge(pe),await we({results:D,prevResults:y,lastScanTime:nt,intervalHours:S,synthesis:b,synthesisHistory:pe}),Vr(pe),Wr(b,Be)}catch{g("error")}}},[fe,n,S,we,a,M,Hr,c,Wr,Vr]);z.useEffect(()=>{vo.current=Qr},[Qr]);const Fd=z.useCallback(async()=>{const f=fe.filter(y=>i[y.id]==="done").map(y=>({name:y.name,domain:y.domain,content:n[y.id]}));if(!(f.length<2)){g("loading");try{const y=await du(f);d(y),g("done");const _=Hr(y,M);ge(_),await we({synthesis:y,synthesisHistory:_}),Vr(_),Wr(y,f)}catch(y){d(`Errore nella sintesi: ${y.message}`),g("error")}}},[fe,i,n,we,M,Hr,Wr,Vr]),qs=z.useCallback(async()=>{if(yn.trim()){bs([]),ho(null),Hs(null),mo("loading");try{await Em(yn,a,(f,y)=>{if(f==="session_started"&&y.session_id&&Hs(y.session_id),f==="sage_speaks"&&y.content&&bs(_=>[..._,{name:y.persona_name,icon:y.persona_icon,color:y.persona_color,content:y.content}]),f==="moderator_synthesis"&&y.content&&ho(y.content),f==="moderator"){const _=y.content||y.decision||y.synthesis||"";_&&ho(_)}}),mo("done")}catch(f){console.error("[council]",f),mo("error")}}},[yn,a]),Bd=vn>=2&&!h&&v!=="loading",Zs=Object.keys(n).length>0,wo="Disponibile solo in locale (richiede Claude CLI)",bd=fe.filter(f=>i[f.id]?O?i[f.id]==="done"&&Ks(f.id):!0:!1);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Rm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>po(!0),children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"tagline",children:"Intelligence Dashboard · AI-Powered"})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",Ld]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Fd,disabled:!Bd||!0,title:wo,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!go.current){const y=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);y.onerror=()=>{y.src="/signal-brief/podcast/episodes/2026-04-12.mp3",y.play()},go.current=y}const f=go.current;f.paused?f.play():f.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Qr(!0),disabled:h||fe.length===0||!0,title:wo,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Qr(!1),disabled:h||fe.length===0||!0,title:wo,children:h?`Scanning ${vn}/${yo}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${et==="signals"?"active":""}`,onClick:()=>It("signals"),children:["Segnali",vn>0&&u.jsx("span",{className:"tab-badge",children:vn})]}),u.jsxs("button",{className:`tab-btn ${et==="projects"?"active":""}`,onClick:()=>It("projects"),children:["Progetti",L.length>0&&u.jsx("span",{className:"tab-badge",children:L.length})]}),u.jsxs("button",{className:`tab-btn ${et==="history"?"active":""}`,onClick:()=>It("history"),children:["Cronologia",M.length>0&&u.jsx("span",{className:"tab-badge",children:M.length})]}),u.jsx("button",{className:`tab-btn ${et==="config"?"active":""}`,onClick:()=>It("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[et==="signals"&&u.jsxs(u.Fragment,{children:[h&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${yo>0?vn/yo*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&M.length>0&&u.jsx("span",{className:"timestamp",children:new Date(M[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>de.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Td(f=>!f),title:"Chiedi ai thinkers",style:Bs?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Vs(a,"synth"),children:Pt==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:_m(M.length>1?Pm(a,M[1].text):on(a),fe)}}),Bs&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Us?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Us}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:yn,onChange:f=>Md(f.target.value),onKeyDown:f=>f.key==="Enter"&&qs(),disabled:br==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:qs,disabled:br==="loading"||!yn.trim(),children:br==="loading"?"In deliberazione…":"Chiedi"})]}),Br.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Br.map((f,y)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:f.color},children:[f.icon," ",f.name]}),u.jsx("div",{children:f.content})]},y))}),Ur&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const f=Br.map(y=>`${y.name}: ${y.content}`).join(`

`)+`

Sintesi: `+Ur;de.playSingle("Deliberazione",f)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const f=`Domanda: ${yn}

`+Br.map(y=>`${y.icon} ${y.name}:
${y.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Ur}`;Vs(f,"council")},children:Pt==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:on(Ur)}})]}),br==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),Zs&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",vn," acquisiti"]})}),!Zs&&!h?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:bd.map(f=>{const y=i[f.id];return u.jsxs("div",{id:`thinker-${f.id}`,className:`card ${y}`,children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[f.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",children:f.handle})]}),u.jsx("div",{className:"card-domain",children:f.domain})]}),y==="done"&&u.jsx("button",{className:"btn-listen",onClick:()=>de.playSingle(f.name,n[f.id]),title:"Ascolta",children:"🔊"}),y==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),y==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),y==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"})]}),u.jsxs("div",{className:"card-body",children:[y==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),y==="done"&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:on(n[f.id])}}),y==="error"&&u.jsx("div",{className:"card-error",children:n[f.id]})]})]},f.id)})})]}),et==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",L.length>0&&` · ${L.length} trovati`]})}),tt==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),tt==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",$d||"errore sconosciuto"]}),L.length===0&&tt!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),L.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),Ke&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(Ke).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),L.some(f=>f.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),W.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),L.map((f,y)=>{const _=f.maturity!=null&&f.momentum!=null,D=Math.ceil(Math.sqrt(L.length)),ee=Math.floor(y/D),le=y%D,ke=_?f.maturity:2+le/Math.max(D-1,1)*7,nt=_?f.momentum:8-ee/Math.max(Math.ceil(L.length/D)-1,1)*7,Be=50+(ke-1)/9*420,b=370-(nt-1)/9*360,pe=W.length>0&&!W.some(Pe=>Pe.name===f.name),ze=pe?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:Be,cy:b,r:pe?6:5,fill:ze,opacity:"0.85",stroke:pe?"#fca5a5":"none",strokeWidth:pe?2:0,onClick:()=>window.open(f.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:Be+9,y:b+3,style:{fontSize:f.name.length>18?"8px":"9px",fill:pe?"#dc2626":"#374151",fontWeight:pe?600:400},children:f.name.length>22?f.name.slice(0,20)+"…":f.name})]},y)})]})]}),L.length>0&&u.jsx("div",{className:"projects-grid",children:L.map((f,y)=>u.jsxs("div",{className:"project-card",style:W.length>0&&!W.some(_=>_.name===f.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",children:f.name}),W.length>0&&!W.some(_=>_.name===f.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.source&&u.jsx("span",{className:"project-source",children:f.source}),f.maturity&&f.momentum&&u.jsxs("span",{className:"project-source",children:["M:",f.maturity," · P:",f.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:f.description}),u.jsxs("div",{className:"project-footer",children:[f.citedBy&&f.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",f.citedBy.join(", ")]}),f.themes&&f.themes.length>0&&u.jsx("div",{className:"project-themes",children:f.themes.map((_,D)=>u.jsx("span",{className:"project-theme",children:_},D))})]})]},y))})]}),et==="history"&&u.jsx(u.Fragment,{children:M.length<2?u.jsxs("div",{className:"history-empty",children:[M.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",M.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(M[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:on(M[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const f=Date.now(),y=864e5,_=f-7*y,D=f-21*y,ee=M.filter(K=>K.timestamp>=_),le=M.filter(K=>K.timestamp>=D&&K.timestamp<_),ke={};for(const K of le){const Se=new Date(K.timestamp),_e=new Date(Se);_e.setDate(_e.getDate()-_e.getDay());const ae=_e.toISOString().slice(0,10);(!ke[ae]||K.timestamp>ke[ae].timestamp)&&(ke[ae]=K)}const nt=Object.values(ke).sort((K,Se)=>Se.timestamp-K.timestamp),Be=M.filter(K=>K.timestamp<D),b={};for(const K of Be){const Se=new Date(K.timestamp),_e=new Date(Se);_e.setDate(_e.getDate()-_e.getDay());const ae=_e.toISOString().slice(0,10);(!b[ae]||K.timestamp>b[ae].timestamp)&&(b[ae]=K)}const pe=Object.values(b).sort((K,Se)=>Se.timestamp-K.timestamp),ze=(K,Se,_e)=>K.length===0?null:u.jsx("optgroup",{label:Se,children:K.map(ae=>{const ko=M.indexOf(ae),Kr=new Date(ae.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),So=_e?`Sett. ${Kr.split(",")[0]} — ${ae.thinkers.slice(0,3).join(", ")}${ae.thinkers.length>3?` +${ae.thinkers.length-3}`:""}`:`${Kr} — ${ae.thinkers.slice(0,3).join(", ")}${ae.thinkers.length>3?` +${ae.thinkers.length-3}`:""}`;return u.jsx("option",{value:ko,children:So},ae.id)})},Se),Pe=M[0],rt=Pe?`${new Date(Pe.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${Pe.thinkers.slice(0,3).join(", ")}${Pe.thinkers.length>3?` +${Pe.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Fe.leftIdx,onChange:K=>Gn(Se=>({...Se,leftIdx:Number(K.target.value)})),children:[ze(ee,"Ultimi 7 giorni",!1),ze(nt,"Ultime 3 settimane",!0),ze(pe,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[rt," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ea;const f=M[Fe.rightIdx],y=M[Fe.leftIdx];if(!f||!y||Fe.leftIdx===Fe.rightIdx)return null;const _=f.timestamp>=y.timestamp?f:y,D=_===f?y:f;_===f?Fe.rightIdx:Fe.leftIdx;const ee=((ea=_.conceptDiffs)==null?void 0:ea[D.id])||null,le=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],ke={DHH:["hansson","heinemeier","37signals"]},nt=C=>{if(!C)return null;const R=C.trim().toLowerCase();if(!R)return null;for(const $ of e){const H=$.name.toLowerCase();if(H===R||H.includes(R)||R.includes(H))return $;const Q=ke[$.name]||[];for(const gt of Q)if(R.includes(gt)||gt.includes(R))return $}return null},Be=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),b=C=>(C||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(R=>R.length>=4&&!Be.has(R)),pe=C=>C.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),ze=C=>{const R=C.split(/\s+/);return R.length>40?R.slice(0,40).join(" ")+"...":C},Pe=C=>{if(!C)return[];const R=C.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),H=(R!==-1?C.slice(0,R):C).split(/\n\n+/).map(yt=>pe(yt)).filter(yt=>yt.length>120),Q=yt=>{const Xn=b(yt);if(!Xn.length||!H.length)return"";let Gr="",Co=0;for(const ta of H){const Wd=ta.toLowerCase();let jo=0;for(const Qd of Xn)Wd.includes(Qd)&&jo++;jo>Co&&(Gr=ta,Co=jo)}return Co>0?Gr:""},gt=[],Yn=new Set,Vd=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let No;for(;(No=Vd.exec(C))!==null;){const yt=No[2].replace(/[.,;)]+$/,"");if(Yn.has(yt))continue;Yn.add(yt);const Xn=No[1].trim(),Gr=ze(Q(Xn));gt.push({url:yt,title:Xn,snippet:Gr})}return gt},rt=C=>{const R=nt(C);return R?Pe(n[R.id]||""):[]},K=(()=>{const C=new Set,R=[];for(const $ of e){C.has($.name)||(C.add($.name),R.push($.name));const H=$.name.split(/\s+/);if(H.length>1){const Q=H[H.length-1];Q.length>=4&&!C.has(Q)&&(C.add(Q),R.push(Q))}}return R.sort(($,H)=>H.length-$.length)})(),Se=K.length?new RegExp(`\\b(${K.map(C=>C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,_e=C=>{if(!C||typeof C!="string"||!Se)return C;const R=[];let $=0,H;for(Se.lastIndex=0;(H=Se.exec(C))!==null;){H.index>$&&R.push(C.slice($,H.index));const Q=H[0];R.push(u.jsx("span",{className:"concept-who-link",onClick:gt=>{gt.stopPropagation(),Qs(Q)},children:Q},R.length)),$=H.index+Q.length}return R.length===0?C:($<C.length&&R.push(C.slice($)),R)},ae=(C,R)=>{if(C==null)return null;if(typeof C=="string")return{title:C,detail:"",who:[],sides:[]};if(typeof C!="object")return null;if(R==="evolved"){const $=C.from??C.da??C.before??"",H=C.to??C.a??C.after??"",Q=$&&H?`${$} → ${H}`:$||H||C.detail||"";return{title:C.concept||C.title||C.name||"",detail:Q,who:C.who||[],sides:[]}}return R==="tensions"?{title:C.axis||C.concept||C.title||"",detail:C.detail||"",who:C.who||[],sides:C.sides||[]}:{title:C.concept||C.title||C.name||"",detail:C.detail||C.description||"",who:C.who||[],sides:[]}},ko=C=>C!=null&&C.length?C.slice(0,4).map((R,$)=>u.jsx("a",{className:"concept-cite",href:R.url,target:"_blank",rel:"noopener noreferrer",title:R.snippet||R.title||R.url,onClick:H=>H.stopPropagation(),children:$+1},$)):null,Kr=C=>C!=null&&C.length?u.jsx("div",{className:"concept-item-who",children:C.map((R,$)=>{const H=rt(R);return u.jsxs("span",{className:"concept-who-item",children:[$>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${R}`,onClick:Q=>{Q.stopPropagation(),Qs(R)},children:R}),H.length>0&&u.jsx("sup",{className:"concept-cites",children:ko(H)})]},$)})}):null,So=(C,R)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",_e(C)]},R),Ud=(C,R)=>{const H=(C[R]||[]).map(Q=>ae(Q,R)).filter(Boolean);return H.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):H.map((Q,gt)=>{var Yn;return u.jsxs("div",{className:`concept-item concept-${R==="tensions"?"tension":R}`,children:[Q.title&&u.jsx("div",{className:"concept-item-title",children:_e(Q.title)}),Q.detail&&u.jsx("div",{className:"concept-item-detail",children:_e(Q.detail)}),R==="tensions"&&((Yn=Q.sides)==null?void 0:Yn.map(So)),Kr(Q.who)]},gt)})},Hd=C=>{const R=le.find($=>$.key===P)?P:"emerging";return le.find($=>$.key===R),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:le.map($=>{const H=(C[$.key]||[]).length,Q=$.key===R;return u.jsxs("button",{className:`concept-tab ${Q?"active":""}`,onClick:()=>A($.key),style:Q?{color:$.color,borderBottomColor:$.color}:void 0,children:[u.jsxs("span",{children:[$.icon," ",$.label]}),u.jsx("span",{className:"concept-tab-count",children:H})]},$.key)})}),u.jsx("div",{className:"concept-tab-body",children:Ud(C,R)})]})};return ee?Hd(ee):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const f=M[Fe.leftIdx],y=M[Fe.rightIdx];if(!f||!y)return null;const _=Im(f.text,y.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(f.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:f.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:hu(_,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(y.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:y.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:hu(_,"right")}})]})]})})()]})}),et==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",fe.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Rd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Gs?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(f=>u.jsxs("div",{className:`thinker-row ${f.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:f.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:f.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:f.handle})," · ",f.domain]})]}),u.jsx("div",{className:`thinker-status ${i[f.id]||""}`})]},f.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:N,disabled:!0,onChange:f=>E(f.target.value),onKeyDown:f=>f.key==="Enter"&&xo(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:f=>p(f.target.value),onKeyDown:f=>f.key==="Enter"&&xo(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:xo,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(f=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:S===f?"#eff6ff":"",color:S===f?"#2563eb":"",borderColor:S===f?"#bfdbfe":""},onClick:()=>{I(f),we({intervalHours:f})},children:[f,"h"]},f)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Mt.map(f=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:f}),u.jsx("button",{className:"source-delete",onClick:()=>Ad(f),disabled:!0,children:"×"})]},f))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:$s,disabled:!0,onChange:f=>Fs(f.target.value),onKeyDown:f=>f.key==="Enter"&&Ys(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Ys,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(de.isPlaying||de.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:de.isPlaying?de.pause:de.resume,children:de.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:de.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:de.currentChapter>=0&&de.chapters[de.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:de.chapters[de.currentChapter].title})," — ",de.currentChapter+1,"/",de.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:de.stop,title:"Stop",children:"⏹"})]}),Id&&u.jsx("div",{className:"about-backdrop",onClick:()=>po(!1),children:u.jsxs("div",{className:"about-panel",onClick:f=>f.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsxs("div",{className:"about-logo",children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"about-tagline",children:"Intelligence Dashboard · AI-Powered"}),u.jsx("div",{className:"about-desc",children:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano."}),u.jsxs("div",{className:"about-footer",children:["Ideato da Mike · ",u.jsx("a",{href:"https://www.instagram.com/it.mikesoft",target:"_blank",rel:"noopener noreferrer",children:"MikeSoft"}),u.jsx("br",{}),"100% AI-generated · Made in Italy · 2026"]}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>po(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};Pd(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Am,{})}));
