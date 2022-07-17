const removeFromArray = function(array, ...values) {
    const newArray = [];
    outer:
    for(i = 0; i < array.length; i++) {

        for(j = 0; j < values.length; j++){
            if(array[i] === values[j]) {
                continue outer;
            }
        }

        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
