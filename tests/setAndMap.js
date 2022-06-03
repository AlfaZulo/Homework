// const myArr = [1,2,3,4,4,3,2,1];  
// const mySet = new Set(myArr); // set премахва дублиращи стойности

// console.log(myArr);
// console.log(mySet);

// mySet.add(6);  добава число, стринг или араи към myArr
// console.log(mySet);

// mySet.delete(2);
// console.log(mySet); изтрива стойност от myArr

// mySet.clear();
// console.log(mySet); // изтрива ареи

// console.log(mySet.has(6));  // проверява дали има такава стойност в араи, връща boolen

// console.log(mySet.size); //връща размера на сета

    
//=============Map============

// const myMap = new Map([['name', 'Pesho'],['surname', 'Petrov']]);
// console.log(myMap);
//==============
// const a = {};
// const b = {};

// const myMap = new Map([[a,'a'],[b, 'b']]);
// console.log(myMap);


//================
 const a = {};
 const b = {};

// const myMap = new Map([[a,'a'],[b, 'b']]);
// myMap.set({}, 'c');                         // добавя стойност (стринг, число, араи)

// console.log(myMap);

// const myMap = new Map([[1, 1]]);
// myMap.delete(1);   //изтрива според определен ключ
// console.log(myMap);

const myMap = new Map([[1, 1]]);
myMap.delete(1);   //изтрива според определен ключ
console.log(myMap); 
console.log(myMap.has); // проверява 
console.log(myMap.size); // връща размерс