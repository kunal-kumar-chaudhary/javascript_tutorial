//-----------------------------------------------------------------------------------------------
// prototyping
//-----------------------------------------------------------------------------------------------

const kunal = {
    name: 'kunal',
    age: 24,
    greet: function() {
        console.log('hello');
    }
}

kunal.greet(); // way to access the function inside the object

const kunal2 = {
    salary: 100000
    // greet: function() { console.log('hello'); } // we can also define the greet function here as well
}

// now if we want that we can object the function of kunal object inside the kunal2 object as well
// we use prototyping for that

kunal2.__proto__ = kunal; // we can do this for any number of objects

// now we can use the greet function inside the kunal2 object as well
kunal2.greet(); // in the case always the greet function is executed which is defined inside of this object,
// in absence of which, the greet function of prototype obejct will be executed

//-----------------------------------------------------------------------------------------------
// Classes inside JavaScript
//-----------------------------------------------------------------------------------------------

class ToyotaCar{
    constructor(){
        this.brand = 'Toyota';
    }
    start(){
        console.log('starting the car');
    }
    stop(){
        console.log('stopping the car');
    }
    setBrand(brand){
        this.brand = brand;
    }
} 

// all the functions will come and sit inside the prototype object of the class
let myObj = new ToyotaCar();
myObj.start();

// inheritance

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();
console.log(obj.hello())

// if child and parent have the same method, then the child's method will be used
// this is called mathod overriding

class Person{
    constructor(){
        this.species = "human";
    }
    sleep()
    {
        console.log("sleep");
    }
    eat(){
        console.log("eat");
    }
    work()
    {
        console.log("work");
    }
}

class Engineer extends Person{
    constructor(branch){
        super(); // this will invoke the constructor of the parent class 
        this.branch = "CSE";

    }
    work(){
        super.eat(); // this will invoke the eat function of the parent class
        console.log("work as engineer");
    }
}

class Doctor extends Person{
    
    work(){
        console.log("work as doctor");
    }
}

let engineer = new Engineer();
let doctor = new Doctor();
console.log(engineer.work());
console.log(doctor.work());

// sometimes we want to call the parent's constructor from the child's class
// this can be done using super keyword

