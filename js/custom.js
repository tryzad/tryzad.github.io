/*
Template Name: Osahan - Ads Listing Responsive Website Template
Author: gurdeep
Author URI: https://wrapbootstrap.com/user/gurdeep
Version: 1.0
*/

/*
	1) Preloader
	2) Featured Owl Carousel
	3) Categories List Page
	4) Categories Nav Smooth Scroll Animation
	5) File Style
	6) Tooltip
	7) Back To Top
	8) Single Ads Slider
*/

$(document).ready(function(){
    "use strict";
    function signup() {
      alert("نشكر لك اهتمامك , الموقع تجريبي وسيتاح التسجيل لاحقاً");
    }

    function login() {
      alert("نشكر لك اهتمامك , الموقع تجريبي وسيتاح تسجيل الدخول لاحقاً");
    }
    // ===========Preloader============
    $(window).on('load', function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

    // ===========Featured Owl Carousel============
    var objowlCarouselRtl=$(".owl-carousel-featured");
    if (objowlCarouselRtl.length > 0) {
        objowlCarouselRtl.owlCarouselRtlRtl({
            items: 4,
            lazyLoad: true,
            pagination: false,
            autoPlay: 2000,
            navigation: true,
            navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            stopOnHover: true,
            rtl: true,
            center: true,
            // items: 4,
            // responsiveClass: true,
            // loop: false,
            // nav: false,
            // margin: 10,
            // lazyLoad: false,
            // autoplay: false,
            // autoplayTimeout: 10000,
            // smartSpeed: 200,
            autoWidth: true,
        });
    }
    
    // ===========Categories List Page============
    var mycategorylistpage=$(".categories-list-page");
    if (mycategorylistpage.length > 0) {
        mycategorylistpage.owlCarouselRtl({
            items: 3,
            lazyLoad: true,
            pagination: false,
            navigation: true,
            navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            autoPlay: 2000,
            stopOnHover: true
        });
    }
    
    // ===========Categories Nav Smooth Scroll Animation============
    $('.all-categories-nav a').on('click', function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 2000);
           return false;
          }
        }
    });
    
    // ===========File Style============	
    $('.filestyle').each(function() {
        var $this = $(this),
            options = {
                'buttonText': $this.attr('data-buttonText'),
                'input': $this.attr('data-input') === 'false' ? false : true,
                'icon': $this.attr('data-icon') === 'false' ? false : true,
                'classButton': $this.attr('data-classButton'),
                'classInput': $this.attr('data-classInput'),
                'classIcon': $this.attr('data-classIcon')
            };
        $this.filestyle(options);
    });
    
    // ===========Tooltip============
    $('[data-toggle="tooltip"]').tooltip();
    
    // ===========Back To Top============	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
             $('#back-to-top').fadeIn();
        } else {
             $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function () {
         $('#back-to-top').tooltip('hide');
         $('body,html').animate({
              scrollTop: 0
         }, 800);
         return false;
    });
    $('#back-to-top').tooltip('hide');
    
    // ===========Single Ads Slider============	
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
      sync1.owlCarouselRtl({
        singleItem : true,
        slideSpeed : 1000,
        pagination: false,
        navigation: true,
        navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoPlay: 1500,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
    });
    sync2.owlCarouselRtl({
        items : 4,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
    });
    function syncPosition(el){
        var current = 0;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarouselRtl") !== undefined){
          center(current)
        }
    }
    $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
    });
    function center(number){
        var sync2visible = sync2.data("owlCarouselRtl").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }
        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
    }
    var imported = document.createElement('script');imported.src = 'https://www.googletagmanager.com/gtag/js?id=UA-120909275-1';document.head.appendChild(imported);window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-120909275-1');

});