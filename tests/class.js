// class Person{
//     name="Anonymous";
//     age;
  
//     constructor(name, age){
//       this.name = name;
//       this.age = age;
//     }
  
//     greet(){
//       console.log(`I'm ${this.name}, ${this.age} years old.`);
//     }
//   }
  
//   let p1 = new Person('Pesho', 23);
//   let p2 = new Person();
//   p1.greet();
//   p2.greet();

//=======================================================================


// class Person{
//     constructor(name){
//       this._name = name || "Anonymous";
//     }
//     get name(){
//       console.log(`getting name at: ${new Date()}`);
//       return this._name;
//     }
  
//     set name(name){
//       console.log(`setting new name at: ${new Date()}`);
//       this._name = name;
//     }
  
//     greet(){
//       console.log(`I'm ${this.name}`); // here we use the getter
//     }
//   }
  
//   let p1 = new Person('Pesho', 23);
//   p1.name = 'Peter'; // here we use the setter
//   p1.greet();


//===========================================


class Person{
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
  
    greet(){
      console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
  }
  
  class Developer extends Person{
    constructor(name, age, skills){
      // call the parent constructor:
      super(name, age)
      this.skills = skills
    }
  
    greet(){
      // call the parent greet() method
      super.greet();
      console.log(`My skills are: ${this.skills.join()}`);
    }
  }
  
  let dev1 = new Developer('Pesho', 23, ['JS','React','Vue'])
  dev1.greet()