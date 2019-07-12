
$(document).ready(function () {
      //mobile
      $('.hamburger').click( function () {
        $('.mobile').toggleClass('active-m').css({'opacity':'1'});
        // e.preventDefault();
    });


    // close menu for past click
    $('.navigation__menu_mobile li a').click(function () {
        $('.navigation__wrap.mobile').removeClass('active-m');
    });

    // $(document).mouseup(function(e) {
    //     var $target = $(e.target);
    //     if ($target.closest(".navigation__menu_mobile").length == 0 && $target.closest(".navigation__menu_mobile").length == 0) {
    //         $(".navigation__wrap.mobile").removeClass("active-m");
    //     }
    // });
 
    // Cache selectors
    var lastId,
    topMenu = $(".navigation__item"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
    scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
        .parent().removeClass("nav-active")
        .end().filter("[href='#" + id + "']").parent().addClass("nav-active");
    }
    });


     /* nav-fixed */
    $(function(){
    var scroll_start = 0;
    var startchange = $('.header');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navigation_secondary").css({'opacity': '1', 'transition' : '0.05s', 'z-index' : '99'});
                $(".navigation.navigation-top").css({'opacity': '0', 'transition' : '0.05s', 'z-index' : '0'});

            } else {
                $(".navigation.navigation-top").css({'opacity': '1', 'transition' : '0.05s', 'z-index' : '99'});
                $(".navigation_secondary").css({'opacity': '0', 'transition' : '0.05s', 'z-index' : '0'});
            }
        });
    }
    });
 // Функция валидации и вывода сообщений
 function valEl(el) {

    el.validate({
        rules: {
            tel: {
                required: true,
                regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
            },
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            tel: {
                required: 'Поле обязательно для заполнения',
                regex: 'Телефон может содержать символы + - ()'
            },
            name: {
                required: 'Поле обязательно для заполнения',
            },
            email: {
                required: 'Поле обязательно для заполнения',
                email: 'Неверный формат E-mail'
            }
        },

        // Начинаем проверку id="" формы
        submitHandler: function(form) {
            $('#loader').fadeIn();
            var $form = $(form);
            var $formId = $(form).attr('id');
            switch ($formId) {
                // Если у формы id="goToNewPage" - делаем:
                case 'goToNewPage':
                    $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                        .always(function(response) {
                            //ссылка на страницу "спасибо" - редирект
                            location.href = '#';
                            //отправка целей в Я.Метрику и Google Analytics
                            ga('send', 'event', 'masterklass7', 'register');
                            yaCounter27714603.reachGoal('lm17lead');
                        });
                    break;
                // Если у формы id="popupResult" - делаем:
                case 'popupResult':
                    $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                        .always(function(response) {
                            setTimeout(function() {
                                $('#loader').fadeOut();
                            }, 800);
                            setTimeout(function() {
                                $('#overlay').fadeIn();
                                $form.trigger('reset');
                                //строки для остлеживания целей в Я.Метрике и Google Analytics
                            }, 1100);
                            $('#overlay').on('click', function(e) {
                                $(this).fadeOut();
                            });

                        });
                    break;
            }
            return false;
        }
    })
}

// Запускаем механизм валидации форм, если у них есть класс .js-form
$('.js-form').each(function() {
    valEl($(this));
});

});

//map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.843409, lng: 24.026682},
        zoom: 17,
        styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "hue": "#FFBB00"
                    },
                    {
                        "saturation": 43.400000000000006
                    },
                    {
                        "lightness": 37.599999999999994
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "hue": "#FFC200"
                    },
                    {
                        "saturation": -61.8
                    },
                    {
                        "lightness": 45.599999999999994
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "hue": "#FF0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 51.19999999999999
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "hue": "#FF0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 52
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "hue": "#0078FF"
                    },
                    {
                        "saturation": -13.200000000000003
                    },
                    {
                        "lightness": 2.4000000000000057
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "hue": "#00FF6A"
                    },
                    {
                        "saturation": -1.0989010989011234
                    },
                    {
                        "lightness": 11.200000000000017
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ]
        
    });
    var marker = new google.maps.Marker({
        position: {lat: 49.843409, lng:  24.026682},
        map: map,
        title: 'Наш маркер: Большой театр',
        icon: 'img/marker.png'
    });
}

