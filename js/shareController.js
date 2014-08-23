$(document).ready(function() {
    $('#mainImageSlide').carousel({ interval: 5000 });
    $(this).find('[data-bg-img]').each( function () {
        $(this).css( {
            'background-image' : 'url('+$(this).data('bg-img')+')',
            'background-position' : 'center bottom',
            'background-repeat':'no-repeat'
        });
    });
});