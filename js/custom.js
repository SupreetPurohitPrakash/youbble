jQuery(document).ready(function ($) {
  //smooth scroll
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    var topSpacer = 60;

    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top - topSpacer
    }, 1500, "easeInOutExpo");

    event.preventDefault();
  });

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 20,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //tooltip init
  $('[data-toggle="tooltip"]').tooltip();

  //addClass formfield
  $(".formfield input, .formfield textarea, .formfield select").addClass(
    "form-control"
  );

  //carousel init
  $("#carousel1").carousel({
    interval: 6000,
    pause: "false"
  });


  lightcase
  $('a[data-rel^=lightcase]').lightcase();

  //wrapping with span
  $(".link-style-passby").wrapInner("<span></span>");

  //limit characters
  $("p").each(function () {
    "use strict";
    var maxLength = parseInt($(this).attr("data-maxlength"));
    var txt = $(this).text();
    if (txt.length > maxLength)
      $(this).text(txt.substring(0, maxLength) + ".....");
  });


  $(".side-menu-toggle,.side-menu-bg").click(function () {
    $(".nav-toggle").toggleClass("open");
    $(".side-menu").toggleClass("active");

    if ($(".side-menu").hasClass("active")) {
      $("html").addClass("side-menu-toggled");
      $(".side-menu-bg").addClass("active").animate({
        opacity: 1
      }, 400);
    } else {
      $("html").removeClass("side-menu-toggled");
      $(".side-menu-bg").removeClass("active").animate({
        opacity: 0
      }, 400);
    }


  });

  $('.side-menu-toggle').trigger('click');

  //dropdown toggle
  $(".has-submenu").click(function () {
    "use strict";
    var $this = $(this);
    var menu = $(this).children('ul');

    $this.toggleClass("open");
  });

  $(".search-popup-toggle").click(function () {
    // $(".search-popup").addClass("active");

    if ($(".search-popup").hasClass("active")) {
      $(".search-popup").removeClass("open");
      setTimeout(function () {
        $(".search-popup").removeClass("active");
      }, 1000);
    } else {
      $(".search-popup").addClass("active");
      setTimeout(function () {
        $(".search-popup").addClass("open");
      }, 10);
    }
  });

  // animate on scroll init
  AOS.init({
    once: true
  });

  //delay animation looped for uniform difference between animation delay
  showDelay(".carousel-overlay-inner >*", "animation-delay", 400);
  showDelay(".section-head >*", "animation-delay", 300);
  showDelay(".servhp-slider .item", "animation-delay", 300);
  showDelay(".abouthp .section-cont>*", "animation-delay", 200);

  $('.carousel-overlay-title>*').addClass('animate__animated animate__fadeInDown');
  $('.carousel-overlay-cont>*').addClass('animate__animated animate__fadeInUp');

  //changing img to wrapped div's background
  imgToBg();

  if ($(window).width() > 991) {
    scrollToClass(".header__main", ".header", "headerfixit", 0);
  } else {
    scrollAddClass(".header", "headerfixit")
  }

  //if clicked outside container remove said class
  containerOutClock('.has-submenu', 'open');

  function sideMenuManage() {

    if ($(window).width() < 577) {
      var headerHeight = $('.header').height();
      var windowHeight = $(window).innerHeight();
      var sideMenuHeight = windowHeight - headerHeight;

      $('.side-menu').css({
        'top': headerHeight,
        'height': sideMenuHeight
      });
    } else {
      $('.side-menu').css({
        'top': 'inherit',
        'height': '100vh'
      });
    }
  }

  function bodyPaddingForHeader() {
    var headerHeight = $('.header').outerHeight();

    if ($(window).width() < 992) {
      $('body').css({
        'padding-top': headerHeight
      })
    } else {
      $('body').css({
        'padding-top': 'inherit'
      })
    }
  }

  //animation or transition delay automate
  function showDelay(classList, delayType, plusValue) {
    "use strict";
    var unList = String(classList);
    var num = $(unList).length;

    var listAdd = 150;
    for (let i = 1; i <= num; i++) {
      $(unList + ":nth-child(" + i + ")").css(delayType, "" + listAdd + "ms");
      listAdd = listAdd + plusValue;
    }
  }

  function scrollToClass(classTarget, classToReceive, classToAdd, extraDistance) {
    // var distance = $(classTarget).offset().top;
    var $window = $(window);
    var classTargetHeight = $(classTarget).height();

    $(window).scroll(function () {
      if ($window.scrollTop() + extraDistance >= 100) {
        // Your div has reached the top
        $(classToReceive).addClass(classToAdd);
        $(classToReceive).css({
          'margin-bottom': classTargetHeight
        })
      } else {
        $(classToReceive).removeClass(classToAdd);
        $(classToReceive).css({
          'margin-bottom': ''
        })
      }
    });
  }

  function scrollAddClass(classTarget, classToReceive) {
    var classHeight = $(classTarget).height();
    var $window = $(window);

    $(window).scroll(function () {
      if ($window.scrollTop() >= classHeight) {
        $(classTarget).addClass(classToReceive);
      } else {
        $(classTarget).removeClass(classToReceive);
      }
    });
  }

  if ($('.filter-container')[0]) {

    $('.filterizr-filter li').click(function () {
      $('.filterizr-filter li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });

    var filterizd = $('.filter-container').filterizr();

    filterizd.filterizr('sort', 'title', 'asc');

  }

  // if the target of the click isn't the container nor a descendant of the container
  function containerOutClock(target, toAddClass) {
    $(document).mouseup(function (e) {
      var container = $(target);

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(target).removeClass(toAddClass);
      }
    });
  }

  // Make nav links active
  function linkActive() {
    var loc = window.location.pathname;
    var page = location.pathname.split("/").pop();
    console.log("page is:", page);

    if (page === "") {
      $(".navul >li:nth-child(1)").addClass("active");
    } else {
      $('a[href="./' + page + '"]')
        .parent("li")
        .addClass("active");
      $('a[href="' + page + '"]')
        .parent("li")
        .addClass("active");
    }
  }

  //setting overlay outer height
  $(document).ready(overlayHeight);
  $(window).resize(overlayHeight);

  function overlayHeight() {
    $(".square").each(function () {
      "use strict";
      var $this = $(this);
      var widthValue = $this.outerWidth();
      $this.css("minHeight", widthValue);
    });
  }

  //copy img to background
  function imgToBg() {
    "use strict";
    var $classForBg = $(".imgtobg-img");
    $classForBg.addClass("imgtobg");
    $(".imgtobg").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });

    var $classForBgSm = $(".imgtobg-img-sm");
    $classForBgSm.addClass("imgtobg-sm");
    $(".imgtobg-sm").each(function () {
      "use strict";
      var $this = $(this);
      var thissrc = $(this).attr("src");
      $this.wrap(
        '<div class="imgtobg-o-sm app-xs" style="background-image:url(' +
        thissrc +
        ')"></div>'
      );
      $this.hide();
    });
  }

  function equalHeightFixer(targetClass) {
    // Select and loop the container element of the elements you want to equalise
    var highestBox = 0;

    $(targetClass).each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).outerHeight();
      }
    });
    console.log(highestBox);
    $(targetClass).css({
      'min-height': highestBox
    });
  }

  function dotsAnimate() {

  }

  dotsAnimate();

  $('.autopilot').click(function () {
    $(this).find('.autopilot-dot').toggleClass('dot-top-push');
    $(this).find('.autopilot-dot').toggleClass('dot-left-push');
    console.log('gere')
  });


  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    var anchors = $('.autopilot');

    if (scrollTop > anchors.offset().top - 120 && scrollTop) {
      $(anchors).addClass('dotpush');
      var timeout1 = setTimeout(function () {
        $(anchors).addClass('dotpush1')
      }, 500);
      var timeout2 = setTimeout(function () {
        $(anchors).addClass('dotpush2')
      }, 900);
      var timeout3 = setTimeout(function () {
        $(anchors).addClass('dotpush3')
      }, 1500);
      var timeout4 = setTimeout(function () {
        $(anchors).addClass('dotpush4')
      }, 2000);
      return;
    }
  });


});