"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{383:function(e,t,r){r.d(t,{Hx:function(){return l},Tg:function(){return i},Y5:function(){return o},bI:function(){return f},uV:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(16);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="71ee338e8e849b09eba67632ac17254e",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/all/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},155:function(e,t,r){r.d(t,{O:function(){return u}});var n=r(87),a=r(689),c={list:"MoviesList_list__0Owr9",title:"MoviesList_title__PB2c8",item:"MoviesList_item__eePYv"},s=r(184),u=function(e){var t=e.movies,r=(0,a.TH)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:c.wrapper,children:(0,s.jsx)("ul",{className:c.list,children:t.map((function(e){var t=e.id,a=e.poster_path,u=e.title;return(0,s.jsxs)("li",{className:c.item,children:[(0,s.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,s.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w200".concat(a):"https://placehold.co/200x300?text=Missing+Movie+Poster&font=roboto",alt:u})}),(0,s.jsx)("h4",{className:c.title,children:u})]},t)}))})})})}},514:function(e,t,r){r.r(t),r.d(t,{SearchMovies:function(){return x}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(383),i=r(155),o=r(791),p="searchForm_SearchFormInput__rVZo6",l="searchForm_form__JErdS",f="searchForm_SearchFormButton__WXf4k",v=r(184),h=function(e){var t=e.onSearch,r=(0,o.useState)(""),n=(0,a.Z)(r,2),c=n[0],s=n[1];return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(0),c||alert("Please fill in the input!"),t(c),s("")},children:[(0,v.jsx)("input",{className:p,type:"text",placeholder:"Search movies",name:"query",value:c,onChange:function(e){s(e.target.value.toLowerCase())}}),(0,v.jsx)("button",{className:f,type:"submit"})]})})},m=r(87),d=r(344),x=function(){var e,t=(0,m.lr)(),r=(0,a.Z)(t,2),c=r[0],p=r[1],l=(0,o.useState)([]),f=(0,a.Z)(l,2),x=f[0],_=f[1],g=(0,o.useState)(!1),w=(0,a.Z)(g,2),y=w[0],b=w[1],k=null!==(e=c.get("query"))&&void 0!==e?e:"";return(0,o.useEffect)((function(){if(k){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,u.bI)(k);case 4:t=e.sent,r=t.results,_(r),0===r.length&&alert("No movies are matching your query!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.message);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[k]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{value:k,onSearch:function(e){p(""!==e?{query:e}:{})}}),x.length>0&&(0,v.jsx)(i.O,{movies:x}),y&&(0,v.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=514.26b76d29.chunk.js.map