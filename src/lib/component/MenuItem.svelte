<script>
    import MenuCard from "./MenuCard.svelte";
    export let title = 'menu title';
    export let id = '';
    export let menu = [{name: 'name', price: 'price', grams: '', img: '', description: ''}];
</script>

<div class='menu' id={id ?? ''}>
    <h3 class='menu__title'>{title}</h3>
    <nav class='menu__cards'>
        {#each menu as dish}
            <MenuCard {dish}/>
        {/each}
    </nav>
</div>

<style>
    .menu__title {
        text-transform: uppercase;
        font-size: clamp(24px, 3.5vw, 30px);
        line-height: 1.3;
        margin: 0;
        margin-bottom: clamp(10px, 3vw, 20px);
    }

    .menu__cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
        grid-template-rows: auto;
        justify-items: center;
        justify-content: center;
        row-gap: 30px;
        column-gap: 20px;
    }
</style>
