// MAKES LINKS CONTAINER CLICKABLE

$(document).ready(function(){
    $('.sidenav li').click(function(){
       window.location.href = 'index.html';
    });
       $('.nav-items').click(function(){
       window.location.href = 'index.html';   
       });
});

// DECLARES SIDE NAV

function toggleNav() {
      let isOpen = $('.menu-toggler').hasClass('change');
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
  }

  // animation
function myFunction(x) {
    x.classList.toggle("change");
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  function openNav() {
    $('html, body').css({
        overflow: 'hidden',
    });
    document.getElementById("mySidenav").style.width = "50%";
    $('.hamburger').css("position", "absolute");
    $('.menu-toggler').css("background-color", "unset");
    $('.menu-toggler').css("border", "none");
    $('.menu-toggler span').css("display", "none");
    $('.mobile').css("display", "none");
    $('.search-wrapper').css("display", "none");
    console.log('test');

    if ($(window).width() < 500){	
    document.getElementById("mySidenav").style.width = "90%";
    }
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    $('html, body').css({
        overflow: 'scroll',
    });
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    $('.hamburger').css("margin-left", "0"), ("position", "fixed");
    $('.menu-toggler').css("background-color", "#333645");
    $('.menu-toggler').css("margin-right", "0"), ("position", "fixed");
    $('.menu-toggler span').css("display", "unset");
    $('.search-wrapper').css("display", "unset");
    $('.mobile').css("display", "unset");
  }
  
// ---- STICKY HEADER ----- //  
  
  ;(function($){
    'use strict';

    var defaults = {
        topOffset: 300, //px - offset to switch of fixed position
        hideDuration: 300, //ms
        stickyClass: 'is-fixed'
    };

    $.fn.stickyPanel = function(options){
        if(this.length == 0) return this; // returns the current jQuery object

        var self = this,
            settings,
            isFixed = false, //state of panel
            stickyClass,
            animation = {
                normal: self.css('animationDuration'), //show duration
                reverse: '', //hide duration
                getStyle: function (type) {
                    return {
                        animationDirection: type,
                        animationDuration: this[type]
                    };
                }
            };

        // Init carousel
        function init(){
            settings = $.extend({}, defaults, options);
            animation.reverse = settings.hideDuration + 'ms';
            stickyClass = settings.stickyClass;
            $(window).on('scroll', onScroll).trigger('scroll');
        }

        // On scroll
        function onScroll() {
            if ( window.pageYOffset > settings.topOffset){
                if (!isFixed){
                    isFixed = true;
                    self.addClass(stickyClass)
                        .css(animation.getStyle('normal'));
                }
            } else {
                if (isFixed){
                    isFixed = false;

                    self.removeClass(stickyClass)
                        .each(function (index, e) {
                            void e.offsetWidth;
                        })
                        .addClass(stickyClass)
                        .css(animation.getStyle('reverse'));

                    setTimeout(function () {
                        self.removeClass(stickyClass);
                    }, settings.hideDuration);
                }
            }
        }

        init();

        return this;
    }
})(jQuery);


//run
$(function () {
    $('#fixed').stickyPanel();
});


// SEARCH BOX

function searchToggle(obj, evt){
  var container = $(obj).closest('.search-wrapper');

  if(!container.hasClass('active')){
          container.addClass('active');
          evt.preventDefault();
  }
  else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
          container.removeClass('active');
          // clear input
          container.find('.search-input').val('');
          // clear and hide result container when we press close
          container.find('.result-container').fadeOut(100, function(){$(this).empty();});
  }
}

function submitFn(obj, evt){
  value = $(obj).find('.search-input').val().trim();

  _html = "Searching for: ";
  if(!value.length){
      _html = "You have not input any text..";
  }
  else{
      _html += "<b>" + value + "</b>";
  }

  $(obj).find('.result-container').html('<span>' + _html + '</span>');
  $(obj).find('.result-container').fadeIn(100);

  evt.preventDefault();
}