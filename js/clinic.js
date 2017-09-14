"use strict";

window.onerror = function(error) {
    alert(error);
};

var Clinic = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();        
        DoctorsGalleryInit();
        ScrollRevealInit();
        ScrollInit();
        HoverBehaviour();
        CardShow();
        GalleryInit();
        MapInit();        
        VkInit();
    };

    function InitTemplates() {
        InitTemplate($("#about .license"), $("#license-template"), { "licenses": window.ClinicModel.Licenses });
        InitTemplate($("#about .row.adv"), $("#promo-icon-template"), { "promo": window.ClinicModel.Promo });
        InitTemplate($("#services .row.popular-services-row"), $("#services-template"), { "services": window.ClinicModel.Services });
        InitTemplate($("#doctors .row.doctors .doctors-list"), $("#doctors-template"), { "doctors": window.ClinicModel.Doctors });
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
        // sr.reveal(".sr-doctors", {
        //     origin: 'left',
        //     duration: 500,
        //     opacity: 0,
        //     easing: 'ease-in-out',
        //     distance: "150px"
        // }, 400);
        sr.reveal(".sr-icons", {
            duration: 1000,
            scale: .1,
            distance: "0px"
        }, 300);
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

    function DoctorsGalleryInit() {
        var doctorsColumns = $(".row.doctors [class*='col-']");
        var commonWidth = 0;
        var containerWidth = $("#doctors .container").width();
        doctorsColumns.each(function() {
            var $this = $(this);
            commonWidth += $this.width();
            if (commonWidth > containerWidth) {
                $this.removeClass('sr-doctors').hide();
            }
        });

        $(".doctors-navigation .next-doctor").on('click', function() {
            var hiddenCount = 0;
            var hiddenIndex = -1;

            doctorsColumns.each(function(index) {
                var $this = $(this);
                if (!$this.is(':visible')) {
                    hiddenCount += 1;
                    if (hiddenIndex == -1) hiddenIndex = index;
                } else {
                    hiddenCount = 0;
                    hiddenIndex = -1;
                }
            });
            if (hiddenCount > 0) {
                doctorsColumns.filter(function() {
                    return $(this).is(':visible');
                }).first().removeAttr('style').hide();
                $(doctorsColumns[hiddenIndex]).fadeIn("slow");
            }
        });

        $(".doctors-navigation .prev-doctor").on('click', function() {
            var hiddenCount = 0;
            var hiddenIndex = -1;

            doctorsColumns.each(function(index) {
                var $this = $(this);
                if (!$this.is(':visible')) {
                    hiddenCount += 1;
                    hiddenIndex = index;
                } else {
                    return false;
                }
            });
            if (hiddenCount > 0) {
                doctorsColumns.filter(function() {
                    return $(this).is(':visible');
                }).last().hide();
                $(doctorsColumns[hiddenIndex]).fadeIn("slow");
            }
        });

        $(".doctor-card").on('click', function() {
            var $this = $(this);
            var parent = $this.parent();
            var otherCards = parent.siblings(".doctor-column");
            var backButton = $(".doctor-card-back");

            if (otherCards.hasClass("display-none")) {
                HideDoctorCard(parent, otherCards);
            } else {                
                ShowDoctorCard(parent, otherCards);

                // init back button.
                backButton.data("card", $this);
                backButton.data("siblings", otherCards);
            }        
        });

        $(".doctor-card-back").on('click', function() {
            var $this = $(this);
            var doctor_card = $this.data("card");
            var siblings = $this.data("siblings");
            HideDoctorCard(doctor_card, siblings);
        });
    }

    function ShowDoctorCard(doctor_card, siblings) {
        $(".doctors-navigation").toggle();
        siblings.addClass("display-none ");
        $(".doctor-card-info", doctor_card).hide();
        $("#doctors .doctor-big-card_title").text(doctor_card.data("title"));
        $("#doctors .doctor-big-card_info").load("html/" + doctor_card.data("file"));
        $("#doctors .doctor-big-card").fadeIn("slow");
    }

    function HideDoctorCard(doctor_card, siblings) {
        $(".doctors-navigation").toggle();
        siblings.removeClass("display-none")
        $("#doctors .doctor-big-card").hide();
        $(".doctor-card-info", doctor_card).show();
        $("#doctors .doctor-big-card_info *").remove();
        $("#doctors .doctor-big-card_title").text("");
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

    return root;
}(Clinic || {}))

$(document).ready(function() {
    Clinic.Init();
});