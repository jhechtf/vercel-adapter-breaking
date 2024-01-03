export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cJ73yA9k.js","app":"_app/immutable/entry/app.Tzwge17Y.js","imports":["_app/immutable/entry/start.cJ73yA9k.js","_app/immutable/chunks/scheduler.lVWCzlqv.js","_app/immutable/chunks/singletons.UCcNhKWz.js","_app/immutable/entry/app.Tzwge17Y.js","_app/immutable/chunks/scheduler.lVWCzlqv.js","_app/immutable/chunks/index.FKW1BGGa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
