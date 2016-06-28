/*-----70%-----*/

function solve(arsg) {

    var x = +arsg [0];
    var y = +arsg [1];

    var circle = ((x - 1) * (x - 1) + (y - 1) * (y - 1) <= 1.5 * 1.5);
    var rectangle = ((x >= -1 && x <= 5) && (y <= 1 && y >= -1));

    if (circle && rectangle) {

        console.log('inside circle inside rectangle')

    } else if (!circle && rectangle) {

        console.log('inside circle inside rectangle')

    } else if (circle && !rectangle) {

        console.log('inside circle outside rectangle')
    }else{

        console.log('outside circle outside rectangle')
    }
}

/*-----------100%------*/
function InCircleOutRect(args) {
    var x = +args[0],
        y = +args[1];

    var isInCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 1.5 * 1.5;
    var isOutRectangle = !(x >= -1 && x <= 5 && y <= 1 && y >= -1);
    if (isInCircle && isOutRectangle) {
        console.log('inside circle outside rectangle');
    } else if (isInCircle && !isOutRectangle) {
        console.log('inside circle inside rectangle');
    } else if (!isInCircle && isOutRectangle) {
        console.log('outside circle outside rectangle');
    } else {
        console.log('outside circle inside rectangle');
    }
}


/* Point, Circle, Rectangle
 Description

 Implement a javascript function that accepts an array with a pair of coordinates x and y and uses an expression to checks for given point (x, y) if it is within the circle K({1, 1}, 1.5) and out of the rectangle R(top=1, left=-1, width=6, height=2).
 Input

 You will receive the pair of coordinates as two elements of an array - the first element will be x, and the second - y.

 Output

 Print inside circle if the point is inside the circle and outside circle if it's outside. Then print a single whitespace followed by inside rectangle if the point is inside the rectangle and outside rectangle otherwise. See the sample tests for a visual description.
 You can use console.log to print the results or you can use return to return the answer. Both are correct.

 Constraints

 The coordinates x and y will always be valid floating-point numbers in the range [-1000, 1000].
 Time limit: 0.1s
 Memory limit: 16MB

 Sample tests
 Input 	Output
 2.5
 2 	outside circle outside rectangle
 0
 1 	inside circle inside rectangle
 2.5
 1 	inside circle inside rectangle
 1
 2 	inside circle outside rectangle
