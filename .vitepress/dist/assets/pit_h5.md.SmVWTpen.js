import{_ as s,c as i,o as a,V as e}from"./chunks/framework.QFmjjZgg.js";const g=JSON.parse('{"title":"H5 踩坑记录","description":"","frontmatter":{"outline":2},"headers":[],"relativePath":"pit/h5.md","filePath":"pit/h5.md","lastUpdated":null}'),n={name:"pit/h5.md"},t=e(`<h1 id="h5-踩坑记录" tabindex="-1">H5 踩坑记录 <a class="header-anchor" href="#h5-踩坑记录" aria-label="Permalink to &quot;H5 踩坑记录&quot;">​</a></h1><h2 id="webview-返回上一页不刷新" tabindex="-1"><code>WebView</code> 返回上一页不刷新 <a class="header-anchor" href="#webview-返回上一页不刷新" aria-label="Permalink to &quot;\`WebView\` 返回上一页不刷新&quot;">​</a></h2><p>为了提升浏览网页的效率加入了缓存机制，导致 <code>WebView</code> 返回上一页时不会刷新</p><h5 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h5><p>监听 <code>pageshow</code> 事件，<strong>通过 <code>persisted</code> 或 <code>performance.navigation.type</code> 属性</strong>判断当前页面是否通过缓存载入</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onPageShow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e.persisted </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (window.performance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.performance.navigation.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pageshow&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, onPageShow)</span></span></code></pre></div>`,6),h=[t];function p(l,k,d,r,o,E){return a(),i("div",null,h)}const y=s(n,[["render",p]]);export{g as __pageData,y as default};