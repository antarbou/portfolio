(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07bb":function(t,e,a){},"0afb":function(t,e,a){},1:function(t,e){},"1d83":function(t,e,a){},2640:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-root"}},[a("header",[a("app-navigation")],1),a("main",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1),a("footer",[a("app-footer",{attrs:{year:t.currentYear}})],1)])},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-fixed"},[a("nav",{staticClass:"nav-wrapper blue-grey darken-4",attrs:{id:"nav-wrapper"}},[a("div",{staticClass:"container"},[t._m(0),a("router-link",{staticClass:"brand-logo",attrs:{to:"/"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[t._v("{ ... }")]),a("ul",{staticClass:"right hide-on-med-and-down"},[a("li",{class:{active:"about"===t.activePage}},[a("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons left"},[t._v("assignment_ind")]),t._v("About Me")])],1),a("li",{class:{active:"projects"===t.activePage}},[a("router-link",{attrs:{to:"/projects"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons left"},[t._v("developer_board")]),t._v("Projects")])],1),a("li",{class:{active:"blog"===t.activePage}},[a("router-link",{attrs:{to:"/blog"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons left"},[t._v("library_books")]),t._v("\n            Blog\n            "),t.blogNotifications.isNewBlog?a("span",{staticClass:"badge blue lighten-4 black-text new"},[t._v("\n              "+t._s(t.blogNotifications.count)+"\n            ")]):t._e()])],1)])],1)]),a("ul",{staticClass:"sidenav",attrs:{id:"mobile-links"}},[a("li",{class:{active:""===t.activePage}},[a("router-link",{staticClass:"sidenav-close grey-text text-darken-3",attrs:{to:"/"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons right"},[t._v("home")]),t._v("Home")])],1),a("li",{class:{active:"about"===t.activePage}},[a("router-link",{staticClass:"sidenav-close grey-text text-darken-3",attrs:{to:"/about"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons right"},[t._v("assignment_ind")]),t._v("About Me")])],1),a("li",{class:{active:"projects"===t.activePage}},[a("router-link",{staticClass:"sidenav-close grey-text text-darken-3",attrs:{to:"/projects"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons right"},[t._v("developer_board")]),t._v("Projects")])],1),a("li",{class:{active:"blog"===t.activePage}},[a("router-link",{staticClass:"sidenav-close grey-text text-darken-3",attrs:{to:"/blog"},nativeOn:{click:function(e){return t.updateActivePage(e)}}},[a("i",{staticClass:"material-icons right"},[t._v("library_books")]),t._v("Blog")])],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sidenav-trigger",attrs:{"data-target":"mobile-links"}},[a("i",{staticClass:"material-icons"},[t._v("menu")])])}],c={data:function(){return{blogNotifications:{isNewBlog:!1,count:0},activePage:""}},components:{},methods:{getPath:function(){return this.$route.path.slice(1)},updateActivePage:function(){this.scrollToTop(),this.activePage=this.getPath()},scrollToTop:function(){setTimeout((function(){$(window).scrollTop(0)}),300)}},beforeMount:function(){this.updateActivePage()},updated:function(){$(".dropdown-trigger").dropdown({hover:!0,coverTrigger:!1})},mounted:function(){$(".sidenav").sidenav()}},l=c,u=(a("bb5f"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,"4462b95e",null),p=d.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12"},[a("h1",{staticClass:"grey-text text-darken-3"},[t._v("Khalil")]),a("h1",{staticClass:"grey-text text-darken-3"},[t._v("Mansouri")]),a("h4",{staticClass:"orange-text text-darken-2"},[t._v("// Full Stack Developer")])])]),a("div",{staticClass:"divider"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("h5",{staticClass:"center grey-text text-darken-3"},[t._v("In coding, I enjoy.")]),a("h6",{staticClass:"center grey-text text-darken-3"},[t._v("JAVASCRIPT / TYPESCRIPT / VUE | ElasticSearch | MongoDB")])])]),a("div",{staticClass:"row"},[a("p",{staticClass:"grey-text text-darken-3"},[t._v("\n      Currently working as an Associate Dynamics 365 Developer at \n      "),a("a",{staticClass:"orange-text text-darken-2",attrs:{href:"https://www.intergen.co.nz/",target:"_blank"}},[t._v("Intergen")]),t._v(".\n      Before that I was a student at the \n      "),a("a",{staticClass:"orange-text text-darken-2",attrs:{href:"https://www.auckland.ac.nz/",target:"_blank"}},[t._v("University of Auckland")]),t._v(",\n      where I graduated with a Bachelor of Science in Computer Science and Information Systems. While I already have experience with a number\n      of technologies and frameworks, the tinkering never ends.\n    ")]),a("p",[t._v("Feel free to contact me on social media, or check out my blog posts here or on Dev.to - "),a("i",[t._v("once I start writing them of course")]),t._v(" ✍")])]),a("div",{staticClass:"row center"},[a("div",{staticClass:"col s3 m2"},[a("a",{staticClass:"waves-effect waves-light btn-large btn-floating icon-link",attrs:{href:"https://linkedin.com/",title:"LinkedIn Profile - Khalil Mansouri",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("div",{staticClass:"col s3 m2"},[a("a",{staticClass:"waves-effect waves-light btn-large btn-floating icon-link",attrs:{href:"https://github.com/khalilmansouri",target:"_blank",title:"Github Profile - Khalil Mansouri",rel:"noopener"}},[a("i",{staticClass:"fab fa-github"})])])])])}],f={data:function(){return{}},components:{},methods:{},created:function(){document.title="Khalil Mansouri"}},g=f,m=(a("5d71"),Object(u["a"])(g,v,h,!1,null,"3de34d0c",null)),b=m.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",[t._v("All Blog Articles")]),t.blogs.length>0&&t.loaded?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search blogs"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("div",{staticClass:"row"},t._l(t.filteredBlogs,(function(t){return a("div",{key:t.id,staticClass:"col s12 m6 l4"},[a("image-card",{attrs:{card:t}})],1)})),0)]):t.loaded?a("div",[a("p",[t._v("No posts found.")])]):t._e()])},C=[],w=(a("a481"),a("55dd"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card medium"},[null!=t.card.img?a("div",{staticClass:"card-image"},[a("img",{attrs:{src:t.card.img.src,alt:t.card.img.alt}})]):t._e(),a("div",{staticClass:"card-content blue-grey darken-4 white-text"},[a("router-link",{attrs:{to:"/"+this.$route.path.slice(1)+"/"+t.card.id}},[a("span",{staticClass:"card-title orange-text text-darken-2"},[t._v(t._s(t.card.title))])]),a("p",[t._v(t._s(t._f("snippet")(t.card.content)))])],1)])}),k=[],y={data:function(){return{}},components:{},methods:{},props:["card"],filters:{snippet:function(t){return t.replace(/<\/?[^>]+>/gi,"").slice(0,100)+"..."}}},x=y,j=Object(u["a"])(x,w,k,!1,null,"d6de495c",null),P=j.exports,O=(a("386d"),a("4917"),{computed:{filteredBlogs:function(){var t=this;return this.blogs.filter((function(e){return e.title.toLowerCase().match(t.search.toLowerCase())||e.content.toLowerCase().match(t.search.toLowerCase())}))},filteredProjects:function(){var t=this;return this.projects.filter((function(e){return e.title.toLowerCase().match(t.search.toLowerCase())||e.content.toLowerCase().match(t.search.toLowerCase())}))}}}),M={data:function(){return{blogs:[],loaded:!1,search:""}},methods:{dateCompare:function(t,e){return null==t.created?-1:null==e.created?1:(t=new Date(t.created),e=new Date(e.created),t>e?-1:t<e?1:0)}},created:function(){var t=this;this.$http.get("".concat(this.$baseUrl,"/posts.json")).then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)e[n].id=n,e[n].published&&a.push(e[n]);document.title="Khalil Mansouri - Blog",t.blogs=a.sort(t.dateCompare),t.loaded=!0}))},filters:{snippet:function(t){return t.slice(0,100).replace(/<\/?[^>]+>/gi,"")+"..."}},mixins:[O],components:{"image-card":P}},A=M,D=Object(u["a"])(A,_,C,!1,null,null,null),T=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",[t._v("Projects")]),t.projects.length>0&&t.loaded?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search projects"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("div",{staticClass:"row"},t._l(t.filteredProjects,(function(t){return a("div",{key:t.id,staticClass:"col s12 m6 l4"},[a("image-card",{attrs:{card:t}})],1)})),0)]):t.loaded?a("div",[a("p",[t._v("Projects coming soon.")])]):t._e()])},S=[],L={data:function(){return{projects:[],loaded:!1,search:""}},methods:{dateCompare:function(t,e){return null==t.created?-1:null==e.created?1:(t=new Date(t.created),e=new Date(e.created),t>e?-1:t<e?1:0)}},created:function(){var t=this;this.$http.get("".concat(this.$baseUrl,"/projects.json")).then((function(t){return t.json()})).then((function(e){var a=[];for(var n in e)e[n].id=n,e[n].published&&a.push(e[n]);document.title="Khalil Mansouri - Projects",t.projects=a.sort(t.dateCompare),t.loaded=!0}))},mixins:[O],components:{"image-card":P}},E=L,B=Object(u["a"])(E,I,S,!1,null,null,null),N=B.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer blue-grey darken-4"},[t._m(0),a("div",{staticClass:"footer-copyright blue-grey darken-3"},[a("div",{staticClass:"container"},[t._v("\n      © 2017 - "+t._s(t.year)+" Khalil Mansouri 🍁🥝\n    ")])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 l6"},[a("h5",{staticClass:"white-text"},[t._v("Who am I?")]),a("p",{staticClass:"grey-text text-lighten-4"},[t._v("Just a Software Dev living the Dev life // Dynamics 365 Developer \n          "),a("a",{staticClass:"orange-text text-darken-2",attrs:{href:"https://www.intergen.co.nz",target:"_blank"}},[t._v("@Intergen")]),t._v("\n          // CompSci & InfoSys graduate \n          "),a("a",{staticClass:"orange-text text-darken-2",attrs:{href:"https://www.auckland.ac.nz/",target:"_blank"}},[t._v("@AucklandUni")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 l4 offset-l2"},[a("h5",{staticClass:"white-text"},[t._v("Links")]),a("ul",[a("li",[a("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"https://linkedin.com/in/",target:"_blank",rel:"noopener"}},[t._v("LinkedIn")])]),a("li",[a("a",{staticClass:"grey-text text-lighten-3",attrs:{href:"https://github.com/khalilmansouri",target:"_blank",rel:"noopener"}},[t._v("GitHub")])])])])])])])}],F={data:function(){return{}},components:{},methods:{},props:["year"]},J=F,U=(a("cf32"),Object(u["a"])(J,K,Y,!1,null,"75278ff1",null)),z=U.exports,H={name:"app",data:function(){return{currentYear:null}},components:{"app-navigation":p,"landing-bio":b,"blog-list":T,"project-list":N,"app-footer":z},methods:{getCurrentYear:function(){var t=new Date;return t.getFullYear()}},created:function(){this.currentYear=this.getCurrentYear()}},W=H,G=(a("bd8c"),a("b0a0"),Object(u["a"])(W,r,s,!1,null,"28e55c86",null)),R=G.exports,V=a("28dd"),q=a("8c4f"),Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("app-article",{attrs:{postId:"My-First-Post"}})},X=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"article-wrapper"}},[t.isLoaded?a("div",{staticClass:"container white",attrs:{id:"article-container"}},[null!=this.id?a("div",{staticClass:"col s12"},[a("router-link",{staticClass:"breadcrumb",attrs:{to:this.parent.route}},[t._v(t._s(this.parent.name))]),a("router-link",{staticClass:"breadcrumb",attrs:{to:this.$route.path}},[t._v(t._s(this.article.title))])],1):t._e(),a("h3",[t._v(t._s(t.article.title))]),a("h5",[t._v(t._s(t.article.created))]),a("article",{attrs:{id:"fetched-article"},domProps:{innerHTML:t._s(t.article.content)}})]):t._e(),t.isLoaded?a("div",{staticClass:"fixed-action-btn"},[a("a",{staticClass:"waves-effect waves-light btn-floating btn-large orange darken-2 pulse",on:{click:function(e){return e.preventDefault(),t.scrollToTop(e)}}},[a("i",{staticClass:"material-icons large"},[t._v("vertical_align_top")])])]):t._e()])},tt=[],et={data:function(){return{id:this.$route.params.id,article:null,isLoaded:!1,parent:null,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]}},components:{},methods:{createDate:function(t){var e=new Date(t);return"".concat(this.days[e.getDay()],", ").concat(e.getDate()," ").concat(this.months[e.getMonth()]," ").concat(e.getFullYear())},getParent:function(){var t=this.$route.path.lastIndexOf("/"),e=this.$route.path.slice(0,t),a="/projects"!=e?"posts":"projects";return{name:a,route:e}},scrollToTop:function(){return $("html, body").animate({scrollTop:0},"slow"),!1}},props:["postId"],created:function(){var t=this,e=this.$route.path.lastIndexOf("/"),a=this.$route.path.slice(0,e),n="/projects"!=a?"posts":"projects";this.$http.get("".concat(this.$baseUrl,"/").concat(n,"/").concat(this.postId||this.id,".json")).then((function(t){return t.json()})).then((function(e){t.article=e,t.article.created=t.createDate(e.created),t.parent=t.getParent(),t.isLoaded=!0})).then((function(){document.title="Khalil Mansouri - ".concat(t.article.title)}))}},at=et,nt=(a("c4a6"),Object(u["a"])(at,Z,tt,!1,null,"60b08d01",null)),rt=nt.exports,st={data:function(){return{}},methods:{},components:{"app-article":rt}},it=st,ot=Object(u["a"])(it,Q,X,!1,null,"17fb689c",null),ct=ot.exports,lt=[{name:"home",path:"/",component:b},{name:"about",path:"/about",component:ct},{name:"projects",path:"/projects",component:N},{name:"blog",path:"/blog",component:T},{name:"singleProject",path:"/projects/:id",component:rt},{name:"singlePost",path:"/blog/:id",component:rt}];n["a"].use(V["a"]),n["a"].use(q["a"]);var ut=new q["a"]({routes:lt,mode:"history"});n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(R)},router:ut}).$mount("#app")},"5d71":function(t,e,a){"use strict";var n=a("d4ac"),r=a.n(n);r.a},"76ef":function(t,e,a){},b0a0:function(t,e,a){"use strict";var n=a("07bb"),r=a.n(n);r.a},bb5f:function(t,e,a){"use strict";var n=a("76ef"),r=a.n(n);r.a},bd8c:function(t,e,a){"use strict";var n=a("1d83"),r=a.n(n);r.a},c4a6:function(t,e,a){"use strict";var n=a("2640"),r=a.n(n);r.a},cf32:function(t,e,a){"use strict";var n=a("0afb"),r=a.n(n);r.a},d4ac:function(t,e,a){}});
//# sourceMappingURL=app.0464ef1f.js.map