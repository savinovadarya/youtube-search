(function(e){function t(t){for(var o,s,a=t[0],i=t[1],l=t[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},c=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/youtube-search/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e11":function(e,t,n){},"1a86":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"wrapper"},c={class:"container"};function s(e,t,n,s,a,i){var l=Object(o["A"])("router-view");return Object(o["t"])(),Object(o["f"])("div",r,[Object(o["g"])("div",c,[Object(o["j"])(l)])])}n("61b5");var a={data:function(){return{}}},i=(n("f2bd"),n("6b0d")),l=n.n(i);const u=l()(a,[["render",s],["__scopeId","data-v-5a747844"]]);var d=u,p=n("6c02"),b=n("9b19"),h=n.n(b),f=function(e){return Object(o["w"])("data-v-b2c53ce8"),e=e(),Object(o["u"])(),e},j={class:"container2"},g={class:"wrapp"},O={class:"login"},v=f((function(){return Object(o["g"])("img",{class:"login__logo",src:h.a,alt:"logo"},null,-1)})),w=f((function(){return Object(o["g"])("h1",{class:"login__title"},"Вход",-1)})),m={class:"login__input-space"},k=f((function(){return Object(o["g"])("label",{class:"login__label",for:"login"},"Логин",-1)})),_={class:"login__input-space"},y=f((function(){return Object(o["g"])("label",{class:"login__label",for:"password"},"Пароль",-1)})),x={class:"login__input-wrapper"};function C(e,t,n,r,c,s){var a=Object(o["A"])("icon");return Object(o["t"])(),Object(o["f"])("div",j,[Object(o["g"])("div",g,[Object(o["g"])("div",O,[v,w,Object(o["g"])("form",null,[Object(o["g"])("div",m,[k,Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.userName=e}),class:"login__input",type:"text",id:"login"},null,512),[[o["E"],c.userName]])]),Object(o["g"])("div",_,[y,Object(o["g"])("div",x,[c.showPass?Object(o["H"])((Object(o["t"])(),Object(o["f"])("input",{key:1,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.userPassword=e}),class:"login__input",type:"text",id:"password"},null,512)),[[o["E"],c.userPassword]]):Object(o["H"])((Object(o["t"])(),Object(o["f"])("input",{key:0,onInput:t[1]||(t[1]=function(){return e.borderInput&&e.borderInput.apply(e,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.userPassword=e}),class:"login__input",type:"password",id:"password"},null,544)),[[o["E"],c.userPassword]]),c.togglePass?(Object(o["t"])(),Object(o["d"])(a,{key:2,onClick:s.togglePassword,name:"off",class:"login__show-password"},null,8,["onClick"])):(Object(o["t"])(),Object(o["d"])(a,{key:3,onClick:s.togglePassword,name:"on",class:"login__show-password"},null,8,["onClick"]))])])]),Object(o["g"])("button",{onClick:t[4]||(t[4]=function(e){return s.login(c.userName,c.userPassword)}),class:"login__btn"},"Войти")])])])}n("d3b7"),n("159b"),n("b0c0");var M={key:0,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P=Object(o["g"])("path",{d:"M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),S=Object(o["g"])("path",{d:"M1 1L23 23","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),H=[P,S],I={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=Object(o["g"])("path",{d:"M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),A=Object(o["g"])("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),z=[V,A],q={key:2,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=Object(o["h"])('<g opacity="0.3"><path d="M8 6H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 12H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 18H21" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 6H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 18H3.01" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g>',1),Z=[R],B={key:3,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E=Object(o["g"])("path",{d:"M10 5H5V10H10V5Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),F=Object(o["g"])("path",{d:"M19 5H14V10H19V5Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),T=Object(o["g"])("path",{d:"M19 14H14V19H19V14Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),G=Object(o["g"])("path",{d:"M10 14H5V19H10V14Z",stroke:"#272727","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),J=[E,F,T,G];function K(e,t,n,r,c,s){return Object(o["t"])(),Object(o["f"])("div",null,["off"===n.name?(Object(o["t"])(),Object(o["f"])("svg",M,H)):Object(o["e"])("",!0),"on"===n.name?(Object(o["t"])(),Object(o["f"])("svg",I,z)):Object(o["e"])("",!0),"list"===n.name?(Object(o["t"])(),Object(o["f"])("svg",q,Z)):Object(o["e"])("",!0),"grid"===n.name?(Object(o["t"])(),Object(o["f"])("svg",B,J)):Object(o["e"])("",!0)])}var N={props:["name"]};const U=l()(N,[["render",K]]);var L=U,Q=n("8e2f"),D={data:function(){return{togglePass:!0,showPass:!1,userPassword:"",userName:""}},methods:{togglePassword:function(){this.togglePass=!this.togglePass,this.showPass=!this.showPass},login:function(e,t){var n=this;Q.forEach((function(o){e==o.username&&t==o.password&&(o.token||(o.token=n.generate()),localStorage.setItem("token",o.token),Le.push("/youtube-search/:home"))}))},generate:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=t.length,o=0;o<30;o++)e+=t.charAt(Math.floor(Math.random()*n));return e}},components:{Icon:L}};n("5e69");const X=l()(D,[["render",C],["__scopeId","data-v-b2c53ce8"]]);var Y=X;function W(e,t,n,r,c,s){var a=Object(o["A"])("headerpage"),i=Object(o["A"])("search"),l=Object(o["A"])("videogroup");return Object(o["t"])(),Object(o["f"])("div",null,[Object(o["j"])(a),Object(o["j"])(i,{onSearch:s.searchVideos},null,8,["onSearch"]),Object(o["j"])(l,{videos:c.info},null,8,["videos"])])}var $=function(e){return Object(o["w"])("data-v-4b38edb8"),e=e(),Object(o["u"])(),e},ee={class:"header"},te={class:"container"},ne={class:"header__links"},oe=$((function(){return Object(o["g"])("img",{class:"header__logo",src:h.a,alt:"logo"},null,-1)})),re={class:"header__nav"},ce=Object(o["i"])("Поиск"),se=Object(o["i"])("Выйти");function ae(e,t,n,r,c,s){var a=Object(o["A"])("router-link");return Object(o["t"])(),Object(o["f"])("div",ee,[Object(o["g"])("div",te,[Object(o["g"])("div",ne,[oe,Object(o["g"])("nav",re,[Object(o["j"])(a,{class:"header__link",to:"/youtube-search/:home"},{default:Object(o["G"])((function(){return[ce]})),_:1})])]),Object(o["j"])(a,{class:"header__logoff",to:"/youtube-search/"},{default:Object(o["G"])((function(){return[se]})),_:1})])])}var ie={data:function(){return{}},methods:{}};n("aab8");const le=l()(ie,[["render",ae],["__scopeId","data-v-4b38edb8"]]);var ue=le,de=(n("ac1f"),n("841c"),function(e){return Object(o["w"])("data-v-29579297"),e=e(),Object(o["u"])(),e}),pe={class:"wrapper"},be={class:"search__item"},he={key:0,class:"header"},fe={class:"header__result"},je=Object(o["i"])("Видео по запросу "),ge={class:"header__request"},Oe=de((function(){return Object(o["g"])("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lq5ztnV7r0Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1)})),ve={class:"header__display"};function we(e,t,n,r,c,s){var a=Object(o["A"])("icon");return Object(o["t"])(),Object(o["f"])("div",pe,[Object(o["g"])("div",{style:Object(o["p"])({height:s.style.height}),class:"container"},[Object(o["g"])("div",{style:Object(o["p"])({display:s.style.display}),class:"search"},[Object(o["g"])("h1",{style:Object(o["p"])([{margin:s.style.margin},{fontSize:s.style.fontSize}]),class:"search__title"},"Поиск видео",4),Object(o["g"])("div",be,[Object(o["H"])(Object(o["g"])("input",{onKeyup:t[0]||(t[0]=Object(o["I"])((function(){return s.search&&s.search.apply(s,arguments)}),["enter"])),style:Object(o["p"])({width:s.style.width}),"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.userSearchRequest=e}),class:"search__input",placeholder:"Что хотите посмотреть?",type:"text"},null,36),[[o["E"],c.userSearchRequest]]),Object(o["g"])("button",{onClick:t[2]||(t[2]=function(){return s.search&&s.search.apply(s,arguments)}),class:"search__btn"},"Найти")])],4)],4),c.expanded?(Object(o["t"])(),Object(o["f"])("div",he,[Object(o["g"])("div",fe,[je,Object(o["g"])("span",ge,"«"+Object(o["C"])(c.userSearchRequest)+"»",1)]),Oe,Object(o["g"])("div",ve,[Object(o["j"])(a,{onClick:e.changeDisplayToFlex,class:"header__list",name:"list"},null,8,["onClick"]),Object(o["j"])(a,{onClick:e.changeDisplayToGrid,class:"header__grid",name:"grid"},null,8,["onClick"])])])):Object(o["e"])("",!0)])}var me={data:function(){return{userSearchRequest:"",expanded:!1}},methods:{search:function(){this.expanded=!0,this.$emit("search",this.userSearchRequest)}},computed:{style:function(){return{width:this.expanded?"890px":"536px",fontSize:this.expanded?"28px":"36px",display:this.expanded?"block":"flex",margin:this.expanded?"40px 0 20px 0":"220px 0 40px 0",height:this.expanded?"25%":"75%"}}},components:{Icon:L}};n("c477");const ke=l()(me,[["render",we],["__scopeId","data-v-29579297"]]);var _e=ke,ye={class:"wrapper"};function xe(e,t,n,r,c,s){var a=Object(o["A"])("videoitem");return Object(o["t"])(),Object(o["f"])("div",ye,[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(n.videos,(function(e){return Object(o["t"])(),Object(o["f"])("div",{key:e.id.videoId},[Object(o["j"])(a,{video:e},null,8,["video"])])})),128))])}var Ce={class:"container"},Me={class:"item"},Pe=["src"],Se={class:"item__flex"},He={class:"item__title"},Ie={class:"item__channel"},Ve={class:"item__views"};function Ae(e,t,n,r,c,s){return Object(o["t"])(),Object(o["f"])("div",Ce,[Object(o["g"])("div",Me,[Object(o["g"])("iframe",{class:"item__video",width:"245",height:"137",src:s.src,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:"",title:"Embedded youtube"},null,8,Pe),Object(o["g"])("div",Se,[Object(o["g"])("h2",He,Object(o["C"])(c.title),1),Object(o["g"])("h3",Ie,Object(o["C"])(c.channel),1),Object(o["g"])("h3",Ve,Object(o["C"])(c.info)+" просмотров ",1)])])])}n("99af");var ze=n("bc3a"),qe=n.n(ze),Re={data:function(){return{info:[],title:this.video.snippet.title,channel:this.video.snippet.channelTitle}},methods:{calcViewsCount:function(e){var t="",n=parseInt(e),o=Math.floor(n/1e3);return o>=1e6?(t="млрд",n=Math.floor(n/1e9)):o>=1e3?(t="млн",n=Math.floor(n/1e6)):o>=1&&(t="тыс.",n=Math.floor(n/1e3)),"".concat(n," ").concat(t)}},props:["video"],computed:{src:function(){var e=this,t=this.video.id.videoId,n="AIzaSyBFSbXJlvyiK571FS26gRQcPM-mGirK2zk";return qe.a.get("https://www.googleapis.com/youtube/v3/videos?id=".concat(t,"&key=").concat(n,"&part=statistics")).then((function(t){e.info=e.calcViewsCount(t.data.items[0].statistics.viewCount)})),"https:/youtube.com/embed/".concat(this.video.id.videoId)}}};n("7b55");const Ze=l()(Re,[["render",Ae],["__scopeId","data-v-7017f144"]]);var Be=Ze,Ee={props:["videos"],components:{Videoitem:Be}};n("5d30");const Fe=l()(Ee,[["render",xe],["__scopeId","data-v-2082742e"]]);var Te=Fe,Ge={data:function(){return{info:"",userSearchRequest:""}},methods:{searchVideos:function(e){var t=this;this.expanded=!0;var n="AIzaSyBFSbXJlvyiK571FS26gRQcPM-mGirK2zk";qe.a.get("https://www.googleapis.com/youtube/v3/search?key=".concat(n,"&q=").concat(e,"&maxResults=12&part=snippet&chart=mostPopular")).then((function(e){t.info=e.data.items}))}},components:{Headerpage:ue,Search:_e,Videogroup:Te}};n("e6ff");const Je=l()(Ge,[["render",W],["__scopeId","data-v-755f76a4"]]);var Ke=Je,Ne=[{path:"/youtube-search/",name:"Authorization",component:Y},{path:"/youtube-search/:home",name:"Home",component:Ke}],Ue=Object(p["a"])({history:Object(p["b"])(),routes:Ne,linkActiveClass:"active",linkExactActiveClass:"active"}),Le=Ue;Object(o["c"])(d).use(Le).mount("#app")},"5d30":function(e,t,n){"use strict";n("87fc")},"5e69":function(e,t,n){"use strict";n("acde")},"61b5":function(e,t,n){},"7b55":function(e,t,n){"use strict";n("eca6")},"87fc":function(e,t,n){},"8e2f":function(e){e.exports=JSON.parse('[{"username":"admin","password":"admin"},{"username":"user","password":"user"},{"username":"owner","password":"owner"}]')},"968f":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.1f2b89d1.svg"},aab8:function(e,t,n){"use strict";n("968f")},acde:function(e,t,n){},b321:function(e,t,n){},c477:function(e,t,n){"use strict";n("b321")},e6ff:function(e,t,n){"use strict";n("1a86")},eca6:function(e,t,n){},f2bd:function(e,t,n){"use strict";n("0e11")}});
//# sourceMappingURL=app.10bc9cc5.js.map