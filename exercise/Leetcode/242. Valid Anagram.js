/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let arrayS = s.split('')
    let arraySCount = {};
    let arrayT = t.split('')
    let arrayTCount = {};
    for (let i = 0; i < arrayS.length; i++){
        if(!arraySCount[arrayS[i]]){
            arraySCount[arrayS[i]] = 1
        } else arraySCount[arrayS[i]]++;
        if(!arrayTCount[arrayT[i]]){
            arrayTCount[arrayT[i]] = 1
        } else arrayTCount[arrayT[i]]++;
    }
    let result = 0;
    for (let i = 0; i < arrayS.length; i++){
        if (arraySCount[i] === arrayTCount[i] && arrayS.includes(arrayT[i]) && arrayT.includes(arrayS[i])){
            result++;
        }
    }
    return (result == arrayS.length);
};
