!function e(t,n,a){function r(s,o){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return r(n?n:e)},c,c.exports,e,t,n,a)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<a.length;s++)r(a[s]);return r}({1:[function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var s in a)a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var s in a)a.hasOwnProperty(s)&&(o[s]=a[s]);o[l]=i[l]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var s,o,l=a;l&&!e.test(l.className);)l=l.parentNode;if(l&&(s=(l.className.match(e)||[,""])[1],o=t.languages[s]),o){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var c=a.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:a,language:s,grammar:o,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var p=new Worker(t.filename);p.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),t.hooks.run("after-highlight",u)},p.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",u)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var o=n[s];o="Array"===t.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],u=c.inside,p=!!c.lookbehind,f=0,d=c.alias;c=c.pattern||c;for(var g=0;g<r.length;g++){var h=r[g];if(r.length>e.length)break e;if(!(h instanceof a)){c.lastIndex=0;var m=c.exec(h);if(m){p&&(f=m[1].length);var v=m.index-1+f,m=m[0].slice(f),b=m.length,k=v+b,y=h.slice(0,v+1),w=h.slice(k+1),x=[g,1];y&&x.push(y);var E=new a(s,u?t.tokenize(m,u):m,d);x.push(E),w&&x.push(w),Array.prototype.splice.apply(r,x)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}t.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=l+'="'+(i.attributes[l]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+o+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof t&&t.exports&&(t.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/gi},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,string:/("|')(\\\n|\\?.)*?\1/g,property:/(\b|\B)[\w-]+(?=\s*:)/gi,important:/\B!important\b/gi,punctuation:/[\{\};:]/g,"function":/[-a-z0-9]+(?=\()/gi},n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/gi,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').+?\1/gi,inside:{"attr-name":{pattern:/^\s*style/gi,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/gi,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/g,"function":/(?!\d)[a-z0-9_$]+(?=\()/gi}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}}),function(){if(self.Prism&&self.document&&document.querySelector){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){var a=t.getAttribute("data-src"),r=(a.match(/\.(\w+)$/)||[,""])[1],i=e[r]||r,s=document.createElement("code");s.className="language-"+i,t.textContent="",s.textContent="Loading…",t.appendChild(s);var o=new XMLHttpRequest;o.open("GET",a,!0),o.onreadystatechange=function(){4==o.readyState&&(o.status<400&&o.responseText?(s.textContent=o.responseText,n.highlightElement(s)):s.textContent=o.status>=400?"✖ Error "+o.status+" while fetching file: "+o.statusText:"✖ Error: File does not exist or is empty")},o.send(null)})}}()},{}],2:[function(e,t){t.exports=function(){return function(e){function t(t){var n=t.getAttribute("data-bespoke-backdrop");if(n){var a=document.createElement("div");return a.className=n,a.classList.add("bespoke-backdrop"),e.parent.appendChild(a),a}}function n(t){if(t){var n=i.indexOf(t),s=e.slide();a(t,"active"),a(t,"inactive"),a(t,"before"),a(t,"after"),n!==s?(r(t,"inactive"),r(t,s>n?"before":"after")):r(t,"active")}}function a(e,t){e.classList.remove("bespoke-backdrop-"+t)}function r(e,t){e.classList.add("bespoke-backdrop-"+t)}var i;i=e.slides.map(t),e.on("activate",function(){i.forEach(n)})}}},{}],3:[function(e,t){t.exports=function(e){return function(t){var n,a,r=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),i=function(){var e=n+1;return l(1)?(o(n,a+1),!1):(r[e]&&o(e,0),void 0)},s=function(){var e=n-1;return l(-1)?(o(n,a-1),!1):(r[e]&&o(e,r[e].length-1),void 0)},o=function(e,t){n=e,a=t,r.forEach(function(n,a){n.forEach(function(n,r){n.classList.add("bespoke-bullet"),e>a||a===e&&t>=r?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),a===e&&r===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},l=function(e){return void 0!==r[n][a+e]};t.on("next",i),t.on("prev",s),t.on("slide",function(e){o(e.index,0)}),o(0,0)}}},{}],4:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},a=function(a,r){var i=e.slides[e.slide()],s=r-e.slide(),o=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,a)),a!==i&&["inactive",o,o+"-"+Math.abs(s)].map(t.bind(null,a))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(r){e.slides.map(a),t(r.slide,"active"),n(r.slide,"inactive")})}}},{}],5:[function(e,t){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){(/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)||"true"===e.target.contentEditable)&&e.stopPropagation()})})}}},{}],6:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),a=parseInt(t,10);t&&(a?n(a-1):e.slides.forEach(function(e,a){e.getAttribute("data-bespoke-hash")===t&&n(a)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],7:[function(e,t){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],8:[function(e,t){t.exports=function(e){return function(t){var n=document.createElement("div"),a=document.createElement("div"),r="vertical"===e?"height":"width";n.className="bespoke-progress-parent",a.className="bespoke-progress-bar",n.appendChild(a),t.parent.appendChild(n),t.on("activate",function(e){a.style[r]=100*e.index/(t.slides.length-1)+"%"})}}},{}],9:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,a=t.slides[0],r=a.offsetHeight,i=a.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,o=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},l=s?t.slides:t.slides.map(o),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,a){return a+e in n.style?a+e:t},e.toLowerCase())}("Transform"),u=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},p=function(){var e=n.offsetWidth/i,t=n.offsetHeight/r;l.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",p),p()}}},{}],10:[function(e,t){t.exports=function(){return function(e){var t=function(t,n){var a=n.slide.getAttribute("data-bespoke-state");a&&a.split(" ").forEach(function(n){e.parent.classList[t](n)})};e.on("activate",t.bind(null,"add")),e.on("deactivate",t.bind(null,"remove"))}}},{}],11:[function(e,t){t.exports=function(e){return function(t){var n,a,r="vertical"==e?"Y":"X";t.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(n=e.touches[0]["page"+r],a=0)}),t.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),a=e.touches[0]["page"+r]-n)}),t.parent.addEventListener("touchend",function(){Math.abs(a)>50&&t[a>0?"prev":"next"]()})}}},{}],12:[function(e,t){var n=function(e,t){var n=1===e.nodeType?e:document.querySelector(e),a=[].filter.call(n.children,function(e){return"SCRIPT"!==e.nodeName}),r=a[0],i={},s=function(e,t){a[e]&&(u("deactivate",p(r,t)),r=a[e],u("activate",p(r,t)))},o=function(e,t){return arguments.length?(u("slide",p(a[e],t))&&s(e,t),void 0):a.indexOf(r)},l=function(e,t){var n=a.indexOf(r)+e;u(e>0?"next":"prev",p(r,t))&&s(n,t)},c=function(e,t){return(i[e]||(i[e]=[])).push(t),function(){i[e]=i[e].filter(function(e){return e!==t})}},u=function(e,t){return(i[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},p=function(e,t){return t=t||{},t.index=a.indexOf(e),t.slide=e,t},f={on:c,fire:u,slide:o,next:l.bind(null,1),prev:l.bind(null,-1),parent:n,slides:a};return(t||[]).forEach(function(e){e(f)}),s(0),f};t.exports={from:n}},{}],13:[function(e){var t=e("bespoke"),n=e("bespoke-classes"),a=e("bespoke-keys"),r=e("bespoke-touch"),i=e("bespoke-bullets"),s=e("bespoke-backdrop"),o=e("bespoke-scale"),l=e("bespoke-hash"),c=e("bespoke-progress"),u=e("bespoke-state"),p=e("bespoke-forms");t.from("article",[n(),a(),r(),i("li, .bullet"),s(),o(),l(),c(),u(),p()]),e("./../../bower_components/prism/prism.js")},{"./../../bower_components/prism/prism.js":1,bespoke:12,"bespoke-backdrop":2,"bespoke-bullets":3,"bespoke-classes":4,"bespoke-forms":5,"bespoke-hash":6,"bespoke-keys":7,"bespoke-progress":8,"bespoke-scale":9,"bespoke-state":10,"bespoke-touch":11}]},{},[13]);