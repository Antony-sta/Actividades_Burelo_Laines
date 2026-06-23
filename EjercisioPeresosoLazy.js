// 1.Ejercicio . Generador de ID únicos para una base de datos.
// CÓDIGO TRANSFORMADO (LAZY) 
function* generarIds() {
  for (let i = 1; i <= 100; i++) {
    yield `TEC-2026-${i}`; // Se genera solo cuando se pide
  }
}

const generador = generarIds();

console.log(generador.next().value); // TEC-2026-1
console.log(generador.next().value); // TEC-2026-2
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);
//  sin ocupar memoria con los 100 de golpe.

const idsTec = [...generarIds()]; 
console.log(idsTec.length); // 100
