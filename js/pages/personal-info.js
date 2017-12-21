"use strict";

window.onerror = function(error) {
    alert(error);
};

var PersonalInfo = (function() {
    var root = {};

    root.Init = function() {
        $(".politics__container").load("../html/legal/politics.html");
    };


    return root;
}(PersonalInfo || {}))

$(document).ready(function() {
    PersonalInfo.Init();
});