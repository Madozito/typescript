"use strict";
// Objetos TypeScript
let empresa = {
    nombre: "Microsoft",
    sector: "Informatica",
    servicios: ["Sistemas Operativos", "Soluciones"],
    facturacion: 55000000000 // Tipo number con guiones bajos
};
console.log(empresa);
// Si queres editar el objeto tenes que pasarle las mismas propiedades con los mismos tipos
let empresa2 = {
    nombre: "GeneXus",
    sector: "informatica",
    servicios: ["Software"],
    facturacion: 12,
    mostrar() {
        return this.nombre + this.sector;
    }
};
console.log(empresa2.mostrar());
