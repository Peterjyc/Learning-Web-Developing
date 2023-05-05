/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for (let i = 0; i < strs.length; i++){
        let word = strs[i]
        let sortedWord = strs[i].split('').sort().join('')
        if (map.has(sortedWord)){
            map.get(sortedWord).push(word)
        } else {
            map.set(sortedWord, [word])
        }
    }
    return (Array.from(map.values()))

};
