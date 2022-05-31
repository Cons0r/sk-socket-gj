export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"start-46996111.js","js":["start-46996111.js","chunks/vendor-8479c64b.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "gamejolt",
				pattern: /^\/gamejolt\/?$/,
				names: [],
				types: [],
				path: "/gamejolt",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/gamejolt/[username]/[token]",
				pattern: /^\/api\/gamejolt\/([^/]+?)\/([^/]+?)\/?$/,
				names: ["username","token"],
				types: [null,null],
				load: () => import('./entries/endpoints/api/gamejolt/_username_/_token_/index.ts.js')
			}
		],
		validators: async () => {
			
			return {  };
		}
	}
};
