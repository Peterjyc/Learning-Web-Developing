const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    let fibArray = [1];
    for (let i = 1; i <= num; i++){
        if (i === 1){
            fibArray.push(i);
        } else {
            let temp = fibArray[i-1]+fibArray[i-2];
            fibArray.push(temp);
        }

    }
    return fibArray[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
