"use strict";
// Classes in TypeScript
class Car {
    // model:string;
    // type:string;
    // year:number;
    // color:string;
    // on:boolean;
    // speed:number;
    // constructor(){
    //     this.model = 'Renault';
    //     this.type = 'Clio';
    //     this.year = 2000;
    //     this.color = 'Rojo';
    //     this.on = false;
    //     this.speed = 0;
    // }
    // public: it is accesible inside the class and outside them
    // protected: you can acces only from the class of children classes
    // private: only from this class
    constructor(model, type, year, color, on = false, speed = 0) {
        this.model = model;
        this.type = type;
        this.year = year;
        this.color = color;
        this.on = on;
        this.speed = speed;
        this.on = false;
        this.speed;
    }
    // Methods
    start() {
        this.on = true;
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
}
let my_car = new Car('Renault', 'Clio', 2000, 'Blue');
console.log(my_car.model, my_car.year); //Output object with all properties
console.log(my_car.start()); //Output true
my_car.setColor = 'Violet';
console.log(my_car.getColor);
