import * as server from '../entries/pages/photo/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/photo/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.bf622948.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js"];
export const stylesheets = [];
export const fonts = [];
