/* ES6 ECMA - European Computer Manufacturers Association 
Javascript: 
    responsiveness
    Dynamic HTML

browser rendering Engine (Google Chrome V8 Engine)
node

Vanilla js

react js
vue js
next js
1. Running Hello WOrld
2. Constructs 
   a. Variables, datatypes

   number, string, boolean, null, undefined, object
   var, let, const

   keywords <identifier> = datatype
*/
var age = 15;
var name = "Raju";
var isMale = true;
var address = {
    streetNo: 4,
    locality: 'Guntur',
};

var phone1;
var phone2 = null;
console.log(name,age,isMale,address,phone1,phone2);


    const message = "Hi, Hello";
    var count = 4;
    if(count > 3){
        let message = "Welcome";
        console.log(message,count);
    }
    
    console.log(message,count);

/* Operators:
    Arithmetic, +, -, / ,*, %, ++, --
    Assignment, =, +=, -+, /=, *=, %=
    conditional, ? : 
    relational, ===, ==, !==, !=, >=, <=, >, <
    typeof, 
    logical &&,||, !
    power **
*/

let var1 = true;
console.log(typeof var1)

let var2 = 15;
let var3 = "15";
console.log(var2 != var3)
console.log(var2 !== var3)

//Control Statements and functions
/* 
if, if-else, else-if, switch, while, for, do-while, return, break,continue
*/
//Print numbers from 1 to 10
/* Anonymous Funtion in function expression */
let myPrint = function (n = 10){
    for(let i=1; i<=n; i++){
            console.log(i);
    }
}
//let myPrint = print;
myPrint(30);
console.log(myPrint);
//print(5);
//Prime or not




/* IIFE - Immediate Invocation Function Expression */

/* (function (){}()) */
(function (){
    console.log("Hi");
}());

console.log(function (n = 8){
    let flag = 1;
    for(let i = 2; i< n; i++){
        if(n%i === 0)
            flag = 0;
    }
    if(flag)
    console.log("Prime number");
    else
    console.log("it is not prime number");
    return flag;
}());

/* const result = isPrime(14);
if(result)
    console.log("Prime number");
else
    console.log("it is not prime number"); */

let n = 10;
let flag = 1;
for(let i = 2; i< n; i++){
    if(n%i === 0)
        flag = 0;
}
if(flag)
    console.log("Prime number");
else
    console.log("it is not prime number");

/* HOF */

function print(){
    console.log("Message");
}
function print1(){
    console.log("MyMessage");
}

function display(myFunc){
    myFunc();
}

display(print);
display(print1);

/* Callback Function */
setTimeout(function (){
    console.log("Hi");
}, 3000);
/* Arrow Function */
const A = () => {
    console.log("Function A");
}

const myFib = (n) => {


}
myFib(24);

/* call, bind, apply */

const Person = {
    name: 'Harsha',
    phoneNumber: 9908055084,

    print : function (){
        console.log(name, phoneNumber);
    }
};

console.log(Person.name);


/*
    const A = function (){
      return  console.log("Function A");
    }

 */



/*Callback function 
    function A(function (){

    }){

    }
*/

setInterval(function (){},3000);
    /* Types of functions
    1. Normal Function
    2. Function Expression
    3. Anonymous Function/ function expression
    4. IIFE
    5. Higher Order Function
    6. Arrow Function
    7.Callback Function
    */