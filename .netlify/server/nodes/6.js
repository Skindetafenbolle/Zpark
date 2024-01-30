

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacts/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.1a238868.js","_app/immutable/chunks/scheduler.6a433d37.js","_app/immutable/chunks/index.adc1c6fb.js","_app/immutable/chunks/SectionTitle.996d1c23.js","_app/immutable/chunks/Contacts.a4a98f81.js"];
export const stylesheets = ["_app/immutable/assets/6.4ae1e769.css","_app/immutable/assets/SectionTitle.9446a752.css","_app/immutable/assets/Contacts.6d808107.css"];
export const fonts = [];
