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
    public prueba: string;

    constructor(
        public model: string,
        public type: string,
        public year: number,
        protected color: string,
        protected on: boolean = false,
        protected speed: number = 0

    ) {
        this.on = false;
        this.speed
        this.prueba = 'www.google.com'
    }

    // Methods

    public start(): void {
        this.on = true;
        console.log('clase padre');

    }

    public stop(): void {
        this.on = false;
    }

    private showCar(): string {
        return this.model + this.type;
    }

    private showOther(): string {
        return this.year + this.color;
    }

    private showAll(): string {
        return this.showCar + ' ' + this.showOther;
    }

    public set setColor(color: string) {
        this.color = color;
    }
    public get getColor() {
        return this.color
    }

    public static greet(): string {
        return 'Hey, whats up';
    }
}
// Inheritance

class Van extends Car {
    constructor(
        public model: string,
        public type: string,
        public year: number,
        protected color: string,


    ) {
        super(model, type, year, color) // I have to indicate super for the children class that im extending from
    }
    public startChildren(): void {
        console.log('clase hija');
        this.speed = 200;
        //this.start = true;

    }
    public show() {
        super.start();
        return this.on;
        console.log(this);

    }
}
let my_van = new Van('Jeep', 'Something', 1990, 'Black');
console.log(my_van);



let my_car: Car = new Car('Renault', 'Clio', 2000, 'Blue');
// Abstract classes  other classes can inherit things, but you cannot use it or instance it, only extending to other classes
 console.log(my_car.model, my_car.year); //Output object with all properties
 console.log(my_car.start()); //Output true
 my_car.setColor = 'Violet'
 console.log(my_car.getColor);
 console.log(Car.greet());

