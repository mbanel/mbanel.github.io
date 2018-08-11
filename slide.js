$(document).ready(function() {
	alert($(window).width());
		$('.cont>p').hide();
		$('.cont>h4').click(function() {
			$(this).next().slideToggle('fast');
			$(this).toggleClass('active');
		});
});