//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

function reverseList(list) {
    return list.reverse();
}

console.log(reverseList([1,2,3]));


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function func(a, b){
    let alpha = a.map(num => num**2);
    alpha = alpha.reduce((acc, c) => acc + c);
    let beta = b.map(num => num**3);
    beta = beta.reduce((acc, c) => acc + c);
    return (alpha > beta);
}

console.log(func([2,4,6], [1,2,3]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function check(nums){
    return nums.filter((element, index) => element % index === 0)
}

console.log(check([0,1,2,5,6]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfArrayValues(array){
    return array.reduce((acc, c) => acc + Number(c), 0)
}

console.log(sumOfArrayValues(['5',3,'2',1]))
