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

