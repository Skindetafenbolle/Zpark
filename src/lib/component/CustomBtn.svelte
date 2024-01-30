<script>
    import { openPopup } from '$lib/utils/popup.js'
    export let text
</script>

<button class="btn" type="button" on:click={openPopup}>{text}</button>

<style>
    .btn {
        position: relative;
        min-width: 130px;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
        border-radius: 2px;
        color: #000000;
        background: #ffa600;
        padding: 10px 20px;
        outline: none;
        transition: background .6s, box-shadow .3s, color .3s;
        animation: pulse 4.5s ease-out infinite normal running 0s none;
    }
    .btn::after {
        content: '';
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        transition: all 0.3s;
    }

    .btn:hover {
        animation: fastPulse 0.5s ease-out infinite normal running .2s none;
        box-shadow: inset 0 0 15px red;
        background: rgb(255, 61, 61);
        color: #f5f5f5;
    }
    .btn:hover:after{
        animation: fastPulse 0.5s ease-out infinite normal running .45s none;
    }

    @keyframes pulse {
        0% {
            outline: 2px solid #ffa600;
            transform: scale(102%);
        }
        10% {
            outline: 1px solid #ffa60000;
        }
        15% {
            outline: 1px solid #ffa60000;
            outline-offset: 20px;
            transform: scale(100%);
        }
        100% {
            outline: 1px solid #ffa60000;
            outline-offset: 20px;
        }
    }

    @keyframes fastPulse {
        0% {
            outline: 2px solid red;
        }
        50% {
            transform: scale(102%);
        }
        100% {
            outline: 1px solid rgba(255, 0, 0, 0);
            outline-offset: 15px;
        }
    }
</style>
