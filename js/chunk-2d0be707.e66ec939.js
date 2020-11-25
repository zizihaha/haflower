(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be707"],{"2feb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("loading",{attrs:{loader:"dots",active:t.status.isLoading},on:{"update:active":function(s){return t.$set(t.status,"isLoading",s)}}}),e("div",{staticClass:"container",staticStyle:{"margin-top":"80px"}},[t._m(0),e("div",{staticClass:"row flex-row-reverse justify-content-center mt-5 pb-5"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"border p-4 mb-4"},[t._l(t.order.products,(function(s){return e("div",{key:s.id,staticClass:"d-flex mb-3"},[e("img",{staticClass:"mr-2",staticStyle:{width:"48px",height:"48px","object-fit":"cover"},attrs:{src:s.product.imageUrl[0],alt:s.product.title}}),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between"},[e("p",{staticClass:"mb-0 font-weight-bold"},[t._v(" "+t._s(s.product.title)+" ")]),e("p",{staticClass:"mb-0"},[t._v(" NT"+t._s(t._f("currency")(s.product.price*s.quantity))+" ")])]),e("p",{staticClass:"mb-0 font-weight-bold"},[t._v("x"+t._s(s.quantity))])])])})),e("table",{staticClass:"table mt-4 border-top border-bottom text-black"},[e("tbody",[e("tr",[e("th",{staticClass:"border-0 px-0 pt-4 font-weight-normal",attrs:{scope:"row"}},[t._v(" 總計金額 ")]),e("td",{staticClass:"text-right border-0 px-0 pt-4"},[t._v(" NT"+t._s(t._f("currency")(t.order.amount))+" ")])])])]),e("div",{staticClass:"d-flex justify-content-between mt-4"},[e("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("商品總金額")]),e("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(" NT"+t._s(t._f("currency")(t.order.amount))+" ")])]),t.order.paid?t._e():e("button",{staticClass:"btn btn-primary btn-block mt-4",attrs:{type:"button"},on:{click:function(s){return t.payOrder()}}},[t._v(" 確認付款 "),e("i",{staticClass:"fas fa-chevron-right ml-2"})])],2)]),e("div",{staticClass:"col-md-6"},[e("table",{staticClass:"table"},[t._m(1),e("tbody",[e("tr",[e("td",{attrs:{width:"150px"}},[t._v("收件人姓名：")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("td",[t._v("收件人手機：")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("td",[t._v("收件人Email：")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("td",[t._v("付款方式：")]),e("td",[t._v(t._s(t.order.payment))])]),e("tr",[e("td",[t._v("收件人地址：")]),e("td",[t._v(t._s(t.order.user.address))])]),t.order.message?e("tr",[e("td",[t._v("備註：")]),e("td",[t._v(t._s(t.order.message))])]):t._e(),e("tr",[e("td",[t._v("付款狀態：")]),e("td",[t.order.paid?e("span",{staticClass:"text-success"},[t._v("付款完成")]):e("span",{staticClass:"text-danger"},[t._v("尚未付款，付款完成才算完成訂單喔")])])])])])])])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light px-0"},[e("ul",{staticClass:"list-unstyled mb-0 ml-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"},[e("li",{staticClass:"mr-md-6 mr-3 position-relative custom-step-line"},[e("i",{staticClass:"fas fa-check-circle d-md-inline d-block text-center mr-1 text-success"}),e("span",{staticClass:"text-nowrap"},[t._v("購物車")])]),e("li",{staticClass:"mr-md-6 mr-3 position-relative custom-step-line"},[e("i",{staticClass:"fas fa-check-circle d-md-inline d-block text-center mr-1 text-success"}),e("span",{staticClass:"text-nowrap"},[t._v("填寫訂單資料")])]),e("li",{staticClass:"mr-md-6 mr-3 position-relative custom-step-line"},[e("i",{staticClass:"fas fa-check-circle d-md-inline d-block text-center mr-1 text-success"}),e("span",{staticClass:"text-nowrap"},[t._v("付款")])]),e("li",[e("i",{staticClass:"fas fa-dot-circle d-md-inline d-block text-center mr-1"}),e("span",{staticClass:"text-nowrap"},[t._v("購物完成")])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{staticClass:"border-top-0",attrs:{colspan:"2"}},[t._v(" 訂單資訊 ")])])])}],r=(e("99af"),{name:"Check",data:function(){return{order:{user:{}},orderId:"",status:{isLoading:!1}}},created:function(){this.orderId=this.$route.params.orderId,this.orderId&&this.getOrder(this.orderId)},methods:{getOrder:function(){var t=this;this.status.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/").concat("5f936d6a-78a1-48f0-8517-588ebb2f69c6","/ec/orders/").concat(this.orderId);this.$http.get(s).then((function(s){t.status.isLoading=!1,t.order=s.data.data,console.log(s,"成功取得單一訂單")})).catch((function(s){t.status.isLoading=!1,console.log(s.response,"取得單一訂單失敗")}))},payOrder:function(){var t=this;this.status.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api/").concat("5f936d6a-78a1-48f0-8517-588ebb2f69c6","/ec/orders/").concat(this.orderId,"/paying");this.$http.post(s).then((function(s){s.data.data.paid&&t.getOrder(),t.status.isLoading=!1,t.$bus.$emit("message:push","訂單付款完成","success"),setTimeout((function(){t.$router.push("/thank-you")}),3e3)})).catch((function(s){t.status.isLoading=!1,t.$bus.$emit("message:push","訂單付款失敗","danger"),console.log(s.response.data,"付款失敗")}))}}}),c=r,o=e("2877"),n=Object(o["a"])(c,a,i,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0be707.e66ec939.js.map