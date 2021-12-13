  var rectarea = require('./areafunc');

  function Areadisplay (l,b) {
      console.log('Enter length: '+l+'\nEnter breadth:'+b);
      if (l<0 || b<0) {
          console.log('Length and Breath should not be less than zero.');
          
      } else {
        
          console.log(rectarea.area(l,b));
          
      }

  }
      Areadisplay (2,5);
      Areadisplay (-7,9);  
    
    //   LEARNINGS HERE
    // 1) All the linked files including package.json should be in same folder/sub folder
    // 2) You need not assign x=l and y=b
    // 3) As rectarea is not a function, dont write rectarea(l,b). You should write rectarea.area(l,b) as area under rectarea variable is the function with x,y parameters.
    // 4) index naming folder
