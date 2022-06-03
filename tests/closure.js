// function outer(){
//     let x= 5
//     function inner(){
//         console.log(x);
//     }
//     return inner;

// }

// let f = outer();
// f()

//==================================

// var cats = [];

// for (var i = 0; i < 3; i++) {
//   cats[i] = function(){
//     console.log(`Cat ${i} is ready!`);
//   }
// }

// cats[0](); //Cat 3 is ready!
// cats[1](); //Cat 3 is ready!
// cats[2](); //Cat 3 is ready!

var cats = [];

function catMaker(i){
  return function(){
    console.log(`Cat ${i} is ready!`);
  }
}

for (var i = 0; i < 3; i++) {
  cats[i] = catMaker(i);
}

cats[0](); 
cats[1](); 
cats[2](); 