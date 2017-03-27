jQuery(document).ready(function($) {
	var swiper = new Swiper('.swiper-container', {
		// pagination: '.swiper-pagination',
		// paginationClickable: true,
		loop: true,
		autoplay: 3500,
		paginationType: 'custom',
	});

	$('.search-box').get(0).style.width = $('#body').width() + 'px';
	$(window).resize(function() {
		$('.search-box').get(0).style.width = $('#body').width() + 'px';
	});
	$('.search-box div').click(function(event) {
		$('.page').hide();
		$('.s-page').show();
		$('.s-page .s-box input').focus();
	});  
	$('#s-page-back').click(function(event) {
		$('.s-page').hide();
		$('.page').show();
	});
})