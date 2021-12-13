var rectarea = require('./module')

function Areadisplay(l,b) {
    console.log('Enter length l= '+l+ '\nEnter breadth b= '+b);
    rectarea= (l,b,(err,area) => {
        if (err) {
            console.log('Error:',err.message);
        } else {
            console.log('The area of rectangle of dimensions l= '+l+' and b= '+b+' is '+ module.area());
        }

    }, console.log('This statement, though at the end of the code, will be executed before the area result display, cuz of timeout.(Asynchronous nature of javascript)'));
};

Areadisplay(2,5);
Areadisplay(-3,5);