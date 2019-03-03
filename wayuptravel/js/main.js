
$(window).scroll(function() {
	    $('.travel').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
});

$(window).scroll(function() {
	    $('.clock').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInLeft");
	        }
	    });
});

$(window).scroll(function() {
	    $('.rocket').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("slideInRight");
	        }
	    });
});

$(window).scroll(function() {
	    $('.next').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("jackInTheBox");
	        }
	    });
});

$(window).scroll(function() {
	    $('.dream').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateIn");
	        }
	    });
});

$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUpBig");
	        }
	    });
});



// var btn = document.getElementById('btn');

// btn.onclick = function (e) {
// 	e.preventDefault();
// 	var text = document.querySelector('p.intro');
// 	text.classList.add('red');
// 	var img = document.querySelector('.desktop');
// 	img.style.display = 'none';
// 	document.querySelector('.skill-change').style.marginLeft = '50px';
// }
