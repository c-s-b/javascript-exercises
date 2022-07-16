const reverseString = function(string) {
    const stringArray = string.split("");
    reversedArray = [];
    let newString = "";

    for ( let i = (stringArray.length - 1 ); i >= 0; i-- ) {
        reversedArray.push(stringArray[i]);
        
    }
    newString = reversedArray.join("");
    return newString;
    
};

// Do not edit below this line
module.exports = reverseString;
