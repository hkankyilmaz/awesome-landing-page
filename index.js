class Menu {
  /**
   *
   * @param {String}  CSS Selector
   * @param {String}  CSS Selector
   */
  constructor(s, c) {
    this.s = document.querySelector(s);
    document.querySelector(s).onclick = this.onClick.bind(this);
    document.querySelectorAll(c).forEach((i) => {
      i.onmouseenter = this.onMouseEnter.bind(this);
    });
    document.querySelectorAll(c).forEach((i) => {
      i.onmouseleave = this.onMouseLeave.bind(this);
    });
  }

  showAlert(text) {
    alert(text);
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this.showAlert(action);
      document.querySelector();
    }
  }

  onMouseEnter(event) {
    let _type = event.target.tagName;
    console.log(_type);
    if (_type == "LI") {
      alert("Mouse hover");
    }
  }
  onMouseLeave(event) {
    let _type = event.target.tagName;
    if (_type == "LI") {
      alert("Mouse leave");
    }
  }
}

new Menu("nav", "li");
