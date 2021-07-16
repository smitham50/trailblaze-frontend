(this["webpackJsonptrailblaze-frontend"]=this["webpackJsonptrailblaze-frontend"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t.n(l),c=(t(84),t(6)),o=t.n(c),i=t(10),u=t(15),m=t(7),d=t(14),p=t(12),f=t(9),h=t(11),b=t.n(h),g=(t(105),t(115)),v=t(8);function E(){var e=Object(f.c)();return function(a){e({type:"SET_LOCATION",payload:a})}}var y,O=t(118),k=t(114),w=t(111),j=t(41),x=t(37),S=function(e){alert(e.message)},N=function(e){navigator.geolocation.getCurrentPosition(e,S,{enableHighAccuracy:!0,timeout:5e3})},_=t(26),C=t(27),T=t(35),A=t(34),I=function(e){Object(T.a)(t,e);var a=Object(A.a)(t);function t(){return Object(_.a)(this,t),a.apply(this,arguments)}return Object(C.a)(t,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setTimer",value:function(){null!=this._timer&&clearTimeout(this._timer),this._timer=setTimeout(function(){this.props.unmount(),this._timer=null}.bind(this),4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"flash-message alert ".concat(this.props.alert)},r.a.createElement("p",{className:"small"},this.props.message))}}]),t}(n.Component),L=v.a.div(y||(y=Object(m.a)(["\n    margin: auto 0;\n\n    .form-card {\n        width: 25rem;\n        padding: 1rem;\n    }\n    form {\n        width: 100%;\n    }\n    .flash-container {\n        position: relative;\n    }\n    .form-flash {\n        position: absolute;\n    }\n    .subtext {\n        font-size: .9rem;\n    }\n    .headline {\n        font-size: 1.1rem;\n    }\n    .btn-success {\n        background: #a7a7a7;\n        border-color: #8c8c8c;\n        &:hover {\n            background: #848383;\n        }\n    }\n"]))),U=function(e){return e.form},G=function(e){return e.user},P=function(e){return e.trailSearch},H=t(19);function M(e){var a=Object(f.c)();return function(e){a({type:"HANDLE_CHANGE",payload:Object(H.a)({},e.target.name,e.target.value)})}}function z(){var e=Object(f.c)();return function(a){e({type:"SET_USER",payload:a})}}function D(){var e=Object(f.c)();return function(a,t){e({type:"SET_FLASH_MESSAGE",payload:{alert:a,messages:t}})}}function F(){var e=Object(f.c)();return function(){e({type:"UNMOUNT_FLASH_MESSAGE"})}}var R=function(){var e=Object(f.d)(G).currentUserData,a=M(),t=z(),n=E(),l=D(),s=F(),c=Object(f.d)(U),u=c.username,m=c.password,h=c.passwordConfirmation,g=c.email,v=c.messages,y=c.alert,S=c.flashMessage,_=Object(j.b)(),C=_.handleSubmit,T=_.register,A=_.errors,P=function(){var e=Object(i.a)(o.a.mark((function e(){var a,r,s,c,i,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/signup",data:{user:{username:u,password:m,password_confirmation:h,email:g}}},e.next=4,b()(a);case 4:r=e.sent,s=r.data,c=s.errors,i=s.user,d=r.data,c?l("alert-danger",c):(t(d),N(n),localStorage.setItem("userId",i.id));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(L,null,r.a.createElement("div",{className:"flash-container"},S?v.map((function(e){return r.a.createElement(I,{key:e[0],unmount:s,message:e,alert:y,className:"subtext form-flash"})})):r.a.createElement("div",{className:"form-flash"})),r.a.createElement(O.a,{className:"form-card"},r.a.createElement(k.a,{onSubmit:C(P)},r.a.createElement(k.a.Group,{controlId:"username"},r.a.createElement(k.a.Label,{className:"headline"},"Username"),r.a.createElement(k.a.Control,{type:"text",placeholder:"Enter username",onChange:a,defaultValue:u,name:"username",className:"subtext",ref:T({required:"Username cannot be blank"})}),r.a.createElement(x.a,{errors:A,name:"username",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(k.a.Group,{controlId:"formGroupEmail"},r.a.createElement(k.a.Label,{className:"headline"},"Email address"),r.a.createElement(k.a.Control,{type:"text",placeholder:"Enter email",onChange:a,defaultValue:g,name:"email",className:"subtext",ref:T({required:"Email cannot be blank",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),r.a.createElement(x.a,{errors:A,name:"email",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(k.a.Group,{controlId:"formGroupPassword"},r.a.createElement(k.a.Label,{className:"headline"},"Password"),r.a.createElement(k.a.Control,{type:"password",placeholder:"Password",onChange:a,defaultValue:m,name:"password",className:"subtext",ref:T({required:"Password cannot be blank",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,message:"Password must be between 6 and 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"}})}),r.a.createElement(x.a,{errors:A,name:"password",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(k.a.Group,{controlId:"formGroupPasswordConfirmation"},r.a.createElement(k.a.Label,{className:"headline"},"Password Confirmation"),r.a.createElement(k.a.Control,{type:"password",placeholder:"Password Confirmation",onChange:a,defaultValue:h,name:"passwordConfirmation",className:"subtext",ref:T({required:"Password confirmation cannot be blank",validate:function(e){return e===m||"Passwords must match"}})}),r.a.createElement(x.a,{errors:A,name:"passwordConfirmation",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"small headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Submit")),r.a.createElement(k.a.Group,{className:"small subtext"},"Already have an account?  ",r.a.createElement(d.b,{to:"/login"},"Login")))),e&&e.logged_in&&r.a.createElement(p.a,{to:"/trailsearch"}))},K=function(){var e=M(),a=z(),t=E(),n=D(),l=F(),s=Object(f.d)(G).currentUserData,c=Object(f.d)(U),u=c.username,m=c.password,h=c.messages,g=c.alert,v=c.flashMessage,y=Object(j.b)(),S=y.handleSubmit,_=y.register,C=y.errors,T=function(){var e=Object(i.a)(o.a.mark((function e(){var r,l,s,c,i,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/login",data:{user:{username:u,password:m}}},e.next=4,b()(r);case 4:l=e.sent,s=l.data,c=s.errors,i=s.user,d=l.data,c?n("alert-danger",c):(a(d),N(t),localStorage.setItem("userId",i.id));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(L,null,r.a.createElement("div",{className:"flash-container"},v?h.map((function(e){return r.a.createElement(I,{key:e[0],unmount:l,message:e,alert:g,className:"subtext form-flash"})})):r.a.createElement("div",{className:"form-flash"})),r.a.createElement(O.a,{className:"form-card"},r.a.createElement(k.a,{onSubmit:S(T)},r.a.createElement(k.a.Group,{controlId:"username"},r.a.createElement(k.a.Label,{className:"headline"},"Username"),r.a.createElement(k.a.Control,{type:"text",placeholder:"Enter username",onChange:e,name:"username",defaultValue:u,className:"subtext",ref:_({required:"Username cannot be blank"})}),r.a.createElement(x.a,{errors:C,name:"username",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(k.a.Group,{controlId:"formGroupPassword"},r.a.createElement(k.a.Label,{className:"headline"},"Password"),r.a.createElement(k.a.Control,{type:"password",placeholder:"Password",onChange:e,name:"password",defaultValue:m,className:"subtext",ref:_({required:"Password cannot be blank"})}),r.a.createElement(x.a,{errors:C,name:"password",render:function(e){var a=e.message;return r.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),r.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"small headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Submit")),r.a.createElement(k.a.Group,{className:"small subtext"},"Don't have an account?  ",r.a.createElement(d.b,{to:"/signup"},"Signup")))),s&&s.logged_in&&r.a.createElement(p.a,{to:"/trailsearch"}))};var V,B,q=Object(f.b)((function(e){return{currentUserData:e.user.currentUserData}}),null)((function(e){var a=e.currentUserData.user,t=Object(n.useState)(""),l=Object(u.a)(t,2),s=l[0],c=l[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),p=d[0],f=d[1],h=Object(n.useState)(!1),g=Object(u.a)(h,2),v=g[0],E=g[1],y=Object(n.useState)(""),j=Object(u.a)(y,2),x=j[0],S=j[1],N=Object(n.useState)(""),_=Object(u.a)(N,2),C=_[0],T=_[1];window.setUsername=c,window.setEmail=f;var A=function(){var e=Object(i.a)(o.a.mark((function e(t){var n,r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={user:{username:s||a.username,email:p||a.email}},r={method:"patch",url:"https://nameless-wave-57808.herokuapp.com/api/v1/update_account",data:n},e.next=5,b()(r);case 5:(l=e.sent).data.error?(E(!0),T(l.data.message),S("alert-danger")):(E(!0),T(l.data.message),S("alert-success"));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),U=function(e){var a=e.target.name;(0,window["set".concat(a)])(e.target.value)};return r.a.createElement(L,null,r.a.createElement(O.a,{className:"form-card"},r.a.createElement(k.a,{onSubmit:A},r.a.createElement(k.a.Group,null,v?r.a.createElement(I,{unmount:function(){E(!1),T("")},message:C,alert:x,className:"subtext"}):r.a.createElement("span",null)),r.a.createElement(k.a.Group,{controlId:"username"},r.a.createElement(k.a.Label,{className:"headline"},"Update username"),r.a.createElement(k.a.Control,{type:"text",placeholder:"".concat(null===a||void 0===a?void 0:a.username),onChange:U,name:"Username",className:"subtext",value:s})),r.a.createElement(k.a.Group,{controlId:"formGroupEmail"},r.a.createElement(k.a.Label,{className:"headline"},"Update email address"),r.a.createElement(k.a.Control,{type:"text",placeholder:"".concat(null===a||void 0===a?void 0:a.email),onChange:U,name:"Email",className:"subtext",value:p})),r.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"small headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Submit")))))})),W=t(113),X=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],s=t[1],c=function(){return s(!1)};Object(n.useEffect)((function(){s(!0)}),[]);return r.a.createElement(n.Fragment,null,r.a.createElement(W.a,{show:l,onHide:c},r.a.createElement(W.a.Header,{closeButton:!0},r.a.createElement(W.a.Title,null,"Cancel Account")),r.a.createElement(W.a.Body,{className:"subtext"},e.message),r.a.createElement(W.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",className:"headline",onClick:c},"No"),r.a.createElement(w.a,{variant:"primary",className:"headline",onClick:function(){e.handleCancelAccount(),c()}},"Yes"))))},Z=v.a.div(V||(V=Object(m.a)(["\n    display: flex;\n    a:link, a:visited {\n        color:  #1c1b1be1;\n    }\n    a:hover {\n        color:  #7d7a7ae1;\n    }\n    .headline {\n        font-family: 'Amatic SC', cursive;\n    }\n    .marginal {\n        margin: 2%;\n    }\n    .button-sized {\n        font-size: 1.2em;\n    }\n"]))),Q=v.a.div(B||(B=Object(m.a)(["\n    margin: 0 8rem;\n\n    @media screen and (max-width: 1000px) {\n        margin 0 2rem;\n    }\n"])));var Y,$,J,ee=Object(p.g)(Object(f.b)(null,(function(e){return{clearUser:function(){e({type:"CLEAR_USER"})}}}))((function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],s=t[1],c=Object(n.useState)(""),m=Object(u.a)(c,2),p=m[0],f=m[1],h=function(){var a=Object(i.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.clear(),e.clearUser(),a.next=4,b.a.delete("https://nameless-wave-57808.herokuapp.com/api/v1/cancel_account");case 4:a.sent.errors||e.history.push("/");case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,l?r.a.createElement(X,{handleCancelAccount:h,message:p}):null,r.a.createElement(Z,null,r.a.createElement(Q,null,r.a.createElement(d.b,{to:"/update-account",className:"headline"},r.a.createElement("i",{className:"fas fa-edit fa-3x marginal"}),r.a.createElement("p",{className:"button-sized"},"Update Account"))),r.a.createElement(Q,null,r.a.createElement(d.b,{to:"#",onClick:function(){f("Are you sure you want to cancel your account?"),s(!0)},className:"headline"},r.a.createElement("i",{className:"fas fa-ban fa-3x marginal"}),r.a.createElement("p",{className:"button-sized"},"Cancel Account")))))}))),ae=t(116),te=v.a.div(Y||(Y=Object(m.a)(["\n    .navbar-link {\n        text-decoration: none;\n    }\n\n    .navbar-dark .navbar-nav .nav-link {\n        color: white;\n        transition: .3s;\n    }\n    \n    a {\n        margin: 0 1em;\n    }\n"]))),ne=Object(v.a)(ae.a.Brand)($||($=Object(m.a)(["\n    font-size: 1.7em;\n    font-weight: 700;\n    font-family: 'Quicksand', sans-serif;\n    letter-spacing: .4rem;\n\n    @media screen and (max-width: 1000px) {\n        font-size: 1.3rem;\n        letter-spacing: .2rem;\n    }\n"]))),re=v.a.img(J||(J=Object(m.a)(["\n    height: 50px;\n    width: 50px;\n"])));var le,se,ce,oe,ie,ue=Object(f.b)((function(e){var a=e.user;return{currentUserData:a.currentUserData,latitude:a.latitude,longitude:a.longitude}}),(function(e){return{clearUser:function(){e({type:"CLEAR_USER"})}}}))((function(e){var a=function(){var a=Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.clear(),a.next=3,b.a.post("https://nameless-wave-57808.herokuapp.com/api/v1/logout");case 3:(t=a.sent).errors?alert(t.errors):e.clearUser();case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement(te,null,r.a.createElement(ae.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top",collapseOnSelect:!0},r.a.createElement(g.a.Link,{as:d.b,eventKey:"1",to:"/"},r.a.createElement(ne,null,r.a.createElement(re,{src:"/trailblaze-frontend/noun_Trail_2056927.svg",alt:"brand",loading:"lazy"}),"   Trailblaze")),r.a.createElement(ae.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(ae.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(g.a,{className:"ml-auto"},e.currentUserData.logged_in?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,{as:d.b,eventKey:"2",to:"/trailsearch"},"Find a Trail"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"3",to:"/myhikes"},"My Hikes"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"4",to:"/account"},"Account"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"5",to:"/",onClick:a},"Logout ",e.currentUserData.user.username)):r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a.Link,{as:d.b,eventKey:"6",to:"/signup"},"Signup"),r.a.createElement(g.a.Link,{as:d.b,eventKey:"7",to:"/login"},"Login"))))))})),me=t(112),de=v.a.div(le||(le=Object(m.a)(["\n    position: relative;\n"]))),pe=v.a.img(se||(se=Object(m.a)(["\n    width: 100%;\n    vertical-align: top;\n"]))),fe=v.a.div(ce||(ce=Object(m.a)(["\n    position: absolute;\n    background-color: #3e3d3d2e;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n"]))),he=v.a.div(oe||(oe=Object(m.a)(["\n    position: absolute;\n    top: 3rem;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: white;\n    .headline {\n        font-size: 1rem;\n        font-weight: 700;\n    }\n    .subtext {\n        font-size: .8rem;\n    }\n"]))),be=function(e){var a=Object(n.useState)(0),t=Object(u.a)(a,2),l=t[0],s=t[1],c=Object(n.useRef)(null);Object(n.useEffect)((function(){try{c.current.addEventListener("load",o)}catch(e){console.log(e)}}),[]);var o=function(){var e=c.current.clientHeight,a=Math.ceil(e/10);s(a)};return r.a.createElement(d.b,{to:"/trails/".concat(encodeURIComponent(e.trailName)),style:{gridRowEnd:"span ".concat(l)}},r.a.createElement(de,{className:"trail"},r.a.createElement(pe,{src:e.image,ref:c,alt:e.trailName}),r.a.createElement(fe,null),r.a.createElement(he,null,r.a.createElement("p",{className:"headline"},r.a.createElement("strong",null,e.trailName)),r.a.createElement("p",{className:"subtext"},e.location))))},ge=v.a.div(ie||(ie=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-gap: 0 10px;\n    grid-auto-rows: 10.1px;\n    width: 100%;\n    margin-bottom: 1rem;\n"]))),ve=function(e){Object(T.a)(t,e);var a=Object(A.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).renderTrails=function(){return e.props.trails.map((function(e){return r.a.createElement(be,{key:e.id,trailName:e.name,image:e.imgMedium,length:e.length,difficulty:e.difficulty,location:e.location})}))},e}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.trails.length){e.next=8;break}return t={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/search_reload",data:{trail_ids:null===(a=localStorage.trails)||void 0===a?void 0:a.split(",").map((function(e){return e}))}},e.next=4,b()(t);case 4:n=e.sent,r=n.data.trails,(0,this.props.setTrails)(r);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.trails,t=e.setPreviousPage,n=e.location,l=this.renderTrails;return t(n),r.a.createElement(r.a.Fragment,null,a.length?r.a.createElement(ge,null,l()):r.a.createElement(me.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Searching for trails")))}}]),t}(n.PureComponent);var Ee=Object(p.g)(Object(f.b)((function(e){var a=e.user;return{latitude:a.latitude,longitude:a.longitude,trails:e.trailSearch.trails}}),(function(e){return{setTrails:function(a){e({type:"SET_TRAILS",payload:a})},setPreviousPage:function(a){e({type:"SET_PREVIOUS_PAGE",payload:a})}}}))(ve)),ye=t(117),Oe=t(78),ke=function(e){Object(T.a)(t,e);var a=Object(A.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={center:{lat:parseFloat(e.props.trail.latitude),lng:parseFloat(e.props.trail.longitude)},zoom:11,key:"",directions:null},e.handleDirections=function(a){var t={lat:parseFloat(localStorage.latitude),lng:parseFloat(localStorage.longitude)},n={lat:e.state.center.lat,lng:e.state.center.lng},r=new a.maps.DirectionsService,l=new a.maps.DirectionsRenderer;l.setMap(a.map),r.route({travelMode:"DRIVING",origin:t,destination:n},(function(e,a){"OK"===a&&l.setDirections(e)}))},e}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://nameless-wave-57808.herokuapp.com/api/v1/map_auth");case 2:a=e.sent,this.setState({key:a.data.key.replace(/\s/g,"")});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.key,t=e.center,n=e.zoom;return r.a.createElement("div",{className:"map"},a?r.a.createElement(Oe.a,{bootstrapURLKeys:{key:a},center:t,defaultZoom:n,onGoogleApiLoaded:this.handleDirections,yesIWantToUseGoogleMapApiInternals:!0}):null)}}]),t}(n.PureComponent);var we,je,xe,Se,Ne=Object(f.b)((function(e){return{trail:e.trailShow.trail}}),null)(ke),_e=v.a.div(we||(we=Object(m.a)(["\n    width: 100%;\n"]))),Ce=v.a.div(je||(je=Object(m.a)(["\n    margin-bottom: 1vh;\n    & > * {\n        margin: 0 .5%;\n    }\n    .flash-message {\n        font-size: .6em;\n        display: block;\n        color: rgba(91, 87, 87, 0.544);\n    }\n    .btn-link, \n    .btn-link:active,\n    .btn-link:visited {\n        margin: .5%;\n        color: #635d5d\n    }\n"]))),Te=v.a.button(xe||(xe=Object(m.a)(["\n    margin: .5%;\n    color: #635d5d;\n    background: transparent;\n    border: none;\n    font-size: 1rem;\n\n    &:active,\n    &:visited,\n    a {\n        color: #635d5d;\n        text-decoration: none;\n    }\n\n    &:hover {\n        text-decoration: underline;\n    }\n"]))),Ae=v.a.div(Se||(Se=Object(m.a)(["\n    padding-left: 1%;\n    padding-right: 1%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    .trail img {\n        max-height: 45vh;\n    }\n\n    .headline {\n        font-size: 2rem;\n    }\n\n    .subtext {\n        font-size: 1rem;\n    }\n\n    .map {\n        height: 65vh;\n        flex: 1 1 450px;\n    }\n"]))),Ie=function(e){Object(T.a)(t,e);var a=Object(A.a)(t);function t(){var e;Object(_.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={inHikes:!1,trailSet:!1},e.addTrailToHikes=Object(i.a)(o.a.mark((function a(){var t,n,r,l,s,c,i,u,m,d,p;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props,n=t.match.params,r=t.currentUserData,a.next=3,b.a.post("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/add_hike",{user_id:r.user.id,trail_name:n.slug});case 3:l=a.sent,s=l.data,c=s.trail,i=s.error,u=s.status,m=e.props.setFlashMessage,"success"===u?("alert-success",d="".concat(c," added to favorites"),m([d],"alert-success"),e.setState({inHikes:!0})):("alert-danger",p="".concat(i),m([p],"alert-danger"));case 7:case"end":return a.stop()}}),a)}))),e.removeTrailFromHikes=Object(i.a)(o.a.mark((function a(){var t,n,r,l,s,c,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.delete("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/delete_hike/".concat(e.props.trail.id));case 2:t=a.sent,n=t.data.error,r=e.props,l=r.trail,s=r.setFlashMessage,n?("alert-danger",i="".concat(n),s([i],"alert-danger")):("alert-success",c="".concat(l.name," removed from your hikes"),s([c],"alert-success"),e.setState({inHikes:!1}));case 6:case"end":return a.stop()}}),a)}))),e.renderFlashMessage=function(){var a=e.props,t=a.messages,n=a.alert,l=a.unmountFlashMessage;return t.map((function(e){return r.a.createElement(I,{key:e[0],unmount:l,message:e,alert:n,className:"subtext form-flash"})}))},e.backToPreviousPage=function(){},e}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n,r,l=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes").then((function(e){l.props.setHikes(e.data.hikes)}));case 2:a=this.props,t=a.match.params,n=a.setTrail,r=a.hikes,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/trails/".concat(t.slug)).then((function(e){var a=e.data.trail;n(a),l.setState({trailSet:!0}),r.find((function(e){return e.id===a.id}))&&l.setState({inHikes:!0})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.trail,t=e.flashMessage,n=e.fromSearchPage,l=this.state,s=l.inHikes,c=l.trailSet,o=this.addTrailToHikes,i=this.removeTrailFromHikes,u=this.renderFlashMessage;return a&&r.a.createElement(_e,null,r.a.createElement(Ce,{className:"d-flex"},n?r.a.createElement(Te,{className:"headline"},r.a.createElement(d.b,{to:"/trails"},"Back to search")):r.a.createElement(Te,{className:"headline"},r.a.createElement(d.b,{to:"/myhikes"},"Back to hikes")),s?r.a.createElement(Te,{onClick:i,className:"headline"},"Remove from favorite hikes"):r.a.createElement(Te,{onClick:o,className:"headline"},"Add to favorite hikes"),t?u():r.a.createElement("span",null)),r.a.createElement(Ae,null,r.a.createElement(ye.a,{className:"trail"},r.a.createElement(ye.a.Image,{src:a.imgMedium}),r.a.createElement(ye.a.Caption,{className:"headline"},a.name),r.a.createElement(ye.a.Caption,{className:"subtext small"},"Length: ",a.length," miles"),r.a.createElement(ye.a.Caption,{className:"subtext small"},"Difficulty: ",a.difficulty),r.a.createElement(ye.a.Caption,{className:"subtext small"},"Location: ",a.location)),c&&r.a.createElement(Ne,null)))}}]),t}(n.PureComponent);var Le=Object(p.g)(Object(f.b)((function(e){var a=e.user.currentUserData,t=e.trailShow,n=t.trail,r=t.fromSearchPage,l=e.myHikes.hikes,s=e.form;return{currentUserData:a,trail:n,hikes:l,messages:s.messages,alert:s.alert,flashMessage:s.flashMessage,fromSearchPage:r}}),(function(e){return{setTrail:function(a){e({type:"SET_TRAIL",payload:a})},setHikes:function(a){e({type:"SET_HIKES",payload:a})},setFlashMessage:function(a,t){e({type:"SET_FLASH_MESSAGE",payload:{alert:t,messages:a}})},unmountFlashMessage:function(){e({type:"UNMOUNT_FLASH_MESSAGE"})}}}))(Ie)),Ue=function(){var e=Object(f.c)(),a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],s=t[1],c=Object(n.useState)(!1),m=Object(u.a)(c,2),d=m[0],h=m[1],g=Object(f.d)(G),v=g.latitude,E=g.longitude,y=Object(f.d)(P),j=y.distance,x=y.mileage,S=M();Object(n.useEffect)((function(){N()}),[v]);var N=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://www.hikingproject.com/data/get-trails?lat=".concat(v,"&lon=").concat(E,"&maxDistance=").concat(j,"&maxResults=300&key=200492212-d7400571b0620563169df18724f8dc46"),t={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/trails/associate_trails",data:{url:a}},h(!0),e.next=6,b()(t);case 6:n=e.sent,"Success"===n.data.status&&h(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var a=Object(i.a)(o.a.mark((function a(t){var n,r,l;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/trails/search",data:{distance:j,mileage:x,latitude:v,longitude:E}},a.next=4,b()(n);case 4:r=a.sent,l=r.data.trails,e({type:"SET_TRAILS",payload:l}),s(!0);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(L,null,v&&E&&!d?r.a.createElement(O.a,{className:"form-card"},r.a.createElement(k.a,{onSubmit:_},r.a.createElement(k.a.Label,{className:"headline"},"How many miles are you willing to travel from your current location?"),r.a.createElement(k.a.Group,{controlId:"distance"},r.a.createElement(k.a.Control,{as:"select",name:"distance",value:j,onChange:S,className:"subtext"},r.a.createElement("option",null,"60"),r.a.createElement("option",null,"100"),r.a.createElement("option",null,"150"))),r.a.createElement(k.a.Label,{className:"headline"},"How many miles do you want to hike?"),r.a.createElement(k.a.Group,{controlId:"mileage"},r.a.createElement(k.a.Control,{as:"select",name:"mileage",value:x,onChange:S,className:"subtext"},r.a.createElement("option",null,"Less than 3"),r.a.createElement("option",null,"3 to 5"),r.a.createElement("option",null,"6 to 9"))),r.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"headline"},r.a.createElement(w.a,{variant:"success",type:"submit",block:!0},"Find Trails")),l&&r.a.createElement(p.a,{to:"/trails"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{animation:"border",role:"status"}),r.a.createElement("p",{className:"headline"},"Processing location. If this is your first login it may take a minute...")))};var Ge,Pe,He,Me,ze,De,Fe,Re,Ke,Ve,Be,qe,We,Xe,Ze,Qe,Ye=Object(p.g)(Object(f.b)((function(e){return{hikes:e.myHikes.hikes}}),(function(e){return{setHikes:function(a){e({type:"SET_HIKES",payload:a})},setPreviousPage:function(a){e({type:"SET_PREVIOUS_PAGE",payload:a})}}}))((function(e){var a=e.setHikes;(0,e.setPreviousPage)(e.location);var t=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes");case 2:t=e.sent,a(t.data.hikes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){t()}),[]);return r.a.createElement(ge,null,function(){var a;return null===(a=e.hikes)||void 0===a?void 0:a.map((function(e){var a=e.id,t=e.name,n=e.length,l=e.difficulty,s=e.location,c=e.imgMedium;return r.a.createElement(be,{key:a,trailName:t,image:c,length:n,difficulty:l,location:s})}))}())}))),$e=Object(v.b)(Ge||(Ge=Object(m.a)(["\n    0% {\n        opacity: 0;\n        transform: translateX(-6rem);\n    }\n    80% {\n        opacity: .80;\n        transform: translateX(1rem);\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),Je=Object(v.b)(Pe||(Pe=Object(m.a)(["\n    0% {\n        opacity: 0;\n        transform: translateX(6rem);\n    }\n    80% {\n        opacity: .80;\n        transform: translateX(-1rem);\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),ea=v.a.div(He||(He=Object(m.a)(["\n    display: flex;\n    padding: 1rem 2rem;\n    color: #635d5d;\n\n    @media screen and (max-width: 1000px) {\n        flex-direction: column;\n        padding: 0 1rem;\n        margin: auto 0;\n    }\n"]))),aa=v.a.div(Me||(Me=Object(m.a)(['\n    padding-left: 8rem;\n    font-family: "Lato", sans-serif;\n    font-weight: 200;\n    animation: 1.5s '," ease-out;\n\n    @media screen and (max-width: 1000px) {\n        padding-left: 0;\n    }\n"])),$e),ta=v.a.h1(ze||(ze=Object(m.a)(["\n    font-family: 'Quicksand', sans-serif;\n    font-weight: 600;\n    font-size: 3.5rem;\n    text-align: left;\n    letter-spacing: .6rem;\n    padding-top: 5rem;\n\n    @media screen and (max-width: 768px) {\n        font-size: 2rem;\n        text-align: center;\n        padding-top: 0;\n    }\n"]))),na=v.a.div(De||(De=Object(m.a)(["\n    text-align: left;\n    font-size: 1rem;\n    padding-left: .8rem;\n    letter-spacing: 1rem;\n\n    @media screen and (max-width: 1000px) {\n        text-align: center;\n        margin-bottom: 1rem;\n        padding: 0;\n    }\n"]))),ra=v.a.img(Fe||(Fe=Object(m.a)(["\n    width: 50%;\n    border-radius: 2px;\n    animation: 1.5s "," ease-out;\n\n    @media screen and (max-width: 1000px) {\n        width: 100%;\n    }\n"])),Je),la=function(){return r.a.createElement(ea,null,r.a.createElement(aa,null,r.a.createElement(ta,null,"Welcome to Trailblaze"),r.a.createElement(na,null,"The woods await")),r.a.createElement(ra,{src:"/trailblaze-frontend/trail.jpeg",alt:""}))},sa=v.a.div(Re||(Re=Object(m.a)(["\n  color: #635d5d;\n  padding: 2rem 3rem;\n  display: flex;\n\n  @media screen and (max-width: 1000px) {\n    flex-direction: column-reverse;\n    padding: 0 1rem;\n    margin-top: 5rem;\n  }\n"]))),ca=v.a.div(Ke||(Ke=Object(m.a)(["\n  margin: 0 3rem;\n  width: auto;\n  padding: 3rem;\n\n  @media screen and (max-width: 1000px) {\n    padding: 0 .3rem;\n    margin: 1rem 1rem 0 1rem;\n  }\n"]))),oa=v.a.h1(Ve||(Ve=Object(m.a)(["\n  text-align: left;\n  letter-spacing: .3rem;\n  \n  @media screen and (max-width: 1000px) {\n    margin-bottom: 0;\n    text-align: center;\n  }\n"]))),ia=v.a.p(Be||(Be=Object(m.a)(["\n  font-size: 1rem;\n  \n  text-align: left;\n  line-height: 1.5rem;\n\n  @media screen and (max-width: 1000px) {\n    padding: .5rem 0;\n    text-align: center;\n  }\n"]))),ua=v.a.img(qe||(qe=Object(m.a)(["\n  width: 55%;\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n  }\n"]))),ma=function(){return r.a.createElement(sa,null,r.a.createElement(ca,null,r.a.createElement(oa,null,"About"),r.a.createElement(ia,{className:"subtext"},"Trailblaze is a location based trail-finding application. Plug in how far you're willing to travel and how many miles you'd like to hike and choose from the results to get directions to the trailhead. You can also save any trails that you've hiked and enjoyed or want to hike some other time so you can pull them up easily in the future.")),r.a.createElement(ua,{src:"/trailblaze-frontend/chris-rosiak-wMloxuYrjt0-unsplash.jpg",alt:""}))},da=v.a.div(We||(We=Object(m.a)(['\n  text-align: center;\n\n  .btn:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .headline {\n    font-family: "Quicksand", sans-serif;\n  }\n  .subtext {\n    font-family: "Lato", sans-serif;\n  }\n']))),pa=v.a.div(Xe||(Xe=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),fa=v.a.div(Ze||(Ze=Object(m.a)(["\n  background-color: #ffffff21;\n  margin-top: 7rem;\n  min-height: 71vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  color: black;\n\n  @media screen and (max-width: 1000px) {\n    margin-top: 2rem;\n    padding: 0 2rem;\n    min-height: calc(90vh - 1.5rem);\n  }\n\n  @media screen and (max-width: 600px) {\n    min-height: 73vh;\n  }\n"]))),ha=v.a.footer(Qe||(Qe=Object(m.a)(["\n  background: #d8d8d829;\n  color: #635d5d;\n  padding: 1.1rem 0;\n  width: 100%;\n\n  p {\n    margin: 0;\n    font-size: 1.1em;\n  }\n\n  .navbar-link {\n    font-size: 0.8rem;\n  }\n\n  a {\n    color: #909090;\n  }\n\n  a:hover {\n    color: #5a5858;\n  }\n"]))),ba=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(f.c)(),c=E();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userId")){e.next=6;break}return e.next=3,b.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/logged_in",{withCredentials:!0});case 3:a=e.sent,c({coords:{latitude:localStorage.getItem("latitude"),longitude:localStorage.getItem("longitude")}}),s({type:"SET_USER",payload:a.data});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),l(!0)}),[]),r.a.createElement(da,null,t&&r.a.createElement(pa,null,r.a.createElement(d.a,null,r.a.createElement("header",null,r.a.createElement(ue,null)),r.a.createElement(fa,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(la,null)),r.a.createElement(p.b,{exact:!0,path:"/signup"},r.a.createElement(R,null)),r.a.createElement(p.b,{exact:!0,path:"/login"},r.a.createElement(K,null)),r.a.createElement(p.b,{exact:!0,path:"/account"},r.a.createElement(ee,null)),r.a.createElement(p.b,{exact:!0,path:"/update-account"},r.a.createElement(q,null)),r.a.createElement(p.b,{exact:!0,path:"/trailsearch"},r.a.createElement(Ue,null)),r.a.createElement(p.b,{exact:!0,path:"/trails/:slug",component:Le}),r.a.createElement(p.b,{exact:!0,path:"/myhikes"},r.a.createElement(Ye,null)),r.a.createElement(p.b,{exact:!0,path:"/trails"},r.a.createElement(Ee,null)),r.a.createElement(p.b,{exact:!0,path:"/about"},r.a.createElement(ma,null)))),r.a.createElement(ha,{className:"subtext"},r.a.createElement("p",null,"Trailblaze 2021"),r.a.createElement(g.a,{className:"justify-content-center"},r.a.createElement(d.b,{className:"nav-link navbar-link",to:"/about"},"About"),r.a.createElement("a",{href:"mailto: smitham50@gmail.com",className:"nav-link navbar-link"},"Contact"))))))},ga=t(61);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var va=t(13),Ea={currentUserData:{},latitude:null,longitude:null};var ya=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ea,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return Object(va.a)(Object(va.a)({},e),{},{currentUserData:a.payload});case"CLEAR_USER":return Object(va.a)(Object(va.a)({},e),{},{latitude:"",longitude:"",currentUserData:{}});case"SET_LOCATION":var t=a.payload.coords;return localStorage.getItem("latitude")||(localStorage.setItem("latitude",t.latitude),localStorage.setItem("longitude",t.longitude)),Object(va.a)(Object(va.a)({},e),{},{latitude:t.latitude,longitude:t.longitude});default:return e}},Oa={distance:60,mileage:"Less than 3",difficulty:"",trails:[]};var ka=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HANDLE_CHANGE":var t=Object.keys(a.payload)[0];return Object(va.a)(Object(va.a)({},e),{},Object(H.a)({},t,a.payload[t]));case"SET_TRAILS":return localStorage.removeItem("trails"),localStorage.trails=a.payload.map((function(e){return e.id})),Object(va.a)(Object(va.a)({},e),{},{trails:a.payload});default:return e}},wa={trail:null,fromSearchPage:!1};var ja=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TRAIL":return Object(va.a)(Object(va.a)({},e),{},{trail:a.payload});case"SET_PREVIOUS_PAGE":var t="trails"===a.payload.pathname.slice(1,7);return Object(va.a)(Object(va.a)({},e),{},{fromSearchPage:t});default:return e}},xa={hikes:[]};var Sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_HIKES":return Object(va.a)(Object(va.a)({},e),{},{hikes:a.payload});default:return e}},Na={flashMessage:!1,alert:"",messages:[],username:"",password:"",passwordConfirmation:"",email:""};var _a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Na,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FLASH_MESSAGE":var t=a.payload,n=t.alert,r=t.messages;return Object(va.a)(Object(va.a)({},e),{},{flashMessage:!0,alert:n,messages:r});case"UNMOUNT_FLASH_MESSAGE":return Object(va.a)(Object(va.a)({},e),{},{flashMessage:!1,alert:"",messages:[]});case"HANDLE_CHANGE":var l=Object.keys(a.payload)[0];return Object(va.a)(Object(va.a)({},e),{},Object(H.a)({},l,a.payload[l]));default:return e}},Ca=Object(ga.a)({user:ya,trailSearch:ka,trailShow:ja,myHikes:Sa,form:_a}),Ta=Object(ga.b)(Ca);b.a.defaults.xsrfCookieName="CSRF-TOKEN",b.a.defaults.xsrfHeaderName="X-CSRF-Token",b.a.defaults.withCredentials=!0,s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:Ta},r.a.createElement(ba,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t(109)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.245d358f.chunk.js.map