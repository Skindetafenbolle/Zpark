<script>
    import SectionTitle from "$lib/component/SectionTitle.svelte";
    import ReadMore from "$lib/component/ReadMore.svelte";
    import { openPopup } from '$lib/utils/popup.js'

    let cards = [
        {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione odit, magni exercitationem labore illum possimus harum veritatis, error repudiandae vitae, similique velit culpa maiores cum libero suscipit commodi animi id ullam optio a illo necessitatibus laboriosam? Ratione molestiae non quia ab tenetur, reprehenderit nesciunt. Quaerat voluptates dolor corporis nihil cum quod labore culpa quam blanditiis facilis voluptatum eum et iure soluta quidem, libero laboriosam fugiat ratione autem recusandae dignissimos mollitia saepe! Nemo facilis at tenetur necessitatibus asperiores quas, aut dolorum? Iure accusamus necessitatibus ea ipsam odit tempore vitae! Omnis quia minima quae quam est modi veritatis, facilis autem repudiandae?'},
        {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione odit, magni exercitationem labore illum possimus harum veritatis, error repudiandae vitae, similique velit culpa maiores cum libero suscipit commodi animi id ullam optio a illo necessitatibus laboriosam? Ratione molestiae non quia ab tenetur, reprehenderit nesciunt. Quaerat voluptates dolor corporis nihil cum quod labore culpa quam blanditiis facilis voluptatum eum et iure soluta quidem, libero laboriosam fugiat ratione autem recusandae dignissimos mollitia saepe! Nemo facilis at tenetur necessitatibus asperiores quas, aut dolorum? Iure accusamus necessitatibus ea ipsam odit tempore vitae! Omnis quia minima quae quam est modi veritatis, facilis autem repudiandae?'},
        {text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni provident earum tenetur quibusdam, cupiditate dolorum.'},
        ];
</script>

<svelte:head>
    <title>
        Праздинки в Z-park
    </title>
</svelte:head>

<SectionTitle value='Праздники в Z-park'/>
<div class='content'>
    <div class='left'>
        <p class='title'>Немного информации</p>
        <div class='cards'>
            <div class='card'>
                <p class='card__title'>Развлечения</p>
                <p class='card__text'>
                    На сайте мы собрали лучшие предложения для самых веселых праздников, но это лишь небольшая часть того, мы можем предложить вам! Узнать про все наши (практически безграничные) возможности можно пообщавшись с главным специалистом по праздникам в самом парке или по телефону +375 XX XXX XX XX.
                </p>
            </div>
            <div class='card'>
                <p class='card__title'>Никакой арендной платы!</p>
                <p class='card__text'>
                    Мы забронируем для вас одну из комнат для праздников, Вам нужно будет только оплатить входные билеты для маленьких гостей торжества и внести минимальный депозит. Гости старше 18 лет проходят в парк бесплатно! Билеты на мероприятие действуют в течение всего дня - наиграться вдоволь получится у всех!
                </p>
            </div>
            <div class='card'>
                <p class='card__title'>Угощения</p>
                <p class='card__text'>
                    Наш бренд-шеф создал специальное детское меню для праздников, а взрослые гости смогут выбрать вкусности из основного меню заранее или прямо в процессе торжества!
                </p>
            </div>
        </div>
    </div>
    <div class='right'>
        <p class='title'>Можно заказать прямо сейчас!</p>
        <div class='list'>
            <ol class='info'>
                <li class='info__item'>Кто и когда
                    <p class='info__text'>Выберите дату и уточните число гостей</p>
                </li>
                <li class='info__item'>Развлечения и услуги
                    <p class='info__text'>Мы подобрали лучших фотографов, аквогримеров и аниматоров, чтобы сделать ваше торжество незабываемым!</p>
                </li>
                <li class='info__item'>Угощения
                    <p class='info__text'>В нашем кафе самое необычное детское меню</p>
                </li>
            </ol>
            <button class='btn' type="button" on:click={openPopup}>Заказать</button>
        </div>
    </div>
</div>
<div class='info-block'>
    {#each cards as card, i}
        <ReadMore id={'card-info-' + i} text={card.text}/>
    {/each}
</div>

<style>
    .info-block {
        padding: 40px 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
    p {
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
    .content {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        padding: 20px;
    }
    .left {
        flex: 55%;
        width: 40vw;
    }
    .right {
        flex: 40%;
    }
    .title {
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 15px;
        line-height: 1.2;
    }
    .cards {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .card {
        padding: 20px;
        border: 2px solid #bebebe;
        box-shadow: 2px 2px 5px #bebebe;
        background: #f5f5f5;
    }
    .card__title {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 10px;
    }
    .card__text {
        font-size: 18px;
    }
    .list {
        padding: 20px;
        outline: 4px dashed #d3d3d3;
        background: #d3d3d3;
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 0 20px 0;
        padding-left: 20px;

    }
    .info__item {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 22px;
        line-height: 1.3;
    }
    .info__text {
        text-transform: none;
        font-weight: 400;
        font-size: 18px;
        padding-top: 10px;
    }
    .btn {
        text-transform: uppercase;
        background: #ffc011;
        border: none;
        border-radius: 30px;
        font-size: 18px;
        font-weight: 700;
        color: #f5f5f5;
        text-shadow: 1px 1px 2px #000;
        padding: 10px 30px;
        box-shadow: 1px 1px 2px #868686;
    }

    @media screen and (max-width: 750px) {
        .left {
            min-width: 280px;
        }
        .right {
            min-width: 270px;
        }
        .title {
            font-size: 20px;
        }
        .card__title {
            font-size: 18px;
        }
        .card__text {
            font-size: 16px;
        }
        .info__item {
            font-size: 16px;
        }
        .info__text {
            font-size: 16px;
        }
    }
</style>
