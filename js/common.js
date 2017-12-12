"use strict";

window.onerror = function(error) {
    alert(error);
};

var Common = (function() {
    var root = {};

    root.InitTemplate = function(container, templateContainer, view) {
        var template = templateContainer.html();
        Mustache.parse(template); // optional, speeds up future uses
        var html = Mustache.render(template, view);

        container.append(html);
    }

    root.BindLink = function(selector, regex, newPath) {
        $(selector).on('click', (() => window.location.href = window.location.href.replace(regex, newPath)));
    }

    root.MapInit = function() {
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

    return root;
}(Common || {}))