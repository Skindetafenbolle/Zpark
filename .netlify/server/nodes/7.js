

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holidays/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.acbfaf1f.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/SectionTitle.996d1c23.js","_app/immutable/chunks/popup.23b15c9f.js"];
export const stylesheets = ["_app/immutable/assets/7.1228c0cb.css","_app/immutable/assets/SectionTitle.9446a752.css"];
export const fonts = [];
