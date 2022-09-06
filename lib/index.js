"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const c8d9a565_c628_418d_829d_b7412d90ffe2_1 = require("./templates/c8d9a565-c628-418d-829d-b7412d90ffe2");
const cd144965_7d1c_4626_831f_e17ee73ee72a_1 = require("./templates/cd144965-7d1c-4626-831f-e17ee73ee72a");
class App {
    static init() {
        setInterval(() => {
            App.templatesList.forEach((item) => {
                if (document.getElementById(item.id)) {
                    App.templatesList = App.templatesList.filter(({ id }) => id !== item.id);
                    new item();
                }
            });
        }, 10);
    }
}
App.templatesList = [
    cd144965_7d1c_4626_831f_e17ee73ee72a_1.cd1449657d1c4626831fe17ee73ee72a,
    c8d9a565_c628_418d_829d_b7412d90ffe2_1.c8d9a565c628418d829db7412d90ffe2,
];
App.init();
