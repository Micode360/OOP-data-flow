import $ from 'jquery';

export class BaseElement {
    constructor(){
        this.element = null;
    }


    appendToElement(el) {
        this.createElement();
        el.append(this.element);
    }

    createElement() {
        let s = getElementString();
        this.element = $(s);
    }
    
    getElementString() {
        throw 'Please overide getElementsString() in baseELement()'
    }
}