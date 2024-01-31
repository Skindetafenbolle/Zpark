import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["img/cafe/coffee.webp","img/cafe/donuts.jpg","img/cafe/pizza-1.jpg","img/cafe/pizza-2.jpg","img/cafe/pizza-3.jpg","img/cafe/pizza-4.jpg","img/cafe/set-1.jpg","img/cafe/set-2.jpg","img/cafe/set-3.jpg","img/favicon-removebg.png","img/favicon.jpg","img/favicon.png","img/logo-removebg-cut.png","img/logo-removebg.png","img/logo.jpg","img/map.png","img/photo1.jpg","img/spider-man.png","img/super-hero.jpg","img/super-hero.webp","img/woman.png","reset.css","svg/arrow-90deg-down.svg","svg/arrow-down-short.svg","svg/call.svg","svg/caret-left-fill.svg","svg/caret-left.svg","svg/caret-right-fill.svg","svg/caret-right.svg","svg/clock.svg","svg/envelope-fill.svg","svg/geo-alt-fill.svg","svg/gift-fill.svg","svg/instagram.svg","svg/letter-fill.svg","svg/send-fill.svg","svg/star-fill.svg","svg/telephone-fill.svg","svg/vk.svg","svg/youtube.svg"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png",".css":"text/css",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.6b97e3d6.js","app":"_app/immutable/entry/app.d19c4461.js","imports":["_app/immutable/entry/start.6b97e3d6.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/entry/app.d19c4461.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cafe",
				pattern: /^\/cafe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/holidays",
				pattern: /^\/holidays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/photo",
				pattern: /^\/photo\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/photo/[album]",
				pattern: /^\/photo\/([^/]+?)\/?$/,
				params: [{"name":"album","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/prices",
				pattern: /^\/prices\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
