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

  $('.blog-hero-slider').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 407.436 407.436" style="enable-background:new 0 0 407.436 407.436;" xml:space="preserve"><polygon points="315.869,21.178 294.621,0 91.566,203.718 294.621,407.436 315.869,386.258 133.924,203.718 "/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 407.436 407.436" style="enable-background:new 0 0 407.436 407.436;" xml:space="preserve"><polygon points="112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "/></svg></button>',
  });

  //changing img to wrapped div's background
  imgToBg();

  scrollAddClass();

  function scrollAddClass() {
    var header = $('.header');
    var classHeight = header.height();
    var $window = $(window);

    $(window).scroll(function () {
      if ($window.scrollTop() >= classHeight) {
        header.addClass('headerfixit');
      } else {
        header.removeClass('headerfixit');
      }
      if ($window.scrollTop() >= classHeight * 2) {
        header.addClass('headerfixit');
      } else {
        header.removeClass('headerfixit');
      }
    });
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

  // padding to body according to header height
  // bodyPaddingForHeader();

  // $(window).on('resize', function () {
  //   bodyPaddingForHeader();
  // });

  // $(window).scroll(function () {
  //   bodyPaddingForHeader();
  // });

  function bodyPaddingForHeader() {
    var headerHeight = $('.header').outerHeight();

    if ($(window).width() < 992) {
      $('body').css({
        'padding-top': headerHeight
      })
    } else {
      $('body').css({
        'padding-top': ''
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

  if ($('.autopilot')[0]) {
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
  }

  if ($('.timeline-date')[0]) {
    timelineDateBar();
    $('.timeline-date button').click(function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      timelineDateBar();
      timelineContent($(this));
    });

    function timelineDateBar() {
      var active = $('.timeline-date button.active');
      var bar = $('.timeline-date-bar');

      var coordinates = active.position().top;
      var height = active.outerHeight();
      var pos = coordinates + height;

      bar.animate({
        top: pos
      }, 250)
    }

    function timelineContent(btn) {
      var target = btn.attr('data-target');
      var bg = $('.timeline-bg img');

      $('.timeline-content-item').removeClass('active');
      $('#' + target).addClass('active');

      var imgURL = $('.timeline-content-item.active .timeline-content-item-bg').attr('src');

      bg.fadeOut(400, function () {
        bg.prop('src', imgURL);
      }).fadeIn(400);

      console.log('#' + target);
      console.log(imgURL);
    }
  }
  $('.sponsers-item-list-toggle').click(function (event) {
    event.preventDefault();
    var list = $(this).parents('.sponsers-item').find('.sponsers-item-list');

    if (list.is(':visible')) {
      list.slideUp();
      $(this).contents().last()[0].textContent = 'Check out the list';
    } else {
      list.slideDown();
      $(this).contents().last()[0].textContent = 'Hide the list';
    }
  })

  $('.faqs-accordion-item-header').click(function () {
    $('.faqs-accordion-item').removeClass('active');
    $('.faqs-accordion-item-body').slideUp();
    $(this).parents('.faqs-accordion-item').addClass('active');
    $(this).siblings('.faqs-accordion-item-body').slideDown();
  });

  $('.shop-filter-item li').click(function () {
    $(this).toggleClass('active');
  })

  $('.shop-single-preview-collec img').click(function () {
    var src = $(this).attr('src');
    $('.shop-single-preview-main img').attr('src', src);
  })

});