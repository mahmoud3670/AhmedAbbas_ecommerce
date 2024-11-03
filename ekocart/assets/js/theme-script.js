/* ------------------------------------------------
  Project:   Ekocart - Multi-purpose E-commerce Html5 Template
------------------------------------------------ */
/* ------------------------
    Table of Contents

  1. Predefined Variables
  2. Scroll to top
  3. Scrolling Animation
  4. HT Window load and functions

------------------------ */
 
"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var $window = $(window),
    $document = $(document),
    $body = $('body');

//Check if function exists
$.fn.exists = function () {
  return this.length > 0;
};
  
  
/*------------------------------------
  HT Scroll to top
--------------------------------------*/
function scrolltop() {
  var pxShow = 300,
    goTopButton = $(".scroll-top")
    // Show or hide the button
  if ($(window).scrollTop() >= pxShow) goTopButton.addClass('scroll-visible');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      if (!goTopButton.hasClass('scroll-visible')) goTopButton.addClass('scroll-visible')
    } else {
      goTopButton.removeClass('scroll-visible')
    }
  });
  $('.smoothscroll').on('click', function (e) {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
};

/*------------------------------------
  HT Scrolling Animation
--------------------------------------*/
function scrolling() {
    $('.nav-item a, .page-scroll').bind('click', function(event) {
        var $anchor = $(this);
    var hg = $('header').height();
    var scroll_h = $($anchor.attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: scroll_h
        }, 1200);
        event.preventDefault();
    });
};


/*------------------------------------
  HT Window load and functions
--------------------------------------*/
$(document).ready(function() {
    scrolltop(),
    scrolling();
});
