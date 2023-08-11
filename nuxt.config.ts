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
					href: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css',
				},
				{ 
					rel: 'stylesheet', 
					href: '/css/estilos.css',
				}
			],
			script: [
				{ 
					src: '/js/bootstrap.bundle.min.js',
					body: true 
				},
				{ 
					src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
				}
			]
		}
	}
})