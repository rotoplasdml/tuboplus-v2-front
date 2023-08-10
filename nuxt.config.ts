// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Tuboplus',
			htmlAttrs: {
				lang: 'es-MX'
			},
			'meta': [
				{ name: "description", content: 'Tuboplus'}
			],
			link: [
				{ 
					rel: 'stylesheet', 
					href: '/css/bootstrap.min.css',
				},
				{ 
					rel: 'stylesheet', 
					href: '/css/styles.css',
				}
			],
			script: [
				{ 
					src: '/js/bootstrap.bundle.min.js',
					body: true 
				}
			]
		}
	}
})