!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a=new(function(){"use strict";function r(){e(t)(this,r),this.searchQuery=""}return e(n)(r,[{key:"fetchData",value:function(){fetch("".concat("https://newsapi.org/v2/everything","?q=").concat(this.searchQuery,"&apiKey=").concat("525ac24a30b345fc93a5e4d238eecf81","&pageSize=5&page=1")).then((function(e){return e.json()})).then((function(e){var t=e.articles;return console.log(t)}))}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),r}());({form:document.querySelector(".js-search-form")}).form.addEventListener("submit",(function(e){e.preventDefault(),a.searchQuery=e.currentTarget.elements.query.value,a.fetchData()}))}();
//# sourceMappingURL=index.d2cc1560.js.map
