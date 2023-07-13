class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    showAlert(text) {
        alert(text)
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this.showAlert(action);
        }
    };
}


var menu = document.querySelector("nav");
new Menu(menu);

