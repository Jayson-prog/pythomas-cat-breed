
$(document).ready(function() {
    // Trigger animations when elements are in viewport
    $(window).on('scroll', function() {
        $('.animate-up').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('visible');
            }
        });
    });
});