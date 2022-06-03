const maria = {name: "Maria", age:18};
function update(name, age){
    this.name = name;
    this.age = age;
}

console.log("maria before", maria);
var updateMaria = update.bind(maria,"Maria Ivanova", 23);

updateMaria();
console.log("maria after", maria);