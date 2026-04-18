(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var wu={exports:{}},Xo={},ku={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),rf=Symbol.for("react.portal"),of=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),uf=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.memo"),pf=Symbol.for("react.lazy"),la=Symbol.iterator;function mf(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var Su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nu=Object.assign,ju={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Su}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cu(){}Cu.prototype=Vn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=ju,this.updater=n||Su}var Gi=Ki.prototype=new Cu;Gi.constructor=Ki;Nu(Gi,Vn.prototype);Gi.isPureReactComponent=!0;var ia=Array.isArray,Eu=Object.prototype.hasOwnProperty,Yi={current:null},zu={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Eu.call(t,r)&&!zu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Dr,type:e,key:l,ref:i,props:o,_owner:Yi.current}}function hf(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function gf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sa=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gf(""+e.key):t.toString(36)}function mo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Dr:case rf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Pl(i,0):r,ia(o)?(n="",e!=null&&(n=e.replace(sa,"$&/")+"/"),mo(o,t,n,"",function(f){return f})):o!=null&&(Xi(o)&&(o=hf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(sa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ia(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Pl(l,s);i+=mo(l,t,n,a,o)}else if(a=mf(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Pl(l,s++),i+=mo(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xr(e,t,n){if(e==null)return e;var r=[],o=0;return mo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function vf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},ho={transition:null},yf={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:ho,ReactCurrentOwner:Yi};function Pu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Vn;A.Fragment=of;A.Profiler=sf;A.PureComponent=Ki;A.StrictMode=lf;A.Suspense=df;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf;A.act=Pu;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Yi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Eu.call(t,a)&&!zu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Dr,type:e.type,key:o,ref:l,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:uf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:af,_context:e},e.Consumer=e};A.createElement=_u;A.createFactory=function(e){var t=_u.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:cf,render:e}};A.isValidElement=Xi;A.lazy=function(e){return{$$typeof:pf,_payload:{_status:-1,_result:e},_init:vf}};A.memo=function(e,t){return{$$typeof:ff,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};A.unstable_act=Pu;A.useCallback=function(e,t){return De.current.useCallback(e,t)};A.useContext=function(e){return De.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return De.current.useDeferredValue(e)};A.useEffect=function(e,t){return De.current.useEffect(e,t)};A.useId=function(){return De.current.useId()};A.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return De.current.useMemo(e,t)};A.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};A.useRef=function(e){return De.current.useRef(e)};A.useState=function(e){return De.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return De.current.useTransition()};A.version="18.3.1";ku.exports=A;var M=ku.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=M,wf=Symbol.for("react.element"),kf=Symbol.for("react.fragment"),Sf=Object.prototype.hasOwnProperty,Nf=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jf={key:!0,ref:!0,__self:!0,__source:!0};function Mu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Sf.call(t,r)&&!jf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wf,type:e,key:l,ref:i,props:o,_owner:Nf.current}}Xo.Fragment=kf;Xo.jsx=Mu;Xo.jsxs=Mu;wu.exports=Xo;var u=wu.exports,Tu={exports:{}},Ye={},bu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var O=z.length;z.push(R);e:for(;0<O;){var Z=O-1>>>1,oe=z[Z];if(0<o(oe,R))z[Z]=R,z[O]=oe,O=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],O=z.pop();if(O!==R){z[0]=O;e:for(var Z=0,oe=z.length,Mt=oe>>>1;Z<Mt;){var Ce=2*(Z+1)-1,Jt=z[Ce],dt=Ce+1,Zt=z[dt];if(0>o(Jt,O))dt<oe&&0>o(Zt,Jt)?(z[Z]=Zt,z[dt]=O,Z=dt):(z[Z]=Jt,z[Ce]=O,Z=Ce);else if(dt<oe&&0>o(Zt,O))z[Z]=Zt,z[dt]=O,Z=dt;else break e}}return R}function o(z,R){var O=z.sortIndex-R.sortIndex;return O!==0?O:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],y=1,v=null,g=3,S=!1,N=!1,_=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(f);R!==null;){if(R.callback===null)r(f);else if(R.startTime<=z)r(f),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(f)}}function x(z){if(_=!1,m(z),!N)if(n(a)!==null)N=!0,se(E);else{var R=n(f);R!==null&&hn(x,R.startTime-z)}}function E(z,R){N=!1,_&&(_=!1,p(I),I=-1),S=!0;var O=g;try{for(m(R),v=n(a);v!==null&&(!(v.expirationTime>R)||z&&!fe());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,g=v.priorityLevel;var oe=Z(v.expirationTime<=R);R=e.unstable_now(),typeof oe=="function"?v.callback=oe:v===n(a)&&r(a),m(R)}else r(a);v=n(a)}if(v!==null)var Mt=!0;else{var Ce=n(f);Ce!==null&&hn(x,Ce.startTime-R),Mt=!1}return Mt}finally{v=null,g=O,S=!1}}var w=!1,P=null,I=-1,J=5,D=-1;function fe(){return!(e.unstable_now()-D<J)}function Me(){if(P!==null){var z=e.unstable_now();D=z;var R=!0;try{R=P(!0,z)}finally{R?qt():(w=!1,P=null)}}else w=!1}var qt;if(typeof c=="function")qt=function(){c(Me)};else if(typeof MessageChannel<"u"){var Kn=new MessageChannel,hl=Kn.port2;Kn.port1.onmessage=Me,qt=function(){hl.postMessage(null)}}else qt=function(){F(Me,0)};function se(z){P=z,w||(w=!0,qt())}function hn(z,R){I=F(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||S||(N=!0,se(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var O=g;g=R;try{return z()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var O=g;g=z;try{return R()}finally{g=O}},e.unstable_scheduleCallback=function(z,R,O){var Z=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Z+O:Z):O=Z,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=O+oe,z={id:y++,callback:R,priorityLevel:z,startTime:O,expirationTime:oe,sortIndex:-1},O>Z?(z.sortIndex=O,t(f,z),n(a)===null&&z===n(f)&&(_?(p(I),I=-1):_=!0,hn(x,O-Z))):(z.sortIndex=oe,t(a,z),N||S||(N=!0,se(E))),z},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(z){var R=g;return function(){var O=g;g=R;try{return z.apply(this,arguments)}finally{g=O}}}})(Iu);bu.exports=Iu;var Cf=bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=M,Ge=Cf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lu=new Set,yr={};function pn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(yr[e]=t,e=0;e<t.length;e++)Lu.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},ua={};function _f(e){return ti.call(ua,e)?!0:ti.call(aa,e)?!1:zf.test(e)?ua[e]=!0:(aa[e]=!0,!1)}function Pf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mf(e,t,n,r){if(t===null||typeof t>"u"||Pf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var qi=/[\-:]([a-z])/g;function Ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qi,Ji);je[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qi,Ji);je[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qi,Ji);je[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zi(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mf(t,n,o,r)&&(n=null),r||o===null?_f(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Ru=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),oi=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),ca=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Ml;function lr(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Tl=!1;function bl(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function Tf(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case xn:return"Portal";case ni:return"Profiler";case es:return"StrictMode";case ri:return"Suspense";case oi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ru:return(e.displayName||"Context")+".Consumer";case Du:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:li(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return li(e(t))}catch{}}return null}function bf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return li(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function If(e){var t=$u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=If(e))}function Fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Eo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Au(e,t){t=t.checked,t!=null&&Zi(e,"checked",t,!1)}function si(e,t){Au(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Eo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(ir(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function Bu(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lf=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Df=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(Df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,bn=null,In=null;function ha(e){if(e=$r(e)){if(typeof mi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=tl(t),mi(e.stateNode,e.type,t))}}function Qu(e){bn?In?In.push(e):In=[e]:bn=e}function Ku(){if(bn){var e=bn,t=In;if(In=bn=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Gu(e,t){return e(t)}function Yu(){}var Il=!1;function Xu(e,t,n){if(Il)return e(t,n);Il=!0;try{return Gu(e,t,n)}finally{Il=!1,(bn!==null||In!==null)&&(Yu(),Ku())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var hi=!1;if(Ct)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){hi=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{hi=!1}function Rf(e,t,n,r,o,l,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(y){this.onError(y)}}var cr=!1,zo=null,_o=!1,gi=null,Of={onError:function(e){cr=!0,zo=e}};function $f(e,t,n,r,o,l,i,s,a){cr=!1,zo=null,Rf.apply(Of,arguments)}function Ff(e,t,n,r,o,l,i,s,a){if($f.apply(this,arguments),cr){if(cr){var f=zo;cr=!1,zo=null}else throw Error(k(198));_o||(_o=!0,gi=f)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ga(e){if(mn(e)!==e)throw Error(k(188))}function Af(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ga(o),e;if(l===r)return ga(o),t;l=l.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Ju(e){return e=Af(e),e!==null?Zu(e):null}function Zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zu(e);if(t!==null)return t;e=e.sibling}return null}var ec=Ge.unstable_scheduleCallback,va=Ge.unstable_cancelCallback,Bf=Ge.unstable_shouldYield,Uf=Ge.unstable_requestPaint,ce=Ge.unstable_now,Hf=Ge.unstable_getCurrentPriorityLevel,os=Ge.unstable_ImmediatePriority,tc=Ge.unstable_UserBlockingPriority,Po=Ge.unstable_NormalPriority,Vf=Ge.unstable_LowPriority,nc=Ge.unstable_IdlePriority,qo=null,ht=null;function Wf(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Gf,Qf=Math.log,Kf=Math.LN2;function Gf(e){return e>>>=0,e===0?32:31-(Qf(e)/Kf|0)|0}var eo=64,to=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=sr(s):(l&=i,l!==0&&(r=sr(l)))}else i=n&~o,i!==0?r=sr(i):l!==0&&(r=sr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function Yf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-at(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=Yf(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=eo;return eo<<=1,!(eo&4194240)&&(eo=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function qf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function oc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lc,is,ic,sc,ac,yi=!1,no=[],$t=null,Ft=null,At=null,kr=new Map,Sr=new Map,Lt=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Jn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=$r(t),t!==null&&is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zf(e,t,n,r,o){switch(t){case"focusin":return $t=Jn($t,e,t,n,r,o),!0;case"dragenter":return Ft=Jn(Ft,e,t,n,r,o),!0;case"mouseover":return At=Jn(At,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return kr.set(l,Jn(kr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Sr.set(l,Jn(Sr.get(l)||null,e,t,n,r,o)),!0}return!1}function uc(e){var t=nn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=qu(n),t!==null){e.blockedOn=t,ac(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=$r(n),t!==null&&is(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){go(e)&&n.delete(t)}function ep(){yi=!1,$t!==null&&go($t)&&($t=null),Ft!==null&&go(Ft)&&(Ft=null),At!==null&&go(At)&&(At=null),kr.forEach(xa),Sr.forEach(xa)}function Zn(e,t){e.blockedOn===t&&(e.blockedOn=null,yi||(yi=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,ep)))}function Nr(e){function t(o){return Zn(o,e)}if(0<no.length){Zn(no[0],e);for(var n=1;n<no.length;n++){var r=no[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&Zn($t,e),Ft!==null&&Zn(Ft,e),At!==null&&Zn(At,e),kr.forEach(t),Sr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)uc(n),n.blockedOn===null&&Lt.shift()}var Ln=Pt.ReactCurrentBatchConfig,To=!0;function tp(e,t,n,r){var o=K,l=Ln.transition;Ln.transition=null;try{K=1,ss(e,t,n,r)}finally{K=o,Ln.transition=l}}function np(e,t,n,r){var o=K,l=Ln.transition;Ln.transition=null;try{K=4,ss(e,t,n,r)}finally{K=o,Ln.transition=l}}function ss(e,t,n,r){if(To){var o=xi(e,t,n,r);if(o===null)Vl(e,t,r,bo,n),ya(e,r);else if(Zf(o,e,t,n,r))r.stopPropagation();else if(ya(e,r),t&4&&-1<Jf.indexOf(e)){for(;o!==null;){var l=$r(o);if(l!==null&&lc(l),l=xi(e,t,n,r),l===null&&Vl(e,t,r,bo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var bo=null;function xi(e,t,n,r){if(bo=null,e=rs(r),e=nn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bo=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hf()){case os:return 1;case tc:return 4;case Po:case Vf:return 16;case nc:return 536870912;default:return 16}default:return 16}}var Rt=null,as=null,vo=null;function dc(){if(vo)return vo;var e,t=as,n=t.length,r,o="value"in Rt?Rt.value:Rt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return vo=o.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ro(){return!0}function wa(){return!1}function Xe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ro:wa,this.isPropagationStopped=wa,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Xe(Wn),Or=re({},Wn,{view:0,detail:0}),rp=Xe(Or),Dl,Rl,er,Jo=re({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Dl=e.screenX-er.screenX,Rl=e.screenY-er.screenY):Rl=Dl=0,er=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),ka=Xe(Jo),op=re({},Jo,{dataTransfer:0}),lp=Xe(op),ip=re({},Or,{relatedTarget:0}),Ol=Xe(ip),sp=re({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),ap=Xe(sp),up=re({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cp=Xe(up),dp=re({},Wn,{data:0}),Sa=Xe(dp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mp[e])?!!t[e]:!1}function cs(){return hp}var gp=re({},Or,{key:function(e){if(e.key){var t=fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Xe(gp),yp=re({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Xe(yp),xp=re({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),wp=Xe(xp),kp=re({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=Xe(kp),Np=re({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Xe(Np),Cp=[9,13,27,32],ds=Ct&&"CompositionEvent"in window,dr=null;Ct&&"documentMode"in document&&(dr=document.documentMode);var Ep=Ct&&"TextEvent"in window&&!dr,fc=Ct&&(!ds||dr&&8<dr&&11>=dr),ja=" ",Ca=!1;function pc(e,t){switch(e){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function zp(e,t){switch(e){case"compositionend":return mc(t);case"keypress":return t.which!==32?null:(Ca=!0,ja);case"textInput":return e=t.data,e===ja&&Ca?null:e;default:return null}}function _p(e,t){if(kn)return e==="compositionend"||!ds&&pc(e,t)?(e=dc(),vo=as=Rt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pp[e.type]:t==="textarea"}function hc(e,t,n,r){Qu(r),t=Io(t,"onChange"),0<t.length&&(n=new us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,jr=null;function Mp(e){Ec(e,0)}function Zo(e){var t=jn(e);if(Fu(t))return e}function Tp(e,t){if(e==="change")return t}var gc=!1;if(Ct){var $l;if(Ct){var Fl="oninput"in document;if(!Fl){var za=document.createElement("div");za.setAttribute("oninput","return;"),Fl=typeof za.oninput=="function"}$l=Fl}else $l=!1;gc=$l&&(!document.documentMode||9<document.documentMode)}function _a(){fr&&(fr.detachEvent("onpropertychange",vc),jr=fr=null)}function vc(e){if(e.propertyName==="value"&&Zo(jr)){var t=[];hc(t,jr,e,rs(e)),Xu(Mp,t)}}function bp(e,t,n){e==="focusin"?(_a(),fr=t,jr=n,fr.attachEvent("onpropertychange",vc)):e==="focusout"&&_a()}function Ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(jr)}function Lp(e,t){if(e==="click")return Zo(t)}function Dp(e,t){if(e==="input"||e==="change")return Zo(t)}function Rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Rp;function Cr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ti.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function Pa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=Pa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pa(n)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xc(){for(var e=window,t=Eo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Eo(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Op(e){var t=xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yc(n.ownerDocument.documentElement,n)){if(r!==null&&fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ma(n,l);var i=Ma(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $p=Ct&&"documentMode"in document&&11>=document.documentMode,Sn=null,wi=null,pr=null,ki=!1;function Ta(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||Sn==null||Sn!==Eo(r)||(r=Sn,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Cr(pr,r)||(pr=r,r=Io(wi,"onSelect"),0<r.length&&(t=new us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function oo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Al={},wc={};Ct&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function el(e){if(Al[e])return Al[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return Al[e]=t[n];return e}var kc=el("animationend"),Sc=el("animationiteration"),Nc=el("animationstart"),jc=el("transitionend"),Cc=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Cc.set(e,t),pn(t,[e])}for(var Bl=0;Bl<ba.length;Bl++){var Ul=ba[Bl],Fp=Ul.toLowerCase(),Ap=Ul[0].toUpperCase()+Ul.slice(1);Gt(Fp,"on"+Ap)}Gt(kc,"onAnimationEnd");Gt(Sc,"onAnimationIteration");Gt(Nc,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(jc,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Ia(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ff(r,t,void 0,e),e.currentTarget=null}function Ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Ia(o,s,f),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Ia(o,s,f),l=a}}}if(_o)throw e=gi,_o=!1,gi=null,e}function X(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(zc(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),zc(n,e,r,t)}var lo="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[lo]){e[lo]=!0,Lu.forEach(function(n){n!=="selectionchange"&&(Bp.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[lo]||(t[lo]=!0,Hl("selectionchange",!1,t))}}function zc(e,t,n,r){switch(cc(t)){case 1:var o=tp;break;case 4:o=np;break;default:o=ss}n=o.bind(null,t,n,e),o=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=nn(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}Xu(function(){var f=l,y=rs(n),v=[];e:{var g=Cc.get(e);if(g!==void 0){var S=us,N=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":S=vp;break;case"focusin":N="focus",S=Ol;break;case"focusout":N="blur",S=Ol;break;case"beforeblur":case"afterblur":S=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=lp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=wp;break;case kc:case Sc:case Nc:S=ap;break;case jc:S=Sp;break;case"scroll":S=rp;break;case"wheel":S=jp;break;case"copy":case"cut":case"paste":S=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Na}var _=(t&4)!==0,F=!_&&e==="scroll",p=_?g!==null?g+"Capture":null:g;_=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=wr(c,p),x!=null&&_.push(zr(c,x,m)))),F)break;c=c.return}0<_.length&&(g=new S(g,N,null,n,y),v.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==pi&&(N=n.relatedTarget||n.fromElement)&&(nn(N)||N[Et]))break e;if((S||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=f,N=N?nn(N):null,N!==null&&(F=mn(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=f),S!==N)){if(_=ka,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Na,x="onPointerLeave",p="onPointerEnter",c="pointer"),F=S==null?g:jn(S),m=N==null?g:jn(N),g=new _(x,c+"leave",S,n,y),g.target=F,g.relatedTarget=m,x=null,nn(y)===f&&(_=new _(p,c+"enter",N,n,y),_.target=m,_.relatedTarget=F,x=_),F=x,S&&N)t:{for(_=S,p=N,c=0,m=_;m;m=yn(m))c++;for(m=0,x=p;x;x=yn(x))m++;for(;0<c-m;)_=yn(_),c--;for(;0<m-c;)p=yn(p),m--;for(;c--;){if(_===p||p!==null&&_===p.alternate)break t;_=yn(_),p=yn(p)}_=null}else _=null;S!==null&&La(v,g,S,_,!1),N!==null&&F!==null&&La(v,F,N,_,!0)}}e:{if(g=f?jn(f):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var E=Tp;else if(Ea(g))if(gc)E=Dp;else{E=Ip;var w=bp}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Lp);if(E&&(E=E(e,f))){hc(v,E,n,y);break e}w&&w(e,g,f),e==="focusout"&&(w=g._wrapperState)&&w.controlled&&g.type==="number"&&ai(g,"number",g.value)}switch(w=f?jn(f):window,e){case"focusin":(Ea(w)||w.contentEditable==="true")&&(Sn=w,wi=f,pr=null);break;case"focusout":pr=wi=Sn=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,Ta(v,n,y);break;case"selectionchange":if($p)break;case"keydown":case"keyup":Ta(v,n,y)}var P;if(ds)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else kn?pc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fc&&n.locale!=="ko"&&(kn||I!=="onCompositionStart"?I==="onCompositionEnd"&&kn&&(P=dc()):(Rt=y,as="value"in Rt?Rt.value:Rt.textContent,kn=!0)),w=Io(f,I),0<w.length&&(I=new Sa(I,e,null,n,y),v.push({event:I,listeners:w}),P?I.data=P:(P=mc(n),P!==null&&(I.data=P)))),(P=Ep?zp(e,n):_p(e,n))&&(f=Io(f,"onBeforeInput"),0<f.length&&(y=new Sa("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:f}),y.data=P))}Ec(v,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Io(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=wr(e,n),l!=null&&r.unshift(zr(e,l,o)),l=wr(e,t),l!=null&&r.push(zr(e,l,o))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,o?(a=wr(n,l),a!=null&&i.unshift(zr(n,a,s))):o||(a=wr(n,l),a!=null&&i.push(zr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Up=/\r\n?/g,Hp=/\u0000|\uFFFD/g;function Da(e){return(typeof e=="string"?e:""+e).replace(Up,`
`).replace(Hp,"")}function io(e,t,n){if(t=Da(t),Da(e)!==t&&n)throw Error(k(425))}function Lo(){}var Si=null,Ni=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Ra=typeof Promise=="function"?Promise:void 0,Wp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ra<"u"?function(e){return Ra.resolve(null).then(e).catch(Qp)}:Ci;function Qp(e){setTimeout(function(){throw e})}function Wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Nr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Oa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Qn,_r="__reactProps$"+Qn,Et="__reactContainer$"+Qn,Ei="__reactEvents$"+Qn,Kp="__reactListeners$"+Qn,Gp="__reactHandles$"+Qn;function nn(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Oa(e);e!==null;){if(n=e[mt])return n;e=Oa(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[mt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function tl(e){return e[_r]||null}var zi=[],Cn=-1;function Yt(e){return{current:e}}function q(e){0>Cn||(e.current=zi[Cn],zi[Cn]=null,Cn--)}function Y(e,t){Cn++,zi[Cn]=e.current,e.current=t}var Kt={},Pe=Yt(Kt),Be=Yt(!1),an=Kt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Do(){q(Be),q(Pe)}function $a(e,t,n){if(Pe.current!==Kt)throw Error(k(168));Y(Pe,t),Y(Be,n)}function _c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,bf(e)||"Unknown",o));return re({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,an=Pe.current,Y(Pe,e),Y(Be,Be.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=_c(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,q(Be),q(Pe),Y(Pe,e)):q(Be),Y(Be,n)}var wt=null,nl=!1,Ql=!1;function Pc(e){wt===null?wt=[e]:wt.push(e)}function Yp(e){nl=!0,Pc(e)}function Xt(){if(!Ql&&wt!==null){Ql=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,nl=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),ec(os,Xt),o}finally{K=t,Ql=!1}}return null}var En=[],zn=0,Oo=null,$o=0,Je=[],Ze=0,un=null,kt=1,St="";function en(e,t){En[zn++]=$o,En[zn++]=Oo,Oo=e,$o=t}function Mc(e,t,n){Je[Ze++]=kt,Je[Ze++]=St,Je[Ze++]=un,un=e;var r=kt;e=St;var o=32-at(r)-1;r&=~(1<<o),n+=1;var l=32-at(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,kt=1<<32-at(t)+o|n<<o|r,St=l+e}else kt=1<<l|n<<o|r,St=e}function ps(e){e.return!==null&&(en(e,1),Mc(e,1,0))}function ms(e){for(;e===Oo;)Oo=En[--zn],En[zn]=null,$o=En[--zn],En[zn]=null;for(;e===un;)un=Je[--Ze],Je[Ze]=null,St=Je[--Ze],Je[Ze]=null,kt=Je[--Ze],Je[Ze]=null}var Ke=null,Qe=null,ee=!1,st=null;function Tc(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,Qe=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(ee){var t=Qe;if(t){var n=t;if(!Aa(e,t)){if(_i(e))throw Error(k(418));t=Bt(n.nextSibling);var r=Ke;t&&Aa(e,t)?Tc(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ke=e)}}else{if(_i(e))throw Error(k(418));e.flags=e.flags&-4097|2,ee=!1,Ke=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function so(e){if(e!==Ke)return!1;if(!ee)return Ba(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=Qe)){if(_i(e))throw bc(),Error(k(418));for(;t;)Tc(e,t),t=Bt(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ke?Bt(e.stateNode.nextSibling):null;return!0}function bc(){for(var e=Qe;e;)e=Bt(e.nextSibling)}function Fn(){Qe=Ke=null,ee=!1}function hs(e){st===null?st=[e]:st.push(e)}var Xp=Pt.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ao(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Ic(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Wt(p,c),p.index=0,p.sibling=null,p}function l(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Zl(m,p.mode,x),c.return=p,c):(c=o(c,m),c.return=p,c)}function a(p,c,m,x){var E=m.type;return E===wn?y(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===bt&&Ua(E)===c.type)?(x=o(c,m.props),x.ref=tr(p,c,m),x.return=p,x):(x=Co(m.type,m.key,m.props,null,p.mode,x),x.ref=tr(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ei(m,p.mode,x),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function y(p,c,m,x,E){return c===null||c.tag!==7?(c=sn(m,p.mode,x,E),c.return=p,c):(c=o(c,m),c.return=p,c)}function v(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case qr:return m=Co(c.type,c.key,c.props,null,p.mode,m),m.ref=tr(p,null,c),m.return=p,m;case xn:return c=ei(c,p.mode,m),c.return=p,c;case bt:var x=c._init;return v(p,x(c._payload),m)}if(ir(c)||Xn(c))return c=sn(c,p.mode,m,null),c.return=p,c;ao(p,c)}return null}function g(p,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qr:return m.key===E?a(p,c,m,x):null;case xn:return m.key===E?f(p,c,m,x):null;case bt:return E=m._init,g(p,c,E(m._payload),x)}if(ir(m)||Xn(m))return E!==null?null:y(p,c,m,x,null);ao(p,m)}return null}function S(p,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,E);case xn:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,E);case bt:var w=x._init;return S(p,c,m,w(x._payload),E)}if(ir(x)||Xn(x))return p=p.get(m)||null,y(c,p,x,E,null);ao(c,x)}return null}function N(p,c,m,x){for(var E=null,w=null,P=c,I=c=0,J=null;P!==null&&I<m.length;I++){P.index>I?(J=P,P=null):J=P.sibling;var D=g(p,P,m[I],x);if(D===null){P===null&&(P=J);break}e&&P&&D.alternate===null&&t(p,P),c=l(D,c,I),w===null?E=D:w.sibling=D,w=D,P=J}if(I===m.length)return n(p,P),ee&&en(p,I),E;if(P===null){for(;I<m.length;I++)P=v(p,m[I],x),P!==null&&(c=l(P,c,I),w===null?E=P:w.sibling=P,w=P);return ee&&en(p,I),E}for(P=r(p,P);I<m.length;I++)J=S(P,p,I,m[I],x),J!==null&&(e&&J.alternate!==null&&P.delete(J.key===null?I:J.key),c=l(J,c,I),w===null?E=J:w.sibling=J,w=J);return e&&P.forEach(function(fe){return t(p,fe)}),ee&&en(p,I),E}function _(p,c,m,x){var E=Xn(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var w=E=null,P=c,I=c=0,J=null,D=m.next();P!==null&&!D.done;I++,D=m.next()){P.index>I?(J=P,P=null):J=P.sibling;var fe=g(p,P,D.value,x);if(fe===null){P===null&&(P=J);break}e&&P&&fe.alternate===null&&t(p,P),c=l(fe,c,I),w===null?E=fe:w.sibling=fe,w=fe,P=J}if(D.done)return n(p,P),ee&&en(p,I),E;if(P===null){for(;!D.done;I++,D=m.next())D=v(p,D.value,x),D!==null&&(c=l(D,c,I),w===null?E=D:w.sibling=D,w=D);return ee&&en(p,I),E}for(P=r(p,P);!D.done;I++,D=m.next())D=S(P,p,I,D.value,x),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?I:D.key),c=l(D,c,I),w===null?E=D:w.sibling=D,w=D);return e&&P.forEach(function(Me){return t(p,Me)}),ee&&en(p,I),E}function F(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case qr:e:{for(var E=m.key,w=c;w!==null;){if(w.key===E){if(E=m.type,E===wn){if(w.tag===7){n(p,w.sibling),c=o(w,m.props.children),c.return=p,p=c;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===bt&&Ua(E)===w.type){n(p,w.sibling),c=o(w,m.props),c.ref=tr(p,w,m),c.return=p,p=c;break e}n(p,w);break}else t(p,w);w=w.sibling}m.type===wn?(c=sn(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=Co(m.type,m.key,m.props,null,p.mode,x),x.ref=tr(p,c,m),x.return=p,p=x)}return i(p);case xn:e:{for(w=m.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ei(m,p.mode,x),c.return=p,p=c}return i(p);case bt:return w=m._init,F(p,c,w(m._payload),x)}if(ir(m))return N(p,c,m,x);if(Xn(m))return _(p,c,m,x);ao(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=Zl(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return F}var An=Ic(!0),Lc=Ic(!1),Fo=Yt(null),Ao=null,_n=null,gs=null;function vs(){gs=_n=Ao=null}function ys(e){var t=Fo.current;q(Fo),e._currentValue=t}function Mi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Ao=e,gs=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Ao===null)throw Error(k(308));_n=e,Ao.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var rn=null;function xs(e){rn===null?rn=[e]:rn.push(e)}function Dc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,zt(e,n)}return o=r.interleaved,o===null?(t.next=t,xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,zt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bo(e,t,n,r){var o=e.updateQueue;It=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?l=f:i.next=f,i=a;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=f:s.next=f,y.lastBaseUpdate=a))}if(l!==null){var v=o.baseState;i=0,y=f=a=null,s=l;do{var g=s.lane,S=s.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,_=s;switch(g=t,S=n,_.tag){case 1:if(N=_.payload,typeof N=="function"){v=N.call(S,v,g);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=_.payload,g=typeof N=="function"?N.call(S,v,g):N,g==null)break e;v=re({},v,g);break e;case 2:It=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(f=y=S,a=v):y=y.next=S,i|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(y===null&&(a=v),o.baseState=a,o.firstBaseUpdate=f,o.lastBaseUpdate=y,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);dn|=i,e.lanes=i,e.memoizedState=v}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Fr={},gt=Yt(Fr),Pr=Yt(Fr),Mr=Yt(Fr);function on(e){if(e===Fr)throw Error(k(174));return e}function ks(e,t){switch(Y(Mr,t),Y(Pr,e),Y(gt,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}q(gt),Y(gt,t)}function Bn(){q(gt),q(Pr),q(Mr)}function Oc(e){on(Mr.current);var t=on(gt.current),n=ci(t,e.type);t!==n&&(Y(Pr,e),Y(gt,n))}function Ss(e){Pr.current===e&&(q(gt),q(Pr))}var te=Yt(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function Ns(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var wo=Pt.ReactCurrentDispatcher,Gl=Pt.ReactCurrentBatchConfig,cn=0,ne=null,me=null,ve=null,Ho=!1,mr=!1,Tr=0,qp=0;function Ee(){throw Error(k(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Cs(e,t,n,r,o,l){if(cn=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?tm:nm,e=n(r,o),mr){l=0;do{if(mr=!1,Tr=0,25<=l)throw Error(k(301));l+=1,ve=me=null,t.updateQueue=null,wo.current=rm,e=n(r,o)}while(mr)}if(wo.current=Vo,t=me!==null&&me.next!==null,cn=0,ve=me=ne=null,Ho=!1,t)throw Error(k(300));return e}function Es(){var e=Tr!==0;return Tr=0,e}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=e:ve=ve.next=e,ve}function rt(){if(me===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?ne.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(k(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?ne.memoizedState=ve=e:ve=ve.next=e}return ve}function br(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,f=l;do{var y=f.lane;if((cn&y)===y)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var v={lane:y,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=v,i=r):a=a.next=v,ne.lanes|=y,dn|=y}f=f.next}while(f!==null&&f!==l);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ne.lanes|=l,dn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=rt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);ct(l,t.memoizedState)||(Ae=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function $c(){}function Fc(e,t){var n=ne,r=rt(),o=t(),l=!ct(r.memoizedState,o);if(l&&(r.memoizedState=o,Ae=!0),r=r.queue,zs(Uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Ir(9,Bc.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(k(349));cn&30||Ac(n,t,o)}return o}function Ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bc(e,t,n,r){t.value=n,t.getSnapshot=r,Hc(t)&&Vc(e)}function Uc(e,t,n){return n(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Vc(e){var t=zt(e,1);t!==null&&ut(t,e,1,-1)}function Wa(e){var t=pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=em.bind(null,ne,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return rt().memoizedState}function ko(e,t,n,r){var o=pt();ne.flags|=e,o.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function rl(e,t,n,r){var o=rt();r=r===void 0?null:r;var l=void 0;if(me!==null){var i=me.memoizedState;if(l=i.destroy,r!==null&&js(r,i.deps)){o.memoizedState=Ir(t,n,l,r);return}}ne.flags|=e,o.memoizedState=Ir(1|t,n,l,r)}function Qa(e,t){return ko(8390656,8,e,t)}function zs(e,t){return rl(2048,8,e,t)}function Qc(e,t){return rl(4,2,e,t)}function Kc(e,t){return rl(4,4,e,t)}function Gc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yc(e,t,n){return n=n!=null?n.concat([e]):null,rl(4,4,Gc.bind(null,t,e),n)}function _s(){}function Xc(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qc(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jc(e,t,n){return cn&21?(ct(n,t)||(n=rc(),ne.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Jp(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{K=n,Gl.transition=r}}function Zc(){return rt().memoizedState}function Zp(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ed(e))td(t,n);else if(n=Dc(e,t,n,r),n!==null){var o=Le();ut(n,e,r,o),nd(n,t,r)}}function em(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ed(e))td(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(o.next=o,xs(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Dc(e,t,o,r),n!==null&&(o=Le(),ut(n,e,r,o),nd(n,t,r))}}function ed(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function td(e,t){mr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ls(e,n)}}var Vo={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},tm={readContext:nt,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,Gc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zp.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:Wa,useDebugValue:_s,useDeferredValue:function(e){return pt().memoizedState=e},useTransition:function(){var e=Wa(!1),t=e[0];return e=Jp.bind(null,e[1]),pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,o=pt();if(ee){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ye===null)throw Error(k(349));cn&30||Ac(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Qa(Uc.bind(null,r,l,e),[e]),r.flags|=2048,Ir(9,Bc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=pt(),t=ye.identifierPrefix;if(ee){var n=St,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:nt,useCallback:Xc,useContext:nt,useEffect:zs,useImperativeHandle:Yc,useInsertionEffect:Qc,useLayoutEffect:Kc,useMemo:qc,useReducer:Yl,useRef:Wc,useState:function(){return Yl(br)},useDebugValue:_s,useDeferredValue:function(e){var t=rt();return Jc(t,me.memoizedState,e)},useTransition:function(){var e=Yl(br)[0],t=rt().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Fc,useId:Zc,unstable_isNewReconciler:!1},rm={readContext:nt,useCallback:Xc,useContext:nt,useEffect:zs,useImperativeHandle:Yc,useInsertionEffect:Qc,useLayoutEffect:Kc,useMemo:qc,useReducer:Xl,useRef:Wc,useState:function(){return Xl(br)},useDebugValue:_s,useDeferredValue:function(e){var t=rt();return me===null?t.memoizedState=e:Jc(t,me.memoizedState,e)},useTransition:function(){var e=Xl(br)[0],t=rt().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Fc,useId:Zc,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),o=Vt(e),l=Nt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,o),t!==null&&(ut(t,e,o,r),xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),o=Vt(e),l=Nt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ut(e,l,o),t!==null&&(ut(t,e,o,r),xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Vt(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ut(e,o,r),t!==null&&(ut(t,e,r,n),xo(t,e,r))}};function Ka(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,l):!0}function rd(e,t,n){var r=!1,o=Kt,l=t.contextType;return typeof l=="object"&&l!==null?l=nt(l):(o=Ue(t)?an:Pe.current,r=t.contextTypes,l=(r=r!=null)?$n(e,o):Kt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function bi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ws(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=nt(l):(l=Ue(t)?an:Pe.current,o.context=$n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ti(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=Tf(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var om=typeof WeakMap=="function"?WeakMap:Map;function od(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,Hi=r),Ii(e,t)},n}function ld(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ii(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new om;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ym.bind(null,e,t,n),t.then(e,e))}function Xa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var lm=Pt.ReactCurrentOwner,Ae=!1;function Ie(e,t,n,r){t.child=e===null?Lc(t,null,n,r):An(t,e.child,n,r)}function Ja(e,t,n,r,o){n=n.render;var l=t.ref;return Dn(t,o),r=Cs(e,t,n,r,l,o),n=Es(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(ee&&n&&ps(t),t.flags|=1,Ie(e,t,r,o),t.child)}function Za(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Rs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,id(e,t,l,r,o)):(e=Co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(i,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=Wt(l,r),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Cr(l,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,_t(e,t,o)}return Li(e,t,n,r,o)}function sd(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Mn,We),We|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(Mn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Y(Mn,We),We|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Y(Mn,We),We|=r;return Ie(e,t,o,n),t.child}function ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Li(e,t,n,r,o){var l=Ue(n)?an:Pe.current;return l=$n(t,l),Dn(t,o),n=Cs(e,t,n,r,l,o),r=Es(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(ee&&r&&ps(t),t.flags|=1,Ie(e,t,n,o),t.child)}function eu(e,t,n,r,o){if(Ue(n)){var l=!0;Ro(t)}else l=!1;if(Dn(t,o),t.stateNode===null)So(e,t),rd(t,n,r),bi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=nt(f):(f=Ue(n)?an:Pe.current,f=$n(t,f));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function";v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Ga(t,i,r,f),It=!1;var g=t.memoizedState;i.state=g,Bo(t,r,i,o),a=t.memoizedState,s!==r||g!==a||Be.current||It?(typeof y=="function"&&(Ti(t,n,y,r),a=t.memoizedState),(s=It||Ka(t,n,s,r,g,a,f))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Rc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:lt(t.type,s),i.props=f,v=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ue(n)?an:Pe.current,a=$n(t,a));var S=n.getDerivedStateFromProps;(y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==v||g!==a)&&Ga(t,i,r,a),It=!1,g=t.memoizedState,i.state=g,Bo(t,r,i,o);var N=t.memoizedState;s!==v||g!==N||Be.current||It?(typeof S=="function"&&(Ti(t,n,S,r),N=t.memoizedState),(f=It||Ka(t,n,f,r,g,N,a)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,l,o)}function Di(e,t,n,r,o,l){ad(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Fa(t,n,!1),_t(e,t,l);r=t.stateNode,lm.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=An(t,e.child,null,l),t.child=An(t,null,s,l)):Ie(e,t,s,l),t.memoizedState=r.state,o&&Fa(t,n,!0),t.child}function ud(e){var t=e.stateNode;t.pendingContext?$a(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$a(e,t.context,!1),ks(e,t.containerInfo)}function tu(e,t,n,r,o){return Fn(),hs(o),t.flags|=256,Ie(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function cd(e,t,n){var r=t.pendingProps,o=te.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Y(te,o&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=sl(i,r,0,null),e=sn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Oi(n),t.memoizedState=Ri,e):Ps(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return im(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Wt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Wt(s,l):(l=sn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Oi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return l=e.child,e=l.sibling,r=Wt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ps(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&hs(r),An(t,e.child,null,n),e=Ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=ql(Error(k(422))),uo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=sl({mode:"visible",children:r.children},o,0,null),l=sn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&An(t,e.child,null,i),t.child.memoizedState=Oi(i),t.memoizedState=Ri,l);if(!(t.mode&1))return uo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(k(419)),r=ql(l,r,void 0),uo(e,t,i,r)}if(s=(i&e.childLanes)!==0,Ae||s){if(r=ye,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,zt(e,o),ut(r,e,o,-1))}return Ds(),r=ql(Error(k(421))),uo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=xm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Qe=Bt(o.nextSibling),Ke=t,ee=!0,st=null,e!==null&&(Je[Ze++]=kt,Je[Ze++]=St,Je[Ze++]=un,kt=e.id,St=e.overflow,un=t),t=Ps(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mi(e.return,t,n)}function Jl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function dd(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ie(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jl(t,!0,n,null,l);break;case"together":Jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sm(e,t,n){switch(t.tag){case 3:ud(t),Fn();break;case 5:Oc(t);break;case 1:Ue(t.type)&&Ro(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Y(Fo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?cd(e,t,n):(Y(te,te.current&1),e=_t(e,t,n),e!==null?e.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,sd(e,t,n)}return _t(e,t,n)}var fd,$i,pd,md;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$i=function(){};pd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(gt.current);var l=null;switch(n){case"input":o=ii(e,o),r=ii(e,r),l=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),l=[];break;case"textarea":o=ui(e,o),r=ui(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}di(n,r);var i;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var s=o[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(yr.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var a=r[f];if(s=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(yr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&X("scroll",e),l||s===a||(l=[])):(l=l||[]).push(f,a))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function am(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ue(t.type)&&Do(),ze(t),null;case 3:return r=t.stateNode,Bn(),q(Be),q(Pe),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Qi(st),st=null))),$i(e,t),ze(t),null;case 5:Ss(t);var o=on(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ze(t),null}if(e=on(gt.current),so(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[mt]=t,r[_r]=l,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<ar.length;o++)X(ar[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":da(r,l),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},X("invalid",r);break;case"textarea":pa(r,l),X("invalid",r)}di(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&io(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&io(r.textContent,s,e),o=["children",""+s]):yr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&X("scroll",r)}switch(n){case"input":Jr(r),fa(r,l,!0);break;case"textarea":Jr(r),ma(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Lo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[mt]=t,e[_r]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(i=fi(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<ar.length;o++)X(ar[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":da(e,r),o=ii(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":pa(e,r),o=ui(e,r),X("invalid",e);break;default:o=r}di(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Wu(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(yr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&X("scroll",e):a!=null&&Zi(e,l,a,i))}switch(n){case"input":Jr(e),fa(e,r,!1);break;case"textarea":Jr(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Tn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=on(Mr.current),on(gt.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(l=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return ze(t),null;case 13:if(q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Qe!==null&&t.mode&1&&!(t.flags&128))bc(),Fn(),t.flags|=98560,l=!1;else if(l=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(k(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(k(317));l[mt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else st!==null&&(Qi(st),st=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?he===0&&(he=3):Ds())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Bn(),$i(e,t),e===null&&Er(t.stateNode.containerInfo),ze(t),null;case 10:return ys(t.type._context),ze(t),null;case 17:return Ue(t.type)&&Do(),ze(t),null;case 19:if(q(te),l=t.memoizedState,l===null)return ze(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)nr(l,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Uo(e),i!==null){for(t.flags|=128,nr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(te,te.current&1|2),t.child}e=e.sibling}l.tail!==null&&ce()>Hn&&(t.flags|=128,r=!0,nr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ee)return ze(t),null}else 2*ce()-l.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,nr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ce(),t.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function um(e,t){switch(ms(t),t.tag){case 1:return Ue(t.type)&&Do(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),q(Be),q(Pe),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(te),null;case 4:return Bn(),null;case 10:return ys(t.type._context),null;case 22:case 23:return Ls(),null;case 24:return null;default:return null}}var co=!1,_e=!1,cm=typeof WeakSet=="function"?WeakSet:Set,T=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){ie(e,t,r)}}var ru=!1;function dm(e,t){if(Si=To,e=xc(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,y=0,v=e,g=null;t:for(;;){for(var S;v!==n||o!==0&&v.nodeType!==3||(s=i+o),v!==l||r!==0&&v.nodeType!==3||(a=i+r),v.nodeType===3&&(i+=v.nodeValue.length),(S=v.firstChild)!==null;)g=v,v=S;for(;;){if(v===e)break t;if(g===n&&++f===o&&(s=i),g===l&&++y===r&&(a=i),(S=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},To=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var _=N.memoizedProps,F=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:lt(t.type,_),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){ie(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return N=ru,ru=!1,N}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Fi(t,n,l)}o=o.next}while(o!==r)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[_r],delete t[Ei],delete t[Kp],delete t[Gp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function ou(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var ke=null,it=!1;function Tt(e,t,n){for(n=n.child;n!==null;)vd(e,t,n),n=n.sibling}function vd(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(qo,n)}catch{}switch(n.tag){case 5:_e||Pn(n,t);case 6:var r=ke,o=it;ke=null,Tt(e,t,n),ke=r,it=o,ke!==null&&(it?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(it?(e=ke,n=n.stateNode,e.nodeType===8?Wl(e.parentNode,n):e.nodeType===1&&Wl(e,n),Nr(e)):Wl(ke,n.stateNode));break;case 4:r=ke,o=it,ke=n.stateNode.containerInfo,it=!0,Tt(e,t,n),ke=r,it=o;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Fi(n,t,i),o=o.next}while(o!==r)}Tt(e,t,n);break;case 1:if(!_e&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Tt(e,t,n),_e=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cm),t.forEach(function(r){var o=wm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,it=!1;break e;case 3:ke=s.stateNode.containerInfo,it=!0;break e;case 4:ke=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(ke===null)throw Error(k(160));vd(l,i,o),ke=null,it=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(f){ie(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),ft(e),r&4){try{hr(3,e,e.return),ll(3,e)}catch(_){ie(e,e.return,_)}try{hr(5,e,e.return)}catch(_){ie(e,e.return,_)}}break;case 1:ot(t,e),ft(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(ot(t,e),ft(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{xr(o,"")}catch(_){ie(e,e.return,_)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Au(o,l),fi(s,i);var f=fi(s,l);for(i=0;i<a.length;i+=2){var y=a[i],v=a[i+1];y==="style"?Wu(o,v):y==="dangerouslySetInnerHTML"?Hu(o,v):y==="children"?xr(o,v):Zi(o,y,v,f)}switch(s){case"input":si(o,l);break;case"textarea":Bu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?Tn(o,!!l.multiple,S,!1):g!==!!l.multiple&&(l.defaultValue!=null?Tn(o,!!l.multiple,l.defaultValue,!0):Tn(o,!!l.multiple,l.multiple?[]:"",!1))}o[_r]=l}catch(_){ie(e,e.return,_)}}break;case 6:if(ot(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(_){ie(e,e.return,_)}}break;case 3:if(ot(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(_){ie(e,e.return,_)}break;case 4:ot(t,e),ft(e);break;case 13:ot(t,e),ft(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(bs=ce())),r&4&&lu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(f=_e)||y,ot(t,e),_e=f):ot(t,e),ft(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(v=T=y;T!==null;){switch(g=T,S=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:Pn(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(_){ie(r,n,_)}}break;case 5:Pn(g,g.return);break;case 22:if(g.memoizedState!==null){su(v);continue}}S!==null?(S.return=g,T=S):su(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{o=v.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=v.stateNode,a=v.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Vu("display",i))}catch(_){ie(e,e.return,_)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(_){ie(e,e.return,_)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),ft(e),r&4&&lu(e);break;case 21:break;default:ot(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xr(o,""),r.flags&=-33);var l=ou(e);Ui(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=ou(e);Bi(e,s,i);break;default:throw Error(k(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e,t,n){T=e,xd(e)}function xd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||co;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||_e;s=co;var f=_e;if(co=i,(_e=a)&&!f)for(T=o;T!==null;)i=T,a=i.child,i.tag===22&&i.memoizedState!==null?au(o):a!==null?(a.return=i,T=a):au(o);for(;l!==null;)T=l,xd(l),l=l.sibling;T=o,co=s,_e=f}iu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,T=l):iu(e)}}function iu(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_e||ll(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Va(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var y=f.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Nr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}_e||t.flags&512&&Ai(t)}catch(g){ie(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function su(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function au(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ll(4,t)}catch(a){ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ie(t,o,a)}}var l=t.return;try{Ai(t)}catch(a){ie(t,l,a)}break;case 5:var i=t.return;try{Ai(t)}catch(a){ie(t,i,a)}}}catch(a){ie(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var pm=Math.ceil,Wo=Pt.ReactCurrentDispatcher,Ms=Pt.ReactCurrentOwner,tt=Pt.ReactCurrentBatchConfig,V=0,ye=null,de=null,Ne=0,We=0,Mn=Yt(0),he=0,Lr=null,dn=0,il=0,Ts=0,gr=null,Fe=null,bs=0,Hn=1/0,xt=null,Qo=!1,Hi=null,Ht=null,fo=!1,Ot=null,Ko=0,vr=0,Vi=null,No=-1,jo=0;function Le(){return V&6?ce():No!==-1?No:No=ce()}function Vt(e){return e.mode&1?V&2&&Ne!==0?Ne&-Ne:Xp.transition!==null?(jo===0&&(jo=rc()),jo):(e=K,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function ut(e,t,n,r){if(50<vr)throw vr=0,Vi=null,Error(k(185));Rr(e,n,r),(!(V&2)||e!==ye)&&(e===ye&&(!(V&2)&&(il|=n),he===4&&Dt(e,Ne)),He(e,r),n===1&&V===0&&!(t.mode&1)&&(Hn=ce()+500,nl&&Xt()))}function He(e,t){var n=e.callbackNode;Xf(e,t);var r=Mo(e,e===ye?Ne:0);if(r===0)n!==null&&va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&va(n),t===1)e.tag===0?Yp(uu.bind(null,e)):Pc(uu.bind(null,e)),Wp(function(){!(V&6)&&Xt()}),n=null;else{switch(oc(r)){case 1:n=os;break;case 4:n=tc;break;case 16:n=Po;break;case 536870912:n=nc;break;default:n=Po}n=zd(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(No=-1,jo=0,V&6)throw Error(k(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Mo(e,e===ye?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var o=V;V|=2;var l=Sd();(ye!==e||Ne!==t)&&(xt=null,Hn=ce()+500,ln(e,t));do try{gm();break}catch(s){kd(e,s)}while(!0);vs(),Wo.current=l,V=o,de!==null?t=0:(ye=null,Ne=0,t=he)}if(t!==0){if(t===2&&(o=vi(e),o!==0&&(r=o,t=Wi(e,o))),t===1)throw n=Lr,ln(e,0),Dt(e,r),He(e,ce()),n;if(t===6)Dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!mm(o)&&(t=Go(e,r),t===2&&(l=vi(e),l!==0&&(r=l,t=Wi(e,l))),t===1))throw n=Lr,ln(e,0),Dt(e,r),He(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:tn(e,Fe,xt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=bs+500-ce(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ci(tn.bind(null,e,Fe,xt),t);break}tn(e,Fe,xt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-at(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pm(r/1960))-r,10<r){e.timeoutHandle=Ci(tn.bind(null,e,Fe,xt),r);break}tn(e,Fe,xt);break;case 5:tn(e,Fe,xt);break;default:throw Error(k(329))}}}return He(e,ce()),e.callbackNode===n?wd.bind(null,e):null}function Wi(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Go(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Qi(t)),e}function Qi(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!ct(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Ts,t&=~il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(V&6)throw Error(k(327));Rn();var t=Mo(e,0);if(!(t&1))return He(e,ce()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=vi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=Lr,ln(e,0),Dt(e,t),He(e,ce()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Fe,xt),He(e,ce()),null}function Is(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Hn=ce()+500,nl&&Xt())}}function fn(e){Ot!==null&&Ot.tag===0&&!(V&6)&&Rn();var t=V;V|=1;var n=tt.transition,r=K;try{if(tt.transition=null,K=1,e)return e()}finally{K=r,tt.transition=n,V=t,!(V&6)&&Xt()}}function Ls(){We=Mn.current,q(Mn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vp(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:Bn(),q(Be),q(Pe),Ns();break;case 5:Ss(r);break;case 4:Bn();break;case 13:q(te);break;case 19:q(te);break;case 10:ys(r.type._context);break;case 22:case 23:Ls()}n=n.return}if(ye=e,de=e=Wt(e.current,null),Ne=We=t,he=0,Lr=null,Ts=il=dn=0,Fe=gr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}rn=null}return e}function kd(e,t){do{var n=de;try{if(vs(),wo.current=Vo,Ho){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ho=!1}if(cn=0,ve=me=ne=null,mr=!1,Tr=0,Ms.current=null,n===null||n.return===null){he=1,Lr=t,de=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=Ne,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,y=s,v=y.tag;if(!(y.mode&1)&&(v===0||v===11||v===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Xa(i);if(S!==null){S.flags&=-257,qa(S,i,s,l,t),S.mode&1&&Ya(l,f,t),t=S,a=f;var N=t.updateQueue;if(N===null){var _=new Set;_.add(a),t.updateQueue=_}else N.add(a);break e}else{if(!(t&1)){Ya(l,f,t),Ds();break e}a=Error(k(426))}}else if(ee&&s.mode&1){var F=Xa(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),qa(F,i,s,l,t),hs(Un(a,s));break e}}l=a=Un(a,s),he!==4&&(he=2),gr===null?gr=[l]:gr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=od(l,a,t);Ha(l,p);break e;case 1:s=a;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=ld(l,s,t);Ha(l,x);break e}}l=l.return}while(l!==null)}jd(n)}catch(E){t=E,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Sd(){var e=Wo.current;return Wo.current=Vo,e===null?Vo:e}function Ds(){(he===0||he===3||he===2)&&(he=4),ye===null||!(dn&268435455)&&!(il&268435455)||Dt(ye,Ne)}function Go(e,t){var n=V;V|=2;var r=Sd();(ye!==e||Ne!==t)&&(xt=null,ln(e,t));do try{hm();break}catch(o){kd(e,o)}while(!0);if(vs(),V=n,Wo.current=r,de!==null)throw Error(k(261));return ye=null,Ne=0,he}function hm(){for(;de!==null;)Nd(de)}function gm(){for(;de!==null&&!Bf();)Nd(de)}function Nd(e){var t=Ed(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?jd(e):de=t,Ms.current=null}function jd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=um(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=am(n,t,We),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function tn(e,t,n){var r=K,o=tt.transition;try{tt.transition=null,K=1,vm(e,t,n,r)}finally{tt.transition=o,K=r}return null}function vm(e,t,n,r){do Rn();while(Ot!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(qf(e,l),e===ye&&(de=ye=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,zd(Po,function(){return Rn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=tt.transition,tt.transition=null;var i=K;K=1;var s=V;V|=4,Ms.current=null,dm(e,n),yd(n,e),Op(Ni),To=!!Si,Ni=Si=null,e.current=n,fm(n),Uf(),V=s,K=i,tt.transition=l}else e.current=n;if(fo&&(fo=!1,Ot=e,Ko=o),l=e.pendingLanes,l===0&&(Ht=null),Wf(n.stateNode),He(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=Hi,Hi=null,e;return Ko&1&&e.tag!==0&&Rn(),l=e.pendingLanes,l&1?e===Vi?vr++:(vr=0,Vi=e):vr=0,Xt(),null}function Rn(){if(Ot!==null){var e=oc(Ko),t=tt.transition,n=K;try{if(tt.transition=null,K=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,Ko=0,V&6)throw Error(k(331));var o=V;for(V|=4,T=e.current;T!==null;){var l=T,i=l.child;if(T.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(T=f;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:hr(8,y,l)}var v=y.child;if(v!==null)v.return=y,T=v;else for(;T!==null;){y=T;var g=y.sibling,S=y.return;if(hd(y),y===f){T=null;break}if(g!==null){g.return=S,T=g;break}T=S}}}var N=l.alternate;if(N!==null){var _=N.child;if(_!==null){N.child=null;do{var F=_.sibling;_.sibling=null,_=F}while(_!==null)}}T=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,T=i;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,T=p;break e}T=l.return}}var c=e.current;for(T=c;T!==null;){i=T;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,T=m;else e:for(i=c;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ll(9,s)}}catch(E){ie(s,s.return,E)}if(s===i){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(V=o,Xt(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(qo,e)}catch{}r=!0}return r}finally{K=n,tt.transition=t}}return!1}function cu(e,t,n){t=Un(n,t),t=od(e,t,1),e=Ut(e,t,1),t=Le(),e!==null&&(Rr(e,1,t),He(e,t))}function ie(e,t,n){if(e.tag===3)cu(e,e,n);else for(;t!==null;){if(t.tag===3){cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Un(n,e),e=ld(t,e,1),t=Ut(t,e,1),e=Le(),t!==null&&(Rr(t,1,e),He(t,e));break}}t=t.return}}function ym(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Ne&n)===n&&(he===4||he===3&&(Ne&130023424)===Ne&&500>ce()-bs?ln(e,0):Ts|=n),He(e,t)}function Cd(e,t){t===0&&(e.mode&1?(t=to,to<<=1,!(to&130023424)&&(to=4194304)):t=1);var n=Le();e=zt(e,t),e!==null&&(Rr(e,t,n),He(e,n))}function xm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function wm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Cd(e,n)}var Ed;Ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,sm(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,ee&&t.flags&1048576&&Mc(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var o=$n(t,Pe.current);Dn(t,n),o=Cs(null,t,r,e,o,n);var l=Es();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(l=!0,Ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ws(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,bi(t,r,e,n),t=Di(null,t,r,!0,l,n)):(t.tag=0,ee&&l&&ps(t),Ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Sm(r),e=lt(r,e),o){case 0:t=Li(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=Ja(null,t,r,e,n);break e;case 14:t=Za(null,t,r,lt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Li(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),eu(e,t,r,o,n);case 3:e:{if(ud(t),e===null)throw Error(k(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Rc(e,t),Bo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Un(Error(k(423)),t),t=tu(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(k(424)),t),t=tu(e,t,r,n,o);break e}else for(Qe=Bt(t.stateNode.containerInfo.firstChild),Ke=t,ee=!0,st=null,n=Lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===o){t=_t(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Oc(t),e===null&&Pi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ji(r,o)?i=null:l!==null&&ji(r,l)&&(t.flags|=32),ad(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return cd(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Ja(e,t,r,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,Y(Fo,r._currentValue),r._currentValue=i,l!==null)if(ct(l.value,i)){if(l.children===o.children&&!Be.current){t=_t(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Nt(-1,n&-n),a.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var y=f.pending;y===null?a.next=a:(a.next=y.next,y.next=a),f.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Mi(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(k(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Mi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=nt(o),r=r(o),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),Za(e,t,r,o,n);case 15:return id(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),So(e,t),t.tag=1,Ue(r)?(e=!0,Ro(t)):e=!1,Dn(t,n),rd(t,r,o),bi(t,r,o,n),Di(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return sd(e,t,n)}throw Error(k(156,t.tag))};function zd(e,t){return ec(e,t)}function km(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new km(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sm(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Co(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Rs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wn:return sn(n.children,o,l,t);case es:i=8,o|=8;break;case ni:return e=et(12,n,t,o|2),e.elementType=ni,e.lanes=l,e;case ri:return e=et(13,n,t,o),e.elementType=ri,e.lanes=l,e;case oi:return e=et(19,n,t,o),e.elementType=oi,e.lanes=l,e;case Ou:return sl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Du:i=10;break e;case Ru:i=9;break e;case ts:i=11;break e;case ns:i=14;break e;case bt:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=et(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function sn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=et(22,e,r,t),e.elementType=Ou,e.lanes=n,e.stateNode={isHidden:!1},e}function Zl(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Os(e,t,n,r,o,l,i,s,a){return e=new Nm(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=et(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(l),e}function jm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _d(e){if(!e)return Kt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ue(n))return _c(e,n,t)}return t}function Pd(e,t,n,r,o,l,i,s,a){return e=Os(n,r,!0,e,o,l,i,s,a),e.context=_d(null),n=e.current,r=Le(),o=Vt(n),l=Nt(r,o),l.callback=t??null,Ut(n,l,o),e.current.lanes=o,Rr(e,o,r),He(e,r),e}function al(e,t,n,r){var o=t.current,l=Le(),i=Vt(o);return n=_d(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(o,t,i),e!==null&&(ut(e,o,i,l),xo(e,o,i)),i}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function Cm(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}ul.prototype.render=Fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));al(e,t,null,null)};ul.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){al(null,e,null,null)}),t[Et]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&uc(e)}};function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function Em(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var f=Yo(i);l.call(f)}}var i=Pd(t,r,e,0,null,!1,!1,"",fu);return e._reactRootContainer=i,e[Et]=i.current,Er(e.nodeType===8?e.parentNode:e),fn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var f=Yo(a);s.call(f)}}var a=Os(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=a,e[Et]=a.current,Er(e.nodeType===8?e.parentNode:e),fn(function(){al(t,a,n,r)}),a}function dl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Yo(i);s.call(a)}}al(t,i,e,o)}else i=Em(n,t,e,o,r);return Yo(i)}lc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(ls(t,n|1),He(t,ce()),!(V&6)&&(Hn=ce()+500,Xt()))}break;case 13:fn(function(){var r=zt(e,1);if(r!==null){var o=Le();ut(r,e,1,o)}}),$s(e,1)}};is=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Le();ut(t,e,134217728,n)}$s(e,134217728)}};ic=function(e){if(e.tag===13){var t=Vt(e),n=zt(e,t);if(n!==null){var r=Le();ut(n,e,t,r)}$s(e,t)}};sc=function(){return K};ac=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};mi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=tl(r);if(!o)throw Error(k(90));Fu(r),si(r,o)}}}break;case"textarea":Bu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Gu=Is;Yu=fn;var zm={usingClientEntryPoint:!1,Events:[$r,jn,tl,Qu,Ku,Is]},rr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ju(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Cm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{qo=po.inject(_m),ht=po}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!As(t))throw Error(k(200));return jm(e,t,null,n)};Ye.createRoot=function(e,t){if(!As(e))throw Error(k(299));var n=!1,r="",o=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Os(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,Er(e.nodeType===8?e.parentNode:e),new Fs(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Ju(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return fn(e)};Ye.hydrate=function(e,t,n){if(!cl(t))throw Error(k(200));return dl(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!As(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Md;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Pd(t,null,e,1,n??null,o,!1,l,i),e[Et]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ul(t)};Ye.render=function(e,t,n){if(!cl(t))throw Error(k(200));return dl(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!cl(e))throw Error(k(40));return e._reactRootContainer?(fn(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ye.unstable_batchedUpdates=Is;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return dl(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td)}catch(e){console.error(e)}}Td(),Tu.exports=Ye;var Pm=Tu.exports,bd,pu=Pm;bd=pu.createRoot,pu.hydrateRoot;var Mm={thinkers:[{id:1,name:"Andrew Weil",handle:"@DrWeil",domain:"Medicina integrativa",active:!0,desc:"Medico di Harvard, fondatore della medicina integrativa. Da 40 anni costruisce il ponte tra medicina convenzionale e tradizioni curative."},{id:2,name:"Deepak Chopra",handle:"@DeepakChopra",domain:"Mente-corpo / Ayurveda",active:!0,desc:"Endocrinologo e divulgatore ayurvedico. Controverso ma influente: ha portato la connessione mente-corpo nel mainstream occidentale."},{id:3,name:"Mark Hyman",handle:"@drmarkhyman",domain:"Medicina funzionale",active:!0,desc:"Fondatore dell'UltraWellness Center. Pioniere della medicina funzionale e dell'approccio 'cibo come medicina'."},{id:4,name:"Peter Attia",handle:"@PeterAttiaMD",domain:"Longevità / Evidence-based",active:!0,desc:"Medico specializzato in longevità. Approccio rigoroso, dati alla mano, ponte tra scienza dura e prevenzione."},{id:5,name:"Gabor Maté",handle:"@DrGaborMate",domain:"Trauma / Dipendenze",active:!0,desc:"Medico ungherese-canadese. Ha ridefinito il rapporto tra trauma infantile, dipendenze e malattie croniche."},{id:6,name:"Giovanni Maciocia",handle:"",domain:"Medicina cinese / Agopuntura",active:!0,desc:"Il più influente autore occidentale di medicina tradizionale cinese. I suoi testi sono riferimento mondiale per agopuntura e fitoterapia cinese."},{id:7,name:"Mantak Chia",handle:"@mantakchia",domain:"Taoismo / Qigong",active:!0,desc:"Maestro taoista thailandese-cinese. Ha sistematizzato le pratiche taoiste di coltivazione dell'energia interna per l'Occidente."},{id:8,name:"Vandana Shiva",handle:"@daborrvandanashiva",domain:"Ecologia / Semi / Sovranità alimentare",active:!0,desc:"Fisica e attivista indiana. Difende la biodiversità e l'agricoltura tradizionale contro i brevetti sulle sementi e l'agroindustria."},{id:9,name:"Edzard Ernst",handle:"@EdzardErnst",domain:"Critica della medicina alternativa",active:!0,desc:"Primo professore universitario di medicina complementare. Ex praticante omeopatico, oggi il critico scientifico più rigoroso delle terapie alternative."},{id:10,name:"Byung-Chul Han",handle:"",domain:"Filosofia / Società della stanchezza",active:!0,desc:"Filosofo coreano-tedesco. Analizza come la società delle prestazioni produce burnout, depressione e malattia. Critico della positività tossica."},{id:11,name:"Bessel van der Kolk",handle:"@BesselvdKolk",domain:"Trauma / Il corpo tiene il conto",active:!0,desc:"Psichiatra olandese-americano. Ha dimostrato come il trauma si inscrive nel corpo e si cura con approcci somatici, non solo parlati."},{id:12,name:"Claudia Welch",handle:"@drclaudiawelch",domain:"Ayurveda / Equilibrio ormonale",active:!0,desc:"Medico ayurvedico e agopuntrice. Specializzata nell'equilibrio ormonale femminile attraverso la lente delle medicine tradizionali."},{id:13,name:"Matthieu Ricard",handle:"@MatthieuRicard",domain:"Buddhismo / Neuroscienze contemplative",active:!0,desc:"Monaco buddhista e biologo molecolare. I suoi studi sulla meditazione con Richard Davidson hanno dimostrato la plasticità cerebrale dei contemplatori."},{id:14,name:"Stefano Mancuso",handle:"@StMancuso",domain:"Neurobiologia vegetale / Intelligenza delle piante",active:!0,desc:"Neurobiologo vegetale italiano. Ha rivoluzionato la comprensione delle piante come organismi intelligenti, con implicazioni per la fitoterapia e l'ecologia."}],sources:["PubMed Integrative","Examine.com","Green Medinfo"],branding:{nameHtml:"Signal<span>.</span>Natura",tagline:"Medicina Naturale Intelligence · AI-Powered",aboutDescription:"Signal.Natura è un intelligence dashboard sulla medicina naturale e integrativa. Ogni giorno raccoglie le idee di medici non convenzionali, maestri di medicine tradizionali, filosofi e ricercatori, produce sintesi trasversali e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',colors:{primary:"#16a34a",primaryHover:"#15803d",accent:"#a3e635",bg:"#f7fdf9",headerBg:"#ecfdf5",cardBg:"#ffffff",border:"#bbf7d0",text:"#14532d",textSecondary:"#4d7c5e",textMuted:"#86a896"},fonts:{googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"7231a446-f0fe-4521-b212-bf6d588f94ed",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1},prompts:{scan:`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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

Cerca le risorse, piattaforme, app, centri di ricerca, protocolli e strumenti più rilevanti ed emergenti legati ai temi trattati sopra.

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
`}};const Ar=Mm,Tm=Ar.thinkers,bm=Ar.sources,Se=Ar.branding,fl=Ar.prompts,or=Ar.council;function pl(e,t){return Object.entries(t).reduce((n,[r,o])=>n.replaceAll(`{${r}}`,String(o??"")),e)}const Im="/claude",Lm="https://stelle-972218119922.europe-west1.run.app/api",Id=Lm;async function ml(e){const t=await fetch(Im,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const o=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${o}…`)}const r=await t.json();if(!t.ok)throw new Error(r.error||"Claude CLI error");return r}function Dm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Rm(e){const t=pl(fl.scan,{thinker_name:e.name,thinker_handle:e.handle});return(await ml(t)).text||"Nessun contenuto estratto."}async function mu(e){const t=e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`),n=pl(fl.synthesis,{summaries:t});return(await ml(n)).text||"Nessun contenuto estratto."}async function Om(e,t,n){const r=e.map(f=>`### ${f.name}
${f.content}`).join(`

`),o=n&&n.length>0?n.join(", "):"GitHub Trending, trendshift.io, Hacker News",l=pl(fl.projects,{signals:r,synthesis:t,sources_list:o}),a=((await ml(l)).text||"").trim().match(/\[[\s\S]*\]/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}async function $m(e,t){const n=pl(fl.conceptDiff,{old_synthesis:e,new_synthesis:t}),l=((await ml(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!l)throw new Error("Formato risposta non valido");return JSON.parse(l[0])}let hu=!1;async function Fm(){if(hu)return;if(!(await fetch(`${Id}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");hu=!0}async function Am(e,t,n){await Fm();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,o=await fetch(`${Id}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:or.boardId,stop_mode:"cost",budget_usd:or.budgetUsd,user_language:or.userLanguage,max_words:or.maxWords,rounds:or.rounds,include_moderation:!0})});if(!o.ok){const a=await o.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const l=o.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:f}=await l.read();if(a)break;s+=i.decode(f,{stream:!0});const y=s.split(`
`);s=y.pop()||"";let v="";for(const g of y)if(g.startsWith("event: "))v=g.slice(7).trim();else if(g.startsWith("data: ")&&v){try{const S=JSON.parse(g.slice(6));n(v,S)}catch{}v=""}}}function jt(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function Bm(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return jt(e);let r="";for(let o=0;o<n.length;o++){const l=n[o].trim();if(l)if(t.test(l)){t.lastIndex=0;const i=l.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),s=o+1<n.length?n[o+1].trim():"";s?(r+=`<details open><summary>${gu(i)}</summary>${jt(s)}</details>`,o++):r+=`<strong>${gu(i)}</strong>`}else r+=jt(l)}return r}function gu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Um(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(l=>r.has(l)).length/Math.max(n.size,r.size)}function Hm(e,t){if(!e)return"";if(!t)return jt(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const o=r.trim();if(!o)return"";const l=o.toLowerCase(),i=n.some(a=>Um(l,a)>.7),s=jt(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function Vm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,o)=>o.name.length-r.name.length);for(const r of n){const o=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),l=new RegExp(`(?!<a[^>]*>)(${o})(?![^<]*<\\/a>)`,"g");e=e.replace(l,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const vu="​‌",yu="‌​";function Wm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),o=n.length,l=r.length,i=Array.from({length:o+1},()=>new Uint16Array(l+1));for(let v=1;v<=o;v++)for(let g=1;g<=l;g++)i[v][g]=n[v-1]===r[g-1]?i[v-1][g-1]+1:Math.max(i[v-1][g],i[v][g-1]);const s=[];let a=o,f=l;for(;a>0||f>0;)a>0&&f>0&&n[a-1]===r[f-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,f--):f>0&&(a===0||i[a][f-1]>=i[a-1][f])?(s.unshift({type:"added",text:r[f-1]}),f--):(s.unshift({type:"removed",text:n[a-1]}),a--);const y=[];for(const v of s)y.length>0&&y[y.length-1].type===v.type?y[y.length-1].text+=v.text:y.push({...v});return y}function xu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let o="";for(const s of e)s.type!==n&&(s.type===r?o+=vu+s.text+yu:o+=s.text);let l=jt(o);const i=t==="left"?"diff-word-removed":"diff-word-added";return l=l.replace(new RegExp(`${vu}(.*?)${yu}`,"gs"),`<span class="${i}">$1</span>`),l}function Qm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function Km(){const[e,t]=M.useState(!1),[n,r]=M.useState(-1),[o,l]=M.useState([]),i=M.useRef([]),s=M.useRef(null),a=M.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),f=M.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),y=M.useCallback((F,p=0)=>{speechSynthesis.cancel(),i.current=F.slice(p),l(F);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=F.indexOf(m);r(x);const E=`${m.title}. ${Qm(m.text)}`,w=new SpeechSynthesisUtterance(E);w.lang="it-IT",w.rate=1;const P=a();P&&(w.voice=P),w.onend=c,w.onerror=c,s.current=w,speechSynthesis.speak(w)};t(!0),c()},[a]),v=M.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),g=M.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),S=M.useCallback(()=>{speechSynthesis.cancel()},[]),N=M.useCallback((F,p,c,m)=>{const x=[];F&&x.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const E of c)p[E.id]&&!p[E.id].startsWith("Errore")&&x.push({title:E.name,text:p[E.id],type:"thinker"});if(m&&m.length>0){const E=m.map(w=>{var P;return`${w.name}: ${w.description}${(P=w.citedBy)!=null&&P.length?`. Citato da ${w.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:E,type:"projects"})}y(x)},[y]),_=M.useCallback((F,p)=>{y([{title:F,text:p,type:"single"}])},[y]);return M.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:o,playAll:N,playSingle:_,pause:v,resume:g,stop:f,skipForward:S}}const Gm=`
  @import url('${Se.fonts.googleFontsUrl}');
`,Ym=`
  :root {
    --sb-primary: ${Se.colors.primary};
    --sb-primary-hover: ${Se.colors.primaryHover};
    --sb-accent: ${Se.colors.accent};
    --sb-bg: ${Se.colors.bg};
    --sb-header-bg: ${Se.colors.headerBg};
    --sb-card-bg: ${Se.colors.cardBg};
    --sb-border: ${Se.colors.border};
    --sb-text: ${Se.colors.text};
    --sb-text-secondary: ${Se.colors.textSecondary};
    --sb-text-muted: ${Se.colors.textMuted};
  }
`,Xm=`
  ${Gm}
  ${Ym}

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
`;function qm(){const[e,t]=M.useState(Tm),[n,r]=M.useState({}),[o,l]=M.useState({}),[i,s]=M.useState({}),[a,f]=M.useState(null),[y,v]=M.useState("idle"),[g,S]=M.useState(!1),[N,_]=M.useState(""),[F,p]=M.useState(""),[c,m]=M.useState(null),[x,E]=M.useState(!1),[w,P]=M.useState([]),[I,J]=M.useState(null),[D,fe]=M.useState("signals"),[Me,qt]=M.useState({leftIdx:1,rightIdx:0}),[Kn,hl]=M.useState("emerging"),[se,hn]=M.useState([]),[z,R]=M.useState([]),[O,Z]=M.useState(null),[oe,Mt]=M.useState("idle"),[Ce,Jt]=M.useState(bm),[dt,Zt]=M.useState(""),[Ld,gl]=M.useState(!1),[Bs,Dd]=M.useState(!1),[gn,Rd]=M.useState(""),[Br,Us]=M.useState([]),[Ur,vl]=M.useState("idle"),[Hr,yl]=M.useState(null),[Hs,Vs]=M.useState(null),[Jm,Zm]=M.useState("idle"),[Ws,Od]=M.useState({scan:"",launchd:""}),[Vr,xl]=M.useState("idle"),[eh,Qs]=M.useState([]),[$d,Fd]=M.useState({}),[Ad,Bd]=M.useState(new Set),wl=M.useRef(null),ge=Km(),[Ud,Hd]=M.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),xe=e.filter(d=>d.active),Ks=xe.filter(d=>!d.fontiOnly),vn=Object.values(i).filter(d=>d==="done"||d==="stale").length,kl=xe.length;M.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const h=JSON.parse(d.value);if(h.results){r(h.results);const C=new Set((h.staleIds||[]).map(String)),b={};for(const U of Object.keys(h.results))h.results[U].startsWith("Errore")?b[U]="error":C.has(String(U))?b[U]="stale":b[U]="done";s(b),h.staleIds&&Qs(h.staleIds)}if(h.prevResults&&l(h.prevResults),h.lastScanTime&&m(h.lastScanTime),h.synthesis&&(f(h.synthesis),v("done")),h.synthesisHistory){const C=h.synthesisHistory.map((b,U,Q)=>{if(b.conceptDiff&&!b.conceptDiffs){const we=Q[U+1],{conceptDiff:Oe,...qe}=b;return we?{...qe,conceptDiffs:{[we.id]:Oe}}:qe}return b});P(C)}h.projects&&hn(h.projects),h.prevProjects&&R(h.prevProjects),h.projectsTime&&Z(h.projectsTime),h.projectSources&&Jt(h.projectSources)}}catch{}})()},[]);const Te=M.useCallback(async(d={})=>{try{const h=await window.storage.get("signal-state"),b={...h?JSON.parse(h.value):{},...d};await window.storage.set("signal-state",JSON.stringify(b))}catch{}},[]);M.useCallback(async(d={})=>{await Te({results:n,prevResults:o,lastScanTime:c,synthesis:a,synthesisHistory:w,projects:se,prevProjects:z,projectsTime:O,projectSources:Ce,...d})},[n,o,c,a,w,se,z,O,Ce,Te]);const Wr=M.useCallback((d,h)=>h.length>0&&h[0].text===d?h:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:xe.map(b=>b.name),conceptDiffs:{}},...h].slice(0,50),[xe]),Qr=M.useCallback(async d=>{var b;if(d.length<2)return d;const h=d[0],C=d[1];if((b=h.conceptDiffs)!=null&&b[C.id])return d;try{const U=await $m(C.text,h.text),Q=[...d];return Q[0]={...Q[0],conceptDiffs:{...Q[0].conceptDiffs||{},[C.id]:U}},P(Q),await Te({synthesisHistory:Q}),Q}catch(U){return console.error("[concept-diff auto]",U),d}},[Te]),Gs=M.useCallback(async(d,h)=>{try{await navigator.clipboard.writeText(d)}catch{const C=document.createElement("textarea");C.value=d,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C)}J(h),setTimeout(()=>J(null),2e3)},[]);M.useCallback(async d=>{const h=w.filter(C=>C.id!==d);P(h),await Te({synthesisHistory:h})},[w,Te]);const Sl=M.useCallback(async()=>{xl("loading");const d="/signal-brief/medicina/";try{const[h,C]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),b=h.ok?await h.text():"",U=C.ok?await C.text():"";Od({scan:b,launchd:U}),xl("done")}catch(h){console.error("[logs]",h),xl("error")}},[]);M.useEffect(()=>{D==="log"&&Sl()},[D,Sl]);const Ys=M.useCallback(d=>{if(!d)return;const h=d.trim().toLowerCase();if(!h)return;const C=e.find(b=>{const U=b.name.toLowerCase();return U===h||U.includes(h)||h.includes(U)});C&&(fe("signals"),E(!1),setTimeout(()=>{const b=document.getElementById(`thinker-${C.id}`);b&&(b.scrollIntoView({behavior:"smooth",block:"start"}),b.classList.add("thinker-card-highlight"),setTimeout(()=>b.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Vd=(d,h)=>{if(!d||!h)return 0;const C=new Set(d.toLowerCase().split(/\s+/)),b=new Set(h.toLowerCase().split(/\s+/));return[...C].filter(Q=>b.has(Q)).length/Math.max(C.size,b.size)},Xs=d=>!o[d]||!n[d]?!1:Vd(o[d],n[d])<.72;xe.filter(d=>i[d.id]==="done"&&Xs(d.id)).length;const qs=e.length>0&&e.every(d=>d.active),Wd=()=>{g||t(d=>d.map(h=>({...h,active:!qs})))},Nl=()=>{N.trim()&&(t(d=>[...d,{id:Date.now(),name:N.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),_(""),p(""))},Js=()=>{const d=dt.trim();if(!d||Ce.includes(d))return;const h=[...Ce,d];Jt(h),Zt(""),Te({projectSources:h})},Qd=d=>{const h=Ce.filter(C=>C!==d);Jt(h),Te({projectSources:h})},[Kd,Zs]=M.useState(null),Kr=M.useCallback(async(d,h)=>{Mt("loading"),Zs(null);try{const C=await Om(h,d,Ce);R(se),hn(C);const b=Date.now();Z(b),Mt("done"),await Te({projects:C,prevProjects:se,projectsTime:b})}catch(C){console.error("[Signal.Brief] fetchProjects error:",C),Mt("error"),Zs(C.message)}},[Ce,Te,se]),Gd=M.useCallback(async()=>{if(xe.length===0)return;fe("signals"),S(!0),f(null),v("idle"),l(B=>({...B,...n}));const d={...n},h={};for(const B of xe){const ae=d[B.id];ae&&!ae.startsWith("Errore")&&(h[B.id]=ae)}const C={};xe.forEach(B=>{C[B.id]="loading"}),s(C),r(h);const b={...h},U=[],Q={},we=2,Oe=B=>new Promise(ae=>setTimeout(ae,B));for(let B=0;B<xe.length;B+=we){const ae=xe.slice(B,B+we);await Promise.all(ae.map(async be=>{try{const H=await Rm(be);b[be.id]=H,r(le=>({...le,[be.id]:H})),s(le=>({...le,[be.id]:"done"}))}catch(H){const le=h[be.id]!=null;Q[be.id]=H.message,le?(U.push(String(be.id)),s(ue=>({...ue,[be.id]:"stale"}))):(b[be.id]=`Errore: ${H.message}`,r(ue=>({...ue,[be.id]:`Errore: ${H.message}`})),s(ue=>({...ue,[be.id]:"error"})))}})),B+we<xe.length&&await Oe(1200)}Qs(U),Fd(Q);const qe=Dm(b),Ve=qe?Date.now():c;qe&&(m(Ve),Hd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Te({results:b,prevResults:d,lastScanTime:Ve,synthesis:a,synthesisHistory:w,staleIds:U}),S(!1);const $e=Ks.filter(B=>b[B.id]&&!b[B.id].startsWith("Errore")).map(B=>({name:B.name,domain:B.domain,content:b[B.id]}));if($e.length>=2){v("loading");try{const B=await mu($e);f(B),v("done");const ae=Wr(B,w);P(ae),await Te({results:b,prevResults:d,lastScanTime:Ve,synthesis:B,synthesisHistory:ae}),Qr(ae),Kr(B,$e)}catch{v("error")}}},[xe,n,Te,a,w,Wr,c,Kr,Qr]),Yd=M.useCallback(async()=>{const d=Ks.filter(h=>i[h.id]==="done"||i[h.id]==="stale").map(h=>({name:h.name,domain:h.domain,content:n[h.id]}));if(!(d.length<2)){v("loading");try{const h=await mu(d);f(h),v("done");const C=Wr(h,w);P(C),await Te({synthesis:h,synthesisHistory:C}),Qr(C),Kr(h,d)}catch(h){f(`Errore nella sintesi: ${h.message}`),v("error")}}},[xe,i,n,Te,w,Wr,Kr,Qr]),ea=M.useCallback(async()=>{if(gn.trim()){Us([]),yl(null),Vs(null),vl("loading");try{await Am(gn,a,(d,h)=>{if(d==="session_started"&&h.session_id&&Vs(h.session_id),d==="sage_speaks"&&h.content&&Us(C=>[...C,{name:h.persona_name,icon:h.persona_icon,color:h.persona_color,content:h.content}]),d==="moderator_synthesis"&&h.content&&yl(h.content),d==="moderator"){const C=h.content||h.decision||h.synthesis||"";C&&yl(C)}}),vl("done")}catch(d){console.error("[council]",d),vl("error")}}},[gn,a]),Xd=vn>=2&&!g&&y!=="loading",ta=Object.keys(n).length>0,na="Disponibile solo in locale (richiede Claude CLI)",qd=xe.filter(d=>{if(!i[d.id])return!1;if(x){const h=i[d.id];return(h==="done"||h==="stale")&&Xs(d.id)}return!0});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Xm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>gl(!0),dangerouslySetInnerHTML:{__html:Se.nameHtml}}),u.jsx("div",{className:"tagline",children:Se.tagline})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",Ud]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Yd,disabled:!Xd||!0,title:na,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!wl.current){const h=new Audio(`/signal-brief/medicina/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);h.onerror=()=>{h.src="/signal-brief/medicina/podcast/episodes/2026-04-12.mp3",h.play()},wl.current=h}const d=wl.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/medicina/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Gd(),disabled:g||xe.length===0||!0,title:na,children:g?`Scanning ${vn}/${kl}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${D==="signals"?"active":""}`,onClick:()=>fe("signals"),children:["Segnali",vn>0&&u.jsx("span",{className:"tab-badge",children:vn})]}),u.jsxs("button",{className:`tab-btn ${D==="projects"?"active":""}`,onClick:()=>fe("projects"),children:["Progetti",se.length>0&&u.jsx("span",{className:"tab-badge",children:se.length})]}),u.jsxs("button",{className:`tab-btn ${D==="history"?"active":""}`,onClick:()=>fe("history"),children:["Cronologia",w.length>0&&u.jsx("span",{className:"tab-badge",children:w.length})]}),u.jsx("button",{className:`tab-btn ${D==="log"?"active":""}`,onClick:()=>fe("log"),children:"▤ Log"}),u.jsx("button",{className:`tab-btn ${D==="config"?"active":""}`,onClick:()=>fe("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[D==="signals"&&u.jsxs(u.Fragment,{children:[g&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${kl>0?vn/kl*100:0}%`}})}),(a||y==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:y==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),y==="done"&&w.length>0&&u.jsx("span",{className:"timestamp",children:new Date(w[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),y==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>ge.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Dd(d=>!d),title:"Chiedi ai thinkers",style:Bs?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Gs(a,"synth"),children:I==="synth"?"Copiato ✓":"Copia ❐"})]})]}),y==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:Vm(w.length>1?Hm(a,w[1].text):jt(a),xe)}}),Bs&&y==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Hs?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Hs}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"var(--sb-text-muted)"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:gn,onChange:d=>Rd(d.target.value),onKeyDown:d=>d.key==="Enter"&&ea(),disabled:Ur==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:ea,disabled:Ur==="loading"||!gn.trim(),children:Ur==="loading"?"In deliberazione…":"Chiedi"})]}),Br.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Br.map((d,h)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name]}),u.jsx("div",{children:d.content})]},h))}),Hr&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const d=Br.map(h=>`${h.name}: ${h.content}`).join(`

`)+`

Sintesi: `+Hr;ge.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${gn}

`+Br.map(h=>`${h.icon} ${h.name}:
${h.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Hr}`;Gs(d,"council")},children:I==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:jt(Hr)}})]}),Ur==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),ta&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",vn," acquisiti"]})}),!ta&&!g?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:qd.map(d=>{const h=i[d.id],C=$d[d.id],b=Ad.has(d.id),U=Q=>{Q.stopPropagation(),Bd(we=>{const Oe=new Set(we);return Oe.has(d.id)?Oe.delete(d.id):Oe.add(d.id),Oe})};return u.jsxs("div",{id:`thinker-${d.id}`,className:`card ${h}`,children:[u.jsxs("div",{className:`card-header card-toggle ${b?"collapsed":""}`,onClick:U,children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[u.jsx("span",{className:"toggle-icon",children:"▾"}),d.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:Q=>Q.stopPropagation(),children:d.handle})]}),u.jsx("div",{className:"card-domain",children:d.domain})]}),(h==="done"||h==="stale")&&u.jsx("button",{className:"btn-listen",onClick:Q=>{Q.stopPropagation(),ge.playSingle(d.name,n[d.id])},title:"Ascolta",children:"🔊"}),h==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),h==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),h==="stale"&&u.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${C?": "+C:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),h==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),d.fontiOnly&&u.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!b&&u.jsxs("div",{className:"card-body",children:[d.desc&&u.jsx("div",{className:"card-desc",children:d.desc}),h==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(h==="done"||h==="stale")&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:Bm(n[d.id])}}),h==="error"&&u.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),D==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",se.length>0&&` · ${se.length} trovati`]})}),oe==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),oe==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",Kd||"errore sconosciuto"]}),se.length===0&&oe!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),se.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),O&&u.jsx("span",{style:{fontWeight:400,color:"var(--sb-text-muted)"},children:new Date(O).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),se.some(d=>d.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),z.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"var(--sb-primary)"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),se.map((d,h)=>{const C=d.maturity!=null&&d.momentum!=null,b=Math.ceil(Math.sqrt(se.length)),U=Math.floor(h/b),Q=h%b,we=C?d.maturity:2+Q/Math.max(b-1,1)*7,Oe=C?d.momentum:8-U/Math.max(Math.ceil(se.length/b)-1,1)*7,qe=50+(we-1)/9*420,Ve=370-(Oe-1)/9*360,$e=z.length>0&&!z.some(ae=>ae.name===d.name),B=$e?"#dc2626":"var(--sb-primary)";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:qe,cy:Ve,r:$e?6:5,fill:B,opacity:"0.85",stroke:$e?"#fca5a5":"none",strokeWidth:$e?2:0,onClick:()=>window.open(d.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:qe+9,y:Ve+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:$e?"#dc2626":"#374151",fontWeight:$e?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},h)})]})]}),se.length>0&&u.jsx("div",{className:"projects-grid",children:se.map((d,h)=>u.jsxs("div",{className:"project-card",style:z.length>0&&!z.some(C=>C.name===d.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),z.length>0&&!z.some(C=>C.name===d.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&u.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&u.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:d.description}),u.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&u.jsx("div",{className:"project-themes",children:d.themes.map((C,b)=>u.jsx("span",{className:"project-theme",children:C},b))})]})]},h))})]}),D==="history"&&u.jsx(u.Fragment,{children:w.length<2?u.jsxs("div",{className:"history-empty",children:[w.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",w.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(w[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:jt(w[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const d=Date.now(),h=864e5,C=d-7*h,b=d-21*h,U=w.filter(H=>H.timestamp>=C),Q=w.filter(H=>H.timestamp>=b&&H.timestamp<C),we={};for(const H of Q){const le=new Date(H.timestamp),ue=new Date(le);ue.setDate(ue.getDate()-ue.getDay());const pe=ue.toISOString().slice(0,10);(!we[pe]||H.timestamp>we[pe].timestamp)&&(we[pe]=H)}const Oe=Object.values(we).sort((H,le)=>le.timestamp-H.timestamp),qe=w.filter(H=>H.timestamp<b),Ve={};for(const H of qe){const le=new Date(H.timestamp),ue=new Date(le);ue.setDate(ue.getDate()-ue.getDay());const pe=ue.toISOString().slice(0,10);(!Ve[pe]||H.timestamp>Ve[pe].timestamp)&&(Ve[pe]=H)}const $e=Object.values(Ve).sort((H,le)=>le.timestamp-H.timestamp),B=(H,le,ue)=>H.length===0?null:u.jsx("optgroup",{label:le,children:H.map(pe=>{const jl=w.indexOf(pe),Gr=new Date(pe.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),Cl=ue?`Sett. ${Gr.split(",")[0]} — ${pe.thinkers.slice(0,3).join(", ")}${pe.thinkers.length>3?` +${pe.thinkers.length-3}`:""}`:`${Gr} — ${pe.thinkers.slice(0,3).join(", ")}${pe.thinkers.length>3?` +${pe.thinkers.length-3}`:""}`;return u.jsx("option",{value:jl,children:Cl},pe.id)})},le),ae=w[0],be=ae?`${new Date(ae.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${ae.thinkers.slice(0,3).join(", ")}${ae.thinkers.length>3?` +${ae.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Me.leftIdx,onChange:H=>qt(le=>({...le,leftIdx:Number(H.target.value)})),children:[B(U,"Ultimi 7 giorni",!1),B(Oe,"Ultime 3 settimane",!0),B($e,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[be," ",u.jsx("span",{style:{color:"var(--sb-text-muted)",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ra;const d=w[Me.rightIdx],h=w[Me.leftIdx];if(!d||!h||Me.leftIdx===Me.rightIdx)return null;const C=d.timestamp>=h.timestamp?d:h,b=C===d?h:d;C===d?Me.rightIdx:Me.leftIdx;const U=((ra=C.conceptDiffs)==null?void 0:ra[b.id])||null,Q=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],we={DHH:["hansson","heinemeier","37signals"]},Oe=j=>{if(!j)return null;const L=j.trim().toLowerCase();if(!L)return null;for(const $ of e){const W=$.name.toLowerCase();if(W===L||W.includes(L)||L.includes(W))return $;const G=we[$.name]||[];for(const vt of G)if(L.includes(vt)||vt.includes(L))return $}return null},qe=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),Ve=j=>(j||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(L=>L.length>=4&&!qe.has(L)),$e=j=>j.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),B=j=>{const L=j.split(/\s+/);return L.length>40?L.slice(0,40).join(" ")+"...":j},ae=j=>{if(!j)return[];const L=j.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),W=(L!==-1?j.slice(0,L):j).split(/\n\n+/).map(yt=>$e(yt)).filter(yt=>yt.length>120),G=yt=>{const Yn=Ve(yt);if(!Yn.length||!W.length)return"";let Yr="",zl=0;for(const oa of W){const tf=oa.toLowerCase();let _l=0;for(const nf of Yn)tf.includes(nf)&&_l++;_l>zl&&(Yr=oa,zl=_l)}return zl>0?Yr:""},vt=[],Gn=new Set,ef=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let El;for(;(El=ef.exec(j))!==null;){const yt=El[2].replace(/[.,;)]+$/,"");if(Gn.has(yt))continue;Gn.add(yt);const Yn=El[1].trim(),Yr=B(G(Yn));vt.push({url:yt,title:Yn,snippet:Yr})}return vt},be=j=>{const L=Oe(j);return L?ae(n[L.id]||""):[]},H=(()=>{const j=new Set,L=[];for(const $ of e){j.has($.name)||(j.add($.name),L.push($.name));const W=$.name.split(/\s+/);if(W.length>1){const G=W[W.length-1];G.length>=4&&!j.has(G)&&(j.add(G),L.push(G))}}return L.sort(($,W)=>W.length-$.length)})(),le=H.length?new RegExp(`\\b(${H.map(j=>j.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,ue=j=>{if(!j||typeof j!="string"||!le)return j;const L=[];let $=0,W;for(le.lastIndex=0;(W=le.exec(j))!==null;){W.index>$&&L.push(j.slice($,W.index));const G=W[0];L.push(u.jsx("span",{className:"concept-who-link",onClick:vt=>{vt.stopPropagation(),Ys(G)},children:G},L.length)),$=W.index+G.length}return L.length===0?j:($<j.length&&L.push(j.slice($)),L)},pe=(j,L)=>{if(j==null)return null;if(typeof j=="string")return{title:j,detail:"",who:[],sides:[]};if(typeof j!="object")return null;if(L==="evolved"){const $=j.from??j.da??j.before??"",W=j.to??j.a??j.after??"",G=$&&W?`${$} → ${W}`:$||W||j.detail||"";return{title:j.concept||j.title||j.name||"",detail:G,who:j.who||[],sides:[]}}return L==="tensions"?{title:j.axis||j.concept||j.title||"",detail:j.detail||"",who:j.who||[],sides:j.sides||[]}:{title:j.concept||j.title||j.name||"",detail:j.detail||j.description||"",who:j.who||[],sides:[]}},jl=j=>j!=null&&j.length?j.slice(0,4).map((L,$)=>u.jsx("a",{className:"concept-cite",href:L.url,target:"_blank",rel:"noopener noreferrer",title:L.snippet||L.title||L.url,onClick:W=>W.stopPropagation(),children:$+1},$)):null,Gr=j=>j!=null&&j.length?u.jsx("div",{className:"concept-item-who",children:j.map((L,$)=>{const W=be(L);return u.jsxs("span",{className:"concept-who-item",children:[$>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${L}`,onClick:G=>{G.stopPropagation(),Ys(L)},children:L}),W.length>0&&u.jsx("sup",{className:"concept-cites",children:jl(W)})]},$)})}):null,Cl=(j,L)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",ue(j)]},L),Jd=(j,L)=>{const W=(j[L]||[]).map(G=>pe(G,L)).filter(Boolean);return W.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):W.map((G,vt)=>{var Gn;return u.jsxs("div",{className:`concept-item concept-${L==="tensions"?"tension":L}`,children:[G.title&&u.jsx("div",{className:"concept-item-title",children:ue(G.title)}),G.detail&&u.jsx("div",{className:"concept-item-detail",children:ue(G.detail)}),L==="tensions"&&((Gn=G.sides)==null?void 0:Gn.map(Cl)),Gr(G.who)]},vt)})},Zd=j=>{const L=Q.find($=>$.key===Kn)?Kn:"emerging";return Q.find($=>$.key===L),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:Q.map($=>{const W=(j[$.key]||[]).length,G=$.key===L;return u.jsxs("button",{className:`concept-tab ${G?"active":""}`,onClick:()=>hl($.key),style:G?{color:$.color,borderBottomColor:$.color}:void 0,children:[u.jsxs("span",{children:[$.icon," ",$.label]}),u.jsx("span",{className:"concept-tab-count",children:W})]},$.key)})}),u.jsx("div",{className:"concept-tab-body",children:Jd(j,L)})]})};return U?Zd(U):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"var(--sb-text-muted)",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=w[Me.leftIdx],h=w[Me.rightIdx];if(!d||!h)return null;const C=Wm(d.text,h.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:xu(C,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(h.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:h.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:xu(C,"right")}})]})]})})()]})}),D==="log"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Sl,disabled:Vr==="loading",children:Vr==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=C=>{if(!C)return"info";const b=C.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(b)?"error":/\b(warn|attenzione|warning)/i.test(b)?"warn":/^\s*[✓]\s/.test(C)||/\b(ok|done|complete|pushato|ready)\b/i.test(b)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(C)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(C)?"event":"info"},h=C=>{if(!C||!C.trim())return u.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const b=C.split(`
`);return u.jsx("div",{className:"log-box",children:b.map((U,Q)=>u.jsx("span",{className:`log-line log-${d(U)}`,children:U||" "},Q))})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Vr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ws.scan)]}),u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Vr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ws.launchd)]})]})})()]}),D==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",xe.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Wd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:qs?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(d=>u.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:d.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:d.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),children:d.handle})," · ",d.domain]})]}),u.jsx("div",{className:`thinker-status ${i[d.id]||""}`})]},d.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:N,disabled:!0,onChange:d=>_(d.target.value),onKeyDown:d=>d.key==="Enter"&&Nl(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:d=>p(d.target.value),onKeyDown:d=>d.key==="Enter"&&Nl(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Nl,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Ce.map(d=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:d}),u.jsx("button",{className:"source-delete",onClick:()=>Qd(d),disabled:!0,children:"×"})]},d))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:dt,disabled:!0,onChange:d=>Zt(d.target.value),onKeyDown:d=>d.key==="Enter"&&Js(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Js,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(ge.isPlaying||ge.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:ge.isPlaying?ge.pause:ge.resume,children:ge.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:ge.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:ge.currentChapter>=0&&ge.chapters[ge.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:ge.chapters[ge.currentChapter].title})," — ",ge.currentChapter+1,"/",ge.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:ge.stop,title:"Stop",children:"⏹"})]}),Ld&&u.jsx("div",{className:"about-backdrop",onClick:()=>gl(!1),children:u.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/medicina/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid var(--sb-border)"}}),u.jsx("div",{className:"about-logo",dangerouslySetInnerHTML:{__html:Se.nameHtml}}),u.jsx("div",{className:"about-tagline",children:Se.tagline}),u.jsx("div",{className:"about-desc",children:Se.aboutDescription}),u.jsx("div",{className:"about-footer",dangerouslySetInnerHTML:{__html:Se.aboutFooter}}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>gl(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/medicina/signal-state.json");if(r.ok){const o=await r.json();return o[e]!=null?{key:e,value:o[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};bd(document.getElementById("root")).render(u.jsx(M.StrictMode,{children:u.jsx(qm,{})}));
