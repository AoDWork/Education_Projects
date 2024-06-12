import tabs from './modules/tabs'
import modal from './modules/modal'
import cards from './modules/cards'
import timer from './modules/timer'
import calc from './modules/calc'
import forms from './modules/forms'
import slider from './modules/slider'
import { openModal } from './modules/modal'

window.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId ), 10000);

    //=== modal
    modal(".modal", "[data-modal]", modalTimerId)

    //=== tabs
    tabs()

    //=== timer 
    timer()


    //=== cards
    cards()

    //=== forms
    forms()

    //=== slider
    slider()

    //=== calculator
    calc()

});
