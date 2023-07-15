class Menu {
    /**
     *
     * @param {String} // CSS Selector
     * @param {String} // CSS Selector
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
            gsap.to(event.target, { "--after-position": "-8.5vh", duration: 0.2 });

        }
    }
    onMouseLeave(event) {
        let _type = event.target.tagName;
        if (_type == "LI") {
            gsap.to(event.target, { "--after-position": "-10.7vh" });

        }
    }
}

/**
 * @param {HTMLElement} // for draggable surface
 */

class DragArea {
    constructor(s) {
        this.s = s;
        s.onmousemove = _.throttle(this.onMouseMove.bind(this), 3);
    }

    onMouseMove(e) {
        const { clientX, clientY } = e;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        gsap.to(".hero-secondary", {
            "--x": `${x}%`,
            "--y": `${y}%`,
            duration: 0.3,
            ease: "sine.out",
        });

    }
}

new Menu("nav", "li");


const tl = gsap.timeline({ delay: 1.5 });

tl.to('li', { "--after-position": "-10.7vh" })
    .to(".hero", {
        "--maskSize1": "20%",
        duration: 0.5,
        ease: "back.out(2)",
    })
    .to(".hero", {
        "--maskSize2": "28%",
        "--maskSize3": "calc(28% + 0.1rem)",
        duration: 0.5,
        delay: 0.3,
        ease: "back.out(2)",
    })
    .then(() => {
        new DragArea(document.querySelector(".wrapper"));
    });

var tl_ = gsap.timeline();

document.querySelectorAll("span").forEach((el) => {
    el.onmouseenter = () => {

        tl_.to("main", { "--xx": "420px", duration: 0.2 })
            .to(".span-one", { "scale": 1.3, y: -30, autoAlpha: 0, duration: 0.2 })
            .to(".span-three", { rotation: -90, transformOrigin: "left bottom", "visibility": "visible" })
            .set(".span-two", { scale: 1.2, "--span-two-y": "4.5vh", "--span-two-x": "4.5vw", duration: 0.2 })
            .to(".span-three", { "--span-three-y": "38vh", duration: 0.1 })

        if (tl_.reversed()) {
            tl_.play();
        }

    }
})

document.onclick = _.throttle((event) => {
    if (event.target.tagName !== "SPAN") {
        if (tl_.reversed() == false) {
            tl_.reverse()
        }

        console.log(event.target.tagName)
    }
}, 1)




