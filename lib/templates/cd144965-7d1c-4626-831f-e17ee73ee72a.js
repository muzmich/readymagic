"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cd1449657d1c4626831fe17ee73ee72a = void 0;
const p5_1 = __importDefault(require("p5"));
class cd1449657d1c4626831fe17ee73ee72a {
    constructor() {
        this.container = document.getElementById(cd1449657d1c4626831fe17ee73ee72a.id);
        this.page = this.container.closest('.page');
        new p5_1.default((instance) => {
            console.log('instance cd1449657d1c4626831fe17ee73ee72a created');
            instance.setup = () => {
                const canv = instance.createCanvas(this.container.parentNode.offsetWidth, this.container.parentNode.offsetHeight);
                canv.parent(cd1449657d1c4626831fe17ee73ee72a.id);
                instance.frameRate(1);
                instance.background(0);
            };
            instance.draw = () => {
                if (this.isVissible) {
                    console.log('instance cd1449657d1c4626831fe17ee73ee72a draw on page', this.page);
                    instance.background(0);
                }
                else {
                    console.log('instance cd1449657d1c4626831fe17ee73ee72a is hidden');
                }
            };
        });
    }
    get isVissible() {
        return !this.page.classList.contains('hidden');
    }
}
exports.cd1449657d1c4626831fe17ee73ee72a = cd1449657d1c4626831fe17ee73ee72a;
cd1449657d1c4626831fe17ee73ee72a.id = 'cd1449657d1c4626831fe17ee73ee72a';
