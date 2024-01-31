array = [1, 2, 3, 4, 5, 6, 7, "for", "bar", true, 2.51];

obj = {
  first_name: "For",
  last_name: "Bar",
  age: 23,
  status: true,
}; /*
/*
console.log(array[5]);
console.log(obj[first_name]);
console.log(obj.last_name);

for (let i = 0; i < 1000; i++) {
  console.log(i);
}
 */

/* for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
} */
/* 
for (var i of array) {
  console.log(i);
}
 */

/* for (const key of Object.keys(obj)) {
  console.log(key + ":" + obj[key]);
}
 */
/*
for (var key in obj) {
  console.log(key + ":" + obj[key]);
} * / 

/* 
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
do {
  console.log(i);
} while (i < 10);
 */

//DIA 18 DE ENERO

/* q = 98090;
if (q > 90) {
  console.log("Si es mayor");
} else {
  console.log("No es mayor");
}

var animal = "Kiffy";

if ((animal = "Kitty")) {
  console.log("If is a pretty Kitty");
} else {
  console.log("Is not a pretty Kitty");
}

var cat = animal === "Kitty" ? "It is a pretty Kitty" : "Is not a pretty Kitty";

console.log(cat);

switch (animal) {
  case "Kitty":
    console.log("Case 1");
    break;

  case "Puppy":
    console.log("Case Two");
  default:
    console.log("Other Case");
    break;
}
function foo() {
  var b = "world";
  function bar() {
    console.log(b); // => 'world'
  }
  console.log(b); // reference error
}

foo(); */
/* 
function prism(l) {
  return function (equis) {
    return function (h) {
      return l * equis * h;
    };
  };
}

console.log(prism(1)(2)(3));
 */

/* const foo = (function (msg) {
  console.log("I am the LIFE" + msg);

  return msg;
})("ddsd");

console.log(foo);
 */
var sumTwoNumbers = function sum(a, b) {
  return a + b;
};
sum(1, 3);

/*array = [1,2,3,4,5, "foo","bar", true, 2.51]

obj = {
    first_name: "foo",
    last_name: "bar",
    age: 23,
    status: true
}

console.log[array[5]]
console.log[obj["first_name"]]
console.log[obj.last_name]

for (var i = 0; i < 1000; i++ ) {
    console.log[i]
} */

/*
for (let index = 0; index < array.lenght; index++ ) {
    console.log[i]
} */

/*
for (var i of array){
    console.log[i]
} */

/*

for (var key of Object.keys(obj)){
    console.log(key + " : " + obj[key])
} 
*/
/*
for (var key in obj){
    console.log[key + " : " + obj[key]]
} */

/*
var i = 0
while (i < 10) {
    console.log(i)
    i++
}

do  {
    console.log('----' + i)
    i++
} while (i < 10)

*/

/*
var x =222
if (x > 90){
    console.log("Si es mayor")
}
else{
    console.log("No es mayor")
}

var animal = 'Kitty'

if (animal === "Kitty") {
    console.log("it is a kitty")
} else {
    comsole.log("It's not a pretty kitty")
}

var cat = (animal === 'Kitty') ? "It is a pretty kitty" : "It's not a pretty kitty"

switch (animal) {
    case "Kitty" :
        console.log("Case One")
        break;
    case "Puppy":
        console.log("Case Two")
        break;
    default:
        console.log("Other wise")
        break;
}
*/

/*
function prism(l){
    return function(w){
        return function(h){
            return l * w * h
        }
    }
}

console.log(prism(9)(2)(3))
*/
/*
var message =  "hello world"
const foo = (function(msg){
    console.log("I am the ITFE "+ msg)
    return msg
}(message));

console.log(foo)
*/

/*
function prism(l,w,h){
    return l*w*h
}

console.log(prism(25,45,56))

var sumToNumbers = function sum(a,b){
    return a+b
}

sum(1,2)
*/

/*
var say = function say(times) {
    if (times > 6) {
        console.log("Hello")
        say(times-1)
    }
}

var saysay = say
say = "Oops!"
saysay(100)
*/

function personSay(person, ...msg) {
  msg.forEach((arg) => {
    console.log(person + " say: " + arg);
  });
}

personSay("foo", "yea", "xd");

/*
Modelado UML
Maquetacion
SRC
*/
