/*Ramirez Camacho Itzel Jaqueline*/

/*Ejercicio 1
Dado un arreglo de números enteros, Imprimir solamente aquellos que
          son denominados números primos, (usar arreglo denominado como
          "ejercicio1").
         
 const ejercicio1 = [
     3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
     19, 88, 456, 13, 23, 24,
    ];
    const esPrimo = numero => {
        
        if (numero == 0 || numero == 1 || numero == 4) return false;
        for (let x = 2; x < numero / 2; x++) {
            if (numero % x == 0) return false;
        }
        
        return true;
    }
    
    ejercicio1.forEach(numero => {
        console.log("¿%d es primo? %s", numero, esPrimo(numero));
        });*/





/*Ejercicio 2
Ramón quiere hacer una fiesta privada en donde solo entre un número
exclusivo de personas, ayudale al portero a solo dejar pasar a
aquellas personas mayores de edad que sean familiares de Ramón. (con
imprimir los usuarios que se admitirán basta, usar el arreglo
denominado como "ejercicio2"). 

const persona1 = {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    };
const persona2 = {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    };
const persona3 = {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    };
const persona4 = {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    };
const persona5 = {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    };
const persona6 = {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    };


const arregloPersonas = [persona1,persona2,persona3,persona4,persona5,persona6];
const admitirPaso = (persona) => {
    if ((persona.edad >= 18)&&(persona.esFamiliar === true)) {
        console.log(`Puedes pasar ${persona.nombre}`);
    } else {
        console.log(`No puedes pasar ${persona.nombre}`);
    }
};

arregloPersonas.forEach((persona) => {
    admitirPaso(persona);
});*/

/*Ejercicio 3
Con ayuda de ciclos imprime los primeros 50 números de la suceción de
fibonacci, (1,1,2,3,5,8,13,21).

function GenerateFibonacci(number){
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    let f = GenerateFibonacci(51);
    console.log(f);*/
