import photoAlbums from '$lib/db/photo';

export function load() {
	return {
		albums: photoAlbums.map((post) => ({
			link: post.link,
			name: post.name,
			inner: post.inner
		}))
	};
}
