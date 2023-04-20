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


    constructor(
        public model: string,
        public type: string,
        public year: number,
        public color: string,
        public on: boolean = false,
        public speed: number = 0

    ) {
        this.on = false;
        this.speed
    }

    // Methods

    start(): void {
        this.on = true;
    }

    stop(): void {
        this.on = false;
    }
}

//let my_car: Car = new Car();

//console.log(typeof my_car); //Output object
//console.log(my_car.start()); //Output true
