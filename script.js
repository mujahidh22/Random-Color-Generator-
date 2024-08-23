let startbtn = document.getElementById("startbtn");
let stopbtn = document.getElementById("stopbtn");
let display = document.querySelector(".displaybox");


// generate random hex code 
const randomColor = function(){
    let hexCode= `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;  //padEnd is used taki kamse km 6 length rhe agr usse km ho to 0 add krde
    console.log(hexCode)
    return hexCode;
}

//add events to buttons
let intervalId;
startbtn.addEventListener("click",()=>{
    intervalId= setInterval(()=>{
        display.style.backgroundColor=randomColor();
    },1000);
})

stopbtn.addEventListener("click",()=>{
    clearInterval(intervalId)
})
