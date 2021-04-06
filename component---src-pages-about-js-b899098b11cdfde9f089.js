/*! For license information please see component---src-pages-about-js-b899098b11cdfde9f089.js.LICENSE.txt */
(self.webpackChunkcathyjthomas_portfolio=self.webpackChunkcathyjthomas_portfolio||[]).push([[682,364],{2122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},9756:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})},5900:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},6594:function(e,t,n){"use strict";var a=n(2122),r=n(9756),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=n(6306),u=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,u=e.size,f=e.active,m=e.className,d=e.block,p=e.type,v=e.as,h=(0,r.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),b=(0,l.vE)(n,"btn"),g=s()(m,b,f&&"active",o&&b+"-"+o,d&&b+"-block",u&&b+"-"+u);if(h.href)return i.createElement(c.Z,(0,a.Z)({},h,{as:v,ref:t,className:s()(g,h.disabled&&"disabled")}));t&&(h.ref=t),p?h.type=p:v||(h.type="button");var y=v||"button";return i.createElement(y,(0,a.Z)({},h,{className:g}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},7408:function(e,t,n){"use strict";var a=n(2122),r=n(9756),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.as,f=void 0===u?"div":u,m=(0,r.Z)(e,["bsPrefix","className","as"]),d=(0,l.vE)(n,"col"),p=[],v=[];return c.forEach((function(e){var t,n,a,r=m[e];if(delete m[e],"object"==typeof r&&null!=r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var s="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+d+s:""+d+s+"-"+t),null!=a&&v.push("order"+s+"-"+a),null!=n&&v.push("offset"+s+"-"+n)})),p.length||p.push(d),i.createElement(f,(0,a.Z)({},m,{ref:t,className:s().apply(void 0,[o].concat(p,v))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,n){"use strict";var a=n(2122),r=n(9756),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,c=e.as,u=void 0===c?"div":c,f=e.className,m=(0,r.Z)(e,["bsPrefix","fluid","as","className"]),d=(0,l.vE)(n,"container"),p="string"==typeof o?"-"+o:"-fluid";return i.createElement(u,(0,a.Z)({ref:t},m,{className:s()(f,o?""+d+p:d)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},994:function(e,t,n){"use strict";var a=n(2122),r=n(9756),o=n(5900),s=n.n(o),i=n(7294),l=n(9541),c=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,u=e.noGutters,f=e.as,m=void 0===f?"div":f,d=(0,r.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,l.vE)(n,"row"),v=p+"-cols",h=[];return c.forEach((function(e){var t,n=d[e];delete d[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&h.push(""+v+a+"-"+t)})),i.createElement(m,(0,a.Z)({ref:t},d,{className:s().apply(void 0,[o,p,u&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},6306:function(e,t,n){"use strict";var a=n(2122),r=n(9756),o=n(7294),s=n(9758);function i(e){return!e||"#"===e.trim()}var l=o.forwardRef((function(e,t){var n=e.as,l=void 0===n?"a":n,c=e.disabled,u=e.onKeyDown,f=(0,r.Z)(e,["as","disabled","onKeyDown"]),m=function(e){var t=f.href,n=f.onClick;(c||i(t))&&e.preventDefault(),c?e.stopPropagation():n&&n(e)};return i(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.createElement(l,(0,a.Z)({ref:t},f,{onClick:m,onKeyDown:(0,s.Z)((function(e){" "===e.key&&(e.preventDefault(),m(e))}),u)}))}));l.displayName="SafeAnchor",t.Z=l},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var a=n(7294),r=a.createContext({});r.Consumer,r.Provider;function o(e,t){var n=(0,a.useContext)(r);return e||n[t]||t}},9758:function(e,t){"use strict";t.Z=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},9019:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var s=o(n(7294));t.default=function(e){var t=s.useState(0),n=t[0],a=t[1],r=e.transitionDuration||400,o=e.delay||50,i=e.wrapperTag||"div",l=e.childTag||"div",c=void 0===e.visible||e.visible;return s.useEffect((function(){var t=s.default.Children.count(e.children);if(c||(t=0),t==n){var i=setTimeout((function(){e.onComplete&&e.onComplete()}),r);return function(){return clearTimeout(i)}}var l=t>n?1:-1,u=setTimeout((function(){a(n+l)}),o);return function(){return clearTimeout(u)}}),[s.default.Children.count(e.children),o,n,c,r]),s.default.createElement(i,{className:e.className},s.default.Children.map(e.children,(function(t,a){return s.default.createElement(l,{className:e.childClassName,style:{transition:"opacity "+r+"ms, transform "+r+"ms",transform:n>a?"none":"translateY(20px)",opacity:n>a?1:0}},t)})))}},160:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(9019);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(r).default}})},2550:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(6187),o=n(7408),s=n(994),i=n.p+"static/meinframe-15e022534f39356f775637a2412f9d31.png",l=n(6594),c=n(160),u=n.n(c);function f(e){var t=e.toggleAboutMe,n=e.toggleInterests;return a.createElement("div",{className:"about-container"},a.createElement("h2",{className:"h2-about"},"skills() {"),a.createElement(u(),{delay:"100",transitionDuration:"1000"},a.createElement("p",{className:"p-about"},"Front end: #HTML/CSS/SCSS, #Bulma, #Webpack, #React, #JavaScript, #Sass, #Material UI, #Gatsby Back end: #Node.js, #Python, #MongoDB, #PostgreSQL, #Mongoose, #Express, #Flask, #SQLAlchemy Version control: #Git, #Github CLI: #npm, #Yarn, #Homebrew, #pip3 otherSkills #Excel, #Adobe Creative Suite, #Sharepoint, #Sketch, #Microsoft Flow, #Cvent, #Wordpress, #budget handling, #project management, #pitching and proposal creation languages English native Russian")),a.createElement("div",{className:"about-buttons-container"},a.createElement("h2",{className:"h2-about"},"}"),a.createElement(l.Z,{className:"about-button",onClick:t},"About me"),a.createElement(l.Z,{className:"about-button",onClick:n},"My interests")))}function m(e){var t=e.toggleSkills,n=e.toggleInterests;return a.createElement("div",{className:"about-container"},a.createElement("h2",{className:"h2-about"},"aboutMe() {"),a.createElement(u(),{delay:"100",transitionDuration:"1000"},a.createElement("p",{className:"p-about"},"How can I use fun and creative methods to make things quicker, easier and more efficient? In my fifteen years in the corporate events industry, this was a question I asked myself at every opportunity, pioneering cross-company initiatives using self-taught technology to streamline business processes and improve the customer and employee experience. It’s a question I continue to ask myself as I follow a long-held passion for web development and creative design, recently retraining as a Web Developer with an emphasis on front-end and an interest in UX/UI.")),a.createElement("div",{className:"about-buttons-container"},a.createElement("h2",{className:"h2-about"},"}"),a.createElement(l.Z,{className:"about-button",onClick:t},"My skills"),a.createElement(l.Z,{className:"about-button",onClick:n},"My interests")))}function d(e){var t=e.toggleAboutMe,n=e.toggleSkills;return a.createElement("div",{className:"about-container"},a.createElement("h2",{className:"h2-about"},"myInterests() {"),a.createElement(u(),{delay:"100",transitionDuration:"1000"},a.createElement("p",{className:"p-about"},"In 2012, cycled with three colleagues from London to Paris for charity raising over £4000 for the Institute of Cancer Research. Took part in the inaugural Ride London 100, the Dunwich Dynamo (100 miles overnight) and 24hr Mountain Bike race. 2012 British Cycling National Mountain Biking Champion (Sport Cat.)")),a.createElement("div",{className:"about-buttons-container"},a.createElement("h2",{className:"h2-about"},"}"),a.createElement(l.Z,{className:"about-button",onClick:t},"About me"),a.createElement(l.Z,{className:"about-button",onClick:n},"My skills")))}function p(){var e=(0,a.useState)(!0),t=e[0],n=e[1],l=(0,a.useState)(!1),c=l[0],u=l[1],p=(0,a.useState)(!1),v=p[0],h=p[1];function b(){n(!0),u(!1),h(!1)}function g(){n(!1),u(!0),h(!1)}function y(){n(!1),u(!1),h(!0),console.log(v)}return a.createElement("div",{className:"about-background"},a.createElement(r.Z,{fluid:!0},a.createElement(s.Z,null,a.createElement(o.Z,{sm:0,md:0,lg:1}),a.createElement(o.Z,{sm:0,md:4,lg:4},a.createElement("img",{className:"me",src:i,alt:"me",height:"400px"})),a.createElement(o.Z,{sm:12,md:7,lg:6},a.createElement("div",{className:"about-right-section"},t&&a.createElement(m,{toggleSkills:g,toggleInterests:y}),c&&a.createElement(f,{toggleAboutMe:b,toggleInterests:y}),v&&a.createElement(d,{toggleAboutMe:b,toggleSkills:g}))),a.createElement(o.Z,{sm:0,md:1,lg:1}))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-b899098b11cdfde9f089.js.map