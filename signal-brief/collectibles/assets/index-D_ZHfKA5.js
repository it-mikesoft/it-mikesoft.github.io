(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var wu={exports:{}},Gl={},ku={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),rf=Symbol.for("react.portal"),lf=Symbol.for("react.fragment"),of=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),uf=Symbol.for("react.context"),cf=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),ff=Symbol.for("react.memo"),pf=Symbol.for("react.lazy"),oa=Symbol.iterator;function mf(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var Su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nu=Object.assign,Cu={};function Vn(e,t,n){this.props=e,this.context=t,this.refs=Cu,this.updater=n||Su}Vn.prototype.isReactComponent={};Vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ju(){}ju.prototype=Vn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=Cu,this.updater=n||Su}var Yi=Ki.prototype=new ju;Yi.constructor=Ki;Nu(Yi,Vn.prototype);Yi.isPureReactComponent=!0;var ia=Array.isArray,Eu=Object.prototype.hasOwnProperty,Gi={current:null},zu={key:!0,ref:!0,__self:!0,__source:!0};function Pu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Eu.call(t,r)&&!zu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Dr,type:e,key:o,ref:i,props:l,_owner:Gi.current}}function hf(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function gf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sa=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gf(""+e.key):t.toString(36)}function pl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Dr:case rf:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+_o(i,0):r,ia(l)?(n="",e!=null&&(n=e.replace(sa,"$&/")+"/"),pl(l,t,n,"",function(f){return f})):l!=null&&(Xi(l)&&(l=hf(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(sa,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ia(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+_o(o,s);i+=pl(o,t,n,a,l)}else if(a=mf(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+_o(o,s++),i+=pl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xr(e,t,n){if(e==null)return e;var r=[],l=0;return pl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function yf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},ml={transition:null},vf={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Gi};function _u(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Vn;A.Fragment=lf;A.Profiler=sf;A.PureComponent=Ki;A.StrictMode=of;A.Suspense=df;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vf;A.act=_u;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Nu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Gi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Eu.call(t,a)&&!zu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Dr,type:e.type,key:l,ref:o,props:r,_owner:i}};A.createContext=function(e){return e={$$typeof:uf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:af,_context:e},e.Consumer=e};A.createElement=Pu;A.createFactory=function(e){var t=Pu.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:cf,render:e}};A.isValidElement=Xi;A.lazy=function(e){return{$$typeof:pf,_payload:{_status:-1,_result:e},_init:yf}};A.memo=function(e,t){return{$$typeof:ff,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=ml.transition;ml.transition={};try{e()}finally{ml.transition=t}};A.unstable_act=_u;A.useCallback=function(e,t){return Re.current.useCallback(e,t)};A.useContext=function(e){return Re.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};A.useEffect=function(e,t){return Re.current.useEffect(e,t)};A.useId=function(){return Re.current.useId()};A.useImperativeHandle=function(e,t,n){return Re.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return Re.current.useMemo(e,t)};A.useReducer=function(e,t,n){return Re.current.useReducer(e,t,n)};A.useRef=function(e){return Re.current.useRef(e)};A.useState=function(e){return Re.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return Re.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return Re.current.useTransition()};A.version="18.3.1";ku.exports=A;var T=ku.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=T,wf=Symbol.for("react.element"),kf=Symbol.for("react.fragment"),Sf=Object.prototype.hasOwnProperty,Nf=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cf={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Sf.call(t,r)&&!Cf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wf,type:e,key:o,ref:i,props:l,_owner:Nf.current}}Gl.Fragment=kf;Gl.jsx=Tu;Gl.jsxs=Tu;wu.exports=Gl;var u=wu.exports,Mu={exports:{}},Ye={},Iu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,O){var b=z.length;z.push(O);e:for(;0<b;){var q=b-1>>>1,le=z[q];if(0<l(le,O))z[q]=O,z[b]=le,b=q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var O=z[0],b=z.pop();if(b!==O){z[0]=b;e:for(var q=0,le=z.length,_t=le>>>1;q<_t;){var Ce=2*(q+1)-1,Jt=z[Ce],ct=Ce+1,Zt=z[ct];if(0>l(Jt,b))ct<le&&0>l(Zt,Jt)?(z[q]=Zt,z[ct]=b,q=ct):(z[q]=Jt,z[Ce]=b,q=Ce);else if(ct<le&&0>l(Zt,b))z[q]=Zt,z[ct]=b,q=ct;else break e}}return O}function l(z,O){var b=z.sortIndex-O.sortIndex;return b!==0?b:z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],v=1,y=null,g=3,S=!1,N=!1,P=!1,$=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var O=n(f);O!==null;){if(O.callback===null)r(f);else if(O.startTime<=z)r(f),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(f)}}function x(z){if(P=!1,m(z),!N)if(n(a)!==null)N=!0,se(E);else{var O=n(f);O!==null&&hn(x,O.startTime-z)}}function E(z,O){N=!1,P&&(P=!1,p(L),L=-1),S=!0;var b=g;try{for(m(O),y=n(a);y!==null&&(!(y.expirationTime>O)||z&&!fe());){var q=y.callback;if(typeof q=="function"){y.callback=null,g=y.priorityLevel;var le=q(y.expirationTime<=O);O=e.unstable_now(),typeof le=="function"?y.callback=le:y===n(a)&&r(a),m(O)}else r(a);y=n(a)}if(y!==null)var _t=!0;else{var Ce=n(f);Ce!==null&&hn(x,Ce.startTime-O),_t=!1}return _t}finally{y=null,g=b,S=!1}}var w=!1,_=null,L=-1,Z=5,D=-1;function fe(){return!(e.unstable_now()-D<Z)}function _e(){if(_!==null){var z=e.unstable_now();D=z;var O=!0;try{O=_(!0,z)}finally{O?Xt():(w=!1,_=null)}}else w=!1}var Xt;if(typeof c=="function")Xt=function(){c(_e)};else if(typeof MessageChannel<"u"){var Kn=new MessageChannel,ho=Kn.port2;Kn.port1.onmessage=_e,Xt=function(){ho.postMessage(null)}}else Xt=function(){$(_e,0)};function se(z){_=z,w||(w=!0,Xt())}function hn(z,O){L=$(function(){z(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||S||(N=!0,se(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var b=g;g=O;try{return z()}finally{g=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var b=g;g=z;try{return O()}finally{g=b}},e.unstable_scheduleCallback=function(z,O,b){var q=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?q+b:q):b=q,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=b+le,z={id:v++,callback:O,priorityLevel:z,startTime:b,expirationTime:le,sortIndex:-1},b>q?(z.sortIndex=b,t(f,z),n(a)===null&&z===n(f)&&(P?(p(L),L=-1):P=!0,hn(x,b-q))):(z.sortIndex=le,t(a,z),N||S||(N=!0,se(E))),z},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(z){var O=g;return function(){var b=g;g=O;try{return z.apply(this,arguments)}finally{g=b}}}})(Lu);Iu.exports=Lu;var jf=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=T,Ke=jf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ru=new Set,vr={};function pn(e,t){bn(e,t),bn(e+"Capture",t)}function bn(e,t){for(vr[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,zf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},ua={};function Pf(e){return ti.call(ua,e)?!0:ti.call(aa,e)?!1:zf.test(e)?ua[e]=!0:(aa[e]=!0,!1)}function _f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tf(e,t,n,r){if(t===null||typeof t>"u"||_f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ji=/[\-:]([a-z])/g;function Zi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ji,Zi);Ne[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ji,Zi);Ne[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ji,Zi);Ne[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function qi(e,t,n,r){var l=Ne.hasOwnProperty(t)?Ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tf(t,n,l,r)&&(n=null),r||l===null?Pf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),bu=Symbol.for("react.offscreen"),ca=Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,To;function or(e){if(To===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);To=t&&t[1]||""}return`
`+To+e}var Mo=!1;function Io(e,t){if(!e||Mo)return"";Mo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Mo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Mf(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=Io(e.type,!1),e;case 11:return e=Io(e.type.render,!1),e;case 1:return e=Io(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case xn:return"Portal";case ni:return"Profiler";case es:return"StrictMode";case ri:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ou:return(e.displayName||"Context")+".Consumer";case Du:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:oi(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return oi(e(t))}catch{}}return null}function If(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lf(e){var t=Fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Lf(e))}function $u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Au(e,t){t=t.checked,t!=null&&qi(e,"checked",t,!1)}function si(e,t){Au(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||jl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(ir(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Bu(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,Hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rf=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Wu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Df=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(Df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,In=null,Ln=null;function ha(e){if(e=Fr(e)){if(typeof mi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=eo(t),mi(e.stateNode,e.type,t))}}function Qu(e){In?Ln?Ln.push(e):Ln=[e]:In=e}function Ku(){if(In){var e=In,t=Ln;if(Ln=In=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Yu(e,t){return e(t)}function Gu(){}var Lo=!1;function Xu(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return Yu(e,t,n)}finally{Lo=!1,(In!==null||Ln!==null)&&(Gu(),Ku())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var hi=!1;if(Ct)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){hi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{hi=!1}function Of(e,t,n,r,l,o,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var cr=!1,El=null,zl=!1,gi=null,bf={onError:function(e){cr=!0,El=e}};function Ff(e,t,n,r,l,o,i,s,a){cr=!1,El=null,Of.apply(bf,arguments)}function $f(e,t,n,r,l,o,i,s,a){if(Ff.apply(this,arguments),cr){if(cr){var f=El;cr=!1,El=null}else throw Error(k(198));zl||(zl=!0,gi=f)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ga(e){if(mn(e)!==e)throw Error(k(188))}function Af(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ga(l),e;if(o===r)return ga(l),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Zu(e){return e=Af(e),e!==null?qu(e):null}function qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qu(e);if(t!==null)return t;e=e.sibling}return null}var ec=Ke.unstable_scheduleCallback,ya=Ke.unstable_cancelCallback,Bf=Ke.unstable_shouldYield,Uf=Ke.unstable_requestPaint,ce=Ke.unstable_now,Hf=Ke.unstable_getCurrentPriorityLevel,ls=Ke.unstable_ImmediatePriority,tc=Ke.unstable_UserBlockingPriority,Pl=Ke.unstable_NormalPriority,Vf=Ke.unstable_LowPriority,nc=Ke.unstable_IdlePriority,Xl=null,mt=null;function Wf(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Yf,Qf=Math.log,Kf=Math.LN2;function Yf(e){return e>>>=0,e===0?32:31-(Qf(e)/Kf|0)|0}var el=64,tl=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=sr(s):(o&=i,o!==0&&(r=sr(o)))}else i=n&~l,i!==0?r=sr(i):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),l=1<<n,r|=e[n],t&=~l;return r}function Gf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-st(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=Gf(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Ro(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function Jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-st(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var K=0;function lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oc,is,ic,sc,ac,vi=!1,nl=[],bt=null,Ft=null,$t=null,kr=new Map,Sr=new Map,Lt=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Fr(t),t!==null&&is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qf(e,t,n,r,l){switch(t){case"focusin":return bt=Zn(bt,e,t,n,r,l),!0;case"dragenter":return Ft=Zn(Ft,e,t,n,r,l),!0;case"mouseover":return $t=Zn($t,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return kr.set(o,Zn(kr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Zn(Sr.get(o)||null,e,t,n,r,l)),!0}return!1}function uc(e){var t=nn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ju(n),t!==null){e.blockedOn=t,ac(e.priority,function(){ic(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=Fr(n),t!==null&&is(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){hl(e)&&n.delete(t)}function ep(){vi=!1,bt!==null&&hl(bt)&&(bt=null),Ft!==null&&hl(Ft)&&(Ft=null),$t!==null&&hl($t)&&($t=null),kr.forEach(xa),Sr.forEach(xa)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,ep)))}function Nr(e){function t(l){return qn(l,e)}if(0<nl.length){qn(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&qn(bt,e),Ft!==null&&qn(Ft,e),$t!==null&&qn($t,e),kr.forEach(t),Sr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)uc(n),n.blockedOn===null&&Lt.shift()}var Rn=Pt.ReactCurrentBatchConfig,Tl=!0;function tp(e,t,n,r){var l=K,o=Rn.transition;Rn.transition=null;try{K=1,ss(e,t,n,r)}finally{K=l,Rn.transition=o}}function np(e,t,n,r){var l=K,o=Rn.transition;Rn.transition=null;try{K=4,ss(e,t,n,r)}finally{K=l,Rn.transition=o}}function ss(e,t,n,r){if(Tl){var l=xi(e,t,n,r);if(l===null)Vo(e,t,r,Ml,n),va(e,r);else if(qf(l,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<Zf.indexOf(e)){for(;l!==null;){var o=Fr(l);if(o!==null&&oc(o),o=xi(e,t,n,r),o===null&&Vo(e,t,r,Ml,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Ml=null;function xi(e,t,n,r){if(Ml=null,e=rs(r),e=nn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ju(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ml=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hf()){case ls:return 1;case tc:return 4;case Pl:case Vf:return 16;case nc:return 536870912;default:return 16}default:return 16}}var Dt=null,as=null,gl=null;function dc(){if(gl)return gl;var e,t=as,n=t.length,r,l="value"in Dt?Dt.value:Dt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return gl=l.slice(e,1<r?1-r:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function wa(){return!1}function Ge(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rl:wa,this.isPropagationStopped=wa,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Ge(Wn),br=re({},Wn,{view:0,detail:0}),rp=Ge(br),Do,Oo,er,Jl=re({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Do=e.screenX-er.screenX,Oo=e.screenY-er.screenY):Oo=Do=0,er=e),Do)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),ka=Ge(Jl),lp=re({},Jl,{dataTransfer:0}),op=Ge(lp),ip=re({},br,{relatedTarget:0}),bo=Ge(ip),sp=re({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),ap=Ge(sp),up=re({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cp=Ge(up),dp=re({},Wn,{data:0}),Sa=Ge(dp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mp[e])?!!t[e]:!1}function cs(){return hp}var gp=re({},br,{key:function(e){if(e.key){var t=fp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yp=Ge(gp),vp=re({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Ge(vp),xp=re({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),wp=Ge(xp),kp=re({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sp=Ge(kp),Np=re({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=Ge(Np),jp=[9,13,27,32],ds=Ct&&"CompositionEvent"in window,dr=null;Ct&&"documentMode"in document&&(dr=document.documentMode);var Ep=Ct&&"TextEvent"in window&&!dr,fc=Ct&&(!ds||dr&&8<dr&&11>=dr),Ca=" ",ja=!1;function pc(e,t){switch(e){case"keyup":return jp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function zp(e,t){switch(e){case"compositionend":return mc(t);case"keypress":return t.which!==32?null:(ja=!0,Ca);case"textInput":return e=t.data,e===Ca&&ja?null:e;default:return null}}function Pp(e,t){if(kn)return e==="compositionend"||!ds&&pc(e,t)?(e=dc(),gl=as=Dt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_p[e.type]:t==="textarea"}function hc(e,t,n,r){Qu(r),t=Il(t,"onChange"),0<t.length&&(n=new us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Cr=null;function Tp(e){Ec(e,0)}function Zl(e){var t=Cn(e);if($u(t))return e}function Mp(e,t){if(e==="change")return t}var gc=!1;if(Ct){var Fo;if(Ct){var $o="oninput"in document;if(!$o){var za=document.createElement("div");za.setAttribute("oninput","return;"),$o=typeof za.oninput=="function"}Fo=$o}else Fo=!1;gc=Fo&&(!document.documentMode||9<document.documentMode)}function Pa(){fr&&(fr.detachEvent("onpropertychange",yc),Cr=fr=null)}function yc(e){if(e.propertyName==="value"&&Zl(Cr)){var t=[];hc(t,Cr,e,rs(e)),Xu(Tp,t)}}function Ip(e,t,n){e==="focusin"?(Pa(),fr=t,Cr=n,fr.attachEvent("onpropertychange",yc)):e==="focusout"&&Pa()}function Lp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(Cr)}function Rp(e,t){if(e==="click")return Zl(t)}function Dp(e,t){if(e==="input"||e==="change")return Zl(t)}function Op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:Op;function jr(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ti.call(t,l)||!ut(e[l],t[l]))return!1}return!0}function _a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ta(e,t){var n=_a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_a(n)}}function vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xc(){for(var e=window,t=jl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jl(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bp(e){var t=xc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vc(n.ownerDocument.documentElement,n)){if(r!==null&&fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ta(n,o);var i=Ta(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fp=Ct&&"documentMode"in document&&11>=document.documentMode,Sn=null,wi=null,pr=null,ki=!1;function Ma(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||Sn==null||Sn!==jl(r)||(r=Sn,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&jr(pr,r)||(pr=r,r=Il(wi,"onSelect"),0<r.length&&(t=new us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Ao={},wc={};Ct&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function ql(e){if(Ao[e])return Ao[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return Ao[e]=t[n];return e}var kc=ql("animationend"),Sc=ql("animationiteration"),Nc=ql("animationstart"),Cc=ql("transitionend"),jc=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){jc.set(e,t),pn(t,[e])}for(var Bo=0;Bo<Ia.length;Bo++){var Uo=Ia[Bo],$p=Uo.toLowerCase(),Ap=Uo[0].toUpperCase()+Uo.slice(1);Kt($p,"on"+Ap)}Kt(kc,"onAnimationEnd");Kt(Sc,"onAnimationIteration");Kt(Nc,"onAnimationStart");Kt("dblclick","onDoubleClick");Kt("focusin","onFocus");Kt("focusout","onBlur");Kt(Cc,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function La(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$f(r,t,void 0,e),e.currentTarget=null}function Ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;La(l,s,f),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;La(l,s,f),o=a}}}if(zl)throw e=gi,zl=!1,gi=null,e}function X(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(zc(t,e,2,!1),n.add(r))}function Ho(e,t,n){var r=0;t&&(r|=4),zc(n,e,r,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ol]){e[ol]=!0,Ru.forEach(function(n){n!=="selectionchange"&&(Bp.has(n)||Ho(n,!1,e),Ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,Ho("selectionchange",!1,t))}}function zc(e,t,n,r){switch(cc(t)){case 1:var l=tp;break;case 4:l=np;break;default:l=ss}n=l.bind(null,t,n,e),l=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=nn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Xu(function(){var f=o,v=rs(n),y=[];e:{var g=jc.get(e);if(g!==void 0){var S=us,N=e;switch(e){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":S=yp;break;case"focusin":N="focus",S=bo;break;case"focusout":N="blur",S=bo;break;case"beforeblur":case"afterblur":S=bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=wp;break;case kc:case Sc:case Nc:S=ap;break;case Cc:S=Sp;break;case"scroll":S=rp;break;case"wheel":S=Cp;break;case"copy":case"cut":case"paste":S=cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Na}var P=(t&4)!==0,$=!P&&e==="scroll",p=P?g!==null?g+"Capture":null:g;P=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=wr(c,p),x!=null&&P.push(zr(c,x,m)))),$)break;c=c.return}0<P.length&&(g=new S(g,N,null,n,v),y.push({event:g,listeners:P}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==pi&&(N=n.relatedTarget||n.fromElement)&&(nn(N)||N[jt]))break e;if((S||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,S?(N=n.relatedTarget||n.toElement,S=f,N=N?nn(N):null,N!==null&&($=mn(N),N!==$||N.tag!==5&&N.tag!==6)&&(N=null)):(S=null,N=f),S!==N)){if(P=ka,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=Na,x="onPointerLeave",p="onPointerEnter",c="pointer"),$=S==null?g:Cn(S),m=N==null?g:Cn(N),g=new P(x,c+"leave",S,n,v),g.target=$,g.relatedTarget=m,x=null,nn(v)===f&&(P=new P(p,c+"enter",N,n,v),P.target=m,P.relatedTarget=$,x=P),$=x,S&&N)t:{for(P=S,p=N,c=0,m=P;m;m=vn(m))c++;for(m=0,x=p;x;x=vn(x))m++;for(;0<c-m;)P=vn(P),c--;for(;0<m-c;)p=vn(p),m--;for(;c--;){if(P===p||p!==null&&P===p.alternate)break t;P=vn(P),p=vn(p)}P=null}else P=null;S!==null&&Ra(y,g,S,P,!1),N!==null&&$!==null&&Ra(y,$,N,P,!0)}}e:{if(g=f?Cn(f):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var E=Mp;else if(Ea(g))if(gc)E=Dp;else{E=Lp;var w=Ip}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Rp);if(E&&(E=E(e,f))){hc(y,E,n,v);break e}w&&w(e,g,f),e==="focusout"&&(w=g._wrapperState)&&w.controlled&&g.type==="number"&&ai(g,"number",g.value)}switch(w=f?Cn(f):window,e){case"focusin":(Ea(w)||w.contentEditable==="true")&&(Sn=w,wi=f,pr=null);break;case"focusout":pr=wi=Sn=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,Ma(y,n,v);break;case"selectionchange":if(Fp)break;case"keydown":case"keyup":Ma(y,n,v)}var _;if(ds)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else kn?pc(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(fc&&n.locale!=="ko"&&(kn||L!=="onCompositionStart"?L==="onCompositionEnd"&&kn&&(_=dc()):(Dt=v,as="value"in Dt?Dt.value:Dt.textContent,kn=!0)),w=Il(f,L),0<w.length&&(L=new Sa(L,e,null,n,v),y.push({event:L,listeners:w}),_?L.data=_:(_=mc(n),_!==null&&(L.data=_)))),(_=Ep?zp(e,n):Pp(e,n))&&(f=Il(f,"onBeforeInput"),0<f.length&&(v=new Sa("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=_))}Ec(y,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Il(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=wr(e,n),o!=null&&r.unshift(zr(e,o,l)),o=wr(e,t),o!=null&&r.push(zr(e,o,l))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,l?(a=wr(n,o),a!=null&&i.unshift(zr(n,a,s))):l||(a=wr(n,o),a!=null&&i.push(zr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Up=/\r\n?/g,Hp=/\u0000|\uFFFD/g;function Da(e){return(typeof e=="string"?e:""+e).replace(Up,`
`).replace(Hp,"")}function il(e,t,n){if(t=Da(t),Da(e)!==t&&n)throw Error(k(425))}function Ll(){}var Si=null,Ni=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Oa=typeof Promise=="function"?Promise:void 0,Wp=typeof queueMicrotask=="function"?queueMicrotask:typeof Oa<"u"?function(e){return Oa.resolve(null).then(e).catch(Qp)}:ji;function Qp(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Nr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Qn,Pr="__reactProps$"+Qn,jt="__reactContainer$"+Qn,Ei="__reactEvents$"+Qn,Kp="__reactListeners$"+Qn,Yp="__reactHandles$"+Qn;function nn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ba(e);e!==null;){if(n=e[pt])return n;e=ba(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[pt]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function eo(e){return e[Pr]||null}var zi=[],jn=-1;function Yt(e){return{current:e}}function J(e){0>jn||(e.current=zi[jn],zi[jn]=null,jn--)}function G(e,t){jn++,zi[jn]=e.current,e.current=t}var Qt={},Pe=Yt(Qt),Ae=Yt(!1),an=Qt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Be(e){return e=e.childContextTypes,e!=null}function Rl(){J(Ae),J(Pe)}function Fa(e,t,n){if(Pe.current!==Qt)throw Error(k(168));G(Pe,t),G(Ae,n)}function Pc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,If(e)||"Unknown",l));return re({},n,r)}function Dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,an=Pe.current,G(Pe,e),G(Ae,Ae.current),!0}function $a(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Pc(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,J(Ae),J(Pe),G(Pe,e)):J(Ae),G(Ae,n)}var xt=null,to=!1,Qo=!1;function _c(e){xt===null?xt=[e]:xt.push(e)}function Gp(e){to=!0,_c(e)}function Gt(){if(!Qo&&xt!==null){Qo=!0;var e=0,t=K;try{var n=xt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,to=!1}catch(l){throw xt!==null&&(xt=xt.slice(e+1)),ec(ls,Gt),l}finally{K=t,Qo=!1}}return null}var En=[],zn=0,Ol=null,bl=0,Je=[],Ze=0,un=null,wt=1,kt="";function qt(e,t){En[zn++]=bl,En[zn++]=Ol,Ol=e,bl=t}function Tc(e,t,n){Je[Ze++]=wt,Je[Ze++]=kt,Je[Ze++]=un,un=e;var r=wt;e=kt;var l=32-st(r)-1;r&=~(1<<l),n+=1;var o=32-st(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,wt=1<<32-st(t)+l|n<<l|r,kt=o+e}else wt=1<<o|n<<l|r,kt=e}function ps(e){e.return!==null&&(qt(e,1),Tc(e,1,0))}function ms(e){for(;e===Ol;)Ol=En[--zn],En[zn]=null,bl=En[--zn],En[zn]=null;for(;e===un;)un=Je[--Ze],Je[Ze]=null,kt=Je[--Ze],Je[Ze]=null,wt=Je[--Ze],Je[Ze]=null}var Qe=null,We=null,ee=!1,it=null;function Mc(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,We=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:wt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,We=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(ee){var t=We;if(t){var n=t;if(!Aa(e,t)){if(Pi(e))throw Error(k(418));t=At(n.nextSibling);var r=Qe;t&&Aa(e,t)?Mc(r,n):(e.flags=e.flags&-4097|2,ee=!1,Qe=e)}}else{if(Pi(e))throw Error(k(418));e.flags=e.flags&-4097|2,ee=!1,Qe=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function sl(e){if(e!==Qe)return!1;if(!ee)return Ba(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=We)){if(Pi(e))throw Ic(),Error(k(418));for(;t;)Mc(e,t),t=At(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Qe?At(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=We;e;)e=At(e.nextSibling)}function $n(){We=Qe=null,ee=!1}function hs(e){it===null?it=[e]:it.push(e)}var Xp=Pt.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function al(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Lc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Vt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=qo(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var E=m.type;return E===wn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&Ua(E)===c.type)?(x=l(c,m.props),x.ref=tr(p,c,m),x.return=p,x):(x=Cl(m.type,m.key,m.props,null,p.mode,x),x.ref=tr(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ei(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,E){return c===null||c.tag!==7?(c=sn(m,p.mode,x,E),c.return=p,c):(c=l(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=qo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return m=Cl(c.type,c.key,c.props,null,p.mode,m),m.ref=tr(p,null,c),m.return=p,m;case xn:return c=ei(c,p.mode,m),c.return=p,c;case Mt:var x=c._init;return y(p,x(c._payload),m)}if(ir(c)||Xn(c))return c=sn(c,p.mode,m,null),c.return=p,c;al(p,c)}return null}function g(p,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:return m.key===E?a(p,c,m,x):null;case xn:return m.key===E?f(p,c,m,x):null;case Mt:return E=m._init,g(p,c,E(m._payload),x)}if(ir(m)||Xn(m))return E!==null?null:v(p,c,m,x,null);al(p,m)}return null}function S(p,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,E);case xn:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,E);case Mt:var w=x._init;return S(p,c,m,w(x._payload),E)}if(ir(x)||Xn(x))return p=p.get(m)||null,v(c,p,x,E,null);al(c,x)}return null}function N(p,c,m,x){for(var E=null,w=null,_=c,L=c=0,Z=null;_!==null&&L<m.length;L++){_.index>L?(Z=_,_=null):Z=_.sibling;var D=g(p,_,m[L],x);if(D===null){_===null&&(_=Z);break}e&&_&&D.alternate===null&&t(p,_),c=o(D,c,L),w===null?E=D:w.sibling=D,w=D,_=Z}if(L===m.length)return n(p,_),ee&&qt(p,L),E;if(_===null){for(;L<m.length;L++)_=y(p,m[L],x),_!==null&&(c=o(_,c,L),w===null?E=_:w.sibling=_,w=_);return ee&&qt(p,L),E}for(_=r(p,_);L<m.length;L++)Z=S(_,p,L,m[L],x),Z!==null&&(e&&Z.alternate!==null&&_.delete(Z.key===null?L:Z.key),c=o(Z,c,L),w===null?E=Z:w.sibling=Z,w=Z);return e&&_.forEach(function(fe){return t(p,fe)}),ee&&qt(p,L),E}function P(p,c,m,x){var E=Xn(m);if(typeof E!="function")throw Error(k(150));if(m=E.call(m),m==null)throw Error(k(151));for(var w=E=null,_=c,L=c=0,Z=null,D=m.next();_!==null&&!D.done;L++,D=m.next()){_.index>L?(Z=_,_=null):Z=_.sibling;var fe=g(p,_,D.value,x);if(fe===null){_===null&&(_=Z);break}e&&_&&fe.alternate===null&&t(p,_),c=o(fe,c,L),w===null?E=fe:w.sibling=fe,w=fe,_=Z}if(D.done)return n(p,_),ee&&qt(p,L),E;if(_===null){for(;!D.done;L++,D=m.next())D=y(p,D.value,x),D!==null&&(c=o(D,c,L),w===null?E=D:w.sibling=D,w=D);return ee&&qt(p,L),E}for(_=r(p,_);!D.done;L++,D=m.next())D=S(_,p,L,D.value,x),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?L:D.key),c=o(D,c,L),w===null?E=D:w.sibling=D,w=D);return e&&_.forEach(function(_e){return t(p,_e)}),ee&&qt(p,L),E}function $(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:e:{for(var E=m.key,w=c;w!==null;){if(w.key===E){if(E=m.type,E===wn){if(w.tag===7){n(p,w.sibling),c=l(w,m.props.children),c.return=p,p=c;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&Ua(E)===w.type){n(p,w.sibling),c=l(w,m.props),c.ref=tr(p,w,m),c.return=p,p=c;break e}n(p,w);break}else t(p,w);w=w.sibling}m.type===wn?(c=sn(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=Cl(m.type,m.key,m.props,null,p.mode,x),x.ref=tr(p,c,m),x.return=p,p=x)}return i(p);case xn:e:{for(w=m.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ei(m,p.mode,x),c.return=p,p=c}return i(p);case Mt:return w=m._init,$(p,c,w(m._payload),x)}if(ir(m))return N(p,c,m,x);if(Xn(m))return P(p,c,m,x);al(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=qo(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return $}var An=Lc(!0),Rc=Lc(!1),Fl=Yt(null),$l=null,Pn=null,gs=null;function ys(){gs=Pn=$l=null}function vs(e){var t=Fl.current;J(Fl),e._currentValue=t}function Ti(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){$l=e,gs=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if($l===null)throw Error(k(308));Pn=e,$l.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var rn=null;function xs(e){rn===null?rn=[e]:rn.push(e)}function Dc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,xs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Et(e,n)}return l=r.interleaved,l===null?(t.next=t,xs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Et(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Al(e,t,n,r){var l=e.updateQueue;It=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?o=f:i.next=f,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=a))}if(o!==null){var y=l.baseState;i=0,v=f=a=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,P=s;switch(g=t,S=n,P.tag){case 1:if(N=P.payload,typeof N=="function"){y=N.call(S,y,g);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=P.payload,g=typeof N=="function"?N.call(S,y,g):N,g==null)break e;y=re({},y,g);break e;case 2:It=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=S,a=y):v=v.next=S,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);dn|=i,e.lanes=i,e.memoizedState=y}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var $r={},ht=Yt($r),_r=Yt($r),Tr=Yt($r);function ln(e){if(e===$r)throw Error(k(174));return e}function ks(e,t){switch(G(Tr,t),G(_r,e),G(ht,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}J(ht),G(ht,t)}function Bn(){J(ht),J(_r),J(Tr)}function bc(e){ln(Tr.current);var t=ln(ht.current),n=ci(t,e.type);t!==n&&(G(_r,e),G(ht,n))}function Ss(e){_r.current===e&&(J(ht),J(_r))}var te=Yt(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function Ns(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var xl=Pt.ReactCurrentDispatcher,Yo=Pt.ReactCurrentBatchConfig,cn=0,ne=null,me=null,ye=null,Ul=!1,mr=!1,Mr=0,Jp=0;function je(){throw Error(k(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function js(e,t,n,r,l,o){if(cn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xl.current=e===null||e.memoizedState===null?tm:nm,e=n(r,l),mr){o=0;do{if(mr=!1,Mr=0,25<=o)throw Error(k(301));o+=1,ye=me=null,t.updateQueue=null,xl.current=rm,e=n(r,l)}while(mr)}if(xl.current=Hl,t=me!==null&&me.next!==null,cn=0,ye=me=ne=null,Ul=!1,t)throw Error(k(300));return e}function Es(){var e=Mr!==0;return Mr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ne.memoizedState=ye=e:ye=ye.next=e,ye}function nt(){if(me===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?ne.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(k(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?ne.memoizedState=ye=e:ye=ye.next=e}return ye}function Ir(e,t){return typeof t=="function"?t(e):t}function Go(e){var t=nt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=me,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,f=o;do{var v=f.lane;if((cn&v)===v)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=y,i=r):a=a.next=y,ne.lanes|=v,dn|=v}f=f.next}while(f!==null&&f!==o);a===null?i=r:a.next=s,ut(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ne.lanes|=o,dn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=nt(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ut(o,t.memoizedState)||($e=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fc(){}function $c(e,t){var n=ne,r=nt(),l=t(),o=!ut(r.memoizedState,l);if(o&&(r.memoizedState=l,$e=!0),r=r.queue,zs(Uc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Bc.bind(null,n,r,l,t),void 0,null),ve===null)throw Error(k(349));cn&30||Ac(n,t,l)}return l}function Ac(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bc(e,t,n,r){t.value=n,t.getSnapshot=r,Hc(t)&&Vc(e)}function Uc(e,t,n){return n(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Vc(e){var t=Et(e,1);t!==null&&at(t,e,1,-1)}function Wa(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=em.bind(null,ne,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wc(){return nt().memoizedState}function wl(e,t,n,r){var l=ft();ne.flags|=e,l.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function no(e,t,n,r){var l=nt();r=r===void 0?null:r;var o=void 0;if(me!==null){var i=me.memoizedState;if(o=i.destroy,r!==null&&Cs(r,i.deps)){l.memoizedState=Lr(t,n,o,r);return}}ne.flags|=e,l.memoizedState=Lr(1|t,n,o,r)}function Qa(e,t){return wl(8390656,8,e,t)}function zs(e,t){return no(2048,8,e,t)}function Qc(e,t){return no(4,2,e,t)}function Kc(e,t){return no(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gc(e,t,n){return n=n!=null?n.concat([e]):null,no(4,4,Yc.bind(null,t,e),n)}function Ps(){}function Xc(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jc(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zc(e,t,n){return cn&21?(ut(n,t)||(n=rc(),ne.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Zp(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Yo.transition;Yo.transition={};try{e(!1),t()}finally{K=n,Yo.transition=r}}function qc(){return nt().memoizedState}function qp(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ed(e))td(t,n);else if(n=Dc(e,t,n,r),n!==null){var l=Le();at(n,e,r,l),nd(n,t,r)}}function em(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ed(e))td(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ut(s,i)){var a=t.interleaved;a===null?(l.next=l,xs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Dc(e,t,l,r),n!==null&&(l=Le(),at(n,e,r,l),nd(n,t,r))}}function ed(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function td(e,t){mr=Ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var Hl={readContext:tt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},tm={readContext:tt,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wl(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){return wl(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qp.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Wa,useDebugValue:Ps,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Wa(!1),t=e[0];return e=Zp.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,l=ft();if(ee){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ve===null)throw Error(k(349));cn&30||Ac(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Qa(Uc.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,Bc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=ve.identifierPrefix;if(ee){var n=kt,r=wt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nm={readContext:tt,useCallback:Xc,useContext:tt,useEffect:zs,useImperativeHandle:Gc,useInsertionEffect:Qc,useLayoutEffect:Kc,useMemo:Jc,useReducer:Go,useRef:Wc,useState:function(){return Go(Ir)},useDebugValue:Ps,useDeferredValue:function(e){var t=nt();return Zc(t,me.memoizedState,e)},useTransition:function(){var e=Go(Ir)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:$c,useId:qc,unstable_isNewReconciler:!1},rm={readContext:tt,useCallback:Xc,useContext:tt,useEffect:zs,useImperativeHandle:Gc,useInsertionEffect:Qc,useLayoutEffect:Kc,useMemo:Jc,useReducer:Xo,useRef:Wc,useState:function(){return Xo(Ir)},useDebugValue:Ps,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Zc(t,me.memoizedState,e)},useTransition:function(){var e=Xo(Ir)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:$c,useId:qc,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),l=Ht(e),o=St(r,l);o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(at(t,e,l,r),vl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),l=Ht(e),o=St(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Bt(e,o,l),t!==null&&(at(t,e,l,r),vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Ht(e),l=St(n,r);l.tag=2,t!=null&&(l.callback=t),t=Bt(e,l,r),t!==null&&(at(t,e,r,n),vl(t,e,r))}};function Ka(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(l,o):!0}function rd(e,t,n){var r=!1,l=Qt,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(l=Be(t)?an:Pe.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,l):Qt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ya(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Ii(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ws(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=tt(o):(o=Be(t)?an:Pe.current,l.context=Fn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ro.enqueueReplaceState(l,l.state,null),Al(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=Mf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lm=typeof WeakMap=="function"?WeakMap:Map;function ld(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hi=r),Li(e,t)},n}function od(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ga(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=vm.bind(null,e,t,n),t.then(e,e))}function Xa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var om=Pt.ReactCurrentOwner,$e=!1;function Ie(e,t,n,r){t.child=e===null?Rc(t,null,n,r):An(t,e.child,n,r)}function Za(e,t,n,r,l){n=n.render;var o=t.ref;return Dn(t,l),r=js(e,t,n,r,o,l),n=Es(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ee&&n&&ps(t),t.flags|=1,Ie(e,t,r,l),t.child)}function qa(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Os(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,id(e,t,o,r,l)):(e=Cl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(i,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=Vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function id(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,zt(e,t,l)}return Ri(e,t,n,r,l)}function sd(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Tn,Ve),Ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Tn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(Tn,Ve),Ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(Tn,Ve),Ve|=r;return Ie(e,t,l,n),t.child}function ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ri(e,t,n,r,l){var o=Be(n)?an:Pe.current;return o=Fn(t,o),Dn(t,l),n=js(e,t,n,r,o,l),r=Es(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ee&&r&&ps(t),t.flags|=1,Ie(e,t,n,l),t.child)}function eu(e,t,n,r,l){if(Be(n)){var o=!0;Dl(t)}else o=!1;if(Dn(t,l),t.stateNode===null)kl(e,t),rd(t,n,r),Ii(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=tt(f):(f=Be(n)?an:Pe.current,f=Fn(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Ya(t,i,r,f),It=!1;var g=t.memoizedState;i.state=g,Al(t,r,i,l),a=t.memoizedState,s!==r||g!==a||Ae.current||It?(typeof v=="function"&&(Mi(t,n,v,r),a=t.memoizedState),(s=It||Ka(t,n,s,r,g,a,f))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Oc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:lt(t.type,s),i.props=f,y=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Be(n)?an:Pe.current,a=Fn(t,a));var S=n.getDerivedStateFromProps;(v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||g!==a)&&Ya(t,i,r,a),It=!1,g=t.memoizedState,i.state=g,Al(t,r,i,l);var N=t.memoizedState;s!==y||g!==N||Ae.current||It?(typeof S=="function"&&(Mi(t,n,S,r),N=t.memoizedState),(f=It||Ka(t,n,f,r,g,N,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,o,l)}function Di(e,t,n,r,l,o){ad(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&$a(t,n,!1),zt(e,t,o);r=t.stateNode,om.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=An(t,e.child,null,o),t.child=An(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,l&&$a(t,n,!0),t.child}function ud(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),ks(e,t.containerInfo)}function tu(e,t,n,r,l){return $n(),hs(l),t.flags|=256,Ie(e,t,n,r),t.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function cd(e,t,n){var r=t.pendingProps,l=te.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),G(te,l&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=io(i,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bi(n),t.memoizedState=Oi,e):_s(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return im(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Vt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Vt(s,o):(o=sn(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?bi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return o=e.child,e=o.sibling,r=Vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _s(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&hs(r),An(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function im(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(k(422))),ul(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=io({mode:"visible",children:r.children},l,0,null),o=sn(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&An(t,e.child,null,i),t.child.memoizedState=bi(i),t.memoizedState=Oi,o);if(!(t.mode&1))return ul(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(k(419)),r=Jo(o,r,void 0),ul(e,t,i,r)}if(s=(i&e.childLanes)!==0,$e||s){if(r=ve,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Et(e,l),at(r,e,l,-1))}return Ds(),r=Jo(Error(k(421))),ul(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xm.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,We=At(l.nextSibling),Qe=t,ee=!0,it=null,e!==null&&(Je[Ze++]=wt,Je[Ze++]=kt,Je[Ze++]=un,wt=e.id,kt=e.overflow,un=t),t=_s(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ti(e.return,t,n)}function Zo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function dd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(te,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Zo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Zo(t,!0,n,null,o);break;case"together":Zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sm(e,t,n){switch(t.tag){case 3:ud(t),$n();break;case 5:bc(t);break;case 1:Be(t.type)&&Dl(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;G(Fl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?cd(e,t,n):(G(te,te.current&1),e=zt(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,sd(e,t,n)}return zt(e,t,n)}var fd,Fi,pd,md;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fi=function(){};pd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,ln(ht.current);var o=null;switch(n){case"input":l=ii(e,l),r=ii(e,r),o=[];break;case"select":l=re({},l,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":l=ui(e,l),r=ui(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}di(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(vr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var a=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(vr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&X("scroll",e),o||s===a||(o=[])):(o=o||[]).push(f,a))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};md=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function am(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Be(t.type)&&Rl(),Ee(t),null;case 3:return r=t.stateNode,Bn(),J(Ae),J(Pe),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,it!==null&&(Qi(it),it=null))),Fi(e,t),Ee(t),null;case 5:Ss(t);var l=ln(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)pd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return Ee(t),null}if(e=ln(ht.current),sl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[Pr]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(l=0;l<ar.length;l++)X(ar[l],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":da(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":pa(r,o),X("invalid",r)}di(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",""+s]):vr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&X("scroll",r)}switch(n){case"input":Zr(r),fa(r,o,!0);break;case"textarea":Zr(r),ma(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[Pr]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(i=fi(n,r),n){case"dialog":X("cancel",e),X("close",e),l=r;break;case"iframe":case"object":case"embed":X("load",e),l=r;break;case"video":case"audio":for(l=0;l<ar.length;l++)X(ar[l],e);l=r;break;case"source":X("error",e),l=r;break;case"img":case"image":case"link":X("error",e),X("load",e),l=r;break;case"details":X("toggle",e),l=r;break;case"input":da(e,r),l=ii(e,r),X("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":pa(e,r),l=ui(e,r),X("invalid",e);break;default:l=r}di(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Wu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&X("scroll",e):a!=null&&qi(e,o,a,i))}switch(n){case"input":Zr(e),fa(e,r,!1);break;case"textarea":Zr(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=ln(Tr.current),ln(ht.current),sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(J(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&We!==null&&t.mode&1&&!(t.flags&128))Ic(),$n(),t.flags|=98560,o=!1;else if(o=sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[pt]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else it!==null&&(Qi(it),it=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?he===0&&(he=3):Ds())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Bn(),Fi(e,t),e===null&&Er(t.stateNode.containerInfo),Ee(t),null;case 10:return vs(t.type._context),Ee(t),null;case 17:return Be(t.type)&&Rl(),Ee(t),null;case 19:if(J(te),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)nr(o,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Bl(e),i!==null){for(t.flags|=128,nr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ce()>Hn&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ee)return Ee(t),null}else 2*ce()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ce(),t.sibling=null,n=te.current,G(te,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function um(e,t){switch(ms(t),t.tag){case 1:return Be(t.type)&&Rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),J(Ae),J(Pe),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(J(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(te),null;case 4:return Bn(),null;case 10:return vs(t.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var cl=!1,ze=!1,cm=typeof WeakSet=="function"?WeakSet:Set,M=null;function _n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function $i(e,t,n){try{n()}catch(r){ie(e,t,r)}}var ru=!1;function dm(e,t){if(Si=Tl,e=xc(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,v=0,y=e,g=null;t:for(;;){for(var S;y!==n||l!==0&&y.nodeType!==3||(s=i+l),y!==o||r!==0&&y.nodeType!==3||(a=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++f===l&&(s=i),g===o&&++v===r&&(a=i),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Tl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var P=N.memoizedProps,$=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?P:lt(t.type,P),$);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){ie(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return N=ru,ru=!1,N}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&$i(t,n,o)}l=l.next}while(l!==r)}}function lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hd(e){var t=e.alternate;t!==null&&(e.alternate=null,hd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Pr],delete t[Ei],delete t[Kp],delete t[Yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gd(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var ke=null,ot=!1;function Tt(e,t,n){for(n=n.child;n!==null;)yd(e,t,n),n=n.sibling}function yd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:ze||_n(n,t);case 6:var r=ke,l=ot;ke=null,Tt(e,t,n),ke=r,ot=l,ke!==null&&(ot?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ot?(e=ke,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),Nr(e)):Wo(ke,n.stateNode));break;case 4:r=ke,l=ot,ke=n.stateNode.containerInfo,ot=!0,Tt(e,t,n),ke=r,ot=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&$i(n,t,i),l=l.next}while(l!==r)}Tt(e,t,n);break;case 1:if(!ze&&(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Tt(e,t,n),ze=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cm),t.forEach(function(r){var l=wm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,ot=!1;break e;case 3:ke=s.stateNode.containerInfo,ot=!0;break e;case 4:ke=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(ke===null)throw Error(k(160));yd(o,i,l),ke=null,ot=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(f){ie(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vd(t,e),t=t.sibling}function vd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),dt(e),r&4){try{hr(3,e,e.return),lo(3,e)}catch(P){ie(e,e.return,P)}try{hr(5,e,e.return)}catch(P){ie(e,e.return,P)}}break;case 1:rt(t,e),dt(e),r&512&&n!==null&&_n(n,n.return);break;case 5:if(rt(t,e),dt(e),r&512&&n!==null&&_n(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(P){ie(e,e.return,P)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Au(l,o),fi(s,i);var f=fi(s,o);for(i=0;i<a.length;i+=2){var v=a[i],y=a[i+1];v==="style"?Wu(l,y):v==="dangerouslySetInnerHTML"?Hu(l,y):v==="children"?xr(l,y):qi(l,v,y,f)}switch(s){case"input":si(l,o);break;case"textarea":Bu(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Mn(l,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?Mn(l,!!o.multiple,o.defaultValue,!0):Mn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Pr]=o}catch(P){ie(e,e.return,P)}}break;case 6:if(rt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(P){ie(e,e.return,P)}}break;case 3:if(rt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(P){ie(e,e.return,P)}break;case 4:rt(t,e),dt(e);break;case 13:rt(t,e),dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Is=ce())),r&4&&ou(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(f=ze)||v,rt(t,e),ze=f):rt(t,e),dt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(M=e,v=e.child;v!==null;){for(y=M=v;M!==null;){switch(g=M,S=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:_n(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(P){ie(r,n,P)}}break;case 5:_n(g,g.return);break;case 22:if(g.memoizedState!==null){su(y);continue}}S!==null?(S.return=g,M=S):su(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,a=y.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Vu("display",i))}catch(P){ie(e,e.return,P)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(P){ie(e,e.return,P)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:rt(t,e),dt(e),r&4&&ou(e);break;case 21:break;default:rt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xr(l,""),r.flags&=-33);var o=lu(e);Ui(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=lu(e);Bi(e,s,i);break;default:throw Error(k(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fm(e,t,n){M=e,xd(e)}function xd(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||cl;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||ze;s=cl;var f=ze;if(cl=i,(ze=a)&&!f)for(M=l;M!==null;)i=M,a=i.child,i.tag===22&&i.memoizedState!==null?au(l):a!==null?(a.return=i,M=a):au(l);for(;o!==null;)M=o,xd(o),o=o.sibling;M=l,cl=s,ze=f}iu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,M=o):iu(e)}}function iu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Va(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Nr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ze||t.flags&512&&Ai(t)}catch(g){ie(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function su(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function au(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{lo(4,t)}catch(a){ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ie(t,l,a)}}var o=t.return;try{Ai(t)}catch(a){ie(t,o,a)}break;case 5:var i=t.return;try{Ai(t)}catch(a){ie(t,i,a)}}}catch(a){ie(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var pm=Math.ceil,Vl=Pt.ReactCurrentDispatcher,Ts=Pt.ReactCurrentOwner,et=Pt.ReactCurrentBatchConfig,V=0,ve=null,de=null,Se=0,Ve=0,Tn=Yt(0),he=0,Rr=null,dn=0,oo=0,Ms=0,gr=null,Fe=null,Is=0,Hn=1/0,vt=null,Wl=!1,Hi=null,Ut=null,dl=!1,Ot=null,Ql=0,yr=0,Vi=null,Sl=-1,Nl=0;function Le(){return V&6?ce():Sl!==-1?Sl:Sl=ce()}function Ht(e){return e.mode&1?V&2&&Se!==0?Se&-Se:Xp.transition!==null?(Nl===0&&(Nl=rc()),Nl):(e=K,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e):1}function at(e,t,n,r){if(50<yr)throw yr=0,Vi=null,Error(k(185));Or(e,n,r),(!(V&2)||e!==ve)&&(e===ve&&(!(V&2)&&(oo|=n),he===4&&Rt(e,Se)),Ue(e,r),n===1&&V===0&&!(t.mode&1)&&(Hn=ce()+500,to&&Gt()))}function Ue(e,t){var n=e.callbackNode;Xf(e,t);var r=_l(e,e===ve?Se:0);if(r===0)n!==null&&ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ya(n),t===1)e.tag===0?Gp(uu.bind(null,e)):_c(uu.bind(null,e)),Wp(function(){!(V&6)&&Gt()}),n=null;else{switch(lc(r)){case 1:n=ls;break;case 4:n=tc;break;case 16:n=Pl;break;case 536870912:n=nc;break;default:n=Pl}n=zd(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(Sl=-1,Nl=0,V&6)throw Error(k(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=_l(e,e===ve?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var l=V;V|=2;var o=Sd();(ve!==e||Se!==t)&&(vt=null,Hn=ce()+500,on(e,t));do try{gm();break}catch(s){kd(e,s)}while(!0);ys(),Vl.current=o,V=l,de!==null?t=0:(ve=null,Se=0,t=he)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Wi(e,l))),t===1)throw n=Rr,on(e,0),Rt(e,r),Ue(e,ce()),n;if(t===6)Rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!mm(l)&&(t=Kl(e,r),t===2&&(o=yi(e),o!==0&&(r=o,t=Wi(e,o))),t===1))throw n=Rr,on(e,0),Rt(e,r),Ue(e,ce()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:en(e,Fe,vt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=Is+500-ce(),10<t)){if(_l(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(en.bind(null,e,Fe,vt),t);break}en(e,Fe,vt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-st(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pm(r/1960))-r,10<r){e.timeoutHandle=ji(en.bind(null,e,Fe,vt),r);break}en(e,Fe,vt);break;case 5:en(e,Fe,vt);break;default:throw Error(k(329))}}}return Ue(e,ce()),e.callbackNode===n?wd.bind(null,e):null}function Wi(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Qi(t)),e}function Qi(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function mm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ut(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Ms,t&=~oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(V&6)throw Error(k(327));On();var t=_l(e,0);if(!(t&1))return Ue(e,ce()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=Rr,on(e,0),Rt(e,t),Ue(e,ce()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Fe,vt),Ue(e,ce()),null}function Ls(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Hn=ce()+500,to&&Gt())}}function fn(e){Ot!==null&&Ot.tag===0&&!(V&6)&&On();var t=V;V|=1;var n=et.transition,r=K;try{if(et.transition=null,K=1,e)return e()}finally{K=r,et.transition=n,V=t,!(V&6)&&Gt()}}function Rs(){Ve=Tn.current,J(Tn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vp(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rl();break;case 3:Bn(),J(Ae),J(Pe),Ns();break;case 5:Ss(r);break;case 4:Bn();break;case 13:J(te);break;case 19:J(te);break;case 10:vs(r.type._context);break;case 22:case 23:Rs()}n=n.return}if(ve=e,de=e=Vt(e.current,null),Se=Ve=t,he=0,Rr=null,Ms=oo=dn=0,Fe=gr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}rn=null}return e}function kd(e,t){do{var n=de;try{if(ys(),xl.current=Hl,Ul){for(var r=ne.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ul=!1}if(cn=0,ye=me=ne=null,mr=!1,Mr=0,Ts.current=null,n===null||n.return===null){he=1,Rr=t,de=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=Se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=Xa(i);if(S!==null){S.flags&=-257,Ja(S,i,s,o,t),S.mode&1&&Ga(o,f,t),t=S,a=f;var N=t.updateQueue;if(N===null){var P=new Set;P.add(a),t.updateQueue=P}else N.add(a);break e}else{if(!(t&1)){Ga(o,f,t),Ds();break e}a=Error(k(426))}}else if(ee&&s.mode&1){var $=Xa(i);if($!==null){!($.flags&65536)&&($.flags|=256),Ja($,i,s,o,t),hs(Un(a,s));break e}}o=a=Un(a,s),he!==4&&(he=2),gr===null?gr=[o]:gr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ld(o,a,t);Ha(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ut===null||!Ut.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=od(o,s,t);Ha(o,x);break e}}o=o.return}while(o!==null)}Cd(n)}catch(E){t=E,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Sd(){var e=Vl.current;return Vl.current=Hl,e===null?Hl:e}function Ds(){(he===0||he===3||he===2)&&(he=4),ve===null||!(dn&268435455)&&!(oo&268435455)||Rt(ve,Se)}function Kl(e,t){var n=V;V|=2;var r=Sd();(ve!==e||Se!==t)&&(vt=null,on(e,t));do try{hm();break}catch(l){kd(e,l)}while(!0);if(ys(),V=n,Vl.current=r,de!==null)throw Error(k(261));return ve=null,Se=0,he}function hm(){for(;de!==null;)Nd(de)}function gm(){for(;de!==null&&!Bf();)Nd(de)}function Nd(e){var t=Ed(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Cd(e):de=t,Ts.current=null}function Cd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=um(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}else if(n=am(n,t,Ve),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function en(e,t,n){var r=K,l=et.transition;try{et.transition=null,K=1,ym(e,t,n,r)}finally{et.transition=l,K=r}return null}function ym(e,t,n,r){do On();while(Ot!==null);if(V&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jf(e,o),e===ve&&(de=ve=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,zd(Pl,function(){return On(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var i=K;K=1;var s=V;V|=4,Ts.current=null,dm(e,n),vd(n,e),bp(Ni),Tl=!!Si,Ni=Si=null,e.current=n,fm(n),Uf(),V=s,K=i,et.transition=o}else e.current=n;if(dl&&(dl=!1,Ot=e,Ql=l),o=e.pendingLanes,o===0&&(Ut=null),Wf(n.stateNode),Ue(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Wl)throw Wl=!1,e=Hi,Hi=null,e;return Ql&1&&e.tag!==0&&On(),o=e.pendingLanes,o&1?e===Vi?yr++:(yr=0,Vi=e):yr=0,Gt(),null}function On(){if(Ot!==null){var e=lc(Ql),t=et.transition,n=K;try{if(et.transition=null,K=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,Ql=0,V&6)throw Error(k(331));var l=V;for(V|=4,M=e.current;M!==null;){var o=M,i=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(M=f;M!==null;){var v=M;switch(v.tag){case 0:case 11:case 15:hr(8,v,o)}var y=v.child;if(y!==null)y.return=v,M=y;else for(;M!==null;){v=M;var g=v.sibling,S=v.return;if(hd(v),v===f){M=null;break}if(g!==null){g.return=S,M=g;break}M=S}}}var N=o.alternate;if(N!==null){var P=N.child;if(P!==null){N.child=null;do{var $=P.sibling;P.sibling=null,P=$}while(P!==null)}}M=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,M=i;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var c=e.current;for(M=c;M!==null;){i=M;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,M=m;else e:for(i=c;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:lo(9,s)}}catch(E){ie(s,s.return,E)}if(s===i){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(V=l,Gt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{K=n,et.transition=t}}return!1}function cu(e,t,n){t=Un(n,t),t=ld(e,t,1),e=Bt(e,t,1),t=Le(),e!==null&&(Or(e,1,t),Ue(e,t))}function ie(e,t,n){if(e.tag===3)cu(e,e,n);else for(;t!==null;){if(t.tag===3){cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Un(n,e),e=od(t,e,1),t=Bt(t,e,1),e=Le(),t!==null&&(Or(t,1,e),Ue(t,e));break}}t=t.return}}function vm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Se&n)===n&&(he===4||he===3&&(Se&130023424)===Se&&500>ce()-Is?on(e,0):Ms|=n),Ue(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=Le();e=Et(e,t),e!==null&&(Or(e,t,n),Ue(e,n))}function xm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function wm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),jd(e,n)}var Ed;Ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,sm(e,t,n);$e=!!(e.flags&131072)}else $e=!1,ee&&t.flags&1048576&&Tc(t,bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;kl(e,t),e=t.pendingProps;var l=Fn(t,Pe.current);Dn(t,n),l=js(null,t,r,e,l,n);var o=Es();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(o=!0,Dl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ws(t),l.updater=ro,t.stateNode=l,l._reactInternals=t,Ii(t,r,e,n),t=Di(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&ps(t),Ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(kl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Sm(r),e=lt(r,e),l){case 0:t=Ri(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=Za(null,t,r,e,n);break e;case 14:t=qa(null,t,r,lt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Ri(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),eu(e,t,r,l,n);case 3:e:{if(ud(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Oc(e,t),Al(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Un(Error(k(423)),t),t=tu(e,t,r,n,l);break e}else if(r!==l){l=Un(Error(k(424)),t),t=tu(e,t,r,n,l);break e}else for(We=At(t.stateNode.containerInfo.firstChild),Qe=t,ee=!0,it=null,n=Rc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===l){t=zt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return bc(t),e===null&&_i(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ci(r,l)?i=null:o!==null&&Ci(r,o)&&(t.flags|=32),ad(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&_i(t),null;case 13:return cd(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),Za(e,t,r,l,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,G(Fl,r._currentValue),r._currentValue=i,o!==null)if(ut(o.value,i)){if(o.children===l.children&&!Ae.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=St(-1,n&-n),a.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?a.next=a:(a.next=v.next,v.next=a),f.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ti(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(k(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ti(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Dn(t,n),l=tt(l),r=r(l),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,l=lt(r,t.pendingProps),l=lt(r.type,l),qa(e,t,r,l,n);case 15:return id(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:lt(r,l),kl(e,t),t.tag=1,Be(r)?(e=!0,Dl(t)):e=!1,Dn(t,n),rd(t,r,l),Ii(t,r,l,n),Di(null,t,r,!0,e,n);case 19:return dd(e,t,n);case 22:return sd(e,t,n)}throw Error(k(156,t.tag))};function zd(e,t){return ec(e,t)}function km(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new km(e,t,n,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sm(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Os(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case wn:return sn(n.children,l,o,t);case es:i=8,l|=8;break;case ni:return e=qe(12,n,t,l|2),e.elementType=ni,e.lanes=o,e;case ri:return e=qe(13,n,t,l),e.elementType=ri,e.lanes=o,e;case li:return e=qe(19,n,t,l),e.elementType=li,e.lanes=o,e;case bu:return io(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Du:i=10;break e;case Ou:i=9;break e;case ts:i=11;break e;case ns:i=14;break e;case Mt:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=qe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=qe(22,e,r,t),e.elementType=bu,e.lanes=n,e.stateNode={isHidden:!1},e}function qo(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ro(0),this.expirationTimes=Ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function bs(e,t,n,r,l,o,i,s,a){return e=new Nm(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(o),e}function Cm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pd(e){if(!e)return Qt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Be(n))return Pc(e,n,t)}return t}function _d(e,t,n,r,l,o,i,s,a){return e=bs(n,r,!0,e,l,o,i,s,a),e.context=Pd(null),n=e.current,r=Le(),l=Ht(n),o=St(r,l),o.callback=t??null,Bt(n,o,l),e.current.lanes=l,Or(e,l,r),Ue(e,r),e}function so(e,t,n,r){var l=t.current,o=Le(),i=Ht(l);return n=Pd(n),t.context===null?t.context=n:t.pendingContext=n,t=St(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(l,t,i),e!==null&&(at(e,l,i,o),vl(e,l,i)),i}function Yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function jm(){return null}var Td=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}ao.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));so(e,t,null,null)};ao.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){so(null,e,null,null)}),t[jt]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&uc(e)}};function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function Em(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=Yl(i);o.call(f)}}var i=_d(t,r,e,0,null,!1,!1,"",fu);return e._reactRootContainer=i,e[jt]=i.current,Er(e.nodeType===8?e.parentNode:e),fn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=Yl(a);s.call(f)}}var a=bs(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=a,e[jt]=a.current,Er(e.nodeType===8?e.parentNode:e),fn(function(){so(t,a,n,r)}),a}function co(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Yl(i);s.call(a)}}so(t,i,e,l)}else i=Em(n,t,e,l,r);return Yl(i)}oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(os(t,n|1),Ue(t,ce()),!(V&6)&&(Hn=ce()+500,Gt()))}break;case 13:fn(function(){var r=Et(e,1);if(r!==null){var l=Le();at(r,e,1,l)}}),Fs(e,1)}};is=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Le();at(t,e,134217728,n)}Fs(e,134217728)}};ic=function(e){if(e.tag===13){var t=Ht(e),n=Et(e,t);if(n!==null){var r=Le();at(n,e,t,r)}Fs(e,t)}};sc=function(){return K};ac=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};mi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=eo(r);if(!l)throw Error(k(90));$u(r),si(r,l)}}}break;case"textarea":Bu(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Yu=Ls;Gu=fn;var zm={usingClientEntryPoint:!1,Events:[Fr,Cn,eo,Qu,Ku,Ls]},rr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pm={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zu(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||jm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Xl=fl.inject(Pm),mt=fl}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zm;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!As(t))throw Error(k(200));return Cm(e,t,null,n)};Ye.createRoot=function(e,t){if(!As(e))throw Error(k(299));var n=!1,r="",l=Td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=bs(e,1,!1,null,null,n,!1,r,l),e[jt]=t.current,Er(e.nodeType===8?e.parentNode:e),new $s(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Zu(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return fn(e)};Ye.hydrate=function(e,t,n){if(!uo(t))throw Error(k(200));return co(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!As(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Td;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=_d(t,null,e,1,n??null,l,!1,o,i),e[jt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ao(t)};Ye.render=function(e,t,n){if(!uo(t))throw Error(k(200));return co(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!uo(e))throw Error(k(40));return e._reactRootContainer?(fn(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ls;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return co(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426";function Md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md)}catch(e){console.error(e)}}Md(),Mu.exports=Ye;var _m=Mu.exports,Id,pu=_m;Id=pu.createRoot,pu.hydrateRoot;var Tm={thinkers:[{id:1,name:"Melanie Gerlis",handle:"@melaniegerlis",domain:"Economia dell'arte / FT",active:!0,desc:"Giornalista del Financial Times specializzata in economia dell'arte. Analisi lucide sul mercato, le aste e i flussi di capitale nel mondo dell'arte."},{id:2,name:"Scott Reyburn",handle:"@ScottReyburn",domain:"Giornalismo d'asta",active:!0,desc:"Giornalista specializzato in aste e mercato dell'arte. Cronista di Christie's, Sotheby's e dei grandi passaggi di proprieta."},{id:3,name:"Ben Clymer",handle:"@hodinkee",domain:"Orologi / Hodinkee",active:!0,desc:"Fondatore di Hodinkee, la piattaforma di riferimento per l'orologeria. Ha trasformato gli orologi in oggetto culturale per una nuova generazione."},{id:4,name:"Eric Wind",handle:"@EricWind",domain:"Orologi vintage",active:!0,desc:"Dealer e collezionista di orologi vintage di alto livello. Esperto di Rolex, Patek Philippe e del mercato secondario."},{id:5,name:"Magnus Resch",handle:"@MagnusResch",domain:"Dati sul mercato dell'arte",active:!0,desc:"Imprenditore e accademico. Analisi data-driven del mercato dell'arte, critico delle inefficienze delle gallerie."},{id:6,name:"Jerry Saltz",handle:"@jerrysaltz",domain:"Critica d'arte / Anti-mercato",active:!0,desc:"Critico d'arte del New York Magazine, premio Pulitzer. Voce populista e provocatoria, critico del mercato speculativo."},{id:7,name:"Kenny Schachter",handle:"@kennyschachter",domain:"Arte + NFT + Crypto",active:!0,desc:"Artista, critico e dealer. Ponte tra arte contemporanea, NFT e criptovalute. Voce irriverente e insider del mercato."},{id:8,name:"Andrew Shirley",handle:"@AndrewShirleyKF",domain:"Investimenti di lusso",active:!0,desc:"Responsabile del Wealth Report di Knight Frank. Autore del Luxury Investment Index che traccia vino, arte, orologi e auto d'epoca."},{id:9,name:"Alain Zimmermann",handle:"@AlainZimmermann",domain:"Industria orologiera svizzera",active:!0,desc:"Analista dell'industria orologiera svizzera. Esperto di dinamiche di mercato, export e posizionamento dei brand di alta orologeria."},{id:10,name:"Noah Davis",handle:"@NoahDavis",domain:"Crypto-art / Aste digitali",active:!0,desc:"Ex specialista di Christie's, ha gestito la vendita record di Beeple. Figura chiave nell'intersezione tra arte tradizionale e digitale."},{id:11,name:"Artnet",handle:"@artnet",domain:"Analytics del mercato dell'arte",active:!0,desc:"Piattaforma di analytics e news sul mercato dell'arte. Database di prezzi d'asta, indici di mercato e intelligence per collezionisti."},{id:12,name:"Rally",handle:"@rallyrd",domain:"Investimento frazionato",active:!0,desc:"Piattaforma di investimento frazionato in collectibles: auto d'epoca, carte sportive, orologi, memorabilia. Democratizzazione dell'accesso."}],sources:["Artnet","Hodinkee","Knight Frank Wealth Report"],branding:{nameHtml:"Signal<span>.</span>Collectibles",tagline:"Collectibles & Art Investment Intelligence · AI-Powered",aboutDescription:"Signal.Collectibles e un intelligence dashboard per collezionisti e investitori in beni alternativi. Ogni giorno raccoglie e analizza le idee dei critici, dealer e analisti piu influenti nel mondo dell'arte, degli orologi e dei collectibles, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',fonts:{googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"7231a446-f0fe-4521-b212-bf6d588f94ed",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`}};const Ar=Tm,Mm=Ar.thinkers,Im=Ar.sources,tn=Ar.branding,fo=Ar.prompts,lr=Ar.council;function po(e,t){return Object.entries(t).reduce((n,[r,l])=>n.replaceAll(`{${r}}`,String(l??"")),e)}const Lm="/claude",Rm="https://stelle-972218119922.europe-west1.run.app/api",Ld=Rm;async function mo(e){const t=await fetch(Lm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const l=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${l}…`)}const r=await t.json();if(!t.ok)throw new Error(r.error||"Claude CLI error");return r}function Dm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Om(e){const t=po(fo.scan,{thinker_name:e.name,thinker_handle:e.handle});return(await mo(t)).text||"Nessun contenuto estratto."}async function mu(e){const t=e.map(l=>`### ${l.name} (${l.domain})
${l.content}`).join(`

---

`),n=po(fo.synthesis,{summaries:t});return(await mo(n)).text||"Nessun contenuto estratto."}async function bm(e,t,n){const r=e.map(f=>`### ${f.name}
${f.content}`).join(`

`),l=n&&n.length>0?n.join(", "):"GitHub Trending, trendshift.io, Hacker News",o=po(fo.projects,{signals:r,synthesis:t,sources_list:l}),a=((await mo(o)).text||"").trim().match(/\[[\s\S]*\]/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}async function Fm(e,t){const n=po(fo.conceptDiff,{old_synthesis:e,new_synthesis:t}),o=((await mo(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!o)throw new Error("Formato risposta non valido");return JSON.parse(o[0])}let hu=!1;async function $m(){if(hu)return;if(!(await fetch(`${Ld}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");hu=!0}async function Am(e,t,n){await $m();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${Ld}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:lr.boardId,stop_mode:"cost",budget_usd:lr.budgetUsd,user_language:lr.userLanguage,max_words:lr.maxWords,rounds:lr.rounds,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:f}=await o.read();if(a)break;s+=i.decode(f,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let y="";for(const g of v)if(g.startsWith("event: "))y=g.slice(7).trim();else if(g.startsWith("data: ")&&y){try{const S=JSON.parse(g.slice(6));n(y,S)}catch{}y=""}}}function Nt(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function Bm(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return Nt(e);let r="";for(let l=0;l<n.length;l++){const o=n[l].trim();if(o)if(t.test(o)){t.lastIndex=0;const i=o.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),s=l+1<n.length?n[l+1].trim():"";s?(r+=`<details open><summary>${gu(i)}</summary>${Nt(s)}</details>`,l++):r+=`<strong>${gu(i)}</strong>`}else r+=Nt(o)}return r}function gu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Um(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function Hm(e,t){if(!e)return"";if(!t)return Nt(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>Um(o,a)>.7),s=Nt(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function Vm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const yu="​‌",vu="‌​";function Wm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let y=1;y<=l;y++)for(let g=1;g<=o;g++)i[y][g]=n[y-1]===r[g-1]?i[y-1][g-1]+1:Math.max(i[y-1][g],i[y][g-1]);const s=[];let a=l,f=o;for(;a>0||f>0;)a>0&&f>0&&n[a-1]===r[f-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,f--):f>0&&(a===0||i[a][f-1]>=i[a-1][f])?(s.unshift({type:"added",text:r[f-1]}),f--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const y of s)v.length>0&&v[v.length-1].type===y.type?v[v.length-1].text+=y.text:v.push({...y});return v}function xu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=yu+s.text+vu:l+=s.text);let o=Nt(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${yu}(.*?)${vu}`,"gs"),`<span class="${i}">$1</span>`),o}function Qm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function Km(){const[e,t]=T.useState(!1),[n,r]=T.useState(-1),[l,o]=T.useState([]),i=T.useRef([]),s=T.useRef(null),a=T.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),f=T.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=T.useCallback(($,p=0)=>{speechSynthesis.cancel(),i.current=$.slice(p),o($);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=$.indexOf(m);r(x);const E=`${m.title}. ${Qm(m.text)}`,w=new SpeechSynthesisUtterance(E);w.lang="it-IT",w.rate=1;const _=a();_&&(w.voice=_),w.onend=c,w.onerror=c,s.current=w,speechSynthesis.speak(w)};t(!0),c()},[a]),y=T.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),g=T.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),S=T.useCallback(()=>{speechSynthesis.cancel()},[]),N=T.useCallback(($,p,c,m)=>{const x=[];$&&x.push({title:"Cross-Synthesis",text:$,type:"synthesis"});for(const E of c)p[E.id]&&!p[E.id].startsWith("Errore")&&x.push({title:E.name,text:p[E.id],type:"thinker"});if(m&&m.length>0){const E=m.map(w=>{var _;return`${w.name}: ${w.description}${(_=w.citedBy)!=null&&_.length?`. Citato da ${w.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:E,type:"projects"})}v(x)},[v]),P=T.useCallback(($,p)=>{v([{title:$,text:p,type:"single"}])},[v]);return T.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:N,playSingle:P,pause:y,resume:g,stop:f,skipForward:S}}const Ym=`
  @import url('${tn.fonts.googleFontsUrl}');
`,Gm=`
  ${Ym}

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
  .pill-stale { background: #fef3c7; color: #92400e; border: 1px dashed #f59e0b; cursor: help; }
  .pill-fonti-only { background: #eff6ff; color: #2563eb; font-size: 8px; border: 1px solid #bfdbfe; }

  .card-desc {
    font-size: 11.5px;
    color: #6b7280;
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
    color: #9ca3af;
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
    color: #9ca3af;
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

  /* Log tab */
  .log-pane { margin-bottom: 24px; }
  .log-pane-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #9ca3af;
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
    color: #6b7280;
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
  .thinker-status.stale { background: #f59e0b; box-shadow: 0 0 0 2px #fef3c7; }
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
`;function Xm(){const[e,t]=T.useState(Mm),[n,r]=T.useState({}),[l,o]=T.useState({}),[i,s]=T.useState({}),[a,f]=T.useState(null),[v,y]=T.useState("idle"),[g,S]=T.useState(!1),[N,P]=T.useState(""),[$,p]=T.useState(""),[c,m]=T.useState(null),[x,E]=T.useState(!1),[w,_]=T.useState([]),[L,Z]=T.useState(null),[D,fe]=T.useState("signals"),[_e,Xt]=T.useState({leftIdx:1,rightIdx:0}),[Kn,ho]=T.useState("emerging"),[se,hn]=T.useState([]),[z,O]=T.useState([]),[b,q]=T.useState(null),[le,_t]=T.useState("idle"),[Ce,Jt]=T.useState(Im),[ct,Zt]=T.useState(""),[Rd,go]=T.useState(!1),[Bs,Dd]=T.useState(!1),[gn,Od]=T.useState(""),[Br,Us]=T.useState([]),[Ur,yo]=T.useState("idle"),[Hr,vo]=T.useState(null),[Hs,Vs]=T.useState(null),[Jm,Zm]=T.useState("idle"),[Ws,bd]=T.useState({scan:"",launchd:""}),[Vr,xo]=T.useState("idle"),[qm,Qs]=T.useState([]),[Fd,$d]=T.useState({}),[Ad,Bd]=T.useState(new Set),wo=T.useRef(null),ge=Km(),[Ud,Hd]=T.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),xe=e.filter(d=>d.active),Ks=xe.filter(d=>!d.fontiOnly),yn=Object.values(i).filter(d=>d==="done"||d==="stale").length,ko=xe.length;T.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const h=JSON.parse(d.value);if(h.results){r(h.results);const j=new Set((h.staleIds||[]).map(String)),I={};for(const U of Object.keys(h.results))h.results[U].startsWith("Errore")?I[U]="error":j.has(String(U))?I[U]="stale":I[U]="done";s(I),h.staleIds&&Qs(h.staleIds)}if(h.prevResults&&o(h.prevResults),h.lastScanTime&&m(h.lastScanTime),h.synthesis&&(f(h.synthesis),y("done")),h.synthesisHistory){const j=h.synthesisHistory.map((I,U,Q)=>{if(I.conceptDiff&&!I.conceptDiffs){const we=Q[U+1],{conceptDiff:Oe,...Xe}=I;return we?{...Xe,conceptDiffs:{[we.id]:Oe}}:Xe}return I});_(j)}h.projects&&hn(h.projects),h.prevProjects&&O(h.prevProjects),h.projectsTime&&q(h.projectsTime),h.projectSources&&Jt(h.projectSources)}}catch{}})()},[]);const Te=T.useCallback(async(d={})=>{try{const h=await window.storage.get("signal-state"),I={...h?JSON.parse(h.value):{},...d};await window.storage.set("signal-state",JSON.stringify(I))}catch{}},[]);T.useCallback(async(d={})=>{await Te({results:n,prevResults:l,lastScanTime:c,synthesis:a,synthesisHistory:w,projects:se,prevProjects:z,projectsTime:b,projectSources:Ce,...d})},[n,l,c,a,w,se,z,b,Ce,Te]);const Wr=T.useCallback((d,h)=>h.length>0&&h[0].text===d?h:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:xe.map(I=>I.name),conceptDiffs:{}},...h].slice(0,50),[xe]),Qr=T.useCallback(async d=>{var I;if(d.length<2)return d;const h=d[0],j=d[1];if((I=h.conceptDiffs)!=null&&I[j.id])return d;try{const U=await Fm(j.text,h.text),Q=[...d];return Q[0]={...Q[0],conceptDiffs:{...Q[0].conceptDiffs||{},[j.id]:U}},_(Q),await Te({synthesisHistory:Q}),Q}catch(U){return console.error("[concept-diff auto]",U),d}},[Te]),Ys=T.useCallback(async(d,h)=>{try{await navigator.clipboard.writeText(d)}catch{const j=document.createElement("textarea");j.value=d,document.body.appendChild(j),j.select(),document.execCommand("copy"),document.body.removeChild(j)}Z(h),setTimeout(()=>Z(null),2e3)},[]);T.useCallback(async d=>{const h=w.filter(j=>j.id!==d);_(h),await Te({synthesisHistory:h})},[w,Te]);const So=T.useCallback(async()=>{xo("loading");const d="/signal-brief/collectibles/";try{const[h,j]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),I=h.ok?await h.text():"",U=j.ok?await j.text():"";bd({scan:I,launchd:U}),xo("done")}catch(h){console.error("[logs]",h),xo("error")}},[]);T.useEffect(()=>{D==="log"&&So()},[D,So]);const Gs=T.useCallback(d=>{if(!d)return;const h=d.trim().toLowerCase();if(!h)return;const j=e.find(I=>{const U=I.name.toLowerCase();return U===h||U.includes(h)||h.includes(U)});j&&(fe("signals"),E(!1),setTimeout(()=>{const I=document.getElementById(`thinker-${j.id}`);I&&(I.scrollIntoView({behavior:"smooth",block:"start"}),I.classList.add("thinker-card-highlight"),setTimeout(()=>I.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Vd=(d,h)=>{if(!d||!h)return 0;const j=new Set(d.toLowerCase().split(/\s+/)),I=new Set(h.toLowerCase().split(/\s+/));return[...j].filter(Q=>I.has(Q)).length/Math.max(j.size,I.size)},Xs=d=>!l[d]||!n[d]?!1:Vd(l[d],n[d])<.72;xe.filter(d=>i[d.id]==="done"&&Xs(d.id)).length;const Js=e.length>0&&e.every(d=>d.active),Wd=()=>{g||t(d=>d.map(h=>({...h,active:!Js})))},No=()=>{N.trim()&&(t(d=>[...d,{id:Date.now(),name:N.trim(),handle:$.trim()||"@?",domain:"Custom",active:!0}]),P(""),p(""))},Zs=()=>{const d=ct.trim();if(!d||Ce.includes(d))return;const h=[...Ce,d];Jt(h),Zt(""),Te({projectSources:h})},Qd=d=>{const h=Ce.filter(j=>j!==d);Jt(h),Te({projectSources:h})},[Kd,qs]=T.useState(null),Kr=T.useCallback(async(d,h)=>{_t("loading"),qs(null);try{const j=await bm(h,d,Ce);O(se),hn(j);const I=Date.now();q(I),_t("done"),await Te({projects:j,prevProjects:se,projectsTime:I})}catch(j){console.error("[Signal.Brief] fetchProjects error:",j),_t("error"),qs(j.message)}},[Ce,Te,se]),Yd=T.useCallback(async()=>{if(xe.length===0)return;fe("signals"),S(!0),f(null),y("idle"),o(B=>({...B,...n}));const d={...n},h={};for(const B of xe){const ae=d[B.id];ae&&!ae.startsWith("Errore")&&(h[B.id]=ae)}const j={};xe.forEach(B=>{j[B.id]="loading"}),s(j),r(h);const I={...h},U=[],Q={},we=2,Oe=B=>new Promise(ae=>setTimeout(ae,B));for(let B=0;B<xe.length;B+=we){const ae=xe.slice(B,B+we);await Promise.all(ae.map(async Me=>{try{const H=await Om(Me);I[Me.id]=H,r(oe=>({...oe,[Me.id]:H})),s(oe=>({...oe,[Me.id]:"done"}))}catch(H){const oe=h[Me.id]!=null;Q[Me.id]=H.message,oe?(U.push(String(Me.id)),s(ue=>({...ue,[Me.id]:"stale"}))):(I[Me.id]=`Errore: ${H.message}`,r(ue=>({...ue,[Me.id]:`Errore: ${H.message}`})),s(ue=>({...ue,[Me.id]:"error"})))}})),B+we<xe.length&&await Oe(1200)}Qs(U),$d(Q);const Xe=Dm(I),He=Xe?Date.now():c;Xe&&(m(He),Hd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Te({results:I,prevResults:d,lastScanTime:He,synthesis:a,synthesisHistory:w,staleIds:U}),S(!1);const be=Ks.filter(B=>I[B.id]&&!I[B.id].startsWith("Errore")).map(B=>({name:B.name,domain:B.domain,content:I[B.id]}));if(be.length>=2){y("loading");try{const B=await mu(be);f(B),y("done");const ae=Wr(B,w);_(ae),await Te({results:I,prevResults:d,lastScanTime:He,synthesis:B,synthesisHistory:ae}),Qr(ae),Kr(B,be)}catch{y("error")}}},[xe,n,Te,a,w,Wr,c,Kr,Qr]),Gd=T.useCallback(async()=>{const d=Ks.filter(h=>i[h.id]==="done"||i[h.id]==="stale").map(h=>({name:h.name,domain:h.domain,content:n[h.id]}));if(!(d.length<2)){y("loading");try{const h=await mu(d);f(h),y("done");const j=Wr(h,w);_(j),await Te({synthesis:h,synthesisHistory:j}),Qr(j),Kr(h,d)}catch(h){f(`Errore nella sintesi: ${h.message}`),y("error")}}},[xe,i,n,Te,w,Wr,Kr,Qr]),ea=T.useCallback(async()=>{if(gn.trim()){Us([]),vo(null),Vs(null),yo("loading");try{await Am(gn,a,(d,h)=>{if(d==="session_started"&&h.session_id&&Vs(h.session_id),d==="sage_speaks"&&h.content&&Us(j=>[...j,{name:h.persona_name,icon:h.persona_icon,color:h.persona_color,content:h.content}]),d==="moderator_synthesis"&&h.content&&vo(h.content),d==="moderator"){const j=h.content||h.decision||h.synthesis||"";j&&vo(j)}}),yo("done")}catch(d){console.error("[council]",d),yo("error")}}},[gn,a]),Xd=yn>=2&&!g&&v!=="loading",ta=Object.keys(n).length>0,na="Disponibile solo in locale (richiede Claude CLI)",Jd=xe.filter(d=>{if(!i[d.id])return!1;if(x){const h=i[d.id];return(h==="done"||h==="stale")&&Xs(d.id)}return!0});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Gm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>go(!0),dangerouslySetInnerHTML:{__html:tn.nameHtml}}),u.jsx("div",{className:"tagline",children:tn.tagline})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",Ud]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Gd,disabled:!Xd||!0,title:na,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!wo.current){const h=new Audio(`/signal-brief/collectibles/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);h.onerror=()=>{h.src="/signal-brief/collectibles/podcast/episodes/2026-04-12.mp3",h.play()},wo.current=h}const d=wo.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/collectibles/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Yd(),disabled:g||xe.length===0||!0,title:na,children:g?`Scanning ${yn}/${ko}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${D==="signals"?"active":""}`,onClick:()=>fe("signals"),children:["Segnali",yn>0&&u.jsx("span",{className:"tab-badge",children:yn})]}),u.jsxs("button",{className:`tab-btn ${D==="projects"?"active":""}`,onClick:()=>fe("projects"),children:["Progetti",se.length>0&&u.jsx("span",{className:"tab-badge",children:se.length})]}),u.jsxs("button",{className:`tab-btn ${D==="history"?"active":""}`,onClick:()=>fe("history"),children:["Cronologia",w.length>0&&u.jsx("span",{className:"tab-badge",children:w.length})]}),u.jsx("button",{className:`tab-btn ${D==="log"?"active":""}`,onClick:()=>fe("log"),children:"▤ Log"}),u.jsx("button",{className:`tab-btn ${D==="config"?"active":""}`,onClick:()=>fe("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[D==="signals"&&u.jsxs(u.Fragment,{children:[g&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${ko>0?yn/ko*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&w.length>0&&u.jsx("span",{className:"timestamp",children:new Date(w[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>ge.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Dd(d=>!d),title:"Chiedi ai thinkers",style:Bs?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Ys(a,"synth"),children:L==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:Vm(w.length>1?Hm(a,w[1].text):Nt(a),xe)}}),Bs&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Hs?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Hs}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:gn,onChange:d=>Od(d.target.value),onKeyDown:d=>d.key==="Enter"&&ea(),disabled:Ur==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:ea,disabled:Ur==="loading"||!gn.trim(),children:Ur==="loading"?"In deliberazione…":"Chiedi"})]}),Br.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Br.map((d,h)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name]}),u.jsx("div",{children:d.content})]},h))}),Hr&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const d=Br.map(h=>`${h.name}: ${h.content}`).join(`

`)+`

Sintesi: `+Hr;ge.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${gn}

`+Br.map(h=>`${h.icon} ${h.name}:
${h.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Hr}`;Ys(d,"council")},children:L==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:Nt(Hr)}})]}),Ur==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),ta&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",yn," acquisiti"]})}),!ta&&!g?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:Jd.map(d=>{const h=i[d.id],j=Fd[d.id],I=Ad.has(d.id),U=Q=>{Q.stopPropagation(),Bd(we=>{const Oe=new Set(we);return Oe.has(d.id)?Oe.delete(d.id):Oe.add(d.id),Oe})};return u.jsxs("div",{id:`thinker-${d.id}`,className:`card ${h}`,children:[u.jsxs("div",{className:`card-header card-toggle ${I?"collapsed":""}`,onClick:U,children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[u.jsx("span",{className:"toggle-icon",children:"▾"}),d.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:Q=>Q.stopPropagation(),children:d.handle})]}),u.jsx("div",{className:"card-domain",children:d.domain})]}),(h==="done"||h==="stale")&&u.jsx("button",{className:"btn-listen",onClick:Q=>{Q.stopPropagation(),ge.playSingle(d.name,n[d.id])},title:"Ascolta",children:"🔊"}),h==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),h==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),h==="stale"&&u.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${j?": "+j:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),h==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),d.fontiOnly&&u.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!I&&u.jsxs("div",{className:"card-body",children:[d.desc&&u.jsx("div",{className:"card-desc",children:d.desc}),h==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(h==="done"||h==="stale")&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:Bm(n[d.id])}}),h==="error"&&u.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),D==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",se.length>0&&` · ${se.length} trovati`]})}),le==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),le==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",Kd||"errore sconosciuto"]}),se.length===0&&le!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),se.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),b&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(b).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),se.some(d=>d.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),z.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),se.map((d,h)=>{const j=d.maturity!=null&&d.momentum!=null,I=Math.ceil(Math.sqrt(se.length)),U=Math.floor(h/I),Q=h%I,we=j?d.maturity:2+Q/Math.max(I-1,1)*7,Oe=j?d.momentum:8-U/Math.max(Math.ceil(se.length/I)-1,1)*7,Xe=50+(we-1)/9*420,He=370-(Oe-1)/9*360,be=z.length>0&&!z.some(ae=>ae.name===d.name),B=be?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:Xe,cy:He,r:be?6:5,fill:B,opacity:"0.85",stroke:be?"#fca5a5":"none",strokeWidth:be?2:0,onClick:()=>window.open(d.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:Xe+9,y:He+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:be?"#dc2626":"#374151",fontWeight:be?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},h)})]})]}),se.length>0&&u.jsx("div",{className:"projects-grid",children:se.map((d,h)=>u.jsxs("div",{className:"project-card",style:z.length>0&&!z.some(j=>j.name===d.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),z.length>0&&!z.some(j=>j.name===d.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&u.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&u.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:d.description}),u.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&u.jsx("div",{className:"project-themes",children:d.themes.map((j,I)=>u.jsx("span",{className:"project-theme",children:j},I))})]})]},h))})]}),D==="history"&&u.jsx(u.Fragment,{children:w.length<2?u.jsxs("div",{className:"history-empty",children:[w.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",w.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(w[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Nt(w[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const d=Date.now(),h=864e5,j=d-7*h,I=d-21*h,U=w.filter(H=>H.timestamp>=j),Q=w.filter(H=>H.timestamp>=I&&H.timestamp<j),we={};for(const H of Q){const oe=new Date(H.timestamp),ue=new Date(oe);ue.setDate(ue.getDate()-ue.getDay());const pe=ue.toISOString().slice(0,10);(!we[pe]||H.timestamp>we[pe].timestamp)&&(we[pe]=H)}const Oe=Object.values(we).sort((H,oe)=>oe.timestamp-H.timestamp),Xe=w.filter(H=>H.timestamp<I),He={};for(const H of Xe){const oe=new Date(H.timestamp),ue=new Date(oe);ue.setDate(ue.getDate()-ue.getDay());const pe=ue.toISOString().slice(0,10);(!He[pe]||H.timestamp>He[pe].timestamp)&&(He[pe]=H)}const be=Object.values(He).sort((H,oe)=>oe.timestamp-H.timestamp),B=(H,oe,ue)=>H.length===0?null:u.jsx("optgroup",{label:oe,children:H.map(pe=>{const Co=w.indexOf(pe),Yr=new Date(pe.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),jo=ue?`Sett. ${Yr.split(",")[0]} — ${pe.thinkers.slice(0,3).join(", ")}${pe.thinkers.length>3?` +${pe.thinkers.length-3}`:""}`:`${Yr} — ${pe.thinkers.slice(0,3).join(", ")}${pe.thinkers.length>3?` +${pe.thinkers.length-3}`:""}`;return u.jsx("option",{value:Co,children:jo},pe.id)})},oe),ae=w[0],Me=ae?`${new Date(ae.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${ae.thinkers.slice(0,3).join(", ")}${ae.thinkers.length>3?` +${ae.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:_e.leftIdx,onChange:H=>Xt(oe=>({...oe,leftIdx:Number(H.target.value)})),children:[B(U,"Ultimi 7 giorni",!1),B(Oe,"Ultime 3 settimane",!0),B(be,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[Me," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ra;const d=w[_e.rightIdx],h=w[_e.leftIdx];if(!d||!h||_e.leftIdx===_e.rightIdx)return null;const j=d.timestamp>=h.timestamp?d:h,I=j===d?h:d;j===d?_e.rightIdx:_e.leftIdx;const U=((ra=j.conceptDiffs)==null?void 0:ra[I.id])||null,Q=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],we={DHH:["hansson","heinemeier","37signals"]},Oe=C=>{if(!C)return null;const R=C.trim().toLowerCase();if(!R)return null;for(const F of e){const W=F.name.toLowerCase();if(W===R||W.includes(R)||R.includes(W))return F;const Y=we[F.name]||[];for(const gt of Y)if(R.includes(gt)||gt.includes(R))return F}return null},Xe=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),He=C=>(C||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(R=>R.length>=4&&!Xe.has(R)),be=C=>C.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),B=C=>{const R=C.split(/\s+/);return R.length>40?R.slice(0,40).join(" ")+"...":C},ae=C=>{if(!C)return[];const R=C.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),W=(R!==-1?C.slice(0,R):C).split(/\n\n+/).map(yt=>be(yt)).filter(yt=>yt.length>120),Y=yt=>{const Gn=He(yt);if(!Gn.length||!W.length)return"";let Gr="",zo=0;for(const la of W){const tf=la.toLowerCase();let Po=0;for(const nf of Gn)tf.includes(nf)&&Po++;Po>zo&&(Gr=la,zo=Po)}return zo>0?Gr:""},gt=[],Yn=new Set,ef=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let Eo;for(;(Eo=ef.exec(C))!==null;){const yt=Eo[2].replace(/[.,;)]+$/,"");if(Yn.has(yt))continue;Yn.add(yt);const Gn=Eo[1].trim(),Gr=B(Y(Gn));gt.push({url:yt,title:Gn,snippet:Gr})}return gt},Me=C=>{const R=Oe(C);return R?ae(n[R.id]||""):[]},H=(()=>{const C=new Set,R=[];for(const F of e){C.has(F.name)||(C.add(F.name),R.push(F.name));const W=F.name.split(/\s+/);if(W.length>1){const Y=W[W.length-1];Y.length>=4&&!C.has(Y)&&(C.add(Y),R.push(Y))}}return R.sort((F,W)=>W.length-F.length)})(),oe=H.length?new RegExp(`\\b(${H.map(C=>C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,ue=C=>{if(!C||typeof C!="string"||!oe)return C;const R=[];let F=0,W;for(oe.lastIndex=0;(W=oe.exec(C))!==null;){W.index>F&&R.push(C.slice(F,W.index));const Y=W[0];R.push(u.jsx("span",{className:"concept-who-link",onClick:gt=>{gt.stopPropagation(),Gs(Y)},children:Y},R.length)),F=W.index+Y.length}return R.length===0?C:(F<C.length&&R.push(C.slice(F)),R)},pe=(C,R)=>{if(C==null)return null;if(typeof C=="string")return{title:C,detail:"",who:[],sides:[]};if(typeof C!="object")return null;if(R==="evolved"){const F=C.from??C.da??C.before??"",W=C.to??C.a??C.after??"",Y=F&&W?`${F} → ${W}`:F||W||C.detail||"";return{title:C.concept||C.title||C.name||"",detail:Y,who:C.who||[],sides:[]}}return R==="tensions"?{title:C.axis||C.concept||C.title||"",detail:C.detail||"",who:C.who||[],sides:C.sides||[]}:{title:C.concept||C.title||C.name||"",detail:C.detail||C.description||"",who:C.who||[],sides:[]}},Co=C=>C!=null&&C.length?C.slice(0,4).map((R,F)=>u.jsx("a",{className:"concept-cite",href:R.url,target:"_blank",rel:"noopener noreferrer",title:R.snippet||R.title||R.url,onClick:W=>W.stopPropagation(),children:F+1},F)):null,Yr=C=>C!=null&&C.length?u.jsx("div",{className:"concept-item-who",children:C.map((R,F)=>{const W=Me(R);return u.jsxs("span",{className:"concept-who-item",children:[F>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${R}`,onClick:Y=>{Y.stopPropagation(),Gs(R)},children:R}),W.length>0&&u.jsx("sup",{className:"concept-cites",children:Co(W)})]},F)})}):null,jo=(C,R)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",ue(C)]},R),Zd=(C,R)=>{const W=(C[R]||[]).map(Y=>pe(Y,R)).filter(Boolean);return W.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):W.map((Y,gt)=>{var Yn;return u.jsxs("div",{className:`concept-item concept-${R==="tensions"?"tension":R}`,children:[Y.title&&u.jsx("div",{className:"concept-item-title",children:ue(Y.title)}),Y.detail&&u.jsx("div",{className:"concept-item-detail",children:ue(Y.detail)}),R==="tensions"&&((Yn=Y.sides)==null?void 0:Yn.map(jo)),Yr(Y.who)]},gt)})},qd=C=>{const R=Q.find(F=>F.key===Kn)?Kn:"emerging";return Q.find(F=>F.key===R),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:Q.map(F=>{const W=(C[F.key]||[]).length,Y=F.key===R;return u.jsxs("button",{className:`concept-tab ${Y?"active":""}`,onClick:()=>ho(F.key),style:Y?{color:F.color,borderBottomColor:F.color}:void 0,children:[u.jsxs("span",{children:[F.icon," ",F.label]}),u.jsx("span",{className:"concept-tab-count",children:W})]},F.key)})}),u.jsx("div",{className:"concept-tab-body",children:Zd(C,R)})]})};return U?qd(U):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=w[_e.leftIdx],h=w[_e.rightIdx];if(!d||!h)return null;const j=Wm(d.text,h.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:xu(j,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(h.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:h.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:xu(j,"right")}})]})]})})()]})}),D==="log"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:So,disabled:Vr==="loading",children:Vr==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=j=>{if(!j)return"info";const I=j.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(I)?"error":/\b(warn|attenzione|warning)/i.test(I)?"warn":/^\s*[✓]\s/.test(j)||/\b(ok|done|complete|pushato|ready)\b/i.test(I)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(j)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(j)?"event":"info"},h=j=>{if(!j||!j.trim())return u.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const I=j.split(`
`);return u.jsx("div",{className:"log-box",children:I.map((U,Q)=>u.jsx("span",{className:`log-line log-${d(U)}`,children:U||" "},Q))})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Vr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ws.scan)]}),u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Vr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ws.launchd)]})]})})()]}),D==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",xe.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Wd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Js?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(d=>u.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:d.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:d.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),children:d.handle})," · ",d.domain]})]}),u.jsx("div",{className:`thinker-status ${i[d.id]||""}`})]},d.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:N,disabled:!0,onChange:d=>P(d.target.value),onKeyDown:d=>d.key==="Enter"&&No(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:$,disabled:!0,onChange:d=>p(d.target.value),onKeyDown:d=>d.key==="Enter"&&No(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:No,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Ce.map(d=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:d}),u.jsx("button",{className:"source-delete",onClick:()=>Qd(d),disabled:!0,children:"×"})]},d))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:ct,disabled:!0,onChange:d=>Zt(d.target.value),onKeyDown:d=>d.key==="Enter"&&Zs(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Zs,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(ge.isPlaying||ge.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:ge.isPlaying?ge.pause:ge.resume,children:ge.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:ge.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:ge.currentChapter>=0&&ge.chapters[ge.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:ge.chapters[ge.currentChapter].title})," — ",ge.currentChapter+1,"/",ge.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:ge.stop,title:"Stop",children:"⏹"})]}),Rd&&u.jsx("div",{className:"about-backdrop",onClick:()=>go(!1),children:u.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/collectibles/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsx("div",{className:"about-logo",dangerouslySetInnerHTML:{__html:tn.nameHtml}}),u.jsx("div",{className:"about-tagline",children:tn.tagline}),u.jsx("div",{className:"about-desc",children:tn.aboutDescription}),u.jsx("div",{className:"about-footer",dangerouslySetInnerHTML:{__html:tn.aboutFooter}}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>go(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/collectibles/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};Id(document.getElementById("root")).render(u.jsx(T.StrictMode,{children:u.jsx(Xm,{})}));
