import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.06fa6207.js";const C=JSON.parse('{"title":"CSS 语法相关","description":"","frontmatter":{},"headers":[],"relativePath":"guide/css.md","filePath":"guide/css.md","lastUpdated":1696843868000}'),p={name:"guide/css.md"},o=l(`<h1 id="css-语法相关" tabindex="-1">CSS 语法相关 <a class="header-anchor" href="#css-语法相关" aria-label="Permalink to &quot;CSS 语法相关&quot;">​</a></h1><h2 id="滚动条样式" tabindex="-1">滚动条样式 <a class="header-anchor" href="#滚动条样式" aria-label="Permalink to &quot;滚动条样式&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 滚动条 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 纵向 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* 横向 */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">8</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的按钮(上下箭头) */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-button</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-track</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道，没有滑块 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-track-piece</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 垂直滚动条和水平滚动条交汇的部分 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-corner</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ededed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的滚动滑块 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-scrollbar-thumb</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#d6d6d6</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 右下角拖动块 */</span></span>
<span class="line"><span style="color:#B392F0;">::-webkit-resizer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 滚动条 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 纵向 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* 横向 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">8</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的按钮(上下箭头) */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-button</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-track</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条轨道，没有滑块 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-track-piece</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 垂直滚动条和水平滚动条交汇的部分 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-corner</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ededed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 滚动条上的滚动滑块 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-scrollbar-thumb</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#d6d6d6</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 右下角拖动块 */</span></span>
<span class="line"><span style="color:#6F42C1;">::-webkit-resizer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h1 id="常用-scss-宏" tabindex="-1">常用 SCSS 宏 <a class="header-anchor" href="#常用-scss-宏" aria-label="Permalink to &quot;常用 SCSS 宏&quot;">​</a></h1><h2 id="显示省略号" tabindex="-1">显示省略号 <a class="header-anchor" href="#显示省略号" aria-label="Permalink to &quot;显示省略号&quot;">​</a></h2><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 单行省略号</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ellipsis</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ellipsis</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">white-space</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">nowrap</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多行省略号</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ellipsis-multi</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$line</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-webkit-box</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-webkit-line-clamp</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$line</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/* autoprefixer: ignore next */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-webkit-box-orient</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">vertical</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">ellipsis</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 单行省略号</span></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ellipsis</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">ellipsis</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">white-space</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">nowrap</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多行省略号</span></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ellipsis-multi</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$line</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-webkit-box</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-line-clamp</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$line</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* autoprefixer: ignore next */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-box-orient</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">vertical</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">ellipsis</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="滚动" tabindex="-1">滚动 <a class="header-anchor" href="#滚动" aria-label="Permalink to &quot;滚动&quot;">​</a></h2><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scroll</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@if</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;x&#39;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow-x</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow-y</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">@else if</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow-x</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow-y</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">@else </span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-webkit-overflow-scrolling</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">touch</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scroll</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@if</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;x&#39;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow-x</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow-y</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">@else if</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow-x</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow-y</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">@else </span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-overflow-scrolling</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">touch</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h1 id="css-奇淫技巧" tabindex="-1">CSS 奇淫技巧 <a class="header-anchor" href="#css-奇淫技巧" aria-label="Permalink to &quot;CSS 奇淫技巧&quot;">​</a></h1><h2 id="识别-html-字符中的-n" tabindex="-1">识别 HTML 字符中的 \\n <a class="header-anchor" href="#识别-html-字符中的-n" aria-label="Permalink to &quot;识别 HTML 字符中的 \\n&quot;">​</a></h2><blockquote><p><code>white-space</code> CSS 属性是用来设置如何处理元素中的 空白</p></blockquote><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">white-space</span><span style="color:#E1E4E8;">: pre;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">white-space</span><span style="color:#24292E;">: pre;</span></span></code></pre></div><table><thead><tr><th style="text-align:center;">属性值</th><th style="text-align:center;">换行符</th><th style="text-align:center;">空格和制表符</th><th style="text-align:center;">文字换行</th></tr></thead><tbody><tr><td style="text-align:center;">normal</td><td style="text-align:center;">合并</td><td style="text-align:center;">合并</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">nowrap</td><td style="text-align:center;">合并</td><td style="text-align:center;">合并</td><td style="text-align:center;">不换行</td></tr><tr><td style="text-align:center;">pre</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">不换行</td></tr><tr><td style="text-align:center;">pre-wrap</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">pre-line</td><td style="text-align:center;">保留</td><td style="text-align:center;">合并</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;">break-spaces</td><td style="text-align:center;">保留</td><td style="text-align:center;">保留</td><td style="text-align:center;">换行</td></tr><tr><td style="text-align:center;"><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space" target="_blank" rel="noreferrer">MDN</a></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table>`,13),e=[o];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{C as __pageData,h as default};