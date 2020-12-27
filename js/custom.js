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

  //tooltip init
  $('[data-toggle="tooltip"]').tooltip()

  var scene = $('#scene').get(0);
  var parallaxInstance = new Parallax(scene);

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
    pagination: {
      el: '.swiper-pagination',
    },
  });

  $('#reserveDate').datepicker({
    dateFormat: "dd/mm/yy",
    // changeMonth: true,
    // changeYear: true,
    minDate: 1,
    setDate: new Date(),
    showButtonPanel: true
  });

  //addClass formfield
  $(".formfield input, .formfield textarea, .formfield select").addClass(
    "form-control"
  );

  //carousel init
  $("#carousel1").carousel({
    interval: 6000,
    pause: "false"
  });

  //heading appending span
  $(".heading-after").append("<span></span>");

  //wrapping with span
  $(".link-style-passby").wrapInner("<span></span>");

  //link active
  linkActive();

  $('.company-slider').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 567,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }]
  });

  $('.team-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 911,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  $('.review-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });
  if ($('#typed')[0]) {
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 3000,
      startDelay: 500,
      fadeOut: false,
      loop: true
    });
  }

  $('.projectshp-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000
  });

  //limit characters
  $("p").each(function () {
    "use strict";
    var maxLength = parseInt($(this).attr("data-maxlength"));
    var txt = $(this).text();
    if (txt.length > maxLength)
      $(this).text(txt.substring(0, maxLength) + ".....");
  });

  sideMenuManage();

  $(window).on('resize', function () {
    sideMenuManage();
  });

  $(window).scroll(function () {
    sideMenuManage();
  });

  window.setInterval(function () {
    sideMenuManage();
  }, 2000);

  if ($('input[name="frmReqJob[]"]')[0]) {
    checkboxDataReceiver();

    $('input[name="frmReqJob[]"]').on('change', function () {
      checkboxDataReceiver();
    });
  }
  // padding to body according to header height
  bodyPaddingForHeader();

  $(window).on('resize', function () {
    bodyPaddingForHeader();
  });

  $(window).scroll(function () {
    bodyPaddingForHeader();
  });

  // parallax
  castParallax();

  // import select attr and export value
  selectImport();

  menuCat();
  $(window).on('resize', function () {
    menuCat();
  });

  window.setInterval(function () {
    // equalHeightFixer('.newshp-col .news-card-text');
  }, 2000);

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
      var widthValue = $this.width();
      $this.css("height", widthValue);
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

  //counter onscroll
  function move1() {
    $(".counter-value").each(function () {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text()
      }, {
        duration: 4000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }

  function scrollDestination() {
    var $section = $("#counter");
    $(document).bind("scroll", function () {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        console.log("reached counter div");
        setTimeout(function () {
          move1();
        }, 500);
        // unbind event not to load scrolsl again
        $(document).unbind("scroll");
      }
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




  function castParallax() {

    var opThresh = 350;
    var opFactor = 750;

    window.addEventListener("scroll", function (event) {

      var top = this.pageYOffset;

      var layers = document.getElementsByClassName("parallax-img");
      var layer, speed, yPos;
      for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

      }
    });
  }

  function selectImport() {
    $('.select-import').each(function () {

      var dataImport = $(this).attr('data-import');
      console.log(dataImport);

      $(this).find('option').filter(function (index) {
        return $(this).text() === dataImport;
      }).prop('selected', true);
    })
  }

  function scrollDestination() {
    var $section = $("#counter");
    $(document).bind("scroll", function () {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        console.log("reached counter div");
        setTimeout(function () {
          move1();
        }, 500);
        // unbind event not to load scrolsl again
        $(document).unbind("scroll");
      }
    });
  }

  function menuCat() {
    if ($('.menu-cat-tab').length === 0) {
      return;
    }
    var $window = $(window);
    var divHeight = $('.menu-cat-tab').height();
    var topDis = $('.menu-cat-tab').offset().top;

    $(window).scroll(function () {
      var headerHeight = $('.header').height();
      // console.log(headerHeight);

      if ($window.scrollTop() >= topDis + 10) {
        $('.menu-cat-tab').css('height', divHeight);
        $('.menu-cat-tab-list').addClass('menu-cat-tab-fixed');

        if ($(window).width() < 1201) {
          $('.menu-cat-tab-list').css('top', headerHeight);
        } else {
          $('.menu-cat-tab-list').css('top', '');
        }

      } else {
        $('.menu-cat-tab').css('height', '');
        $('.menu-cat-tab-list').removeClass('menu-cat-tab-fixed');

        if ($(window).width() < 1201) {
          $('.menu-cat-tab-list').css('top', '');
        }
      }
    });
  }

  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    var anchors = $('.order-section');

    for (var i = 0; i < anchors.length; i++) {
      if (scrollTop > $(anchors[i]).offset().top - 120 && scrollTop < $(anchors[i]).offset().top + $(anchors[i]).height() - 120) {
        $('.order-side-list li a[href="#' + $(anchors[i]).attr('id') + '"]').addClass('active');
      } else if (scrollTop < $(anchors[0]).offset().top) {
        $('.order-side-list li:first-child a').addClass('active');
      } else {
        $('.order-side-list li a[href="#' + $(anchors[i]).attr('id') + '"]').removeClass('active');
      }
    }
  });

  function orderDelivery() {
    $('.order-type-field input').each(function () {
      if (!$('#orderTypePickup').checked) {
        $('.order-cart-summary-delivery').removeClass('disabled');
        // console.log('NOne')
      } else {
        $('.order-cart-summary-delivery').addClass('disabled');
        // console.log('PUNn')
      }
    });
    $('.order-type-field input').click(function () {
      if ($(this).is('#orderTypeDelivery')) {
        $('.order-cart-summary-delivery').removeClass('disabled');
      } else {
        $('.order-cart-summary-delivery').addClass('disabled');
      }
    });
  }

  orderDelivery();

  $('.order-modal-quantity-toggle').click(function () {
    var inputField = $(this).siblings('.order-modal-quantity-field');
    var inputVal = parseInt(inputField.val());

    if (($(this).hasClass('order-modal-quantity-minus')) && (inputVal > 1)) {
      inputField.val(inputVal - 1);
    } else if (($(this).hasClass('order-modal-quantity-plus'))) {
      inputField.val(inputVal + 1);
    }
  });

  $('.order-cart-item-num-toggler').click(function () {
    var inputField = $(this).parent().siblings('.order-cart-item-num');
    var inputVal = parseInt(inputField.html());

    if (($(this).hasClass('order-cart-item-num-minus')) && (inputVal > 1)) {
      inputField.html(inputVal - 1);
    } else if (($(this).hasClass('order-cart-item-num-plus'))) {
      inputField.html(inputVal + 1);
    }
  });

  $('.order-cart-item-remove').click(function () {
    var parentDiv = $(this).parents('.order-cart-item');
    $(parentDiv).html('<div class="order-cart-item-removedmsg">Item Removed</div>');
    setTimeout(function () {
      $(parentDiv).remove();
    }, 2000);
  });

  $('.order-item').click(function () {
    var title = $(this).find('.order-item-box-title').html();
    var icons = $(this).find('.order-item-box-icons').html();
    var content = $(this).find('.order-item-box-para').html();
    var price = $(this).find('.order-item-box-price').html();

    modalReplace(title, icons, content, price);

    $('#orderModal').modal();
  });

  $('.order-cart-toggle').click(function () {
    var orderCart = $('.order-cart');
    if (orderCart.hasClass('open')) {
      orderCart.removeClass('open');
      $('html').css('overflow-y', '');
    } else {
      orderCart.addClass('open');
      $('html').css('overflow-y', 'hidden');
    }
  });

  function modalReplace(title, icons, content, price) {
    var modal = $('#orderModal');
    $(modal).find('.modal-title').html(title);
    $(modal).find('.modal-price').html(price);
    $(modal).find('.order-modal-add-to-cart-price').html(price);
    if (!icons == '') {
      $(modal).find('.modal-icons').html(icons);
    } else {
      $(modal).find('.modal-icons').html('');
    }
    if (!content == '') {
      $(modal).find('.modal-desc').html(content);
    } else {
      $(modal).find('.modal-desc').html('');
    }
  }

  $('.password-field-icon').click(function () {
    var $this = $(this);

    if ($this.hasClass('show-password')) {
      $this.removeClass('show-password');
      $(this).siblings('input').attr('type', 'password');
    } else {
      $this.addClass('show-password');
      $(this).siblings('input').attr('type', 'text');
    }
  });

  function orderHeaderSticky() {

    var $window = $(window);
    var orderMain = $('.order-main');
    var orderHeader = $('.order-header');
    var orderHeaderMarginBt = parseInt(orderHeader.css('margin-bottom'));
    var offsetTop = orderMain.offset().top;
    var orderHeaderHeight = orderHeader.outerHeight();

    $(window).scroll(function () {
      $(window).on('resize', function () {
        if ($(window).width() > 767) {
          return;
        }
      });
      var headerHeight = $('.header').outerHeight();

      if ($window.scrollTop() > (offsetTop - headerHeight)) {
        orderMain.addClass('header-sticky');
        orderMain.css('margin-top', orderHeaderHeight + orderHeaderMarginBt);
        orderHeader.css({
          position: 'fixed',
          top: headerHeight,
          left: 0
        });
      } else {
        orderMain.removeClass('header-sticky');
        orderMain.css('margin-top', '');
        orderHeader.css({
          position: '',
          top: '',
          left: ''
        });
      }
      // console.log(offsetTop)
    });
  }

  if ($('.order-header')[0]) {
    if ($(window).width() < 768) {
      orderHeaderSticky();
    }
  }

  function deliveryAddressToggler() {
    $('#deliverAddToggle').each(function () {
      if (this.checked) {
        $('#deliveryDetails').show();
      } else {
        $('#deliveryDetails').hide();
      }
    });

    $('#deliverAddToggle').change(function () {
      if (this.checked) {
        $('#deliveryDetails').show();
      } else {
        $('#deliveryDetails').hide();
      }
    });
  }

  deliveryAddressToggler();




  // function orderCartOpen() {
  //   var $this = $('.order-add-to-cart');
  //   $this.addClass('active');
  //   $this.find('.order-add-to-cart-field').val(1);
  // }

  // function orderCartClose() {
  //   var $this = $('.order-add-to-cart');
  //   $this.removeClass('active');
  //   $this.find('.order-add-to-cart-field').val('');
  // }

  // function orderCartToggle() {
  //   $('.order-add-to-cart-num').click(function () {
  //     var $this = $(this);
  //     var parent = $this.parents('.order-add-to-cart');
  //     var inputField = $this.siblings('.order-add-to-cart-field');
  //     var inputMax = inputField.attr('max');
  //     var inputVal = parseInt(inputField.val());

  //     if (!parent.hasClass('active')) {
  //       orderCartOpen();
  //       return;
  //     }

  //     if($this.hasClass('order-add-to-cart-minus') && inputVal == 1){
  //       orderCartClose();
  //       return;
  //     }

  //     if($this.hasClass('order-add-to-cart-minus') && inputVal > 1){
  //       inputField.val(inputVal - 1);
  //       return;
  //     }

  //     if($this.hasClass('order-add-to-cart-plus')){

  //       if(inputVal >= inputMax){
  //         // inputField.val(inputMax);
  //         alert('Maximum allowed quantity for this item is ' + inputMax + ' ');
  //       }else{
  //         inputField.val(inputVal + 1);
  //       }
  //     }

  //     console.log(inputVal);
  //     console.log(inputMax);

  //   });
  // }

  // orderCartToggle();
});