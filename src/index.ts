import { c8d9a565c628418d829db7412d90ffe2 } from './templates/c8d9a565-c628-418d-829d-b7412d90ffe2';
import { cd1449657d1c4626831fe17ee73ee72a } from './templates/cd144965-7d1c-4626-831f-e17ee73ee72a';

class App {
  static templatesList = [
    cd1449657d1c4626831fe17ee73ee72a,
    c8d9a565c628418d829db7412d90ffe2,
  ];

  static init() {
    setInterval(() => {
      App.templatesList.forEach((item) => {
        if (document.getElementById(item.id)) {
          App.templatesList = App.templatesList.filter(({ id }) => id !== item.id);
          new item();
        }
      })
    }, 10)
  }
}

App.init()