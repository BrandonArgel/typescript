export {}
/**
 * Personalized types
 * - Interface
 * - Class
 * - Method
 * - Heritage
 */

// Interface
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

const showPicture = (picture: Picture) => {
    console.log(`title: ${picture.title}, date: ${picture.date}, orientation: ${PhotoOrientation[picture.orientation]}`);
}

showPicture({
    title: 'Me',
    date: '2022-02-13', // Today
    orientation: PhotoOrientation.Landscape
});

// Interface with optional properties
interface User {
    readonly id: number,
    name: string,
    email: string,
    pro: boolean,
    age?: number, // Optional
}

let user: User;
user = {
    id: 1,
    name: 'Brandon',
    email: 'brandargel@gmail.com',
    pro: true
};
console.log(user);

// Interface inheritance
interface Entity {
    id: number;
    title: string;
}
interface Album extends Entity {
    descripcion: string;
}
interface NewPicture extends Entity{
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title: 'Me',
    descripcion: 'My album'
}

const picture: NewPicture = {
    id: 1,
    title: 'Me',
    orientation: PhotoOrientation.Landscape
}

let newPicture = {} as NewPicture;
newPicture.id = 1;
newPicture.title = 'Mee';
console.log("album: ", album);
console.log("picture: ", picture);
console.log("newPicture: ", newPicture);
console.clear();

// Super Class
abstract class Item {
    protected readonly _id: number
    protected _title: string

    constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
    }
}

// Classes
class PictureClass extends Item {
    public static photoOrientation = PhotoOrientation;

    // Properties
    private _orientation: PhotoOrientation;

    // Constructor
    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title)
        this._orientation = orientation;
    }

    // Getters and setters
    get orientation(){
        return this._orientation;
    }
    set orientation(orientation: PhotoOrientation){
        this._orientation = orientation;
    }

    // Behaviors
    public toString(): string {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${PhotoOrientation[this._orientation]}]`;
    }
}

class AlbumClass {
    private _id: number;
    private _title: string;
    private _pictures: PictureClass[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
    }
    get pictures(){
        return this._pictures;
    }
    set pictures(pictures: PictureClass[]){
        this._pictures = pictures;
    }

    public addPicture(picture: PictureClass) {
        this._pictures.push(picture);
    }
}

const albumNew: AlbumClass = new AlbumClass(1, 'Personal pictures');
const pictureNew: PictureClass = new PictureClass(1, 'Me', PhotoOrientation.Landscape);
albumNew.addPicture(pictureNew)
console.log(albumNew);

// pictureNew.id = 2; // private readonly
pictureNew.title = 'My wife'; // private
albumNew.title = 'My album'; // private
console.log(albumNew);

class PicturePrivate {
    // Properties
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    // Constructor
    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // Behaviors
    public toString(): string {
        return `[id: ${this.#id}, title: ${this.#title}, orientation: ${PhotoOrientation[this.#orientation]}]`;
    }
}

class AlbumPrivate {
    #id: number;
    #title: string;
    #pictures: PicturePrivate[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: PicturePrivate) {
        this.#pictures.push(picture);
    }
}

const albumNew2: AlbumPrivate = new AlbumPrivate(1, 'Personal pictures');
const pictureNew2: PicturePrivate = new PicturePrivate(1, 'Me', PhotoOrientation.Landscape);
albumNew2.addPicture(pictureNew2)
console.log(albumNew2); // Empty object using # to make private properties

// pictureNew.id = 2; // Error because id is private
// pictureNew.title = 'My wife'; // Error because id is private
// albumNew.title = 'My album'; // Error because id is private
// console.log(albumNew);