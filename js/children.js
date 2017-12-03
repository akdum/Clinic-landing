"use strict";

window.onerror = function(error) {
    alert(error);
};

var Children = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();        
    };

    function InitTemplates() {
    }

    function InitTemplate(container, templateContainer, view) {
        var template = templateContainer.html();
        Mustache.parse(template); // optional, speeds up future uses
        var html = Mustache.render(template, view);

        container.append(html);
    }

    return root;
}(Children || {}))

$(document).ready(function() {
    Children.Init();
});