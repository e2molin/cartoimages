(this.webpackJsonpcartoimg=this.webpackJsonpcartoimg||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),r=n(7),a=n.n(r),s=(n(12),n(13),n(2)),o=(n(14),n(0));function d(t){var e=t.id,n=t.title,i=t.url;return Object(o.jsxs)("a",{href:"#".concat(e),className:"Gifcontainer",children:[Object(o.jsx)("h4",{children:n}),Object(o.jsx)("small",{children:e}),Object(o.jsx)("img",{src:i,title:n})]})}var u="IjmmViOE2rq5nh9jplq6JWU32Dcak2Ju";function j(t){var e=t.params.keyword,n=Object(i.useState)([]),c=Object(s.a)(n,2),r=c[0],a=c[1];return Object(i.useEffect)((function(){(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).keyword,e=void 0===t?"rembrandt":t,n="https://api.giphy.com/v1/gifs/search?api_key=".concat(u,"&q=").concat(e,"&limit=25&offset=0&rating=g&lang=en");return fetch(n).then((function(t){return t.json()})).then((function(t){var e=t.data,n=void 0===e?[]:e;if(Array.isArray(n))return n.map((function(t){var e=t.images;return{title:t.title,id:t.id,url:e.downsized_medium.url}}))}))})({keyword:e}).then((function(t){return a(t)}))}),[e]),Object(o.jsx)("div",{children:r.map((function(t){return Object(o.jsx)(d,{id:t.id,title:t.title,url:t.url},t.id)}))})}var l=n(5);var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("section",{className:"App-content",children:[Object(o.jsx)("h1",{children:"App"}),Object(o.jsxs)("section",{className:"menu",children:[Object(o.jsx)(l.a,{to:"/gif/pandas",children:"Gifs de pandas"}),Object(o.jsx)(l.a,{to:"/gif/tiger",children:"Gifs de tigres"}),Object(o.jsx)(l.a,{to:"/gif/lion",children:"Gifs de leones"})]}),Object(o.jsx)(l.b,{path:"/gif/:keyword",component:j})]})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.56eb390a.chunk.js.map