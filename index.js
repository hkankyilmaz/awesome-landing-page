class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
        elem.onmouseenter = this.onMouseEnter.bind(this);
        elem.onmouseleave = this.onMouseLeave.bind(this);
    }

    showAlert(text) {
        alert(text)
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this.showAlert(action);
            document.querySelector()
        }
    };

    onMouseEnter(event) {
        let _type = event.target.tagName
        if (_type = "LI") {
            alert("Mouse hover")
        }
    }
    onMouseLeave(event) {
        let _type = event.target.tagName
        if (_type = "LI") {
            alert("Mouse leave")
        }
    }
}


var menu = document.querySelector("nav");
new Menu(menu);

