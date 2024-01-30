import { c as create_ssr_component, e as each, f as escape, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { C as Contacts } from "../../chunks/Contacts.js";
const Attractions_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".btn__more.svelte-16whmzr.svelte-16whmzr{display:flex;align-items:center;justify-content:center;gap:10px;margin:0 auto;width:300px;padding:6px;border:none;transition:0.3s;background:#ffa600;color:#fff}.btn__more.svelte-16whmzr.svelte-16whmzr:hover{color:#000}.btn__more-text.svelte-16whmzr.svelte-16whmzr{text-shadow:0 0 1px #000;font-weight:500;font-size:16px}.btn__more-img.svelte-16whmzr.svelte-16whmzr{height:25px}.attractions__cards.svelte-16whmzr.svelte-16whmzr{display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 340px));grid-template-rows:repeat(260px);justify-content:center;gap:30px;overflow:hidden;max-width:calc((340px + 30px) * 3 - 30px);margin:0 auto;height:calc((260px + 30px) * 2 - 30px);transition:all 0.5s;margin-bottom:30px}.card.svelte-16whmzr.svelte-16whmzr{position:relative;display:flex;flex-direction:column;height:260px;padding:20px;border:2.3px dashed #ffa600;border-radius:10px;overflow:hidden;background:#fff}.card.svelte-16whmzr:hover .card__img.svelte-16whmzr{transform:scale(110%)}.card__title.svelte-16whmzr.svelte-16whmzr{margin-bottom:20px;text-transform:uppercase;font-size:22px;font-weight:700;line-height:1.3;letter-spacing:1.5px}.card__description.svelte-16whmzr.svelte-16whmzr{width:calc(100% - 130px);line-height:1.3;font-size:16px;color:#414141}.card__img-container.svelte-16whmzr.svelte-16whmzr{position:absolute;right:0;bottom:0;width:clamp(160px, 45vw, 180px);height:clamp(160px, 45vw, 180px);font-weight:700;text-transform:uppercase;border-radius:93% 7% 25% 75% / 89% 55% 45% 11% ;background:grey;overflow:hidden}.card__img.svelte-16whmzr.svelte-16whmzr{display:block;object-fit:cover;object-position:30%;width:100%;height:100%;transition:all 0.5s}",
  map: null
};
const Attractions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [
    {
      title: "Поролоновая яма",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Батуты",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Зона для малышей",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Тарзанка",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Лабиринт",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Песочница",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Бассейн с шариками",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Кульбитные подушки",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Ледяная горка",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    },
    {
      title: "Аэрохокей",
      description: "Прыгайте, веселитесь и отрывайтесь!",
      img: "/img/photo1.jpg"
    }
  ];
  $$result.css.add(css$2);
  return `<div class="attractions"><div class="attractions__cards svelte-16whmzr">${each(cards, (card) => {
    return `<div class="card svelte-16whmzr"><p class="card__title svelte-16whmzr">${escape(card.title)}</p> <p class="card__description svelte-16whmzr">${escape(card.description)}</p> <div class="card__img-container svelte-16whmzr"><img${add_attribute("src", card.img, 0)} alt="${"Картика " + escape(card.title, true)}" class="card__img svelte-16whmzr"></div> </div>`;
  })}</div> <button class="btn__more svelte-16whmzr" type="button" data-show="0" aria-labelledby="textBtnMore" data-svelte-h="svelte-qq6leo"><span id="textBtnMore" class="btn__more-text svelte-16whmzr">Показать все</span> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="btn__more-img arrow-down-short svelte-16whmzr" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"></path></svg></button> </div>`;
});
const CustomBtn_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn.svelte-cfexj1{position:relative;min-width:130px;text-decoration:none;text-transform:uppercase;font-size:16px;font-weight:700;letter-spacing:0.5px;border-radius:2px;color:#000000;background:#ffa600;padding:10px 20px;outline:none;transition:background .6s, box-shadow .3s, color .3s;animation:svelte-cfexj1-pulse 4.5s ease-out infinite normal running 0s none}.btn.svelte-cfexj1::after{content:'';z-index:-1;position:absolute;left:0;top:0;width:100%;height:100%;border-radius:inherit;transition:all 0.3s}.btn.svelte-cfexj1:hover{animation:svelte-cfexj1-fastPulse 0.5s ease-out infinite normal running .2s none;box-shadow:inset 0 0 15px red;background:rgb(255, 61, 61);color:#f5f5f5}.btn.svelte-cfexj1:hover:after{animation:svelte-cfexj1-fastPulse 0.5s ease-out infinite normal running .45s none}@keyframes svelte-cfexj1-pulse{0%{outline:2px solid #ffa600;transform:scale(102%)}10%{outline:1px solid #ffa60000}15%{outline:1px solid #ffa60000;outline-offset:20px;transform:scale(100%)}100%{outline:1px solid #ffa60000;outline-offset:20px}}@keyframes svelte-cfexj1-fastPulse{0%{outline:2px solid red}50%{transform:scale(102%)}100%{outline:1px solid rgba(255, 0, 0, 0);outline-offset:15px}}",
  map: null
};
const CustomBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<button class="btn svelte-cfexj1" type="button">${escape(text)}</button>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".preview__container.svelte-175psvr{position:relative;height:100vh}.preview__img.svelte-175psvr{object-fit:cover;width:100%;height:100%}.preview__bg.svelte-175psvr{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;position:absolute;top:0;left:0;width:100%;height:100%;background:#0000009a}.preview__logo.svelte-175psvr{width:clamp(160px, 35vw, 250px)}.preview__text.svelte-175psvr{max-width:600px;padding:0 30px;color:#fff;font-weight:700;font-size:clamp(20px, 5vw, 50px);line-height:1.3;letter-spacing:3px;text-align:center}.place__content.svelte-175psvr{position:relative;display:flex;align-items:center;gap:20px;padding:30px 10px;max-width:1200px;margin:0 auto}.place__content.svelte-175psvr:before,.place__content.svelte-175psvr:after{content:'';position:absolute;left:50%;transform:translateX(-50%);width:100%;height:3px;border-radius:50%;background:#ffa600}.place__content.svelte-175psvr:before{top:0}.place__content.svelte-175psvr:after{bottom:0}.place__img.svelte-175psvr{width:30%;height:250px;object-fit:cover}.place__text.svelte-175psvr{font-weight:500;font-size:clamp(16px, 4vw, 20px);line-height:1.3;text-align:center}.place__text.svelte-175psvr:not(:last-child){margin-bottom:10px}.title.svelte-175psvr{text-transform:uppercase;font-size:clamp(28px, 4vw, 36px);font-weight:700;text-align:center;line-height:1.3;margin:0 0 20px 0}@media screen and (min-width: 600px){.wrapper.svelte-175psvr{max-width:2000px;margin:0 auto;padding:50px 20px}}@media screen and (max-width: 600px){.wrapper.svelte-175psvr{padding:20px 10px}.place__img.svelte-175psvr{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-5d5fcl_START -->${$$result.title = `<title>Парк развлечений в Витебске</title>`, ""}<!-- HEAD_svelte-5d5fcl_END -->`, ""} <div class="preview"><div class="preview__container svelte-175psvr"><img class="preview__img svelte-175psvr" src="/img/super-hero.webp" alt="Задний фон с супер героями"> <div class="preview__bg svelte-175psvr"><img class="preview__logo svelte-175psvr" src="/img/logo-removebg-cut.png" alt="Логотип Z park"> <p class="preview__text svelte-175psvr" data-svelte-h="svelte-64bj7x">СОВРЕМЕННЫЙ РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР</p> ${validate_component(CustomBtn, "CustomBtn").$$render($$result, { text: "Заказать праздник" }, {}, {})}</div></div></div> <div class="wrapper svelte-175psvr" data-svelte-h="svelte-1hoa4kc"><div class="place"><h2 class="title svelte-175psvr">Z-park</h2> <div class="place__content svelte-175psvr"><div class="place__description"><p class="place__text svelte-175psvr">В развлекательном центре Z-park богатый выбор спортивных активностей для детей разных возрастных групп. Каждый ребенок найдет для себя что-то интересное и познавательное, о чем будет рассказывать родным или своим друзьям.</p> <p class="place__text svelte-175psvr">Здесь можно культурно отдыхать, участвовать в играх и преодолении увлекательных препятствий, прохождении сложных лабиринтов. Z-park прекрасно подходит для отдыха всей семьей и дружными компаниями.</p></div> <img src="/img/photo1.jpg" alt="Развлекательный центр" class="place__img svelte-175psvr"></div></div></div> <section class="wrapper svelte-175psvr"><h2 class="title svelte-175psvr" data-svelte-h="svelte-p6zvgk">Развлечения</h2> ${validate_component(Attractions, "Attractions").$$render($$result, {}, {}, {})}</section> <section class="wrapper svelte-175psvr"><h2 class="title svelte-175psvr" data-svelte-h="svelte-4m1f85">Контакты</h2> ${validate_component(Contacts, "Contacts").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
