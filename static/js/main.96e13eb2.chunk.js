(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={list:"Statistics_list__yo4GA",item:"Statistics_item__GKGuI"}},function(e,t,c){e.exports={btn:"FeedbackOptions_btn__2NM5o"}},,,function(e,t,c){e.exports={section:"Section_section__2tUQ9"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(7),i=c.n(n),o=(c(12),c(4)),r=c(6),l=c.n(r),b=c(0),d=function(e){var t=e.title,c=e.children;return Object(b.jsxs)("section",{className:l.a.section,children:[Object(b.jsx)("h2",{className:l.a.title,children:t}),c]})},j=c(2),u=c.n(j);var h=function(e){var t=e.good,c=e.neutral,a=e.bad,s=e.total,n=e.positivePercentage;return Object(b.jsxs)("ul",{className:u.a.list,children:[Object(b.jsxs)("li",{className:u.a.item,children:["Good: ",t]}),Object(b.jsxs)("li",{className:u.a.item,children:["Neutral: ",c]}),Object(b.jsxs)("li",{className:u.a.item,children:["Bad: ",a]}),Object(b.jsxs)("li",{className:u.a.item,children:["Total: ",s]}),Object(b.jsxs)("li",{className:u.a.item,children:["Positive feedback: ",n,"%"]})]})},O=c(3),x=c.n(O),m=function(e){var t=e.onLeaveFeedback;return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{id:"good",className:x.a.btn,type:"button",onClick:t,children:"Good"}),Object(b.jsx)("button",{id:"neutral",className:x.a.btn,type:"button",onClick:t,children:"Neutral"}),Object(b.jsx)("button",{className:x.a.btn,id:"bad",type:"button",onClick:t,children:"Bad"})]})},f=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})};function k(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(0),i=Object(o.a)(n,2),r=i[0],l=i[1],j=Object(a.useState)(0),u=Object(o.a)(j,2),O=u[0],x=u[1],k=function(){return c+r+O};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"Please leave feedback",children:Object(b.jsx)(m,{onLeaveFeedback:function(e){switch(e.target.id){case"good":s(c+1);break;case"neutral":l(r+1);break;case"bad":x(O+1);break;default:return}}})}),Object(b.jsx)(d,{title:"Statistics",children:0!==k()?Object(b.jsx)(h,{good:c,neutral:r,bad:O,total:k(),positivePercentage:Math.ceil(c/(c+r+O)*100)}):Object(b.jsx)(f,{message:"No feedback given"})})]})}i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.96e13eb2.chunk.js.map