<script>
    import SectionTitle from '$lib/component/SectionTitle.svelte'
    import MenuItem from '$lib/component/MenuItem.svelte';
    import { onMount } from "svelte";
    import menuList from '$lib/db/menuList'

    let anchors
    let cards
    let menuTitles
    let menu

    onMount(() => {
        menu = document.querySelector('.menu')
        anchors = document.querySelectorAll('a[href*="#"]')
        cards = document.querySelectorAll('.card')
        menuTitles = document.querySelectorAll('.menu__title')
        window.addEventListener('resize', titleMargin)
        titleMargin()
        setAnchor()
    })

    function titleMargin() {
        const menuSize = menu ? menu.getBoundingClientRect().left : 0
        let cardSize = cards[0] ? cards[0].getBoundingClientRect().left : 0
        menuTitles.forEach(title => title.style.padding = `0 ${cardSize - menuSize}px`)
    }

    function setAnchor() {
        anchors.forEach(anchor => anchor.addEventListener('click', (e) => {
            e.preventDefault()
            let targetElement = document.getElementById(anchor.getAttribute('href').substr(1))
            let headerHeight = document.querySelector('header').offsetHeight;
            let scrollTo = targetElement.offsetTop - headerHeight
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }))
    }
</script>


<svelte:head>
    <title>
        Кафе в Z-park
    </title>
</svelte:head>

<SectionTitle value='Кафе в Z-park'/>

<div class="menu-nav">
    {#each menuList as menu}
        <a class="menu-nav-item" href='#{menu.id}'>{menu.title}</a>
    {/each}
</div>

<div class='menu-content'>
    {#each menuList as menu}
        <MenuItem {...menu}/>
    {/each}
</div>


<style>
    .menu-content {
        display: flex;
        flex-direction: column;
        gap: clamp(20px, 5vw, 40px);
        padding-left: clamp(10px, 3vw, 40px);
        padding-right: clamp(10px, 3vw, 40px);
        padding-bottom: 30px;
    }
    .menu-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 5px;
        padding: 10px;
    }
    .menu-nav-item {
        padding: 5px 15px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        font-size: 14px;
        color: #000;
        border: 2px solid #000;
        border-radius: 50px;
        transition: all 0.3s;
        line-height: 1.3;
    }
    .menu-nav-item:hover {
        color: red;
        border-color: red;
    }
</style>
