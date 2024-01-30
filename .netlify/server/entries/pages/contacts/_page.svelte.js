import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
import { C as Contacts } from "../../../chunks/Contacts.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media screen and (min-width: 600px){.wrapper.svelte-j8i39f{max-width:2000px;margin:0 auto;padding:50px 20px}}@media screen and (max-width: 600px){.wrapper.svelte-j8i39f{padding:20px 10px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "Наши контакты" }, {}, {})} <div class="wrapper svelte-j8i39f">${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
