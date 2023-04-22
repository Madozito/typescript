"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Define a method decorator that takes a boolean argument "show"
function modifyMessage(show) {
    // Return a decorator function that will be applied to the method being decorated
    return function info(target, propertyKey, descriptor) {
        if (show) {
            console.log(target); // Log the target object (i.e. the class instance) to the console
            console.log(propertyKey); // Log the property key (i.e. the method name) to the console
            console.log(descriptor); // Log the descriptor object (which contains information about the method) to the console
        }
        else {
            // Replace the original method with a new method that just logs a message saying it's blocked
            descriptor.value = function () {
                console.log("Blocked method!");
            };
        }
    };
}
// Define a parameter decorator that logs information about a method parameter
function myProperty(target, propertyKey, parameterIndex) {
    console.log("This property is in the class " +
        target.constructor.name + // Get the name of the class from the constructor property of the target object
        " and the property's called: " +
        propertyKey + // Log the property key (i.e. the method name)
        " and the parameter index is: " +
        parameterIndex // Log the index of the parameter being decorated
    );
}
class Computer {
    constructor() {
        this.marca = "Asus";
    }
    // Decorate the "on" method with both "modifyMessage" and "myProperty" decorators
    on(message) {
        // Use the "myProperty" decorator to log information about the "message" parameter
        console.log("Turning on PC..");
        console.log(message);
    }
}
__decorate([
    modifyMessage(true) // Use the "modifyMessage" decorator with the "show" argument set to true
    ,
    __param(0, myProperty),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Computer.prototype, "on", null);
let pc = new Computer();
pc.on("You're in Juan's PC");
