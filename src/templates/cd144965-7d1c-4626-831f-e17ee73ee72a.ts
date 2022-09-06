import p5 from 'p5';

export class cd1449657d1c4626831fe17ee73ee72a {
  public static id = 'cd1449657d1c4626831fe17ee73ee72a';

  private page!: HTMLElement;
  private container!: HTMLElement;

  constructor() {
    this.container = document.getElementById(cd1449657d1c4626831fe17ee73ee72a.id);
    this.page = this.container.closest('.page');

    new p5((instance: p5) => {
      console.log('instance cd1449657d1c4626831fe17ee73ee72a created');

      instance.setup = () => {
        const canv = instance.createCanvas(
          (this.container.parentNode as HTMLElement).offsetWidth,
          (this.container.parentNode as HTMLElement).offsetHeight
        );
        canv.parent(cd1449657d1c4626831fe17ee73ee72a.id);

        instance.frameRate(1);
        instance.background(0);
      }

      instance.draw = () => {
        if (this.isVissible) {
          console.log('instance cd1449657d1c4626831fe17ee73ee72a draw on page', this.page);
          instance.background(0);
        } else {
          console.log('instance cd1449657d1c4626831fe17ee73ee72a is hidden');
        }
      }
    })
  }

  get isVissible() {
    return !this.page.classList.contains('hidden');
  }
}