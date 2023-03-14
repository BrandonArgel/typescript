"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    removeAlbum(album) {
        const index = this.album.indexOf(album);
        if (~index) {
            this.album.splice(index, 1);
        }
    }
}
exports.default = User;
