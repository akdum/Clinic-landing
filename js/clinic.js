"use strict";

window.onerror = function(error) {
    alert(error);
};

var Clinic = (function(){
    var root = {};

    root.Init = function() {
        InitTemplates();
        DoctorsGalleryInit();
        ScrollRevealInit();
        ScrollInit();
        AffixBehaviour();
        HoverBehaviour();   
        CardShow();    
        GalleryInit();
    };

    function InitTemplates() {
        InitTemplate($("#about .medical-treatment"), $("#phones-template"), {"phones" : window.ClinicModel.Phones});
        InitTemplate($("#about .license"), $("#license-template"), {"licenses" : window.ClinicModel.Licenses});
        InitTemplate($("#about .row.adv"), $("#promo-icon-template"), {"promo" : window.ClinicModel.Promo});
        InitTemplate($("#doctors .row.doctors"), $("#doctors-template"), {"doctors" : window.ClinicModel.Doctors});
    }

    function InitTemplate(container, templateContainer, view) {
        var template = templateContainer.html();
        Mustache.parse(template);   // optional, speeds up future uses
        var html = Mustache.render(template, view);

        container.append(html);
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
        sr.reveal(".sr-doctors", {
            origin: 'left',
            duration: 500,
            opacity: 0, 
            easing: 'ease-in-out',           
            distance: "150px"
        }, 400);
    }

    function ScrollInit() {
        $("a.page-scroll").bind("click", function (e) {
            var l = $(this);
            $("html, body").stop().animate({
                scrollTop: $(l.attr("href")).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        $("body").scrollspy({
            target: ".navbar-fixed-top",
            offset: 51
        });
    }

    function AffixBehaviour() {
        $(window).on('scroll', function(event) {
            var navBar =  $('#mainNavBar');
            var scrollValue = $(window).scrollTop();
            if (scrollValue > 100) {
                navBar.addClass('affix');
            } else {
                navBar.removeClass('affix');
            }
        });
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
            if (card.length >0) {
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

    function DoctorsGalleryInit() {
        var doctorsColumns = $(".row.doctors [class*='col-']");
        var commonWidth = 0;
        var containerWidth = $("#doctors .container").width();
        doctorsColumns.each(function() {
            var $this = $(this);
            commonWidth += $this.width();
            if (commonWidth > containerWidth) {
                $this.removeClass('sr-doctors').addClass('display-none');
            }
        });

        $(".doctors-navigation .next-doctor").on('click', function() {
            var hiddenCount = 0;
            var hiddenIndex = -1;

            doctorsColumns.each(function(index) {
                var $this = $(this);
                if ($this.hasClass('display-none')) {
                    hiddenCount +=1;
                    if (hiddenIndex == -1) hiddenIndex = index;
                } else {
                    hiddenCount = 0;
                    hiddenIndex = -1;
                }
            });
            if (hiddenCount > 0) {
                doctorsColumns.filter(function() {
                    return !$(this).hasClass('display-none');
                }).first().addClass('display-none');
                $(doctorsColumns[hiddenIndex]).removeClass('display-none');
            }
        });

        $(".doctors-navigation .prev-doctor").on('click', function() {
            var hiddenCount = 0;
            var hiddenIndex = -1;

            doctorsColumns.each(function(index) {
                var $this = $(this);
                if ($this.hasClass('display-none')) {
                    hiddenCount +=1;
                    hiddenIndex = index;
                } else {
                    return false;
                }
            });
            if (hiddenCount > 0) {
                doctorsColumns.filter(function() {
                    return !$(this).hasClass('display-none');
                }).last().addClass('display-none');
                $(doctorsColumns[hiddenIndex]).removeClass('display-none');
            }
        });
    }

    return root;
}(Clinic || {}))

$(document).ready(function() {
    Clinic.Init();
});