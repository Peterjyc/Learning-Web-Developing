let schedule = {};

function isEmpty(check){
    for (let key in check){
        return false;
    }
    return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
