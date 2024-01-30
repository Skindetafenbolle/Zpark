    <div class='section'>
        <div class='map-container'>
            <img src='/img/map.png' alt='Карта проеза' class='map__img'>
        </div>
        <div class='contacts'>
                <div class='contact'>
                    <img src='/svg/geo-alt-fill.svg' alt='Картинка адреса' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наш адрес</p>
                        <p class='contact__text'>проспект Фрунзе, 81к33, Витебск</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/telephone-fill.svg' alt='Картинка телефон' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наш телефон</p>
                        <p class='contact__text'>+ 375 ХХ ХХХ ХХ ХХ</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/clock.svg' alt='Картинка время' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Время работы</p>
                        <p class='contact__text'>11:00 - 20:00 каждый день</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/envelope-fill.svg' alt='Картинка емаил' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Наша почта</p>
                        <p class='contact__text'>z_park_vitebsk</p>
                    </div>
                </div>
                <div class='contact'>
                    <img src='/svg/star-fill.svg' alt='Картинка' class='contact__img'>
                    <div class='contact__content'>
                        <p class='contact__title'>Мы в соц. сетях</p>
                        <a href="https://vk.com/z_park_vitebsk" target="_blank" class='contact__text'>
                            <img src='/svg/vk.svg' alt='Картинка вконтакте' class='contact__img-network'>
                            Вконтакте
                        </a>
                        <a href="https://www.youtube.com/channel/UCRRIZbUwBzzHOlL6ezvpHrg" target="_blank" class='contact__text'>
                            <img src='/svg/youtube.svg' alt='Картинка ютуб' class='contact__img-network'>
                            Youtube
                        </a>
                        <a href="https://www.instagram.com/zpark_vitebsk/" target="_blank" class='contact__text'>
                            <img src='/svg/instagram.svg' alt='Картинка инстаграм' class='contact__img-network'>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
    </div>

<style>
    .section {
        display: flex;
        justify-content: center;
        gap: clamp(30px, 4vw, 50px);
    }
    .map-container {
        align-self: center;
        display: flex;
        justify-content: center;
        overflow: hidden;
        border: 1px solid #9d9d9d;
        box-shadow: 2px 2px 10px #9d9d9d;
    }
    .map__img {
        object-position: center;
        object-fit: cover;
        width: 100%;
    }
    .contacts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .contact {
        display: flex;
        gap: 10px;
        border: 1px solid #dadada;
        padding: clamp(10px, 1.5vw, 20px);
        box-shadow: 1px 1px 4px #c3c3c3;
        border-radius: 10px;
        background: #fff;
    }

    .contact__img {
        width: 30px;
        height: 30px;
    }
    .contact__content {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .contact__title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: clamp(16px, 2vw, 18px);
        line-height: 1.3;
    }
    .contact__text {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: clamp(16px, 2vw, 18px);
        font-weight: 500;
        line-height: 1.3;
        text-decoration: none;
        color: #606060;
    }
    a.contact__text:hover {
        color: red;
    }
    .contact__img-network {
        width: 20px;
        height: 20px;
    }
    @media screen and (min-width: 700px) {
        .map-container {
            width: 60vw;
            max-width: 1000px;
            height: 60vw;
            max-height: 700px;
        }
    }

    @media screen and (max-width: 700px) {
        .section {
            flex-direction: column;
        }
        .map-container {
            width: 100%;
            height: 50vh;
        }
        .contacts {
            max-width: 500px;
            width: 100%;
            margin: 0 auto
        }
    }
</style>
