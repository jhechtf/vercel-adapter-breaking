

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.hoVbTI5j.js","_app/immutable/chunks/scheduler.lVWCzlqv.js","_app/immutable/chunks/index.FKW1BGGa.js"];
export const stylesheets = [];
export const fonts = [];
