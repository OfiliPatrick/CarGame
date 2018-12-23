 /* ------------------
  jQuery Car Game
  ---------------- */
    
    // Click the GO button
    $('#go').click(function() {
        
        
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            
            if( isComplete == false) {
                isComplete = true;
            } else {
                place = 'second';
            }
        }
        
        
        // get the width of the cars
        var carWidth = $('#car1').width();
        
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        // generate a random # between 1 and 5000
        
        var raceTime1 = Math.floor ( (Math.random() * 5000) + 1 );
    
      var raceTime2 = Math.floor ( (Math.random() * 5000) + 1 );
    
        // set a flag variable to FALSE by default
        var isComplete = false;
        
        //set a flag variable to FIRST by default
        var place= 'first';
        
        // animate car 1
        $('#car1').animate({
            
            // move the car width of the racetrack
            
            left: raceTrackWidth
    
            
        }, raceTime1, function() {
            
            // animation is complete
            
            //run a function
            checkIfComplete ();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text('Finished in '+ place + ' place and clocked in at '  + raceTime1 + ' milliseconds! ');
            
        });
        
   
      // animate car 2
        $('#car2').animate({
            
            // move the car width of the racetrack
            
            left: raceTrackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            //run a function
            checkIfComplete ();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text('Finished in '  +  place  +  ' place and clocked in at '  + raceTime2 + ' milliseconds!');
            
        });
    
    
    });

// reset the race

$('#reset').click(function() {
       $('.car').css('left','0');
       $('.raceInfo span').text('');
   });
    


