// Бургер
$(document).ready(function () {
    $('.burger__cross').click(function (event) {
        $('.burger__cross,.burger__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});