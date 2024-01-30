import { c as create_ssr_component, f as escape } from "./ssr.js";
const SectionTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title.svelte-1aix955{padding:10px;margin:0;font-size:clamp(20px,4.5vw, 35px);text-transform:uppercase;text-align:center;text-shadow:1px 1px 2px #000;line-height:1.1;word-spacing:5px;color:#f5f5f5;background:#ffa600}",
  map: null
};
const SectionTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "Заголовок секции" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  return `<h1 class="title svelte-1aix955">${escape(value)}</h1>`;
});
export {
  SectionTitle as S
};
