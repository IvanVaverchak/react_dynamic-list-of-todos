(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(3)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodo,a=e.setLoading;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){c(e),a(!0)}(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":e.id===(null===s||void 0===s?void 0:s.id),"fa-eye":e.id!==(null===s||void 0===s?void 0:s.id)})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var u=function(e){var t=e.query,c=e.setQuery,a=e.setApliedQuery,n=e.status,l=e.setStatus,d=Object(i.useCallback)(function(e,t){var c=0;return function(){for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];window.clearTimeout(c),c=window.setTimeout((function(){e.apply(void 0,a)}),t)}}(a,1e3),[]);return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsx)("select",{"data-cy":"statusSelect",value:n,onChange:function(e){return l(e.target.value)},children:Object.values(s).map((function(e){return Object(r.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)})}))})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{value:t,"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){c(e.target.value),d(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.length>0&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(""),a("")}})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.loading,c=e.setSelectedTodo,s=e.selectedTodo,a=e.user,n=e.setLoading,l=e.setUser,d=e.todo;return Object(i.useEffect)((function(){var e;(e=d.userId,h("/users/".concat(e))).then(l).finally((function(){return n(!1)}))}),[d.userId]),Object(r.jsxs)("div",{className:o()("modal",{" is-active":s}),"data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),t&&Object(r.jsx)(b,{}),!t&&Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===s||void 0===s?void 0:s.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==s&&void 0!==s&&s.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})]})]})]})]})};var O=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)([]),d=Object(l.a)(n,2),o=d[0],O=d[1],x=Object(i.useState)(null),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(i.useState)(null),y=Object(l.a)(N,2),g=y[0],T=y[1],L=Object(i.useState)(""),S=Object(l.a)(L,2),k=S[0],w=S[1],C=Object(i.useState)(""),E=Object(l.a)(C,2),A=E[0],I=E[1],_=Object(i.useState)(s.ALL),P=Object(l.a)(_,2),Q=P[0],B=P[1];Object(i.useEffect)((function(){a(!0),h("/todos").then(O).finally((function(){return a(!1)}))}),[]);var D=function(e,t,c){var a=e;switch(t.length>0&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),c){case s.ALL:return a;case s.ACTIVE:return a.filter((function(e){return!1===e.completed}));case s.COMPLETED:return a.filter((function(e){return!0===e.completed}));default:return a}}(o,A,Q);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{query:k,setQuery:w,setApliedQuery:I,status:Q,setStatus:B})}),Object(r.jsxs)("div",{className:"block",children:[c&&!v&&Object(r.jsx)(b,{}),0!==o.length&&Object(r.jsx)(j,{todos:D,setSelectedTodo:p,selectedTodo:v,setLoading:a})]})]})})}),v&&Object(r.jsx)(m,{loading:c,setSelectedTodo:p,selectedTodo:v,user:g,setLoading:a,setUser:T,todo:v})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba074791.chunk.js.map