$(document).ready(function () {

    // Menú principal
    var $menuBtn = $(".header-btn");
    var $menuLista = $(".header-menu");

    $menuBtn.click(function () {
        $menuLista.slideToggle("fast");
    });

    // Menús secundarios
    var $menuItemTrigger = $(".header-menu-item-trigger");

    // $menuItemTrigger.hover(function () {
    //     var $this = $(this);
    //     var $submenu = $this.find(".header-submenu");
    //     if ($window.width() > 768) {
    //         var $icono = $this.find(".header-submenu-icono");
    //         $icono.fadeIn("slow");
    //     }
    //     $submenu.slideDown("slow");
    // }, function () {
    //     var $this = $(this);
    //     var $submenu = $this.find(".header-submenu");
    //     if ($window.width() > 768) {
    //         var $icono = $this.find(".header-submenu-icono");
    //         $icono.fadeOut("slow");
    //     }
    //     $submenu.slideUp("slow");
    // });

    $('.header-menu-item-trigger').hover(function() 
        {
            $(this).find('.header-submenu-wrapper').stop(true, true).delay(200).fadeIn(500);
        }, function() 
        {
            $(this).find('.header-submenu-wrapper').stop(true, true).delay(200).fadeOut(500);
        });

    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).parent().parent().children().children(".dropdown-menu").css("display", "none");
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });

    var $window = $(window);
    var windowWidth;
    $window.resize(function () {
        windowWidth = $window.width();
        handleMenu(windowWidth);
    });

    function handleMenu(width) {
        if (width > 768) {
            $menuLista.css("display", "flex");
        } else {
            if ($menuLista.css("display") != "block") {
                $menuLista.css("display", "none");
            }
        }
    }

    if ($(".slider").length > 0) {
        $(".slider-contenido").slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: false,
            prevArrow: "<img src='https://84static.loadingplay.com/static/images/52136545c310f5dd64f46619d8a873b7_sliderflecha.png' class='slider-flecha slider-flecha-prev'>",
            nextArrow: "<img src='https://84static.loadingplay.com/static/images/52136545c310f5dd64f46619d8a873b7_sliderflecha.png' class='slider-flecha slider-flecha-next'>"
        });
    }

    if ($(".producto").length > 0) {
        var $item = $(".producto-preview-item");
        var $img = $(".producto-preview-img");

        $item.click(function () {
            var src = $(this).attr("src");
            $img.attr("src", src);
        });
    }

    if ($(".galeria-popup").length > 0) {
        var $galeriaItem = $(".galeria-item-trigger");
        var $galeriaPopup = $(".galeria-popup");
        var $galeriaPopupImg = $(".galeria-popup-img");
        var $galeriaCerrar = $(".galeria-popup-cerrar");
        var $btnNext = $(".galeria-popup-flecha-next");
        var $btnPrev = $(".galeria-popup-flecha-prev");

        $galeriaCerrar.click(function () {
            $galeriaPopup.removeClass("galeria-popup-activo");
        });

        $galeriaItem.click(function () {
            var $this = $(this);
            $this.addClass("galeria-item-activo");
            var src = $this.children().attr("src");
            $galeriaPopupImg.attr("src", src);

            $galeriaPopup.addClass("galeria-popup-activo");
        });

        $btnPrev.click(function () {
            var $activo = $(".galeria-item-activo");
            if ($activo.prev()) {
                var $anterior = $activo.prev();
                $anterior.addClass("galeria-item-activo");
                $activo.removeClass("galeria-item-activo");
                var src = $anterior.children().attr("src");
                $galeriaPopupImg.attr("src", src);
                if ($activo.is(":first-child") && !$activo.parent().is(":first-child")) {
                    var $padre = $activo.parent();
                    if ($padre.prev()) {
                        var $ultimo = $padre.prev().children().last();
                        $ultimo.addClass("galeria-item-activo");
                        var src = $ultimo.children().attr("src");
                        $galeriaPopupImg.attr("src", src);
                    }
                }
                if ($activo.is(":first-child") && $activo.parent().is(":first-child")) {
                    $activo.addClass("galeria-item-activo");
                }
            }
        });

        $btnNext.click(function () {
            var $activo = $(".galeria-item-activo");
            if ($activo.next()) {
                var $siguiente = $activo.next();
                $activo.removeClass("galeria-item-activo");
                $siguiente.addClass("galeria-item-activo");
                var src = $siguiente.children().attr("src");
                $galeriaPopupImg.attr("src", src);
                if ($activo.is(":last-child") && !$activo.parent().is(":last-child")) {
                    var $padre = $activo.parent();
                    if ($padre.next()) {
                        var $primero = $padre.next().children().first();
                        $primero.addClass("galeria-item-activo");
                        var src = $primero.children().attr("src");
                        $galeriaPopupImg.attr("src", src);
                    }
                }
                if ($activo.is(":last-child") && $activo.parent().is(":last-child")) {
                    $activo.addClass("galeria-item-activo");
                }
            }
        });
    }

});

$(document).ready(function()
{
    var owl = $('.owl-carousel');
    owl.owlCarousel(
    {
        items:6,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function()
    {
        owl.trigger('play.owl.autoplay',[1000])
    });
    $('.stop').on('click',function()
    {
        owl.trigger('stop.owl.autoplay')
    });
});
