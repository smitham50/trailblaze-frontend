(this["webpackJsonptrailblaze-frontend"]=this["webpackJsonptrailblaze-frontend"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),s=(t(84),t(5)),o=t.n(s),i=t(10),m=t(13),u=t(8),d=t(15),p=t(12),f=t(7),h=t(11),b=t.n(h),g=(t(105),t(115)),v=t(9);function E(){var e=Object(f.c)();return function(a){e({type:"SET_LOCATION",payload:a})}}var O,y=t(118),j=t(114),w=t(111),x=t(37),k=t(33),S=function(e){alert(e.message)},N=function(e){navigator.geolocation.getCurrentPosition(e,S,{enableHighAccuracy:!0,timeout:5e3})},C=t(39),_=t(40),T=t(54),I=t(52),A=function(e){Object(T.a)(t,e);var a=Object(I.a)(t);function t(){return Object(C.a)(this,t),a.apply(this,arguments)}return Object(_.a)(t,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setTimer",value:function(){null!=this._timer&&clearTimeout(this._timer),this._timer=setTimeout(function(){this.props.unmount(),this._timer=null}.bind(this),4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"flash-message alert ".concat(this.props.alert)},r.a.createElement("p",{className:"small"},this.props.message))}}]),t}(n.Component),L=v.a.div(O||(O=Object(u.a)(["\n  margin: auto 0;\n\n  .form-card {\n    width: 25rem;\n    padding: 1rem;\n  }\n  form {\n    width: 100%;\n  }\n  .flash-container {\n    position: relative;\n  }\n  .form-flash {\n    position: absolute;\n  }\n  .subtext {\n    font-size: .9rem;\n  }\n  .headline {\n    font-size: 1.1rem;\n  }\n  .btn-success {\n    background: #a7a7a7;\n    border-color: #8c8c8c;\n    &:hover {\n      background: #848383;\n    }\n  }\n"]))),G=function(e){return e.form},z=function(e){return e.user},U=function(e){return e.trailSearch},P=function(e){return e.trailShow},R=function(e){return e.myHikes},M=t(19);function H(e){var a=Object(f.c)();return function(e){a({type:"HANDLE_CHANGE",payload:Object(M.a)({},e.target.name,e.target.value)})}}function D(){var e=Object(f.c)();return function(a){e({type:"SET_USER",payload:a})}}function F(){var e=Object(f.c)();return function(a,t){e({type:"SET_FLASH_MESSAGE",payload:{alert:a,messages:t}})}}function K(){var e=Object(f.c)();return function(){e({type:"UNMOUNT_FLASH_MESSAGE"})}}var V,B,q=function(){var e=Object(f.d)(z).currentUserData,a=H(),t=D(),n=E(),l=F(),c=K(),s=Object(f.d)(G),m=s.username,u=s.password,h=s.passwordConfirmation,g=s.email,v=s.messages,O=s.alert,S=s.flashMessage,C=Object(x.b)(),_=C.handleSubmit,T=C.register,I=C.errors,U=function(){var e=Object(i.a)(o.a.mark((function e(){var a,r,c,s,i,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/signup",data:{user:{username:m,password:u,password_confirmation:h,email:g}}},e.next=4,b()(a);case 4:r=e.sent,c=r.data,s=c.errors,i=c.user,d=r.data,s?l("alert-danger",s):(t(d),N(n),localStorage.setItem("userId",i.id));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(L,null,r.a.createElement("div",{className:"flash-container"},S?v.map((function(e){return r.a.createElement(A,{key:e[0],unmount:c,message:e,alert:O,className:"subtext form-flash"})})):r.a.createElement("div",{className:"form-flash"})),r.a.createElement(y.a,{className:"form-card"},r.a.createElement(j.a,{onSubmit:_(U)},r.a.createElement(j.a.Group,{controlId:"username"},r.a.createElement(j.a.Label,{className:"headline"},"Username"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Enter username",onChange:a,defaultValue:m,name:"username",className:"subtext",ref:T({required:"Username cannot be blank"})}),r.a.createElement(k.a,{errors:I,name:"username",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(j.a.Group,{controlId:"formGroupEmail"},r.a.createElement(j.a.Label,{className:"headline"},"Email address"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Enter email",onChange:a,defaultValue:g,name:"email",className:"subtext",ref:T({required:"Email cannot be blank",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),r.a.createElement(k.a,{errors:I,name:"email",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(j.a.Group,{controlId:"formGroupPassword"},r.a.createElement(j.a.Label,{className:"headline"},"Password"),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:a,defaultValue:u,name:"password",className:"subtext",ref:T({required:"Password cannot be blank",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,message:"Password must be between 6 and 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"}})}),r.a.createElement(k.a,{errors:I,name:"password",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(j.a.Group,{controlId:"formGroupPasswordConfirmation"},r.a.createElement(j.a.Label,{className:"headline"},"Password Confirmation"),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password Confirmation",onChange:a,defaultValue:h,name:"passwordConfirmation",className:"subtext",ref:T({required:"Password confirmation cannot be blank",validate:function(e){return e===u||"Passwords must match"}})}),r.a.createElement(k.a,{errors:I,name:"passwordConfirmation",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(j.a.Group,{controlId:"formGroupSubmit",className:"small headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Submit")),r.a.createElement(j.a.Group,{className:"small subtext"},"Already have an account?  ",r.a.createElement(d.b,{to:"/login"},"Login")))),e&&e.logged_in&&r.a.createElement(p.a,{to:"/trailsearch"}))},W=function(){var e=H(),a=D(),t=E(),n=F(),l=K(),c=Object(f.d)(z).currentUserData,s=Object(f.d)(G),m=s.username,u=s.password,h=s.messages,g=s.alert,v=s.flashMessage,O=Object(x.b)(),S=O.handleSubmit,C=O.register,_=O.errors,T=function(){var e=Object(i.a)(o.a.mark((function e(){var r,l,c,s,i,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/login",data:{user:{username:m,password:u}}},e.next=4,b()(r);case 4:l=e.sent,c=l.data,s=c.errors,i=c.user,d=l.data,s?n("alert-danger",s):(a(d),N(t),localStorage.setItem("userId",i.id));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(L,null,r.a.createElement("div",{className:"flash-container"},v?h.map((function(e){return r.a.createElement(A,{key:e[0],unmount:l,message:e,alert:g,className:"subtext form-flash"})})):r.a.createElement("div",{className:"form-flash"})),r.a.createElement(y.a,{className:"form-card"},r.a.createElement(j.a,{onSubmit:S(T)},r.a.createElement(j.a.Group,{controlId:"username"},r.a.createElement(j.a.Label,{className:"headline"},"Username"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Enter username",onChange:e,name:"username",defaultValue:m,className:"subtext",ref:C({required:"Username cannot be blank"})}),r.a.createElement(k.a,{errors:_,name:"username",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(j.a.Group,{controlId:"formGroupPassword"},r.a.createElement(j.a.Label,{className:"headline"},"Password"),r.a.createElement(j.a.Control,{type:"password",placeholder:"Password",onChange:e,name:"password",defaultValue:u,className:"subtext",ref:C({required:"Password cannot be blank"})}),r.a.createElement(k.a,{errors:_,name:"password",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(j.a.Group,{controlId:"formGroupSubmit",className:"small headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Submit")),r.a.createElement(j.a.Group,{className:"small subtext"},"Don't have an account?  ",r.a.createElement(d.b,{to:"/signup"},"Signup")))),c&&c.logged_in&&r.a.createElement(p.a,{to:"/trailsearch"}))},X=function(){var e=Object(f.d)(z).user,a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),d=u[0],p=u[1],h=Object(n.useState)(!1),g=Object(m.a)(h,2),v=g[0],E=g[1],O=Object(n.useState)(""),x=Object(m.a)(O,2),k=x[0],S=x[1],N=Object(n.useState)(""),C=Object(m.a)(N,2),_=C[0],T=C[1];window.setUsername=c,window.setEmail=p;var I=function(){var a=Object(i.a)(o.a.mark((function a(t){var n,r,c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={user:{username:l||e.username,email:d||e.email}},r={method:"patch",url:"https://nameless-wave-57808.herokuapp.com/api/v1/update_account",data:n},a.next=5,b()(r);case 5:(c=a.sent).data.error?(E(!0),T(c.data.message),S("alert-danger")):(E(!0),T(c.data.message),S("alert-success"));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),G=function(e){var a=e.target.name;(0,window["set".concat(a)])(e.target.value)};return r.a.createElement(L,null,r.a.createElement(y.a,{className:"form-card"},r.a.createElement(j.a,{onSubmit:I},r.a.createElement(j.a.Group,null,v&&r.a.createElement(A,{unmount:function(){E(!1),T("")},message:_,alert:k,className:"subtext"})),r.a.createElement(j.a.Group,{controlId:"username"},r.a.createElement(j.a.Label,{className:"headline"},"Update username"),r.a.createElement(j.a.Control,{type:"text",placeholder:"".concat(null===e||void 0===e?void 0:e.username),onChange:G,name:"Username",className:"subtext",value:l})),r.a.createElement(j.a.Group,{controlId:"formGroupEmail"},r.a.createElement(j.a.Label,{className:"headline"},"Update email address"),r.a.createElement(j.a.Control,{type:"text",placeholder:"".concat(null===e||void 0===e?void 0:e.email),onChange:G,name:"Email",className:"subtext",value:d})),r.a.createElement(j.a.Group,{controlId:"formGroupSubmit",className:"small headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Submit")))))},Z=t(113),Q=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],s=function(){return c(!1)},o=e.handleCancelAccount;Object(n.useEffect)((function(){c(!0)}),[]);return r.a.createElement(n.Fragment,null,r.a.createElement(Z.a,{show:l,onHide:s},r.a.createElement(Z.a.Header,{closeButton:!0},r.a.createElement(Z.a.Title,null,"Cancel Account")),r.a.createElement(Z.a.Body,{className:"subtext"},e.message),r.a.createElement(Z.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",className:"headline",onClick:s},"No"),r.a.createElement(w.a,{variant:"primary",className:"headline",onClick:function(){o(),s()}},"Yes"))))};function Y(){var e=Object(f.c)();return function(){e({type:"CLEAR_USER"})}}var $,J,ee,ae,te,ne,re,le,ce=v.a.div(V||(V=Object(u.a)(['\n  display: flex;\n  margin: auto 0;\n  font-size: 1.4rem;\n\n  a:link,\n  a:visited {\n    color: #1c1b1be1;\n  }\n  a:hover {\n    color: #7d7a7ae1;\n  }\n  .headline {\n    font-family: "Amatic SC", cursive;\n  }\n  .marginal {\n    margin: 2%;\n  }\n  .button-sized {\n    font-size: 1.2em;\n  }\n\n  @media screen and (max-width: 1024px) {\n    margin: 23.5rem 0;\n    font-size: 1.5rem;\n  }\n\n  @media screen and (max-width: 600px) {\n    margin: 12rem 0;\n    font-size: 1.3rem;\n  }\n']))),se=v.a.div(B||(B=Object(u.a)(["\n    margin: 0 8rem;\n\n    @media screen and (max-width: 1024px) {\n        margin 0 2rem;\n    }\n"]))),oe=Object(p.g)((function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),p=u[0],f=u[1],h=Y(),g=function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.clear(),h(),a.next=4,b.a.delete("https://nameless-wave-57808.herokuapp.com/api/v1/cancel_account");case 4:a.sent.errors||e.history.push("/");case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(Q,{handleCancelAccount:g,message:p}),r.a.createElement(ce,null,r.a.createElement(se,null,r.a.createElement(d.b,{to:"/update-account",className:"headline"},r.a.createElement("i",{className:"fas fa-edit fa-3x marginal"}),r.a.createElement("p",{className:"button-sized"},"Update Account"))),r.a.createElement(se,null,r.a.createElement(d.b,{to:"#",onClick:function(){f("Are you sure you want to cancel your account?"),c(!0)},className:"headline"},r.a.createElement("i",{className:"fas fa-ban fa-3x marginal"}),r.a.createElement("p",{className:"button-sized"},"Cancel Account")))))})),ie=t(116),me=v.a.div($||($=Object(u.a)(["\n  .navbar-link {\n    text-decoration: none;\n  }\n\n  .navbar-dark .navbar-nav .nav-link {\n    color: white;\n    transition: 0.3s;\n  }\n\n  a {\n    margin: 0 1em;\n  }\n"]))),ue=Object(v.a)(ie.a.Brand)(J||(J=Object(u.a)(['\n  font-size: 1.7em;\n  font-weight: 700;\n  font-family: "Quicksand", sans-serif;\n  letter-spacing: 0.4rem;\n\n  @media screen and (max-width: 1000px) {\n    font-size: 1.3rem;\n    letter-spacing: 0.2rem;\n  }\n']))),de=v.a.img(ee||(ee=Object(u.a)(["\n  height: 50px;\n  width: 50px;\n"]))),pe=function(){var e=Object(f.d)(z).currentUserData,a=Y(),t=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),e.next=3,b.a.post("https://nameless-wave-57808.herokuapp.com/api/v1/logout");case 3:(t=e.sent).errors?alert(t.errors):a();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(me,null,r.a.createElement(ie.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top",collapseOnSelect:!0},r.a.createElement(g.a.Link,{as:d.b,eventKey:"1",to:"/"},r.a.createElement(ue,null,r.a.createElement(de,{src:"/trailblaze-frontend/noun_Trail_2056927.svg",alt:"brand",loading:"lazy"})," ","Trailblaze")),r.a.createElement(ie.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ie.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto subtext"},r.a.createElement(g.a.Link,{as:d.b,eventKey:"2",to:"/trailsearch"},"Find a Trail"),e.logged_in?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,{as:d.b,eventKey:"3",to:"/myhikes"},"My Hikes"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"4",to:"/account"},"Account"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"5",to:"/",onClick:t},"Logout ",e.user.username)):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,{as:d.b,eventKey:"6",to:"/signup"},"Signup"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"7",to:"/login"},"Login"))))))},fe=t(112),he=v.a.div(ae||(ae=Object(u.a)(["\n  position: relative;\n"]))),be=v.a.img(te||(te=Object(u.a)(["\n  width: 100%;\n  vertical-align: top;\n"]))),ge=v.a.div(ne||(ne=Object(u.a)(["\n  position: absolute;\n  background-color: #3e3d3d2e;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n"]))),ve=v.a.div(re||(re=Object(u.a)(["\n  position: absolute;\n  top: 3rem;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: white;\n  .headline {\n    font-size: 1rem;\n    font-weight: 700;\n  }\n  .subtext {\n    font-size: 0.8rem;\n  }\n"]))),Ee=function(e){var a=Object(n.useState)(0),t=Object(m.a)(a,2),l=t[0],c=t[1],s=Object(n.useRef)(null);Object(n.useEffect)((function(){try{s.current.addEventListener("load",o)}catch(e){console.log(e)}}),[]);var o=function(){var e=s.current.clientHeight,a=Math.ceil(e/10);c(a)};return r.a.createElement(d.b,{to:"/trails/".concat(encodeURIComponent(e.trailName)),style:{gridRowEnd:"span ".concat(l)}},r.a.createElement(he,{className:"trail"},r.a.createElement(be,{src:e.image,ref:s,alt:e.trailName}),r.a.createElement(ge,null),r.a.createElement(ve,null,r.a.createElement("p",{className:"headline"},r.a.createElement("strong",null,e.trailName)),r.a.createElement("p",{className:"subtext"},e.location))))},Oe=v.a.div(le||(le=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 0 10px;\n  grid-auto-rows: 10.1px;\n  width: 100%;\n  margin-bottom: 1rem;\n\n  @media screen and (max-width: 1024px) {\n    margin-top: 4.5rem;\n  }\n"]))),ye=function(e){Object(T.a)(t,e);var a=Object(I.a)(t);function t(){var e;Object(C.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).renderTrails=function(){return e.props.trails.map((function(e){return r.a.createElement(Ee,{key:e.id,trailName:e.name,image:e.imgMedium,length:e.length,difficulty:e.difficulty,location:e.location})}))},e}return Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.trails.length){e.next=8;break}return t={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/search_reload",data:{trail_ids:null===(a=localStorage.trails)||void 0===a?void 0:a.split(",").map((function(e){return e}))}},e.next=4,b()(t);case 4:n=e.sent,r=n.data.trails,(0,this.props.setTrails)(r);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.trails,t=e.setPreviousPage,n=e.location,l=this.renderTrails;return t(n),r.a.createElement(r.a.Fragment,null,a.length?r.a.createElement(Oe,null,l()):r.a.createElement(fe.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Searching for trails")))}}]),t}(n.PureComponent);var je,we,xe,ke,Se=Object(p.g)(Object(f.b)((function(e){var a=e.user;return{latitude:a.latitude,longitude:a.longitude,trails:e.trailSearch.trails}}),(function(e){return{setTrails:function(a){e({type:"SET_TRAILS",payload:a})},setPreviousPage:function(a){e({type:"SET_PREVIOUS_PAGE",payload:a})}}}))(ye)),Ne=t(117),Ce=t(78),_e=function(){var e=Object(f.d)(P).trail,a={lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)},t=Object(n.useState)(""),l=Object(m.a)(t,2),c=l[0],s=l[1],u=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://nameless-wave-57808.herokuapp.com/api/v1/map_auth");case 2:a=e.sent,t=a.data,s(t.replace(/\s/g,""));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){u()}),[]);return r.a.createElement("div",{className:"map"},c&&r.a.createElement(Ce.a,{bootstrapURLKeys:{key:c},center:a,defaultZoom:11,onGoogleApiLoaded:function(e){var t=localStorage,n=t.latitude,r=t.longitude,l={lat:parseFloat(n),lng:parseFloat(r)},c={lat:a.lat,lng:a.lng},s=new e.maps.DirectionsService,o=new e.maps.DirectionsRenderer;o.setMap(e.map),s.route({travelMode:"DRIVING",origin:l,destination:c},(function(e,a){"OK"===a&&o.setDirections(e)}))},yesIWantToUseGoogleMapApiInternals:!0}))};function Te(){var e=Object(f.c)();return function(a){e({type:"SET_HIKES",payload:a})}}var Ie=v.a.div(je||(je=Object(u.a)(["\n  width: 100%;\n\n  @media screen and (max-width: 1024px) {\n    margin-top: 4.5rem;\n  }\n"]))),Ae=v.a.div(we||(we=Object(u.a)(["\n  margin-bottom: 1vh;\n\n  & > * {\n    margin: 0 0.5%;\n  }\n\n  .flash-message {\n    font-size: 0.6em;\n    display: block;\n    color: rgba(91, 87, 87, 0.544);\n  }\n\n  .btn-link,\n  .btn-link:active,\n  .btn-link:visited {\n    margin: 0.5%;\n    color: #635d5d;\n  }\n"]))),Le=v.a.button(xe||(xe=Object(u.a)(["\n  margin: 0.5%;\n  color: #635d5d;\n  background: transparent;\n  border: none;\n  font-size: 1rem;\n\n  &:active,\n  &:visited,\n  a {\n    color: #635d5d;\n    text-decoration: none;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),Ge=v.a.div(ke||(ke=Object(u.a)(["\n  padding-left: 1%;\n  padding-right: 1%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  .trail img {\n    max-height: 45vh;\n  }\n\n  .headline {\n    font-size: 2rem;\n  }\n\n  .subtext {\n    font-size: 1rem;\n  }\n\n  .map {\n    height: 65vh;\n    flex: 1 1 450px;\n  }\n"]))),ze=Object(p.g)((function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),p=u[0],h=u[1],g=Object(f.d)(P),v=g.trail,E=g.fromSearchPage,O=Object(f.d)(R).hikes,y=Object(f.d)(z).currentUserData,j=Object(f.d)(G),w=j.messages,x=j.alert,k=j.flashMessage,S=F(),N=K(),C=function(){var e=Object(f.c)();return function(a){e({type:"SET_TRAIL",payload:a})}}(),_=Te(),T=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes");case 2:a=e.sent,_(a.data.hikes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var a=Object(i.a)(o.a.mark((function a(){var t,n,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params,a.next=3,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/trails/".concat(t.slug));case 3:n=a.sent,r=n.data.trail,C(r),h(!0),O.find((function(e){return e.id===r.id}))&&c(!0);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();Object(n.useEffect)((function(){T(),I()}),[]);var L=function(){var a=Object(i.a)(o.a.mark((function a(){var t,n,r,l,s,i,m;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.match.params,a.next=3,b.a.post("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/add_hike",{user_id:y.user.id,trail_name:t.slug});case 3:n=a.sent,r=n.data,l=r.trail,s=r.error,"success"===r.status?("alert-success",i="".concat(l," added to favorites"),S("alert-success",[i]),c(!0)):("alert-danger",m="".concat(s),S("alert-danger",[m]));case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/delete_hike/".concat(v.id));case 2:a=e.sent,(t=a.data.error)?("alert-danger",r="".concat(t),S("alert-danger",[r])):("alert-success",n="".concat(v.name," removed from your hikes"),S("alert-success",[n]),c(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return v&&r.a.createElement(Ie,null,r.a.createElement(Ae,{className:"d-flex"},E?r.a.createElement(Le,{className:"headline"},r.a.createElement(d.b,{to:"/trails"},"Back to search")):r.a.createElement(Le,{className:"headline"},r.a.createElement(d.b,{to:"/myhikes"},"Back to hikes")),l?r.a.createElement(Le,{onClick:U,className:"headline"},"Remove from favorite hikes"):r.a.createElement(Le,{onClick:L,className:"headline"},"Add to favorite hikes"),k&&w.map((function(e){return r.a.createElement(A,{key:e[0],unmount:N,message:e,alert:x,className:"subtext form-flash"})}))),r.a.createElement(Ge,null,r.a.createElement(Ne.a,{className:"trail"},r.a.createElement(Ne.a.Image,{src:v.imgMedium}),r.a.createElement(Ne.a.Caption,{className:"headline"},v.name),r.a.createElement(Ne.a.Caption,{className:"subtext"},"Length: ",v.length," miles"),r.a.createElement(Ne.a.Caption,{className:"subtext"},"Difficulty: ",v.difficulty),r.a.createElement(Ne.a.Caption,{className:"subtext"},"Location: ",v.location)),p&&r.a.createElement(_e,null)))})),Ue=function(){var e=Object(f.c)(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),l=t[0],c=t[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),d=u[0],h=u[1],g=Object(f.d)(z),v=g.latitude,E=g.longitude,O=Object(f.d)(U),x=O.distance,k=O.mileage,S=H();Object(n.useEffect)((function(){N()}),[v]);var N=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://www.hikingproject.com/data/get-trails?lat=".concat(v,"&lon=").concat(E,"&maxDistance=").concat(x,"&maxResults=300&key=200492212-d7400571b0620563169df18724f8dc46"),t={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/trails/associate_trails",data:{url:a}},h(!0),e.next=6,b()(t);case 6:n=e.sent,"Success"===n.data.status&&h(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var a=Object(i.a)(o.a.mark((function a(t){var n,r,l;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/trails/search",data:{distance:x,mileage:k,latitude:v,longitude:E}},a.next=4,b()(n);case 4:r=a.sent,l=r.data.trails,e({type:"SET_TRAILS",payload:l}),c(!0);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(L,null,v&&E&&!d?r.a.createElement(y.a,{className:"form-card"},r.a.createElement(j.a,{onSubmit:C},r.a.createElement(j.a.Label,{className:"headline"},"How many miles are you willing to travel from your current location?"),r.a.createElement(j.a.Group,{controlId:"distance"},r.a.createElement(j.a.Control,{as:"select",name:"distance",value:x,onChange:S,className:"subtext"},r.a.createElement("option",null,"60"),r.a.createElement("option",null,"100"),r.a.createElement("option",null,"150"))),r.a.createElement(j.a.Label,{className:"headline"},"How many miles do you want to hike?"),r.a.createElement(j.a.Group,{controlId:"mileage"},r.a.createElement(j.a.Control,{as:"select",name:"mileage",value:k,onChange:S,className:"subtext"},r.a.createElement("option",null,"Less than 3"),r.a.createElement("option",null,"3 to 5"),r.a.createElement("option",null,"6 to 9"))),r.a.createElement(j.a.Group,{controlId:"formGroupSubmit",className:"headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Find Trails")),l&&r.a.createElement(p.a,{to:"/trails"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{animation:"border",role:"status"}),r.a.createElement("p",{className:"headline"},"Processing location. If this is your first login it may take a minute...")))};var Pe,Re,Me,He,De,Fe,Ke,Ve,Be,qe,We,Xe,Ze,Qe,Ye,$e,Je=Object(p.g)((function(e){var a=Object(f.d)(R).hikes,t=Te();(function(){var e=Object(f.c)();return function(a){e({type:"SET_PREVIOUS_PAGE",payload:a})}})()(e.location);var l=function(){var e=Object(i.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes");case 2:a=e.sent,n=a.data.hikes,t(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);return r.a.createElement(Oe,null,null===a||void 0===a?void 0:a.map((function(e){var a=e.id,t=e.name,n=e.length,l=e.difficulty,c=e.location,s=e.imgMedium;return r.a.createElement(Ee,{key:a,trailName:t,image:s,length:n,difficulty:l,location:c})})))})),ea=Object(v.b)(Pe||(Pe=Object(u.a)(["\n    0% {\n        opacity: 0;\n        transform: translateX(-6rem);\n    }\n    80% {\n        opacity: .80;\n        transform: translateX(1rem);\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),aa=Object(v.b)(Re||(Re=Object(u.a)(["\n    0% {\n        opacity: 0;\n        transform: translateX(6rem);\n    }\n    80% {\n        opacity: .80;\n        transform: translateX(-1rem);\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),ta=v.a.div(Me||(Me=Object(u.a)(["\n  display: flex;\n  padding: 1rem 2rem;\n  color: #635d5d;\n\n  @media screen and (max-width: 1000px) {\n    flex-direction: column;\n    padding: 0 1rem;\n    margin: auto 0;\n  }\n"]))),na=v.a.div(He||(He=Object(u.a)(['\n  padding-left: 8rem;\n  font-family: "Lato", sans-serif;\n  font-weight: 200;\n  animation: 1.5s '," ease-out;\n\n  @media screen and (max-width: 1000px) {\n    padding-left: 0;\n  }\n"])),ea),ra=v.a.h1(De||(De=Object(u.a)(['\n  font-family: "Quicksand", sans-serif;\n  font-weight: 600;\n  font-size: 3.5rem;\n  text-align: left;\n  letter-spacing: 0.6rem;\n  padding-top: 5rem;\n\n  @media screen and (max-width: 1024px) {\n    font-size: 2rem;\n    text-align: center;\n    padding-top: 0;\n  }\n']))),la=v.a.div(Fe||(Fe=Object(u.a)(["\n  text-align: left;\n  font-size: 1rem;\n  padding-left: 0.8rem;\n  letter-spacing: 1rem;\n\n  @media screen and (max-width: 1024px) {\n    text-align: center;\n    margin-bottom: 1rem;\n    padding: 0;\n  }\n"]))),ca=v.a.img(Ke||(Ke=Object(u.a)(["\n  width: 50%;\n  border-radius: 2px;\n  animation: 1.5s "," ease-out;\n\n  @media screen and (max-width: 1024px) {\n    width: 100%;\n  }\n"])),aa),sa=function(){return r.a.createElement(ta,null,r.a.createElement(na,null,r.a.createElement(ra,null,"Welcome to Trailblaze"),r.a.createElement(la,null,"The woods await")),r.a.createElement(ca,{src:"/trailblaze-frontend/trail.jpeg",alt:""}))},oa=v.a.div(Ve||(Ve=Object(u.a)(["\n  color: #635d5d;\n  padding: 2rem 3rem;\n  display: flex;\n\n  @media screen and (max-width: 1000px) {\n    flex-direction: column-reverse;\n    padding: 0 1rem;\n    margin-top: 5rem;\n  }\n"]))),ia=v.a.div(Be||(Be=Object(u.a)(["\n  margin: 0 3rem;\n  width: auto;\n  padding: 3rem;\n\n  @media screen and (max-width: 1000px) {\n    padding: 0 0.3rem;\n    margin: 1rem 1rem 0 1rem;\n  }\n"]))),ma=v.a.h1(qe||(qe=Object(u.a)(["\n  text-align: left;\n  letter-spacing: 0.3rem;\n\n  @media screen and (max-width: 1000px) {\n    margin-bottom: 0;\n    text-align: center;\n  }\n"]))),ua=v.a.p(We||(We=Object(u.a)(["\n  font-size: 1rem;\n\n  text-align: left;\n  line-height: 1.5rem;\n\n  @media screen and (max-width: 1000px) {\n    padding: 0.5rem 0;\n    text-align: center;\n  }\n"]))),da=v.a.img(Xe||(Xe=Object(u.a)(["\n  width: 55%;\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n  }\n"]))),pa=function(){return r.a.createElement(oa,null,r.a.createElement(ia,null,r.a.createElement(ma,null,"About"),r.a.createElement(ua,{className:"subtext"},"Trailblaze is a location based trail-finding application. Plug in how far you're willing to travel and how many miles you'd like to hike and choose from the results to get directions to the trailhead. You can also save any trails that you've hiked and enjoyed or want to hike some other time so you can pull them up easily in the future.")),r.a.createElement(da,{src:"/trailblaze-frontend/chris-rosiak-wMloxuYrjt0-unsplash.jpg",alt:""}))},fa=v.a.div(Ze||(Ze=Object(u.a)(['\n  text-align: center;\n\n  .btn:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .headline {\n    font-family: "Quicksand", sans-serif;\n  }\n  .subtext {\n    font-family: "Lato", sans-serif;\n  }\n']))),ha=v.a.div(Qe||(Qe=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),ba=v.a.div(Ye||(Ye=Object(u.a)(["\n  background-color: #ffffff21;\n  margin-top: 7rem;\n  min-height: 71vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  color: black;\n\n  @media screen and (max-width: 1024px) {\n    margin-top: 2rem;\n    padding: 0 2rem;\n    min-height: 82vh;\n  }\n\n  @media screen and (max-width: 600px) {\n    min-height: 73vh;\n  }\n"]))),ga=v.a.footer($e||($e=Object(u.a)(["\n  background: #d8d8d829;\n  color: #635d5d;\n  padding: 1.1rem 0;\n  width: 100%;\n\n  p {\n    margin: 0;\n    font-size: 1.1em;\n  }\n\n  .navbar-link {\n    font-size: 0.8rem;\n  }\n\n  a {\n    color: #909090;\n  }\n\n  a:hover {\n    color: #5a5858;\n  }\n"]))),va=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(f.c)(),s=E();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userId")){e.next=6;break}return e.next=3,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/logged_in",{withCredentials:!0});case 3:a=e.sent,s({coords:{latitude:localStorage.getItem("latitude"),longitude:localStorage.getItem("longitude")}}),c({type:"SET_USER",payload:a.data});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),l(!0)}),[]),r.a.createElement(fa,null,t&&r.a.createElement(ha,null,r.a.createElement(d.a,null,r.a.createElement("header",null,r.a.createElement(pe,null)),r.a.createElement(ba,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(sa,null)),r.a.createElement(p.b,{exact:!0,path:"/signup"},r.a.createElement(q,null)),r.a.createElement(p.b,{exact:!0,path:"/login"},r.a.createElement(W,null)),r.a.createElement(p.b,{exact:!0,path:"/account"},r.a.createElement(oe,null)),r.a.createElement(p.b,{exact:!0,path:"/update-account"},r.a.createElement(X,null)),r.a.createElement(p.b,{exact:!0,path:"/trailsearch"},r.a.createElement(Ue,null)),r.a.createElement(p.b,{exact:!0,path:"/trails/:slug",component:ze}),r.a.createElement(p.b,{exact:!0,path:"/myhikes"},r.a.createElement(Je,null)),r.a.createElement(p.b,{exact:!0,path:"/trails"},r.a.createElement(Se,null)),r.a.createElement(p.b,{exact:!0,path:"/about"},r.a.createElement(pa,null)))),r.a.createElement(ga,{className:"subtext"},r.a.createElement("p",null,"Trailblaze 2021"),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement(d.b,{className:"nav-link navbar-link",to:"/about"},"About"),r.a.createElement("a",{href:"mailto: smitham50@gmail.com",className:"nav-link navbar-link"},"Contact"))))))},Ea=t(61);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oa=t(14),ya={currentUserData:{},latitude:null,longitude:null};var ja=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ya,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return Object(Oa.a)(Object(Oa.a)({},e),{},{currentUserData:a.payload});case"CLEAR_USER":return Object(Oa.a)(Object(Oa.a)({},e),{},{latitude:"",longitude:"",currentUserData:{}});case"SET_LOCATION":var t=a.payload.coords;return localStorage.getItem("latitude")||(localStorage.setItem("latitude",t.latitude),localStorage.setItem("longitude",t.longitude)),Object(Oa.a)(Object(Oa.a)({},e),{},{latitude:t.latitude,longitude:t.longitude});default:return e}},wa={distance:60,mileage:"Less than 3",difficulty:"",trails:[]};var xa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HANDLE_CHANGE":var t=Object.keys(a.payload)[0];return Object(Oa.a)(Object(Oa.a)({},e),{},Object(M.a)({},t,a.payload[t]));case"SET_TRAILS":return localStorage.removeItem("trails"),localStorage.trails=a.payload.map((function(e){return e.id})),Object(Oa.a)(Object(Oa.a)({},e),{},{trails:a.payload});default:return e}},ka={trail:null,fromSearchPage:!1};var Sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ka,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TRAIL":return Object(Oa.a)(Object(Oa.a)({},e),{},{trail:a.payload});case"SET_PREVIOUS_PAGE":var t="trails"===a.payload.pathname.slice(1,7);return Object(Oa.a)(Object(Oa.a)({},e),{},{fromSearchPage:t});default:return e}},Na={hikes:[]};var Ca=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Na,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_HIKES":return Object(Oa.a)(Object(Oa.a)({},e),{},{hikes:a.payload});default:return e}},_a={flashMessage:!1,alert:"",messages:[],username:"",password:"",passwordConfirmation:"",email:""};var Ta=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_a,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FLASH_MESSAGE":var t=a.payload,n=t.alert,r=t.messages;return Object(Oa.a)(Object(Oa.a)({},e),{},{flashMessage:!0,alert:n,messages:r});case"UNMOUNT_FLASH_MESSAGE":return Object(Oa.a)(Object(Oa.a)({},e),{},{flashMessage:!1,alert:"",messages:[]});case"HANDLE_CHANGE":var l=Object.keys(a.payload)[0];return Object(Oa.a)(Object(Oa.a)({},e),{},Object(M.a)({},l,a.payload[l]));default:return e}},Ia=Object(Ea.a)({user:ja,trailSearch:xa,trailShow:Sa,myHikes:Ca,form:Ta}),Aa=Object(Ea.b)(Ia);b.a.defaults.xsrfCookieName="CSRF-TOKEN",b.a.defaults.xsrfHeaderName="X-CSRF-Token",b.a.defaults.withCredentials=!0,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:Aa},r.a.createElement(va,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t(109)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.bea28e19.chunk.js.map