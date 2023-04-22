"use strict";
// function proyected(activate: boolean): any {
//   if (activate) {
//     return showMessage();
//   } else{
//     return null;
//   }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function proyected(activate) {
    return (constructor) => {
        constructor.prototype.doProyection = function () {
            if (activate) {
                console.log("Proyecting movie:", this.title);
            }
            else {
                console.log("Cinema closed");
            }
        };
    };
}
function showMessage() {
    console.log("Showing the movie");
}
let Movie = class Movie {
    constructor(title, genre, proyected) {
        this.title = title;
        this.genre = genre;
        this.proyected = proyected;
    }
};
Movie = __decorate([
    proyected(true)
    // To make sure decorators work you need to go to your tsconfig.json and activate: "experimentalDecoratos = true"
    // And "emitDecoratorMetadata": true,
    ,
    __metadata("design:paramtypes", [String, String, Boolean])
], Movie);
let batman = new Movie("Batman Begins", "Accion", false);
batman.doProyection();
