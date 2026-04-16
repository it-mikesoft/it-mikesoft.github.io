(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Cu={exports:{}},qo={},ju={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var br=Symbol.for("react.element"),sf=Symbol.for("react.portal"),af=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),cf=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),ff=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),mf=Symbol.for("react.suspense"),hf=Symbol.for("react.memo"),gf=Symbol.for("react.lazy"),ua=Symbol.iterator;function yf(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zu=Object.assign,Pu={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Pu,this.updater=n||Eu}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _u(){}_u.prototype=Qn.prototype;function Gi(e,t,n){this.props=e,this.context=t,this.refs=Pu,this.updater=n||Eu}var Yi=Gi.prototype=new _u;Yi.constructor=Gi;zu(Yi,Qn.prototype);Yi.isPureReactComponent=!0;var ca=Array.isArray,Iu=Object.prototype.hasOwnProperty,Xi={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Iu.call(t,r)&&!Mu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:br,type:e,key:l,ref:i,props:o,_owner:Xi.current}}function vf(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qi(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function xf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var da=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xf(""+e.key):t.toString(36)}function ho(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case br:case sf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Il(i,0):r,ca(o)?(n="",e!=null&&(n=e.replace(da,"$&/")+"/"),ho(o,t,n,"",function(f){return f})):o!=null&&(qi(o)&&(o=vf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(da,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ca(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Il(l,s);i+=ho(l,t,n,a,o)}else if(a=yf(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Il(l,s++),i+=ho(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function qr(e,t,n){if(e==null)return e;var r=[],o=0;return ho(e,r,"","",function(l){return t.call(n,l,o++)}),r}function wf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},go={transition:null},kf={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:go,ReactCurrentOwner:Xi};function Lu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:qr,forEach:function(e,t,n){qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qr(e,function(){t++}),t},toArray:function(e){return qr(e,function(t){return t})||[]},only:function(e){if(!qi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Qn;H.Fragment=af;H.Profiler=cf;H.PureComponent=Gi;H.StrictMode=uf;H.Suspense=mf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;H.act=Lu;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=zu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Xi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Iu.call(t,a)&&!Mu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:br,type:e.type,key:o,ref:l,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:ff,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:df,_context:e},e.Consumer=e};H.createElement=Tu;H.createFactory=function(e){var t=Tu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:pf,render:e}};H.isValidElement=qi;H.lazy=function(e){return{$$typeof:gf,_payload:{_status:-1,_result:e},_init:wf}};H.memo=function(e,t){return{$$typeof:hf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=go.transition;go.transition={};try{e()}finally{go.transition=t}};H.unstable_act=Lu;H.useCallback=function(e,t){return Te.current.useCallback(e,t)};H.useContext=function(e){return Te.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};H.useEffect=function(e,t){return Te.current.useEffect(e,t)};H.useId=function(){return Te.current.useId()};H.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Te.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};H.useRef=function(e){return Te.current.useRef(e)};H.useState=function(e){return Te.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Te.current.useTransition()};H.version="18.3.1";ju.exports=H;var z=ju.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=z,Nf=Symbol.for("react.element"),Cf=Symbol.for("react.fragment"),jf=Object.prototype.hasOwnProperty,Ef=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zf={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)jf.call(t,r)&&!zf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nf,type:e,key:l,ref:i,props:o,_owner:Ef.current}}qo.Fragment=Cf;qo.jsx=Du;qo.jsxs=Du;Cu.exports=qo;var u=Cu.exports,Ou={exports:{}},We={},bu={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var D=_.length;_.push(R);e:for(;0<D;){var ee=D-1>>>1,G=_[ee];if(0<o(G,R))_[ee]=R,_[D]=G,D=ee;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],D=_.pop();if(D!==R){_[0]=D;e:for(var ee=0,G=_.length,en=G>>>1;ee<en;){var Ke=2*(ee+1)-1,yn=_[Ke],tt=Ke+1,Tt=_[tt];if(0>o(yn,D))tt<G&&0>o(Tt,yn)?(_[ee]=Tt,_[tt]=D,ee=tt):(_[ee]=yn,_[Ke]=D,ee=Ke);else if(tt<G&&0>o(Tt,D))_[ee]=Tt,_[tt]=D,ee=tt;else break e}}return R}function o(_,R){var D=_.sortIndex-R.sortIndex;return D!==0?D:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],v=1,y=null,g=3,S=!1,C=!1,P=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var R=n(f);R!==null;){if(R.callback===null)r(f);else if(R.startTime<=_)r(f),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(f)}}function x(_){if(P=!1,m(_),!C)if(n(a)!==null)C=!0,Fe(E);else{var R=n(f);R!==null&&Yn(x,R.startTime-_)}}function E(_,R){C=!1,P&&(P=!1,p(O),O=-1),S=!0;var D=g;try{for(m(R),y=n(a);y!==null&&(!(y.expirationTime>R)||_&&!ve());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,g=y.priorityLevel;var G=ee(y.expirationTime<=R);R=e.unstable_now(),typeof G=="function"?y.callback=G:y===n(a)&&r(a),m(R)}else r(a);y=n(a)}if(y!==null)var en=!0;else{var Ke=n(f);Ke!==null&&Yn(x,Ke.startTime-R),en=!1}return en}finally{y=null,g=D,S=!1}}var N=!1,I=null,O=-1,ne=5,T=-1;function ve(){return!(e.unstable_now()-T<ne)}function It(){if(I!==null){var _=e.unstable_now();T=_;var R=!0;try{R=I(!0,_)}finally{R?Mt():(N=!1,I=null)}}else N=!1}var Mt;if(typeof c=="function")Mt=function(){c(It)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,gt=Pe.port2;Pe.port1.onmessage=It,Mt=function(){gt.postMessage(null)}}else Mt=function(){U(It,0)};function Fe(_){I=_,N||(N=!0,Mt())}function Yn(_,R){O=U(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){C||S||(C=!0,Fe(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var D=g;g=R;try{return _()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=g;g=_;try{return R()}finally{g=D}},e.unstable_scheduleCallback=function(_,R,D){var ee=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ee+D:ee):D=ee,_){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,_={id:v++,callback:R,priorityLevel:_,startTime:D,expirationTime:G,sortIndex:-1},D>ee?(_.sortIndex=D,t(f,_),n(a)===null&&_===n(f)&&(P?(p(O),O=-1):P=!0,Yn(x,D-ee))):(_.sortIndex=G,t(a,_),C||S||(C=!0,Fe(E))),_},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(_){var R=g;return function(){var D=g;g=R;try{return _.apply(this,arguments)}finally{g=D}}}})(Ru);bu.exports=Ru;var Pf=bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f=z,Ve=Pf;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Au=new Set,xr={};function hn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(xr[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,If=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},pa={};function Mf(e){return ni.call(pa,e)?!0:ni.call(fa,e)?!1:If.test(e)?pa[e]=!0:(fa[e]=!0,!1)}function Tf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lf(e,t,n,r){if(t===null||typeof t>"u"||Tf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ji=/[\-:]([a-z])/g;function Zi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ji,Zi);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ji,Zi);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ji,Zi);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lf(t,n,o,r)&&(n=null),r||o===null?Mf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=_f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),$u=Symbol.for("react.provider"),Fu=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),oi=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),Bu=Symbol.for("react.offscreen"),ma=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ml;function ir(e){if(Ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ml=t&&t[1]||""}return`
`+Ml+e}var Tl=!1;function Ll(e,t){if(!e||Tl)return"";Tl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Tl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ir(e):""}function Df(e){switch(e.tag){case 5:return ir(e.type);case 16:return ir("Lazy");case 13:return ir("Suspense");case 19:return ir("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case ri:return"Profiler";case ts:return"StrictMode";case oi:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fu:return(e.displayName||"Context")+".Consumer";case $u:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function Of(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bf(e){var t=Uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=bf(e))}function Hu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ha(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vu(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function ai(e,t){Vu(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&ui(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ui(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var sr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ci(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(sr(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Wu(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function va(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rf=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){Rf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function Gu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function Yu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Af=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,t){if(t){if(Af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,Dn=null,On=null;function xa(e){if(e=$r(e)){if(typeof hi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=nl(t),hi(e.stateNode,e.type,t))}}function Xu(e){Dn?On?On.push(e):On=[e]:Dn=e}function qu(){if(Dn){var e=Dn,t=On;if(On=Dn=null,xa(e),t)for(e=0;e<t.length;e++)xa(t[e])}}function Ju(e,t){return e(t)}function Zu(){}var Dl=!1;function ec(e,t,n){if(Dl)return e(t,n);Dl=!0;try{return Ju(e,t,n)}finally{Dl=!1,(Dn!==null||On!==null)&&(Zu(),qu())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var gi=!1;if(jt)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{gi=!1}function $f(e,t,n,r,o,l,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var dr=!1,Po=null,_o=!1,yi=null,Ff={onError:function(e){dr=!0,Po=e}};function Bf(e,t,n,r,o,l,i,s,a){dr=!1,Po=null,$f.apply(Ff,arguments)}function Uf(e,t,n,r,o,l,i,s,a){if(Bf.apply(this,arguments),dr){if(dr){var f=Po;dr=!1,Po=null}else throw Error(w(198));_o||(_o=!0,yi=f)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wa(e){if(gn(e)!==e)throw Error(w(188))}function Hf(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return wa(o),e;if(l===r)return wa(o),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function nc(e){return e=Hf(e),e!==null?rc(e):null}function rc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rc(e);if(t!==null)return t;e=e.sibling}return null}var oc=Ve.unstable_scheduleCallback,ka=Ve.unstable_cancelCallback,Vf=Ve.unstable_shouldYield,Wf=Ve.unstable_requestPaint,ue=Ve.unstable_now,Qf=Ve.unstable_getCurrentPriorityLevel,ls=Ve.unstable_ImmediatePriority,lc=Ve.unstable_UserBlockingPriority,Io=Ve.unstable_NormalPriority,Kf=Ve.unstable_LowPriority,ic=Ve.unstable_IdlePriority,Jo=null,mt=null;function Gf(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:qf,Yf=Math.log,Xf=Math.LN2;function qf(e){return e>>>=0,e===0?32:31-(Yf(e)/Xf|0)|0}var to=64,no=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=ar(s):(l&=i,l!==0&&(r=ar(l)))}else i=n&~o,i!==0?r=ar(i):l!==0&&(r=ar(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),o=1<<n,r|=e[n],t&=~o;return r}function Jf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-at(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=Jf(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sc(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function Ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function ep(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function is(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uc,ss,cc,dc,fc,xi=!1,ro=[],Bt=null,Ut=null,Ht=null,Sr=new Map,Nr=new Map,Rt=[],tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sa(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function er(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=$r(t),t!==null&&ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function np(e,t,n,r,o){switch(t){case"focusin":return Bt=er(Bt,e,t,n,r,o),!0;case"dragenter":return Ut=er(Ut,e,t,n,r,o),!0;case"mouseover":return Ht=er(Ht,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Sr.set(l,er(Sr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Nr.set(l,er(Nr.get(l)||null,e,t,n,r,o)),!0}return!1}function pc(e){var t=on(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=tc(n),t!==null){e.blockedOn=t,fc(e.priority,function(){cc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=$r(n),t!==null&&ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Na(e,t,n){yo(e)&&n.delete(t)}function rp(){xi=!1,Bt!==null&&yo(Bt)&&(Bt=null),Ut!==null&&yo(Ut)&&(Ut=null),Ht!==null&&yo(Ht)&&(Ht=null),Sr.forEach(Na),Nr.forEach(Na)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,rp)))}function Cr(e){function t(o){return tr(o,e)}if(0<ro.length){tr(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&tr(Bt,e),Ut!==null&&tr(Ut,e),Ht!==null&&tr(Ht,e),Sr.forEach(t),Nr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)pc(n),n.blockedOn===null&&Rt.shift()}var bn=_t.ReactCurrentBatchConfig,To=!0;function op(e,t,n,r){var o=K,l=bn.transition;bn.transition=null;try{K=1,as(e,t,n,r)}finally{K=o,bn.transition=l}}function lp(e,t,n,r){var o=K,l=bn.transition;bn.transition=null;try{K=4,as(e,t,n,r)}finally{K=o,bn.transition=l}}function as(e,t,n,r){if(To){var o=wi(e,t,n,r);if(o===null)Wl(e,t,r,Lo,n),Sa(e,r);else if(np(o,e,t,n,r))r.stopPropagation();else if(Sa(e,r),t&4&&-1<tp.indexOf(e)){for(;o!==null;){var l=$r(o);if(l!==null&&uc(l),l=wi(e,t,n,r),l===null&&Wl(e,t,r,Lo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Wl(e,t,r,null,n)}}var Lo=null;function wi(e,t,n,r){if(Lo=null,e=os(r),e=on(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qf()){case ls:return 1;case lc:return 4;case Io:case Kf:return 16;case ic:return 536870912;default:return 16}default:return 16}}var $t=null,us=null,vo=null;function hc(){if(vo)return vo;var e,t=us,n=t.length,r,o="value"in $t?$t.value:$t.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return vo=o.slice(e,1<r?1-r:void 0)}function xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function Ca(){return!1}function Qe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?oo:Ca,this.isPropagationStopped=Ca,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Qe(Kn),Ar=ie({},Kn,{view:0,detail:0}),ip=Qe(Ar),bl,Rl,nr,Zo=ie({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(bl=e.screenX-nr.screenX,Rl=e.screenY-nr.screenY):Rl=bl=0,nr=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Rl}}),ja=Qe(Zo),sp=ie({},Zo,{dataTransfer:0}),ap=Qe(sp),up=ie({},Ar,{relatedTarget:0}),Al=Qe(up),cp=ie({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),dp=Qe(cp),fp=ie({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pp=Qe(fp),mp=ie({},Kn,{data:0}),Ea=Qe(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function ds(){return vp}var xp=ie({},Ar,{key:function(e){if(e.key){var t=hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wp=Qe(xp),kp=ie({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),za=Qe(kp),Sp=ie({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),Np=Qe(Sp),Cp=ie({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=Qe(Cp),Ep=ie({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zp=Qe(Ep),Pp=[9,13,27,32],fs=jt&&"CompositionEvent"in window,fr=null;jt&&"documentMode"in document&&(fr=document.documentMode);var _p=jt&&"TextEvent"in window&&!fr,gc=jt&&(!fs||fr&&8<fr&&11>=fr),Pa=" ",_a=!1;function yc(e,t){switch(e){case"keyup":return Pp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Ip(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(_a=!0,Pa);case"textInput":return e=t.data,e===Pa&&_a?null:e;default:return null}}function Mp(e,t){if(Nn)return e==="compositionend"||!fs&&yc(e,t)?(e=hc(),vo=us=$t=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gc&&t.locale!=="ko"?null:t.data;default:return null}}var Tp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tp[e.type]:t==="textarea"}function xc(e,t,n,r){Xu(r),t=Do(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,jr=null;function Lp(e){Ic(e,0)}function el(e){var t=En(e);if(Hu(t))return e}function Dp(e,t){if(e==="change")return t}var wc=!1;if(jt){var $l;if(jt){var Fl="oninput"in document;if(!Fl){var Ma=document.createElement("div");Ma.setAttribute("oninput","return;"),Fl=typeof Ma.oninput=="function"}$l=Fl}else $l=!1;wc=$l&&(!document.documentMode||9<document.documentMode)}function Ta(){pr&&(pr.detachEvent("onpropertychange",kc),jr=pr=null)}function kc(e){if(e.propertyName==="value"&&el(jr)){var t=[];xc(t,jr,e,os(e)),ec(Lp,t)}}function Op(e,t,n){e==="focusin"?(Ta(),pr=t,jr=n,pr.attachEvent("onpropertychange",kc)):e==="focusout"&&Ta()}function bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(jr)}function Rp(e,t){if(e==="click")return el(t)}function Ap(e,t){if(e==="input"||e==="change")return el(t)}function $p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:$p;function Er(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ni.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Da(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nc(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fp(e){var t=Nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sc(n.ownerDocument.documentElement,n)){if(r!==null&&ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Da(n,l);var i=Da(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bp=jt&&"documentMode"in document&&11>=document.documentMode,Cn=null,ki=null,mr=null,Si=!1;function Oa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Si||Cn==null||Cn!==zo(r)||(r=Cn,"selectionStart"in r&&ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Er(mr,r)||(mr=r,r=Do(ki,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Bl={},Cc={};jt&&(Cc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function tl(e){if(Bl[e])return Bl[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cc)return Bl[e]=t[n];return e}var jc=tl("animationend"),Ec=tl("animationiteration"),zc=tl("animationstart"),Pc=tl("transitionend"),_c=new Map,ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){_c.set(e,t),hn(t,[e])}for(var Ul=0;Ul<ba.length;Ul++){var Hl=ba[Ul],Up=Hl.toLowerCase(),Hp=Hl[0].toUpperCase()+Hl.slice(1);qt(Up,"on"+Hp)}qt(jc,"onAnimationEnd");qt(Ec,"onAnimationIteration");qt(zc,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt(Pc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Ra(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Uf(r,t,void 0,e),e.currentTarget=null}function Ic(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Ra(o,s,f),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Ra(o,s,f),l=a}}}if(_o)throw e=yi,_o=!1,yi=null,e}function J(e,t){var n=t[zi];n===void 0&&(n=t[zi]=new Set);var r=e+"__bubble";n.has(r)||(Mc(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),Mc(n,e,r,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function zr(e){if(!e[io]){e[io]=!0,Au.forEach(function(n){n!=="selectionchange"&&(Vp.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Vl("selectionchange",!1,t))}}function Mc(e,t,n,r){switch(mc(t)){case 1:var o=op;break;case 4:o=lp;break;default:o=as}n=o.bind(null,t,n,e),o=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=on(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ec(function(){var f=l,v=os(n),y=[];e:{var g=_c.get(e);if(g!==void 0){var S=cs,C=e;switch(e){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":S=wp;break;case"focusin":C="focus",S=Al;break;case"focusout":C="blur",S=Al;break;case"beforeblur":case"afterblur":S=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=ap;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Np;break;case jc:case Ec:case zc:S=dp;break;case Pc:S=jp;break;case"scroll":S=ip;break;case"wheel":S=zp;break;case"copy":case"cut":case"paste":S=pp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=za}var P=(t&4)!==0,U=!P&&e==="scroll",p=P?g!==null?g+"Capture":null:g;P=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=kr(c,p),x!=null&&P.push(Pr(c,x,m)))),U)break;c=c.return}0<P.length&&(g=new S(g,C,null,n,v),y.push({event:g,listeners:P}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==mi&&(C=n.relatedTarget||n.fromElement)&&(on(C)||C[Et]))break e;if((S||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=f,C=C?on(C):null,C!==null&&(U=gn(C),C!==U||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=f),S!==C)){if(P=ja,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=za,x="onPointerLeave",p="onPointerEnter",c="pointer"),U=S==null?g:En(S),m=C==null?g:En(C),g=new P(x,c+"leave",S,n,v),g.target=U,g.relatedTarget=m,x=null,on(v)===f&&(P=new P(p,c+"enter",C,n,v),P.target=m,P.relatedTarget=U,x=P),U=x,S&&C)t:{for(P=S,p=C,c=0,m=P;m;m=wn(m))c++;for(m=0,x=p;x;x=wn(x))m++;for(;0<c-m;)P=wn(P),c--;for(;0<m-c;)p=wn(p),m--;for(;c--;){if(P===p||p!==null&&P===p.alternate)break t;P=wn(P),p=wn(p)}P=null}else P=null;S!==null&&Aa(y,g,S,P,!1),C!==null&&U!==null&&Aa(y,U,C,P,!0)}}e:{if(g=f?En(f):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var E=Dp;else if(Ia(g))if(wc)E=Ap;else{E=bp;var N=Op}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Rp);if(E&&(E=E(e,f))){xc(y,E,n,v);break e}N&&N(e,g,f),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ui(g,"number",g.value)}switch(N=f?En(f):window,e){case"focusin":(Ia(N)||N.contentEditable==="true")&&(Cn=N,ki=f,mr=null);break;case"focusout":mr=ki=Cn=null;break;case"mousedown":Si=!0;break;case"contextmenu":case"mouseup":case"dragend":Si=!1,Oa(y,n,v);break;case"selectionchange":if(Bp)break;case"keydown":case"keyup":Oa(y,n,v)}var I;if(fs)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Nn?yc(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(gc&&n.locale!=="ko"&&(Nn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Nn&&(I=hc()):($t=v,us="value"in $t?$t.value:$t.textContent,Nn=!0)),N=Do(f,O),0<N.length&&(O=new Ea(O,e,null,n,v),y.push({event:O,listeners:N}),I?O.data=I:(I=vc(n),I!==null&&(O.data=I)))),(I=_p?Ip(e,n):Mp(e,n))&&(f=Do(f,"onBeforeInput"),0<f.length&&(v=new Ea("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=I))}Ic(y,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Do(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=kr(e,n),l!=null&&r.unshift(Pr(e,l,o)),l=kr(e,t),l!=null&&r.push(Pr(e,l,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,o?(a=kr(n,l),a!=null&&i.unshift(Pr(n,a,s))):o||(a=kr(n,l),a!=null&&i.push(Pr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Wp=/\r\n?/g,Qp=/\u0000|\uFFFD/g;function $a(e){return(typeof e=="string"?e:""+e).replace(Wp,`
`).replace(Qp,"")}function so(e,t,n){if(t=$a(t),$a(e)!==t&&n)throw Error(w(425))}function Oo(){}var Ni=null,Ci=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ei=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,Gp=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(Yp)}:Ei;function Yp(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Gn,_r="__reactProps$"+Gn,Et="__reactContainer$"+Gn,zi="__reactEvents$"+Gn,Xp="__reactListeners$"+Gn,qp="__reactHandles$"+Gn;function on(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[pt])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[pt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function nl(e){return e[_r]||null}var Pi=[],zn=-1;function Jt(e){return{current:e}}function Z(e){0>zn||(e.current=Pi[zn],Pi[zn]=null,zn--)}function X(e,t){zn++,Pi[zn]=e.current,e.current=t}var Xt={},ze=Jt(Xt),Re=Jt(!1),cn=Xt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function bo(){Z(Re),Z(ze)}function Ua(e,t,n){if(ze.current!==Xt)throw Error(w(168));X(ze,t),X(Re,n)}function Tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,Of(e)||"Unknown",o));return ie({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=ze.current,X(ze,e),X(Re,Re.current),!0}function Ha(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Tc(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Z(Re),Z(ze),X(ze,e)):Z(Re),X(Re,n)}var wt=null,rl=!1,Kl=!1;function Lc(e){wt===null?wt=[e]:wt.push(e)}function Jp(e){rl=!0,Lc(e)}function Zt(){if(!Kl&&wt!==null){Kl=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,rl=!1}catch(o){throw wt!==null&&(wt=wt.slice(e+1)),oc(ls,Zt),o}finally{K=t,Kl=!1}}return null}var Pn=[],_n=0,Ao=null,$o=0,Ye=[],Xe=0,dn=null,kt=1,St="";function tn(e,t){Pn[_n++]=$o,Pn[_n++]=Ao,Ao=e,$o=t}function Dc(e,t,n){Ye[Xe++]=kt,Ye[Xe++]=St,Ye[Xe++]=dn,dn=e;var r=kt;e=St;var o=32-at(r)-1;r&=~(1<<o),n+=1;var l=32-at(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,kt=1<<32-at(t)+o|n<<o|r,St=l+e}else kt=1<<l|n<<o|r,St=e}function ms(e){e.return!==null&&(tn(e,1),Dc(e,1,0))}function hs(e){for(;e===Ao;)Ao=Pn[--_n],Pn[_n]=null,$o=Pn[--_n],Pn[_n]=null;for(;e===dn;)dn=Ye[--Xe],Ye[Xe]=null,St=Ye[--Xe],Ye[Xe]=null,kt=Ye[--Xe],Ye[Xe]=null}var He=null,Ue=null,te=!1,st=null;function Oc(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(te){var t=Ue;if(t){var n=t;if(!Va(e,t)){if(_i(e))throw Error(w(418));t=Vt(n.nextSibling);var r=He;t&&Va(e,t)?Oc(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(_i(e))throw Error(w(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function Wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ao(e){if(e!==He)return!1;if(!te)return Wa(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=Ue)){if(_i(e))throw bc(),Error(w(418));for(;t;)Oc(e,t),t=Vt(t.nextSibling)}if(Wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?Vt(e.stateNode.nextSibling):null;return!0}function bc(){for(var e=Ue;e;)e=Vt(e.nextSibling)}function Bn(){Ue=He=null,te=!1}function gs(e){st===null?st=[e]:st.push(e)}var Zp=_t.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function Rc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Gt(p,c),p.index=0,p.sibling=null,p}function l(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=ei(m,p.mode,x),c.return=p,c):(c=o(c,m),c.return=p,c)}function a(p,c,m,x){var E=m.type;return E===Sn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ot&&Qa(E)===c.type)?(x=o(c,m.props),x.ref=rr(p,c,m),x.return=p,x):(x=Eo(m.type,m.key,m.props,null,p.mode,x),x.ref=rr(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ti(m,p.mode,x),c.return=p,c):(c=o(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,E){return c===null||c.tag!==7?(c=un(m,p.mode,x,E),c.return=p,c):(c=o(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ei(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return m=Eo(c.type,c.key,c.props,null,p.mode,m),m.ref=rr(p,null,c),m.return=p,m;case kn:return c=ti(c,p.mode,m),c.return=p,c;case Ot:var x=c._init;return y(p,x(c._payload),m)}if(sr(c)||Jn(c))return c=un(c,p.mode,m,null),c.return=p,c;uo(p,c)}return null}function g(p,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:return m.key===E?a(p,c,m,x):null;case kn:return m.key===E?f(p,c,m,x):null;case Ot:return E=m._init,g(p,c,E(m._payload),x)}if(sr(m)||Jn(m))return E!==null?null:v(p,c,m,x,null);uo(p,m)}return null}function S(p,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,E);case kn:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,E);case Ot:var N=x._init;return S(p,c,m,N(x._payload),E)}if(sr(x)||Jn(x))return p=p.get(m)||null,v(c,p,x,E,null);uo(c,x)}return null}function C(p,c,m,x){for(var E=null,N=null,I=c,O=c=0,ne=null;I!==null&&O<m.length;O++){I.index>O?(ne=I,I=null):ne=I.sibling;var T=g(p,I,m[O],x);if(T===null){I===null&&(I=ne);break}e&&I&&T.alternate===null&&t(p,I),c=l(T,c,O),N===null?E=T:N.sibling=T,N=T,I=ne}if(O===m.length)return n(p,I),te&&tn(p,O),E;if(I===null){for(;O<m.length;O++)I=y(p,m[O],x),I!==null&&(c=l(I,c,O),N===null?E=I:N.sibling=I,N=I);return te&&tn(p,O),E}for(I=r(p,I);O<m.length;O++)ne=S(I,p,O,m[O],x),ne!==null&&(e&&ne.alternate!==null&&I.delete(ne.key===null?O:ne.key),c=l(ne,c,O),N===null?E=ne:N.sibling=ne,N=ne);return e&&I.forEach(function(ve){return t(p,ve)}),te&&tn(p,O),E}function P(p,c,m,x){var E=Jn(m);if(typeof E!="function")throw Error(w(150));if(m=E.call(m),m==null)throw Error(w(151));for(var N=E=null,I=c,O=c=0,ne=null,T=m.next();I!==null&&!T.done;O++,T=m.next()){I.index>O?(ne=I,I=null):ne=I.sibling;var ve=g(p,I,T.value,x);if(ve===null){I===null&&(I=ne);break}e&&I&&ve.alternate===null&&t(p,I),c=l(ve,c,O),N===null?E=ve:N.sibling=ve,N=ve,I=ne}if(T.done)return n(p,I),te&&tn(p,O),E;if(I===null){for(;!T.done;O++,T=m.next())T=y(p,T.value,x),T!==null&&(c=l(T,c,O),N===null?E=T:N.sibling=T,N=T);return te&&tn(p,O),E}for(I=r(p,I);!T.done;O++,T=m.next())T=S(I,p,O,T.value,x),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?O:T.key),c=l(T,c,O),N===null?E=T:N.sibling=T,N=T);return e&&I.forEach(function(It){return t(p,It)}),te&&tn(p,O),E}function U(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:e:{for(var E=m.key,N=c;N!==null;){if(N.key===E){if(E=m.type,E===Sn){if(N.tag===7){n(p,N.sibling),c=o(N,m.props.children),c.return=p,p=c;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ot&&Qa(E)===N.type){n(p,N.sibling),c=o(N,m.props),c.ref=rr(p,N,m),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===Sn?(c=un(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=Eo(m.type,m.key,m.props,null,p.mode,x),x.ref=rr(p,c,m),x.return=p,p=x)}return i(p);case kn:e:{for(N=m.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=o(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ti(m,p.mode,x),c.return=p,p=c}return i(p);case Ot:return N=m._init,U(p,c,N(m._payload),x)}if(sr(m))return C(p,c,m,x);if(Jn(m))return P(p,c,m,x);uo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,m),c.return=p,p=c):(n(p,c),c=ei(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return U}var Un=Rc(!0),Ac=Rc(!1),Fo=Jt(null),Bo=null,In=null,ys=null;function vs(){ys=In=Bo=null}function xs(e){var t=Fo.current;Z(Fo),e._currentValue=t}function Mi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Bo=e,ys=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(ys!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(Bo===null)throw Error(w(308));In=e,Bo.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var ln=null;function ws(e){ln===null?ln=[e]:ln.push(e)}function $c(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ws(t)):(n.next=o.next,o.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function ks(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,zt(e,n)}return o=r.interleaved,o===null?(t.next=t,ws(r)):(t.next=o.next,o.next=t),r.interleaved=t,zt(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,is(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var o=e.updateQueue;bt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?l=f:i.next=f,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=a))}if(l!==null){var y=o.baseState;i=0,v=f=a=null,s=l;do{var g=s.lane,S=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=e,P=s;switch(g=t,S=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){y=C.call(S,y,g);break e}y=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,g=typeof C=="function"?C.call(S,y,g):C,g==null)break e;y=ie({},y,g);break e;case 2:bt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=S,a=y):v=v.next=S,i|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(v===null&&(a=y),o.baseState=a,o.firstBaseUpdate=f,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);pn|=i,e.lanes=i,e.memoizedState=y}}function Ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var Fr={},ht=Jt(Fr),Ir=Jt(Fr),Mr=Jt(Fr);function sn(e){if(e===Fr)throw Error(w(174));return e}function Ss(e,t){switch(X(Mr,t),X(Ir,e),X(ht,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}Z(ht),X(ht,t)}function Hn(){Z(ht),Z(Ir),Z(Mr)}function Bc(e){sn(Mr.current);var t=sn(ht.current),n=di(t,e.type);t!==n&&(X(Ir,e),X(ht,n))}function Ns(e){Ir.current===e&&(Z(ht),Z(Ir))}var oe=Jt(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gl=[];function Cs(){for(var e=0;e<Gl.length;e++)Gl[e]._workInProgressVersionPrimary=null;Gl.length=0}var ko=_t.ReactCurrentDispatcher,Yl=_t.ReactCurrentBatchConfig,fn=0,le=null,de=null,ge=null,Vo=!1,hr=!1,Tr=0,em=0;function Ce(){throw Error(w(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Es(e,t,n,r,o,l){if(fn=l,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?om:lm,e=n(r,o),hr){l=0;do{if(hr=!1,Tr=0,25<=l)throw Error(w(301));l+=1,ge=de=null,t.updateQueue=null,ko.current=im,e=n(r,o)}while(hr)}if(ko.current=Wo,t=de!==null&&de.next!==null,fn=0,ge=de=le=null,Vo=!1,t)throw Error(w(300));return e}function zs(){var e=Tr!==0;return Tr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?le.memoizedState=ge=e:ge=ge.next=e,ge}function et(){if(de===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ge===null?le.memoizedState:ge.next;if(t!==null)ge=t,de=e;else{if(e===null)throw Error(w(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ge===null?le.memoizedState=ge=e:ge=ge.next=e}return ge}function Lr(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=de,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,f=l;do{var v=f.lane;if((fn&v)===v)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=y,i=r):a=a.next=y,le.lanes|=v,pn|=v}f=f.next}while(f!==null&&f!==l);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,le.lanes|=l,pn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);ct(l,t.memoizedState)||(be=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Uc(){}function Hc(e,t){var n=le,r=et(),o=t(),l=!ct(r.memoizedState,o);if(l&&(r.memoizedState=o,be=!0),r=r.queue,Ps(Qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Dr(9,Wc.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(w(349));fn&30||Vc(n,t,o)}return o}function Vc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wc(e,t,n,r){t.value=n,t.getSnapshot=r,Kc(t)&&Gc(e)}function Qc(e,t,n){return n(function(){Kc(t)&&Gc(e)})}function Kc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Gc(e){var t=zt(e,1);t!==null&&ut(t,e,1,-1)}function Ya(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=rm.bind(null,le,e),[t.memoizedState,e]}function Dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yc(){return et().memoizedState}function So(e,t,n,r){var o=ft();le.flags|=e,o.memoizedState=Dr(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var o=et();r=r===void 0?null:r;var l=void 0;if(de!==null){var i=de.memoizedState;if(l=i.destroy,r!==null&&js(r,i.deps)){o.memoizedState=Dr(t,n,l,r);return}}le.flags|=e,o.memoizedState=Dr(1|t,n,l,r)}function Xa(e,t){return So(8390656,8,e,t)}function Ps(e,t){return ol(2048,8,e,t)}function Xc(e,t){return ol(4,2,e,t)}function qc(e,t){return ol(4,4,e,t)}function Jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zc(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,Jc.bind(null,t,e),n)}function _s(){}function ed(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function td(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nd(e,t,n){return fn&21?(ct(n,t)||(n=sc(),le.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function tm(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{K=n,Yl.transition=r}}function rd(){return et().memoizedState}function nm(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},od(e))ld(t,n);else if(n=$c(e,t,n,r),n!==null){var o=Me();ut(n,e,r,o),id(n,t,r)}}function rm(e,t,n){var r=Kt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(od(e))ld(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(o.next=o,ws(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=$c(e,t,o,r),n!==null&&(o=Me(),ut(n,e,r,o),id(n,t,r))}}function od(e){var t=e.alternate;return e===le||t!==null&&t===le}function ld(e,t){hr=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function id(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,is(e,n)}}var Wo={readContext:Ze,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},om={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,Jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nm.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Ya,useDebugValue:_s,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Ya(!1),t=e[0];return e=tm.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,o=ft();if(te){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ye===null)throw Error(w(349));fn&30||Vc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Xa(Qc.bind(null,r,l,e),[e]),r.flags|=2048,Dr(9,Wc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ft(),t=ye.identifierPrefix;if(te){var n=St,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=em++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},lm={readContext:Ze,useCallback:ed,useContext:Ze,useEffect:Ps,useImperativeHandle:Zc,useInsertionEffect:Xc,useLayoutEffect:qc,useMemo:td,useReducer:Xl,useRef:Yc,useState:function(){return Xl(Lr)},useDebugValue:_s,useDeferredValue:function(e){var t=et();return nd(t,de.memoizedState,e)},useTransition:function(){var e=Xl(Lr)[0],t=et().memoizedState;return[e,t]},useMutableSource:Uc,useSyncExternalStore:Hc,useId:rd,unstable_isNewReconciler:!1},im={readContext:Ze,useCallback:ed,useContext:Ze,useEffect:Ps,useImperativeHandle:Zc,useInsertionEffect:Xc,useLayoutEffect:qc,useMemo:td,useReducer:ql,useRef:Yc,useState:function(){return ql(Lr)},useDebugValue:_s,useDeferredValue:function(e){var t=et();return de===null?t.memoizedState=e:nd(t,de.memoizedState,e)},useTransition:function(){var e=ql(Lr)[0],t=et().memoizedState;return[e,t]},useMutableSource:Uc,useSyncExternalStore:Hc,useId:rd,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ti(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),o=Kt(e),l=Nt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Wt(e,l,o),t!==null&&(ut(t,e,o,r),wo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),o=Kt(e),l=Nt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Wt(e,l,o),t!==null&&(ut(t,e,o,r),wo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Kt(e),o=Nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(ut(t,e,r,n),wo(t,e,r))}};function qa(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Er(n,r)||!Er(o,l):!0}function sd(e,t,n){var r=!1,o=Xt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ze(l):(o=Ae(t)?cn:ze.current,r=t.contextTypes,l=(r=r!=null)?Fn(e,o):Xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ja(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function Li(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ks(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ze(l):(l=Ae(t)?cn:ze.current,o.context=Fn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ti(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ll.enqueueReplaceState(o,o.state,null),Uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Df(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Di(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sm=typeof WeakMap=="function"?WeakMap:Map;function ad(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,Vi=r),Di(e,t)},n}function ud(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Di(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Di(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=km.bind(null,e,t,n),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var am=_t.ReactCurrentOwner,be=!1;function Ie(e,t,n,r){t.child=e===null?Ac(t,null,n,r):Un(t,e.child,n,r)}function nu(e,t,n,r,o){n=n.render;var l=t.ref;return Rn(t,o),r=Es(e,t,n,r,l,o),n=zs(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(te&&n&&ms(t),t.flags|=1,Ie(e,t,r,o),t.child)}function ru(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Rs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cd(e,t,l,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Er,n(i,r)&&e.ref===t.ref)return Pt(e,t,o)}return t.flags|=1,e=Gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Er(l,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Pt(e,t,o)}return Oi(e,t,n,r,o)}function dd(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Tn,Be),Be|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Tn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,X(Tn,Be),Be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,X(Tn,Be),Be|=r;return Ie(e,t,o,n),t.child}function fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oi(e,t,n,r,o){var l=Ae(n)?cn:ze.current;return l=Fn(t,l),Rn(t,o),n=Es(e,t,n,r,l,o),r=zs(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(te&&r&&ms(t),t.flags|=1,Ie(e,t,n,o),t.child)}function ou(e,t,n,r,o){if(Ae(n)){var l=!0;Ro(t)}else l=!1;if(Rn(t,o),t.stateNode===null)No(e,t),sd(t,n,r),Li(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ze(f):(f=Ae(n)?cn:ze.current,f=Fn(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Ja(t,i,r,f),bt=!1;var g=t.memoizedState;i.state=g,Uo(t,r,i,o),a=t.memoizedState,s!==r||g!==a||Re.current||bt?(typeof v=="function"&&(Ti(t,n,v,r),a=t.memoizedState),(s=bt||qa(t,n,s,r,g,a,f))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Fc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:lt(t.type,s),i.props=f,y=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Ae(n)?cn:ze.current,a=Fn(t,a));var S=n.getDerivedStateFromProps;(v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||g!==a)&&Ja(t,i,r,a),bt=!1,g=t.memoizedState,i.state=g,Uo(t,r,i,o);var C=t.memoizedState;s!==y||g!==C||Re.current||bt?(typeof S=="function"&&(Ti(t,n,S,r),C=t.memoizedState),(f=bt||qa(t,n,f,r,g,C,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),i.props=r,i.state=C,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return bi(e,t,n,r,l,o)}function bi(e,t,n,r,o,l){fd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ha(t,n,!1),Pt(e,t,l);r=t.stateNode,am.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Un(t,e.child,null,l),t.child=Un(t,null,s,l)):Ie(e,t,s,l),t.memoizedState=r.state,o&&Ha(t,n,!0),t.child}function pd(e){var t=e.stateNode;t.pendingContext?Ua(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ua(e,t.context,!1),Ss(e,t.containerInfo)}function lu(e,t,n,r,o){return Bn(),gs(o),t.flags|=256,Ie(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function md(e,t,n){var r=t.pendingProps,o=oe.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(oe,o&1),e===null)return Ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=al(i,r,0,null),e=un(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ai(n),t.memoizedState=Ri,e):Is(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return um(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Gt(s,l):(l=un(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ai(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return l=e.child,e=l.sibling,r=Gt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Is(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&gs(r),Un(t,e.child,null,n),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function um(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(w(422))),co(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=al({mode:"visible",children:r.children},o,0,null),l=un(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Un(t,e.child,null,i),t.child.memoizedState=Ai(i),t.memoizedState=Ri,l);if(!(t.mode&1))return co(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(w(419)),r=Jl(l,r,void 0),co(e,t,i,r)}if(s=(i&e.childLanes)!==0,be||s){if(r=ye,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,zt(e,o),ut(r,e,o,-1))}return bs(),r=Jl(Error(w(421))),co(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Sm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ue=Vt(o.nextSibling),He=t,te=!0,st=null,e!==null&&(Ye[Xe++]=kt,Ye[Xe++]=St,Ye[Xe++]=dn,kt=e.id,St=e.overflow,dn=t),t=Is(t,r.children),t.flags|=4096,t)}function iu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mi(e.return,t,n)}function Zl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function hd(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ie(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iu(e,n,t);else if(e.tag===19)iu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ho(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Zl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ho(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Zl(t,!0,n,null,l);break;case"together":Zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cm(e,t,n){switch(t.tag){case 3:pd(t),Bn();break;case 5:Bc(t);break;case 1:Ae(t.type)&&Ro(t);break;case 4:Ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(Fo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?md(e,t,n):(X(oe,oe.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);X(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,dd(e,t,n)}return Pt(e,t,n)}var gd,$i,yd,vd;gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$i=function(){};yd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,sn(ht.current);var l=null;switch(n){case"input":o=si(e,o),r=si(e,r),l=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),l=[];break;case"textarea":o=ci(e,o),r=ci(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oo)}fi(n,r);var i;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var s=o[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(xr.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var a=r[f];if(s=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(xr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&J("scroll",e),l||s===a||(l=[])):(l=l||[]).push(f,a))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dm(e,t,n){var r=t.pendingProps;switch(hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ae(t.type)&&bo(),je(t),null;case 3:return r=t.stateNode,Hn(),Z(Re),Z(ze),Cs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Ki(st),st=null))),$i(e,t),je(t),null;case 5:Ns(t);var o=sn(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)yd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return je(t),null}if(e=sn(ht.current),ao(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[pt]=t,r[_r]=l,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<ur.length;o++)J(ur[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":ha(r,l),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},J("invalid",r);break;case"textarea":ya(r,l),J("invalid",r)}fi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&so(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&so(r.textContent,s,e),o=["children",""+s]):xr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&J("scroll",r)}switch(n){case"input":Zr(r),ga(r,l,!0);break;case"textarea":Zr(r),va(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[_r]=r,gd(e,t,!1,!1),t.stateNode=e;e:{switch(i=pi(n,r),n){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<ur.length;o++)J(ur[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":ha(e,r),o=si(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),J("invalid",e);break;case"textarea":ya(e,r),o=ci(e,r),J("invalid",e);break;default:o=r}fi(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Yu(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ku(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wr(e,a):typeof a=="number"&&wr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&J("scroll",e):a!=null&&es(e,l,a,i))}switch(n){case"input":Zr(e),ga(e,r,!1);break;case"textarea":Zr(e),va(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=sn(Mr.current),sn(ht.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(l=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return je(t),null;case 13:if(Z(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ue!==null&&t.mode&1&&!(t.flags&128))bc(),Bn(),t.flags|=98560,l=!1;else if(l=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[pt]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),l=!1}else st!==null&&(Ki(st),st=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?fe===0&&(fe=3):bs())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Hn(),$i(e,t),e===null&&zr(t.stateNode.containerInfo),je(t),null;case 10:return xs(t.type._context),je(t),null;case 17:return Ae(t.type)&&bo(),je(t),null;case 19:if(Z(oe),l=t.memoizedState,l===null)return je(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)or(l,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ho(e),i!==null){for(t.flags|=128,or(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(oe,oe.current&1|2),t.child}e=e.sibling}l.tail!==null&&ue()>Wn&&(t.flags|=128,r=!0,or(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ho(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!te)return je(t),null}else 2*ue()-l.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,or(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,n=oe.current,X(oe,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Os(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function fm(e,t){switch(hs(t),t.tag){case 1:return Ae(t.type)&&bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),Z(Re),Z(ze),Cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ns(t),null;case 13:if(Z(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(oe),null;case 4:return Hn(),null;case 10:return xs(t.type._context),null;case 22:case 23:return Os(),null;case 24:return null;default:return null}}var fo=!1,Ee=!1,pm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){se(e,t,r)}}var su=!1;function mm(e,t){if(Ni=To,e=Nc(),ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,v=0,y=e,g=null;t:for(;;){for(var S;y!==n||o!==0&&y.nodeType!==3||(s=i+o),y!==l||r!==0&&y.nodeType!==3||(a=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++f===o&&(s=i),g===l&&++v===r&&(a=i),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ci={focusedElem:e,selectionRange:n},To=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,U=C.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?P:lt(t.type,P),U);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return C=su,su=!1,C}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Fi(t,n,l)}o=o.next}while(o!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xd(e){var t=e.alternate;t!==null&&(e.alternate=null,xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[_r],delete t[zi],delete t[Xp],delete t[qp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wd(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oo));else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}var xe=null,it=!1;function Dt(e,t,n){for(n=n.child;n!==null;)kd(e,t,n),n=n.sibling}function kd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Jo,n)}catch{}switch(n.tag){case 5:Ee||Mn(n,t);case 6:var r=xe,o=it;xe=null,Dt(e,t,n),xe=r,it=o,xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),Cr(e)):Ql(xe,n.stateNode));break;case 4:r=xe,o=it,xe=n.stateNode.containerInfo,it=!0,Dt(e,t,n),xe=r,it=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Fi(n,t,i),o=o.next}while(o!==r)}Dt(e,t,n);break;case 1:if(!Ee&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Dt(e,t,n),Ee=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pm),t.forEach(function(r){var o=Nm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,it=!1;break e;case 3:xe=s.stateNode.containerInfo,it=!0;break e;case 4:xe=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(xe===null)throw Error(w(160));kd(l,i,o),xe=null,it=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(f){se(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}function Sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),dt(e),r&4){try{gr(3,e,e.return),il(3,e)}catch(P){se(e,e.return,P)}try{gr(5,e,e.return)}catch(P){se(e,e.return,P)}}break;case 1:ot(t,e),dt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(ot(t,e),dt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(P){se(e,e.return,P)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Vu(o,l),pi(s,i);var f=pi(s,l);for(i=0;i<a.length;i+=2){var v=a[i],y=a[i+1];v==="style"?Yu(o,y):v==="dangerouslySetInnerHTML"?Ku(o,y):v==="children"?wr(o,y):es(o,v,y,f)}switch(s){case"input":ai(o,l);break;case"textarea":Wu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?Ln(o,!!l.multiple,S,!1):g!==!!l.multiple&&(l.defaultValue!=null?Ln(o,!!l.multiple,l.defaultValue,!0):Ln(o,!!l.multiple,l.multiple?[]:"",!1))}o[_r]=l}catch(P){se(e,e.return,P)}}break;case 6:if(ot(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(P){se(e,e.return,P)}}break;case 3:if(ot(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(P){se(e,e.return,P)}break;case 4:ot(t,e),dt(e);break;case 13:ot(t,e),dt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ls=ue())),r&4&&uu(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(f=Ee)||v,ot(t,e),Ee=f):ot(t,e),dt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(M=e,v=e.child;v!==null;){for(y=M=v;M!==null;){switch(g=M,S=g.child,g.tag){case 0:case 11:case 14:case 15:gr(4,g,g.return);break;case 1:Mn(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(P){se(r,n,P)}}break;case 5:Mn(g,g.return);break;case 22:if(g.memoizedState!==null){du(y);continue}}S!==null?(S.return=g,M=S):du(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{o=y.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=y.stateNode,a=y.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Gu("display",i))}catch(P){se(e,e.return,P)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(P){se(e,e.return,P)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:ot(t,e),dt(e),r&4&&uu(e);break;case 21:break;default:ot(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var l=au(e);Hi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=au(e);Ui(e,s,i);break;default:throw Error(w(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hm(e,t,n){M=e,Nd(e)}function Nd(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||fo;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=fo;var f=Ee;if(fo=i,(Ee=a)&&!f)for(M=o;M!==null;)i=M,a=i.child,i.tag===22&&i.memoizedState!==null?fu(o):a!==null?(a.return=i,M=a):fu(o);for(;l!==null;)M=l,Nd(l),l=l.sibling;M=o,fo=s,Ee=f}cu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,M=l):cu(e)}}function cu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ga(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ga(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Cr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||t.flags&512&&Bi(t)}catch(g){se(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function du(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function fu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){se(t,o,a)}}var l=t.return;try{Bi(t)}catch(a){se(t,l,a)}break;case 5:var i=t.return;try{Bi(t)}catch(a){se(t,i,a)}}}catch(a){se(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var gm=Math.ceil,Qo=_t.ReactCurrentDispatcher,Ms=_t.ReactCurrentOwner,Je=_t.ReactCurrentBatchConfig,W=0,ye=null,ce=null,we=0,Be=0,Tn=Jt(0),fe=0,Or=null,pn=0,sl=0,Ts=0,yr=null,Oe=null,Ls=0,Wn=1/0,xt=null,Ko=!1,Vi=null,Qt=null,po=!1,Ft=null,Go=0,vr=0,Wi=null,Co=-1,jo=0;function Me(){return W&6?ue():Co!==-1?Co:Co=ue()}function Kt(e){return e.mode&1?W&2&&we!==0?we&-we:Zp.transition!==null?(jo===0&&(jo=sc()),jo):(e=K,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e):1}function ut(e,t,n,r){if(50<vr)throw vr=0,Wi=null,Error(w(185));Rr(e,n,r),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(sl|=n),fe===4&&At(e,we)),$e(e,r),n===1&&W===0&&!(t.mode&1)&&(Wn=ue()+500,rl&&Zt()))}function $e(e,t){var n=e.callbackNode;Zf(e,t);var r=Mo(e,e===ye?we:0);if(r===0)n!==null&&ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ka(n),t===1)e.tag===0?Jp(pu.bind(null,e)):Lc(pu.bind(null,e)),Gp(function(){!(W&6)&&Zt()}),n=null;else{switch(ac(r)){case 1:n=ls;break;case 4:n=lc;break;case 16:n=Io;break;case 536870912:n=ic;break;default:n=Io}n=Md(n,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cd(e,t){if(Co=-1,jo=0,W&6)throw Error(w(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=Mo(e,e===ye?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var o=W;W|=2;var l=Ed();(ye!==e||we!==t)&&(xt=null,Wn=ue()+500,an(e,t));do try{xm();break}catch(s){jd(e,s)}while(!0);vs(),Qo.current=l,W=o,ce!==null?t=0:(ye=null,we=0,t=fe)}if(t!==0){if(t===2&&(o=vi(e),o!==0&&(r=o,t=Qi(e,o))),t===1)throw n=Or,an(e,0),At(e,r),$e(e,ue()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,!(r&30)&&!ym(o)&&(t=Yo(e,r),t===2&&(l=vi(e),l!==0&&(r=l,t=Qi(e,l))),t===1))throw n=Or,an(e,0),At(e,r),$e(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:nn(e,Oe,xt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Ls+500-ue(),10<t)){if(Mo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ei(nn.bind(null,e,Oe,xt),t);break}nn(e,Oe,xt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-at(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gm(r/1960))-r,10<r){e.timeoutHandle=Ei(nn.bind(null,e,Oe,xt),r);break}nn(e,Oe,xt);break;case 5:nn(e,Oe,xt);break;default:throw Error(w(329))}}}return $e(e,ue()),e.callbackNode===n?Cd.bind(null,e):null}function Qi(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ki(t)),e}function Ki(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function ym(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!ct(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Ts,t&=~sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if(W&6)throw Error(w(327));An();var t=Mo(e,0);if(!(t&1))return $e(e,ue()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=vi(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=Or,an(e,0),At(e,t),$e(e,ue()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Oe,xt),$e(e,ue()),null}function Ds(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Wn=ue()+500,rl&&Zt())}}function mn(e){Ft!==null&&Ft.tag===0&&!(W&6)&&An();var t=W;W|=1;var n=Je.transition,r=K;try{if(Je.transition=null,K=1,e)return e()}finally{K=r,Je.transition=n,W=t,!(W&6)&&Zt()}}function Os(){Be=Tn.current,Z(Tn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kp(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Hn(),Z(Re),Z(ze),Cs();break;case 5:Ns(r);break;case 4:Hn();break;case 13:Z(oe);break;case 19:Z(oe);break;case 10:xs(r.type._context);break;case 22:case 23:Os()}n=n.return}if(ye=e,ce=e=Gt(e.current,null),we=Be=t,fe=0,Or=null,Ts=sl=pn=0,Oe=yr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}ln=null}return e}function jd(e,t){do{var n=ce;try{if(vs(),ko.current=Wo,Vo){for(var r=le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(fn=0,ge=de=le=null,hr=!1,Tr=0,Ms.current=null,n===null||n.return===null){fe=1,Or=t,ce=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=we,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=eu(i);if(S!==null){S.flags&=-257,tu(S,i,s,l,t),S.mode&1&&Za(l,f,t),t=S,a=f;var C=t.updateQueue;if(C===null){var P=new Set;P.add(a),t.updateQueue=P}else C.add(a);break e}else{if(!(t&1)){Za(l,f,t),bs();break e}a=Error(w(426))}}else if(te&&s.mode&1){var U=eu(i);if(U!==null){!(U.flags&65536)&&(U.flags|=256),tu(U,i,s,l,t),gs(Vn(a,s));break e}}l=a=Vn(a,s),fe!==4&&(fe=2),yr===null?yr=[l]:yr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=ad(l,a,t);Ka(l,p);break e;case 1:s=a;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qt===null||!Qt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=ud(l,s,t);Ka(l,x);break e}}l=l.return}while(l!==null)}Pd(n)}catch(E){t=E,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Ed(){var e=Qo.current;return Qo.current=Wo,e===null?Wo:e}function bs(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||!(pn&268435455)&&!(sl&268435455)||At(ye,we)}function Yo(e,t){var n=W;W|=2;var r=Ed();(ye!==e||we!==t)&&(xt=null,an(e,t));do try{vm();break}catch(o){jd(e,o)}while(!0);if(vs(),W=n,Qo.current=r,ce!==null)throw Error(w(261));return ye=null,we=0,fe}function vm(){for(;ce!==null;)zd(ce)}function xm(){for(;ce!==null&&!Vf();)zd(ce)}function zd(e){var t=Id(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Pd(e):ce=t,Ms.current=null}function Pd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=fm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(n=dm(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function nn(e,t,n){var r=K,o=Je.transition;try{Je.transition=null,K=1,wm(e,t,n,r)}finally{Je.transition=o,K=r}return null}function wm(e,t,n,r){do An();while(Ft!==null);if(W&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ep(e,l),e===ye&&(ce=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,Md(Io,function(){return An(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Je.transition,Je.transition=null;var i=K;K=1;var s=W;W|=4,Ms.current=null,mm(e,n),Sd(n,e),Fp(Ci),To=!!Ni,Ci=Ni=null,e.current=n,hm(n),Wf(),W=s,K=i,Je.transition=l}else e.current=n;if(po&&(po=!1,Ft=e,Go=o),l=e.pendingLanes,l===0&&(Qt=null),Gf(n.stateNode),$e(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ko)throw Ko=!1,e=Vi,Vi=null,e;return Go&1&&e.tag!==0&&An(),l=e.pendingLanes,l&1?e===Wi?vr++:(vr=0,Wi=e):vr=0,Zt(),null}function An(){if(Ft!==null){var e=ac(Go),t=Je.transition,n=K;try{if(Je.transition=null,K=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Go=0,W&6)throw Error(w(331));var o=W;for(W|=4,M=e.current;M!==null;){var l=M,i=l.child;if(M.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(M=f;M!==null;){var v=M;switch(v.tag){case 0:case 11:case 15:gr(8,v,l)}var y=v.child;if(y!==null)y.return=v,M=y;else for(;M!==null;){v=M;var g=v.sibling,S=v.return;if(xd(v),v===f){M=null;break}if(g!==null){g.return=S,M=g;break}M=S}}}var C=l.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var U=P.sibling;P.sibling=null,P=U}while(P!==null)}}M=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,M=i;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:gr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,M=p;break e}M=l.return}}var c=e.current;for(M=c;M!==null;){i=M;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,M=m;else e:for(i=c;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:il(9,s)}}catch(E){se(s,s.return,E)}if(s===i){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(W=o,Zt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{K=n,Je.transition=t}}return!1}function mu(e,t,n){t=Vn(n,t),t=ad(e,t,1),e=Wt(e,t,1),t=Me(),e!==null&&(Rr(e,1,t),$e(e,t))}function se(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Vn(n,e),e=ud(t,e,1),t=Wt(t,e,1),e=Me(),t!==null&&(Rr(t,1,e),$e(t,e));break}}t=t.return}}function km(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(fe===4||fe===3&&(we&130023424)===we&&500>ue()-Ls?an(e,0):Ts|=n),$e(e,t)}function _d(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=Me();e=zt(e,t),e!==null&&(Rr(e,t,n),$e(e,n))}function Sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_d(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),_d(e,n)}var Id;Id=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,cm(e,t,n);be=!!(e.flags&131072)}else be=!1,te&&t.flags&1048576&&Dc(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;No(e,t),e=t.pendingProps;var o=Fn(t,ze.current);Rn(t,n),o=Es(null,t,r,e,o,n);var l=zs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(l=!0,Ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ks(t),o.updater=ll,t.stateNode=o,o._reactInternals=t,Li(t,r,e,n),t=bi(null,t,r,!0,l,n)):(t.tag=0,te&&l&&ms(t),Ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(No(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=jm(r),e=lt(r,e),o){case 0:t=Oi(null,t,r,e,n);break e;case 1:t=ou(null,t,r,e,n);break e;case 11:t=nu(null,t,r,e,n);break e;case 14:t=ru(null,t,r,lt(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),Oi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),ou(e,t,r,o,n);case 3:e:{if(pd(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Fc(e,t),Uo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Vn(Error(w(423)),t),t=lu(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error(w(424)),t),t=lu(e,t,r,n,o);break e}else for(Ue=Vt(t.stateNode.containerInfo.firstChild),He=t,te=!0,st=null,n=Ac(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===o){t=Pt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Bc(t),e===null&&Ii(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ji(r,o)?i=null:l!==null&&ji(r,l)&&(t.flags|=32),fd(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&Ii(t),null;case 13:return md(e,t,n);case 4:return Ss(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),nu(e,t,r,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,X(Fo,r._currentValue),r._currentValue=i,l!==null)if(ct(l.value,i)){if(l.children===o.children&&!Re.current){t=Pt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Nt(-1,n&-n),a.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?a.next=a:(a.next=v.next,v.next=a),f.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Mi(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Mi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Rn(t,n),o=Ze(o),r=r(o),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,o=lt(r,t.pendingProps),o=lt(r.type,o),ru(e,t,r,o,n);case 15:return cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:lt(r,o),No(e,t),t.tag=1,Ae(r)?(e=!0,Ro(t)):e=!1,Rn(t,n),sd(t,r,o),Li(t,r,o,n),bi(null,t,r,!0,e,n);case 19:return hd(e,t,n);case 22:return dd(e,t,n)}throw Error(w(156,t.tag))};function Md(e,t){return oc(e,t)}function Cm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Cm(e,t,n,r)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jm(e){if(typeof e=="function")return Rs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Rs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Sn:return un(n.children,o,l,t);case ts:i=8,o|=8;break;case ri:return e=qe(12,n,t,o|2),e.elementType=ri,e.lanes=l,e;case oi:return e=qe(13,n,t,o),e.elementType=oi,e.lanes=l,e;case li:return e=qe(19,n,t,o),e.elementType=li,e.lanes=l,e;case Bu:return al(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $u:i=10;break e;case Fu:i=9;break e;case ns:i=11;break e;case rs:i=14;break e;case Ot:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=qe(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function un(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function al(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Bu,e.lanes=n,e.stateNode={isHidden:!1},e}function ei(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function ti(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Em(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function As(e,t,n,r,o,l,i,s,a){return e=new Em(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=qe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ks(l),e}function zm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Td(e){if(!e)return Xt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Tc(e,n,t)}return t}function Ld(e,t,n,r,o,l,i,s,a){return e=As(n,r,!0,e,o,l,i,s,a),e.context=Td(null),n=e.current,r=Me(),o=Kt(n),l=Nt(r,o),l.callback=t??null,Wt(n,l,o),e.current.lanes=o,Rr(e,o,r),$e(e,r),e}function ul(e,t,n,r){var o=t.current,l=Me(),i=Kt(o);return n=Td(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,i),e!==null&&(ut(e,o,i,l),wo(e,o,i)),i}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function Pm(){return null}var Dd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}cl.prototype.render=Fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ul(e,t,null,null)};cl.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){ul(null,e,null,null)}),t[Et]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=dc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&pc(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function _m(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var f=Xo(i);l.call(f)}}var i=Ld(t,r,e,0,null,!1,!1,"",gu);return e._reactRootContainer=i,e[Et]=i.current,zr(e.nodeType===8?e.parentNode:e),mn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var f=Xo(a);s.call(f)}}var a=As(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=a,e[Et]=a.current,zr(e.nodeType===8?e.parentNode:e),mn(function(){ul(t,a,n,r)}),a}function fl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Xo(i);s.call(a)}}ul(t,i,e,o)}else i=_m(n,t,e,o,r);return Xo(i)}uc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(is(t,n|1),$e(t,ue()),!(W&6)&&(Wn=ue()+500,Zt()))}break;case 13:mn(function(){var r=zt(e,1);if(r!==null){var o=Me();ut(r,e,1,o)}}),$s(e,1)}};ss=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Me();ut(t,e,134217728,n)}$s(e,134217728)}};cc=function(e){if(e.tag===13){var t=Kt(e),n=zt(e,t);if(n!==null){var r=Me();ut(n,e,t,r)}$s(e,t)}};dc=function(){return K};fc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};hi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=nl(r);if(!o)throw Error(w(90));Hu(r),ai(r,o)}}}break;case"textarea":Wu(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};Ju=Ds;Zu=mn;var Im={usingClientEntryPoint:!1,Events:[$r,En,nl,Xu,qu,Ds]},lr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nc(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||Pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Jo=mo.inject(Mm),mt=mo}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(w(200));return zm(e,t,null,n)};We.createRoot=function(e,t){if(!Bs(e))throw Error(w(299));var n=!1,r="",o=Dd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=As(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,zr(e.nodeType===8?e.parentNode:e),new Fs(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=nc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return mn(e)};We.hydrate=function(e,t,n){if(!dl(t))throw Error(w(200));return fl(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Dd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ld(t,null,e,1,n??null,o,!1,l,i),e[Et]=t.current,zr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new cl(t)};We.render=function(e,t,n){if(!dl(t))throw Error(w(200));return fl(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!dl(e))throw Error(w(40));return e._reactRootContainer?(mn(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};We.unstable_batchedUpdates=Ds;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!dl(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return fl(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function Od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od)}catch(e){console.error(e)}}Od(),Ou.exports=We;var Tm=Ou.exports,bd,yu=Tm;bd=yu.createRoot,yu.hydrateRoot;const Lm="/claude",Dm="https://stelle-972218119922.europe-west1.run.app/api",Rd=Dm;async function pl(e){const t=await fetch(Lm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const o=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${o}…`)}const r=await t.json();if(!t.ok)throw new Error(r.error||"Claude CLI error");return r}function Om(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function bm(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`;return(await pl(t)).text||"Nessun contenuto estratto."}async function vu(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(o=>`### ${o.name} (${o.domain})
${o.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`;return(await pl(n)).text||"Nessun contenuto estratto."}async function Rm(e,t,n){const r=e.map(f=>`### ${f.name}
${f.content}`).join(`

`);n&&n.length>0&&n.join(", ");const o=n&&n.length>0?n:["GitHub Trending","trendshift.io","Hacker News"],l=`Hai i seguenti segnali da pensatori tech/AI e la loro cross-synthesis:

SEGNALI:
${r}

SYNTHESIS:
${t}

Cerca i progetti, repository GitHub, tool e librerie più rilevanti ed emergenti legati ai temi trattati sopra.

REGOLE:
1. Includi tutti i progetti/repo citati direttamente nei segnali sopra (con citedBy valorizzato).
2. Per OGNUNA di queste fonti devi includere ALMENO 1 progetto: ${o.join(", ")}. Cerca su ciascuna fonte i progetti trending più correlati ai temi.
3. Per ogni progetto assegna due punteggi da 1 a 10:
   - "maturity": maturità del progetto (1=appena nato, 10=consolidato con grande community)
   - "momentum": quanto è caldo/discusso ora (1=stabile/silenzioso, 10=trending/virale)
4. Massimo 12 progetti totali, ordinati per rilevanza.

Rispondi ESCLUSIVAMENTE con un array JSON valido (nessun testo prima o dopo, nessun blocco markdown \`\`\`). Ogni elemento:
{"name": "nome-progetto", "url": "https://...", "description": "descrizione breve in italiano (max 2 frasi)", "citedBy": ["Nome Persona", ...], "themes": ["tema1", "tema2"], "source": "fonte", "maturity": 7, "momentum": 9}

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,a=((await pl(l)).text||"").trim().match(/\[[\s\S]*\]/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}async function Am(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

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
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.`,l=((await pl(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!l)throw new Error("Formato risposta non valido");return JSON.parse(l[0])}let xu=!1;async function $m(){if(xu)return;if(!(await fetch(`${Rd}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");xu=!0}async function Fm(e,t,n){await $m();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,o=await fetch(`${Rd}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!o.ok){const a=await o.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const l=o.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:f}=await l.read();if(a)break;s+=i.decode(f,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let y="";for(const g of v)if(g.startsWith("event: "))y=g.slice(7).trim();else if(g.startsWith("data: ")&&y){try{const S=JSON.parse(g.slice(6));n(y,S)}catch{}y=""}}}function Ct(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function Bm(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return Ct(e);let r="";for(let o=0;o<n.length;o++){const l=n[o].trim();if(l)if(t.test(l)){t.lastIndex=0;const i=l.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),s=o+1<n.length?n[o+1].trim():"";s?(r+=`<details open><summary>${wu(i)}</summary>${Ct(s)}</details>`,o++):r+=`<strong>${wu(i)}</strong>`}else r+=Ct(l)}return r}function wu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Um(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(l=>r.has(l)).length/Math.max(n.size,r.size)}function Hm(e,t){if(!e)return"";if(!t)return Ct(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const o=r.trim();if(!o)return"";const l=o.toLowerCase(),i=n.some(a=>Um(l,a)>.7),s=Ct(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function Vm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,o)=>o.name.length-r.name.length);for(const r of n){const o=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),l=new RegExp(`(?!<a[^>]*>)(${o})(?![^<]*<\\/a>)`,"g");e=e.replace(l,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}var Wm={thinkers:[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0,desc:"Ex direttore AI di Tesla e cofondatore OpenAI. Oggi si concentra su agenti, wiki di conoscenza e autoresearch."},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0,desc:"Cofondatore di Twitter e Block. Radicale sulla decentralizzazione, ha abolito la gerarchia aziendale in Block."},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0,desc:"Cofondatore di Y Combinator. Saggista influente su startup, linguaggi e cultura tech."},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0,desc:"CEO di Tesla, SpaceX e xAI. Figura polarizzante che opera tra AI, spazio e politica americana."},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0,desc:"CEO di OpenAI. Al centro del dibattito su AGI, regolamentazione e il futuro del lavoro."},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0,desc:"Investitore e filosofo della Silicon Valley. Noto per le sue riflessioni su ricchezza, felicità e leverage."},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0,desc:"Analista tech indipendente, ex a16z. Saggi rigorosi e data-driven sulle dinamiche del settore."},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0,desc:"Ex CTO di Coinbase. Teorico del Network State e della sovranità computazionale."},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0,desc:"Premio Nobel, padre delle reti neurali. Ha lasciato Google per dedicarsi ai rischi dell'AI."},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0,desc:"Cofondatore di a16z. Investitore in difesa tech e voce del techno-ottimismo radicale."},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / AMI Labs",active:!0,desc:"Premio Turing, inventore delle reti convoluzionali. Ha lasciato Meta per fondare AMI Labs."},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0,desc:"CEO di Google DeepMind. Nobel per la chimica grazie ad AlphaFold."},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0,desc:"Ex chief scientist di OpenAI. Ha fondato Safe Superintelligence con 3 miliardi per ripensare l'AI da zero."},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0,desc:"CEO di NVIDIA. L'uomo dietro le GPU che alimentano la corsa all'AI."},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0,desc:"Creatore di Ethereum. Lavora su AI locale, privacy e verifica crittografica."},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0,desc:"CEO di Stripe. Finanzia ricerca scientifica e ragiona sul software come pizza fatta al momento."},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0,desc:"Creatore di Doom e Quake. Oggi guida Keen Technologies, agenti embodied con pochi parametri."},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Practical AI",active:!0,desc:"Creatore di Datasette. Scrive il 95% del suo codice dal telefono usando agenti AI."},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0,desc:"Creatore di Ruby on Rails. 18 mesi di AI in Basecamp, zero rilasci: ora rende i prodotti accessibili agli agenti."},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0,desc:"Creatore di Keras e del benchmark ARC-AGI. Sostiene che i LLM non ragionano davvero."},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0,desc:"Ex CEO di GitHub, ora VP di Meta Superintelligence Labs. Ha lanciato Entire per ripensare Git per gli agenti."},{id:22,name:"TLDR Founders",handle:"@taborfaltra",domain:"Newsletter / Startup Strategy",active:!0,desc:"Newsletter quotidiana per founder: fundraising, crescita, lezioni dal campo. Curata da Dan Ni."},{id:23,name:"TLDR Tech",handle:"@tlaborfaltra",domain:"Newsletter / Tech Daily",active:!0,desc:"Newsletter quotidiana con le notizie tech più rilevanti, in formato breve e denso.",fontiOnly:!0}],sources:["trendshift.io","GitHub Trending","Hacker News"],branding:{nameHtml:"Signal<span>.</span>Brief",tagline:"Intelligence Dashboard · AI-Powered",aboutDescription:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',fonts:{googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}}};const Us=Wm,Qm=Us.thinkers,Km=Us.sources,rn=Us.branding,ku="​‌",Su="‌​";function Gm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),o=n.length,l=r.length,i=Array.from({length:o+1},()=>new Uint16Array(l+1));for(let y=1;y<=o;y++)for(let g=1;g<=l;g++)i[y][g]=n[y-1]===r[g-1]?i[y-1][g-1]+1:Math.max(i[y-1][g],i[y][g-1]);const s=[];let a=o,f=l;for(;a>0||f>0;)a>0&&f>0&&n[a-1]===r[f-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,f--):f>0&&(a===0||i[a][f-1]>=i[a-1][f])?(s.unshift({type:"added",text:r[f-1]}),f--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const y of s)v.length>0&&v[v.length-1].type===y.type?v[v.length-1].text+=y.text:v.push({...y});return v}function Nu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let o="";for(const s of e)s.type!==n&&(s.type===r?o+=ku+s.text+Su:o+=s.text);let l=Ct(o);const i=t==="left"?"diff-word-removed":"diff-word-added";return l=l.replace(new RegExp(`${ku}(.*?)${Su}`,"gs"),`<span class="${i}">$1</span>`),l}function Ym(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function Xm(){const[e,t]=z.useState(!1),[n,r]=z.useState(-1),[o,l]=z.useState([]),i=z.useRef([]),s=z.useRef(null),a=z.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),f=z.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=z.useCallback((U,p=0)=>{speechSynthesis.cancel(),i.current=U.slice(p),l(U);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=U.indexOf(m);r(x);const E=`${m.title}. ${Ym(m.text)}`,N=new SpeechSynthesisUtterance(E);N.lang="it-IT",N.rate=1;const I=a();I&&(N.voice=I),N.onend=c,N.onerror=c,s.current=N,speechSynthesis.speak(N)};t(!0),c()},[a]),y=z.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),g=z.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),S=z.useCallback(()=>{speechSynthesis.cancel()},[]),C=z.useCallback((U,p,c,m)=>{const x=[];U&&x.push({title:"Cross-Synthesis",text:U,type:"synthesis"});for(const E of c)p[E.id]&&!p[E.id].startsWith("Errore")&&x.push({title:E.name,text:p[E.id],type:"thinker"});if(m&&m.length>0){const E=m.map(N=>{var I;return`${N.name}: ${N.description}${(I=N.citedBy)!=null&&I.length?`. Citato da ${N.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:E,type:"projects"})}v(x)},[v]),P=z.useCallback((U,p)=>{v([{title:U,text:p,type:"single"}])},[v]);return z.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:o,playAll:C,playSingle:P,pause:y,resume:g,stop:f,skipForward:S}}const qm=`
  @import url('${rn.fonts.googleFontsUrl}');
`,Jm=`
  ${qm}

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
`;function Zm(){const[e,t]=z.useState(Qm),[n,r]=z.useState({}),[o,l]=z.useState({}),[i,s]=z.useState({}),[a,f]=z.useState(null),[v,y]=z.useState("idle"),[g,S]=z.useState(!1),[C,P]=z.useState(""),[U,p]=z.useState(""),[c,m]=z.useState(null),[x,E]=z.useState(null),[N,I]=z.useState(8),[O,ne]=z.useState(!1),[T,ve]=z.useState([]),[It,Mt]=z.useState(null),[Pe,gt]=z.useState("signals"),[Fe,Yn]=z.useState({leftIdx:1,rightIdx:0}),[_,R]=z.useState("emerging"),[D,ee]=z.useState([]),[G,en]=z.useState([]),[Ke,yn]=z.useState(null),[tt,Tt]=z.useState("idle"),[Lt,ml]=z.useState(Km),[Hs,Vs]=z.useState(""),[Ad,hl]=z.useState(!1),[Ws,$d]=z.useState(!1),[vn,Fd]=z.useState(""),[Br,Qs]=z.useState([]),[Ur,gl]=z.useState("idle"),[Hr,yl]=z.useState(null),[Ks,Gs]=z.useState(null),[eh,th]=z.useState("idle"),[Ys,Bd]=z.useState({scan:"",launchd:""}),[Vr,vl]=z.useState("idle"),[nh,Xs]=z.useState([]),[Ud,Hd]=z.useState({}),[Vd,Wd]=z.useState(new Set),xl=z.useRef(null),pe=Xm(),[Qd,Kd]=z.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),me=e.filter(d=>d.active),qs=me.filter(d=>!d.fontiOnly),xn=Object.values(i).filter(d=>d==="done"||d==="stale").length,wl=me.length;z.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const h=JSON.parse(d.value);if(h.results){r(h.results);const k=new Set((h.staleIds||[]).map(String)),L={};for(const $ of Object.keys(h.results))h.results[$].startsWith("Errore")?L[$]="error":k.has(String($))?L[$]="stale":L[$]="done";s(L),h.staleIds&&Xs(h.staleIds)}if(h.prevResults&&l(h.prevResults),h.lastScanTime&&m(h.lastScanTime),h.intervalHours&&I(h.intervalHours),h.synthesis&&(f(h.synthesis),y("done")),h.synthesisHistory){const k=h.synthesisHistory.map((L,$,V)=>{if(L.conceptDiff&&!L.conceptDiffs){const he=V[$+1],{conceptDiff:Ne,...nt}=L;return he?{...nt,conceptDiffs:{[he.id]:Ne}}:nt}return L});ve(k)}h.projects&&ee(h.projects),h.prevProjects&&en(h.prevProjects),h.projectsTime&&yn(h.projectsTime),h.projectSources&&ml(h.projectSources)}}catch{}})()},[]);const Se=z.useCallback(async(d={})=>{try{const h=await window.storage.get("signal-state"),L={...h?JSON.parse(h.value):{},...d};await window.storage.set("signal-state",JSON.stringify(L))}catch{}},[]);z.useCallback(async(d={})=>{await Se({results:n,prevResults:o,lastScanTime:c,intervalHours:N,synthesis:a,synthesisHistory:T,projects:D,prevProjects:G,projectsTime:Ke,projectSources:Lt,...d})},[n,o,c,N,a,T,D,G,Ke,Lt,Se]);const Wr=z.useCallback((d,h)=>h.length>0&&h[0].text===d?h:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:me.map(L=>L.name),conceptDiffs:{}},...h].slice(0,50),[me]),Qr=z.useCallback(async d=>{var L;if(d.length<2)return d;const h=d[0],k=d[1];if((L=h.conceptDiffs)!=null&&L[k.id])return d;try{const $=await Am(k.text,h.text),V=[...d];return V[0]={...V[0],conceptDiffs:{...V[0].conceptDiffs||{},[k.id]:$}},ve(V),await Se({synthesisHistory:V}),V}catch($){return console.error("[concept-diff auto]",$),d}},[Se]),Js=z.useCallback(async(d,h)=>{try{await navigator.clipboard.writeText(d)}catch{const k=document.createElement("textarea");k.value=d,document.body.appendChild(k),k.select(),document.execCommand("copy"),document.body.removeChild(k)}Mt(h),setTimeout(()=>Mt(null),2e3)},[]);z.useCallback(async d=>{const h=T.filter(k=>k.id!==d);ve(h),await Se({synthesisHistory:h})},[T,Se]),z.useEffect(()=>{const d=()=>{if(!c){E(null);return}const L=c+N*3600*1e3-Date.now();if(L<=0){E("ora");return}const $=Math.floor(L/36e5),V=Math.floor(L%36e5/6e4),he=Math.floor(L%6e4/1e3);E(`${$}h ${V}m ${he}s`)};d();const h=setInterval(d,1e3);return()=>clearInterval(h)},[c,N]);const kl=z.useRef(null);z.useEffect(()=>{const d=setInterval(()=>{const h=new Date,k=h.getHours();if(k!==5&&k!==17||g||!kl.current)return;const L=`${h.toDateString()}-${k}`;(c?(()=>{const V=new Date(c);return`${V.toDateString()}-${V.getHours()}`})():null)!==L&&kl.current(!0)},6e4);return()=>clearInterval(d)},[g,c]);const Sl=z.useCallback(async()=>{vl("loading");const d="/signal-brief/";try{const[h,k]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),L=h.ok?await h.text():"",$=k.ok?await k.text():"";Bd({scan:L,launchd:$}),vl("done")}catch(h){console.error("[logs]",h),vl("error")}},[]);z.useEffect(()=>{Pe==="log"&&Sl()},[Pe,Sl]);const Zs=z.useCallback(d=>{if(!d)return;const h=d.trim().toLowerCase();if(!h)return;const k=e.find(L=>{const $=L.name.toLowerCase();return $===h||$.includes(h)||h.includes($)});k&&(gt("signals"),ne(!1),setTimeout(()=>{const L=document.getElementById(`thinker-${k.id}`);L&&(L.scrollIntoView({behavior:"smooth",block:"start"}),L.classList.add("thinker-card-highlight"),setTimeout(()=>L.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Gd=(d,h)=>{if(!d||!h)return 0;const k=new Set(d.toLowerCase().split(/\s+/)),L=new Set(h.toLowerCase().split(/\s+/));return[...k].filter(V=>L.has(V)).length/Math.max(k.size,L.size)},ea=d=>!o[d]||!n[d]?!1:Gd(o[d],n[d])<.72;me.filter(d=>i[d.id]==="done"&&ea(d.id)).length;const ta=e.length>0&&e.every(d=>d.active),Yd=()=>{g||t(d=>d.map(h=>({...h,active:!ta})))},Nl=()=>{C.trim()&&(t(d=>[...d,{id:Date.now(),name:C.trim(),handle:U.trim()||"@?",domain:"Custom",active:!0}]),P(""),p(""))},na=()=>{const d=Hs.trim();if(!d||Lt.includes(d))return;const h=[...Lt,d];ml(h),Vs(""),Se({projectSources:h})},Xd=d=>{const h=Lt.filter(k=>k!==d);ml(h),Se({projectSources:h})},[qd,ra]=z.useState(null),Kr=z.useCallback(async(d,h)=>{Tt("loading"),ra(null);try{const k=await Rm(h,d,Lt);en(D),ee(k);const L=Date.now();yn(L),Tt("done"),await Se({projects:k,prevProjects:D,projectsTime:L})}catch(k){console.error("[Signal.Brief] fetchProjects error:",k),Tt("error"),ra(k.message)}},[Lt,Se,D]),oa=2*3600*1e3,Gr=z.useCallback(async(d=!1)=>{if(me.length===0)return;if(!d&&c&&Date.now()-c<oa){const F=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${F} minuti fa. Cache valida per ancora ${Math.round((oa-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}gt("signals"),S(!0),f(null),y("idle"),l(F=>({...F,...n}));const h={...n},k={};for(const F of me){const _e=h[F.id];_e&&!_e.startsWith("Errore")&&(k[F.id]=_e)}const L={};me.forEach(F=>{L[F.id]="loading"}),s(L),r(k);const $={...k},V=[],he={},Ne=2,nt=F=>new Promise(_e=>setTimeout(_e,F));for(let F=0;F<me.length;F+=Ne){const _e=me.slice(F,F+Ne);await Promise.all(_e.map(async B=>{try{const re=await bm(B);$[B.id]=re,r(ae=>({...ae,[B.id]:re})),s(ae=>({...ae,[B.id]:"done"}))}catch(re){const ae=k[B.id]!=null;he[B.id]=re.message,ae?(V.push(String(B.id)),s(q=>({...q,[B.id]:"stale"}))):($[B.id]=`Errore: ${re.message}`,r(q=>({...q,[B.id]:`Errore: ${re.message}`})),s(q=>({...q,[B.id]:"error"})))}})),F+Ne<me.length&&await nt(1200)}Xs(V),Hd(he);const Ge=Om($),De=Ge?Date.now():c;Ge&&(m(De),Kd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Se({results:$,prevResults:h,lastScanTime:De,intervalHours:N,synthesis:a,synthesisHistory:T,staleIds:V}),S(!1);const rt=qs.filter(F=>$[F.id]&&!$[F.id].startsWith("Errore")).map(F=>({name:F.name,domain:F.domain,content:$[F.id]}));if(rt.length>=2){y("loading");try{const F=await vu(rt);f(F),y("done");const _e=Wr(F,T);ve(_e),await Se({results:$,prevResults:h,lastScanTime:De,intervalHours:N,synthesis:F,synthesisHistory:_e}),Qr(_e),Kr(F,rt)}catch{y("error")}}},[me,n,N,Se,a,T,Wr,c,Kr,Qr]);z.useEffect(()=>{kl.current=Gr},[Gr]);const Jd=z.useCallback(async()=>{const d=qs.filter(h=>i[h.id]==="done"||i[h.id]==="stale").map(h=>({name:h.name,domain:h.domain,content:n[h.id]}));if(!(d.length<2)){y("loading");try{const h=await vu(d);f(h),y("done");const k=Wr(h,T);ve(k),await Se({synthesis:h,synthesisHistory:k}),Qr(k),Kr(h,d)}catch(h){f(`Errore nella sintesi: ${h.message}`),y("error")}}},[me,i,n,Se,T,Wr,Kr,Qr]),la=z.useCallback(async()=>{if(vn.trim()){Qs([]),yl(null),Gs(null),gl("loading");try{await Fm(vn,a,(d,h)=>{if(d==="session_started"&&h.session_id&&Gs(h.session_id),d==="sage_speaks"&&h.content&&Qs(k=>[...k,{name:h.persona_name,icon:h.persona_icon,color:h.persona_color,content:h.content}]),d==="moderator_synthesis"&&h.content&&yl(h.content),d==="moderator"){const k=h.content||h.decision||h.synthesis||"";k&&yl(k)}}),gl("done")}catch(d){console.error("[council]",d),gl("error")}}},[vn,a]),Zd=xn>=2&&!g&&v!=="loading",ia=Object.keys(n).length>0,Cl="Disponibile solo in locale (richiede Claude CLI)",ef=me.filter(d=>{if(!i[d.id])return!1;if(O){const h=i[d.id];return(h==="done"||h==="stale")&&ea(d.id)}return!0});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Jm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>hl(!0),dangerouslySetInnerHTML:{__html:rn.nameHtml}}),u.jsx("div",{className:"tagline",children:rn.tagline})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",Qd]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Jd,disabled:!Zd||!0,title:Cl,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!xl.current){const h=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);h.onerror=()=>{h.src="/signal-brief/podcast/episodes/2026-04-12.mp3",h.play()},xl.current=h}const d=xl.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Gr(!0),disabled:g||me.length===0||!0,title:Cl,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Gr(!1),disabled:g||me.length===0||!0,title:Cl,children:g?`Scanning ${xn}/${wl}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${Pe==="signals"?"active":""}`,onClick:()=>gt("signals"),children:["Segnali",xn>0&&u.jsx("span",{className:"tab-badge",children:xn})]}),u.jsxs("button",{className:`tab-btn ${Pe==="projects"?"active":""}`,onClick:()=>gt("projects"),children:["Progetti",D.length>0&&u.jsx("span",{className:"tab-badge",children:D.length})]}),u.jsxs("button",{className:`tab-btn ${Pe==="history"?"active":""}`,onClick:()=>gt("history"),children:["Cronologia",T.length>0&&u.jsx("span",{className:"tab-badge",children:T.length})]}),u.jsx("button",{className:`tab-btn ${Pe==="log"?"active":""}`,onClick:()=>gt("log"),children:"▤ Log"}),u.jsx("button",{className:`tab-btn ${Pe==="config"?"active":""}`,onClick:()=>gt("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[Pe==="signals"&&u.jsxs(u.Fragment,{children:[g&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${wl>0?xn/wl*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&T.length>0&&u.jsx("span",{className:"timestamp",children:new Date(T[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>pe.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>$d(d=>!d),title:"Chiedi ai thinkers",style:Ws?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Js(a,"synth"),children:It==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:Vm(T.length>1?Hm(a,T[1].text):Ct(a),me)}}),Ws&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Ks?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Ks}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:vn,onChange:d=>Fd(d.target.value),onKeyDown:d=>d.key==="Enter"&&la(),disabled:Ur==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:la,disabled:Ur==="loading"||!vn.trim(),children:Ur==="loading"?"In deliberazione…":"Chiedi"})]}),Br.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Br.map((d,h)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name]}),u.jsx("div",{children:d.content})]},h))}),Hr&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const d=Br.map(h=>`${h.name}: ${h.content}`).join(`

`)+`

Sintesi: `+Hr;pe.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${vn}

`+Br.map(h=>`${h.icon} ${h.name}:
${h.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Hr}`;Js(d,"council")},children:It==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:Ct(Hr)}})]}),Ur==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),ia&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",xn," acquisiti"]})}),!ia&&!g?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:ef.map(d=>{const h=i[d.id],k=Ud[d.id],L=Vd.has(d.id),$=V=>{V.stopPropagation(),Wd(he=>{const Ne=new Set(he);return Ne.has(d.id)?Ne.delete(d.id):Ne.add(d.id),Ne})};return u.jsxs("div",{id:`thinker-${d.id}`,className:`card ${h}`,children:[u.jsxs("div",{className:`card-header card-toggle ${L?"collapsed":""}`,onClick:$,children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[u.jsx("span",{className:"toggle-icon",children:"▾"}),d.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:V=>V.stopPropagation(),children:d.handle})]}),u.jsx("div",{className:"card-domain",children:d.domain})]}),(h==="done"||h==="stale")&&u.jsx("button",{className:"btn-listen",onClick:V=>{V.stopPropagation(),pe.playSingle(d.name,n[d.id])},title:"Ascolta",children:"🔊"}),h==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),h==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),h==="stale"&&u.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${k?": "+k:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),h==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),d.fontiOnly&&u.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!L&&u.jsxs("div",{className:"card-body",children:[d.desc&&u.jsx("div",{className:"card-desc",children:d.desc}),h==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(h==="done"||h==="stale")&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:Bm(n[d.id])}}),h==="error"&&u.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),Pe==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",D.length>0&&` · ${D.length} trovati`]})}),tt==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),tt==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",qd||"errore sconosciuto"]}),D.length===0&&tt!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),D.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),Ke&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(Ke).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),D.some(d=>d.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),G.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),D.map((d,h)=>{const k=d.maturity!=null&&d.momentum!=null,L=Math.ceil(Math.sqrt(D.length)),$=Math.floor(h/L),V=h%L,he=k?d.maturity:2+V/Math.max(L-1,1)*7,Ne=k?d.momentum:8-$/Math.max(Math.ceil(D.length/L)-1,1)*7,nt=50+(he-1)/9*420,Ge=370-(Ne-1)/9*360,De=G.length>0&&!G.some(F=>F.name===d.name),rt=De?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:nt,cy:Ge,r:De?6:5,fill:rt,opacity:"0.85",stroke:De?"#fca5a5":"none",strokeWidth:De?2:0,onClick:()=>window.open(d.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:nt+9,y:Ge+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:De?"#dc2626":"#374151",fontWeight:De?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},h)})]})]}),D.length>0&&u.jsx("div",{className:"projects-grid",children:D.map((d,h)=>u.jsxs("div",{className:"project-card",style:G.length>0&&!G.some(k=>k.name===d.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),G.length>0&&!G.some(k=>k.name===d.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&u.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&u.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:d.description}),u.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&u.jsx("div",{className:"project-themes",children:d.themes.map((k,L)=>u.jsx("span",{className:"project-theme",children:k},L))})]})]},h))})]}),Pe==="history"&&u.jsx(u.Fragment,{children:T.length<2?u.jsxs("div",{className:"history-empty",children:[T.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",T.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(T[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Ct(T[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const d=Date.now(),h=864e5,k=d-7*h,L=d-21*h,$=T.filter(B=>B.timestamp>=k),V=T.filter(B=>B.timestamp>=L&&B.timestamp<k),he={};for(const B of V){const re=new Date(B.timestamp),ae=new Date(re);ae.setDate(ae.getDate()-ae.getDay());const q=ae.toISOString().slice(0,10);(!he[q]||B.timestamp>he[q].timestamp)&&(he[q]=B)}const Ne=Object.values(he).sort((B,re)=>re.timestamp-B.timestamp),nt=T.filter(B=>B.timestamp<L),Ge={};for(const B of nt){const re=new Date(B.timestamp),ae=new Date(re);ae.setDate(ae.getDate()-ae.getDay());const q=ae.toISOString().slice(0,10);(!Ge[q]||B.timestamp>Ge[q].timestamp)&&(Ge[q]=B)}const De=Object.values(Ge).sort((B,re)=>re.timestamp-B.timestamp),rt=(B,re,ae)=>B.length===0?null:u.jsx("optgroup",{label:re,children:B.map(q=>{const jl=T.indexOf(q),Yr=new Date(q.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),El=ae?`Sett. ${Yr.split(",")[0]} — ${q.thinkers.slice(0,3).join(", ")}${q.thinkers.length>3?` +${q.thinkers.length-3}`:""}`:`${Yr} — ${q.thinkers.slice(0,3).join(", ")}${q.thinkers.length>3?` +${q.thinkers.length-3}`:""}`;return u.jsx("option",{value:jl,children:El},q.id)})},re),F=T[0],_e=F?`${new Date(F.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${F.thinkers.slice(0,3).join(", ")}${F.thinkers.length>3?` +${F.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Fe.leftIdx,onChange:B=>Yn(re=>({...re,leftIdx:Number(B.target.value)})),children:[rt($,"Ultimi 7 giorni",!1),rt(Ne,"Ultime 3 settimane",!0),rt(De,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[_e," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var sa;const d=T[Fe.rightIdx],h=T[Fe.leftIdx];if(!d||!h||Fe.leftIdx===Fe.rightIdx)return null;const k=d.timestamp>=h.timestamp?d:h,L=k===d?h:d;k===d?Fe.rightIdx:Fe.leftIdx;const $=((sa=k.conceptDiffs)==null?void 0:sa[L.id])||null,V=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],he={DHH:["hansson","heinemeier","37signals"]},Ne=j=>{if(!j)return null;const b=j.trim().toLowerCase();if(!b)return null;for(const A of e){const Q=A.name.toLowerCase();if(Q===b||Q.includes(b)||b.includes(Q))return A;const Y=he[A.name]||[];for(const yt of Y)if(b.includes(yt)||yt.includes(b))return A}return null},nt=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),Ge=j=>(j||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(b=>b.length>=4&&!nt.has(b)),De=j=>j.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),rt=j=>{const b=j.split(/\s+/);return b.length>40?b.slice(0,40).join(" ")+"...":j},F=j=>{if(!j)return[];const b=j.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),Q=(b!==-1?j.slice(0,b):j).split(/\n\n+/).map(vt=>De(vt)).filter(vt=>vt.length>120),Y=vt=>{const qn=Ge(vt);if(!qn.length||!Q.length)return"";let Xr="",Pl=0;for(const aa of Q){const of=aa.toLowerCase();let _l=0;for(const lf of qn)of.includes(lf)&&_l++;_l>Pl&&(Xr=aa,Pl=_l)}return Pl>0?Xr:""},yt=[],Xn=new Set,rf=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let zl;for(;(zl=rf.exec(j))!==null;){const vt=zl[2].replace(/[.,;)]+$/,"");if(Xn.has(vt))continue;Xn.add(vt);const qn=zl[1].trim(),Xr=rt(Y(qn));yt.push({url:vt,title:qn,snippet:Xr})}return yt},_e=j=>{const b=Ne(j);return b?F(n[b.id]||""):[]},B=(()=>{const j=new Set,b=[];for(const A of e){j.has(A.name)||(j.add(A.name),b.push(A.name));const Q=A.name.split(/\s+/);if(Q.length>1){const Y=Q[Q.length-1];Y.length>=4&&!j.has(Y)&&(j.add(Y),b.push(Y))}}return b.sort((A,Q)=>Q.length-A.length)})(),re=B.length?new RegExp(`\\b(${B.map(j=>j.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,ae=j=>{if(!j||typeof j!="string"||!re)return j;const b=[];let A=0,Q;for(re.lastIndex=0;(Q=re.exec(j))!==null;){Q.index>A&&b.push(j.slice(A,Q.index));const Y=Q[0];b.push(u.jsx("span",{className:"concept-who-link",onClick:yt=>{yt.stopPropagation(),Zs(Y)},children:Y},b.length)),A=Q.index+Y.length}return b.length===0?j:(A<j.length&&b.push(j.slice(A)),b)},q=(j,b)=>{if(j==null)return null;if(typeof j=="string")return{title:j,detail:"",who:[],sides:[]};if(typeof j!="object")return null;if(b==="evolved"){const A=j.from??j.da??j.before??"",Q=j.to??j.a??j.after??"",Y=A&&Q?`${A} → ${Q}`:A||Q||j.detail||"";return{title:j.concept||j.title||j.name||"",detail:Y,who:j.who||[],sides:[]}}return b==="tensions"?{title:j.axis||j.concept||j.title||"",detail:j.detail||"",who:j.who||[],sides:j.sides||[]}:{title:j.concept||j.title||j.name||"",detail:j.detail||j.description||"",who:j.who||[],sides:[]}},jl=j=>j!=null&&j.length?j.slice(0,4).map((b,A)=>u.jsx("a",{className:"concept-cite",href:b.url,target:"_blank",rel:"noopener noreferrer",title:b.snippet||b.title||b.url,onClick:Q=>Q.stopPropagation(),children:A+1},A)):null,Yr=j=>j!=null&&j.length?u.jsx("div",{className:"concept-item-who",children:j.map((b,A)=>{const Q=_e(b);return u.jsxs("span",{className:"concept-who-item",children:[A>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${b}`,onClick:Y=>{Y.stopPropagation(),Zs(b)},children:b}),Q.length>0&&u.jsx("sup",{className:"concept-cites",children:jl(Q)})]},A)})}):null,El=(j,b)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",ae(j)]},b),tf=(j,b)=>{const Q=(j[b]||[]).map(Y=>q(Y,b)).filter(Boolean);return Q.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):Q.map((Y,yt)=>{var Xn;return u.jsxs("div",{className:`concept-item concept-${b==="tensions"?"tension":b}`,children:[Y.title&&u.jsx("div",{className:"concept-item-title",children:ae(Y.title)}),Y.detail&&u.jsx("div",{className:"concept-item-detail",children:ae(Y.detail)}),b==="tensions"&&((Xn=Y.sides)==null?void 0:Xn.map(El)),Yr(Y.who)]},yt)})},nf=j=>{const b=V.find(A=>A.key===_)?_:"emerging";return V.find(A=>A.key===b),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:V.map(A=>{const Q=(j[A.key]||[]).length,Y=A.key===b;return u.jsxs("button",{className:`concept-tab ${Y?"active":""}`,onClick:()=>R(A.key),style:Y?{color:A.color,borderBottomColor:A.color}:void 0,children:[u.jsxs("span",{children:[A.icon," ",A.label]}),u.jsx("span",{className:"concept-tab-count",children:Q})]},A.key)})}),u.jsx("div",{className:"concept-tab-body",children:tf(j,b)})]})};return $?nf($):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=T[Fe.leftIdx],h=T[Fe.rightIdx];if(!d||!h)return null;const k=Gm(d.text,h.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Nu(k,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(h.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:h.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Nu(k,"right")}})]})]})})()]})}),Pe==="log"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Sl,disabled:Vr==="loading",children:Vr==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=k=>{if(!k)return"info";const L=k.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(L)?"error":/\b(warn|attenzione|warning)/i.test(L)?"warn":/^\s*[✓]\s/.test(k)||/\b(ok|done|complete|pushato|ready)\b/i.test(L)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(k)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(k)?"event":"info"},h=k=>{if(!k||!k.trim())return u.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const L=k.split(`
`);return u.jsx("div",{className:"log-box",children:L.map(($,V)=>u.jsx("span",{className:`log-line log-${d($)}`,children:$||" "},V))})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Vr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ys.scan)]}),u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Vr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(Ys.launchd)]})]})})()]}),Pe==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",me.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Yd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:ta?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(d=>u.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:d.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:d.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),children:d.handle})," · ",d.domain]})]}),u.jsx("div",{className:`thinker-status ${i[d.id]||""}`})]},d.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:C,disabled:!0,onChange:d=>P(d.target.value),onKeyDown:d=>d.key==="Enter"&&Nl(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:U,disabled:!0,onChange:d=>p(d.target.value),onKeyDown:d=>d.key==="Enter"&&Nl(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Nl,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(d=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:N===d?"#eff6ff":"",color:N===d?"#2563eb":"",borderColor:N===d?"#bfdbfe":""},onClick:()=>{I(d),Se({intervalHours:d})},children:[d,"h"]},d)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Lt.map(d=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:d}),u.jsx("button",{className:"source-delete",onClick:()=>Xd(d),disabled:!0,children:"×"})]},d))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Hs,disabled:!0,onChange:d=>Vs(d.target.value),onKeyDown:d=>d.key==="Enter"&&na(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:na,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(pe.isPlaying||pe.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:pe.isPlaying?pe.pause:pe.resume,children:pe.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:pe.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:pe.currentChapter>=0&&pe.chapters[pe.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:pe.chapters[pe.currentChapter].title})," — ",pe.currentChapter+1,"/",pe.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:pe.stop,title:"Stop",children:"⏹"})]}),Ad&&u.jsx("div",{className:"about-backdrop",onClick:()=>hl(!1),children:u.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsx("div",{className:"about-logo",dangerouslySetInnerHTML:{__html:rn.nameHtml}}),u.jsx("div",{className:"about-tagline",children:rn.tagline}),u.jsx("div",{className:"about-desc",children:rn.aboutDescription}),u.jsx("div",{className:"about-footer",dangerouslySetInnerHTML:{__html:rn.aboutFooter}}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>hl(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const o=await r.json();return o[e]!=null?{key:e,value:o[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};bd(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(Zm,{})}));
