"use strict";
// Arrays
let people = ["Gonzalo", "Juan", "Pedro"];
people.push("Guillermo");
let years = [2000, 2001, 2002];
years.push(2025);
console.log(people, years);
// Tuplas
let pelicula = ["Batman Begins", true, 1990];
console.log(pelicula.length);
// Enum - enumeracion
// Objeto con una serie de datos fijos
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Juan";
    DatosPersonales[DatosPersonales["dni"] = 123456] = "dni";
    DatosPersonales["direccion"] = "Salto";
    DatosPersonales["ciudad"] = "Montevideo";
})(DatosPersonales || (DatosPersonales = {}));
console.log(DatosPersonales.nombre, DatosPersonales.dni);
// Cast o convertir a otro tipo de dato
let unknown_text = "Comes from AJAX call";
let last_phrase = unknown_text; // la etiqueta va a forzar k sea string o number
console.log(last_phrase);
