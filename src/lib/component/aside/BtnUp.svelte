<script>
  import { onMount } from 'svelte';

  export let visibilityHeight = 0
  export let size = 30

  let btnUp;

  onMount(() => {
    btnUp = document.getElementById('btn-up');
    window.addEventListener('scroll', handleScroll);
    handleScroll()
  });

  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > visibilityHeight
    ? btnUp.classList.remove('btn-up__hide')
    : btnUp.classList.add('btn-up__hide');
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<button class="btn-up btn-up__hide" id="btn-up" style:width={`${size}px`} style:height={`${size}px`} on:click={scrollToTop} aria-label="Подняться вверх">
	<svg class="btn-up__img" xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
	</svg>
</button>

<style>
    .btn-up {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      padding: 0;
      transition: opacity 0.4s, visibility 0.4s, background 0.2s, fill 0.2s;
      background: #3b2559;
      opacity: 0.6;
    }
    .btn-up:hover {
        opacity: 1;
    }
    .btn-up__hide {
        visibility: hidden;
        opacity: 0;
    }
    .btn-up__img {
        display: block;
        width: 35px;
        height: 35px;
        fill: #f5f5f5;
    }
</style>
