function playIt(e) {
  
    //DOM Selecting
          var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // fix key isn't asdfghjkl then return function
          if (!audio) { return; }
            // for 
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
            var keys = document.querySelectorAll(".key")
  
            function removeIt(e) {
                if(e.propertyName !== "transform"){ return; }
                    this.classList.remove('playing');
            }
            keys.forEach(function(x) {
                x.addEventListener('transitionend', removeIt)
            });
  
            }

        //  event for type a key
          document.addEventListener("keydown", playIt);
  
          var str = 'To be, or not to be, that is the question.';
          var count = 0;
          var pos = str.indexOf('be');
  
          while (pos !== -1) {
                count++;
                pos = str.indexOf('be', pos + 1);
                }
  
          function chunkArrayInGroups(arr, size) {
            // Break it up.
            var newArray = [];
              var one = arr.forEach(function(x) {
                return console.log(x);
              });
              return one;
          }
  
          chunkArrayInGroups(["a", "b", "c", "d"], 2);
  