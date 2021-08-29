(this["webpackJsonpstorium-pwa"]=this["webpackJsonpstorium-pwa"]||[]).push([[0],{238:function(e,t,n){},686:function(e,t,n){"use strict";n.r(t);var r,s,a,c,o,l,i,d,b,u,m=n(0),j=n(89),x=n.n(j),h=(n(238),n(16)),f=n(13),g=n(693),O=n(694),p=n(692),w=n(696),v=n(21),y=n(32),N=n(695),k=Object(N.a)(r||(r=Object(y.a)(["\n  query {\n    getAllStory {\n      id\n      content\n      title\n      authorID\n      createdAt\n      author {\n        username\n      }\n    }\n  }\n"]))),S=Object(N.a)(s||(s=Object(y.a)(["\n  query getStoryById($id: ID!) {\n    getStoryById(id: $id) {\n      title\n      content\n      authorID\n      createdAt\n      author {\n        username\n      }\n    }\n  }\n"]))),I=Object(N.a)(a||(a=Object(y.a)(["\n  query {\n    me {\n      user\n    }\n  }\n"]))),C=Object(N.a)(c||(c=Object(y.a)(["\n  query getUserById($id: ID!) {\n    getUserById(id: $id) {\n      username\n      email\n      followers\n      followings\n      stories {\n        id\n        title\n        content\n        createdAt\n      }\n    }\n  }\n"]))),B=Object(v.b)({key:"isLogin",default:!1}),U=Object(v.b)({key:"isFollow",default:!1}),$=function(){var e,t=Object(v.d)(B),n=Object(w.a)(I),r=n.data,s=n.refetch;return Object(m.useEffect)((function(){s()}),[t]),null===r||void 0===r||null===(e=r.me)||void 0===e?void 0:e.user},L=n.p+"static/media/logo.b74770b2.svg",D=n(132),z=n(218),A=function(e){return Object(D.createAvatar)(z,{seed:e})},W=n(2),M=function(){var e=$(),t=A(e);return Object(W.jsxs)("nav",{className:"sticky top-0 w-full h-16 bg-white flex justify-around items-center   px-4 z-10",children:[Object(W.jsx)("img",{className:"w-20 ",src:L,alt:"Storium"}),e?Object(W.jsx)(h.b,{to:"/profile/".concat(e),dangerouslySetInnerHTML:{__html:t},className:"hidden md:flex items-center justify-center cursor-pointer outline-none sticky right-0 top-2 w-10 h-10 rounded-full  "}):Object(W.jsx)(h.b,{to:"/login",className:"hidden md:flex text-blue-700 items-center justify-center cursor-pointer outline-none sticky right-0 top-2 w-8 h-8 rounded-full bg-blue-200  ",children:Object(W.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(W.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),Object(W.jsxs)("ul",{className:"flex justify-between items-center w-1/2 md:-translate-x-full md:hidden ",children:[Object(W.jsx)("li",{children:Object(W.jsxs)(h.b,{to:"/",className:"font-medium w-20 flex items-center justify-center text-gray-800 cursor-pointer hover:text-blue-500",children:[Object(W.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(W.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})," ","Stories"]})}),e&&Object(W.jsx)("li",{children:Object(W.jsxs)(h.b,{to:"/editor",className:"font-medium flex w-32 justify-center items-center text-gray-800 cursor-pointer hover:text-blue-500",children:[Object(W.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(W.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})," ","Create Story"]})}),e?Object(W.jsx)("li",{children:Object(W.jsx)(h.b,{to:"/profile/".concat(e),children:Object(W.jsx)("div",{className:"w-9 h-9",dangerouslySetInnerHTML:{__html:t}})})}):Object(W.jsx)("li",{children:Object(W.jsx)(h.b,{to:"/login",children:Object(W.jsxs)("button",{className:" flex items-center justify-center w-32 h-9 bg-blue-500 font-medium text-white rounded-md hover:bg-blue-700 cursor-pointer outline-none shadow-md ",children:["Get Started",Object(W.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(W.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})})})]})]})},T=function(){var e=Object(w.a)(k),t=e.data,n=e.refetch;return Object(m.useEffect)((function(){n()}),[]),Object(W.jsx)("div",{className:"w-1/2 m-auto  px-8 py-4 md:w-full md:px-2 ",children:t?t.getAllStory.map((function(e){return Object(W.jsx)(h.b,{to:"/story/".concat(e.id),children:Object(W.jsxs)("div",{className:"w-full bg-blue-100  mr-auto ml-auto mb-4 px-4 md:px-2 py-2 flex justify-between flex-col border-2 rounded-md",children:[Object(W.jsx)("div",{className:"mb-6 md:mb-3",children:Object(W.jsx)(h.b,{to:"/profile/".concat(e.authorID),className:"flex items-center md:flex-col md:items-start",children:Object(W.jsxs)("div",{className:"container flex items-center",children:[Object(W.jsx)("div",{className:"w-8 h-8 ",dangerouslySetInnerHTML:{__html:A(e.authorID)}}),Object(W.jsx)("p",{className:"font-semibold capitalize md:text-sm text-md px-4 md:px-2 text-gray-800 hover:text-blue-500",children:e.author.username})]})})}),Object(W.jsx)("p",{className:"text-3xl font-extrabold md:font-bold font-sans  text-gray-800 cursor-pointer capitalize hover:text-blue-500 md:text-xl",children:e.title}),Object(W.jsxs)("p",{className:"text-gray-500 text-sm font-semibold",children:["Published on : ",new Date(Number(e.createdAt)).toDateString()]})]})},e.id)})):Object(W.jsx)(W.Fragment,{children:[0,0,0,0].map((function(e){return Object(W.jsxs)("div",{className:"w-full bg-blue-100  mr-auto ml-auto mb-4 animate-pulse px-4 py-2 flex justify-between flex-col border-2 rounded-md",children:[Object(W.jsx)("div",{className:"container h-8 bg-blue-200 rounded-lg  mb-8"}),Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{className:"w-40 h-4 bg-blue-200 mb-2 rounded-sm"}),Object(W.jsx)("div",{className:"w-36 h-6 bg-blue-200 rounded"})]})]})}))})})},q=n(14),E=n.n(q),F=n(38),H=n(5),_=n(74),P=n(697),J=Object(N.a)(o||(o=Object(y.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      user\n      error\n    }\n  }\n"]))),R=Object(N.a)(l||(l=Object(y.a)(["\n  mutation registerUser(\n    $username: String!\n    $email: String!\n    $password: String!\n  ) {\n    createUser(username: $username, email: $email, password: $password) {\n      user\n      error\n    }\n  }\n"]))),G=Object(N.a)(i||(i=Object(y.a)(["\n  mutation CreateStory($title: String!, $content: String!) {\n    createStory(title: $title, content: $content) {\n      id\n    }\n  }\n"]))),K=Object(N.a)(d||(d=Object(y.a)(["\n  mutation {\n    logout {\n      user\n    }\n  }\n"]))),Q=(Object(N.a)(b||(b=Object(y.a)(["\n  mutation clap($id: ID!) {\n    clap(id: $id) {\n      id\n    }\n  }\n"]))),Object(N.a)(u||(u=Object(y.a)(["\n  mutation followUser($id: ID!) {\n    followUser(id: $id) {\n      id\n    }\n  }\n"])))),V=function(){var e=Object(P.a)(G),t=Object(H.a)(e,1)[0],n=Object(f.f)(),r=Object(m.useState)(""),s=Object(H.a)(r,2),a=s[0],c=s[1],o=Object(m.useState)(""),l=Object(H.a)(o,2),i=l[0],d=l[1],b=Object(m.useState)(!1),u=Object(H.a)(b,2),j=u[0],x=u[1],h=function(){var e=Object(F.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({variables:{title:i,content:a}});case 2:try{n.push("/")}catch(r){}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsxs)("div",{className:"w-full  px-40 md:p-2",children:[Object(W.jsxs)("div",{className:"w-full ml-auto sticky top-14 h-14 flex md:flex-col md:h-auto  md:mb-4 items-center justify-between",children:[Object(W.jsx)("input",{className:"w-4/6 md:w-full h-12 border-2 md:border px-4 md:px-2 text-xl md:text-lg font-bold md:font-semibold outline-none md:mb-2 rounded-md",placeholder:"Title of the story",onChange:function(e){return d(e.target.value)},autoFocus:!0}),Object(W.jsxs)("div",{className:"md:container md:flex md:justify-evenly md:items-center",children:[Object(W.jsx)("button",{onClick:function(){return x(!j)},className:" hidden w-28 md:w-20 h-8 bg-green-100 rounded-md hover:bg-green-300 text-green-800 text-md md:text-sm font-medium shadow-sm md:block",children:j?"Edit":"Preview"}),Object(W.jsx)("button",{onClick:function(){return n.push("/")},className:"w-28 md:w-20 h-8 bg-yellow-100 rounded-md hover:bg-yellow-300 text-yellow-800 text-md md:text-sm  font-medium shadow-sm mx-2 md:mx-0",children:"Cancel"}),Object(W.jsx)("button",{disabled:!i&&!a,onClick:h,className:"w-28 md:w-20 h-8 bg-blue-200 rounded-md hover:bg-blue-300  text-blue-800 text-md md:text-sm  capitalize font-medium shadow-sm",children:"publish"})]})]}),Object(W.jsx)("div",{className:"md:block hidden",children:Object(W.jsx)(_.a,{preview:j?"preview":"edit",hideToolbar:"true",height:600,value:a,onChange:c})}),Object(W.jsx)("div",{className:"md:hidden block",children:Object(W.jsx)(_.a,{height:500,value:a,onChange:c})})]})},X=function(){var e,t,n=Object(f.f)(),r=Object(m.useState)(""),s=Object(H.a)(r,2),a=s[0],c=s[1],o=Object(m.useState)(""),l=Object(H.a)(o,2),i=l[0],d=l[1],b=Object(P.a)(J),u=Object(H.a)(b,2),j=u[0],x=u[1].data,g=Object(v.c)(B),O=Object(H.a)(g,2),p=O[0],w=O[1],y=function(){var e=Object(F.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j({variables:{email:a,password:i}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===x||void 0===x||null===(e=x.loginUser)||void 0===e?void 0:e.user)&&(w(!p),n.push("/")),Object(W.jsxs)("div",{className:"md:w-full p-8 w-4/12 shadow-lg rounded-lg h-96 ml-auto mr-auto mt-32 md:mt-20 flex flex-col justify-center items-center bg-gray-100",children:[Object(W.jsx)("p",{className:"text-blue-500 font-bold text-3xl mb-4",children:"Login"}),Object(W.jsxs)("form",{className:"container h-60 flex justify-around items-center flex-col relative",onSubmit:y,children:[Object(W.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"email",placeholder:"email",onChange:function(e){return c(e.target.value)},required:!0}),Object(W.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"password",placeholder:"password",onChange:function(e){return d(e.target.value)},required:!0}),(null===x||void 0===x||null===(t=x.loginUser)||void 0===t?void 0:t.error)&&Object(W.jsx)("p",{className:"text-red-500 font-medium ",children:x.loginUser.error}),Object(W.jsx)("button",{disabled:!a&&!i,type:"submit",className:"w-40 md:w-28 h-9 bg-blue-200   rounded-lg text-blue-700 font-semibold  uppercase hover:bg-blue-300 ",children:"submit"}),Object(W.jsx)(h.b,{to:"/register",children:Object(W.jsx)("p",{className:"font-medium text-base hover:text-blue-400 cursor-pointer ",children:"new user"})})]})]})},Y=function(){var e=Object(f.g)().id,t=Object(w.a)(S,{variables:{id:e}}).data;return Object(W.jsx)("div",{className:"w-2/3 ml-auto mr-auto p-8 bg-white md:w-full md:p-4",children:t?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"mb-8",children:[Object(W.jsx)("p",{className:"text-4xl font-extrabold mb-8 capitalize md:text-3xl md:font-bold ",children:t.getStoryById.title}),Object(W.jsxs)("div",{className:"flex items-center justify-between md:flex-col md:items-start",children:[Object(W.jsxs)(h.b,{to:"/profile/".concat(t.getStoryById.authorID),className:"flex items-center",children:[Object(W.jsx)("div",{dangerouslySetInnerHTML:{__html:A(t.getStoryById.authorID)},className:"w-12 h-12 md:w-8 md:h-8"}),Object(W.jsxs)("p",{className:"px-4 md:px-2 hover:text-blue-500 capitalize font-bold text-gray-700",children:[" ",t.getStoryById.author.username]})]}),Object(W.jsxs)("p",{className:"text-gray-500 text-sm font-semibold",children:["Published on :"," ",new Date(Number(t.getStoryById.createdAt)).toDateString()]})]})]}),Object(W.jsx)("hr",{}),Object(W.jsx)(_.a.Markdown,{className:"  text-gray-800 md:text-md",style:{fontSize:"1.1rem"},source:t.getStoryById.content})]}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:"mb-8 animate-pulse",children:[Object(W.jsx)("div",{className:"container h-12 rounded-lg bg-gray-200 mb-8"}),Object(W.jsxs)("div",{className:"flex items-center justify-between md:flex-col md:items-start",children:[Object(W.jsx)("div",{className:"bg-gray-200 w-32 h-4 rounded mb-2"}),Object(W.jsx)("div",{className:"bg-gray-200 w-36 h-4 rounded"})]})]}),Object(W.jsx)("hr",{}),Object(W.jsxs)("div",{className:"container animate-pulse ",children:[Object(W.jsx)("div",{className:"container h-4 mb-2 bg-gray-200"}),Object(W.jsx)("div",{className:"container h-4  mb-2 bg-gray-200"}),Object(W.jsx)("div",{className:"container h-4  mb-2 bg-gray-200"}),Object(W.jsx)("div",{className:"container h-4  mb-2 bg-gray-200"}),Object(W.jsx)("div",{className:"container h-4 bg-gray-200"})]})]})})},Z=function(){var e,t,n=Object(f.f)(),r=Object(m.useState)(""),s=Object(H.a)(r,2),a=s[0],c=s[1],o=Object(m.useState)(""),l=Object(H.a)(o,2),i=l[0],d=l[1],b=Object(m.useState)(""),u=Object(H.a)(b,2),j=u[0],x=u[1],h=Object(P.a)(R),g=Object(H.a)(h,2),O=g[0],p=g[1].data;return(null===p||void 0===p||null===(e=p.createUser)||void 0===e?void 0:e.user)&&n.push("/login"),Object(W.jsxs)("div",{className:"md:w-full p-8 w-4/12 shadow-lg rounded-lg h-96 ml-auto md:mt-20 mr-auto mt-32 flex flex-col justify-center items-center bg-gray-100",children:[Object(W.jsx)("p",{className:"text-blue-500 font-bold text-3xl mb-4",children:"Register"}),Object(W.jsxs)("form",{className:"container h-60 flex justify-around items-center flex-col ",onSubmit:function(e){e.preventDefault(),O({variables:{username:a,email:i,password:j}})},children:[Object(W.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"text",placeholder:"username",required:!0,onChange:function(e){return c(e.target.value)}}),Object(W.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"email",placeholder:"email",required:!0,onChange:function(e){return d(e.target.value)}}),Object(W.jsx)("input",{className:"w-80 h-11 outline-none border-2 rounded-lg border-blue-400 p-4",type:"password",placeholder:"password",required:!0,onChange:function(e){return x(e.target.value)}}),(null===p||void 0===p||null===(t=p.createUser)||void 0===t?void 0:t.error)&&Object(W.jsx)("p",{className:"text-red-500 font-medium ",children:p.createUser.error}),Object(W.jsx)("button",{type:"submit",className:"w-40 md:w-28 h-9 bg-blue-200 rounded-lg text-blue-700 font-semibold uppercase hover:bg-blue-300",children:"submit"})]})]})},ee=function(e){var t=e.id,n=Object(P.a)(Q),r=Object(H.a)(n,1)[0],s=Object(v.c)(U),a=Object(H.a)(s,2),c=a[0],o=a[1],l=$(),i=function(e){var t=Object(v.d)(U),n=Object(w.a)(C,{variables:{id:e}}),r=n.data,s=n.refetch;return Object(m.useEffect)((function(){s()}),[t]),null===r||void 0===r?void 0:r.getUserById}(t),d=function(){var e=Object(F.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({variables:{id:t}});case 2:try{o(!c)}catch(n){}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsx)("button",{onClick:d,className:"w-36 md:w-28 md:h-8 h-9 bg-blue-200 rounded-md font-semibold capitalize text-base hover:bg-blue-300 text-blue-700",children:i.followers.indexOf(l)>=0?"unfollow":"follow"})},te=function(){var e=Object(v.c)(B),t=Object(H.a)(e,2),n=t[0],r=t[1],s=Object(f.f)(),a=Object(P.a)(K),c=Object(H.a)(a,2),o=c[0],l=c[1].data,i=function(){var e=Object(F.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(null===l||void 0===l?void 0:l.logout)&&(!l.logout.user&&r(!n),!l.logout.user&&s.push("/")),Object(W.jsx)("button",{onClick:i,className:"w-36 md:w-32 md:h-8 h-9 bg-red-200 rounded-md font-semibold capitalize text-base hover:bg-red-300 text-red-700",children:"logout"})},ne=function(){var e=Object(f.f)(),t=$(),n=Object(f.g)().id,r=A(n),s=Object(w.a)(C,{variables:{id:n}}),a=s.data,c=s.refetch;return Object(m.useEffect)((function(){c()}),[]),Object(W.jsx)(W.Fragment,{children:a&&Object(W.jsx)("div",{className:"container px-8 pb-2 md:p-2 ",children:Object(W.jsxs)("div",{className:"flex justify-around items-start mt-4 md:flex-col",children:[Object(W.jsxs)("div",{className:"w-1/3  p-4 shadow-md rounded-lg border-2 bg-gray-100 md:container md:mb-6",children:[Object(W.jsx)("div",{className:"mx-8",dangerouslySetInnerHTML:{__html:r}}),Object(W.jsxs)("p",{className:"text-5xl capitalize font-extrabold pb-8 md:pb-4 md:text-2xl md:font-bold text-gray-800",children:[t===n&&"Hello"," ",a.getUserById.username]}),t===n&&Object(W.jsx)("span",{className:"capitalize font-medium text-md text-gray-500 md:text-base ",children:"Have a nice Editing"}),Object(W.jsxs)("div",{className:"mt-4 mb-4 ",children:[Object(W.jsxs)("p",{className:"text-indigo-500 font-bold md:font-semibold md:text-base ",children:[Object(W.jsx)("span",{className:"text-gray-500 md:text-sm ",children:"Email"})," :"," ",a.getUserById.email]}),Object(W.jsxs)("p",{className:"font-semibold text-base md:text-sm text-gray-500",children:[Object(W.jsx)("span",{className:"text-indigo-500 font-bold text-lg md:text-base",children:a.getUserById.followers.length})," ","followers"]}),Object(W.jsxs)("p",{className:"font-semibold text-base md:text-sm   text-gray-500",children:[Object(W.jsx)("span",{className:" text-indigo-500 font-bold text-lg md:text-base",children:a.getUserById.followings.length})," ","followings"]})]}),t?t===n?Object(W.jsxs)("div",{className:"flex container justify-around items-center",children:[Object(W.jsx)("button",{onClick:function(){return e.push("/editor")},className:" w-36 md:w-32 md:h-8 h-9 bg-green-200 rounded-md font-semibold capitalize text-base hover:bg-green-300  text-green-700",children:"Create Story"}),Object(W.jsx)(te,{})]}):Object(W.jsx)(ee,{id:n}):""]}),Object(W.jsxs)("div",{className:"w-1/2 md:container",children:[Object(W.jsxs)("p",{className:"text-gray-800 font-bold text-2xl md:text-xl  capitalize mb-8 md:text-center",children:["stories by ",a.getUserById.username]}),a.getUserById.stories.length>0?a.getUserById.stories.map((function(e){return Object(W.jsx)(h.b,{to:"/story/".concat(e.id),children:Object(W.jsxs)("div",{className:"w-full  mr-auto ml-auto mb-4 px-4 py-2 flex justify-between rounded-md bg-yellow-50 flex-col border-2 ",children:[Object(W.jsx)("p",{className:"text-3xl font-extrabold md:font-bold font-sans mb-6 md:mb-3 text-gray-800 cursor-pointer capitalize hover:text-yellow-800 md:text-xl",children:e.title}),Object(W.jsx)("div",{children:Object(W.jsxs)("p",{className:"text-gray-600 text-sm font-semibold",children:["Published on :"," ",new Date(Number(e.createdAt)).toDateString()]})})]})},e.id)})):Object(W.jsx)("div",{className:"container h-28 flex justify-center items-center",children:Object(W.jsx)("p",{className:"font-bold text-lg capitalize text-gray-300",children:"Nothing to show here"})})]})]})})})};var re=function(){var e=new g.a({uri:"/graphql",cache:new O.a});return Object(W.jsx)("div",{className:"App w-full h-full   ",children:Object(W.jsx)(p.a,{client:e,children:Object(W.jsxs)(h.a,{children:[Object(W.jsx)(M,{}),Object(W.jsxs)(f.c,{children:[Object(W.jsx)(f.a,{path:"/",exact:!0,component:T}),Object(W.jsx)(f.a,{path:"/editor",component:V}),Object(W.jsx)(f.a,{path:"/login",component:X}),Object(W.jsx)(f.a,{path:"/story/:id",component:Y}),Object(W.jsx)(f.a,{path:"/register",component:Z}),Object(W.jsx)(f.a,{path:"/profile/:id",component:ne})]})]})})})},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,699)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};x.a.render(Object(W.jsx)(v.a,{children:Object(W.jsx)(re,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ae(t,e)}))}}(),ce()}},[[686,1,2]]]);
//# sourceMappingURL=main.79c1f94f.chunk.js.map