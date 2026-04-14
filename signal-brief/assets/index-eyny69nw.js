(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var xu={exports:{}},Yl={},wu={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),qd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),of=Symbol.for("react.memo"),sf=Symbol.for("react.lazy"),oa=Symbol.iterator;function af(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Su=Object.assign,Nu={};function Wn(e,t,n){this.props=e,this.context=t,this.refs=Nu,this.updater=n||ku}Wn.prototype.isReactComponent={};Wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ju(){}ju.prototype=Wn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=Nu,this.updater=n||ku}var Gi=Ki.prototype=new ju;Gi.constructor=Ki;Su(Gi,Wn.prototype);Gi.isPureReactComponent=!0;var ia=Array.isArray,Cu=Object.prototype.hasOwnProperty,Yi={current:null},Eu={key:!0,ref:!0,__self:!0,__source:!0};function zu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Cu.call(t,r)&&!Eu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Rr,type:e,key:o,ref:i,props:l,_owner:Yi.current}}function uf(e,t){return{$$typeof:Rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rr}function cf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var sa=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?cf(""+e.key):t.toString(36)}function pl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Rr:case Jd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+_o(i,0):r,ia(l)?(n="",e!=null&&(n=e.replace(sa,"$&/")+"/"),pl(l,t,n,"",function(f){return f})):l!=null&&(Xi(l)&&(l=uf(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(sa,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ia(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+_o(o,s);i+=pl(o,t,n,a,l)}else if(a=af(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+_o(o,s++),i+=pl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Xr(e,t,n){if(e==null)return e;var r=[],l=0;return pl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},ml={transition:null},ff={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Yi};function Pu(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!Xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=Wn;b.Fragment=qd;b.Profiler=ef;b.PureComponent=Ki;b.StrictMode=Zd;b.Suspense=lf;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;b.act=Pu;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Su({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Yi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Cu.call(t,a)&&!Eu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Rr,type:e.type,key:l,ref:o,props:r,_owner:i}};b.createContext=function(e){return e={$$typeof:nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};b.createElement=zu;b.createFactory=function(e){var t=zu.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:rf,render:e}};b.isValidElement=Xi;b.lazy=function(e){return{$$typeof:sf,_payload:{_status:-1,_result:e},_init:df}};b.memo=function(e,t){return{$$typeof:of,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=ml.transition;ml.transition={};try{e()}finally{ml.transition=t}};b.unstable_act=Pu;b.useCallback=function(e,t){return Le.current.useCallback(e,t)};b.useContext=function(e){return Le.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};b.useEffect=function(e,t){return Le.current.useEffect(e,t)};b.useId=function(){return Le.current.useId()};b.useImperativeHandle=function(e,t,n){return Le.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return Le.current.useMemo(e,t)};b.useReducer=function(e,t,n){return Le.current.useReducer(e,t,n)};b.useRef=function(e){return Le.current.useRef(e)};b.useState=function(e){return Le.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return Le.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return Le.current.useTransition()};b.version="18.3.1";wu.exports=b;var P=wu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf=P,mf=Symbol.for("react.element"),hf=Symbol.for("react.fragment"),gf=Object.prototype.hasOwnProperty,yf=pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vf={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)gf.call(t,r)&&!vf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:mf,type:e,key:o,ref:i,props:l,_owner:yf.current}}Yl.Fragment=hf;Yl.jsx=_u;Yl.jsxs=_u;xu.exports=Yl;var u=xu.exports,Mu={exports:{}},Qe={},Iu={exports:{}},Tu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,$){var D=_.length;_.push($);e:for(;0<D;){var Z=D-1>>>1,Q=_[Z];if(0<l(Q,$))_[Z]=$,_[D]=Q,D=Z;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var $=_[0],D=_.pop();if(D!==$){_[0]=D;e:for(var Z=0,Q=_.length,Zt=Q>>>1;Z<Zt;){var Ge=2*(Z+1)-1,gn=_[Ge],tt=Ge+1,It=_[tt];if(0>l(gn,D))tt<Q&&0>l(It,gn)?(_[Z]=It,_[tt]=D,Z=tt):(_[Z]=gn,_[Ge]=D,Z=Ge);else if(tt<Q&&0>l(It,D))_[Z]=It,_[tt]=D,Z=tt;else break e}}return $}function l(_,$){var D=_.sortIndex-$.sortIndex;return D!==0?D:_.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],v=1,y=null,h=3,k=!1,j=!1,z=!1,F=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(_){for(var $=n(f);$!==null;){if($.callback===null)r(f);else if($.startTime<=_)r(f),$.sortIndex=$.expirationTime,t(a,$);else break;$=n(f)}}function x(_){if(z=!1,m(_),!j)if(n(a)!==null)j=!0,be(E);else{var $=n(f);$!==null&&Gn(x,$.startTime-_)}}function E(_,$){j=!1,z&&(z=!1,p(R),R=-1),k=!0;var D=h;try{for(m($),y=n(a);y!==null&&(!(y.expirationTime>$)||_&&!ge());){var Z=y.callback;if(typeof Z=="function"){y.callback=null,h=y.priorityLevel;var Q=Z(y.expirationTime<=$);$=e.unstable_now(),typeof Q=="function"?y.callback=Q:y===n(a)&&r(a),m($)}else r(a);y=n(a)}if(y!==null)var Zt=!0;else{var Ge=n(f);Ge!==null&&Gn(x,Ge.startTime-$),Zt=!1}return Zt}finally{y=null,h=D,k=!1}}var S=!1,M=null,R=-1,te=5,T=-1;function ge(){return!(e.unstable_now()-T<te)}function _t(){if(M!==null){var _=e.unstable_now();T=_;var $=!0;try{$=M(!0,_)}finally{$?Mt():(S=!1,M=null)}}else S=!1}var Mt;if(typeof c=="function")Mt=function(){c(_t)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,gt=ze.port2;ze.port1.onmessage=_t,Mt=function(){gt.postMessage(null)}}else Mt=function(){F(_t,0)};function be(_){M=_,S||(S=!0,Mt())}function Gn(_,$){R=F(function(){_(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){j||k||(j=!0,be(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var D=h;h=$;try{return _()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,$){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=h;h=_;try{return $()}finally{h=D}},e.unstable_scheduleCallback=function(_,$,D){var Z=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Z+D:Z):D=Z,_){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=D+Q,_={id:v++,callback:$,priorityLevel:_,startTime:D,expirationTime:Q,sortIndex:-1},D>Z?(_.sortIndex=D,t(f,_),n(a)===null&&_===n(f)&&(z?(p(R),R=-1):z=!0,Gn(x,D-Z))):(_.sortIndex=Q,t(a,_),j||k||(j=!0,be(E))),_},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(_){var $=h;return function(){var D=h;h=$;try{return _.apply(this,arguments)}finally{h=D}}}})(Tu);Iu.exports=Tu;var xf=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=P,We=xf;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lu=new Set,vr={};function mn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(vr[e]=t,e=0;e<t.length;e++)Lu.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ti=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},ua={};function Sf(e){return ti.call(ua,e)?!0:ti.call(aa,e)?!1:kf.test(e)?ua[e]=!0:(aa[e]=!0,!1)}function Nf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jf(e,t,n,r){if(t===null||typeof t>"u"||Nf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ji=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ji,qi);xe[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ji,qi);xe[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ji,qi);xe[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zi(e,t,n,r){var l=xe.hasOwnProperty(t)?xe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jf(t,n,l,r)&&(n=null),r||l===null?Sf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),wn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),ni=Symbol.for("react.profiler"),Du=Symbol.for("react.provider"),Ru=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),ri=Symbol.for("react.suspense"),li=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),ca=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Mo;function or(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var Io=!1;function To(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var l=f.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,s=o.length-1;1<=i&&0<=s&&l[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==o[s]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?or(e):""}function Cf(e){switch(e.tag){case 5:return or(e.type);case 16:return or("Lazy");case 13:return or("Suspense");case 19:return or("SuspenseList");case 0:case 2:case 15:return e=To(e.type,!1),e;case 11:return e=To(e.type.render,!1),e;case 1:return e=To(e.type,!0),e;default:return""}}function oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case wn:return"Portal";case ni:return"Profiler";case es:return"StrictMode";case ri:return"Suspense";case li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ru:return(e.displayName||"Context")+".Consumer";case Du:return(e._context.displayName||"Context")+".Provider";case ts:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return t=e.displayName||null,t!==null?t:oi(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return oi(e(t))}catch{}}return null}function Ef(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oi(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zf(e){var t=$u(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=zf(e))}function Au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$u(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fu(e,t){t=t.checked,t!=null&&Zi(e,"checked",t,!1)}function si(e,t){Fu(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Cl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(ir(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function bu(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ci(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zr,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zr=Zr||document.createElement("div"),Zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pf=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Pf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Hu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Vu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Hu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var _f=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function di(e,t){if(t){if(_f[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function fi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function rs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,Ln=null,Dn=null;function ha(e){if(e=Ar(e)){if(typeof mi!="function")throw Error(w(280));var t=e.stateNode;t&&(t=eo(t),mi(e.stateNode,e.type,t))}}function Wu(e){Ln?Dn?Dn.push(e):Dn=[e]:Ln=e}function Qu(){if(Ln){var e=Ln,t=Dn;if(Dn=Ln=null,ha(e),t)for(e=0;e<t.length;e++)ha(t[e])}}function Ku(e,t){return e(t)}function Gu(){}var Lo=!1;function Yu(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return Ku(e,t,n)}finally{Lo=!1,(Ln!==null||Dn!==null)&&(Gu(),Qu())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var hi=!1;if(jt)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){hi=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{hi=!1}function Mf(e,t,n,r,l,o,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}var cr=!1,El=null,zl=!1,gi=null,If={onError:function(e){cr=!0,El=e}};function Tf(e,t,n,r,l,o,i,s,a){cr=!1,El=null,Mf.apply(If,arguments)}function Lf(e,t,n,r,l,o,i,s,a){if(Tf.apply(this,arguments),cr){if(cr){var f=El;cr=!1,El=null}else throw Error(w(198));zl||(zl=!0,gi=f)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ga(e){if(hn(e)!==e)throw Error(w(188))}function Df(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ga(l),e;if(o===r)return ga(l),t;o=o.sibling}throw Error(w(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Ju(e){return e=Df(e),e!==null?qu(e):null}function qu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qu(e);if(t!==null)return t;e=e.sibling}return null}var Zu=We.unstable_scheduleCallback,ya=We.unstable_cancelCallback,Rf=We.unstable_shouldYield,Of=We.unstable_requestPaint,ie=We.unstable_now,$f=We.unstable_getCurrentPriorityLevel,ls=We.unstable_ImmediatePriority,ec=We.unstable_UserBlockingPriority,Pl=We.unstable_NormalPriority,Af=We.unstable_LowPriority,tc=We.unstable_IdlePriority,Xl=null,mt=null;function Ff(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Uf,bf=Math.log,Bf=Math.LN2;function Uf(e){return e>>>=0,e===0?32:31-(bf(e)/Bf|0)|0}var el=64,tl=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~l;s!==0?r=sr(s):(o&=i,o!==0&&(r=sr(o)))}else i=n&~l,i!==0?r=sr(i):o!==0&&(r=sr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-at(t),l=1<<n,r|=e[n],t&=~l;return r}function Hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-at(o),s=1<<i,a=l[i];a===-1?(!(s&n)||s&r)&&(l[i]=Hf(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nc(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-at(t),e[t]=n}function Wf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-at(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function os(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var W=0;function rc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lc,is,oc,ic,sc,vi=!1,nl=[],bt=null,Bt=null,Ut=null,kr=new Map,Sr=new Map,Ot=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sr.delete(t.pointerId)}}function Zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ar(t),t!==null&&is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Kf(e,t,n,r,l){switch(t){case"focusin":return bt=Zn(bt,e,t,n,r,l),!0;case"dragenter":return Bt=Zn(Bt,e,t,n,r,l),!0;case"mouseover":return Ut=Zn(Ut,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return kr.set(o,Zn(kr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Sr.set(o,Zn(Sr.get(o)||null,e,t,n,r,l)),!0}return!1}function ac(e){var t=nn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Xu(n),t!==null){e.blockedOn=t,sc(e.priority,function(){oc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pi=r,n.target.dispatchEvent(r),pi=null}else return t=Ar(n),t!==null&&is(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){hl(e)&&n.delete(t)}function Gf(){vi=!1,bt!==null&&hl(bt)&&(bt=null),Bt!==null&&hl(Bt)&&(Bt=null),Ut!==null&&hl(Ut)&&(Ut=null),kr.forEach(xa),Sr.forEach(xa)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,vi||(vi=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Gf)))}function Nr(e){function t(l){return er(l,e)}if(0<nl.length){er(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&er(bt,e),Bt!==null&&er(Bt,e),Ut!==null&&er(Ut,e),kr.forEach(t),Sr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&Ot.shift()}var Rn=Pt.ReactCurrentBatchConfig,Ml=!0;function Yf(e,t,n,r){var l=W,o=Rn.transition;Rn.transition=null;try{W=1,ss(e,t,n,r)}finally{W=l,Rn.transition=o}}function Xf(e,t,n,r){var l=W,o=Rn.transition;Rn.transition=null;try{W=4,ss(e,t,n,r)}finally{W=l,Rn.transition=o}}function ss(e,t,n,r){if(Ml){var l=xi(e,t,n,r);if(l===null)Vo(e,t,r,Il,n),va(e,r);else if(Kf(l,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<Qf.indexOf(e)){for(;l!==null;){var o=Ar(l);if(o!==null&&lc(o),o=xi(e,t,n,r),o===null&&Vo(e,t,r,Il,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Il=null;function xi(e,t,n,r){if(Il=null,e=rs(r),e=nn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Il=e,null}function uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($f()){case ls:return 1;case ec:return 4;case Pl:case Af:return 16;case tc:return 536870912;default:return 16}default:return 16}}var At=null,as=null,gl=null;function cc(){if(gl)return gl;var e,t=as,n=t.length,r,l="value"in At?At.value:At.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return gl=l.slice(e,1<r?1-r:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function wa(){return!1}function Ke(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?rl:wa,this.isPropagationStopped=wa,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=Ke(Qn),$r=le({},Qn,{view:0,detail:0}),Jf=Ke($r),Ro,Oo,tr,Jl=le({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Ro=e.screenX-tr.screenX,Oo=e.screenY-tr.screenY):Oo=Ro=0,tr=e),Ro)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),ka=Ke(Jl),qf=le({},Jl,{dataTransfer:0}),Zf=Ke(qf),ep=le({},$r,{relatedTarget:0}),$o=Ke(ep),tp=le({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),np=Ke(tp),rp=le({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lp=Ke(rp),op=le({},Qn,{data:0}),Sa=Ke(op),ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function up(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ap[e])?!!t[e]:!1}function cs(){return up}var cp=le({},$r,{key:function(e){if(e.key){var t=ip[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dp=Ke(cp),fp=le({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Na=Ke(fp),pp=le({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),mp=Ke(pp),hp=le({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gp=Ke(hp),yp=le({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vp=Ke(yp),xp=[9,13,27,32],ds=jt&&"CompositionEvent"in window,dr=null;jt&&"documentMode"in document&&(dr=document.documentMode);var wp=jt&&"TextEvent"in window&&!dr,dc=jt&&(!ds||dr&&8<dr&&11>=dr),ja=" ",Ca=!1;function fc(e,t){switch(e){case"keyup":return xp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function kp(e,t){switch(e){case"compositionend":return pc(t);case"keypress":return t.which!==32?null:(Ca=!0,ja);case"textInput":return e=t.data,e===ja&&Ca?null:e;default:return null}}function Sp(e,t){if(Sn)return e==="compositionend"||!ds&&fc(e,t)?(e=cc(),gl=as=At=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dc&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function mc(e,t,n,r){Wu(r),t=Tl(t,"onChange"),0<t.length&&(n=new us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,jr=null;function jp(e){Cc(e,0)}function ql(e){var t=Cn(e);if(Au(t))return e}function Cp(e,t){if(e==="change")return t}var hc=!1;if(jt){var Ao;if(jt){var Fo="oninput"in document;if(!Fo){var za=document.createElement("div");za.setAttribute("oninput","return;"),Fo=typeof za.oninput=="function"}Ao=Fo}else Ao=!1;hc=Ao&&(!document.documentMode||9<document.documentMode)}function Pa(){fr&&(fr.detachEvent("onpropertychange",gc),jr=fr=null)}function gc(e){if(e.propertyName==="value"&&ql(jr)){var t=[];mc(t,jr,e,rs(e)),Yu(jp,t)}}function Ep(e,t,n){e==="focusin"?(Pa(),fr=t,jr=n,fr.attachEvent("onpropertychange",gc)):e==="focusout"&&Pa()}function zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(jr)}function Pp(e,t){if(e==="click")return ql(t)}function _p(e,t){if(e==="input"||e==="change")return ql(t)}function Mp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Mp;function Cr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ti.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function _a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=_a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_a(n)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vc(){for(var e=window,t=Cl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cl(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ip(e){var t=vc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yc(n.ownerDocument.documentElement,n)){if(r!==null&&fs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Ma(n,o);var i=Ma(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=jt&&"documentMode"in document&&11>=document.documentMode,Nn=null,wi=null,pr=null,ki=!1;function Ia(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||Nn==null||Nn!==Cl(r)||(r=Nn,"selectionStart"in r&&fs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&Cr(pr,r)||(pr=r,r=Tl(wi,"onSelect"),0<r.length&&(t=new us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nn)))}function ll(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},bo={},xc={};jt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Zl(e){if(bo[e])return bo[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return bo[e]=t[n];return e}var wc=Zl("animationend"),kc=Zl("animationiteration"),Sc=Zl("animationstart"),Nc=Zl("transitionend"),jc=new Map,Ta="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){jc.set(e,t),mn(t,[e])}for(var Bo=0;Bo<Ta.length;Bo++){var Uo=Ta[Bo],Lp=Uo.toLowerCase(),Dp=Uo[0].toUpperCase()+Uo.slice(1);Xt(Lp,"on"+Dp)}Xt(wc,"onAnimationEnd");Xt(kc,"onAnimationIteration");Xt(Sc,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Nc,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function La(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lf(r,t,void 0,e),e.currentTarget=null}function Cc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==o&&l.isPropagationStopped())break e;La(l,s,f),o=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==o&&l.isPropagationStopped())break e;La(l,s,f),o=a}}}if(zl)throw e=gi,zl=!1,gi=null,e}function J(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(Ec(t,e,2,!1),n.add(r))}function Ho(e,t,n){var r=0;t&&(r|=4),Ec(n,e,r,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[ol]){e[ol]=!0,Lu.forEach(function(n){n!=="selectionchange"&&(Rp.has(n)||Ho(n,!1,e),Ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,Ho("selectionchange",!1,t))}}function Ec(e,t,n,r){switch(uc(t)){case 1:var l=Yf;break;case 4:l=Xf;break;default:l=ss}n=l.bind(null,t,n,e),l=void 0,!hi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;s!==null;){if(i=nn(s),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}s=s.parentNode}}r=r.return}Yu(function(){var f=o,v=rs(n),y=[];e:{var h=jc.get(e);if(h!==void 0){var k=us,j=e;switch(e){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":k=dp;break;case"focusin":j="focus",k=$o;break;case"focusout":j="blur",k=$o;break;case"beforeblur":case"afterblur":k=$o;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=mp;break;case wc:case kc:case Sc:k=np;break;case Nc:k=gp;break;case"scroll":k=Jf;break;case"wheel":k=vp;break;case"copy":case"cut":case"paste":k=lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Na}var z=(t&4)!==0,F=!z&&e==="scroll",p=z?h!==null?h+"Capture":null:h;z=[];for(var c=f,m;c!==null;){m=c;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,p!==null&&(x=wr(c,p),x!=null&&z.push(zr(c,x,m)))),F)break;c=c.return}0<z.length&&(h=new k(h,j,null,n,v),y.push({event:h,listeners:z}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==pi&&(j=n.relatedTarget||n.fromElement)&&(nn(j)||j[Ct]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(j=n.relatedTarget||n.toElement,k=f,j=j?nn(j):null,j!==null&&(F=hn(j),j!==F||j.tag!==5&&j.tag!==6)&&(j=null)):(k=null,j=f),k!==j)){if(z=ka,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(z=Na,x="onPointerLeave",p="onPointerEnter",c="pointer"),F=k==null?h:Cn(k),m=j==null?h:Cn(j),h=new z(x,c+"leave",k,n,v),h.target=F,h.relatedTarget=m,x=null,nn(v)===f&&(z=new z(p,c+"enter",j,n,v),z.target=m,z.relatedTarget=F,x=z),F=x,k&&j)t:{for(z=k,p=j,c=0,m=z;m;m=xn(m))c++;for(m=0,x=p;x;x=xn(x))m++;for(;0<c-m;)z=xn(z),c--;for(;0<m-c;)p=xn(p),m--;for(;c--;){if(z===p||p!==null&&z===p.alternate)break t;z=xn(z),p=xn(p)}z=null}else z=null;k!==null&&Da(y,h,k,z,!1),j!==null&&F!==null&&Da(y,F,j,z,!0)}}e:{if(h=f?Cn(f):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var E=Cp;else if(Ea(h))if(hc)E=_p;else{E=zp;var S=Ep}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Pp);if(E&&(E=E(e,f))){mc(y,E,n,v);break e}S&&S(e,h,f),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ai(h,"number",h.value)}switch(S=f?Cn(f):window,e){case"focusin":(Ea(S)||S.contentEditable==="true")&&(Nn=S,wi=f,pr=null);break;case"focusout":pr=wi=Nn=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,Ia(y,n,v);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":Ia(y,n,v)}var M;if(ds)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Sn?fc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(dc&&n.locale!=="ko"&&(Sn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Sn&&(M=cc()):(At=v,as="value"in At?At.value:At.textContent,Sn=!0)),S=Tl(f,R),0<S.length&&(R=new Sa(R,e,null,n,v),y.push({event:R,listeners:S}),M?R.data=M:(M=pc(n),M!==null&&(R.data=M)))),(M=wp?kp(e,n):Sp(e,n))&&(f=Tl(f,"onBeforeInput"),0<f.length&&(v=new Sa("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:f}),v.data=M))}Cc(y,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=wr(e,n),o!=null&&r.unshift(zr(e,o,l)),o=wr(e,t),o!=null&&r.push(zr(e,o,l))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,l?(a=wr(n,o),a!=null&&i.unshift(zr(n,a,s))):l||(a=wr(n,o),a!=null&&i.push(zr(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Op=/\r\n?/g,$p=/\u0000|\uFFFD/g;function Ra(e){return(typeof e=="string"?e:""+e).replace(Op,`
`).replace($p,"")}function il(e,t,n){if(t=Ra(t),Ra(e)!==t&&n)throw Error(w(425))}function Ll(){}var Si=null,Ni=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Oa=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof Oa<"u"?function(e){return Oa.resolve(null).then(e).catch(bp)}:Ci;function bp(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Nr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Kn,Pr="__reactProps$"+Kn,Ct="__reactContainer$"+Kn,Ei="__reactEvents$"+Kn,Bp="__reactListeners$"+Kn,Up="__reactHandles$"+Kn;function nn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[pt])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[pt]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function eo(e){return e[Pr]||null}var zi=[],En=-1;function Jt(e){return{current:e}}function q(e){0>En||(e.current=zi[En],zi[En]=null,En--)}function X(e,t){En++,zi[En]=e.current,e.current=t}var Yt={},Ee=Jt(Yt),$e=Jt(!1),un=Yt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ae(e){return e=e.childContextTypes,e!=null}function Dl(){q($e),q(Ee)}function Aa(e,t,n){if(Ee.current!==Yt)throw Error(w(168));X(Ee,t),X($e,n)}function zc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(w(108,Ef(e)||"Unknown",l));return le({},n,r)}function Rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,un=Ee.current,X(Ee,e),X($e,$e.current),!0}function Fa(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=zc(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,q($e),q(Ee),X(Ee,e)):q($e),X($e,n)}var wt=null,to=!1,Qo=!1;function Pc(e){wt===null?wt=[e]:wt.push(e)}function Hp(e){to=!0,Pc(e)}function qt(){if(!Qo&&wt!==null){Qo=!0;var e=0,t=W;try{var n=wt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,to=!1}catch(l){throw wt!==null&&(wt=wt.slice(e+1)),Zu(ls,qt),l}finally{W=t,Qo=!1}}return null}var zn=[],Pn=0,Ol=null,$l=0,Ye=[],Xe=0,cn=null,kt=1,St="";function en(e,t){zn[Pn++]=$l,zn[Pn++]=Ol,Ol=e,$l=t}function _c(e,t,n){Ye[Xe++]=kt,Ye[Xe++]=St,Ye[Xe++]=cn,cn=e;var r=kt;e=St;var l=32-at(r)-1;r&=~(1<<l),n+=1;var o=32-at(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,kt=1<<32-at(t)+l|n<<l|r,St=o+e}else kt=1<<o|n<<l|r,St=e}function ps(e){e.return!==null&&(en(e,1),_c(e,1,0))}function ms(e){for(;e===Ol;)Ol=zn[--Pn],zn[Pn]=null,$l=zn[--Pn],zn[Pn]=null;for(;e===cn;)cn=Ye[--Xe],Ye[Xe]=null,St=Ye[--Xe],Ye[Xe]=null,kt=Ye[--Xe],Ye[Xe]=null}var Ve=null,He=null,ee=!1,st=null;function Mc(e,t){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,He=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,He=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(ee){var t=He;if(t){var n=t;if(!ba(e,t)){if(Pi(e))throw Error(w(418));t=Ht(n.nextSibling);var r=Ve;t&&ba(e,t)?Mc(r,n):(e.flags=e.flags&-4097|2,ee=!1,Ve=e)}}else{if(Pi(e))throw Error(w(418));e.flags=e.flags&-4097|2,ee=!1,Ve=e}}}function Ba(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function sl(e){if(e!==Ve)return!1;if(!ee)return Ba(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=He)){if(Pi(e))throw Ic(),Error(w(418));for(;t;)Mc(e,t),t=Ht(t.nextSibling)}if(Ba(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ve?Ht(e.stateNode.nextSibling):null;return!0}function Ic(){for(var e=He;e;)e=Ht(e.nextSibling)}function bn(){He=Ve=null,ee=!1}function hs(e){st===null?st=[e]:st.push(e)}var Vp=Pt.ReactCurrentBatchConfig;function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=l.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function al(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function Tc(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function l(p,c){return p=Kt(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,m,x){return c===null||c.tag!==6?(c=Zo(m,p.mode,x),c.return=p,c):(c=l(c,m),c.return=p,c)}function a(p,c,m,x){var E=m.type;return E===kn?v(p,c,m.props.children,x,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dt&&Ua(E)===c.type)?(x=l(c,m.props),x.ref=nr(p,c,m),x.return=p,x):(x=jl(m.type,m.key,m.props,null,p.mode,x),x.ref=nr(p,c,m),x.return=p,x)}function f(p,c,m,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=ei(m,p.mode,x),c.return=p,c):(c=l(c,m.children||[]),c.return=p,c)}function v(p,c,m,x,E){return c===null||c.tag!==7?(c=an(m,p.mode,x,E),c.return=p,c):(c=l(c,m),c.return=p,c)}function y(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Zo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Jr:return m=jl(c.type,c.key,c.props,null,p.mode,m),m.ref=nr(p,null,c),m.return=p,m;case wn:return c=ei(c,p.mode,m),c.return=p,c;case Dt:var x=c._init;return y(p,x(c._payload),m)}if(ir(c)||Jn(c))return c=an(c,p.mode,m,null),c.return=p,c;al(p,c)}return null}function h(p,c,m,x){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(p,c,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:return m.key===E?a(p,c,m,x):null;case wn:return m.key===E?f(p,c,m,x):null;case Dt:return E=m._init,h(p,c,E(m._payload),x)}if(ir(m)||Jn(m))return E!==null?null:v(p,c,m,x,null);al(p,m)}return null}function k(p,c,m,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(m)||null,s(c,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jr:return p=p.get(x.key===null?m:x.key)||null,a(c,p,x,E);case wn:return p=p.get(x.key===null?m:x.key)||null,f(c,p,x,E);case Dt:var S=x._init;return k(p,c,m,S(x._payload),E)}if(ir(x)||Jn(x))return p=p.get(m)||null,v(c,p,x,E,null);al(c,x)}return null}function j(p,c,m,x){for(var E=null,S=null,M=c,R=c=0,te=null;M!==null&&R<m.length;R++){M.index>R?(te=M,M=null):te=M.sibling;var T=h(p,M,m[R],x);if(T===null){M===null&&(M=te);break}e&&M&&T.alternate===null&&t(p,M),c=o(T,c,R),S===null?E=T:S.sibling=T,S=T,M=te}if(R===m.length)return n(p,M),ee&&en(p,R),E;if(M===null){for(;R<m.length;R++)M=y(p,m[R],x),M!==null&&(c=o(M,c,R),S===null?E=M:S.sibling=M,S=M);return ee&&en(p,R),E}for(M=r(p,M);R<m.length;R++)te=k(M,p,R,m[R],x),te!==null&&(e&&te.alternate!==null&&M.delete(te.key===null?R:te.key),c=o(te,c,R),S===null?E=te:S.sibling=te,S=te);return e&&M.forEach(function(ge){return t(p,ge)}),ee&&en(p,R),E}function z(p,c,m,x){var E=Jn(m);if(typeof E!="function")throw Error(w(150));if(m=E.call(m),m==null)throw Error(w(151));for(var S=E=null,M=c,R=c=0,te=null,T=m.next();M!==null&&!T.done;R++,T=m.next()){M.index>R?(te=M,M=null):te=M.sibling;var ge=h(p,M,T.value,x);if(ge===null){M===null&&(M=te);break}e&&M&&ge.alternate===null&&t(p,M),c=o(ge,c,R),S===null?E=ge:S.sibling=ge,S=ge,M=te}if(T.done)return n(p,M),ee&&en(p,R),E;if(M===null){for(;!T.done;R++,T=m.next())T=y(p,T.value,x),T!==null&&(c=o(T,c,R),S===null?E=T:S.sibling=T,S=T);return ee&&en(p,R),E}for(M=r(p,M);!T.done;R++,T=m.next())T=k(M,p,R,T.value,x),T!==null&&(e&&T.alternate!==null&&M.delete(T.key===null?R:T.key),c=o(T,c,R),S===null?E=T:S.sibling=T,S=T);return e&&M.forEach(function(_t){return t(p,_t)}),ee&&en(p,R),E}function F(p,c,m,x){if(typeof m=="object"&&m!==null&&m.type===kn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Jr:e:{for(var E=m.key,S=c;S!==null;){if(S.key===E){if(E=m.type,E===kn){if(S.tag===7){n(p,S.sibling),c=l(S,m.props.children),c.return=p,p=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dt&&Ua(E)===S.type){n(p,S.sibling),c=l(S,m.props),c.ref=nr(p,S,m),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}m.type===kn?(c=an(m.props.children,p.mode,x,m.key),c.return=p,p=c):(x=jl(m.type,m.key,m.props,null,p.mode,x),x.ref=nr(p,c,m),x.return=p,p=x)}return i(p);case wn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=l(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ei(m,p.mode,x),c.return=p,p=c}return i(p);case Dt:return S=m._init,F(p,c,S(m._payload),x)}if(ir(m))return j(p,c,m,x);if(Jn(m))return z(p,c,m,x);al(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=l(c,m),c.return=p,p=c):(n(p,c),c=Zo(m,p.mode,x),c.return=p,p=c),i(p)):n(p,c)}return F}var Bn=Tc(!0),Lc=Tc(!1),Al=Jt(null),Fl=null,_n=null,gs=null;function ys(){gs=_n=Fl=null}function vs(e){var t=Al.current;q(Al),e._currentValue=t}function Mi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Fl=e,gs=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function Ze(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Fl===null)throw Error(w(308));_n=e,Fl.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var rn=null;function xs(e){rn===null?rn=[e]:rn.push(e)}function Dc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,xs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Et(e,n)}return l=r.interleaved,l===null?(t.next=t,xs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Et(e,n)}function vl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bl(e,t,n,r){var l=e.updateQueue;Rt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?o=f:i.next=f,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==i&&(s===null?v.firstBaseUpdate=f:s.next=f,v.lastBaseUpdate=a))}if(o!==null){var y=l.baseState;i=0,v=f=a=null,s=o;do{var h=s.lane,k=s.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var j=e,z=s;switch(h=t,k=n,z.tag){case 1:if(j=z.payload,typeof j=="function"){y=j.call(k,y,h);break e}y=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=z.payload,h=typeof j=="function"?j.call(k,y,h):j,h==null)break e;y=le({},y,h);break e;case 2:Rt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[s]:h.push(s))}else k={eventTime:k,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(f=v=k,a=y):v=v.next=k,i|=h;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;h=s,s=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(v===null&&(a=y),l.baseState=a,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);fn|=i,e.lanes=i,e.memoizedState=y}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(w(191,l));l.call(r)}}}var Fr={},ht=Jt(Fr),_r=Jt(Fr),Mr=Jt(Fr);function ln(e){if(e===Fr)throw Error(w(174));return e}function ks(e,t){switch(X(Mr,t),X(_r,e),X(ht,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ci(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ci(t,e)}q(ht),X(ht,t)}function Un(){q(ht),q(_r),q(Mr)}function Oc(e){ln(Mr.current);var t=ln(ht.current),n=ci(t,e.type);t!==n&&(X(_r,e),X(ht,n))}function Ss(e){_r.current===e&&(q(ht),q(_r))}var ne=Jt(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function Ns(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var xl=Pt.ReactCurrentDispatcher,Go=Pt.ReactCurrentBatchConfig,dn=0,re=null,ue=null,me=null,Ul=!1,mr=!1,Ir=0,Wp=0;function Ne(){throw Error(w(321))}function js(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Cs(e,t,n,r,l,o){if(dn=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xl.current=e===null||e.memoizedState===null?Yp:Xp,e=n(r,l),mr){o=0;do{if(mr=!1,Ir=0,25<=o)throw Error(w(301));o+=1,me=ue=null,t.updateQueue=null,xl.current=Jp,e=n(r,l)}while(mr)}if(xl.current=Hl,t=ue!==null&&ue.next!==null,dn=0,me=ue=re=null,Ul=!1,t)throw Error(w(300));return e}function Es(){var e=Ir!==0;return Ir=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?re.memoizedState=me=e:me=me.next=e,me}function et(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=me===null?re.memoizedState:me.next;if(t!==null)me=t,ue=e;else{if(e===null)throw Error(w(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?re.memoizedState=me=e:me=me.next=e}return me}function Tr(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ue,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=i=null,a=null,f=o;do{var v=f.lane;if((dn&v)===v)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=y,i=r):a=a.next=y,re.lanes|=v,fn|=v}f=f.next}while(f!==null&&f!==o);a===null?i=r:a.next=s,ct(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,re.lanes|=o,fn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=et(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);ct(o,t.memoizedState)||(Oe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $c(){}function Ac(e,t){var n=re,r=et(),l=t(),o=!ct(r.memoizedState,l);if(o&&(r.memoizedState=l,Oe=!0),r=r.queue,zs(Bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Lr(9,bc.bind(null,n,r,l,t),void 0,null),he===null)throw Error(w(349));dn&30||Fc(n,t,l)}return l}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bc(e,t,n,r){t.value=n,t.getSnapshot=r,Uc(t)&&Hc(e)}function Bc(e,t,n){return n(function(){Uc(t)&&Hc(e)})}function Uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Hc(e){var t=Et(e,1);t!==null&&ut(t,e,1,-1)}function Wa(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gp.bind(null,re,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vc(){return et().memoizedState}function wl(e,t,n,r){var l=ft();re.flags|=e,l.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function no(e,t,n,r){var l=et();r=r===void 0?null:r;var o=void 0;if(ue!==null){var i=ue.memoizedState;if(o=i.destroy,r!==null&&js(r,i.deps)){l.memoizedState=Lr(t,n,o,r);return}}re.flags|=e,l.memoizedState=Lr(1|t,n,o,r)}function Qa(e,t){return wl(8390656,8,e,t)}function zs(e,t){return no(2048,8,e,t)}function Wc(e,t){return no(4,2,e,t)}function Qc(e,t){return no(4,4,e,t)}function Kc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gc(e,t,n){return n=n!=null?n.concat([e]):null,no(4,4,Kc.bind(null,t,e),n)}function Ps(){}function Yc(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xc(e,t){var n=et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&js(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jc(e,t,n){return dn&21?(ct(n,t)||(n=nc(),re.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Qp(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{W=n,Go.transition=r}}function qc(){return et().memoizedState}function Kp(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zc(e))ed(t,n);else if(n=Dc(e,t,n,r),n!==null){var l=Te();ut(n,e,r,l),td(n,t,r)}}function Gp(e,t,n){var r=Qt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))ed(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,n);if(l.hasEagerState=!0,l.eagerState=s,ct(s,i)){var a=t.interleaved;a===null?(l.next=l,xs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Dc(e,t,l,r),n!==null&&(l=Te(),ut(n,e,r,l),td(n,t,r))}}function Zc(e){var t=e.alternate;return e===re||t!==null&&t===re}function ed(e,t){mr=Ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function td(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,os(e,n)}}var Hl={readContext:Ze,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Yp={readContext:Ze,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wl(4194308,4,Kc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){return wl(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kp.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Wa,useDebugValue:Ps,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Wa(!1),t=e[0];return e=Qp.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,l=ft();if(ee){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),he===null)throw Error(w(349));dn&30||Fc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Qa(Bc.bind(null,r,o,e),[e]),r.flags|=2048,Lr(9,bc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=he.identifierPrefix;if(ee){var n=St,r=kt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xp={readContext:Ze,useCallback:Yc,useContext:Ze,useEffect:zs,useImperativeHandle:Gc,useInsertionEffect:Wc,useLayoutEffect:Qc,useMemo:Xc,useReducer:Yo,useRef:Vc,useState:function(){return Yo(Tr)},useDebugValue:Ps,useDeferredValue:function(e){var t=et();return Jc(t,ue.memoizedState,e)},useTransition:function(){var e=Yo(Tr)[0],t=et().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Ac,useId:qc,unstable_isNewReconciler:!1},Jp={readContext:Ze,useCallback:Yc,useContext:Ze,useEffect:zs,useImperativeHandle:Gc,useInsertionEffect:Wc,useLayoutEffect:Qc,useMemo:Xc,useReducer:Xo,useRef:Vc,useState:function(){return Xo(Tr)},useDebugValue:Ps,useDeferredValue:function(e){var t=et();return ue===null?t.memoizedState=e:Jc(t,ue.memoizedState,e)},useTransition:function(){var e=Xo(Tr)[0],t=et().memoizedState;return[e,t]},useMutableSource:$c,useSyncExternalStore:Ac,useId:qc,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ii(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Qt(e),o=Nt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,l),t!==null&&(ut(t,e,l,r),vl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Qt(e),o=Nt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Vt(e,o,l),t!==null&&(ut(t,e,l,r),vl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Qt(e),l=Nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Vt(e,l,r),t!==null&&(ut(t,e,r,n),vl(t,e,r))}};function Ka(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(l,o):!0}function nd(e,t,n){var r=!1,l=Yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ze(o):(l=Ae(t)?un:Ee.current,r=t.contextTypes,o=(r=r!=null)?Fn(e,l):Yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ga(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ws(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Ze(o):(o=Ae(t)?un:Ee.current,l.context=Fn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ii(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ro.enqueueReplaceState(l,l.state,null),bl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=Cf(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qp=typeof WeakMap=="function"?WeakMap:Map;function rd(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Hi=r),Li(e,t)},n}function ld(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=fm.bind(null,e,t,n),t.then(e,e))}function Xa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var Zp=Pt.ReactCurrentOwner,Oe=!1;function Ie(e,t,n,r){t.child=e===null?Lc(t,null,n,r):Bn(t,e.child,n,r)}function qa(e,t,n,r,l){n=n.render;var o=t.ref;return On(t,l),r=Cs(e,t,n,r,o,l),n=Es(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ee&&n&&ps(t),t.flags|=1,Ie(e,t,r,l),t.child)}function Za(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Os(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,od(e,t,o,r,l)):(e=jl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(i,r)&&e.ref===t.ref)return zt(e,t,l)}return t.flags|=1,e=Kt(o,r),e.ref=t.ref,e.return=t,t.child=e}function od(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,zt(e,t,l)}return Di(e,t,n,r,l)}function id(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(In,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(In,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(In,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(In,Ue),Ue|=r;return Ie(e,t,l,n),t.child}function sd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Di(e,t,n,r,l){var o=Ae(n)?un:Ee.current;return o=Fn(t,o),On(t,l),n=Cs(e,t,n,r,o,l),r=Es(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,zt(e,t,l)):(ee&&r&&ps(t),t.flags|=1,Ie(e,t,n,l),t.child)}function eu(e,t,n,r,l){if(Ae(n)){var o=!0;Rl(t)}else o=!1;if(On(t,l),t.stateNode===null)kl(e,t),nd(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Ze(f):(f=Ae(n)?un:Ee.current,f=Fn(t,f));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Ga(t,i,r,f),Rt=!1;var h=t.memoizedState;i.state=h,bl(t,r,i,l),a=t.memoizedState,s!==r||h!==a||$e.current||Rt?(typeof v=="function"&&(Ii(t,n,v,r),a=t.memoizedState),(s=Rt||Ka(t,n,s,r,h,a,f))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Rc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:ot(t.type,s),i.props=f,y=t.pendingProps,h=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ze(a):(a=Ae(n)?un:Ee.current,a=Fn(t,a));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==y||h!==a)&&Ga(t,i,r,a),Rt=!1,h=t.memoizedState,i.state=h,bl(t,r,i,l);var j=t.memoizedState;s!==y||h!==j||$e.current||Rt?(typeof k=="function"&&(Ii(t,n,k,r),j=t.memoizedState),(f=Rt||Ka(t,n,f,r,h,j,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,j,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,j,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),i.props=r,i.state=j,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ri(e,t,n,r,o,l)}function Ri(e,t,n,r,l,o){sd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Fa(t,n,!1),zt(e,t,o);r=t.stateNode,Zp.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,s,o)):Ie(e,t,s,o),t.memoizedState=r.state,l&&Fa(t,n,!0),t.child}function ad(e){var t=e.stateNode;t.pendingContext?Aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(e,t.context,!1),ks(e,t.containerInfo)}function tu(e,t,n,r,l){return bn(),hs(l),t.flags|=256,Ie(e,t,n,r),t.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function $i(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,t,n){var r=t.pendingProps,l=ne.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(ne,l&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=io(i,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$i(n),t.memoizedState=Oi,e):_s(t,i));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return em(e,t,i,r,s,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Kt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=Kt(s,o):(o=an(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?$i(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return o=e.child,e=o.sibling,r=Kt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _s(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&hs(r),Bn(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function em(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(w(422))),ul(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=io({mode:"visible",children:r.children},l,0,null),o=an(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Bn(t,e.child,null,i),t.child.memoizedState=$i(i),t.memoizedState=Oi,o);if(!(t.mode&1))return ul(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(w(419)),r=Jo(o,r,void 0),ul(e,t,i,r)}if(s=(i&e.childLanes)!==0,Oe||s){if(r=he,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Et(e,l),ut(r,e,l,-1))}return Rs(),r=Jo(Error(w(421))),ul(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=pm.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,He=Ht(l.nextSibling),Ve=t,ee=!0,st=null,e!==null&&(Ye[Xe++]=kt,Ye[Xe++]=St,Ye[Xe++]=cn,kt=e.id,St=e.overflow,cn=t),t=_s(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Mi(e.return,t,n)}function qo(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function cd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ie(e,t,r.children,n),r=ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ne,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),qo(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}qo(t,!0,n,null,o);break;case"together":qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function kl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tm(e,t,n){switch(t.tag){case 3:ad(t),bn();break;case 5:Oc(t);break;case 1:Ae(t.type)&&Rl(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;X(Al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):n&t.child.childLanes?ud(e,t,n):(X(ne,ne.current&1),e=zt(e,t,n),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,id(e,t,n)}return zt(e,t,n)}var dd,Ai,fd,pd;dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};fd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,ln(ht.current);var o=null;switch(n){case"input":l=ii(e,l),r=ii(e,r),o=[];break;case"select":l=le({},l,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":l=ui(e,l),r=ui(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}di(n,r);var i;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var s=l[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(vr.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var a=r[f];if(s=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(vr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&J("scroll",e),o||s===a||(o=[])):(o=o||[]).push(f,a))}n&&(o=o||[]).push("style",n);var f=o;(t.updateQueue=f)&&(t.flags|=4)}};pd=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nm(e,t,n){var r=t.pendingProps;switch(ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Ae(t.type)&&Dl(),je(t),null;case 3:return r=t.stateNode,Un(),q($e),q(Ee),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(sl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Qi(st),st=null))),Ai(e,t),je(t),null;case 5:Ss(t);var l=ln(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)fd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return je(t),null}if(e=ln(ht.current),sl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[Pr]=o,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(l=0;l<ar.length;l++)J(ar[l],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":da(r,o),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},J("invalid",r);break;case"textarea":pa(r,o),J("invalid",r)}di(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&il(r.textContent,s,e),l=["children",""+s]):vr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&J("scroll",r)}switch(n){case"input":qr(r),fa(r,o,!0);break;case"textarea":qr(r),ma(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pt]=t,e[Pr]=r,dd(e,t,!1,!1),t.stateNode=e;e:{switch(i=fi(n,r),n){case"dialog":J("cancel",e),J("close",e),l=r;break;case"iframe":case"object":case"embed":J("load",e),l=r;break;case"video":case"audio":for(l=0;l<ar.length;l++)J(ar[l],e);l=r;break;case"source":J("error",e),l=r;break;case"img":case"image":case"link":J("error",e),J("load",e),l=r;break;case"details":J("toggle",e),l=r;break;case"input":da(e,r),l=ii(e,r),J("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=le({},r,{value:void 0}),J("invalid",e);break;case"textarea":pa(e,r),l=ui(e,r),J("invalid",e);break;default:l=r}di(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?Vu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Uu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&xr(e,a):typeof a=="number"&&xr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&J("scroll",e):a!=null&&Zi(e,o,a,i))}switch(n){case"input":qr(e),fa(e,r,!1);break;case"textarea":qr(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)pd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=ln(Mr.current),ln(ht.current),sl(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return je(t),null;case 13:if(q(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&He!==null&&t.mode&1&&!(t.flags&128))Ic(),bn(),t.flags|=98560,o=!1;else if(o=sl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[pt]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),o=!1}else st!==null&&(Qi(st),st=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?ce===0&&(ce=3):Rs())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Un(),Ai(e,t),e===null&&Er(t.stateNode.containerInfo),je(t),null;case 10:return vs(t.type._context),je(t),null;case 17:return Ae(t.type)&&Dl(),je(t),null;case 19:if(q(ne),o=t.memoizedState,o===null)return je(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)rr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Bl(e),i!==null){for(t.flags|=128,rr(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Vn&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!ee)return je(t),null}else 2*ie()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=ne.current,X(ne,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return Ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function rm(e,t){switch(ms(t),t.tag){case 1:return Ae(t.type)&&Dl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),q($e),q(Ee),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(q(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ne),null;case 4:return Un(),null;case 10:return vs(t.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var cl=!1,Ce=!1,lm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){oe(e,t,r)}}var ru=!1;function om(e,t){if(Si=Ml,e=vc(),fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,v=0,y=e,h=null;t:for(;;){for(var k;y!==n||l!==0&&y.nodeType!==3||(s=i+l),y!==o||r!==0&&y.nodeType!==3||(a=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(k=y.firstChild)!==null;)h=y,y=k;for(;;){if(y===e)break t;if(h===n&&++f===l&&(s=i),h===o&&++v===r&&(a=i),(k=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=k}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Ml=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var z=j.memoizedProps,F=j.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?z:ot(t.type,z),F);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){oe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return j=ru,ru=!1,j}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Fi(t,n,o)}l=l.next}while(l!==r)}}function lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function md(e){var t=e.alternate;t!==null&&(e.alternate=null,md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[Pr],delete t[Ei],delete t[Bp],delete t[Up])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hd(e){return e.tag===5||e.tag===3||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var ye=null,it=!1;function Lt(e,t,n){for(n=n.child;n!==null;)gd(e,t,n),n=n.sibling}function gd(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Ce||Mn(n,t);case 6:var r=ye,l=it;ye=null,Lt(e,t,n),ye=r,it=l,ye!==null&&(it?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(it?(e=ye,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),Nr(e)):Wo(ye,n.stateNode));break;case 4:r=ye,l=it,ye=n.stateNode.containerInfo,it=!0,Lt(e,t,n),ye=r,it=l;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Fi(n,t,i),l=l.next}while(l!==r)}Lt(e,t,n);break;case 1:if(!Ce&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){oe(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Lt(e,t,n),Ce=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lm),t.forEach(function(r){var l=mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,it=!1;break e;case 3:ye=s.stateNode.containerInfo,it=!0;break e;case 4:ye=s.stateNode.containerInfo,it=!0;break e}s=s.return}if(ye===null)throw Error(w(160));gd(o,i,l),ye=null,it=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(f){oe(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),dt(e),r&4){try{hr(3,e,e.return),lo(3,e)}catch(z){oe(e,e.return,z)}try{hr(5,e,e.return)}catch(z){oe(e,e.return,z)}}break;case 1:lt(t,e),dt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(lt(t,e),dt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var l=e.stateNode;try{xr(l,"")}catch(z){oe(e,e.return,z)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&Fu(l,o),fi(s,i);var f=fi(s,o);for(i=0;i<a.length;i+=2){var v=a[i],y=a[i+1];v==="style"?Vu(l,y):v==="dangerouslySetInnerHTML"?Uu(l,y):v==="children"?xr(l,y):Zi(l,v,y,f)}switch(s){case"input":si(l,o);break;case"textarea":bu(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Tn(l,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?Tn(l,!!o.multiple,o.defaultValue,!0):Tn(l,!!o.multiple,o.multiple?[]:"",!1))}l[Pr]=o}catch(z){oe(e,e.return,z)}}break;case 6:if(lt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(w(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(z){oe(e,e.return,z)}}break;case 3:if(lt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(z){oe(e,e.return,z)}break;case 4:lt(t,e),dt(e);break;case 13:lt(t,e),dt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ts=ie())),r&4&&ou(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(f=Ce)||v,lt(t,e),Ce=f):lt(t,e),dt(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&e.mode&1)for(I=e,v=e.child;v!==null;){for(y=I=v;I!==null;){switch(h=I,k=h.child,h.tag){case 0:case 11:case 14:case 15:hr(4,h,h.return);break;case 1:Mn(h,h.return);var j=h.stateNode;if(typeof j.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(z){oe(r,n,z)}}break;case 5:Mn(h,h.return);break;case 22:if(h.memoizedState!==null){su(y);continue}}k!==null?(k.return=h,I=k):su(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{l=y.stateNode,f?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=y.stateNode,a=y.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Hu("display",i))}catch(z){oe(e,e.return,z)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(z){oe(e,e.return,z)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:lt(t,e),dt(e),r&4&&ou(e);break;case 21:break;default:lt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hd(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xr(l,""),r.flags&=-33);var o=lu(e);Ui(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=lu(e);Bi(e,s,i);break;default:throw Error(w(161))}}catch(a){oe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function im(e,t,n){I=e,vd(e)}function vd(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||cl;if(!i){var s=l.alternate,a=s!==null&&s.memoizedState!==null||Ce;s=cl;var f=Ce;if(cl=i,(Ce=a)&&!f)for(I=l;I!==null;)i=I,a=i.child,i.tag===22&&i.memoizedState!==null?au(l):a!==null?(a.return=i,I=a):au(l);for(;o!==null;)I=o,vd(o),o=o.sibling;I=l,cl=s,Ce=f}iu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,I=o):iu(e)}}function iu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Va(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Nr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ce||t.flags&512&&bi(t)}catch(h){oe(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function su(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function au(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{lo(4,t)}catch(a){oe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){oe(t,l,a)}}var o=t.return;try{bi(t)}catch(a){oe(t,o,a)}break;case 5:var i=t.return;try{bi(t)}catch(a){oe(t,i,a)}}}catch(a){oe(t,t.return,a)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var sm=Math.ceil,Vl=Pt.ReactCurrentDispatcher,Ms=Pt.ReactCurrentOwner,qe=Pt.ReactCurrentBatchConfig,U=0,he=null,se=null,ve=0,Ue=0,In=Jt(0),ce=0,Dr=null,fn=0,oo=0,Is=0,gr=null,Re=null,Ts=0,Vn=1/0,xt=null,Wl=!1,Hi=null,Wt=null,dl=!1,Ft=null,Ql=0,yr=0,Vi=null,Sl=-1,Nl=0;function Te(){return U&6?ie():Sl!==-1?Sl:Sl=ie()}function Qt(e){return e.mode&1?U&2&&ve!==0?ve&-ve:Vp.transition!==null?(Nl===0&&(Nl=nc()),Nl):(e=W,e!==0||(e=window.event,e=e===void 0?16:uc(e.type)),e):1}function ut(e,t,n,r){if(50<yr)throw yr=0,Vi=null,Error(w(185));Or(e,n,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(oo|=n),ce===4&&$t(e,ve)),Fe(e,r),n===1&&U===0&&!(t.mode&1)&&(Vn=ie()+500,to&&qt()))}function Fe(e,t){var n=e.callbackNode;Vf(e,t);var r=_l(e,e===he?ve:0);if(r===0)n!==null&&ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ya(n),t===1)e.tag===0?Hp(uu.bind(null,e)):Pc(uu.bind(null,e)),Fp(function(){!(U&6)&&qt()}),n=null;else{switch(rc(r)){case 1:n=ls;break;case 4:n=ec;break;case 16:n=Pl;break;case 536870912:n=tc;break;default:n=Pl}n=Ed(n,xd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xd(e,t){if(Sl=-1,Nl=0,U&6)throw Error(w(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=_l(e,e===he?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var l=U;U|=2;var o=kd();(he!==e||ve!==t)&&(xt=null,Vn=ie()+500,sn(e,t));do try{cm();break}catch(s){wd(e,s)}while(!0);ys(),Vl.current=o,U=l,se!==null?t=0:(he=null,ve=0,t=ce)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Wi(e,l))),t===1)throw n=Dr,sn(e,0),$t(e,r),Fe(e,ie()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,!(r&30)&&!am(l)&&(t=Kl(e,r),t===2&&(o=yi(e),o!==0&&(r=o,t=Wi(e,o))),t===1))throw n=Dr,sn(e,0),$t(e,r),Fe(e,ie()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:tn(e,Re,xt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=Ts+500-ie(),10<t)){if(_l(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ci(tn.bind(null,e,Re,xt),t);break}tn(e,Re,xt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-at(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sm(r/1960))-r,10<r){e.timeoutHandle=Ci(tn.bind(null,e,Re,xt),r);break}tn(e,Re,xt);break;case 5:tn(e,Re,xt);break;default:throw Error(w(329))}}}return Fe(e,ie()),e.callbackNode===n?xd.bind(null,e):null}function Wi(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=Re,Re=n,t!==null&&Qi(t)),e}function Qi(e){Re===null?Re=e:Re.push.apply(Re,e)}function am(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!ct(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Is,t&=~oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function uu(e){if(U&6)throw Error(w(327));$n();var t=_l(e,0);if(!(t&1))return Fe(e,ie()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=Dr,sn(e,0),$t(e,t),Fe(e,ie()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Re,xt),Fe(e,ie()),null}function Ls(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Vn=ie()+500,to&&qt())}}function pn(e){Ft!==null&&Ft.tag===0&&!(U&6)&&$n();var t=U;U|=1;var n=qe.transition,r=W;try{if(qe.transition=null,W=1,e)return e()}finally{W=r,qe.transition=n,U=t,!(U&6)&&qt()}}function Ds(){Ue=In.current,q(In)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ap(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Dl();break;case 3:Un(),q($e),q(Ee),Ns();break;case 5:Ss(r);break;case 4:Un();break;case 13:q(ne);break;case 19:q(ne);break;case 10:vs(r.type._context);break;case 22:case 23:Ds()}n=n.return}if(he=e,se=e=Kt(e.current,null),ve=Ue=t,ce=0,Dr=null,Is=oo=fn=0,Re=gr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}rn=null}return e}function wd(e,t){do{var n=se;try{if(ys(),xl.current=Hl,Ul){for(var r=re.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ul=!1}if(dn=0,me=ue=re=null,mr=!1,Ir=0,Ms.current=null,n===null||n.return===null){ce=1,Dr=t,se=null;break}e:{var o=e,i=n.return,s=n,a=t;if(t=ve,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,v=s,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=Xa(i);if(k!==null){k.flags&=-257,Ja(k,i,s,o,t),k.mode&1&&Ya(o,f,t),t=k,a=f;var j=t.updateQueue;if(j===null){var z=new Set;z.add(a),t.updateQueue=z}else j.add(a);break e}else{if(!(t&1)){Ya(o,f,t),Rs();break e}a=Error(w(426))}}else if(ee&&s.mode&1){var F=Xa(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ja(F,i,s,o,t),hs(Hn(a,s));break e}}o=a=Hn(a,s),ce!==4&&(ce=2),gr===null?gr=[o]:gr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=rd(o,a,t);Ha(o,p);break e;case 1:s=a;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ld(o,s,t);Ha(o,x);break e}}o=o.return}while(o!==null)}Nd(n)}catch(E){t=E,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function kd(){var e=Vl.current;return Vl.current=Hl,e===null?Hl:e}function Rs(){(ce===0||ce===3||ce===2)&&(ce=4),he===null||!(fn&268435455)&&!(oo&268435455)||$t(he,ve)}function Kl(e,t){var n=U;U|=2;var r=kd();(he!==e||ve!==t)&&(xt=null,sn(e,t));do try{um();break}catch(l){wd(e,l)}while(!0);if(ys(),U=n,Vl.current=r,se!==null)throw Error(w(261));return he=null,ve=0,ce}function um(){for(;se!==null;)Sd(se)}function cm(){for(;se!==null&&!Rf();)Sd(se)}function Sd(e){var t=Cd(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Nd(e):se=t,Ms.current=null}function Nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rm(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=nm(n,t,Ue),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function tn(e,t,n){var r=W,l=qe.transition;try{qe.transition=null,W=1,dm(e,t,n,r)}finally{qe.transition=l,W=r}return null}function dm(e,t,n,r){do $n();while(Ft!==null);if(U&6)throw Error(w(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Wf(e,o),e===he&&(se=he=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,Ed(Pl,function(){return $n(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=qe.transition,qe.transition=null;var i=W;W=1;var s=U;U|=4,Ms.current=null,om(e,n),yd(n,e),Ip(Ni),Ml=!!Si,Ni=Si=null,e.current=n,im(n),Of(),U=s,W=i,qe.transition=o}else e.current=n;if(dl&&(dl=!1,Ft=e,Ql=l),o=e.pendingLanes,o===0&&(Wt=null),Ff(n.stateNode),Fe(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Wl)throw Wl=!1,e=Hi,Hi=null,e;return Ql&1&&e.tag!==0&&$n(),o=e.pendingLanes,o&1?e===Vi?yr++:(yr=0,Vi=e):yr=0,qt(),null}function $n(){if(Ft!==null){var e=rc(Ql),t=qe.transition,n=W;try{if(qe.transition=null,W=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ql=0,U&6)throw Error(w(331));var l=U;for(U|=4,I=e.current;I!==null;){var o=I,i=o.child;if(I.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(I=f;I!==null;){var v=I;switch(v.tag){case 0:case 11:case 15:hr(8,v,o)}var y=v.child;if(y!==null)y.return=v,I=y;else for(;I!==null;){v=I;var h=v.sibling,k=v.return;if(md(v),v===f){I=null;break}if(h!==null){h.return=k,I=h;break}I=k}}}var j=o.alternate;if(j!==null){var z=j.child;if(z!==null){j.child=null;do{var F=z.sibling;z.sibling=null,z=F}while(z!==null)}}I=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,I=i;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var c=e.current;for(I=c;I!==null;){i=I;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,I=m;else e:for(i=c;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:lo(9,s)}}catch(E){oe(s,s.return,E)}if(s===i){I=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,I=x;break e}I=s.return}}if(U=l,qt(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Xl,e)}catch{}r=!0}return r}finally{W=n,qe.transition=t}}return!1}function cu(e,t,n){t=Hn(n,t),t=rd(e,t,1),e=Vt(e,t,1),t=Te(),e!==null&&(Or(e,1,t),Fe(e,t))}function oe(e,t,n){if(e.tag===3)cu(e,e,n);else for(;t!==null;){if(t.tag===3){cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Hn(n,e),e=ld(t,e,1),t=Vt(t,e,1),e=Te(),t!==null&&(Or(t,1,e),Fe(t,e));break}}t=t.return}}function fm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>ie()-Ts?sn(e,0):Is|=n),Fe(e,t)}function jd(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=Te();e=Et(e,t),e!==null&&(Or(e,t,n),Fe(e,n))}function pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jd(e,n)}function mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),jd(e,n)}var Cd;Cd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,tm(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,ee&&t.flags&1048576&&_c(t,$l,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;kl(e,t),e=t.pendingProps;var l=Fn(t,Ee.current);On(t,n),l=Cs(null,t,r,e,l,n);var o=Es();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Rl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ws(t),l.updater=ro,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Ri(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&ps(t),Ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(kl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=gm(r),e=ot(r,e),l){case 0:t=Di(null,t,r,e,n);break e;case 1:t=eu(null,t,r,e,n);break e;case 11:t=qa(null,t,r,e,n);break e;case 14:t=Za(null,t,r,ot(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Di(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),eu(e,t,r,l,n);case 3:e:{if(ad(t),e===null)throw Error(w(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Rc(e,t),bl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Hn(Error(w(423)),t),t=tu(e,t,r,n,l);break e}else if(r!==l){l=Hn(Error(w(424)),t),t=tu(e,t,r,n,l);break e}else for(He=Ht(t.stateNode.containerInfo.firstChild),Ve=t,ee=!0,st=null,n=Lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===l){t=zt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Oc(t),e===null&&_i(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,ji(r,l)?i=null:o!==null&&ji(r,o)&&(t.flags|=32),sd(e,t),Ie(e,t,i,n),t.child;case 6:return e===null&&_i(t),null;case 13:return ud(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),qa(e,t,r,l,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,X(Al,r._currentValue),r._currentValue=i,o!==null)if(ct(o.value,i)){if(o.children===l.children&&!$e.current){t=zt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Nt(-1,n&-n),a.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?a.next=a:(a.next=v.next,v.next=a),f.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mi(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Mi(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,On(t,n),l=Ze(l),r=r(l),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Za(e,t,r,l,n);case 15:return od(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),kl(e,t),t.tag=1,Ae(r)?(e=!0,Rl(t)):e=!1,On(t,n),nd(t,r,l),Ti(t,r,l,n),Ri(null,t,r,!0,e,n);case 19:return cd(e,t,n);case 22:return id(e,t,n)}throw Error(w(156,t.tag))};function Ed(e,t){return Zu(e,t)}function hm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(e,t,n,r){return new hm(e,t,n,r)}function Os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gm(e){if(typeof e=="function")return Os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ts)return 11;if(e===ns)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Os(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kn:return an(n.children,l,o,t);case es:i=8,l|=8;break;case ni:return e=Je(12,n,t,l|2),e.elementType=ni,e.lanes=o,e;case ri:return e=Je(13,n,t,l),e.elementType=ri,e.lanes=o,e;case li:return e=Je(19,n,t,l),e.elementType=li,e.lanes=o,e;case Ou:return io(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Du:i=10;break e;case Ru:i=9;break e;case ts:i=11;break e;case ns:i=14;break e;case Dt:i=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Je(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Je(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=Je(22,e,r,t),e.elementType=Ou,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,t,n){return e=Je(6,e,null,t),e.lanes=n,e}function ei(e,t,n){return t=Je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ym(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function $s(e,t,n,r,l,o,i,s,a){return e=new ym(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(o),e}function vm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zd(e){if(!e)return Yt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ae(n))return zc(e,n,t)}return t}function Pd(e,t,n,r,l,o,i,s,a){return e=$s(n,r,!0,e,l,o,i,s,a),e.context=zd(null),n=e.current,r=Te(),l=Qt(n),o=Nt(r,l),o.callback=t??null,Vt(n,o,l),e.current.lanes=l,Or(e,l,r),Fe(e,r),e}function so(e,t,n,r){var l=t.current,o=Te(),i=Qt(l);return n=zd(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(l,t,i),e!==null&&(ut(e,l,i,o),vl(e,l,i)),i}function Gl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function du(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function As(e,t){du(e,t),(e=e.alternate)&&du(e,t)}function xm(){return null}var _d=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}ao.prototype.render=Fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));so(e,t,null,null)};ao.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){so(null,e,null,null)}),t[Ct]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=ic();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&ac(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fu(){}function wm(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var f=Gl(i);o.call(f)}}var i=Pd(t,r,e,0,null,!1,!1,"",fu);return e._reactRootContainer=i,e[Ct]=i.current,Er(e.nodeType===8?e.parentNode:e),pn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var f=Gl(a);s.call(f)}}var a=$s(e,0,!1,null,null,!1,!1,"",fu);return e._reactRootContainer=a,e[Ct]=a.current,Er(e.nodeType===8?e.parentNode:e),pn(function(){so(t,a,n,r)}),a}function co(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var s=l;l=function(){var a=Gl(i);s.call(a)}}so(t,i,e,l)}else i=wm(n,t,e,l,r);return Gl(i)}lc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(os(t,n|1),Fe(t,ie()),!(U&6)&&(Vn=ie()+500,qt()))}break;case 13:pn(function(){var r=Et(e,1);if(r!==null){var l=Te();ut(r,e,1,l)}}),As(e,1)}};is=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}As(e,134217728)}};oc=function(e){if(e.tag===13){var t=Qt(e),n=Et(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}As(e,t)}};ic=function(){return W};sc=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};mi=function(e,t,n){switch(t){case"input":if(si(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=eo(r);if(!l)throw Error(w(90));Au(r),si(r,l)}}}break;case"textarea":bu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Ku=Ls;Gu=pn;var km={usingClientEntryPoint:!1,Events:[Ar,Cn,eo,Wu,Qu,Ls]},lr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sm={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ju(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{Xl=fl.inject(Sm),mt=fl}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(t))throw Error(w(200));return vm(e,t,null,n)};Qe.createRoot=function(e,t){if(!bs(e))throw Error(w(299));var n=!1,r="",l=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=$s(e,1,!1,null,null,n,!1,r,l),e[Ct]=t.current,Er(e.nodeType===8?e.parentNode:e),new Fs(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ju(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return pn(e)};Qe.hydrate=function(e,t,n){if(!uo(t))throw Error(w(200));return co(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!bs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=_d;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Pd(t,null,e,1,n??null,l,!1,o,i),e[Ct]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ao(t)};Qe.render=function(e,t,n){if(!uo(t))throw Error(w(200));return co(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!uo(e))throw Error(w(40));return e._reactRootContainer?(pn(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};Qe.unstable_batchedUpdates=Ls;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!uo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return co(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md)}catch(e){console.error(e)}}Md(),Mu.exports=Qe;var Nm=Mu.exports,Id,pu=Nm;Id=pu.createRoot,pu.hydrateRoot;const jm="/claude",Cm="https://stelle-972218119922.europe-west1.run.app/api",Td=Cm;async function fo(e){const t=await fetch(jm,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!(t.headers.get("content-type")||"").includes("application/json")){const l=(await t.text()).slice(0,60).replace(/\s+/g," ");throw new Error(`Backend Claude non raggiungibile (${t.status}). Questa funzione è disponibile solo col dev server locale. Risposta: ${l}…`)}const r=await t.json();if(!t.ok)throw new Error(r.error||"Claude CLI error");return r}function Em(e){const t=Object.values(e);return t.length>0&&t.some(n=>!n.startsWith("Errore"))}async function zm(e){const t=`Cerca e sintetizza le idee, posizioni e contenuti più recenti (ultime 2-3 settimane) di ${e.name} (${e.handle}).

Includi:
- I temi principali su cui si sta concentrando
- Idee specifiche, argomenti o posizioni notevoli
- Eventuali cambi di direzione o evoluzioni rispetto al passato
- Link o riferimenti a post/articoli/interviste recenti se disponibili

Stile: sintetico, denso, orientato al contenuto. Non presentarti, vai diretto alle idee. Massimo 300 parole. In italiano.`;return(await fo(t)).text||"Nessun contenuto estratto."}async function mu(e){const n=`Hai appena letto i segnali recenti di questi pensatori di riferimento nel tech/AI/filosofia:

${e.map(l=>`### ${l.name} (${l.domain})
${l.content}`).join(`

---

`)}

Ora produci una cross-synthesis: quali sono i temi emergenti trasversali? Dove convergono, dove divergono? Quale "corrente di pensiero" o tensione di fondo emerge da questo insieme di voci in questo momento storico?

Regole:
- Quando citi un'idea riconducibile a un pensatore specifico, includi il link alla fonte originale (se presente nella scheda sopra) usando il formato markdown [testo](url).
- Quando menzioni il nome di un pensatore, scrivilo esattamente come appare sopra (es. "Andrej Karpathy", non "Karpathy").
- Stile: essay denso, narrativo. Non lista. Ragionamento critico, non descrizione. Massimo 350 parole. In italiano.`;return(await fo(n)).text||"Nessun contenuto estratto."}async function Pm(e,t,n){const r=e.map(f=>`### ${f.name}
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

Se un progetto non è citato da nessuno, usa un array vuoto per citedBy.`,a=((await fo(o)).text||"").trim().match(/\[[\s\S]*\]/);if(!a)throw new Error("Formato risposta non valido");return JSON.parse(a[0])}async function _m(e,t){const n=`Confronta queste due cross-synthesis prodotte in momenti diversi e analizza cosa è cambiato a livello di CONCETTI e TEMI, non di parole.

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
- I testi dei valori in italiano, ma le chiavi in inglese come da schema.`,o=((await fo(n)).text||"").trim().match(/\{[\s\S]*\}/);if(!o)throw new Error("Formato risposta non valido");return JSON.parse(o[0])}let hu=!1;async function Mm(){if(hu)return;if(!(await fetch(`${Td}/login`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:"signal@stelle.local",password:"signal-brief-2026"})})).ok)throw new Error("Login Summon Stars fallito");hu=!0}async function Im(e,t,n){await Mm();const r=t?`Contesto (cross-synthesis attuale):
${t}

Domanda:
${e}`:e,l=await fetch(`${Td}/council/stream`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({question:r,board_id:"7231a446-f0fe-4521-b212-bf6d588f94ed",stop_mode:"cost",budget_usd:.5,user_language:"it",max_words:150,rounds:1,include_moderation:!0})});if(!l.ok){const a=await l.json().catch(()=>({}));throw new Error(a.detail||a.error||"Errore council stream")}const o=l.body.getReader(),i=new TextDecoder;let s="";for(;;){const{done:a,value:f}=await o.read();if(a)break;s+=i.decode(f,{stream:!0});const v=s.split(`
`);s=v.pop()||"";let y="";for(const h of v)if(h.startsWith("event: "))y=h.slice(7).trim();else if(h.startsWith("data: ")&&y){try{const k=JSON.parse(h.slice(6));n(y,k)}catch{}y=""}}}function on(e){if(!e)return"";let t=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t=t.replace(/^###\s+(.+)$/gm,"<strong>$1</strong>"),t=t.replace(/^- (.+)$/gm,"• $1"),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*([^*]+)\*/g,"<em>$1</em>"),t}function Tm(e,t){const n=new Set(e.split(/\s+/)),r=new Set(t.split(/\s+/));return[...n].filter(o=>r.has(o)).length/Math.max(n.size,r.size)}function Lm(e,t){if(!e)return"";if(!t)return on(e);const n=t.split(`
`).map(r=>r.trim().toLowerCase()).filter(r=>r.length>0);return e.split(`
`).map(r=>{const l=r.trim();if(!l)return"";const o=l.toLowerCase(),i=n.some(a=>Tm(o,a)>.7),s=on(r);return i?s:`<span class="diff-new">${s}</span>`}).join(`
`)}function Dm(e,t){if(!e||!t||t.length===0)return e||"";const n=[...t].sort((r,l)=>l.name.length-r.name.length);for(const r of n){const l=r.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(?!<a[^>]*>)(${l})(?![^<]*<\\/a>)`,"g");e=e.replace(o,`<a href="#thinker-${r.id}" class="thinker-link">$1</a>`)}return e}const gu="​‌",yu="‌​";function Rm(e,t){if(!e&&!t)return[];if(!e)return[{type:"added",text:t}];if(!t)return[{type:"removed",text:e}];const n=e.split(/(\s+)/),r=t.split(/(\s+)/),l=n.length,o=r.length,i=Array.from({length:l+1},()=>new Uint16Array(o+1));for(let y=1;y<=l;y++)for(let h=1;h<=o;h++)i[y][h]=n[y-1]===r[h-1]?i[y-1][h-1]+1:Math.max(i[y-1][h],i[y][h-1]);const s=[];let a=l,f=o;for(;a>0||f>0;)a>0&&f>0&&n[a-1]===r[f-1]?(s.unshift({type:"equal",text:n[a-1]}),a--,f--):f>0&&(a===0||i[a][f-1]>=i[a-1][f])?(s.unshift({type:"added",text:r[f-1]}),f--):(s.unshift({type:"removed",text:n[a-1]}),a--);const v=[];for(const y of s)v.length>0&&v[v.length-1].type===y.type?v[v.length-1].text+=y.text:v.push({...y});return v}function vu(e,t){const n=t==="left"?"added":"removed",r=t==="left"?"removed":"added";let l="";for(const s of e)s.type!==n&&(s.type===r?l+=gu+s.text+yu:l+=s.text);let o=on(l);const i=t==="left"?"diff-word-removed":"diff-word-added";return o=o.replace(new RegExp(`${gu}(.*?)${yu}`,"gs"),`<span class="${i}">$1</span>`),o}function Om(e){return e?e.replace(/^###\s+/gm,"").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^- /gm,"").replace(/^---+$/gm,"").replace(/^##\s+/gm,"").replace(/\n{3,}/g,`

`).trim():""}function $m(){const[e,t]=P.useState(!1),[n,r]=P.useState(-1),[l,o]=P.useState([]),i=P.useRef([]),s=P.useRef(null),a=P.useCallback(()=>{const p=speechSynthesis.getVoices().filter(c=>c.lang.startsWith("it"));return p.find(c=>c.name.includes("Emma"))||p.find(c=>c.name.includes("Enhanced")||c.name.includes("Premium"))||p[0]||null},[]),f=P.useCallback(()=>{speechSynthesis.cancel(),i.current=[],t(!1),r(-1)},[]),v=P.useCallback((F,p=0)=>{speechSynthesis.cancel(),i.current=F.slice(p),o(F);const c=()=>{if(i.current.length===0){t(!1),r(-1);return}const m=i.current.shift(),x=F.indexOf(m);r(x);const E=`${m.title}. ${Om(m.text)}`,S=new SpeechSynthesisUtterance(E);S.lang="it-IT",S.rate=1;const M=a();M&&(S.voice=M),S.onend=c,S.onerror=c,s.current=S,speechSynthesis.speak(S)};t(!0),c()},[a]),y=P.useCallback(()=>{speechSynthesis.pause(),t(!1)},[]),h=P.useCallback(()=>{speechSynthesis.resume(),t(!0)},[]),k=P.useCallback(()=>{speechSynthesis.cancel()},[]),j=P.useCallback((F,p,c,m)=>{const x=[];F&&x.push({title:"Cross-Synthesis",text:F,type:"synthesis"});for(const E of c)p[E.id]&&!p[E.id].startsWith("Errore")&&x.push({title:E.name,text:p[E.id],type:"thinker"});if(m&&m.length>0){const E=m.map(S=>{var M;return`${S.name}: ${S.description}${(M=S.citedBy)!=null&&M.length?`. Citato da ${S.citedBy.join(", ")}`:""}`}).join(`.

`);x.push({title:"Progetti Emergenti",text:E,type:"projects"})}v(x)},[v]),z=P.useCallback((F,p)=>{v([{title:F,text:p,type:"single"}])},[v]);return P.useEffect(()=>()=>speechSynthesis.cancel(),[]),{isPlaying:e,currentChapter:n,chapters:l,playAll:j,playSingle:z,pause:y,resume:h,stop:f,skipForward:k}}const Am=[{id:1,name:"Andrej Karpathy",handle:"@karpathy",domain:"AI / LLM Internals",active:!0},{id:2,name:"Jack Dorsey",handle:"@jack",domain:"Decentralizzazione / Bitcoin",active:!0},{id:3,name:"Paul Graham",handle:"@paulg",domain:"Startup / Saggi",active:!0},{id:4,name:"Elon Musk",handle:"@elonmusk",domain:"xAI / X / SpaceX / DOGE",active:!0},{id:5,name:"Sam Altman",handle:"@sama",domain:"AI / OpenAI",active:!0},{id:6,name:"Naval Ravikant",handle:"@naval",domain:"Filosofia / Leverage",active:!0},{id:7,name:"Benedict Evans",handle:"@benedictevans",domain:"Tech Analysis",active:!0},{id:8,name:"Balaji Srinivasan",handle:"@balajis",domain:"Network State / Crypto",active:!0},{id:9,name:"Geoffrey Hinton",handle:"@geoffreyhinton",domain:"AI Safety / Deep Learning",active:!0},{id:10,name:"Marc Andreessen",handle:"@pmarca",domain:"VC / Techno-Ottimismo",active:!0},{id:11,name:"Yann LeCun",handle:"@ylecun",domain:"AI / Meta",active:!0},{id:12,name:"Demis Hassabis",handle:"@demishassabis",domain:"DeepMind / AGI",active:!0},{id:13,name:"Ilya Sutskever",handle:"@ilyasut",domain:"SSI / AI Safety radicale",active:!0},{id:14,name:"Jensen Huang",handle:"@jensenhuang",domain:"NVIDIA / AI Infrastructure",active:!0},{id:15,name:"Vitalik Buterin",handle:"@vitalikbuterin",domain:"Ethereum / Decentralizzazione",active:!0},{id:16,name:"Patrick Collison",handle:"@patrickc",domain:"Stripe / Progresso scientifico",active:!0},{id:17,name:"John Carmack",handle:"@ID_AA_Carmack",domain:"Ingegneria pura / AI",active:!0},{id:18,name:"Simon Willison",handle:"@simonw",domain:"LLM Tools / Pratical AI",active:!0},{id:19,name:"DHH",handle:"@dhh",domain:"Rails / Anti-AI Hype",active:!0},{id:20,name:"François Chollet",handle:"@fchollet",domain:"ARC / Critica LLM",active:!0},{id:21,name:"Nat Friedman",handle:"@natfriedman",domain:"AI Investor / ex GitHub CEO",active:!0}],Fm=["trendshift.io","GitHub Trending","Hacker News"],bm=`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,300&family=Inter:wght@300;400;500&display=swap');
`,Bm=`
  ${bm}

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
`;function Um(){const[e,t]=P.useState(Am),[n,r]=P.useState({}),[l,o]=P.useState({}),[i,s]=P.useState({}),[a,f]=P.useState(null),[v,y]=P.useState("idle"),[h,k]=P.useState(!1),[j,z]=P.useState(""),[F,p]=P.useState(""),[c,m]=P.useState(null),[x,E]=P.useState(null),[S,M]=P.useState(8),[R,te]=P.useState(!1),[T,ge]=P.useState([]),[_t,Mt]=P.useState(null),[ze,gt]=P.useState("signals"),[be,Gn]=P.useState({leftIdx:1,rightIdx:0}),[_,$]=P.useState("emerging"),[D,Z]=P.useState([]),[Q,Zt]=P.useState([]),[Ge,gn]=P.useState(null),[tt,It]=P.useState("idle"),[Tt,po]=P.useState(Fm),[Bs,Us]=P.useState(""),[Ld,mo]=P.useState(!1),[Hs,Dd]=P.useState(!1),[yn,Rd]=P.useState(""),[br,Vs]=P.useState([]),[Br,ho]=P.useState("idle"),[Ur,go]=P.useState(null),[Ws,Qs]=P.useState(null),[Hm,Vm]=P.useState("idle"),[Ks,Od]=P.useState({scan:"",launchd:""}),[Hr,yo]=P.useState("idle"),vo=P.useRef(null),de=$m(),[$d,Ad]=P.useState(()=>new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})),fe=e.filter(d=>d.active),vn=Object.values(i).filter(d=>d==="done").length,xo=fe.length;P.useEffect(()=>{(async()=>{try{const d=await window.storage.get("signal-state");if(d){const g=JSON.parse(d.value);if(g.results){r(g.results);const N={};for(const L of Object.keys(g.results))N[L]=g.results[L].startsWith("Errore")?"error":"done";s(N)}if(g.prevResults&&o(g.prevResults),g.lastScanTime&&m(g.lastScanTime),g.intervalHours&&M(g.intervalHours),g.synthesis&&(f(g.synthesis),y("done")),g.synthesisHistory){const N=g.synthesisHistory.map((L,V,G)=>{if(L.conceptDiff&&!L.conceptDiffs){const ke=G[V+1],{conceptDiff:nt,...Be}=L;return ke?{...Be,conceptDiffs:{[ke.id]:nt}}:Be}return L});ge(N)}g.projects&&Z(g.projects),g.prevProjects&&Zt(g.prevProjects),g.projectsTime&&gn(g.projectsTime),g.projectSources&&po(g.projectSources)}}catch{}})()},[]);const we=P.useCallback(async(d={})=>{try{const g=await window.storage.get("signal-state"),L={...g?JSON.parse(g.value):{},...d};await window.storage.set("signal-state",JSON.stringify(L))}catch{}},[]);P.useCallback(async(d={})=>{await we({results:n,prevResults:l,lastScanTime:c,intervalHours:S,synthesis:a,synthesisHistory:T,projects:D,prevProjects:Q,projectsTime:Ge,projectSources:Tt,...d})},[n,l,c,S,a,T,D,Q,Ge,Tt,we]);const Vr=P.useCallback((d,g)=>g.length>0&&g[0].text===d?g:[{id:`synth_${Date.now()}`,timestamp:Date.now(),text:d,thinkers:fe.map(L=>L.name),conceptDiffs:{}},...g].slice(0,50),[fe]),Wr=P.useCallback(async d=>{var L;if(d.length<2)return d;const g=d[0],N=d[1];if((L=g.conceptDiffs)!=null&&L[N.id])return d;try{const V=await _m(N.text,g.text),G=[...d];return G[0]={...G[0],conceptDiffs:{...G[0].conceptDiffs||{},[N.id]:V}},ge(G),await we({synthesisHistory:G}),G}catch(V){return console.error("[concept-diff auto]",V),d}},[we]),Gs=P.useCallback(async(d,g)=>{try{await navigator.clipboard.writeText(d)}catch{const N=document.createElement("textarea");N.value=d,document.body.appendChild(N),N.select(),document.execCommand("copy"),document.body.removeChild(N)}Mt(g),setTimeout(()=>Mt(null),2e3)},[]);P.useCallback(async d=>{const g=T.filter(N=>N.id!==d);ge(g),await we({synthesisHistory:g})},[T,we]),P.useEffect(()=>{const d=()=>{if(!c){E(null);return}const L=c+S*3600*1e3-Date.now();if(L<=0){E("ora");return}const V=Math.floor(L/36e5),G=Math.floor(L%36e5/6e4),ke=Math.floor(L%6e4/1e3);E(`${V}h ${G}m ${ke}s`)};d();const g=setInterval(d,1e3);return()=>clearInterval(g)},[c,S]);const wo=P.useRef(null);P.useEffect(()=>{const d=setInterval(()=>{const g=new Date,N=g.getHours();if(N!==5&&N!==17||h||!wo.current)return;const L=`${g.toDateString()}-${N}`;(c?(()=>{const G=new Date(c);return`${G.toDateString()}-${G.getHours()}`})():null)!==L&&wo.current(!0)},6e4);return()=>clearInterval(d)},[h,c]);const ko=P.useCallback(async()=>{yo("loading");const d="/signal-brief/";try{const[g,N]=await Promise.all([fetch(`${d}logs/auto-scan.log`,{cache:"no-cache"}),fetch(`${d}logs/launchd-out.log`,{cache:"no-cache"})]),L=g.ok?await g.text():"",V=N.ok?await N.text():"";Od({scan:L,launchd:V}),yo("done")}catch(g){console.error("[logs]",g),yo("error")}},[]);P.useEffect(()=>{ze==="log"&&ko()},[ze,ko]);const Ys=P.useCallback(d=>{if(!d)return;const g=d.trim().toLowerCase();if(!g)return;const N=e.find(L=>{const V=L.name.toLowerCase();return V===g||V.includes(g)||g.includes(V)});N&&(gt("signals"),te(!1),setTimeout(()=>{const L=document.getElementById(`thinker-${N.id}`);L&&(L.scrollIntoView({behavior:"smooth",block:"start"}),L.classList.add("thinker-card-highlight"),setTimeout(()=>L.classList.remove("thinker-card-highlight"),1800))},60))},[e]),Fd=(d,g)=>{if(!d||!g)return 0;const N=new Set(d.toLowerCase().split(/\s+/)),L=new Set(g.toLowerCase().split(/\s+/));return[...N].filter(G=>L.has(G)).length/Math.max(N.size,L.size)},Xs=d=>!l[d]||!n[d]?!1:Fd(l[d],n[d])<.72;fe.filter(d=>i[d.id]==="done"&&Xs(d.id)).length;const Js=e.length>0&&e.every(d=>d.active),bd=()=>{h||t(d=>d.map(g=>({...g,active:!Js})))},So=()=>{j.trim()&&(t(d=>[...d,{id:Date.now(),name:j.trim(),handle:F.trim()||"@?",domain:"Custom",active:!0}]),z(""),p(""))},qs=()=>{const d=Bs.trim();if(!d||Tt.includes(d))return;const g=[...Tt,d];po(g),Us(""),we({projectSources:g})},Bd=d=>{const g=Tt.filter(N=>N!==d);po(g),we({projectSources:g})},[Ud,Zs]=P.useState(null),Qr=P.useCallback(async(d,g)=>{It("loading"),Zs(null);try{const N=await Pm(g,d,Tt);Zt(D),Z(N);const L=Date.now();gn(L),It("done"),await we({projects:N,prevProjects:D,projectsTime:L})}catch(N){console.error("[Signal.Brief] fetchProjects error:",N),It("error"),Zs(N.message)}},[Tt,we,D]),ea=2*3600*1e3,Kr=P.useCallback(async(d=!1)=>{if(fe.length===0)return;if(!d&&c&&Date.now()-c<ea){const B=Math.round((Date.now()-c)/6e4);alert(`Ultimo scan ${B} minuti fa. Cache valida per ancora ${Math.round((ea-(Date.now()-c))/6e4)} min.
Usa "Forza scan" per ignorare la cache.`);return}gt("signals"),k(!0),f(null),y("idle"),o(B=>({...B,...n}));const g={...n},N={};fe.forEach(B=>{N[B.id]="loading"}),s(N),r({});const L={},V=2,G=B=>new Promise(pe=>setTimeout(pe,B));for(let B=0;B<fe.length;B+=V){const pe=fe.slice(B,B+V);await Promise.all(pe.map(async Pe=>{try{const _e=await zm(Pe);L[Pe.id]=_e,r(rt=>({...rt,[Pe.id]:_e})),s(rt=>({...rt,[Pe.id]:"done"}))}catch(_e){L[Pe.id]=`Errore: ${_e.message}`,r(rt=>({...rt,[Pe.id]:`Errore: ${_e.message}`})),s(rt=>({...rt,[Pe.id]:"error"}))}})),B+V<fe.length&&await G(1200)}const ke=Em(L),nt=ke?Date.now():c;ke&&(m(nt),Ad(new Date().toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}))),await we({results:L,prevResults:g,lastScanTime:nt,intervalHours:S,synthesis:a,synthesisHistory:T}),k(!1);const Be=fe.filter(B=>L[B.id]&&!L[B.id].startsWith("Errore")).map(B=>({name:B.name,domain:B.domain,content:L[B.id]}));if(Be.length>=2){y("loading");try{const B=await mu(Be);f(B),y("done");const pe=Vr(B,T);ge(pe),await we({results:L,prevResults:g,lastScanTime:nt,intervalHours:S,synthesis:B,synthesisHistory:pe}),Wr(pe),Qr(B,Be)}catch{y("error")}}},[fe,n,S,we,a,T,Vr,c,Qr,Wr]);P.useEffect(()=>{wo.current=Kr},[Kr]);const Hd=P.useCallback(async()=>{const d=fe.filter(g=>i[g.id]==="done").map(g=>({name:g.name,domain:g.domain,content:n[g.id]}));if(!(d.length<2)){y("loading");try{const g=await mu(d);f(g),y("done");const N=Vr(g,T);ge(N),await we({synthesis:g,synthesisHistory:N}),Wr(N),Qr(g,d)}catch(g){f(`Errore nella sintesi: ${g.message}`),y("error")}}},[fe,i,n,we,T,Vr,Qr,Wr]),ta=P.useCallback(async()=>{if(yn.trim()){Vs([]),go(null),Qs(null),ho("loading");try{await Im(yn,a,(d,g)=>{if(d==="session_started"&&g.session_id&&Qs(g.session_id),d==="sage_speaks"&&g.content&&Vs(N=>[...N,{name:g.persona_name,icon:g.persona_icon,color:g.persona_color,content:g.content}]),d==="moderator_synthesis"&&g.content&&go(g.content),d==="moderator"){const N=g.content||g.decision||g.synthesis||"";N&&go(N)}}),ho("done")}catch(d){console.error("[council]",d),ho("error")}}},[yn,a]),Vd=vn>=2&&!h&&v!=="loading",na=Object.keys(n).length>0,No="Disponibile solo in locale (richiede Claude CLI)",Wd=fe.filter(d=>i[d.id]?R?i[d.id]==="done"&&Xs(d.id):!0:!1);return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:Bm}),u.jsxs("div",{className:"dashboard",children:[u.jsx("div",{className:"scanline"}),u.jsxs("header",{className:"header",children:[u.jsxs("div",{className:"header-top",children:[u.jsxs("div",{className:"header-left",children:[u.jsxs("div",{className:"logo",style:{cursor:"pointer"},onClick:()=>mo(!0),children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"tagline",children:"Intelligence Dashboard · AI-Powered"})]}),u.jsxs("div",{className:"header-right",children:[c&&u.jsxs("span",{className:"timestamp",children:["ultimo: ",$d]}),u.jsx("button",{className:"btn btn-synthesis btn-small",onClick:Hd,disabled:!Vd||!0,title:No,children:"◈ Synth"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{if(!vo.current){const g=new Audio(`/signal-brief/podcast/episodes/${new Date().toISOString().slice(0,10)}.mp3`);g.onerror=()=>{g.src="/signal-brief/podcast/episodes/2026-04-12.mp3",g.play()},vo.current=g}const d=vo.current;d.paused?d.play():d.pause()},title:"Ascolta l'ultimo episodio",children:"🎙 Podcast"}),u.jsx("a",{className:"btn btn-ghost btn-small",href:"/signal-brief/podcast/",title:"Archivio puntate con testo, sintesi, comparazione e fonti",style:{textDecoration:"none",display:"inline-flex",alignItems:"center"},children:"☰ Archivio"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Kr(!0),disabled:h||fe.length===0||!0,title:No,children:"↺ Forza"}),u.jsx("button",{className:"btn btn-primary",onClick:()=>Kr(!1),disabled:h||fe.length===0||!0,title:No,children:h?`Scanning ${vn}/${xo}…`:"▶ Scan"})]})]}),u.jsxs("nav",{className:"tab-bar",children:[u.jsxs("button",{className:`tab-btn ${ze==="signals"?"active":""}`,onClick:()=>gt("signals"),children:["Segnali",vn>0&&u.jsx("span",{className:"tab-badge",children:vn})]}),u.jsxs("button",{className:`tab-btn ${ze==="projects"?"active":""}`,onClick:()=>gt("projects"),children:["Progetti",D.length>0&&u.jsx("span",{className:"tab-badge",children:D.length})]}),u.jsxs("button",{className:`tab-btn ${ze==="history"?"active":""}`,onClick:()=>gt("history"),children:["Cronologia",T.length>0&&u.jsx("span",{className:"tab-badge",children:T.length})]}),u.jsx("button",{className:`tab-btn ${ze==="log"?"active":""}`,onClick:()=>gt("log"),children:"▤ Log"}),u.jsx("button",{className:`tab-btn ${ze==="config"?"active":""}`,onClick:()=>gt("config"),children:"⚙ Configurazione"})]})]}),u.jsxs("div",{className:"tab-content",children:[ze==="signals"&&u.jsxs(u.Fragment,{children:[h&&u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${xo>0?vn/xo*100:0}%`}})}),(a||v==="loading")&&u.jsxs("div",{className:"synthesis-panel",children:[u.jsxs("div",{className:"synthesis-header",children:[u.jsx("span",{className:"synthesis-label",children:"◈ Cross-Synthesis"}),u.jsx("span",{className:"synthesis-title",children:v==="loading"?"Elaborazione…":"Temi emergenti trasversali"}),v==="done"&&T.length>0&&u.jsx("span",{className:"timestamp",children:new Date(T[0].timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})}),v==="done"&&u.jsxs("div",{className:"synthesis-actions",children:[u.jsx("button",{className:"btn-listen",onClick:()=>de.playSingle("Cross-Synthesis",a),title:"Ascolta",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Dd(d=>!d),title:"Chiedi ai thinkers",style:Hs?{background:"#ede9fe",color:"#7c3aed",borderColor:"#d8b4fe"}:{},children:"📡 Chiedi"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>Gs(a,"synth"),children:_t==="synth"?"Copiato ✓":"Copia ❐"})]})]}),v==="loading"?u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Analisi in corso…"]}):u.jsx("div",{className:"synthesis-body",dangerouslySetInnerHTML:{__html:Dm(T.length>1?Lm(a,T[1].text):on(a),fe)}}),Hs&&v==="done"&&u.jsxs("div",{className:"council-panel",children:[u.jsxs("div",{className:"council-header",children:[Ws?u.jsx("a",{className:"council-label",href:`https://stelle-972218119922.europe-west1.run.app/?context=session:${Ws}`,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",cursor:"pointer"},children:"📡 Assemblea Signal-Brief ↗"}):u.jsx("span",{className:"council-label",children:"📡 Assemblea Signal-Brief"}),u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:10,color:"#9ca3af"},children:"21 thinker · Summon Stars"})]}),u.jsxs("div",{className:"council-input-row",children:[u.jsx("input",{className:"council-input",placeholder:"Fai una domanda ai thinkers...",value:yn,onChange:d=>Rd(d.target.value),onKeyDown:d=>d.key==="Enter"&&ta(),disabled:Br==="loading"}),u.jsx("button",{className:"btn btn-primary btn-small",onClick:ta,disabled:Br==="loading"||!yn.trim(),children:Br==="loading"?"In deliberazione…":"Chiedi"})]}),br.length>0&&u.jsx("div",{style:{maxHeight:400,overflowY:"auto"},children:br.map((d,g)=>u.jsxs("div",{className:"council-msg",children:[u.jsxs("div",{className:"council-msg-name",style:{color:d.color},children:[d.icon," ",d.name]}),u.jsx("div",{children:d.content})]},g))}),Ur&&u.jsxs("div",{className:"council-synthesis",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsx("div",{className:"council-synthesis-label",children:"Sintesi del moderatore"}),u.jsxs("div",{style:{display:"flex",gap:4},children:[u.jsx("button",{className:"btn-listen",onClick:()=>{const d=br.map(g=>`${g.name}: ${g.content}`).join(`

`)+`

Sintesi: `+Ur;de.playSingle("Deliberazione",d)},title:"Ascolta deliberazione",children:"🔊"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:()=>{const d=`Domanda: ${yn}

`+br.map(g=>`${g.icon} ${g.name}:
${g.content}`).join(`

`)+`

--- Sintesi del moderatore ---
${Ur}`;Gs(d,"council")},children:_t==="council"?"Copiato ✓":"Copia ❐"})]})]}),u.jsx("div",{dangerouslySetInnerHTML:{__html:on(Ur)}})]}),Br==="error"&&u.jsx("div",{className:"card-error",children:"Errore nella deliberazione. Riprova."})]})]}),na&&u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Segnali · ",vn," acquisiti"]})}),!na&&!h?u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◉"}),u.jsx("div",{className:"empty-title",children:"Nessun segnale acquisito"}),u.jsxs("div",{className:"empty-sub",children:["Configura i thinker nel tab ",u.jsx("strong",{children:"Configurazione"})," e premi ",u.jsx("strong",{children:"▶ Scan"}),".",u.jsx("br",{}),"I risultati vengono salvati tra sessioni."]})]}):u.jsx("div",{className:"cards-grid",children:Wd.map(d=>{const g=i[d.id];return u.jsxs("div",{id:`thinker-${d.id}`,className:`card ${g}`,children:[u.jsxs("div",{className:"card-header",children:[u.jsxs("div",{className:"card-identity",children:[u.jsxs("div",{className:"card-name",children:[d.name,u.jsx("a",{className:"card-handle",href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",children:d.handle})]}),u.jsx("div",{className:"card-domain",children:d.domain})]}),g==="done"&&u.jsx("button",{className:"btn-listen",onClick:()=>de.playSingle(d.name,n[d.id]),title:"Ascolta",children:"🔊"}),g==="loading"&&u.jsx("span",{className:"card-status-pill pill-loading",children:"Scanning"}),g==="done"&&u.jsx("span",{className:"card-status-pill pill-done",children:"✓ Done"}),g==="error"&&u.jsx("span",{className:"card-status-pill pill-error",children:"Error"})]}),u.jsxs("div",{className:"card-body",children:[g==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca in corso…"]}),g==="done"&&u.jsx("div",{className:"card-content",dangerouslySetInnerHTML:{__html:on(n[d.id])}}),g==="error"&&u.jsx("div",{className:"card-error",children:n[d.id]})]})]},d.id)})})]}),ze==="projects"&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"section-header",children:u.jsxs("span",{className:"section-title",children:["Progetti emergenti",D.length>0&&` · ${D.length} trovati`]})}),tt==="loading"&&u.jsxs("div",{className:"card-loading-state",children:[u.jsx("div",{className:"spinner"}),"Ricerca progetti in corso…"]}),tt==="error"&&u.jsxs("div",{className:"card-error",children:["Errore nella ricerca progetti: ",Ud||"errore sconosciuto"]}),D.length===0&&tt!=="loading"&&u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-icon",children:"◈"}),u.jsx("div",{className:"empty-title",children:"Nessun progetto trovato"}),u.jsxs("div",{className:"empty-sub",children:["I progetti vengono cercati automaticamente dopo ogni synthesis.",u.jsx("br",{}),"Avvia uno scan per iniziare."]})]}),D.length>0&&u.jsxs("div",{className:"quadrant-container",children:[u.jsxs("div",{className:"quadrant-title",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"Signal Quadrant · Maturità vs Momentum"}),Ge&&u.jsx("span",{style:{fontWeight:400,color:"#9ca3af"},children:new Date(Ge).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})})]}),u.jsxs("svg",{className:"quadrant-svg",viewBox:"0 0 500 400",children:[u.jsx("rect",{x:"50",y:"10",width:"210",height:"180",fill:"#fefce8",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"10",width:"210",height:"180",fill:"#f0fdf4",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"50",y:"190",width:"210",height:"180",fill:"#f9fafb",rx:"2",opacity:"0.5"}),u.jsx("rect",{x:"260",y:"190",width:"210",height:"180",fill:"#eff6ff",rx:"2",opacity:"0.5"}),u.jsx("text",{x:"155",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Rising Star"}),u.jsx("text",{x:"365",y:"36",textAnchor:"middle",className:"quadrant-label",children:"Leader"}),u.jsx("text",{x:"155",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Emerging"}),u.jsx("text",{x:"365",y:"360",textAnchor:"middle",className:"quadrant-label",children:"Stable"}),u.jsx("line",{x1:"50",y1:"190",x2:"470",y2:"190",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("line",{x1:"260",y1:"10",x2:"260",y2:"370",stroke:"#e5e7eb",strokeWidth:"1"}),u.jsx("text",{x:"260",y:"395",textAnchor:"middle",className:"quadrant-axis-label",children:"MATURITÀ →"}),u.jsx("text",{x:"16",y:"190",textAnchor:"middle",className:"quadrant-axis-label",transform:"rotate(-90, 16, 190)",children:"MOMENTUM →"}),D.some(d=>d.maturity==null)&&u.jsx("text",{x:"260",y:"205",textAnchor:"middle",className:"quadrant-axis-label",style:{fontSize:"9px",fill:"#d97706"},children:"Punteggi mancanti — esegui un nuovo scan per aggiornare"}),Q.length>0&&u.jsxs(u.Fragment,{children:[u.jsx("circle",{cx:"400",cy:"392",r:"4",fill:"#dc2626"}),u.jsx("text",{x:"408",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"NUOVO"}),u.jsx("circle",{cx:"440",cy:"392",r:"4",fill:"#2563eb"}),u.jsx("text",{x:"448",y:"395",className:"quadrant-axis-label",style:{fontSize:"7px"},children:"CONFERMATO"})]}),D.map((d,g)=>{const N=d.maturity!=null&&d.momentum!=null,L=Math.ceil(Math.sqrt(D.length)),V=Math.floor(g/L),G=g%L,ke=N?d.maturity:2+G/Math.max(L-1,1)*7,nt=N?d.momentum:8-V/Math.max(Math.ceil(D.length/L)-1,1)*7,Be=50+(ke-1)/9*420,B=370-(nt-1)/9*360,pe=Q.length>0&&!Q.some(_e=>_e.name===d.name),Pe=pe?"#dc2626":"#2563eb";return u.jsxs("g",{children:[u.jsx("circle",{className:"quadrant-dot",cx:Be,cy:B,r:pe?6:5,fill:Pe,opacity:"0.85",stroke:pe?"#fca5a5":"none",strokeWidth:pe?2:0,onClick:()=>window.open(d.url,"_blank")}),u.jsx("text",{className:"quadrant-dot-label",x:Be+9,y:B+3,style:{fontSize:d.name.length>18?"8px":"9px",fill:pe?"#dc2626":"#374151",fontWeight:pe?600:400},children:d.name.length>22?d.name.slice(0,20)+"…":d.name})]},g)})]})]}),D.length>0&&u.jsx("div",{className:"projects-grid",children:D.map((d,g)=>u.jsxs("div",{className:"project-card",style:Q.length>0&&!Q.some(N=>N.name===d.name)?{borderColor:"#fca5a5"}:{},children:[u.jsxs("div",{className:"project-header",children:[u.jsxs("div",{className:"project-name",style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx("a",{href:d.url,target:"_blank",rel:"noopener noreferrer",children:d.name}),Q.length>0&&!Q.some(N=>N.name===d.name)&&u.jsx("span",{style:{fontFamily:"IBM Plex Mono,monospace",fontSize:8,background:"#fef2f2",color:"#dc2626",border:"1px solid #fca5a5",borderRadius:10,padding:"1px 6px",letterSpacing:"0.04em",fontWeight:500},children:"NUOVO"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.source&&u.jsx("span",{className:"project-source",children:d.source}),d.maturity&&d.momentum&&u.jsxs("span",{className:"project-source",children:["M:",d.maturity," · P:",d.momentum]})]})]}),u.jsx("div",{className:"project-desc",children:d.description}),u.jsxs("div",{className:"project-footer",children:[d.citedBy&&d.citedBy.length>0&&u.jsxs("span",{className:"project-cited",children:["Citato da: ",d.citedBy.join(", ")]}),d.themes&&d.themes.length>0&&u.jsx("div",{className:"project-themes",children:d.themes.map((N,L)=>u.jsx("span",{className:"project-theme",children:N},L))})]})]},g))})]}),ze==="history"&&u.jsx(u.Fragment,{children:T.length<2?u.jsxs("div",{className:"history-empty",children:[T.length===0?"Nessuna sintesi in archivio.":"Serve almeno una versione precedente per confrontare.",T.length===1&&u.jsxs("div",{className:"diff-panel",style:{marginTop:20,textAlign:"left"},children:[u.jsx("div",{className:"diff-panel-date",children:new Date(T[0].timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:on(T[0].text)}})]})]}):u.jsxs(u.Fragment,{children:[(()=>{const d=Date.now(),g=864e5,N=d-7*g,L=d-21*g,V=T.filter(Y=>Y.timestamp>=N),G=T.filter(Y=>Y.timestamp>=L&&Y.timestamp<N),ke={};for(const Y of G){const Se=new Date(Y.timestamp),Me=new Date(Se);Me.setDate(Me.getDate()-Me.getDay());const ae=Me.toISOString().slice(0,10);(!ke[ae]||Y.timestamp>ke[ae].timestamp)&&(ke[ae]=Y)}const nt=Object.values(ke).sort((Y,Se)=>Se.timestamp-Y.timestamp),Be=T.filter(Y=>Y.timestamp<L),B={};for(const Y of Be){const Se=new Date(Y.timestamp),Me=new Date(Se);Me.setDate(Me.getDate()-Me.getDay());const ae=Me.toISOString().slice(0,10);(!B[ae]||Y.timestamp>B[ae].timestamp)&&(B[ae]=Y)}const pe=Object.values(B).sort((Y,Se)=>Se.timestamp-Y.timestamp),Pe=(Y,Se,Me)=>Y.length===0?null:u.jsx("optgroup",{label:Se,children:Y.map(ae=>{const jo=T.indexOf(ae),Gr=new Date(ae.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"}),Co=Me?`Sett. ${Gr.split(",")[0]} — ${ae.thinkers.slice(0,3).join(", ")}${ae.thinkers.length>3?` +${ae.thinkers.length-3}`:""}`:`${Gr} — ${ae.thinkers.slice(0,3).join(", ")}${ae.thinkers.length>3?` +${ae.thinkers.length-3}`:""}`;return u.jsx("option",{value:jo,children:Co},ae.id)})},Se),_e=T[0],rt=_e?`${new Date(_e.timestamp).toLocaleString("it-IT",{dateStyle:"short",timeStyle:"short"})} — ${_e.thinkers.slice(0,3).join(", ")}${_e.thinkers.length>3?` +${_e.thinkers.length-3}`:""}`:"";return u.jsxs("div",{className:"history-selectors",children:[u.jsxs("select",{className:"history-select",value:be.leftIdx,onChange:Y=>Gn(Se=>({...Se,leftIdx:Number(Y.target.value)})),children:[Pe(V,"Ultimi 7 giorni",!1),Pe(nt,"Ultime 3 settimane",!0),Pe(pe,"Precedenti",!0)]}),u.jsx("span",{className:"history-vs",children:"vs"}),u.jsxs("div",{className:"history-select history-select-locked",title:"La parte destra è sempre l'ultima sintesi disponibile",children:[rt," ",u.jsx("span",{style:{color:"#9ca3af",fontSize:10},children:"(ultimo)"})]})]})})(),(()=>{var ra;const d=T[be.rightIdx],g=T[be.leftIdx];if(!d||!g||be.leftIdx===be.rightIdx)return null;const N=d.timestamp>=g.timestamp?d:g,L=N===d?g:d;N===d?be.rightIdx:be.leftIdx;const V=((ra=N.conceptDiffs)==null?void 0:ra[L.id])||null,G=[{key:"emerging",label:"Emergenti",icon:"🟢",color:"#16a34a"},{key:"tensions",label:"Tensioni",icon:"⚡",color:"#7c3aed"},{key:"evolved",label:"Evoluti",icon:"🟡",color:"#d97706"},{key:"stable",label:"Stabili",icon:"⚪",color:"#6b7280"},{key:"disappeared",label:"Scomparsi",icon:"🔴",color:"#dc2626"}],ke={DHH:["hansson","heinemeier","37signals"]},nt=C=>{if(!C)return null;const O=C.trim().toLowerCase();if(!O)return null;for(const A of e){const H=A.name.toLowerCase();if(H===O||H.includes(O)||O.includes(H))return A;const K=ke[A.name]||[];for(const yt of K)if(O.includes(yt)||yt.includes(O))return A}return null},Be=new Set(["il","la","lo","i","le","gli","un","una","uno","di","a","e","è","ed","in","su","per","con","da","del","della","dei","degli","delle","al","alla","ai","agli","alle","come","che","non","si","ha","hanno","sono","era","erano","essere","suo","sua","loro","ma","anche","più","meno","quando","dove","cui","the","a","an","is","are","of","in","on","for","and","or","to","as","at","by","be","this","that","it","with","from","has","have","was","were","will","not","but","also","more","less","what","when","where"]),B=C=>(C||"").toLowerCase().split(/[^a-zà-ù0-9]+/).filter(O=>O.length>=4&&!Be.has(O)),pe=C=>C.replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^#+\s*/gm,"").replace(/[*_`>]/g,"").replace(/^\s*-\s*/gm,"").replace(/\s+/g," ").trim(),Pe=C=>{const O=C.split(/\s+/);return O.length>40?O.slice(0,40).join(" ")+"...":C},_e=C=>{if(!C)return[];const O=C.search(/\n\s*(?:sources|fonti|references|referenze)\s*:/i),H=(O!==-1?C.slice(0,O):C).split(/\n\n+/).map(vt=>pe(vt)).filter(vt=>vt.length>120),K=vt=>{const Xn=B(vt);if(!Xn.length||!H.length)return"";let Yr="",zo=0;for(const la of H){const Yd=la.toLowerCase();let Po=0;for(const Xd of Xn)Yd.includes(Xd)&&Po++;Po>zo&&(Yr=la,zo=Po)}return zo>0?Yr:""},yt=[],Yn=new Set,Gd=/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;let Eo;for(;(Eo=Gd.exec(C))!==null;){const vt=Eo[2].replace(/[.,;)]+$/,"");if(Yn.has(vt))continue;Yn.add(vt);const Xn=Eo[1].trim(),Yr=Pe(K(Xn));yt.push({url:vt,title:Xn,snippet:Yr})}return yt},rt=C=>{const O=nt(C);return O?_e(n[O.id]||""):[]},Y=(()=>{const C=new Set,O=[];for(const A of e){C.has(A.name)||(C.add(A.name),O.push(A.name));const H=A.name.split(/\s+/);if(H.length>1){const K=H[H.length-1];K.length>=4&&!C.has(K)&&(C.add(K),O.push(K))}}return O.sort((A,H)=>H.length-A.length)})(),Se=Y.length?new RegExp(`\\b(${Y.map(C=>C.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")})\\b`,"g"):null,Me=C=>{if(!C||typeof C!="string"||!Se)return C;const O=[];let A=0,H;for(Se.lastIndex=0;(H=Se.exec(C))!==null;){H.index>A&&O.push(C.slice(A,H.index));const K=H[0];O.push(u.jsx("span",{className:"concept-who-link",onClick:yt=>{yt.stopPropagation(),Ys(K)},children:K},O.length)),A=H.index+K.length}return O.length===0?C:(A<C.length&&O.push(C.slice(A)),O)},ae=(C,O)=>{if(C==null)return null;if(typeof C=="string")return{title:C,detail:"",who:[],sides:[]};if(typeof C!="object")return null;if(O==="evolved"){const A=C.from??C.da??C.before??"",H=C.to??C.a??C.after??"",K=A&&H?`${A} → ${H}`:A||H||C.detail||"";return{title:C.concept||C.title||C.name||"",detail:K,who:C.who||[],sides:[]}}return O==="tensions"?{title:C.axis||C.concept||C.title||"",detail:C.detail||"",who:C.who||[],sides:C.sides||[]}:{title:C.concept||C.title||C.name||"",detail:C.detail||C.description||"",who:C.who||[],sides:[]}},jo=C=>C!=null&&C.length?C.slice(0,4).map((O,A)=>u.jsx("a",{className:"concept-cite",href:O.url,target:"_blank",rel:"noopener noreferrer",title:O.snippet||O.title||O.url,onClick:H=>H.stopPropagation(),children:A+1},A)):null,Gr=C=>C!=null&&C.length?u.jsx("div",{className:"concept-item-who",children:C.map((O,A)=>{const H=rt(O);return u.jsxs("span",{className:"concept-who-item",children:[A>0&&", ",u.jsx("span",{className:"concept-who-link",title:`Vai alla scheda di ${O}`,onClick:K=>{K.stopPropagation(),Ys(O)},children:O}),H.length>0&&u.jsx("sup",{className:"concept-cites",children:jo(H)})]},A)})}):null,Co=(C,O)=>u.jsxs("div",{className:"concept-item-detail",children:["• ",Me(C)]},O),Qd=(C,O)=>{const H=(C[O]||[]).map(K=>ae(K,O)).filter(Boolean);return H.length===0?u.jsx("div",{className:"concept-tab-empty",children:"Nessun elemento in questa categoria."}):H.map((K,yt)=>{var Yn;return u.jsxs("div",{className:`concept-item concept-${O==="tensions"?"tension":O}`,children:[K.title&&u.jsx("div",{className:"concept-item-title",children:Me(K.title)}),K.detail&&u.jsx("div",{className:"concept-item-detail",children:Me(K.detail)}),O==="tensions"&&((Yn=K.sides)==null?void 0:Yn.map(Co)),Gr(K.who)]},yt)})},Kd=C=>{const O=G.find(A=>A.key===_)?_:"emerging";return G.find(A=>A.key===O),u.jsxs("div",{className:"concept-diff",children:[u.jsx("div",{className:"concept-tabs",children:G.map(A=>{const H=(C[A.key]||[]).length,K=A.key===O;return u.jsxs("button",{className:`concept-tab ${K?"active":""}`,onClick:()=>$(A.key),style:K?{color:A.color,borderBottomColor:A.color}:void 0,children:[u.jsxs("span",{children:[A.icon," ",A.label]}),u.jsx("span",{className:"concept-tab-count",children:H})]},A.key)})}),u.jsx("div",{className:"concept-tab-body",children:Qd(C,O)})]})};return V?Kd(V):u.jsxs("div",{className:"concept-diff",style:{textAlign:"center",color:"#9ca3af",fontFamily:"IBM Plex Mono,monospace",fontSize:11,lineHeight:1.7},children:["Concept diff non disponibile per questo confronto.",u.jsx("br",{}),"I diff vengono generati automaticamente dopo ogni scan in locale e poi pubblicati. Prova a confrontare la sintesi più recente con quella immediatamente precedente."]})})(),(()=>{const d=T[be.leftIdx],g=T[be.rightIdx];if(!d||!g)return null;const N=Rm(d.text,g.text);return u.jsxs("div",{className:"diff-columns",children:[u.jsxs("div",{className:"diff-panel diff-panel-left",children:[u.jsx("div",{className:"diff-panel-label",children:"Precedente"}),u.jsx("div",{className:"diff-panel-date",children:new Date(d.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:d.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:vu(N,"left")}})]}),u.jsxs("div",{className:"diff-panel diff-panel-right",children:[u.jsx("div",{className:"diff-panel-label",children:"Attuale"}),u.jsx("div",{className:"diff-panel-date",children:new Date(g.timestamp).toLocaleString("it-IT",{dateStyle:"long",timeStyle:"short"})}),u.jsx("div",{className:"diff-panel-thinkers",children:g.thinkers.join(", ")}),u.jsx("div",{className:"diff-panel-body",dangerouslySetInnerHTML:{__html:vu(N,"right")}})]})]})})()]})}),ze==="log"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"section-title",children:"Attività scripts · scraping + podcast"}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:ko,disabled:Hr==="loading",children:Hr==="loading"?"Aggiorno…":"↻ Aggiorna"})]}),(()=>{const d=N=>{if(!N)return"info";const L=N.toLowerCase();return/\b(error|errore|traceback|abort|fail|timed out|non trovat)/i.test(L)?"error":/\b(warn|attenzione|warning)/i.test(L)?"warn":/^\s*[✓]\s/.test(N)||/\b(ok|done|complete|pushato|ready)\b/i.test(L)?"success":/^\[\d{4}-\d{2}-\d{2}/.test(N)||/^\[podcast\]|^\[scan\]|^\[sidecar\]|^\[synth\]|^\[rss\]|^\[concept-diff\]|^\[save\]|^\[main /.test(N)?"event":"info"},g=N=>{if(!N||!N.trim())return u.jsx("div",{className:"log-empty",children:"Nessun log disponibile."});const L=N.split(`
`);return u.jsx("div",{className:"log-box",children:L.map((V,G)=>u.jsx("span",{className:`log-line log-${d(V)}`,children:V||" "},G))})};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Eventi auto-scan (data/auto-scan.log)"})}),Hr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):g(Ks.scan)]}),u.jsxs("div",{className:"log-pane",children:[u.jsx("div",{className:"log-pane-header",children:u.jsx("span",{children:"Output dettagliato (data/launchd-out.log)"})}),Hr==="error"?u.jsx("div",{className:"log-empty",children:"Errore nel caricamento log."}):g(Ks.launchd)]})]})})()]}),ze==="config"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,padding:"12px 16px",marginBottom:20,fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#92400e",lineHeight:1.6},children:[u.jsx("strong",{children:"Modalità sola lettura."})," Il sito pubblico mostra lo stato generato in locale: scan, synthesis e configurazione sono disponibili solo lanciando Signal Brief dalla macchina di Mike. Puoi comunque leggere tutto il briefing, ascoltare il podcast e interrogare i thinker nell'assemblea."]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsxs("div",{className:"config-label",children:[u.jsxs("span",{children:["Thinker seguiti · ",fe.length," selezionati"]}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:bd,disabled:!0,style:{padding:"2px 8px",fontSize:"9px"},children:Js?"Deseleziona tutti":"Seleziona tutti"})]}),u.jsx("div",{className:"thinker-grid",children:e.map(d=>u.jsxs("div",{className:`thinker-row ${d.active?"active":""}`,onClick:void 0,children:[u.jsx("div",{className:"thinker-check",children:d.active&&u.jsx("svg",{className:"check-icon",viewBox:"0 0 10 8",children:u.jsx("polyline",{points:"1,4 3.5,7 9,1"})})}),u.jsxs("div",{className:"thinker-info",children:[u.jsx("div",{className:"thinker-name",children:d.name}),u.jsxs("div",{className:"thinker-meta",children:[u.jsx("a",{href:`https://x.com/${d.handle.replace("@","")}`,target:"_blank",rel:"noopener noreferrer",onClick:g=>g.stopPropagation(),children:d.handle})," · ",d.domain]})]}),u.jsx("div",{className:`thinker-status ${i[d.id]||""}`})]},d.id))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Nome",value:j,disabled:!0,onChange:d=>z(d.target.value),onKeyDown:d=>d.key==="Enter"&&So(),style:{flex:2}}),u.jsx("input",{className:"input-field",placeholder:"@handle",value:F,disabled:!0,onChange:d=>p(d.target.value),onKeyDown:d=>d.key==="Enter"&&So(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:So,disabled:!0,children:"+ Aggiungi"})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Auto-scan"})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:11,color:"#6b7280"},children:"Intervallo:"}),[4,8,12].map(d=>u.jsxs("button",{className:"btn btn-ghost btn-small",disabled:!0,style:{padding:"4px 12px",fontSize:10,background:S===d?"#eff6ff":"",color:S===d?"#2563eb":"",borderColor:S===d?"#bfdbfe":""},onClick:()=>{M(d),we({intervalHours:d})},children:[d,"h"]},d)),x&&u.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:10,color:"#9ca3af",marginLeft:12},children:["Prossimo: ",x]})]})]}),u.jsxs("div",{className:"config-section",style:{opacity:.6,pointerEvents:"none"},children:[u.jsx("div",{className:"config-label",children:u.jsx("span",{children:"Fonti progetti"})}),u.jsx("div",{className:"source-list",children:Tt.map(d=>u.jsxs("div",{className:"source-row",children:[u.jsx("span",{children:d}),u.jsx("button",{className:"source-delete",onClick:()=>Bd(d),disabled:!0,children:"×"})]},d))}),u.jsxs("div",{className:"add-thinker-row",children:[u.jsx("input",{className:"input-field",placeholder:"Aggiungi fonte (es. producthunt.com)",value:Bs,disabled:!0,onChange:d=>Us(d.target.value),onKeyDown:d=>d.key==="Enter"&&qs(),style:{flex:1}}),u.jsx("button",{className:"btn btn-ghost btn-small",onClick:qs,disabled:!0,children:"+ Aggiungi"})]})]}),!1]})]})]}),(de.isPlaying||de.currentChapter>=0)&&u.jsxs("div",{className:"player-bar",children:[u.jsx("button",{className:"player-btn",onClick:de.isPlaying?de.pause:de.resume,children:de.isPlaying?"⏸":"▶"}),u.jsx("button",{className:"player-btn",onClick:de.skipForward,title:"Prossimo capitolo",children:"⏭"}),u.jsx("div",{className:"player-chapter",children:de.currentChapter>=0&&de.chapters[de.currentChapter]&&u.jsxs(u.Fragment,{children:[u.jsx("strong",{children:de.chapters[de.currentChapter].title})," — ",de.currentChapter+1,"/",de.chapters.length]})}),u.jsx("button",{className:"player-btn",onClick:de.stop,title:"Stop",children:"⏹"})]}),Ld&&u.jsx("div",{className:"about-backdrop",onClick:()=>mo(!1),children:u.jsxs("div",{className:"about-panel",onClick:d=>d.stopPropagation(),children:[u.jsx("img",{src:"/signal-brief/mike-avatar.png",alt:"Mike",style:{width:80,height:80,borderRadius:"50%",marginBottom:16,border:"2px solid #e2ddd6"}}),u.jsxs("div",{className:"about-logo",children:["Signal",u.jsx("span",{children:"."}),"Brief"]}),u.jsx("div",{className:"about-tagline",children:"Intelligence Dashboard · AI-Powered"}),u.jsx("div",{className:"about-desc",children:"Signal.Brief è un intelligence dashboard interamente generato dall'AI. Ogni giorno raccoglie e analizza le idee dei pensatori più influenti nel tech e nell'innovazione, produce sintesi trasversali, identifica progetti emergenti e genera un podcast — tutto in automatico, senza intervento umano."}),u.jsxs("div",{className:"about-footer",children:["Ideato da Mike · ",u.jsx("a",{href:"https://www.instagram.com/it.mikesoft",target:"_blank",rel:"noopener noreferrer",children:"MikeSoft"}),u.jsx("br",{}),"100% AI-generated · Made in Italy · 2026"]}),u.jsx("button",{className:"btn btn-ghost btn-small",style:{marginTop:20},onClick:()=>mo(!1),children:"Chiudi"})]})})]})}window.storage={get:async e=>{try{const t=await fetch("/state");if(t.status===204||!t.ok)throw new Error("no backend");const n=await t.json();return n[e]!=null?{key:e,value:n[e]}:null}catch{const t=localStorage.getItem(e);if(t)return{key:e,value:t};try{const r=await fetch("/signal-brief/signal-state.json");if(r.ok){const l=await r.json();return l[e]!=null?{key:e,value:l[e]}:null}}catch{}return null}},set:async(e,t)=>{try{let n={};const r=await fetch("/state");return r.ok&&r.status!==204&&(n=await r.json()),n[e]=t,await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),{key:e,value:t}}catch{return localStorage.setItem(e,t),{key:e,value:t}}},delete:async e=>{try{let t={};const n=await fetch("/state");return n.ok&&n.status!==204&&(t=await n.json()),delete t[e],await fetch("/state",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),{key:e,deleted:!0}}catch{return localStorage.removeItem(e),{key:e,deleted:!0}}}};Id(document.getElementById("root")).render(u.jsx(P.StrictMode,{children:u.jsx(Um,{})}));
