"use strict";

window.onerror = function(error) {
    alert(error);
};

var Hero = (function() {
    var root = {};
    var area = document.hero.area;

    root.Init = function() {
        Common.InitHeroArea(area);
    };

    return root;
}(Hero || {}))

$(document).ready(function() {
    Hero.Init();
});