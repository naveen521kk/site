"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[213],{7261:function(n,e,a){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function s(n){var e=function(n,e){if("object"!==t(n)||null===n)return n;var a=n[Symbol.toPrimitive];if(void 0!==a){var s=a.call(n,e||"default");if("object"!==t(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===t(e)?e:String(e)}function o(n,e,a){return(e=s(e))in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}a.d(e,{Zo:function(){return m},ah:function(){return u}});var p=a(7294);function c(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function l(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){o(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}var r=p.createContext({});function u(n){var e=p.useContext(r);return p.useMemo((function(){return"function"==typeof n?n(e):l(l({},e),n)}),[e,n])}var i={};function m(n){var e,a=n.components,t=n.children;return e=n.disableParentContext?"function"==typeof a?a({}):a||i:u(a),p.createElement(r.Provider,{value:e},t)}},9252:function(n,e,a){a.r(e),a.d(e,{default:function(){return f}});var t=a(7261),s=a(7294),o="xor-ops-module--line--34c66",p="xor-ops-module--textDiv--32cff",c=function(n){return(n>>>0).toString(2)},l=function(){return s.createElement("div",{className:"xor-ops-module--tableDiv--3d9e1"},s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"A"),s.createElement("th",null,"B"),s.createElement("th",null,"A XOR B"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("td",null,"1"),s.createElement("td",null,"1"),s.createElement("td",null,"0")),s.createElement("tr",null,s.createElement("td",null,"1"),s.createElement("td",null,"0"),s.createElement("td",null,"1")),s.createElement("tr",null,s.createElement("td",null,"0"),s.createElement("td",null,"1"),s.createElement("td",null,"1")),s.createElement("tr",null,s.createElement("td",null,"0"),s.createElement("td",null,"0"),s.createElement("td",null,"0")))))},r=function(n){var e=n.defaultFirstNumber,a=n.defaultSecondNumber,t=s.useState(e),l=t[0],r=t[1],u=s.useState(a),i=u[0],m=u[1];return s.createElement("div",{className:"xor-ops-module--outerDiv--d65cb"},s.createElement("div",{className:"xor-ops-module--mainDiv--664ad"},s.createElement("div",{className:p},s.createElement("div",null,s.createElement("label",null,"First Number:"," ",s.createElement("input",{type:"number",name:"firstNumber",value:l,onChange:function(n){return r(Number(n.target.value))}}))),s.createElement("div",null,s.createElement("label",null,"Second Number:"," ",s.createElement("input",{type:"number",name:"secondNumber",value:i,onChange:function(n){return m(Number(n.target.value))}})))),s.createElement("div",{className:p},l," ^ ",i," ="," ",l^i),s.createElement("div",{className:"xor-ops-module--sumDiv--a92f1"},s.createElement("div",{className:"xor-ops-module--innerDiv--f1eec"},s.createElement("div",null,c(l).padStart(4,"0")),s.createElement("div",null,c(i).padStart(4,"0")),s.createElement("div",{className:o}),s.createElement("div",null,c(l^i).padStart(4,"0")),s.createElement("div",{className:o}))),s.createElement("p",null,s.createElement("em",null,"Try changing the input fields")," 😉")))};function u(n){var e=Object.assign({p:"p",blockquote:"blockquote",code:"code",h3:"h3",a:"a",div:"div",h5:"h5"},(0,t.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"Recently, while learning about the XOR operation, I came across an interesting property of XOR operation. The property is as follows:"),"\n",s.createElement(e.blockquote,null,"\n",s.createElement(e.p,null,"XOR of a number with itself cancels out the number"),"\n"),"\n",s.createElement(e.p,null,"For example, if we take the number ",s.createElement(e.code,null,"5")," and XOR it with itself, we get ",s.createElement(e.code,null,"0")," as the result. That is ",s.createElement(e.code,null,"5 ^ 5 = 0"),"."),"\n",s.createElement(r,{defaultFirstNumber:5,defaultSecondNumber:5}),"\n",s.createElement(e.p,null,"If you are confused how the above operation works, you can check out the truth table below:"),"\n",s.createElement(l),"\n",s.createElement(e.h3,{id:"problem-statement",style:{position:"relative"}},s.createElement(e.a,{href:"#problem-statement","aria-label":"problem statement permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Problem Statement"),"\n",s.createElement(e.p,null,"If you have been given a array ",s.createElement(e.code,null,"arr = [1, 2, 3, 11, 1, 2, 3]")," then find the unique number. Note then all the numbers are repeated twice and a unique is only available once in the given array. Note that the array is not sorted and the numbers are not in any particular order."),"\n",s.createElement(e.h3,{id:"solution",style:{position:"relative"}},s.createElement(e.a,{href:"#solution","aria-label":"solution permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Solution"),"\n",s.createElement(e.p,null,"If we XOR each element in the array with each other then the duplicates would be canceled out giving us the remaining unique number. See the below code in Python."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="py"><pre class="language-py"><code class="language-py"><span class="token operator">>></span><span class="token operator">></span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n<span class="token operator">>></span><span class="token operator">></span> unique <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">for</span> num <span class="token keyword">in</span> arr<span class="token punctuation">:</span>\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     unique <span class="token operator">^</span><span class="token operator">=</span> num\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n<span class="token operator">>></span><span class="token operator">></span> unique\n<span class="token number">11</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"This is the efficient solution to the problem. The time complexity of the solution is ",s.createElement(e.code,null,"O(n)")," and the space complexity is ",s.createElement(e.code,null,"O(1)"),"."),"\n",s.createElement(e.h3,{id:"code",style:{position:"relative"}},s.createElement(e.a,{href:"#code","aria-label":"code permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Code"),"\n",s.createElement(e.p,null,"I’ve written the code in multiple languages. You can check out the code below:"),"\n",s.createElement(e.h5,{id:"cc",style:{position:"relative"}},s.createElement(e.a,{href:"#cc","aria-label":"cc permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"C/C++"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h></span></span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> unique <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        unique <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d\\n"</span><span class="token punctuation">,</span> unique<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.h5,{id:"java",style:{position:"relative"}},s.createElement(e.a,{href:"#java","aria-label":"java permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Java"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="java"><pre class="language-java"><code class="language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> unique <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            unique <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>unique<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.h5,{id:"python",style:{position:"relative"}},s.createElement(e.a,{href:"#python","aria-label":"python permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Python"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="py"><pre class="language-py"><code class="language-py">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\nunique <span class="token operator">=</span> <span class="token number">0</span>\n<span class="token keyword">for</span> num <span class="token keyword">in</span> arr<span class="token punctuation">:</span>\n    unique <span class="token operator">^</span><span class="token operator">=</span> num\n<span class="token keyword">print</span><span class="token punctuation">(</span>unique<span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(e.h5,{id:"javascript",style:{position:"relative"}},s.createElement(e.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> unique <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    unique <span class="token operator">^=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>unique<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}))}var i=function(n){void 0===n&&(n={});var e=Object.assign({},(0,t.ah)(),n.components).wrapper;return e?s.createElement(e,n,s.createElement(u,n)):u(n)},m=a(3771),k=a(7682),d=a(4165),h=a(9255),v=a(4497),b=function(n){return s.createElement("code",{className:"language-text"},n.children)},g=function(n){var e=n.data,a=(n.location,n.children),o=e.mdx.frontmatter,p={"@context":"https://schema.org","@type":"BlogPosting",headline:o.title,author:{"@type":"Person",name:"Naveen M K",url:"http://www.naveenmk.me",image:"https://avatars.githubusercontent.com/u/49693820"},name:o.title,abstract:o.description,image:o.image,description:o.description,copyrightYear:(new Date).getFullYear(),copyrightHolder:"Naveen M K"},c={code:b};return s.createElement("div",null,s.createElement(m.Z,{title:o.title,description:o.description,image:o.image,article:!0}),s.createElement(k.h,{data:p}),s.createElement(d.Z),s.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},o.image?s.createElement(h.Z,{img_loc:o.image}):s.createElement("div"),s.createElement("div",{className:v.F},s.createElement("div",{className:v.T+" blog-post"},s.createElement("header",null,s.createElement("h1",{className:"py-2",itemProp:"headline"},o.title),s.createElement("small",null,"Published on ",o.date,o.updated_date?" · Updated on "+o.updated_date:"")),s.createElement("section",{className:"flex flex-col blog-post-content pt-3 mx-auto justify-center",id:"blog-start",itemProp:"articleBody"},s.createElement(t.Zo,{components:c},a))))))};function f(n){return s.createElement(g,n,s.createElement(i,n))}},9255:function(n,e,a){a.d(e,{Z:function(){return c}});var t=a(7294),s="bgphoto-module--base_container--3f935",o="bgphoto-module--inner_container--2454f",p="bgphoto-module--top_container--83622";function c(n){var e={backgroundImage:"url("+n.img_loc+")"};return t.createElement("div",{className:s+" "+p},t.createElement("div",{className:s+" "+o,style:e}))}},7682:function(n,e,a){a.d(e,{h:function(){return s}});var t=a(7294),s=function(n){var e=n.data;return t.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}},4497:function(n,e,a){a.d(e,{F:function(){return s},T:function(){return t}});var t="posts-style-module--core_blog_post--f38d0",s="posts-style-module--outer_class--bc1ef"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-home-runner-work-naveen-521-kk-github-io-naveen-521-kk-github-io-src-posts-xor-unique-index-mdx-84a3b6c5cb97d1dd26c7.js.map