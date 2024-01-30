<script>
</script>

<svelte:head>
    <title>Ошибка</title>
</svelte:head>

<div class="error">
  <div class='container'>
    <div class='error__message'>
      <p class="error__title">404</p>
      <p class="error__subtitle">Страница не найдена</p>
      <p class='error__text'>Неправильно набран адрес или страницы не существует</p>
    </div>
    <div class='error__buttons'>
      <a href='/' class='error__btn btn__back'>Вернуться назад</a>
      <a href='/' class='error__btn btn__home'>На главную</a>
    </div>
  </div>
</div>

<style>
  .error {
  }
  .container {
    text-align: center;
    padding: 50px 20px;
  }
  .error__message {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    line-height: 1.3;
  }
  .error__title {
    font-weight: 700;
    font-size: clamp(100px, 20vw, 200px);
    color: #5e3ed0;
  }
  .error__subtitle {
    font-size: clamp(24px, 5vw, 30px);
  }
  .error__text {
    font-weight: 500;
    font-size: clamp(16px, 3vw, 20px);
    color: #757575;
  }
  .error__buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .error__btn {
    padding: 10px 20px;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid;
    border-radius: 5px;
    line-height: 1.3;
    font-weight: 500;
  }
  .btn__back {
    color: #5e3ed0;
    background: #f5f5f5;
  }
  .btn__home {
    color: #f5f5f5;
    border-color: #5e3ed0;
    background: #5e3ed0;
  }
</style>
