import { c as create_ssr_component, b as add_attribute, f as escape, g as null_to_empty, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const MenuCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card.svelte-97bii9.svelte-97bii9{position:relative;display:flex;flex-direction:column;width:100%;height:100%;padding:clamp(15px, 3vw, 20px);border:none;border-radius:5px;box-shadow:1px 1px 5px #ababab;background:#fff}.card__description.svelte-97bii9.svelte-97bii9{visibility:hidden;position:absolute;z-index:2;top:0;left:0;width:0;height:0;border-radius:inherit;line-height:1.3;font-size:clamp(16px, 2vw, 20px);transition:all .3s;overflow:hidden;background:#ff3131e0;color:#f5f5f5}.card.svelte-97bii9:hover .card__description.svelte-97bii9{visibility:visible;height:inherit;width:inherit;padding:inherit}.card__img.svelte-97bii9.svelte-97bii9{display:flex;align-items:center;justify-content:center;width:100%;height:200px;margin-bottom:10px;overflow:hidden;background:#fff}.card-picture.svelte-97bii9.svelte-97bii9{object-fit:cover;width:100%;height:100%;transition:0.5s}.card__inner.svelte-97bii9.svelte-97bii9{flex:auto;display:flex;flex-direction:column;gap:clamp(10px, 3vw, 20px)}.card__name.svelte-97bii9.svelte-97bii9{flex:auto;font-size:clamp(16px, 5vw, 18px);line-height:1.3}.card__description-sign.svelte-97bii9.svelte-97bii9{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;width:20px;height:20px;background:#fffa5d}.card__info.svelte-97bii9.svelte-97bii9{display:flex;gap:20px;justify-content:space-between;font-size:clamp(18px, 5vw, 22px);line-height:1.3}",
  map: null
};
const MenuCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dish = {
    name: "name",
    price: "price",
    grams: "grams",
    img: "",
    description: ""
  } } = $$props;
  let { key = "" } = $$props;
  if ($$props.dish === void 0 && $$bindings.dish && dish !== void 0)
    $$bindings.dish(dish);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css$2);
  return `<div class="card svelte-97bii9"${add_attribute("key", key, 0)}>${dish.description ? `<div class="card__description svelte-97bii9">${escape(dish.description)}</div>` : ``} <div class="card__img svelte-97bii9"><img class="${escape(null_to_empty(dish.img ? "card-picture" : ""), true) + " svelte-97bii9"}"${add_attribute("src", dish.img ?? "img/favicon.png", 0)}${add_attribute("alt", dish.name, 0)}></div> <div class="card__inner svelte-97bii9"><p class="card__name svelte-97bii9">${escape(dish.name ?? "name")} ${dish.description ? `<span class="card__description-sign svelte-97bii9" data-svelte-h="svelte-e60ohc">?</span>` : ``}</p> <div class="card__info svelte-97bii9"><span class="card__price">${escape(dish.price ?? "prise")}</span> <span class="card__grams">${escape(dish.grams ?? "")}</span></div></div> </div>`;
});
const MenuItem_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".menu__title.svelte-180fh82{text-transform:uppercase;font-size:clamp(24px, 3.5vw, 30px);line-height:1.3;margin:0;margin-bottom:clamp(10px, 3vw, 20px)}.menu__cards.svelte-180fh82{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 350px));grid-template-rows:auto;justify-items:center;justify-content:center;row-gap:30px;column-gap:20px}",
  map: null
};
const MenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "menu title" } = $$props;
  let { id = "" } = $$props;
  let { menu = [
    {
      name: "name",
      price: "price",
      grams: "",
      img: "",
      description: ""
    }
  ] } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.menu === void 0 && $$bindings.menu && menu !== void 0)
    $$bindings.menu(menu);
  $$result.css.add(css$1);
  return `<div class="menu"${add_attribute("id", id ?? "", 0)}><h3 class="menu__title svelte-180fh82">${escape(title)}</h3> <nav class="menu__cards svelte-180fh82">${each(menu, (dish) => {
    return `${validate_component(MenuCard, "MenuCard").$$render($$result, { dish }, {}, {})}`;
  })}</nav> </div>`;
});
let menuList = [
  {
    title: "Напитки",
    id: "drinks",
    menu: [
      {
        name: "Кофе",
        price: "5 BYN",
        grams: "80 мл",
        img: "img/cafe/coffee.webp"
      },
      {
        name: "Чай",
        price: "3 BYN",
        grams: "100 мл"
      }
    ]
  },
  {
    title: "Сеты",
    id: "sets",
    menu: [
      {
        name: "Сет №1 - 3 бургера и картошка фри",
        price: "18 BYN",
        grams: "400 гр",
        img: "img/cafe/set-1.jpg"
      },
      {
        name: "Сет №2 - бургер и картошка фри",
        price: "9 BYN",
        grams: "150 гр",
        img: "img/cafe/set-2.jpg"
      },
      {
        name: "Сет №3 - 3 порции нагетсов, 3 порции картошки фри и 3 колбаски",
        price: "25 BYN",
        grams: "500 гр",
        img: "img/cafe/set-3.jpg"
      }
    ]
  },
  {
    title: "Закуски",
    id: "snacks",
    menu: [
      {
        name: "Ход-дог французский",
        price: "3.5 BYN",
        grams: "150 гр"
      },
      {
        name: "Ход-дог датский",
        price: "4.5 BYN",
        grams: "160 гр"
      },
      {
        name: "Картофель фри",
        price: "3.5 BYN",
        grams: "100 гр"
      },
      {
        name: "Наггетсы",
        price: "4.5 BYN",
        grams: "200 гр"
      },
      {
        name: "Бургер",
        price: "6 BYN",
        grams: "200 гр"
      },
      {
        name: "Варшавская колбаска",
        price: "2 BYN",
        grams: "150 гр"
      },
      {
        name: "Сендвич 1 / 2",
        price: "3 / 5 BYN",
        grams: "150 / 300 гр"
      }
    ]
  },
  {
    title: "Пиццы",
    id: "pizzas",
    menu: [
      {
        name: "Super пицца",
        price: "18 BYN",
        grams: "400 гр",
        description: "Кукуруза, помидоры, ветчина, кочёная курица",
        img: "img/cafe/pizza-1.jpg"
      },
      {
        name: "Злодейская пицца",
        price: "18 BYN",
        grams: "400 гр",
        description: "Ветчина, охотничьи колбаски, пепперони, помидор, сладкий перец",
        img: "img/cafe/pizza-2.jpg"
      },
      {
        name: "Пицца чемпион",
        price: "18 BYN",
        grams: "400 гр",
        description: "Пепперони, лук, помидоры, копченая курица",
        img: "img/cafe/pizza-3.jpg"
      },
      {
        name: "Пицца 4-героя",
        price: "18 BYN",
        grams: "400 гр",
        description: "Ветчина, охотничьи колбаски, соленый огурец, лук",
        img: "img/cafe/pizza-4.jpg"
      }
    ]
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".menu-content.svelte-lrys2x{display:flex;flex-direction:column;gap:clamp(20px, 5vw, 40px);padding-left:clamp(10px, 3vw, 40px);padding-right:clamp(10px, 3vw, 40px);padding-bottom:30px}.menu-nav.svelte-lrys2x{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;column-gap:10px;row-gap:5px;padding:10px}.menu-nav-item.svelte-lrys2x{padding:5px 15px;text-transform:uppercase;text-decoration:none;text-align:center;font-weight:700;font-size:14px;color:#000;border:2px solid #000;border-radius:50px;transition:all 0.3s;line-height:1.3}.menu-nav-item.svelte-lrys2x:hover{color:red;border-color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-daem6l_START -->${$$result.title = `<title>
        Кафе в Z-park
    </title>`, ""}<!-- HEAD_svelte-daem6l_END -->`, ""} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "Кафе в Z-park" }, {}, {})} <div class="menu-nav svelte-lrys2x">${each(menuList, (menu) => {
    return `<a class="menu-nav-item svelte-lrys2x" href="${"#" + escape(menu.id, true)}">${escape(menu.title)}</a>`;
  })}</div> <div class="menu-content svelte-lrys2x">${each(menuList, (menu) => {
    return `${validate_component(MenuItem, "MenuItem").$$render($$result, Object.assign({}, menu), {}, {})}`;
  })} </div>`;
});
export {
  Page as default
};
