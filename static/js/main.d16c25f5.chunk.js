(this["webpackJsonptrailblaze-frontend"]=this["webpackJsonptrailblaze-frontend"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),s=t(17),c=t.n(s),o=(t(84),t(6)),i=t.n(o),u=t(8),m=t(15),d=t(9),p=t(14),f=t(12),h=t(7),b=t(11),g=t.n(b),v=(t(105),t(116)),E=t(10),y=t(119),k=t(115),O=t(111),j=t(41),w=t(37),S=function(e){alert(e.message)},x=function(e){navigator.geolocation.getCurrentPosition(e,S,{enableHighAccuracy:!0,timeout:5e3})},N=t(26),C=t(27),_=t(35),T=t(34),A=function(e){Object(_.a)(t,e);var a=Object(T.a)(t);function t(){return Object(N.a)(this,t),a.apply(this,arguments)}return Object(C.a)(t,[{key:"componentDidMount",value:function(){this.setTimer()}},{key:"setTimer",value:function(){null!=this._timer&&clearTimeout(this._timer),this._timer=setTimeout(function(){this.props.unmount(),this._timer=null}.bind(this),4e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this._timer)}},{key:"render",value:function(){return l.a.createElement("div",{className:"flash-message alert ".concat(this.props.alert)},l.a.createElement("p",{className:"small"},this.props.message))}}]),t}(r.Component),L=E.a.div(n||(n=Object(d.a)(["\n    .form-card {\n        width: 25rem;\n        padding: 1rem;\n    }\n    form {\n        width: 100%;\n    }\n    .flash-container {\n        position: relative;\n    }\n    .form-flash {\n        position: absolute;\n    }\n    .subtext {\n        font-family: Source Sans Pro, sans-serif;\n    }\n    .headline {\n        font-family: Amatic SC, cursive;\n    }\n    .btn-success {\n        background: #a7a7a7;\n        border-color: #8c8c8c;\n        &:hover {\n            background: #848383;\n        }\n    }\n"]))),U=function(e){return e.form},P=function(e){return e.user},I=function(e){return e.trailSearch},G=t(19);function H(e){var a=Object(h.c)();return function(e){a({type:"HANDLE_CHANGE",payload:Object(G.a)({},e.target.name,e.target.value)})}}function M(){var e=Object(h.c)();return function(a){e({type:"SET_USER",payload:a})}}function D(){var e=Object(h.c)();return function(a){e({type:"SET_LOCATION",payload:a})}}function F(){var e=Object(h.c)();return function(a,t){e({type:"SET_FLASH_MESSAGE",payload:{alert:a,messages:t}})}}function R(){var e=Object(h.c)();return function(){e({type:"UNMOUNT_FLASH_MESSAGE"})}}var z=function(){var e=Object(h.d)(P).currentUserData,a=H(),t=M(),n=D(),r=F(),s=R(),c=Object(h.d)(U),o=c.username,m=c.password,d=c.passwordConfirmation,b=c.email,v=c.messages,E=c.alert,S=c.flashMessage,N=Object(j.b)(),C=N.handleSubmit,_=N.register,T=N.errors,I=function(){var e=Object(u.a)(i.a.mark((function e(){var a,l,s,c,u,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/signup",data:{user:{username:o,password:m,password_confirmation:d,email:b}}},e.next=4,g()(a);case 4:l=e.sent,s=l.data,c=s.errors,u=s.user,p=l.data,c?r("alert-danger",c):(t(p),x(n),localStorage.userId=u.id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(L,null,l.a.createElement("div",{className:"flash-container"},S?v.map((function(e){return l.a.createElement(A,{key:e[0],unmount:s,message:e,alert:E,className:"subtext form-flash"})})):l.a.createElement("div",{className:"form-flash"})),l.a.createElement(y.a,{className:"form-card"},l.a.createElement(k.a,{onSubmit:C(I)},l.a.createElement(k.a.Group,{controlId:"username"},l.a.createElement(k.a.Label,{className:"headline"},"Username"),l.a.createElement(k.a.Control,{type:"text",placeholder:"Enter username",onChange:a,defaultValue:o,name:"username",className:"subtext",ref:_({required:"Username cannot be blank"})}),l.a.createElement(w.a,{errors:T,name:"username",render:function(e){var a=e.message;return l.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),l.a.createElement(k.a.Group,{controlId:"formGroupEmail"},l.a.createElement(k.a.Label,{className:"headline"},"Email address"),l.a.createElement(k.a.Control,{type:"text",placeholder:"Enter email",onChange:a,defaultValue:b,name:"email",className:"subtext",ref:_({required:"Email cannot be blank",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),l.a.createElement(w.a,{errors:T,name:"email",render:function(e){var a=e.message;return l.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),l.a.createElement(k.a.Group,{controlId:"formGroupPassword"},l.a.createElement(k.a.Label,{className:"headline"},"Password"),l.a.createElement(k.a.Control,{type:"password",placeholder:"Password",onChange:a,defaultValue:m,name:"password",className:"subtext",ref:_({required:"Password cannot be blank",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,message:"Password must be between 6 and 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"}})}),l.a.createElement(w.a,{errors:T,name:"password",render:function(e){var a=e.message;return l.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),l.a.createElement(k.a.Group,{controlId:"formGroupPasswordConfirmation"},l.a.createElement(k.a.Label,{className:"headline"},"Password Confirmation"),l.a.createElement(k.a.Control,{type:"password",placeholder:"Password Confirmation",onChange:a,defaultValue:d,name:"passwordConfirmation",className:"subtext",ref:_({required:"Password confirmation cannot be blank",validate:function(e){return e===m||"Passwords must match"}})}),l.a.createElement(w.a,{errors:T,name:"passwordConfirmation",render:function(e){var a=e.message;return l.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),l.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"small headline"},l.a.createElement(O.a,{variant:"success",type:"submit",block:!0},"Submit")),l.a.createElement(k.a.Group,{className:"small subtext"},"Already have an account?  ",l.a.createElement(p.b,{to:"/login"},"Login")))),e&&e.logged_in&&l.a.createElement(f.a,{to:"/trailsearch"}))},K=function(){var e=H(),a=M(),t=D(),n=F(),r=R(),s=Object(h.d)(P).currentUserData,c=Object(h.d)(U),o=c.username,m=c.password,d=c.messages,b=c.alert,v=c.flashMessage,E=Object(j.b)(),S=E.handleSubmit,N=E.register,C=E.errors,_=function(){var e=Object(u.a)(i.a.mark((function e(){var r,l,s,c,u,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/login",data:{user:{username:o,password:m}}},e.next=4,g()(r);case 4:l=e.sent,s=l.data,c=s.errors,u=s.user,d=l.data,c?n("alert-danger",c):(a(d),x(t),localStorage.userId=u.id);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(L,null,l.a.createElement("div",{className:"flash-container"},v?d.map((function(e){return l.a.createElement(A,{key:e[0],unmount:r,message:e,alert:b,className:"subtext form-flash"})})):l.a.createElement("div",{className:"form-flash"})),l.a.createElement(y.a,{className:"form-card"},l.a.createElement(k.a,{onSubmit:S(_)},l.a.createElement(k.a.Group,{controlId:"username"},l.a.createElement(k.a.Label,{className:"headline"},"Username"),l.a.createElement(k.a.Control,{type:"text",placeholder:"Enter username",onChange:e,name:"username",defaultValue:o,className:"subtext",ref:N({required:"Username cannot be blank"})}),l.a.createElement(w.a,{errors:C,name:"username",render:function(e){var a=e.message;return l.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),l.a.createElement(k.a.Group,{controlId:"formGroupPassword"},l.a.createElement(k.a.Label,{className:"headline"},"Password"),l.a.createElement(k.a.Control,{type:"password",placeholder:"Password",onChange:e,name:"password",defaultValue:m,className:"subtext",ref:N({required:"Password cannot be blank"})}),l.a.createElement(w.a,{errors:C,name:"password",render:function(e){var a=e.message;return l.a.createElement("p",{className:"alert-danger flash-message subtext"},a)}})),l.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"small headline"},l.a.createElement(O.a,{variant:"success",type:"submit",block:!0},"Submit")),l.a.createElement(k.a.Group,{className:"small subtext"},"Don't have an account?  ",l.a.createElement(p.b,{to:"/signup"},"Signup")))),s&&s.logged_in&&l.a.createElement(f.a,{to:"/trailsearch"}))};var V,B,q=Object(h.b)((function(e){return{currentUserData:e.user.currentUserData}}),null)((function(e){var a=e.currentUserData.user,t=Object(r.useState)(""),n=Object(m.a)(t,2),s=n[0],c=n[1],o=Object(r.useState)(""),d=Object(m.a)(o,2),p=d[0],f=d[1],h=Object(r.useState)(!1),b=Object(m.a)(h,2),v=b[0],E=b[1],j=Object(r.useState)(""),w=Object(m.a)(j,2),S=w[0],x=w[1],N=Object(r.useState)(""),C=Object(m.a)(N,2),_=C[0],T=C[1];window.setUsername=c,window.setEmail=f;var U=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={user:{username:s||a.username,email:p||a.email}},r={method:"patch",url:"https://nameless-wave-57808.herokuapp.com/api/v1/update_account",data:n},e.next=5,g()(r);case 5:(l=e.sent).data.error?(E(!0),T(l.data.message),x("alert-danger")):(E(!0),T(l.data.message),x("alert-success"));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),P=function(e){var a=e.target.name;(0,window["set".concat(a)])(e.target.value)};return l.a.createElement(L,null,l.a.createElement(y.a,{className:"form-card"},l.a.createElement(k.a,{onSubmit:U},l.a.createElement(k.a.Group,null,v?l.a.createElement(A,{unmount:function(){E(!1),T("")},message:_,alert:S,className:"subtext"}):l.a.createElement("span",null)),l.a.createElement(k.a.Group,{controlId:"username"},l.a.createElement(k.a.Label,{className:"headline"},"Update username"),l.a.createElement(k.a.Control,{type:"text",placeholder:"".concat(null===a||void 0===a?void 0:a.username),onChange:P,name:"Username",className:"subtext",value:s})),l.a.createElement(k.a.Group,{controlId:"formGroupEmail"},l.a.createElement(k.a.Label,{className:"headline"},"Update email address"),l.a.createElement(k.a.Control,{type:"text",placeholder:"".concat(null===a||void 0===a?void 0:a.email),onChange:P,name:"Email",className:"subtext",value:p})),l.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"small headline"},l.a.createElement(O.a,{variant:"success",type:"submit",block:!0},"Submit")))))})),W=t(114),Y=function(e){var a=Object(r.useState)(!1),t=Object(m.a)(a,2),n=t[0],s=t[1],c=function(){return s(!1)};Object(r.useEffect)((function(){s(!0)}),[]);return l.a.createElement(r.Fragment,null,l.a.createElement(W.a,{show:n,onHide:c},l.a.createElement(W.a.Header,{closeButton:!0},l.a.createElement(W.a.Title,null,"Cancel Account")),l.a.createElement(W.a.Body,{className:"subtext"},e.message),l.a.createElement(W.a.Footer,null,l.a.createElement(O.a,{variant:"secondary",className:"headline",onClick:c},"No"),l.a.createElement(O.a,{variant:"primary",className:"headline",onClick:function(){e.handleCancelAccount(),c()}},"Yes"))))},Z=E.a.div(V||(V=Object(d.a)(["\n    display: flex;\n    a:link, a:visited {\n        color:  #1c1b1be1;\n    }\n    a:hover {\n        color:  #7d7a7ae1;\n    }\n    .headline {\n        font-family: 'Amatic SC', cursive;\n    }\n    .marginal {\n        margin: 2%;\n    }\n    .button-sized {\n        font-size: 1.2em;\n    }\n"]))),$=E.a.div(B||(B=Object(d.a)(["\n    margin: 0 8rem;\n\n    @media screen and (max-width: 1000px) {\n        margin 0 2rem;\n    }\n"])));var J,X,Q,ee=Object(f.g)(Object(h.b)(null,(function(e){return{clearUser:function(){e({type:"CLEAR_USER"})}}}))((function(e){var a=Object(r.useState)(!1),t=Object(m.a)(a,2),n=t[0],s=t[1],c=Object(r.useState)(""),o=Object(m.a)(c,2),d=o[0],f=o[1],h=function(){var a=Object(u.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.clear(),e.clearUser(),a.next=4,g.a.delete("https://nameless-wave-57808.herokuapp.com/api/v1/cancel_account");case 4:a.sent.errors||e.history.push("/");case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,n?l.a.createElement(Y,{handleCancelAccount:h,message:d}):null,l.a.createElement(Z,null,l.a.createElement($,null,l.a.createElement(p.b,{to:"/update-account",className:"headline"},l.a.createElement("i",{className:"fas fa-edit fa-3x marginal"}),l.a.createElement("p",{className:"button-sized"},"Update Account"))),l.a.createElement($,null,l.a.createElement(p.b,{to:"#",onClick:function(){f("Are you sure you want to cancel your account?"),s(!0)},className:"headline"},l.a.createElement("i",{className:"fas fa-ban fa-3x marginal"}),l.a.createElement("p",{className:"button-sized"},"Cancel Account")))))}))),ae=t(117),te=E.a.div(J||(J=Object(d.a)(["\n    .navbar-link {\n        text-decoration: none;\n    }\n    .navbar-dark .navbar-nav .nav-link {\n        color: white;\n        transition: .3s;\n    }\n    a {\n        margin: 0 1em;\n    }\n"]))),ne=Object(E.a)(ae.a.Brand)(X||(X=Object(d.a)(["\n    font-size: 1.7em;\n    font-weight: 700;\n    font-family: Balsamiq Sans, cursive;\n"]))),re=E.a.img(Q||(Q=Object(d.a)(["\n    height: 50px;\n    width: 50px;\n"])));var le,se,ce,oe,ie=Object(h.b)((function(e){var a=e.user;return{currentUserData:a.currentUserData,latitude:a.latitude,longitude:a.longitude}}),(function(e){return{clearUser:function(){e({type:"CLEAR_USER"})}}}))((function(e){var a=function(){var a=Object(u.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.clear(),a.next=3,g.a.post("https://nameless-wave-57808.herokuapp.com/api/v1/logout");case 3:(t=a.sent).errors?alert(t.errors):e.clearUser();case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return l.a.createElement(te,null,l.a.createElement(ae.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top",collapseOnSelect:!0},l.a.createElement(v.a.Link,{as:p.b,eventKey:"1",to:"/"},l.a.createElement(ne,null,l.a.createElement(re,{src:"/trailblaze-frontend/noun_Trail_2056927.svg",alt:"brand",loading:"lazy"}),"   Trailblaze")),l.a.createElement(ae.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(ae.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(v.a,{className:"ml-auto"},e.currentUserData.logged_in?l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a.Link,{as:p.b,eventKey:"2",to:"/trailsearch"},"Find a Trail"),l.a.createElement(v.a.Link,{as:p.b,eventKey:"3",to:"/myhikes"},"My Hikes"),l.a.createElement(v.a.Link,{as:p.b,eventKey:"4",to:"/account"},"Account"),l.a.createElement(v.a.Link,{as:p.b,eventKey:"5",to:"/",onClick:a},"Logout ",e.currentUserData.user.username)):l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a.Link,{as:p.b,eventKey:"6",to:"/signup"},"Signup"),l.a.createElement(v.a.Link,{as:p.b,eventKey:"7",to:"/login"},"Login"))))))})),ue=t(112),me=E.a.div(le||(le=Object(d.a)(["\n    position: relative;\n    display: inline-block;\n"]))),de=E.a.img(se||(se=Object(d.a)(["\n    width: 100%;\n    vertical-align: top;\n"]))),pe=E.a.div(ce||(ce=Object(d.a)(["\n    position: absolute;\n    top: 2em;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: white;\n    & .headline {\n        font-size: .9em;\n        font-family: Amatic SC, cursive;\n    }\n    & .subtext {\n        font-family: 'Source Sans Pro', sans-serif;\n        font-size: .6em;\n    }\n"]))),fe=function(e){var a=Object(r.useState)(0),t=Object(m.a)(a,2),n=t[0],s=t[1],c=Object(r.useRef)(null);Object(r.useEffect)((function(){try{c.current.addEventListener("load",o)}catch(e){console.log(e)}}),[]);var o=function(){var e=c.current.clientHeight,a=Math.ceil(e/10);s(a)};return l.a.createElement(p.b,{to:"/trails/".concat(encodeURIComponent(e.trailName)),style:{gridRowEnd:"span ".concat(n)}},l.a.createElement(me,{className:"trail"},l.a.createElement(de,{src:e.image,ref:c,alt:e.trailName}),l.a.createElement(pe,null,l.a.createElement("p",{className:"headline"},l.a.createElement("strong",null,e.trailName)),l.a.createElement("p",{className:"subtext"},e.location))))},he=E.a.div(oe||(oe=Object(d.a)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-gap: 0 10px;\n    grid-auto-rows: 10.1px;\n    width: 100%;\n    margin-bottom: 1rem;\n"]))),be=function(e){Object(_.a)(t,e);var a=Object(T.a)(t);function t(){var e;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).renderTrails=function(){return e.props.trails.map((function(e){return l.a.createElement(fe,{key:e.id,trailName:e.name,image:e.imgMedium,length:e.length,difficulty:e.difficulty,location:e.location})}))},e}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.trails.length){e.next=8;break}return t={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/search_reload",data:{trail_ids:null===(a=localStorage.trails)||void 0===a?void 0:a.split(",").map((function(e){return e}))}},e.next=4,g()(t);case 4:n=e.sent,r=n.data.trails,(0,this.props.setTrails)(r);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.trails,t=e.setPreviousPage,n=e.location,r=this.renderTrails;return t(n),l.a.createElement(l.a.Fragment,null,a.length?l.a.createElement(he,null,r()):l.a.createElement(ue.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Searching for trails")))}}]),t}(r.PureComponent);var ge=Object(f.g)(Object(h.b)((function(e){var a=e.user;return{latitude:a.latitude,longitude:a.longitude,trails:e.trailSearch.trails}}),(function(e){return{setTrails:function(a){e({type:"SET_TRAILS",payload:a})},setPreviousPage:function(a){e({type:"SET_PREVIOUS_PAGE",payload:a})}}}))(be)),ve=t(118),Ee=t(78),ye=function(e){Object(_.a)(t,e);var a=Object(T.a)(t);function t(){var e;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={center:{lat:parseFloat(e.props.trail.latitude),lng:parseFloat(e.props.trail.longitude)},zoom:11,key:"",directions:null},e.handleDirections=function(a){var t={lat:parseFloat(localStorage.latitude),lng:parseFloat(localStorage.longitude)},n={lat:e.state.center.lat,lng:e.state.center.lng},r=new a.maps.DirectionsService,l=new a.maps.DirectionsRenderer;l.setMap(a.map),r.route({travelMode:"DRIVING",origin:t,destination:n},(function(e,a){"OK"===a&&l.setDirections(e)}))},e}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()("https://nameless-wave-57808.herokuapp.com/api/v1/map_auth");case 2:a=e.sent,this.setState({key:a.data.key.replace(/\s/g,"")});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.key,t=e.center,n=e.zoom;return l.a.createElement("div",{className:"map"},a?l.a.createElement(Ee.a,{bootstrapURLKeys:{key:a},center:t,defaultZoom:n,onGoogleApiLoaded:this.handleDirections,yesIWantToUseGoogleMapApiInternals:!0}):null)}}]),t}(r.PureComponent);var ke,Oe,je,we=Object(h.b)((function(e){return{trail:e.trailShow.trail}}),null)(ye),Se=E.a.div(ke||(ke=Object(d.a)(["\n    width: 100%;\n"]))),xe=E.a.div(Oe||(Oe=Object(d.a)(["\n    margin-bottom: 1vh;\n    & > * {\n        margin: 0 .5%;\n    }\n    & .flash-message {\n        font-size: .6em;\n        display: block;\n        color: rgba(91, 87, 87, 0.544);\n    }\n    & .btn-link {\n        margin: .5%;\n    }\n"]))),Ne=E.a.div(je||(je=Object(d.a)(["\n    padding-left: 1%;\n    padding-right: 1%;\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    & .trail {\n        flex: 0 450px;\n    }\n    & .trail img {\n        max-height: 45vh;\n    }\n    & .map {\n        height: 65vh;\n        flex: 1 1 450px;\n    }\n"]))),Ce=function(e){Object(_.a)(t,e);var a=Object(T.a)(t);function t(){var e;Object(N.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={inHikes:!1,trailSet:!1},e.addTrailToHikes=Object(u.a)(i.a.mark((function a(){var t,n,r,l,s,c,o,u,m,d,p;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.props,n=t.match.params,r=t.currentUserData,a.next=3,g.a.post("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/add_hike",{user_id:r.user.id,trail_name:n.slug});case 3:l=a.sent,s=l.data,c=s.trail,o=s.error,u=s.status,m=e.props.setFlashMessage,"success"===u?("alert-success",d="".concat(c," added to favorites"),m([d],"alert-success"),e.setState({inHikes:!0})):("alert-danger",p="".concat(o),m([p],"alert-danger"));case 7:case"end":return a.stop()}}),a)}))),e.removeTrailFromHikes=Object(u.a)(i.a.mark((function a(){var t,n,r,l,s,c,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.delete("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes/delete_hike/".concat(e.props.trail.id));case 2:t=a.sent,n=t.data.error,r=e.props,l=r.trail,s=r.setFlashMessage,n?("alert-danger",o="".concat(n),s([o],"alert-danger")):("alert-success",c="".concat(l.name," removed from your hikes"),s([c],"alert-success"),e.setState({inHikes:!1}));case 6:case"end":return a.stop()}}),a)}))),e.renderFlashMessage=function(){var a=e.props,t=a.messages,n=a.alert,r=a.unmountFlashMessage;return t.map((function(e){return l.a.createElement(A,{key:e[0],unmount:r,message:e,alert:n,className:"subtext form-flash"})}))},e.backToPreviousPage=function(){},e}return Object(C.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n,r,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes").then((function(e){l.props.setHikes(e.data.hikes)}));case 2:a=this.props,t=a.match.params,n=a.setTrail,r=a.hikes,g.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/trails/".concat(t.slug)).then((function(e){var a=e.data.trail;n(a),l.setState({trailSet:!0}),r.find((function(e){return e.id===a.id}))&&l.setState({inHikes:!0})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,a=e.trail,t=e.flashMessage,n=e.fromSearchPage,r=this.state,s=r.inHikes,c=r.trailSet,o=this.addTrailToHikes,i=this.removeTrailFromHikes,u=this.renderFlashMessage;return a?l.a.createElement(Se,null,l.a.createElement(xe,{className:"d-flex"},n?l.a.createElement(O.a,{variant:"link",className:"headline"},l.a.createElement(p.b,{to:"/trails"},"Back to search")):l.a.createElement(O.a,{variant:"link",className:"headline"},l.a.createElement(p.b,{to:"/myhikes"},"Back to hikes")),s?l.a.createElement(O.a,{variant:"link",onClick:i,className:"headline"},"Remove from favorite hikes"):l.a.createElement(O.a,{variant:"link",onClick:o,className:"headline"},"Add to favorite hikes"),t?u():l.a.createElement("span",null)),l.a.createElement(Ne,null,l.a.createElement(ve.a,{className:"trail"},l.a.createElement(ve.a.Image,{src:a.imgMedium}),l.a.createElement(ve.a.Caption,{className:"headline"},a.name),l.a.createElement(ve.a.Caption,{className:"subtext small"},"Length: ",a.length," miles"),l.a.createElement(ve.a.Caption,{className:"subtext small"},"Difficulty: ",a.difficulty),l.a.createElement(ve.a.Caption,{className:"subtext small"},"Location: ",a.location)),c?l.a.createElement(we,null):null)):null}}]),t}(r.PureComponent);var _e=Object(f.g)(Object(h.b)((function(e){var a=e.user.currentUserData,t=e.trailShow,n=t.trail,r=t.fromSearchPage,l=e.myHikes.hikes,s=e.form;return{currentUserData:a,trail:n,hikes:l,messages:s.messages,alert:s.alert,flashMessage:s.flashMessage,fromSearchPage:r}}),(function(e){return{setTrail:function(a){e({type:"SET_TRAIL",payload:a})},setHikes:function(a){e({type:"SET_HIKES",payload:a})},setFlashMessage:function(a,t){e({type:"SET_FLASH_MESSAGE",payload:{alert:t,messages:a}})},unmountFlashMessage:function(){e({type:"UNMOUNT_FLASH_MESSAGE"})}}}))(Ce)),Te=function(){var e=Object(h.c)(),a=Object(r.useState)(!1),t=Object(m.a)(a,2),n=t[0],s=t[1],c=Object(r.useState)(!1),o=Object(m.a)(c,2),d=o[0],p=o[1],b=Object(h.d)(P),v=b.latitude,E=b.longitude,j=Object(h.d)(I),w=j.distance,S=j.mileage,x=H();Object(r.useEffect)((function(){N()}),[v]);var N=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="http://www.hikingproject.com/data/get-trails?lat=".concat(v,"&lon=").concat(E,"&maxDistance=").concat(w,"&maxResults=300&key=200492212-d7400571b0620563169df18724f8dc46"),t={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/trails/associate_trails",data:{url:a}},p(!0),e.next=6,g()(t);case 6:n=e.sent,"Success"===n.data.status&&p(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var a=Object(u.a)(i.a.mark((function a(t){var n,r,l;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={method:"post",url:"https://nameless-wave-57808.herokuapp.com/api/v1/trails/search",data:{distance:w,mileage:S,latitude:v,longitude:E}},a.next=4,g()(n);case 4:r=a.sent,l=r.data.trails,e({type:"SET_TRAILS",payload:l}),s(!0);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement(L,null,v&&E&&!d?l.a.createElement(y.a,{className:"form-card"},l.a.createElement(k.a,{onSubmit:C},l.a.createElement(k.a.Label,{className:"headline"},"How many miles are you willing to travel from your current location?"),l.a.createElement(k.a.Group,{controlId:"distance"},l.a.createElement(k.a.Control,{as:"select",name:"distance",value:w,onChange:x,className:"subtext"},l.a.createElement("option",null,"60"),l.a.createElement("option",null,"100"),l.a.createElement("option",null,"150"))),l.a.createElement(k.a.Label,{className:"headline"},"How many miles do you want to hike?"),l.a.createElement(k.a.Group,{controlId:"mileage"},l.a.createElement(k.a.Control,{as:"select",name:"mileage",value:S,onChange:x,className:"subtext"},l.a.createElement("option",null,"Less than 3"),l.a.createElement("option",null,"3 to 5"),l.a.createElement("option",null,"6 to 9"))),l.a.createElement(k.a.Group,{controlId:"formGroupSubmit",className:"headline"},l.a.createElement(O.a,{variant:"success",type:"submit",block:!0},"Find Trails")),n&&l.a.createElement(f.a,{to:"/trails"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(ue.a,{animation:"border",role:"status"}),l.a.createElement("p",{className:"headline"},"Processing location. If this is your first login it may take a minute...")))};var Ae,Le,Ue,Pe,Ie,Ge,He,Me,De,Fe,Re=Object(f.g)(Object(h.b)((function(e){return{hikes:e.myHikes.hikes}}),(function(e){return{setHikes:function(a){e({type:"SET_HIKES",payload:a})},setPreviousPage:function(a){e({type:"SET_PREVIOUS_PAGE",payload:a})}}}))((function(e){var a=e.setHikes;(0,e.setPreviousPage)(e.location);var t=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/my_hikes");case 2:t=e.sent,a(t.data.hikes);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){t()}),[]);return l.a.createElement(he,null,function(){var a;return null===(a=e.hikes)||void 0===a?void 0:a.map((function(e){var a=e.id,t=e.name,n=e.length,r=e.difficulty,s=e.location,c=e.imgMedium;return l.a.createElement(fe,{key:a,trailName:t,image:c,length:n,difficulty:r,location:s})}))}())}))),ze=t(113),Ke=Object(E.b)(Ae||(Ae=Object(d.a)(["\n    0% {\n        opacity: 0;\n        transform: translateY(4rem);\n    }\n    80% {\n        opacity: .80;\n        transform: translateY(-1rem);\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),Ve=Object(E.a)(ze.a)(Le||(Le=Object(d.a)(["\n    color: white;\n    background-image: url(",");\n    background-position-y: -172rem;\n    background-position-x: -119rem;\n    height: 70vh;\n    padding-top: 13rem;\n    margin-bottom: 1rem;\n    @media screen and (max-width: 768px) {\n        background-position-y: -22rem;\n        background-position-x: -41rem;\n    }\n    @media screen and (min-width: 769px) and (max-width: 1000px) {\n        background-position-y: -22rem;\n        background-position-x: -26rem;\n    }\n"])),"/trailblaze-frontend/trail.jpeg"),Be=E.a.h1(Ue||(Ue=Object(d.a)(["\n    font-family: Amatic SC, cursive;\n    font-size: 3.5rem;\n    width: 100vw;\n    letter-spacing: .7rem;\n    animation: 1.5s "," ease-out;\n    @media screen and (max-width: 768px) {\n        font-size: 2rem;\n    }\n"])),Ke),qe=function(){return l.a.createElement(Ve,null,l.a.createElement(Be,null,"Welcome to Trailblaze"))},We=E.a.div(Pe||(Pe=Object(d.a)(["\n  background: #f5f5f5;\n  color: #635d5d;\n  padding: 2rem 3rem;\n  display: flex;\n\n  @media screen and (max-width: 1000px) {\n    flex-direction: column-reverse;\n    margin: 1rem 0;\n  }\n"]))),Ye=E.a.p(Ie||(Ie=Object(d.a)(["\n  font-size: 1rem;\n  margin: 0 3rem;\n  width: auto;\n  padding: 3rem;\n\n  @media screen and (max-width: 1000px) {\n    padding: 1.5rem 0;\n  }\n"]))),Ze=E.a.img(Ge||(Ge=Object(d.a)(["\n  width: 55%;\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n  }\n"]))),$e=function(){return l.a.createElement(We,null,l.a.createElement(Ye,null,"Trailblaze is a location based trail-finding application. Plug in how far you're willing to travel and how many miles you'd like to hike and choose from the results to get directions to the trailhead. You can also save any trails that you've hiked and enjoyed or want to hike some other time so you can pull them up easily in the future."),l.a.createElement(Ze,{src:"/trailblaze-frontend/chris-rosiak-wMloxuYrjt0-unsplash.jpg",alt:""}))},Je=E.a.div(He||(He=Object(d.a)(["\n  text-align: center;\n  & .btn:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  & .headline {\n    font-family: 'Amatic SC', cursive;\n  }\n  & .subtext {\n    font-family: 'Source Sans Pro', sans-serif;\n  }\n"]))),Xe=E.a.div(Me||(Me=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),Qe=E.a.div(De||(De=Object(d.a)(["\n  background-color: #ffffff21;\n  margin-top: 14vh;\n  min-height: 72vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: black;\n"]))),ea=E.a.footer(Fe||(Fe=Object(d.a)(["\n  font-size: 1.1em;\n  background: #f5f5f5;\n  color: #635d5d;\n  padding: 1rem 0;\n  p {\n    margin: 0;\n  }\n  a {\n    color: #909090;\n  }\n  a:hover {\n    color: #5a5858;\n  }\n"]))),aa=function(){var e=Object(r.useState)(!1),a=Object(m.a)(e,2),t=a[0],n=a[1],s=Object(h.c)();return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.userId){e.next=6;break}return e.next=3,g.a.get("https://nameless-wave-57808.herokuapp.com/api/v1/logged_in",{withCredentials:!0});case 3:a=e.sent,s({type:"SET_LOCATION",payload:{coords:{latitude:localStorage.getItem("latitude"),longitude:localStorage.getItem("longitude")}}}),s({type:"SET_USER",payload:a.data});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),n(!0)}),[]),l.a.createElement(Je,null,t&&l.a.createElement(Xe,null,l.a.createElement(p.a,null,l.a.createElement("header",null,l.a.createElement(ie,null)),l.a.createElement(Qe,null,l.a.createElement(f.d,null,l.a.createElement(f.b,{exact:!0,path:"/"},l.a.createElement(qe,null)),l.a.createElement(f.b,{exact:!0,path:"/signup"},l.a.createElement(z,null)),l.a.createElement(f.b,{exact:!0,path:"/login"},l.a.createElement(K,null)),l.a.createElement(f.b,{exact:!0,path:"/account"},l.a.createElement(ee,null)),l.a.createElement(f.b,{exact:!0,path:"/update-account"},l.a.createElement(q,null)),l.a.createElement(f.b,{exact:!0,path:"/trailsearch"},l.a.createElement(Te,null)),l.a.createElement(f.b,{exact:!0,path:"/trails/:slug",component:_e}),l.a.createElement(f.b,{exact:!0,path:"/myhikes"},l.a.createElement(Re,null)),l.a.createElement(f.b,{exact:!0,path:"/trails"},l.a.createElement(ge,null)),l.a.createElement(f.b,{exact:!0,path:"/about"},l.a.createElement($e,null)))),l.a.createElement(ea,{className:"subtext"},l.a.createElement("p",null,l.a.createElement("strong",null,"Trailblaze 2021")),l.a.createElement(v.a,{className:"justify-content-center"},l.a.createElement(p.b,{className:"nav-link navbar-link",to:"/about"},"About"),l.a.createElement("a",{href:"mailto: smitham50@gmail.com",className:"nav-link navbar-link"},"Contact"))))))},ta=t(61);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var na=t(13),ra={currentUserData:{},latitude:null,longitude:null};var la=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ra,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_USER":return Object(na.a)(Object(na.a)({},e),{},{currentUserData:a.payload});case"CLEAR_USER":return Object(na.a)(Object(na.a)({},e),{},{latitude:"",longitude:"",currentUserData:{}});case"SET_LOCATION":var t=a.payload.coords;return localStorage.latitude||(localStorage.latitude=t.latitude,localStorage.longitude=t.longitude),Object(na.a)(Object(na.a)({},e),{},{latitude:t.latitude,longitude:t.longitude});default:return e}},sa={distance:60,mileage:"Less than 3",difficulty:"",trails:[]};var ca=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"HANDLE_CHANGE":var t=Object.keys(a.payload)[0];return Object(na.a)(Object(na.a)({},e),{},Object(G.a)({},t,a.payload[t]));case"SET_TRAILS":return localStorage.removeItem("trails"),localStorage.trails=a.payload.map((function(e){return e.id})),Object(na.a)(Object(na.a)({},e),{},{trails:a.payload});default:return e}},oa={trail:null,fromSearchPage:!1};var ia=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oa,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TRAIL":return Object(na.a)(Object(na.a)({},e),{},{trail:a.payload});case"SET_PREVIOUS_PAGE":var t="trails"===a.payload.pathname.slice(1,7);return Object(na.a)(Object(na.a)({},e),{},{fromSearchPage:t});default:return e}},ua={hikes:[]};var ma=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ua,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_HIKES":return Object(na.a)(Object(na.a)({},e),{},{hikes:a.payload});default:return e}},da={flashMessage:!1,alert:"",messages:[],username:"",password:"",passwordConfirmation:"",email:""};var pa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:da,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_FLASH_MESSAGE":var t=a.payload,n=t.alert,r=t.messages;return Object(na.a)(Object(na.a)({},e),{},{flashMessage:!0,alert:n,messages:r});case"UNMOUNT_FLASH_MESSAGE":return Object(na.a)(Object(na.a)({},e),{},{flashMessage:!1,alert:"",messages:[]});case"HANDLE_CHANGE":var l=Object.keys(a.payload)[0];return Object(na.a)(Object(na.a)({},e),{},Object(G.a)({},l,a.payload[l]));default:return e}},fa=Object(ta.a)({user:la,trailSearch:ca,trailShow:ia,myHikes:ma,form:pa}),ha=Object(ta.b)(fa);g.a.defaults.xsrfCookieName="CSRF-TOKEN",g.a.defaults.xsrfHeaderName="X-CSRF-Token",g.a.defaults.withCredentials=!0,c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h.a,{store:ha},l.a.createElement(aa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t(109)},84:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.d16c25f5.chunk.js.map