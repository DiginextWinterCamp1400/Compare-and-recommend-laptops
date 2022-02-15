exports.ids = [2,1];
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

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2aad65fc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-12 w-full h-full"},[_vm._ssrNode("<div class=\"mt-8 flex w-full justify-center\" data-v-2aad65fc><div class=\"flex flex-col relative w-1/2\" data-v-2aad65fc><div class=\"rounded border relative\" data-v-2aad65fc><input type=\"text\" placeholder=\"search...\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"p-2 outline-none w-full h-full z-1\" data-v-2aad65fc> "+((_vm.search)?("<span class=\"absolute right-0 top-0 bottom-0 mr-2 my-2 z-2 cursor-pointer text-primary\" data-v-2aad65fc>×</span>"):"<!---->")+"</div> "+((_vm.showList)?("<div class=\"w-full rounded-sm absolute top-0 mt-10 z-50\" data-v-2aad65fc>"+(_vm._ssrList((_vm.foundItems),function(i){return ("<div class=\"p-4 border w-full cursor-pointer ripple-bg-background-light\" data-v-2aad65fc><span data-v-2aad65fc>"+_vm._ssrEscape(_vm._s(i.product)+"-")+"</span> <span class=\"ml-1\" data-v-2aad65fc>"+_vm._ssrEscape(_vm._s(i.cpu)+"-")+"</span> <span class=\"ml-1\" data-v-2aad65fc>"+_vm._ssrEscape(_vm._s(i.screenresolution))+"</span></div>")}))+"</div>"):"<!---->")+"</div> <button class=\"ripple-bg-primary py-2 px-6 outline-none rounded ml-4 text-white self-start\" data-v-2aad65fc>\n\t\t\tsearch\n\t\t</button></div> "),(_vm.item1.id >= 0 || _vm.item2.id >= 0)?_vm._ssrNode("<div class=\"flex items-center justify-center w-full mt-20\" data-v-2aad65fc>","</div>",[(_vm.item1.id >= 0)?_c('Card',{attrs:{"item":_vm.item1}}):_vm._e(),_vm._ssrNode(" "),(_vm.item2.id >= 0)?_c('Card',{attrs:{"item":_vm.item2}}):_vm._e()],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2aad65fc&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.common.js
var vue_runtime_common = __webpack_require__(0);
var vue_runtime_common_default = /*#__PURE__*/__webpack_require__.n(vue_runtime_common);

// EXTERNAL MODULE: ./components/Card.vue + 4 modules
var Card = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts&


const items = [{
  id: '1',
  name: 'laptop1'
}, {
  id: '2',
  name: 'laptop2'
}, {
  id: '3',
  name: 'laptop3'
}, {
  id: '4',
  name: 'laptop4'
}, {
  id: '5',
  name: 'laptop5'
}, {
  id: '6',
  name: 'laptop6'
}, {
  id: '7',
  name: 'laptop7'
}, {
  id: '8',
  name: 'laptop8'
}];
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts_ = (vue_runtime_common_default.a.extend({
  data() {
    return {
      search: '',
      foundItems: [],
      item1: {},
      item2: {},
      showList: true,
      count: 0
    };
  },

  components: {
    Card: Card["default"]
  },
  methods: {
    recommendations() {
      this.$axios.get(this.$apiUrl.recommendUrl()).then(response => {
        this.foundItems = response.data;
        this.showList = true;
      }).catch(e => {
        this.$toastErrors(this, e);
      });
    },

    clickOutside(e) {
      var _a;

      if (!this.showList) return;

      if ( // @ts-ignore
      !((_a = this.$refs.search) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
        this.showList = false;
      }
    },

    searching() {},

    submit() {
      this.$axios.get(this.$apiUrl.searchUrl(this.search)).then(response => {
        this.foundItems = response.data.results;
        this.showList = true;
      }).catch(e => {
        this.$toastErrors(this, e);
      });
    },

    itemClicked(item) {
      this.$axios.put(this.$apiUrl.registerUrl(item.id), { ...item,
        numberofsearch: Number(item.numberofsearch) + 1
      }).then(response => {
        this.showList = false;
        const d = { ...item
        };
        delete d['numberofsearch'];

        if (this.count === 0) {
          this.item1 = d;
          this.count++;
        } else {
          this.item2 = d;
          this.count = 0;
        }
      }).catch(e => {
        this.$toastErrors(this, e);
      });
    },

    clear() {
      this.search = '';
      this.recommendations();
    }

  },

  mounted() {
    if (false) {}

    this.$axios.get(this.$apiUrl.recommendUrl()).then(response => {
      this.foundItems = response.data;
    }).catch(e => {
      this.$toastErrors(this, e);
    });
  },

  destroyed() {
    if (false) {}
  }

}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (lib_vue_loader_options_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2aad65fc",
  "11c307b8"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Card: __webpack_require__(110).default})


/***/ })

};;
//# sourceMappingURL=index.js.map