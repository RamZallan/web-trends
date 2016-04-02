$(document).ready(function () {
    $('#more').click(function () {
        var el = $('.content'),
            curHeight = $('.content').height(),
            autoHeight = $('.content').css('height', 'auto').height();
        $('.content').height(curHeight).animate({
            height: autoHeight == curHeight ? "240px" : autoHeight
        }, 1000);
        $("#more").text("Toggle Text");
        $(".pointer").fadeOut(500);
    });
});