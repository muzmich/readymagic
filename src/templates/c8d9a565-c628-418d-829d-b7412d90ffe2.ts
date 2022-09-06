import p5 from 'p5';

export class c8d9a565c628418d829db7412d90ffe2 {
  public static id = 'c8d9a565c628418d829db7412d90ffe2';

  private page!: HTMLElement;
  private container!: HTMLElement;

  constructor() {
    this.container = document.getElementById(c8d9a565c628418d829db7412d90ffe2.id);
    this.page = this.container.closest('.page');

    new p5((instance: p5) => {
      console.log('instance c8d9a565c628418d829db7412d90ffe2 created');

      instance.setup = () => {
        const canv = instance.createCanvas(
          (this.container.parentNode as HTMLElement).offsetWidth,
          (this.container.parentNode as HTMLElement).offsetHeight
        );
        canv.parent(c8d9a565c628418d829db7412d90ffe2.id);

        instance.frameRate(1);
        instance.background(0);
      }

      instance.draw = () => {
        if (this.isVissible) {
          console.log('instance c8d9a565c628418d829db7412d90ffe2 draw on page', this.page);
          instance.background(0);
        } else {
          console.log('instance c8d9a565c628418d829db7412d90ffe2 is hidden');
        }
      }
    })
  }

  get isVissible() {
    return !this.page.classList.contains('hidden');
  }
}