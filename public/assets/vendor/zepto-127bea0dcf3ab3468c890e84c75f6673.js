!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var i,n=Object(this),s=n.length>>>0,r=0;if("function"!=typeof e)throw new TypeError;if(0==s&&1==arguments.length)throw new TypeError;if(arguments.length>=2)i=arguments[1];else for(;;){if(r in n){i=n[r++];break}if(++r>=s)throw new TypeError}for(;s>r;)r in n&&(i=e.call(t,i,n[r],r,n)),r++;return i})}();var Zepto=function(){function t(t){return null==t?String(t):X[K.call(t)]||"object"}function e(e){return"function"==t(e)}function i(t){return null!=t&&t==t.window}function n(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function s(e){return"object"==t(e)}function r(t){return s(t)&&!i(t)&&t.__proto__==Object.prototype}function o(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function l(t){return P.call(t,function(t){return null!=t})}function c(t){return t.length>0?C.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t){return t in N?N[t]:N[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function d(t,e){return"number"!=typeof e||H[u(t)]?e:e+"px"}function p(t){var e,i;return A[t]||(e=j.createElement(t),j.body.appendChild(e),i=I(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==i&&(i="block"),A[t]=i),A[t]}function f(t){return"children"in t?E.call(t.children):C.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function g(t,e,i){for(k in e)i&&(r(e[k])||o(e[k]))?(r(e[k])&&!r(t[k])&&(t[k]={}),o(e[k])&&!o(t[k])&&(t[k]=[]),g(t[k],e[k],i)):e[k]!==x&&(t[k]=e[k])}function m(t,e){return e===x?C(t):C(t).filter(e)}function v(t,i,n,s){return e(i)?i.call(t,n,s):i}function y(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)}function b(t,e){var i=t.className,n=i&&i.baseVal!==x;return e===x?n?i.baseVal:i:(n?i.baseVal=e:t.className=e,void 0)}function _(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?C.parseJSON(t):t:e):t}catch(i){return t}}function w(t,e){e(t);for(var i in t.childNodes)w(t.childNodes[i],e)}var x,k,C,T,M,S,D=[],E=D.slice,P=D.filter,j=window.document,A={},N={},I=j.defaultView.getComputedStyle,H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},O=/^\s*<(\w+|!)[^>]*>/,F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,z=/^(?:body|html)$/i,L=["val","css","html","text","data","width","height","offset"],R=["after","prepend","before","append"],$=j.createElement("table"),W=j.createElement("tr"),B={tr:j.createElement("tbody"),tbody:$,thead:$,tfoot:$,td:W,th:W,"*":j.createElement("div")},q=/complete|loaded|interactive/,Q=/^\.([\w-]+)$/,U=/^#([\w-]*)$/,Y=/^[\w-]+$/,X={},K=X.toString,V={},G=j.createElement("div");return V.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var i=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(i)return i.call(t,e);var n,s=t.parentNode,r=!s;return r&&(s=G).appendChild(t),n=~V.qsa(s,e).indexOf(t),r&&G.removeChild(t),n},M=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(t){return P.call(t,function(e,i){return t.indexOf(e)==i})},V.fragment=function(t,e,i){t.replace&&(t=t.replace(F,"<$1></$2>")),e===x&&(e=O.test(t)&&RegExp.$1),e in B||(e="*");var n,s,o=B[e];return o.innerHTML=""+t,s=C.each(E.call(o.childNodes),function(){o.removeChild(this)}),r(i)&&(n=C(s),C.each(i,function(t,e){L.indexOf(t)>-1?n[t](e):n.attr(t,e)})),s},V.Z=function(t,e){return t=t||[],t.__proto__=C.fn,t.selector=e||"",t},V.isZ=function(t){return t instanceof V.Z},V.init=function(t,i){if(t){if(e(t))return C(j).ready(t);if(V.isZ(t))return t;var n;if(o(t))n=l(t);else if(s(t))n=[r(t)?C.extend({},t):t],t=null;else if(O.test(t))n=V.fragment(t.trim(),RegExp.$1,i),t=null;else{if(i!==x)return C(i).find(t);n=V.qsa(j,t)}return V.Z(n,t)}return V.Z()},C=function(t,e){return V.init(t,e)},C.extend=function(t){var e,i=E.call(arguments,1);return"boolean"==typeof t&&(e=t,t=i.shift()),i.forEach(function(i){g(t,i,e)}),t},V.qsa=function(t,e){var i;return n(t)&&U.test(e)?(i=t.getElementById(RegExp.$1))?[i]:[]:1!==t.nodeType&&9!==t.nodeType?[]:E.call(Q.test(e)?t.getElementsByClassName(RegExp.$1):Y.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},C.contains=function(t,e){return t!==e&&t.contains(e)},C.type=t,C.isFunction=e,C.isWindow=i,C.isArray=o,C.isPlainObject=r,C.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},C.inArray=function(t,e,i){return D.indexOf.call(e,t,i)},C.camelCase=M,C.trim=function(t){return t.trim()},C.uuid=0,C.support={},C.expr={},C.map=function(t,e){var i,n,s,r=[];if(a(t))for(n=0;n<t.length;n++)i=e(t[n],n),null!=i&&r.push(i);else for(s in t)i=e(t[s],s),null!=i&&r.push(i);return c(r)},C.each=function(t,e){var i,n;if(a(t)){for(i=0;i<t.length;i++)if(e.call(t[i],i,t[i])===!1)return t}else for(n in t)if(e.call(t[n],n,t[n])===!1)return t;return t},C.grep=function(t,e){return P.call(t,e)},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),C.fn={forEach:D.forEach,reduce:D.reduce,push:D.push,sort:D.sort,indexOf:D.indexOf,concat:D.concat,map:function(t){return C(C.map(this,function(e,i){return t.call(e,i,e)}))},slice:function(){return C(E.apply(this,arguments))},ready:function(t){return q.test(j.readyState)?t(C):j.addEventListener("DOMContentLoaded",function(){t(C)},!1),this},get:function(t){return t===x?E.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return D.every.call(this,function(e,i){return t.call(e,i,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):C(P.call(this,function(e){return V.matches(e,t)}))},add:function(t,e){return C(S(this.concat(C(t,e))))},is:function(t){return this.length>0&&V.matches(this[0],t)},not:function(t){var i=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||i.push(this)});else{var n="string"==typeof t?this.filter(t):a(t)&&e(t.item)?E.call(t):C(t);this.forEach(function(t){n.indexOf(t)<0&&i.push(t)})}return C(i)},has:function(t){return this.filter(function(){return s(t)?C.contains(this,t):C(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!s(t)?t:C(t)},last:function(){var t=this[this.length-1];return t&&!s(t)?t:C(t)},find:function(t){var e,i=this;return e="object"==typeof t?C(t).filter(function(){var t=this;return D.some.call(i,function(e){return C.contains(e,t)})}):1==this.length?C(V.qsa(this[0],t)):this.map(function(){return V.qsa(this,t)})},closest:function(t,e){var i=this[0],s=!1;for("object"==typeof t&&(s=C(t));i&&!(s?s.indexOf(i)>=0:V.matches(i,t));)i=i!==e&&!n(i)&&i.parentNode;return C(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=C.map(i,function(t){return(t=t.parentNode)&&!n(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(S(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return f(this)}),t)},contents:function(){return this.map(function(){return E.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return P.call(f(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return C.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==I(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var i=e(t);if(this[0]&&!i)var n=C(t).get(0),s=n.parentNode||this.length>1;return this.each(function(e){C(this).wrapAll(i?t.call(this,e):s?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){C(this[0]).before(t=C(t));for(var e;(e=t.children()).length;)t=e.first();C(t).append(this)}return this},wrapInner:function(t){var i=e(t);return this.each(function(e){var n=C(this),s=n.contents(),r=i?t.call(this,e):t;s.length?s.wrapAll(r):n.append(r)})},unwrap:function(){return this.parent().each(function(){C(this).replaceWith(C(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=C(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return C(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return C(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===x?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;C(this).empty().append(v(this,t,e,i))})},text:function(t){return t===x?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var i;return"string"==typeof t&&e===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(i=this[0].getAttribute(t))&&t in this[0]?this[0][t]:i:this.each(function(i){if(1===this.nodeType)if(s(t))for(k in t)y(this,k,t[k]);else y(this,t,v(this,e,i,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===x?this[0]&&this[0][t]:this.each(function(i){this[t]=v(this,e,i,this[t])})},data:function(t,e){var i=this.attr("data-"+u(t),e);return null!==i?_(i):x},val:function(t){return t===x?this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=C(this),n=v(this,t,e,i.offset()),s=i.offsetParent().offset(),r={top:n.top-s.top,left:n.left-s.left};"static"==i.css("position")&&(r.position="relative"),i.css(r)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,i){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[M(e)]||I(this[0],"").getPropertyValue(e));var n="";if("string"==t(e))i||0===i?n=u(e)+":"+d(e,i):this.each(function(){this.style.removeProperty(u(e))});else for(k in e)e[k]||0===e[k]?n+=u(k)+":"+d(k,e[k])+";":this.each(function(){this.style.removeProperty(u(k))});return this.each(function(){this.style.cssText+=";"+n})},index:function(t){return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return D.some.call(this,function(t){return this.test(b(t))},h(t))},addClass:function(t){return this.each(function(e){T=[];var i=b(this),n=v(this,t,e,i);n.split(/\s+/g).forEach(function(t){C(this).hasClass(t)||T.push(t)},this),T.length&&b(this,i+(i?" ":"")+T.join(" "))})},removeClass:function(t){return this.each(function(e){return t===x?b(this,""):(T=b(this),v(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(h(t)," ")}),b(this,T.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(i){var n=C(this),s=v(this,t,i,b(this));s.split(/\s+/g).forEach(function(t){(e===x?!n.hasClass(t):e)?n.addClass(t):n.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),n=z.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(C(t).css("margin-top"))||0,i.left-=parseFloat(C(t).css("margin-left"))||0,n.top+=parseFloat(C(e[0]).css("border-top-width"))||0,n.left+=parseFloat(C(e[0]).css("border-left-width"))||0,{top:i.top-n.top,left:i.left-n.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||j.body;t&&!z.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;return t})}},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){C.fn[t]=function(e){var s,r=this[0],o=t.replace(/./,function(t){return t[0].toUpperCase()});return e===x?i(r)?r["inner"+o]:n(r)?r.documentElement["offset"+o]:(s=this.offset())&&s[t]:this.each(function(i){r=C(this),r.css(t,v(this,e,i,r[t]()))})}}),R.forEach(function(e,i){var n=i%2;C.fn[e]=function(){var e,s,r=C.map(arguments,function(i){return e=t(i),"object"==e||"array"==e||null==i?i:V.fragment(i)}),o=this.length>1;return r.length<1?this:this.each(function(t,e){s=n?e:e.parentNode,e=0==i?e.nextSibling:1==i?e.firstChild:2==i?e:null,r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!s)return C(t).remove();w(s.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},C.fn[n?e+"To":"insert"+(i?"Before":"After")]=function(t){return C(t)[e](this),this}}),V.Z.prototype=C.fn,V.uniq=S,V.deserializeValue=_,C.zepto=V,C}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},i=this.browser={},n=t.match(/WebKit\/([\d.]+)/),s=t.match(/(Android)\s+([\d.]+)/),r=t.match(/(iPad).*OS\s([\d_]+)/),o=!r&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=a&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),u=t.match(/Silk\/([\d._]+)/),h=t.match(/(BlackBerry).*Version\/([\d.]+)/),d=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),f=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(i.webkit=!!n)&&(i.version=n[1]),s&&(e.android=!0,e.version=s[2]),o&&(e.ios=e.iphone=!0,e.version=o[2].replace(/_/g,".")),r&&(e.ios=e.ipad=!0,e.version=r[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),l&&(e.touchpad=!0),h&&(e.blackberry=!0,e.version=h[2]),d&&(e.bb10=!0,e.version=d[2]),p&&(e.rimtabletos=!0,e.version=p[2]),f&&(i.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),u&&(i.silk=!0,i.version=u[1]),!u&&e.android&&t.match(/Kindle Fire/)&&(i.silk=!0),g&&(i.chrome=!0,i.version=g[1]),m&&(i.firefox=!0,i.version=m[1]),e.tablet=!!(r||f||s&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(s||o||a||h||d||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function i(t,i,r,o){if(i=n(i),i.ns)var a=s(i.ns);return(d[e(t)]||[]).filter(function(t){return!(!t||i.e&&t.e!=i.e||i.ns&&!a.test(t.ns)||r&&e(t.fn)!==e(r)||o&&t.sel!=o)})}function n(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function s(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(e,i,n){"string"!=t.type(e)?t.each(e,n):e.split(/\s/).forEach(function(t){n(t,i)})}function o(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return g[t]||t}function l(i,s,l,c,u,h){var p=e(i),f=d[p]||(d[p]=[]);r(s,l,function(e,s){var r=n(e);r.fn=s,r.sel=c,r.e in g&&(s=function(e){var i=e.relatedTarget;return!i||i!==this&&!t.contains(this,i)?r.fn.apply(this,arguments):void 0}),r.del=u&&u(s,e);var l=r.del||s;r.proxy=function(t){var e=l.apply(i,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},r.i=f.length,f.push(r),i.addEventListener(a(r.e),r.proxy,o(r,h))})}function c(t,n,s,l,c){var u=e(t);r(n||"",s,function(e,n){i(t,e,n,l).forEach(function(e){delete d[u][e.i],t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e){var i,n={originalEvent:e};for(i in e)y.test(i)||void 0===e[i]||(n[i]=e[i]);return t.each(b,function(t,i){n[t]=function(){return this[i]=m,e[t].apply(e,arguments)},n[i]=v}),n}function h(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var d=(t.zepto.qsa,{}),p=1,f={},g={mouseenter:"mouseover",mouseleave:"mouseout"};f.click=f.mousedown=f.mouseup=f.mousemove="MouseEvents",t.event={add:l,remove:c},t.proxy=function(i,n){if(t.isFunction(i)){var s=function(){return i.apply(n,arguments)};return s._zid=e(i),s}if("string"==typeof n)return t.proxy(i[n],i);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){l(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.one=function(t,e){return this.each(function(i,n){l(this,t,e,null,function(t,e){return function(){var i=t.apply(n,arguments);return c(n,e,t),i}})})};var m=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,i,n){return this.each(function(s,r){l(r,i,n,e,function(i){return function(n){var s,o=t(n.target).closest(e,r).get(0);return o?(s=t.extend(u(n),{currentTarget:o,liveFired:r}),i.apply(o,[s].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,i){return this.each(function(){c(this,e,i,t)})},t.fn.live=function(e,i){return t(document.body).delegate(this.selector,e,i),this},t.fn.die=function(e,i){return t(document.body).undelegate(this.selector,e,i),this},t.fn.on=function(e,i,n){return!i||t.isFunction(i)?this.bind(e,i||n):this.delegate(i,e,n)},t.fn.off=function(e,i,n){return!i||t.isFunction(i)?this.unbind(e,i||n):this.undelegate(i,e,n)},t.fn.trigger=function(e,i){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),h(e),e.data=i,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,n){var s,r;return this.each(function(o,a){s=u("string"==typeof e?t.Event(e):e),s.data=n,s.target=a,t.each(i(a,e.type||e),function(t,e){return r=e.proxy(s),s.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var i=document.createEvent(f[t]||"Events"),n=!0;if(e)for(var s in e)"bubbles"==s?n=!!e[s]:i[s]=e[s];return i.initEvent(t,n,!0,null,null,null,null,null,null,null,null,null,null,null,null),i.isDefaultPrevented=function(){return this.defaultPrevented},i}}(Zepto),function(t){function e(e,i,n){var s=t.Event(i);return t(e).trigger(s,n),!s.defaultPrevented}function i(t,i,n,s){return t.global?e(i||y,n,s):void 0}function n(e){e.global&&0===t.active++&&i(e,null,"ajaxStart")}function s(e){e.global&&!--t.active&&i(e,null,"ajaxStop")}function r(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||i(e,n,"ajaxBeforeSend",[t,e])===!1?!1:(i(e,n,"ajaxSend",[t,e]),void 0)}function o(t,e,n){var s=n.context,r="success";n.success.call(s,t,r,e),i(n,s,"ajaxSuccess",[e,n,t]),l(r,e,n)}function a(t,e,n,s){var r=s.context;s.error.call(r,n,e,t),i(s,r,"ajaxError",[n,s,t]),l(e,n,s)}function l(t,e,n){var r=n.context;n.complete.call(r,e,t),i(n,r,"ajaxComplete",[e,n]),s(n)}function c(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==k?"html":t==x?"json":_.test(t)?"script":w.test(t)&&"xml")||"text"}function h(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=h(e.url,e.data))}function p(e,i,n,s){var r=!t.isFunction(i);return{url:e,data:r?i:void 0,success:r?t.isFunction(n)?n:void 0:i,dataType:r?s||n:n}}function f(e,i,n,s){var r,o=t.isArray(i);t.each(i,function(i,a){r=t.type(a),s&&(i=n?s:s+"["+(o?"":i)+"]"),!s&&o?e.add(a.name,a.value):"array"==r||!n&&"object"==r?f(e,a,n,i):e.add(i,a)})}var g,m,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,_=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,x="application/json",k="text/html",C=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var i,n="jsonp"+ ++v,s=y.createElement("script"),l=function(){clearTimeout(i),t(s).remove(),delete window[n]},u=function(t){l(),t&&"timeout"!=t||(window[n]=c),a(null,t||"abort",h,e)},h={abort:u};return r(h,e)===!1?(u("abort"),!1):(window[n]=function(t){l(),o(t,h,e)},s.onerror=function(){u("error")},s.src=e.url.replace(/=\?/,"="+n),t("head").append(s),e.timeout>0&&(i=setTimeout(function(){u("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:x,xml:"application/xml, text/xml",html:k,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var i=t.extend({},e||{});for(g in t.ajaxSettings)void 0===i[g]&&(i[g]=t.ajaxSettings[g]);n(i),i.crossDomain||(i.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(i.url)&&RegExp.$2!=window.location.host),i.url||(i.url=window.location.toString()),d(i),i.cache===!1&&(i.url=h(i.url,"_="+Date.now()));var s=i.dataType,l=/=\?/.test(i.url);if("jsonp"==s||l)return l||(i.url=h(i.url,"callback=?")),t.ajaxJSONP(i);var p,f=i.accepts[s],v={},y=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,b=i.xhr();i.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),f&&(v.Accept=f,f.indexOf(",")>-1&&(f=f.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(f)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&(v["Content-Type"]=i.contentType||"application/x-www-form-urlencoded"),i.headers=t.extend(v,i.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(p);var e,n=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){s=s||u(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=b.responseXML:"json"==s&&(e=C.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?a(n,"parsererror",b,i):o(e,b,i)}else a(null,b.status?"error":"abort",b,i)}};var _="async"in i?i.async:!0;b.open(i.type,i.url,_);for(m in i.headers)b.setRequestHeader(m,i.headers[m]);return r(b,i)===!1?(b.abort(),!1):(i.timeout>0&&(p=setTimeout(function(){b.onreadystatechange=c,b.abort(),a(null,"timeout",b,i)},i.timeout)),b.send(i.data?i.data:null),b)},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,i,n){if(!this.length)return this;var s,r=this,o=e.split(/\s/),a=p(e,i,n),l=a.success;return o.length>1&&(a.url=o[0],s=o[1]),a.success=function(e){r.html(s?t("<div>").html(e.replace(b,"")).find(s):e),l&&l.apply(r,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(t,e){var i=[];return i.add=function(t,e){this.push(T(t)+"="+T(e))},f(i,t,e),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,i=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var n=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&("radio"!=n&&"checkbox"!=n||this.checked)&&i.push({name:e.attr("name"),value:e.val()})}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var i=t.Event("submit");this.eq(0).trigger(i),i.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function i(t){return n(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function n(t){return t.toLowerCase()}function s(t){return r?r+t:n(t)}var r,o,a,l,c,u,h,d,p="",f={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(f,function(t,i){return m.style[t+"TransitionProperty"]!==e?(p="-"+n(t)+"-",r=i,!1):void 0}),o=p+"transform",y[a=p+"transition-property"]=y[l=p+"transition-duration"]=y[c=p+"transition-timing-function"]=y[u=p+"animation-name"]=y[h=p+"animation-duration"]=y[d=p+"animation-timing-function"]="",t.fx={off:r===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:s("TransitionEnd"),animationEnd:s("AnimationEnd")},t.fn.animate=function(e,i,n,s){return t.isPlainObject(i)&&(n=i.easing,s=i.complete,i=i.duration),i&&(i=("number"==typeof i?i:t.fx.speeds[i]||t.fx.speeds._default)/1e3),this.anim(e,i,n,s)},t.fn.anim=function(n,s,r,p){var f,g,m,b={},_="",w=this,x=t.fx.transitionEnd;if(s===e&&(s=.4),t.fx.off&&(s=0),"string"==typeof n)b[u]=n,b[h]=s+"s",b[d]=r||"linear",x=t.fx.animationEnd;else{g=[];for(f in n)v.test(f)?_+=f+"("+n[f]+") ":(b[f]=n[f],g.push(i(f)));_&&(b[o]=_,g.push(o)),s>0&&"object"==typeof n&&(b[a]=g.join(", "),b[l]=s+"s",b[c]=r||"linear")}return m=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(x,m)}t(this).css(y),p&&p.call(this)},s>0&&this.bind(x,m),this.size()&&this.get(0).clientLeft,this.css(b),0>=s&&setTimeout(function(){w.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t,e){function i(i,n,s,r,o){"function"!=typeof n||o||(o=n,n=e);var a={opacity:s};return r&&(a.scale=r,i.css(t.fx.cssPrefix+"transform-origin","0 0")),i.animate(a,n,null,o)}function n(e,n,s,r){return i(e,n,0,s,function(){o.call(t(this)),r&&r.call(this)})}var s=window.document,r=(s.documentElement,t.fn.show),o=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,n){return r.call(this),t===e?t=0:this.css("opacity",0),i(this,t,1,"1,1",n)},t.fn.hide=function(t,i){return t===e?o.call(this):n(this,t,"0,0",i)},t.fn.toggle=function(i,n){return i===e||"boolean"==typeof i?a.call(this,i):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](i,n)})},t.fn.fadeTo=function(t,e,n){return i(this,t,e,null,n)},t.fn.fadeIn=function(t,e){var i=this.css("opacity");return i>0?this.css("opacity",0):i=1,r.call(this).fadeTo(t,i,e)},t.fn.fadeOut=function(t,e){return n(this,t,null,e)},t.fn.fadeToggle=function(e,i){return this.each(function(){var n=t(this);n[0==n.css("opacity")||"none"==n.css("display")?"fadeIn":"fadeOut"](e,i)})}}(Zepto),function(t){var e,i=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(i.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){i=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,n){var l=e[a],c=l&&s[l];if(void 0===n)return c||i(e);if(c){if(n in c)return c[n];var u=o(n);if(u in c)return c[u]}return r.call(t(e),n)}function i(e,i,r){var l=e[a]||(e[a]=++t.uuid),c=s[l]||(s[l]=n(e));return void 0!==i&&(c[o(i)]=r),c}function n(e){var i={};return t.each(e.attributes,function(e,n){0==n.name.indexOf("data-")&&(i[o(n.name.replace("data-",""))]=t.zepto.deserializeValue(n.value))}),i}var s={},r=t.fn.data,o=t.camelCase,a=t.expando="Zepto"+ +new Date;t.fn.data=function(n,s){return void 0===s?t.isPlainObject(n)?this.each(function(e,s){t.each(n,function(t,e){i(s,t,e)})}):0==this.length?void 0:e(this[0],n):this.each(function(){i(this,n,s)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var i=this[a],n=i&&s[i];n&&t.each(e,function(){delete n[o(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function i(t,e){t=t.replace(/=#\]/g,'="#"]');var i,n,s=a.exec(t);if(s&&s[2]in o&&(i=o[s[2]],n=s[3],t=s[1],n)){var r=Number(n);n=isNaN(r)?n.replace(/^["']|["']$/g,""):r}return e(t,i,n)}var n=t.zepto,s=n.qsa,r=n.matches,o=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,i){return t===i?this:void 0},contains:function(e,i,n){return t(this).text().indexOf(n)>-1?this:void 0},has:function(t,e,i){return n.qsa(this,i).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),l=/^\s*>/,c="Zepto"+ +new Date;n.qsa=function(e,r){return i(r,function(i,o,a){try{var u;!i&&o?i="*":l.test(i)&&(u=t(e).addClass(c),i="."+c+" "+i);var h=s(e,i)}catch(d){throw console.error("error performing selector: %o",r),d}finally{u&&u.removeClass(c)}return o?n.uniq(t.map(h,function(t,e){return o.call(t,e,h,a)})):h})},n.matches=function(t,e){return i(e,function(e,i,n){return!(e&&!r(t,e)||i&&i.call(t,null,n)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var i=t.fn[e];t.fn[e]=function(){var t=i.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),this.Zepto&&function(t){var e,i;return e=function(t,e,i,n,s){var r,o;return t?(o=t[i](),r={width:["left","right"],height:["top","bottom"]},r[i].forEach(function(e){return o+=parseInt(t.css("padding-"+e),10),n&&(o+=parseInt(t.css("border-"+e+"-width"),10)),s?o+=parseInt(t.css("margin-"+e),10):void 0}),o):null},["width","height"].forEach(function(i){var n,s,r,o,a;return n=i.replace(/./,function(t){return t[0].toUpperCase()}),(s=t.fn)[o="inner"+n]||(s[o]=function(t){return e(this,n,i,!1,t)}),(r=t.fn)[a="outer"+n]||(r[a]=function(t){return e(this,n,i,!0,t)})}),(i=t.fn).detach||(i.detach=function(t){var e,i;return i=this,null!=t&&(i=i.filter(t)),e=i.clone(!0),i.remove(),e})}(Zepto);