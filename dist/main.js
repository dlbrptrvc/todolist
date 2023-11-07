(()=>{"use strict";var n,e,t,r,o,i,a,s,p,c,d,l,u,f,x={426:(n,e,t)=>{t.d(e,{Z:()=>M});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),s=t(667),p=t.n(s),c=new URL(t(490),t.b),d=new URL(t(302),t.b),l=new URL(t(731),t.b),u=new URL(t(231),t.b),f=new URL(t(817),t.b),x=new URL(t(290),t.b),m=new URL(t(477),t.b),g=a()(o()),h=p()(c),b=p()(d),v=p()(l),y=p()(u),w=p()(f),k=p()(x),L=p()(m);g.push([n.id,`@font-face {\n    font-family: 'MenuFont';\n    src: url(${h})\n  }\n@font-face {\n    font-family: 'TitleFont';\n    src: url(${b})\n  }\n  \n  \n\n* {\n    /* border: 1px solid black; */\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --first-color: #e4f1fe; \n    --second-color: #8dc6ff; \n    --third-color: #22313f; \n    --fourth-color: #34495e;    \n}\n\nbody {\n    height: 100vh;\n}\n\n/* slide menu */\n.slidout {\n    transform: translateX(300px);    \n}\n\n.slidin {\n    transform: translateX(-300px);     \n}\n\n#menu {\n    position: fixed;\n    top: 0px;\n    left: -300px;\n    height: max(100vh,100%);\n    transition: 0.5s;\n    width:300px;\n    min-width: 300px;\n    background-color:var(--third-color);\n    color:var(--first-color);\n    display: flex;\n    flex-direction: column;\n}\n\n/* slide menubtn */\n#menubtn {\n    position: fixed;\n    width: 50px;\n    aspect-ratio: 1;\n    transition: 0.5s;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 50px 50px;\n}\n\n.open {\n    background-image: url(${v}); \n}\n\n.closed {\n    background-image: url(${y});   \n}\n\n.closemenu {\n    inset: 30px 0 0 330px\n}\n\n.openmenu {\n    inset: 30px 0 0 30px;\n}\n\n@media (min-width: 800px) {\n    #menubtn {\n        display:none;\n    }\n    .slidin {\n        transform: translateX(300px);\n    }\n    #menu {\n        transition: none;\n        position: relative;\n    }\n}\n\n#container {\n    display:flex;\n    height:max(100%,100vh);\n}\n\n#main {\n    width:100%;\n    height: max(100%,100vh);\n    background-color: white;\n    transition: 0.5s;\n}\n/* end of slide logic */\n/* main list css */\n\n#main {\n    display:flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.header {\n    text-align: center;\n    font-size: 50px;\n    font-family: TitleFont;\n    padding: 30px 10px 10px 10px;\n}\n\n.footer {\n    margin-top: auto;\n    display: flex;\n    justify-content: right;\n    align-items: center;\n    height:30px;\n    padding: 5px 5px 5px 5px;\n}\n\n#addbtn {\n    position: fixed;\n    width: 50px;\n    border-radius: 20px;\n    aspect-ratio: 1;\n    right:30px;\n    bottom:30px;\n    background-image: url(${w});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 50px 50px;\n}\n\n/* edittask popup */\n#flexwrapper{\n    display: none;\n    position: fixed;\n    top:0px;\n    left:0px;\n    width:max(100%,100vw);\n    height: max(100%,100vh);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: -1;\n    transition: 0.5s;\n    backdrop-filter: blur(2px);\n}\n#edittask {\n    padding:20px 20px 20px 20px;\n    width: min(100vw,500px);\n    height: min(100vh,500px);\n    display:flex;\n    flex-direction: column;\n    transition: 0.5s;\n    background-color: var(--first-color);\n    border: 1px solid var(--third-color);\n    border-radius: 10px;\n    /* https://smoothshadows.com/#djEsMSw1LDAuMDgsMjQsMzIsMCwjMDMwNzEyLCNmM2Y0ZjYsI2ZmZmZmZiwy */\nbox-shadow: 0px 1px 1px rgba(3, 7, 18, 0.02),\n0px 5px 4px rgba(3, 7, 18, 0.03),\n0px 12px 9px rgba(3, 7, 18, 0.05),\n0px 20px 15px rgba(3, 7, 18, 0.06),\n0px 32px 24px rgba(3, 7, 18, 0.08);\n\n}\n\n.infobtns {\n    margin-top: auto;\n    display: flex;\n    height: 50px;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n}\n\n.infobtn {\n    user-select: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width:100px;\n    height: 30px;\n    border-radius: 15px;\n    background-color: var(--third-color);\n    color: var(--first-color);\n    font-family: MenuFont;\n    font-size: 20px;\n}\n.infoitem {\n    margin: 20px 20px 20px 20px\n}\n.infotext {\n    font-family: MenuFont;\n    font-size: 20px;\n}\n\n.lineinput {\n    padding-left: 5px;\n    height: 30px;\n    width:90%;\n    align-self:center;\n    font-size: 16px;\n}\n\n.textinput {\n    padding: 5px 5px 5px 5px;\n    font-size: 16px;\n    padding-left: 5px;\n    height: 120px;\n    width:90%;\n    align-self: center;\n    resize:none;\n    font-family: Arial, Helvetica, sans-serif\n}\n#taskdate {\n    font-size: 16px;\n    font-family: Arial, Helvetica, sans-serif\n}\n\n/* menuitems */\n\n.menuitem {\n    padding: 20px;\n    font-size: 20px;\n    user-select: none;\n    font-family: MenuFont;\n    transition: 0.5s;\n}\n\n.menuitem:hover {\n    border: 1px solid var(--second-color);\n\n}\n\n.selectedmenuitem {\n    border-left: 4px solid var(--second-color);\n}\n\n/* listitems */\n\n#list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.listitem {\n    margin: 5px 5px 5px 5px;\n    width: 95%;\n    height: 30px;\n    border-radius: 15px;\n    border: 1px solid var(--third-color);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.left {\n    display: flex;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.left>*,\n.right>* {\n    padding: 0 5px 0 5px;\n}\n\n.checkbox {\n    margin: 0 0 0 10px;\n    width:20px;\n    aspect-ratio: 1;\n    border: 1px solid var(--fourth-color);\n}\n\n.edittaskbtn {\n    margin: 0 5px 0 0;\n    width:20px;\n    aspect-ratio: 1;\n    background-image: url(${k});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 20px 20px; \n}\n\n.removetaskbtn {\n    margin: 0 10px 0 0;\n    width:20px;\n    aspect-ratio: 1;\n    background-image: url(${L});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 20px 20px;\n}\n\n\n`,""]);const M=g},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var p=n[s],c=r.base?p[0]+r.base:p[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var u=t(l),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var x=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:x,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var p=r(n,o),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},490:(n,e,t)=>{n.exports=t.p+"cdb0de592ee74b674994.otf"},302:(n,e,t)=>{n.exports=t.p+"78a9f531a6a84509afc3.ttf"},817:(n,e,t)=>{n.exports=t.p+"f614e8d08e83dab96a79.png"},477:(n,e,t)=>{n.exports=t.p+"96c40803cb793f96b71c.png"},290:(n,e,t)=>{n.exports=t.p+"e901d82b3116ffc7d830.png"},231:(n,e,t)=>{n.exports=t.p+"7f919bcd88522f2654c0.png"},731:(n,e,t)=>{n.exports=t.p+"6e3186e87cb5d4f829fd.png"}},m={};function g(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return x[n](t,t.exports,g),t.exports}g.m=x,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),i=g.n(o),a=g(565),s=g.n(a),p=g(216),c=g.n(p),d=g(589),l=g.n(d),u=g(426),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,menubtn.addEventListener("click",(()=>{"false"==menubtn.dataset.open?(menu.className="slidout",menubtn.className="closemenu",menubtn.dataset.open="true",menubtn.classList.remove("closed"),menubtn.classList.add("open")):(menu.className="slidin",menubtn.className="openmenu",menubtn.dataset.open="false",menubtn.classList.remove("open"),menubtn.classList.add("closed"))})),menu.addEventListener("click",(n=>{menu.dataset.selected!==n.target.id&&n.target.parentElement===menu&&(window[menu.dataset.selected].classList.remove("selectedmenuitem"),n.target.classList.add("selectedmenuitem"),menu.dataset.selected=n.target.id)})),addbtn.addEventListener("click",(()=>{console.log("heres flex"),flexwrapper.style.zIndex="10"}))})();