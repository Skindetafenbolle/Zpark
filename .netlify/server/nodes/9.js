import * as server from '../entries/pages/photo/_album_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photo/_album_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/photo/[album]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.4a7d116b.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SectionTitle.996d1c23.js"];
export const stylesheets = ["_app/immutable/assets/9.f07703d2.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
