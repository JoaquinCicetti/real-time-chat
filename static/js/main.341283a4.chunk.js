(this["webpackJsonpreal-time-chat"]=this["webpackJsonpreal-time-chat"]||[]).push([[0],{27:function(e,t,a){},33:function(e,t,a){e.exports=a(55)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(15);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(8),i=a(12),m=a(17),u=a(19),h=a.n(u),f=(a(38),a(40),{apiKey:"AIzaSyDD9XbN82AKMIgGtklwA-i_uaxSm9Mbob0",authDomain:"portfolio-816a0.firebaseapp.com",databaseURL:"https://portfolio-816a0.firebaseio.com",projectId:"portfolio-816a0",storageBucket:"portfolio-816a0.appspot.com",messagingSenderId:"449065180107",appId:"1:449065180107:web:5abf3b9c43ba703cf9f44e",measurementId:"G-JSMMWV7Y7L"});function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d={name:"",status:"",messages:[],push:function(e){return console.warn("Firebase not initialized")}},b=r.a.createContext(d),g=a(29),v=a.n(g),E=(a(45),i.b.span({exit:{rotateX:"90deg",opacity:0},enter:{rotateX:"0deg",opacity:1}})),O=function(e){var t=e.messages,a=e.status,c=Object(n.useState)(),o=Object(s.a)(c,2),l=(o[0],o[1],Object(n.useContext)(b).name),m=Object(n.useRef)(null);return Object(n.useEffect)((function(){window&&m&&m.current&&window.scrollTo(0,m.current.offsetTop)}),[t]),r.a.createElement("div",{className:"animatedList"},r.a.createElement("div",{ref:m},r.a.createElement(i.a,null,t.map((function(e){return r.a.createElement(E,{className:"message ".concat(l===e.user?"own":""),key:"message".concat(e.id)},r.a.createElement("div",{className:"content "},r.a.createElement("p",{className:"header"},r.a.createElement("span",{className:"user"},e.user),r.a.createElement("span",{className:"date"},v()(e.date).format("HH:mm")," Hs.")),r.a.createElement("p",{className:"body"},e.message)))}))),"fetching"===a&&r.a.createElement("p",null,"fetching")))},j=a(13);var y,w;(w=y||(y={})).dark="dark",w.light="light";var k={theme:y.dark,setTheme:function(e){}},N=r.a.createContext(k);var S=function(){var e=Object(n.useContext)(N),t=e.theme,a=e.setTheme,r=Object(n.useCallback)((function(){var e=t===y.light?y.dark:y.light;a(e),localStorage&&localStorage.setItem("theme",e)}),[t,a]);return{theme:t,toggleTheme:r,Themes:y}},P=(a(46),a(47),function(){var e=Object(j.g)();return e&&e.pathname==="".concat("/real-time-chat","/info")?r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"about"},r.a.createElement("b",{className:"appName"},"About"),r.a.createElement("hr",null),r.a.createElement("p",{className:"version"},"React: 16.10.2"),r.a.createElement("p",{className:"version"},"Firebase: 7.2.1"),r.a.createElement("p",{className:"version"},"Node-sass: 4.12.0"),r.a.createElement("p",{className:"version"},"React-pose: 4.0.9"),r.a.createElement("p",{className:"version"},"Popmotion: 8.7.0"),r.a.createElement("p",{className:"version"},"React-router-dom: 5.1.2"),r.a.createElement("p",{className:"version"},"Typescript: 3.6.4"),r.a.createElement("hr",null),r.a.createElement("a",{className:"repo",href:"https://github.com/JoaquinCicetti/real-time-chat",target:"_blank",rel:"noopener noreferrer"},"Repository"))):r.a.createElement(j.a,{to:{pathname:"".concat("/real-time-chat","/chat"),state:{from:e}}})}),M=i.b.div({enter:{opacity:1},exit:{opacity:0}}),z=function(){var e=S(),t=e.theme,a=e.Themes,n=e.toggleTheme;Object(j.g)();return r.a.createElement("div",{className:t===a.dark?"theme-dark":"theme-light"},r.a.createElement(j.b,{render:function(e){var c=e.location;return r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"notch"}),r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",{className:"title"},"Real-time chat"),r.a.createElement("div",{className:"divider"},r.a.createElement("span",{className:"hr"}),r.a.createElement(l.b,{className:"link",to:"".concat("/chat"===c.pathname?"/info":"/chat")},r.a.createElement(V,{width:14,height:14,icon:"/chat"===c.pathname?"info":"chat"})))),r.a.createElement(i.a,null,r.a.createElement(M,{key:c.key,className:"routerContainer"},r.a.createElement(j.d,{location:c,key:"switch"},r.a.createElement(j.b,{path:"/chat",component:A,key:"chat"}),r.a.createElement(j.b,{path:"/info",component:P,key:"info"}),r.a.createElement(j.b,{component:A,key:"chat2"})))),r.a.createElement("div",{className:"footer"},r.a.createElement(B,{checked:t===a.light,toggle:n,checkedIcon:"sun",uncheckedIcon:"moon",big:!0})))}}))},I=a(6),C=a(32),H={arrow:"M28.244 42h12.755v6H18V25.001h6v12.758l19.757-19.757L48 22.244 28.244 42z",info:"M32 0a32 32 0 1 0 32 32A32.037 32.037 0 0 0 32 0zm-2.977 15.037a3.62 3.62 0 0 1 4.96 0 3.509 3.509 0 0 1 1.02 2.469 3.5 3.5 0 1 1-7 0 3.512 3.512 0 0 1 1.02-2.469zm6.98 34.97h-8v-4H30V28.024h-1.996v-4H34v21.985h2.004z",chat:"M4.7 59.4l19.1-7.6a37.1 37.1 0 0 0 8.2.9c16.6 0 30-10.7 30-24s-13.4-24-30-24S2 15.4 2 28.6c0 6.7 3.5 12.8 9.1 17.2z",send:"M33 21.996V10l28 20-28 20V38c-11.133.004-21.271.434-30 16 0-9.887 1.45-31.729 30-32.004z",sun:"M62 30H47.9a15.9 15.9 0 0 0-3.2-7.8l10-10a2 2 0 0 0-2.8-2.8l-10 10a15.9 15.9 0 0 0-7.9-3.3V2a2 2 0 0 0-4 0v14.2a15.9 15.9 0 0 0-7.8 3.2l-10-10a2 2 0 1 0-2.8 2.8l10 10a15.9 15.9 0 0 0-3.2 7.8H2a2 2 0 1 0 0 4h14.2a15.9 15.9 0 0 0 3.2 7.8l-10 10a2 2 0 1 0 2.8 2.8l10-10a15.9 15.9 0 0 0 7.8 3.3V62a2 2 0 0 0 4 0V47.9a15.9 15.9 0 0 0 7.8-3.2l10 10a2 2 0 1 0 2.8-2.8l-10-10a15.9 15.9 0 0 0 3.3-7.9H62a2 2 0 1 0 0-4z",moon:"M33.9 11.9A16.8 16.8 0 0 1 12 35a20.1 20.1 0 1 0 21.9-23.1z",drink:"M60.7 2.7A1 1 0 0 0 60 1H4a1 1 0 0 0-.7 1.7L30 30v29H18a2 2 0 0 0 0 4h28a2 2 0 0 0 0-4H34V30z",clear:"M53.122 48.88L36.243 32l16.878-16.878a3 3 0 0 0-4.242-4.242L32 27.758l-16.878-16.88a3 3 0 0 0-4.243 4.243l16.878 16.88-16.88 16.88a3 3 0 0 0 4.243 4.241L32 36.243l16.878 16.88a3 3 0 0 0 4.244-4.243z",searching:"M61.122 56.88L41.54 37.284l-.037.037a22.01 22.01 0 1 0-4.173 4.175l-.031.031L56.878 61.12a3 3 0 0 0 4.244-4.242zM24 40a16 16 0 1 1 16-16 16.002 16.002 0 0 1-16 16z",favorite:"M32.8 58.9C45.4 57 64 34.4 64 22.6 64 13.5 57.2 7 48 7c-7.8 0-14.2 5.9-16 10.5C30.2 12.9 23.8 7 16 7 6.8 7 0 13.5 0 22.6 0 34.4 18.6 57 31.2 58.9a5.384 5.384 0 0 0 .8.1 3.217 3.217 0 0 1 .8-.1z"};a(52);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=function(e){var t=e.from,a=e.to;return Object(I.l)({from:0,to:1,duration:250}).pipe(Object(C.interpolate)(t,a))},x=Object.entries(H).reduce((function(e,t){var a=Object(s.a)(t,2),n=a[0],r={d:a[1],transition:D};return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,Object(m.a)({},n,r))}),{}),L=i.b.path(x),V=function(e){var t=e.icon,a=e.height,n=e.width;return r.a.createElement("svg",{className:"morphingIcon",width:n,height:a,viewBox:"0 0 64 64"},r.a.createElement(L,{pose:t}))},A=(a(27),function(){var e=Object(n.useContext)(b),t=e.push,a=e.messages,c=e.status,o=e.name,l=Object(j.g)();return l&&"/chat"===l.pathname?r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"intro"},r.a.createElement("p",null,"Hi! From now your name is ",r.a.createElement("span",{className:"name"},o)," \ud83d\ude0a"),r.a.createElement("p",null,"(Open another window to see this real-time chat working)")),r.a.createElement(R,{push:t}),r.a.createElement(O,{messages:a,status:c})):r.a.createElement(j.a,{to:{pathname:"/info",state:{from:l}}})}),R=function(e){var t=e.push,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],i=Object(n.useRef)(null);return Object(n.useEffect)((function(){i&&null!==i.current&&i.current.focus()}),[]),r.a.createElement("div",{className:"chatInput"},r.a.createElement("input",{placeholder:"Type something",value:o,onChange:function(e){var t=e.target.value;l(t)},ref:i,onKeyPress:function(e){"Enter"===e.key&&o&&(t(o),l(""))}}),r.a.createElement("button",{title:"Send",className:"sendButton",onClick:function(e){o?(t(o),l("")):i&&null!==i.current&&i.current.focus()}},r.a.createElement(V,{icon:o?"send":"chat"})))},B=(a(53),function(e){var t=e.checked,a=e.toggle,n=e.checkedIcon,c=e.uncheckedIcon,o=e.big,l=o?32:18;return r.a.createElement("button",{onClick:function(e){a()},className:"toggleButton ".concat(o?"big":"")},r.a.createElement(V,{width:l,height:l,icon:t?n:c}))});a(54);o.a.render(r.a.createElement(l.a,null,r.a.createElement((function(e){var t=e.children,a=Object(n.useState)(y.dark),c=Object(s.a)(a,2),o=c[0],l=c[1],i={theme:o,setTheme:l};return Object(n.useEffect)((function(){if(localStorage){var e=localStorage.getItem("theme");e!==y.dark&&e!==y.light||l(e)}}),[]),r.a.createElement(N.Provider,{value:i},t)}),null,r.a.createElement((function(e){var t=e.children,a=Object(n.useState)("initalizing"),c=Object(s.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(function(){var e=["Chile","Ivito","Joaco","Mauri","Toti"];return e[Math.floor(Math.random()*e.length)]}()),u=Object(s.a)(i,1)[0],d=Object(n.useState)([]),g=Object(s.a)(d,2),v=g[0],E=g[1];Object(n.useEffect)((function(){console.log("as"),l("fetching");var e=function(){return console.warn("fake unsuscribe")};try{h.a.initializeApp(f),e=h.a.firestore().collection("real-time-chat").orderBy("date","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.data(),{id:e.id}))})),E(t),l("fetched")}),(function(e){l(e.message),console.error("Encountered error: ".concat(e))}))}catch(t){console.error(t)}return e}),[l,E]);var O={name:u,status:o,messages:v,push:function(e){var t={user:u,message:e,date:(new Date).getTime()};h.a.firestore().collection("real-time-chat").add(t).then((function(e){e.firestore}))}};return r.a.createElement(b.Provider,{value:O},t)}),null,r.a.createElement(z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.341283a4.chunk.js.map