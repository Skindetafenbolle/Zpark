<script>
    import { onMount } from "svelte";

    let isChecked
    let checkbox;
	let burgerLineTop;
	let burgerLineCenter;
	let burgerLineBottom;
	let time = 200;

    onMount(() => {
        let links = document.querySelectorAll('.link')
        checkbox = document.querySelector('.burger-checkbox');
		let lines = document.querySelectorAll('.burger__line');
		burgerLineTop = lines[0];
		burgerLineCenter = lines[1];
		burgerLineBottom = lines[2];
        closeMenu(links)
    })

    function closeMenu(links) {
        links.forEach(link => link.addEventListener('click', (e) => {
            if(window.innerWidth < 800) {
                isChecked = false
                stopScroll()
            } else {
                document.body.style.overflow = 'visible'
            }
        }))
    }

    function stopScroll() {
        if(!checkbox.checked) document.body.style.overflow = 'visible'
        else document.body.style.overflow = 'hidden'
    }

    function burgerOpen() {
		lineTop();
		lineCenter();
		lineBottom();
        function lineTop() {
            if (!checkbox.checked) {
                burgerLineTop.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    burgerLineTop.style.transform = 'translateY(10px) rotate(45deg)';
                }, time);
            } else {
                burgerLineTop.style.transform = 'translateY(10px) rotate(0)';
                setTimeout(() => {
                    burgerLineTop.style.transform = '';
                }, time);
            }
        }
        function lineCenter() {
            if (!checkbox.checked) {
                burgerLineCenter.style.transform = 'scale(0)';
            } else {
                burgerLineCenter.style.transform = 'scale(1)';
            }
        }
        function lineBottom() {
            if (!checkbox.checked) {
                burgerLineBottom.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    burgerLineBottom.style.transform = 'translateY(-10px) rotate(-45deg)';
                }, time);
            } else {
                burgerLineBottom.style.transform = 'translateY(-10px) rotate(0)';
                setTimeout(() => {
                    burgerLineBottom.style.transform = '';
                }, time);
            }
        }
	}
</script>

<header class="header" id="header">
    <input class="burger-checkbox" type='checkbox' id="falseCheckbox" bind:checked={isChecked} on:change={stopScroll}>

    <button class="burger" on:click={burgerOpen} aria-label="Меню">
        <label class="burger__container" for="falseCheckbox">
            <span class="burger__line burger__line-top"></span>
            <span class="burger__line burger__line-center"></span>
            <span class="burger__line burger__line-bottom"></span>
        </label>
    </button>

    <a class="logo-link logo-mobile link" href='/' aria-label="Логотип Z park">
        <img src='/img/logo-removebg-cut.png' alt='Логотип Z-park' class='logo-img'>
    </a>

    <div class='header__menu' id="menu">
        <div class="header__nav">
            <a class="header__link link" href='/about'>О нас</a>
            <a class="header__link link" href='/holidays'>Праздники</a>
            <a class="header__link link" href='/photo'>Фото</a>
            <a class="logo-link logo-desktop link" href='/' aria-label="Логотип Z park">
                <img src='/img/logo-removebg-cut.png' alt='Логотип Z-park' class='logo-img'>
            </a>
            <a class="header__link link" href='/cafe'>Кафе</a>
            <a class="header__link link" href='/prices'>Цены</a>
            <a class="header__link link" href='/contacts'>Контакты</a>
        </div>
    </div>
</header>

<style>
    /* BURGER */
	.burger-checkbox {
		display: none;
	}
	.burger {
		padding: 0;
		border: none;
		background: transparent;
	}
	.burger__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 6px;
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
	.burger__line {
		width: 30px;
		height: 4px;
		border-radius: 5px;
		background: #000;
	}
	.burger__line-top {
		transition: all 0.2s;
	}
	.burger__line-center {
		transition: all 0.5s;
	}
	.burger__line-bottom {
		transition: all 0.2s;
	}
    .burger-checkbox:checked ~ #menu {
        left: 0;
    }
    /* //////////////////////// */
    .header {
        position: relative;
        box-shadow: 0 0 10px 1px #858585;
        background: #24b3ff;
    }
    .header__menu {
        overflow: auto;
        transition: all 0.5s;
    }
    .header__nav {
        display: flex;
        align-items: center;
    }
    .header__link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-transform: uppercase;
        font-family: Rubik;
        font-weight: 700;
        border: none;
        background: transparent;
        text-decoration: none;
        transition: all 0.2s;
        color: #000;
    }
    .header__link:hover {
        transform: scale(110%);
        text-shadow: 0px 0px 2px #938c00;
        color: #0062ff;
    }
    .logo-desktop {
        height: 60px;
        width: 100%;
    }
    .logo-mobile {
        height: 50px;
    }
    .logo-img {
        object-fit: contain;
        height: 100%;
        width: 100%;
        transition: all 0.5s;
    }

    @media screen and (min-width: 800px) {
        .header {
            overflow: hidden;
        }
        .burger {
            display: none;
        }
        .header__menu {
            overflow: hidden;
            padding: 10px;
        }
        .logo-mobile{
            display: none;
        }
        .header__nav {
            box-shadow: 0 0 10px #878787;
            background: #fff;
            /* height: clamp(55px, 6.5vw, 80px); */
        }
        .header__link  {
            font-size: clamp(14px, 1.7vw, 18px);
        }
    }

    @media screen and (max-width: 800px) {
        .header {
            overflow: visible;
            display: flex;
            align-items: center;
            padding: 0 10px;
            height: clamp(50px, 11vw, 70px);
        }
        .burger {
            display: flex;
        }
        .header__menu {
            position: absolute;
            top: 100%;
            left: -100%;
            width: 100%;
            min-height: calc(100vh - 100%);
            padding: 10px 10px 50px 10px;
            background: #f5f5f5;
        }
        .logo-link {
            display: block;
            margin: 0 auto;
            transform: translateX(-25px);
        }
        .logo-desktop{
            display: none;
        }
        .header__nav {
            padding: 0;
            flex-direction: column;
            background: transparent;
            box-shadow: none;

            gap: 20px;
        }
        .header__link  {
            text-align: center;
            width: 90%;
            font-size: 20px;
            line-height: 1.3;
        }
    }

</style>
