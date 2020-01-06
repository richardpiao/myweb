parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VOYe":[function(require,module,exports) {
"use strict";function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var e=0;e<o.length;e++){var i=o[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBalls=r,exports.Ball=void 0;var i=function(){function o(e,i){t(this,o),this.position={x:Math.random()*e,y:Math.random()*i},this.r=.5,this.speed={x:(Math.random()-.5)/10,y:(Math.random()-.5)/10},this.shadowBlur=3,this.color="rgba(255,255,255,1)"}return e(o,[{key:"draw",value:function(t){t.beginPath(),t.shadowColor=this.color,t.shadowBlur=this.shadowBlur,t.fillStyle=this.color,t.arc(this.position.x,this.position.y,this.r,0,2*Math.PI),t.fill(),t.closePath()}},{key:"update",value:function(){this.position.x+=this.speed.x,this.position.y+=this.speed.y}}]),o}();function r(t,o,e){for(var r=[],n=0;n<t;n++)r.push(new i(o,e));return r}exports.Ball=i;
},{}],"phaB":[function(require,module,exports) {
"use strict";function o(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.EventHandler=void 0;var e=function e(t,c,n){o(this,e);var r=document.querySelectorAll(".side"),a=0,i=document.querySelector(".canvas-3d").classList[1].split("-")[1],s=0;r.forEach(function(o){return o.addEventListener("click",function(){a=1,++i>c.length-1&&(i=0),document.querySelector(".canvas-3d").classList.replace("color-".concat(s),"color-".concat(i)),r.forEach(function(o){o.style.boxShadow=c[i],o.style.backgroundColor=n[i]}),t.forEach(function(o){var e=Math.sqrt(Math.pow(document.querySelector(".cube-container").offsetLeft-o.position.x,2)+Math.pow(document.querySelector(".cube-container").offsetTop-o.position.y,2))/1.8;setTimeout(function(){o.r=3,o.color=n[i],o.shadowBlur=18},e),setTimeout(function(){o.r=.5,o.color="rgba(255,255,255, 1)",o.shadowBlur=3},e+50)}),setTimeout(function(){a=0},1e3),document.querySelector(".gameplay").classList.add("flicker-".concat(i)),setTimeout(function(){document.querySelector(".gameplay").classList.remove("flicker-".concat(i))},100),document.querySelector(".gameplay").classList.replace("gameplay-".concat(s),"gameplay-".concat(i)),s=i})}),document.addEventListener("mousemove",function(o){0===a&&t.forEach(function(e){o.clientX>=e.position.x-35&&o.clientX<=e.position.x+35&&o.clientY>=e.position.y-35&&o.clientY<=e.position.y+35?(e.color=n[i],e.r=3,e.shadowBlur=18):(e.color="rgba(255,255,255,1)",e.r=.5,e.shadowBlur=3)})}),document.addEventListener("click",function(o){t.forEach(function(e){o.clientX>=e.position.x-35&&o.clientX<=e.position.x+35&&o.clientY>=e.position.y-35&&o.clientY<=e.position.y+35&&(e.speed.x=50*e.speed.x,e.speed.y=50*e.speed.y,e.backgroundColor=n[i])})}),document.querySelector(".canvas-3d").addEventListener("click",function(){a=1,++i>c.length-1&&(i=0),document.querySelector(".canvas-3d").classList.replace("color-".concat(s),"color-".concat(i)),t.forEach(function(o){var e=Math.sqrt(Math.pow(document.querySelector(".canvas-3d").offsetLeft-o.position.x,2)+Math.pow(document.querySelector(".canvas-3d").offsetTop-o.position.y,2))/1.8;setTimeout(function(){o.r=3,o.color=n[i],o.shadowBlur=18},e),setTimeout(function(){o.r=.5,o.color="rgba(255,255,255, 1)",o.shadowBlur=3},e+50)}),setTimeout(function(){a=0},1e3),s=i})};exports.EventHandler=e;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("./ball"),n=require("./eventhandler"),r=document.querySelector(".canvas"),t=r.getContext("2d"),i=window.innerWidth,a=window.innerHeight;r.width=i,r.height=a;var o=["rgb(97, 218, 251) 0px 0px 150px","rgb(65, 184, 131) 0px 0px 150px","rgb(223, 176, 122) 0px 0px 150px","rgb(221, 0, 49) 0px 0px 150px"],u=["rgba(97, 218, 251,1)","rgba(65, 184, 131,1)","rgba(223, 176, 122,1)","rgba(221, 0, 49,1)"],c=i/8,d=(0,e.createBalls)(c,i,a),p=new n.EventHandler(d,o,u),w=function(e,n){var r;return function(){var t=this,i=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(t,i)},n)}};window.addEventListener("resize",w(function(){i=window.innerWidth,a=window.innerHeight,r.width=i,r.height=a,c=i/8,d=(0,e.createBalls)(c,i,a),p=new n.EventHandler(d,o,u)},300)),function e(){t.clearRect(0,0,i,a),d.forEach(function(e){return e.update()}),d.forEach(function(e){return e.draw(t)}),requestAnimationFrame(e)}();
},{"./ball":"VOYe","./eventhandler":"phaB"}]},{},["A2T1"], null)
//# sourceMappingURL=/bundle.js.map