(this["webpackJsonpchatapp-mern"]=this["webpackJsonpchatapp-mern"]||[]).push([[0],{100:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c(2),n=c.n(s),i=c(21),r=c.n(i),j=(c(69),c(58)),d=c(19),b=(c(70),c(40)),l=c.n(b),o=c(50),h=(c(72),c(122)),u=c(119),O=c(120),p=c(51),m=c.n(p).a.create({baseURL:"https://chatappinmern.herokuapp.com"}),x=Object(s.createContext)(),f=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(a.jsx)(x.Provider,{value:Object(s.useReducer)(t,c),children:n})},v=function(){return Object(s.useContext)(x)};var g=function(e){var t=e.messages,c=Object(s.useState)(""),n=Object(d.a)(c,2),i=n[0],r=n[1],j=v(),b=Object(d.a)(j,1)[0].user,p=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m.post("messages/new",{message:i,name:null===b||void 0===b?void 0:b.displayName,timestamp:"5:55",received:!1});case 3:r("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"chat",children:[Object(a.jsxs)("div",{className:"chat__header",children:[Object(a.jsx)(h.a,{}),Object(a.jsxs)("div",{className:"chat__headerInfo",children:[Object(a.jsx)("h3",{children:"Room name"}),Object(a.jsx)("p",{children:"Last Seen at..."})]}),Object(a.jsx)("div",{className:"chat__headerRight",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(O.a,{})})})]}),Object(a.jsx)("div",{className:"chat__body",children:t.map((function(e){return Object(a.jsxs)("p",{className:"chat__message ".concat(e.received&&"chat__reciever"),children:[Object(a.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(a.jsx)("span",{className:"chat__timestamp",children:e.timestamp})]})}))}),Object(a.jsx)("div",{className:"chat__footer",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{value:i,onChange:function(e){return r(e.target.value)},placeholder:"Type a Message",type:"text"}),Object(a.jsx)("button",{onClick:p,type:"submit",children:"Send"})]})})]})};c(94);var _=function(){return Object(a.jsxs)("div",{className:"sidebarchat",children:[Object(a.jsx)(h.a,{}),Object(a.jsxs)("div",{className:"sidebarchat__info",children:[Object(a.jsx)("h2",{children:"Room name"}),Object(a.jsx)("p",{children:"This is the last message"})]})]})},N=(c(95),c(56)),S=c.n(N);var y=function(){return Object(a.jsxs)("div",{className:"sidebar",children:[Object(a.jsxs)("div",{className:"sidebar__header",children:[Object(a.jsx)(h.a,{src:""}),Object(a.jsx)("div",{className:"sidebar__headerright",children:Object(a.jsx)(u.a,{children:Object(a.jsx)(S.a,{})})})]}),Object(a.jsx)("div",{className:"sidebar__search",children:Object(a.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(a.jsx)(O.a,{}),Object(a.jsx)("input",{placeholder:"search",type:"text"})]})}),Object(a.jsxs)("div",{className:"sidebar__chat",children:[Object(a.jsx)(_,{}),Object(a.jsx)(_,{}),Object(a.jsx)(_,{}),Object(a.jsx)(_,{}),Object(a.jsx)(_,{}),Object(a.jsx)(_,{}),Object(a.jsx)(_,{})]})]})},k=c(57),C=c.n(k),w=(c(100),c(121)),I=c(41),T="SET_USER",E=function(e,t){switch(console.log(t),t.type){case T:return Object(I.a)(Object(I.a)({},e),{},{user:t.user});default:return e}},G=c(35),P=(G.a.initializeApp({apiKey:"AIzaSyBeWeG1q3m4KkYShXdHgCiSgKTQxLEGuf4",authDomain:"chatapp-aaksingh.firebaseapp.com",projectId:"chatapp-aaksingh",storageBucket:"chatapp-aaksingh.appspot.com",messagingSenderId:"585405396806",appId:"1:585405396806:web:aa89d5756ec65733e19747",measurementId:"G-CMBPGTQY5Q"}),G.a.auth()),R=new G.a.auth.GoogleAuthProvider;var B=function(){var e=v(),t=Object(d.a)(e,2),c=(t[0],t[1]);return Object(a.jsx)("div",{className:"login",children:Object(a.jsx)("div",{className:"login__container",children:Object(a.jsx)(w.a,{onClick:function(){P.signInWithPopup(R).then((function(e){console.log(e),c({type:T,user:e.user})})).catch((function(e){alert(e.message)}))},children:"Sigin With Google"})})})};var F=function(){var e=v(),t=Object(d.a)(e,2),c=t[0].user,n=(t[1],Object(s.useState)([])),i=Object(d.a)(n,2),r=i[0],b=i[1];return Object(s.useEffect)((function(){m.get("/messages/sync").then((function(e){console.log("here"),b(e.data)}))}),[]),Object(s.useEffect)((function(){var e=new C.a("f4795fbbb47df9e292a1",{cluster:"ap2"}).subscribe("messages");return e.bind("inserted",(function(e){b([].concat(Object(j.a)(r),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[r]),console.log(c),Object(a.jsx)("div",{className:"app",children:c?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"app__body",children:[Object(a.jsx)(y,{}),Object(a.jsx)(g,{messages:r})]})}):Object(a.jsx)(B,{})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{initialState:{user:null},reducer:E,children:Object(a.jsx)(F,{})})}),document.getElementById("root")),L()},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.36589bcb.chunk.js.map