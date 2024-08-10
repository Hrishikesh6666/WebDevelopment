    /*                                            FOR LOOP

      for( statement 1,statement 2,statement 3 ){
              //code to be executed  
    }  */

let a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a + i);
}


       /*                                  FOR IN LOOP (For an object)


       for(Key in Object){
        //code to be executed
       }
      */


let obj = {
    Name: "Hrishikesh",
    Role: "CEO",
    company: "HS Limited",
}

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}



        /*                                 FOR OF LOOP(For an Array)


        for(Variables of iterable ){
        //code to be executed
        }
        NOTE : Iterable data structure like Array,string ,etc.
        */

for (const c of "Hrishikesh") {
    console.log(c)
    
}

/*                                            WHILE LOOP (IMP)

         While (condition){
             //code to be executed   
         }
          
 NOTE : If the condition never become false , the loop will never end and that might crash the runtime

*/

let i = 0;
while (i<24) {
    console.log(i)
    i++   
}

/*                                           DO - WHILE LOOP
           do{
            //code to be executed => Executed at lest once
           }
            while(condition)

 */

let c = 0;
do {
    console.log(c)
    c++
    
} while (c<6);
