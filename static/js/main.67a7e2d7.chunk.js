(this.webpackJsonpreactquize=this.webpackJsonpreactquize||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(8),s=c.n(n),r=(c(74),c(44)),i=c.n(r),l=c(57),o=c(14),d=(c(76),c(2)),j=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{style:{fontFamily:"'Montserrat', sans-serif"},className:"display-2 text-center",children:"INTUITIVE QUIZ HUB"}),Object(d.jsx)("hr",{className:"mx-auto",style:{width:"95%",height:3}})]})})},u=c(11),b=c(135),m=c(136),h=c(133),x=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],O=function(e){var t=e.children;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"border d-flex justify-content-center bg-danger py-1",children:t})})},v=function(e){var t=e.name,c=e.setname,n=e.fetchQuestions,s=Object(u.f)(),r=Object(a.useState)(!1),i=Object(o.a)(r,2),l=i[0],j=i[1],v=Object(a.useState)(""),f=Object(o.a)(v,2),g=f[0],y=f[1],p=Object(a.useState)(""),N=Object(o.a)(p,2),S=N[0],w=N[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container-fluid mt-2 mt-md-5",children:Object(d.jsxs)("div",{className:"row mt-5",children:[Object(d.jsx)("div",{className:"col-md-6  mx-auto order-2 order-md-1 d-flex flex-column justify-content-center",children:Object(d.jsxs)("div",{className:"row  gy-4 mt-2 mt-md-0",children:[l&&Object(d.jsx)("div",{className:"col-11 mx-auto",children:Object(d.jsx)(O,{children:Object(d.jsx)("h4",{children:"Fill All The Field"})})}),Object(d.jsx)("div",{className:"col-11 mx-auto",children:Object(d.jsx)(b.a,{label:"Enter Your Name",variant:"outlined",fullWidth:!0,onChange:function(e){return c(e.target.value)}})}),Object(d.jsx)("div",{className:"col-11 mx-auto",children:Object(d.jsx)(b.a,{label:"Select Category",select:!0,variant:"outlined",fullWidth:!0,onChange:function(e){return y(e.target.value)},children:x.map((function(e){return Object(d.jsx)(m.a,{value:e.value,children:e.category},e.category)}))})}),Object(d.jsx)("div",{className:"col-11 mx-auto",children:Object(d.jsxs)(b.a,{label:"Enter Your Name",variant:"outlined",select:!0,fullWidth:!0,onChange:function(e){return w(e.target.value)},children:[Object(d.jsx)(m.a,{value:"easy",children:"Easy"},"Easy"),Object(d.jsx)(m.a,{value:"medium",children:"Medium"},"Medium"),Object(d.jsx)(m.a,{value:"hard",children:"Hard"},"Hard")]})}),Object(d.jsx)("div",{className:"col-11 mx-auto",children:Object(d.jsx)(h.a,{variant:"contained",color:"secondary",size:"large",fullWidth:!0,onClick:function(){t&&g&&S?(j(!1),n(g,S),s.push("/quize")):j(!0)},children:"start quize"})})]})}),Object(d.jsx)("div",{className:"col-md-6  mx-auto order-1 order-md-2 d-flex justify-content-center align-items-center",children:Object(d.jsx)("img",{className:"img-fluid",src:"./quize222.svg",alt:""})})]})})})},f=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:" border d-flex justify-content-center ",children:Object(d.jsx)("a",{href:"https://github.com/Nazmul-dot",target:"_blank",className:"text-decoration-none text-dark fs-3",style:{fontFamily:"'Montserrat', sans-serif"},children:"Made with \u2665 by Nazmul Haq"})})})},g=c(63),y=(c(83),function(e){var t=e.score,c=e.setScore,n=e.questions,s=e.setQuestions,r=e.options,i=e.currQ,l=e.setcurrQ,j=e.correct;console.log(r,j);var b=Object(a.useState)(""),m=Object(o.a)(b,2),x=m[0],v=m[1],f=Object(a.useState)(!1),g=Object(o.a)(f,2),y=g[0],p=g[1],N=Object(u.f)(),S=function(e){return x===e&&x===j?"select":x===e&&x!==j?"wrong":e===j?"select":void 0};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container  mt-3",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("h3",{className:"text-center",children:["Question: ",i+1]})}),Object(d.jsxs)("div",{className:"border border-4 my-2",children:[Object(d.jsx)("h5",{className:"text-center mb-2 md-md-4",children:n[i].question}),Object(d.jsxs)("div",{className:"row  my-4",children:[y&&Object(d.jsx)("div",{className:"col-10 mx-auto rounded-3 my-3",children:Object(d.jsx)(O,{children:Object(d.jsx)("h4",{className:"text-white",children:"Please Select One Option"})})}),r&&r.map((function(e){return Object(d.jsx)("div",{className:"col-md-5  mx-auto mb-2 mb-md-5 d-flex justify-content-center",children:Object(d.jsx)("button",{className:"singleoption ".concat(x&&S(e)," "),onClick:function(){return function(e){v(e),p(!1),j===e&&c(t+1)}(e)},disabled:x,children:e})})})),Object(d.jsxs)("div",{className:"col-12  d-flex justify-content-around gap-2",children:[Object(d.jsx)(h.a,{variant:"contained",color:"secondary",style:{padding:"0px 50px"},href:"/",onClick:function(){l(0),s()},children:"quit"}),Object(d.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){i>8?N.push("/result"):x?(l(i+1),p(!1),v("")):p(!0)},children:i>8?"submit":"next question"})]})]})]})]})})}),p=c(134),N=function(e){var t,c,n=e.name,s=e.score,r=e.setScore,i=e.questions,l=e.setQuestions,j=Object(a.useState)(0),u=Object(o.a)(j,2),b=u[0],m=u[1],h=Object(a.useState)(),x=Object(o.a)(h,2),O=x[0],v=x[1];Object(a.useEffect)((function(){var e,t;v(i&&f([null===(e=i[b])||void 0===e?void 0:e.correct_answer].concat(Object(g.a)(null===(t=i[b])||void 0===t?void 0:t.incorrect_answers))))}),[b,i]);var f=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(d.jsx)(d.Fragment,{children:i?Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsxs)("h3",{className:" p-2 shadow ",children:["Welcome, ",n]})}),Object(d.jsxs)("div",{className:" d-flex justify-content-between ",children:[i&&Object(d.jsx)("p",{children:null===(t=i[b])||void 0===t?void 0:t.category}),Object(d.jsxs)("p",{children:["SCORE : ",s]})]}),Object(d.jsx)("div",{children:i&&Object(d.jsx)(y,{options:O,currQ:b,setcurrQ:m,questions:i,setQuestions:l,score:s,setScore:r,correct:null===(c=i[b])||void 0===c?void 0:c.correct_answer})})]}):Object(d.jsx)("div",{className:"m-5 d-flex justify-content-center align-items-center",children:Object(d.jsx)(p.a,{style:{margin:100},color:"inherit",size:150,thickness:1})})})},S=c(62),w=c.n(S),F=function(e){var t=e.score;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsxs)("h1",{className:"display-1 text-center my-5",style:{fontFamily:"'Montserrat', sans-serif"},children:["FINAL SCORE : ",t]})}),Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)(h.a,{variant:"contained",color:"secondary",size:"large",href:"/",children:"go to homepage"})})]})};var q=function(){var e=Object(u.f)(),t=Object(a.useState)(),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(),b=Object(o.a)(r,2),m=b[0],h=b[1],x=Object(a.useState)(0),O=Object(o.a)(x,2),g=O[0],y=O[1],p=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c,a,n,r=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",c=r.length>1&&void 0!==r[1]?r[1]:"",e.next=4,w.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 4:a=e.sent,n=a.data,console.log(n.results),console.log(n.results),s(n.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){e.push("/")}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"app",style:{backgroundImage:"url(./ques1.png)"},children:[Object(d.jsx)(j,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",exact:!0,children:Object(d.jsx)(v,{name:m,setname:h,fetchQuestions:p})}),Object(d.jsx)(u.a,{path:"/quize",exact:!0,children:Object(d.jsx)(N,{questions:n,setQuestions:s,score:g,setScore:y,name:m})}),Object(d.jsx)(u.a,{path:"/result",exact:!0,children:Object(d.jsx)(F,{score:g})})]})]}),Object(d.jsx)(f,{})]})},C=c(32);s.a.render(Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root"))},74:function(e,t,c){},76:function(e,t,c){},83:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.67a7e2d7.chunk.js.map