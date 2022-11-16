const reverseString = function(string) {
    let reversed = "";
    for (let i = 0; i < string.length; i++){
        reversed = reversed.concat(string.slice(string.length-i-1,string.length-i));
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
