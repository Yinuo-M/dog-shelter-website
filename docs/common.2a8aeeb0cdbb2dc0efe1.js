(self.webpackChunkdog_shelter_page=self.webpackChunkdog_shelter_page||[]).push([[592],{3856:(e,t,n)=>{"use strict";n(4747),n(7702),n(5202);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}));var r=document.querySelector(".hamburger"),o=document.querySelector("#nav-list");r.addEventListener("click",(function(){o.classList.contains("menu-open")?(o.classList.remove("menu-open"),o.setAttribute("aria-hidden","true"),o.querySelectorAll("a").forEach((function(e){return e.tabIndex=-1})),r.setAttribute("aria-expanded","false")):(o.classList.add("transition"),o.classList.add("menu-open"),o.setAttribute("aria-hidden","false"),o.querySelectorAll("a").forEach((function(e){return e.tabIndex=0})),r.setAttribute("aria-expanded","true"))})),window.addEventListener("DOMContentLoaded",(function(){document.documentElement.clientWidth<=580&&(o.setAttribute("aria-hidden","true"),o.querySelectorAll("a").forEach((function(e){return e.tabIndex=-1})),r.setAttribute("aria-expanded","false"))}))},3099:e=>{e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},9670:(e,t,n)=>{var r=n(111);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},8533:(e,t,n)=>{"use strict";var r=n(2092).forEach,o=n(9341)("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},2092:(e,t,n)=>{var r=n(9974),o=n(8361),i=n(7908),s=n(7466),u=n(5417),a=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,d=4==e,l=6==e,f=7==e,v=5==e||l;return function(m,p,h,y){for(var L,b,E=i(m),g=o(E),x=r(p,h,3),w=s(g.length),S=0,T=y||u,A=t?T(m,w):n||f?T(m,0):void 0;w>S;S++)if((v||S in g)&&(b=x(L=g[S],S,E),e))if(t)A[S]=b;else if(b)switch(e){case 3:return!0;case 5:return L;case 6:return S;case 2:a.call(A,L)}else switch(e){case 4:return!1;case 7:a.call(A,L)}return l?-1:c||d?d:A}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},9341:(e,t,n)=>{"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},5417:(e,t,n)=>{var r=n(111),o=n(3157),i=n(5112)("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},4326:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},8880:(e,t,n)=>{var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:(e,t,n)=>{var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(e,t,n)=>{var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},8324:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},5268:(e,t,n)=>{var r=n(4326),o=n(7854);e.exports="process"==r(o.process)},8113:(e,t,n)=>{var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:(e,t,n)=>{var r,o,i=n(7854),s=n(8113),u=i.process,a=u&&u.versions,c=a&&a.v8;c?o=(r=c.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=r[1]),e.exports=o&&+o},7293:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},9974:(e,t,n)=>{var r=n(3099);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},5005:(e,t,n)=>{var r=n(857),o=n(7854),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},7854:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:e=>{var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},4664:(e,t,n)=>{var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(e,t,n)=>{var r=n(7293),o=n(4326),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},3157:(e,t,n)=>{var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},111:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:e=>{e.exports=!1},133:(e,t,n)=>{var r=n(5268),o=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},3070:(e,t,n)=>{var r=n(9781),o=n(4664),i=n(9670),s=n(7593),u=Object.defineProperty;t.f=r?u:function(e,t,n){if(i(e),t=s(t,!0),i(n),o)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},857:(e,t,n)=>{var r=n(7854);e.exports=r},4488:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:(e,t,n)=>{var r=n(7854),o=n(8880);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},5465:(e,t,n)=>{var r=n(7854),o=n(3505),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},2309:(e,t,n)=>{var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},9958:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:(e,t,n)=>{var r=n(9958),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:(e,t,n)=>{var r=n(4488);e.exports=function(e){return Object(r(e))}},7593:(e,t,n)=>{var r=n(111);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},9711:e=>{var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},3307:(e,t,n)=>{var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(e,t,n)=>{var r=n(7854),o=n(2309),i=n(6656),s=n(9711),u=n(133),a=n(3307),c=o("wks"),d=r.Symbol,l=a?d:d&&d.withoutSetter||s;e.exports=function(e){return i(c,e)&&(u||"string"==typeof c[e])||(u&&i(d,e)?c[e]=d[e]:c[e]=l("Symbol."+e)),c[e]}},4747:(e,t,n)=>{var r=n(7854),o=n(8324),i=n(8533),s=n(8880);for(var u in o){var a=r[u],c=a&&a.prototype;if(c&&c.forEach!==i)try{s(c,"forEach",i)}catch(e){c.forEach=i}}},5202:function(){!function(){"use strict";function e(e){var t=!0,n=!1,r=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!o[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function u(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function c(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&u(e.activeElement),t=!0)}function d(e){t=!1}function l(e){i(e.target)&&(t||s(e.target))&&u(e.target)}function f(e){i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(r),r=window.setTimeout((function(){n=!1}),100),a(e.target))}function v(e){"hidden"===document.visibilityState&&(n&&(t=!0),m())}function m(){document.addEventListener("mousemove",h),document.addEventListener("mousedown",h),document.addEventListener("mouseup",h),document.addEventListener("pointermove",h),document.addEventListener("pointerdown",h),document.addEventListener("pointerup",h),document.addEventListener("touchmove",h),document.addEventListener("touchstart",h),document.addEventListener("touchend",h)}function p(){document.removeEventListener("mousemove",h),document.removeEventListener("mousedown",h),document.removeEventListener("mouseup",h),document.removeEventListener("pointermove",h),document.removeEventListener("pointerdown",h),document.removeEventListener("pointerup",h),document.removeEventListener("touchmove",h),document.removeEventListener("touchstart",h),document.removeEventListener("touchend",h)}function h(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,p())}document.addEventListener("keydown",c,!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",v,!0),m(),e.addEventListener("focus",l,!0),e.addEventListener("blur",f,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},7702:()=>{}},e=>{"use strict";var t;t=3856,e(e.s=t)}]);