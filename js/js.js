$(document).ready(function(){
  // Hamburger function
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
  });

  // Nav link click function
  $('.nav-link').on('click', function(){
    let navHeight = $('.navbar').outerHeight();
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
    let linkHref = $(this).attr('href');
    $('html, body').delay(500).animate({
      scrollTop: $(linkHref).offset().top - navHeight
    }, 1000);
    return false;
  });

  $('.drop-down, .drop-down-menu, .menu-items').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
  });

  // Nav fade in and out
  $('.navbar').hide();

  let topOfAboutDiv = $('.about').offset().top;
  
  $(window).resize(function(){
    topOfAboutDiv = $('.about').offset().top;
  });
  
  $(window).scroll(function(){
    if($(this).scrollTop() >= (topOfAboutDiv - 50)){
      $('.navbar').fadeIn('slow');
    } else {
      $('.navbar').fadeOut('slow');
    }
  });
});