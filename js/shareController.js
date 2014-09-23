$(document).ready(function() {

	//========================
	// Image Slider
	//========================
	$('#mainImageSlide').carousel({ interval: 5000 });
	

	//========================
	// Background Selector
	//========================
	$(this).find('[data-bg-img]').each( function () {
		$(this).css( {
			'background-image' : 'url('+$(this).data('bg-img')+')',
			'background-position' : 'center bottom',
			'background-repeat':'no-repeat'
		});
	});


	//========================
	// DropDown Menu
	//========================
	$(this).find('.dropDown').each(function() {
		$(this).find('> p.dropDownVal').click(function (e) {
			hide_dropdown();
			var $value = $(this);
			var $menu = $(this).parent().find('> div.dropDownData');
			if( $menu.css('display') == 'none' ) {
				$menu.css('display', 'block');
			}
			$menu.find('> ul > li').each(function (e) {
				var $data = $(this).html();
				$(this).click(function (e) {
					$(this).parent().find('>li.selectedItem').removeAttr('class');
					$(this).addClass("selectedItem");
					$value.html($data);
					hide_dropdown();
				});
			});
		});
	});
	$(document).click(function (e) {
		//check if the clicked area is dropDown or not
		if ($('.dropDown').has(e.target).length == 0) {
			hide_dropdown();
		}
	});


});

// Function to hide dropdown menu
function hide_dropdown() {
	$('.dropDownData').hide();
}