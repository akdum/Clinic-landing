"use strict";

window.onerror = function(error) {
    alert(error);
};

var Children = (function() {
    var root = {};
    var area = 'children';

    root.Init = function() {
        Common.InitHeroArea(area);
    };

    return root;
}(Children || {}))

$(document).ready(function() {
    Children.Init();
});