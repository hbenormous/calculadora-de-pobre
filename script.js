class Calculator {

    constructor() {

        this.elements = {
            output: document.querySelector("#output input"),
            buttons: document.querySelector("#buttons")
        }

        this.buttons = [
            "7", "8", "9", "+",
            "4", "5", "6", "-",
            "1", "2", "3", "x",
            "0", ".", "÷", "="
        ];

    }

    createButtons() {

        this.buttons.forEach(button => buttons.innerHTML += `<button>${button}</button>`);

    }

    detectButtonType(button) {

        const output = this.elements.output;

        if ( !isNaN(button) ) {
            output.value += button;
        } else if ( button === "=" && output.value.length ) {

            try { output.value = eval(output.value.replace(/÷/g, "/").replace(/x/g, "*")) + ""; }
            catch (error) { alert("Erro na expressão!\n" + error); }

        } else if ( output.value.slice(-1) !== button && output.value.length ) {
            output.value += button;
        }

    }

    onClick() {

        const { buttons, output } = this.elements;

        buttons
            .querySelectorAll("button")
            .forEach(button => button.onclick = () => {
                this.detectButtonType(button.innerHTML)
            });

    }

    init() {

        this.createButtons();
        this.onClick();

    }

}

window.onload = () => new Calculator().init();