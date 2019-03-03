$(window).scroll(function() {
    $('.inspired').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("bounceIn");
        }
    });
});

$(window).scroll(function() {
    $('.location_zone').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("bounceInLeft");
        }
    });
});

$(window).scroll(function() {
    $('.social').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("rotateInDownRight");
        }
    });
});



$(window).scroll(function() {
    $('.coffeat').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("flip");
        }
    });
});

$(window).scroll(function() {
    $('.iphone').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInRight");
        }
    });
});


