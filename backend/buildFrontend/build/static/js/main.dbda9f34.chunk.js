(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(21),s=n.n(a),i=n(18),u=n(7),o=n(2),d=n.n(o),l=n(3),j=n(4),b=n(8),p=n(6),h=n(12),m=Object(h.c)({name:"notifications",initialState:{notifications:[]},reducers:{removeNotification:function(e){return Object(p.a)(Object(p.a)({},e),{},{notifications:e.notifications.slice(1)})},addNotification:function(e,t){var n=t.payload;return Object(p.a)(Object(p.a)({},e),{},{notifications:e.notifications.concat(n)})}}}),v=m.actions,f=v.removeNotification,O=v.addNotification,x=m.reducer,g=n(17),N=Object(h.c)({name:"users",initialState:{users:{}},reducers:{setUser:function(e,t){var n=t.payload;return Object(p.a)(Object(p.a)({},e),{},{users:Object(p.a)(Object(p.a)({},e.users),{},Object(g.a)({},n.id,Object(p.a)({},n)))})}}}),k=N.actions.setUser,y=N.reducer,w=n(9),C=n.n(w),S="LoggedUser",I=function(e){localStorage.setItem(S,JSON.stringify(e))},E=function(){var e=localStorage.getItem(S);return e?JSON.parse(e):null},A=function(){localStorage.removeItem(S)},P=function(){var e=E();return e?{headers:{Authorization:"bearer ".concat(e.token)}}:{headers:{Authorization:"bearer FalseToken"}}},B="/api/user",F={addUser:function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(B,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(B,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addFavourite:function(){var e=Object(l.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("".concat(B,"/").concat(t,"/favourite/").concat(n),null,{headers:{Authorization:P().headers.Authorization}});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeFavourite:function(){var e=Object(l.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.delete("".concat(B,"/").concat(t,"/favourite/").concat(n),{headers:{Authorization:P().headers.Authorization}});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},U=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],o=i[1],p=Object(c.useState)(""),h=Object(j.a)(p,2),m=h[0],v=h[1],x=Object(c.useState)(!0),g=Object(j.a)(x,2),N=g[0],y=g[1],w=Object(c.useState)(!1),C=Object(j.a)(w,2),S=C[0],I=C[1];Object(c.useEffect)((function(){u&&m&&u!==m?(I(!0),y(!1)):u&&m?(I(!0),y(!0)):(I(!1),y(!1))}),[m,u]);var E=Object(b.b)(),A=function(e,t){E(O({message:e,error:t})),setTimeout((function(){return E(f())}),2e3)},P=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.username,r=t.password,n&&r){e.next=4;break}return A("All fields must be filled",!0),e.abrupt("return");case 4:return e.prev=4,e.next=7,F.addUser(t);case 7:c=e.sent,E(k(c)),document.getElementById("username-input").value="",document.getElementById("password-input").value="",document.getElementById("password-again-input").value="",a(""),o(""),v(""),A("New user created! Welcome!",!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),A(e.t0.response.data,!0);case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),P({username:n,password:u});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"form-background center-text top-padding bottom-padding",children:[Object(r.jsx)("h1",{children:" Create new user:"}),Object(r.jsxs)("form",{onSubmit:B,children:[Object(r.jsxs)("div",{className:"top-margin",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Username"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"text-input half",id:"username-input",value:n,onChange:function(e){var t=e.target;return a(t.value)}})})]}),Object(r.jsxs)("div",{className:"top-margin",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Password"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"text-input half",id:"password-input",type:"password",value:u,onChange:function(e){var t=e.target;return o(t.value)}})})]}),Object(r.jsxs)("div",{className:"top-margin",children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Password again"})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"text-input half",id:"password-again-input",type:"password",value:m,onChange:function(e){var t=e.target;return v(t.value)}})})]}),Object(r.jsxs)("div",{className:"top-margin",children:[!N&&S&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"The passwords do not match!"})}),Object(r.jsx)("div",{className:"top-margin",children:Object(r.jsx)("button",{className:"add-button",type:"submit",disabled:!(N&&S),children:"Create account!"})})]})]})]})},V=n(13),L={login:function(){var e=Object(l.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/api/login",{username:t,password:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},T={user:null},z=(Object(h.b)("login/login",function(){var e=Object(l.a)(d.a.mark((function e(t,n){var r,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,c=t.password,e.next=3,L.login(r,c);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(h.c)({name:"login",initialState:T,reducers:{logout:function(e){return T},loadUser:function(e,t){var n=t.payload;return Object(p.a)(Object(p.a)({},e),{},{user:n})}}})),q=z.actions,M=q.logout,G=q.loadUser,D=z.reducer,Y=Object(h.c)({name:"videos",initialState:{videos:{}},reducers:{setVideos:function(e,t){var n=t.payload;return Object(p.a)(Object(p.a)({},e),{},{videos:Object(p.a)({},n.reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.id,t))}),{}))})}}}),J=Y.actions.setVideos,R=Y.reducer,W=Object(h.c)({name:"produce",initialState:{produce:{}},reducers:{setProduce:function(e,t){var n=t.payload;return t.payload&&0!==t.payload.length?(console.log(n),Object(p.a)(Object(p.a)({},e),{},{produce:Object(p.a)(Object(p.a)({},e.produce),n.reduce((function(e,t){return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},t.id,t))}),{}))})):e}}}),H=W.actions.setProduce,K=W.reducer,Q=Object(V.c)({users:y,login:D,videos:R,produce:K,notifications:x}),X=Object(h.a)({reducer:Q}),Z=function(){return Object(b.b)()},$=function(e){var t=e.video,n=Object(u.g)();return Object(r.jsxs)("section",{className:"grid-video-entry top-margin",children:[Object(r.jsx)("div",{className:"bar lighter start-f start-m"}),Object(r.jsx)("div",{className:"bar bar-button lighter",children:Object(r.jsx)("p",{onClick:function(){return n.push("/video/".concat(t.id))},children:t.videoName})}),Object(r.jsx)("div",{className:"bar",children:Object(r.jsx)("p",{children:t.channelName})}),Object(r.jsx)("div",{className:"full-screen-only",children:Object(r.jsx)("a",{href:t.videoUrl,title:t.videoUrl,children:Object(r.jsx)("div",{className:"bar bar-button lighter full-screen-only",children:Object(r.jsx)("p",{children:"To video!"})})})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("div",{children:function(){var e=t.ingredients.length;if(e<=2)return t.ingredients;var n=t.ingredients.slice().sort((function(e,t){return function(e,t){return e.produce.pricePerGram*e.quantity-t.produce.pricePerGram*t.quantity}(e,t)})),r=e>3?2:n.length-1;return n.slice(0,r)}().map((function(e){return Object(r.jsx)("p",{children:e.produce.produceName},e.id)}))})}),Object(r.jsx)("div",{className:"bar lighter",children:Object(r.jsx)("p",{children:function(){var e=0;return t.ingredients.forEach((function(t){return e+=t.produce.caloriesPerGram*t.quantity})),e}()})}),Object(r.jsx)("div",{className:"bar ",children:Object(r.jsxs)("p",{children:[function(){var e=0;return t.ingredients.forEach((function(t){return e+=t.produce.pricePerGram*t.quantity})),e/100}(),"\u20ac"]})}),Object(r.jsx)("div",{className:"bar lighter",children:Object(r.jsx)("p",{children:t.timeInMinutes})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:t.vegetarian?"Yes":"No"})}),Object(r.jsx)("div",{className:"bar lighter full-screen-only",children:Object(r.jsx)("p",{children:t.favourites})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:t.clicks})}),Object(r.jsx)("div",{className:"bar lighter full-screen-only",children:Object(r.jsx)("p",{children:new Date(Number(t.added)).toDateString()})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:t.username})}),Object(r.jsx)("div",{className:"bar end-f end-m lighter-m"})]})},_=function(e){var t=e.videos;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"form-background top-margin bottom-margin center-text",children:Object(r.jsx)("p",{className:"side-margin",children:"! Links are checked with YouTube API to be actual videos when submitted, but we can't know what they actually contain. If you wan't to be sure what you click, try searching on YouTube with the video title. !"})}),Object(r.jsxs)("section",{className:"grid-video-entry",children:[Object(r.jsx)("div",{className:"bar lighter start-f start-m"}),Object(r.jsx)("div",{className:"bar lighter",children:Object(r.jsx)("p",{children:"Video: "})}),Object(r.jsx)("div",{className:"bar",children:Object(r.jsx)("p",{children:"Channel: "})}),Object(r.jsx)("div",{className:"bar lighter full-screen-only",children:Object(r.jsx)("p",{children:"Link: "})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:"Most used ingredients: "})}),Object(r.jsx)("div",{className:"bar lighter",children:Object(r.jsx)("p",{children:"Calories (approx.): "})}),Object(r.jsx)("div",{className:"bar",children:Object(r.jsx)("p",{children:"Price (approx.): "})}),Object(r.jsx)("div",{className:"bar lighter",children:Object(r.jsx)("p",{children:"Cooking time: "})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:"Vegetarian: "})}),Object(r.jsx)("div",{className:"bar lighter full-screen-only",children:Object(r.jsx)("p",{children:"Favourites: "})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:"Clicks: "})}),Object(r.jsx)("div",{className:"bar lighter full-screen-only",children:Object(r.jsx)("p",{children:"Added: "})}),Object(r.jsx)("div",{className:"bar full-screen-only",children:Object(r.jsx)("p",{children:"Adding user: "})}),Object(r.jsx)("div",{className:"bar lighter-m end-m end-f"})]}),t&&t.map((function(e){return Object(r.jsx)($,{video:e},e.id)})),(!t||0===t.length)&&Object(r.jsx)("div",{className:"form-background top-margin bottom-margin center-text",children:Object(r.jsx)("p",{className:"side-margin",children:"There is no videos here. Take a look elsewhere"})})]})},ee=function(){var e=Object(u.h)().userid,t=Object(c.useState)(!0),n=Object(j.a)(t,2),a=n[0],s=n[1],i=Z(),o=Object(b.c)((function(t){return t.users.users[Number(e)]}));return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.getUser(Number(e));case 3:n=t.sent,i(k(n)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),i(O({message:t.t0.response.data,error:!0})),setTimeout((function(){return i(f())}),2e3);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[i,e]),!o||o&&!o?Object(r.jsx)("div",{}):o?Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"center-text",children:Object(r.jsxs)("h1",{children:[o.username,"'s videos"]})}),Object(r.jsxs)("div",{className:"radio-button center-text",children:[Object(r.jsx)("button",{className:a?"darker start-m start-f darken-hover":"bar start-m start-f darken-hover",onClick:function(){return s(!0)},children:"Added"}),Object(r.jsx)("button",{className:a?"bar end-m end-f darken-hover":"darker end-m end-f darken-hover",onClick:function(){return s(!1)},children:"Favourites"})]}),a&&Object(r.jsx)("div",{className:"top-padding",children:Object(r.jsx)(_,{videos:o.videos})}),!a&&Object(r.jsx)("div",{className:"top-padding",children:Object(r.jsx)(_,{videos:o.favouriteVideos})})]}):Object(r.jsx)("div",{})},te="/api/videos",ne=function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(te,t,{headers:{Authorization:P().headers.Authorization}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat(te,"/").concat(t,"/click"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat(te,"/").concat(t,"/favourite/add"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.put("".concat(te,"/").concat(t,"/favourite/remove"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post("/api/ingredients",t,{headers:{Authorization:P().headers.Authorization}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie={getVideos:function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,c,a,s,i,u,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ids,r=t.users,c=t.minClicks,a=t.maxClicks,s=t.minFavourites,i=t.maxFavourites,u=t.ingredients,o=t.videos,e.next=3,C.a.post("".concat(te,"/get"),{ids:n,users:r,minClicks:c,maxClicks:a,minFavourites:s,maxFavourites:i,ingredients:u,videos:o});case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addVideo:ne,addIngredient:se,addClick:re,addFavourite:ce,removeFavourite:ae},ue=function(){var e=Object(b.c)((function(e){return e.videos.videos})),t=Z(),n=Object(c.useState)("User"),a=Object(j.a)(n,2),s=a[0],i=a[1],u=Object(c.useState)([]),o=Object(j.a)(u,2),p=o[0],h=o[1],m=Object(c.useState)(""),v=Object(j.a)(m,2),x=v[0],g=v[1],N=function(e,n){t(O({message:e,error:n})),setTimeout((function(){return t(f())}),2e3)};Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.getVideos({});case 3:n=e.sent,console.log(n),t(J(n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t(O({message:e.t0.response.data,error:!0})),setTimeout((function(){return t(f())}),2e3);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var k=function(){var e=Object(l.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},p.forEach((function(e){switch(e.field){case"User":n.users=n.users?n.users.concat(e.search.toLowerCase()):n.users=[e.search.toLowerCase()];break;case"Video":n.videos=n.videos?n.videos.concat("%".concat(e.search.toLowerCase(),"%")):n.videos=["%".concat(e.search.toLowerCase(),"%")];break;case"Clicks (min)":n.minClicks=Number(e.search);break;case"Clicks (max)":n.maxClicks=Number(e.search);break;case"Favourites (min)":n.minFavourites=Number(e.search);break;case"Favourites (max)":n.maxFavourites=Number(e.search);break;case"Ingredient":n.ingredients=n.ingredients?n.ingredients.concat("%".concat(e.search.toLowerCase(),"%")):n.ingredients=["%".concat(e.search.toLowerCase(),"%")]}})),e.prev=2,e.next=5,ie.getVideos(n);case 5:r=e.sent,t(J(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(e.t0.response.data,!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"center-text search-page-grid form-background",children:[Object(r.jsxs)("div",{className:"search-module-grid",children:[Object(r.jsx)("p",{className:"top-margin",children:"Search:"}),Object(r.jsxs)("div",{className:"search-bar-grid",children:[Object(r.jsx)("div",{className:"darker open-button start-m start-f vertical",children:Object(r.jsxs)("select",{className:"side-margin transparent",onChange:function(e){var t=e.target;return i(t.value)},children:[Object(r.jsx)("option",{value:"User",children:"By adding user"}),Object(r.jsx)("option",{value:"Video",children:"By video"}),Object(r.jsx)("option",{value:"Clicks (min)",children:"By clicks (min)"}),Object(r.jsx)("option",{value:"Clicks (max)",children:"By clicks (max)"}),Object(r.jsx)("option",{value:"Favourites (min)",children:"By favourites (min)"}),Object(r.jsx)("option",{value:"Favourites (max)",children:"By favourites (max)"}),Object(r.jsx)("option",{value:"Ingredient",children:"By ingredient"})]})}),Object(r.jsx)("div",{className:"darker",children:Object(r.jsx)("input",{className:"text-input white-text",placeholder:"Search...",id:"search-input",onChange:function(e){var t=e.target;return g(t.value)}})}),Object(r.jsx)("button",{className:"darker end-f end-m open-button vertical",onClick:function(){return function(){if(x){var e={id:Math.random(),field:s,search:x};"User"===s||"Video"===s||"Ingredient"===s||Number.isInteger(Number(x))?(h(p.concat(e)),document.getElementById("search-input").value="",g("")):N("Must be integer",!0)}else N("Search can't be empty",!0)}()},children:"Add"})]})]}),Object(r.jsxs)("div",{className:"inside-background",children:[Object(r.jsx)("p",{className:"bottom-margin",children:"Current search: "}),p.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[e.field," = ",e.search," "]}),Object(r.jsx)("button",{className:"remove-button",onClick:function(){return h(p.filter((function(t){return t.id!==e.id})))}})]},e.id)}))]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"button",className:"add-button",onClick:function(){return k()},children:"Search"})})]})}),Object(r.jsx)(_,{videos:Object.values(e)})]})},oe=function(){var e=Z(),t=Object(u.h)().videoid,n=Object(b.c)((function(e){return e.videos.videos[Number(t)]})),a=Object(b.c)((function(e){var t;return null===(t=e.login.user)||void 0===t?void 0:t.id})),s=Object(b.c)((function(e){return e.users.users[a||-1]})),i=(null===s||void 0===s?void 0:s.favouriteVideos.filter((function(e){return e.id===Number(t)})).length)>0,o=function(t,n){e(O({message:t,error:n})),setTimeout((function(){return e(f())}),2e3)};Object(c.useEffect)((function(){var n={ids:[Number(t)]},r=function(){var t=Object(l.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.getVideos(n);case 2:r=t.sent,e(J(r));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,F.getUser(a);case 3:n=t.sent,e(k(n));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{r(),a&&c()}catch(s){e(O({message:s.response.data,error:!0})),setTimeout((function(){return e(f())}),2e3)}}),[e,t,a]),Object(c.useEffect)((function(){try{ie.addClick(Number(t))}catch(e){return}}),[t]);var j=function(){var r=Object(l.a)(d.a.mark((function r(){var c,a,i;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!s||!n){r.next=21;break}return c={ids:[Number(t)]},r.prev=2,r.next=5,F.addFavourite(s.id,n.id);case 5:return r.next=7,F.getUser(s.id);case 7:return a=r.sent,e(k(a)),r.next=11,ie.getVideos(c);case 11:return i=r.sent,e(J(i)),r.next=15,ie.addFavourite(n.id);case 15:o("Video added to favourites!",!1),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(2),o(r.t0.response.data,!0);case 21:case"end":return r.stop()}}),r,null,[[2,18]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=Object(l.a)(d.a.mark((function r(){var c,a,i;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!s||!n){r.next=21;break}return c={ids:[Number(t)]},r.prev=2,r.next=5,F.removeFavourite(s.id,n.id);case 5:return r.next=7,F.getUser(s.id);case 7:return a=r.sent,e(k(a)),r.next=11,ie.getVideos(c);case 11:return i=r.sent,e(J(i)),r.next=15,ie.removeFavourite(n.id);case 15:o("Video removed from favourites",!1),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(2),o(r.t0.response.data,!0);case 21:case"end":return r.stop()}}),r,null,[[2,18]])})));return function(){return r.apply(this,arguments)}}();return n?Object(r.jsx)("div",{children:Object(r.jsxs)("section",{className:"form-background center-text top-padding bottom-padding",children:[Object(r.jsx)("div",{className:"inside-background",children:Object(r.jsxs)("div",{className:"side-margin",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:n.videoName}),Object(r.jsxs)("p",{children:["By: ",n.channelName]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:n.videoUrl,children:n.videoUrl})})]})}),Object(r.jsx)("div",{className:"inside-background top-margin",children:Object(r.jsxs)("div",{className:"side-margin",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Ingredients"}),Object(r.jsx)("div",{className:"top-margin",children:n.ingredients.map((function(e){return Object(r.jsxs)("p",{children:[e.quantity,"g of ",e.produce.produceName]},e.id)}))})]}),Object(r.jsx)("div",{className:"top-margin",children:Object(r.jsxs)("p",{children:["Cooking time: ",n.timeInMinutes]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Calories: ",n.ingredients.reduce((function(e,t){return e+t.produce.caloriesPerGram*t.quantity}),0)/100,"\u20ac"]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Price: ",n.ingredients.reduce((function(e,t){return e+t.produce.pricePerGram*t.quantity}),0)/100,"\u20ac"]})}),Object(r.jsx)("div",{className:"top-margin",children:Object(r.jsxs)("p",{children:["Recipe is vegetarian: ",n.vegetarian?"YES":"NO"]})})]})}),Object(r.jsx)("div",{className:"top-margin",children:s&&s.id&&Object(r.jsxs)("div",{children:[!i&&Object(r.jsx)("button",{className:"add-button",onClick:function(){return j()},children:"Add to favourites!"}),i&&Object(r.jsx)("button",{className:"add-button",onClick:function(){return p()},children:"Remove from favourites!"})]})})]})}):Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"No video found!"})})},de=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],h=Object(b.c)((function(e){return e.login.user})),m=Z(),v=Object(u.g)(),x=function(e,t){m(O({message:e,error:t})),setTimeout((function(){return m(f())}),2e3)},g=function(){var e=Object(l.a)(d.a.mark((function e(t,n){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,document.getElementById("login-username-input").value="",document.getElementById("login-password-input").value="",e.next=5,L.login(t,n);case 5:r=e.sent,a(""),p(""),(c=m(G(r))).payload&&I(c.payload),x("Welcome, ".concat(c.payload.username),!1),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),x(e.t0.response.data,!0),a(""),p("");case 19:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g(n,o);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"login-form",children:[!h&&Object(r.jsxs)("form",{onSubmit:N,className:"grid-logged-out",children:[Object(r.jsx)("button",{className:"bar start-m start-f bar-button",type:"button",onClick:function(){return v.push("/search")},children:"Search videos"}),Object(r.jsx)("div",{className:"bar",children:Object(r.jsxs)("div",{className:"login-form",children:[Object(r.jsx)("p",{children:"You are not logged in "}),Object(r.jsx)("input",{id:"login-username-input",className:"text-input",placeholder:"Username",value:n,onChange:function(e){var t=e.target;return a(t.value)}}),Object(r.jsx)("input",{id:"login-password-input",className:"text-input",placeholder:"Password",type:"password",value:o,onChange:function(e){var t=e.target;return p(t.value)}}),Object(r.jsx)("button",{className:"add-button",type:"submit",children:"Log in"})]})}),Object(r.jsx)("button",{className:"bar end-m end-f bar-button",type:"button",onClick:function(){return v.push("/register")},children:"Register"})]}),h&&Object(r.jsxs)("div",{className:"grid-logged-in",children:[Object(r.jsxs)("p",{className:"bar start-f full-screen-only",children:["You are logged in as ",h.username,"!"]}),Object(r.jsx)("button",{className:"bar start start-m bar-button",onClick:function(){return v.push("/search")},children:"Search videos"}),Object(r.jsx)("button",{className:"bar bar-button",onClick:function(){return v.push("/addVideo")},children:"Add a video"}),Object(r.jsx)("button",{className:"bar bar-button",onClick:function(){return v.push("/user/".concat(h.id))},children:"Own page"}),Object(r.jsx)("button",{className:"bar end-m end-f bar-button",type:"button",onClick:function(){A(),m(M()),x("Logged out!",!1)},children:"Log out"})]})]})},le="/api/produce",je={addProduce:function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(le,t,{headers:{Authorization:P().headers.Authorization}});case 2:return n=e.sent,e.abrupt("return",[n.data]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getProduce:function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(le,"/"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},be=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],o=i[1],b=Object(c.useState)(""),p=Object(j.a)(b,2),h=p[0],m=p[1],v=Z(),x=function(e,t){v(O({message:e,error:t})),setTimeout((function(){return v(f())}),2e3)},g=Boolean(n&&u.length>0&&Number.isFinite(Number(u))&&Number(u)>-1&&Number(u)<10&&h.length>0&&Number.isFinite(Number(h))&&Number(h)>-1&&Number(h)<1e3),N=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=20;break}return e.prev=1,e.next=4,je.addProduce({produceName:n,caloriesPerGram:Number(u),pricePerGram:Number(h)});case 4:t=e.sent,v(H(t)),a(""),o(""),m(""),document.getElementById("produce-name-input").value="",document.getElementById("produce-calories-input").value="",document.getElementById("produce-price-input").value="",x("".concat(n," added!"),!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),x(e.t0.response.data,!0);case 18:e.next=21;break;case 20:throw new Error("Name can't be left empty. Price has to be float. Calories has to be integer.");case 21:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"add-produce-grid top-padding",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Produce name:"}),Object(r.jsx)("input",{className:"text-input half",id:"produce-name-input",onChange:function(e){var t=e.target;return a(t.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Calories (kcal/1g) :"}),Object(r.jsx)("input",{className:"text-input half",id:"produce-calories-input",type:"number",min:"0",max:"9",onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Price (cent/1g):"}),Object(r.jsx)("input",{className:"text-input half",id:"produce-price-input",type:"number",min:"0",max:"100000",onChange:function(e){var t=e.target;return m(t.value)}})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"add-button",type:"button",disabled:!g,onClick:function(){return N()},children:"Add!"})}),Object(r.jsx)("div",{children:!g&&Object(r.jsx)("p",{style:{color:"red"},children:"Check that every input is filled with suitable values!"})})]})},pe=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],h=Object(c.useState)(!1),m=Object(j.a)(h,2),v=m[0],x=m[1],g=Object(c.useState)(""),N=Object(j.a)(g,2),k=N[0],y=N[1],w=Object(c.useState)(""),C=Object(j.a)(w,2),S=C[0],I=C[1],E=Object(c.useState)(""),A=Object(j.a)(E,2),P=A[0],B=A[1],F=Object(c.useState)([]),U=Object(j.a)(F,2),V=U[0],L=U[1],T=Object(c.useState)(!1),z=Object(j.a)(T,2),q=z[0],M=z[1],G=Object(c.useState)(!1),D=Object(j.a)(G,2),Y=D[0],J=D[1],R=Object(c.useState)(!1),W=Object(j.a)(R,2),K=W[0],Q=W[1],X=Object(c.useState)(void 0),$=Object(j.a)(X,2),_=$[0],ee=$[1],te=Object(b.c)((function(e){return e.produce.produce})),ne=Object(b.c)((function(e){return e.login.user})),re=Object(u.g)(),ce=Z(),ae=function(e,t){ce(O({message:e,error:t})),setTimeout((function(){return ce(f())}),2e3)};Object(c.useEffect)((function(){(function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.getProduce();case 3:t=e.sent,ce(H(t)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),ce(O({message:(null===(n=e.t0.response)||void 0===n?void 0:n.data)||e.t0.message,error:!0})),setTimeout((function(){return ce(f())}),2e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[ce]),Object(c.useEffect)((function(){Number.isInteger(Number(P))?J(!1):J(!0)}),[P]),Object(c.useEffect)((function(){Number.isInteger(Number(k))?M(!1):M(!0)}),[k]),Object(c.useEffect)((function(){o.startsWith("https://www.youtube.com/watch?v=")?x(!1):x(!0)}),[o]);var se=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!ne){e.next=24;break}return e.prev=2,n={userId:ne.id,username:ne.username,videoUrl:o,timeInMinutes:Number(k),vegetarian:K,added:Date.now()},e.next=6,ie.addVideo(n);case 6:return r=e.sent,c=V.map((function(e){return{produceId:e.produceId,quantity:e.quantity,videoId:r.id}})),e.next=10,ie.addIngredient(c);case 10:ae("".concat(o," added!"),!1),Q(!1),p(""),y(""),L([]),document.getElementById("time-input").value="",document.getElementById("link-input").value="",document.getElementById("veg-input").checked=!1,re.push("/search"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),ae(e.t0.response.data,!0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(t){return e.apply(this,arguments)}}();return ne&&ne.id?Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:se,className:"grid-add-video form-background",children:[Object(r.jsxs)("div",{className:"top-padding half",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Link to video "}),Object(r.jsx)("span",{children:"(must start with "}),Object(r.jsx)("span",{style:{color:"red"},children:"https://www.youtube.com/watch?v="}),Object(r.jsx)("span",{children:" ): "})]}),Object(r.jsx)("input",{className:"text-input",id:"link-input",onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Cooking time (in minutes): "}),Object(r.jsx)("input",{className:"text-input",id:"time-input",type:"number",min:"1",max:"100000",step:"1",onChange:function(e){var t=e.target;return y(t.value)}}),q&&Object(r.jsx)("span",{style:{color:"red"},children:"Must be a integer!"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Recipe is suitable for vegetarians? "}),Object(r.jsx)("input",{id:"veg-input",className:"checkbox",type:"checkbox",onChange:function(e){var t=e.target;return Q(t.checked)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Ingredients:"}),V.map((function(e){return Object(r.jsxs)("div",{className:"top-padding",children:[Object(r.jsxs)("span",{children:[e.quantity,"g of ",e.produceName]}),Object(r.jsx)("button",{className:"remove-button",onClick:function(){return L(V.filter((function(t){return t.id!==e.id})))}})]},e.id)}))]}),Object(r.jsx)("div",{children:Object(r.jsxs)("section",{className:"ingredient-grid",children:[Object(r.jsx)("h1",{children:"Add ingredient"}),Object(r.jsxs)("div",{className:"top-margin",children:[Object(r.jsx)("input",{className:"text-input round-top set-width as-ablock",onChange:function(e){var t=e.target;return I(t.value)},placeholder:"Search for produce..."}),Object(r.jsxs)("select",{className:"text-input round-bottom set-width as-abloc",defaultValue:void 0,onChange:function(e){var t=e.target;return ee(Number(t.value))},children:[Object(r.jsx)("option",{value:void 0,children:"Choose produce..."}),Object.values(te).filter((function(e){return e.produceName.toLowerCase().includes(S.toLowerCase())||!S})).sort((function(e,t){return e.produceName.toLowerCase()<=t.produceName.toLowerCase()?-1:1})).map((function(e){return Object(r.jsx)("option",{value:e.id,children:e.produceName},e.id)}))]})]}),Object(r.jsxs)("div",{className:"top-margin",children:[Object(r.jsx)("p",{children:"How many grams?"}),Object(r.jsx)("input",{className:"text-input",id:"grams-input",type:"number",min:"1",max:"100000",step:"1",onChange:function(e){var t=e.target;return B(t.value)}}),Y&&Object(r.jsx)("p",{style:{color:"red"},children:"Must be a integer!"})]}),Object(r.jsx)("button",{className:"add-button top-margin",type:"button",disabled:Y||!P||!_,onClick:function(){return function(){var e;if(!Y&&P&&_){var t={produceId:_,produceName:(null===(e=te[_])||void 0===e?void 0:e.produceName)||"",quantity:Number(P),id:Math.random()};L(V.concat(t)),B(""),document.getElementById("grams-input").value=""}}()},children:" Add ingredient"})]})}),Object(r.jsxs)("div",{className:"wider",children:[Object(r.jsxs)("div",{className:"button-group",children:[Object(r.jsx)("div",{}),Object(r.jsx)("span",{className:"darker start-m start-f",children:"Add produce"}),Object(r.jsx)("button",{className:"open-button darker end-m end-f",type:"button",onClick:function(){return a(!n)},children:n?"-":"+"})]}),n&&Object(r.jsx)(be,{})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"add-button",disabled:!k||!o||v||q,type:"submit",children:"Add video!"})})]})}):Object(r.jsx)("div",{className:"center-text form-background",children:Object(r.jsx)("h1",{children:" Only registered users may add videos. Please login!"})})},he=function(){var e=Object(b.c)((function(e){return e.notifications.notifications}));return Object(r.jsx)("div",{children:e.map((function(e,t){return Object(r.jsx)("div",{className:e.error?"inside-background error":"inside-background success",children:Object(r.jsx)("p",{children:e.message})},t)}))})};var me=function(){var e=Z();return Object(c.useEffect)((function(){var t=E();t&&e(G(t))})),Object(r.jsx)("div",{className:"restrict-width",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(he,{}),Object(r.jsx)(de,{}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/register",render:function(){return Object(r.jsx)(U,{})}}),Object(r.jsx)(u.b,{path:"/user/:userid",render:function(){return Object(r.jsx)(ee,{})}}),Object(r.jsx)(u.b,{path:"/search",render:function(){return Object(r.jsx)(ue,{})}}),Object(r.jsx)(u.b,{path:"/video/:videoid",render:function(){return Object(r.jsx)(oe,{})}}),Object(r.jsx)(u.b,{path:"/addVideo",render:function(){return Object(r.jsx)(pe,{})}}),Object(r.jsx)(u.a,{exact:!0,from:"/",to:"/search"})]})]})})};n(67);s.a.render(Object(r.jsx)(b.a,{store:X,children:Object(r.jsx)(me,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.dbda9f34.chunk.js.map