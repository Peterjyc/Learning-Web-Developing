const removeFromArray = function(array, ...numbers) {
    let resultArray = array;
    temp = 0;
    for (const num of numbers){
        resultArray = resultArray.filter(number => number !== num);
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
