import { c as create_ssr_component, b as add_attribute, f as escape, v as validate_component, e as each } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const ReadMore_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-info.svelte-1v8p93r{padding:25px;max-width:350px;background:#3943ff}.card-info__text.svelte-1v8p93r{font-family:sans-serif;margin:0 0 15px 0;color:#f5f5f5;overflow:hidden;transition:all 0.4s}.card-info__btn-more.svelte-1v8p93r{border:2px solid #f5f5f5;background:#3943ff;color:#f5f5f5;font-size:16px;width:150px;height:35px;cursor:pointer;transition:0.3s}.card-info__btn-more.svelte-1v8p93r:hover{transform:scale(1.1)}",
  map: null
};
const ReadMore = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { id = "0" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<div class="container"><div class="card-info svelte-1v8p93r"${add_attribute("id", id, 0)}><p class="card-info__text svelte-1v8p93r">${escape(text)}</p> <button class="card-info__btn-more svelte-1v8p93r" type="button" data-svelte-h="svelte-1hjhpje">Подробнее</button></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info-block.svelte-n74crd{padding:40px 10px;display:flex;flex-wrap:wrap;gap:20px;justify-content:center}p.svelte-n74crd{margin:0;padding:0;line-height:1.5}.content.svelte-n74crd{display:flex;gap:20px;flex-wrap:wrap;padding:20px}.left.svelte-n74crd{flex:55%;width:40vw}.right.svelte-n74crd{flex:40%}.title.svelte-n74crd{font-weight:700;font-size:30px;margin-bottom:15px;line-height:1.2}.cards.svelte-n74crd{display:flex;flex-direction:column;gap:20px}.card.svelte-n74crd{padding:20px;border:2px solid #bebebe;box-shadow:2px 2px 5px #bebebe;background:#f5f5f5}.card__title.svelte-n74crd{font-size:26px;font-weight:700;margin-bottom:10px}.card__text.svelte-n74crd{font-size:18px}.list.svelte-n74crd{padding:20px;outline:4px dashed #d3d3d3;background:#d3d3d3}.info.svelte-n74crd{display:flex;flex-direction:column;gap:20px;margin:0 0 20px 0;padding-left:20px}.info__item.svelte-n74crd{text-transform:uppercase;font-weight:700;font-size:22px;line-height:1.3}.info__text.svelte-n74crd{text-transform:none;font-weight:400;font-size:18px;padding-top:10px}.btn.svelte-n74crd{text-transform:uppercase;background:#ffc011;border:none;border-radius:30px;font-size:18px;font-weight:700;color:#f5f5f5;text-shadow:1px 1px 2px #000;padding:10px 30px;box-shadow:1px 1px 2px #868686}@media screen and (max-width: 750px){.left.svelte-n74crd{min-width:280px}.right.svelte-n74crd{min-width:270px}.title.svelte-n74crd{font-size:20px}.card__title.svelte-n74crd{font-size:18px}.card__text.svelte-n74crd{font-size:16px}.info__item.svelte-n74crd{font-size:16px}.info__text.svelte-n74crd{font-size:16px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione odit, magni exercitationem labore illum possimus harum veritatis, error repudiandae vitae, similique velit culpa maiores cum libero suscipit commodi animi id ullam optio a illo necessitatibus laboriosam? Ratione molestiae non quia ab tenetur, reprehenderit nesciunt. Quaerat voluptates dolor corporis nihil cum quod labore culpa quam blanditiis facilis voluptatum eum et iure soluta quidem, libero laboriosam fugiat ratione autem recusandae dignissimos mollitia saepe! Nemo facilis at tenetur necessitatibus asperiores quas, aut dolorum? Iure accusamus necessitatibus ea ipsam odit tempore vitae! Omnis quia minima quae quam est modi veritatis, facilis autem repudiandae?"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione odit, magni exercitationem labore illum possimus harum veritatis, error repudiandae vitae, similique velit culpa maiores cum libero suscipit commodi animi id ullam optio a illo necessitatibus laboriosam? Ratione molestiae non quia ab tenetur, reprehenderit nesciunt. Quaerat voluptates dolor corporis nihil cum quod labore culpa quam blanditiis facilis voluptatum eum et iure soluta quidem, libero laboriosam fugiat ratione autem recusandae dignissimos mollitia saepe! Nemo facilis at tenetur necessitatibus asperiores quas, aut dolorum? Iure accusamus necessitatibus ea ipsam odit tempore vitae! Omnis quia minima quae quam est modi veritatis, facilis autem repudiandae?"
    },
    {
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni provident earum tenetur quibusdam, cupiditate dolorum."
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-166wa8v_START -->${$$result.title = `<title>
        Праздинки в Z-park
    </title>`, ""}<!-- HEAD_svelte-166wa8v_END -->`, ""} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "Праздники в Z-park" }, {}, {})} <div class="content svelte-n74crd"><div class="left svelte-n74crd" data-svelte-h="svelte-1p2d1d1"><p class="title svelte-n74crd">Немного информации</p> <div class="cards svelte-n74crd"><div class="card svelte-n74crd"><p class="card__title svelte-n74crd">Развлечения</p> <p class="card__text svelte-n74crd">На сайте мы собрали лучшие предложения для самых веселых праздников, но это лишь небольшая часть того, мы можем предложить вам! Узнать про все наши (практически безграничные) возможности можно пообщавшись с главным специалистом по праздникам в самом парке или по телефону +375 XX XXX XX XX.</p></div> <div class="card svelte-n74crd"><p class="card__title svelte-n74crd">Никакой арендной платы!</p> <p class="card__text svelte-n74crd">Мы забронируем для вас одну из комнат для праздников, Вам нужно будет только оплатить входные билеты для маленьких гостей торжества и внести минимальный депозит. Гости старше 18 лет проходят в парк бесплатно! Билеты на мероприятие действуют в течение всего дня - наиграться вдоволь получится у всех!</p></div> <div class="card svelte-n74crd"><p class="card__title svelte-n74crd">Угощения</p> <p class="card__text svelte-n74crd">Наш бренд-шеф создал специальное детское меню для праздников, а взрослые гости смогут выбрать вкусности из основного меню заранее или прямо в процессе торжества!</p></div></div></div> <div class="right svelte-n74crd"><p class="title svelte-n74crd" data-svelte-h="svelte-fg9jta">Можно заказать прямо сейчас!</p> <div class="list svelte-n74crd"><ol class="info svelte-n74crd" data-svelte-h="svelte-wm0xz8"><li class="info__item svelte-n74crd">Кто и когда
                    <p class="info__text svelte-n74crd">Выберите дату и уточните число гостей</p></li> <li class="info__item svelte-n74crd">Развлечения и услуги
                    <p class="info__text svelte-n74crd">Мы подобрали лучших фотографов, аквогримеров и аниматоров, чтобы сделать ваше торжество незабываемым!</p></li> <li class="info__item svelte-n74crd">Угощения
                    <p class="info__text svelte-n74crd">В нашем кафе самое необычное детское меню</p></li></ol> <button class="btn svelte-n74crd" type="button" data-svelte-h="svelte-u19fc2">Заказать</button></div></div></div> <div class="info-block svelte-n74crd">${each(cards, (card, i) => {
    return `${validate_component(ReadMore, "ReadMore").$$render($$result, { id: "card-info-" + i, text: card.text }, {}, {})}`;
  })} </div>`;
});
export {
  Page as default
};
