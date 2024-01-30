<script>
	import SectionTitle from '$lib/component/SectionTitle.svelte'
	import {fade} from 'svelte/transition'

	export let data

	let isGalleryOpen = false;
	let currentImage = 0;
	let images = data.inner

	const openGallery = i => {
		currentImage = i;
		isGalleryOpen = true;
		window.body.style.overflow = 'hidden'
	}

	const closeGallery = () => {
		isGalleryOpen = false;
		window.body.style.overflow = 'auto'
	}

	const nextImage = (e) => {
		let imgTarget = document.querySelector('.gallery__image')
		imgTarget.style.transform = 'translate(-150vw, -50%)'
		currentImage = (currentImage + 1) % images.length
		btnPointerEvents(e.target.closest('.gallery__btn-controls'))
	}

	const prevImage = (e) => {
		let imgTarget = document.querySelector('.gallery__image')
		imgTarget.style.transform = 'translate(100vw, -50%)'
		currentImage = (currentImage - 1 + images.length) % images.length
		btnPointerEvents(e.target.closest('.gallery__btn-controls'))
	};

	function btnPointerEvents(el) {
		el.style.pointerEvents = 'none'
		setTimeout(() => {
			el.style.pointerEvents = 'auto'
		}, 400);
	}

</script>

<SectionTitle value={data.name}/>

{#if isGalleryOpen}
  <div class="gallery" transition:fade={{ duration: 200 }}>
	<button class="gallery__btn-close" type="button" on:click={closeGallery}>&times;</button>

	<div class="gallery__content">
		{#each images as image, i}
			{#if currentImage === i}
				<img
					src={image}
					alt="Gallery"
					class="gallery__image"
					transition:fade={{ duration: 300, delay: 200}}
				/>
			{/if}
		{/each}
	</div>

		<div class='gallery__controls'>
			<button class="gallery__btn-controls gallery__btn-next" type="button" on:click={prevImage} disabled={currentImage === 0}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gallery__controls-svg" viewBox="0 0 16 16">
					<path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
				</svg>
			</button>
			<button class="gallery__btn-controls gallery__btn-previous" type="button" on:click={nextImage} disabled={currentImage === images.length - 1}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="gallery__controls-svg" viewBox="0 0 16 16">
					<path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
				</svg>
			</button>
		</div>
	</div>
{/if}


<div class='photos'>
	<div class='photos__back-container'>
		<a href='/photo' class='photos__back-btn'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="photos__back-img" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z"/>
			</svg>
			Назад
		</a>
	</div>

	<div class='photo__content'>
		{#each images as image, i}
			<a class="photo__img-link" href={image} on:click={() => openGallery(i)}>
				<img src={image} alt='Фото из альбома {data.name}' class='photo__img' >
			</a>
		{/each}
	</div>

</div>

<style>
	.gallery {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background-color: #000000cc;
		z-index: 11;
	}
	.gallery__btn-close {
		position: absolute;
		right: 20px;
		top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		width: 50px;
		height: 50px;
		cursor: pointer;
		font-size: 60px;
		color: #fff;
		background: transparent;
		border: none;
	}

	.gallery__content {
		position: relative;
		width: 100%;
		height: 100vh;
		padding-top: 60px;
		margin: 0 100px;
	}

	.gallery__image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: auto;
		height: auto;
		max-width: 100%;
		max-height: 80vh;
		transition: all .5s;
	}
	.gallery__controls {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.gallery__btn-controls {
		width: 100px;
		height: 100px;
		color: #fff;
		background: transparent;
		border: none;
	}
	.gallery__btn-previous {
		right: 20px;
	}
	.gallery__btn-next {
		left: 20px;
	}
	.gallery__controls-svg{
		width: 100%;
		transition: all 0.2s;
	}
	.gallery__controls-svg:hover{
		color: #b9bbff;
	}
	.gallery__btn-controls:disabled .gallery__controls-svg {
		color: #505050;
	}
	@media screen and (max-width: 900px) {
		.gallery {
			display: flex;
			flex-direction: column;
		}
		.gallery__btn-close {
			width: 50px;
			height: 50px;
			z-index: 2;
			right: 10px;
			top: 10px;
		}
		.gallery__content {
			width: 95%;
			height: calc(100vh - 200px);
			margin-bottom: 100px;
			margin-top: 70px;
		}
		.gallery__image {
			width: auto;
			height: auto;
			max-width: 100%;
			max-height: 100%;
		}
		.gallery__controls {
			justify-content: center;
			gap: 50px;
			top: auto;
			bottom: 0;
			transform: translateY(0);
		}
	}
	.photos__back-container {
		padding: 5px 0;
	}
	 .photos__back-btn {
		display: inline-block;
		padding: 3px 10px;
		text-decoration: none;
		font-size: 20px;
		font-weight: 500;
		border-radius: 5px;
		line-height: 1.3;
		color: #000;
		background: #aa86ff;
	}
	.photos__back-img {
		width: 16px;
		height: 16px;
	}
	.photos {
		padding-left: clamp(10px, 3vw, 50px);
        padding-right: clamp(10px, 3vw, 50px);
	}
	.photo__content {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
		justify-content: center;
		justify-items: center;
		gap: clamp(15px, 4vw, 50px);
		padding: 20px 0;
	}

	.photo__img-link {
		width: 300px;
		height: 200px;
		overflow: hidden;
		border-radius: 5px;
	}
	.photo__img-link:hover .photo__img {
		transform: scale(110%);
	}
	.photo__img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		transition: all 0.4s;
	}

</style>
