const findTheOldest = function(people) {
    let temp = 0;
    let age = 0;
    let oldestPerson = "";
    people.forEach(person => {

        const currentYear = new Date().getFullYear();
        if ('yearOfDeath' in person){
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = currentYear - person.yearOfBirth
        }
        if (age > temp){
            temp = age;
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
