(this["webpackJsonpreact-crypto"]=this["webpackJsonpreact-crypto"]||[]).push([[0],{283:function(e,c,t){},285:function(e,c,t){"use strict";t.r(c);var a,n=t(0),s=t(27),i=t.n(s),r=t(31),l=t(38),o=t(28),j=t(288),d=t(290),h=t(297),b=t(43),u=t(294),O=t(169),x=t(296),p=t(298),m=t(299),v=t(300),g=t(301),y=t(302),f=t.p+"static/media/cryptocurrency.1548aced.png",N=t(3),C=function(){var e=Object(n.useState)(!0),c=Object(b.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(void 0),i=Object(b.a)(s,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(l<=800))}),[l]),Object(N.jsxs)("div",{className:"nav-container",children:[Object(N.jsxs)("div",{className:"logo-container",children:[Object(N.jsx)(u.a,{src:f,size:"large"}),Object(N.jsx)(d.a.Title,{level:2,className:"logo",children:Object(N.jsx)(r.b,{to:"/",children:"Cryptoverse"})}),Object(N.jsx)(O.a,{className:"menu-control-container",onClick:function(){return a(!t)},children:Object(N.jsx)(p.a,{})})]}),t&&Object(N.jsxs)(x.a,{theme:"dark",children:[Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(m.a,{}),children:Object(N.jsx)(r.b,{to:"/",children:"Home"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(v.a,{}),children:Object(N.jsx)(r.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(g.a,{}),children:Object(N.jsx)(r.b,{to:"/exchanges",children:"Exchanges"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(y.a,{}),children:Object(N.jsx)(r.b,{to:"/news",children:"News"})})]})]})},_=t(29),P=t.n(_),S=t(85),T=t(51),w=t(291),E=t(115),A=t(40),k=Object({NODE_ENV:"production",PUBLIC_URL:"/react-cryptoworld",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CRYPTO_API_HOST:"coinranking1.p.rapidapi.com",REACT_APP_CRYPTO_API_KEY:"da5b8fc333msh565d9895899986dp1ea3dbjsn6a70d6383794",REACT_APP_NEWS_API_HOST:"bing-news-search1.p.rapidapi.com",REACT_APP_NEWS_API_KEY:"da5b8fc333msh565d9895899986dp1ea3dbjsn6a70d6383794"}),R=k.REACT_APP_CRYPTO_API_KEY,I=k.REACT_APP_CRYPTO_API_HOST,H={"x-rapidapi-host":"".concat(I),"x-rapidapi-key":"".concat(R)},D=function(e){return{url:e,headers:H}},F=Object(E.a)({reducerPath:"cryptoApi",baseQuery:Object(A.d)({baseUrl:"https://coinranking1.p.rapidapi.com/"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return D("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return D("/coin/".concat(e))}}),getExchanges:e.query({query:function(){return D("/exchanges")}}),getCryptoHistory:e.query({query:function(e){var c=e.coinId,t=e.timePeriod;return D("/coin/".concat(c,"/history/").concat(t))}})}}}),U=F.useGetCryptosQuery,W=F.useGetCryptoDetailsQuery,q=F.useGetExchangesQuery,L=F.useGetCryptoHistoryQuery,K=t(287),M=function(){return Object(N.jsx)("div",{className:"loader",children:Object(N.jsx)(K.a,{})})},Y=d.a.Title,V=function(){var e,c=U(10),t=c.data,a=c.isFetching,n=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return a?Object(N.jsx)(M,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Y,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(N.jsxs)(S.a,{children:[Object(N.jsx)(T.a,{span:12,children:Object(N.jsx)(w.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(N.jsx)(T.a,{span:12,children:Object(N.jsx)(w.a,{title:"Total Exchanges",value:P()(n.totalExchanges)})}),Object(N.jsx)(T.a,{span:12,children:Object(N.jsx)(w.a,{title:"Total Market Cap",value:P()(n.totalMarketCap)})}),Object(N.jsx)(T.a,{span:12,children:Object(N.jsx)(w.a,{title:"Total 24h Volume",value:P()(n.total24hVolume)})}),Object(N.jsx)(T.a,{span:12,children:Object(N.jsx)(w.a,{title:"Total Markets",value:P()(n.totalMarkets)})})]}),Object(N.jsxs)("div",{className:"home-heading-container",children:[Object(N.jsx)(Y,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies in the world"}),Object(N.jsx)(Y,{level:3,className:"show-more",children:Object(N.jsx)(r.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(N.jsx)(G,{simplified:!0}),Object(N.jsxs)("div",{className:"home-heading-container",children:[Object(N.jsx)(Y,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(N.jsx)(Y,{level:3,className:"show-more",children:Object(N.jsx)(r.b,{to:"/news",children:"Show More"})})]}),Object(N.jsx)(Se,{simplified:!0})]})},$=t(293),Q=t(289),G=function(e){var c=e.simplified,t=U(c?10:100),a=t.data,s=t.isFetching,i=Object(n.useState)([]),l=Object(b.a)(i,2),o=l[0],j=l[1],d=Object(n.useState)(""),h=Object(b.a)(d,2),u=h[0],O=h[1];return Object(n.useEffect)((function(){var e,c=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));j(c)}),[a,u]),s?Object(N.jsx)(M,{}):Object(N.jsxs)(N.Fragment,{children:[!c&&Object(N.jsx)("div",{className:"search-crypto",children:Object(N.jsx)($.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(N.jsx)(S.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(N.jsx)(T.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(N.jsx)(r.b,{to:"/crypto/".concat(e.id),children:Object(N.jsxs)(Q.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(N.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(N.jsxs)("p",{children:["Price: ",P()(e.price)," "]}),Object(N.jsxs)("p",{children:["Market Cap: ",P()(e.marketCap)," "]}),Object(N.jsxs)("p",{children:["Daily: ",P()(e.change),"% "]})]})})},e.id)}))})]})},z=t(118),B=t(292),J=t(303),Z=t(304),X=t(305),ee=t(306),ce=t(119),te=t(307),ae=t(171),ne=t(165),se=d.a.Title,ie=function(e){for(var c,t=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===t||void 0===t||null===(l=t.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j;s.push(null===t||void 0===t||null===(j=t.data)||void 0===j?void 0:j.history[r].price)}for(var d=0;d<(null===t||void 0===t||null===(h=t.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;i.push(new Date(null===t||void 0===t||null===(u=t.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var O={labels:i,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(S.a,{className:"chart-header",children:[Object(N.jsxs)(se,{level:2,className:"chart-title",children:[n," Price Chart"," "]}),Object(N.jsxs)(T.a,{className:"price-container",children:[Object(N.jsxs)(se,{level:5,className:"price-change",children:["Change: ",null===t||void 0===t||null===(c=t.data)||void 0===c?void 0:c.change,"%"]}),Object(N.jsxs)(se,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(N.jsx)(ne.a,{data:O,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},re=d.a.Title,le=d.a.Text,oe=B.a.Option,je=function(){var e,c,t,a,s=Object(o.f)().coinId,i=Object(n.useState)("7d"),r=Object(b.a)(i,2),l=r[0],j=r[1],d=W(s),h=d.data,u=d.isFetching,O=L({coinId:s,timePeriod:l}).data,x=null===h||void 0===h||null===(e=h.data)||void 0===e?void 0:e.coin;if(u)return Object(N.jsx)(M,{});var p=[{title:"Price to USD",value:"$ ".concat(x.price&&P()(x.price)),icon:Object(N.jsx)(J.a,{})},{title:"Rank",value:x.rank,icon:Object(N.jsx)(Z.a,{})},{title:"24h Volume",value:"$ ".concat(x.volume&&P()(x.volume)),icon:Object(N.jsx)(X.a,{})},{title:"Market Cap",value:"$ ".concat(x.marketCap&&P()(x.marketCap)),icon:Object(N.jsx)(J.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(P()(x.allTimeHigh.price)),icon:Object(N.jsx)(ee.a,{})}],m=[{title:"Number Of Markets",value:x.numberOfMarkets,icon:Object(N.jsx)(v.a,{})},{title:"Number Of Exchanges",value:x.numberOfExchanges,icon:Object(N.jsx)(g.a,{})},{title:"Aprroved Supply",value:x.approvedSupply?Object(N.jsx)(ce.a,{}):Object(N.jsx)(te.a,{}),icon:Object(N.jsx)(ae.a,{})},{title:"Total Supply",value:"$ ".concat(P()(x.totalSupply)),icon:Object(N.jsx)(ae.a,{})},{title:"Circulating Supply",value:"$ ".concat(P()(x.circulatingSupply)),icon:Object(N.jsx)(ae.a,{})}];return Object(N.jsxs)(T.a,{className:"coin-detail-container",children:[Object(N.jsxs)(T.a,{className:"coin-heading-container",children:[Object(N.jsxs)(re,{level:2,className:"coin-name",children:[null===h||void 0===h||null===(c=h.data)||void 0===c?void 0:c.coin.name," (",null===h||void 0===h||null===(t=h.data)||void 0===t?void 0:t.coin.slug,") Price"]}),Object(N.jsxs)("p",{children:[x.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(N.jsx)(B.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return j(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(N.jsx)(oe,{children:e},e)}))}),Object(N.jsx)(ie,{coinHistory:O,currentPrice:P()(x.price),coinName:x.name}),Object(N.jsxs)(T.a,{className:"stats-container",children:[Object(N.jsxs)(T.a,{className:"coin-value-statistics",children:[Object(N.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(N.jsxs)(re,{level:3,className:"coin-details-heading",children:[x.name," Value Statistics"]}),Object(N.jsxs)("p",{children:["An overview showing the statistics of ",x.name,", such as the base and quote currency, the rank, and trading volume."]})]}),p.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(N.jsxs)(T.a,{className:"coin-stats",children:[Object(N.jsxs)(T.a,{className:"coin-stats-name",children:[Object(N.jsx)(le,{children:c}),Object(N.jsx)(le,{children:t})]}),Object(N.jsx)(le,{className:"stats",children:a})]})}))]}),Object(N.jsxs)(T.a,{className:"other-stats-info",children:[Object(N.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(N.jsx)(re,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(N.jsxs)("p",{children:["An overview showing the statistics of ",x.name,", such as the base and quote currency, the rank, and trading volume."]})]}),m.map((function(e){var c=e.icon,t=e.title,a=e.value;return Object(N.jsxs)(T.a,{className:"coin-stats",children:[Object(N.jsxs)(T.a,{className:"coin-stats-name",children:[Object(N.jsx)(le,{children:c}),Object(N.jsx)(le,{children:t})]}),Object(N.jsx)(le,{className:"stats",children:a})]})}))]}),Object(N.jsxs)(T.a,{className:"coin-desc-link",children:[Object(N.jsxs)(S.a,{className:"coin-desc",children:[Object(N.jsxs)(re,{level:3,className:"coin-details-heading",children:["What is ",x.name,"?"]}),Object(z.a)(x.description)]}),Object(N.jsxs)(T.a,{className:"coin-links",children:[Object(N.jsxs)(re,{level:3,className:"coin-details-heading",children:[x.name," Links"]}),null===(a=x.links)||void 0===a?void 0:a.map((function(e){return Object(N.jsxs)(S.a,{className:"coin-link",children:[Object(N.jsx)(re,{level:5,className:"link-name",children:e.type}),Object(N.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})]})},de=t(295),he=d.a.Text,be=de.a.Panel,ue=function(){var e,c=q(),t=c.data,a=c.isFetching,n=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return a?Object(N.jsx)(M,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(S.a,{children:[Object(N.jsx)(T.a,{span:6,children:"Exchanges"}),Object(N.jsx)(T.a,{span:6,children:"24h Trade Volume"}),Object(N.jsx)(T.a,{span:6,children:"Markets"}),Object(N.jsx)(T.a,{span:6,children:"Change"})]}),Object(N.jsx)(S.a,{children:n.map((function(e){return Object(N.jsx)(T.a,{span:24,children:Object(N.jsx)(de.a,{children:Object(N.jsx)(be,{showArrow:!1,header:Object(N.jsxs)(S.a,{children:[Object(N.jsxs)(T.a,{span:6,children:[Object(N.jsx)(he,{children:Object(N.jsxs)("strong",{children:[e.rank,"."]})}),Object(N.jsx)(u.a,{className:"exchange-image",src:e.iconUrl}),Object(N.jsx)(he,{children:Object(N.jsx)("strong",{children:e.name})})]}),Object(N.jsxs)(T.a,{span:6,children:["$",P()(e.volume)]}),Object(N.jsx)(T.a,{span:6,children:P()(e.numberOfMarkets)}),Object(N.jsxs)(T.a,{span:6,children:[P()(e.marketShare),"%"]})]},e.id),children:Object(z.a)(e.description||"")},e.id)})})}))})]})},Oe=t(164),xe=t.n(Oe),pe=Object({NODE_ENV:"production",PUBLIC_URL:"/react-cryptoworld",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CRYPTO_API_HOST:"coinranking1.p.rapidapi.com",REACT_APP_CRYPTO_API_KEY:"da5b8fc333msh565d9895899986dp1ea3dbjsn6a70d6383794",REACT_APP_NEWS_API_HOST:"bing-news-search1.p.rapidapi.com",REACT_APP_NEWS_API_KEY:"da5b8fc333msh565d9895899986dp1ea3dbjsn6a70d6383794"}),me=pe.REACT_APP_NEWS_API_KEY,ve=pe.REACT_APP_NEWS_API_HOST,ge={"x-bingapis-sdk":"true","x-rapidapi-host":"".concat(ve),"x-rapidapi-key":"".concat(me)},ye=Object(E.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(A.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com/"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var c=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(c,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:ge}}})}}}),fe=ye.useGetCryptoNewsQuery,Ne=d.a.Text,Ce=d.a.Title,_e=B.a.Option,Pe="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",Se=function(e){var c,t=e.simplified,a=Object(n.useState)("Cryptocurrency"),s=Object(b.a)(a,2),i=s[0],r=s[1],l=fe({newsCategory:i,count:t?6:12}).data,o=U(100).data;return(null===l||void 0===l?void 0:l.value)?Object(N.jsxs)(S.a,{gutter:[24,24],children:[!t&&Object(N.jsx)(T.a,{span:24,children:Object(N.jsxs)(B.a,{showSearch:!0,className:"select-news",placeholder:"Select a crypto",optionFilterProp:"children",onChange:function(e){return r(e)},filterOption:function(e,c){return c.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(N.jsx)(_e,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===o||void 0===o||null===(c=o.data)||void 0===c?void 0:c.coins.map((function(e){return Object(N.jsx)(_e,{value:e.name,children:e.name})}))]})}),l.value.map((function(e,c){var t,a,n,s,i,r;return Object(N.jsx)(T.a,{xs:24,sm:12,lg:8,children:Object(N.jsx)(Q.a,{hoverable:!0,className:"news-card",children:Object(N.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(N.jsxs)("div",{className:"news-image-container",children:[Object(N.jsx)(Ce,{className:"news-title",level:4,children:e.name}),Object(N.jsx)("img",{src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(a=t.thumbnail)||void 0===a?void 0:a.contentUrl)||Pe,alt:"news"})]}),Object(N.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(N.jsxs)("div",{className:"provider-container",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(u.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||Pe,alt:"news"}),Object(N.jsxs)(Ne,{className:"provider-name",children:[null===(r=e.provider[0])||void 0===r?void 0:r.name," "]})]}),Object(N.jsx)(Ne,{children:xe()(e.datePublished).startOf("ss").fromNow()})]})]})})},c)}))]}):Object(N.jsx)(M,{})},Te=(t(283),function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("div",{className:"navbar",children:Object(N.jsx)(C,{})}),Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)(j.a,{children:Object(N.jsx)("div",{className:"routes",children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",children:Object(N.jsx)(V,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/cryptocurrencies",children:Object(N.jsx)(G,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/crypto/:coinId",children:Object(N.jsx)(je,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/exchanges",children:Object(N.jsx)(ue,{})}),Object(N.jsx)(o.a,{exact:!0,path:"/news",children:Object(N.jsx)(Se,{})})]})})}),Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsxs)(d.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoworld ",Object(N.jsx)("br",{}),"All rights reserved"]}),Object(N.jsxs)(h.b,{children:[Object(N.jsx)(r.b,{to:"/",children:"Home"}),Object(N.jsx)(r.b,{to:"/exchanges",children:"Exchanges"}),Object(N.jsx)(r.b,{to:"/news",children:"News"})]})]})]})]})}),we=t(30),Ee=t(9),Ae=Object(Ee.a)({reducer:(a={},Object(we.a)(a,F.reducerPath,F.reducer),Object(we.a)(a,ye.reducerPath,ye.reducer),a)});t(284);i.a.render(Object(N.jsx)(r.a,{children:Object(N.jsx)(l.a,{store:Ae,children:Object(N.jsx)(Te,{})})}),document.getElementById("root"))}},[[285,1,2]]]);
//# sourceMappingURL=main.ccb4f39a.chunk.js.map