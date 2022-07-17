const sumAll = function(first , second) {
let sum = 0;

let checkNumbers = () => {
    if (typeof first === 'number' && typeof second === 'number' && first > 0 && second > 0){
    return true;
    } else {
        return false;
    }  
}

 if(checkNumbers()) {
    let start = Math.min( first , second );
    let end = Math.max (first , second);
    while (start <= end) {
        sum += start;
        start++;
    }
    return sum;
} else {
    return "ERROR"
}


};
console.log(sumAll(10,4))

// Do not edit below this line
module.exports = sumAll;
