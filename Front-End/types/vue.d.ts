import { NuxtAxiosInstance } from '@nuxtjs/axios'

import RouteUrl from '~/config/route-url'
import ApiUrl from '~/config/api-url'
import { toastErrors } from '~/plugins/global'
import { errorPage, fanum } from '~/plugins/global'
import { NuxtCookies } from 'cookie-universal-nuxt'
import EN from '~/config/en'
import { VueIzitoast } from 'vue-izitoast'

type Globals = {
	$routeUrl: typeof RouteUrl
	$apiUrl: typeof ApiUrl
	$toastErrors: typeof toastErrors
	$errorPage: typeof errorPage
	$axios: NuxtAxiosInstance
	$toast: VueIzitoast
	$cookies: NuxtCookies
	$en: typeof EN
	$fanum: typeof fanum
}

declare module 'vue/types/vue' {
	// this.$myInjectedFunction inside Vue components
	interface Vue extends Globals {}
}

declare module '@nuxt/types' {
	// nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
	interface NuxtAppOptions extends Globals {}
	// nuxtContext.$myInjectedFunction
	interface Context extends Globals {}
}

declare module 'vuex/types/index' {
	// this.$myInjectedFunction inside Vuex stores
	interface Store<S> extends Globals {}
}
