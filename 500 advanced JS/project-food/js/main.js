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
    tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active")

    //=== timer 
    timer(".timer", "2025-07-20")

    //=== cards
    cards()

    //=== forms
    forms("form", modalTimerId)

    //=== slider
    slider({
        container: ".offer__slider",
        slide: ".offer__slide",
        prevArrow: ".offer__slider-prev",
        nextArrow: ".offer__slider-next",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    })

    //=== calculator
    calc()

});
