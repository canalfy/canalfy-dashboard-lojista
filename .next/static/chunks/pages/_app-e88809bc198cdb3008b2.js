(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6306:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r=t(5893);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var i=t(1163),s=t(9008),a=t(2465);function u(){var n=(0,a.Z)(["\n\t// Alterar estilos conforme desejado\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html, body {\n        font-size: 10px;\n        line-height: 10px;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        color: rgba(255, 255, 255, 0.85);\n\n        background: #0e1b25;\n\n        overflow-x: hidden;\n    }\n\n    html, body, #__next {\n        height: 100%;\n    }\n"]);return u=function(){return n},n}var c=(0,t(9163).vJ)(u()),l=(t(5001),t(8947)),f=t(4865),d=t.n(f);function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}l.vc.autoAddCss=!1,i.default.events.on("routeChangeStart",(function(n){console.log("Loading: ".concat(n)),d().start()})),i.default.events.on("routeChangeComplete",(function(){return d().done()})),i.default.events.on("routeChangeError",(function(){return d().done()}));var g=function(n){var e=n.Component,t=n.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.default,{children:[(0,r.jsx)("title",{children:"Dashboard Canalfy"}),(0,r.jsx)("link",{rel:"stylesheet",type:"text/css",href:"/nprogress.css"})]}),(0,r.jsx)(c,{}),(0,r.jsx)(e,m({},t))]})}},1780:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(6306)}])},5001:function(){},9008:function(n,e,t){n.exports=t(7947)},1163:function(n,e,t){n.exports=t(2441)},4865:function(n,e,t){var r,o;void 0===(o="function"===typeof(r=function(){var n={version:"0.2.0"},e=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function t(n,e,t){return n<e?e:n>t?t:n}function r(n){return 100*(-1+n)}function o(n,t,o){var i;return(i="translate3d"===e.positionUsing?{transform:"translate3d("+r(n)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+r(n)+"%,0)"}:{"margin-left":r(n)+"%"}).transition="all "+t+"ms "+o,i}n.configure=function(n){var t,r;for(t in n)void 0!==(r=n[t])&&n.hasOwnProperty(t)&&(e[t]=r);return this},n.status=null,n.set=function(r){var a=n.isStarted();r=t(r,e.minimum,1),n.status=1===r?null:r;var u=n.render(!a),c=u.querySelector(e.barSelector),l=e.speed,f=e.easing;return u.offsetWidth,i((function(t){""===e.positionUsing&&(e.positionUsing=n.getPositioningCSS()),s(c,o(r,l,f)),1===r?(s(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout((function(){s(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),l)}),l)):setTimeout(t,l)})),this},n.isStarted=function(){return"number"===typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout((function(){n.status&&(n.trickle(),t())}),e.trickleSpeed)};return e.trickle&&t(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var r=n.status;return r?("number"!==typeof e&&(e=(1-r)*t(Math.random()*r,.1,.95)),r=t(r+e,0,.994),n.set(r)):n.start()},n.trickle=function(){return n.inc(Math.random()*e.trickleRate)},function(){var e=0,t=0;n.promise=function(r){return r&&"resolved"!==r.state()?(0===t&&n.start(),e++,t++,r.always((function(){0===--t?(e=0,n.done()):n.set((e-t)/e)})),this):this}}(),n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=e.template;var i,a=o.querySelector(e.barSelector),c=t?"-100":r(n.status||0),l=document.querySelector(e.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),e.showSpinner||(i=o.querySelector(e.spinnerSelector))&&f(i),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(o),o},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(e.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&f(n)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var i=function(){var n=[];function e(){var t=n.shift();t&&t(e)}return function(t){n.push(t),1==n.length&&e()}}(),s=function(){var n=["Webkit","O","Moz","ms"],e={};function t(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(n,e){return e.toUpperCase()}))}function r(e){var t=document.body.style;if(e in t)return e;for(var r,o=n.length,i=e.charAt(0).toUpperCase()+e.slice(1);o--;)if((r=n[o]+i)in t)return r;return e}function o(n){return n=t(n),e[n]||(e[n]=r(n))}function i(n,e,t){e=o(e),n.style[e]=t}return function(n,e){var t,r,o=arguments;if(2==o.length)for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&i(n,t,r);else i(n,o[1],o[2])}}();function a(n,e){return("string"==typeof n?n:l(n)).indexOf(" "+e+" ")>=0}function u(n,e){var t=l(n),r=t+e;a(t,e)||(n.className=r.substring(1))}function c(n,e){var t,r=l(n);a(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function l(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function f(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return n})?r.call(e,t,e,n):r)||(n.exports=o)}},function(n){var e=function(e){return n(n.s=e)};n.O(0,[774,351,163,832],(function(){return e(1780),e(2441)}));var t=n.O();_N_E=t}]);