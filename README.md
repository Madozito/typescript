# <p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" style="display: block; margin: 0 auto; margin-bottom: 40px; margin-top: 40pxx" width="100" height="100" /> TypeScript Fundamentals</p>


<p align="center">
    TypeScript is a superset of JavaScript that adds static type checking, classes, and interfaces to the language. It can help catch errors early in the development process and make your code more readable and maintainable.
</p>

This repository is a collection of TypeScript examples that cover the fundamentals of the language. It is organized into ten parts:

## Table of Contents

1. [Installation Guide](#installation)
2. [Basic Types](#basic-types)
3. [Union Types](#union-types)
4. [Arrays](#arrays)
5. [Functions](#functions)
6. [Objects](#objects)
7. [Classes](#classes)
8. [Interfaces](#interfaces)
9. [Decorators](#decorators)
10. [Generic Functions](#generic-functions)

# 🚀 Installing TypeScript <a name="installation"></a>
To get started with TypeScript, you'll need to install it on your machine. Here's how to do it:
## 📋 Prerequisites
Before you can install TypeScript, you'll need to have <a href="https://nodejs.org/en">Node.js</a> installed on your machine.
## ⬇️ Installation
Once you have Node.js installed, you can use npm to install TypeScript. Open your terminal and run the following command:
```typescript
npm install -g typescript
```
This will install TypeScript `globally` on your machine. If you don't want to install it globally, you can skip the `-g` flag and TypeScript will be installed locally in your current directory.
## 🔍 Version Verification
To verify that TypeScript has been installed correctly, you can run the following command:
```typescript
tsc --version
```
## 👀 Watching for Errors
To see errors in your TypeScript code, you can use the `TypeScript compiler's watch mode`. To do this, navigate to your project directory in the terminal and run the following command:
```typescript
tsc -w
```
This will start the TypeScript compiler in watch mode, which will automatically recompile your TypeScript files whenever you make changes. If there are any errors in your code, they will be displayed in the terminal.

## 📁 Directory Structure

To get started with TypeScript, you'll need to create two directories in your project: `src` and `scripts`.

The `src` directory will contain all of your TypeScript source files, and the `scripts` directory will contain the compiled JavaScript files.

To achieve this, you can uncomment these lines in your tsconfig.json:
```typescript
"rootDir": "./src" /* Specify the root folder within your source files. */,
"outDir": "./scripts" /* Specify an output folder for all emitted files. */,
```


# :arrow_forward:  Basic Types <a name="basic-types"></a>

In this section, we cover the basic types that TypeScript offers:

```typescript
 // string data type
 
 let text:string = "Hello";
 
 // number data type
 
 let numb:number = 10;
 
 // boolean data type, it can be true or false
 
 let trueValue:boolean = true;
 let falseValue:boolean = false;
 
 // wildcard data type: any
 
 let wildcard:any = "whatever";
 
 // unknown data type
 
 let unknw:unknown = "I am unknown"
```

# :arrow_forward: Union Types <a name="union-types"></a>

In this section, we cover how to use union types in TypeScript:

```typescript
// You can make a variable either a string or a number using the |

let contact:string | number = "user@gmail.com"
contact = 65453443;

// Doing this you are able to assign other values later on just like in this example
```
# :arrow_forward: Arrays <a name="arrays"></a>

In this section, we cover how to work with arrays in TypeScript:

```typescript
// To create an array of strings you simply add the :string[]

let people: string[] = ["Gonzalo", "Juan", "Pedro"];
people.push("Guillermo");

// The same could be done with Number data type:

let years: number[] = [2000, 2001, 2002];
years.push(2025);

console.log(people, years);
```

# :arrow_forward: Functions <a name="functions"></a>

In this section, we cover how to create and use functions in TypeScript:

TypeScript supports `optional` parameters and `default` values in functions.

```typescript
// Parameters and Functions

// To make a parameter optional, you use ?:, otherwise it will be mandatory with the :
// Here's an example:

function showCountry(country?: string, continent?: string): string {
let result: string = "Missing data";
if (country && continent) {
result = country + continent;
}
return result;
}

console.log(showCountry("Uruguay"));
```

# :arrow_forward: Objects <a name="objects"></a>

In this section, we cover how to work with objects in TypeScript:

In TypeScript, objects are instances of a class or interface that contain properties and methods. Properties are key-value pairs that define the characteristics of the object, while methods are functions that perform actions on the object's properties.

```typescript
// Here we define a type called Companies. 
/// The companies type is an object that has the following properties:
type companies = {
name: string,
sector: string,
services: string[],
billing: number,
show: () => string
}

// If you want to edit the object, you have to pass the same properties with the same types
let GeneXus: companies = { // note that we passed companies as the data type for genexus, so we can use all the properties of companies
name: "GeneXus",
sector: "Information Technology",
services: ["Software"],
billing: 12,
show() {
return this.name + this.sector
}
}
console.log(GeneXus.show())
```

# :arrow_forward: Classes <a name="classes"></a>

In this section, we cover how to create and use classes in TypeScript:

Classes are an essential part of object-oriented programming (OOP), and TypeScript provides support for class-based OOP.

## Defining a Class
You can define a class in TypeScript using the `class` keyword followed by the name of the class

## Inheritance
In TypeScript, you can use the `extends` keyword to create a subclass that `inherits properties` and methods from a parent class:

```typescript
// Parent class - Car
class Car {
    // Properties with access modifiers
    constructor(
        public model: string, // Public property
        public type: string,
        public year: number,
        protected color: string, // Protected property
        protected on: boolean = false,
        protected speed: number = 0
    ) {
        this.on = false;
        this.speed = speed;
    }
}

// Child class - Van (extends Car)
class Van extends Car {
    constructor(
        public model: string,
        public type: string,
        public year: number,
        protected color: string,
    ) {
        // Call the constructor of the parent class using super()
        // and pass in the required arguments
        super(model, type, year, color);
    }
}

```

# :arrow_forward: Interfaces <a name="interfaces"></a>

In this section, we cover how to use interfaces in TypeScript:

In TypeScript, interfaces are used to define the structure of an object. They can be thought of as a contract that specifies what properties and methods an object must have.

```typescript
// Interfaces in TypeScript
// they are used to define class properties

interface Videogame {
    // Here you indicate videogame properties
    title: string;
    category: string;
    age: number;
    duration?: number;  // The '?' indicates an optional property
    launched?: boolean; 
    show(): void;      // This function should return void
    update(consola: string): string;  // This function should return a string and take a parameter of type string
}

// Class FIFA that implements Videogame properties
// The class "Fifa" implements the "Videogame" interface, meaning it must have all the properties defined in the interface.

class Fifa implements Videogame {
    constructor(
        public title: string,
        public category: string,
        public age: number,
        public duration?: number,
        public launched?: boolean
    ) { }

    // This function satisfies the "show" method defined in the "Videogame" interface.
    show(): void {
        console.log(this.title, this.category, this.age);
    }

    // This function satisfies the "update" method defined in the "Videogame" interface.
    update(consola: string): string {
        console.log('Looking for updates...');
        return 'Updated'
    }
}

```

# :arrow_forward: Decorators <a name="decorators"></a>
In this section, we will cover what decorators are and how they can be used in TypeScript.

Decorators are a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. They use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime with information about the decorated declaration.

Decorators can be used to modify, observe, or replace existing class and member definitions, and they can also be used to annotate a class or member with metadata that can be used at runtime.
```typescript
function showMessage() {
  console.log("Showing the movie");
}

function proyected(activate: boolean): any {
   if (activate) {
    return showMessage();
   } else{
     return null;
   }
}

@proyected(true)
// To make sure decorators work you need to go to your tsconfig.json and activate: "experimentalDecoratos = true"
// And "emitDecoratorMetadata": true,
class Movie {
  constructor(
    public title: string,
    public genre: string,
    public proyected: boolean
  ) {}
}

let batman:any = new Movie("Batman Begins", "Accion", false);
batman.doProyection();


```
## :arrow_forward: Method Decorators <a name="method-decorators"></a>

Method decorators are similar to class decorators in that they can be used to modify the behavior of a method. 

Method decorators are applied to the method definition and can be used to modify the method's behavior, such as by logging when the method is called or by modifying the arguments that are passed to the method. 

To create a method decorator, you can define a function that takes three arguments: the `target object`, the `method name`, and the `method descriptor`. 

The method descriptor contains the details of the method, such as its value and whether it is writable or configurable.

Inside the method decorator, you can modify the method descriptor and return it to modify the behavior of the method.

```typescript
// Define a method decorator that takes a boolean argument "show"
function modifyMessage(show: boolean) {
  // Return a decorator function that will be applied to the method being decorated
  return function info(target: object, propertyKey: string, descriptor: any) {
    if (show) {
      console.log(target); // Log the target object (i.e. the class instance) to the console
      console.log(propertyKey); // Log the property key (i.e. the method name) to the console
      console.log(descriptor); // Log the descriptor object (which contains information about the method) to the console
    } else {
      // Replace the original method with a new method that just logs a message saying it's blocked
      descriptor.value = function () {
        console.log("Blocked method!");
      };
    }
  };
}

// Define a parameter decorator that logs information about a method parameter
function myProperty(
  target: object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(
    "This property is in the class " +
      target.constructor.name + // Get the name of the class from the constructor property of the target object
      " and the property's called: " +
      propertyKey + // Log the property key (i.e. the method name)
      " and the parameter index is: " +
      parameterIndex // Log the index of the parameter being decorated
  );
}

class Computer {
  marca: string = "Asus";
  // Decorate the "on" method with both "modifyMessage" and "myProperty" decorators
  @modifyMessage(true) // Use the "modifyMessage" decorator with the "show" argument set to true
  on(@myProperty message: string) {
    // Use the "myProperty" decorator to log information about the "message" parameter
    console.log("Turning on PC..");
    console.log(message);
  }
}

let pc = new Computer();
pc.on("You're in Juan's PC");


```
# :arrow_forward: Generic Functions <a name="generic-functions"></a>

Generic functions are functions that can work with a variety of data types. They are functions that are defined with one or more type parameters, which allows them to work with a wide range of data types, rather than being limited to a specific type.

The type parameters are typically represented by a single uppercase letter (e.g., `T`, `U`, `V`), which is then used as a placeholder for the actual type when the function is called.

Generic functions can be very useful when you need to write functions that are flexible enough to work with different types of data, without having to write separate functions for each data type.

```typescript
// This is a generic function named 'showGeneric' that takes a type parameter 'T'.
// The function takes one argument called 'parameter' of type 'T'.
function showGeneric<T>(parameter: T) {
  return parameter;
}

// The type of 'T' in this case is inferred to be 'string'.
console.log(showGeneric("Hello there").replace("Hello", "Goodbye"));

// The type of 'T' in this case is inferred to be 'number'.
console.log(showGeneric(24).toFixed(3));

// The type of 'T' in this case is inferred to be 'boolean'.
console.log(showGeneric(true).valueOf());
```
## :arrow_forward: Getting started

To get started with this project, simply clone this repository and take a deep look of what we have done.







