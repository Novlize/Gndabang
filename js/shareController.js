$(document).ready(function() {
	$('#mainImageSlide').carousel({ interval: 5000 });
	$(this).find('[data-bg-img]').each( function () {
		$(this).css( {
			'background-image' : 'url('+$(this).data('bg-img')+')',
			'background-position' : 'center bottom',
			'background-repeat':'no-repeat'
		});
	});

	$('.dropdown').dropdown();
	$(document).click(function (e) {
		//check if the clicked area is dropDown or not
		if ($(".dropdown").has(e.target).length === 0) {
			hide_dropdown();
		}
	});
});


function hide_dropdown() {
	$('.dropDownData').hide();
}