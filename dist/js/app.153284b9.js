(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],f=0,d=[];f<s.length;f++)i=s[f],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a19":function(e,t,n){},"104a":function(e,t,n){"use strict";var a=n("d7b7"),o=n.n(a);o.a},"244b":function(e){e.exports=[{name:"IASColombia",link:"https://www.ieee.org.co",image:"sponsor_ias_colombia_logo.jpg"},{name:"IASUniandesSB",link:"http://sb.jlmayorga.com.co",image:"sponsor_ias_uniandes_sb_logo.jpg"},{name:"IASUnalManizalesSB",link:"http://web.pepqa.co",image:"sponsor_ias_unal_manizales_sb_logo.jpg"}]},"24b3":function(e){e.exports=[{name:"IEEE.org",link:"http://www.ieee.org/index.html?WT.mc_id=mn_ieee"},{name:"IEEE Xplore Digital Library",link:"http://ieeexplore.ieee.org/"},{name:"IEEE Standards",link:"http://standards.ieee.org/"},{name:"IEEE Spectrum Online",link:"http://spectrum.ieee.org/"},{name:"IAS IEEE",link:"http://ias.ieee.org/"}]},2548:function(e,t,n){},"276f":function(e,t,n){"use strict";var a=n("9a37"),o=n.n(a);o.a},"3a1e":function(e,t,n){},"40e7":function(e){e.exports={conference:{from:{year:"2019",month:"May",day:"30"},to:{year:"2019",month:"May",day:"31"}},paper_submission:{year:"2019",month:"Febrary",day:"15"},acceptance_notification:{year:"2019",month:"April",day:"1"},camera_ready:{year:"2019",month:"April",day:"28"}}},4451:function(e,t,n){e.exports=n.p+"img/patron_uniandes_logo.32f6663f.jpg"},5698:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-header"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),n("v-footer")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{staticClass:"header-links"},[a("ul",{staticClass:"IEEE-Links"},e._l(e.LINKS,function(t){return a("li",[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))])])})),a("ul",{staticClass:"SOCIAL-Links"},e._l(e.SOCIAL,function(e){return a("li",[a("a",{class:e.name,attrs:{href:e.link,target:"_blank"}},[a("i",{class:e.class})])])}))]),a("nav",{staticClass:"header-navbar"},[a("div",{staticClass:"row"},[a("div",{staticClass:"header-logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("57ab")}})])],1),a("div",{staticClass:"header-title"},[e._v("IEEE Workshop on Power Electronics and Power Quality Applications")]),a("div",{staticClass:"header-menu"},[a("div",{staticClass:"header-menu-item"},[a("b-button",{attrs:{size:"sm"}},[a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1),a("div",{staticClass:"header-menu-item author"},[a("b-dropdown",{attrs:{id:"ddown1",text:"AUTHORS",size:"sm"}},[a("b-dropdown-item",[a("router-link",{attrs:{to:"/authors/call4papers"}},[e._v("Call For Papers")])],1),a("b-dropdown-item",[a("router-link",{attrs:{to:"/authors/guidelines"}},[e._v("Guidelines")])],1)],1)],1),a("div",{staticClass:"header-menu-item location"},[a("b-dropdown",{attrs:{id:"ddown2",text:"LOCATION",size:"sm"}},[a("b-dropdown-item",[a("router-link",{attrs:{to:"/location/city"}},[e._v(" "+e._s(e.LOCATION.city)+" ")])],1),a("b-dropdown-item",[a("router-link",{attrs:{to:"/location/venue"}},[e._v(" "+e._s(e.LOCATION.venue.name.short)+" ")])],1)],1)],1),a("div",{staticClass:"header-menu-item"},[a("b-button",{attrs:{size:"sm"}},[a("router-link",{attrs:{to:"/deadlines"}},[e._v(" DEADLINE ")])],1)],1),a("div",{staticClass:"header-menu-item"},[a("b-button",{attrs:{size:"sm"}},[a("router-link",{attrs:{to:"/pastEvents"}},[e._v(e._s(e.EVENTS.title))])],1)],1)])]),a("div",{staticClass:"row"},[a("div",{staticClass:"header-deadline"},[e._v("\n        "+e._s(e.DEADLINES.conference.from.day)+" "+e._s(e.DEADLINES.conference.from.month)+" to\n        "+e._s(e.DEADLINES.conference.to.day)+" "+e._s(e.DEADLINES.conference.to.month)+",\n        "+e._s(e.DEADLINES.conference.to.year)+" //\n        "+e._s(e.LOCATION.city)+" , "+e._s(e.LOCATION.country)+"\n      ")])])])])},s=[],c=n("24b3"),l=n("fcaf"),u=n("645e"),f=n("40e7"),d={name:"vHeader",created:function(){},data:function(){return{LINKS:c,SOCIAL:l,LOCATION:u,DEADLINES:f,EVENTS:{title:"PAST EVENTS"}}}},p=d,v=(n("951c"),n("2877")),m=Object(v["a"])(p,i,s,!1,null,"e4858fd2",null);m.options.__file="header.vue";var _=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("footer",[a("div",{staticClass:"row footer-info"},[a("div",{staticClass:"footer-title"},[e._v("\n          Contact Us!\n        ")]),a("div",{staticClass:"footer-patrons"},e._l(e.PATRONS,function(e){return a("div",{staticClass:"footer-patrons-patron"},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("img",{attrs:{src:n("4451")}})])])})),a("br"),a("div",{staticClass:"footer-sponsors"},e._l(e.SPONSORS,function(t){return a("div",{staticClass:"footer-sponsors-item"},[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v("\n\n              "+e._s(t.name)+"\n             ")])])})),a("br"),a("div",{staticClass:"footer-technical-cosponsors"},e._l(e.TECHNICAL,function(t){return a("div",{staticClass:"footer-technical-cosponsors-item"},[a("a",{attrs:{href:t.link,target:"_blank"}},[e._v("\n            "+e._s(t.name)+"\n            ")])])})),a("div",{staticClass:"footer-technical-cosponsors"}),a("div",{staticClass:"footer-contact-form"}),a("div",{staticClass:"footer-social-icons"},[a("ul",{staticClass:"SOCIAL-Links"},e._l(e.SOCIAL,function(e){return a("li",[a("a",{class:e.name,attrs:{href:e.link,target:"_blank"}},[a("i",{class:e.class})])])}))]),a("div",{staticClass:"footer-info"})]),a("div",{staticClass:"row footer-copyright"},[e._v("\n      © Copyright "+e._s(e._f("moment")(new Date,"YYYY"))+" Universidad de los Andes – All rights reserved. Design & Development By Jorge Luis Mayorga Taborda\n    ")])])])},b=[],E=n("fcaf"),g=n("40e7"),C=n("645e"),w=n("b7ed"),A=n("244b"),O=n("f0d2"),I={name:"vFooter",data:function(){return{SOCIAL:E,LOCATION:C,DEADLINES:g,PATRONS:w,SPONSORS:A,TECHNICAL:O}}},y=I,k=(n("6139"),Object(v["a"])(y,h,b,!1,null,"2b945bc3",null));k.options.__file="footer.vue";var L=k.exports,S={name:"vApp",components:{vHeader:_,vFooter:L}},N=S,T=(n("5c0b"),n("94fb"),Object(v["a"])(N,o,r,!1,null,null,null));T.options.__file="App.vue";var x=T.exports,P=n("8c4f"),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA HOME")]),n("br")])}],M=n("645e"),$={name:"vwIndex",created:function(){},data:function(){return{LOCATION:M}}},z=$,U=(n("104a"),Object(v["a"])(z,j,D,!1,null,"07b92659",null));U.options.__file="Index.vue";var Q=U.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA ABOUT")]),n("br")])}],V=n("645e"),B={name:"vwAbout",created:function(){},data:function(){return{LOCATION:V}}},F=B,Y=(n("b29f"),Object(v["a"])(F,R,H,!1,null,"2757eea7",null));Y.options.__file="About.vue";var q=Y.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA AUTHORS CALL 4 PAPERS")]),n("br")])}],Z=n("645e"),K={name:"vwCall4Papers",created:function(){},data:function(){return{LOCATION:Z}}},W=K,X=(n("bb8d"),Object(v["a"])(W,G,J,!1,null,"03d5035b",null));X.options.__file="Call4Papers.vue";var ee=X.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA AUTHORS GUIDELINES")]),n("br")])}],ae=n("645e"),oe={name:"vwGuidelines",created:function(){},data:function(){return{LOCATION:ae}}},re=oe,ie=(n("8c1d"),Object(v["a"])(re,te,ne,!1,null,"0fd5d413",null));ie.options.__file="Guidelines.vue";var se=ie.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA LOCATION CITY")]),n("br")])}],ue=n("645e"),fe={name:"vwCity",created:function(){},data:function(){return{LOCATION:ue}}},de=fe,pe=(n("5901"),Object(v["a"])(de,ce,le,!1,null,"17be4c22",null));pe.options.__file="City.vue";var ve=pe.exports,me=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA LOCATION VENUE")]),n("br")])}],he=n("645e"),be={name:"vwVenue",created:function(){},data:function(){return{LOCATION:he}}},Ee=be,ge=(n("7fef"),Object(v["a"])(Ee,me,_e,!1,null,"525ff838",null));ge.options.__file="Venue.vue";var Ce=ge.exports,we=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA LOCATION CITY")]),n("br")])}],Oe=n("645e"),Ie={name:"vwDeadlines",created:function(){},data:function(){return{LOCATION:Oe}}},ye=Ie,ke=(n("772c"),Object(v["a"])(ye,we,Ae,!1,null,"3078ec9e",null));ke.options.__file="Deadlines.vue";var Le=ke.exports,Se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"view index"},[n("br"),n("h2",[e._v(" PEPQA LOCATION PAST EVENTS")]),n("br")])}],Te=n("645e"),xe={name:"vwPastEvents",created:function(){},data:function(){return{LOCATION:Te}}},Pe=xe,je=(n("276f"),Object(v["a"])(Pe,Se,Ne,!1,null,"47246c78",null));je.options.__file="PastEvents.vue";var De=je.exports;a["a"].use(P["a"]);var Me=new P["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:q},{path:"/authors/call4papers",name:"call4papers",component:ee},{path:"/authors/guidelines",name:"guidelines",component:se},{path:"/deadlines",name:"deadlines",component:Le},{path:"/pastEvents",name:"pastEvents",component:De},{path:"/location/city",name:"city",component:ve},{path:"/location/venue",name:"venue",component:Ce}]}),$e=n("2f62");a["a"].use($e["a"]);var ze=new $e["a"].Store({state:{},mutations:{},actions:{}}),Ue=n("9483");Object(Ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Qe=n("bc3a"),Re=n.n(Qe),He=n("a7fe"),Ve=n.n(He),Be=n("9f7b");a["a"].config.productionTip=!1,a["a"].use(Ve.a,Re.a),a["a"].use(n("2ead")),a["a"].use(Be["a"]),new a["a"]({router:Me,store:ze,render:function(e){return e(x)}}).$mount("#app")},"57ab":function(e,t,n){e.exports=n.p+"img/header_logo.18059cde.png"},5901:function(e,t,n){"use strict";var a=n("0a19"),o=n.n(a);o.a},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(e,t,n){},6139:function(e,t,n){"use strict";var a=n("6766"),o=n.n(a);o.a},"635b":function(e,t,n){},"645e":function(e){e.exports={name:"PEPQA 2019 | Manizales | UNAL Manizales",country:"COLOMBIA",city:"MANIZALES",venue:{name:{short:"UNAL MANIZALES",long:"UNIVERSIDAD NACIONAL DE COLOMBIA, SEDE MANIZALES"},address:"CALLE 15# 5 -3 Sur, Manizales",description:"Manizales is the capital city of one of the smallest Colombian departments. The city is described as having an 'abrupt topography', and lies on the Colombian Central Mountain Range (part of the longest continental mountain range, The Andes), with a great deal of ridgelines and steep slopes, which, combined with the seismic instability of the area, has required architectural adaptations and public works to make the city safer. Even though Manizales has this very difficult topography, there are many coffee plantations in its fertile lands. The city is located in the northern part of the Colombian Coffee-Growers Axis ('Eje Cafetero'), near the volcano Nevado del Ruiz, which has an altitude of 5,321 meters (17,457.3 ft).",picture:""}}},6766:function(e,t,n){},"6cab":function(e,t,n){},"772c":function(e,t,n){"use strict";var a=n("635b"),o=n.n(a);o.a},"7fef":function(e,t,n){"use strict";var a=n("a23d"),o=n.n(a);o.a},"8c1d":function(e,t,n){"use strict";var a=n("fffd"),o=n.n(a);o.a},"94fb":function(e,t,n){"use strict";var a=n("5698"),o=n.n(a);o.a},"951c":function(e,t,n){"use strict";var a=n("6cab"),o=n.n(a);o.a},"9a37":function(e,t,n){},a23d:function(e,t,n){},b29f:function(e,t,n){"use strict";var a=n("3a1e"),o=n.n(a);o.a},b7ed:function(e){e.exports=[{name:"Uniandes",link:"http://www.uniandes.edu.co/",image:"patron_uniandes_logo.jpg"},{name:"UnalManizales",link:"http://www.unal.edu.co/",image:"patron_unal_manizales_logo.jpg"}]},bb8d:function(e,t,n){"use strict";var a=n("2548"),o=n.n(a);o.a},d7b7:function(e,t,n){},f0d2:function(e){e.exports=[{name:"IEEE",link:"https://www.ieee.org",image:"technical_co_sponsors_ieee_logo.jpg"},{name:"IEEEColombia",link:"https://www.ieee.org.co",image:"technical_co_sponsors_ieee_colombia_logo.jpg"},{name:"IAS",link:"https://www.ias.ieee.org",image:"sponsor_ias_logo.jpg"}]},fcaf:function(e){e.exports=[{name:"Facebook",class:"fab fa-facebook-f",link:"https://www.facebook.com/pepqa/?fref=ts"},{name:"Twitter",class:"fab fa-twitter",link:"https://twitter.com/PEPQA_co"},{name:"LinkedIn",class:"fab fa-linkedin-in",link:"https://www.linkedin.com/groups/6964610"},{name:"Email",class:"fas fa-envelope",link:"pepqa@uniandes.edu.co"}]},fffd:function(e,t,n){}});
//# sourceMappingURL=app.153284b9.js.map