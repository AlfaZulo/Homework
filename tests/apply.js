function update(name, age){
    this.name = name;
    this.age = age;
}

let maria = {name: "Maria", age:18};
console.log("maria before", maria);

update.apply(maria, ["Maria Ivanova", 23]);
console.log("maria after", maria);