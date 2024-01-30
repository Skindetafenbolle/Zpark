import { c as create_ssr_component, f as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const Price_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".prise-list.svelte-bhipzp{position:relative;max-width:1200px;margin:0 auto;margin-top:15px;outline:2px solid #000;box-shadow:0 5px 10px #8c8c8c;background:#fff}.prise-list.svelte-bhipzp:not(:last-child){margin-bottom:30px}.prise-list__title.svelte-bhipzp{position:absolute;top:0;text-transform:uppercase;text-align:center;margin:0;font-size:clamp(14px, 3vw, 20px);line-height:1.3;letter-spacing:2px}.prise-list__title.svelte-bhipzp::after{content:'';position:absolute;z-index:-1;top:calc(50% - 2px);left:0;width:100%;height:3px;background:#fff}.prise-list__inner.svelte-bhipzp{display:flex;justify-content:space-between;gap:20px;line-height:1.3}.prise-list__inner.svelte-bhipzp:not(:last-child){margin-bottom:20px}.prise-list__service-title.svelte-bhipzp,.prise-list__service-prise.svelte-bhipzp{font-size:clamp(12px, 2.5vw, 18px);text-transform:uppercase}.prise-list__service-prise.svelte-bhipzp{text-wrap:nowrap}.prise-list__service-description.svelte-bhipzp{color:#505050;font-size:clamp(12px, 2vw, 16px)}@media screen and (min-width: 650px){.prise-list.svelte-bhipzp{padding:30px 80px}.prise-list__title.svelte-bhipzp{padding:0 30px;left:50px;transform:translateY(-50%);background:#fff}.prise-list__inner.svelte-bhipzp:not(:last-child){margin-bottom:20px}}@media screen and (max-width: 650px){.prise-list.svelte-bhipzp{padding-top:25px;padding-right:clamp(10px, 3vw, 30px);padding-bottom:15px;padding-left:clamp(10px, 3vw, 30px)}.prise-list__title.svelte-bhipzp{width:95%;padding:0 5px;left:50%;transform:translateY(-50%) translateX(-50%);background:#fff}.prise-list__inner.svelte-bhipzp:not(:last-child){margin-bottom:clamp(10px, 2vw, 15px)}}",
  map: null
};
const Price = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "title" } = $$props;
  let { line = [["service", "00.00byn", "description"]] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  $$result.css.add(css$1);
  return `<div class="prise-list svelte-bhipzp"><h3 class="prise-list__title svelte-bhipzp">${escape(title)}</h3> ${each(line, (service, i) => {
    return `<div class="prise-list__inner svelte-bhipzp"><div class="prise-list__service"><p class="prise-list__service-title svelte-bhipzp">${escape(service[0])}</p> <p class="prise-list__service-description svelte-bhipzp">${escape(service[2] ?? "")}</p></div> <span class="prise-list__service-prise svelte-bhipzp">${escape(service[1])}</span> </div>`;
  })} </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1ktwn7s{background:#eaeaea}@media screen and (min-width: 600px){.content.svelte-1ktwn7s{padding:50px}}@media screen and (max-width: 600px){.content.svelte-1ktwn7s{padding:20px 10px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-132a5k1_START -->${$$result.title = `<title>Цены в Z-park</title>`, ""}<!-- HEAD_svelte-132a5k1_END -->`, ""} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "Цены в Z-park" }, {}, {})} <div class="content svelte-1ktwn7s">${validate_component(Price, "Price").$$render(
    $$result,
    {
      title: "Посещение парка до 18 лет",
      line: [
        ["Понедельник-четверг (1 чac - весь день)", "11 byn - 16 byn"],
        ["Пятница (1 чac - весь день)", " 13 byn - 19 byn"],
        [
          "Субота-воскресение, каникулы, праздничные дни (1 чac - весь день)",
          "16 byn - 19 byn"
        ]
      ]
    },
    {},
    {}
  )} ${validate_component(Price, "Price").$$render(
    $$result,
    {
      title: "бронирование комнат",
      line: [
        [
          "на 2 часа",
          "Бесплатно",
          "При заказе на баре от 60 byn (всё, кроме пиццы)"
        ]
      ]
    },
    {},
    {}
  )} ${validate_component(Price, "Price").$$render(
    $$result,
    {
      title: "продлени комнаты",
      line: [["Будний день", "40 byn"], ["Выходные, Праздники, каникулы", "50 byn"]]
    },
    {},
    {}
  )} ${validate_component(Price, "Price").$$render(
    $$result,
    {
      title: "Бронирование столов",
      line: [
        [
          "стол до 10 человек",
          " Беспланто",
          "При заказе на баре от 50 BYN (всё, кроме пиццы)"
        ],
        [
          "стол до 14 человек",
          " Беспланто",
          "При заказе на баре от 60 BYN (всё, кроме пиццы)"
        ],
        ["будни", "-", "Столики бронироуются в любое время"],
        ["Суббота", "-", "(10:00 - 15:00) (15:30 - 20:30)"],
        ["Воскресение", "-", "(10:00 - 14:30) (15:00 - 19:30)"]
      ]
    },
    {},
    {}
  )} ${validate_component(Price, "Price").$$render(
    $$result,
    {
      title: "Анимации",
      line: [
        ["Вынос торта(1 герой)", " 20 BYN"],
        [
          "Флешмоб",
          " 35 BYN",
          "Это особенный танец, который провобится с героем, во время этого танца дети могут веселиться и развлекаться всмете с героем, а в конце имениннику вынесут торт и он задует свечки"
        ],
        ["Флешмоб + вынос торта(1 герой)", "35 BYN"],
        [
          "Программа",
          "65 BYN",
          "Программа это то, чем можно поздравить именнинника и оставить массу положительных эмоций об этом дне"
        ],
        ["Блестящая дискотека", "80 BYN"],
        ["Дополнительный герой", "20 BYN"]
      ]
    },
    {},
    {}
  )} </div>`;
});
export {
  Page as default
};
