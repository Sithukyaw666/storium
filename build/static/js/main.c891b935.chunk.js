(this["webpackJsonpstorium-pwa"]=this["webpackJsonpstorium-pwa"]||[]).push([[0],{236:function(e,t,n){},684:function(e,t,n){"use strict";n.r(t);var r,s,a,c,o,l,i,d,b,u,j=n(0),m=n(89),x=n.n(m),h=(n(236),n(16)),f=n(13),O=n(691),g=n(692),p=n(690),w=n(694),v=n(21),y=n(32),N=n(693),k=Object(N.a)(r||(r=Object(y.a)(["\n  query {\n    getAllStory {\n      id\n      content\n      title\n      authorID\n      createdAt\n      author {\n        username\n      }\n    }\n  }\n"]))),S=Object(N.a)(s||(s=Object(y.a)(["\n  query getStoryById($id: ID!) {\n    getStoryById(id: $id) {\n      title\n      content\n      authorID\n      createdAt\n      author {\n        username\n      }\n    }\n  }\n"]))),C=Object(N.a)(a||(a=Object(y.a)(["\n  query {\n    me {\n      user\n    }\n  }\n"]))),I=Object(N.a)(c||(c=Object(y.a)(["\n  query getUserById($id: ID!) {\n    getUserById(id: $id) {\n      username\n      email\n      followers\n      followings\n      stories {\n        id\n        title\n        content\n        createdAt\n      }\n    }\n  }\n"]))),B=Object(v.b)({key:"isLogin",default:!1}),$=Object(v.b)({key:"isFollow",default:!1}),U=function(){var e,t=Object(v.d)(B),n=Object(w.a)(C),r=n.data,s=n.refetch;return Object(j.useEffect)((function(){s()}),[t]),null===r||void 0===r||null===(e=r.me)||void 0===e?void 0:e.user},z=n.p+"static/media/logo.b74770b2.svg",D=n(2),L=function(){var e=U();return Object(D.jsxs)("nav",{className:"sticky top-0 w-full h-16 bg-white flex justify-around items-center   px-4 z-10",children:[Object(D.jsx)("img",{className:"w-20 ",src:z,alt:"Storium"}),e?Object(D.jsx)(h.b,{to:"/profile/".concat(e),className:"hidden md:flex items-center justify-center cursor-pointer outline-none sticky right-0 top-2 w-8 h-8 rounded-full border-2 border-blue-500",children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}):Object(D.jsx)(h.b,{to:"/login",className:"hidden md:block",children:Object(D.jsx)("button",{className:" flex items-center justify-center w-28 h-9 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-700 cursor-pointer outline-none shadow-md ",children:"login"})}),Object(D.jsxs)("ul",{className:"flex justify-between items-center w-1/2 md:-translate-x-full md:hidden ",children:[Object(D.jsx)("li",{children:Object(D.jsxs)(h.b,{to:"/",className:"font-medium w-20 flex items-center justify-center text-gray-800 cursor-pointer hover:text-blue-500",children:[Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})," ","Stories"]})}),e&&Object(D.jsx)("li",{children:Object(D.jsxs)(h.b,{to:"/editor",className:"font-medium flex w-32 justify-center items-center text-gray-800 cursor-pointer hover:text-blue-500",children:[Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})," ","Create Story"]})}),e?Object(D.jsx)("li",{children:Object(D.jsx)(h.b,{to:"/profile/".concat(e),children:Object(D.jsxs)("button",{className:" w-32 h-9 flex items-center justify-center bg-blue-500 font-medium text-white rounded-md hover:bg-blue-700 cursor-pointer outline-none shadow-md",children:[Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"Profile"]})})}):Object(D.jsx)("li",{children:Object(D.jsx)(h.b,{to:"/login",children:Object(D.jsxs)("button",{className:" flex items-center justify-center w-32 h-9 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-700 cursor-pointer outline-none shadow-md ",children:["Get Started",Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})})]})]})},q=function(){var e=Object(w.a)(k),t=e.data,n=e.refetch;return Object(j.useEffect)((function(){n()}),[]),Object(D.jsx)("div",{className:"w-1/2 m-auto  px-8 py-4 md:w-full md:px-4 ",children:t?t.getAllStory.map((function(e){return Object(D.jsx)(h.b,{to:"/story/".concat(e.id),children:Object(D.jsxs)("div",{className:"w-full bg-blue-100  mr-auto ml-auto mb-4 px-4 py-2 flex justify-between flex-col border-2 rounded-md",children:[Object(D.jsx)("p",{className:"text-3xl font-extrabold font-sans mb-8 text-gray-800 cursor-pointer capitalize hover:text-blue-500 md:text-2xl",children:e.title}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("p",{className:"text-gray-600 text-sm font-semibold",children:["Published on : ",new Date(Number(e.createdAt)).toDateString()]}),Object(D.jsx)(h.b,{to:"/profile/".concat(e.authorID),children:Object(D.jsx)("p",{className:"font-semibold capitalize text-md text-gray-800 hover:text-blue-500",children:e.author.username})})]})]})},e.id)})):Object(D.jsx)(D.Fragment,{children:[0,0,0,0].map((function(e){return Object(D.jsxs)("div",{className:"w-full bg-blue-100  mr-auto ml-auto mb-4 animate-pulse px-4 py-2 flex justify-between flex-col border-2 rounded-md",children:[Object(D.jsx)("div",{className:"container h-8 bg-blue-200 rounded-lg  mb-8"}),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"w-40 h-4 bg-blue-200 mb-2 rounded-sm"}),Object(D.jsx)("div",{className:"w-36 h-6 bg-blue-200 rounded"})]})]})}))})})},A=n(14),F=n.n(A),E=n(38),M=n(5),P=n(74),W=n(695),H=Object(N.a)(o||(o=Object(y.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      user\n      error\n    }\n  }\n"]))),T=Object(N.a)(l||(l=Object(y.a)(["\n  mutation registerUser(\n    $username: String!\n    $email: String!\n    $password: String!\n  ) {\n    createUser(username: $username, email: $email, password: $password) {\n      user\n      error\n    }\n  }\n"]))),J=Object(N.a)(i||(i=Object(y.a)(["\n  mutation CreateStory($title: String!, $content: String!) {\n    createStory(title: $title, content: $content) {\n      id\n    }\n  }\n"]))),G=Object(N.a)(d||(d=Object(y.a)(["\n  mutation {\n    logout {\n      user\n    }\n  }\n"]))),R=(Object(N.a)(b||(b=Object(y.a)(["\n  mutation clap($id: ID!) {\n    clap(id: $id) {\n      id\n    }\n  }\n"]))),Object(N.a)(u||(u=Object(y.a)(["\n  mutation followUser($id: ID!) {\n    followUser(id: $id) {\n      id\n    }\n  }\n"])))),K=function(){var e=Object(W.a)(J),t=Object(M.a)(e,1)[0],n=Object(f.f)(),r=Object(j.useState)(""),s=Object(M.a)(r,2),a=s[0],c=s[1],o=Object(j.useState)(""),l=Object(M.a)(o,2),i=l[0],d=l[1],b=Object(j.useState)(!1),u=Object(M.a)(b,2),m=u[0],x=u[1],h=function(){var e=Object(E.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:{title:i,content:a}});case 2:try{n.push("/")}catch(r){}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)("div",{className:"w-full  px-40 md:p-2",children:[Object(D.jsxs)("div",{className:"w-full ml-auto sticky top-14 h-14 flex md:flex-col md:h-auto  md:mb-4 items-center justify-between",children:[Object(D.jsx)("input",{className:"w-4/6 md:w-full h-12 border-2 px-4 text-xl font-bold outline-none md:mb-2 rounded-md",placeholder:"Title of the story",onChange:function(e){return d(e.target.value)}}),Object(D.jsxs)("div",{className:"md:container md:flex md:justify-evenly md:items-center",children:[Object(D.jsx)("button",{onClick:function(){return x(!m)},className:" hidden w-28 h-8 bg-green-100 rounded-md hover:bg-green-300 text-green-800 text-md font-medium shadow-sm md:block",children:m?"Edit":"Preview"}),Object(D.jsx)("button",{onClick:function(){return n.push("/")},className:"w-28 h-8 bg-yellow-100 rounded-md hover:bg-yellow-300 text-yellow-800 text-md font-medium shadow-sm mx-2 md:mx-0",children:"Cancel"}),Object(D.jsx)("button",{disabled:!i&&!a,onClick:h,className:"w-28 h-8 bg-blue-200 rounded-md hover:bg-blue-300  text-blue-800 text-md capitalize font-medium shadow-sm",children:"publish"})]})]}),Object(D.jsx)("div",{className:"md:block hidden",children:Object(D.jsx)(P.a,{preview:m?"preview":"edit",hideToolbar:"true",height:650,value:a,onChange:c})}),Object(D.jsx)("div",{className:"md:hidden block",children:Object(D.jsx)(P.a,{height:500,value:a,onChange:c})})]})},Q=function(){var e,t,n=Object(f.f)(),r=Object(j.useState)(""),s=Object(M.a)(r,2),a=s[0],c=s[1],o=Object(j.useState)(""),l=Object(M.a)(o,2),i=l[0],d=l[1],b=Object(W.a)(H),u=Object(M.a)(b,2),m=u[0],x=u[1].data,O=Object(v.c)(B),g=Object(M.a)(O,2),p=g[0],w=g[1],y=function(){var e=Object(E.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,m({variables:{email:a,password:i}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===x||void 0===x||null===(e=x.loginUser)||void 0===e?void 0:e.user)&&(w(!p),n.push("/")),Object(D.jsxs)("div",{className:"md:w-full p-8 w-4/12 shadow-lg rounded-lg h-96 ml-auto mr-auto mt-32 flex flex-col justify-center items-center bg-gray-100",children:[Object(D.jsx)("p",{className:"text-blue-500 font-bold text-3xl mb-4",children:"Login"}),Object(D.jsxs)("form",{className:"container h-60 flex justify-around items-center flex-col relative",onSubmit:y,children:[Object(D.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"email",placeholder:"email",onChange:function(e){return c(e.target.value)},required:!0}),Object(D.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"password",placeholder:"password",onChange:function(e){return d(e.target.value)},required:!0}),(null===x||void 0===x||null===(t=x.loginUser)||void 0===t?void 0:t.error)&&Object(D.jsx)("p",{className:"text-red-500 font-medium ",children:x.loginUser.error}),Object(D.jsx)("button",{disabled:!a&&!i,type:"submit",className:"w-40 h-9 bg-blue-500 rounded-lg text-white font-semibold uppercase hover:bg-blue-600 ",children:"submit"}),Object(D.jsx)(h.b,{to:"/register",children:Object(D.jsx)("p",{className:"font-medium text-base hover:text-blue-400 cursor-pointer ",children:"new user"})})]})]})},V=function(){var e=Object(f.g)().id,t=Object(w.a)(S,{variables:{id:e}}).data;return Object(D.jsx)("div",{className:"w-1/2 ml-auto mr-auto p-8 bg-white md:w-full md:p-4",children:t?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"mb-8",children:[Object(D.jsx)("p",{className:"text-4xl font-extrabold mb-8 capitalize md:text-3xl",children:t.getStoryById.title}),Object(D.jsxs)("div",{className:"flex items-center justify-between md:flex-col md:items-start",children:[Object(D.jsxs)("p",{className:" font-bold text-base text-gray-600",children:["Author :"," ",Object(D.jsx)(h.b,{to:"/profile/".concat(t.getStoryById.authorID),children:Object(D.jsx)("span",{className:"hover:text-blue-500 capitalize",children:t.getStoryById.author.username})})]}),Object(D.jsxs)("p",{className:"text-gray-600 text-sm font-semibold",children:["Published on :"," ",Object(D.jsx)("span",{className:"text-blue-500",children:new Date(Number(t.getStoryById.createdAt)).toDateString()})]})]})]}),Object(D.jsx)("hr",{}),Object(D.jsx)(P.a.Markdown,{className:"font-normal text-md text-gray-800",source:t.getStoryById.content})]}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"mb-8 animate-pulse",children:[Object(D.jsx)("div",{className:"container h-12 rounded-lg bg-gray-200 mb-8"}),Object(D.jsxs)("div",{className:"flex items-center justify-between md:flex-col md:items-start",children:[Object(D.jsx)("div",{className:"bg-gray-200 w-32 h-4 rounded mb-2"}),Object(D.jsx)("div",{className:"bg-gray-200 w-36 h-4 rounded"})]})]}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"container animate-pulse ",children:[Object(D.jsx)("div",{className:"container h-4 mb-2 bg-gray-200"}),Object(D.jsx)("div",{className:"container h-4  mb-2 bg-gray-200"}),Object(D.jsx)("div",{className:"container h-4  mb-2 bg-gray-200"}),Object(D.jsx)("div",{className:"container h-4  mb-2 bg-gray-200"}),Object(D.jsx)("div",{className:"container h-4 bg-gray-200"})]})]})})},X=function(){var e,t,n=Object(f.f)(),r=Object(j.useState)(""),s=Object(M.a)(r,2),a=s[0],c=s[1],o=Object(j.useState)(""),l=Object(M.a)(o,2),i=l[0],d=l[1],b=Object(j.useState)(""),u=Object(M.a)(b,2),m=u[0],x=u[1],h=Object(W.a)(T),O=Object(M.a)(h,2),g=O[0],p=O[1].data;return(null===p||void 0===p||null===(e=p.createUser)||void 0===e?void 0:e.user)&&n.push("/login"),Object(D.jsxs)("div",{className:"md:w-full p-8 w-4/12 shadow-lg rounded-lg h-96 ml-auto mr-auto mt-32 flex flex-col justify-center items-center bg-gray-100",children:[Object(D.jsx)("p",{className:"text-blue-500 font-bold text-3xl mb-4",children:"Register"}),Object(D.jsxs)("form",{className:"container h-60 flex justify-around items-center flex-col ",onSubmit:function(e){e.preventDefault(),g({variables:{username:a,email:i,password:m}})},children:[Object(D.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"text",placeholder:"username",required:!0,onChange:function(e){return c(e.target.value)}}),Object(D.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"email",placeholder:"email",required:!0,onChange:function(e){return d(e.target.value)}}),Object(D.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"password",placeholder:"password",required:!0,onChange:function(e){return x(e.target.value)}}),(null===p||void 0===p||null===(t=p.createUser)||void 0===t?void 0:t.error)&&Object(D.jsx)("p",{className:"text-red-500 font-medium ",children:p.createUser.error}),Object(D.jsx)("button",{type:"submit",className:"w-40 h-9 bg-blue-500 rounded-lg text-white font-semibold uppercase hover:bg-blue-600",children:"submit"})]})]})},Y=function(e){var t=e.id,n=Object(W.a)(R),r=Object(M.a)(n,1)[0],s=Object(v.c)($),a=Object(M.a)(s,2),c=a[0],o=a[1],l=U(),i=function(e){var t=Object(v.d)($),n=Object(w.a)(I,{variables:{id:e}}),r=n.data,s=n.refetch;return Object(j.useEffect)((function(){s()}),[t]),null===r||void 0===r?void 0:r.getUserById}(t),d=function(){var e=Object(E.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({variables:{id:t}});case 2:try{o(!c)}catch(n){}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsx)("button",{onClick:d,className:"w-36 md:32 md:h-8 h-9 bg-blue-500 rounded-md font-semibold capitalize text-base hover:bg-blue-600 text-white",children:i.followers.indexOf(l)>=0?"unfollow":"follow"})},Z=function(){var e=Object(v.c)(B),t=Object(M.a)(e,2),n=t[0],r=t[1],s=Object(f.f)(),a=Object(W.a)(G),c=Object(M.a)(a,2),o=c[0],l=c[1].data,i=function(){var e=Object(E.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(null===l||void 0===l?void 0:l.logout)&&(!l.logout.user&&r(!n),!l.logout.user&&s.push("/")),Object(D.jsx)("button",{onClick:i,className:"w-36 md:32 md:h-8 h-9 bg-red-500 rounded-md font-semibold capitalize text-base hover:bg-red-600 text-white",children:"logout"})},_=function(){var e=Object(f.f)(),t=U(),n=Object(f.g)().id,r=Object(w.a)(I,{variables:{id:n}}),s=r.data,a=r.refetch;return Object(j.useEffect)((function(){a()}),[]),Object(D.jsx)(D.Fragment,{children:s&&Object(D.jsx)("div",{className:"container p-8 md:p-2 ",children:Object(D.jsxs)("div",{className:"flex justify-around items-start mt-4 md:flex-col",children:[Object(D.jsxs)("div",{className:"w-1/3  p-4 shadow-md rounded-lg bg-gray-100 md:container md:mb-8",children:[Object(D.jsxs)("p",{className:"text-5xl capitalize font-extrabold pb-8 md:text-3xl",children:[t===n&&"Hello"," ",s.getUserById.username]}),Object(D.jsx)("span",{className:"capitalize font-medium text-md text-gray-500 md:text-base ",children:"Have a nice Editing"}),Object(D.jsxs)("div",{className:"mt-4 mb-4 md:text-base",children:[Object(D.jsxs)("p",{className:"text-blue-500 font-bold",children:[Object(D.jsx)("span",{className:"text-gray-700",children:"Email"})," :"," ",s.getUserById.email]}),Object(D.jsxs)("p",{className:"font-semibold text-base",children:[Object(D.jsx)("span",{className:"text-blue-500 font-bold text-lg",children:s.getUserById.followers.length})," ","followers"]}),Object(D.jsxs)("p",{className:"font-semibold text-base",children:[Object(D.jsx)("span",{className:"text-blue-500 font-bold text-lg",children:s.getUserById.followings.length})," ","followings"]})]}),t?t===n?Object(D.jsxs)("div",{className:"flex container justify-around items-center",children:[Object(D.jsx)("button",{onClick:function(){return e.push("/editor")},className:" w-36 md:32 md:h-8 h-9 bg-green-500 rounded-md font-semibold capitalize text-base hover:bg-green-600  text-white",children:"Create Story"}),Object(D.jsx)(Z,{})]}):Object(D.jsx)(Y,{id:n}):""]}),Object(D.jsxs)("div",{className:"w-1/2 md:container",children:[Object(D.jsxs)("p",{className:"text-gray-800 font-bold text-2xl  capitalize mb-8 md:text-center",children:["stories by ",s.getUserById.username]}),s.getUserById.stories.map((function(e){return Object(D.jsx)(h.b,{to:"/story/".concat(e.id),children:Object(D.jsxs)("div",{className:"w-full  mr-auto ml-auto mb-4 px-4 py-2 flex justify-between rounded-md bg-yellow-50 flex-col border-2 ",children:[Object(D.jsx)("p",{className:"text-3xl font-extrabold font-sans mb-8 text-gray-800 cursor-pointer capitalize hover:text-yellow-800 md:text-xl",children:e.title}),Object(D.jsx)("div",{children:Object(D.jsxs)("p",{className:"text-gray-600 text-sm font-semibold",children:["Published on :"," ",new Date(Number(e.createdAt)).toDateString()]})})]})},e.id)}))]})]})})})};var ee=function(){var e=new O.a({uri:"/graphql",cache:new g.a});return Object(D.jsx)("div",{className:"App w-full h-full   ",children:Object(D.jsx)(p.a,{client:e,children:Object(D.jsxs)(h.a,{children:[Object(D.jsx)(L,{}),Object(D.jsxs)(f.c,{children:[Object(D.jsx)(f.a,{path:"/",exact:!0,component:q}),Object(D.jsx)(f.a,{path:"/editor",component:K}),Object(D.jsx)(f.a,{path:"/login",component:Q}),Object(D.jsx)(f.a,{path:"/story/:id",component:V}),Object(D.jsx)(f.a,{path:"/register",component:X}),Object(D.jsx)(f.a,{path:"/profile/:id",component:_})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,697)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};x.a.render(Object(D.jsx)(v.a,{children:Object(D.jsx)(ee,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),te()}},[[684,1,2]]]);
//# sourceMappingURL=main.c891b935.chunk.js.map