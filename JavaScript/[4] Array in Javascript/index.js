//   JOIN()

let num = [1,2,3,4,5,6]
let n=num.join("-")
console.log(n)

//   TO-STRING()

let STRING = num.toString()
console.log(STRING)

//   POP()

let fruits = ['Apple', 'Banana', 'Orange'];
let lastFruit = fruits.pop();
console.log(fruits);       // Output: ['Apple', 'Banana']
console.log(lastFruit);    // Output: 'Orange'

//  PUSH()

let last= [];

last.push(20);
last.push(30);
last.push(40);

let PopElement = last.pop()
console.log(PopElement)
console.log(last)

PopElement = last.pop()
console.log(PopElement)
console.log(last)

//   DELETE()

let d = [7,8,9,10,11,12]
delete d[4]
console.log(d)

//   CONCAT()

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

let concat=a1.concat(a2,a3)
console.log(concat)


// LOOPING THROUGH ARRAYS