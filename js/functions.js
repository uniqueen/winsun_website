$(document).ready(function () {
    $(function () {
        $('.banner').unslider({
            speed: 500, //  The speed to animate each slide (in milliseconds)
            delay: 3000, //  The delay between slide animations (in milliseconds)
            complete: function () {}, //  A function that gets called after every slide animation
            keys: true, //  Enable keyboard (left, right) arrow shortcuts
            dots: true, //  Display dot navigation
            fluid: true //  Support responsive design. May break non-responsive designs
        });
    });
    $('.nav-tabs li:first-child').addClass('active-tab')
    $('.tab-content-box .tab-content').css('display', 'none');
    $('.tab-content-box .tab-content:first-child').css('display', 'block');
    $('.nav-tabs li span').click(function () {
        tabName = "." + $(this).attr('class');
        console.log(tabName);
        $('.nav-tabs li').removeClass('active-tab');
        $(this).offsetParent().addClass('active-tab');
        $('.tab-content-box .tab-content').css('display', 'none');
        $('.tab-content-box').children(tabName).css('display', 'block');
    });

    $('.nav ul li').click(function() {
        $('.nav ul li .subnav').hide('fast');
        $(this).children('.subnav').toggle();
    });
});
