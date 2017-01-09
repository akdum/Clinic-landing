"use strict";

window.onerror = function(error) {
    alert(error);
};

var Clinic = (function(){
    var root = {};

    root.Init = function() {
        ScrollRevealInit();
    };

    function ScrollRevealInit() {
        window.sr = ScrollReveal();

        sr.reveal(".sr-left", {
            origin: 'left',
            duration: 1000,
            opacity: 0, 
            easing: 'ease-in-out',           
            distance: "150px"
        }, 200);

        sr.reveal(".sr-bottom", {
            origin: 'bottom',
            duration: 1000,
            delay: 800,
            opacity: 0, 
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',           
            distance: "150px"
        }, 200);
    }

    return root;
}(Clinic || {}))

$(document).ready(function() {
    Clinic.Init();
});