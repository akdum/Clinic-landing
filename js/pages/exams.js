"use strict";

window.onerror = function(error) {
    alert(error);
};

var Exams = (function() {
    var root = {};
    var area = 'exams';

    root.Init = function() {
        Common.InitHeroArea(area);
    };

    return root;
}(Exams || {}))

$(document).ready(function() {
    Exams.Init();
});