const sumAll = function(start, end) {
    let temp = 0;
    let low = Math.min(start, end)
    let high = Math.max(start,end)
    if (low < 0 || isNaN(start) || isNaN(end)){
        return 'ERROR';
    }
    if (typeof start === "number" && typeof end === "number"){
        for (let i = low; i <= high; i++){
            temp += i;
        }
        return temp;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
