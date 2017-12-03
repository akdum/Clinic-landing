"use strict";

window.onerror = function(error) {
    alert(error);
};

var Clinic = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();        
        ScrollRevealInit();
        ScrollInit();
        HoverBehaviour();
        CardShow();
        GalleryInit();
        MapInit();        
        VkInit();
        DoctorCardsInit();
    };

    function InitTemplates() {
        InitTemplate($("#who-we-are .who-we-are__content"), $("#who-we-are-template"), window.ClinicModel.WhoWeAre);
        InitTemplate($("#doctors .doctors_block"), $("#doctors-template"), { "doctors": window.ClinicModel.Doctors });
        InitTemplate($("#about .license"), $("#license-template"), { "licenses": window.ClinicModel.Licenses });
        InitTemplate($("#about .row.adv"), $("#promo-icon-template"), { "promo": window.ClinicModel.Promo });
        InitTemplate($("#services .row.popular-services-row"), $("#services-template"), { "services": window.ClinicModel.Services });
        InitTemplate($("#contacts .contacts-layer"), $("#contacts-template"), { "contacts": window.ClinicModel.Contacts });
    }

    function InitTemplate(container, templateContainer, view) {
        var template = templateContainer.html();
        Mustache.parse(template); // optional, speeds up future uses
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
        sr.reveal(".sr-icons", {
            duration: 1000,
            scale: .1,
            distance: "0px"
        }, 300);
        sr.reveal(".sr-doctors", {
            duration: 200,
            delay: 100,
            scale: 0,
            origin: 'left',
            distance: "0px",
            easing: 'ease-in-out'
        }, 100);
    }

    function ScrollInit() {
        $("a.page-scroll").bind("click", function(e) {
            var l = $(this);
            $("html, body").stop().animate({
                scrollTop: $(l.attr("href")).offset().top - 100
            }, 1000);
            e.preventDefault();
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

    function MapInit() {
        ymaps.ready(function() {
            var location1 = 56.86211253;
            var location2 = 53.28120296;
            try {
                var map = new ymaps.Map('map', {
                    center: [location1, location2],
                    zoom: 16
                });
                map.behaviors.disable('scrollZoom');
                map.geoObjects.add(new ymaps.Placemark([location1, location2], {
                    hintContent: 'Клиническая больница восстановительной медицины'
                }));
            } catch (error) {
                console.log(error);
            }
        });
    }

    function VkInit() {
        var options = {
            mode: 2, 
            no_cover: 1,
            width: "auto",
            wide: 1,
            height: "600px"
        }
        VK.Widgets.Group("vk_group", options, 133747176);
    }

    function DoctorCardsInit() {
        var doctors_block = $(".doctors_block"); 
        var doctor_big_card = $(".doctor-big-card");
        var doctor_book = $(".doctor-book");

        $(".doctor-big-card__close", doctor_big_card).on('click', function() {      
            DoctorCardClose(doctors_block, doctor_big_card, $(this));
        });

        $(".doctor-book__close", doctor_book).on('click', function() {      
            DoctorCalendarClose(doctors_block, doctor_book, $(this));
        });

        $(".doctor-card .doctor-card-actions__info").on('click', function() {
            DoctorCardShow(doctors_block, doctor_big_card, this);
        });

        $(".doctor-card .doctor-card-actions__book-now").on('click', function() {
            DoctorCalendarShow(doctors_block, doctor_book, this);
        });
    }

    function DoctorCardShow(doctors_block, doctor_big_card, btn) {
        var card = $(btn).closest(".doctor-card");                   
        doctors_block.addClass('hidden');
        // set image.
        $("img", doctor_big_card).attr('src', './img/doctors/' + card.data('img'));
        // set text.
        $(".doctor-big-card__title", doctor_big_card).text(card.data('title'));
        $(".doctor-big-card__body", doctor_big_card).load('html/' + card.data('file'));
        
        // show card.
        doctor_big_card.removeClass('hidden');
        $(".doctor-big-card__close", doctor_big_card).removeClass('hidden');
    }

    function DoctorCardClose(doctors_block, doctor_big_card, btn) {
        $("img", doctor_big_card).attr('src', '');   
        $(".doctor-big-card__title", doctor_big_card).text('');
        $(".doctor-big-card__body", doctor_big_card)[0].innerHTML = "";

        $(btn).addClass('hidden');
        doctor_big_card.addClass('hidden');
        doctors_block.removeClass('hidden');
    }

    function DoctorCalendarShow(doctors_block, doctor_book, btn) {
        var card = $(btn).closest(".doctor-card");
        var calendarUrl = card.data('calendar');
        var loading = $(".doctor-book__loading", doctor_book);        

        if (calendarUrl) {
            doctors_block.addClass('hidden');
            loading.show();

            $(".doctor-book__title", doctor_book).text(card.data('title'));
            $("iframe", doctor_book).attr('src', calendarUrl).on('load', function() {
                loading.hide();
            });

            doctor_book.removeClass('hidden');
            $(".doctor-book__close", doctor_book).removeClass('hidden');
        }                
    }

    function DoctorCalendarClose(doctors_block, doctor_book, btn) {
        $("iframe", doctor_book).attr('src', '');   
        $(".doctor-book__title", doctor_book).text('');

        $(btn).addClass('hidden');
        doctor_book.addClass('hidden');
        doctors_block.removeClass('hidden');
    }

    return root;
}(Clinic || {}))

$(document).ready(function() {
    Clinic.Init();
});