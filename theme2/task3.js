/* --------------------------- Person constructor --------------------------- */
function Person(name, age){
    // your code here ...
    this.name= name;
    this.age= age;
  }
  // Person greet method
  // your code here ...
  Person.prototype.greet= function(){
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I'm ${this.constructor.name}.`);
  }
  
  /* --------------------------- Manager constructor -------------------------- */
  function Manager(name, age, managed = []){
    // reuse Person constructor
    // your code here ...
    Person.apply(this, [name,age]);
    this.managed= managed;
  }
  // Manager objects should inherit all methods from Person:
  Manager.prototype= Object.create(Person.prototype);
  Manager.prototype.constructor= Manager;

  
  /* -------------------------- Developer constructor ------------------------- */
  function Developer(name, age, skillset){
    // reuse Person constructor
    // your code here ...
    Person.apply(this,[name,age]);
    this.skillset=skillset;
  }
  // Developer objects should inherit all methods from Person:
  Developer.prototype= Object.create(Person.prototype)
  Developer.prototype.constructor=Developer;

  /* ----------------------------- Create Objects ----------------------------- */
  // Developer instances
//   let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
//   let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
//   // Manager instances
//   let gates = new Manager('Bill Gates', 43, [maria, pesho]);


const person = new Person('Martina Ilieva', 34);
person.greet();

const manager = new Manager('Bill Gates', 43, ['Maria Popova', 'Petar Petrov']);
manager.greet();

const dev1 = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
dev1.greet();

const dev2 = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
dev2.greet();


/* --------- Overwrite the greet() method for Developer and Manager --------- */
Manager.prototype.greet = function() {
  console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old.
I manage ${this.managed.join(', ').replace(/,(\s+[^,]+)$/, " and$1")}.`);
};

Developer.prototype.greet = function() {
  console.log(`\nHi, I'm ${this.name} and I'm ${this.age} years old.
I know ${this.skillset.join(', ').replace(/,(\s+[^,]+)$/, " and$1")}.`);
};


  
  /* ----------------------------- Use the objects ---------------------------- */
//   maria.greet();
//   pesho.greet();
//   gates.greet();
dev1.greet();
dev2.greet();
manager.greet();