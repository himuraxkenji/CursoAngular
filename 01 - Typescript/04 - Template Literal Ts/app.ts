
function getNombre(){
    return "Emmanuel";
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

// let texto = "Hola " + nombre + " "+ apellido + " "+ "(" + edad + ")";

let texto = `Hola, ${nombre} ${apellido} (${edad})`;

let texto2 = `Funcion: ${getNombre()}`;

console.log(texto);
console.log(texto2);
