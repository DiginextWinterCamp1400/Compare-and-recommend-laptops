const env = require('dotenv').config({ path: './.env' }).parsed || {}

env.BROWSER_BASE_URL = env.BROWSER_BASE_URL || '/api/'
env.BASE_URL = env.BASE_URL || 'http://localhost:8081/api/'
env.ENABLE_PROXY = env.ENABLE_PROXY || 0

const dev = process.env.NODE_ENV !== 'production'
const enableProxy = env.ENABLE_PROXY
const baseUrl = env.BASE_URL
const browserBaseUrl = env.ENABLE_PROXY ? env.BROWSER_BASE_URL : env.BASE_URL

export default {
	env,
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{
				charset: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		link: [
		],
	},
	generate: {
		fallback: true,
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/style.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/global.ts',
		{
			src: '~/plugins/toasted.ts',
			mode: 'client',
		},
		'~/plugins/axios.ts',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'nuxt-svg-loader',
		'cookie-universal-nuxt',
	],
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		progress: true,
		baseURL: baseUrl,
		browserBaseURL: browserBaseUrl,
		debug: dev,
		proxy: enableProxy,
		headers: {
			common: {
				Accept: 'application/json',
			},
		},
	},
	proxy: {
		[browserBaseUrl]: {
			target: baseUrl,
			pathRewrite: { [`^${browserBaseUrl}`]: '' },
		},
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		standalone: true,
	},
}
