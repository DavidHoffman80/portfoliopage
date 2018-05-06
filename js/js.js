$(document).ready(function(){
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
  });

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
});