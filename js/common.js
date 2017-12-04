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

    root.BindLink = function(selector, oldPath, newPath) {
        $(selector).on('click', (() => window.location.href = window.location.href.replace(oldPath, newPath)));
    }

    return root;
}(Common || {}))