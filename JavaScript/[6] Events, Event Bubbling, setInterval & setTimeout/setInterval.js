let timeleft = 0;
let intervalID = setInterval(countdown,2000);
function countdown(){
    if(timeleft<=0){
        clearInterval(intervalID);
        console.log("TIME UP !!");
    }else{
        console.log(timeleft+"Secound remaining");
    }
}