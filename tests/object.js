// let carFactory = function(model, year){
//     var obj = {};
  
//     obj.model = model;
//     obj.year = year;
  
//     return obj;
//   }
  

//   let car1 = carFactory('FORD Mustang', 1998);
//   console.log(car1);


var objFactory = function(name){
    var obj = {};
  
    obj.name = name;
    obj.sayName = function(){
      console.log(`I'm object: ${obj.name}`)
    };
  
    return obj;
  }
  
  var obj1 = objFactory('Object 1');
  var obj2 = objFactory('Object 2');
  obj1.sayName();
  obj2.sayName();