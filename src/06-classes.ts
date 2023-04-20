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


    constructor(
        public model: string,
        public type: string,
        public year: number,
        protected color: string,
        private on: boolean = false,
        private speed: number = 0

    ) {
        this.on = false;
        this.speed
    }

    // Methods

    public start(): void {
        this.on = true;
    }

    public stop(): void {
        this.on = false;
    }
    
    private showCar():string{
        return this.model + this.type;
    }

    private showOther():string{
        return this.year + this.color;
    }

    private showAll():string{
        return this.showCar + ' ' + this.showOther;
    }
}

let my_car: Car = new Car('Renault', 'Clio', 2000, 'Blue');

console.log(my_car.model, my_car.year); //Output object with all properties
console.log(my_car.start()); //Output true
