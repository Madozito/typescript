// function proyected(activate: boolean): any {
//   if (activate) {
//     return showMessage();
//   } else{
//     return null;
//   }
// }

function proyected(activate: boolean) {
  return (constructor: Function) => {
    constructor.prototype.doProyection = function (): void {
      if (activate) {
        console.log("Proyecting movie:", this.title);
      } else {
        console.log("Cinema closed");
      }
    };
  };
}

function showMessage() {
  console.log("Showing the movie");
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
