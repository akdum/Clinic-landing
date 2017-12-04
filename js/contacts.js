"use strict";

window.onerror = function(error) {
    alert(error);
};

var Contacts = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();
    };

    function InitTemplates() {}

    return root;
}(Contacts || {}))

$(document).ready(function() {
    Contacts.Init();
});