// --------progressbar---------

  $(function($){
    $("#about").viewportChecker({
    callbackFunction:function(){
        var lineBar = new ProgressBar.Line("#progres-line-photoshop", {
            strokeWidth: 0.5,
            trailWidth: 0,
            from: { color: "#009dda" },
            to: { color: "#009dda" },
            text: {
              value: '',
              className: 'progress-text',
              style: {
                color: '#44444',
                position: 'absolute',
                padding: 0,
                margin: 0,
                transform: null
              }
            },
            step: (state, shape) => {
              shape.path.setAttribute("stroke", state.color);
              shape.setText(Math.round(shape.value() * 100) + ' %');
            }
          });
          
          lineBar.animate(0.79, {
            duration: 10000
          });
        var lineBar = new ProgressBar.Line("#progres-line-html", {
            strokeWidth: 0.5,
            trailWidth: 0,
            from: { color: "#009dda" },
            to: { color: "#009dda" },
            text: {
              value: '',
              className: 'progress-text',
              style: {
                color: '#44444',
                position: 'absolute',
                padding: 0,
                margin: 0,
                transform: null
              }
            },
            step: (state, shape) => {
              shape.path.setAttribute("stroke", state.color);
              shape.setText(Math.round(shape.value() * 100) + ' %');
            }
          });
          
          lineBar.animate(0.90, {
            duration: 10000
          });
          var lineBar = new ProgressBar.Line("#progres-line-script", {
            strokeWidth: 0.5,
            trailWidth: 0,
            from: { color: "#009dda" },
            to: { color: "#009dda" },
            text: {
              value: '',
              className: 'progress-text',
              style: {
                color: '#44444',
                position: 'absolute',
                padding: 0,
                margin: 0,
                transform: null
              }
            },
            step: (state, shape) => {
              shape.path.setAttribute("stroke", state.color);
              shape.setText(Math.round(shape.value() * 100) + ' %');
            }
          });
          
          lineBar.animate(0.69, {
            duration: 10000
          });

          var lineBar = new ProgressBar.Line("#progres-line-wordpress", {
            strokeWidth: 0.5,
            trailWidth: 0,
            from: { color: "#009dda" },
            to: { color: "#009dda" },
            text: {
              value: '',
              className: 'progress-text',
              style: {
                color: '#44444',
                position: 'absolute',
                padding: 0,
                margin: 0,
                transform: null
              }
            },
            step: (state, shape) => {
              shape.path.setAttribute("stroke", state.color);
              shape.setText(Math.round(shape.value() * 100) + ' %');
            }
          });
          
          lineBar.animate(0.92, {
            duration: 10000
          });
    }
    });
    });
  
  


// --function on scroll
  !function (a) {
    a.fn.viewportChecker = function (b) {
        var c = {
            classToAdd: "visible",
            classToRemove: "invisible",
            classToAddForFullView: "full-visible",
            removeClassAfterAnimation: !1,
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function (a, b) {
            },
            scrollHorizontal: !1,
            scrollBox: window
        };
        a.extend(c, b);
        var d = this, e = {height: a(c.scrollBox).height(), width: a(c.scrollBox).width()};
        return this.checkElements = function () {
            var b, f;
            c.scrollHorizontal ? (b = Math.max(a("html").scrollLeft(), a("body").scrollLeft(), a(window).scrollLeft()), f = b + e.width) : (b = Math.max(a("html").scrollTop(), a("body").scrollTop(), a(window).scrollTop()), f = b + e.height), d.each(function () {
                var d = a(this), g = {}, h = {};
                if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-add-class-full-view") && (h.classToAddForFullView = d.data("vp-add-class-full-view")), d.data("vp-keep-add-class") && (h.removeClassAfterAnimation = d.data("vp-remove-after-animation")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(g, c), a.extend(g, h), !d.data("vp-animated") || g.repeat) {
                    String(g.offset).indexOf("%") > 0 && (g.offset = parseInt(g.offset) / 100 * e.height);
                    var i = g.scrollHorizontal ? d.offset().left : d.offset().top,
                        j = g.scrollHorizontal ? i + d.width() : i + d.height(), k = Math.round(i) + g.offset,
                        l = g.scrollHorizontal ? k + d.width() : k + d.height();
                    g.invertBottomOffset && (l -= 2 * g.offset), k < f && l > b ? (d.removeClass(g.classToRemove), d.addClass(g.classToAdd), g.callbackFunction(d, "add"), j <= f && i >= b ? d.addClass(g.classToAddForFullView) : d.removeClass(g.classToAddForFullView), d.data("vp-animated", !0), g.removeClassAfterAnimation && d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                        d.removeClass(g.classToAdd)
                    })) : d.hasClass(g.classToAdd) && g.repeat && (d.removeClass(g.classToAdd + " " + g.classToAddForFullView), g.callbackFunction(d, "remove"), d.data("vp-animated", !1))
                }
            })
        }, ("ontouchstart" in window || "onmsgesturechange" in window) && a(document).bind("touchmove MSPointerMove pointermove", this.checkElements), a(c.scrollBox).bind("load scroll", this.checkElements), a(window).resize(function (b) {
            e = {height: a(c.scrollBox).height(), width: a(c.scrollBox).width()}, d.checkElements()
        }), this.checkElements(), this
    }
}(jQuery);

