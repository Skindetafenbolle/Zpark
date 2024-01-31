<script>
    import { onMount } from 'svelte';
  
    async function submitForm(event) {
      event.preventDefault();
  
      const emailInput = document.querySelector('.subscribe__form-email');
      const email = emailInput.value;
  
      const agreementCheckbox = document.querySelector('.subscribe__agreement-checkbox');
  
      if (!agreementCheckbox.checked) {
        alert('Для подписки необходимо согласиться на обработку персональных данных');
        return;
      }
  
      const formData = { email: email };
  
      try {
        const emailResponse = await fetch('https://zparkbackend.onrender.com/sendEmailSub', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (emailResponse.ok) {
          console.log('Form submitted successfully to /sendEmailSub');
        } else {
            console.error('Form submission failed for /sendEmailSub');
            alert('Этот email уже подписан');
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    onMount(() => {
      const form = document.querySelector('.subscribe__form');
      form.addEventListener('submit', submitForm);
    });
</script>
<div class='subscribe'>
    <div class='subscribe__img'>
        <img src='/img/spider-man.png' class="subscribe__img-inner" alt='Картинка человека-паука'>
    </div>
    <div class='subscribe__inner'>
        <div class='subscribe__content'>
            <div class='subscribe__action'>
                <p class='subscribe__action-title'>Подпишитесь на новости</p>
                <p class='subscribe__action-text'>Акции, бонусы, сюрпризы</p>
            </div>
            <form method="post" class='subscribe__form'>
                <input class="subscribe__form-email" type='email' placeholder="Введите ваш E-mail адрес">
                <button class='subscribe__form-send' type="submit" aria-label="Кнопка подписаться на новости">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="btn-send__img" viewBox="0 0 16 16">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                    </svg>
                </button>
            </form>
        </div>
        <label class='subscribe__agreement'>
            <input class="subscribe__agreement-checkbox" type='checkbox' required>
            Выражаю свое согласие на обработку моих персональных данных
        </label>
    </div>
</div>

<style>
    .subscribe {
        display: flex;
        justify-content: center;
        padding: 10px clamp(10px, 3vw, 50px);
        box-shadow: 0 0 5px #6f6f6f;
        background: #fff700;
    }
    .subscribe__img {
        height: 150px;
    }
    .subscribe__img-inner {
        object-fit: cover;
        width: 150px;
        height: 100%;
    }
    .subscribe__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
    .subscribe__content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: clamp(10px, 2vw, 40px);
    }
    .subscribe__action {
        text-align: right;
    }
    .subscribe__action-title {
        margin: 0;
        text-shadow: 0 0 2px #5e3ed0;
        font-size: clamp(22px, 5vw, 30px);
        font-weight: 500;
        line-height: 1.3;
        color: #2487ff;
    }
    .subscribe__action-text {
        color: #5e3ed0;
        font-weight: 500;
        font-size: clamp(18px, 4vw, 22px);
        line-height: 1.3;
    }
    .subscribe__form {
        position: relative;
    }
    .subscribe__form-email {
        width: clamp(300px, 30vw, 400px);
        padding: 10px 55px 10px 15px;
        font-size: clamp(16px, 2vw, 20px);
        border: none;
        border-radius: 50px;
    }
    .subscribe__form-send {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background: #24b3ff;
        transition: .3s;
    }
    .subscribe__form-send:hover {
        transform: translateY(-50%) scale(1.1);
    }
    .btn-send__img {
        width: 50%;
        height: 50%;
        fill: #f5f5f5;
    }
    .subscribe__agreement {
        display: flex;
        align-items: center;
        gap: 5px;
        line-height: 1.2;
        font-size: clamp(12px, 2vw, 16px);
    }
    @media screen and (max-width: 500px) {
        .subscribe__img {
            display: none;
        }
        .subscribe__inner {
            align-items: center;
        }
    }
</style>
