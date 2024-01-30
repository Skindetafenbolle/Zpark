import { error } from '@sveltejs/kit';
import photoAlbums from '$lib/db/photo';

export function load({ params }) {
	const album = photoAlbums.find((post) => post.link === params.album);
	console.log(params);

	if (!album) throw error(404);

	return album;
}
