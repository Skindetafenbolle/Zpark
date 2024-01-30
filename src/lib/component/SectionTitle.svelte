<script>
    export let value = 'Заголовок секции';
</script>

<h1 class='title'>{value}</h1>

<style>
    .title {
        padding: 10px;
        margin: 0;
        font-size: clamp(20px,4.5vw, 35px);
        text-transform: uppercase;
        text-align: center;
        text-shadow: 1px 1px 2px #000;
        line-height: 1.1;
        word-spacing: 5px;
        color: #f5f5f5;
        background: #ffa600;
    }
</style>
