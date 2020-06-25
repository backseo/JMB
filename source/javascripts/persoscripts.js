// $(document).ready(function() {

//   $(".imgover").hover(
//     function(){ $(this).addClass('img-m-over') },
//     function(){ $(this).removeClass('img-m-over') }
//   );

//   $(".img").hover(
//     function(){ $(this).addClass('img-m-over') },
//     function(){ $(this).removeClass('img-m-over') }
//   );

// /* show hide autodesk sections*/
//     var cible = $('.a-wrapper-titles ul li');
//       cible.on('click', function(){
//       $(this).next('.a-container').toggleClass('hider');
//     });
//  });


/*navbar shrink */
$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    $('.navbar-name').css("height", 60);
    $('.navbar-name-brand img').css("height", 40)
  } else {
    $('.navbar-name').css("height", 90);
    $('.navbar-name-brand img').css("height", 50)
  }
});
