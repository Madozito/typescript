"use strict";
// Classes in TypeScript
class Car {
    constructor(model, type, year, color, on = false, speed = 0) {
        this.model = model;
        this.type = type;
        this.year = year;
        this.color = color;
        this.on = on;
        this.speed = speed;
        this.on = false;
        this.speed;
        this.prueba = 'www.google.com';
    }
    // Methods
    start() {
        this.on = true;
        console.log('clase padre');
    }
    stop() {
        this.on = false;
    }
    showCar() {
        return this.model + this.type;
    }
    showOther() {
        return this.year + this.color;
    }
    showAll() {
        return this.showCar + ' ' + this.showOther;
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    static greet() {
        return 'Hey, whats up';
    }
}
// Inheritance
class Van extends Car {
    constructor(model, type, year, color) {
        super(model, type, year, color); // I have to indicate super for the children class that im extending from
        this.model = model;
        this.type = type;
        this.year = year;
        this.color = color;
    }
    startChildren() {
        console.log('clase hija');
        this.speed = 200;
        //this.start = true;
    }
    show() {
        super.start();
        return this.on;
        console.log(this);
    }
}
let my_van = new Van('Jeep', 'Something', 1990, 'Black');
console.log(my_van);
let my_car = new Car('Renault', 'Clio', 2000, 'Blue');
// Abstract classes  other classes can inherit things, but you cannot use it or instance it, only extending to other classes
console.log(my_car.model, my_car.year); //Output object with all properties
console.log(my_car.start()); //Output true
my_car.setColor = 'Violet';
console.log(my_car.getColor);
console.log(Car.greet());
