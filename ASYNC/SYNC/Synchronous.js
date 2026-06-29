//Synchronous
//Ex-IAS

//Asyhnchronous
//Ex-IAS

function Form(){
    console.log("Fill the examination form");  
}

function Exam(){
    setTimeout(()=>{
        console.log("Give the UPSC examination");
    },5000)
}

function Interview(){
    setTimeout(()=>{
        console.log("Attend the IAS interview");
    },4000)
}

function Selection(){
   setTimeout(()=>{
        console.log("You are selected as an IAS Officer");
    },2000)
}

function Call(){
    Form()
    Exam()
    Interview()
    Selection()
}
Call()