(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0fad":function(t,e,a){},1182:function(t,e,a){},"34ba":function(t,e,a){"use strict";var n=a("1182"),s=a.n(n);s.a},4187:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"App"},o=i,c=(a("034f"),a("2877")),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavBar"),t.introImages.length>0?a("Jumbotron",{attrs:{"intro-images":t.introImages}}):t._e(),t.introImages.length>0?a("PhotoBrowser",{attrs:{images:t.images}}):t._e(),a("CommentWindow"),a("Footer",{attrs:{"social-links":t.socialLinks}})],1)},d=[],f=(a("fb6a"),a("96cf"),a("1da1")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-container"},[a("header",[a("div",{staticClass:"brand-container"},[a("img",{attrs:{src:t.brandIconPath,alt:"PhotoSite Icon",height:"50px",id:"brand-icon"},on:{mouseover:t.mouseOver,mouseleave:t.mouseLeave}}),a("a",{staticClass:"brand-name",attrs:{href:"./index.html"}},[t._v("PhotoSite")])]),t._m(0),a("div",{staticClass:"contact-info"},[a("a",{staticClass:"nav-link contact-me",attrs:{href:"#contact"}},[t._v("Contact Me")]),a("a",{attrs:{href:"#contact"}},[a("img",{attrs:{src:t.phoneIconPath,alt:"contact me",height:"30px"}})])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("ul",{staticClass:"nav-links"},[a("li",[a("a",{staticClass:"nav-link",attrs:{href:"#home"}},[t._v("Home")])]),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"#browse"}},[t._v("Browse")])]),a("li",[a("a",{staticClass:"nav-link",attrs:{href:"#categories"}},[t._v("Categories")])])])])}],p={name:"NavBar",data:function(){return{brandIconPath:"./assets/icons/camera_icon_100.png",phoneIconPath:"./assets/icons/phone-bubble-64.png"}},methods:{mouseOver:function(){this.brandIconPath="./assets/icons/camera_icon_filled_100.png"},mouseLeave:function(){this.brandIconPath="./assets/icons/camera_icon_100.png"}}},g=p,b=(a("34ba"),Object(c["a"])(g,h,v,!1,null,null,null)),_=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main",{attrs:{id:"home"}},[a("section",[a("div",{staticClass:"introduction"},[t._m(0),a("div",{staticClass:"introduction-images"},[t._l(t.introImages,(function(e,n){return a("img",{directives:[{name:"show",rawName:"v-show",value:t.currentImage==n,expression:"currentImage == index"}],key:e.path,staticClass:"sample-image",attrs:{src:e.path,alt:e.title}})})),a("div",{staticClass:"slides-icons"},[a("img",{staticClass:"slides-icon",attrs:{src:0==t.currentSlideIcon?t.sildeIconPaths.filled:t.sildeIconPaths.outlined,alt:"",width:"20px"}}),a("img",{staticClass:"slides-icon",attrs:{src:1==t.currentSlideIcon?t.sildeIconPaths.filled:t.sildeIconPaths.outlined,alt:"",width:"20px"}}),a("img",{staticClass:"slides-icon",attrs:{src:2==t.currentSlideIcon?t.sildeIconPaths.filled:t.sildeIconPaths.outlined,alt:"",width:"20px"}})])],2)])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"introduction-text"},[a("h1",{staticClass:"intro-main-title"},[t._v("Raghav's Gallery")]),a("p",{staticClass:"into-phara"},[t._v(" A passionate photographer interested in capturing the moments of LIFE, NATURE and TIME ")])])}],k={name:"Jumbotron",data:function(){return{currentImage:0,currentSlideIcon:0,currentImagePath:"",styleOfCurrentImage:"block",sildeIconPaths:{filled:"./assets/icons/circle-filled.svg",outlined:"./assets/icons/circle-outlined.svg"}}},props:{introImages:Array},methods:{changeImageBanner:function(){2===this.currentImage?(this.currentImage=0,this.currentSlideIcon=0):(this.currentImage++,this.currentSlideIcon++)}},mounted:function(){setInterval(this.changeImageBanner,3e3)}},y=k,I=(a("dd16"),Object(c["a"])(y,C,w,!1,null,null,null)),x=I.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"browse"}},[a("div",{staticClass:"browse-container",attrs:{id:"app"}},[a("div",{staticClass:"filter-container-shadow"},[a("div",{staticClass:"filter-container"},[a("img",{staticClass:"filter-image",attrs:{src:t.filterIconPath,alt:"filter image"}}),a("p",{staticClass:"sort-title"},[t._v("Sort by :")]),a("div",{staticClass:"sort-links"},[a("a",{staticClass:"sort-link nav-link",class:"latestFirst"===t.sort?"active":"",on:{click:t.sortByLatestFirst}},[t._v("Latest First")]),a("a",{staticClass:"sort-link nav-link",class:"oldestFirst"===t.sort?"active":"",on:{click:t.sortByOldestFirst}},[t._v("Oldest First")])])])]),a("div",{staticClass:"shadow"}),a("div",{staticClass:"images-container"},t._l(t.images,(function(e){return a("div",{key:e.path,staticClass:"image-photo"},[a("div",{staticClass:"img-pop-card"},[a("button",[a("router-link",{staticClass:"nav-link",attrs:{to:{path:"/View/",query:{link:e.original}},image:e}},[t._v("View")])],1)]),a("img",{attrs:{src:e.path,alt:e.title}})])})),0)])])])},P=[],j={data:function(){return{filterIconPath:"./assets/icons/filter.svg",sort:""}},props:{images:Array},methods:{sortByLatestFirst:function(){"latestFirst"!==this.sort&&this.images.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),this.sort="latestFirst"},sortByOldestFirst:function(){"oldestFirst"!==this.sort&&this.images.sort((function(t,e){return new Date(t.date)-new Date(e.date)})),this.sort="oldestFirst"},sortByPopularity:function(){"popularity"!==this.sort&&this.images.sort((function(t,e){return t.hits<e.hits?1:-1})),this.sort="popularity"},generatePath:function(t){return"/View/"+t.original}},created:function(){this.sortByLatestFirst(),this.sort="latestFirst"}},S=j,E=(a("5b1c"),Object(c["a"])(S,O,P,!1,null,null,null)),F=E.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{attrs:{id:"comment"}},[a("div",{staticClass:"comment-container"},[t._m(0),a("div",{staticClass:"comment-right-container"},[a("div",{staticClass:"input-container"},[a("form",{attrs:{id:"comment-form"}},[a("div",{staticClass:"input-groups"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],attrs:{name:"feedback",id:"feedback",cols:"30",rows:"10",placeholder:"Comments here.."},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",name:"user-name",id:"user-name",placeholder:"Your name.."},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),a("div",{staticClass:"submit-group"},[a("div",{staticClass:"sub-btn-container"},[a("button",{staticClass:"submit-button",attrs:{type:"button",id:"submit-button"},on:{click:function(e){return t.commentSubmit(e)}}},[t._v("Submit my feedback")])])])])])])])])])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-left-container"},[a("div",{staticClass:"text"},[a("h2",{staticClass:"comment-title"},[t._v("Leave a comment")]),a("p",{staticClass:"comment-text"},[t._v("Your feedback helps me to improve my ability in every aspects")])])])}],$=a("bc3a"),B=a.n($),R={data:function(){return{comment:"",userName:""}},methods:{commentSubmit:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.comment||""!==this.userName){t.next=4;break}alert("Cannot submit empty details"),t.next=8;break;case 4:return t.next=6,B.a.post("./api/comments",{userName:this.userName,comment:this.comment});case 6:a=t.sent,a.data.id?alert("Thanks for the feedback"):alert("Error in sending the comment");case 8:e.target.blur(),this.comment="",this.userName="",e.preventDefault();case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},A=R,D=(a("bce6"),Object(c["a"])(A,L,N,!1,null,null,null)),M=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{attrs:{id:"contact"}},[a("div",{staticClass:"footer-container"},[t._m(0),a("div",{staticClass:"footer-right"},[a("nav",{staticClass:"social-links"},[a("ul",{staticClass:"nav-links"},[a("li",{staticClass:"nav-link"},[a("a",{attrs:{href:"mailto:raghav.achari.l@gmail.com",title:"Email"}},[a("img",{staticClass:"email-icon",attrs:{src:t.mailImagePath,alt:"email",width:"50px"}})])]),t._l(t.socialLinks,(function(t){return a("li",{key:t.title,staticClass:"nav-link"},[a("a",{attrs:{target:"_blank",href:t.link,title:t.title}},[a("img",{class:t.class,attrs:{src:t.path,alt:t.title,width:"50px"}})])])}))],2)])])]),t._m(1)])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-left"},[a("h3",{staticClass:"footer-main-text"},[t._v("PhotoSite")]),a("p",{staticClass:"dev-intro"},[t._v("A personal site of Raghavendra Achari")]),a("p",{staticClass:"dev-intro"},[t._v(" Address : "),a("br"),t._v("1181, Nehru Nagar, Kumta - 581343 ")]),a("p",{staticClass:"dev-intro"},[a("a",{staticClass:"phone",attrs:{href:"tel:+919731453933"}},[t._v("+91 97314 53933")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright"},[a("p",{staticClass:"copy-text"},[a("strong",[t._v("Site is still under development")]),a("br"),t._v("developed by Raghavendra Achari - copyright © 2020 ")])])}],V={data:function(){return{mailImagePath:"./assets/social_media_icons/email.svg"}},props:{socialLinks:Array}},q=V,W=(a("760c"),Object(c["a"])(q,T,J,!1,null,null,null)),Y=W.exports,G=a("d4ec"),H=a("bee2"),K="/api/images",U=function(){function t(){Object(G["a"])(this,t)}return Object(H["a"])(t,null,[{key:"getImages",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.get(K);case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),z=U,Q="/api/social-links",X=function(){function t(){Object(G["a"])(this,t)}return Object(H["a"])(t,null,[{key:"getSocialLinks",value:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.get(Q);case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),Z=X,tt={data:function(){return{images:[],introImages:[],socialLinks:[],sortProperty:"latestFirst"}},components:{NavBar:_,Jumbotron:x,PhotoBrowser:F,CommentWindow:M,Footer:Y},methods:{},created:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.getImages();case 3:return t.images=e.sent,t.introImages=t.images.slice(0,3),e.next=7,Z.getSocialLinks();case 7:t.socialLinks=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error=e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},et=tt,at=(a("8b71"),Object(c["a"])(et,m,d,!1,null,null,null)),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view"},[a("h2",{staticClass:"title"},[t._v("Original Image :")]),a("img",{staticClass:"image-view",attrs:{src:t.$route.query.link},on:{load:t.imageLoaded}}),t.loaded?t._e():a("p",{staticClass:"loading"},[t._v("Loading...")]),a("div",{staticClass:"download-section"},[a("a",{staticClass:"nav-link",attrs:{href:t.$route.query.link,target:"_blank"}},[a("button",{staticClass:"nav-link"},[t._v("Download")])])])])},rt=[],it={data:function(){return{loaded:!1}},props:{image:Object},methods:{imageLoaded:function(){this.loaded=!0}}},ot=it,ct=(a("c669"),Object(c["a"])(ot,st,rt,!1,null,null,null)),lt=ct.exports,ut=a("8c4f");n["a"].use(ut["a"]),n["a"].config.productionTip=!1;var mt=[{path:"/",component:nt},{name:"View",path:"/view/",component:lt,props:!0}],dt=new ut["a"]({routes:mt,mode:"history"});new n["a"]({render:function(t){return t(u)},router:dt}).$mount("#app")},"5b1c":function(t,e,a){"use strict";var n=a("c59a"),s=a.n(n);s.a},"760c":function(t,e,a){"use strict";var n=a("c3f5"),s=a.n(n);s.a},"85ec":function(t,e,a){},"88d7":function(t,e,a){},"8b71":function(t,e,a){"use strict";var n=a("88d7"),s=a.n(n);s.a},"979c":function(t,e,a){},bce6:function(t,e,a){"use strict";var n=a("979c"),s=a.n(n);s.a},c3f5:function(t,e,a){},c59a:function(t,e,a){},c669:function(t,e,a){"use strict";var n=a("4187"),s=a.n(n);s.a},dd16:function(t,e,a){"use strict";var n=a("0fad"),s=a.n(n);s.a}});
//# sourceMappingURL=app.e074e0e1.js.map