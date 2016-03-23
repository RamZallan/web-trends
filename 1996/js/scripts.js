/*jslint browser: true*/
/*global $, jQuery*/
/*jslint node: true */
$(document).ready(function () {
    $('.numbers').hover(function () {
        $(this).toggleClass('spinning');
    });

    $('li').hover(function () {
        $(this).css("opacity", "0.8");
    }, function () {
        $(this).css("opacity", "1");
    });
});