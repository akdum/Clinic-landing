"use strict";

window.onerror = function(error) {
    alert(error);
};

var MedInfo = (function() {
    var root = {};

    root.Init = function() {
        InitTemplates();
    };

    function InitTemplates() {
        var medInfoData = window.ClinicModel.MedInfo;
        var currentNumber = medInfoData.filter((issue) => { return issue.current });
        if (currentNumber && currentNumber.length > 0) {
            Common.InitTemplate($(".magazines__new-issue"), $("#magazine-new-issue-template"), currentNumber[0]);
        }
    }

    return root;
}(MedInfo || {}))

$(document).ready(function() {
    MedInfo.Init();
});