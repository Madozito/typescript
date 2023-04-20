// Interfaces in TypeScript

// they are used to define class properties


interface Videogame {
    // Here you indicate videogame properties
    title: string;
    category: string;
    age: number;
    duration?: number;
    launched?: boolean;  //?: becomes optional properties
    show(): void;
    update(consola: string): string;
}



// Class FIFA that implements Videogame properties

class Fifa implements Videogame {
    constructor(
        public title: string,
        public category: string,
        public age: number,
        public duration?: number,
        public launched?: boolean

    ) { }


    show(): void {
        console.log(this.title, this.category, this.age);

    }

    update(consola: string): string {
        console.log('Looking for updates...');
        return 'Updated'
    }


}

let fifa23:Videogame = new Fifa('fifa 23', 'Soccer', 25, 5, true)
console.log(fifa23.show());

// Interface Literal Object
let gta: Videogame = {
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
        return 'Updated'

    },

}

console.log(gta);
