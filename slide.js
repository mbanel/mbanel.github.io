$(document).ready(function() {
	alert($(window).width());
	if($(window).width() > 800) {
		$('.cont>p').hide();
		$('.cont>h4').click(function() {
			$(this).next().slideToggle('fast');
			$(this).toggleClass('active');
		});
	}
});