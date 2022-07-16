const repeatString = function(string, num) {

    let outputString = "";

    if(num >= 0){
        for( i = 0; i < num; i++ ) {outputString += string;}
    } else {
        outputString = "ERROR"
    }
    return outputString;


};

// Do not edit below this line
module.exports = repeatString;
