(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{7154:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t.apply(this,arguments)}e.exports=t},7316:function(e){e.exports=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}},6255:function(e,t,n){"use strict";var i=n(3038),o=n(319),r=n(5318);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,r=void 0!==o&&o,c=e.priority,d=void 0!==c&&c,p=e.loading,v=e.className,h=e.quality,g=e.width,m=e.height,y=e.objectFit,b=e.objectPosition,z=e.loader,k=void 0===z?A:z,E=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),S=n?"responsive":"intrinsic",_=!1;"unsized"in E?(_=Boolean(E.unsized),delete E.unsized):"layout"in E&&(E.layout&&(S=E.layout),delete E.layout);0;var L=!d&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(r=!0,L=!1);var j,M,I,q=(0,f.useIntersection)({rootMargin:"200px",disabled:!L}),C=i(q,2),O=C[0],R=C[1],D=!L||R,N=x(g),B=x(m),P=x(h),H={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:y,objectPosition:b};if("undefined"!==typeof N&&"undefined"!==typeof B&&"fill"!==S){var U=B/N,W=isNaN(U)?"100%":"".concat(100*U,"%");"responsive"===S?(j={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},M={display:"block",boxSizing:"border-box",paddingTop:W}):"intrinsic"===S?(j={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},M={boxSizing:"border-box",display:"block",maxWidth:"100%"},I='<svg width="'.concat(N,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(j={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:B})}else"undefined"===typeof N&&"undefined"===typeof B&&"fill"===S&&(j={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var K={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};D&&(K=w({src:t,unoptimized:r,layout:S,width:N,quality:P,sizes:n,loader:k}));_&&(j=void 0,M=void 0,H=void 0);return s.default.createElement("div",{style:j},M?s.default.createElement("div",{style:M},I?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(I))}):null):null,!D&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},E,w({src:t,unoptimized:r,layout:S,width:N,quality:P,sizes:n,loader:k}),{src:t,decoding:"async",sizes:n,style:H,className:v}))),s.default.createElement("img",Object.assign({},E,K,{decoding:"async",className:v,ref:O,style:H})),d?s.default.createElement(l.default,null,s.default.createElement("link",{key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src,imagesrcset:K.srcSet,imagesizes:K.sizes})):null)};var a=r(n(7316)),c=r(n(7154)),s=r(n(7294)),l=r(n(7947)),u=n(7239),d=n(5655),f=n(5749);var p=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["auto=format","fit=max","w="+i],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(t).concat(z(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(z(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(z(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}]]),v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,h=v.deviceSizes,g=v.imageSizes,m=v.loader,y=v.path,b=(v.domains,[].concat(o(h),o(g)));function w(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var i=o(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(i.length){var r=.01*Math.min.apply(Math,o(i));return{widths:b.filter((function(e){return e>=h[0]*r})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:h,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}(r,i,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t=p.get(m);if(t)return t((0,c.default)({root:y},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(m))}function z(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},6071:function(e,t,n){"use strict";var i=n(3038),o=n(862);t.default=void 0;var r=o(n(7294)),a=n(1689),c=n(2441),s=n(5749),l={};function u(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",d=r.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=i(t,2),r=n[0],c=n[1];return{href:r,as:e.as?(0,a.resolveHref)(o,e.as):c||r}}),[o,e.href,e.as]),f=d.href,p=d.as,v=e.children,h=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof v&&(v=r.default.createElement("a",null,v));var b=r.Children.only(v),w=b&&"object"===typeof b&&b.ref,x=(0,s.useIntersection)({rootMargin:"200px"}),A=i(x,2),z=A[0],k=A[1],E=r.default.useCallback((function(e){z(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,z]);(0,r.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(f),i="undefined"!==typeof y?y:n&&n.locale,o=l[f+"%"+p+(i?"%"+i:"")];e&&!o&&u(n,f,p,{locale:i})}),[p,f,k,y,t,n]);var S={ref:E,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=i.indexOf("#")<0),t[o?"replace":"push"](n,i,{shallow:r,locale:s,scroll:c}))}(e,n,f,p,h,g,m,y)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(n,f,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var _="undefined"!==typeof y?y:n&&n.locale,L=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,_,n&&n.locales,n&&n.domainLocales);S.href=L||(0,a.addBasePath)((0,a.addLocale)(p,_,n&&n.defaultLocale))}return r.default.cloneElement(b,S)};t.default=d},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=i(l,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:i}),n}(n),o=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!a&&!d){var e=(0,r.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,r.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n(7294),r=n(8391),a="undefined"!==typeof IntersectionObserver;var c=new Map},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},5675:function(e,t,n){e.exports=n(6255)},1664:function(e,t,n){e.exports=n(6071)}}]);