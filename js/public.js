
$(function() {
		// alert("niiiii")
		$('.nav li').mouseover(function() {
			$(this).children('a').css({
				'color': '#12a5c8'
			});
			$(this).children('ul').stop().slideDown();
			$(this).siblings().children('ul').stop().slideUp();
		});
		$('.nav li').mouseleave(function() {
			$(this).children('a').css({
				'color': ''
			});
			$(this).children('ul').stop().slideUp();
		});
	});
