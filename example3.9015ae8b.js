parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"a8tw":[function(require,module,exports) {
"use strict";exports.__esModule=!0,exports.isTileLayer=function(e){return"tilelayer"===e.type},exports.isGroupLayer=function(e){return"group"===e.type},exports.isObjectLayer=function(e){return"objectgroup"===e.type},exports.isImageLayer=function(e){return"imagelayer"===e.type},exports.isTilemapObject=function(e){return!!e.gid},exports.isEllipse=function(e){return!!e.ellipse},exports.isPoint=function(e){return!!e.point},exports.isPolygon=function(e){return!!e.polygon},exports.isPolyline=function(e){return!!e.polyline},exports.isText=function(e){return!!e.text},exports.isRectangle=function(e){return!(exports.isTilemapObject(e)||exports.isEllipse(e)||exports.isPoint(e)||exports.isPolygon(e)||exports.isPolyline(e)||exports.isText(e))};
},{}],"Mn6S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSetPromiseHandler=exports.orderByLru=exports.onCacheOperation=exports.isSameValueZero=exports.createGetKeyIndex=exports.createAreKeysEqual=exports.cloneArray=exports.assign=void 0;var e=Object.prototype.hasOwnProperty,r=function(r){for(var t,n=0;n<(arguments.length<=1?0:arguments.length-1);n++)if((t=n+1<1||arguments.length<=n+1?void 0:arguments[n+1])&&"object"==typeof t)for(var o in t)e.call(t,o)&&(r[o]=t[o]);return r};exports.assign=r;var t=function(e){var r=e.length;if(!r)return[];if(1===r)return[e[0]];if(2===r)return[e[0],e[1]];if(3===r)return[e[0],e[1],e[2]];for(var t=new Array(r),n=0;n<r;n++)t[n]=e[n];return t};exports.cloneArray=t;var n=function(e){return function(r,t){if(r.length!==t.length)return!1;for(var n=0,o=r.length;n<o;n++)if(!e(r[n],t[n]))return!1;return!0}};exports.createAreKeysEqual=n;var o=function(e,r){var t="function"==typeof r?r:n(e);return function(e,r){for(var n=0;n<e.length;n++)if(t(e[n],r))return n;return-1}};exports.createGetKeyIndex=o;var a=function(e,r){return e===r||e!=e&&r!=r};exports.isSameValueZero=a;var u=function(e,r,t){};exports.onCacheOperation=u;var i=function(e,r,t){for(var n=t;n--;)e[n+1]=e[n];e[0]=r};exports.orderByLru=i;var s=function(e){var r=o(e.isEqual,e.isMatchingKey);return function(t,n){var o=t.keys[0];t.values[0]=t.values[0].then(function(r){return e.onCacheHit(t,e,n),e.onCacheChange(t,e,n),r}).catch(function(e){var n=r(t.keys,o);throw~n&&(t.keys.splice(n,1),t.values.splice(n,1)),e})}};exports.createSetPromiseHandler=s;
},{}],"OM/V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=require("./utils");function r(e,r){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||(o[n]=e[n]);return o}function n(n,i){if(n.isMemoized)return n;var o=i||{},a=o.isEqual,t=void 0===a?e.isSameValueZero:a,s=o.isMatchingKey,c=o.isPromise,u=void 0!==c&&c,l=o.maxSize,h=void 0===l?1:l,d=o.onCacheAdd,y=void 0===d?e.onCacheOperation:d,f=o.onCacheChange,g=void 0===f?e.onCacheOperation:f,v=o.onCacheHit,p=void 0===v?e.onCacheOperation:v,C=o.transformKey,m=r(o,["isEqual","isMatchingKey","isPromise","maxSize","onCacheAdd","onCacheChange","onCacheHit","transformKey"]),z=(0,e.assign)({},m,{isEqual:t,isMatchingKey:s,isPromise:u,maxSize:h,onCacheAdd:y,onCacheChange:g,onCacheHit:p,transformKey:C}),b=(0,e.createGetKeyIndex)(t,s),x=(0,e.createSetPromiseHandler)(z),A=!(!C&&!s),K={keys:[],get size(){return K.keys.length},values:[]},O=K.keys,k=K.values;function M(){var r=arguments,i=A?(0,e.cloneArray)(r):r,o=C?C(i):i,a=b(O,o);if(~a)p(K,z,M),a&&((0,e.orderByLru)(O,O[a],a),(0,e.orderByLru)(k,k[a],a),g(K,z,M));else{O.length>=h&&(O.pop(),k.pop());var t=A?o:(0,e.cloneArray)(i),s=n.apply(this,r);(0,e.orderByLru)(O,t,O.length),(0,e.orderByLru)(k,s,k.length),u&&x(K,M),y(K,z,M),g(K,z,M)}return k[0]}return Object.defineProperties(M,{cache:{configurable:!0,get:function(){return K}},cacheSnapshot:{configurable:!0,get:function(){return{keys:(0,e.cloneArray)(K.keys),size:K.size,values:(0,e.cloneArray)(K.values)}}},isMemoized:{configurable:!0,get:function(){return!0}},options:{configurable:!0,get:function(){return z}}}),M}
},{"./utils":"Mn6S"}],"cj7h":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};exports.__esModule=!0;var r=require("./helpers"),a=t(require("micro-memoize")),i=a.default(function(e,t){var r=t.tiles;return a.default(function(t){var a=268435454&t,i=4026531840&t;if(!r||!r[a]||!r[a].animation)return t;var n=r[a].animation,o=n.reduce(function(e,t){return e+t.duration},0);e%=o;for(var l=0,s=0,f=n;s<f.length;s++){var y=f[s];if((l+=y.duration)>=e)return 1+(y.tileid|i)}return t},{maxSize:Number.POSITIVE_INFINITY})},{maxSize:2});function n(e){var t=e.layer;r.isTileLayer(t)?o(e):r.isGroupLayer(t)?l(e):r.isObjectLayer(t)?s(e):r.isImageLayer(t)&&f(e)}function o(e){var t=e.layer,r=e.context,a=e.tileSet,n=e.tmxJson,o=n.width,l=n.height,s=e.tsxJson,f=e.animationTime,c=void 0===f?0:f,h=e.lastAnimationTime;if(Array.isArray(t.data))for(var u=i(c,s),v=h?i(h,s):u,x=0;x<l;x++)for(var d=0;d<o;d++){var g=x*o+d;if(0!==t.data[g]){var m=u(t.data[g]);if(h)if(v(t.data[g])===m)continue;r.save(),y({x:d,y:x,tileIndex:m,context:r,tileSet:a,layer:t,tsxJson:s}),r.restore()}}}function l(t){var r=t.layer;if(Array.isArray(r.layers))for(var a=0,i=r.layers;a<i.length;a++){var o=i[a];n(e({},t,{layer:o}))}}function s(e){var t=e.layer,a=e.context;if(Array.isArray(t.objects))for(var i=0,n=t.objects;i<n.length;i++){var o=n[i];if(a.save(),a.translate(o.x,o.y),r.isTilemapObject(o));else if(r.isEllipse(o))a.ellipse(o.width/2,o.height/2,o.width/2,o.height/2,0,0,2*Math.PI),a.stroke();else if(r.isPoint(o))a.rect(0,0,1,1),a.stroke();else if(r.isPolygon(o)){a.beginPath(),(h=o.polygon[0])&&a.moveTo(h.x,h.y);for(var l=0,s=o.polygon;l<s.length;l++){var f=s[l],y=f.x,c=f.y;a.lineTo(y,c)}h&&a.lineTo(h.x,h.y),a.closePath(),a.stroke()}else if(r.isPolyline(o)){var h;a.beginPath(),(h=o.polyline[0])&&a.moveTo(h.x,h.y);for(var u=0,v=o.polyline;u<v.length;u++){var x=v[u];y=x.x,c=x.y;a.lineTo(y,c)}a.closePath(),a.stroke()}else if(r.isText(o))for(var d=0,g=Object.values(o.text);d<g.length;d++){var m=g[d];a.fillText(m,0,0)}else a.rect(0,0,o.width,o.height),a.stroke();a.fillText(o.name,0,-5),a.restore()}}function f(e){throw"drawing ImageLayers is not implemented yet!"}function y(e){var t=e.x,r=e.y,a=e.tileIndex,i=e.context,n=e.tileSet,o=e.layer,l=e.tsxJson,s=l.columns,f=l.tileheight,y=l.tilewidth,c=l.spacing,h=2147483648&a,u=1073741824&a,v=536870912&a,x=(268435455&a)-1,d=x%s,g=Math.floor(x/s),m=t*y,p=r*f,T=(o.x+d)*(y+c),I=(o.y+g)*(f+c);i.translate(m,p),h&&(i.translate(y,0),i.scale(-1,1)),u&&(i.translate(0,f),i.scale(1,-1)),v&&(i.rotate(Math.PI/2),i.scale(1,-1)),i.drawImage(n,T,I,y,f,0,0,y,f)}exports.drawCanvasLayer=n;
},{"./helpers":"a8tw","micro-memoize":"OM/V"}],"luMI":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,r=1,i=arguments.length;r<i;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};exports.__esModule=!0;var e=require("./helpers");function r(r,i){var a=i.tilewidth,n=i.tileheight,h=[],o=function(t,e){return(h[e]||[])[t]},s=function(t,e,r){h[e]||(h[e]=[]),h[e][t]=r};return function(t){if(e.isTileLayer(t)&&t.data)for(var r=0;r<t.height;r++)for(var i=0;i<t.width;i++){var a=t.x+i,n=t.y+r,u=r*t.width+i;if(t.data[u]){var f={id:1e4*(t.id||0)+u,name:"",type:"",x:a,y:n,width:1,height:1,visible:!0},c=o(a-1,n);c&&1===c.height&&(c.width++,f=c);var l=o(a,n-1);if(l&&l.x==f.x&&l.width===f.width){for(var y=f.x;y<f.x+f.width;y++)s(y,n,l);l.height++,f=l}s(a,n,f)}}for(var d=[],p=0,v=h;p<v.length;p++){var g=v[p];if(g)for(var w=0,x=g;w<x.length;w++)(f=x[w])&&!d.includes(f)&&d.push(f)}return d}(r).map(function(e){return t({},e,{x:e.x*a,y:e.y*n,width:e.width*a,height:e.height*n})})}function i(t,a){return e.isTileLayer(t)?r(t,a):e.isObjectLayer(t)?t.objects:e.isGroupLayer(t)?t.layers.reduce(function(t,e){return t.push.apply(t,i(e,a)),t},[]):(e.isImageLayer(t),[])}exports.tileLayerToRectangles=r,exports.layerToGeometryObjects=i;
},{"./helpers":"a8tw"}],"JZba":[function(require,module,exports) {
"use strict";exports.__esModule=!0;
},{}],"HlC0":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(a,s)}c((r=r.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(s){i=[6,s],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};exports.__esModule=!0;var t=require("./helpers");function r(r,i,a){return void 0===a&&(a={}),e(this,void 0,Promise,function(){var e,s,c;return n(this,function(n){switch(n.label){case 0:return[4,fetch(new URL(r,i).toString())];case 1:return[4,n.sent().json()];case 2:return(e=n.sent()).layers=e.layers.map(function(e){return t.isTileLayer(e)?o(a)(e):e}),[4,fetch(new URL(e.tilesets[0].source,i).toString())];case 3:return[4,n.sent().json()];case 4:return s=n.sent(),c=document.createElement("img"),[4,new Promise(function(e){c.onload=e,c.src=new URL(s.image,i).toString()})];case 5:return n.sent(),[2,{tmxJson:e,tsxJson:s,tileSet:c}]}})})}exports.loadMap=r;var o=function(e){return function(n){var t=function(e){if(!e)throw new Error("encountered compressed data, but no correct decompression function was given!");n.data&&(n.data=e(n.data)),n.chunks&&n.chunks.forEach(function(n){"string"==typeof n.data&&(n.data=e(n.data))}),n.encoding="csv",delete n.compression};return"base64"===n.encoding&&"zlib"===n.compression&&t(e.decompressZlib),"base64"===n.encoding&&"gzip"===n.compression&&t(e.decompressGzip),n}};
},{"./helpers":"a8tw"}],"HHf/":[function(require,module,exports) {
"use strict";function e(e){for(var r in e)exports.hasOwnProperty(r)||(exports[r]=e[r])}var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};exports.__esModule=!0,e(require("./canvas"));var t=require("./geometry");exports.tileLayerToRectangles=t.tileLayerToRectangles;var s=require("./model/tiled");exports.TmxJson=s.TmxJson,exports.TsxJson=s.TsxJson,exports.Layer=s.Layer,exports.Tileset=s.Tileset;var o=require("./loadMap");exports.loadMap=o.loadMap;var a=r(require("./helpers"));exports.helpers=a;
},{"./canvas":"cj7h","./geometry":"luMI","./model/tiled":"JZba","./loadMap":"HlC0","./helpers":"a8tw"}],"VQGO":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},e=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}},r=this&&this.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i};exports.__esModule=!0;var n=require("tiled-canvas"),o=(""+window.location.origin+window.location.pathname).replace(/^(.*?)(\/[^\/]*\.[^\/]*)?$/,"$1");window.example3=function(a){a.style.position="relative",n.loadMap("island.tmx.json",o+"/rpg/").then(function(o){var i,l,s=[],c=Date.now();try{for(var u=e(o.tmxJson.layers.entries()),y=u.next();!y.done;y=u.next()){var f=r(y.value,2),h=f[0],d=f[1],v=document.createElement("canvas");v.width=o.tmxJson.width*o.tsxJson.tilewidth,v.height=o.tmxJson.height*o.tsxJson.tileheight,v.style.position="absolute",v.style.top="0",v.style.left="0",a.appendChild(v);var m=v.getContext("2d");if(!m)throw new Error("could not get context");s[h]=m;var p=t({},o,{context:m,layer:d,animationTime:c});n.drawCanvasLayer(p)}}catch(w){i={error:w}}finally{try{y&&!y.done&&(l=u.return)&&l.call(u)}finally{if(i)throw i.error}}requestAnimationFrame(function a(){var i,l,u=Date.now();if(requestAnimationFrame(a),!(u-c<=67)){try{for(var y=e(o.tmxJson.layers.entries()),f=y.next();!f.done;f=y.next()){var h=r(f.value,2),d=h[0],v=h[1],m=s[d],p=t({},o,{context:m,layer:v,animationTime:u,lastAnimationTime:c});n.drawCanvasLayer(p)}}catch(w){i={error:w}}finally{try{f&&!f.done&&(l=y.return)&&l.call(y)}finally{if(i)throw i.error}}c=u}})})};
},{"tiled-canvas":"HHf/"}]},{},["VQGO"], null)
//# sourceMappingURL=https://phryneas.github.io/tiled-canvas/example3.9015ae8b.map