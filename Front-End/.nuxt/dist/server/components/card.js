exports.ids = [1];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=6967f94e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-full p-4 border border-black"},[_vm._ssrNode((_vm._ssrList((_vm.keys),function(k,i){return ("<div class=\"text-black py-1\">"+_vm._ssrEscape("\n\t\t"+_vm._s(k)+": ")+"<span>"+_vm._ssrEscape(_vm._s(_vm.values[i]))+"</span></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=6967f94e&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.common.js
var vue_runtime_common = __webpack_require__(0);
var vue_runtime_common_default = /*#__PURE__*/__webpack_require__.n(vue_runtime_common);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=ts&

/* harmony default export */ var Cardvue_type_script_lang_ts_ = (vue_runtime_common_default.a.extend({
  data() {
    return {
      keys: [],
      values: []
    };
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    item() {
      const d = { ...this.item
      };
      delete d['id'];
      this.keys = Object.keys(d);
      this.values = Object.values(d);
    }

  },

  mounted() {
    if (Object.keys(this.item).length) {
      const d = { ...this.item
      };
      delete d['id'];
      this.keys = Object.keys(d);
      this.values = Object.values(d);
    }
  }

}));
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Cardvue_type_script_lang_ts_ = (Cardvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d8072a0"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=card.js.map