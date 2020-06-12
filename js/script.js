$(document).ready(function(){
    $('.js-featurs').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
      });



      $('.js-btn-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js-plans').offset().top},1500);
        
      });

      $('.js-btn-start').click(function(){
        $('html,body').animate({scrollTop: $('.js-featurs').offset().top},1000);
        
      });

          
    /* Navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              },2000);  //eltime msh sha8al !! 
              return false;
            }
          }
        });
      });
      
      







/*

    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })

*/
});