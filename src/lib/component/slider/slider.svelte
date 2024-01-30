<script>
	import {fade} from 'svelte/transition'
	import { onMount } from 'svelte';

	export let duration = 2000
	export let slides

	let currentSlide = 0
	let slider

	onMount(() => {
		slider = document.querySelector('.slider')
		sliderHeight()
	})

	function sliderHeight() {
		slider.style.height = `calc(100vh - ${window.header.clientHeight}px)`
	}

	const nextSlide = () => {
		currentSlide++
		if (currentSlide >= slides.length) {
			currentSlide = 0
		}
		timer()
	}
	const prevSlide = () => {
		currentSlide--
		if (currentSlide <= 0) {
			currentSlide = slides.length - 1
		}
		timer()
	}
	const goToSlide = (i) => {
		currentSlide = i
		timer()
	}
	let interval
	const timer = () => {
		clearInterval(interval)
		interval = setInterval(nextSlide, duration)
	}
	timer();
</script>

<div class="slider">
	{#each slides as slider, i}
		{#if currentSlide === i}
			<div class='slide' >
				<img
				class="slide-img"
				src={slider}
				alt='action'
				transition:fade={{ duration: 400 }}>
			</div>
		{/if}
	{/each}
	<button class="next" on:click={nextSlide}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
        	<path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
        </svg>
	</button>
	<button class="prev" on:click={prevSlide}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
        </svg>
	</button>
	<div class="nav">
		{#each slides as slider, i}
			<button
				class="bubble"
				on:click={() => goToSlide(i)}
				class:current={i === currentSlide}
				class:onedown={i === currentSlide - 1}
				class:twodown={i === currentSlide - 2}
				class:oneup={i === currentSlide + 1}
				class:twoup={i === currentSlide + 2}
			/>
		{/each}
	</div>
</div>

<style>
	.slider {
		position: relative;
		/* width: 100%; */
		/* margin: 0 auto; */
		/* padding-bottom: 50px; */
		/* height: clamp(400px, 50vw, 85vh); */
		/* height: 100vh; */
		background-color: #000;
	}
	.slide {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: calc(100%);
		overflow: hidden;
	}
	.slide-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.next,
	.prev {
		position: absolute;
		display: block;
		z-index: 2;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		padding: 0;
		border: none;
		border-radius: 50%;
		font-size: 40px;
		cursor: pointer;
		background: rgba(128, 128, 128, 0.415);
		color: #fff;
	}
	.next {
		right: 20px;
	}
	.prev {
		left: 20px;
	}
	.nav {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		z-index: 3;
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
		background: #0000008f;
	}
	.bubble {
		padding: 0;
		border: 0;
		height: 15px;
		width: 15px;
		border-radius: 50%;
		transition: all 0.4s ease-out;
		cursor: pointer;
	}
	.current {
		transform: scale(150%);
	}
	.onedown,
	.oneup {
		/* transform: scale(130%); */
	}
	.twodown,
	.twoup {
		/* transform: scale(110%); */
	}
</style>
