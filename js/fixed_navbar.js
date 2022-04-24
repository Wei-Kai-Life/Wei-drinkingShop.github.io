// logo 漢堡條 加 burger-nav 動畫
$('document').ready(function () {

    var fixed_trigger = $('#fixed_hamburger');
    var fixed_burger_container = $('.fixed_burger_container');
    var fixed_burger_nav = $('.fixed_burger_nav');
    fixed_isClosed = true;


    fixed_burger_container.click(function () {
        fixed_burgerTime();
    });

    function fixed_burgerTime() {
        if (fixed_isClosed == true) {
            fixed_trigger.removeClass('is-closed');
            fixed_trigger.addClass('is-open');
            fixed_burger_nav.addClass('open')
            fixed_isClosed = false;
        } else {
            fixed_burger_nav.removeClass('open')
            fixed_trigger.removeClass('is-open');
            fixed_trigger.addClass('is-closed');
            fixed_isClosed = true;
        }
    }

});