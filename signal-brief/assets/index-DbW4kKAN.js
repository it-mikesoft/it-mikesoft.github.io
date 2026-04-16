(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var Su={exports:{}},Yl={},Nu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),lf=Symbol.for("react.portal"),of=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),df=Symbol.for("react.forward_ref"),ff=Symbol.for("react.suspense"),pf=Symbol.for("react.memo"),mf=Symbol.for("react.lazy"),sa=Symbol.iterator;function hf(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var Cu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ju=Object.assign,Eu={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Eu,this.updater=n||Cu}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zu(){}zu.prototype=Wn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=Eu,this.updater=n||Cu}var Gi=Ki.prototype=new zu;Gi.constructor=Ki;ju(Gi,Wn.prototype);Gi.isPureReactComponent=!0;var aa=Array.isArray,Pu=Object.prototype.hasOwnProperty,Yi={current:null},_u={key:!0,ref:!0,__self:!0,__source:!0};function Iu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Pu.call(t,r)&&!_u.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Or,type:e,key:o,ref:i,props:l,_owner:Yi.current}}function gf(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function yf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yf(""+e.key):t.toString(36)}function pl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Or:case lf:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+_o(i,0):r,aa(l)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),pl(l,t,n,"",function(f){return f})):l!=null&&(Xi(l)&&(l=gf(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ua,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",aa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+_o(o,s);i+=pl(o,t,n,a,l)}else if(a=hf(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+_o(o,s++),i+=pl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xr(e,t,n){if(e==null)return e;var r=[],l=0;return pl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function vf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},ml={transition:null},xf={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Yi};function Mu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Wn;H.Fragment=of;H.Profiler=af;H.PureComponent=Ki;H.StrictMode=sf;H.Suspense=ff;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xf;H.act=Mu;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ju({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Yi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Pu.call(t,a)&&!_u.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Or,type:e.type,key:l,ref:o,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:cf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uf,_context:e},e.Consumer=e};H.createElement=Iu;H.createFactory=function(e){var t=Iu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:df,render:e}};H.isValidElement=Xi;H.lazy=function(e){return{$$typeof:mf,_payload:{_status:-1,_result:e},_init:vf}};H.memo=function(e,t){return{$$typeof:pf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=ml.transition;ml.transition={};try{e()}finally{ml.transition=t}};H.unstable_act=Mu;H.useCallback=function(e,t){return Te.current.useCallback(e,t)};H.useContext=function(e){return Te.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};H.useEffect=function(e,t){return Te.current.useEffect(e,t)};H.useId=function(){return Te.current.useId()};H.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Te.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};H.useRef=function(e){return Te.current.useRef(e)};H.useState=function(e){return Te.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Te.current.useTransition()};H.version="18.3.1";Nu.exports=H;var z=Nu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=z,kf=Symbol.for("react.element"),Sf=Symbol.for("react.fragment"),Nf=Object.prototype.hasOwnProperty,Cf=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jf={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Nf.call(t,r)&&!jf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:kf,type:e,key:o,ref:i,props:l,_owner:Cf.current}}Yl.Fragment=Sf;Yl.jsx=Tu;Yl.jsxs=Tu;Su.exports=Yl;var u=Su.exports,Lu={exports:{}},We={},Du={exports:{}},Ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,b){var D=_.length;_.push(b);e:for(;0<D;){var ee=D-1>>>1,G=_[ee];if(0<l(G,b))_[ee]=b,_[D]=G,D=ee;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var b=_[0],D=_.pop();if(D!==b){_[0]=D;e:for(var ee=0,G=_.length,en=G>>>1;ee<en;){var Ke=2*(ee+1)-1,gn=_[Ke],tt=Ke+1,Tt=_[tt];if(0>l(gn,D))tt<G&&0>l(Tt,gn)?(_[ee]=Tt,_[tt]=D,ee=tt):(_[ee]=gn,_[Ke]=D,ee=Ke);else if(tt<G&&0>l(Tt,D))_[ee]=Tt,_[tt]=D,ee=tt;else break e}}return b}function l(_,b){var D=_.sortIndex-b.sortIndex;return D!==0?D:_.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],v=1,y=null,g=3,S=!1,C=!1,P=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var b=n(f);b!==null;){if(b.callback===null)r(f);else if(b.startTime<=_)r(f),b.sortIndex=b.expirationTime,t(a,b);else break;b=n(f)}}function x(_){if(P=!1,m(_),!C)if(n(a)!==null)C=!0,Fe(E);else{var b=n(f);b!==null&&Gn(x,b.startTime-_)}}function E(_,b){C=!1,P&&(P=!1,p(O),O=-1),S=!0;var D=g;try{for(m(b),y=n(a);y!==null&&(!(y.expirationTime>b)||_&&!ve());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,g=y.priorityLevel;var G=ee(y.expirationTime<=b);b=e.unstable_now(),typeof G=="function"?y.callback=G:y===n(a)&&r(a),m(b)}else r(a);y=n(a)}if(y!==null)var en=!0;else{var Ke=n(f);Ke!==null&&Gn(x,Ke.startTime-b),en=!1}return en}finally{y=null,g=D,S=!1}}var N=!1,I=null,O=-1,ne=5,T=-1;function ve(){return!(e.unstable_now()-T<ne)}function It(){if(I!==null){var _=e.unstable_now();T=_;var b=!0;try{b=I(!0,_)}finally{b?Mt():(N=!1,I=null)}}else N=!1}var Mt;if(typeof c=="function")Mt=function(){c(It)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,gt=Pe.port2;Pe.port1.onmessage=It,Mt=function(){gt.postMessage(null)}}else Mt=function(){U(It,0)};function Fe(_){I=_,N||(N=!0,Mt())}function Gn(_,b){O=U(function(){_(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){C||S||(C=!0,Fe(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var D=g;g=b;try{return _()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,b){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=g;g=_;try{return b()}finally{g=D}},e.unstable_scheduleCallback=function(_,b,D){var ee=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ee+D:ee):D=ee,_){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,_={id:v++,callback:b,priorityLevel:_,startTime:D,expirationTime:G,sortIndex:-1},D>ee?(_.sortIndex=D,t(f,_),n(a)===null&&_===n(f)&&(P?(p(O),O=-1):P=!0,Gn(x,D-ee))):(_.sortIndex=G,t(a,_),C||S||(C=!0,Fe(E))),_},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(_){var b=g;return function(){var D=g;g=b;try{return _.apply(this,arguments)}finally{g=D}}}})(Ou);Du.exports=Ou;var Ef=Du.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf=z,Ve=Ef;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ru=new Set,vr={};function mn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(vr[e]=t,e=0;e<t.length;e++)Ru.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ca={},da={};function _f(e){return ti.call(da,e)?!0:ti.call(ca,e)?!1:Pf.test(e)?da[e]=!0:(ca[e]=!0,!1)}function If(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mf(e,t,n,r){if(t===null||typeof t>"u"||If(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var qi=/[\-:]([a-z])/g;function Ji(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qi,Ji);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qi,Ji);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qi,Ji);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zi(e,t,n,r){var l=ke.hasOwnProperty(t)?ke[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mf(t,n,l,r)&&(n=null),r||l===null?_f(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qr=Symbol.for("react.element"),wn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),bu=Symbol.for("react.provider"),Au=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),$u=Symbol.for("react.offscreen"),fa=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Io;function or(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Mo=!1;function To(e,t){if(!e||Mo)return"";Mo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Mo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Tf(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=To(e.type,!1),e;case 11:return e=To(e.type.render,!1),e;case 1:return e=To(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case wn:return"Portal";case ni:return"Profiler";case es:return"StrictMode";case ri:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Au:return(e.displayName||"Context")+".Consumer";case bu:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:oi(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return oi(e(t))}catch{}}return null}function Lf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Df(e){var t=Fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=Df(e))}function Bu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uu(e,t){t=t.checked,t!=null&&Zi(e,"checked",t,!1)}function si(e,t){Uu(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ma(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||jl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ha(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(ir(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Hu(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Of=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Of.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Qu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Rf=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(Rf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,Ln=null,Dn=null;function ya(e){if(e=Ar(e)){if(typeof mi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=eo(t),mi(e.stateNode,e.type,t))}}function Gu(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function Yu(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,ya(e),t)for(e=0;e<t.length;e++)ya(t[e])}}function Xu(e,t){return e(t)}function qu(){}var Lo=!1;function Ju(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return Xu(e,t,n)}finally{Lo=!1,(Ln!==null||Dn!==null)&&(qu(),Yu())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var hi=!1;if(jt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){hi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{hi=!1}function bf(e,t,n,r,l,o,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var cr=!1,El=null,zl=!1,gi=null,Af={onError:function(e){cr=!0,El=e}};function $f(e,t,n,r,l,o,i,s,a){cr=!1,El=null,bf.apply(Af,arguments)}function Ff(e,t,n,r,l,o,i,s,a){if($f.apply(this,arguments),cr){if(cr){var f=El;cr=!1,El=null}else throw Error(w(198));zl||(zl=!0,gi=f)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function va(e){if(hn(e)!==e)throw Error(w(188))}function Bf(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return va(l),e;if(o===r)return va(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ec(e){return e=Bf(e),e!==null?tc(e):null}function tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tc(e);if(t!==null)return t;e=e.sibling}return null}var nc=Ve.unstable_scheduleCallback,xa=Ve.unstable_cancelCallback,Uf=Ve.unstable_shouldYield,Hf=Ve.unstable_requestPaint,ue=Ve.unstable_now,Vf=Ve.unstable_getCurrentPriorityLevel,ls=Ve.unstable_ImmediatePriority,rc=Ve.unstable_UserBlockingPriority,Pl=Ve.unstable_NormalPriority,Wf=Ve.unstable_LowPriority,lc=Ve.unstable_IdlePriority,Xl=null,mt=null;function Qf(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Yf,Kf=Math.log,Gf=Math.LN2;function Yf(e){return e>>>=0,e===0?32:31-(Kf(e)/Gf|0)|0}var el=64,tl=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=sr(s):(o&=i,o!==0&&(r=sr(o)))}else i=n&~l,i!==0?r=sr(i):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function Xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=Xf(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oc(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function Jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var K=0;function ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sc,is,ac,uc,cc,vi=!1,nl=[],Bt=null,Ut=null,Ht=null,kr=new Map,Sr=new Map,bt=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wa(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ar(t),t!==null&&is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ep(e,t,n,r,l){switch(t){case"focusin":return Bt=Zn(Bt,e,t,n,r,l),!0;case"dragenter":return Ut=Zn(Ut,e,t,n,r,l),!0;case"mouseover":return Ht=Zn(Ht,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return kr.set(o,Zn(kr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Zn(Sr.get(o)||null,e,t,n,r,l)),!0}return!1}function dc(e){var t=rn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zu(n),t!==null){e.blockedOn=t,cc(e.priority,function(){ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=Ar(n),t!==null&&is(t),e.blockedOn=n,!1;t.shift()}return!0}function ka(e,t,n){hl(e)&&n.delete(t)}function tp(){vi=!1,Bt!==null&&hl(Bt)&&(Bt=null),Ut!==null&&hl(Ut)&&(Ut=null),Ht!==null&&hl(Ht)&&(Ht=null),kr.forEach(ka),Sr.forEach(ka)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,tp)))}function Nr(e){function t(l){return er(l,e)}if(0<nl.length){er(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&er(Bt,e),Ut!==null&&er(Ut,e),Ht!==null&&er(Ht,e),kr.forEach(t),Sr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)dc(n),n.blockedOn===null&&bt.shift()}var On=_t.ReactCurrentBatchConfig,Il=!0;function np(e,t,n,r){var l=K,o=On.transition;On.transition=null;try{K=1,ss(e,t,n,r)}finally{K=l,On.transition=o}}function rp(e,t,n,r){var l=K,o=On.transition;On.transition=null;try{K=4,ss(e,t,n,r)}finally{K=l,On.transition=o}}function ss(e,t,n,r){if(Il){var l=xi(e,t,n,r);if(l===null)Vo(e,t,r,Ml,n),wa(e,r);else if(ep(l,e,t,n,r))r.stopPropagation();else if(wa(e,r),t&4&&-1<Zf.indexOf(e)){for(;l!==null;){var o=Ar(l);if(o!==null&&sc(o),o=xi(e,t,n,r),o===null&&Vo(e,t,r,Ml,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Ml=null;function xi(e,t,n,r){if(Ml=null,e=rs(r),e=rn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ml=e,null}function fc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vf()){case ls:return 1;case rc:return 4;case Pl:case Wf:return 16;case lc:return 536870912;default:return 16}default:return 16}}var $t=null,as=null,gl=null;function pc(){if(gl)return gl;var e,t=as,n=t.length,r,l="value"in $t?$t.value:$t.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return gl=l.slice(e,1<r?1-r:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Sa(){return!1}function Qe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rl:Sa,this.isPropagationStopped=Sa,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Qe(Qn),br=ie({},Qn,{view:0,detail:0}),lp=Qe(br),Oo,Ro,tr,ql=ie({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Oo=e.screenX-tr.screenX,Ro=e.screenY-tr.screenY):Ro=Oo=0,tr=e),Oo)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Na=Qe(ql),op=ie({},ql,{dataTransfer:0}),ip=Qe(op),sp=ie({},br,{relatedTarget:0}),bo=Qe(sp),ap=ie({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Qe(ap),cp=ie({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dp=Qe(cp),fp=ie({},Qn,{data:0}),Ca=Qe(fp),pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hp[e])?!!t[e]:!1}function cs(){return gp}var yp=ie({},br,{key:function(e){if(e.key){var t=pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vp=Qe(yp),xp=ie({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=Qe(xp),wp=ie({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),kp=Qe(wp),Sp=ie({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Np=Qe(Sp),Cp=ie({},ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Qe(Cp),Ep=[9,13,27,32],ds=jt&&"CompositionEvent"in window,dr=null;jt&&"documentMode"in document&&(dr=document.documentMode);var zp=jt&&"TextEvent"in window&&!dr,mc=jt&&(!ds||dr&&8<dr&&11>=dr),Ea=" ",za=!1;function hc(e,t){switch(e){case"keyup":return Ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Pp(e,t){switch(e){case"compositionend":return gc(t);case"keypress":return t.which!==32?null:(za=!0,Ea);case"textInput":return e=t.data,e===Ea&&za?null:e;default:return null}}function _p(e,t){if(Sn)return e==="compositionend"||!ds&&hc(e,t)?(e=pc(),gl=as=$t=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var Ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ip[e.type]:t==="textarea"}function yc(e,t,n,r){Gu(r),t=Tl(t,"onChange"),0<t.length&&(n=new us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,Cr=null;function Mp(e){Pc(e,0)}function Jl(e){var t=jn(e);if(Bu(t))return e}function Tp(e,t){if(e==="change")return t}var vc=!1;if(jt){var Ao;if(jt){var $o="oninput"in document;if(!$o){var _a=document.createElement("div");_a.setAttribute("oninput","return;"),$o=typeof _a.oninput=="function"}Ao=$o}else Ao=!1;vc=Ao&&(!document.documentMode||9<document.documentMode)}function Ia(){fr&&(fr.detachEvent("onpropertychange",xc),Cr=fr=null)}function xc(e){if(e.propertyName==="value"&&Jl(Cr)){var t=[];yc(t,Cr,e,rs(e)),Ju(Mp,t)}}function Lp(e,t,n){e==="focusin"?(Ia(),fr=t,Cr=n,fr.attachEvent("onpropertychange",xc)):e==="focusout"&&Ia()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(Cr)}function Op(e,t){if(e==="click")return Jl(t)}function Rp(e,t){if(e==="input"||e==="change")return Jl(t)}function bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:bp;function jr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ti.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ta(e,t){var n=Ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ma(n)}}function wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=jl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jl(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ap(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wc(n.ownerDocument.documentElement,n)){if(r!==null&&fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ta(n,o);var i=Ta(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $p=jt&&"documentMode"in document&&11>=document.documentMode,Nn=null,wi=null,pr=null,ki=!1;function La(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||Nn==null||Nn!==jl(r)||(r=Nn,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&jr(pr,r)||(pr=r,r=Tl(wi,"onSelect"),0<r.length&&(t=new us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Fo={},Sc={};jt&&(Sc=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Zl(e){if(Fo[e])return Fo[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sc)return Fo[e]=t[n];return e}var Nc=Zl("animationend"),Cc=Zl("animationiteration"),jc=Zl("animationstart"),Ec=Zl("transitionend"),zc=new Map,Da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){zc.set(e,t),mn(t,[e])}for(var Bo=0;Bo<Da.length;Bo++){var Uo=Da[Bo],Fp=Uo.toLowerCase(),Bp=Uo[0].toUpperCase()+Uo.slice(1);qt(Fp,"on"+Bp)}qt(Nc,"onAnimationEnd");qt(Cc,"onAnimationIteration");qt(jc,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Ec,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Oa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ff(r,t,void 0,e),e.currentTarget=null}function Pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;Oa(l,s,f),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;Oa(l,s,f),o=a}}}if(zl)throw e=gi,zl=!1,gi=null,e}function J(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(_c(t,e,2,!1),n.add(r))}function Ho(e,t,n){var r=0;t&&(r|=4),_c(n,e,r,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ol]){e[ol]=!0,Ru.forEach(function(n){n!=="selectionchange"&&(Up.has(n)||Ho(n,!1,e),Ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,Ho("selectionchange",!1,t))}}function _c(e,t,n,r){switch(fc(t)){case 1:var l=np;break;case 4:l=rp;break;default:l=ss}n=l.bind(null,t,n,e),l=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=rn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Ju(function(){var f=o,v=rs(n),y=[];e:{var g=zc.get(e);if(g!==void 0){var S=us,C=e;switch(e){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":S=vp;break;case"focusin":C="focus",S=bo;break;case"focusout":C="blur",S=bo;break;case"beforeblur":case"afterblur":S=bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Na;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=kp;break;case Nc:case Cc:case jc:S=up;break;case Ec:S=Np;break;case"scroll":S=lp;break;case"wheel":S=jp;break;case"copy":case"cut":case"paste":S=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ja}var P=(t&4)!==0,U=!P&&e==="scroll",p=P?g!==null?g+"Capture":null:g;P=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=wr(c,p),x!=null&&P.push(zr(c,x,m)))),U)break;c=c.return}0<P.length&&(g=new S(g,C,null,n,v),y.push({event:g,listeners:P}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==pi&&(C=n.relatedTarget||n.fromElement)&&(rn(C)||C[Et]))break e;if((S||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=f,C=C?rn(C):null,C!==null&&(U=hn(C),C!==U||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=f),S!==C)){if(P=Na,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=ja,x="onPointerLeave",p="onPointerEnter",c="pointer"),U=S==null?g:jn(S),m=C==null?g:jn(C),g=new P(x,c+"leave",S,n,v),g.target=U,g.relatedTarget=m,x=null,rn(v)===f&&(P=new P(p,c+"enter",C,n,v),P.target=m,P.relatedTarget=U,x=P),U=x,S&&C)t:{for(P=S,p=C,c=0,m=P;m;m=xn(m))c++;for(m=0,x=p;x;x=xn(x))m++;for(;0<c-m;)P=xn(P),c--;for(;0<m-c;)p=xn(p),m--;for(;c--;){if(P===p||p!==null&&P===p.alternate)break t;P=xn(P),p=xn(p)}P=null}else P=null;S!==null&&Ra(y,g,S,P,!1),C!==null&&U!==null&&Ra(y,U,C,P,!0)}}e:{if(g=f?jn(f):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var E=Tp;else if(Pa(g))if(vc)E=Rp;else{E=Dp;var N=Lp}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Op);if(E&&(E=E(e,f))){yc(y,E,n,v);break e}N&&N(e,g,f),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ai(g,"number",g.value)}switch(N=f?jn(f):window,e){case"focusin":(Pa(N)||N.contentEditable==="true")&&(Nn=N,wi=f,pr=null);break;case"focusout":pr=wi=Nn=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,La(y,n,v);break;case"selectionchange":if($p)break;case"keydown":case"keyup":La(y,n,v)}var I;if(ds)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Sn?hc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(mc&&n.locale!=="ko"&&(Sn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Sn&&(I=pc()):($t=v,as="value"in $t?$t.value:$t.textContent,Sn=!0)),N=Tl(f,O),0<N.length&&(O=new Ca(O,e,null,n,v),y.push({event:O,listeners:N}),I?O.data=I:(I=gc(n),I!==null&&(O.data=I)))),(I=zp?Pp(e,n):_p(e,n))&&(f=Tl(f,"onBeforeInput"),0<f.length&&(v=new Ca("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=I))}Pc(y,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=wr(e,n),o!=null&&r.unshift(zr(e,o,l)),o=wr(e,t),o!=null&&r.push(zr(e,o,l))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,l?(a=wr(n,o),a!=null&&i.unshift(zr(n,a,s))):l||(a=wr(n,o),a!=null&&i.push(zr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Hp=/\r\n?/g,Vp=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(Hp,`
`).replace(Vp,"")}function il(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(w(425))}function Ll(){}var Si=null,Ni=null;function Ci(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ji=typeof setTimeout=="function"?setTimeout:void 0,Wp=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(e){return Aa.resolve(null).then(e).catch(Kp)}:ji;function Kp(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Nr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Kn,Pr="__reactProps$"+Kn,Et="__reactContainer$"+Kn,Ei="__reactEvents$"+Kn,Gp="__reactListeners$"+Kn,Yp="__reactHandles$"+Kn;function rn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[pt])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[pt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function eo(e){return e[Pr]||null}var zi=[],En=-1;function Jt(e){return{current:e}}function Z(e){0>En||(e.current=zi[En],zi[En]=null,En--)}function X(e,t){En++,zi[En]=e.current,e.current=t}var Xt={},ze=Jt(Xt),be=Jt(!1),un=Xt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ae(e){return e=e.childContextTypes,e!=null}function Dl(){Z(be),Z(ze)}function Fa(e,t,n){if(ze.current!==Xt)throw Error(w(168));X(ze,t),X(be,n)}function Ic(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Lf(e)||"Unknown",l));return ie({},n,r)}function Ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,un=ze.current,X(ze,e),X(be,be.current),!0}function Ba(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Ic(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,Z(be),Z(ze),X(ze,e)):Z(be),X(be,n)}var wt=null,to=!1,Qo=!1;function Mc(e){wt===null?wt=[e]:wt.push(e)}function Xp(e){to=!0,Mc(e)}function Zt(){if(!Qo&&wt!==null){Qo=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,to=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),nc(ls,Zt),l}finally{K=t,Qo=!1}}return null}var zn=[],Pn=0,Rl=null,bl=0,Ye=[],Xe=0,cn=null,kt=1,St="";function tn(e,t){zn[Pn++]=bl,zn[Pn++]=Rl,Rl=e,bl=t}function Tc(e,t,n){Ye[Xe++]=kt,Ye[Xe++]=St,Ye[Xe++]=cn,cn=e;var r=kt;e=St;var l=32-at(r)-1;r&=~(1<<l),n+=1;var o=32-at(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,kt=1<<32-at(t)+l|n<<l|r,St=o+e}else kt=1<<o|n<<l|r,St=e}function ps(e){e.return!==null&&(tn(e,1),Tc(e,1,0))}function ms(e){for(;e===Rl;)Rl=zn[--Pn],zn[Pn]=null,bl=zn[--Pn],zn[Pn]=null;for(;e===cn;)cn=Ye[--Xe],Ye[Xe]=null,St=Ye[--Xe],Ye[Xe]=null,kt=Ye[--Xe],Ye[Xe]=null}var He=null,Ue=null,te=!1,st=null;function Lc(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(te){var t=Ue;if(t){var n=t;if(!Ua(e,t)){if(Pi(e))throw Error(w(418));t=Vt(n.nextSibling);var r=He;t&&Ua(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(Pi(e))throw Error(w(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function Ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function sl(e){if(e!==He)return!1;if(!te)return Ha(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ci(e.type,e.memoizedProps)),t&&(t=Ue)){if(Pi(e))throw Dc(),Error(w(418));for(;t;)Lc(e,t),t=Vt(t.nextSibling)}if(Ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?Vt(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=Ue;e;)e=Vt(e.nextSibling)}function Fn(){Ue=He=null,te=!1}function hs(e){st===null?st=[e]:st.push(e)}var qp=_t.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function al(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Va(e){var t=e._init;return t(e._payload)}function Oc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Gt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Zo(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var E=m.type;return E===kn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ot&&Va(E)===c.type)?(x=l(c,m.props),x.ref=nr(p,c,m),x.return=p,x):(x=Cl(m.type,m.key,m.props,null,p.mode,x),x.ref=nr(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ei(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,E){return c===null||c.tag!==7?(c=an(m,p.mode,x,E),c.return=p,c):(c=l(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case qr:return m=Cl(c.type,c.key,c.props,null,p.mode,m),m.ref=nr(p,null,c),m.return=p,m;case wn:return c=ei(c,p.mode,m),c.return=p,c;case Ot:var x=c._init;return y(p,x(c._payload),m)}if(ir(c)||qn(c))return c=an(c,p.mode,m,null),c.return=p,c;al(p,c)}return null}function g(p,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qr:return m.key===E?a(p,c,m,x):null;case wn:return m.key===E?f(p,c,m,x):null;case Ot:return E=m._init,g(p,c,E(m._payload),x)}if(ir(m)||qn(m))return E!==null?null:v(p,c,m,x,null);al(p,m)}return null}function S(p,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,E);case wn:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,E);case Ot:var N=x._init;return S(p,c,m,N(x._payload),E)}if(ir(x)||qn(x))return p=p.get(m)||null,v(c,p,x,E,null);al(c,x)}return null}function C(p,c,m,x){for(var E=null,N=null,I=c,O=c=0,ne=null;I!==null&&O<m.length;O++){I.index>O?(ne=I,I=null):ne=I.sibling;var T=g(p,I,m[O],x);if(T===null){I===null&&(I=ne);break}e&&I&&T.alternate===null&&t(p,I),c=o(T,c,O),N===null?E=T:N.sibling=T,N=T,I=ne}if(O===m.length)return n(p,I),te&&tn(p,O),E;if(I===null){for(;O<m.length;O++)I=y(p,m[O],x),I!==null&&(c=o(I,c,O),N===null?E=I:N.sibling=I,N=I);return te&&tn(p,O),E}for(I=r(p,I);O<m.length;O++)ne=S(I,p,O,m[O],x),ne!==null&&(e&&ne.alternate!==null&&I.delete(ne.key===null?O:ne.key),c=o(ne,c,O),N===null?E=ne:N.sibling=ne,N=ne);return e&&I.forEach(function(ve){return t(p,ve)}),te&&tn(p,O),E}function P(p,c,m,x){var E=qn(m);if(typeof E!="function")throw Error(w(150));if(m=E.call(m),m==null)throw Error(w(151));for(var N=E=null,I=c,O=c=0,ne=null,T=m.next();I!==null&&!T.done;O++,T=m.next()){I.index>O?(ne=I,I=null):ne=I.sibling;var ve=g(p,I,T.value,x);if(ve===null){I===null&&(I=ne);break}e&&I&&ve.alternate===null&&t(p,I),c=o(ve,c,O),N===null?E=ve:N.sibling=ve,N=ve,I=ne}if(T.done)return n(p,I),te&&tn(p,O),E;if(I===null){for(;!T.done;O++,T=m.next())T=y(p,T.value,x),T!==null&&(c=o(T,c,O),N===null?E=T:N.sibling=T,N=T);return te&&tn(p,O),E}for(I=r(p,I);!T.done;O++,T=m.next())T=S(I,p,O,T.value,x),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?O:T.key),c=o(T,c,O),N===null?E=T:N.sibling=T,N=T);return e&&I.forEach(function(It){return t(p,It)}),te&&tn(p,O),E}function U(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case qr:e:{for(var E=m.key,N=c;N!==null;){if(N.key===E){if(E=m.type,E===kn){if(N.tag===7){n(p,N.sibling),c=l(N,m.props.children),c.return=p,p=c;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ot&&Va(E)===N.type){n(p,N.sibling),c=l(N,m.props),c.ref=nr(p,N,m),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===kn?(c=an(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=Cl(m.type,m.key,m.props,null,p.mode,x),x.ref=nr(p,c,m),x.return=p,p=x)}return i(p);case wn:e:{for(N=m.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ei(m,p.mode,x),c.return=p,p=c}return i(p);case Ot:return N=m._init,U(p,c,N(m._payload),x)}if(ir(m))return C(p,c,m,x);if(qn(m))return P(p,c,m,x);al(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=Zo(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return U}var Bn=Oc(!0),Rc=Oc(!1),Al=Jt(null),$l=null,_n=null,gs=null;function ys(){gs=_n=$l=null}function vs(e){var t=Al.current;Z(Al),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){$l=e,gs=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if($l===null)throw Error(w(308));_n=e,$l.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var ln=null;function xs(e){ln===null?ln=[e]:ln.push(e)}function bc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,xs(t)):(n.next=l.next,l.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,zt(e,n)}return l=r.interleaved,l===null?(t.next=t,xs(r)):(t.next=l.next,l.next=t),r.interleaved=t,zt(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Wa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Fl(e,t,n,r){var l=e.updateQueue;Rt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?o=f:i.next=f,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=a))}if(o!==null){var y=l.baseState;i=0,v=f=a=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,P=s;switch(g=t,S=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){y=C.call(S,y,g);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,g=typeof C=="function"?C.call(S,y,g):C,g==null)break e;y=ie({},y,g);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=S,a=y):v=v.next=S,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);fn|=i,e.lanes=i,e.memoizedState=y}}function Qa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var $r={},ht=Jt($r),_r=Jt($r),Ir=Jt($r);function on(e){if(e===$r)throw Error(w(174));return e}function ks(e,t){switch(X(Ir,t),X(_r,e),X(ht,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}Z(ht),X(ht,t)}function Un(){Z(ht),Z(_r),Z(Ir)}function $c(e){on(Ir.current);var t=on(ht.current),n=ci(t,e.type);t!==n&&(X(_r,e),X(ht,n))}function Ss(e){_r.current===e&&(Z(ht),Z(_r))}var le=Jt(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function Ns(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var xl=_t.ReactCurrentDispatcher,Go=_t.ReactCurrentBatchConfig,dn=0,oe=null,de=null,ge=null,Ul=!1,mr=!1,Mr=0,Jp=0;function Ce(){throw Error(w(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function js(e,t,n,r,l,o){if(dn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xl.current=e===null||e.memoizedState===null?nm:rm,e=n(r,l),mr){o=0;do{if(mr=!1,Mr=0,25<=o)throw Error(w(301));o+=1,ge=de=null,t.updateQueue=null,xl.current=lm,e=n(r,l)}while(mr)}if(xl.current=Hl,t=de!==null&&de.next!==null,dn=0,ge=de=oe=null,Ul=!1,t)throw Error(w(300));return e}function Es(){var e=Mr!==0;return Mr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?oe.memoizedState=ge=e:ge=ge.next=e,ge}function et(){if(de===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ge===null?oe.memoizedState:ge.next;if(t!==null)ge=t,de=e;else{if(e===null)throw Error(w(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ge===null?oe.memoizedState=ge=e:ge=ge.next=e}return ge}function Tr(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=de,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,f=o;do{var v=f.lane;if((dn&v)===v)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=y,i=r):a=a.next=y,oe.lanes|=v,fn|=v}f=f.next}while(f!==null&&f!==o);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,oe.lanes|=o,fn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ct(o,t.memoizedState)||(Re=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fc(){}function Bc(e,t){var n=oe,r=et(),l=t(),o=!ct(r.memoizedState,l);if(o&&(r.memoizedState=l,Re=!0),r=r.queue,zs(Vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Lr(9,Hc.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(w(349));dn&30||Uc(n,t,l)}return l}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hc(e,t,n,r){t.value=n,t.getSnapshot=r,Wc(t)&&Qc(e)}function Vc(e,t,n){return n(function(){Wc(t)&&Qc(e)})}function Wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Qc(e){var t=zt(e,1);t!==null&&ut(t,e,1,-1)}function Ka(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=tm.bind(null,oe,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kc(){return et().memoizedState}function wl(e,t,n,r){var l=ft();oe.flags|=e,l.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function no(e,t,n,r){var l=et();r=r===void 0?null:r;var o=void 0;if(de!==null){var i=de.memoizedState;if(o=i.destroy,r!==null&&Cs(r,i.deps)){l.memoizedState=Lr(t,n,o,r);return}}oe.flags|=e,l.memoizedState=Lr(1|t,n,o,r)}function Ga(e,t){return wl(8390656,8,e,t)}function zs(e,t){return no(2048,8,e,t)}function Gc(e,t){return no(4,2,e,t)}function Yc(e,t){return no(4,4,e,t)}function Xc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qc(e,t,n){return n=n!=null?n.concat([e]):null,no(4,4,Xc.bind(null,t,e),n)}function Ps(){}function Jc(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zc(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ed(e,t,n){return dn&21?(ct(n,t)||(n=oc(),oe.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Zp(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{K=n,Go.transition=r}}function td(){return et().memoizedState}function em(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nd(e))rd(t,n);else if(n=bc(e,t,n,r),n!==null){var l=Me();ut(n,e,r,l),ld(n,t,r)}}function tm(e,t,n){var r=Kt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nd(e))rd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(l.next=l,xs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=bc(e,t,l,r),n!==null&&(l=Me(),ut(n,e,r,l),ld(n,t,r))}}function nd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function rd(e,t){mr=Ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var Hl={readContext:Ze,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},nm={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Ga,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wl(4194308,4,Xc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){return wl(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=em.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Ka,useDebugValue:Ps,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Ka(!1),t=e[0];return e=Zp.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,l=ft();if(te){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ye===null)throw Error(w(349));dn&30||Uc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ga(Vc.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,Hc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=ye.identifierPrefix;if(te){var n=St,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rm={readContext:Ze,useCallback:Jc,useContext:Ze,useEffect:zs,useImperativeHandle:qc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:Zc,useReducer:Yo,useRef:Kc,useState:function(){return Yo(Tr)},useDebugValue:Ps,useDeferredValue:function(e){var t=et();return ed(t,de.memoizedState,e)},useTransition:function(){var e=Yo(Tr)[0],t=et().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Bc,useId:td,unstable_isNewReconciler:!1},lm={readContext:Ze,useCallback:Jc,useContext:Ze,useEffect:zs,useImperativeHandle:qc,useInsertionEffect:Gc,useLayoutEffect:Yc,useMemo:Zc,useReducer:Xo,useRef:Kc,useState:function(){return Xo(Tr)},useDebugValue:Ps,useDeferredValue:function(e){var t=et();return de===null?t.memoizedState=e:ed(t,de.memoizedState,e)},useTransition:function(){var e=Xo(Tr)[0],t=et().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:Bc,useId:td,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),l=Kt(e),o=Nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,l),t!==null&&(ut(t,e,l,r),vl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),l=Kt(e),o=Nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,l),t!==null&&(ut(t,e,l,r),vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Kt(e),l=Nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Wt(e,l,r),t!==null&&(ut(t,e,r,n),vl(t,e,r))}};function Ya(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(l,o):!0}function od(e,t,n){var r=!1,l=Xt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(l=Ae(t)?un:ze.current,r=t.contextTypes,o=(r=r!=null)?$n(e,l):Xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Xa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ws(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ze(o):(o=Ae(t)?un:ze.current,l.context=$n(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Mi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ro.enqueueReplaceState(l,l.state,null),Fl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=Tf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var om=typeof WeakMap=="function"?WeakMap:Map;function id(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hi=r),Li(e,t)},n}function sd(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function qa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new om;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=xm.bind(null,e,t,n),t.then(e,e))}function Ja(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Za(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var im=_t.ReactCurrentOwner,Re=!1;function Ie(e,t,n,r){t.child=e===null?Rc(t,null,n,r):Bn(t,e.child,n,r)}function eu(e,t,n,r,l){n=n.render;var o=t.ref;return Rn(t,l),r=js(e,t,n,r,o,l),n=Es(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Pt(e,t,l)):(te&&n&&ps(t),t.flags|=1,Ie(e,t,r,l),t.child)}function tu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Rs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ad(e,t,o,r,l)):(e=Cl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(i,r)&&e.ref===t.ref)return Pt(e,t,l)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function ad(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,Pt(e,t,l)}return Di(e,t,n,r,l)}function ud(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Mn,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Mn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(Mn,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(Mn,Be),Be|=r;return Ie(e,t,l,n),t.child}function cd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Di(e,t,n,r,l){var o=Ae(n)?un:ze.current;return o=$n(t,o),Rn(t,l),n=js(e,t,n,r,o,l),r=Es(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Pt(e,t,l)):(te&&r&&ps(t),t.flags|=1,Ie(e,t,n,l),t.child)}function nu(e,t,n,r,l){if(Ae(n)){var o=!0;Ol(t)}else o=!1;if(Rn(t,l),t.stateNode===null)kl(e,t),od(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ze(f):(f=Ae(n)?un:ze.current,f=$n(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Xa(t,i,r,f),Rt=!1;var g=t.memoizedState;i.state=g,Fl(t,r,i,l),a=t.memoizedState,s!==r||g!==a||be.current||Rt?(typeof v=="function"&&(Mi(t,n,v,r),a=t.memoizedState),(s=Rt||Ya(t,n,s,r,g,a,f))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ac(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:ot(t.type,s),i.props=f,y=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Ae(n)?un:ze.current,a=$n(t,a));var S=n.getDerivedStateFromProps;(v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||g!==a)&&Xa(t,i,r,a),Rt=!1,g=t.memoizedState,i.state=g,Fl(t,r,i,l);var C=t.memoizedState;s!==y||g!==C||be.current||Rt?(typeof S=="function"&&(Mi(t,n,S,r),C=t.memoizedState),(f=Rt||Ya(t,n,f,r,g,C,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),i.props=r,i.state=C,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Oi(e,t,n,r,o,l)}function Oi(e,t,n,r,l,o){cd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Ba(t,n,!1),Pt(e,t,o);r=t.stateNode,im.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,l&&Ba(t,n,!0),t.child}function dd(e){var t=e.stateNode;t.pendingContext?Fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fa(e,t.context,!1),ks(e,t.containerInfo)}function ru(e,t,n,r,l){return Fn(),hs(l),t.flags|=256,Ie(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function bi(e){return{baseLanes:e,cachePool:null,transitions:null}}function fd(e,t,n){var r=t.pendingProps,l=le.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(le,l&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=io(i,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bi(n),t.memoizedState=Ri,e):_s(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return sm(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Gt(s,o):(o=an(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?bi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _s(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&hs(r),Bn(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sm(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(w(422))),ul(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=io({mode:"visible",children:r.children},l,0,null),o=an(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,i),t.child.memoizedState=bi(i),t.memoizedState=Ri,o);if(!(t.mode&1))return ul(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=qo(o,r,void 0),ul(e,t,i,r)}if(s=(i&e.childLanes)!==0,Re||s){if(r=ye,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,zt(e,l),ut(r,e,l,-1))}return Os(),r=qo(Error(w(421))),ul(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wm.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ue=Vt(l.nextSibling),He=t,te=!0,st=null,e!==null&&(Ye[Xe++]=kt,Ye[Xe++]=St,Ye[Xe++]=cn,kt=e.id,St=e.overflow,cn=t),t=_s(t,r.children),t.flags|=4096,t)}function lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function Jo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function pd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(le,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Jo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Jo(t,!0,n,null,o);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function am(e,t,n){switch(t.tag){case 3:dd(t),Fn();break;case 5:$c(t);break;case 1:Ae(t.type)&&Ol(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;X(Al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?fd(e,t,n):(X(le,le.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);X(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,ud(e,t,n)}return Pt(e,t,n)}var md,Ai,hd,gd;md=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};hd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,on(ht.current);var o=null;switch(n){case"input":l=ii(e,l),r=ii(e,r),o=[];break;case"select":l=ie({},l,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":l=ui(e,l),r=ui(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}di(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(vr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var a=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(vr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&J("scroll",e),o||s===a||(o=[])):(o=o||[]).push(f,a))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};gd=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function um(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ae(t.type)&&Dl(),je(t),null;case 3:return r=t.stateNode,Un(),Z(be),Z(ze),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Qi(st),st=null))),Ai(e,t),je(t),null;case 5:Ss(t);var l=on(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)hd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return je(t),null}if(e=on(ht.current),sl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[Pr]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(l=0;l<ar.length;l++)J(ar[l],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":pa(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":ha(r,o),J("invalid",r)}di(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",""+s]):vr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&J("scroll",r)}switch(n){case"input":Jr(r),ma(r,o,!0);break;case"textarea":Jr(r),ga(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[Pr]=r,md(e,t,!1,!1),t.stateNode=e;e:{switch(i=fi(n,r),n){case"dialog":J("cancel",e),J("close",e),l=r;break;case"iframe":case"object":case"embed":J("load",e),l=r;break;case"video":case"audio":for(l=0;l<ar.length;l++)J(ar[l],e);l=r;break;case"source":J("error",e),l=r;break;case"img":case"image":case"link":J("error",e),J("load",e),l=r;break;case"details":J("toggle",e),l=r;break;case"input":pa(e,r),l=ii(e,r),J("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":ha(e,r),l=ui(e,r),J("invalid",e);break;default:l=r}di(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Ku(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&J("scroll",e):a!=null&&Zi(e,o,a,i))}switch(n){case"input":Jr(e),ma(e,r,!1);break;case"textarea":Jr(e),ga(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)gd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=on(Ir.current),on(ht.current),sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return je(t),null;case 13:if(Z(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ue!==null&&t.mode&1&&!(t.flags&128))Dc(),Fn(),t.flags|=98560,o=!1;else if(o=sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[pt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else st!==null&&(Qi(st),st=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?fe===0&&(fe=3):Os())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Un(),Ai(e,t),e===null&&Er(t.stateNode.containerInfo),je(t),null;case 10:return vs(t.type._context),je(t),null;case 17:return Ae(t.type)&&Dl(),je(t),null;case 19:if(Z(le),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)rr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Bl(e),i!==null){for(t.flags|=128,rr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Vn&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!te)return je(t),null}else 2*ue()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=le.current,X(le,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function cm(e,t){switch(ms(t),t.tag){case 1:return Ae(t.type)&&Dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Z(be),Z(ze),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(Z(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(le),null;case 4:return Un(),null;case 10:return vs(t.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var cl=!1,Ee=!1,dm=typeof WeakSet=="function"?WeakSet:Set,M=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function $i(e,t,n){try{n()}catch(r){se(e,t,r)}}var ou=!1;function fm(e,t){if(Si=Il,e=kc(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,v=0,y=e,g=null;t:for(;;){for(var S;y!==n||l!==0&&y.nodeType!==3||(s=i+l),y!==o||r!==0&&y.nodeType!==3||(a=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++f===l&&(s=i),g===o&&++v===r&&(a=i),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Il=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,U=C.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?P:ot(t.type,P),U);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return C=ou,ou=!1,C}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&$i(t,n,o)}l=l.next}while(l!==r)}}function lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yd(e){var t=e.alternate;t!==null&&(e.alternate=null,yd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Pr],delete t[Ei],delete t[Gp],delete t[Yp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vd(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var xe=null,it=!1;function Dt(e,t,n){for(n=n.child;n!==null;)xd(e,t,n),n=n.sibling}function xd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Ee||In(n,t);case 6:var r=xe,l=it;xe=null,Dt(e,t,n),xe=r,it=l,xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),Nr(e)):Wo(xe,n.stateNode));break;case 4:r=xe,l=it,xe=n.stateNode.containerInfo,it=!0,Dt(e,t,n),xe=r,it=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&$i(n,t,i),l=l.next}while(l!==r)}Dt(e,t,n);break;case 1:if(!Ee&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Dt(e,t,n),Ee=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dm),t.forEach(function(r){var l=km.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,it=!1;break e;case 3:xe=s.stateNode.containerInfo,it=!0;break e;case 4:xe=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(xe===null)throw Error(w(160));xd(o,i,l),xe=null,it=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(f){se(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wd(t,e),t=t.sibling}function wd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),dt(e),r&4){try{hr(3,e,e.return),lo(3,e)}catch(P){se(e,e.return,P)}try{hr(5,e,e.return)}catch(P){se(e,e.return,P)}}break;case 1:lt(t,e),dt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(lt(t,e),dt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(P){se(e,e.return,P)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Uu(l,o),fi(s,i);var f=fi(s,o);for(i=0;i<a.length;i+=2){var v=a[i],y=a[i+1];v==="style"?Ku(l,y):v==="dangerouslySetInnerHTML"?Wu(l,y):v==="children"?xr(l,y):Zi(l,v,y,f)}switch(s){case"input":si(l,o);break;case"textarea":Hu(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Tn(l,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?Tn(l,!!o.multiple,o.defaultValue,!0):Tn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Pr]=o}catch(P){se(e,e.return,P)}}break;case 6:if(lt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(P){se(e,e.return,P)}}break;case 3:if(lt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(P){se(e,e.return,P)}break;case 4:lt(t,e),dt(e);break;case 13:lt(t,e),dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ts=ue())),r&4&&su(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(f=Ee)||v,lt(t,e),Ee=f):lt(t,e),dt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(M=e,v=e.child;v!==null;){for(y=M=v;M!==null;){switch(g=M,S=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:In(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(P){se(r,n,P)}}break;case 5:In(g,g.return);break;case 22:if(g.memoizedState!==null){uu(y);continue}}S!==null?(S.return=g,M=S):uu(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,a=y.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Qu("display",i))}catch(P){se(e,e.return,P)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(P){se(e,e.return,P)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:lt(t,e),dt(e),r&4&&su(e);break;case 21:break;default:lt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xr(l,""),r.flags&=-33);var o=iu(e);Ui(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=iu(e);Bi(e,s,i);break;default:throw Error(w(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pm(e,t,n){M=e,kd(e)}function kd(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||cl;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=cl;var f=Ee;if(cl=i,(Ee=a)&&!f)for(M=l;M!==null;)i=M,a=i.child,i.tag===22&&i.memoizedState!==null?cu(l):a!==null?(a.return=i,M=a):cu(l);for(;o!==null;)M=o,kd(o),o=o.sibling;M=l,cl=s,Ee=f}au(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,M=o):au(e)}}function au(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Qa(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qa(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Nr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||t.flags&512&&Fi(t)}catch(g){se(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function uu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function cu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{lo(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){se(t,l,a)}}var o=t.return;try{Fi(t)}catch(a){se(t,o,a)}break;case 5:var i=t.return;try{Fi(t)}catch(a){se(t,i,a)}}}catch(a){se(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var mm=Math.ceil,Vl=_t.ReactCurrentDispatcher,Is=_t.ReactCurrentOwner,Je=_t.ReactCurrentBatchConfig,W=0,ye=null,ce=null,we=0,Be=0,Mn=Jt(0),fe=0,Dr=null,fn=0,oo=0,Ms=0,gr=null,Oe=null,Ts=0,Vn=1/0,xt=null,Wl=!1,Hi=null,Qt=null,dl=!1,Ft=null,Ql=0,yr=0,Vi=null,Sl=-1,Nl=0;function Me(){return W&6?ue():Sl!==-1?Sl:Sl=ue()}function Kt(e){return e.mode&1?W&2&&we!==0?we&-we:qp.transition!==null?(Nl===0&&(Nl=oc()),Nl):(e=K,e!==0||(e=window.event,e=e===void 0?16:fc(e.type)),e):1}function ut(e,t,n,r){if(50<yr)throw yr=0,Vi=null,Error(w(185));Rr(e,n,r),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(oo|=n),fe===4&&At(e,we)),$e(e,r),n===1&&W===0&&!(t.mode&1)&&(Vn=ue()+500,to&&Zt()))}function $e(e,t){var n=e.callbackNode;qf(e,t);var r=_l(e,e===ye?we:0);if(r===0)n!==null&&xa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xa(n),t===1)e.tag===0?Xp(du.bind(null,e)):Mc(du.bind(null,e)),Qp(function(){!(W&6)&&Zt()}),n=null;else{switch(ic(r)){case 1:n=ls;break;case 4:n=rc;break;case 16:n=Pl;break;case 536870912:n=lc;break;default:n=Pl}n=_d(n,Sd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sd(e,t){if(Sl=-1,Nl=0,W&6)throw Error(w(327));var n=e.callbackNode;if(bn()&&e.callbackNode!==n)return null;var r=_l(e,e===ye?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var l=W;W|=2;var o=Cd();(ye!==e||we!==t)&&(xt=null,Vn=ue()+500,sn(e,t));do try{ym();break}catch(s){Nd(e,s)}while(!0);ys(),Vl.current=o,W=l,ce!==null?t=0:(ye=null,we=0,t=fe)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Wi(e,l))),t===1)throw n=Dr,sn(e,0),At(e,r),$e(e,ue()),n;if(t===6)At(e,r);else{if(l=e.current.alternate,!(r&30)&&!hm(l)&&(t=Kl(e,r),t===2&&(o=yi(e),o!==0&&(r=o,t=Wi(e,o))),t===1))throw n=Dr,sn(e,0),At(e,r),$e(e,ue()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:nn(e,Oe,xt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ts+500-ue(),10<t)){if(_l(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ji(nn.bind(null,e,Oe,xt),t);break}nn(e,Oe,xt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-at(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mm(r/1960))-r,10<r){e.timeoutHandle=ji(nn.bind(null,e,Oe,xt),r);break}nn(e,Oe,xt);break;case 5:nn(e,Oe,xt);break;default:throw Error(w(329))}}}return $e(e,ue()),e.callbackNode===n?Sd.bind(null,e):null}function Wi(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Qi(t)),e}function Qi(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function hm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Ms,t&=~oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if(W&6)throw Error(w(327));bn();var t=_l(e,0);if(!(t&1))return $e(e,ue()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=Dr,sn(e,0),At(e,t),$e(e,ue()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Oe,xt),$e(e,ue()),null}function Ls(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Vn=ue()+500,to&&Zt())}}function pn(e){Ft!==null&&Ft.tag===0&&!(W&6)&&bn();var t=W;W|=1;var n=Je.transition,r=K;try{if(Je.transition=null,K=1,e)return e()}finally{K=r,Je.transition=n,W=t,!(W&6)&&Zt()}}function Ds(){Be=Mn.current,Z(Mn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wp(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:Un(),Z(be),Z(ze),Ns();break;case 5:Ss(r);break;case 4:Un();break;case 13:Z(le);break;case 19:Z(le);break;case 10:vs(r.type._context);break;case 22:case 23:Ds()}n=n.return}if(ye=e,ce=e=Gt(e.current,null),we=Be=t,fe=0,Dr=null,Ms=oo=fn=0,Oe=gr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}ln=null}return e}function Nd(e,t){do{var n=ce;try{if(ys(),xl.current=Hl,Ul){for(var r=oe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ul=!1}if(dn=0,ge=de=oe=null,mr=!1,Mr=0,Is.current=null,n===null||n.return===null){fe=1,Dr=t,ce=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=we,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=Ja(i);if(S!==null){S.flags&=-257,Za(S,i,s,o,t),S.mode&1&&qa(o,f,t),t=S,a=f;var C=t.updateQueue;if(C===null){var P=new Set;P.add(a),t.updateQueue=P}else C.add(a);break e}else{if(!(t&1)){qa(o,f,t),Os();break e}a=Error(w(426))}}else if(te&&s.mode&1){var U=Ja(i);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Za(U,i,s,o,t),hs(Hn(a,s));break e}}o=a=Hn(a,s),fe!==4&&(fe=2),gr===null?gr=[o]:gr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=id(o,a,t);Wa(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qt===null||!Qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=sd(o,s,t);Wa(o,x);break e}}o=o.return}while(o!==null)}Ed(n)}catch(E){t=E,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Cd(){var e=Vl.current;return Vl.current=Hl,e===null?Hl:e}function Os(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||!(fn&268435455)&&!(oo&268435455)||At(ye,we)}function Kl(e,t){var n=W;W|=2;var r=Cd();(ye!==e||we!==t)&&(xt=null,sn(e,t));do try{gm();break}catch(l){Nd(e,l)}while(!0);if(ys(),W=n,Vl.current=r,ce!==null)throw Error(w(261));return ye=null,we=0,fe}function gm(){for(;ce!==null;)jd(ce)}function ym(){for(;ce!==null&&!Uf();)jd(ce)}function jd(e){var t=Pd(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Ed(e):ce=t,Is.current=null}function Ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(n=um(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function nn(e,t,n){var r=K,l=Je.transition;try{Je.transition=null,K=1,vm(e,t,n,r)}finally{Je.transition=l,K=r}return null}function vm(e,t,n,r){do bn();while(Ft!==null);if(W&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jf(e,o),e===ye&&(ce=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,_d(Pl,function(){return bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var i=K;K=1;var s=W;W|=4,Is.current=null,fm(e,n),wd(n,e),Ap(Ni),Il=!!Si,Ni=Si=null,e.current=n,pm(n),Hf(),W=s,K=i,Je.transition=o}else e.current=n;if(dl&&(dl=!1,Ft=e,Ql=l),o=e.pendingLanes,o===0&&(Qt=null),Qf(n.stateNode),$e(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Wl)throw Wl=!1,e=Hi,Hi=null,e;return Ql&1&&e.tag!==0&&bn(),o=e.pendingLanes,o&1?e===Vi?yr++:(yr=0,Vi=e):yr=0,Zt(),null}function bn(){if(Ft!==null){var e=ic(Ql),t=Je.transition,n=K;try{if(Je.transition=null,K=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ql=0,W&6)throw Error(w(331));var l=W;for(W|=4,M=e.current;M!==null;){var o=M,i=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(M=f;M!==null;){var v=M;switch(v.tag){case 0:case 11:case 15:hr(8,v,o)}var y=v.child;if(y!==null)y.return=v,M=y;else for(;M!==null;){v=M;var g=v.sibling,S=v.return;if(yd(v),v===f){M=null;break}if(g!==null){g.return=S,M=g;break}M=S}}}var C=o.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var U=P.sibling;P.sibling=null,P=U}while(P!==null)}}M=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,M=i;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var c=e.current;for(M=c;M!==null;){i=M;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,M=m;else e:for(i=c;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:lo(9,s)}}catch(E){se(s,s.return,E)}if(s===i){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(W=l,Zt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{K=n,Je.transition=t}}return!1}function fu(e,t,n){t=Hn(n,t),t=id(e,t,1),e=Wt(e,t,1),t=Me(),e!==null&&(Rr(e,1,t),$e(e,t))}function se(e,t,n){if(e.tag===3)fu(e,e,n);else for(;t!==null;){if(t.tag===3){fu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Hn(n,e),e=sd(t,e,1),t=Wt(t,e,1),e=Me(),t!==null&&(Rr(t,1,e),$e(t,e));break}}t=t.return}}function xm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(fe===4||fe===3&&(we&130023424)===we&&500>ue()-Ts?sn(e,0):Ms|=n),$e(e,t)}function zd(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=Me();e=zt(e,t),e!==null&&(Rr(e,t,n),$e(e,n))}function wm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zd(e,n)}function km(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),zd(e,n)}var Pd;Pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,am(e,t,n);Re=!!(e.flags&131072)}else Re=!1,te&&t.flags&1048576&&Tc(t,bl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;kl(e,t),e=t.pendingProps;var l=$n(t,ze.current);Rn(t,n),l=js(null,t,r,e,l,n);var o=Es();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Ol(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ws(t),l.updater=ro,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Oi(null,t,r,!0,o,n)):(t.tag=0,te&&o&&ps(t),Ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(kl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nm(r),e=ot(r,e),l){case 0:t=Di(null,t,r,e,n);break e;case 1:t=nu(null,t,r,e,n);break e;case 11:t=eu(null,t,r,e,n);break e;case 14:t=tu(null,t,r,ot(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Di(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),nu(e,t,r,l,n);case 3:e:{if(dd(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Ac(e,t),Fl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Hn(Error(w(423)),t),t=ru(e,t,r,n,l);break e}else if(r!==l){l=Hn(Error(w(424)),t),t=ru(e,t,r,n,l);break e}else for(Ue=Vt(t.stateNode.containerInfo.firstChild),He=t,te=!0,st=null,n=Rc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===l){t=Pt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return $c(t),e===null&&_i(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Ci(r,l)?i=null:o!==null&&Ci(r,o)&&(t.flags|=32),cd(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&_i(t),null;case 13:return fd(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),eu(e,t,r,l,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,X(Al,r._currentValue),r._currentValue=i,o!==null)if(ct(o.value,i)){if(o.children===l.children&&!be.current){t=Pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?a.next=a:(a.next=v.next,v.next=a),f.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ii(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ii(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Rn(t,n),l=Ze(l),r=r(l),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),tu(e,t,r,l,n);case 15:return ad(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),kl(e,t),t.tag=1,Ae(r)?(e=!0,Ol(t)):e=!1,Rn(t,n),od(t,r,l),Ti(t,r,l,n),Oi(null,t,r,!0,e,n);case 19:return pd(e,t,n);case 22:return ud(e,t,n)}throw Error(w(156,t.tag))};function _d(e,t){return nc(e,t)}function Sm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Sm(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nm(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Rs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kn:return an(n.children,l,o,t);case es:i=8,l|=8;break;case ni:return e=qe(12,n,t,l|2),e.elementType=ni,e.lanes=o,e;case ri:return e=qe(13,n,t,l),e.elementType=ri,e.lanes=o,e;case li:return e=qe(19,n,t,l),e.elementType=li,e.lanes=o,e;case $u:return io(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bu:i=10;break e;case Au:i=9;break e;case ts:i=11;break e;case ns:i=14;break e;case Ot:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=qe(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=qe(22,e,r,t),e.elementType=$u,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function bs(e,t,n,r,l,o,i,s,a){return e=new Cm(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(o),e}function jm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Id(e){if(!e)return Xt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Ic(e,n,t)}return t}function Md(e,t,n,r,l,o,i,s,a){return e=bs(n,r,!0,e,l,o,i,s,a),e.context=Id(null),n=e.current,r=Me(),l=Kt(n),o=Nt(r,l),o.callback=t??null,Wt(n,o,l),e.current.lanes=l,Rr(e,l,r),$e(e,r),e}function so(e,t,n,r){var l=t.current,o=Me(),i=Kt(l);return n=Id(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(l,t,i),e!==null&&(ut(e,l,i,o),vl(e,l,i)),i}function Gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){pu(e,t),(e=e.alternate)&&pu(e,t)}function Em(){return null}var Td=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}ao.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));so(e,t,null,null)};ao.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){so(null,e,null,null)}),t[Et]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=uc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&dc(e)}};function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mu(){}function zm(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=Gl(i);o.call(f)}}var i=Md(t,r,e,0,null,!1,!1,"",mu);return e._reactRootContainer=i,e[Et]=i.current,Er(e.nodeType===8?e.parentNode:e),pn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=Gl(a);s.call(f)}}var a=bs(e,0,!1,null,null,!1,!1,"",mu);return e._reactRootContainer=a,e[Et]=a.current,Er(e.nodeType===8?e.parentNode:e),pn(function(){so(t,a,n,r)}),a}function co(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Gl(i);s.call(a)}}so(t,i,e,l)}else i=zm(n,t,e,l,r);return Gl(i)}sc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(os(t,n|1),$e(t,ue()),!(W&6)&&(Vn=ue()+500,Zt()))}break;case 13:pn(function(){var r=zt(e,1);if(r!==null){var l=Me();ut(r,e,1,l)}}),As(e,1)}};is=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Me();ut(t,e,134217728,n)}As(e,134217728)}};ac=function(e){if(e.tag===13){var t=Kt(e),n=zt(e,t);if(n!==null){var r=Me();ut(n,e,t,r)}As(e,t)}};uc=function(){return K};cc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};mi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=eo(r);if(!l)throw Error(w(90));Bu(r),si(r,l)}}}break;case"textarea":Hu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Xu=Ls;qu=pn;var Pm={usingClientEntryPoint:!1,Events:[Ar,jn,eo,Gu,Yu,Ls]},lr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ec(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Xl=fl.inject(_m),mt=fl}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fs(t))throw Error(w(200));return jm(e,t,null,n)};We.createRoot=function(e,t){if(!Fs(e))throw Error(w(299));var n=!1,r="",l=Td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=bs(e,1,!1,null,null,n,!1,r,l),e[Et]=t.current,Er(e.nodeType===8?e.parentNode:e),new $s(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ec(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return pn(e)};We.hydrate=function(e,t,n){if(!uo(t))throw Error(w(200));return co(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Fs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Td;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Md(t,null,e,1,n??null,l,!1,o,i),e[Et]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ao(t)};We.render=function(e,t,n){if(!uo(t))throw Error(w(200));return co(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!uo(e))throw Error(w(40));return e._reactRootContainer?(pn(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};We.unstable_batchedUpdates=Ls;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return co(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function Ld(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld)}catch(e){console.error(e)}}Ld(),Lu.exports=We;var Im=Lu.exports,Dd,hu=Im;Dd=hu.createRoot,hu.hydrateRoot;const Mm="/claude",Tm="https://stelle-972218119922.europe-west1.run.app/api",Od=Tm;async function fo(e){const t=await fetch(Mm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const l=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${l}…`)}const r=await t.json();if(!t.ok)throw new Error(r.error||"Claude CLI error");return r}function Lm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Dm(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`;return(await fo(t)).text||"Nessun contenuto estratto."}async function gu(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(l=>`### ${l.name} (${l.domain})
${l.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`;return(await fo(n)).text||"Nessun contenuto estratto."}async function Om(e,t,n){const r=e.map(f=>`### ${f.name}
${f.content}`).join(`

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

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,a=((await fo(o)).text||"").trim().match(/\[[\s\S]*\]/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}async function Rm(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

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
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.`,o=((await fo(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!o)throw new Error("Formato risposta non valido");return JSON.parse(o[0])}let yu=!1;async function bm(){if(yu)return;if(!(await fetch(`${Od}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");yu=!0}async function Am(e,t,n){await bm();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${Od}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:f}=await o.read();if(a)break;s+=i.decode(f,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let y="";for(const g of v)if(g.startsWith("event: "))y=g.slice(7).trim();else if(g.startsWith("data: ")&&y){try{const S=JSON.parse(g.slice(6));n(y,S)}catch{}y=""}}}function Ct(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function $m(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return Ct(e);let r="";for(let l=0;l<n.length;l++){const o=n[l].trim();if(o)if(t.test(o)){t.lastIndex=0;const i=o.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),s=l+1<n.length?n[l+1].trim():"";s?(r+=`<details open><summary>${vu(i)}</summary>${Ct(s)}</details>`,l++):r+=`<strong>${vu(i)}</strong>`}else r+=Ct(o)}return r}function vu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Fm(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function Bm(e,t){if(!e)return"";if(!t)return Ct(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>Fm(o,a)>.7),s=Ct(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function Um(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const xu="​‌",wu="‌​";function Hm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let y=1;y<=l;y++)for(let g=1;g<=o;g++)i[y][g]=n[y-1]===r[g-1]?i[y-1][g-1]+1:Math.max(i[y-1][g],i[y][g-1]);const s=[];let a=l,f=o;for(;a>0||f>0;)a>0&&f>0&&n[a-1]===r[f-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,f--):f>0&&(a===0||i[a][f-1]>=i[a-1][f])?(s.unshift({type:"added",text:r[f-1]}),f--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const y of s)v.length>0&&v[v.length-1].type===y.type?v[v.length-1].text+=y.text:v.push({...y});return v}function ku(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=xu+s.text+wu:l+=s.text);let o=Ct(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${xu}(.*?)${wu}`,"gs"),`<span class="${i}">$1</span>`),o}function Vm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function Wm(){const[e,t]=z.useState(!1),[n,r]=z.useState(-1),[l,o]=z.useState([]),i=z.useRef([]),s=z.useRef(null),a=z.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),f=z.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=z.useCallback((U,p=0)=>{speechSynthesis.cancel(),i.current=U.slice(p),o(U);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=U.indexOf(m);r(x);const E=`${m.title}. ${Vm(m.text)}`,N=new SpeechSynthesisUtterance(E);N.lang="it-IT",N.rate=1;const I=a();I&&(N.voice=I),N.onend=c,N.onerror=c,s.current=N,speechSynthesis.speak(N)};t(!0),c()},[a]),y=z.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),g=z.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),S=z.useCallback(()=>{speechSynthesis.cancel()},[]),C=z.useCallback((U,p,c,m)=>{const x=[];U&&x.push({title:"Cross-Synthesis",text:U,type:"synthesis"});for(const E of c)p[E.id]&&!p[E.id].startsWith("Errore")&&x.push({title:E.name,text:p[E.id],type:"thinker"});if(m&&m.length>0){const E=m.map(N=>{var I;return`${N.name}: ${N.description}${(I=N.citedBy)!=null&&I.length?`. Citato da ${N.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:E,type:"projects"})}v(x)},[v]),P=z.useCallback((U,p)=>{v([{title:U,text:p,type:"single"}])},[v]);return z.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:C,playSingle:P,pause:y,resume:g,stop:f,skipForward:S}}const Qm=[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0,desc:"Ex direttore AI di Tesla e cofondatore OpenAI. Oggi si concentra su agenti, wiki di conoscenza e autoresearch."},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0,desc:"Cofondatore di Twitter e Block. Radicale sulla decentralizzazione, ha abolito la gerarchia aziendale in Block."},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0,desc:"Cofondatore di Y Combinator. Saggista influente su startup, linguaggi e cultura tech."},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0,desc:"CEO di Tesla, SpaceX e xAI. Figura polarizzante che opera tra AI, spazio e politica americana."},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0,desc:"CEO di OpenAI. Al centro del dibattito su AGI, regolamentazione e il futuro del lavoro."},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0,desc:"Investitore e filosofo della Silicon Valley. Noto per le sue riflessioni su ricchezza, felicità e leverage."},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0,desc:"Analista tech indipendente, ex a16z. Saggi rigorosi e data-driven sulle dinamiche del settore."},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0,desc:"Ex CTO di Coinbase. Teorico del Network State e della sovranità computazionale."},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0,desc:"Premio Nobel, padre delle reti neurali. Ha lasciato Google per dedicarsi ai rischi dell'AI."},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0,desc:"Cofondatore di a16z. Investitore in difesa tech e voce del techno-ottimismo radicale."},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / AMI Labs",active:!0,desc:"Premio Turing, inventore delle reti convoluzionali. Ha lasciato Meta per fondare AMI Labs."},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0,desc:"CEO di Google DeepMind. Nobel per la chimica grazie ad AlphaFold."},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0,desc:"Ex chief scientist di OpenAI. Ha fondato Safe Superintelligence con 3 miliardi per ripensare l'AI da zero."},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0,desc:"CEO di NVIDIA. L'uomo dietro le GPU che alimentano la corsa all'AI."},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0,desc:"Creatore di Ethereum. Lavora su AI locale, privacy e verifica crittografica."},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0,desc:"CEO di Stripe. Finanzia ricerca scientifica e ragiona sul software come pizza fatta al momento."},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0,desc:"Creatore di Doom e Quake. Oggi guida Keen Technologies, agenti embodied con pochi parametri."},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Practical AI",active:!0,desc:"Creatore di Datasette. Scrive il 95% del suo codice dal telefono usando agenti AI."},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0,desc:"Creatore di Ruby on Rails. 18 mesi di AI in Basecamp, zero rilasci: ora rende i prodotti accessibili agli agenti."},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0,desc:"Creatore di Keras e del benchmark ARC-AGI. Sostiene che i LLM non ragionano davvero."},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0,desc:"Ex CEO di GitHub, ora VP di Meta Superintelligence Labs. Ha lanciato Entire per ripensare Git per gli agenti."},{id:22,name:"TLDR Founders",handle:"@taborfaltra",domain:"Newsletter / Startup Strategy",active:!0,desc:"Newsletter quotidiana per founder: fundraising, crescita, lezioni dal campo. Curata da Dan Ni."},{id:23,name:"TLDR Tech",handle:"@tlaborfaltra",domain:"Newsletter / Tech Daily",active:!0,desc:"Newsletter quotidiana con le notizie tech più rilevanti, in formato breve e denso.",fontiOnly:!0}],Km=["trendshift.io","GitHub Trending","Hacker News"],Gm=`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
`,Ym=`
  ${Gm}

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
`;function Xm(){const[e,t]=z.useState(Qm),[n,r]=z.useState({}),[l,o]=z.useState({}),[i,s]=z.useState({}),[a,f]=z.useState(null),[v,y]=z.useState("idle"),[g,S]=z.useState(!1),[C,P]=z.useState(""),[U,p]=z.useState(""),[c,m]=z.useState(null),[x,E]=z.useState(null),[N,I]=z.useState(8),[O,ne]=z.useState(!1),[T,ve]=z.useState([]),[It,Mt]=z.useState(null),[Pe,gt]=z.useState("signals"),[Fe,Gn]=z.useState({leftIdx:1,rightIdx:0}),[_,b]=z.useState("emerging"),[D,ee]=z.useState([]),[G,en]=z.useState([]),[Ke,gn]=z.useState(null),[tt,Tt]=z.useState("idle"),[Lt,po]=z.useState(Km),[Bs,Us]=z.useState(""),[Rd,mo]=z.useState(!1),[Hs,bd]=z.useState(!1),[yn,Ad]=z.useState(""),[Fr,Vs]=z.useState([]),[Br,ho]=z.useState("idle"),[Ur,go]=z.useState(null),[Ws,Qs]=z.useState(null),[qm,Jm]=z.useState("idle"),[Ks,$d]=z.useState({scan:"",launchd:""}),[Hr,yo]=z.useState("idle"),[Zm,Gs]=z.useState([]),[Fd,Bd]=z.useState({}),[Ud,Hd]=z.useState(new Set),vo=z.useRef(null),pe=Wm(),[Vd,Wd]=z.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),me=e.filter(d=>d.active),Ys=me.filter(d=>!d.fontiOnly),vn=Object.values(i).filter(d=>d==="done"||d==="stale").length,xo=me.length;z.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const h=JSON.parse(d.value);if(h.results){r(h.results);const k=new Set((h.staleIds||[]).map(String)),L={};for(const $ of Object.keys(h.results))h.results[$].startsWith("Errore")?L[$]="error":k.has(String($))?L[$]="stale":L[$]="done";s(L),h.staleIds&&Gs(h.staleIds)}if(h.prevResults&&o(h.prevResults),h.lastScanTime&&m(h.lastScanTime),h.intervalHours&&I(h.intervalHours),h.synthesis&&(f(h.synthesis),y("done")),h.synthesisHistory){const k=h.synthesisHistory.map((L,$,V)=>{if(L.conceptDiff&&!L.conceptDiffs){const he=V[$+1],{conceptDiff:Ne,...nt}=L;return he?{...nt,conceptDiffs:{[he.id]:Ne}}:nt}return L});ve(k)}h.projects&&ee(h.projects),h.prevProjects&&en(h.prevProjects),h.projectsTime&&gn(h.projectsTime),h.projectSources&&po(h.projectSources)}}catch{}})()},[]);const Se=z.useCallback(async(d={})=>{try{const h=await window.storage.get("signal-state"),L={...h?JSON.parse(h.value):{},...d};await window.storage.set("signal-state",JSON.stringify(L))}catch{}},[]);z.useCallback(async(d={})=>{await Se({results:n,prevResults:l,lastScanTime:c,intervalHours:N,synthesis:a,synthesisHistory:T,projects:D,prevProjects:G,projectsTime:Ke,projectSources:Lt,...d})},[n,l,c,N,a,T,D,G,Ke,Lt,Se]);const Vr=z.useCallback((d,h)=>h.length>0&&h[0].text===d?h:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:me.map(L=>L.name),conceptDiffs:{}},...h].slice(0,50),[me]),Wr=z.useCallback(async d=>{var L;if(d.length<2)return d;const h=d[0],k=d[1];if((L=h.conceptDiffs)!=null&&L[k.id])return d;try{const $=await Rm(k.text,h.text),V=[...d];return V[0]={...V[0],conceptDiffs:{...V[0].conceptDiffs||{},[k.id]:$}},ve(V),await Se({synthesisHistory:V}),V}catch($){return console.error("[concept-diff auto]",$),d}},[Se]),Xs=z.useCallback(async(d,h)=>{try{await navigator.clipboard.writeText(d)}catch{const k=document.createElement("textarea");k.value=d,document.body.appendChild(k),k.select(),document.execCommand("copy"),document.body.removeChild(k)}Mt(h),setTimeout(()=>Mt(null),2e3)},[]);z.useCallback(async d=>{const h=T.filter(k=>k.id!==d);ve(h),await Se({synthesisHistory:h})},[T,Se]),z.useEffect(()=>{const d=()=>{if(!c){E(null);return}const L=c+N*3600*1e3-Date.now();if(L<=0){E("ora");return}const $=Math.floor(L/36e5),V=Math.floor(L%36e5/6e4),he=Math.floor(L%6e4/1e3);E(`${$}h ${V}m ${he}s`)};d();const h=setInterval(d,1e3);return()=>clearInterval(h)},[c,N]);const wo=z.useRef(null);z.useEffect(()=>{const d=setInterval(()=>{const h=new Date,k=h.getHours();if(k!==5&&k!==17||g||!wo.current)return;const L=`${h.toDateString()}-${k}`;(c?(()=>{const V=new Date(c);return`${V.toDateString()}-${V.getHours()}`})():null)!==L&&wo.current(!0)},6e4);return()=>clearInterval(d)},[g,c]);const ko=z.useCallback(async()=>{yo("loading");const d="/signal-brief/";try{const[h,k]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),L=h.ok?await h.text():"",$=k.ok?await k.text():"";$d({scan:L,launchd:$}),yo("done")}catch(h){console.error("[logs]",h),yo("error")}},[]);z.useEffect(()=>{Pe==="log"&&ko()},[Pe,ko]);const qs=z.useCallback(d=>{if(!d)return;const h=d.trim().toLowerCase();if(!h)return;const k=e.find(L=>{const $=L.name.toLowerCase();return $===h||$.includes(h)||h.includes($)});k&&(gt("signals"),ne(!1),setTimeout(()=>{const L=document.getElementById(`thinker-${k.id}`);L&&(L.scrollIntoView({behavior:"smooth",block:"start"}),L.classList.add("thinker-card-highlight"),setTimeout(()=>L.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Qd=(d,h)=>{if(!d||!h)return 0;const k=new Set(d.toLowerCase().split(/\s+/)),L=new Set(h.toLowerCase().split(/\s+/));return[...k].filter(V=>L.has(V)).length/Math.max(k.size,L.size)},Js=d=>!l[d]||!n[d]?!1:Qd(l[d],n[d])<.72;me.filter(d=>i[d.id]==="done"&&Js(d.id)).length;const Zs=e.length>0&&e.every(d=>d.active),Kd=()=>{g||t(d=>d.map(h=>({...h,active:!Zs})))},So=()=>{C.trim()&&(t(d=>[...d,{id:Date.now(),name:C.trim(),handle:U.trim()||"@?",domain:"Custom",active:!0}]),P(""),p(""))},ea=()=>{const d=Bs.trim();if(!d||Lt.includes(d))return;const h=[...Lt,d];po(h),Us(""),Se({projectSources:h})},Gd=d=>{const h=Lt.filter(k=>k!==d);po(h),Se({projectSources:h})},[Yd,ta]=z.useState(null),Qr=z.useCallback(async(d,h)=>{Tt("loading"),ta(null);try{const k=await Om(h,d,Lt);en(D),ee(k);const L=Date.now();gn(L),Tt("done"),await Se({projects:k,prevProjects:D,projectsTime:L})}catch(k){console.error("[Signal.Brief] fetchProjects error:",k),Tt("error"),ta(k.message)}},[Lt,Se,D]),na=2*3600*1e3,Kr=z.useCallback(async(d=!1)=>{if(me.length===0)return;if(!d&&c&&Date.now()-c<na){const F=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${F} minuti fa. Cache valida per ancora ${Math.round((na-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}gt("signals"),S(!0),f(null),y("idle"),o(F=>({...F,...n}));const h={...n},k={};for(const F of me){const _e=h[F.id];_e&&!_e.startsWith("Errore")&&(k[F.id]=_e)}const L={};me.forEach(F=>{L[F.id]="loading"}),s(L),r(k);const $={...k},V=[],he={},Ne=2,nt=F=>new Promise(_e=>setTimeout(_e,F));for(let F=0;F<me.length;F+=Ne){const _e=me.slice(F,F+Ne);await Promise.all(_e.map(async B=>{try{const re=await Dm(B);$[B.id]=re,r(ae=>({...ae,[B.id]:re})),s(ae=>({...ae,[B.id]:"done"}))}catch(re){const ae=k[B.id]!=null;he[B.id]=re.message,ae?(V.push(String(B.id)),s(q=>({...q,[B.id]:"stale"}))):($[B.id]=`Errore: ${re.message}`,r(q=>({...q,[B.id]:`Errore: ${re.message}`})),s(q=>({...q,[B.id]:"error"})))}})),F+Ne<me.length&&await nt(1200)}Gs(V),Bd(he);const Ge=Lm($),De=Ge?Date.now():c;Ge&&(m(De),Wd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Se({results:$,prevResults:h,lastScanTime:De,intervalHours:N,synthesis:a,synthesisHistory:T,staleIds:V}),S(!1);const rt=Ys.filter(F=>$[F.id]&&!$[F.id].startsWith("Errore")).map(F=>({name:F.name,domain:F.domain,content:$[F.id]}));if(rt.length>=2){y("loading");try{const F=await gu(rt);f(F),y("done");const _e=Vr(F,T);ve(_e),await Se({results:$,prevResults:h,lastScanTime:De,intervalHours:N,synthesis:F,synthesisHistory:_e}),Wr(_e),Qr(F,rt)}catch{y("error")}}},[me,n,N,Se,a,T,Vr,c,Qr,Wr]);z.useEffect(()=>{wo.current=Kr},[Kr]);const Xd=z.useCallback(async()=>{const d=Ys.filter(h=>i[h.id]==="done"||i[h.id]==="stale").map(h=>({name:h.name,domain:h.domain,content:n[h.id]}));if(!(d.length<2)){y("loading");try{const h=await gu(d);f(h),y("done");const k=Vr(h,T);ve(k),await Se({synthesis:h,synthesisHistory:k}),Wr(k),Qr(h,d)}catch(h){f(`Errore nella sintesi: ${h.message}`),y("error")}}},[me,i,n,Se,T,Vr,Qr,Wr]),ra=z.useCallback(async()=>{if(yn.trim()){Vs([]),go(null),Qs(null),ho("loading");try{await Am(yn,a,(d,h)=>{if(d==="session_started"&&h.session_id&&Qs(h.session_id),d==="sage_speaks"&&h.content&&Vs(k=>[...k,{name:h.persona_name,icon:h.persona_icon,color:h.persona_color,content:h.content}]),d==="moderator_synthesis"&&h.content&&go(h.content),d==="moderator"){const k=h.content||h.decision||h.synthesis||"";k&&go(k)}}),ho("done")}catch(d){console.error("[council]",d),ho("error")}}},[yn,a]),qd=vn>=2&&!g&&v!=="loading",la=Object.keys(n).length>0,No="Disponibile solo in locale (richiede Claude CLI)",Jd=me.filter(d=>{if(!i[d.id])return!1;if(O){const h=i[d.id];return(h==="done"||h==="stale")&&Js(d.id)}return!0});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Ym}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>mo(!0),children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"tagline",children:"Intelligence Dashboard · AI-Powered"})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",Vd]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Xd,disabled:!qd||!0,title:No,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!vo.current){const h=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);h.onerror=()=>{h.src="/signal-brief/podcast/episodes/2026-04-12.mp3",h.play()},vo.current=h}const d=vo.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Kr(!0),disabled:g||me.length===0||!0,title:No,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Kr(!1),disabled:g||me.length===0||!0,title:No,children:g?`Scanning ${vn}/${xo}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${Pe==="signals"?"active":""}`,onClick:()=>gt("signals"),children:["Segnali",vn>0&&u.jsx("span",{className:"tab-badge",children:vn})]}),u.jsxs("button",{className:`tab-btn ${Pe==="projects"?"active":""}`,onClick:()=>gt("projects"),children:["Progetti",D.length>0&&u.jsx("span",{className:"tab-badge",children:D.length})]}),u.jsxs("button",{className:`tab-btn ${Pe==="history"?"active":""}`,onClick:()=>gt("history"),children:["Cronologia",T.length>0&&u.jsx("span",{className:"tab-badge",children:T.length})]}),u.jsx("button",{className:`tab-btn ${Pe==="log"?"active":""}`,onClick:()=>gt("log"),children:"▤ Log"}),u.jsx("button",{className:`tab-btn ${Pe==="config"?"active":""}`,onClick:()=>gt("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[Pe==="signals"&&u.jsxs(u.Fragment,{children:[g&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${xo>0?vn/xo*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&T.length>0&&u.jsx("span",{className:"timestamp",children:new Date(T[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>pe.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>bd(d=>!d),title:"Chiedi ai thinkers",style:Hs?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Xs(a,"synth"),children:It==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:Um(T.length>1?Bm(a,T[1].text):Ct(a),me)}}),Hs&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Ws?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Ws}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:yn,onChange:d=>Ad(d.target.value),onKeyDown:d=>d.key==="Enter"&&ra(),disabled:Br==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:ra,disabled:Br==="loading"||!yn.trim(),children:Br==="loading"?"In deliberazione…":"Chiedi"})]}),Fr.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Fr.map((d,h)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name]}),u.jsx("div",{children:d.content})]},h))}),Ur&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const d=Fr.map(h=>`${h.name}: ${h.content}`).join(`

`)+`

Sintesi: `+Ur;pe.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${yn}

