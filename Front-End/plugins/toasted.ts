import Vue from 'vue'
import VueIziToast from 'vue-izitoast'

import 'izitoast/dist/css/iziToast.css'
import 'izitoast/dist/css/iziToast.min.css'

// @ts-ignore
Vue.use(VueIziToast, {
	rtl: true,
	resetOnHover: true,
	position: 'bottomCenter',
	timeout: 5000,
})
