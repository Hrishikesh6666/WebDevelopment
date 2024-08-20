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


//LOOPING ,THROUGH, ARRAYS


// For each loop
const a =[1,2,3]
a.forEach((value,index,Array) => {
    console.log(value,index,Array)
    
})
//for of loop 
arr = [1,2,3,4,5]
for (const element of arr) {
    console.log(element)   
}
console.log(arr.join(" and "))
arr.pop()
console.log(arr)
arr.push(10)
console.log(arr)
arr.reverse()
console.log(arr)

// For in Loop
let object = [10,45,66,78,100]
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

// Using [MAP] Operation map()

let shiv = [1,2,9,4,5]
let newArr=[]
for (let index = 0; index < shiv.length; index++) {
    const element = shiv[index];
    newArr.push(element**2) 
}
console.log(newArr)
       //using MAP()

let Ram = shiv.map(e => e ** 3);
console.log(Ram)

