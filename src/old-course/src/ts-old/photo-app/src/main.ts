// import { User, Album, Picture, PhotoOrientation } from './photo-app';
import User from "./user";
import Album from "./album";
import Picture from "./picture";
import PhotoOrientation from "./photo-orientation";

const user = new User(1, 'BrandArgel', 'Brandon Argel', true);
const album = new Album(10, 'Platzi Album');
const picture = new Picture(1, 'Foto', '2020-08', PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log(user);

user.removeAlbum(album);

console.log(user);
