"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { User, Album, Picture, PhotoOrientation } from './photo-app';
const user_1 = __importDefault(require("./user"));
const album_1 = __importDefault(require("./album"));
const picture_1 = __importDefault(require("./picture"));
const photo_orientation_1 = __importDefault(require("./photo-orientation"));
const user = new user_1.default(1, 'BrandArgel', 'Brandon Argel', true);
const album = new album_1.default(10, 'Platzi Album');
const picture = new picture_1.default(1, 'Foto', '2020-08', photo_orientation_1.default.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log(user);
user.removeAlbum(album);
console.log(user);
