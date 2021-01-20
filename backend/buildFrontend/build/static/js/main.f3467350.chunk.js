(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(e,t,r){},68:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r(21),s=r.n(a),i=r(18),u=r(7),o=r(2),d=r.n(o),l=r(3),j=r(4),b=r(8),p=r(6),h=r(12),v=Object(h.c)({name:"notifications",initialState:{notifications:[]},reducers:{removeNotification:function(e){return Object(p.a)(Object(p.a)({},e),{},{notifications:e.notifications.slice(1)})},addNotification:function(e,t){var r=t.payload;return Object(p.a)(Object(p.a)({},e),{},{notifications:e.notifications.concat(r)})}}}),m=v.actions,f=m.removeNotification,O=m.addNotification,x=v.reducer,g=r(17),N=Object(h.c)({name:"users",initialState:{users:{}},reducers:{setUser:function(e,t){var r=t.payload;return Object(p.a)(Object(p.a)({},e),{},{users:Object(p.a)(Object(p.a)({},e.users),{},Object(g.a)({},r.id,Object(p.a)({},r)))})}}}),k=N.actions.setUser,y=N.reducer,w=r(9),C=r.n(w),S="LoggedUser",I=function(e){localStorage.setItem(S,JSON.stringify(e))},E=function(){var e=localStorage.getItem(S);return e?JSON.parse(e):null},A=function(){localStorage.removeItem(S)},P=function(){var e=E();return e?{headers:{Authorization:"bearer ".concat(e.token)}}:{headers:{Authorization:"bearer FalseToken"}}},F="/api/user",U={addUser:function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(F,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(F,"/").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addFavourite:function(){var e=Object(l.a)(d.a.mark((function e(t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("".concat(F,"/").concat(t,"/favourite/").concat(r),null,{headers:{Authorization:P().headers.Authorization}});case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),removeFavourite:function(){var e=Object(l.a)(d.a.mark((function e(t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.delete("".concat(F,"/").concat(t,"/favourite/").concat(r),{headers:{Authorization:P().headers.Authorization}});case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},V=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],o=i[1],p=Object(c.useState)(""),h=Object(j.a)(p,2),v=h[0],m=h[1],x=Object(c.useState)(!0),g=Object(j.a)(x,2),N=g[0],y=g[1],w=Object(c.useState)(!1),C=Object(j.a)(w,2),S=C[0],I=C[1];Object(c.useEffect)((function(){u&&v&&u!==v?(I(!0),y(!1)):u&&v?(I(!0),y(!0)):(I(!1),y(!1))}),[v,u]);var E=Object(b.b)(),A=function(e,t){E(O({message:e,error:t})),setTimeout((function(){return E(f())}),2e3)},P=function(){var e=Object(l.a)(d.a.mark((function e(t){var r,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.username,n=t.password,r&&n){e.next=4;break}return A("All fields must be filled",!0),e.abrupt("return");case 4:return e.prev=4,e.next=7,U.addUser(t);case 7:c=e.sent,E(k(c)),document.getElementById("username-input").value="",document.getElementById("password-input").value="",document.getElementById("password-again-input").value="",a(""),o(""),m(""),A("New user created! Welcome!",!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),A(e.t0.response.data,!0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),P({username:r,password:u});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:" Create new user:"}),Object(n.jsxs)("form",{onSubmit:F,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Username"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{id:"username-input",value:r,onChange:function(e){var t=e.target;return a(t.value)}})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Password"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{id:"password-input",type:"password",value:u,onChange:function(e){var t=e.target;return o(t.value)}})})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Password again"})}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{id:"password-again-input",type:"password",value:v,onChange:function(e){var t=e.target;return m(t.value)}})})]}),Object(n.jsxs)("div",{children:[!N&&S&&Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"The passwords do not match!"})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",disabled:!(N&&S),children:"Create account!"})})]})]})]})},B=r(13),L={login:function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/api/login",{username:t,password:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},T={user:null},z=(Object(h.b)("login/login",function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,c=t.password,e.next=3,L.login(n,c);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),Object(h.c)({name:"login",initialState:T,reducers:{logout:function(e){return T},loadUser:function(e,t){var r=t.payload;return Object(p.a)(Object(p.a)({},e),{},{user:r})}}})),q=z.actions,M=q.logout,G=q.loadUser,D=z.reducer,Y=Object(h.c)({name:"videos",initialState:{videos:{}},reducers:{setVideos:function(e,t){var r=t.payload;return Object(p.a)(Object(p.a)({},e),{},{videos:Object(p.a)({},r.reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.id,t))}),{}))})}}}),J=Y.actions.setVideos,R=Y.reducer,W=Object(h.c)({name:"produce",initialState:{produce:{}},reducers:{setProduce:function(e,t){var r=t.payload;return Object(p.a)(Object(p.a)({},e),{},{produce:Object(p.a)(Object(p.a)({},e.produce),r.reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.id,t))}),{}))})}}}),H=W.actions.setProduce,K=W.reducer,Q=Object(B.c)({users:y,login:D,videos:R,produce:K,notifications:x}),X=Object(h.a)({reducer:Q}),Z=function(){return Object(b.b)()},$=function(e){var t=e.video,r=Object(u.g)();return Object(n.jsxs)("section",{className:"grid-video-entry top-margin",children:[Object(n.jsx)("div",{className:"bar lighter start-f start-m"}),Object(n.jsx)("div",{className:"bar bar-button lighter",children:Object(n.jsx)("p",{onClick:function(){return r.push("/video/".concat(t.id))},children:t.videoName})}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)("p",{children:t.channelName})}),Object(n.jsx)("div",{className:"full-screen-only",children:Object(n.jsx)("a",{href:t.videoUrl,title:t.videoUrl,children:Object(n.jsx)("div",{className:"bar bar-button lighter full-screen-only",children:Object(n.jsx)("p",{children:"To video!"})})})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("div",{children:function(){var e=t.ingredients.length;if(e<=2)return t.ingredients;var r=t.ingredients.slice().sort((function(e,t){return function(e,t){return e.produce.pricePerGram*e.quantity-t.produce.pricePerGram*t.quantity}(e,t)})),n=e>3?2:r.length-1;return r.slice(0,n)}().map((function(e){return Object(n.jsx)("p",{children:e.produce.produceName},e.id)}))})}),Object(n.jsx)("div",{className:"bar lighter",children:Object(n.jsx)("p",{children:function(){var e=0;return t.ingredients.forEach((function(t){return e+=t.produce.caloriesPerGram*t.quantity})),e}()})}),Object(n.jsx)("div",{className:"bar ",children:Object(n.jsxs)("p",{children:[function(){var e=0;return t.ingredients.forEach((function(t){return e+=t.produce.pricePerGram*t.quantity})),e/100}(),"\u20ac"]})}),Object(n.jsx)("div",{className:"bar lighter",children:Object(n.jsx)("p",{children:t.timeInMinutes})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:t.vegetarian?"Yes":"No"})}),Object(n.jsx)("div",{className:"bar lighter full-screen-only",children:Object(n.jsx)("p",{children:t.favourites})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:t.clicks})}),Object(n.jsx)("div",{className:"bar lighter full-screen-only",children:Object(n.jsx)("p",{children:new Date(Number(t.added)).toDateString()})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:t.username})}),Object(n.jsx)("div",{className:"bar end-f end-m lighter-m"})]})},_=function(e){var t=e.videos;return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"form-background top-margin bottom-margin center-text",children:Object(n.jsx)("p",{className:"side-margin",children:"! Links are checked with YouTube API to be actual videos when submitted, but we can't know what they actually contain. If you wan't to be sure what you click, try searching on YouTube with the video title. !"})}),Object(n.jsxs)("section",{className:"grid-video-entry",children:[Object(n.jsx)("div",{className:"bar lighter start-f start-m"}),Object(n.jsx)("div",{className:"bar lighter",children:Object(n.jsx)("p",{children:"Video: "})}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)("p",{children:"Channel: "})}),Object(n.jsx)("div",{className:"bar lighter full-screen-only",children:Object(n.jsx)("p",{children:"Link: "})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:"Most used ingredients: "})}),Object(n.jsx)("div",{className:"bar lighter",children:Object(n.jsx)("p",{children:"Calories (approx.): "})}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsx)("p",{children:"Price (approx.): "})}),Object(n.jsx)("div",{className:"bar lighter",children:Object(n.jsx)("p",{children:"Cooking time: "})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:"Vegetarian: "})}),Object(n.jsx)("div",{className:"bar lighter full-screen-only",children:Object(n.jsx)("p",{children:"Favourites: "})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:"Clicks: "})}),Object(n.jsx)("div",{className:"bar lighter full-screen-only",children:Object(n.jsx)("p",{children:"Added: "})}),Object(n.jsx)("div",{className:"bar full-screen-only",children:Object(n.jsx)("p",{children:"Adding user: "})}),Object(n.jsx)("div",{className:"bar lighter-m end-m end-f"})]}),t&&t.map((function(e){return Object(n.jsx)($,{video:e},e.id)})),(!t||0===t.length)&&Object(n.jsx)("div",{className:"form-background top-margin bottom-margin center-text",children:Object(n.jsx)("p",{className:"side-margin",children:"There is no videos here. Take a look elsewhere"})})]})},ee=function(){var e=Object(u.h)().userid,t=Object(c.useState)(!0),r=Object(j.a)(t,2),a=r[0],s=r[1],i=Z(),o=Object(b.c)((function(t){return t.users.users[Number(e)]}));return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.getUser(Number(e));case 3:r=t.sent,i(k(r)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),i(O({message:t.t0.response.data,error:!0})),setTimeout((function(){return i(f())}),2e3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[i,e]),!o||o&&!o?Object(n.jsx)("div",{}):o?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"center-text",children:Object(n.jsxs)("h1",{children:[o.username,"'s videos"]})}),Object(n.jsxs)("div",{className:"radio-button center-text",children:[Object(n.jsx)("button",{className:a?"darker start-m start-f darken-hover":"bar start-m start-f darken-hover",onClick:function(){return s(!0)},children:"Added"}),Object(n.jsx)("button",{className:a?"bar end-m end-f darken-hover":"darker end-m end-f darken-hover",onClick:function(){return s(!1)},children:"Favourites"})]}),a&&Object(n.jsx)("div",{className:"top-padding",children:Object(n.jsx)(_,{videos:o.videos})}),!a&&Object(n.jsx)("div",{className:"top-padding",children:Object(n.jsx)(_,{videos:o.favouriteVideos})})]}):Object(n.jsx)("div",{})},te="/api/videos",re=function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(te,t,{headers:{Authorization:P().headers.Authorization}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat(te,"/").concat(t,"/click"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat(te,"/").concat(t,"/favourite/add"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat(te,"/").concat(t,"/favourite/remove"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/api/ingredients",t,{headers:{Authorization:P().headers.Authorization}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie={getVideos:function(){var e=Object(l.a)(d.a.mark((function e(t){var r,n,c,a,s,i,u,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.ids,n=t.users,c=t.minClicks,a=t.maxClicks,s=t.minFavourites,i=t.maxFavourites,u=t.ingredients,o=t.videos,e.next=3,C.a.post("".concat(te,"/get"),{ids:r,users:n,minClicks:c,maxClicks:a,minFavourites:s,maxFavourites:i,ingredients:u,videos:o});case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addVideo:re,addIngredient:se,addClick:ne,addFavourite:ce,removeFavourite:ae},ue=function(){var e=Object(b.c)((function(e){return e.videos.videos})),t=Z(),r=Object(c.useState)("User"),a=Object(j.a)(r,2),s=a[0],i=a[1],u=Object(c.useState)([]),o=Object(j.a)(u,2),p=o[0],h=o[1],v=Object(c.useState)(""),m=Object(j.a)(v,2),x=m[0],g=m[1],N=function(e,r){t(O({message:e,error:r})),setTimeout((function(){return t(f())}),2e3)};Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.getVideos({});case 3:r=e.sent,t(J(r)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t(O({message:e.t0.response.data,error:!0})),setTimeout((function(){return t(f())}),2e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var k=function(){var e=Object(l.a)(d.a.mark((function e(){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},p.forEach((function(e){switch(e.field){case"User":r.users=r.users?r.users.concat(e.search.toLowerCase()):r.users=[e.search.toLowerCase()];break;case"Video":r.videos=r.videos?r.videos.concat("%".concat(e.search.toLowerCase(),"%")):r.videos=["%".concat(e.search.toLowerCase(),"%")];break;case"Clicks (min)":r.minClicks=Number(e.search);break;case"Clicks (max)":r.maxClicks=Number(e.search);break;case"Favourites (min)":r.minFavourites=Number(e.search);break;case"Favourites (max)":r.maxFavourites=Number(e.search);break;case"Ingredient":r.ingredients=r.ingredients?r.ingredients.concat("%".concat(e.search.toLowerCase(),"%")):r.ingredients=["%".concat(e.search.toLowerCase(),"%")]}})),e.prev=2,e.next=5,ie.getVideos(r);case 5:n=e.sent,t(J(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(e.t0.response.data,!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"center-text search-page-grid form-background",children:[Object(n.jsxs)("div",{className:"search-module-grid",children:[Object(n.jsx)("p",{className:"top-margin",children:"Search:"}),Object(n.jsxs)("div",{className:"search-bar-grid",children:[Object(n.jsx)("div",{className:"darker open-button start-m start-f vertical",children:Object(n.jsxs)("select",{className:"side-margin transparent",onChange:function(e){var t=e.target;return i(t.value)},children:[Object(n.jsx)("option",{value:"User",children:"By adding user"}),Object(n.jsx)("option",{value:"Video",children:"By video"}),Object(n.jsx)("option",{value:"Clicks (min)",children:"By clicks (min)"}),Object(n.jsx)("option",{value:"Clicks (max)",children:"By clicks (max)"}),Object(n.jsx)("option",{value:"Favourites (min)",children:"By favourites (min)"}),Object(n.jsx)("option",{value:"Favourites (max)",children:"By favourites (max)"}),Object(n.jsx)("option",{value:"Ingredient",children:"By ingredient"})]})}),Object(n.jsx)("div",{className:"darker",children:Object(n.jsx)("input",{className:"text-input white-text",placeholder:"Search...",id:"search-input",onChange:function(e){var t=e.target;return g(t.value)}})}),Object(n.jsx)("button",{className:"darker end-f end-m open-button vertical",onClick:function(){return function(){if(x){var e={id:Math.random(),field:s,search:x};"User"===s||"Video"===s||"Ingredient"===s||Number.isInteger(Number(x))?(h(p.concat(e)),document.getElementById("search-input").value="",g("")):N("Must be integer",!0)}else N("Search can't be empty",!0)}()},children:"Add"})]})]}),Object(n.jsxs)("div",{className:"inside-background",children:[Object(n.jsx)("p",{className:"bottom-margin",children:"Current search: "}),p.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[e.field," = ",e.search," "]}),Object(n.jsx)("button",{className:"remove-button",onClick:function(){return h(p.filter((function(t){return t.id!==e.id})))}})]},e.id)}))]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"button",className:"add-button",onClick:function(){return k()},children:"Search"})})]})}),Object(n.jsx)(_,{videos:Object.values(e)})]})},oe=function(){var e=Z(),t=Object(u.h)().videoid,r=Object(b.c)((function(e){return e.videos.videos[Number(t)]})),a=Object(b.c)((function(e){var t;return null===(t=e.login.user)||void 0===t?void 0:t.id})),s=Object(b.c)((function(e){return e.users.users[a||-1]})),i=(null===s||void 0===s?void 0:s.favouriteVideos.filter((function(e){return e.id===Number(t)})).length)>0,o=function(t,r){e(O({message:t,error:r})),setTimeout((function(){return e(f())}),2e3)};Object(c.useEffect)((function(){var r={ids:[Number(t)]},n=function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.getVideos(r);case 2:n=t.sent,e(J(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(l.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,U.getUser(a);case 3:r=t.sent,e(k(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{n(),a&&c()}catch(s){e(O({message:s.response.data,error:!0})),setTimeout((function(){return e(f())}),2e3)}}),[e,t,a]),Object(c.useEffect)((function(){try{ie.addClick(Number(t))}catch(e){return}}),[t]);var j=function(){var n=Object(l.a)(d.a.mark((function n(){var c,a,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s||!r){n.next=21;break}return c={ids:[Number(t)]},n.prev=2,n.next=5,U.addFavourite(s.id,r.id);case 5:return n.next=7,U.getUser(s.id);case 7:return a=n.sent,e(k(a)),n.next=11,ie.getVideos(c);case 11:return i=n.sent,e(J(i)),n.next=15,ie.addFavourite(r.id);case 15:o("Video added to favourites!",!1),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(2),o(n.t0.response.data,!0);case 21:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=Object(l.a)(d.a.mark((function n(){var c,a,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s||!r){n.next=21;break}return c={ids:[Number(t)]},n.prev=2,n.next=5,U.removeFavourite(s.id,r.id);case 5:return n.next=7,U.getUser(s.id);case 7:return a=n.sent,e(k(a)),n.next=11,ie.getVideos(c);case 11:return i=n.sent,e(J(i)),n.next=15,ie.removeFavourite(r.id);case 15:o("Video removed from favourites",!1),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(2),o(n.t0.response.data,!0);case 21:case"end":return n.stop()}}),n,null,[[2,18]])})));return function(){return n.apply(this,arguments)}}();return r?Object(n.jsx)("div",{children:Object(n.jsxs)("section",{className:"form-background center-text top-padding bottom-padding",children:[Object(n.jsx)("div",{className:"inside-background",children:Object(n.jsxs)("div",{className:"side-margin",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:r.videoName}),Object(n.jsxs)("p",{children:["By: ",r.channelName]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("a",{href:r.videoUrl,children:r.videoUrl})})]})}),Object(n.jsx)("div",{className:"inside-background top-margin",children:Object(n.jsxs)("div",{className:"side-margin",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Ingredients"}),Object(n.jsx)("div",{className:"top-margin",children:r.ingredients.map((function(e){return Object(n.jsxs)("p",{children:[e.quantity,"g of ",e.produce.produceName]},e.id)}))})]}),Object(n.jsx)("div",{className:"top-margin",children:Object(n.jsxs)("p",{children:["Cooking time: ",r.timeInMinutes]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Calories: ",r.ingredients.reduce((function(e,t){return e+t.produce.caloriesPerGram*t.quantity}),0)/100,"\u20ac"]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Price: ",r.ingredients.reduce((function(e,t){return e+t.produce.pricePerGram*t.quantity}),0)/100,"\u20ac"]})}),Object(n.jsx)("div",{className:"top-margin",children:Object(n.jsxs)("p",{children:["Recipe is vegetarian: ",r.vegetarian?"YES":"NO"]})})]})}),Object(n.jsx)("div",{className:"top-margin",children:s&&s.id&&Object(n.jsxs)("div",{children:[!i&&Object(n.jsx)("button",{className:"add-button",onClick:function(){return j()},children:"Add to favourites!"}),i&&Object(n.jsx)("button",{className:"add-button",onClick:function(){return p()},children:"Remove from favourites!"})]})})]})}):Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"No video found!"})})},de=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],h=Object(b.c)((function(e){return e.login.user})),v=Z(),m=Object(u.g)(),x=function(e,t){v(O({message:e,error:t})),setTimeout((function(){return v(f())}),2e3)},g=function(){var e=Object(l.a)(d.a.mark((function e(t,r){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.login(t,r);case 3:n=e.sent,(c=v(G(n))).payload&&I(c.payload),x("Welcome, ".concat(c.payload.username),!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0.response.data,!0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g(r,o);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"login-form",children:[!h&&Object(n.jsxs)("form",{onSubmit:N,className:"grid-logged-out",children:[Object(n.jsx)("button",{className:"bar start-m start-f bar-button",type:"button",onClick:function(){return m.push("/search")},children:"Search videos"}),Object(n.jsx)("div",{className:"bar",children:Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("p",{children:"You are not logged in "}),Object(n.jsx)("input",{className:"text-input",placeholder:"Username",value:r,onChange:function(e){var t=e.target;return a(t.value)}}),Object(n.jsx)("input",{className:"text-input",placeholder:"Password",type:"password",value:o,onChange:function(e){var t=e.target;return p(t.value)}})]})}),Object(n.jsx)("button",{className:"bar end-m end-f bar-button",type:"submit",children:"Log in"})]}),h&&Object(n.jsxs)("div",{className:"grid-logged-in",children:[Object(n.jsxs)("p",{className:"bar start-f full-screen-only",children:["You are logged in as ",h.username,"!"]}),Object(n.jsx)("button",{className:"bar start start-m bar-button",onClick:function(){return m.push("/search")},children:"Search videos"}),Object(n.jsx)("button",{className:"bar bar-button",onClick:function(){return m.push("/addVideo")},children:"Add a video"}),Object(n.jsx)("button",{className:"bar bar-button",onClick:function(){return m.push("/user/".concat(h.id))},children:"Own page"}),Object(n.jsx)("button",{className:"bar end-m end-f bar-button",type:"button",onClick:function(){A(),v(M()),x("Logged out!",!1)},children:"Log out"})]})]})},le="/api/produce",je={addProduce:function(){var e=Object(l.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(le,t,{headers:{Authorization:P().headers.Authorization}});case 2:return r=e.sent,e.abrupt("return",[r.data]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getProduce:function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(le,"/"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},be=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],o=i[1],b=Object(c.useState)(""),p=Object(j.a)(b,2),h=p[0],v=p[1],m=Z(),x=function(e,t){m(O({message:e,error:t})),setTimeout((function(){return m(f())}),2e3)},g=Boolean(r&&u.length>0&&Number.isFinite(Number(u))&&Number(u)>-1&&Number(u)<10&&h.length>0&&Number.isFinite(Number(h))&&Number(h)>-1&&Number(h)<1e3),N=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=20;break}return e.prev=1,e.next=4,je.addProduce({produceName:r,caloriesPerGram:Number(u),pricePerGram:Number(h)});case 4:t=e.sent,m(H(t)),a(""),o(""),v(""),document.getElementById("produce-name-input").value="",document.getElementById("produce-calories-input").value="",document.getElementById("produce-price-input").value="",x("".concat(r," added!"),!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),x(e.t0.response.data,!0);case 18:e.next=21;break;case 20:throw new Error("Name can't be left empty. Price has to be float. Calories has to be integer.");case 21:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"add-produce-grid top-padding",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Produce name:"}),Object(n.jsx)("input",{className:"text-input half",id:"produce-name-input",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Calories (kcal/1g) :"}),Object(n.jsx)("input",{className:"text-input half",id:"produce-calories-input",type:"number",min:"0",max:"9",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Price (cent/1g):"}),Object(n.jsx)("input",{className:"text-input half",id:"produce-price-input",type:"number",min:"0",max:"100000",onChange:function(e){var t=e.target;return v(t.value)}})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"add-button",type:"button",disabled:!g,onClick:function(){return N()},children:"Add!"})}),Object(n.jsx)("div",{children:!g&&Object(n.jsx)("p",{style:{color:"red"},children:"Check that every input is filled with suitable values!"})})]})},pe=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],h=Object(c.useState)(!1),v=Object(j.a)(h,2),m=v[0],x=v[1],g=Object(c.useState)(""),N=Object(j.a)(g,2),k=N[0],y=N[1],w=Object(c.useState)(""),C=Object(j.a)(w,2),S=C[0],I=C[1],E=Object(c.useState)(""),A=Object(j.a)(E,2),P=A[0],F=A[1],U=Object(c.useState)([]),V=Object(j.a)(U,2),B=V[0],L=V[1],T=Object(c.useState)(!1),z=Object(j.a)(T,2),q=z[0],M=z[1],G=Object(c.useState)(!1),D=Object(j.a)(G,2),Y=D[0],J=D[1],R=Object(c.useState)(!1),W=Object(j.a)(R,2),K=W[0],Q=W[1],X=Object(c.useState)(void 0),$=Object(j.a)(X,2),_=$[0],ee=$[1],te=Object(b.c)((function(e){return e.produce.produce})),re=Object(b.c)((function(e){return e.login.user})),ne=Object(u.g)(),ce=Z(),ae=function(e,t){ce(O({message:e,error:t})),setTimeout((function(){return ce(f())}),2e3)};Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.getProduce();case 3:t=e.sent,ce(H(t)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),ce(O({message:(null===(r=e.t0.response)||void 0===r?void 0:r.data)||e.t0.message,error:!0})),setTimeout((function(){return ce(f())}),2e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[ce]),Object(c.useEffect)((function(){Number.isInteger(Number(P))?J(!1):J(!0)}),[P]),Object(c.useEffect)((function(){Number.isInteger(Number(k))?M(!1):M(!0)}),[k]),Object(c.useEffect)((function(){o.startsWith("https://www.youtube.com/watch?v=")?x(!1):x(!0)}),[o]);var se=function(){var e=Object(l.a)(d.a.mark((function e(t){var r,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!re){e.next=24;break}return e.prev=2,r={userId:re.id,username:re.username,videoUrl:o,timeInMinutes:Number(k),vegetarian:K,added:Date.now()},e.next=6,ie.addVideo(r);case 6:return n=e.sent,c=B.map((function(e){return{produceId:e.produceId,quantity:e.quantity,videoId:n.id}})),e.next=10,ie.addIngredient(c);case 10:ae("".concat(o," added!"),!1),Q(!1),p(""),y(""),L([]),document.getElementById("time-input").value="",document.getElementById("link-input").value="",document.getElementById("veg-input").checked=!1,ne.push("/search"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),ae(e.t0.response.data,!0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}();return re&&re.id?Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:se,className:"grid-add-video form-background",children:[Object(n.jsxs)("div",{className:"top-padding half",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Link to video "}),Object(n.jsx)("span",{children:"(must start with "}),Object(n.jsx)("span",{style:{color:"red"},children:"https://www.youtube.com/watch?v="}),Object(n.jsx)("span",{children:" ): "})]}),Object(n.jsx)("input",{className:"text-input",id:"link-input",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{children:"Cooking time (in minutes): "}),Object(n.jsx)("input",{className:"text-input",id:"time-input",type:"number",min:"1",max:"100000",step:"1",onChange:function(e){var t=e.target;return y(t.value)}}),q&&Object(n.jsx)("span",{style:{color:"red"},children:"Must be a integer!"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Recipe is suitable for vegetarians? "}),Object(n.jsx)("input",{id:"veg-input",className:"checkbox",type:"checkbox",onChange:function(e){var t=e.target;return Q(t.checked)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Ingredients:"}),B.map((function(e){return Object(n.jsxs)("div",{className:"top-padding",children:[Object(n.jsxs)("span",{children:[e.quantity,"g of ",e.produceName]}),Object(n.jsx)("button",{className:"remove-button",onClick:function(){return L(B.filter((function(t){return t.id!==e.id})))}})]},e.id)}))]}),Object(n.jsx)("div",{children:Object(n.jsxs)("section",{className:"ingredient-grid",children:[Object(n.jsx)("h1",{children:"Add ingredient"}),Object(n.jsxs)("div",{className:"top-margin",children:[Object(n.jsx)("input",{className:"text-input round-top set-width as-ablock",onChange:function(e){var t=e.target;return I(t.value)},placeholder:"Search for produce..."}),Object(n.jsxs)("select",{className:"text-input round-bottom set-width as-abloc",defaultValue:void 0,onChange:function(e){var t=e.target;return ee(Number(t.value))},children:[Object(n.jsx)("option",{value:void 0,children:"Choose produce.."}),Object.values(te).filter((function(e){return e.produceName.toLowerCase().includes(S.toLowerCase())||!S})).sort((function(e,t){return e.produceName.toLowerCase()<=t.produceName.toLowerCase()?-1:1})).map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.produceName},e.id)}))]})]}),Object(n.jsxs)("div",{className:"top-margin",children:[Object(n.jsx)("p",{children:"How many grams?"}),Object(n.jsx)("input",{className:"text-input",id:"grams-input",type:"number",min:"1",max:"100000",step:"1",onChange:function(e){var t=e.target;return F(t.value)}}),Y&&Object(n.jsx)("p",{style:{color:"red"},children:"Must be a integer!"})]}),Object(n.jsx)("button",{className:"add-button top-margin",type:"button",disabled:Y||!P||!_,onClick:function(){return function(){var e;if(!Y&&P&&_){var t={produceId:_,produceName:(null===(e=te[_])||void 0===e?void 0:e.produceName)||"",quantity:Number(P),id:Math.random()};L(B.concat(t)),F(""),document.getElementById("grams-input").value=""}}()},children:" Add ingredient"})]})}),Object(n.jsxs)("div",{className:"wider",children:[Object(n.jsxs)("div",{className:"button-group",children:[Object(n.jsx)("div",{}),Object(n.jsx)("span",{className:"darker start-m start-f",children:"Add produce"}),Object(n.jsx)("button",{className:"open-button darker end-m end-f",type:"button",onClick:function(){return a(!r)},children:r?"-":"+"})]}),r&&Object(n.jsx)(be,{})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"add-button",disabled:!k||!o||m||q,type:"submit",children:"Add video!"})})]})}):Object(n.jsx)("div",{className:"center-text form-background",children:Object(n.jsx)("h1",{children:" Only registered users may add videos. Please login!"})})},he=function(){var e=Object(b.c)((function(e){return e.notifications.notifications}));return Object(n.jsx)("div",{children:e.map((function(e,t){return Object(n.jsx)("div",{className:e.error?"inside-background error":"inside-background success",children:Object(n.jsx)("p",{children:e.message})},t)}))})};var ve=function(){var e=Z();return Object(c.useEffect)((function(){var t=E();t&&e(G(t))})),Object(n.jsx)("div",{className:"restrict-width",children:Object(n.jsxs)(i.a,{children:[Object(n.jsx)(he,{}),Object(n.jsx)(de,{}),Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/register",render:function(){return Object(n.jsx)(V,{})}}),Object(n.jsx)(u.b,{path:"/user/:userid",render:function(){return Object(n.jsx)(ee,{})}}),Object(n.jsx)(u.b,{path:"/search",render:function(){return Object(n.jsx)(ue,{})}}),Object(n.jsx)(u.b,{path:"/video/:videoid",render:function(){return Object(n.jsx)(oe,{})}}),Object(n.jsx)(u.b,{path:"/addVideo",render:function(){return Object(n.jsx)(pe,{})}}),Object(n.jsx)(u.a,{exact:!0,from:"/",to:"/search"})]})]})})};r(67);s.a.render(Object(n.jsx)(b.a,{store:X,children:Object(n.jsx)(ve,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f3467350.chunk.js.map