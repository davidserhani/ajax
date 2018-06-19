$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#navbar').slideDown();
            $('#navbar').addClass('sticky');
        }
    })
})