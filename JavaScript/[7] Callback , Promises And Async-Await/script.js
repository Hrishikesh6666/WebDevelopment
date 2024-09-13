  //                                       callback function


// function greet(name) {
//     console.log("Hello, " + name);
// }

// function processUserInput(callback) {
//     let name = prompt("Please enter your name.");
//     callback(name);
// }

// processUserInput(greet);


 //                                     Asynchronous Callback function


// console.log("Before SetTime Out");

// setTimeout(()=>{
//     console.log("This message is delay by 2 secounds ");
// },2000);
// console.log("After SetTime Out");

//                                       CALLBACK HELL

// function getData(dataId,getNaxtData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNaxtData){
//             getNaxtData();
//         }
//     },2000);
// }
// getData(1,()=>{console.log("Next data is loading.....")
//     getData(2,()=>{console.log("Next data is loading.....")
//         getData(3,()=>{console.log("Next data is loading.....")
//             getData(4);
//         })
//     })
// })

//                                          *  PROMISES *
//  Example 1 :-

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("The operation was successful!");
//     } else {
//         reject("The operation failed.");
//     }
// });

// myPromise
// .then((message)=>{
//     console.log("message");
// })
// .catch((Error)=>{
//     console.log("Error");
// })
// .finally(()=>{
//     console.log("Operationis completed,wether Success or not..")
// })

// Example 2:-

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        //resolve("Success");
        reject("error");
    });
};

let myPromise = getPromise();

myPromise.then((result) => {
    console.log("Promise is Fulfilled");
    console.log("Result:", result);  // Optionally log the result
}).catch((error) => {
    console.log("Promise was Rejected");
    console.log("Error:", error);
});
 //                                                 CHANING PROMISES