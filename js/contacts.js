"use strict";

window.onerror = function(error) {
    alert(error);
};

var Contacts = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();
        Common.MapInit();
    };

    function InitTemplates() {
        Common.InitTemplate($(".contacts__data"), $("#contacts-template"), window.ClinicModel.ContactsData);
    }

    return root;
}(Contacts || {}))

$(document).ready(function() {
    Contacts.Init();
});