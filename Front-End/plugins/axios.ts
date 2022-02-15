import { Plugin } from '@nuxt/types'
// const env = require('dotenv').config({ path: './.env' }).parsed || {}

const myPlugin: Plugin = function ({ app, store, $axios, redirect }, inject) {
    $axios.onRequest((config) => {
		// config.headers.gtoken = process.env.TOKEN
		// config.headers['Content-Type'] = 'application/json'
		return config
    })
    
    $axios.onRequestError((error) => {
		Promise.reject(error)
	})
}

export default myPlugin
