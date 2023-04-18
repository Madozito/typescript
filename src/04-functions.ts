function saludo(nombre: string): string {
    return "Un saludo para" + nombre;

}

console.log(saludo('Juan Martin Madoz'));

// Funcion que devuelve nada: void

function mostrarFecha(): void {
    console.log('20 - 07 - 2023');

}

mostrarFecha()

//  Never: fin de la aplicacion

// function finApp():never{
//     throw new Error('La app se ha cerrado...')
// }

// finApp()

// Parametros y funciones
// Para que un parametro sea opcional le pasas ?:, sino va a ser obligatorio con el :
function mostrarPais(pais?:string, continente?:string):string {
    let resultado: string ='Faltan datos';
    if (pais && continente) {
        resultado = pais + continente;
        
    }
    return resultado;
}

console.log(mostrarPais('España'));

