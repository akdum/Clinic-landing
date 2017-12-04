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
        InitTemplate($("#hero .container"), $("#hero-template"), { "heroes": window.ClinicModel.Heroes });
        BindLink(("#book .btn"), "contacts.html");
    }

    function InitTemplate(container, templateContainer, view) {
        var template = templateContainer.html();
        Mustache.parse(template); // optional, speeds up future uses
        var html = Mustache.render(template, view);

        container.append(html);
    }

    function BindLink(selector, pageName) {
        $(selector).on('click', (() => window.location.href = window.location.href.replace('children.html', pageName)));
    }

    return root;
}(Children || {}))

$(document).ready(function() {
    Children.Init();
});