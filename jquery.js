$(document).ready(function () {
    $('ol').hide();
    $('#click').click(function () {
        $(this).toggleClass('down');
        $('ol').toggle();
        $('.l').click(function () {
            $('#click').html($(this).html() + '<div id="down">&blacktriangledown;</div>');
            $('#click').removeClass('down');
            $('ol').hide();
        });
    });
    $('#check').click(function () {
        $(this).toggleClass('active');
    });
    $('.radio').click(function(){
        $(this).toggleClass('active');
        $('.radio').click(function(){
            $('.radio').removeClass('active');
            $(this).addClass('active');
        });
    });
});
