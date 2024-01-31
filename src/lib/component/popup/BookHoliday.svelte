<script>
    import { onMount } from "svelte";
    import { setWheelNumber, setDate, setMaskTel } from "$lib/utils/inputMask.js";
    import { closePopup } from '$lib/utils/popup.js'

    let form;

    onMount(() => {
        form = document.querySelector('.form-booking');
        setWheelNumber('data-mask-num');
        setDate('data-mask-date');
        setMaskTel('data-mask-tel');
    });

    function validationForm() {
        const inputTel = form.querySelectorAll('input[data-mask-tel][required]');
        const inputNum = form.querySelectorAll('input[type="number"][required]');
        const inputDate = form.querySelectorAll('input[data-mask-date][required]');
        const inputText = form.querySelectorAll('input[type="text"][required]');
        const inputCheckbox = form.querySelectorAll('input[type="checkbox"][required]');

        inputTel.forEach(input => input.style.outlineColor = input.value.length < 19 ? 'red' : '#5e3ed0');
        inputNum.forEach(input => input.style.outlineColor = !input.value ? 'red' : '#5e3ed0');
        inputDate.forEach(input => input.style.outlineColor = !input.value || input.value < input.min || input.value > input.max ? 'red' : '#5e3ed0');
        inputCheckbox.forEach(input => input.parentNode.style.outlineColor = input.checked ? 'transparent' : 'red');
        inputText.forEach(input => input.style.outlineColor = !input.value ? 'red' : '#5e3ed0');
    }

    let formData = {
        name: "",
        date: "",
        name_kid: "",
        age_kid: "",
        count_kid: 1,
        number: "",
        formSource: "Site"
    };

    async function submitForm(event) {
        event.preventDefault();
        // https://zparkbackend.onrender.com
        // http://localhost:3000
        try {
            const feedbackResponse = await fetch('https://zparkbackend.onrender.com/sendFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (feedbackResponse.ok) {
                console.log('Form submitted successfully to /sendFeedback');
            } else {
                console.error('Form submission failed for /sendFeedback');
            }

            const messageResponse = await fetch('https://zparkbackend.onrender.com/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (messageResponse.ok) {
                console.log('Form submitted successfully to /send-message');
            } else {
                console.error('Form submission failed for /send-message');
            }
        } catch (error) {
            console.error(error);
        }
    }
</script>

