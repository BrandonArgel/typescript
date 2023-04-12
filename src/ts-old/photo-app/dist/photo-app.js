"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.Album = exports.User = exports.Item = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
class Item {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
exports.Item = Item;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
}
exports.User = User;
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
class Picture extends Item {
    constructor(id, title, _date, _orientation) {
        super(id, title);
        this._date = _date;
        this._orientation = _orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
