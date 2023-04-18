"use strict";
function saludo(nombre) {
    return "Un saludo para" + nombre;
}
console.log(saludo('Juan Martin Madoz'));
// Funcion que devuelve nada: void
function mostrarFecha() {
    console.log('20 - 07 - 2023');
}
mostrarFecha();
//  Never: fin de la aplicacion
// function finApp():never{
//     throw new Error('La app se ha cerrado...')
// }
// finApp()
// Parametros y funciones
// Para que un parametro sea opcional le pasas ?:, sino va a ser obligatorio con el :
function mostrarPais(pais, continente) {
    let resultado = 'Faltan datos';
    if (pais && continente) {
        resultado = pais + continente;
    }
    return resultado;
}
console.log(mostrarPais('España'));
// Tipo Funcion
let grupos;
grupos = function (datos) {
    return 'Mis grupos favoritos son: ' + datos.toString();
};
console.log(grupos(['Metalica', 'Beatles', 'a/ha']));
