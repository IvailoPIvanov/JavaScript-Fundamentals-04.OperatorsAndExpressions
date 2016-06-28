
function solve(args) {

    var numberA = +args[0];
    var numberB = +args[1];

    var distance  =  Math.sqrt(numberA * numberA + numberB  * numberB ).toFixed(2);

    if (distance <= 2)
    {
        console.log('yes ' + distance);
    }
    else
    {
        console.log('no ' + distance);
    }


}