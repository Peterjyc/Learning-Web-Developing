let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }


let temp = 0;
for (let name in salaries){
    temp += salaries[name];
    console.log(temp);
}