<dialog class="popup" id="popupBooking">
    <div class='popup__header'>
        <p class="popup__title">Заказать праздник</p>
        <p class="popup__description">
            Оставьте заявку на проведение дня рождения и наши менеджеры свяжутся с вами и помогут с организацией.
        </p>
    </div>
    <div class='popup__content'>
        <div class='popup__image-container'>
            <img class="popup__image" src='/img/woman.png' alt='manager'>
        </div>
        <form class="form form-booking" method="post" enctype="application/json" on:submit={submitForm}>
            <label class='form__label'>Ваше имя *
                <input bind:value={formData.name} class="form__input" type="text" placeholder="Андрей" required>
            </label>
            <label class='form__label'>Дата проведения *
                <input bind:value={formData.date} class="form__input" type="date" data-mask-date required>
            </label>
            <label class='form__label'>Имя именинника
                <input bind:value={formData.name_kid} class="form__input" type="text" placeholder="Полина">
            </label>
            <label class='form__label'>Сколько лет исполняется
                <input bind:value={formData.age_kid} class="form__input" type="number" min='0' max='17' placeholder="0" data-mask-num>
            </label>
            <label class='form__label'>Количество детей *
                <input bind:value={formData.count_kid} class="form__input" type="number" min="1" max="100" data-mask-num  placeholder="1" required>
            </label>
            <label class='form__label'>Телефон *
                <input bind:value={formData.number} class="form__input" type='tel' data-mask-tel required>
            </label>
            <label class='form__label-confirm'>
                <input type='checkbox' class='form__input-confirm' required>
                Даю согласие на обработку персональных данных, в том числе в маркетинговых целях.
            </label>
            <button class="form__btn-send" type='submit' on:click={validationForm}>Отправить</button>
            <button class="popup__btn-close" type="button" on:click={closePopup} aria-label="Закрыть форму заказа праздника">
                <span class='popup__close-line'></span>
            </button>
        </form>
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: #00000071;
    }
    .popup {
        max-width: 900px;
        border: 2px solid #3e40d0;
        border-radius: 20px;
        box-shadow: 0 0 20px 1px #5e3ed0;

    }
    .popup__header {
        margin-bottom: 15px;
    }
     .popup__btn-close {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 45px;
        height: 45px;
        padding: 10px;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
    }
    .popup__btn-close:target {
        background: #3e40d017;
        outline: 2px solid #5e3ed0
    }
    .popup__close-line {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        transition: all 0.3s;
    }
    .popup__close-line:before,
    .popup__close-line:after {
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        width: 100%;
        height: 3px;
        border-radius: 5px;
        background: #000;
        transition: all .3s;
    }
    .popup__close-line:before {
        transform: rotate(45deg);
    }
    .popup__close-line:after {
        transform: rotate(-45deg);
    }
    .popup__btn-close:hover .popup__close-line:before,
    .popup__btn-close:hover .popup__close-line:after,
    .popup__btn-close:target .popup__close-line:before,
    .popup__btn-close:target .popup__close-line:after {
        background: #f85151;
    }
    .popup__btn-close:hover .popup__close-line,
    .popup__btn-close:target .popup__close-line {
        transform: scale(120%);
    }
    .popup__title {
        margin-bottom: 5px;
        padding: 0 40px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: clamp(16px, 5vw, 24px);
        text-align: center;
        line-height: 1.2;
    }
    .popup__description {
        max-width: 500px;
        margin: 0 auto;
        width: 100%;
        text-transform: uppercase;
        font-weight: 500;
        font-size: clamp(11px, 3vw, 14px);
        text-align: center;
        line-height: 1.4;
        color: #4a4a4a;
    }
    .popup__content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    .popup__image-container {
        display: flex;
        align-items: center;
        width: 400px;
    }
    .popup__image {
        object-fit: cover;
        width: 100%;
    }
    .form {
        display: flex;
        flex-direction: column;
        max-width: 450px;
    }
    .form__label {
        width: 100%;
        font-weight: 500;
        font-size: clamp(14px, 4vw, 16px);
        line-height: 1.5;
        padding-left: 10px;
    }
    .form__input {
        width: calc(100% + 10px);
        margin-left: -10px;
        padding: 5px 10px;
        height: 45px;
        outline: 1px solid #5e3ed0;
        border: none;
        border-radius: 5px;
        font-family: Rubik, sans-serif;
        font-size: clamp(16px, 4vw, 18px);
        line-height: 1.3;
        color: #505050;
        transition: box-shadow 0.3s;
    }
    .form__input::placeholder {
        color: #9a9a9a;
    }
    .form__input:hover, .form__input:focus  {
        outline: 2px solid #5e3ed0;
    }
    .form__input:focus  {
        box-shadow: 0 0 6px #3e40d0;
        background: #3e40d017;
    }
    .form__label-confirm {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 5px 0;
        font-size: clamp(12px, 3vw, 14px);
        font-weight: 500;
        line-height: 1.2;
        outline: 1px solid transparent;
        outline-offset: 2px;
        color: #505050;
    }
    .form__input-confirm {
        min-width: 15px;
        height: 15px;
        margin: 0;
    }
    .form__btn-send {
        align-self: center;
        text-transform: uppercase;
        width: 100%;
        height: 45px;
        padding: 5px 20px;
        font-size: clamp(14px, 4vw, 18px);
        font-weight: 700;
        border: 2px solid #5e3ed0;
        border-radius: 5px;
        color: #f5f5f5;
        background: #5e3ed0;
        transition: all .3s;
    }
    .form__btn-send:hover, .form__btn-send:focus {
        background: #f5f5f5;
        color: #5e3ed0;
        outline: none;
    }
    .form__btn-send:focus {
        box-shadow: 0 0 8px #3e40d0;
    }
    @media screen and (min-width: 650px) {
        .popup {
            padding: 20px;
        }
        .form {
            gap: 10px;
        }
    }
    @media screen and (max-width: 650px) {
        .popup {
            padding: 15px;
        }
        .popup__image-container {
            display: none;
        }
        .form {
            width: 100%;
            gap: 5px;
        }
    }
</style>
