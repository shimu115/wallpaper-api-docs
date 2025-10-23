import{_ as u,c as d,a as t,b as s,d as l,e,w as i,r as o,o as p}from"./app-D1QxUnLB.js";const r={};function m(v,n){const a=o("RouteLink");return p(),d("div",null,[n[51]||(n[51]=t(`<h1 id="bing-api" tabindex="-1"><a class="header-anchor" href="#bing-api"><span>bing api</span></a></h1><h2 id="今日壁纸" tabindex="-1"><a class="header-anchor" href="#今日壁纸"><span>今日壁纸</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/bing/wallpaper/today</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>数据来源：</strong> <code>https://www.bing.com/HPImageArchive.aspx?format=js&amp;idx=0&amp;n=1&amp;mkt=zh-CN</code></p><p><strong>请求头</strong></p><table><thead><tr><th>header</th><th>description</th><th>default required</th></tr></thead><tbody><tr><td>User-Agent</td><td>使用设备自带的请求头，不可手动去除此请求头，接口需要使用此请求头自动调整图片分辨率</td><td>true</td></tr></tbody></table><blockquote><p><strong>暂未判断纯血鸿蒙设备的请求头，因为身边无人使用纯血鸿蒙设备，所以不知道默认ua是什么</strong> 为判断的设备均以默认的 1920x1080 分辨率处理</p></blockquote><p><strong>参数说明</strong></p>`,8)),s("table",null,[n[9]||(n[9]=s("thead",null,[s("tr",null,[s("th",null,"param"),s("th",null,"description"),s("th",null,"default required")])],-1)),s("tbody",null,[s("tr",null,[n[5]||(n[5]=s("td",null,"i18nKey",-1)),s("td",null,[n[1]||(n[1]=l("语言（默认 zh_CN），参考 ",-1)),e(a,{to:"/api/enum/enum.html#BingJsonI18nKey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E"},{default:i(()=>[...n[0]||(n[0]=[l("BingJsonI18nKey",-1)])]),_:1}),n[2]||(n[2]=l(" 说明，或参考 ",-1)),n[3]||(n[3]=s("a",{href:"#%E8%8E%B7%E5%8F%96%E5%8F%AF%E4%BD%BF%E7%94%A8%E7%9A%84%E8%AF%AD%E8%A8%80%E6%95%B0%E6%8D%AE"},"获取可使用的语言数据",-1)),n[4]||(n[4]=l(" 接口",-1))]),n[6]||(n[6]=s("td",null,"false",-1))]),n[7]||(n[7]=s("tr",null,[s("td",null,"width"),s("td",null,"宽度（默认1920）"),s("td",null,"false")],-1)),n[8]||(n[8]=s("tr",null,[s("td",null,"height"),s("td",null,"高度（默认1080）"),s("td",null,"false")],-1))])]),n[52]||(n[52]=t(`<h2 id="随机壁纸" tabindex="-1"><a class="header-anchor" href="#随机壁纸"><span>随机壁纸</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/bing/wallpaper/random</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>请求头</strong></p><table><thead><tr><th>header</th><th>description</th><th>default required</th></tr></thead><tbody><tr><td>User-Agent</td><td>使用设备自带的请求头，不可手动去除此请求头，接口需要使用此请求头自动调整图片分辨率</td><td>true</td></tr></tbody></table><blockquote><p><strong>暂未判断纯血鸿蒙设备的请求头，因为身边无人使用纯血鸿蒙设备，所以不知道默认ua是什么</strong> 为判断的设备均以默认的 1920x1080 分辨率处理</p></blockquote><p><strong>参数说明</strong></p>`,6)),s("table",null,[n[19]||(n[19]=s("thead",null,[s("tr",null,[s("th",null,"param"),s("th",null,"description"),s("th",null,"default required")])],-1)),s("tbody",null,[s("tr",null,[n[15]||(n[15]=s("td",null,"i18nKey",-1)),s("td",null,[n[11]||(n[11]=l("默认使用所有国家图片进行随机，参考 ",-1)),e(a,{to:"/api/enum/enum.html#BingJsonI18nKey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E"},{default:i(()=>[...n[10]||(n[10]=[l("BingJsonI18nKey",-1)])]),_:1}),n[12]||(n[12]=l(" 说明，或参考 ",-1)),n[13]||(n[13]=s("a",{href:"#%E8%8E%B7%E5%8F%96%E5%8F%AF%E4%BD%BF%E7%94%A8%E7%9A%84%E8%AF%AD%E8%A8%80%E6%95%B0%E6%8D%AE"},"获取可使用的语言数据",-1)),n[14]||(n[14]=l(" 接口",-1))]),n[16]||(n[16]=s("td",null,"false",-1))]),n[17]||(n[17]=s("tr",null,[s("td",null,"width"),s("td",null,"宽度（默认1920）"),s("td",null,"false")],-1)),n[18]||(n[18]=s("tr",null,[s("td",null,"height"),s("td",null,"高度（默认1080）"),s("td",null,"false")],-1))])]),n[53]||(n[53]=t(`<h2 id="手动刷新数据" tabindex="-1"><a class="header-anchor" href="#手动刷新数据"><span>手动刷新数据</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/bing/wallpaper/fresh_data</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="获取可使用的语言数据" tabindex="-1"><a class="header-anchor" href="#获取可使用的语言数据"><span>获取可使用的语言数据</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/bing/wallpaper/getI18n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong><a href="http://localhost:9123/api/bing/wallpaper/getI18n" target="_blank" rel="noopener noreferrer">请求示例</a></strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">http://localhost:9123/api/bing/wallpaper/getI18n</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>返回结果</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;code&quot;: 200,</span>
<span class="line">  &quot;msg&quot;: null,</span>
<span class="line">  &quot;data&quot;: {</span>
<span class="line">    &quot;de_DE&quot;: {</span>
<span class="line">      &quot;key&quot;: &quot;de-DE_all&quot;,</span>
<span class="line">      &quot;language&quot;: &quot;de&quot;,</span>
<span class="line">      &quot;country&quot;: &quot;DE&quot;,</span>
<span class="line">      &quot;desc&quot;: &quot;德语-德国&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;en_CA&quot;: {</span>
<span class="line">      &quot;key&quot;: &quot;en-CA_all&quot;,</span>
<span class="line">      &quot;language&quot;: &quot;en&quot;,</span>
<span class="line">      &quot;country&quot;: &quot;CA&quot;,</span>
<span class="line">      &quot;desc&quot;: &quot;英语-加拿大&quot;</span>
<span class="line">    },</span>
<span class="line">    &quot;en_GB&quot;: {</span>
<span class="line">      &quot;key&quot;: &quot;en-GB_all&quot;,</span>
<span class="line">      &quot;language&quot;: &quot;en&quot;,</span>
<span class="line">      &quot;country&quot;: &quot;GB&quot;,</span>
<span class="line">      &quot;desc&quot;: &quot;英语-英国&quot;</span>
<span class="line">    },</span>
<span class="line">    ...</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分页查询数据" tabindex="-1"><a class="header-anchor" href="#分页查询数据"><span>分页查询数据</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/bing/wallpaper/findPage</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>参数说明</strong></p>`,11)),s("table",null,[n[34]||(n[34]=s("thead",null,[s("tr",null,[s("th",null,"param"),s("th",null,"description"),s("th",null,"default required")])],-1)),s("tbody",null,[s("tr",null,[n[25]||(n[25]=s("td",null,"i18nKey",-1)),s("td",null,[n[21]||(n[21]=l("默认使用所有国家图片进行随机，参考 ",-1)),e(a,{to:"/api/enum/enum.html#BingJsonI18nKey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E"},{default:i(()=>[...n[20]||(n[20]=[l("BingJsonI18nKey",-1)])]),_:1}),n[22]||(n[22]=l(" 说明，或参考 ",-1)),n[23]||(n[23]=s("a",{href:"#%E8%8E%B7%E5%8F%96%E5%8F%AF%E4%BD%BF%E7%94%A8%E7%9A%84%E8%AF%AD%E8%A8%80%E6%95%B0%E6%8D%AE"},"获取可使用的语言数据",-1)),n[24]||(n[24]=l(" 接口",-1))]),n[26]||(n[26]=s("td",null,"false",-1))]),s("tr",null,[n[30]||(n[30]=s("td",null,"order",-1)),s("td",null,[n[28]||(n[28]=l("排序（默认降序）, 参数见 ",-1)),e(a,{to:"/api/enum/enum.html#SortEnum%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E"},{default:i(()=>[...n[27]||(n[27]=[l("SortEnum",-1)])]),_:1}),n[29]||(n[29]=l(" 枚举说明，传 key，不区分大小写",-1))]),n[31]||(n[31]=s("td",null,"false",-1))]),n[32]||(n[32]=s("tr",null,[s("td",null,"page"),s("td",null,"页数（默认1）"),s("td",null,"false")],-1)),n[33]||(n[33]=s("tr",null,[s("td",null,"pageSize"),s("td",null,"每页数量（默认10）"),s("td",null,"false")],-1))])]),n[54]||(n[54]=t(`<p><strong><a href="http://localhost:9123/api/bing/wallpaper/findPage?i18nKey=zh_CN&amp;page=1&amp;pageSize=10&amp;order=desc" target="_blank" rel="noopener noreferrer">请求示例</a></strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">http://localhost:9123/api/bing/wallpaper/findPage?i18nKey=zh_CN&amp;page=1&amp;pageSize=10&amp;order=desc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>返回结果</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;code&quot;: 200,</span>
<span class="line">  &quot;msg&quot;: null,</span>
<span class="line">  &quot;data&quot;: {</span>
<span class="line">    &quot;page&quot;: 1,</span>
<span class="line">    &quot;pageSize&quot;: 10,</span>
<span class="line">    &quot;total&quot;: 2598,</span>
<span class="line">    &quot;pageCount&quot;: 260,</span>
<span class="line">    &quot;records&quot;: [</span>
<span class="line">      {</span>
<span class="line">        &quot;id&quot;: &quot;1397d2e1-56d5-45cb-8137-756885570882&quot;,</span>
<span class="line">        &quot;dataId&quot;: 3518,</span>
<span class="line">        &quot;title&quot;: &quot;刻在石头上&quot;,</span>
<span class="line">        &quot;urlList&quot;: [</span>
<span class="line">          &quot;https://bing.com/th?id=OHR.BulgariaRocks_ZH-CN0234903972_1920x1080.jpg&quot;</span>
<span class="line">        ],</span>
<span class="line">        &quot;i18nKey&quot;: &quot;zh-CN_all&quot;,</span>
<span class="line">        &quot;dateTime&quot;: &quot;2025-10-22&quot;,</span>
<span class="line">        &quot;copyright&quot;: &quot;贝洛格拉齐克石林，保加利亚 (© EvaL Miko/Shutterstock)&quot;,</span>
<span class="line">        &quot;copyrightLink&quot;: &quot;https://www.bing.com/search?q=%E8%B4%9D%E6%B4%9B%E6%A0%BC%E6%8B%89%E9%BD%90%E5%85%8B%E7%9F%B3%E6%9E%97&amp;form=hpcapt&amp;mkt=zh-cn&quot;,</span>
<span class="line">        &quot;hsh&quot;: &quot;a9029622376fd4bb6acd67e696f17fe5&quot;,</span>
<span class="line">        &quot;createdTime&quot;: &quot;2025-10-22&quot;</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;id&quot;: &quot;43f44b3f-37a4-4750-9da7-1b44eb1565a8&quot;,</span>
<span class="line">        &quot;dataId&quot;: 3517,</span>
<span class="line">        &quot;title&quot;: &quot;鸟喙的故事&quot;,</span>
<span class="line">        &quot;urlList&quot;: [</span>
<span class="line">          &quot;https://bing.com/th?id=OHR.ToucanForest_ZH-CN0072036253_1920x1080.jpg&quot;</span>
<span class="line">        ],</span>
<span class="line">        &quot;i18nKey&quot;: &quot;zh-CN_all&quot;,</span>
<span class="line">        &quot;dateTime&quot;: &quot;2025-10-21&quot;,</span>
<span class="line">        &quot;copyright&quot;: &quot;哥斯达黎加的厚嘴巨嘴鸟 (© Juan Carlos Vindas/Getty Images)&quot;,</span>
<span class="line">        &quot;copyrightLink&quot;: &quot;https://www.bing.com/search?q=%E5%8E%9A%E5%98%B4%E5%B7%A8%E5%98%B4%E9%B8%9F&amp;form=hpcapt&amp;mkt=zh-cn&quot;,</span>
<span class="line">        &quot;hsh&quot;: &quot;126b0eff9b66a8787cc15ffbc82853c1&quot;,</span>
<span class="line">        &quot;createdTime&quot;: &quot;2025-10-21&quot;</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        &quot;id&quot;: &quot;efcc063c-a358-4f0c-8d45-307b22cf074a&quot;,</span>
<span class="line">        &quot;dataId&quot;: 3516,</span>
<span class="line">        &quot;title&quot;: &quot;慢节奏的生活&quot;,</span>
<span class="line">        &quot;urlList&quot;: [</span>
<span class="line">          &quot;https://bing.com/th?id=OHR.HoffmansSloth_ZH-CN7563408641_1920x1080.jpg&quot;</span>
<span class="line">        ],</span>
<span class="line">        &quot;i18nKey&quot;: &quot;zh-CN_all&quot;,</span>
<span class="line">        &quot;dateTime&quot;: &quot;2025-10-20&quot;,</span>
<span class="line">        &quot;copyright&quot;: &quot;霍氏树懒，厄瓜多尔 (© Murray Cooper/Minden Pictures)&quot;,</span>
<span class="line">        &quot;copyrightLink&quot;: &quot;https://www.bing.com/search?q=%E5%9B%BD%E9%99%85%E6%A0%91%E6%87%92%E6%97%A5&amp;form=hpcapt&amp;mkt=zh-cn&quot;,</span>
<span class="line">        &quot;hsh&quot;: &quot;9b8959b31205f8015dba9545d32acaef&quot;,</span>
<span class="line">        &quot;createdTime&quot;: &quot;2025-10-20&quot;</span>
<span class="line">      },</span>
<span class="line">      ...</span>
<span class="line">    ],</span>
<span class="line">    &quot;hasNext&quot;: true,</span>
<span class="line">    &quot;hasPrev&quot;: false,</span>
<span class="line">    &quot;nextPage&quot;: 2,</span>
<span class="line">    &quot;prevPage&quot;: null,</span>
<span class="line">    &quot;extra&quot;: null,</span>
<span class="line">    &quot;firstPage&quot;: true,</span>
<span class="line">    &quot;lastPage&quot;: false</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据"><span>查询数据</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/bing/wallpaper/find</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>参数说明</strong></p>`,7)),s("table",null,[n[50]||(n[50]=s("thead",null,[s("tr",null,[s("th",null,"param"),s("th",null,"description"),s("th",null,"default required")])],-1)),s("tbody",null,[s("tr",null,[n[40]||(n[40]=s("td",null,"i18nKey",-1)),s("td",null,[n[36]||(n[36]=l("默认使用所有国家图片进行随机，参考 ",-1)),e(a,{to:"/api/enum/enum.html#BingJsonI18nKey%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E"},{default:i(()=>[...n[35]||(n[35]=[l("BingJsonI18nKey",-1)])]),_:1}),n[37]||(n[37]=l(" 说明，或参考 ",-1)),n[38]||(n[38]=s("a",{href:"#%E8%8E%B7%E5%8F%96%E5%8F%AF%E4%BD%BF%E7%94%A8%E7%9A%84%E8%AF%AD%E8%A8%80%E6%95%B0%E6%8D%AE"},"获取可使用的语言数据",-1)),n[39]||(n[39]=l(" 接口",-1))]),n[41]||(n[41]=s("td",null,"false",-1))]),n[47]||(n[47]=s("tr",null,[s("td",null,"dataId"),s("td",null,"按照 dataId （源数据的 id）查询"),s("td",null,"false")],-1)),n[48]||(n[48]=s("tr",null,[s("td",null,"startTime"),s("td",null,"起始时间，范围查询"),s("td",null,"false")],-1)),n[49]||(n[49]=s("tr",null,[s("td",null,"endTime"),s("td",null,"结束时间，范围查询"),s("td",null,"false")],-1)),s("tr",null,[n[45]||(n[45]=s("td",null,"order",-1)),s("td",null,[n[43]||(n[43]=l("排序（默认降序）, 参数见 ",-1)),e(a,{to:"/api/enum/enum.html#SortEnum%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E"},{default:i(()=>[...n[42]||(n[42]=[l("SortEnum",-1)])]),_:1}),n[44]||(n[44]=l(" 枚举说明，传 key，不区分大小写",-1))]),n[46]||(n[46]=s("td",null,"false",-1))])])]),n[55]||(n[55]=t(`<p><strong><a href="http://localhost:9123/api/bing/wallpaper/find?i18nKey=zh_CN&amp;startTime=2025-10-01&amp;endTime=2025-10-31&amp;order=desc" target="_blank" rel="noopener noreferrer">请求示例</a></strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">http://localhost:9123/api/bing/wallpaper/find?i18nKey=zh_CN&amp;startTime=2025-10-01&amp;endTime=2025-10-31&amp;order=desc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>返回结果</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">{</span>
<span class="line">  &quot;code&quot;: 200,</span>
<span class="line">  &quot;msg&quot;: null,</span>
<span class="line">  &quot;data&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;id&quot;: &quot;1397d2e1-56d5-45cb-8137-756885570882&quot;,</span>
<span class="line">      &quot;dataId&quot;: 3518,</span>
<span class="line">      &quot;title&quot;: &quot;刻在石头上&quot;,</span>
<span class="line">      &quot;urlList&quot;: [</span>
<span class="line">        &quot;https://bing.com/th?id=OHR.BulgariaRocks_ZH-CN0234903972_1920x1080.jpg&quot;</span>
<span class="line">      ],</span>
<span class="line">      &quot;i18nKey&quot;: &quot;zh-CN_all&quot;,</span>
<span class="line">      &quot;dateTime&quot;: &quot;2025-10-22&quot;,</span>
<span class="line">      &quot;copyright&quot;: &quot;贝洛格拉齐克石林，保加利亚 (© EvaL Miko/Shutterstock)&quot;,</span>
<span class="line">      &quot;copyrightLink&quot;: &quot;https://www.bing.com/search?q=%E8%B4%9D%E6%B4%9B%E6%A0%BC%E6%8B%89%E9%BD%90%E5%85%8B%E7%9F%B3%E6%9E%97&amp;form=hpcapt&amp;mkt=zh-cn&quot;,</span>
<span class="line">      &quot;hsh&quot;: &quot;a9029622376fd4bb6acd67e696f17fe5&quot;,</span>
<span class="line">      &quot;createdTime&quot;: &quot;2025-10-22&quot;</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      &quot;id&quot;: &quot;43f44b3f-37a4-4750-9da7-1b44eb1565a8&quot;,</span>
<span class="line">      &quot;dataId&quot;: 3517,</span>
<span class="line">      &quot;title&quot;: &quot;鸟喙的故事&quot;,</span>
<span class="line">      &quot;urlList&quot;: [</span>
<span class="line">        &quot;https://bing.com/th?id=OHR.ToucanForest_ZH-CN0072036253_1920x1080.jpg&quot;</span>
<span class="line">      ],</span>
<span class="line">      &quot;i18nKey&quot;: &quot;zh-CN_all&quot;,</span>
<span class="line">      &quot;dateTime&quot;: &quot;2025-10-21&quot;,</span>
<span class="line">      &quot;copyright&quot;: &quot;哥斯达黎加的厚嘴巨嘴鸟 (© Juan Carlos Vindas/Getty Images)&quot;,</span>
<span class="line">      &quot;copyrightLink&quot;: &quot;https://www.bing.com/search?q=%E5%8E%9A%E5%98%B4%E5%B7%A8%E5%98%B4%E9%B8%9F&amp;form=hpcapt&amp;mkt=zh-cn&quot;,</span>
<span class="line">      &quot;hsh&quot;: &quot;126b0eff9b66a8787cc15ffbc82853c1&quot;,</span>
<span class="line">      &quot;createdTime&quot;: &quot;2025-10-21&quot;</span>
<span class="line">      ...</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const c=u(r,[["render",m]]),b=JSON.parse('{"path":"/api/bing/bing.html","title":"bing api","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1761132665000,"contributors":[{"name":"shimu","username":"shimu","email":"m13871292203@gmail.com","commits":1,"url":"https://github.com/shimu"}],"changelog":[{"hash":"a140240431a0ba770828a96d802f4b0313666989","time":1761132665000,"email":"m13871292203@gmail.com","author":"shimu","message":"将所有接口的文档全部补全"}]},"filePathRelative":"api/bing/bing.md"}');export{c as comp,b as data};
