const palindromes = function (string) {
    let temp = string.replace(/[^a-zA-Z]/g, "");
    let reversed = temp.split("").reverse().join("");
    if (temp.toLowerCase() === reversed.toLowerCase()){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
