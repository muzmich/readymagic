class Template {
  public a = 10;

  private b = 5;

  getA() {
    return 10;
  }

  get customA() {
    return 5 * 10;
  }
}

const tmp = new Template();
console.log(tmp);
