/*! For license information please see component---src-pages-portfolio-js-5c4a044e9ab0403a2848.js.LICENSE.txt */
(self.webpackChunkcathyjthomas_portfolio=self.webpackChunkcathyjthomas_portfolio||[]).push([[25,364],{2122:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return a}})},9756:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return a}})},5900:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===l)for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},6594:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),c=r.n(l),o=r(7294),s=r(9541),i=r(6306),u=o.forwardRef((function(e,t){var r=e.bsPrefix,l=e.variant,u=e.size,m=e.active,f=e.className,d=e.block,p=e.type,v=e.as,E=(0,n.Z)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=(0,s.vE)(r,"btn"),b=c()(f,h,m&&"active",l&&h+"-"+l,d&&h+"-block",u&&h+"-"+u);if(E.href)return o.createElement(i.Z,(0,a.Z)({},E,{as:v,ref:t,className:c()(b,E.disabled&&"disabled")}));t&&(E.ref=t),p?E.type=p:v||(E.type="button");var N=v||"button";return o.createElement(N,(0,a.Z)({},E,{className:b}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=u},7408:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),c=r.n(l),o=r(7294),s=r(9541),i=["xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,u=e.as,m=void 0===u?"div":u,f=(0,n.Z)(e,["bsPrefix","className","as"]),d=(0,s.vE)(r,"col"),p=[],v=[];return i.forEach((function(e){var t,r,a,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var l=n.span;t=void 0===l||l,r=n.offset,a=n.order}else t=n;var c="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+d+c:""+d+c+"-"+t),null!=a&&v.push("order"+c+"-"+a),null!=r&&v.push("offset"+c+"-"+r)})),p.length||p.push(d),o.createElement(m,(0,a.Z)({},f,{ref:t,className:c().apply(void 0,[l].concat(p,v))}))}));u.displayName="Col",t.Z=u},6187:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),c=r.n(l),o=r(7294),s=r(9541),i=o.forwardRef((function(e,t){var r=e.bsPrefix,l=e.fluid,i=e.as,u=void 0===i?"div":i,m=e.className,f=(0,n.Z)(e,["bsPrefix","fluid","as","className"]),d=(0,s.vE)(r,"container"),p="string"==typeof l?"-"+l:"-fluid";return o.createElement(u,(0,a.Z)({ref:t},f,{className:c()(m,l?""+d+p:d)}))}));i.displayName="Container",i.defaultProps={fluid:!1},t.Z=i},994:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(5900),c=r.n(l),o=r(7294),s=r(9541),i=["xl","lg","md","sm","xs"],u=o.forwardRef((function(e,t){var r=e.bsPrefix,l=e.className,u=e.noGutters,m=e.as,f=void 0===m?"div":m,d=(0,n.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,s.vE)(r,"row"),v=p+"-cols",E=[];return i.forEach((function(e){var t,r=d[e];delete d[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"==typeof r?r.cols:r)&&E.push(""+v+a+"-"+t)})),o.createElement(f,(0,a.Z)({ref:t},d,{className:c().apply(void 0,[l,p,u&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.Z=u},6306:function(e,t,r){"use strict";var a=r(2122),n=r(9756),l=r(7294),c=r(9758);function o(e){return!e||"#"===e.trim()}var s=l.forwardRef((function(e,t){var r=e.as,s=void 0===r?"a":r,i=e.disabled,u=e.onKeyDown,m=(0,n.Z)(e,["as","disabled","onKeyDown"]),f=function(e){var t=m.href,r=m.onClick;(i||o(t))&&e.preventDefault(),i?e.stopPropagation():r&&r(e)};return o(m.href)&&(m.role=m.role||"button",m.href=m.href||"#"),i&&(m.tabIndex=-1,m["aria-disabled"]=!0),l.createElement(s,(0,a.Z)({ref:t},m,{onClick:f,onKeyDown:(0,c.Z)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));s.displayName="SafeAnchor",t.Z=s},9541:function(e,t,r){"use strict";r.d(t,{vE:function(){return l}});var a=r(7294),n=a.createContext({});n.Consumer,n.Provider;function l(e,t){var r=(0,a.useContext)(n);return e||r[t]||t}},9758:function(e,t){"use strict";t.Z=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),null)}},9019:function(e,t,r){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var c=l(r(7294));t.default=function(e){var t=c.useState(0),r=t[0],a=t[1],n=e.transitionDuration||400,l=e.delay||50,o=e.wrapperTag||"div",s=e.childTag||"div",i=void 0===e.visible||e.visible;return c.useEffect((function(){var t=c.default.Children.count(e.children);if(i||(t=0),t==r){var o=setTimeout((function(){e.onComplete&&e.onComplete()}),n);return function(){return clearTimeout(o)}}var s=t>r?1:-1,u=setTimeout((function(){a(r+s)}),l);return function(){return clearTimeout(u)}}),[c.default.Children.count(e.children),l,r,i,n]),c.default.createElement(o,{className:e.className},c.default.Children.map(e.children,(function(t,a){return c.default.createElement(s,{className:e.childClassName,style:{transition:"opacity "+n+"ms, transform "+n+"ms",transform:r>a?"none":"translateY(20px)",opacity:r>a?1:0}},t)})))}},160:function(e,t,r){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(9019);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a(n).default}})},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),c=function(){return(c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function i(e){return function(t){return a.createElement(u,c({attr:c({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var r,n=e.attr,l=e.size,s=e.title,i=o(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},5188:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var a=r(7294),n=r(6187),l=r(6594),c=r(994),o=r(7408),s=r.p+"static/Tic-Tac-Dino-high-1de0c175da6358194696786f482bdc46.gif",i=r.p+"static/ETC-6a94019d0ed0a819d16299846666e69e.gif",u=r.p+"static/loose-end-e3005e0ddc1e57c4197ad39655f613ce.gif",m=r.p+"static/baggle-a18c24542e41005b38113b4f5d6387c9.gif",f=r.p+"static/TV-09987afdffd15b21b385e005114128c8.png",d=r(9463);function p(){return a.createElement("div",{className:"project-description"},a.createElement("div",{className:"curly-brace"},"{"),a.createElement("div",{className:"description-contents"},a.createElement("h3",{className:"h3-portfolio"},"My Projects"),a.createElement("p",{className:"p-portfolio"},"Between December 2020 and March 2021, I completed General Assembly's Software Development course - a full-time, immersive course that look place over 12 weeks. Find out more about my projects by clicking on the TV buttons above."),a.createElement("div",{className:"project-links"},a.createElement("a",{className:"project-links",href:"https://github.com/ketka82uk",target:"_blank",rel:"noreferrer"},a.createElement(d.pZu,null)," Visit my GitHub"))),a.createElement("div",{className:"curly-brace"},"}"))}function v(){return a.createElement("div",{className:"project-description"},a.createElement("div",{className:"curly-brace"},"{"),a.createElement("div",{className:"description-contents"},a.createElement("h3",{className:"h3-portfolio"},"Tic-Tac-Dino! | Individual"),a.createElement("p",{className:"p-portfolio"},"The first project I completed as part of General Assembly's Software Engineering course in Jan 2021. Uses vanilla JS, HTML and CSS to create a 2D grid-based game."),a.createElement("p",{className:"p-portfolio",style:{fontSize:"30px"}},a.createElement(d.vl3,null)," ",a.createElement(d.PSn,null)," ",a.createElement(d.H5g,null)),a.createElement("div",{className:"project-links"},a.createElement("a",{className:"project-links",href:"https://github.com/ketka82uk/Tic-Tac-Dino/blob/master/README.md",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}},"Read more |"),a.createElement("a",{className:"project-links",href:"https://ketka82uk.github.io/Tic-Tac-Dino/",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}}," Play Tic-Tac-Dino!"))),a.createElement("div",{className:"curly-brace"},"}"))}function E(){return a.createElement("div",{className:"project-description"},a.createElement("div",{className:"curly-brace"},"{"),a.createElement("div",{className:"description-contents"},a.createElement("h3",{className:"h3-portfolio"},"ETC. News | Pairs"),a.createElement("p",{className:"p-portfolio"},"Second project for General Assembly Software Engineering course. A 48-hour, pair programming 'hackathon' to create an app with a React frontend that consumes an external REST API (newsapi.org)."),a.createElement("p",{className:"p-portfolio",style:{fontSize:"30px"}},a.createElement(d.pNp,null)," ",a.createElement(d.VjD,null)," ",a.createElement(d.u8q,null)," ",a.createElement(d.tsj,null)),a.createElement("div",{className:"project-links"},a.createElement("a",{className:"project-links",href:"https://github.com/ketka82uk/ETC-News#readme",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}},"Read more |"),a.createElement("a",{className:"project-links",href:"https://ketka82uk.github.io/ETC-News/",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}}," Go to ETC. News"))),a.createElement("div",{className:"curly-brace"},"}"))}function h(){return a.createElement("div",{className:"project-description"},a.createElement("div",{className:"curly-brace"},"{"),a.createElement("div",{className:"description-contents"},a.createElement("h3",{className:"h3-portfolio"},"Loose End | Group"),a.createElement("p",{className:"p-portfolio"},"Third project for General Assembly Software Engineering Course. Working with three other students over a week, we created Loose End, a meet-up and tourism site. Loose End was my first experience of a full-stack application, using a MERN stack and our own API."),a.createElement("p",{className:"p-portfolio",style:{fontSize:"30px"}},a.createElement(d.t$b,null)," ",a.createElement(d.pNp,null)," ",a.createElement(d.VjD,null)," ",a.createElement(d.u8q,null)," ",a.createElement(d.tsj,null)),a.createElement("div",{className:"project-links"},a.createElement("a",{className:"project-links",href:"https://github.com/ketka82uk/Loose-End#readme",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}},"Read more |"),a.createElement("a",{className:"project-links",href:"https://loose-end-ga.herokuapp.com/",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}}," Visit Loose End"))),a.createElement("div",{className:"curly-brace"},"}"))}var b=r(4641);function N(){return a.createElement("div",{className:"project-description"},a.createElement("div",{className:"curly-brace"},"{"),a.createElement("div",{className:"description-contents"},a.createElement("h3",{className:"h3-portfolio"},"Baggle! | Group"),a.createElement("p",{className:"p-portfolio"},"Final project for General Assembly Software Engineering Course. A group of three of us created Baggle, a modern bartering site. Baggle is a full-stack application using a Flask REST framework on a Python Flask API to serve data from a PostgreSQL database."),a.createElement("p",{className:"p-portfolio",style:{fontSize:"30px"}},a.createElement(b.Z85,null)," ",a.createElement(d.O1b,null)," ",a.createElement(d.u4B,null)," ",a.createElement(d.pNp,null)," ",a.createElement(d.VjD,null)," ",a.createElement(d.u8q,null)," ",a.createElement(d.tsj,null)),a.createElement("div",{className:"project-links"},a.createElement("a",{className:"project-links",href:"https://github.com/ketka82uk/Baggle#readme",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}},"Read more |"),a.createElement("a",{className:"project-links",href:"http://gobaggle.herokuapp.com/",target:"_blank",rel:"noreferrer",style:{color:"#2c497f"}}," Visit Baggle!"))),a.createElement("div",{className:"curly-brace"},"}"))}var y=r(160),g=r.n(y);function k(){var e,t,r,d,b=(0,a.useState)(!0),y=b[0],k=b[1],j=(0,a.useState)(!1),w=j[0],P=j[1],Z=(0,a.useState)(!1),C=Z[0],x=Z[1],T=(0,a.useState)(!1),O=T[0],S=T[1],_=(0,a.useState)(!1),D=_[0],A=_[1],R=function(){P(!w),k(!!w),x(!1),S(!1),A(!1)},I=function(){x(!C),k(!!C),P(!1),S(!1),A(!1)},G=function(){S(!O),k(!!O),P(!1),x(!1),A(!1)},z=function(){A(!D),k(!!D),P(!1),x(!1),S(!1)};return a.createElement("div",{className:"portfolio-background"},a.createElement(n.Z,{fluid:!0},a.createElement(c.Z,{className:"portfolio-upper-section"},a.createElement(o.Z,null,a.createElement("div",{className:"tv-section"},a.createElement("div",{className:"outer-tv-container"},y&&a.createElement("div",{className:"inner-tv-container"}),w&&a.createElement("div",{className:"project-one",style:{backgroundImage:"url("+s+")",backgroundSize:"contain"}}),C&&a.createElement("div",{className:"project-one",style:{backgroundImage:"url("+i+")"}}),O&&a.createElement("div",{className:"project-one",style:{backgroundImage:"url("+u+")"}}),D&&a.createElement("div",{className:"project-one",style:{backgroundImage:"url("+m+")"}}),a.createElement("div",{className:"tv"},a.createElement("div",{className:"button-overlay"},a.createElement("div",{className:"button-container"},a.createElement(l.Z,{className:"channel-button",onClick:R},"Project 1"),a.createElement(l.Z,{className:"channel-button",onClick:I},"Project 2"),a.createElement(l.Z,{className:"channel-button",onClick:G},"Project 3"),a.createElement(l.Z,{className:"channel-button",onClick:z},"Project 4"))),a.createElement("img",{src:f,alt:"retro TV",height:"480px",className:"img-tv"})))))),a.createElement(c.Z,{className:"portfolio-lower-section"},a.createElement(o.Z,((e={lg:0}).lg=1,e)),a.createElement(o.Z,((t={lg:0}).lg=4,t),a.createElement("div",{className:"mobile-buttons"},a.createElement(l.Z,{className:"sml-channel-button",onClick:R},"Project 1"),a.createElement(l.Z,{className:"sml-channel-button",onClick:I},"Project 2"),a.createElement(l.Z,{className:"sml-channel-button",onClick:G},"Project 3"),a.createElement(l.Z,{className:"sml-channel-button",onClick:z},"Project 4")),a.createElement("div",{className:"portfolio-header-section"},a.createElement("div",{className:"portfolio-header"},a.createElement("h2",{className:"h2-portfolio"},"myWork()")))),a.createElement(o.Z,((r={lg:12}).lg=6,r),a.createElement("div",{className:"portfolio-description-section"},y&&a.createElement("div",{className:"portfolio-description"},a.createElement(g(),{delay:"100",transitionDuration:"1000"},a.createElement(p,null))),w&&a.createElement("div",{className:"portfolio-description"},a.createElement(g(),{delay:"100",transitionDuration:"1000"},a.createElement(v,null))),C&&a.createElement("div",{className:"portfolio-description"},a.createElement(g(),{delay:"100",transitionDuration:"1000"},a.createElement(E,null))),O&&a.createElement("div",{className:"portfolio-description"},a.createElement(g(),{delay:"100",transitionDuration:"1000"},a.createElement(h,null))),D&&a.createElement("div",{className:"portfolio-description"},a.createElement(g(),{delay:"100",transitionDuration:"1000"},a.createElement(N,null))))),a.createElement(o.Z,((d={lg:0}).lg=1,d)))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-5c4a044e9ab0403a2848.js.map