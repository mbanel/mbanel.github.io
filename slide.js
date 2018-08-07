$(document).ready(function() {
	$('.cont>p').hide();
	$('.cont>h4').click(function() {
		$(this).next().slideToggle('fast');
		$(this).toggleClass('active');
	});
});