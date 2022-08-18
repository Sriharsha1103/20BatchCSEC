/* Arrow Function */
const myFunc = function (a){
    return a+1;
}
console.log(myFunc(5));

const B = (a) => {
    return a+1;
}
console.log(B(5));

const C = c => c+1;
console.log(C(5));

/* variable identifier = (arg1, arg2,..) => {
    body
} */

/* Callback Function */
/* function startSpinner(){
    console.log("Loading started");
}

function stopSpinner(){
    console.log("Loading Stopped");
}

function getData(){
    setTimeout(()=>{
        console.log("Downloading");
        stopSpinner();
    },3000);
}

startSpinner();
getData(); */

/* call, bind, apply */

const print = function (){
    console.log(this.name, this.phoneNumber);
}
const person = {
    name: 'Harsha',
    phoneNumber: 9908055084,

};

const person1 = {
    name: 'Yotesh',
    phoneNumber: 456789213,
}

print.call(person);