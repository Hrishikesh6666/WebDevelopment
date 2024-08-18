/*                                                     FUNCTION IN JAVASCRIPT                                            */
/* Syntax:
        Function functionName(Parameters){
        //code to be executed
        }
 */


function Greet(name){
    console.log("Hello " + name + " Welcome to the Website");
}
Greet("Hrishikesh");


                                         /*Function Expression */

/*Syntax:
          const FunctionName = function(Parameters){
          //code to be executed
          
          }
 */

const add = function(a,b){
    return a+b;
}
console.log(add(6,4))

/*                                                        ARROW FUNCTION                                                   */
/*Syntax:
           const functionName = (Parameters) => {
            //code to be executed  } ;*/


const Multiply = (x,y) => x*y;
console.log(Multiply(6,6));

const Square = (x) => x**2;
console.log(Square (8));



//                                     CHAPTER 4 : STRINGS

/*NOTE : Use Quotes (``) to simplifay the code  */

let real_name = "Hrishikesh"
let Oner = "HS Limited"
console.log(`${real_name} is the Oner of ${Oner} and he is the best Business man in the INDIA`)

//  OTHER
// let Name = "Hrishikesh"
// Name.length
// Name.toLocaleUpperCase
// Name.toLocaleLowerCase
// Name.slice(0,5)
// Name.replace("Hrishikesh","MAHADAVE")



