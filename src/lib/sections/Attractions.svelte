<script>
    import { onMount } from "svelte";

    let cards = [
        {
            title: 'Поролоновая яма',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Батуты',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Зона для малышей',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Тарзанка',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Лабиринт',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Песочница',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Бассейн с шариками',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Кульбитные подушки',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Ледяная горка',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
        {
            title: 'Аэрохокей',
            description: 'Прыгайте, веселитесь и отрывайтесь!',
            img: '/img/photo1.jpg'
        },
    ];

    let cardsContainer
    let btnMore

    onMount(() => {
        cardsContainer = document.querySelector('.attractions__cards')
        btnMore = document.querySelector('.btn__more')
    })

    function openFullSection() {
        let show = +btnMore.dataset.show
        let btnText = btnMore.querySelector('.btn__more-text')
        let btnImg = btnMore.querySelector('.btn__more-img')

        if(!show) {
            btnMore.dataset.show = 1
            btnText.textContent = 'Скрыть'
            btnImg.style.transform = 'rotate(180deg)'
            cardsContainer.style.height = `${cardsContainer.scrollHeight}px`
        } else {
            btnMore.dataset.show = 0
            btnText.textContent = 'Показать все'
            btnImg.style.transform = ''
            cardsContainer.style.height = `${(260 + 30) * 2 - 30}px`
        }
    }
</script>

<div class="attractions">
    <div class='attractions__cards'>

        {#each cards as card }
            <div class='card'>
                <p class='card__title'>{card.title}</p>
                <p class='card__description'>{card.description}</p>
                <div class='card__img-container'>
                    <img src={card.img} alt='Картика {card.title}' class='card__img'>
                </div>
            </div>
        {/each}

    </div>

    <button class='btn__more' type="button" data-show="0" on:click={openFullSection} aria-labelledby="textBtnMore">
        <span id="textBtnMore" class='btn__more-text'>Показать все</span>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="btn__more-img arrow-down-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
        </svg>
    </button>

</div>

<style>
    .btn__more {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 0 auto;
        width: 300px;
        padding: 6px;
        border : none;
        transition: 0.3s;
        background: #ffa600;
        color: #fff;
    }
    .btn__more:hover {
        color: #000;
    }
    .btn__more-text {
        text-shadow: 0 0 1px #000;
        font-weight: 500;
        font-size: 16px;
    }
    .btn__more-img {
        height: 25px;
    }
    .attractions__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 340px));
        grid-template-rows: repeat(260px);
        justify-content: center;
        gap: 30px;
        overflow: hidden;
        max-width: calc((340px + 30px) * 3 - 30px);
        margin: 0 auto;
        height: calc((260px + 30px) * 2 - 30px);
        transition: all 0.5s;
        margin-bottom: 30px;
    }
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 260px;
        padding: 20px;
        border: 2.3px dashed #ffa600;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
    }
    .card:hover .card__img {
        transform: scale(110%);
    }
    .card__title {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 1.5px;
    }
    .card__description {
        width: calc(100% - 130px);
        line-height: 1.3;
        font-size: 16px;
        color: #414141;
    }
    .card__img-container {
        position: absolute;
        right: 0;
        bottom: 0;
        width: clamp(160px, 45vw, 180px);
        height: clamp(160px, 45vw, 180px);
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 93% 7% 25% 75% / 89% 55% 45% 11% ;
        background: grey;
        overflow: hidden;
    }
    .card__img {
        display: block;
        object-fit: cover;
        object-position: 30%;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
    }
</style>
