import { Plugin } from '@nuxt/types'
import ApiUrl from '~/config/api-url'
import RouteUrl from '~/config/route-url'
import { AxiosError } from 'axios'
import EN from '~/config/en'

export const toastErrors = (ctx: Vue, e: AxiosError) => {
	if (!e.response) {
		if (!e.message || e.message === '')
			ctx.$toast.error(ctx.$en.something_went_wrong(), '', {} as any)
		else ctx.$toast.error(e.message, '', {} as any)
	} else if (
		!e.response.data ||
		!e.response.data.errors ||
		e.response.data.errors.length === 0
	) {
		if (!e.response.statusText || e.response.statusText === '')
			ctx.$toast.error(ctx.$en.something_went_wrong(), '', {} as any)
		else if (e.response.status === 400)
			ctx.$toast.error(ctx.$en.bad_request(), '', {} as any)
		else if (e.response.status === 403)
			ctx.$toast.error(ctx.$en.login_error(), '', {} as any)
		else if (e.response.status === 500)
			ctx.$toast.error(ctx.$en.server_error(), '', {} as any)
		else ctx.$toast.error(e.response.statusText, '', {} as any)
	} else {
		Object.values(e.response.data?.errors).forEach((i: any) => {
			Object.values(i).forEach((t: any) => {
				ctx.$toast.error(t, '', {} as any)
			})
		})
	}
}

export const errorPage = (error: Function, e: AxiosError) => {
	const code = e.code
	let statusCode = null
	let message = null

	if (e.response) {
		statusCode = e.response.status

		if (e.response.data && e.response.data.errors) {
			const a = Object.values(e.response.data.errors)
			if (a.length > 0) {
				const b = Object.values(a[0] as any)
				if (b.length > 0) {
					message = b[0]
				}
			}
		}

		if (!message) message = e.response.statusText
	} else {
		if (code === 'ECONNREFUSED') {
			statusCode = 503
		} else {
			statusCode = e.code
		}
		message = e.message
	}

	error({ code, statusCode, message })
}

export const fanum = (v: any) => {
	return (
		String(v)
			?.split('')
			?.map((c) => {
				switch (c) {
					case '0':
						return '۰'
					case '1':
						return '۱'
					case '2':
						return '۲'
					case '3':
						return '۳'
					case '4':
						return '۴'
					case '5':
						return '۵'
					case '6':
						return '۶'
					case '7':
						return '۷'
					case '8':
						return '۸'
					case '9':
						return '۹'
					default:
						return c
				}
			})
			?.join('') || ''
	)
}

export const fanum2 = (v: any) => {
	return (
		String(v)
			?.split('')
			?.map((c) => {
				return c
			})
			?.join('') || ''
	)
}

const myPlugin: Plugin = ({ app }, inject) => {
	inject('apiUrl', ApiUrl)
	inject('routeUrl', RouteUrl)
	inject('toastErrors', toastErrors)
	inject('errorPage', errorPage)
	inject('en', EN)
}

export default myPlugin
