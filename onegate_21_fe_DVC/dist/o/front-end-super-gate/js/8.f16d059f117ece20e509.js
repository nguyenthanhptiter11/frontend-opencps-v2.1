webpackJsonp([8,15],{271:function(t,e,s){var a=s(195)(s(314),s(321),null,null);t.exports=a.exports},287:function(t,e,s){var a=s(195)(s(362),s(378),null,null);t.exports=a.exports},314:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["dataDetail"],data:function(){return{thongTinChiTietHoSo:{}}},computed:{loading:function(){return this.$store.getters.loading}},watch:{dataDetail:function(t){this.thongTinChiTietHoSo=t}},created:function(){var t=this;t.$nextTick(function(){t.dataDetail&&(t.thongTinChiTietHoSo=t.dataDetail)})},methods:{},filters:{dateTimeView:function(t){if(t){var e=new Date(t);return e.getDate().toString().padStart(2,"0")+"/"+(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getFullYear()+"  "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")}return""}}}},321:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-text",{staticClass:"pb-0"},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Mã số hồ sơ: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v("  "+t._s(t.thongTinChiTietHoSo.dossierIdCTN)+" ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Ngày tiếp nhận: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v(" "+t._s(t._f("dateTimeView")(t.thongTinChiTietHoSo.receiveDate)))])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Thủ tục: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm10:""}},[s("v-subheader",{staticClass:"pl-0 header-text-field text-header"},[t._v("  "+t._s(t.thongTinChiTietHoSo.serviceName)+" ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Chủ hồ sơ: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v("  "+t._s(t.thongTinChiTietHoSo.applicantName)+" ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Mã số: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v("  "+t._s(t.thongTinChiTietHoSo.dossierNo)+" ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Địa chỉ: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm10:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v("  "+t._s(t.thongTinChiTietHoSo.address)+" ")])],1)],1)],1)],1)},staticRenderFns:[]}},362:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(s(19),s(271)),n=s.n(a);e.default={components:{thongtinchunghoso:n.a},data:function(){return{thongTinLienThong:{},hoSoLienThongItems:[]}},computed:{loading:function(){return this.$store.getters.loading}},created:function(){this.$nextTick(function(){})},methods:{initData:function(t){var e=this;e.$store.dispatch("getDetailDossier",t).then(function(t){e.thongTinLienThong=t}).catch(function(t){console.log(t)}),e.$store.dispatch("loadDossierLienThong",t).then(function(t){if(e.hoSoLienThongItems=t,e.hoSoLienThongItems.length>0)for(var s in e.hoSoLienThongItems){var a=e.hoSoLienThongItems[s];e.getDossierLogs(a)}}).catch(function(t){console.log(t)})},getDossierLogs:function(t){var e=this,s={dossierId:t.dossierId,type:""};e.$store.dispatch("loadDossierLogs",s).then(function(e){e.length>0&&(t.dossierLog=e)}).catch(function(t){console.log(t)})},goBack:function(){window.history.back()}},filters:{dateTimeView:function(t){if(t){var e=new Date(t);return e.getDate().toString().padStart(2,"0")+"/"+(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getFullYear()+"  "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")}return""}}}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-expansion-panel",{staticClass:"expansion-p0",attrs:{expand:""}},[s("v-expansion-panel-content",{attrs:{value:!0}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"background-triangle-small"},[t._v("I. ")]),t._v("THÔNG TIN HỒ SƠ\n      ")]),t._v(" "),s("thongtinchunghoso",{attrs:{dataDetail:t.thongTinLienThong}})],1)],1),t._v(" "),s("v-expansion-panel",{staticClass:"expansion-p0",attrs:{expand:""}},[s("v-expansion-panel-content",{attrs:{value:!0}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"background-triangle-small"},[t._v("II. ")]),t._v("TÌNH TRẠNG XỬ LÝ LIÊN THÔNG\n      ")]),t._v(" "),t._l(t.hoSoLienThongItems,function(e,a){return s("v-card",{key:e.dossierId,staticClass:"bdb-0",class:a>0?"bdt-0":""},[s("v-expansion-panel",{staticClass:"expansion-p0",attrs:{expand:""}},[s("v-expansion-panel-content",{attrs:{value:0===a}},[s("div",{staticClass:"pl-3",attrs:{slot:"header"},slot:"header"},[t._v("\n              CƠ QUAN LIÊN THÔNG: "),s("span",{staticStyle:{"font-weight":"normal"}},[t._v(t._s(e.govAgencyName))])]),t._v(" "),s("v-card",{staticClass:"bdt-0 bdb-0"},[s("v-card-text",[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Tình trạng: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm10:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v("  "+t._s(e.dossierSubStatusText)+" ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Ngày gửi hồ sơ: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v(" "+t._s(t._f("dateTimeView")(e.submitDate)))])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Ngày tiếp nhận: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v(" "+t._s(t._f("dateTimeView")(e.receiveDate)))])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Ngày hẹn trả: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v(" "+t._s(t._f("dateTimeView")(e.dueDate)))])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Ngày hoàn thành: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-subheader",{staticClass:"pl-0 text-header header-text-field"},[t._v(" "+t._s(t._f("dateTimeView")(e.releaseDate)))])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-subheader",{staticClass:"pl-0 text-header"},[t._v("Chi tiết nhật ký: ")])],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm10:""}},t._l(e.dossierLog,function(e){return s("div",{key:e.dossierLogId,staticClass:"mb-1"},[t._v("\n                      - "+t._s(t._f("dateTimeView")(e.createDate))+": "+t._s(e.content)+"\n                    ")])}))],1)],1)],1)],1)],1)],1)})],2)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.f16d059f117ece20e509.js.map