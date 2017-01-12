"use strict";

window.onerror = function(error) {
    alert(error);
};

var Clinic = (function(){
    var root = {};

    root.Init = function() {
        InitTemplates();
        ScrollRevealInit();
        ScrollInit();
        AffixBehaviour();
        HoverBehaviour();   
        CardShow();     
    };

    function InitTemplates() {
        InitTemplate($("#about .medical-treatment"), $("#phones-template"), {"phones" : window.ClinicModel.Phones});
        InitTemplate($("#about .license"), $("#license-template"), {"licenses" : window.ClinicModel.Licenses});
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
                $this.on('click', function() {
                    var label = $this.find(".card-detail-button-label");
                    var icon = $this.find('i');
                    if (!card.hasClass('expanded')) {
                        label.addClass('opacity-non-visible');
                        $this.find('.card-detail-button').addClass('close-cirlce');
                        card.addClass('expanded');
                        icon.text('cancel');
                    } else {
                        card.removeClass('expanded');
                        $this.find('.card-detail-button').removeClass('close-cirlce');
                        icon.text('add_circle');
                        label.removeClass('opacity-non-visible');
                    }
                });
            }
        });
    }

    return root;
}(Clinic || {}))

$(document).ready(function() {
    Clinic.Init();
});