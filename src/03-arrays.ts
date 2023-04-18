// Arrays
let people: string[] = ["Gonzalo", "Juan", "Pedro"];
people.push("Guillermo");
let years: number[] = [2000, 2001, 2002];
years.push(2025);
console.log(people, years);

// Tuplas
let pelicula: [string, boolean, number] = ["Batman Begins", true, 1990];
console.log(pelicula.length);

// Enum - enumeracion

// Objeto con una serie de datos fijos
enum DatosPersonales {
  nombre = "Juan",
  dni = 123456,
  direccion = "Salto",
  ciudad = "Montevideo",
}

console.log(DatosPersonales.nombre, DatosPersonales.dni);

// Cast o convertir a otro tipo de dato

let unknown_text: any = "Comes from AJAX call";
let last_phrase: string = <string>unknown_text; // la etiqueta va a forzar k sea string o number

console.log(last_phrase);
