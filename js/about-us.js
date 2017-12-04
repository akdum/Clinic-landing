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
        InitTemplate($("#who-we-are .who-we-are__content"), $("#who-we-are-template"), window.ClinicModel.WhoWeAre);
        InitTemplate($("#about .adv"), $("#promo-icon-template"), { "promo": window.ClinicModel.Promo });
        InitTemplate($("#license .licenses"), $("#license-template"), { "licenses": window.ClinicModel.Licenses });
    }

    function InitTemplate(container, templateContainer, view) {
        var template = templateContainer.html();
        Mustache.parse(template); // optional, speeds up future uses
        var html = Mustache.render(template, view);

        container.append(html);
    }

    function BindLink(selector, pageName) {
        $(selector).on('click', (() => window.location.href = window.location.href.replace('main.html', "pages/" + pageName)));
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