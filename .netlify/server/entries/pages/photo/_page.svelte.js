import { c as create_ssr_component, f as escape, b as add_attribute, v as validate_component, e as each } from "../../../chunks/ssr.js";
import { p as photoAlbums } from "../../../chunks/photo.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const Album_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".album.svelte-ywjotc.svelte-ywjotc{text-decoration:none}.album__border.svelte-ywjotc.svelte-ywjotc{position:relative;z-index:5}.album__border.svelte-ywjotc.svelte-ywjotc::before,.album__border.svelte-ywjotc.svelte-ywjotc::after{content:'';position:absolute;width:100%;height:100%;border:1px solid #c6c6c6;border-radius:5px;box-shadow:inset -2px -2px 5px 1px #ffffff}.album__border.svelte-ywjotc.svelte-ywjotc::before{z-index:-2;top:3px;left:3px;background:#c1c1c1}.album__border.svelte-ywjotc.svelte-ywjotc::after{z-index:-3;top:7px;left:7px;background:#b9b9b9}.album__preview.svelte-ywjotc.svelte-ywjotc{position:relative;z-index:-1;height:200px;overflow:hidden;border-radius:5px;margin-bottom:10px;border:1px solid #a9a9a9}.album__preview-img.svelte-ywjotc.svelte-ywjotc{object-fit:cover;width:100%;height:100%;transition:all 0.4s}.album.svelte-ywjotc:hover .album__preview-img.svelte-ywjotc{transform:scale(1.1)}.album__bottom.svelte-ywjotc.svelte-ywjotc{display:flex;flex-direction:column}.album__name.svelte-ywjotc.svelte-ywjotc{text-transform:uppercase;text-align:center;font-weight:700;color:#000}.album__length.svelte-ywjotc.svelte-ywjotc{text-transform:uppercase;text-align:center;font-size:14px;font-weight:700;line-height:1;color:#6d6d6d}",
  map: null
};
const Album = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { album } = $$props;
  if ($$props.album === void 0 && $$bindings.album && album !== void 0)
    $$bindings.album(album);
  $$result.css.add(css$1);
  return `<a class="album svelte-ywjotc" href="${"/photo/" + escape(album.link, true)}"><div class="album__border svelte-ywjotc"><div class="album__preview svelte-ywjotc"><img class="album__preview-img svelte-ywjotc"${add_attribute("src", album.inner[0], 0)} alt="photo1"></div></div> <div class="album__bottom svelte-ywjotc"><p class="album__name svelte-ywjotc">${escape(album.name)}</p> <p class="album__length svelte-ywjotc">${escape(album.inner.length)} фото</p></div> </a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-my6tku{display:grid;justify-content:center;grid-template-columns:repeat(auto-fit, minmax(150px, 300px));gap:30px;padding:50px 10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-196junf_START -->${$$result.title = `<title>Альбомы Z-park</title>`, ""}<!-- HEAD_svelte-196junf_END -->`, ""} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "Альбомы из Z-park" }, {}, {})} <div class="content svelte-my6tku">${each(photoAlbums, (album) => {
    return `${validate_component(Album, "Album").$$render($$result, { album }, {}, {})}`;
  })} </div>`;
});
export {
  Page as default
};
