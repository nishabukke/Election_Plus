// mobile menu

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".canva_expander" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".canva_expander" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".canva_expander" ).show();
    });
    });
    
    });
  
   // Close out sub menu
   $('.sub__close').click(function(e) {
    e.preventDefault();
    
    $(this).parent().parent().removeClass('is-active');
  });
  
  // Trigger sub menu
  $('.menu ul .nav__submenu').click(function(e) {
    e.preventDefault();
    
    $(this).siblings().addClass('is-active');
  });
  