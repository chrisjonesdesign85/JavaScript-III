/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Implicit binding - look at the left of the dot at call time.
 *
 *  2. Explicit binding - telling a function what the context ot .this is going to be using .call .apply and .bind (.call .apply .bind allow us to explicitly state what the .this keyword is going to be in any given function. .call and .apply behave the exact same way they will immediately invoke the function but with .call you pass in arguments one by one, and with .apply you pass in as an array. .bind is the exact same thing as . call but except for immediately invoking the function its going to return a brand new function that you can invoke later.)
 *
 * 3. New binding - when you have a function invoked with the 'new' keyword the .this keyword is bound to the new object
being constructed.
*
 * 4. Window binding - if none of these apply then the .this keyword is going to default to the window object unless you are
in strict mode then it's just going to be undefined.
 *
 *
 *
 * 
 * write out a code example of each explanation above */

// Principle 1
// code example for Window Binding
console.log("Window binding Starts Here")
var sayAge = function () {
    console.log(this.age);
};

var person = {
    age: 33
};

sayAge()
window.age = 33;
sayAge();




// Principle 2

// code example for Implicit Binding
//Left of the Dot at Call Time
console.log("Implicit Binding Starts Here")
const me = {
    name: 'Chris',
    age: 33,
    sayName: function () {
        console.log('My name is ' + this.name)
    }
}
me.sayName() // My name is Chris

const sayNameMixin = function (obj) {
    obj.sayName = function () {
        console.log(this.name);
    }
}

var i = {
    name: 'Chris',
    age: 25
}
var you = {
    name: 'Dave',
    age: 30
}
sayNameMixin(i)
sayNameMixin(you)

i.sayName();
you.sayName();

const Person = function (name, age) {
    return {
        name: name,
        age: age,
        sayName: function () {
            console.log(this.name)
        },
        mother: {
            name: 'Angie',
            sayName: function () {
                console.log(this.name);
            }
        }
    };
};

var chris = Person('Chris', 33)
chris.sayName()
chris.mother.sayName()



// Principle 3
// code example for New Binding

console.log("New Binding Starts Here")
//When a function is invoked with the new keyword, the .this 
//keyword inside that function is bound to the new object being constructed. 
var Animal = function (color, name, type) {
    //this = {}
    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
console.log(zebra)






// Principle 4
// code example for Explicit Binding

//call, apply, bind
console.log("Explicit Binding Starts Here")
const sayName2 = function (lang1, lang2, lang3) {
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
}

const chris2 = {
    name: 'Chris',
    age: 33
}

var languages = ['JS', 'HTML', 'CSS'];

sayName2.call(chris, languages[0], languages[1], languages[2]) //.call is used to get each item one by one
sayName2.apply(chris, languages) // .apply is like call but instead of taking each language 1 by 1 it takes in an array of arguments and pars them out for us
var newFN = sayName2.bind(chris, languages[0], languages[1], languages[2]) // .bind creates a new function instead of invoking the original function
console.log('Blank Line')
newFN();

//.call .apply .bind allow us to explicitly state what the .this keyword is going to be in any given function. .call and .apply behave the exact same way they will immediately invoke the function but with .call you pass in arguments one by one, and with .apply you pass in as an array. .bind is the exact same thing as . call but except for immediately invoking the function its going to return a brand new function that you can invoke later.