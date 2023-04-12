"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./item"));
class Picture extends item_1.default {
    constructor(id, title, _date, _orientation) {
        super(id, title);
        this._date = _date;
        this._orientation = _orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
    }
}
exports.default = Picture;