`+Fr.map(h=>`${h.icon} ${h.name}:
${h.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Ur}`;Xs(d,"council")},children:It==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:Ct(Ur)}})]}),Br==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),la&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",vn," acquisiti"]})}),!la&&!g?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:Jd.map(d=>{const h=i[d.id],k=Fd[d.id],L=Ud.has(d.id),$=V=>{V.stopPropagation(),Hd(he=>{const Ne=new Set(he);return Ne.has(d.id)?Ne.delete(d.id):Ne.add(d.id),Ne})};return u.jsxs("div",{id:`thinker-${d.id}`,className:`card ${h}`,children:[u.jsxs("div",{className:`card-header card-toggle ${L?"collapsed":""}`,onClick:$,children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[u.jsx("span",{className:"toggle-icon",children:"▾"}),d.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:V=>V.stopPropagation(),children:d.handle})]}),u.jsx("div",{className:"card-domain",children:d.domain})]}),(h==="done"||h==="stale")&&u.jsx("button",{className:"btn-listen",onClick:V=>{V.stopPropagation(),pe.playSingle(d.name,n[d.id])},title:"Ascolta",children:"🔊"}),h==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),h==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),h==="stale"&&u.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${k?": "+k:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),h==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),d.fontiOnly&&u.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!L&&u.jsxs("div",{className:"card-body",children:[d.desc&&u.jsx("div",{className:"card-desc",children:d.desc}),h==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(h==="done"||h==="stale")&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:$m(n[d.id])}}),h==="error"&&u.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),Pe==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",D.length>0&&` · ${D.length} trovati`]})}),tt==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),tt==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",Yd||"errore sconosciuto"]}),D.length===0&&tt!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),D.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),Ke&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(Ke).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),D.some(d=>d.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),G.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),D.map((d,h)=>{const k=d.maturity!=null&&d.momentum!=null,L=Math.ceil(Math.sqrt(D.length)),$=Math.floor(h/L),V=h%L,he=k?d.maturity:2+V/Math.max(L-1,1)*7,Ne=k?d.momentum:8-$/Math.max(Math.ceil(D.length/L)-1,1)*7,nt=50+(he-1)/9*420,Ge=370-(Ne-1)/9*360,De=G.length>0&&!G.some(F=>F.name===d.name),rt=De?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:nt,cy:Ge,r:De?6:5,fill:rt,opacity:"0.85",stroke:De?"#fca5a5":"none",strokeWidth:De?2:0,onClick:()=>window.open(d.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:nt+9,y:Ge+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:De?"#dc2626":"#374151",fontWeight:De?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},h)})]})]}),D.length>0&&u.jsx("div",{className:"projects-grid",children:D.map((d,h)=>u.jsxs("div",{className:"project-card",style:G.length>0&&!G.some(k=>k.name===d.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),G.length>0&&!G.some(k=>k.name===d.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&u.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&u.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:d.description}),u.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&u.jsx("div",{className:"project-themes",children:d.themes.map((k,L)=>u.jsx("span",{className:"project-theme",children:k},L))})]})]},h))})]}),Pe==="history"&&u.jsx(u.Fragment,{children:T.length<2?u.jsxs("div",{className:"history-empty",children:[T.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",T.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(T[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Ct(T[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const d=Date.now(),h=864e5,k=d-7*h,L=d-21*h,$=T.filter(B=>B.timestamp>=k),V=T.filter(B=>B.timestamp>=L&&B.timestamp<k),he={};for(const B of V){const re=new Date(B.timestamp),ae=new Date(re);ae.setDate(ae.getDate()-ae.getDay());const q=ae.toISOString().slice(0,10);(!he[q]||B.timestamp>he[q].timestamp)&&(he[q]=B)}const Ne=Object.values(he).sort((B,re)=>re.timestamp-B.timestamp),nt=T.filter(B=>B.timestamp<L),Ge={};for(const B of nt){const re=new Date(B.timestamp),ae=new Date(re);ae.setDate(ae.getDate()-ae.getDay());const q=ae.toISOString().slice(0,10);(!Ge[q]||B.timestamp>Ge[q].timestamp)&&(Ge[q]=B)}const De=Object.values(Ge).sort((B,re)=>re.timestamp-B.timestamp),rt=(B,re,ae)=>B.length===0?null:u.jsx("optgroup",{label:re,children:B.map(q=>{const Co=T.indexOf(q),Gr=new Date(q.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),jo=ae?`Sett. ${Gr.split(",")[0]} — ${q.thinkers.slice(0,3).join(", ")}${q.thinkers.length>3?` +${q.thinkers.length-3}`:""}`:`${Gr} — ${q.thinkers.slice(0,3).join(", ")}${q.thinkers.length>3?` +${q.thinkers.length-3}`:""}`;return u.jsx("option",{value:Co,children:jo},q.id)})},re),F=T[0],_e=F?`${new Date(F.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${F.thinkers.slice(0,3).join(", ")}${F.thinkers.length>3?` +${F.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Fe.leftIdx,onChange:B=>Gn(re=>({...re,leftIdx:Number(B.target.value)})),children:[rt($,"Ultimi 7 giorni",!1),rt(Ne,"Ultime 3 settimane",!0),rt(De,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[_e," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var oa;const d=T[Fe.rightIdx],h=T[Fe.leftIdx];if(!d||!h||Fe.leftIdx===Fe.rightIdx)return null;const k=d.timestamp>=h.timestamp?d:h,L=k===d?h:d;k===d?Fe.rightIdx:Fe.leftIdx;const $=((oa=k.conceptDiffs)==null?void 0:oa[L.id])||null,V=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],he={DHH:["hansson","heinemeier","37signals"]},Ne=j=>{if(!j)return null;const R=j.trim().toLowerCase();if(!R)return null;for(const A of e){const Q=A.name.toLowerCase();if(Q===R||Q.includes(R)||R.includes(Q))return A;const Y=he[A.name]||[];for(const yt of Y)if(R.includes(yt)||yt.includes(R))return A}return null},nt=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),Ge=j=>(j||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(R=>R.length>=4&&!nt.has(R)),De=j=>j.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),rt=j=>{const R=j.split(/\s+/);return R.length>40?R.slice(0,40).join(" ")+"...":j},F=j=>{if(!j)return[];const R=j.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),Q=(R!==-1?j.slice(0,R):j).split(/\n\n+/).map(vt=>De(vt)).filter(vt=>vt.length>120),Y=vt=>{const Xn=Ge(vt);if(!Xn.length||!Q.length)return"";let Yr="",zo=0;for(const ia of Q){const nf=ia.toLowerCase();let Po=0;for(const rf of Xn)nf.includes(rf)&&Po++;Po>zo&&(Yr=ia,zo=Po)}return zo>0?Yr:""},yt=[],Yn=new Set,tf=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let Eo;for(;(Eo=tf.exec(j))!==null;){const vt=Eo[2].replace(/[.,;)]+$/,"");if(Yn.has(vt))continue;Yn.add(vt);const Xn=Eo[1].trim(),Yr=rt(Y(Xn));yt.push({url:vt,title:Xn,snippet:Yr})}return yt},_e=j=>{const R=Ne(j);return R?F(n[R.id]||""):[]},B=(()=>{const j=new Set,R=[];for(const A of e){j.has(A.name)||(j.add(A.name),R.push(A.name));const Q=A.name.split(/\s+/);if(Q.length>1){const Y=Q[Q.length-1];Y.length>=4&&!j.has(Y)&&(j.add(Y),R.push(Y))}}return R.sort((A,Q)=>Q.length-A.length)})(),re=B.length?new RegExp(`\\b(${B.map(j=>j.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,ae=j=>{if(!j||typeof j!="string"||!re)return j;const R=[];let A=0,Q;for(re.lastIndex=0;(Q=re.exec(j))!==null;){Q.index>A&&R.push(j.slice(A,Q.index));const Y=Q[0];R.push(u.jsx("span",{className:"concept-who-link",onClick:yt=>{yt.stopPropagation(),qs(Y)},children:Y},R.length)),A=Q.index+Y.length}return R.length===0?j:(A<j.length&&R.push(j.slice(A)),R)},q=(j,R)=>{if(j==null)return null;if(typeof j=="string")return{title:j,detail:"",who:[],sides:[]};if(typeof j!="object")return null;if(R==="evolved"){const A=j.from??j.da??j.before??"",Q=j.to??j.a??j.after??"",Y=A&&Q?`${A} → ${Q}`:A||Q||j.detail||"";return{title:j.concept||j.title||j.name||"",detail:Y,who:j.who||[],sides:[]}}return R==="tensions"?{title:j.axis||j.concept||j.title||"",detail:j.detail||"",who:j.who||[],sides:j.sides||[]}:{title:j.concept||j.title||j.name||"",detail:j.detail||j.description||"",who:j.who||[],sides:[]}},Co=j=>j!=null&&j.length?j.slice(0,4).map((R,A)=>u.jsx("a",{className:"concept-cite",href:R.url,target:"_blank",rel:"noopener noreferrer",title:R.snippet||R.title||R.url,onClick:Q=>Q.stopPropagation(),children:A+1},A)):null,Gr=j=>j!=null&&j.length?u.jsx("div",{className:"concept-item-who",children:j.map((R,A)=>{const Q=_e(R);return u.jsxs("span",{className:"concept-who-item",children:[A>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${R}`,onClick:Y=>{Y.stopPropagation(),qs(R)},children:R}),Q.length>0&&u.jsx("sup",{className:"concept-cites",children:Co(Q)})]},A)})}):null,jo=(j,R)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",ae(j)]},R),Zd=(j,R)=>{const Q=(j[R]||[]).map(Y=>q(Y,R)).filter(Boolean);return Q.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):Q.map((Y,yt)=>{var Yn;return u.jsxs("div",{className:`concept-item concept-${R==="tensions"?"tension":R}`,children:[Y.title&&u.jsx("div",{className:"concept-item-title",children:ae(Y.title)}),Y.detail&&u.jsx("div",{className:"concept-item-detail",children:ae(Y.detail)}),R==="tensions"&&((Yn=Y.sides)==null?void 0:Yn.map(jo)),Gr(Y.who)]},yt)})},ef=j=>{const R=V.find(A=>A.key===_)?_:"emerging";return V.find(A=>A.key===R),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:V.map(A=>{const Q=(j[A.key]||[]).length,Y=A.key===R;return u.jsxs("button",{className:`concept-tab ${Y?"active":""}`,onClick:()=>b(A.key),style:Y?{color:A.color,borderBottomColor:A.color}:void 0,children:[u.jsxs("span",{children:[A.icon," ",A.label]}),u.jsx("span",{className:"concept-tab-count",children:Q})]},A.key)})}),u.jsx("div",{className:"concept-tab-body",children:Zd(j,R)})]})};return $?ef($):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=T[Fe.leftIdx],h=T[Fe.rightIdx];if(!d||!h)return null;const k=Hm(d.text,h.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:ku(k,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(h.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:h.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:ku(k,"right")}})]})]})})()]})}),Pe==="log"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:ko,disabled:Hr==="loading",children:Hr==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=k=>{if(!k)return"info";const L=k.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(L)?"error":/\b(warn|attenzione|warning)/i.test(L)?"warn":/^\s*[✓]\s/.test(k)||/\b(ok|done|complete|pushato|ready)\b/i.test(L)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(k)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(k)?"event":"info"},h=k=>{if(!k||!k.trim())return u.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const L=k.split(`
`);return u.jsx("div",{className:"log-box",children:L.map(($,V)=>u.jsx("span",{className:`log-line log-${d($)}`,children:$||" "},V))})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Hr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ks.scan)]}),u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Hr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ks.launchd)]})]})})()]}),Pe==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",me.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Kd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Zs?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(d=>u.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:d.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:d.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),children:d.handle})," · ",d.domain]})]}),u.jsx("div",{className:`thinker-status ${i[d.id]||""}`})]},d.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:C,disabled:!0,onChange:d=>P(d.target.value),onKeyDown:d=>d.key==="Enter"&&So(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:U,disabled:!0,onChange:d=>p(d.target.value),onKeyDown:d=>d.key==="Enter"&&So(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:So,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(d=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:N===d?"#eff6ff":"",color:N===d?"#2563eb":"",borderColor:N===d?"#bfdbfe":""},onClick:()=>{I(d),Se({intervalHours:d})},children:[d,"h"]},d)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Lt.map(d=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:d}),u.jsx("button",{className:"source-delete",onClick:()=>Gd(d),disabled:!0,children:"×"})]},d))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Bs,disabled:!0,onChange:d=>Us(d.target.value),onKeyDown:d=>d.key==="Enter"&&ea(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:ea,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(pe.isPlaying||pe.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:pe.isPlaying?pe.pause:pe.resume,children:pe.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:pe.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:pe.currentChapter>=0&&pe.chapters[pe.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:pe.chapters[pe.currentChapter].title})," — ",pe.currentChapter+1,"/",pe.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:pe.stop,title:"Stop",children:"⏹"})]}),Rd&&u.jsx("div",{className:"about-backdrop",onClick:()=>mo(!1),children:u.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsxs("div",{className:"about-logo",children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"about-tagline",children:"Intelligence Dashboard · AI-Powered"}),u.jsx("div",{className:"about-desc",children:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano."}),u.jsxs("div",{className:"about-footer",children:["Ideato da Mike · ",u.jsx("a",{href:"https://www.instagram.com/it.mikesoft",target:"_blank",rel:"noopener noreferrer",children:"MikeSoft"}),u.jsx("br",{}),"100% AI-generated · Made in Italy · 2026"]}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>mo(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};Dd(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Xm,{})}));
