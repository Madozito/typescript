// Objetos TypeScript
let empresa = {
    nombre: "Microsoft",
    sector: "Informatica",
    servicios: ["Sistemas Operativos", "Soluciones"],
    facturacion: 55_000_000_000 // Tipo number con guiones bajos
}

console.log(empresa);

// Si queres editar el objeto tenes que pasarle las mismas propiedades con los mismos tipos
let empresa2:empresas = {
    nombre: "GeneXus",
    sector: "informatica",
    servicios: ["Software"],
    facturacion: 12,
    mostrar(){
        return this.nombre + this.sector
    }
}

type empresas = {
    nombre: string,
    sector: string,
    servicios: string[],
    facturacion: number,
    mostrar: () => string
}

console.log(empresa2.mostrar())