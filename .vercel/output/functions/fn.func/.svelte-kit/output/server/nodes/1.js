

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.UvNRpLH0.js","_app/immutable/chunks/scheduler.lVWCzlqv.js","_app/immutable/chunks/index.FKW1BGGa.js","_app/immutable/chunks/singletons.UCcNhKWz.js"];
export const stylesheets = [];
export const fonts = [];
