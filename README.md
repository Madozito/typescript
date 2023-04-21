# <p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" style="display: block; margin: 0 auto; margin-bottom: 40px; margin-top: 40pxx" width="100" height="100" /> TypeScript Fundamentals</p>


<p align="center">
    
</p>

This repository is a collection of TypeScript examples that cover the fundamentals of the language. It is organized into seven parts:

1. Basic types
2. Union types
3. Arrays
4. Functions
5. Objects
6. Classes
7. Interfaces

## :arrow_forward:  Basic Types

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

##  :arrow_forward: Union Types

In this section, we cover how to use union types in TypeScript:

```typescript
// You can make a variable either a string or a number using the |

let contact:string | number = "user@gmail.com"
contact = 65453443;

// Doing this you are able to assign other values later on just like in this example
```
## :arrow_forward: Arrays

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

## :arrow_forward: Functions

In this section, we cover how to create and use functions in TypeScript:

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

## :arrow_forward: Objects

In this section, we cover how to work with objects in TypeScript:

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

## :arrow_forward: Classes

In this section, we cover how to create and use classes in TypeScript:

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

## :arrow_forward: Interfaces

In this section, we cover how to use interfaces in TypeScript:

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

## :arrow_forward: Getting started

To get started with this project, simply clone this repository and take a deep look of what we have done.







