

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.355a0f14.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js","_app/immutable/chunks/SectionTitle.996d1c23.js"];
export const stylesheets = ["_app/immutable/assets/4.8cf8fb6a.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
