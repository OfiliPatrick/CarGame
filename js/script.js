// script.js 

$(function() {
  
   
   $("button").click(function() {
  
         $('#box').fadeOut(1000);         
  
   });

    //$('h2,h3,h4').css('border', 'solid 1px red'); 
    
   // $('div#container').css('border', 'solid 1px red');
    
   // $('p.lead').css('border','solid 1px red');
    
    
 //   $('li:first').css('border', 'solid 1px red');
    
    // $('p:even').css('border', 'solid 1px red')

     // $('div em').css('border', 'solid 1px red')
    
     // $('div > p').css('border', 'solid 1px red')

// etc
    
    $(':contains("Brad")').css('border', 'solid 1px red');



/* ----------------

jQUERY EVENT METHODS

---------------*/

    $('#box').click(function() {
    
    alert('why did you click the box ehn?! oh my God!!...you just destroyed the world');
});

$("input").blur(function() {
                
          if( $(this).val() == "")  {
              $(this).css('border','solid 1px red');
              $('#box').text('Forgot to add text?');
      }
});
    
    /* ----------
   jQUERY CHAINING
   
   ----------- */
     
    $('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();
 
    
    /* ------------
    
    jQUERY HIDE/SHOW
    
    -------------- */
    
    
    // $('div.hidden').fadeIn();
    
    $('box1').click(function() {
        
    $(this).fadeTo( 1000, 0.25, function () {
            
           // animation is complete
        
        $(this).slideUp();
            
        });
        
    });
    
    $('div.hidden').slideDown();
    
    $('butoon').click(function() {
        $('#box1').slideToggle ();
        
    });
    



/* ---------------
   jQUERY ANIMATE
   -------------- */

    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function () {
            // animation is complete
        });
        
    });
    
    
       $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function () {
            // animation is complete
        });
        
    });
    
       $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function () {
            // animation is complete
        });
        
    });
    
       $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function () {
            // animation is complete
        });
        
    });
    
       /* ---------------
       jQUERY CSS
       --------------- */
    
$("#circle2").css({
    'background':'#8a8d22', 
    'display': 'inline-block', 
    'color': 'white', 
    'text-align': 'center', 
    'line-height': '140px',
    'height' : '140px', 
    'width': '140px'
 }).addClass('circleShape'); 

});
 

 












