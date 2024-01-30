<script>
    export let dish = {name: 'name', price: 'price', grams: 'grams', img: '', description: ''};
    export let key = '';
</script>

<div class='card' {key}>
    {#if dish.description}
        <div class='card__description'>{dish.description}</div>
    {/if}
    <div class='card__img'>
        <img class={dish.img ? 'card-picture' : ''} src={dish.img ?? 'img/favicon.png'} alt={dish.name}>
    </div>
    <div class='card__inner'>
        <p class='card__name'>{dish.name ?? 'name'}
            {#if dish.description}
                <span class="card__description-sign">?</span>
            {/if}
            </p>
        <div class='card__info'>
            <span class='card__price'>{dish.price ?? 'prise'}</span>
            <span class='card__grams'>{dish.grams ?? ''}</span>
        </div>
    </div>
</div>

<style>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: clamp(15px, 3vw, 20px);
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #ababab;
        background: #fff;
    }
    .card__description {
        visibility: hidden;
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-radius: inherit;
        line-height: 1.3;
        font-size: clamp(16px, 2vw, 20px);
        transition: all .3s;
        overflow: hidden;
        background: #ff3131e0;
        color: #f5f5f5;
    }
    .card:hover .card__description {
        visibility: visible;
        height: inherit;
        width: inherit;
        padding: inherit;
    }
    .card__img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        margin-bottom: 10px;
        overflow: hidden;
        background: #fff;
    }
    .card-picture {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }
    .card__inner {
        flex: auto;
        display: flex;
        flex-direction: column;
        gap: clamp(10px, 3vw, 20px);
    }
    .card__name {
        flex: auto;
        font-size: clamp(16px, 5vw, 18px);
        line-height: 1.3;
    }
    .card__description-sign {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: #fffa5d;
    }
    .card__info {
        display: flex;
        gap: 20px;
        justify-content: space-between;
        font-size: clamp(18px, 5vw, 22px);
        line-height: 1.3;
    }
</style>
