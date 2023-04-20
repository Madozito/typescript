"use strict";
// Interfaces in TypeScript
// Class FIFA that implements Videogame properties
class Fifa {
    constructor(title, category, age, duration, launched) {
        this.title = title;
        this.category = category;
        this.age = age;
        this.duration = duration;
        this.launched = launched;
    }
    show() {
        console.log(this.title, this.category, this.age);
    }
    update(consola) {
        console.log('Looking for updates...');
        return 'Updated';
    }
}
let fifa23 = new Fifa('fifa 23', 'Soccer', 25, 5, true);
console.log(fifa23.show());
// Interface Literal Object
let gta = {
    title: 'GTA 5',
    category: 'Action',
    age: 18,
    //duration: 200,
    //launched: true
    show() {
        console.log(this.title, this.category, this.age);
    },
    update(consola) {
        console.log('Looking for updates...');
        return 'Updated';
    },
};
console.log(gta);
