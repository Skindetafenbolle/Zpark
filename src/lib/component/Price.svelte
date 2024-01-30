<script>
    export let title = 'title';
    export let line = [['service', '00.00byn', 'description']];
</script>

<div class='prise-list'>
    <h3 class='prise-list__title'>{title}</h3>
    {#each line as service, i}
        <div class='prise-list__inner'>
            <div class='prise-list__service'>
                <p class='prise-list__service-title'>{service[0]}</p>
                <p class='prise-list__service-description'>{service[2] ?? ''}</p>
            </div>
            <span class="prise-list__service-prise">{service[1]}</span>
        </div>
    {/each}
</div>

<style>
    .prise-list {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 15px;
        outline: 2px solid #000;
        box-shadow: 0 5px 10px #8c8c8c;
        background: #fff;
    }
    .prise-list:not(:last-child) {
        margin-bottom: 30px;
    }
    .prise-list__title {
        position: absolute;
        top: 0;
        text-transform: uppercase;
        text-align: center;
        margin: 0;
        font-size: clamp(14px, 3vw, 20px);
        line-height: 1.3;
        letter-spacing: 2px;
    }
    .prise-list__title::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: calc(50% - 2px);
        left: 0;
        width: 100%;
        height: 3px;
        background: #fff;
    }
    .prise-list__inner {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        line-height: 1.3;
    }
    .prise-list__inner:not(:last-child) {
        margin-bottom: 20px;
    }
    .prise-list__service-title,
    .prise-list__service-prise {
        font-size: clamp(12px, 2.5vw, 18px);
        text-transform: uppercase;
    }
    .prise-list__service-prise {
        text-wrap: nowrap;
    }
    .prise-list__service-description {
        color: #505050;
        font-size: clamp(12px, 2vw, 16px);
    }
    @media screen and (min-width: 650px) {
        .prise-list {
            padding: 30px 80px;
        }
        .prise-list__title {
            padding: 0 30px;
            left: 50px;
            transform: translateY(-50%);
            background: #fff;
        }
        .prise-list__inner:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    @media screen and (max-width: 650px) {
        .prise-list {
            padding-top: 25px;
            padding-right: clamp(10px, 3vw, 30px);
            padding-bottom: 15px;
            padding-left: clamp(10px, 3vw, 30px);
        }
        .prise-list__title {
            width: 95%;
            padding: 0 5px;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
            background: #fff;
        }
        .prise-list__inner:not(:last-child) {
            margin-bottom: clamp(10px, 2vw, 15px);
        }
    }
</style>
