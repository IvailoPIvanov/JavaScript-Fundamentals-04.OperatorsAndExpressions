function solve(args) {

    var b=+args[0];
    for (i = 0; i < 2; i++) {
        b = b / 10;
        b=parseInt(b);
    }

    if (b % 10 == 7) {
        console.log('true')
    }
    else {
        var remainder=b%10;
        console.log( 'false'+' '+remainder );
    }
}
