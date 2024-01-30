<script>
    import Contacts from "$lib/sections/Contacts.svelte";
    import Attractions from "../lib/sections/Attractions.svelte";
    import CustomBtn from "../lib/component/CustomBtn.svelte";

</script>

<svelte:head>
    <title>Парк развлечений в Витебске</title>
</svelte:head>

<div class='preview'>
    <div class='preview__container'>
        <img class='preview__img' src='/img/super-hero.webp' alt='Задний фон с супер героями'>
        <div class='preview__bg'>
            <img class='preview__logo' src='/img/logo-removebg-cut.png' alt='Логотип Z park'>
            <p class='preview__text'>СОВРЕМЕННЫЙ РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР</p>
            <CustomBtn text='Заказать праздник'/>
        </div>
    </div>
</div>

<div class='wrapper'>
    <div class='place'>
        <h2 class='title'>Z-park</h2>
        <div class='place__content'>
            <div class='place__description'>
                <p class='place__text'>
                    В развлекательном центре Z-park богатый выбор спортивных активностей для детей разных возрастных групп. Каждый ребенок найдет для себя что-то интересное и познавательное, о чем будет рассказывать родным или своим друзьям.
                </p>
                <p class='place__text'>
                    Здесь можно культурно отдыхать, участвовать в играх и преодолении увлекательных препятствий, прохождении сложных лабиринтов. Z-park прекрасно подходит для отдыха всей семьей и дружными компаниями.
                </p>
            </div>
            <img src='/img/photo1.jpg' alt='Развлекательный центр' class='place__img'>
        </div>
    </div>
</div>


<section class='wrapper'>
    <h2 class='title'>Развлечения</h2>
    <Attractions />
</section>
<section class='wrapper'>
    <h2 class='title'>Контакты</h2>
    <Contacts />
</section>

<style>
    .preview__container {
        position: relative;
        height: 100vh;
    }
    .preview__img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .preview__bg {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0000009a;
    }
    .preview__logo {
        width: clamp(160px, 35vw, 250px);
    }
    .preview__text {
        max-width: 600px;
        padding: 0 30px;
        color: #fff;
        font-weight: 700;
        font-size: clamp(20px, 5vw, 50px);
        line-height: 1.3;
        letter-spacing: 3px;
        text-align: center;
    }

    .place__content {
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 30px 10px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .place__content:before, .place__content:after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 3px;
        border-radius: 50%;
        background: #ffa600;
    }
    .place__content:before {
        top: 0;

    }
    .place__content:after {
        bottom: 0;
    }
    .place__img {
        width: 30%;
        height: 250px;
        object-fit: cover;
    }
    .place__text {
        font-weight: 500;
        font-size: clamp(16px, 4vw, 20px);
        line-height: 1.3;
        text-align: center;
    }
    .place__text:not(:last-child) {
        margin-bottom: 10px;
    }
    .title {
        text-transform: uppercase;
        font-size: clamp(28px, 4vw, 36px);
        font-weight: 700;
        text-align: center;
        line-height: 1.3;
        margin: 0 0 20px 0;
    }
    @media screen and (min-width: 600px) {
        .wrapper {
            max-width: 2000px;
            margin: 0 auto;
            padding: 50px 20px;
        }
    }
    @media screen and (max-width: 600px) {
        .wrapper {
            padding: 20px 10px;
        }
        .place__img {
            display: none;
        }
    }
</style>
