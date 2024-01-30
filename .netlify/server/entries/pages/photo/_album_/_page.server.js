import { e as error } from "../../../../chunks/index.js";
import { p as photoAlbums } from "../../../../chunks/photo.js";
function load({ params }) {
  const album = photoAlbums.find((post) => post.link === params.album);
  console.log(params);
  if (!album)
    throw error(404);
  return album;
}
export {
  load
};
