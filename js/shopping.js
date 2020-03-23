$(function(){

  var headerMenu = $('header div ul');
  var mainMenu = $('nav');
  var scrollOffset = $('.menu').offset();

  $(window).scroll(function(){
      if($(this).scrollTop() > scrollOffset.top){
        headerMenu.addClass('fix');
        mainMenu.addClass('fix_menu');
      }
      else{
        headerMenu.removeClass('fix');
        mainMenu.removeClass('fix_menu');
      }
  })  ;

  $('.main_wrap').slick({
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow:3,
    slidesToscroll:1,
    arrows:true,
    fade:false,
    prevArrow: $('.left'),
    nextArrow: $('.right'),
  });


  $('.best_wrap1').slick({
    autoplay:true,
    autoplaySpeed:4000,
    speed:1000,
    slidesToshow:1,
    slidesToscroll:1,
    arrows:true,
    fade:false,
    prevArrow: $('.b_left'),
    nextArrow: $('.b_right'),
  });




  var menuLi = $('.menu>li');
  var menuLi1 = $('.menu>li:nth-child(2)');
  var menuLi2 = $('.menu>li:nth-child(3)');
  var menuLi3 = $('.menu>li:nth-child(4)');
  var menuLi4 = $('.menu>li:nth-child(5)');
  var menuLi5 = $('.menu>li:nth-child(6)');
  var menuLi6 = $('.menu>li:nth-child(7)');
  var menuLi7 = $('.menu>li:nth-child(8)');
  var menuLi8 = $('.menu>li:nth-child(9)');
  var menuLi9 = $('.menu>li:nth-child(10)');
  var menuLi10 = $('.menu>li:nth-child(11)');

  menuLi1.mouseenter(function(){
    $('.dropdown1').show().stop().animate({height:230},300);
    });
  $('.dropdown1').mouseenter(function(){
    $('.dropdown1').show().stop().animate({height:230},300);
  });
  menuLi1.mouseleave(function(){
    $('.dropdown1').stop().animate({height:0},300).hide();
  });
  $('.dropdown1').mouseleave(function(){
    $('.dropdown1').stop().animate({height:0},300).hide();
  });

  menuLi2.mouseenter(function(){
    $('.dropdown2').show().stop().animate({height:230},300);
  });
  $('.dropdown2').mouseenter(function(){
    $('.dropdown2').show().stop().animate({height:230},300);
  });
  menuLi2.mouseleave(function(){
    $('.dropdown2').stop().animate({height:0},300).hide();
  });
  $('.dropdown2').mouseleave(function(){
    $('.dropdown2').stop().animate({height:0},300).hide();
  });

  menuLi3.mouseenter(function(){
    $('.dropdown3').show().stop().animate({height:230},300);
  });
  $('.dropdown3').mouseenter(function(){
    $('.dropdown3').show().stop().animate({height:230},300);
  });
  menuLi3.mouseleave(function(){
    $('.dropdown3').stop().animate({height:0},300).hide();
  });
  $('.dropdown3').mouseleave(function(){
    $('.dropdown3').stop().animate({height:0},300).hide();
  });

  menuLi4.mouseenter(function(){
    $('.dropdown4').show().stop().animate({height:230},300);
  });
  $('.dropdown4').mouseenter(function(){
    $('.dropdown4').show().stop().animate({height:230},300);
  });
  menuLi4.mouseleave(function(){
    $('.dropdown4').stop().animate({height:0},300).hide();
  });
  $('.dropdown4').mouseleave(function(){
    $('.dropdown4').stop().animate({height:0},300).hide();
  });

  menuLi5.mouseenter(function(){
    $('.dropdown5').show().stop().animate({height:230},300);
  });
  $('.dropdown5').mouseenter(function(){
    $('.dropdown5').show().stop().animate({height:230},300);
  });
  menuLi5.mouseleave(function(){
    $('.dropdown5').stop().animate({height:0},300).hide();
  });
  $('.dropdown5').mouseleave(function(){
    $('.dropdown5').stop().animate({height:0},300).hide();
  });

  menuLi6.mouseenter(function(){
    $('.dropdown6').show().stop().animate({height:230},300);
  });
  $('.dropdown6').mouseenter(function(){
    $('.dropdown6').show().stop().animate({height:230},300);
  });
  menuLi6.mouseleave(function(){
    $('.dropdown6').stop().animate({height:0},300).hide();
  });
  $('.dropdown6').mouseleave(function(){
    $('.dropdown6').stop().animate({height:0},300).hide();
  });

  menuLi7.mouseenter(function(){
    $('.dropdown7').show().stop().animate({height:230},300);
  });
  $('.dropdown7').mouseenter(function(){
    $('.dropdown7').show().stop().animate({height:230},300);
  });
  menuLi7.mouseleave(function(){
    $('.dropdown7').stop().animate({height:0},300).hide();
  });
  $('.dropdown7').mouseleave(function(){
    $('.dropdown7').stop().animate({height:0},300).hide();
  });

  menuLi8.mouseenter(function(){
    $('.dropdown8').show().stop().animate({height:230},300);
  });
  $('.dropdown8').mouseenter(function(){
    $('.dropdown8').show().stop().animate({height:230},300);
  });
  menuLi8.mouseleave(function(){
    $('.dropdown8').stop().animate({height:0},300).hide();
  });
  $('.dropdown8').mouseleave(function(){
    $('.dropdown8').stop().animate({height:0},300).hide();
  });

  menuLi9.mouseenter(function(){
    $('.dropdown9').show().stop().animate({height:230},300);
  });
  $('.dropdown9').mouseenter(function(){
    $('.dropdown9').show().stop().animate({height:230},300);
  });
  menuLi9.mouseleave(function(){
    $('.dropdown9').stop().animate({height:0},300).hide();
  });
  $('.dropdown9').mouseleave(function(){
    $('.dropdown9').stop().animate({height:0},300).hide();
  });

  menuLi10.mouseenter(function(){
    $('.dropdown10').show().stop().animate({height:230},300);
  });
  $('.dropdown10').mouseenter(function(){
    $('.dropdown10').show().stop().animate({height:230},300);
  });
  menuLi10.mouseleave(function(){
    $('.dropdown10').stop().animate({height:0},300).hide();
  });
  $('.dropdown10').mouseleave(function(){
    $('.dropdown10').stop().animate({height:0},300).hide();
  });
//메인메뉴 슬라이드 end


//  배너슬라이드
// var eleWidth = $(".main_wrap ul li").innerWidth();
// var state = false;
// var direction = "left";
// var bannerAuto;
//
//
//
// function right(){
//   direction = "right";
//   $(".main_wrap ul").animate({left:(eleWidth*-1)},500,function(){
//     $(this).children("li:first").insertAfter($(this).children("li:last"));
//     $(this).css({left:0});
//     state = false;
//   });
// }
//
// function left(){
//   direction = "left";
//   $(".main_wrap ul").animate({left:(eleWidth*1)},500,function(){
//     $(this).css({left:0});
//     $(this).children("li:last").insertBefore($(this).children("li:first"));
//     state = false;
//   });
// }
//
// $(".left").click(function(){
//   if(!state){
//     state=true;
//     left();
//   }
// });
// $(".right").click(function(){
//   if(!state){
//     state=true;
//     right();
//   }
// });




});
