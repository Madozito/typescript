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
}
//let my_car: Car = new Car();
//console.log(typeof my_car); //Output object
//console.log(my_car.start()); //Output true
