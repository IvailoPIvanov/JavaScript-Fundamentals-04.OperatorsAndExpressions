
function solve(args) {

    var args = parseInt(args);
    var check = 1 << 3;

    if ((args & check)>> 3 === 1){
        console.log('1');
    }
    else{
        console.log('0');
    }


}