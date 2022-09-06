"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.c8d9a565c628418d829db7412d90ffe2 = void 0;
const p5_1 = __importDefault(require("p5"));
class c8d9a565c628418d829db7412d90ffe2 {
    constructor() {
        this.container = document.getElementById(c8d9a565c628418d829db7412d90ffe2.id);
        this.page = this.container.closest('.page');
        new p5_1.default((instance) => {
            console.log('instance c8d9a565c628418d829db7412d90ffe2 created');
            instance.setup = () => {
                const canv = instance.createCanvas(this.container.parentNode.offsetWidth, this.container.parentNode.offsetHeight);
                canv.parent(c8d9a565c628418d829db7412d90ffe2.id);
                instance.frameRate(1);
                instance.background(0);
            };
            instance.draw = () => {
                if (this.isVissible) {
                    console.log('instance c8d9a565c628418d829db7412d90ffe2 draw on page', this.page);
                    instance.background(0);
                }
                else {
                    console.log('instance c8d9a565c628418d829db7412d90ffe2 is hidden');
                }
            };
        });
    }
    get isVissible() {
        return !this.page.classList.contains('hidden');
    }
}
exports.c8d9a565c628418d829db7412d90ffe2 = c8d9a565c628418d829db7412d90ffe2;
c8d9a565c628418d829db7412d90ffe2.id = 'c8d9a565c628418d829db7412d90ffe2';
