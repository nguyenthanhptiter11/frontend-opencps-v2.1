(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,p=[];u<r.length;u++)i=r[u],o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push(["56d7","chunk-vendors"]),a()})({4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=s(t);return a(e)}function s(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}o.keys=function(){return Object.keys(n)},o.resolve=s,t.exports=o,o.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("0f18");var n=a("a026"),o=a("bb71");a("74ef");n["a"].use(o["a"],{theme:{primary:"#001f4d",secondary:"#424242",accent:"#001f4d",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},customProperties:!0,iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app_voting"}},[t._e(),a("v-content",[a("router-view")],1)],1)},i=[],r={data:function(){return{}}},c=r,l=a("2877"),d=a("6544"),u=a.n(d),p=a("7496"),m=a("549c"),f=a("f774"),h=Object(l["a"])(c,s,i,!1,null,null,null);h.options.__file="App.vue";var g=h.exports;u()(h,{VApp:p["a"],VContent:m["a"],VNavigationDrawer:f["a"]});var v=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("v-progress-circular",{attrs:{size:100,width:1,color:"primary",indeterminate:""}})],1)],1)],1)},y=[],j={},x=j,w=a("a523"),_=a("0e8f"),I=a("a722"),k=a("490a"),C=Object(l["a"])(x,b,y,!1,null,null,null);C.options.__file="NotFound.vue";var N=C.exports;u()(C,{VContainer:w["a"],VFlex:_["a"],VLayout:I["a"],VProgressCircular:k["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%","background-color":"#ffff","padding-top":"20px"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",staticStyle:{"margin-bottom":"20px"},attrs:{xs12:"",sm12:""}},[a("h3",{staticClass:"text-center",staticStyle:{color:"#065694"}},[t._v("CHỌN CƠ QUAN ĐỂ ĐÁNH GIÁ CÁN BỘ")])]),a("v-flex",{attrs:{xs12:"",sm2:""}}),a("v-flex",{attrs:{xs12:"",sm8:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.govAgencys,function(e,n){return a("v-flex",{key:n+"gov",staticStyle:{"padding-left":"5px","padding-right":"5px"},attrs:{xs12:"",sm4:""}},[a("v-btn",{staticClass:"btn-select",staticStyle:{width:"100%",height:"auto","min-height":"38px","background-color":"#b3d4fc5c!important"},attrs:{outline:"",flat:"",color:"primary"},on:{click:function(a){t.viewListEmployee(e)}}},[a("span",{staticStyle:{"white-space":"normal"}},[t._v(t._s(e.itemName))])])],1)}),1)],1),a("v-flex",{attrs:{xs12:"",sm2:""}})],1)],1)},V=[],D={props:["index"],components:{},data:function(){return{govAgencys:[],btnLoading:!1}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;console.log("landing---------"),t.$nextTick(function(){t.$store.dispatch("loadGovAgencys",{}).then(function(e){t.govAgencys=e,console.log(t.govAgencys)}).catch(function(t){})})},watch:{},methods:{viewListEmployee:function(t){this.$router.push({path:"/danh-sach-can-bo/"+t.itemCode,query:{itemName:t.itemName}})}},filters:{}},A=D,z=a("8336"),L=Object(l["a"])(A,S,V,!1,null,null,null);L.options.__file="Landing.vue";var $=L.exports;u()(L,{VBtn:z["a"],VFlex:_["a"],VLayout:I["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%","background-color":"#ffff"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center mt-4 mb-5",attrs:{xs12:"",sm12:""}},[a("h3",{staticClass:"text-xs-center"},[t._v("ĐÁNH GIÁ CÁN BỘ CÔNG CHỨC")]),a("h3",{staticClass:"text-xs-center",staticStyle:{"text-transform":"uppercase",color:"#237ff9"}},[t._v(t._s(t.itemName))])]),a("v-flex",{attrs:{xs12:"",sm1:""}}),a("v-flex",{attrs:{xs12:"",sm10:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.employeeItems,function(e,n){return a("v-flex",{key:n,staticClass:"text-xs-center mb-3",attrs:{xs4:"",sm3:""}},[a("v-card",{staticStyle:{width:"200px",margin:"0 auto",padding:"10px 0"}},[e["imageUrl"]?a("img",{staticStyle:{width:"166px",height:"166px"},attrs:{src:"item['imageUrl']"}}):a("img",{staticStyle:{width:"166px",height:"166px"},attrs:{src:"https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0="}}),a("br"),a("span",[t._v(t._s(e.fullName))]),a("br"),a("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(a){t.viewVotings(e,n)}}},[t._v("Đánh giá")])],1)],1)}),1)],1),a("v-flex",{attrs:{xs12:"",sm1:""}})],1)],1)},E=[],O={props:["itemCode"],components:{},data:function(){return{govAgencyName:{},itemName:"",employeeItems:[],btnLoading:!1}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;console.log("landing---------",t.itemCode);var e=t.$router.history.current.query;e.hasOwnProperty("itemName")&&(t.itemName=e.itemName),t.$nextTick(function(){t.$store.dispatch("loadEmployees",{itemCode:t.itemCode}).then(function(e){if(t.employeeItems=e,t.employeeItems.length>0)for(var a=0;a<t.employeeItems.length;a++)t.getImageUsers(a,t.employeeItems[a]);console.log(t.employeeItems)}).catch(function(t){})})},watch:{},methods:{getImageUsers:function(t,e){var a=this;a.$store.dispatch("loadImageEmployee",e).then(function(t){e["imageUrl"]=t}).catch(function(t){})},viewVotings:function(t,e){var a=this,n=t;n["itemName"]=a.itemName,a.$router.push({path:"/danh-sach-can-bo/"+a.itemCode+"/"+t.employeeId,query:n})}},filters:{}},T=O,F=a("b0af"),R=Object(l["a"])(T,P,E,!1,null,null,null);R.options.__file="Employees.vue";var U=R.exports;u()(R,{VBtn:z["a"],VCard:F["a"],VFlex:_["a"],VLayout:I["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("div",{staticClass:"text-xs-center pt-4"},[a("v-progress-circular",{attrs:{size:"100",width:"5",color:"purple",indeterminate:""}})],1):a("div",{staticStyle:{height:"100%","background-color":"#ffff"}},[a("v-form",{ref:"formVoting",attrs:{"lazy-validation":""},model:{value:t.validFormVoting,callback:function(e){t.validFormVoting=e},expression:"validFormVoting"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm1:""}}),a("v-flex",{attrs:{xs12:"",sm10:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center mt-4 mb-5",attrs:{xs12:"",sm12:""}},[a("h3",{staticClass:"text-xs-center"},[t._v("ĐÁNH GIÁ CÁN BỘ CÔNG CHỨC")]),a("h3",{staticClass:"text-xs-center",staticStyle:{"text-transform":"uppercase",color:"#237ff9"}},[t._v(t._s(t.itemName))])]),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("div",{staticStyle:{"margin-bottom":"15px"}},[t.employee["imageUrl"]?a("img",{staticStyle:{width:"150px",height:"140px"},attrs:{src:"employee['imageUrl']"}}):a("img",{staticStyle:{width:"150px",height:"140px",float:"left"},attrs:{src:"https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0="}}),a("div",{staticStyle:{float:"left","margin-left":"20px"}},[a("div",{staticStyle:{"margin-bottom":"5px"}},[a("span",[t._v("Họ và tên: ")]),t._v(" "+t._s(t.employee.fullName))]),a("div",{staticStyle:{"margin-bottom":"5px"}},[a("span",[t._v("Ngày sinh: ")]),t._v(" "+t._s(t._f("dateTimeView2")(t.employee.birthdate)))]),a("div",{staticStyle:{"margin-bottom":"5px"}},[a("span",[t._v("Chức vụ: ")]),t._v(" "+t._s(t.employee.title))])]),a("div",{staticStyle:{clear:"both","margin-top":"15px"}})]),t._l(t.votingItems,function(e,n){return a("div",{key:n,staticStyle:{"margin-bottom":"5px"}},[a("div",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n+1)+". "+t._s(e.subject))]),a("div",{staticClass:"ml-4"},[a("v-radio-group",{attrs:{height:"10",row:""},model:{value:e.selected,callback:function(a){t.$set(e,"selected",a)},expression:"item.selected"}},t._l(e["choices"],function(t,e){return a("v-radio",{key:"rd"+e,attrs:{label:t,height:"10",value:e+1}})}),1),a("v-layout",{staticClass:"ml-3",staticStyle:{"margin-top":"-10px"},attrs:{wrap:""}},t._l(e.answers,function(n,o){return a("v-flex",{key:o,staticStyle:{"margin-left":"18px"}},[a("span",{staticClass:"text-bold",staticStyle:{color:"green"}},[t._v(t._s(n)+"/"+t._s(e.answersCount))])])}),1)],1),e.commentable?a("div",{staticClass:"mt-3 ml-4 mr-3"},[a("v-text-field",{attrs:{label:"Ý kiến khác","multi-line":"",rows:"2"},model:{value:e["comment"],callback:function(a){t.$set(e,"comment",a)},expression:"item['comment']"}})],1):t._e()])})],2)],1)],1),a("v-flex",{attrs:{xs12:"",sm1:""}}),a("v-flex",{staticClass:"text-xs-center mt-2",attrs:{xs12:"",sm12:""}},[Array.isArray(t.votingItems)&&t.votingItems.length>0?a("v-btn",{attrs:{color:"primary",loading:t.votingDialog_hidden_loading,disabled:t.votingDialog_hidden_loading},on:{click:t.submitResultVoting}},[t._v("\n        Gửi kết quả đánh giá\n      ")]):t._e(),a("v-btn",{attrs:{color:"primary"},on:{click:t.goBack}},[a("v-icon",{attrs:{size:"16"}},[t._v("undo")]),t._v(" \n        Quay lại \n      ")],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"400"},model:{value:t.dialogShowApplicantIdNo,callback:function(e){t.dialogShowApplicantIdNo=e},expression:"dialogShowApplicantIdNo"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Nhập số CMND, mã hồ sơ")]),a("v-btn",{staticClass:"mx-0 my-0 absolute__btn_panel mr-2",attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.dialogShowApplicantIdNo=!1}}},[a("v-icon",[t._v("clear")])],1),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-text-field",{attrs:{placeholder:"Nhập số chứng minh thư nhân dân",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},model:{value:t.applicantIdNo,callback:function(e){t.applicantIdNo=e},expression:"applicantIdNo"}})],1),a("v-flex",{attrs:{xs12:"",sm12:""}},[a("v-text-field",{attrs:{placeholder:"Nhập mã hồ sơ",rules:[function(t){return!!t||"Trường dữ liệu bắt buộc"}],required:""},model:{value:t.dossierNo,callback:function(e){t.dossierNo=e},expression:"dossierNo"}})],1),t.showCaptcha?a("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm12:""}},[a("captcha",{ref:"captcha"})],1):t._e()],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){return t.doVottingSubmit(e)}}},[t._v("Đồng ý")]),a("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){return function(){return t.dialogShowApplicantIdNo=!1}()}}},[t._v("Quay lại")])],1)],1)],1)],1)],1)},M=[],q=a("854a"),B=a.n(q),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("img",{attrs:{src:t.chapchablob,alt:"capcha"}})]),a("v-flex",{staticClass:"mt-2",attrs:{xs10:""}},[a("v-text-field",{attrs:{placeholder:"Nhập captcha"},model:{value:t.j_captcha_response,callback:function(e){t.j_captcha_response=e},expression:"j_captcha_response"}})],1),a("v-flex",{staticClass:"mt-2 text-right pr-1",attrs:{xs2:""}},[a("v-btn",{attrs:{flat:"",icon:""},nativeOn:{click:function(e){return t.makeImageCap(e)}}},[a("v-icon",{attrs:{size:"28"}},[t._v("refresh")])],1)],1)],1)},Y=[],Q=a("1157"),X=a.n(Q),J={props:["index"],components:{},data:function(){return{j_captcha_response:"",chapchablob:"",options:{},arrCaptcha:[],captcha:"",currentlyDragging:null,loggedEvent:"",images:[{name:"Image 1",src:"http://placehold.it/100/000000/ffffff"},{name:"Image 2",src:"http://placehold.it/100/C93742/ffffff"},{name:"Image 3",src:"http://placehold.it/100/6894D1/ffffff"}]}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;t.makeImageCap()},watch:{},methods:{makeImageCap:function(){var t=this;t.chapchablob="",t.$store.dispatch("makeImageCap").then(function(e){t.chapchablob=e}).catch(function(e){t.chapchablob=""})},makeRandomString:function(){for(var t=this,e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<4;n++)e+=a.charAt(Math.floor(Math.random()*a.length));e&&(t.arrCaptcha=t.shuffleArrCaptcha(e.split(""))),t.captcha=e},shuffleArrCaptcha:function(t){var e=t.length,a=null,n=0;while(e>0)n=Math.floor(Math.random()*e),e--,a=t[e],t[e]=t[n],t[n]=a;return t},checkValidCaptcha:function(){var t=this,e="",a=X()("#captcha").children();console.log(a);for(var n=0;n<a.length;n++)e+=a[n].innerHTML;return t.captcha===e}},filters:{dateTimeView:function(t){if(t){var e=new Date(t);return"".concat(e.getDate().toString().padStart(2,"0"),"/").concat((e.getMonth()+1).toString().padStart(2,"0"),"/").concat(e.getFullYear())}return""}}},Z=J,W=(a("cf0c"),a("132d")),K=a("2677"),tt=Object(l["a"])(Z,H,Y,!1,null,null,null);tt.options.__file="Captcha.vue";var et=tt.exports;u()(tt,{VBtn:z["a"],VFlex:_["a"],VIcon:W["a"],VLayout:I["a"],VTextField:K["a"]});var at=a("c1df"),nt=a.n(at),ot={props:["itemCode","id"],components:{captcha:et},data:function(){return{applicantIdNo:"",dossierNo:"",workingUnit:{},employee:{},votingItems:[],itemName:"",btnLoading:!1,votingDialog_hidden_loading:!1,validFormVoting:!1,showCaptcha:!1,dialogShowApplicantIdNo:!1}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){var t=this;console.log("landing---------");var e=t.$router.history.current.query;null!==e&&void 0!==e&&"undefined"!==e&&(t.itemName=e.itemName,t.employee=e,console.log(t.employee),t.$store.dispatch("loadImageEmployee",t.employee).then(function(e){t.employee["imageUrl"]=e}).catch(function(t){})),t.$nextTick(function(){t.$store.dispatch("loadVoting",{className:"employee",classPk:t.id}).then(function(e){t.votingItems=e,console.log(t.votingItems)}).catch(function(t){})})},watch:{},methods:{submitResultVoting:function(){var t=this;t.votingDialog_hidden_loading=!0;var e=window.themeDisplay.isSignedIn();e?t.doVottingResultSubmit():(t.votingDialog_hidden_loading=!1,t.dialogShowApplicantIdNo=!0)},doVottingSubmit:function(){var t=this;if(t.$refs.formVoting.validate()){var e={applicantIdNo:t.applicantIdNo,dossierNo:t.dossierNo};t.$store.dispatch("checkPermisionVoting",e).then(function(e){console.log("result",e),!0===e.hasPermission||"true"===e.hasPermission?t.doVottingResultSubmit():B.a.error("Số CMTND hoặc Số hồ sơ không chính xác")}).catch(function(t){B.a.error("Lỗi hệ thống")})}else t.votingDialog_hidden_loading=!1},doVottingResultSubmit:function(){var t=this,e=[];for(var a in t.votingItems)t.votingItems[a]["className"]=t.itemCode,t.votingItems[a]["classPk"]=t.id,e.push(t.$store.dispatch("submitVoting",t.votingItems[a]));Promise.all(e).then(function(e){B.a.success("Gửi đánh giá thành công thành công"),t.dialogShowApplicantIdNo=!1,t.votingDialog_hidden_loading=!1,t.$router.push("/danh-sach-can-bo/"+t.itemCode)}).catch(function(e){B.a.error("Gửi đánh giá thất bại"),t.votingDialog_hidden_loading=!1,t.dialogShowApplicantIdNo=!1})},goBack:function(){var t=this;t.$router.push("/danh-sach-can-bo/"+t.itemCode)}},filters:{dateTimeView2:function(t){return t?nt()(String(t)).utc().format("DD/MM/YYYY"):""}}},st=ot,it=a("99d9"),rt=a("12b2"),ct=a("169a"),lt=a("4bd4"),dt=a("67b6"),ut=a("43a6"),pt=a("9910"),mt=Object(l["a"])(st,G,M,!1,null,null,null);mt.options.__file="EmployeeDetail.vue";var ft=mt.exports;u()(mt,{VBtn:z["a"],VCard:F["a"],VCardActions:it["a"],VCardText:it["b"],VCardTitle:rt["a"],VDialog:ct["a"],VFlex:_["a"],VForm:lt["a"],VIcon:W["a"],VLayout:I["a"],VProgressCircular:k["a"],VRadio:dt["a"],VRadioGroup:ut["a"],VSpacer:pt["a"],VTextField:K["a"]});var ht=[{path:"/",component:$,props:!0},{path:"/danh-sach-can-bo/:itemCode",component:U,props:!0},{path:"/danh-sach-can-bo/:itemCode/:id",component:ft,props:!0},{path:"*",name:"NotFound",component:N}];n["a"].use(v["a"]);var gt=new v["a"]({routes:ht}),vt=gt,bt=a("2f62"),yt=a("bc3a"),jt=a.n(yt),xt=a("bbd0");n["a"].use(B.a),n["a"].use(bt["a"]);var wt=new bt["a"].Store({state:{initData:{},loading:!1,index:0},actions:{loadInitResource:function(t){t.commit;var e=t.state;return new Promise(function(t,a){null!==window.themeDisplay&&void 0!==window.themeDisplay?(e.initData["groupId"]=window.themeDisplay.getScopeGroupId(),e.initData["user"]={userName:window.themeDisplay.getUserName(),userEmail:"",userId:window.themeDisplay.getUserId()}):(e.initData["groupId"]=0,e.initData["user"]={userName:"",userEmail:"",userId:20103}),t(e.initData)})},loadVoting:function(t,e){var a=t.commit,n=t.state;return new Promise(function(t,o){a("setLoading",!0),wt.dispatch("loadInitResource").then(function(s){var i={headers:{groupId:n.initData.groupId}};jt.a.get(xt.initData.votingApi+"/"+e.className+"/"+e.classPk,i).then(function(e){e.data?t(e.data.data):t([]),a("setLoading",!1)}).catch(function(t){o(t),a("setLoading",!1)})})})},loadImageEmployee:function(t,e){t.commit;var a=t.state;return console.log(e),new Promise(function(t,n){wt.dispatch("loadInitResource").then(function(o){var s={headers:{groupId:a.initData.groupId},responseType:"blob"};jt.a.get("/o/rest/v2/users/"+e.mappingUser.userId+"/photo",s).then(function(e){var a=window.URL.createObjectURL(e.data);t(a)}).catch(function(t){n(t)})})})},loadGovAgencys:function(t,e){var a=t.commit,n=t.state;return new Promise(function(t,e){a("setLoading",!0),wt.dispatch("loadInitResource").then(function(o){var s={headers:{groupId:n.initData.groupId}};jt.a.get(xt.initData.dictcollectionsApi+"/GOVERNMENT_AGENCY/dictitems",s).then(function(e){e.data?t(e.data.data):t([]),a("setLoading",!1)}).catch(function(t){e(t),a("setLoading",!1)})})})},loadEmployees:function(t,e){var a=t.commit,n=t.state;return new Promise(function(t,o){a("setLoading",!0),wt.dispatch("loadInitResource").then(function(s){var i={headers:{groupId:n.initData.groupId}};jt.a.get(xt.initData.employeeApi+"/"+e.itemCode,i).then(function(e){e.data?t(e.data.data):t([]),a("setLoading",!1)}).catch(function(t){o(t),a("setLoading",!1)})})})},getEmployee:function(t,e){var a=t.commit,n=t.state;return new Promise(function(t,o){a("setLoading",!0),wt.dispatch("loadInitResource").then(function(s){var i={headers:{groupId:n.initData.groupId}};jt.a.get(xt.initData.detailEmployeeApi+"/"+e.employeeId,i).then(function(e){t(e.data),a("setLoading",!1)}).catch(function(t){o(t),a("setLoading",!1)})})})},checkPermisionVoting:function(t,e){t.commit;var a=t.state;return new Promise(function(t,n){wt.dispatch("loadInitResource").then(function(){var o={headers:{groupId:a.initData.groupId},params:{applicantIdNo:e.applicantIdNo,dossierNo:e.dossierNo}};jt.a.get("/o/rest/v2/votings/checkpermission",o).then(function(e){var a=e.data;t(a)}).catch(function(t){console.log(t),n(t)})})})},submitVoting:function(t,e){t.commit;var a=t.state;return new Promise(function(t,n){wt.dispatch("loadInitResource").then(function(o){var s=new URLSearchParams,i={headers:{groupId:a.initData.groupId}};e.comment&&s.append("comment",e.comment),s.append("selected",e.selected),s.append("className",e.className),s.append("classPk",e.classPk),jt.a.post(xt.initData.votingApi+"/"+e.votingId+"/results",s,i).then(function(e){t(e.data)}).catch(function(t){n(t)})})})}},mutations:{setIndex:function(t,e){t.index=e},setInitData:function(t,e){t.initData=e}},getters:{loading:function(t){return t.loading},index:function(t){return t.index}}}),_t=a("967d");n["a"].use(_t["default"]);var It=void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0;jt.a.defaults.withCredentials=!0,jt.a.defaults.headers.common["Token"]=void 0!==window.Liferay?window.Liferay.authToken:"",jt.a.defaults.headers.common["groupId"]=It,n["a"].config.productionTip=!0,n["a"].mixin({methods:{getScopeGroupId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getScopeGroupId():0},getAuthToken:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.Liferay.authToken:""},getUserId:function(){return null!==window.themeDisplay&&void 0!==window.themeDisplay?window.themeDisplay.getUserId():0}}}),new n["a"]({router:vt,store:wt,render:function(t){return t(g)}}).$mount("#app_voting")},"726e":function(t,e,a){},"74ef":function(t,e,a){},bbd0:function(t){t.exports={renderURLInit:"?p_p_id=FrontendWebVoting&p_p_lifecycle=2&p_p_state=exclusive&p_p_mode=view&p_p_resource_id=renderURLInit",initData:{votingApi:"/o/rest/v2/postal/votings",agenciesApi:"/o/rest/v2/serviceinfos/statistics/agencies",employeeApi:"/o/rest/v2/employees/publish",detailEmployeeApi:"/o/rest/v2/employees",dictcollectionsApi:"/o/rest/v2/dictcollections"}}},cf0c:function(t,e,a){"use strict";var n=a("726e"),o=a.n(n);o.a}});
//# sourceMappingURL=app.js.map