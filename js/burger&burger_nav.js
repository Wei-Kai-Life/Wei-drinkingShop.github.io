// logo 漢堡條 加 burger-nav 動畫
$('document').ready(function () {

    var trigger = $('#hamburger');
    var burger_container = $('.burger-container');
    var burger_nav = $('.burger-nav');
    isClosed = true;


    burger_container.click(function () {
        burgerTime();



    });

    function burgerTime() {
        if (isClosed == true) {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            burger_nav.addClass('open')
            isClosed = false;
        } else {
            burger_nav.removeClass('open')
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = true;
        }
    }

});