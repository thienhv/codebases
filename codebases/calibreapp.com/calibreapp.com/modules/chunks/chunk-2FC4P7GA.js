import{d as y,i as I}from"./chunk-ORNWO27Z.js";var w=y((Q,O)=>{O.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}}});var D=y((V,P)=>{"use strict";var U=w(),_={"text/plain":"Text","text/html":"Url",default:"Text"},M="Copy to clipboard: #{key}, Enter";function N(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function z(e,t){var r,n,o,i,c,a,u=!1;t||(t={}),r=t.debug||!1;try{o=U(),i=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData=="undefined"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=_[t.format]||_.default;window.clipboardData.setData(p,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),c.addRange(i);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");u=!0}catch(l){r&&console.error("unable to copy using execCommand: ",l),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),n=N("message"in t?t.message:M),window.prompt(n,e)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),a&&document.body.removeChild(a),o()}return u}P.exports=z});var k=y(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.CopyToClipboard=void 0;var d=x(I()),K=x(D());function x(e){return e&&e.__esModule?e:{default:e}}function b(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?b=function(r){return typeof r}:b=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},b(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?E(r,!0).forEach(function(n){h(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function W(e,t){if(e==null)return{};var r=$(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function $(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function X(e,t,r){return t&&S(e.prototype,t),r&&S(e,r),e}function B(e,t){return t&&(b(t)==="object"||typeof t=="function")?t:T(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},g(e)}function T(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},v(e,t)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){G(t,e);function t(){var r,n;F(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=B(this,(r=g(t)).call.apply(r,[this].concat(i))),h(T(n),"onClick",function(a){var u=n.props,f=u.text,l=u.onCopy,p=u.children,A=u.options,s=d.default.Children.only(p),q=(0,K.default)(f,A);l&&l(f,q),s&&s.props&&typeof s.props.onClick=="function"&&s.props.onClick(a)}),n}return X(t,[{key:"render",value:function(){var n=this.props,o=n.text,i=n.onCopy,c=n.options,a=n.children,u=W(n,["text","onCopy","options","children"]),f=d.default.Children.only(a);return d.default.cloneElement(f,L({},u,{onClick:this.onClick}))}}]),t}(d.default.PureComponent);m.CopyToClipboard=j;h(j,"defaultProps",{onCopy:void 0,options:void 0})});var J=y((Z,R)=>{"use strict";var H=k(),C=H.CopyToClipboard;C.CopyToClipboard=C;R.exports=C});export{J as a};
//# sourceMappingURL=chunk-2FC4P7GA.js.map
