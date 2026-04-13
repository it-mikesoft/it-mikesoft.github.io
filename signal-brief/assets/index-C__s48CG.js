(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Za={exports:{}},Fl={},eu={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Pd=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Id=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Td=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),Dd=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Rd=Symbol.for("react.lazy"),As=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nu=Object.assign,ru={};function $n(e,t,n){this.props=e,this.context=t,this.refs=ru,this.updater=n||tu}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lu(){}lu.prototype=$n.prototype;function Pi(e,t,n){this.props=e,this.context=t,this.refs=ru,this.updater=n||tu}var _i=Pi.prototype=new lu;_i.constructor=Pi;nu(_i,$n.prototype);_i.isPureReactComponent=!0;var Bs=Array.isArray,ou=Object.prototype.hasOwnProperty,Ii={current:null},iu={key:!0,ref:!0,__self:!0,__source:!0};function su(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)ou.call(t,r)&&!iu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Er,type:e,key:o,ref:i,props:l,_owner:Ii.current}}function $d(e,t){return{$$typeof:Er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er}function Ad(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Us=/\/+/g;function uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ad(""+e.key):t.toString(36)}function tl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Er:case zd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+uo(i,0):r,Bs(l)?(n="",e!=null&&(n=e.replace(Us,"$&/")+"/"),tl(l,t,n,"",function(d){return d})):l!=null&&(Mi(l)&&(l=$d(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Us,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Bs(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+uo(o,s);i+=tl(o,t,n,a,l)}else if(a=Fd(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+uo(o,s++),i+=tl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $r(e,t,n){if(e==null)return e;var r=[],l=0;return tl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Bd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},nl={transition:null},Ud={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Ii};function au(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!Mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=$n;$.Fragment=Pd;$.Profiler=Id;$.PureComponent=Pi;$.StrictMode=_d;$.Suspense=Dd;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ud;$.act=au;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ii.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)ou.call(t,a)&&!iu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Er,type:e.type,key:l,ref:o,props:r,_owner:i}};$.createContext=function(e){return e={$$typeof:Td,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Md,_context:e},e.Consumer=e};$.createElement=su;$.createFactory=function(e){var t=su.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Ld,render:e}};$.isValidElement=Mi;$.lazy=function(e){return{$$typeof:Rd,_payload:{_status:-1,_result:e},_init:Bd}};$.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=nl.transition;nl.transition={};try{e()}finally{nl.transition=t}};$.unstable_act=au;$.useCallback=function(e,t){return ze.current.useCallback(e,t)};$.useContext=function(e){return ze.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};$.useEffect=function(e,t){return ze.current.useEffect(e,t)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ze.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};$.useRef=function(e){return ze.current.useRef(e)};$.useState=function(e){return ze.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.3.1";eu.exports=$;var E=eu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=E,Hd=Symbol.for("react.element"),Vd=Symbol.for("react.fragment"),Wd=Object.prototype.hasOwnProperty,Qd=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kd={key:!0,ref:!0,__self:!0,__source:!0};function uu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Wd.call(t,r)&&!Kd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Hd,type:e,key:o,ref:i,props:l,_owner:Qd.current}}Fl.Fragment=Vd;Fl.jsx=uu;Fl.jsxs=uu;Za.exports=Fl;var u=Za.exports,cu={exports:{}},Ue={},du={exports:{}},fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,R){var T=z.length;z.push(R);e:for(;0<T;){var Y=T-1>>>1,V=z[Y];if(0<l(V,R))z[Y]=R,z[T]=V,T=Y;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var R=z[0],T=z.pop();if(T!==R){z[0]=T;e:for(var Y=0,V=z.length,Qt=V>>>1;Y<Qt;){var He=2*(Y+1)-1,un=z[He],Je=He+1,jt=z[Je];if(0>l(un,T))Je<V&&0>l(jt,un)?(z[Y]=jt,z[Je]=T,Y=Je):(z[Y]=un,z[He]=T,Y=He);else if(Je<V&&0>l(jt,T))z[Y]=jt,z[Je]=T,Y=Je;else break e}}return R}function l(z,R){var T=z.sortIndex-R.sortIndex;return T!==0?T:z.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],d=[],v=1,g=null,h=3,k=!1,N=!1,C=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=z)r(d),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(d)}}function x(z){if(C=!1,m(z),!N)if(n(a)!==null)N=!0,Oe(j);else{var R=n(d);R!==null&&Un(x,R.startTime-z)}}function j(z,R){N=!1,C&&(C=!1,p(D),D=-1),k=!0;var T=h;try{for(m(R),g=n(a);g!==null&&(!(g.expirationTime>R)||z&&!he());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,h=g.priorityLevel;var V=Y(g.expirationTime<=R);R=e.unstable_now(),typeof V=="function"?g.callback=V:g===n(a)&&r(a),m(R)}else r(a);g=n(a)}if(g!==null)var Qt=!0;else{var He=n(d);He!==null&&Un(x,He.startTime-R),Qt=!1}return Qt}finally{g=null,h=T,k=!1}}var S=!1,_=null,D=-1,J=5,M=-1;function he(){return!(e.unstable_now()-M<J)}function kt(){if(_!==null){var z=e.unstable_now();M=z;var R=!0;try{R=_(!0,z)}finally{R?St():(S=!1,_=null)}}else S=!1}var St;if(typeof c=="function")St=function(){c(kt)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Nt=Xe.port2;Xe.port1.onmessage=kt,St=function(){Nt.postMessage(null)}}else St=function(){F(kt,0)};function Oe(z){_=z,S||(S=!0,St())}function Un(z,R){D=F(function(){z(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||k||(N=!0,Oe(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var T=h;h=R;try{return z()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,R){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=h;h=z;try{return R()}finally{h=T}},e.unstable_scheduleCallback=function(z,R,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=T+V,z={id:v++,callback:R,priorityLevel:z,startTime:T,expirationTime:V,sortIndex:-1},T>Y?(z.sortIndex=T,t(d,z),n(a)===null&&z===n(d)&&(C?(p(D),D=-1):C=!0,Un(x,T-Y))):(z.sortIndex=V,t(a,z),N||k||(N=!0,Oe(j))),z},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(z){var R=h;return function(){var T=h;h=R;try{return z.apply(this,arguments)}finally{h=T}}}})(fu);du.exports=fu;var Gd=du.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=E,Be=Gd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pu=new Set,ur={};function sn(e,t){Mn(e,t),Mn(e+"Capture",t)}function Mn(e,t){for(ur[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ro=Object.prototype.hasOwnProperty,Xd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bs={},Hs={};function Jd(e){return Ro.call(Hs,e)?!0:Ro.call(bs,e)?!1:Xd.test(e)?Hs[e]=!0:(bs[e]=!0,!1)}function qd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zd(e,t,n,r){if(t===null||typeof t>"u"||qd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Pe(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function Li(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ti,Li);xe[t]=new Pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ti,Li);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ti,Li);xe[t]=new Pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Di(e,t,n,r){var l=xe.hasOwnProperty(t)?xe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zd(t,n,l,r)&&(n=null),r||l===null?Jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),pn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Oi=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),Ri=Symbol.for("react.forward_ref"),$o=Symbol.for("react.suspense"),Ao=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),zt=Symbol.for("react.lazy"),gu=Symbol.for("react.offscreen"),Vs=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=Vs&&e[Vs]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,co;function Xn(e){if(co===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);co=t&&t[1]||""}return`
`+co+e}var fo=!1;function po(e,t){if(!e||fo)return"";fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{fo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xn(e):""}function ef(e){switch(e.tag){case 5:return Xn(e.type);case 16:return Xn("Lazy");case 13:return Xn("Suspense");case 19:return Xn("SuspenseList");case 0:case 2:case 15:return e=po(e.type,!1),e;case 11:return e=po(e.type.render,!1),e;case 1:return e=po(e.type,!0),e;default:return""}}function Bo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case pn:return"Portal";case Fo:return"Profiler";case Oi:return"StrictMode";case $o:return"Suspense";case Ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case mu:return(e._context.displayName||"Context")+".Provider";case Ri:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fi:return t=e.displayName||null,t!==null?t:Bo(e.type)||"Memo";case zt:t=e._payload,e=e._init;try{return Bo(e(t))}catch{}}return null}function tf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bo(t);case 8:return t===Oi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nf(e){var t=yu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=nf(e))}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uo(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ws(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xu(e,t){t=t.checked,t!=null&&Di(e,"checked",t,!1)}function bo(e,t){xu(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ho(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ho(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ho(e,t,n){(t!=="number"||pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Vo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Jn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function wu(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Gs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ku(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ku(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,Su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rf=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Nu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function ju(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Nu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var lf=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(lf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function $i(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,En=null,zn=null;function Ys(e){if(e=_r(e)){if(typeof Yo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=bl(t),Yo(e.stateNode,e.type,t))}}function Cu(e){En?zn?zn.push(e):zn=[e]:En=e}function Eu(){if(En){var e=En,t=zn;if(zn=En=null,Ys(e),t)for(e=0;e<t.length;e++)Ys(t[e])}}function zu(e,t){return e(t)}function Pu(){}var mo=!1;function _u(e,t,n){if(mo)return e(t,n);mo=!0;try{return zu(e,t,n)}finally{mo=!1,(En!==null||zn!==null)&&(Pu(),Eu())}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Xo=!1;if(gt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Xo=!1}function of(e,t,n,r,l,o,i,s,a){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var tr=!1,ml=null,hl=!1,Jo=null,sf={onError:function(e){tr=!0,ml=e}};function af(e,t,n,r,l,o,i,s,a){tr=!1,ml=null,of.apply(sf,arguments)}function uf(e,t,n,r,l,o,i,s,a){if(af.apply(this,arguments),tr){if(tr){var d=ml;tr=!1,ml=null}else throw Error(w(198));hl||(hl=!0,Jo=d)}}function an(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xs(e){if(an(e)!==e)throw Error(w(188))}function cf(e){var t=e.alternate;if(!t){if(t=an(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Xs(l),e;if(o===r)return Xs(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Mu(e){return e=cf(e),e!==null?Tu(e):null}function Tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tu(e);if(t!==null)return t;e=e.sibling}return null}var Lu=Be.unstable_scheduleCallback,Js=Be.unstable_cancelCallback,df=Be.unstable_shouldYield,ff=Be.unstable_requestPaint,oe=Be.unstable_now,pf=Be.unstable_getCurrentPriorityLevel,Ai=Be.unstable_ImmediatePriority,Du=Be.unstable_UserBlockingPriority,gl=Be.unstable_NormalPriority,mf=Be.unstable_LowPriority,Ou=Be.unstable_IdlePriority,$l=null,ut=null;function hf(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot($l,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:vf,gf=Math.log,yf=Math.LN2;function vf(e){return e>>>=0,e===0?32:31-(gf(e)/yf|0)|0}var br=64,Hr=4194304;function qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=qn(s):(o&=i,o!==0&&(r=qn(o)))}else i=n&~l,i!==0?r=qn(i):o!==0&&(r=qn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-rt(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=xf(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ru(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function kf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function Bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var H=0;function Fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $u,Ui,Au,Bu,Uu,Zo=!1,Vr=[],Lt=null,Dt=null,Ot=null,fr=new Map,pr=new Map,_t=[],Sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qs(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(t.pointerId)}}function Vn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=_r(t),t!==null&&Ui(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Nf(e,t,n,r,l){switch(t){case"focusin":return Lt=Vn(Lt,e,t,n,r,l),!0;case"dragenter":return Dt=Vn(Dt,e,t,n,r,l),!0;case"mouseover":return Ot=Vn(Ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return fr.set(o,Vn(fr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,pr.set(o,Vn(pr.get(o)||null,e,t,n,r,l)),!0}return!1}function bu(e){var t=Yt(e.target);if(t!==null){var n=an(t);if(n!==null){if(t=n.tag,t===13){if(t=Iu(n),t!==null){e.blockedOn=t,Uu(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Go=r,n.target.dispatchEvent(r),Go=null}else return t=_r(n),t!==null&&Ui(t),e.blockedOn=n,!1;t.shift()}return!0}function Zs(e,t,n){rl(e)&&n.delete(t)}function jf(){Zo=!1,Lt!==null&&rl(Lt)&&(Lt=null),Dt!==null&&rl(Dt)&&(Dt=null),Ot!==null&&rl(Ot)&&(Ot=null),fr.forEach(Zs),pr.forEach(Zs)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,Zo||(Zo=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,jf)))}function mr(e){function t(l){return Wn(l,e)}if(0<Vr.length){Wn(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Wn(Lt,e),Dt!==null&&Wn(Dt,e),Ot!==null&&Wn(Ot,e),fr.forEach(t),pr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)bu(n),n.blockedOn===null&&_t.shift()}var Pn=wt.ReactCurrentBatchConfig,vl=!0;function Cf(e,t,n,r){var l=H,o=Pn.transition;Pn.transition=null;try{H=1,bi(e,t,n,r)}finally{H=l,Pn.transition=o}}function Ef(e,t,n,r){var l=H,o=Pn.transition;Pn.transition=null;try{H=4,bi(e,t,n,r)}finally{H=l,Pn.transition=o}}function bi(e,t,n,r){if(vl){var l=ei(e,t,n,r);if(l===null)Co(e,t,r,xl,n),qs(e,r);else if(Nf(l,e,t,n,r))r.stopPropagation();else if(qs(e,r),t&4&&-1<Sf.indexOf(e)){for(;l!==null;){var o=_r(l);if(o!==null&&$u(o),o=ei(e,t,n,r),o===null&&Co(e,t,r,xl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Co(e,t,r,null,n)}}var xl=null;function ei(e,t,n,r){if(xl=null,e=$i(r),e=Yt(e),e!==null)if(t=an(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Iu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xl=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pf()){case Ai:return 1;case Du:return 4;case gl:case mf:return 16;case Ou:return 536870912;default:return 16}default:return 16}}var Mt=null,Hi=null,ll=null;function Vu(){if(ll)return ll;var e,t=Hi,n=t.length,r,l="value"in Mt?Mt.value:Mt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return ll=l.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function ea(){return!1}function be(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wr:ea,this.isPropagationStopped=ea,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=be(An),Pr=ne({},An,{view:0,detail:0}),zf=be(Pr),go,yo,Qn,Al=ne({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(go=e.screenX-Qn.screenX,yo=e.screenY-Qn.screenY):yo=go=0,Qn=e),go)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),ta=be(Al),Pf=ne({},Al,{dataTransfer:0}),_f=be(Pf),If=ne({},Pr,{relatedTarget:0}),vo=be(If),Mf=ne({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),Tf=be(Mf),Lf=ne({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Df=be(Lf),Of=ne({},An,{data:0}),na=be(Of),Rf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$f[e])?!!t[e]:!1}function Wi(){return Af}var Bf=ne({},Pr,{key:function(e){if(e.key){var t=Rf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wi,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uf=be(Bf),bf=ne({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ra=be(bf),Hf=ne({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wi}),Vf=be(Hf),Wf=ne({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=be(Wf),Kf=ne({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gf=be(Kf),Yf=[9,13,27,32],Qi=gt&&"CompositionEvent"in window,nr=null;gt&&"documentMode"in document&&(nr=document.documentMode);var Xf=gt&&"TextEvent"in window&&!nr,Wu=gt&&(!Qi||nr&&8<nr&&11>=nr),la=" ",oa=!1;function Qu(e,t){switch(e){case"keyup":return Yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Jf(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:(oa=!0,la);case"textInput":return e=t.data,e===la&&oa?null:e;default:return null}}function qf(e,t){if(hn)return e==="compositionend"||!Qi&&Qu(e,t)?(e=Vu(),ll=Hi=Mt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wu&&t.locale!=="ko"?null:t.data;default:return null}}var Zf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zf[e.type]:t==="textarea"}function Gu(e,t,n,r){Cu(r),t=wl(t,"onChange"),0<t.length&&(n=new Vi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,hr=null;function ep(e){oc(e,0)}function Bl(e){var t=vn(e);if(vu(t))return e}function tp(e,t){if(e==="change")return t}var Yu=!1;if(gt){var xo;if(gt){var wo="oninput"in document;if(!wo){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),wo=typeof sa.oninput=="function"}xo=wo}else xo=!1;Yu=xo&&(!document.documentMode||9<document.documentMode)}function aa(){rr&&(rr.detachEvent("onpropertychange",Xu),hr=rr=null)}function Xu(e){if(e.propertyName==="value"&&Bl(hr)){var t=[];Gu(t,hr,e,$i(e)),_u(ep,t)}}function np(e,t,n){e==="focusin"?(aa(),rr=t,hr=n,rr.attachEvent("onpropertychange",Xu)):e==="focusout"&&aa()}function rp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(hr)}function lp(e,t){if(e==="click")return Bl(t)}function op(e,t){if(e==="input"||e==="change")return Bl(t)}function ip(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:ip;function gr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ro.call(t,l)||!ot(e[l],t[l]))return!1}return!0}function ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ca(e,t){var n=ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ua(n)}}function Ju(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ju(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(){for(var e=window,t=pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pl(e.document)}return t}function Ki(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sp(e){var t=qu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ju(n.ownerDocument.documentElement,n)){if(r!==null&&Ki(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ca(n,o);var i=ca(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ap=gt&&"documentMode"in document&&11>=document.documentMode,gn=null,ti=null,lr=null,ni=!1;function da(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||gn==null||gn!==pl(r)||(r=gn,"selectionStart"in r&&Ki(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&gr(lr,r)||(lr=r,r=wl(ti,"onSelect"),0<r.length&&(t=new Vi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},ko={},Zu={};gt&&(Zu=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Ul(e){if(ko[e])return ko[e];if(!yn[e])return e;var t=yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zu)return ko[e]=t[n];return e}var ec=Ul("animationend"),tc=Ul("animationiteration"),nc=Ul("animationstart"),rc=Ul("transitionend"),lc=new Map,fa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){lc.set(e,t),sn(t,[e])}for(var So=0;So<fa.length;So++){var No=fa[So],up=No.toLowerCase(),cp=No[0].toUpperCase()+No.slice(1);Ht(up,"on"+cp)}Ht(ec,"onAnimationEnd");Ht(tc,"onAnimationIteration");Ht(nc,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(rc,"onTransitionEnd");Mn("onMouseEnter",["mouseout","mouseover"]);Mn("onMouseLeave",["mouseout","mouseover"]);Mn("onPointerEnter",["pointerout","pointerover"]);Mn("onPointerLeave",["pointerout","pointerover"]);sn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sn("onBeforeInput",["compositionend","keypress","textInput","paste"]);sn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,uf(r,t,void 0,e),e.currentTarget=null}function oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;pa(l,s,d),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,d=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;pa(l,s,d),o=a}}}if(hl)throw e=Jo,hl=!1,Jo=null,e}function K(e,t){var n=t[si];n===void 0&&(n=t[si]=new Set);var r=e+"__bubble";n.has(r)||(ic(t,e,2,!1),n.add(r))}function jo(e,t,n){var r=0;t&&(r|=4),ic(n,e,r,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Kr]){e[Kr]=!0,pu.forEach(function(n){n!=="selectionchange"&&(dp.has(n)||jo(n,!1,e),jo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,jo("selectionchange",!1,t))}}function ic(e,t,n,r){switch(Hu(t)){case 1:var l=Cf;break;case 4:l=Ef;break;default:l=bi}n=l.bind(null,t,n,e),l=void 0,!Xo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Co(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=Yt(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}_u(function(){var d=o,v=$i(n),g=[];e:{var h=lc.get(e);if(h!==void 0){var k=Vi,N=e;switch(e){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":k=Uf;break;case"focusin":N="focus",k=vo;break;case"focusout":N="blur",k=vo;break;case"beforeblur":case"afterblur":k=vo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Vf;break;case ec:case tc:case nc:k=Tf;break;case rc:k=Qf;break;case"scroll":k=zf;break;case"wheel":k=Gf;break;case"copy":case"cut":case"paste":k=Df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ra}var C=(t&4)!==0,F=!C&&e==="scroll",p=C?h!==null?h+"Capture":null:h;C=[];for(var c=d,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=dr(c,p),x!=null&&C.push(vr(c,x,m)))),F)break;c=c.return}0<C.length&&(h=new k(h,N,null,n,v),g.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==Go&&(N=n.relatedTarget||n.fromElement)&&(Yt(N)||N[yt]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=d,N=N?Yt(N):null,N!==null&&(F=an(N),N!==F||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=d),k!==N)){if(C=ta,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(C=ra,x="onPointerLeave",p="onPointerEnter",c="pointer"),F=k==null?h:vn(k),m=N==null?h:vn(N),h=new C(x,c+"leave",k,n,v),h.target=F,h.relatedTarget=m,x=null,Yt(v)===d&&(C=new C(p,c+"enter",N,n,v),C.target=m,C.relatedTarget=F,x=C),F=x,k&&N)t:{for(C=k,p=N,c=0,m=C;m;m=fn(m))c++;for(m=0,x=p;x;x=fn(x))m++;for(;0<c-m;)C=fn(C),c--;for(;0<m-c;)p=fn(p),m--;for(;c--;){if(C===p||p!==null&&C===p.alternate)break t;C=fn(C),p=fn(p)}C=null}else C=null;k!==null&&ma(g,h,k,C,!1),N!==null&&F!==null&&ma(g,F,N,C,!0)}}e:{if(h=d?vn(d):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var j=tp;else if(ia(h))if(Yu)j=op;else{j=rp;var S=np}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=lp);if(j&&(j=j(e,d))){Gu(g,j,n,v);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Ho(h,"number",h.value)}switch(S=d?vn(d):window,e){case"focusin":(ia(S)||S.contentEditable==="true")&&(gn=S,ti=d,lr=null);break;case"focusout":lr=ti=gn=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,da(g,n,v);break;case"selectionchange":if(ap)break;case"keydown":case"keyup":da(g,n,v)}var _;if(Qi)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else hn?Qu(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Wu&&n.locale!=="ko"&&(hn||D!=="onCompositionStart"?D==="onCompositionEnd"&&hn&&(_=Vu()):(Mt=v,Hi="value"in Mt?Mt.value:Mt.textContent,hn=!0)),S=wl(d,D),0<S.length&&(D=new na(D,e,null,n,v),g.push({event:D,listeners:S}),_?D.data=_:(_=Ku(n),_!==null&&(D.data=_)))),(_=Xf?Jf(e,n):qf(e,n))&&(d=wl(d,"onBeforeInput"),0<d.length&&(v=new na("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:d}),v.data=_))}oc(g,t)})}function vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=dr(e,n),o!=null&&r.unshift(vr(e,o,l)),o=dr(e,t),o!=null&&r.push(vr(e,o,l))),e=e.return}return r}function fn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ma(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,l?(a=dr(n,o),a!=null&&i.unshift(vr(n,a,s))):l||(a=dr(n,o),a!=null&&i.push(vr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var fp=/\r\n?/g,pp=/\u0000|\uFFFD/g;function ha(e){return(typeof e=="string"?e:""+e).replace(fp,`
`).replace(pp,"")}function Gr(e,t,n){if(t=ha(t),ha(e)!==t&&n)throw Error(w(425))}function kl(){}var ri=null,li=null;function oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,mp=typeof clearTimeout=="function"?clearTimeout:void 0,ga=typeof Promise=="function"?Promise:void 0,hp=typeof queueMicrotask=="function"?queueMicrotask:typeof ga<"u"?function(e){return ga.resolve(null).then(e).catch(gp)}:ii;function gp(e){setTimeout(function(){throw e})}function Eo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);mr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),at="__reactFiber$"+Bn,xr="__reactProps$"+Bn,yt="__reactContainer$"+Bn,si="__reactEvents$"+Bn,yp="__reactListeners$"+Bn,vp="__reactHandles$"+Bn;function Yt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ya(e);e!==null;){if(n=e[at])return n;e=ya(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[at]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function bl(e){return e[xr]||null}var ai=[],xn=-1;function Vt(e){return{current:e}}function G(e){0>xn||(e.current=ai[xn],ai[xn]=null,xn--)}function Q(e,t){xn++,ai[xn]=e.current,e.current=t}var bt={},je=Vt(bt),Te=Vt(!1),tn=bt;function Tn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function Sl(){G(Te),G(je)}function va(e,t,n){if(je.current!==bt)throw Error(w(168));Q(je,t),Q(Te,n)}function sc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,tf(e)||"Unknown",l));return ne({},n,r)}function Nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,tn=je.current,Q(je,e),Q(Te,Te.current),!0}function xa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=sc(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(je),Q(je,e)):G(Te),Q(Te,n)}var ft=null,Hl=!1,zo=!1;function ac(e){ft===null?ft=[e]:ft.push(e)}function xp(e){Hl=!0,ac(e)}function Wt(){if(!zo&&ft!==null){zo=!0;var e=0,t=H;try{var n=ft;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,Hl=!1}catch(l){throw ft!==null&&(ft=ft.slice(e+1)),Lu(Ai,Wt),l}finally{H=t,zo=!1}}return null}var wn=[],kn=0,jl=null,Cl=0,Ve=[],We=0,nn=null,pt=1,mt="";function Kt(e,t){wn[kn++]=Cl,wn[kn++]=jl,jl=e,Cl=t}function uc(e,t,n){Ve[We++]=pt,Ve[We++]=mt,Ve[We++]=nn,nn=e;var r=pt;e=mt;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var o=32-rt(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,pt=1<<32-rt(t)+l|n<<l|r,mt=o+e}else pt=1<<o|n<<l|r,mt=e}function Gi(e){e.return!==null&&(Kt(e,1),uc(e,1,0))}function Yi(e){for(;e===jl;)jl=wn[--kn],wn[kn]=null,Cl=wn[--kn],wn[kn]=null;for(;e===nn;)nn=Ve[--We],Ve[We]=null,mt=Ve[--We],Ve[We]=null,pt=Ve[--We],Ve[We]=null}var Ae=null,$e=null,X=!1,nt=null;function cc(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function wa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ae=e,$e=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ae=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:pt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ae=e,$e=null,!0):!1;default:return!1}}function ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ci(e){if(X){var t=$e;if(t){var n=t;if(!wa(e,t)){if(ui(e))throw Error(w(418));t=Rt(n.nextSibling);var r=Ae;t&&wa(e,t)?cc(r,n):(e.flags=e.flags&-4097|2,X=!1,Ae=e)}}else{if(ui(e))throw Error(w(418));e.flags=e.flags&-4097|2,X=!1,Ae=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Yr(e){if(e!==Ae)return!1;if(!X)return ka(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oi(e.type,e.memoizedProps)),t&&(t=$e)){if(ui(e))throw dc(),Error(w(418));for(;t;)cc(e,t),t=Rt(t.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ae?Rt(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=$e;e;)e=Rt(e.nextSibling)}function Ln(){$e=Ae=null,X=!1}function Xi(e){nt===null?nt=[e]:nt.push(e)}var wp=wt.ReactCurrentBatchConfig;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sa(e){var t=e._init;return t(e._payload)}function fc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Bt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Do(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var j=m.type;return j===mn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===zt&&Sa(j)===c.type)?(x=l(c,m.props),x.ref=Kn(p,c,m),x.return=p,x):(x=fl(m.type,m.key,m.props,null,p.mode,x),x.ref=Kn(p,c,m),x.return=p,x)}function d(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Oo(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,j){return c===null||c.tag!==7?(c=en(m,p.mode,x,j),c.return=p,c):(c=l(c,m),c.return=p,c)}function g(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Do(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ar:return m=fl(c.type,c.key,c.props,null,p.mode,m),m.ref=Kn(p,null,c),m.return=p,m;case pn:return c=Oo(c,p.mode,m),c.return=p,c;case zt:var x=c._init;return g(p,x(c._payload),m)}if(Jn(c)||bn(c))return c=en(c,p.mode,m,null),c.return=p,c;Xr(p,c)}return null}function h(p,c,m,x){var j=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ar:return m.key===j?a(p,c,m,x):null;case pn:return m.key===j?d(p,c,m,x):null;case zt:return j=m._init,h(p,c,j(m._payload),x)}if(Jn(m)||bn(m))return j!==null?null:v(p,c,m,x,null);Xr(p,m)}return null}function k(p,c,m,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ar:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,j);case pn:return p=p.get(x.key===null?m:x.key)||null,d(c,p,x,j);case zt:var S=x._init;return k(p,c,m,S(x._payload),j)}if(Jn(x)||bn(x))return p=p.get(m)||null,v(c,p,x,j,null);Xr(c,x)}return null}function N(p,c,m,x){for(var j=null,S=null,_=c,D=c=0,J=null;_!==null&&D<m.length;D++){_.index>D?(J=_,_=null):J=_.sibling;var M=h(p,_,m[D],x);if(M===null){_===null&&(_=J);break}e&&_&&M.alternate===null&&t(p,_),c=o(M,c,D),S===null?j=M:S.sibling=M,S=M,_=J}if(D===m.length)return n(p,_),X&&Kt(p,D),j;if(_===null){for(;D<m.length;D++)_=g(p,m[D],x),_!==null&&(c=o(_,c,D),S===null?j=_:S.sibling=_,S=_);return X&&Kt(p,D),j}for(_=r(p,_);D<m.length;D++)J=k(_,p,D,m[D],x),J!==null&&(e&&J.alternate!==null&&_.delete(J.key===null?D:J.key),c=o(J,c,D),S===null?j=J:S.sibling=J,S=J);return e&&_.forEach(function(he){return t(p,he)}),X&&Kt(p,D),j}function C(p,c,m,x){var j=bn(m);if(typeof j!="function")throw Error(w(150));if(m=j.call(m),m==null)throw Error(w(151));for(var S=j=null,_=c,D=c=0,J=null,M=m.next();_!==null&&!M.done;D++,M=m.next()){_.index>D?(J=_,_=null):J=_.sibling;var he=h(p,_,M.value,x);if(he===null){_===null&&(_=J);break}e&&_&&he.alternate===null&&t(p,_),c=o(he,c,D),S===null?j=he:S.sibling=he,S=he,_=J}if(M.done)return n(p,_),X&&Kt(p,D),j;if(_===null){for(;!M.done;D++,M=m.next())M=g(p,M.value,x),M!==null&&(c=o(M,c,D),S===null?j=M:S.sibling=M,S=M);return X&&Kt(p,D),j}for(_=r(p,_);!M.done;D++,M=m.next())M=k(_,p,D,M.value,x),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?D:M.key),c=o(M,c,D),S===null?j=M:S.sibling=M,S=M);return e&&_.forEach(function(kt){return t(p,kt)}),X&&Kt(p,D),j}function F(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===mn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ar:e:{for(var j=m.key,S=c;S!==null;){if(S.key===j){if(j=m.type,j===mn){if(S.tag===7){n(p,S.sibling),c=l(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===zt&&Sa(j)===S.type){n(p,S.sibling),c=l(S,m.props),c.ref=Kn(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===mn?(c=en(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=fl(m.type,m.key,m.props,null,p.mode,x),x.ref=Kn(p,c,m),x.return=p,p=x)}return i(p);case pn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=Oo(m,p.mode,x),c.return=p,p=c}return i(p);case zt:return S=m._init,F(p,c,S(m._payload),x)}if(Jn(m))return N(p,c,m,x);if(bn(m))return C(p,c,m,x);Xr(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=Do(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return F}var Dn=fc(!0),pc=fc(!1),El=Vt(null),zl=null,Sn=null,Ji=null;function qi(){Ji=Sn=zl=null}function Zi(e){var t=El.current;G(El),e._currentValue=t}function di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){zl=e,Ji=Sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Ji!==e)if(e={context:e,memoizedValue:t,next:null},Sn===null){if(zl===null)throw Error(w(308));Sn=e,zl.dependencies={lanes:0,firstContext:e}}else Sn=Sn.next=e;return t}var Xt=null;function es(e){Xt===null?Xt=[e]:Xt.push(e)}function mc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,es(t)):(n.next=l.next,l.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,vt(e,n)}return l=r.interleaved,l===null?(t.next=t,es(r)):(t.next=l.next,l.next=t),r.interleaved=t,vt(e,n)}function il(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}function Na(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pl(e,t,n,r){var l=e.updateQueue;Pt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,d=a.next;a.next=null,i===null?o=d:i.next=d,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=d:s.next=d,v.lastBaseUpdate=a))}if(o!==null){var g=l.baseState;i=0,v=d=a=null,s=o;do{var h=s.lane,k=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var N=e,C=s;switch(h=t,k=n,C.tag){case 1:if(N=C.payload,typeof N=="function"){g=N.call(k,g,h);break e}g=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=C.payload,h=typeof N=="function"?N.call(k,g,h):N,h==null)break e;g=ne({},g,h);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(d=v=k,a=g):v=v.next=k,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(a=g),l.baseState=a,l.firstBaseUpdate=d,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);ln|=i,e.lanes=i,e.memoizedState=g}}function ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Ir={},ct=Vt(Ir),wr=Vt(Ir),kr=Vt(Ir);function Jt(e){if(e===Ir)throw Error(w(174));return e}function ns(e,t){switch(Q(kr,t),Q(wr,e),Q(ct,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wo(t,e)}G(ct),Q(ct,t)}function On(){G(ct),G(wr),G(kr)}function gc(e){Jt(kr.current);var t=Jt(ct.current),n=Wo(t,e.type);t!==n&&(Q(wr,e),Q(ct,n))}function rs(e){wr.current===e&&(G(ct),G(wr))}var ee=Vt(0);function _l(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Po=[];function ls(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var sl=wt.ReactCurrentDispatcher,_o=wt.ReactCurrentBatchConfig,rn=0,te=null,ae=null,pe=null,Il=!1,or=!1,Sr=0,kp=0;function ke(){throw Error(w(321))}function os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function is(e,t,n,r,l,o){if(rn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sl.current=e===null||e.memoizedState===null?Cp:Ep,e=n(r,l),or){o=0;do{if(or=!1,Sr=0,25<=o)throw Error(w(301));o+=1,pe=ae=null,t.updateQueue=null,sl.current=zp,e=n(r,l)}while(or)}if(sl.current=Ml,t=ae!==null&&ae.next!==null,rn=0,pe=ae=te=null,Il=!1,t)throw Error(w(300));return e}function ss(){var e=Sr!==0;return Sr=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function Ye(){if(ae===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,ae=e;else{if(e===null)throw Error(w(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function Nr(e,t){return typeof t=="function"?t(e):t}function Io(e){var t=Ye(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ae,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,d=o;do{var v=d.lane;if((rn&v)===v)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=g,i=r):a=a.next=g,te.lanes|=v,ln|=v}d=d.next}while(d!==null&&d!==o);a===null?i=r:a.next=s,ot(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,te.lanes|=o,ln|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ot(o,t.memoizedState)||(Me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yc(){}function vc(e,t){var n=te,r=Ye(),l=t(),o=!ot(r.memoizedState,l);if(o&&(r.memoizedState=l,Me=!0),r=r.queue,as(kc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,jr(9,wc.bind(null,n,r,l,t),void 0,null),me===null)throw Error(w(349));rn&30||xc(n,t,l)}return l}function xc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wc(e,t,n,r){t.value=n,t.getSnapshot=r,Sc(t)&&Nc(e)}function kc(e,t,n){return n(function(){Sc(t)&&Nc(e)})}function Sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Nc(e){var t=vt(e,1);t!==null&&lt(t,e,1,-1)}function Ca(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=jp.bind(null,te,e),[t.memoizedState,e]}function jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jc(){return Ye().memoizedState}function al(e,t,n,r){var l=st();te.flags|=e,l.memoizedState=jr(1|t,n,void 0,r===void 0?null:r)}function Vl(e,t,n,r){var l=Ye();r=r===void 0?null:r;var o=void 0;if(ae!==null){var i=ae.memoizedState;if(o=i.destroy,r!==null&&os(r,i.deps)){l.memoizedState=jr(t,n,o,r);return}}te.flags|=e,l.memoizedState=jr(1|t,n,o,r)}function Ea(e,t){return al(8390656,8,e,t)}function as(e,t){return Vl(2048,8,e,t)}function Cc(e,t){return Vl(4,2,e,t)}function Ec(e,t){return Vl(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,n){return n=n!=null?n.concat([e]):null,Vl(4,4,zc.bind(null,t,e),n)}function us(){}function _c(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ic(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mc(e,t,n){return rn&21?(ot(n,t)||(n=Ru(),te.lanes|=n,ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function Sp(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=_o.transition;_o.transition={};try{e(!1),t()}finally{H=n,_o.transition=r}}function Tc(){return Ye().memoizedState}function Np(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(e))Dc(t,n);else if(n=mc(e,t,n,r),n!==null){var l=Ee();lt(n,e,r,l),Oc(n,t,r)}}function jp(e,t,n){var r=At(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))Dc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ot(s,i)){var a=t.interleaved;a===null?(l.next=l,es(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=mc(e,t,l,r),n!==null&&(l=Ee(),lt(n,e,r,l),Oc(n,t,r))}}function Lc(e){var t=e.alternate;return e===te||t!==null&&t===te}function Dc(e,t){or=Il=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Oc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bi(e,n)}}var Ml={readContext:Ge,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},Cp={readContext:Ge,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Ea,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,al(4194308,4,zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Np.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Ca,useDebugValue:us,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Ca(!1),t=e[0];return e=Sp.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,l=st();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),me===null)throw Error(w(349));rn&30||xc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ea(kc.bind(null,r,o,e),[e]),r.flags|=2048,jr(9,wc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=st(),t=me.identifierPrefix;if(X){var n=mt,r=pt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ep={readContext:Ge,useCallback:_c,useContext:Ge,useEffect:as,useImperativeHandle:Pc,useInsertionEffect:Cc,useLayoutEffect:Ec,useMemo:Ic,useReducer:Io,useRef:jc,useState:function(){return Io(Nr)},useDebugValue:us,useDeferredValue:function(e){var t=Ye();return Mc(t,ae.memoizedState,e)},useTransition:function(){var e=Io(Nr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:vc,useId:Tc,unstable_isNewReconciler:!1},zp={readContext:Ge,useCallback:_c,useContext:Ge,useEffect:as,useImperativeHandle:Pc,useInsertionEffect:Cc,useLayoutEffect:Ec,useMemo:Ic,useReducer:Mo,useRef:jc,useState:function(){return Mo(Nr)},useDebugValue:us,useDeferredValue:function(e){var t=Ye();return ae===null?t.memoizedState=e:Mc(t,ae.memoizedState,e)},useTransition:function(){var e=Mo(Nr)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:vc,useId:Tc,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wl={isMounted:function(e){return(e=e._reactInternals)?an(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),l=At(e),o=ht(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,l),t!==null&&(lt(t,e,l,r),il(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),l=At(e),o=ht(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,l),t!==null&&(lt(t,e,l,r),il(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=At(e),l=ht(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ft(e,l,r),t!==null&&(lt(t,e,r,n),il(t,e,r))}};function za(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!gr(n,r)||!gr(l,o):!0}function Rc(e,t,n){var r=!1,l=bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(l=Le(t)?tn:je.current,r=t.contextTypes,o=(r=r!=null)?Tn(e,l):bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wl.enqueueReplaceState(t,t.state,null)}function pi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ts(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ge(o):(o=Le(t)?tn:je.current,l.context=Tn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Wl.enqueueReplaceState(l,l.state,null),Pl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Rn(e,t){try{var n="",r=t;do n+=ef(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function To(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pp=typeof WeakMap=="function"?WeakMap:Map;function Fc(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ll||(Ll=!0,ji=r),mi(e,t)},n}function $c(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){mi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){mi(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function _a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=bp.bind(null,e,t,n),t.then(e,e))}function Ia(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ma(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var _p=wt.ReactCurrentOwner,Me=!1;function Ce(e,t,n,r){t.child=e===null?pc(t,null,n,r):Dn(t,e.child,n,r)}function Ta(e,t,n,r,l){n=n.render;var o=t.ref;return _n(t,l),r=is(e,t,n,r,o,l),n=ss(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,xt(e,t,l)):(X&&n&&Gi(t),t.flags|=1,Ce(e,t,r,l),t.child)}function La(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!ys(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ac(e,t,o,r,l)):(e=fl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:gr,n(i,r)&&e.ref===t.ref)return xt(e,t,l)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(gr(o,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,xt(e,t,l)}return hi(e,t,n,r,l)}function Bc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(jn,Fe),Fe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(jn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(jn,Fe),Fe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(jn,Fe),Fe|=r;return Ce(e,t,l,n),t.child}function Uc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hi(e,t,n,r,l){var o=Le(n)?tn:je.current;return o=Tn(t,o),_n(t,l),n=is(e,t,n,r,o,l),r=ss(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,xt(e,t,l)):(X&&r&&Gi(t),t.flags|=1,Ce(e,t,n,l),t.child)}function Da(e,t,n,r,l){if(Le(n)){var o=!0;Nl(t)}else o=!1;if(_n(t,l),t.stateNode===null)ul(e,t),Rc(t,n,r),pi(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Le(n)?tn:je.current,d=Tn(t,d));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Pa(t,i,r,d),Pt=!1;var h=t.memoizedState;i.state=h,Pl(t,r,i,l),a=t.memoizedState,s!==r||h!==a||Te.current||Pt?(typeof v=="function"&&(fi(t,n,v,r),a=t.memoizedState),(s=Pt||za(t,n,s,r,h,a,d))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=d,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,hc(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:et(t.type,s),i.props=d,g=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Le(n)?tn:je.current,a=Tn(t,a));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==g||h!==a)&&Pa(t,i,r,a),Pt=!1,h=t.memoizedState,i.state=h,Pl(t,r,i,l);var N=t.memoizedState;s!==g||h!==N||Te.current||Pt?(typeof k=="function"&&(fi(t,n,k,r),N=t.memoizedState),(d=Pt||za(t,n,d,r,h,N,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=d):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return gi(e,t,n,r,o,l)}function gi(e,t,n,r,l,o){Uc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&xa(t,n,!1),xt(e,t,o);r=t.stateNode,_p.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Dn(t,e.child,null,o),t.child=Dn(t,null,s,o)):Ce(e,t,s,o),t.memoizedState=r.state,l&&xa(t,n,!0),t.child}function bc(e){var t=e.stateNode;t.pendingContext?va(e,t.pendingContext,t.pendingContext!==t.context):t.context&&va(e,t.context,!1),ns(e,t.containerInfo)}function Oa(e,t,n,r,l){return Ln(),Xi(l),t.flags|=256,Ce(e,t,n,r),t.child}var yi={dehydrated:null,treeContext:null,retryLane:0};function vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,t,n){var r=t.pendingProps,l=ee.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Q(ee,l&1),e===null)return ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Gl(i,r,0,null),e=en(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vi(n),t.memoizedState=yi,e):cs(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return Ip(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Bt(s,o):(o=en(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?vi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=yi,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cs(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&Xi(r),Dn(t,e.child,null,n),e=cs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=To(Error(w(422))),Jr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Gl({mode:"visible",children:r.children},l,0,null),o=en(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Dn(t,e.child,null,i),t.child.memoizedState=vi(i),t.memoizedState=yi,o);if(!(t.mode&1))return Jr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=To(o,r,void 0),Jr(e,t,i,r)}if(s=(i&e.childLanes)!==0,Me||s){if(r=me,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,vt(e,l),lt(r,e,l,-1))}return gs(),r=To(Error(w(421))),Jr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Hp.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,$e=Rt(l.nextSibling),Ae=t,X=!0,nt=null,e!==null&&(Ve[We++]=pt,Ve[We++]=mt,Ve[We++]=nn,pt=e.id,mt=e.overflow,nn=t),t=cs(t,r.children),t.flags|=4096,t)}function Ra(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),di(e.return,t,n)}function Lo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Vc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ra(e,n,t);else if(e.tag===19)Ra(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(ee,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&_l(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Lo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&_l(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Lo(t,!0,n,null,o);break;case"together":Lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ul(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mp(e,t,n){switch(t.tag){case 3:bc(t),Ln();break;case 5:gc(t);break;case 1:Le(t.type)&&Nl(t);break;case 4:ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Q(El,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Hc(e,t,n):(Q(ee,ee.current&1),e=xt(e,t,n),e!==null?e.sibling:null);Q(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Q(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Bc(e,t,n)}return xt(e,t,n)}var Wc,xi,Qc,Kc;Wc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};Qc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Jt(ct.current);var o=null;switch(n){case"input":l=Uo(e,l),r=Uo(e,r),o=[];break;case"select":l=ne({},l,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":l=Vo(e,l),r=Vo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kl)}Qo(n,r);var i;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ur.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var a=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(d,n)),n=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ur.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&K("scroll",e),o||s===a||(o=[])):(o=o||[]).push(d,a))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tp(e,t,n){var r=t.pendingProps;switch(Yi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Le(t.type)&&Sl(),Se(t),null;case 3:return r=t.stateNode,On(),G(Te),G(je),ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(zi(nt),nt=null))),xi(e,t),Se(t),null;case 5:rs(t);var l=Jt(kr.current);if(n=t.type,e!==null&&t.stateNode!=null)Qc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return Se(t),null}if(e=Jt(ct.current),Yr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[at]=t,r[xr]=o,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(l=0;l<Zn.length;l++)K(Zn[l],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Ws(r,o),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},K("invalid",r);break;case"textarea":Ks(r,o),K("invalid",r)}Qo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Gr(r.textContent,s,e),l=["children",""+s]):ur.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&K("scroll",r)}switch(n){case"input":Br(r),Qs(r,o,!0);break;case"textarea":Br(r),Gs(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=kl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ku(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[at]=t,e[xr]=r,Wc(e,t,!1,!1),t.stateNode=e;e:{switch(i=Ko(n,r),n){case"dialog":K("cancel",e),K("close",e),l=r;break;case"iframe":case"object":case"embed":K("load",e),l=r;break;case"video":case"audio":for(l=0;l<Zn.length;l++)K(Zn[l],e);l=r;break;case"source":K("error",e),l=r;break;case"img":case"image":case"link":K("error",e),K("load",e),l=r;break;case"details":K("toggle",e),l=r;break;case"input":Ws(e,r),l=Uo(e,r),K("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ne({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ks(e,r),l=Vo(e,r),K("invalid",e);break;default:l=r}Qo(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?ju(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Su(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&cr(e,a):typeof a=="number"&&cr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ur.hasOwnProperty(o)?a!=null&&o==="onScroll"&&K("scroll",e):a!=null&&Di(e,o,a,i))}switch(n){case"input":Br(e),Qs(e,r,!1);break;case"textarea":Br(e),Gs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)Kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Jt(kr.current),Jt(ct.current),Yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(o=r.nodeValue!==n)&&(e=Ae,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return Se(t),null;case 13:if(G(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&$e!==null&&t.mode&1&&!(t.flags&128))dc(),Ln(),t.flags|=98560,o=!1;else if(o=Yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[at]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else nt!==null&&(zi(nt),nt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):gs())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return On(),xi(e,t),e===null&&yr(t.stateNode.containerInfo),Se(t),null;case 10:return Zi(t.type._context),Se(t),null;case 17:return Le(t.type)&&Sl(),Se(t),null;case 19:if(G(ee),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)Gn(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=_l(e),i!==null){for(t.flags|=128,Gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Fn&&(t.flags|=128,r=!0,Gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=_l(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!X)return Se(t),null}else 2*oe()-o.renderingStartTime>Fn&&n!==1073741824&&(t.flags|=128,r=!0,Gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=ee.current,Q(ee,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return hs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Lp(e,t){switch(Yi(t),t.tag){case 1:return Le(t.type)&&Sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),G(Te),G(je),ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rs(t),null;case 13:if(G(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(ee),null;case 4:return On(),null;case 10:return Zi(t.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var qr=!1,Ne=!1,Dp=typeof WeakSet=="function"?WeakSet:Set,I=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function wi(e,t,n){try{n()}catch(r){le(e,t,r)}}var Fa=!1;function Op(e,t){if(ri=vl,e=qu(),Ki(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,d=0,v=0,g=e,h=null;t:for(;;){for(var k;g!==n||l!==0&&g.nodeType!==3||(s=i+l),g!==o||r!==0&&g.nodeType!==3||(a=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++d===l&&(s=i),h===o&&++v===r&&(a=i),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(li={focusedElem:e,selectionRange:n},vl=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var C=N.memoizedProps,F=N.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:et(t.type,C),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return N=Fa,Fa=!1,N}function ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&wi(t,n,o)}l=l.next}while(l!==r)}}function Ql(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gc(e){var t=e.alternate;t!==null&&(e.alternate=null,Gc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[xr],delete t[si],delete t[yp],delete t[vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yc(e){return e.tag===5||e.tag===3||e.tag===4}function $a(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kl));else if(r!==4&&(e=e.child,e!==null))for(Si(e,t,n),e=e.sibling;e!==null;)Si(e,t,n),e=e.sibling}function Ni(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ni(e,t,n),e=e.sibling;e!==null;)Ni(e,t,n),e=e.sibling}var ye=null,tt=!1;function Et(e,t,n){for(n=n.child;n!==null;)Xc(e,t,n),n=n.sibling}function Xc(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Ne||Nn(n,t);case 6:var r=ye,l=tt;ye=null,Et(e,t,n),ye=r,tt=l,ye!==null&&(tt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(tt?(e=ye,n=n.stateNode,e.nodeType===8?Eo(e.parentNode,n):e.nodeType===1&&Eo(e,n),mr(e)):Eo(ye,n.stateNode));break;case 4:r=ye,l=tt,ye=n.stateNode.containerInfo,tt=!0,Et(e,t,n),ye=r,tt=l;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&wi(n,t,i),l=l.next}while(l!==r)}Et(e,t,n);break;case 1:if(!Ne&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){le(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Et(e,t,n),Ne=r):Et(e,t,n);break;default:Et(e,t,n)}}function Aa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dp),t.forEach(function(r){var l=Vp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,tt=!1;break e;case 3:ye=s.stateNode.containerInfo,tt=!0;break e;case 4:ye=s.stateNode.containerInfo,tt=!0;break e}s=s.return}if(ye===null)throw Error(w(160));Xc(o,i,l),ye=null,tt=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(d){le(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jc(t,e),t=t.sibling}function Jc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),it(e),r&4){try{ir(3,e,e.return),Ql(3,e)}catch(C){le(e,e.return,C)}try{ir(5,e,e.return)}catch(C){le(e,e.return,C)}}break;case 1:Ze(t,e),it(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(Ze(t,e),it(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var l=e.stateNode;try{cr(l,"")}catch(C){le(e,e.return,C)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&xu(l,o),Ko(s,i);var d=Ko(s,o);for(i=0;i<a.length;i+=2){var v=a[i],g=a[i+1];v==="style"?ju(l,g):v==="dangerouslySetInnerHTML"?Su(l,g):v==="children"?cr(l,g):Di(l,v,g,d)}switch(s){case"input":bo(l,o);break;case"textarea":wu(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Cn(l,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?Cn(l,!!o.multiple,o.defaultValue,!0):Cn(l,!!o.multiple,o.multiple?[]:"",!1))}l[xr]=o}catch(C){le(e,e.return,C)}}break;case 6:if(Ze(t,e),it(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(C){le(e,e.return,C)}}break;case 3:if(Ze(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(C){le(e,e.return,C)}break;case 4:Ze(t,e),it(e);break;case 13:Ze(t,e),it(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ps=oe())),r&4&&Aa(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(d=Ne)||v,Ze(t,e),Ne=d):Ze(t,e),it(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(I=e,v=e.child;v!==null;){for(g=I=v;I!==null;){switch(h=I,k=h.child,h.tag){case 0:case 11:case 14:case 15:ir(4,h,h.return);break;case 1:Nn(h,h.return);var N=h.stateNode;if(typeof N.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(C){le(r,n,C)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){Ua(g);continue}}k!==null?(k.return=h,I=k):Ua(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,a=g.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Nu("display",i))}catch(C){le(e,e.return,C)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(C){le(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(t,e),it(e),r&4&&Aa(e);break;case 21:break;default:Ze(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(cr(l,""),r.flags&=-33);var o=$a(e);Ni(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=$a(e);Si(e,s,i);break;default:throw Error(w(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rp(e,t,n){I=e,qc(e)}function qc(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||qr;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ne;s=qr;var d=Ne;if(qr=i,(Ne=a)&&!d)for(I=l;I!==null;)i=I,a=i.child,i.tag===22&&i.memoizedState!==null?ba(l):a!==null?(a.return=i,I=a):ba(l);for(;o!==null;)I=o,qc(o),o=o.sibling;I=l,qr=s,Ne=d}Ba(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,I=o):Ba(e)}}function Ba(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||Ql(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ja(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ja(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&mr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ne||t.flags&512&&ki(t)}catch(h){le(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ua(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function ba(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ql(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){le(t,l,a)}}var o=t.return;try{ki(t)}catch(a){le(t,o,a)}break;case 5:var i=t.return;try{ki(t)}catch(a){le(t,i,a)}}}catch(a){le(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var Fp=Math.ceil,Tl=wt.ReactCurrentDispatcher,ds=wt.ReactCurrentOwner,Ke=wt.ReactCurrentBatchConfig,U=0,me=null,ie=null,ve=0,Fe=0,jn=Vt(0),ue=0,Cr=null,ln=0,Kl=0,fs=0,sr=null,Ie=null,ps=0,Fn=1/0,dt=null,Ll=!1,ji=null,$t=null,Zr=!1,Tt=null,Dl=0,ar=0,Ci=null,cl=-1,dl=0;function Ee(){return U&6?oe():cl!==-1?cl:cl=oe()}function At(e){return e.mode&1?U&2&&ve!==0?ve&-ve:wp.transition!==null?(dl===0&&(dl=Ru()),dl):(e=H,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function lt(e,t,n,r){if(50<ar)throw ar=0,Ci=null,Error(w(185));zr(e,n,r),(!(U&2)||e!==me)&&(e===me&&(!(U&2)&&(Kl|=n),ue===4&&It(e,ve)),De(e,r),n===1&&U===0&&!(t.mode&1)&&(Fn=oe()+500,Hl&&Wt()))}function De(e,t){var n=e.callbackNode;wf(e,t);var r=yl(e,e===me?ve:0);if(r===0)n!==null&&Js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Js(n),t===1)e.tag===0?xp(Ha.bind(null,e)):ac(Ha.bind(null,e)),hp(function(){!(U&6)&&Wt()}),n=null;else{switch(Fu(r)){case 1:n=Ai;break;case 4:n=Du;break;case 16:n=gl;break;case 536870912:n=Ou;break;default:n=gl}n=id(n,Zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zc(e,t){if(cl=-1,dl=0,U&6)throw Error(w(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=yl(e,e===me?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ol(e,r);else{t=r;var l=U;U|=2;var o=td();(me!==e||ve!==t)&&(dt=null,Fn=oe()+500,Zt(e,t));do try{Bp();break}catch(s){ed(e,s)}while(!0);qi(),Tl.current=o,U=l,ie!==null?t=0:(me=null,ve=0,t=ue)}if(t!==0){if(t===2&&(l=qo(e),l!==0&&(r=l,t=Ei(e,l))),t===1)throw n=Cr,Zt(e,0),It(e,r),De(e,oe()),n;if(t===6)It(e,r);else{if(l=e.current.alternate,!(r&30)&&!$p(l)&&(t=Ol(e,r),t===2&&(o=qo(e),o!==0&&(r=o,t=Ei(e,o))),t===1))throw n=Cr,Zt(e,0),It(e,r),De(e,oe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Gt(e,Ie,dt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=ps+500-oe(),10<t)){if(yl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ii(Gt.bind(null,e,Ie,dt),t);break}Gt(e,Ie,dt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-rt(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fp(r/1960))-r,10<r){e.timeoutHandle=ii(Gt.bind(null,e,Ie,dt),r);break}Gt(e,Ie,dt);break;case 5:Gt(e,Ie,dt);break;default:throw Error(w(329))}}}return De(e,oe()),e.callbackNode===n?Zc.bind(null,e):null}function Ei(e,t){var n=sr;return e.current.memoizedState.isDehydrated&&(Zt(e,t).flags|=256),e=Ol(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&zi(t)),e}function zi(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function $p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ot(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~fs,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function Ha(e){if(U&6)throw Error(w(327));In();var t=yl(e,0);if(!(t&1))return De(e,oe()),null;var n=Ol(e,t);if(e.tag!==0&&n===2){var r=qo(e);r!==0&&(t=r,n=Ei(e,r))}if(n===1)throw n=Cr,Zt(e,0),It(e,t),De(e,oe()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gt(e,Ie,dt),De(e,oe()),null}function ms(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Fn=oe()+500,Hl&&Wt())}}function on(e){Tt!==null&&Tt.tag===0&&!(U&6)&&In();var t=U;U|=1;var n=Ke.transition,r=H;try{if(Ke.transition=null,H=1,e)return e()}finally{H=r,Ke.transition=n,U=t,!(U&6)&&Wt()}}function hs(){Fe=jn.current,G(jn)}function Zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mp(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Yi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:On(),G(Te),G(je),ls();break;case 5:rs(r);break;case 4:On();break;case 13:G(ee);break;case 19:G(ee);break;case 10:Zi(r.type._context);break;case 22:case 23:hs()}n=n.return}if(me=e,ie=e=Bt(e.current,null),ve=Fe=t,ue=0,Cr=null,fs=Kl=ln=0,Ie=sr=null,Xt!==null){for(t=0;t<Xt.length;t++)if(n=Xt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Xt=null}return e}function ed(e,t){do{var n=ie;try{if(qi(),sl.current=Ml,Il){for(var r=te.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Il=!1}if(rn=0,pe=ae=te=null,or=!1,Sr=0,ds.current=null,n===null||n.return===null){ue=1,Cr=t,ie=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=ve,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,v=s,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Ia(i);if(k!==null){k.flags&=-257,Ma(k,i,s,o,t),k.mode&1&&_a(o,d,t),t=k,a=d;var N=t.updateQueue;if(N===null){var C=new Set;C.add(a),t.updateQueue=C}else N.add(a);break e}else{if(!(t&1)){_a(o,d,t),gs();break e}a=Error(w(426))}}else if(X&&s.mode&1){var F=Ia(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ma(F,i,s,o,t),Xi(Rn(a,s));break e}}o=a=Rn(a,s),ue!==4&&(ue=2),sr===null?sr=[o]:sr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Fc(o,a,t);Na(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&($t===null||!$t.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=$c(o,s,t);Na(o,x);break e}}o=o.return}while(o!==null)}rd(n)}catch(j){t=j,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function td(){var e=Tl.current;return Tl.current=Ml,e===null?Ml:e}function gs(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(ln&268435455)&&!(Kl&268435455)||It(me,ve)}function Ol(e,t){var n=U;U|=2;var r=td();(me!==e||ve!==t)&&(dt=null,Zt(e,t));do try{Ap();break}catch(l){ed(e,l)}while(!0);if(qi(),U=n,Tl.current=r,ie!==null)throw Error(w(261));return me=null,ve=0,ue}function Ap(){for(;ie!==null;)nd(ie)}function Bp(){for(;ie!==null&&!df();)nd(ie)}function nd(e){var t=od(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?rd(e):ie=t,ds.current=null}function rd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Lp(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}else if(n=Tp(n,t,Fe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ue===0&&(ue=5)}function Gt(e,t,n){var r=H,l=Ke.transition;try{Ke.transition=null,H=1,Up(e,t,n,r)}finally{Ke.transition=l,H=r}return null}function Up(e,t,n,r){do In();while(Tt!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(kf(e,o),e===me&&(ie=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zr||(Zr=!0,id(gl,function(){return In(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var i=H;H=1;var s=U;U|=4,ds.current=null,Op(e,n),Jc(n,e),sp(li),vl=!!ri,li=ri=null,e.current=n,Rp(n),ff(),U=s,H=i,Ke.transition=o}else e.current=n;if(Zr&&(Zr=!1,Tt=e,Dl=l),o=e.pendingLanes,o===0&&($t=null),hf(n.stateNode),De(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ll)throw Ll=!1,e=ji,ji=null,e;return Dl&1&&e.tag!==0&&In(),o=e.pendingLanes,o&1?e===Ci?ar++:(ar=0,Ci=e):ar=0,Wt(),null}function In(){if(Tt!==null){var e=Fu(Dl),t=Ke.transition,n=H;try{if(Ke.transition=null,H=16>e?16:e,Tt===null)var r=!1;else{if(e=Tt,Tt=null,Dl=0,U&6)throw Error(w(331));var l=U;for(U|=4,I=e.current;I!==null;){var o=I,i=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(I=d;I!==null;){var v=I;switch(v.tag){case 0:case 11:case 15:ir(8,v,o)}var g=v.child;if(g!==null)g.return=v,I=g;else for(;I!==null;){v=I;var h=v.sibling,k=v.return;if(Gc(v),v===d){I=null;break}if(h!==null){h.return=k,I=h;break}I=k}}}var N=o.alternate;if(N!==null){var C=N.child;if(C!==null){N.child=null;do{var F=C.sibling;C.sibling=null,C=F}while(C!==null)}}I=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,I=i;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ir(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){i=I;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,I=m;else e:for(i=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ql(9,s)}}catch(j){le(s,s.return,j)}if(s===i){I=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,I=x;break e}I=s.return}}if(U=l,Wt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot($l,e)}catch{}r=!0}return r}finally{H=n,Ke.transition=t}}return!1}function Va(e,t,n){t=Rn(n,t),t=Fc(e,t,1),e=Ft(e,t,1),t=Ee(),e!==null&&(zr(e,1,t),De(e,t))}function le(e,t,n){if(e.tag===3)Va(e,e,n);else for(;t!==null;){if(t.tag===3){Va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Rn(n,e),e=$c(t,e,1),t=Ft(t,e,1),e=Ee(),t!==null&&(zr(t,1,e),De(t,e));break}}t=t.return}}function bp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>oe()-ps?Zt(e,0):fs|=n),De(e,t)}function ld(e,t){t===0&&(e.mode&1?(t=Hr,Hr<<=1,!(Hr&130023424)&&(Hr=4194304)):t=1);var n=Ee();e=vt(e,t),e!==null&&(zr(e,t,n),De(e,n))}function Hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ld(e,n)}function Vp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),ld(e,n)}var od;od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Mp(e,t,n);Me=!!(e.flags&131072)}else Me=!1,X&&t.flags&1048576&&uc(t,Cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ul(e,t),e=t.pendingProps;var l=Tn(t,je.current);_n(t,n),l=is(null,t,r,e,l,n);var o=ss();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,Nl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ts(t),l.updater=Wl,t.stateNode=l,l._reactInternals=t,pi(t,r,e,n),t=gi(null,t,r,!0,o,n)):(t.tag=0,X&&o&&Gi(t),Ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ul(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Qp(r),e=et(r,e),l){case 0:t=hi(null,t,r,e,n);break e;case 1:t=Da(null,t,r,e,n);break e;case 11:t=Ta(null,t,r,e,n);break e;case 14:t=La(null,t,r,et(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),hi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),Da(e,t,r,l,n);case 3:e:{if(bc(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,hc(e,t),Pl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Rn(Error(w(423)),t),t=Oa(e,t,r,n,l);break e}else if(r!==l){l=Rn(Error(w(424)),t),t=Oa(e,t,r,n,l);break e}else for($e=Rt(t.stateNode.containerInfo.firstChild),Ae=t,X=!0,nt=null,n=pc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===l){t=xt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return gc(t),e===null&&ci(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,oi(r,l)?i=null:o!==null&&oi(r,o)&&(t.flags|=32),Uc(e,t),Ce(e,t,i,n),t.child;case 6:return e===null&&ci(t),null;case 13:return Hc(e,t,n);case 4:return ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dn(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),Ta(e,t,r,l,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,Q(El,r._currentValue),r._currentValue=i,o!==null)if(ot(o.value,i)){if(o.children===l.children&&!Te.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=ht(-1,n&-n),a.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?a.next=a:(a.next=v.next,v.next=a),d.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),di(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),di(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,_n(t,n),l=Ge(l),r=r(l),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,l=et(r,t.pendingProps),l=et(r.type,l),La(e,t,r,l,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:et(r,l),ul(e,t),t.tag=1,Le(r)?(e=!0,Nl(t)):e=!1,_n(t,n),Rc(t,r,l),pi(t,r,l,n),gi(null,t,r,!0,e,n);case 19:return Vc(e,t,n);case 22:return Bc(e,t,n)}throw Error(w(156,t.tag))};function id(e,t){return Lu(e,t)}function Wp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Wp(e,t,n,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qp(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ri)return 11;if(e===Fi)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")ys(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case mn:return en(n.children,l,o,t);case Oi:i=8,l|=8;break;case Fo:return e=Qe(12,n,t,l|2),e.elementType=Fo,e.lanes=o,e;case $o:return e=Qe(13,n,t,l),e.elementType=$o,e.lanes=o,e;case Ao:return e=Qe(19,n,t,l),e.elementType=Ao,e.lanes=o,e;case gu:return Gl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case mu:i=10;break e;case hu:i=9;break e;case Ri:i=11;break e;case Fi:i=14;break e;case zt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Qe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function en(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=gu,e.lanes=n,e.stateNode={isHidden:!1},e}function Do(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Oo(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ho(0),this.expirationTimes=ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function vs(e,t,n,r,l,o,i,s,a){return e=new Kp(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ts(o),e}function Gp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sd(e){if(!e)return bt;e=e._reactInternals;e:{if(an(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Le(n))return sc(e,n,t)}return t}function ad(e,t,n,r,l,o,i,s,a){return e=vs(n,r,!0,e,l,o,i,s,a),e.context=sd(null),n=e.current,r=Ee(),l=At(n),o=ht(r,l),o.callback=t??null,Ft(n,o,l),e.current.lanes=l,zr(e,l,r),De(e,r),e}function Yl(e,t,n,r){var l=t.current,o=Ee(),i=At(l);return n=sd(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(l,t,i),e!==null&&(lt(e,l,i,o),il(e,l,i)),i}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xs(e,t){Wa(e,t),(e=e.alternate)&&Wa(e,t)}function Yp(){return null}var ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}Xl.prototype.render=ws.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Yl(e,t,null,null)};Xl.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;on(function(){Yl(null,e,null,null)}),t[yt]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&bu(e)}};function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qa(){}function Xp(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=Rl(i);o.call(d)}}var i=ad(t,r,e,0,null,!1,!1,"",Qa);return e._reactRootContainer=i,e[yt]=i.current,yr(e.nodeType===8?e.parentNode:e),on(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=Rl(a);s.call(d)}}var a=vs(e,0,!1,null,null,!1,!1,"",Qa);return e._reactRootContainer=a,e[yt]=a.current,yr(e.nodeType===8?e.parentNode:e),on(function(){Yl(t,a,n,r)}),a}function ql(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Rl(i);s.call(a)}}Yl(t,i,e,l)}else i=Xp(n,t,e,l,r);return Rl(i)}$u=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qn(t.pendingLanes);n!==0&&(Bi(t,n|1),De(t,oe()),!(U&6)&&(Fn=oe()+500,Wt()))}break;case 13:on(function(){var r=vt(e,1);if(r!==null){var l=Ee();lt(r,e,1,l)}}),xs(e,1)}};Ui=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Ee();lt(t,e,134217728,n)}xs(e,134217728)}};Au=function(e){if(e.tag===13){var t=At(e),n=vt(e,t);if(n!==null){var r=Ee();lt(n,e,t,r)}xs(e,t)}};Bu=function(){return H};Uu=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Yo=function(e,t,n){switch(t){case"input":if(bo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bl(r);if(!l)throw Error(w(90));vu(r),bo(r,l)}}}break;case"textarea":wu(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};zu=ms;Pu=on;var Jp={usingClientEntryPoint:!1,Events:[_r,vn,bl,Cu,Eu,ms]},Yn={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mu(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{$l=el.inject(qp),ut=el}catch{}}Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jp;Ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ks(t))throw Error(w(200));return Gp(e,t,null,n)};Ue.createRoot=function(e,t){if(!ks(e))throw Error(w(299));var n=!1,r="",l=ud;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=vs(e,1,!1,null,null,n,!1,r,l),e[yt]=t.current,yr(e.nodeType===8?e.parentNode:e),new ws(t)};Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Mu(t),e=e===null?null:e.stateNode,e};Ue.flushSync=function(e){return on(e)};Ue.hydrate=function(e,t,n){if(!Jl(t))throw Error(w(200));return ql(null,e,t,!0,n)};Ue.hydrateRoot=function(e,t,n){if(!ks(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=ud;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ad(t,null,e,1,n??null,l,!1,o,i),e[yt]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Xl(t)};Ue.render=function(e,t,n){if(!Jl(t))throw Error(w(200));return ql(null,e,t,!1,n)};Ue.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(w(40));return e._reactRootContainer?(on(function(){ql(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ue.unstable_batchedUpdates=ms;Ue.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return ql(e,t,n,!1,r)};Ue.version="18.3.1-next-f1338f8080-20240426";function cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd)}catch(e){console.error(e)}}cd(),cu.exports=Ue;var Zp=cu.exports,dd,Ka=Zp;dd=Ka.createRoot,Ka.hydrateRoot;const Zl="/claude",em="https://stelle-972218119922.europe-west1.run.app/api",fd=em;function tm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function nm(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`,n=await fetch(Zl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})}),r=await n.json();if(!n.ok)throw new Error(r.error||"Claude CLI error");return r.text||"Nessun contenuto estratto."}async function Ga(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`,r=await fetch(Zl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");return l.text||"Nessun contenuto estratto."}async function rm(e,t,n){const r=e.map(v=>`### ${v.name}
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

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,i=await fetch(Zl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:o})}),s=await i.json();if(!i.ok)throw new Error(s.error||"Claude CLI error");const d=(s.text||"").trim().match(/\[[\s\S]*\]/);if(!d)throw new Error("Formato risposta non valido");return JSON.parse(d[0])}async function lm(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

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
- In italiano`,r=await fetch(Zl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})}),l=await r.json();if(!r.ok)throw new Error(l.error||"Claude CLI error");const i=(l.text||"").trim().match(/\{[\s\S]*\}/);if(!i)throw new Error("Formato risposta non valido");return JSON.parse(i[0])}let Ya=!1;async function om(){if(Ya)return;if(!(await fetch(`${fd}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");Ya=!0}async function im(e,t,n){await om();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${fd}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:d}=await o.read();if(a)break;s+=i.decode(d,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let g="";for(const h of v)if(h.startsWith("event: "))g=h.slice(7).trim();else if(h.startsWith("data: ")&&g){try{const k=JSON.parse(h.slice(6));n(g,k)}catch{}g=""}}}function qt(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function sm(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function am(e,t){if(!e)return"";if(!t)return qt(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>sm(o,a)>.7),s=qt(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function um(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const Xa="​‌",Ja="‌​";function cm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let g=1;g<=l;g++)for(let h=1;h<=o;h++)i[g][h]=n[g-1]===r[h-1]?i[g-1][h-1]+1:Math.max(i[g-1][h],i[g][h-1]);const s=[];let a=l,d=o;for(;a>0||d>0;)a>0&&d>0&&n[a-1]===r[d-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,d--):d>0&&(a===0||i[a][d-1]>=i[a-1][d])?(s.unshift({type:"added",text:r[d-1]}),d--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const g of s)v.length>0&&v[v.length-1].type===g.type?v[v.length-1].text+=g.text:v.push({...g});return v}function qa(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=Xa+s.text+Ja:l+=s.text);let o=qt(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${Xa}(.*?)${Ja}`,"gs"),`<span class="${i}">$1</span>`),o}function dm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function fm(){const[e,t]=E.useState(!1),[n,r]=E.useState(-1),[l,o]=E.useState([]),i=E.useRef([]),s=E.useRef(null),a=E.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),d=E.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=E.useCallback((F,p=0)=>{speechSynthesis.cancel(),i.current=F.slice(p),o(F);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=F.indexOf(m);r(x);const j=`${m.title}. ${dm(m.text)}`,S=new SpeechSynthesisUtterance(j);S.lang="it-IT",S.rate=1;const _=a();_&&(S.voice=_),S.onend=c,S.onerror=c,s.current=S,speechSynthesis.speak(S)};t(!0),c()},[a]),g=E.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=E.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),k=E.useCallback(()=>{speechSynthesis.cancel()},[]),N=E.useCallback((F,p,c,m)=>{const x=[];F&&x.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const j of c)p[j.id]&&!p[j.id].startsWith("Errore")&&x.push({title:j.name,text:p[j.id],type:"thinker"});if(m&&m.length>0){const j=m.map(S=>{var _;return`${S.name}: ${S.description}${(_=S.citedBy)!=null&&_.length?`. Citato da ${S.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:j,type:"projects"})}v(x)},[v]),C=E.useCallback((F,p)=>{v([{title:F,text:p,type:"single"}])},[v]);return E.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:N,playSingle:C,pause:g,resume:h,stop:d,skipForward:k}}const pm=[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / Meta",active:!0},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Pratical AI",active:!0},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0}],mm=["trendshift.io","GitHub Trending","Hacker News"],hm=`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
`,gm=`
  ${hm}

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
`;function ym(){const[e,t]=E.useState(pm),[n,r]=E.useState({}),[l,o]=E.useState({}),[i,s]=E.useState({}),[a,d]=E.useState(null),[v,g]=E.useState("idle"),[h,k]=E.useState(!1),[N,C]=E.useState(""),[F,p]=E.useState(""),[c,m]=E.useState(null),[x,j]=E.useState(null),[S,_]=E.useState(8),[D,J]=E.useState(!1),[M,he]=E.useState([]),[kt,St]=E.useState(null),[Xe,Nt]=E.useState("signals"),[Oe,Un]=E.useState({leftIdx:1,rightIdx:0}),[z,R]=E.useState("emerging"),[T,Y]=E.useState([]),[V,Qt]=E.useState([]),[He,un]=E.useState(null),[Je,jt]=E.useState("idle"),[Ct,eo]=E.useState(mm),[Ss,Ns]=E.useState(""),[pd,to]=E.useState(!1),[js,md]=E.useState(!1),[cn,hd]=E.useState(""),[Mr,Cs]=E.useState([]),[Tr,no]=E.useState("idle"),[Lr,ro]=E.useState(null),[Es,zs]=E.useState(null),[vm,xm]=E.useState("idle"),lo=E.useRef(null),ce=fm(),[gd,yd]=E.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),de=e.filter(f=>f.active),dn=Object.values(i).filter(f=>f==="done").length,oo=de.length;E.useEffect(()=>{(async()=>{try{const f=await window.storage.get("signal-state");if(f){const y=JSON.parse(f.value);if(y.results){r(y.results);const P={};for(const L of Object.keys(y.results))P[L]=y.results[L].startsWith("Errore")?"error":"done";s(P)}if(y.prevResults&&o(y.prevResults),y.lastScanTime&&m(y.lastScanTime),y.intervalHours&&_(y.intervalHours),y.synthesis&&(d(y.synthesis),g("done")),y.synthesisHistory){const P=y.synthesisHistory.map((L,q,re)=>{if(L.conceptDiff&&!L.conceptDiffs){const fe=re[q+1],{conceptDiff:qe,...Re}=L;return fe?{...Re,conceptDiffs:{[fe.id]:qe}}:Re}return L});he(P)}y.projects&&Y(y.projects),y.prevProjects&&Qt(y.prevProjects),y.projectsTime&&un(y.projectsTime),y.projectSources&&eo(y.projectSources)}}catch{}})()},[]);const we=E.useCallback(async(f={})=>{try{const y=await window.storage.get("signal-state"),L={...y?JSON.parse(y.value):{},...f};await window.storage.set("signal-state",JSON.stringify(L))}catch{}},[]);E.useCallback(async(f={})=>{await we({results:n,prevResults:l,lastScanTime:c,intervalHours:S,synthesis:a,synthesisHistory:M,projects:T,prevProjects:V,projectsTime:He,projectSources:Ct,...f})},[n,l,c,S,a,M,T,V,He,Ct,we]);const Dr=E.useCallback((f,y)=>y.length>0&&y[0].text===f?y:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:f,thinkers:de.map(L=>L.name),conceptDiffs:{}},...y].slice(0,50),[de]),Or=E.useCallback(async f=>{var L;if(f.length<2)return f;const y=f[0],P=f[1];if((L=y.conceptDiffs)!=null&&L[P.id])return f;try{const q=await lm(P.text,y.text),re=[...f];return re[0]={...re[0],conceptDiffs:{...re[0].conceptDiffs||{},[P.id]:q}},he(re),await we({synthesisHistory:re}),re}catch(q){return console.error("[concept-diff auto]",q),f}},[we]),Ps=E.useCallback(async(f,y)=>{try{await navigator.clipboard.writeText(f)}catch{const P=document.createElement("textarea");P.value=f,document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P)}St(y),setTimeout(()=>St(null),2e3)},[]);E.useCallback(async f=>{const y=M.filter(P=>P.id!==f);he(y),await we({synthesisHistory:y})},[M,we]),E.useEffect(()=>{const f=()=>{if(!c){j(null);return}const L=c+S*3600*1e3-Date.now();if(L<=0){j("ora");return}const q=Math.floor(L/36e5),re=Math.floor(L%36e5/6e4),fe=Math.floor(L%6e4/1e3);j(`${q}h ${re}m ${fe}s`)};f();const y=setInterval(f,1e3);return()=>clearInterval(y)},[c,S]);const io=E.useRef(null),_s=E.useRef(null);E.useEffect(()=>{const f=setInterval(()=>{const y=new Date,P=y.getHours(),L=`${y.toDateString()}-${P}`;(P===5||P===17)&&_s.current!==L&&io.current&&!h&&(_s.current=L,io.current(!0))},6e4);return()=>clearInterval(f)},[h]);const Is=E.useCallback(f=>{if(!f)return;const y=f.trim().toLowerCase();if(!y)return;const P=e.find(L=>{const q=L.name.toLowerCase();return q===y||q.includes(y)||y.includes(q)});P&&(Nt("signals"),J(!1),setTimeout(()=>{const L=document.getElementById(`thinker-${P.id}`);L&&(L.scrollIntoView({behavior:"smooth",block:"start"}),L.classList.add("thinker-card-highlight"),setTimeout(()=>L.classList.remove("thinker-card-highlight"),1800))},60))},[e]),vd=(f,y)=>{if(!f||!y)return 0;const P=new Set(f.toLowerCase().split(/\s+/)),L=new Set(y.toLowerCase().split(/\s+/));return[...P].filter(re=>L.has(re)).length/Math.max(P.size,L.size)},Ms=f=>!l[f]||!n[f]?!1:vd(l[f],n[f])<.72;de.filter(f=>i[f.id]==="done"&&Ms(f.id)).length;const Ts=e.length>0&&e.every(f=>f.active),xd=()=>{h||t(f=>f.map(y=>({...y,active:!Ts})))},so=()=>{N.trim()&&(t(f=>[...f,{id:Date.now(),name:N.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),C(""),p(""))},Ls=()=>{const f=Ss.trim();if(!f||Ct.includes(f))return;const y=[...Ct,f];eo(y),Ns(""),we({projectSources:y})},wd=f=>{const y=Ct.filter(P=>P!==f);eo(y),we({projectSources:y})},[kd,Ds]=E.useState(null),Rr=E.useCallback(async(f,y)=>{jt("loading"),Ds(null);try{const P=await rm(y,f,Ct);Qt(T),Y(P);const L=Date.now();un(L),jt("done"),await we({projects:P,prevProjects:T,projectsTime:L})}catch(P){console.error("[Signal.Brief] fetchProjects error:",P),jt("error"),Ds(P.message)}},[Ct,we,T]),Os=2*3600*1e3,Fr=E.useCallback(async(f=!1)=>{if(de.length===0)return;if(!f&&c&&Date.now()-c<Os){const A=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${A} minuti fa. Cache valida per ancora ${Math.round((Os-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}Nt("signals"),k(!0),d(null),g("idle"),o(A=>({...A,...n}));const y={...n},P={};de.forEach(A=>{P[A.id]="loading"}),s(P),r({});const L={},q=2,re=A=>new Promise(se=>setTimeout(se,A));for(let A=0;A<de.length;A+=q){const se=de.slice(A,A+q);await Promise.all(se.map(async W=>{try{const b=await nm(W);L[W.id]=b,r(B=>({...B,[W.id]:b})),s(B=>({...B,[W.id]:"done"}))}catch(b){L[W.id]=`Errore: ${b.message}`,r(B=>({...B,[W.id]:`Errore: ${b.message}`})),s(B=>({...B,[W.id]:"error"}))}})),A+q<de.length&&await re(1200)}const fe=tm(L),qe=fe?Date.now():c;fe&&(m(qe),yd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await we({results:L,prevResults:y,lastScanTime:qe,intervalHours:S,synthesis:a,synthesisHistory:M}),k(!1);const Re=de.filter(A=>L[A.id]&&!L[A.id].startsWith("Errore")).map(A=>({name:A.name,domain:A.domain,content:L[A.id]}));if(Re.length>=2){g("loading");try{const A=await Ga(Re);d(A),g("done");const se=Dr(A,M);he(se),await we({results:L,prevResults:y,lastScanTime:qe,intervalHours:S,synthesis:A,synthesisHistory:se}),Or(se),Rr(A,Re)}catch{g("error")}}},[de,n,S,we,a,M,Dr,c,Rr,Or]);E.useEffect(()=>{io.current=Fr},[Fr]);const Sd=E.useCallback(async()=>{const f=de.filter(y=>i[y.id]==="done").map(y=>({name:y.name,domain:y.domain,content:n[y.id]}));if(!(f.length<2)){g("loading");try{const y=await Ga(f);d(y),g("done");const P=Dr(y,M);he(P),await we({synthesis:y,synthesisHistory:P}),Or(P),Rr(y,f)}catch(y){d(`Errore nella sintesi: ${y.message}`),g("error")}}},[de,i,n,we,M,Dr,Rr,Or]),Rs=E.useCallback(async()=>{if(cn.trim()){Cs([]),ro(null),zs(null),no("loading");try{await im(cn,a,(f,y)=>{if(f==="session_started"&&y.session_id&&zs(y.session_id),f==="sage_speaks"&&y.content&&Cs(P=>[...P,{name:y.persona_name,icon:y.persona_icon,color:y.persona_color,content:y.content}]),f==="moderator_synthesis"&&y.content&&ro(y.content),f==="moderator"){const P=y.content||y.decision||y.synthesis||"";P&&ro(P)}}),no("done")}catch(f){console.error("[council]",f),no("error")}}},[cn,a]),Nd=dn>=2&&!h&&v!=="loading",Fs=Object.keys(n).length>0,ao="Disponibile solo in locale (richiede Claude CLI)",jd=de.filter(f=>i[f.id]?D?i[f.id]==="done"&&Ms(f.id):!0:!1);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:gm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>to(!0),children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"tagline",children:"Intelligence Dashboard · AI-Powered"})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",gd]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Sd,disabled:!Nd||!0,title:ao,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!lo.current){const y=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);y.onerror=()=>{y.src="/signal-brief/podcast/episodes/2026-04-12.mp3",y.play()},lo.current=y}const f=lo.current;f.paused?f.play():f.pause()},title:"Ascolta podcast",children:"🎙 Podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Fr(!0),disabled:h||de.length===0||!0,title:ao,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Fr(!1),disabled:h||de.length===0||!0,title:ao,children:h?`Scanning ${dn}/${oo}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${Xe==="signals"?"active":""}`,onClick:()=>Nt("signals"),children:["Segnali",dn>0&&u.jsx("span",{className:"tab-badge",children:dn})]}),u.jsxs("button",{className:`tab-btn ${Xe==="projects"?"active":""}`,onClick:()=>Nt("projects"),children:["Progetti",T.length>0&&u.jsx("span",{className:"tab-badge",children:T.length})]}),u.jsxs("button",{className:`tab-btn ${Xe==="history"?"active":""}`,onClick:()=>Nt("history"),children:["Cronologia",M.length>0&&u.jsx("span",{className:"tab-badge",children:M.length})]}),u.jsx("button",{className:`tab-btn ${Xe==="config"?"active":""}`,onClick:()=>Nt("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[Xe==="signals"&&u.jsxs(u.Fragment,{children:[h&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${oo>0?dn/oo*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&M.length>0&&u.jsx("span",{className:"timestamp",children:new Date(M[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>ce.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>md(f=>!f),title:"Chiedi ai thinkers",style:js?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Ps(a,"synth"),children:kt==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:um(M.length>1?am(a,M[1].text):qt(a),de)}}),js&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Es?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Es}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:cn,onChange:f=>hd(f.target.value),onKeyDown:f=>f.key==="Enter"&&Rs(),disabled:Tr==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:Rs,disabled:Tr==="loading"||!cn.trim(),children:Tr==="loading"?"In deliberazione…":"Chiedi"})]}),Mr.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Mr.map((f,y)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:f.color},children:[f.icon," ",f.name]}),u.jsx("div",{children:f.content})]},y))}),Lr&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const f=Mr.map(y=>`${y.name}: ${y.content}`).join(`

