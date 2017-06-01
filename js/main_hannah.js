$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

var $stage = 0;


$('.bigbutton').click(function(){
  if ($stage == 0){
    $stage = 1;
    $('.frontenvelope').addClass('stage1');
    
    $('.backenvelope').addClass('stage1b1');
    $('.backenvelope_back').addClass('stage1b1');
    $('.centercard').addClass('stage1b2');
    $('.centercardflap').addClass('stage1b3');
    $('.backenvelopeface').addClass('stage1b4');
    $('.backenvelopecover').addClass('stage1b5');
    //alert("got this far");
  }else if ($stage ==1 ){
    $stage = 2;
    $('.backenvelopecover_back').addClass('stage3a');
    $('.backenvelopecover').addClass('stage3b');
  }
  else if ($stage ==2 ){
    $stage = 3;
    $('.backenvelopecover_back').addClass('stage4a');
    $('.backenvelopeface').addClass('stage4b');
    $('.backenvelope').addClass('stage4c');
  }
  else if ($stage ==3 ){
    $stage = 4;
    $('.cardflapleft').addClass('stage5a');
    $('.cardflapright').addClass('stage5b'); 
  }
  else if ($stage ==4 ){
    $stage = 5;
    
    $('.cardflapleft').removeClass('stage5a');
    $('.cardflapright').removeClass('stage5b'); 
  }
  else if ($stage ==5 ){
    $stage = 6;
    
    $('.backenvelopecover_back').removeClass('stage4a');
    $('.backenvelopeface').removeClass('stage4b');
    $('.backenvelope').removeClass('stage4c');
  }
  else if ($stage ==6 ){
    $stage = 7;
    $('.backenvelopecover_back').removeClass('stage3a');
    $('.backenvelopecover').removeClass('stage3b');
  }
  else if ($stage ==7 ){
    $stage = 0;

  
    $('.frontenvelope').removeClass('stage1');  
    $('.backenvelope').removeClass('stage1b1');
    $('.backenvelope_back').removeClass('stage1b1');
    $('.centercard').removeClass('stage1b2');
    $('.centercardflap').removeClass('stage1b3');
    $('.backenvelopeface').removeClass('stage1b4');
    $('.backenvelopecover').removeClass('stage1b5');
  }
});

$(document).ready(function(){
  })
  

