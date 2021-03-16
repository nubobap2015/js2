(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},462:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(705),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".cart-list {\n  background-color: #FFB656;\n}\n\n.red_border {\n  border: 4px double red;\n}\n\n.green_border {\n  border: 4px solid green;\n}\n",""]);const o=i},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],c=t.base?a[0]+t.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),h={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(h)):o.push({identifier:d,updater:p(h,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function h(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function p(e,t){var n,r,i;if(t.singleton){var o=f++;n=m||(m=c(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=c(t),r=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var c=a(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class t{constructor(){e(this,"name","MyAbstractList"),e(this,"_items",null),e(this,"_basket",null)}render(){console.log(`Отрисовка ${this.name}`)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i{constructor(e,t,n=null){r(this,"text",""),r(this,"callback",null),this.text=e,this.callback=t,this.params=n}render(e){if(e){const t=document.createElement("button");t.classList.add("btn"),t.innerText=this.text,e.appendChild(t),"function"==typeof this.callback&&t.addEventListener("click",(()=>{this.params?this.callback(...this.params):this.callback()}))}}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class s extends t{constructor({name:e,price:t,img:n,cnt:r},i){super(),o(this,"name","MyGoodItem"),o(this,"price",0),o(this,"img","/img/goodsimg/noimage.jpg"),o(this,"cnt",0),this.name=e,this.price=parseFloat(t),this.img=n,this.cnt=r,this._basket=i}addToCart(){let e;this._basket._items.forEach((t=>{this.name==t.name&&(e=t)})),e?this.cnt>e.cnt?e.cnt++:console.warn("Нет такого кол-ва товара"):this._basket.addToCart(this),this._basket.render()}render(e){if(super.render(),e)if(e.querySelector(`[name=${this.name}]`))console.log(`Пропускаю ${this.name}`);else{const t=document.createElement("div");t.setAttribute("name",this.name),t.innerHTML=`\n                Товар: ${this.name} (${this.price} руб.) - ${this.cnt} шт\n                <img src="${this.img}" />\n                <br><br><br>\n                `;const n=new i("+ в корзину",this.addToCart.bind(this));e.appendChild(t),n.render(t)}}}class a extends s{render(e){if(console.log(11111),e){const t=document.createElement("div");t.classList.add("MyBasketItem"),t.setAttribute("name",this.name),t.innerHTML=`\n                Товар: ${this.name} (${this.price} руб.) - ${this.cnt} шт\n                <img src="${this.img}" />\n                <br><br><br>\n                `,e.appendChild(t);const n=new i(" + ",(()=>{this.cnt++,this._basket.render()})),r=new i(" - ",(()=>{this.cnt--,this._basket.render()}));n.render(t),r.render(t)}}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=n(379),u=n.n(d),h=n(462);u()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;const m=new class extends t{constructor(){super(),c(this,"name","MyBasket"),c(this,"_items",[]);const e=document.querySelector(".cart-list");new i("Очистить",this.clearAll.bind(this)).render(e)}addToCart(e){this._items.push(new a({name:e.name,price:e.price,img:e.img,cnt:1},this))}updateSummary(){let e=0;this._items.forEach((t=>{e+=t.cnt*t.price})),document.querySelector(".summary").innerHTML=`Сумма заказа: ${e}`}clearAll(){this._items=[],document.querySelectorAll(".MyBasketItem").forEach((e=>{e.parentNode.removeChild(e)})),this.updateSummary()}render(){const e=document.querySelector(".cart-list");this._items.forEach((t=>{let n=e.querySelector(`[name=${t.name}]`);if(n)if(t.cnt>0){console.log("Изменение элемента"),n.innerHTML=`\n                                        Товар: ${t.name} (${t.price} руб.) - ${t.cnt} шт\n                                        <img src="${t.img}" />\n                                        <br><br><br>\n                                        `;const e=new i(" + ",(()=>{t.cnt++,t._basket.render()})),r=new i(" - ",(()=>{t.cnt--,t._basket.render()}));e.render(n),r.render(n)}else console.log("Удаление элемента"),n.parentNode.removeChild(n),this._items.splice(this._items.indexOf(n),1);else t.render(e),console.log("Прорисовка элемента")})),this.updateSummary()}};new class extends t{getMoreGoods(){this._numberOfDataFile++,this.fetchGoods().then((()=>{this.render()}))}constructor(e){console.log("Enter constructor() in MyGoodList"),super(),l(this,"name","MyGoodsList"),l(this,"_items",[]),l(this,"_numberOfDataFile",1),this._basket=e,this.fetchGoods().then((()=>{this.render()})),console.log(this._items),new i("Еще данных...",this.getMoreGoods.bind(this)).render(document.querySelector(".more-buttons"))}fetchGoods(){console.log("Enter fetchGoods() in MyGoodList");let e=[];const t=`${document.location.protocol}//${document.location.host}/json/data${this._numberOfDataFile}.json`;return console.log("dataFilePath in MyGoodList",t),fetch(t).then((e=>e.ok?e.json():Promise.reject(e))).then((t=>{console.log("RES - OK"),e=t.data.map((e=>{console.log(`Создан элемент ${e.name}`);let t=new s(e,this._basket);return console.log(t.name),t})),this._items=this._items.concat(e),console.log(this._items)})).catch((()=>{console.log("RES - FALSE"),document.querySelector(".more-buttons").style.display="none"}))}render(){super.render(),console.log("render");const e=document.querySelector(".goods-list");this._items.forEach((t=>{t.render(e)}))}}(m)})()})();