import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SectionTitle } from "../../../chunks/SectionTitle.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".about.svelte-y13cqp{padding:0 10px}.about__section.svelte-y13cqp{position:relative;display:flex;align-items:center;gap:20px;max-width:1000px;margin:0 auto;padding-left:10px;padding-right:10px;padding-top:clamp(30px, 5vw, 50px);padding-bottom:clamp(30px, 5vw, 50px)}.about__section.svelte-y13cqp:not(:last-child)::after{content:'';position:absolute;left:0;width:100%;height:3px;border-radius:50%;background:#ffa600}.about__section.svelte-y13cqp::after{bottom:0}.about__text.svelte-y13cqp{font-size:clamp(16px, 4vw, 20px);font-weight:500;text-align:center;line-height:1.3}.about__img.svelte-y13cqp{width:30%;min-height:250px;object-fit:cover}@media screen and (max-width: 600px){.about__img.svelte-y13cqp{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ofyejb_START -->${$$result.title = `<title>
        О нас
    </title>`, ""}<!-- HEAD_svelte-ofyejb_END -->`, ""} ${validate_component(SectionTitle, "SectionTitle").$$render($$result, { value: "О парке" }, {}, {})} <div class="about svelte-y13cqp" data-svelte-h="svelte-1h3uhyd"><div class="about__section svelte-y13cqp"><img src="/img/photo1.jpg" alt="Фотография из парка Z-park" class="about__img svelte-y13cqp"> <p class="about__text svelte-y13cqp">Развлекательный центр Z-park - это огромное пространство, на котором дети отправляются в активное путешествие, прыгают на батутах, пробираются сквозь препятствия в лабиринтах и еще многое, что позволяет ребенку выплеснуть свою энергию, а родителям с удовольствием разделить радость ребят.</p></div> <div class="about__section svelte-y13cqp"><p class="about__text svelte-y13cqp">Наша команда - это семья, которая понимает, что дети меняют нашу жизнь навсегда. Для нас очень важна среда, в которую погружаются юные мечтатели, - дух приключений и неограниченной свободы развлечений наполняют наш парк.</p> <img src="/img/photo1.jpg" alt="Фотография из парка Z-park" class="about__img svelte-y13cqp"></div> <div class="about__section svelte-y13cqp"><img src="/img/photo1.jpg" alt="Фотография из парка Z-park" class="about__img svelte-y13cqp"> <p class="about__text svelte-y13cqp">Развлекательный центр Z-park поражает своими размерами, большим количеством площадок и занятий для ребят с разными увлечениями. Здесь будет занимательно и весело как детям школьного возраста, так и самым маленьким посетителям.</p></div> <div class="about__section svelte-y13cqp"><p class="about__text svelte-y13cqp">Наш центр отвечает всем требованиям безопасности. В парке предусмотрена специальная зона ожидания для родителей, откуда они смогут наблюдать за своим ребенком.</p> <img src="/img/photo1.jpg" alt="Фотография из парка Z-park" class="about__img svelte-y13cqp"></div> </div>`;
});
export {
  Page as default
};
