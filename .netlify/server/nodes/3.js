

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.31f320b3.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js","_app/immutable/chunks/Contacts.a4a98f81.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/popup.23b15c9f.js"];
export const stylesheets = ["_app/immutable/assets/3.7e58d0fb.css","_app/immutable/assets/Contacts.6d808107.css"];
export const fonts = [];
