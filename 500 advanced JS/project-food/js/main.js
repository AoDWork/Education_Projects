"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          cards = require('./modules/cards'),
          timer = require('./modules/timer'),
          calculator = require('./modules/calculator'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider')



    
    //=== tabs
    tabs()

    //=== timer 
    timer()

    //=== modal
    modal()

    //=== cards
    cards()

    //=== forms
    forms()

    //=== slider
    slider()

    //=== calculator
    calculator()

});
