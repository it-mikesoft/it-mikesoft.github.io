(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var zu={exports:{}},ql={},Pu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),cf=Symbol.for("react.portal"),df=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),vf=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),fa=Symbol.iterator;function wf(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var _u={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tu=Object.assign,Mu={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||_u}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Iu(){}Iu.prototype=Qn.prototype;function qi(e,t,n){this.props=e,this.context=t,this.refs=Mu,this.updater=n||_u}var Zi=qi.prototype=new Iu;Zi.constructor=qi;Tu(Zi,Qn.prototype);Zi.isPureReactComponent=!0;var pa=Array.isArray,Lu=Object.prototype.hasOwnProperty,es={current:null},Du={key:!0,ref:!0,__self:!0,__source:!0};function Ru(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Lu.call(t,r)&&!Du.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Or,type:e,key:o,ref:i,props:l,_owner:es.current}}function kf(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ts(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function Sf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ma=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sf(""+e.key):t.toString(36)}function gl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Or:case cf:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Do(i,0):r,pa(l)?(n="",e!=null&&(n=e.replace(ma,"$&/")+"/"),gl(l,t,n,"",function(f){return f})):l!=null&&(ts(l)&&(l=kf(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(ma,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",pa(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+Do(o,s);i+=gl(o,t,n,a,l)}else if(a=wf(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+Do(o,s++),i+=gl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Zr(e,t,n){if(e==null)return e;var r=[],l=0;return gl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Nf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},yl={transition:null},jf={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:yl,ReactCurrentOwner:es};function bu(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!ts(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Qn;H.Fragment=df;H.Profiler=pf;H.PureComponent=qi;H.StrictMode=ff;H.Suspense=yf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;H.act=bu;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=es.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Lu.call(t,a)&&!Du.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Or,type:e.type,key:l,ref:o,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mf,_context:e},e.Consumer=e};H.createElement=Ru;H.createFactory=function(e){var t=Ru.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:gf,render:e}};H.isValidElement=ts;H.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:Nf}};H.memo=function(e,t){return{$$typeof:vf,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=yl.transition;yl.transition={};try{e()}finally{yl.transition=t}};H.unstable_act=bu;H.useCallback=function(e,t){return Ie.current.useCallback(e,t)};H.useContext=function(e){return Ie.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ie.current.useEffect(e,t)};H.useId=function(){return Ie.current.useId()};H.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ie.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};H.useRef=function(e){return Ie.current.useRef(e)};H.useState=function(e){return Ie.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ie.current.useTransition()};H.version="18.3.1";Pu.exports=H;var z=Pu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=z,Ef=Symbol.for("react.element"),zf=Symbol.for("react.fragment"),Pf=Object.prototype.hasOwnProperty,_f=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tf={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Pf.call(t,r)&&!Tf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ef,type:e,key:o,ref:i,props:l,_owner:_f.current}}ql.Fragment=zf;ql.jsx=Ou;ql.jsxs=Ou;zu.exports=ql;var u=zu.exports,Fu={exports:{}},We={},$u={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var D=_.length;_.push(O);e:for(;0<D;){var ee=D-1>>>1,Y=_[ee];if(0<l(Y,O))_[ee]=O,_[D]=Y,D=ee;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],D=_.pop();if(D!==O){_[0]=D;e:for(var ee=0,Y=_.length,en=Y>>>1;ee<en;){var Ke=2*(ee+1)-1,yn=_[Ke],tt=Ke+1,It=_[tt];if(0>l(yn,D))tt<Y&&0>l(It,yn)?(_[ee]=It,_[tt]=D,ee=tt):(_[ee]=yn,_[Ke]=D,ee=Ke);else if(tt<Y&&0>l(It,D))_[ee]=It,_[tt]=D,ee=tt;else break e}}return O}function l(_,O){var D=_.sortIndex-O.sortIndex;return D!==0?D:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],v=1,y=null,g=3,S=!1,j=!1,P=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var O=n(f);O!==null;){if(O.callback===null)r(f);else if(O.startTime<=_)r(f),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(f)}}function x(_){if(P=!1,m(_),!j)if(n(a)!==null)j=!0,Ae(E);else{var O=n(f);O!==null&&Gn(x,O.startTime-_)}}function E(_,O){j=!1,P&&(P=!1,p(R),R=-1),S=!0;var D=g;try{for(m(O),y=n(a);y!==null&&(!(y.expirationTime>O)||_&&!ve());){var ee=y.callback;if(typeof ee=="function"){y.callback=null,g=y.priorityLevel;var Y=ee(y.expirationTime<=O);O=e.unstable_now(),typeof Y=="function"?y.callback=Y:y===n(a)&&r(a),m(O)}else r(a);y=n(a)}if(y!==null)var en=!0;else{var Ke=n(f);Ke!==null&&Gn(x,Ke.startTime-O),en=!1}return en}finally{y=null,g=D,S=!1}}var N=!1,T=null,R=-1,ne=5,I=-1;function ve(){return!(e.unstable_now()-I<ne)}function Tt(){if(T!==null){var _=e.unstable_now();I=_;var O=!0;try{O=T(!0,_)}finally{O?Mt():(N=!1,T=null)}}else N=!1}var Mt;if(typeof c=="function")Mt=function(){c(Tt)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,gt=Pe.port2;Pe.port1.onmessage=Tt,Mt=function(){gt.postMessage(null)}}else Mt=function(){U(Tt,0)};function Ae(_){T=_,N||(N=!0,Mt())}function Gn(_,O){R=U(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){j||S||(j=!0,Ae(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var O=3;break;default:O=g}var D=g;g=O;try{return _()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=g;g=_;try{return O()}finally{g=D}},e.unstable_scheduleCallback=function(_,O,D){var ee=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ee+D:ee):D=ee,_){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,_={id:v++,callback:O,priorityLevel:_,startTime:D,expirationTime:Y,sortIndex:-1},D>ee?(_.sortIndex=D,t(f,_),n(a)===null&&_===n(f)&&(P?(p(R),R=-1):P=!0,Gn(x,D-ee))):(_.sortIndex=Y,t(a,_),j||S||(j=!0,Ae(E))),_},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(_){var O=g;return function(){var D=g;g=O;try{return _.apply(this,arguments)}finally{g=D}}}})(Au);$u.exports=Au;var Mf=$u.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=z,Ve=Mf;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bu=new Set,wr={};function hn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(wr[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=Object.prototype.hasOwnProperty,Lf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},ga={};function Df(e){return ii.call(ga,e)?!0:ii.call(ha,e)?!1:Lf.test(e)?ga[e]=!0:(ha[e]=!0,!1)}function Rf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bf(e,t,n,r){if(t===null||typeof t>"u"||Rf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Le(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new Le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new Le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new Le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new Le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new Le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new Le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new Le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new Le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new Le(e,5,!1,e.toLowerCase(),null,!1,!1)});var ns=/[\-:]([a-z])/g;function rs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ns,rs);ke[t]=new Le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ns,rs);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ns,rs);ke[t]=new Le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new Le(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var l=ke.hasOwnProperty(t)?ke[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bf(t,n,l,r)&&(n=null),r||l===null?Df(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _t=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),os=Symbol.for("react.strict_mode"),si=Symbol.for("react.profiler"),Uu=Symbol.for("react.provider"),Hu=Symbol.for("react.context"),is=Symbol.for("react.forward_ref"),ai=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),ss=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Vu=Symbol.for("react.offscreen"),ya=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ro;function sr(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var bo=!1;function Oo(e,t){if(!e||bo)return"";bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function Of(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=Oo(e.type,!1),e;case 11:return e=Oo(e.type.render,!1),e;case 1:return e=Oo(e.type,!0),e;default:return""}}function ci(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case kn:return"Portal";case si:return"Profiler";case os:return"StrictMode";case ai:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hu:return(e.displayName||"Context")+".Consumer";case Uu:return(e._context.displayName||"Context")+".Provider";case is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ss:return t=e.displayName||null,t!==null?t:ci(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return ci(e(t))}catch{}}return null}function Ff(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ci(t);case 8:return t===os?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $f(e){var t=Wu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tl(e){e._valueTracker||(e._valueTracker=$f(e))}function Qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ku(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function fi(e,t){Ku(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?pi(e,t.type,n):t.hasOwnProperty("defaultValue")&&pi(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function pi(e,t,n){(t!=="number"||Pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(ar(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Yu(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ka(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,Xu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Af=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){Af.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function Ju(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ju(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Bf=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(Bf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function as(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xi=null,Dn=null,Rn=null;function Sa(e){if(e=Ar(e)){if(typeof xi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ro(t),xi(e.stateNode,e.type,t))}}function Zu(e){Dn?Rn?Rn.push(e):Rn=[e]:Dn=e}function ec(){if(Dn){var e=Dn,t=Rn;if(Rn=Dn=null,Sa(e),t)for(e=0;e<t.length;e++)Sa(t[e])}}function tc(e,t){return e(t)}function nc(){}var Fo=!1;function rc(e,t,n){if(Fo)return e(t,n);Fo=!0;try{return tc(e,t,n)}finally{Fo=!1,(Dn!==null||Rn!==null)&&(nc(),ec())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var wi=!1;if(Ct)try{var Zn={};Object.defineProperty(Zn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",Zn,Zn),window.removeEventListener("test",Zn,Zn)}catch{wi=!1}function Uf(e,t,n,r,l,o,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var fr=!1,_l=null,Tl=!1,ki=null,Hf={onError:function(e){fr=!0,_l=e}};function Vf(e,t,n,r,l,o,i,s,a){fr=!1,_l=null,Uf.apply(Hf,arguments)}function Wf(e,t,n,r,l,o,i,s,a){if(Vf.apply(this,arguments),fr){if(fr){var f=_l;fr=!1,_l=null}else throw Error(w(198));Tl||(Tl=!0,ki=f)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Na(e){if(gn(e)!==e)throw Error(w(188))}function Qf(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Na(l),e;if(o===r)return Na(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function oc(e){return e=Qf(e),e!==null?ic(e):null}function ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ic(e);if(t!==null)return t;e=e.sibling}return null}var sc=Ve.unstable_scheduleCallback,ja=Ve.unstable_cancelCallback,Kf=Ve.unstable_shouldYield,Yf=Ve.unstable_requestPaint,ue=Ve.unstable_now,Gf=Ve.unstable_getCurrentPriorityLevel,us=Ve.unstable_ImmediatePriority,ac=Ve.unstable_UserBlockingPriority,Ml=Ve.unstable_NormalPriority,Xf=Ve.unstable_LowPriority,uc=Ve.unstable_IdlePriority,Zl=null,mt=null;function Jf(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Zl,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:ep,qf=Math.log,Zf=Math.LN2;function ep(e){return e>>>=0,e===0?32:31-(qf(e)/Zf|0)|0}var rl=64,ll=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=ur(s):(o&=i,o!==0&&(r=ur(o)))}else i=n&~l,i!==0?r=ur(i):o!==0&&(r=ur(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function tp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function np(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=tp(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cc(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function $o(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function rp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var K=0;function dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fc,ds,pc,mc,hc,Ni=!1,ol=[],Bt=null,Ut=null,Ht=null,Nr=new Map,jr=new Map,Ot=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function er(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ar(t),t!==null&&ds(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function op(e,t,n,r,l){switch(t){case"focusin":return Bt=er(Bt,e,t,n,r,l),!0;case"dragenter":return Ut=er(Ut,e,t,n,r,l),!0;case"mouseover":return Ht=er(Ht,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Nr.set(o,er(Nr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,jr.set(o,er(jr.get(o)||null,e,t,n,r,l)),!0}return!1}function gc(e){var t=ln(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=lc(n),t!==null){e.blockedOn=t,hc(e.priority,function(){pc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vi=r,n.target.dispatchEvent(r),vi=null}else return t=Ar(n),t!==null&&ds(t),e.blockedOn=n,!1;t.shift()}return!0}function Ea(e,t,n){vl(e)&&n.delete(t)}function ip(){Ni=!1,Bt!==null&&vl(Bt)&&(Bt=null),Ut!==null&&vl(Ut)&&(Ut=null),Ht!==null&&vl(Ht)&&(Ht=null),Nr.forEach(Ea),jr.forEach(Ea)}function tr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,ip)))}function Cr(e){function t(l){return tr(l,e)}if(0<ol.length){tr(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&tr(Bt,e),Ut!==null&&tr(Ut,e),Ht!==null&&tr(Ht,e),Nr.forEach(t),jr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)gc(n),n.blockedOn===null&&Ot.shift()}var bn=_t.ReactCurrentBatchConfig,Ll=!0;function sp(e,t,n,r){var l=K,o=bn.transition;bn.transition=null;try{K=1,fs(e,t,n,r)}finally{K=l,bn.transition=o}}function ap(e,t,n,r){var l=K,o=bn.transition;bn.transition=null;try{K=4,fs(e,t,n,r)}finally{K=l,bn.transition=o}}function fs(e,t,n,r){if(Ll){var l=ji(e,t,n,r);if(l===null)Go(e,t,r,Dl,n),Ca(e,r);else if(op(l,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<lp.indexOf(e)){for(;l!==null;){var o=Ar(l);if(o!==null&&fc(o),o=ji(e,t,n,r),o===null&&Go(e,t,r,Dl,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var Dl=null;function ji(e,t,n,r){if(Dl=null,e=as(r),e=ln(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dl=e,null}function yc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gf()){case us:return 1;case ac:return 4;case Ml:case Xf:return 16;case uc:return 536870912;default:return 16}default:return 16}}var $t=null,ps=null,xl=null;function vc(){if(xl)return xl;var e,t=ps,n=t.length,r,l="value"in $t?$t.value:$t.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return xl=l.slice(e,1<r?1-r:void 0)}function wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function za(){return!1}function Qe(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?il:za,this.isPropagationStopped=za,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=Qe(Kn),$r=ie({},Kn,{view:0,detail:0}),up=Qe($r),Ao,Bo,nr,eo=ie({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(Ao=e.screenX-nr.screenX,Bo=e.screenY-nr.screenY):Bo=Ao=0,nr=e),Ao)},movementY:function(e){return"movementY"in e?e.movementY:Bo}}),Pa=Qe(eo),cp=ie({},eo,{dataTransfer:0}),dp=Qe(cp),fp=ie({},$r,{relatedTarget:0}),Uo=Qe(fp),pp=ie({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),mp=Qe(pp),hp=ie({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=Qe(hp),yp=ie({},Kn,{data:0}),_a=Qe(yp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wp[e])?!!t[e]:!1}function hs(){return kp}var Sp=ie({},$r,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hs,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=Qe(Sp),jp=ie({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ta=Qe(jp),Cp=ie({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hs}),Ep=Qe(Cp),zp=ie({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pp=Qe(zp),_p=ie({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tp=Qe(_p),Mp=[9,13,27,32],gs=Ct&&"CompositionEvent"in window,pr=null;Ct&&"documentMode"in document&&(pr=document.documentMode);var Ip=Ct&&"TextEvent"in window&&!pr,xc=Ct&&(!gs||pr&&8<pr&&11>=pr),Ma=" ",Ia=!1;function wc(e,t){switch(e){case"keyup":return Mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function Lp(e,t){switch(e){case"compositionend":return kc(t);case"keypress":return t.which!==32?null:(Ia=!0,Ma);case"textInput":return e=t.data,e===Ma&&Ia?null:e;default:return null}}function Dp(e,t){if(Nn)return e==="compositionend"||!gs&&wc(e,t)?(e=vc(),xl=ps=$t=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xc&&t.locale!=="ko"?null:t.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rp[e.type]:t==="textarea"}function Sc(e,t,n,r){Zu(r),t=Rl(t,"onChange"),0<t.length&&(n=new ms("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,Er=null;function bp(e){Lc(e,0)}function to(e){var t=En(e);if(Qu(t))return e}function Op(e,t){if(e==="change")return t}var Nc=!1;if(Ct){var Ho;if(Ct){var Vo="oninput"in document;if(!Vo){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Vo=typeof Da.oninput=="function"}Ho=Vo}else Ho=!1;Nc=Ho&&(!document.documentMode||9<document.documentMode)}function Ra(){mr&&(mr.detachEvent("onpropertychange",jc),Er=mr=null)}function jc(e){if(e.propertyName==="value"&&to(Er)){var t=[];Sc(t,Er,e,as(e)),rc(bp,t)}}function Fp(e,t,n){e==="focusin"?(Ra(),mr=t,Er=n,mr.attachEvent("onpropertychange",jc)):e==="focusout"&&Ra()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(Er)}function Ap(e,t){if(e==="click")return to(t)}function Bp(e,t){if(e==="input"||e==="change")return to(t)}function Up(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Up;function zr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ii.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oa(e,t){var n=ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function Cc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ec(){for(var e=window,t=Pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hp(e){var t=Ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Cc(n.ownerDocument.documentElement,n)){if(r!==null&&ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Oa(n,o);var i=Oa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vp=Ct&&"documentMode"in document&&11>=document.documentMode,jn=null,Ci=null,hr=null,Ei=!1;function Fa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ei||jn==null||jn!==Pl(r)||(r=jn,"selectionStart"in r&&ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&zr(hr,r)||(hr=r,r=Rl(Ci,"onSelect"),0<r.length&&(t=new ms("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Wo={},zc={};Ct&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function no(e){if(Wo[e])return Wo[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zc)return Wo[e]=t[n];return e}var Pc=no("animationend"),_c=no("animationiteration"),Tc=no("animationstart"),Mc=no("transitionend"),Ic=new Map,$a="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Ic.set(e,t),hn(t,[e])}for(var Qo=0;Qo<$a.length;Qo++){var Ko=$a[Qo],Wp=Ko.toLowerCase(),Qp=Ko[0].toUpperCase()+Ko.slice(1);Jt(Wp,"on"+Qp)}Jt(Pc,"onAnimationEnd");Jt(_c,"onAnimationIteration");Jt(Tc,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Mc,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function Aa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wf(r,t,void 0,e),e.currentTarget=null}function Lc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;Aa(l,s,f),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;Aa(l,s,f),o=a}}}if(Tl)throw e=ki,Tl=!1,ki=null,e}function q(e,t){var n=t[Mi];n===void 0&&(n=t[Mi]=new Set);var r=e+"__bubble";n.has(r)||(Dc(t,e,2,!1),n.add(r))}function Yo(e,t,n){var r=0;t&&(r|=4),Dc(n,e,r,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[al]){e[al]=!0,Bu.forEach(function(n){n!=="selectionchange"&&(Kp.has(n)||Yo(n,!1,e),Yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Yo("selectionchange",!1,t))}}function Dc(e,t,n,r){switch(yc(t)){case 1:var l=sp;break;case 4:l=ap;break;default:l=fs}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=ln(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}rc(function(){var f=o,v=as(n),y=[];e:{var g=Ic.get(e);if(g!==void 0){var S=ms,j=e;switch(e){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":S=Np;break;case"focusin":j="focus",S=Uo;break;case"focusout":j="blur",S=Uo;break;case"beforeblur":case"afterblur":S=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Pa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ep;break;case Pc:case _c:case Tc:S=mp;break;case Mc:S=Pp;break;case"scroll":S=up;break;case"wheel":S=Tp;break;case"copy":case"cut":case"paste":S=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ta}var P=(t&4)!==0,U=!P&&e==="scroll",p=P?g!==null?g+"Capture":null:g;P=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=Sr(c,p),x!=null&&P.push(_r(c,x,m)))),U)break;c=c.return}0<P.length&&(g=new S(g,j,null,n,v),y.push({event:g,listeners:P}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==vi&&(j=n.relatedTarget||n.fromElement)&&(ln(j)||j[Et]))break e;if((S||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,S?(j=n.relatedTarget||n.toElement,S=f,j=j?ln(j):null,j!==null&&(U=gn(j),j!==U||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=f),S!==j)){if(P=Pa,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(P=Ta,x="onPointerLeave",p="onPointerEnter",c="pointer"),U=S==null?g:En(S),m=j==null?g:En(j),g=new P(x,c+"leave",S,n,v),g.target=U,g.relatedTarget=m,x=null,ln(v)===f&&(P=new P(p,c+"enter",j,n,v),P.target=m,P.relatedTarget=U,x=P),U=x,S&&j)t:{for(P=S,p=j,c=0,m=P;m;m=wn(m))c++;for(m=0,x=p;x;x=wn(x))m++;for(;0<c-m;)P=wn(P),c--;for(;0<m-c;)p=wn(p),m--;for(;c--;){if(P===p||p!==null&&P===p.alternate)break t;P=wn(P),p=wn(p)}P=null}else P=null;S!==null&&Ba(y,g,S,P,!1),j!==null&&U!==null&&Ba(y,U,j,P,!0)}}e:{if(g=f?En(f):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var E=Op;else if(La(g))if(Nc)E=Bp;else{E=$p;var N=Fp}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Ap);if(E&&(E=E(e,f))){Sc(y,E,n,v);break e}N&&N(e,g,f),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&pi(g,"number",g.value)}switch(N=f?En(f):window,e){case"focusin":(La(N)||N.contentEditable==="true")&&(jn=N,Ci=f,hr=null);break;case"focusout":hr=Ci=jn=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,Fa(y,n,v);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Fa(y,n,v)}var T;if(gs)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Nn?wc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(xc&&n.locale!=="ko"&&(Nn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Nn&&(T=vc()):($t=v,ps="value"in $t?$t.value:$t.textContent,Nn=!0)),N=Rl(f,R),0<N.length&&(R=new _a(R,e,null,n,v),y.push({event:R,listeners:N}),T?R.data=T:(T=kc(n),T!==null&&(R.data=T)))),(T=Ip?Lp(e,n):Dp(e,n))&&(f=Rl(f,"onBeforeInput"),0<f.length&&(v=new _a("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=T))}Lc(y,t)})}function _r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Sr(e,n),o!=null&&r.unshift(_r(e,o,l)),o=Sr(e,t),o!=null&&r.push(_r(e,o,l))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,l?(a=Sr(n,o),a!=null&&i.unshift(_r(n,a,s))):l||(a=Sr(n,o),a!=null&&i.push(_r(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yp=/\r\n?/g,Gp=/\u0000|\uFFFD/g;function Ua(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Gp,"")}function ul(e,t,n){if(t=Ua(t),Ua(e)!==t&&n)throw Error(w(425))}function bl(){}var zi=null,Pi=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ti=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,Ha=typeof Promise=="function"?Promise:void 0,Jp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ha<"u"?function(e){return Ha.resolve(null).then(e).catch(qp)}:Ti;function qp(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Cr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Va(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Yn,Tr="__reactProps$"+Yn,Et="__reactContainer$"+Yn,Mi="__reactEvents$"+Yn,Zp="__reactListeners$"+Yn,em="__reactHandles$"+Yn;function ln(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Va(e);e!==null;){if(n=e[pt])return n;e=Va(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[pt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ro(e){return e[Tr]||null}var Ii=[],zn=-1;function qt(e){return{current:e}}function Z(e){0>zn||(e.current=Ii[zn],Ii[zn]=null,zn--)}function X(e,t){zn++,Ii[zn]=e.current,e.current=t}var Xt={},ze=qt(Xt),Oe=qt(!1),cn=Xt;function An(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Fe(e){return e=e.childContextTypes,e!=null}function Ol(){Z(Oe),Z(ze)}function Wa(e,t,n){if(ze.current!==Xt)throw Error(w(168));X(ze,t),X(Oe,n)}function Rc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Ff(e)||"Unknown",l));return ie({},n,r)}function Fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=ze.current,X(ze,e),X(Oe,Oe.current),!0}function Qa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Rc(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Z(Oe),Z(ze),X(ze,e)):Z(Oe),X(Oe,n)}var wt=null,lo=!1,Jo=!1;function bc(e){wt===null?wt=[e]:wt.push(e)}function tm(e){lo=!0,bc(e)}function Zt(){if(!Jo&&wt!==null){Jo=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,lo=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),sc(us,Zt),l}finally{K=t,Jo=!1}}return null}var Pn=[],_n=0,$l=null,Al=0,Ge=[],Xe=0,dn=null,kt=1,St="";function tn(e,t){Pn[_n++]=Al,Pn[_n++]=$l,$l=e,Al=t}function Oc(e,t,n){Ge[Xe++]=kt,Ge[Xe++]=St,Ge[Xe++]=dn,dn=e;var r=kt;e=St;var l=32-at(r)-1;r&=~(1<<l),n+=1;var o=32-at(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,kt=1<<32-at(t)+l|n<<l|r,St=o+e}else kt=1<<o|n<<l|r,St=e}function vs(e){e.return!==null&&(tn(e,1),Oc(e,1,0))}function xs(e){for(;e===$l;)$l=Pn[--_n],Pn[_n]=null,Al=Pn[--_n],Pn[_n]=null;for(;e===dn;)dn=Ge[--Xe],Ge[Xe]=null,St=Ge[--Xe],Ge[Xe]=null,kt=Ge[--Xe],Ge[Xe]=null}var He=null,Ue=null,te=!1,st=null;function Fc(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ka(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ue=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ue=null,!0):!1;default:return!1}}function Li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Di(e){if(te){var t=Ue;if(t){var n=t;if(!Ka(e,t)){if(Li(e))throw Error(w(418));t=Vt(n.nextSibling);var r=He;t&&Ka(e,t)?Fc(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(Li(e))throw Error(w(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function cl(e){if(e!==He)return!1;if(!te)return Ya(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=Ue)){if(Li(e))throw $c(),Error(w(418));for(;t;)Fc(e,t),t=Vt(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=He?Vt(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=Ue;e;)e=Vt(e.nextSibling)}function Bn(){Ue=He=null,te=!1}function ws(e){st===null?st=[e]:st.push(e)}var nm=_t.ReactCurrentBatchConfig;function rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function dl(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){var t=e._init;return t(e._payload)}function Ac(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Yt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=li(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var E=m.type;return E===Sn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Ga(E)===c.type)?(x=l(c,m.props),x.ref=rr(p,c,m),x.return=p,x):(x=zl(m.type,m.key,m.props,null,p.mode,x),x.ref=rr(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=oi(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,E){return c===null||c.tag!==7?(c=un(m,p.mode,x,E),c.return=p,c):(c=l(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=li(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case el:return m=zl(c.type,c.key,c.props,null,p.mode,m),m.ref=rr(p,null,c),m.return=p,m;case kn:return c=oi(c,p.mode,m),c.return=p,c;case Rt:var x=c._init;return y(p,x(c._payload),m)}if(ar(c)||qn(c))return c=un(c,p.mode,m,null),c.return=p,c;dl(p,c)}return null}function g(p,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case el:return m.key===E?a(p,c,m,x):null;case kn:return m.key===E?f(p,c,m,x):null;case Rt:return E=m._init,g(p,c,E(m._payload),x)}if(ar(m)||qn(m))return E!==null?null:v(p,c,m,x,null);dl(p,m)}return null}function S(p,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case el:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,E);case kn:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,E);case Rt:var N=x._init;return S(p,c,m,N(x._payload),E)}if(ar(x)||qn(x))return p=p.get(m)||null,v(c,p,x,E,null);dl(c,x)}return null}function j(p,c,m,x){for(var E=null,N=null,T=c,R=c=0,ne=null;T!==null&&R<m.length;R++){T.index>R?(ne=T,T=null):ne=T.sibling;var I=g(p,T,m[R],x);if(I===null){T===null&&(T=ne);break}e&&T&&I.alternate===null&&t(p,T),c=o(I,c,R),N===null?E=I:N.sibling=I,N=I,T=ne}if(R===m.length)return n(p,T),te&&tn(p,R),E;if(T===null){for(;R<m.length;R++)T=y(p,m[R],x),T!==null&&(c=o(T,c,R),N===null?E=T:N.sibling=T,N=T);return te&&tn(p,R),E}for(T=r(p,T);R<m.length;R++)ne=S(T,p,R,m[R],x),ne!==null&&(e&&ne.alternate!==null&&T.delete(ne.key===null?R:ne.key),c=o(ne,c,R),N===null?E=ne:N.sibling=ne,N=ne);return e&&T.forEach(function(ve){return t(p,ve)}),te&&tn(p,R),E}function P(p,c,m,x){var E=qn(m);if(typeof E!="function")throw Error(w(150));if(m=E.call(m),m==null)throw Error(w(151));for(var N=E=null,T=c,R=c=0,ne=null,I=m.next();T!==null&&!I.done;R++,I=m.next()){T.index>R?(ne=T,T=null):ne=T.sibling;var ve=g(p,T,I.value,x);if(ve===null){T===null&&(T=ne);break}e&&T&&ve.alternate===null&&t(p,T),c=o(ve,c,R),N===null?E=ve:N.sibling=ve,N=ve,T=ne}if(I.done)return n(p,T),te&&tn(p,R),E;if(T===null){for(;!I.done;R++,I=m.next())I=y(p,I.value,x),I!==null&&(c=o(I,c,R),N===null?E=I:N.sibling=I,N=I);return te&&tn(p,R),E}for(T=r(p,T);!I.done;R++,I=m.next())I=S(T,p,R,I.value,x),I!==null&&(e&&I.alternate!==null&&T.delete(I.key===null?R:I.key),c=o(I,c,R),N===null?E=I:N.sibling=I,N=I);return e&&T.forEach(function(Tt){return t(p,Tt)}),te&&tn(p,R),E}function U(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===Sn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case el:e:{for(var E=m.key,N=c;N!==null;){if(N.key===E){if(E=m.type,E===Sn){if(N.tag===7){n(p,N.sibling),c=l(N,m.props.children),c.return=p,p=c;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&Ga(E)===N.type){n(p,N.sibling),c=l(N,m.props),c.ref=rr(p,N,m),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===Sn?(c=un(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=zl(m.type,m.key,m.props,null,p.mode,x),x.ref=rr(p,c,m),x.return=p,p=x)}return i(p);case kn:e:{for(N=m.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=oi(m,p.mode,x),c.return=p,p=c}return i(p);case Rt:return N=m._init,U(p,c,N(m._payload),x)}if(ar(m))return j(p,c,m,x);if(qn(m))return P(p,c,m,x);dl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=li(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return U}var Un=Ac(!0),Bc=Ac(!1),Bl=qt(null),Ul=null,Tn=null,ks=null;function Ss(){ks=Tn=Ul=null}function Ns(e){var t=Bl.current;Z(Bl),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Ul=e,ks=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ul===null)throw Error(w(308));Tn=e,Ul.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var on=null;function js(e){on===null?on=[e]:on.push(e)}function Uc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,js(t)):(n.next=l.next,l.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,zt(e,n)}return l=r.interleaved,l===null?(t.next=t,js(r)):(t.next=l.next,l.next=t),r.interleaved=t,zt(e,n)}function kl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cs(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hl(e,t,n,r){var l=e.updateQueue;bt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?o=f:i.next=f,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=a))}if(o!==null){var y=l.baseState;i=0,v=f=a=null,s=o;do{var g=s.lane,S=s.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var j=e,P=s;switch(g=t,S=n,P.tag){case 1:if(j=P.payload,typeof j=="function"){y=j.call(S,y,g);break e}y=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=P.payload,g=typeof j=="function"?j.call(S,y,g):j,g==null)break e;y=ie({},y,g);break e;case 2:bt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else S={eventTime:S,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=S,a=y):v=v.next=S,i|=g;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);pn|=i,e.lanes=i,e.memoizedState=y}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Br={},ht=qt(Br),Mr=qt(Br),Ir=qt(Br);function sn(e){if(e===Br)throw Error(w(174));return e}function Es(e,t){switch(X(Ir,t),X(Mr,e),X(ht,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hi(t,e)}Z(ht),X(ht,t)}function Hn(){Z(ht),Z(Mr),Z(Ir)}function Vc(e){sn(Ir.current);var t=sn(ht.current),n=hi(t,e.type);t!==n&&(X(Mr,e),X(ht,n))}function zs(e){Mr.current===e&&(Z(ht),Z(Mr))}var le=qt(0);function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=[];function Ps(){for(var e=0;e<qo.length;e++)qo[e]._workInProgressVersionPrimary=null;qo.length=0}var Sl=_t.ReactCurrentDispatcher,Zo=_t.ReactCurrentBatchConfig,fn=0,oe=null,de=null,ge=null,Wl=!1,gr=!1,Lr=0,rm=0;function je(){throw Error(w(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ts(e,t,n,r,l,o){if(fn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sl.current=e===null||e.memoizedState===null?sm:am,e=n(r,l),gr){o=0;do{if(gr=!1,Lr=0,25<=o)throw Error(w(301));o+=1,ge=de=null,t.updateQueue=null,Sl.current=um,e=n(r,l)}while(gr)}if(Sl.current=Ql,t=de!==null&&de.next!==null,fn=0,ge=de=oe=null,Wl=!1,t)throw Error(w(300));return e}function Ms(){var e=Lr!==0;return Lr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?oe.memoizedState=ge=e:ge=ge.next=e,ge}function et(){if(de===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ge===null?oe.memoizedState:ge.next;if(t!==null)ge=t,de=e;else{if(e===null)throw Error(w(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ge===null?oe.memoizedState=ge=e:ge=ge.next=e}return ge}function Dr(e,t){return typeof t=="function"?t(e):t}function ei(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=de,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,f=o;do{var v=f.lane;if((fn&v)===v)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=y,i=r):a=a.next=y,oe.lanes|=v,pn|=v}f=f.next}while(f!==null&&f!==o);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,oe.lanes|=o,pn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ti(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ct(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wc(){}function Qc(e,t){var n=oe,r=et(),l=t(),o=!ct(r.memoizedState,l);if(o&&(r.memoizedState=l,be=!0),r=r.queue,Is(Gc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Rr(9,Yc.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(w(349));fn&30||Kc(n,t,l)}return l}function Kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yc(e,t,n,r){t.value=n,t.getSnapshot=r,Xc(t)&&Jc(e)}function Gc(e,t,n){return n(function(){Xc(t)&&Jc(e)})}function Xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Jc(e){var t=zt(e,1);t!==null&&ut(t,e,1,-1)}function qa(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=im.bind(null,oe,e),[t.memoizedState,e]}function Rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qc(){return et().memoizedState}function Nl(e,t,n,r){var l=ft();oe.flags|=e,l.memoizedState=Rr(1|t,n,void 0,r===void 0?null:r)}function oo(e,t,n,r){var l=et();r=r===void 0?null:r;var o=void 0;if(de!==null){var i=de.memoizedState;if(o=i.destroy,r!==null&&_s(r,i.deps)){l.memoizedState=Rr(t,n,o,r);return}}oe.flags|=e,l.memoizedState=Rr(1|t,n,o,r)}function Za(e,t){return Nl(8390656,8,e,t)}function Is(e,t){return oo(2048,8,e,t)}function Zc(e,t){return oo(4,2,e,t)}function ed(e,t){return oo(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){return n=n!=null?n.concat([e]):null,oo(4,4,td.bind(null,t,e),n)}function Ls(){}function rd(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ld(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function od(e,t,n){return fn&21?(ct(n,t)||(n=cc(),oe.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function lm(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Zo.transition;Zo.transition={};try{e(!1),t()}finally{K=n,Zo.transition=r}}function id(){return et().memoizedState}function om(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sd(e))ad(t,n);else if(n=Uc(e,t,n,r),n!==null){var l=Me();ut(n,e,r,l),ud(n,t,r)}}function im(e,t,n){var r=Kt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sd(e))ad(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(l.next=l,js(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Uc(e,t,l,r),n!==null&&(l=Me(),ut(n,e,r,l),ud(n,t,r))}}function sd(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function ad(e,t){gr=Wl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ud(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cs(e,n)}}var Ql={readContext:Ze,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},sm={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Za,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nl(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=om.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:qa,useDebugValue:Ls,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=qa(!1),t=e[0];return e=lm.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,l=ft();if(te){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ye===null)throw Error(w(349));fn&30||Kc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Za(Gc.bind(null,r,o,e),[e]),r.flags|=2048,Rr(9,Yc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=ye.identifierPrefix;if(te){var n=St,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},am={readContext:Ze,useCallback:rd,useContext:Ze,useEffect:Is,useImperativeHandle:nd,useInsertionEffect:Zc,useLayoutEffect:ed,useMemo:ld,useReducer:ei,useRef:qc,useState:function(){return ei(Dr)},useDebugValue:Ls,useDeferredValue:function(e){var t=et();return od(t,de.memoizedState,e)},useTransition:function(){var e=ei(Dr)[0],t=et().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Qc,useId:id,unstable_isNewReconciler:!1},um={readContext:Ze,useCallback:rd,useContext:Ze,useEffect:Is,useImperativeHandle:nd,useInsertionEffect:Zc,useLayoutEffect:ed,useMemo:ld,useReducer:ti,useRef:qc,useState:function(){return ti(Dr)},useDebugValue:Ls,useDeferredValue:function(e){var t=et();return de===null?t.memoizedState=e:od(t,de.memoizedState,e)},useTransition:function(){var e=ti(Dr)[0],t=et().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Qc,useId:id,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var io={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),l=Kt(e),o=Nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,l),t!==null&&(ut(t,e,l,r),kl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),l=Kt(e),o=Nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,l),t!==null&&(ut(t,e,l,r),kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=Kt(e),l=Nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Wt(e,l,r),t!==null&&(ut(t,e,r,n),kl(t,e,r))}};function eu(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(l,o):!0}function cd(e,t,n){var r=!1,l=Xt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(l=Fe(t)?cn:ze.current,r=t.contextTypes,o=(r=r!=null)?An(e,l):Xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function tu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Cs(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ze(o):(o=Fe(t)?cn:ze.current,l.context=An(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bi(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&io.enqueueReplaceState(l,l.state,null),Hl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Of(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function dd(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yl||(Yl=!0,Yi=r),Fi(e,t)},n}function fd(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Fi(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fi(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=jm.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var dm=_t.ReactCurrentOwner,be=!1;function Te(e,t,n,r){t.child=e===null?Bc(t,null,n,r):Un(t,e.child,n,r)}function ou(e,t,n,r,l){n=n.render;var o=t.ref;return On(t,l),r=Ts(e,t,n,r,o,l),n=Ms(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Pt(e,t,l)):(te&&n&&vs(t),t.flags|=1,Te(e,t,r,l),t.child)}function iu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Bs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,pd(e,t,o,r,l)):(e=zl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(i,r)&&e.ref===t.ref)return Pt(e,t,l)}return t.flags|=1,e=Yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function pd(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(zr(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Pt(e,t,l)}return $i(e,t,n,r,l)}function md(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(In,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(In,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(In,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(In,Be),Be|=r;return Te(e,t,l,n),t.child}function hd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,l){var o=Fe(n)?cn:ze.current;return o=An(t,o),On(t,l),n=Ts(e,t,n,r,o,l),r=Ms(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Pt(e,t,l)):(te&&r&&vs(t),t.flags|=1,Te(e,t,n,l),t.child)}function su(e,t,n,r,l){if(Fe(n)){var o=!0;Fl(t)}else o=!1;if(On(t,l),t.stateNode===null)jl(e,t),cd(t,n,r),Oi(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ze(f):(f=Fe(n)?cn:ze.current,f=An(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&tu(t,i,r,f),bt=!1;var g=t.memoizedState;i.state=g,Hl(t,r,i,l),a=t.memoizedState,s!==r||g!==a||Oe.current||bt?(typeof v=="function"&&(bi(t,n,v,r),a=t.memoizedState),(s=bt||eu(t,n,s,r,g,a,f))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Hc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:ot(t.type,s),i.props=f,y=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Fe(n)?cn:ze.current,a=An(t,a));var S=n.getDerivedStateFromProps;(v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||g!==a)&&tu(t,i,r,a),bt=!1,g=t.memoizedState,i.state=g,Hl(t,r,i,l);var j=t.memoizedState;s!==y||g!==j||Oe.current||bt?(typeof S=="function"&&(bi(t,n,S,r),j=t.memoizedState),(f=bt||eu(t,n,f,r,g,j,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,j,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,j,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),i.props=r,i.state=j,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ai(e,t,n,r,o,l)}function Ai(e,t,n,r,l,o){hd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Qa(t,n,!1),Pt(e,t,o);r=t.stateNode,dm.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,s,o)):Te(e,t,s,o),t.memoizedState=r.state,l&&Qa(t,n,!0),t.child}function gd(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),Es(e,t.containerInfo)}function au(e,t,n,r,l){return Bn(),ws(l),t.flags|=256,Te(e,t,n,r),t.child}var Bi={dehydrated:null,treeContext:null,retryLane:0};function Ui(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,t,n){var r=t.pendingProps,l=le.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(le,l&1),e===null)return Di(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=uo(i,r,0,null),e=un(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ui(n),t.memoizedState=Bi,e):Ds(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return fm(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Yt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Yt(s,o):(o=un(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?Ui(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Bi,r}return o=e.child,e=o.sibling,r=Yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fl(e,t,n,r){return r!==null&&ws(r),Un(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ni(Error(w(422))),fl(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=uo({mode:"visible",children:r.children},l,0,null),o=un(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Un(t,e.child,null,i),t.child.memoizedState=Ui(i),t.memoizedState=Bi,o);if(!(t.mode&1))return fl(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=ni(o,r,void 0),fl(e,t,i,r)}if(s=(i&e.childLanes)!==0,be||s){if(r=ye,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,zt(e,l),ut(r,e,l,-1))}return As(),r=ni(Error(w(421))),fl(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cm.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Ue=Vt(l.nextSibling),He=t,te=!0,st=null,e!==null&&(Ge[Xe++]=kt,Ge[Xe++]=St,Ge[Xe++]=dn,kt=e.id,St=e.overflow,dn=t),t=Ds(t,r.children),t.flags|=4096,t)}function uu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function ri(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function vd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Te(e,t,r.children,n),r=le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uu(e,n,t);else if(e.tag===19)uu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(le,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Vl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ri(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ri(t,!0,n,null,o);break;case"together":ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pm(e,t,n){switch(t.tag){case 3:gd(t),Bn();break;case 5:Vc(t);break;case 1:Fe(t.type)&&Fl(t);break;case 4:Es(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;X(Bl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(le,le.current&1),t.flags|=128,null):n&t.child.childLanes?yd(e,t,n):(X(le,le.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);X(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,md(e,t,n)}return Pt(e,t,n)}var xd,Hi,wd,kd;xd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hi=function(){};wd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,sn(ht.current);var o=null;switch(n){case"input":l=di(e,l),r=di(e,r),o=[];break;case"select":l=ie({},l,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":l=mi(e,l),r=mi(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bl)}gi(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(wr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var a=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(wr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&q("scroll",e),o||s===a||(o=[])):(o=o||[]).push(f,a))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mm(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Fe(t.type)&&Ol(),Ce(t),null;case 3:return r=t.stateNode,Hn(),Z(Oe),Z(ze),Ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Ji(st),st=null))),Hi(e,t),Ce(t),null;case 5:zs(t);var l=sn(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)wd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return Ce(t),null}if(e=sn(ht.current),cl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[Tr]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(l=0;l<cr.length;l++)q(cr[l],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":va(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":wa(r,o),q("invalid",r)}gi(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ul(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ul(r.textContent,s,e),l=["children",""+s]):wr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&q("scroll",r)}switch(n){case"input":tl(r),xa(r,o,!0);break;case"textarea":tl(r),ka(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=bl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[Tr]=r,xd(e,t,!1,!1),t.stateNode=e;e:{switch(i=yi(n,r),n){case"dialog":q("cancel",e),q("close",e),l=r;break;case"iframe":case"object":case"embed":q("load",e),l=r;break;case"video":case"audio":for(l=0;l<cr.length;l++)q(cr[l],e);l=r;break;case"source":q("error",e),l=r;break;case"img":case"image":case"link":q("error",e),q("load",e),l=r;break;case"details":q("toggle",e),l=r;break;case"input":va(e,r),l=di(e,r),q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ie({},r,{value:void 0}),q("invalid",e);break;case"textarea":wa(e,r),l=mi(e,r),q("invalid",e);break;default:l=r}gi(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?qu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Xu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&kr(e,a):typeof a=="number"&&kr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&q("scroll",e):a!=null&&ls(e,o,a,i))}switch(n){case"input":tl(e),xa(e,r,!1);break;case"textarea":tl(e),ka(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=sn(Ir.current),sn(ht.current),cl(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ce(t),null;case 13:if(Z(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ue!==null&&t.mode&1&&!(t.flags&128))$c(),Bn(),t.flags|=98560,o=!1;else if(o=cl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[pt]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),o=!1}else st!==null&&(Ji(st),st=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||le.current&1?fe===0&&(fe=3):As())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Hn(),Hi(e,t),e===null&&Pr(t.stateNode.containerInfo),Ce(t),null;case 10:return Ns(t.type._context),Ce(t),null;case 17:return Fe(t.type)&&Ol(),Ce(t),null;case 19:if(Z(le),o=t.memoizedState,o===null)return Ce(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)lr(o,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Vl(e),i!==null){for(t.flags|=128,lr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(le,le.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Wn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Vl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!te)return Ce(t),null}else 2*ue()-o.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=le.current,X(le,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function hm(e,t){switch(xs(t),t.tag){case 1:return Fe(t.type)&&Ol(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),Z(Oe),Z(ze),Ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(Z(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(le),null;case 4:return Hn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var pl=!1,Ee=!1,gm=typeof WeakSet=="function"?WeakSet:Set,M=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function Vi(e,t,n){try{n()}catch(r){se(e,t,r)}}var cu=!1;function ym(e,t){if(zi=Ll,e=Ec(),ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,v=0,y=e,g=null;t:for(;;){for(var S;y!==n||l!==0&&y.nodeType!==3||(s=i+l),y!==o||r!==0&&y.nodeType!==3||(a=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(S=y.firstChild)!==null;)g=y,y=S;for(;;){if(y===e)break t;if(g===n&&++f===l&&(s=i),g===o&&++v===r&&(a=i),(S=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pi={focusedElem:e,selectionRange:n},Ll=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var P=j.memoizedProps,U=j.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?P:ot(t.type,P),U);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){se(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return j=cu,cu=!1,j}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Vi(t,n,o)}l=l.next}while(l!==r)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Tr],delete t[Mi],delete t[Zp],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nd(e){return e.tag===5||e.tag===3||e.tag===4}function du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bl));else if(r!==4&&(e=e.child,e!==null))for(Qi(e,t,n),e=e.sibling;e!==null;)Qi(e,t,n),e=e.sibling}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}var xe=null,it=!1;function Dt(e,t,n){for(n=n.child;n!==null;)jd(e,t,n),n=n.sibling}function jd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:Ee||Mn(n,t);case 6:var r=xe,l=it;xe=null,Dt(e,t,n),xe=r,it=l,xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(it?(e=xe,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),Cr(e)):Xo(xe,n.stateNode));break;case 4:r=xe,l=it,xe=n.stateNode.containerInfo,it=!0,Dt(e,t,n),xe=r,it=l;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Vi(n,t,i),l=l.next}while(l!==r)}Dt(e,t,n);break;case 1:if(!Ee&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){se(n,t,s)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Dt(e,t,n),Ee=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(r){var l=Em.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,it=!1;break e;case 3:xe=s.stateNode.containerInfo,it=!0;break e;case 4:xe=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(xe===null)throw Error(w(160));jd(o,i,l),xe=null,it=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(f){se(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),dt(e),r&4){try{yr(3,e,e.return),so(3,e)}catch(P){se(e,e.return,P)}try{yr(5,e,e.return)}catch(P){se(e,e.return,P)}}break;case 1:lt(t,e),dt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(lt(t,e),dt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var l=e.stateNode;try{kr(l,"")}catch(P){se(e,e.return,P)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Ku(l,o),yi(s,i);var f=yi(s,o);for(i=0;i<a.length;i+=2){var v=a[i],y=a[i+1];v==="style"?qu(l,y):v==="dangerouslySetInnerHTML"?Xu(l,y):v==="children"?kr(l,y):ls(l,v,y,f)}switch(s){case"input":fi(l,o);break;case"textarea":Yu(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?Ln(l,!!o.multiple,S,!1):g!==!!o.multiple&&(o.defaultValue!=null?Ln(l,!!o.multiple,o.defaultValue,!0):Ln(l,!!o.multiple,o.multiple?[]:"",!1))}l[Tr]=o}catch(P){se(e,e.return,P)}}break;case 6:if(lt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(P){se(e,e.return,P)}}break;case 3:if(lt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(P){se(e,e.return,P)}break;case 4:lt(t,e),dt(e);break;case 13:lt(t,e),dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Os=ue())),r&4&&fu(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(f=Ee)||v,lt(t,e),Ee=f):lt(t,e),dt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(M=e,v=e.child;v!==null;){for(y=M=v;M!==null;){switch(g=M,S=g.child,g.tag){case 0:case 11:case 14:case 15:yr(4,g,g.return);break;case 1:Mn(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(P){se(r,n,P)}}break;case 5:Mn(g,g.return);break;case 22:if(g.memoizedState!==null){mu(y);continue}}S!==null?(S.return=g,M=S):mu(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,a=y.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Ju("display",i))}catch(P){se(e,e.return,P)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(P){se(e,e.return,P)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:lt(t,e),dt(e),r&4&&fu(e);break;case 21:break;default:lt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(kr(l,""),r.flags&=-33);var o=du(e);Ki(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=du(e);Qi(e,s,i);break;default:throw Error(w(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vm(e,t,n){M=e,Ed(e)}function Ed(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var l=M,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||pl;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ee;s=pl;var f=Ee;if(pl=i,(Ee=a)&&!f)for(M=l;M!==null;)i=M,a=i.child,i.tag===22&&i.memoizedState!==null?hu(l):a!==null?(a.return=i,M=a):hu(l);for(;o!==null;)M=o,Ed(o),o=o.sibling;M=l,pl=s,Ee=f}pu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,M=o):pu(e)}}function pu(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||so(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ja(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Cr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||t.flags&512&&Wi(t)}catch(g){se(t,t.return,g)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function mu(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function hu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{so(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){se(t,l,a)}}var o=t.return;try{Wi(t)}catch(a){se(t,o,a)}break;case 5:var i=t.return;try{Wi(t)}catch(a){se(t,i,a)}}}catch(a){se(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var xm=Math.ceil,Kl=_t.ReactCurrentDispatcher,Rs=_t.ReactCurrentOwner,qe=_t.ReactCurrentBatchConfig,W=0,ye=null,ce=null,we=0,Be=0,In=qt(0),fe=0,br=null,pn=0,ao=0,bs=0,vr=null,Re=null,Os=0,Wn=1/0,xt=null,Yl=!1,Yi=null,Qt=null,ml=!1,At=null,Gl=0,xr=0,Gi=null,Cl=-1,El=0;function Me(){return W&6?ue():Cl!==-1?Cl:Cl=ue()}function Kt(e){return e.mode&1?W&2&&we!==0?we&-we:nm.transition!==null?(El===0&&(El=cc()),El):(e=K,e!==0||(e=window.event,e=e===void 0?16:yc(e.type)),e):1}function ut(e,t,n,r){if(50<xr)throw xr=0,Gi=null,Error(w(185));Fr(e,n,r),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(ao|=n),fe===4&&Ft(e,we)),$e(e,r),n===1&&W===0&&!(t.mode&1)&&(Wn=ue()+500,lo&&Zt()))}function $e(e,t){var n=e.callbackNode;np(e,t);var r=Il(e,e===ye?we:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?tm(gu.bind(null,e)):bc(gu.bind(null,e)),Jp(function(){!(W&6)&&Zt()}),n=null;else{switch(dc(r)){case 1:n=us;break;case 4:n=ac;break;case 16:n=Ml;break;case 536870912:n=uc;break;default:n=Ml}n=Dd(n,zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zd(e,t){if(Cl=-1,El=0,W&6)throw Error(w(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Il(e,e===ye?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xl(e,r);else{t=r;var l=W;W|=2;var o=_d();(ye!==e||we!==t)&&(xt=null,Wn=ue()+500,an(e,t));do try{Sm();break}catch(s){Pd(e,s)}while(!0);Ss(),Kl.current=o,W=l,ce!==null?t=0:(ye=null,we=0,t=fe)}if(t!==0){if(t===2&&(l=Si(e),l!==0&&(r=l,t=Xi(e,l))),t===1)throw n=br,an(e,0),Ft(e,r),$e(e,ue()),n;if(t===6)Ft(e,r);else{if(l=e.current.alternate,!(r&30)&&!wm(l)&&(t=Xl(e,r),t===2&&(o=Si(e),o!==0&&(r=o,t=Xi(e,o))),t===1))throw n=br,an(e,0),Ft(e,r),$e(e,ue()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:nn(e,Re,xt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Os+500-ue(),10<t)){if(Il(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ti(nn.bind(null,e,Re,xt),t);break}nn(e,Re,xt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-at(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xm(r/1960))-r,10<r){e.timeoutHandle=Ti(nn.bind(null,e,Re,xt),r);break}nn(e,Re,xt);break;case 5:nn(e,Re,xt);break;default:throw Error(w(329))}}}return $e(e,ue()),e.callbackNode===n?zd.bind(null,e):null}function Xi(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Xl(e,t),e!==2&&(t=Re,Re=n,t!==null&&Ji(t)),e}function Ji(e){Re===null?Re=e:Re.push.apply(Re,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~bs,t&=~ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function gu(e){if(W&6)throw Error(w(327));Fn();var t=Il(e,0);if(!(t&1))return $e(e,ue()),null;var n=Xl(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=br,an(e,0),Ft(e,t),$e(e,ue()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Re,xt),$e(e,ue()),null}function Fs(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Wn=ue()+500,lo&&Zt())}}function mn(e){At!==null&&At.tag===0&&!(W&6)&&Fn();var t=W;W|=1;var n=qe.transition,r=K;try{if(qe.transition=null,K=1,e)return e()}finally{K=r,qe.transition=n,W=t,!(W&6)&&Zt()}}function $s(){Be=In.current,Z(In)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xp(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:Hn(),Z(Oe),Z(ze),Ps();break;case 5:zs(r);break;case 4:Hn();break;case 13:Z(le);break;case 19:Z(le);break;case 10:Ns(r.type._context);break;case 22:case 23:$s()}n=n.return}if(ye=e,ce=e=Yt(e.current,null),we=Be=t,fe=0,br=null,bs=ao=pn=0,Re=vr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}on=null}return e}function Pd(e,t){do{var n=ce;try{if(Ss(),Sl.current=Ql,Wl){for(var r=oe.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Wl=!1}if(fn=0,ge=de=oe=null,gr=!1,Lr=0,Rs.current=null,n===null||n.return===null){fe=1,br=t,ce=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=we,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var S=ru(i);if(S!==null){S.flags&=-257,lu(S,i,s,o,t),S.mode&1&&nu(o,f,t),t=S,a=f;var j=t.updateQueue;if(j===null){var P=new Set;P.add(a),t.updateQueue=P}else j.add(a);break e}else{if(!(t&1)){nu(o,f,t),As();break e}a=Error(w(426))}}else if(te&&s.mode&1){var U=ru(i);if(U!==null){!(U.flags&65536)&&(U.flags|=256),lu(U,i,s,o,t),ws(Vn(a,s));break e}}o=a=Vn(a,s),fe!==4&&(fe=2),vr===null?vr=[o]:vr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=dd(o,a,t);Xa(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Qt===null||!Qt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=fd(o,s,t);Xa(o,x);break e}}o=o.return}while(o!==null)}Md(n)}catch(E){t=E,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function _d(){var e=Kl.current;return Kl.current=Ql,e===null?Ql:e}function As(){(fe===0||fe===3||fe===2)&&(fe=4),ye===null||!(pn&268435455)&&!(ao&268435455)||Ft(ye,we)}function Xl(e,t){var n=W;W|=2;var r=_d();(ye!==e||we!==t)&&(xt=null,an(e,t));do try{km();break}catch(l){Pd(e,l)}while(!0);if(Ss(),W=n,Kl.current=r,ce!==null)throw Error(w(261));return ye=null,we=0,fe}function km(){for(;ce!==null;)Td(ce)}function Sm(){for(;ce!==null&&!Kf();)Td(ce)}function Td(e){var t=Ld(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Md(e):ce=t,Rs.current=null}function Md(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,ce=null;return}}else if(n=mm(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);fe===0&&(fe=5)}function nn(e,t,n){var r=K,l=qe.transition;try{qe.transition=null,K=1,Nm(e,t,n,r)}finally{qe.transition=l,K=r}return null}function Nm(e,t,n,r){do Fn();while(At!==null);if(W&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(rp(e,o),e===ye&&(ce=ye=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,Dd(Ml,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var i=K;K=1;var s=W;W|=4,Rs.current=null,ym(e,n),Cd(n,e),Hp(Pi),Ll=!!zi,Pi=zi=null,e.current=n,vm(n),Yf(),W=s,K=i,qe.transition=o}else e.current=n;if(ml&&(ml=!1,At=e,Gl=l),o=e.pendingLanes,o===0&&(Qt=null),Jf(n.stateNode),$e(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Yl)throw Yl=!1,e=Yi,Yi=null,e;return Gl&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Gi?xr++:(xr=0,Gi=e):xr=0,Zt(),null}function Fn(){if(At!==null){var e=dc(Gl),t=qe.transition,n=K;try{if(qe.transition=null,K=16>e?16:e,At===null)var r=!1;else{if(e=At,At=null,Gl=0,W&6)throw Error(w(331));var l=W;for(W|=4,M=e.current;M!==null;){var o=M,i=o.child;if(M.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(M=f;M!==null;){var v=M;switch(v.tag){case 0:case 11:case 15:yr(8,v,o)}var y=v.child;if(y!==null)y.return=v,M=y;else for(;M!==null;){v=M;var g=v.sibling,S=v.return;if(Sd(v),v===f){M=null;break}if(g!==null){g.return=S,M=g;break}M=S}}}var j=o.alternate;if(j!==null){var P=j.child;if(P!==null){j.child=null;do{var U=P.sibling;P.sibling=null,P=U}while(P!==null)}}M=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,M=i;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,M=p;break e}M=o.return}}var c=e.current;for(M=c;M!==null;){i=M;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,M=m;else e:for(i=c;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:so(9,s)}}catch(E){se(s,s.return,E)}if(s===i){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(W=l,Zt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Zl,e)}catch{}r=!0}return r}finally{K=n,qe.transition=t}}return!1}function yu(e,t,n){t=Vn(n,t),t=dd(e,t,1),e=Wt(e,t,1),t=Me(),e!==null&&(Fr(e,1,t),$e(e,t))}function se(e,t,n){if(e.tag===3)yu(e,e,n);else for(;t!==null;){if(t.tag===3){yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Vn(n,e),e=fd(t,e,1),t=Wt(t,e,1),e=Me(),t!==null&&(Fr(t,1,e),$e(t,e));break}}t=t.return}}function jm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(fe===4||fe===3&&(we&130023424)===we&&500>ue()-Os?an(e,0):bs|=n),$e(e,t)}function Id(e,t){t===0&&(e.mode&1?(t=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):t=1);var n=Me();e=zt(e,t),e!==null&&(Fr(e,t,n),$e(e,n))}function Cm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Id(e,n)}function Em(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Id(e,n)}var Ld;Ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,pm(e,t,n);be=!!(e.flags&131072)}else be=!1,te&&t.flags&1048576&&Oc(t,Al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jl(e,t),e=t.pendingProps;var l=An(t,ze.current);On(t,n),l=Ts(null,t,r,e,l,n);var o=Ms();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(o=!0,Fl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Cs(t),l.updater=io,t.stateNode=l,l._reactInternals=t,Oi(t,r,e,n),t=Ai(null,t,r,!0,o,n)):(t.tag=0,te&&o&&vs(t),Te(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pm(r),e=ot(r,e),l){case 0:t=$i(null,t,r,e,n);break e;case 1:t=su(null,t,r,e,n);break e;case 11:t=ou(null,t,r,e,n);break e;case 14:t=iu(null,t,r,ot(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),$i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),su(e,t,r,l,n);case 3:e:{if(gd(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Hc(e,t),Hl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Vn(Error(w(423)),t),t=au(e,t,r,n,l);break e}else if(r!==l){l=Vn(Error(w(424)),t),t=au(e,t,r,n,l);break e}else for(Ue=Vt(t.stateNode.containerInfo.firstChild),He=t,te=!0,st=null,n=Bc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===l){t=Pt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Vc(t),e===null&&Di(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,_i(r,l)?i=null:o!==null&&_i(r,o)&&(t.flags|=32),hd(e,t),Te(e,t,i,n),t.child;case 6:return e===null&&Di(t),null;case 13:return yd(e,t,n);case 4:return Es(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),ou(e,t,r,l,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,X(Bl,r._currentValue),r._currentValue=i,o!==null)if(ct(o.value,i)){if(o.children===l.children&&!Oe.current){t=Pt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?a.next=a:(a.next=v.next,v.next=a),f.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ri(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ri(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Te(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,On(t,n),l=Ze(l),r=r(l),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),iu(e,t,r,l,n);case 15:return pd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),jl(e,t),t.tag=1,Fe(r)?(e=!0,Fl(t)):e=!1,On(t,n),cd(t,r,l),Oi(t,r,l,n),Ai(null,t,r,!0,e,n);case 19:return vd(e,t,n);case 22:return md(e,t,n)}throw Error(w(156,t.tag))};function Dd(e,t){return sc(e,t)}function zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new zm(e,t,n,r)}function Bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pm(e){if(typeof e=="function")return Bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===is)return 11;if(e===ss)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Bs(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Sn:return un(n.children,l,o,t);case os:i=8,l|=8;break;case si:return e=Je(12,n,t,l|2),e.elementType=si,e.lanes=o,e;case ai:return e=Je(13,n,t,l),e.elementType=ai,e.lanes=o,e;case ui:return e=Je(19,n,t,l),e.elementType=ui,e.lanes=o,e;case Vu:return uo(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uu:i=10;break e;case Hu:i=9;break e;case is:i=11;break e;case ss:i=14;break e;case Rt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Je(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function un(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function uo(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Vu,e.lanes=n,e.stateNode={isHidden:!1},e}function li(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function oi(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _m(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$o(0),this.expirationTimes=$o(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$o(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Us(e,t,n,r,l,o,i,s,a){return e=new _m(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(o),e}function Tm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rd(e){if(!e)return Xt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Rc(e,n,t)}return t}function bd(e,t,n,r,l,o,i,s,a){return e=Us(n,r,!0,e,l,o,i,s,a),e.context=Rd(null),n=e.current,r=Me(),l=Kt(n),o=Nt(r,l),o.callback=t??null,Wt(n,o,l),e.current.lanes=l,Fr(e,l,r),$e(e,r),e}function co(e,t,n,r){var l=t.current,o=Me(),i=Kt(l);return n=Rd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(l,t,i),e!==null&&(ut(e,l,i,o),kl(e,l,i)),i}function Jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hs(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function Mm(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}fo.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));co(e,t,null,null)};fo.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){co(null,e,null,null)}),t[Et]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=mc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&gc(e)}};function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xu(){}function Im(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=Jl(i);o.call(f)}}var i=bd(t,r,e,0,null,!1,!1,"",xu);return e._reactRootContainer=i,e[Et]=i.current,Pr(e.nodeType===8?e.parentNode:e),mn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=Jl(a);s.call(f)}}var a=Us(e,0,!1,null,null,!1,!1,"",xu);return e._reactRootContainer=a,e[Et]=a.current,Pr(e.nodeType===8?e.parentNode:e),mn(function(){co(t,a,n,r)}),a}function mo(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Jl(i);s.call(a)}}co(t,i,e,l)}else i=Im(n,t,e,l,r);return Jl(i)}fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ur(t.pendingLanes);n!==0&&(cs(t,n|1),$e(t,ue()),!(W&6)&&(Wn=ue()+500,Zt()))}break;case 13:mn(function(){var r=zt(e,1);if(r!==null){var l=Me();ut(r,e,1,l)}}),Hs(e,1)}};ds=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Me();ut(t,e,134217728,n)}Hs(e,134217728)}};pc=function(e){if(e.tag===13){var t=Kt(e),n=zt(e,t);if(n!==null){var r=Me();ut(n,e,t,r)}Hs(e,t)}};mc=function(){return K};hc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};xi=function(e,t,n){switch(t){case"input":if(fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ro(r);if(!l)throw Error(w(90));Qu(r),fi(r,l)}}}break;case"textarea":Yu(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};tc=Fs;nc=mn;var Lm={usingClientEntryPoint:!1,Events:[Ar,En,ro,Zu,ec,Fs]},or={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dm={bundleType:or.bundleType,version:or.version,rendererPackageName:or.rendererPackageName,rendererConfig:or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=oc(e),e===null?null:e.stateNode},findFiberByHostInstance:or.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Zl=hl.inject(Dm),mt=hl}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ws(t))throw Error(w(200));return Tm(e,t,null,n)};We.createRoot=function(e,t){if(!Ws(e))throw Error(w(299));var n=!1,r="",l=Od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Us(e,1,!1,null,null,n,!1,r,l),e[Et]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Vs(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=oc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return mn(e)};We.hydrate=function(e,t,n){if(!po(t))throw Error(w(200));return mo(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Ws(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Od;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=bd(t,null,e,1,n??null,l,!1,o,i),e[Et]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new fo(t)};We.render=function(e,t,n){if(!po(t))throw Error(w(200));return mo(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!po(e))throw Error(w(40));return e._reactRootContainer?(mn(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};We.unstable_batchedUpdates=Fs;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!po(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return mo(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426";function Fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd)}catch(e){console.error(e)}}Fd(),Fu.exports=We;var Rm=Fu.exports,$d,wu=Rm;$d=wu.createRoot,wu.hydrateRoot;var bm={thinkers:[{id:1,name:"Rick Steves",handle:"@RickSteves",domain:"Viaggio culturale europeo",active:!0,desc:"Autore e conduttore TV americano. Paladino del viaggio culturale in Europa, budget consapevole, anti-turismo di massa."},{id:2,name:"Pico Iyer",handle:"@PicoIyer",domain:"Viaggio filosofico / Slow travel",active:!0,desc:"Scrittore e saggista. Poeta del viaggio lento, della quiete e del perdersi come forma di conoscenza."},{id:3,name:"Nomadic Matt",handle:"@nomadicmatt",domain:"Budget backpacking",active:!0,desc:"Blogger e autore. Riferimento mondiale per il viaggio low-cost, guide pratiche e democratizzazione dell'accesso."},{id:4,name:"Brian Kelly",handle:"@thepointsguy",domain:"Loyalty / Miles optimization",active:!0,desc:"Fondatore di The Points Guy. Massimo esperto di programmi fedelta, miglia aeree e ottimizzazione del viaggio premium."},{id:5,name:"Rafat Ali",handle:"@Skift",domain:"Travel industry intelligence",active:!0,desc:"Fondatore di Skift, la piattaforma di intelligence sull'industria del turismo. Analisi di dati, trend e strategie del settore."},{id:6,name:"Paul Theroux",handle:"@pabortheaboroux",domain:"Anti-turismo / Letteratura",active:!0,desc:"Scrittore e viaggiatore. Maestro del viaggio letterario, critico feroce del turismo organizzato e della globalizzazione."},{id:7,name:"Mark Ellingham",handle:"@MarkEllingham",domain:"Turismo sostenibile",active:!0,desc:"Fondatore delle Rough Guides. Pioniere del turismo responsabile e della sostenibilita nel settore dei viaggi."},{id:8,name:"Oneika Raymond",handle:"@oneikaRaymond",domain:"Diversita nel viaggio",active:!0,desc:"Travel journalist e conduttrice TV. Voce per la diversita e l'inclusione nel mondo dei viaggi."},{id:9,name:"Johnny Jet",handle:"@JohnnyJet",domain:"Travel hacking",active:!0,desc:"Esperto di travel hacking, offerte aeree e trucchi per viaggiare meglio spendendo meno."},{id:10,name:"Conde Nast Traveller",handle:"@CNTraveller",domain:"Lusso / Esperienze premium",active:!0,desc:"La bibbia del viaggio di lusso. Definisce il canone dell'hotel, della destinazione e dell'esperienza premium."},{id:11,name:"Scott's Cheap Flights",handle:"@scottscheapflt",domain:"Errori tariffari / Accesso",active:!0,desc:"Servizio di alert per tariffe aeree scontate ed errori tariffari. Simbolo della democratizzazione del volo a basso costo."},{id:12,name:"Samantha Brown",handle:"@SamanthaBrown",domain:"Mainstream accessibile / PBS",active:!0,desc:"Conduttrice PBS e autrice. Volto del viaggio accessibile, mainstream e familiare per il pubblico americano."}],sources:["Skift","Conde Nast Traveller","Lonely Planet"],branding:{nameHtml:"Signal<span>.</span>Travel",tagline:"Travel Intelligence · AI-Powered",aboutDescription:"Signal.Travel e un intelligence dashboard per viaggiatori consapevoli e operatori del turismo. Ogni giorno raccoglie e analizza le idee degli scrittori, esperti e analisti piu influenti del mondo dei viaggi, produce sintesi trasversali sui trend del settore, identifica temi emergenti e genera un podcast — tutto in automatico.",aboutFooter:'Ideato da Mike · <a href="https://www.instagram.com/it.mikesoft" target="_blank" rel="noopener noreferrer">MikeSoft</a><br />100% AI-generated · Made in Italy · 2026',fonts:{googleFontsUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap"}},council:{boardId:"7231a446-f0fe-4521-b212-bf6d588f94ed",budgetUsd:.5,userLanguage:"it",maxWords:150,rounds:1},prompts:{scan:`Cerca e sintetizza le idee, posizioni e analisi più recenti (ultime 2-3 settimane) di {thinker_name} ({thinker_handle}).

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
`}};const Ur=bm,Om=Ur.thinkers,Fm=Ur.sources,rn=Ur.branding,ho=Ur.prompts,ir=Ur.council;function go(e,t){return Object.entries(t).reduce((n,[r,l])=>n.replaceAll(`{${r}}`,String(l??"")),e)}const $m="/claude",Am="https://stelle-972218119922.europe-west1.run.app/api",Ad=Am;async function yo(e){const t=await fetch($m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const l=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${l}…`)}const r=await t.json();if(!t.ok)throw new Error(r.error||"Claude CLI error");return r}function Bm(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function Um(e){const t=go(ho.scan,{thinker_name:e.name,thinker_handle:e.handle});return(await yo(t)).text||"Nessun contenuto estratto."}async function ku(e){const t=e.map(l=>`### ${l.name} (${l.domain})
${l.content}`).join(`

---

`),n=go(ho.synthesis,{summaries:t});return(await yo(n)).text||"Nessun contenuto estratto."}async function Hm(e,t,n){const r=e.map(f=>`### ${f.name}
${f.content}`).join(`

`),l=n&&n.length>0?n.join(", "):"GitHub Trending, trendshift.io, Hacker News",o=go(ho.projects,{signals:r,synthesis:t,sources_list:l}),a=((await yo(o)).text||"").trim().match(/\[[\s\S]*\]/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}async function Vm(e,t){const n=go(ho.conceptDiff,{old_synthesis:e,new_synthesis:t}),o=((await yo(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!o)throw new Error("Formato risposta non valido");return JSON.parse(o[0])}let Su=!1;async function Wm(){if(Su)return;if(!(await fetch(`${Ad}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");Su=!0}async function Qm(e,t,n){await Wm();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${Ad}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:ir.boardId,stop_mode:"cost",budget_usd:ir.budgetUsd,user_language:ir.userLanguage,max_words:ir.maxWords,rounds:ir.rounds,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:f}=await o.read();if(a)break;s+=i.decode(f,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let y="";for(const g of v)if(g.startsWith("event: "))y=g.slice(7).trim();else if(g.startsWith("data: ")&&y){try{const S=JSON.parse(g.slice(6));n(y,S)}catch{}y=""}}}function jt(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function Km(e){if(!e)return"";const t=/^(\*\*\d+\..+?\*\*|###?\s+.+)$/gm,n=e.split(t);if(n.length<=1)return jt(e);let r="";for(let l=0;l<n.length;l++){const o=n[l].trim();if(o)if(t.test(o)){t.lastIndex=0;const i=o.replace(/^\*\*|\*\*$/g,"").replace(/^###?\s*/,"").trim(),s=l+1<n.length?n[l+1].trim():"";s?(r+=`<details open><summary>${Nu(i)}</summary>${jt(s)}</details>`,l++):r+=`<strong>${Nu(i)}</strong>`}else r+=jt(o)}return r}function Nu(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ym(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function Gm(e,t){if(!e)return"";if(!t)return jt(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>Ym(o,a)>.7),s=jt(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function Xm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const ju="​‌",Cu="‌​";function Jm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let y=1;y<=l;y++)for(let g=1;g<=o;g++)i[y][g]=n[y-1]===r[g-1]?i[y-1][g-1]+1:Math.max(i[y-1][g],i[y][g-1]);const s=[];let a=l,f=o;for(;a>0||f>0;)a>0&&f>0&&n[a-1]===r[f-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,f--):f>0&&(a===0||i[a][f-1]>=i[a-1][f])?(s.unshift({type:"added",text:r[f-1]}),f--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const y of s)v.length>0&&v[v.length-1].type===y.type?v[v.length-1].text+=y.text:v.push({...y});return v}function Eu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=ju+s.text+Cu:l+=s.text);let o=jt(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${ju}(.*?)${Cu}`,"gs"),`<span class="${i}">$1</span>`),o}function qm(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function Zm(){const[e,t]=z.useState(!1),[n,r]=z.useState(-1),[l,o]=z.useState([]),i=z.useRef([]),s=z.useRef(null),a=z.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),f=z.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=z.useCallback((U,p=0)=>{speechSynthesis.cancel(),i.current=U.slice(p),o(U);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=U.indexOf(m);r(x);const E=`${m.title}. ${qm(m.text)}`,N=new SpeechSynthesisUtterance(E);N.lang="it-IT",N.rate=1;const T=a();T&&(N.voice=T),N.onend=c,N.onerror=c,s.current=N,speechSynthesis.speak(N)};t(!0),c()},[a]),y=z.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),g=z.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),S=z.useCallback(()=>{speechSynthesis.cancel()},[]),j=z.useCallback((U,p,c,m)=>{const x=[];U&&x.push({title:"Cross-Synthesis",text:U,type:"synthesis"});for(const E of c)p[E.id]&&!p[E.id].startsWith("Errore")&&x.push({title:E.name,text:p[E.id],type:"thinker"});if(m&&m.length>0){const E=m.map(N=>{var T;return`${N.name}: ${N.description}${(T=N.citedBy)!=null&&T.length?`. Citato da ${N.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:E,type:"projects"})}v(x)},[v]),P=z.useCallback((U,p)=>{v([{title:U,text:p,type:"single"}])},[v]);return z.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:j,playSingle:P,pause:y,resume:g,stop:f,skipForward:S}}const eh=`
  @import url('${rn.fonts.googleFontsUrl}');
`,th=`
  ${eh}

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
`;function nh(){const[e,t]=z.useState(Om),[n,r]=z.useState({}),[l,o]=z.useState({}),[i,s]=z.useState({}),[a,f]=z.useState(null),[v,y]=z.useState("idle"),[g,S]=z.useState(!1),[j,P]=z.useState(""),[U,p]=z.useState(""),[c,m]=z.useState(null),[x,E]=z.useState(null),[N,T]=z.useState(8),[R,ne]=z.useState(!1),[I,ve]=z.useState([]),[Tt,Mt]=z.useState(null),[Pe,gt]=z.useState("signals"),[Ae,Gn]=z.useState({leftIdx:1,rightIdx:0}),[_,O]=z.useState("emerging"),[D,ee]=z.useState([]),[Y,en]=z.useState([]),[Ke,yn]=z.useState(null),[tt,It]=z.useState("idle"),[Lt,vo]=z.useState(Fm),[Qs,Ks]=z.useState(""),[Bd,xo]=z.useState(!1),[Ys,Ud]=z.useState(!1),[vn,Hd]=z.useState(""),[Hr,Gs]=z.useState([]),[Vr,wo]=z.useState("idle"),[Wr,ko]=z.useState(null),[Xs,Js]=z.useState(null),[rh,lh]=z.useState("idle"),[qs,Vd]=z.useState({scan:"",launchd:""}),[Qr,So]=z.useState("idle"),[oh,Zs]=z.useState([]),[Wd,Qd]=z.useState({}),[Kd,Yd]=z.useState(new Set),No=z.useRef(null),pe=Zm(),[Gd,Xd]=z.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),me=e.filter(d=>d.active),ea=me.filter(d=>!d.fontiOnly),xn=Object.values(i).filter(d=>d==="done"||d==="stale").length,jo=me.length;z.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const h=JSON.parse(d.value);if(h.results){r(h.results);const k=new Set((h.staleIds||[]).map(String)),L={};for(const $ of Object.keys(h.results))h.results[$].startsWith("Errore")?L[$]="error":k.has(String($))?L[$]="stale":L[$]="done";s(L),h.staleIds&&Zs(h.staleIds)}if(h.prevResults&&o(h.prevResults),h.lastScanTime&&m(h.lastScanTime),h.intervalHours&&T(h.intervalHours),h.synthesis&&(f(h.synthesis),y("done")),h.synthesisHistory){const k=h.synthesisHistory.map((L,$,V)=>{if(L.conceptDiff&&!L.conceptDiffs){const he=V[$+1],{conceptDiff:Ne,...nt}=L;return he?{...nt,conceptDiffs:{[he.id]:Ne}}:nt}return L});ve(k)}h.projects&&ee(h.projects),h.prevProjects&&en(h.prevProjects),h.projectsTime&&yn(h.projectsTime),h.projectSources&&vo(h.projectSources)}}catch{}})()},[]);const Se=z.useCallback(async(d={})=>{try{const h=await window.storage.get("signal-state"),L={...h?JSON.parse(h.value):{},...d};await window.storage.set("signal-state",JSON.stringify(L))}catch{}},[]);z.useCallback(async(d={})=>{await Se({results:n,prevResults:l,lastScanTime:c,intervalHours:N,synthesis:a,synthesisHistory:I,projects:D,prevProjects:Y,projectsTime:Ke,projectSources:Lt,...d})},[n,l,c,N,a,I,D,Y,Ke,Lt,Se]);const Kr=z.useCallback((d,h)=>h.length>0&&h[0].text===d?h:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:me.map(L=>L.name),conceptDiffs:{}},...h].slice(0,50),[me]),Yr=z.useCallback(async d=>{var L;if(d.length<2)return d;const h=d[0],k=d[1];if((L=h.conceptDiffs)!=null&&L[k.id])return d;try{const $=await Vm(k.text,h.text),V=[...d];return V[0]={...V[0],conceptDiffs:{...V[0].conceptDiffs||{},[k.id]:$}},ve(V),await Se({synthesisHistory:V}),V}catch($){return console.error("[concept-diff auto]",$),d}},[Se]),ta=z.useCallback(async(d,h)=>{try{await navigator.clipboard.writeText(d)}catch{const k=document.createElement("textarea");k.value=d,document.body.appendChild(k),k.select(),document.execCommand("copy"),document.body.removeChild(k)}Mt(h),setTimeout(()=>Mt(null),2e3)},[]);z.useCallback(async d=>{const h=I.filter(k=>k.id!==d);ve(h),await Se({synthesisHistory:h})},[I,Se]),z.useEffect(()=>{const d=()=>{if(!c){E(null);return}const L=c+N*3600*1e3-Date.now();if(L<=0){E("ora");return}const $=Math.floor(L/36e5),V=Math.floor(L%36e5/6e4),he=Math.floor(L%6e4/1e3);E(`${$}h ${V}m ${he}s`)};d();const h=setInterval(d,1e3);return()=>clearInterval(h)},[c,N]);const Co=z.useRef(null);z.useEffect(()=>{const d=setInterval(()=>{const h=new Date,k=h.getHours();if(k!==5&&k!==17||g||!Co.current)return;const L=`${h.toDateString()}-${k}`;(c?(()=>{const V=new Date(c);return`${V.toDateString()}-${V.getHours()}`})():null)!==L&&Co.current(!0)},6e4);return()=>clearInterval(d)},[g,c]);const Eo=z.useCallback(async()=>{So("loading");const d="/signal-brief/travel/";try{const[h,k]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),L=h.ok?await h.text():"",$=k.ok?await k.text():"";Vd({scan:L,launchd:$}),So("done")}catch(h){console.error("[logs]",h),So("error")}},[]);z.useEffect(()=>{Pe==="log"&&Eo()},[Pe,Eo]);const na=z.useCallback(d=>{if(!d)return;const h=d.trim().toLowerCase();if(!h)return;const k=e.find(L=>{const $=L.name.toLowerCase();return $===h||$.includes(h)||h.includes($)});k&&(gt("signals"),ne(!1),setTimeout(()=>{const L=document.getElementById(`thinker-${k.id}`);L&&(L.scrollIntoView({behavior:"smooth",block:"start"}),L.classList.add("thinker-card-highlight"),setTimeout(()=>L.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Jd=(d,h)=>{if(!d||!h)return 0;const k=new Set(d.toLowerCase().split(/\s+/)),L=new Set(h.toLowerCase().split(/\s+/));return[...k].filter(V=>L.has(V)).length/Math.max(k.size,L.size)},ra=d=>!l[d]||!n[d]?!1:Jd(l[d],n[d])<.72;me.filter(d=>i[d.id]==="done"&&ra(d.id)).length;const la=e.length>0&&e.every(d=>d.active),qd=()=>{g||t(d=>d.map(h=>({...h,active:!la})))},zo=()=>{j.trim()&&(t(d=>[...d,{id:Date.now(),name:j.trim(),handle:U.trim()||"@?",domain:"Custom",active:!0}]),P(""),p(""))},oa=()=>{const d=Qs.trim();if(!d||Lt.includes(d))return;const h=[...Lt,d];vo(h),Ks(""),Se({projectSources:h})},Zd=d=>{const h=Lt.filter(k=>k!==d);vo(h),Se({projectSources:h})},[ef,ia]=z.useState(null),Gr=z.useCallback(async(d,h)=>{It("loading"),ia(null);try{const k=await Hm(h,d,Lt);en(D),ee(k);const L=Date.now();yn(L),It("done"),await Se({projects:k,prevProjects:D,projectsTime:L})}catch(k){console.error("[Signal.Brief] fetchProjects error:",k),It("error"),ia(k.message)}},[Lt,Se,D]),sa=2*3600*1e3,Xr=z.useCallback(async(d=!1)=>{if(me.length===0)return;if(!d&&c&&Date.now()-c<sa){const A=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${A} minuti fa. Cache valida per ancora ${Math.round((sa-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}gt("signals"),S(!0),f(null),y("idle"),o(A=>({...A,...n}));const h={...n},k={};for(const A of me){const _e=h[A.id];_e&&!_e.startsWith("Errore")&&(k[A.id]=_e)}const L={};me.forEach(A=>{L[A.id]="loading"}),s(L),r(k);const $={...k},V=[],he={},Ne=2,nt=A=>new Promise(_e=>setTimeout(_e,A));for(let A=0;A<me.length;A+=Ne){const _e=me.slice(A,A+Ne);await Promise.all(_e.map(async B=>{try{const re=await Um(B);$[B.id]=re,r(ae=>({...ae,[B.id]:re})),s(ae=>({...ae,[B.id]:"done"}))}catch(re){const ae=k[B.id]!=null;he[B.id]=re.message,ae?(V.push(String(B.id)),s(J=>({...J,[B.id]:"stale"}))):($[B.id]=`Errore: ${re.message}`,r(J=>({...J,[B.id]:`Errore: ${re.message}`})),s(J=>({...J,[B.id]:"error"})))}})),A+Ne<me.length&&await nt(1200)}Zs(V),Qd(he);const Ye=Bm($),De=Ye?Date.now():c;Ye&&(m(De),Xd(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await Se({results:$,prevResults:h,lastScanTime:De,intervalHours:N,synthesis:a,synthesisHistory:I,staleIds:V}),S(!1);const rt=ea.filter(A=>$[A.id]&&!$[A.id].startsWith("Errore")).map(A=>({name:A.name,domain:A.domain,content:$[A.id]}));if(rt.length>=2){y("loading");try{const A=await ku(rt);f(A),y("done");const _e=Kr(A,I);ve(_e),await Se({results:$,prevResults:h,lastScanTime:De,intervalHours:N,synthesis:A,synthesisHistory:_e}),Yr(_e),Gr(A,rt)}catch{y("error")}}},[me,n,N,Se,a,I,Kr,c,Gr,Yr]);z.useEffect(()=>{Co.current=Xr},[Xr]);const tf=z.useCallback(async()=>{const d=ea.filter(h=>i[h.id]==="done"||i[h.id]==="stale").map(h=>({name:h.name,domain:h.domain,content:n[h.id]}));if(!(d.length<2)){y("loading");try{const h=await ku(d);f(h),y("done");const k=Kr(h,I);ve(k),await Se({synthesis:h,synthesisHistory:k}),Yr(k),Gr(h,d)}catch(h){f(`Errore nella sintesi: ${h.message}`),y("error")}}},[me,i,n,Se,I,Kr,Gr,Yr]),aa=z.useCallback(async()=>{if(vn.trim()){Gs([]),ko(null),Js(null),wo("loading");try{await Qm(vn,a,(d,h)=>{if(d==="session_started"&&h.session_id&&Js(h.session_id),d==="sage_speaks"&&h.content&&Gs(k=>[...k,{name:h.persona_name,icon:h.persona_icon,color:h.persona_color,content:h.content}]),d==="moderator_synthesis"&&h.content&&ko(h.content),d==="moderator"){const k=h.content||h.decision||h.synthesis||"";k&&ko(k)}}),wo("done")}catch(d){console.error("[council]",d),wo("error")}}},[vn,a]),nf=xn>=2&&!g&&v!=="loading",ua=Object.keys(n).length>0,Po="Disponibile solo in locale (richiede Claude CLI)",rf=me.filter(d=>{if(!i[d.id])return!1;if(R){const h=i[d.id];return(h==="done"||h==="stale")&&ra(d.id)}return!0});return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:th}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>xo(!0),dangerouslySetInnerHTML:{__html:rn.nameHtml}}),u.jsx("div",{className:"tagline",children:rn.tagline})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",Gd]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:tf,disabled:!nf||!0,title:Po,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!No.current){const h=new Audio(`/signal-brief/travel/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);h.onerror=()=>{h.src="/signal-brief/travel/podcast/episodes/2026-04-12.mp3",h.play()},No.current=h}const d=No.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/travel/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Xr(!0),disabled:g||me.length===0||!0,title:Po,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Xr(!1),disabled:g||me.length===0||!0,title:Po,children:g?`Scanning ${xn}/${jo}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${Pe==="signals"?"active":""}`,onClick:()=>gt("signals"),children:["Segnali",xn>0&&u.jsx("span",{className:"tab-badge",children:xn})]}),u.jsxs("button",{className:`tab-btn ${Pe==="projects"?"active":""}`,onClick:()=>gt("projects"),children:["Progetti",D.length>0&&u.jsx("span",{className:"tab-badge",children:D.length})]}),u.jsxs("button",{className:`tab-btn ${Pe==="history"?"active":""}`,onClick:()=>gt("history"),children:["Cronologia",I.length>0&&u.jsx("span",{className:"tab-badge",children:I.length})]}),u.jsx("button",{className:`tab-btn ${Pe==="log"?"active":""}`,onClick:()=>gt("log"),children:"▤ Log"}),u.jsx("button",{className:`tab-btn ${Pe==="config"?"active":""}`,onClick:()=>gt("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[Pe==="signals"&&u.jsxs(u.Fragment,{children:[g&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${jo>0?xn/jo*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&I.length>0&&u.jsx("span",{className:"timestamp",children:new Date(I[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>pe.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Ud(d=>!d),title:"Chiedi ai thinkers",style:Ys?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>ta(a,"synth"),children:Tt==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:Xm(I.length>1?Gm(a,I[1].text):jt(a),me)}}),Ys&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Xs?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Xs}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:vn,onChange:d=>Hd(d.target.value),onKeyDown:d=>d.key==="Enter"&&aa(),disabled:Vr==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:aa,disabled:Vr==="loading"||!vn.trim(),children:Vr==="loading"?"In deliberazione…":"Chiedi"})]}),Hr.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:Hr.map((d,h)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name]}),u.jsx("div",{children:d.content})]},h))}),Wr&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const d=Hr.map(h=>`${h.name}: ${h.content}`).join(`

`)+`

Sintesi: `+Wr;pe.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${vn}

`+Hr.map(h=>`${h.icon} ${h.name}:
${h.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Wr}`;ta(d,"council")},children:Tt==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:jt(Wr)}})]}),Vr==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),ua&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",xn," acquisiti"]})}),!ua&&!g?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:rf.map(d=>{const h=i[d.id],k=Wd[d.id],L=Kd.has(d.id),$=V=>{V.stopPropagation(),Yd(he=>{const Ne=new Set(he);return Ne.has(d.id)?Ne.delete(d.id):Ne.add(d.id),Ne})};return u.jsxs("div",{id:`thinker-${d.id}`,className:`card ${h}`,children:[u.jsxs("div",{className:`card-header card-toggle ${L?"collapsed":""}`,onClick:$,children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[u.jsx("span",{className:"toggle-icon",children:"▾"}),d.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:V=>V.stopPropagation(),children:d.handle})]}),u.jsx("div",{className:"card-domain",children:d.domain})]}),(h==="done"||h==="stale")&&u.jsx("button",{className:"btn-listen",onClick:V=>{V.stopPropagation(),pe.playSingle(d.name,n[d.id])},title:"Ascolta",children:"🔊"}),h==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),h==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),h==="stale"&&u.jsx("span",{className:"card-status-pill pill-stale",title:`Ultimo scan fallito${k?": "+k:""}. Stai vedendo l'ultimo risultato valido.`,children:"⌛ Stale"}),h==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"}),d.fontiOnly&&u.jsx("span",{className:"card-status-pill pill-fonti-only",children:"Solo fonti"})]}),!L&&u.jsxs("div",{className:"card-body",children:[d.desc&&u.jsx("div",{className:"card-desc",children:d.desc}),h==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),(h==="done"||h==="stale")&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:Km(n[d.id])}}),h==="error"&&u.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),Pe==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",D.length>0&&` · ${D.length} trovati`]})}),tt==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),tt==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",ef||"errore sconosciuto"]}),D.length===0&&tt!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),D.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),Ke&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(Ke).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),D.some(d=>d.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),Y.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),D.map((d,h)=>{const k=d.maturity!=null&&d.momentum!=null,L=Math.ceil(Math.sqrt(D.length)),$=Math.floor(h/L),V=h%L,he=k?d.maturity:2+V/Math.max(L-1,1)*7,Ne=k?d.momentum:8-$/Math.max(Math.ceil(D.length/L)-1,1)*7,nt=50+(he-1)/9*420,Ye=370-(Ne-1)/9*360,De=Y.length>0&&!Y.some(A=>A.name===d.name),rt=De?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:nt,cy:Ye,r:De?6:5,fill:rt,opacity:"0.85",stroke:De?"#fca5a5":"none",strokeWidth:De?2:0,onClick:()=>window.open(d.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:nt+9,y:Ye+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:De?"#dc2626":"#374151",fontWeight:De?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},h)})]})]}),D.length>0&&u.jsx("div",{className:"projects-grid",children:D.map((d,h)=>u.jsxs("div",{className:"project-card",style:Y.length>0&&!Y.some(k=>k.name===d.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),Y.length>0&&!Y.some(k=>k.name===d.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&u.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&u.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:d.description}),u.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&u.jsx("div",{className:"project-themes",children:d.themes.map((k,L)=>u.jsx("span",{className:"project-theme",children:k},L))})]})]},h))})]}),Pe==="history"&&u.jsx(u.Fragment,{children:I.length<2?u.jsxs("div",{className:"history-empty",children:[I.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",I.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(I[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:jt(I[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const d=Date.now(),h=864e5,k=d-7*h,L=d-21*h,$=I.filter(B=>B.timestamp>=k),V=I.filter(B=>B.timestamp>=L&&B.timestamp<k),he={};for(const B of V){const re=new Date(B.timestamp),ae=new Date(re);ae.setDate(ae.getDate()-ae.getDay());const J=ae.toISOString().slice(0,10);(!he[J]||B.timestamp>he[J].timestamp)&&(he[J]=B)}const Ne=Object.values(he).sort((B,re)=>re.timestamp-B.timestamp),nt=I.filter(B=>B.timestamp<L),Ye={};for(const B of nt){const re=new Date(B.timestamp),ae=new Date(re);ae.setDate(ae.getDate()-ae.getDay());const J=ae.toISOString().slice(0,10);(!Ye[J]||B.timestamp>Ye[J].timestamp)&&(Ye[J]=B)}const De=Object.values(Ye).sort((B,re)=>re.timestamp-B.timestamp),rt=(B,re,ae)=>B.length===0?null:u.jsx("optgroup",{label:re,children:B.map(J=>{const _o=I.indexOf(J),Jr=new Date(J.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),To=ae?`Sett. ${Jr.split(",")[0]} — ${J.thinkers.slice(0,3).join(", ")}${J.thinkers.length>3?` +${J.thinkers.length-3}`:""}`:`${Jr} — ${J.thinkers.slice(0,3).join(", ")}${J.thinkers.length>3?` +${J.thinkers.length-3}`:""}`;return u.jsx("option",{value:_o,children:To},J.id)})},re),A=I[0],_e=A?`${new Date(A.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${A.thinkers.slice(0,3).join(", ")}${A.thinkers.length>3?` +${A.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:Ae.leftIdx,onChange:B=>Gn(re=>({...re,leftIdx:Number(B.target.value)})),children:[rt($,"Ultimi 7 giorni",!1),rt(Ne,"Ultime 3 settimane",!0),rt(De,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[_e," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ca;const d=I[Ae.rightIdx],h=I[Ae.leftIdx];if(!d||!h||Ae.leftIdx===Ae.rightIdx)return null;const k=d.timestamp>=h.timestamp?d:h,L=k===d?h:d;k===d?Ae.rightIdx:Ae.leftIdx;const $=((ca=k.conceptDiffs)==null?void 0:ca[L.id])||null,V=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],he={DHH:["hansson","heinemeier","37signals"]},Ne=C=>{if(!C)return null;const b=C.trim().toLowerCase();if(!b)return null;for(const F of e){const Q=F.name.toLowerCase();if(Q===b||Q.includes(b)||b.includes(Q))return F;const G=he[F.name]||[];for(const yt of G)if(b.includes(yt)||yt.includes(b))return F}return null},nt=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),Ye=C=>(C||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(b=>b.length>=4&&!nt.has(b)),De=C=>C.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),rt=C=>{const b=C.split(/\s+/);return b.length>40?b.slice(0,40).join(" ")+"...":C},A=C=>{if(!C)return[];const b=C.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),Q=(b!==-1?C.slice(0,b):C).split(/\n\n+/).map(vt=>De(vt)).filter(vt=>vt.length>120),G=vt=>{const Jn=Ye(vt);if(!Jn.length||!Q.length)return"";let qr="",Io=0;for(const da of Q){const af=da.toLowerCase();let Lo=0;for(const uf of Jn)af.includes(uf)&&Lo++;Lo>Io&&(qr=da,Io=Lo)}return Io>0?qr:""},yt=[],Xn=new Set,sf=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let Mo;for(;(Mo=sf.exec(C))!==null;){const vt=Mo[2].replace(/[.,;)]+$/,"");if(Xn.has(vt))continue;Xn.add(vt);const Jn=Mo[1].trim(),qr=rt(G(Jn));yt.push({url:vt,title:Jn,snippet:qr})}return yt},_e=C=>{const b=Ne(C);return b?A(n[b.id]||""):[]},B=(()=>{const C=new Set,b=[];for(const F of e){C.has(F.name)||(C.add(F.name),b.push(F.name));const Q=F.name.split(/\s+/);if(Q.length>1){const G=Q[Q.length-1];G.length>=4&&!C.has(G)&&(C.add(G),b.push(G))}}return b.sort((F,Q)=>Q.length-F.length)})(),re=B.length?new RegExp(`\\b(${B.map(C=>C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,ae=C=>{if(!C||typeof C!="string"||!re)return C;const b=[];let F=0,Q;for(re.lastIndex=0;(Q=re.exec(C))!==null;){Q.index>F&&b.push(C.slice(F,Q.index));const G=Q[0];b.push(u.jsx("span",{className:"concept-who-link",onClick:yt=>{yt.stopPropagation(),na(G)},children:G},b.length)),F=Q.index+G.length}return b.length===0?C:(F<C.length&&b.push(C.slice(F)),b)},J=(C,b)=>{if(C==null)return null;if(typeof C=="string")return{title:C,detail:"",who:[],sides:[]};if(typeof C!="object")return null;if(b==="evolved"){const F=C.from??C.da??C.before??"",Q=C.to??C.a??C.after??"",G=F&&Q?`${F} → ${Q}`:F||Q||C.detail||"";return{title:C.concept||C.title||C.name||"",detail:G,who:C.who||[],sides:[]}}return b==="tensions"?{title:C.axis||C.concept||C.title||"",detail:C.detail||"",who:C.who||[],sides:C.sides||[]}:{title:C.concept||C.title||C.name||"",detail:C.detail||C.description||"",who:C.who||[],sides:[]}},_o=C=>C!=null&&C.length?C.slice(0,4).map((b,F)=>u.jsx("a",{className:"concept-cite",href:b.url,target:"_blank",rel:"noopener noreferrer",title:b.snippet||b.title||b.url,onClick:Q=>Q.stopPropagation(),children:F+1},F)):null,Jr=C=>C!=null&&C.length?u.jsx("div",{className:"concept-item-who",children:C.map((b,F)=>{const Q=_e(b);return u.jsxs("span",{className:"concept-who-item",children:[F>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${b}`,onClick:G=>{G.stopPropagation(),na(b)},children:b}),Q.length>0&&u.jsx("sup",{className:"concept-cites",children:_o(Q)})]},F)})}):null,To=(C,b)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",ae(C)]},b),lf=(C,b)=>{const Q=(C[b]||[]).map(G=>J(G,b)).filter(Boolean);return Q.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):Q.map((G,yt)=>{var Xn;return u.jsxs("div",{className:`concept-item concept-${b==="tensions"?"tension":b}`,children:[G.title&&u.jsx("div",{className:"concept-item-title",children:ae(G.title)}),G.detail&&u.jsx("div",{className:"concept-item-detail",children:ae(G.detail)}),b==="tensions"&&((Xn=G.sides)==null?void 0:Xn.map(To)),Jr(G.who)]},yt)})},of=C=>{const b=V.find(F=>F.key===_)?_:"emerging";return V.find(F=>F.key===b),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:V.map(F=>{const Q=(C[F.key]||[]).length,G=F.key===b;return u.jsxs("button",{className:`concept-tab ${G?"active":""}`,onClick:()=>O(F.key),style:G?{color:F.color,borderBottomColor:F.color}:void 0,children:[u.jsxs("span",{children:[F.icon," ",F.label]}),u.jsx("span",{className:"concept-tab-count",children:Q})]},F.key)})}),u.jsx("div",{className:"concept-tab-body",children:lf(C,b)})]})};return $?of($):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=I[Ae.leftIdx],h=I[Ae.rightIdx];if(!d||!h)return null;const k=Jm(d.text,h.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Eu(k,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(h.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:h.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:Eu(k,"right")}})]})]})})()]})}),Pe==="log"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:Eo,disabled:Qr==="loading",children:Qr==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=k=>{if(!k)return"info";const L=k.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(L)?"error":/\b(warn|attenzione|warning)/i.test(L)?"warn":/^\s*[✓]\s/.test(k)||/\b(ok|done|complete|pushato|ready)\b/i.test(L)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(k)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(k)?"event":"info"},h=k=>{if(!k||!k.trim())return u.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const L=k.split(`
`);return u.jsx("div",{className:"log-box",children:L.map(($,V)=>u.jsx("span",{className:`log-line log-${d($)}`,children:$||" "},V))})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Qr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(qs.scan)]}),u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Qr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):h(qs.launchd)]})]})})()]}),Pe==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",me.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:qd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:la?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(d=>u.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:d.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:d.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),children:d.handle})," · ",d.domain]})]}),u.jsx("div",{className:`thinker-status ${i[d.id]||""}`})]},d.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:j,disabled:!0,onChange:d=>P(d.target.value),onKeyDown:d=>d.key==="Enter"&&zo(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:U,disabled:!0,onChange:d=>p(d.target.value),onKeyDown:d=>d.key==="Enter"&&zo(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:zo,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(d=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:N===d?"#eff6ff":"",color:N===d?"#2563eb":"",borderColor:N===d?"#bfdbfe":""},onClick:()=>{T(d),Se({intervalHours:d})},children:[d,"h"]},d)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Lt.map(d=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:d}),u.jsx("button",{className:"source-delete",onClick:()=>Zd(d),disabled:!0,children:"×"})]},d))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Qs,disabled:!0,onChange:d=>Ks(d.target.value),onKeyDown:d=>d.key==="Enter"&&oa(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:oa,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(pe.isPlaying||pe.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:pe.isPlaying?pe.pause:pe.resume,children:pe.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:pe.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:pe.currentChapter>=0&&pe.chapters[pe.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:pe.chapters[pe.currentChapter].title})," — ",pe.currentChapter+1,"/",pe.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:pe.stop,title:"Stop",children:"⏹"})]}),Bd&&u.jsx("div",{className:"about-backdrop",onClick:()=>xo(!1),children:u.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/travel/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsx("div",{className:"about-logo",dangerouslySetInnerHTML:{__html:rn.nameHtml}}),u.jsx("div",{className:"about-tagline",children:rn.tagline}),u.jsx("div",{className:"about-desc",children:rn.aboutDescription}),u.jsx("div",{className:"about-footer",dangerouslySetInnerHTML:{__html:rn.aboutFooter}}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>xo(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/travel/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};$d(document.getElementById("root")).render(u.jsx(z.StrictMode,{children:u.jsx(nh,{})}));
