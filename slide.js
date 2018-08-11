$(document).ready(function() {
	if($(window).width() > 800) {
		$('.cont>p').hide();
		$('.cont>h4').click(function() {
			$(this).next().slideToggle('fast');
			$(this).toggleClass('active');
		});
	}
});