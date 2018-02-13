"use strict";

window.onerror = function(error) {
    alert(error);
};

var AboutUs = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();
        ScrollRevealInit();
        GalleryInit();
    };

    function InitTemplates() {
        Common.InitTemplate($("#license .licenses"), $("#license-template"), { "licenses": window.ClinicModel.Licenses });
    }

    function ScrollRevealInit() {
        window.sr = ScrollReveal();

        sr.reveal(".sr-icons", {
            duration: 1000,
            scale: .1,
            distance: "0px"
        }, 300);
    }

    function GalleryInit() {
        $(".licenses").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Загружается изображение #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">Изображение #%curr%</a> не загрузилось.'
            }
        })
    }

    return root;
}(AboutUs || {}))

$(document).ready(function() {
    AboutUs.Init();
});