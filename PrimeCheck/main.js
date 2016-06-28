/*---50%---*/
function solve(args) {

    var number = args[0];

    if (number < 1 || number >= 100){

        console.log('false')
    }
    else{
        console.log('true')
    }
}
/*---100%---*/

function isPrime(args) {
    if(args < 2) return false;
    for (var i = 2; i < args; i++) {
        if(args%i==0)
            return false;
    }
    return true;
}




/* Description

Implement a javascript function that accepts an array containing an integer N as string (which will always be less than 100 or equal) and uses an expression to check if given N is prime (i.e. it is divisible without remainder only to itself and 1).

Note: You should check if the number is positive.
