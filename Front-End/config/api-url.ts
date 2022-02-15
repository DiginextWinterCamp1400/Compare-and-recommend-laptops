export default {
	recommendUrl: () => `/recommend`,
	searchUrl: (name: string) =>
		`/search/?search=${name}&search_fields=product&search_fields=company`,
	registerUrl: (id: any) => `/register/${id}`,
}
