// var colors = ["red", "green", "blue"];
// var box = document.querySelector('.box');

// function changeBG(color){
//   box.style.background = color;
// }

// for (var i = 0; i < colors.length; i++) {
//   setTimeout(function(){
//     console.log(`i:${i}`);
//     changeBG( colors[i] );
//   }, 1000*i)
// }

var colors = ["red", "green", "blue"];
var box = document.querySelector('.box');

function changeBG(color){
  box.style.background = color;
}

for (let i = 0; i < colors.length; i++) {
  setTimeout(function(){
    console.log(`i:${i}`);
    changeBG( colors[i] );
  }, 1000*(i+1))
 
}