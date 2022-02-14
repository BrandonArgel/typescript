"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PicturePrivate_id, _PicturePrivate_title, _PicturePrivate_orientation, _AlbumPrivate_id, _AlbumPrivate_title, _AlbumPrivate_pictures;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Personalized types
 * - Interface
 * - Class
 * - Method
 * - Heritage
 */
// Interface
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const showPicture = (picture) => {
    console.log(`title: ${picture.title}, date: ${picture.date}, orientation: ${PhotoOrientation[picture.orientation]}`);
};
showPicture({
    title: 'Me',
    date: '2022-02-13',
    orientation: PhotoOrientation.Landscape
});
let user;
user = {
    id: 1,
    name: 'Brandon',
    email: 'brandargel@gmail.com',
    pro: true
};
console.log(user);
const album = {
    id: 1,
    title: 'Me',
    descripcion: 'My album'
};
const picture = {
    id: 1,
    title: 'Me',
    orientation: PhotoOrientation.Landscape
};
let newPicture = {};
newPicture.id = 1;
newPicture.title = 'Mee';
console.log("album: ", album);
console.log("picture: ", picture);
console.log("newPicture: ", newPicture);
console.clear();
// Super Class
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
// Classes
class PictureClass extends Item {
    // Constructor
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    // Getters and setters
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    // Behaviors
    toString() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${PhotoOrientation[this._orientation]}]`;
    }
}
PictureClass.photoOrientation = PhotoOrientation;
class AlbumClass {
    constructor(id, title) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(pictures) {
        this._pictures = pictures;
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const albumNew = new AlbumClass(1, 'Personal pictures');
const pictureNew = new PictureClass(1, 'Me', PhotoOrientation.Landscape);
albumNew.addPicture(pictureNew);
console.log(albumNew);
// pictureNew.id = 2; // private readonly
pictureNew.title = 'My wife'; // private
albumNew.title = 'My album'; // private
console.log(albumNew);
class PicturePrivate {
    // Constructor
    constructor(id, title, orientation) {
        // Properties
        _PicturePrivate_id.set(this, void 0);
        _PicturePrivate_title.set(this, void 0);
        _PicturePrivate_orientation.set(this, void 0);
        __classPrivateFieldSet(this, _PicturePrivate_id, id, "f");
        __classPrivateFieldSet(this, _PicturePrivate_title, title, "f");
        __classPrivateFieldSet(this, _PicturePrivate_orientation, orientation, "f");
    }
    // Behaviors
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _PicturePrivate_id, "f")}, title: ${__classPrivateFieldGet(this, _PicturePrivate_title, "f")}, orientation: ${PhotoOrientation[__classPrivateFieldGet(this, _PicturePrivate_orientation, "f")]}]`;
    }
}
_PicturePrivate_id = new WeakMap(), _PicturePrivate_title = new WeakMap(), _PicturePrivate_orientation = new WeakMap();
class AlbumPrivate {
    constructor(id, title) {
        _AlbumPrivate_id.set(this, void 0);
        _AlbumPrivate_title.set(this, void 0);
        _AlbumPrivate_pictures.set(this, void 0);
        __classPrivateFieldSet(this, _AlbumPrivate_id, id, "f");
        __classPrivateFieldSet(this, _AlbumPrivate_title, title, "f");
        __classPrivateFieldSet(this, _AlbumPrivate_pictures, [], "f");
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _AlbumPrivate_pictures, "f").push(picture);
    }
}
_AlbumPrivate_id = new WeakMap(), _AlbumPrivate_title = new WeakMap(), _AlbumPrivate_pictures = new WeakMap();
const albumNew2 = new AlbumPrivate(1, 'Personal pictures');
const pictureNew2 = new PicturePrivate(1, 'Me', PhotoOrientation.Landscape);
albumNew2.addPicture(pictureNew2);
console.log(albumNew2); // Empty object using # to make private properties
// pictureNew.id = 2; // Error because id is private
// pictureNew.title = 'My wife'; // Error because id is private
// albumNew.title = 'My album'; // Error because id is private
// console.log(albumNew);
