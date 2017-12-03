"use strict";

window.onerror = function(error) {
    alert(error);
};

var AboutUs = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();        
        ScrollRevealInit();
        HoverBehaviour();
        CardShow();
        GalleryInit();
    };

    function InitTemplates() {
        InitTemplate($("#who-we-are .who-we-are__content"), $("#who-we-are-template"), window.ClinicModel.WhoWeAre);
        //InitTemplate($("#about .license"), $("#license-template"), { "licenses": window.ClinicModel.Licenses });
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

        sr.reveal(".sr-left", {
            origin: 'left',
            duration: 1000,
            opacity: 0,
            easing: 'ease-in-out',
            distance: "150px"
        }, 200);
        sr.reveal(".sr-left-delay", {
            origin: 'left',
            duration: 300,
            opacity: 0,
            easing: 'ease-in-out',
            distance: "150px"
        }, 400);
        sr.reveal(".sr-bottom", {
            origin: 'bottom',
            duration: 1000,
            delay: 800,
            opacity: 0,
            easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
            distance: "150px"
        }, 200);
        sr.reveal(".sr-icons", {
            duration: 1000,
            scale: .1,
            distance: "0px"
        }, 300);
    }

    function HoverBehaviour() {
        $("div.hover-action").hover(function() {
            var $this = $(this);
            var id = $this.data("expand-id");
            $this.find("i").text('expand_less');
            $("#" + id).addClass("opacity-visible").find(".info").addClass('opacity-visible');
        }, function() {
            var $this = $(this);
            var id = $this.data("expand-id");
            $this.find("i").text('expand_more');
            $("#" + id).removeClass("opacity-visible").find(".info").removeClass('opacity-visible');
        });
    }

    function CardShow() {
        $(".card-trigger").each(function() {
            var $this = $(this);
            var card = $this.closest('.row').find('.card-detail');
            if (card.length > 0) {
                var label = $this.find(".card-detail-button-label");
                var icon = $this.find('i');
                var button = $this.find('.card-detail-button');
                $this.on('click', function() {
                    if (!card.hasClass('expanded')) {
                        label.addClass('opacity-non-visible');
                        button.addClass('close-cirlce');
                        card.addClass('expanded');
                    } else {
                        card.removeClass('expanded');
                        button.removeClass('close-cirlce');
                        label.removeClass('opacity-non-visible');
                    }
                });
            }
        });
    }

    function GalleryInit() {
        $(".license").magnificPopup({
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