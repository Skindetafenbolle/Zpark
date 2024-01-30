import { c as create_ssr_component } from "../../chunks/ssr.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-tzx2b{text-align:center;padding:50px 20px}.error__message.svelte-tzx2b{display:flex;flex-direction:column;gap:20px;margin-bottom:20px;line-height:1.3}.error__title.svelte-tzx2b{font-weight:700;font-size:clamp(100px, 20vw, 200px);color:#5e3ed0}.error__subtitle.svelte-tzx2b{font-size:clamp(24px, 5vw, 30px)}.error__text.svelte-tzx2b{font-weight:500;font-size:clamp(16px, 3vw, 20px);color:#757575}.error__buttons.svelte-tzx2b{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}.error__btn.svelte-tzx2b{padding:10px 20px;text-transform:uppercase;text-decoration:none;border:2px solid;border-radius:5px;line-height:1.3;font-weight:500}.btn__back.svelte-tzx2b{color:#5e3ed0;background:#f5f5f5}.btn__home.svelte-tzx2b{color:#f5f5f5;border-color:#5e3ed0;background:#5e3ed0}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-jy4ee0_START -->${$$result.title = `<title>Ошибка</title>`, ""}<!-- HEAD_svelte-jy4ee0_END -->`, ""} <div class="error svelte-tzx2b" data-svelte-h="svelte-1uetum8"><div class="container svelte-tzx2b"><div class="error__message svelte-tzx2b"><p class="error__title svelte-tzx2b">404</p> <p class="error__subtitle svelte-tzx2b">Страница не найдена</p> <p class="error__text svelte-tzx2b">Неправильно набран адрес или страницы не существует</p></div> <div class="error__buttons svelte-tzx2b"><a href="/" class="error__btn btn__back svelte-tzx2b">Вернуться назад</a> <a href="/" class="error__btn btn__home svelte-tzx2b">На главную</a></div></div> </div>`;
});
export {
  Error as default
};