`)+`

Sintesi: `+Lr;ce.playSingle("Deliberazione",f)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const f=`Domanda: ${cn}

`+Mr.map(y=>`${y.icon} ${y.name}:
${y.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Lr}`;Ps(f,"council")},children:kt==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:qt(Lr)}})]}),Tr==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),Fs&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",dn," acquisiti"]})}),!Fs&&!h?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:jd.map(f=>{const y=i[f.id];return u.jsxs("div",{id:`thinker-${f.id}`,className:`card ${y}`,children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[f.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",children:f.handle})]}),u.jsx("div",{className:"card-domain",children:f.domain})]}),y==="done"&&u.jsx("button",{className:"btn-listen",onClick:()=>ce.playSingle(f.name,n[f.id]),title:"Ascolta",children:"🔊"}),y==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),y==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),y==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"})]}),u.jsxs("div",{className:"card-body",children:[y==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),y==="done"&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:qt(n[f.id])}}),y==="error"&&u.jsx("div",{className:"card-error",children:n[f.id]})]})]},f.id)})})]}),Xe==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",T.length>0&&` · ${T.length} trovati`]})}),Je==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),Je==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",kd||"errore sconosciuto"]}),T.length===0&&Je!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),T.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),He&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(He).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),T.some(f=>f.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),V.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),T.map((f,y)=>{const P=f.maturity!=null&&f.momentum!=null,L=Math.ceil(Math.sqrt(T.length)),q=Math.floor(y/L),re=y%L,fe=P?f.maturity:2+re/Math.max(L-1,1)*7,qe=P?f.momentum:8-q/Math.max(Math.ceil(T.length/L)-1,1)*7,Re=50+(fe-1)/9*420,A=370-(qe-1)/9*360,se=V.length>0&&!V.some(b=>b.name===f.name),W=se?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:Re,cy:A,r:se?6:5,fill:W,opacity:"0.85",stroke:se?"#fca5a5":"none",strokeWidth:se?2:0,onClick:()=>window.open(f.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:Re+9,y:A+3,style:{fontSize:f.name.length>18?"8px":"9px",fill:se?"#dc2626":"#374151",fontWeight:se?600:400},children:f.name.length>22?f.name.slice(0,20)+"…":f.name})]},y)})]})]}),T.length>0&&u.jsx("div",{className:"projects-grid",children:T.map((f,y)=>u.jsxs("div",{className:"project-card",style:V.length>0&&!V.some(P=>P.name===f.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",children:f.name}),V.length>0&&!V.some(P=>P.name===f.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[f.source&&u.jsx("span",{className:"project-source",children:f.source}),f.maturity&&f.momentum&&u.jsxs("span",{className:"project-source",children:["M:",f.maturity," · P:",f.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:f.description}),u.jsxs("div",{className:"project-footer",children:[f.citedBy&&f.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",f.citedBy.join(", ")]}),f.themes&&f.themes.length>0&&u.jsx("div",{className:"project-themes",children:f.themes.map((P,L)=>u.jsx("span",{className:"project-theme",children:P},L))})]})]},y))})]}),Xe==="history"&&u.jsx(u.Fragment,{children:M.length<2?u.jsxs("div",{className:"history-empty",children:[M.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",M.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(M[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:qt(M[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const f=Date.now(),y=864e5,P=f-7*y,L=f-21*y,q=M.filter(O=>O.timestamp>=P),re=M.filter(O=>O.timestamp>=L&&O.timestamp<P),fe={};for(const O of re){const Z=new Date(O.timestamp),_e=new Date(Z);_e.setDate(_e.getDate()-_e.getDay());const ge=_e.toISOString().slice(0,10);(!fe[ge]||O.timestamp>fe[ge].timestamp)&&(fe[ge]=O)}const qe=Object.values(fe).sort((O,Z)=>Z.timestamp-O.timestamp),Re=M.filter(O=>O.timestamp<L),A={};for(const O of Re){const Z=new Date(O.timestamp),_e=new Date(Z);_e.setDate(_e.getDate()-_e.getDay());const ge=_e.toISOString().slice(0,10);(!A[ge]||O.timestamp>A[ge].timestamp)&&(A[ge]=O)}const se=Object.values(A).sort((O,Z)=>Z.timestamp-O.timestamp),W=(O,Z,_e)=>O.length===0?null:u.jsx("optgroup",{label:Z,children:O.map(ge=>{const Cd=M.indexOf(ge),$s=new Date(ge.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),Ed=_e?`Sett. ${$s.split(",")[0]} — ${ge.thinkers.slice(0,3).join(", ")}${ge.thinkers.length>3?` +${ge.thinkers.length-3}`:""}`:`${$s} — ${ge.thinkers.slice(0,3).join(", ")}${ge.thinkers.length>3?` +${ge.thinkers.length-3}`:""}`;return u.jsx("option",{value:Cd,children:Ed},ge.id)})},Z),b=M[0],B=b?`${new Date(b.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${b.thinkers.slice(0,3).join(", ")}${b.thinkers.length>3?` +${b.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Oe.leftIdx,onChange:O=>Un(Z=>({...Z,leftIdx:Number(O.target.value)})),children:[W(q,"Ultimi 7 giorni",!1),W(qe,"Ultime 3 settimane",!0),W(se,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[B," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var se;const f=M[Oe.rightIdx],y=M[Oe.leftIdx];if(!f||!y||Oe.leftIdx===Oe.rightIdx)return null;const P=f.timestamp>=y.timestamp?f:y,L=P===f?y:f;P===f?Oe.rightIdx:Oe.leftIdx;const q=((se=P.conceptDiffs)==null?void 0:se[L.id])||null,re=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],fe=W=>W!=null&&W.length?u.jsx("div",{className:"concept-item-who",children:W.map((b,B)=>u.jsxs("span",{children:[B>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${b}`,onClick:O=>{O.stopPropagation(),Is(b)},children:b})]},B))}):null,qe=(W,b)=>{const B=typeof W=="string"?W.match(/^([^:–—-]+?)\s*[:–—-]\s*(.+)$/):null;return B?u.jsxs("div",{className:"concept-item-detail",children:["• ",u.jsx("span",{className:"concept-who-link",onClick:O=>{O.stopPropagation(),Is(B[1])},children:B[1]}),": ",B[2]]},b):u.jsxs("div",{className:"concept-item-detail",children:["• ",W]},b)},Re=(W,b)=>{const B=W[b]||[];return B.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):b==="emerging"||b==="disappeared"?B.map((O,Z)=>u.jsxs("div",{className:`concept-item concept-${b}`,children:[u.jsx("div",{className:"concept-item-title",children:O.concept}),u.jsx("div",{className:"concept-item-detail",children:O.detail}),fe(O.who)]},Z)):b==="evolved"?B.map((O,Z)=>u.jsxs("div",{className:"concept-item concept-evolved",children:[u.jsx("div",{className:"concept-item-title",children:O.concept}),u.jsxs("div",{className:"concept-item-detail",children:[O.from," → ",O.to]}),fe(O.who)]},Z)):b==="stable"?B.map((O,Z)=>u.jsxs("div",{className:"concept-item concept-stable",children:[u.jsx("div",{className:"concept-item-title",children:O.concept}),fe(O.who)]},Z)):B.map((O,Z)=>{var _e;return u.jsxs("div",{className:"concept-item concept-tension",children:[u.jsx("div",{className:"concept-item-title",children:O.axis}),(_e=O.sides)==null?void 0:_e.map(qe)]},Z)})},A=W=>{const b=re.find(B=>B.key===z)?z:"emerging";return re.find(B=>B.key===b),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:re.map(B=>{const O=(W[B.key]||[]).length,Z=B.key===b;return u.jsxs("button",{className:`concept-tab ${Z?"active":""}`,onClick:()=>R(B.key),style:Z?{color:B.color,borderBottomColor:B.color}:void 0,children:[u.jsxs("span",{children:[B.icon," ",B.label]}),u.jsx("span",{className:"concept-tab-count",children:O})]},B.key)})}),u.jsx("div",{className:"concept-tab-body",children:Re(W,b)})]})};return q?A(q):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const f=M[Oe.leftIdx],y=M[Oe.rightIdx];if(!f||!y)return null;const P=cm(f.text,y.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(f.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:f.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:qa(P,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(y.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:y.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:qa(P,"right")}})]})]})})()]})}),Xe==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",de.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:xd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Ts?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(f=>u.jsxs("div",{className:`thinker-row ${f.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:f.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:f.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${f.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:y=>y.stopPropagation(),children:f.handle})," · ",f.domain]})]}),u.jsx("div",{className:`thinker-status ${i[f.id]||""}`})]},f.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:N,disabled:!0,onChange:f=>C(f.target.value),onKeyDown:f=>f.key==="Enter"&&so(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:f=>p(f.target.value),onKeyDown:f=>f.key==="Enter"&&so(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:so,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(f=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:S===f?"#eff6ff":"",color:S===f?"#2563eb":"",borderColor:S===f?"#bfdbfe":""},onClick:()=>{_(f),we({intervalHours:f})},children:[f,"h"]},f)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Ct.map(f=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:f}),u.jsx("button",{className:"source-delete",onClick:()=>wd(f),disabled:!0,children:"×"})]},f))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Ss,disabled:!0,onChange:f=>Ns(f.target.value),onKeyDown:f=>f.key==="Enter"&&Ls(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Ls,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(ce.isPlaying||ce.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:ce.isPlaying?ce.pause:ce.resume,children:ce.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:ce.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:ce.currentChapter>=0&&ce.chapters[ce.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:ce.chapters[ce.currentChapter].title})," — ",ce.currentChapter+1,"/",ce.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:ce.stop,title:"Stop",children:"⏹"})]}),pd&&u.jsx("div",{className:"about-backdrop",onClick:()=>to(!1),children:u.jsxs("div",{className:"about-panel",onClick:f=>f.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsxs("div",{className:"about-logo",children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"about-tagline",children:"Intelligence Dashboard · AI-Powered"}),u.jsx("div",{className:"about-desc",children:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano."}),u.jsxs("div",{className:"about-footer",children:["Ideato da Mike · ",u.jsx("a",{href:"https://www.instagram.com/it.mikesoft",target:"_blank",rel:"noopener noreferrer",children:"MikeSoft"}),u.jsx("br",{}),"100% AI-generated · Made in Italy · 2026"]}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>to(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};dd(document.getElementById("root")).render(u.jsx(E.StrictMode,{children:u.jsx(ym,{})}));
