// Ejercicio 2: Teniendo la Tabla de Hechos 
const hechos = [ 

 { padre: 'Juan', hijo: 'Luis' },
 { padre: 'Juan', hijo: 'Pedro' },
 { padre: 'Abraham', hijo: 'JUan'}
]

//  Obtener los hijos de un padre 
const hijos = padre => hechos.filter(h => h.padre === padre).map(h => h.hijo);

// Determinar si dos personas son hermanos (mismo padre y distintos)
const sonHermanos = (p1, p2) =>
  p1 !== p2 &&                                                 // diferentes personas
  hechos.some(h => h.hijo === p1) &&                           // existen en hechos
  hechos.some(h => h.hijo === p2) &&
  (hechos.find(h => h.hijo === p1) && hechos.find(h => h.hijo === p2) &&
   hechos.find(h => h.hijo === p1).padre === hechos.find(h => h.hijo === p2).padre);

// todos los hermanos de una persona
const hermanos = persona => {
  const entrada = hechos.find(h => h.hijo === persona);
  if (!entrada) return [];
  const padre = entrada.padre;
  return hechos
    .filter(h => h.padre === padre && h.hijo !== persona)
    .map(h => h.hijo);
};

const hermanosSinturno = persona =>
  (entrada => entrada ? hechos.filter(h => h.padre === entrada && h.hijo !== persona).map(h => h.hijo) : [])
  (hechos.find(h => h.hijo === persona) ? hechos.find(h => h.hijo === persona).padre : null);

// 4. Determinar si A es abuelo de C (A padre de B y B padre de C)
const esAbuelo = (a, c) =>
  hechos.some(h => h.padre === a && hechos.some(h2 => h2.padre === h.hijo && h2.hijo === c));

// Obtener todos los nietos de un abuelo 
const nietos = abuelo => hechos.filter(h => hechos.some(h2 => h2.padre === abuelo && h2.hijo === h.padre))
.map(h => h.hijo);

console.log('Hijos de Juan:', hijos('Juan'));   // Luis y Pedro
console.log('¿Son hermanos Luis y Pedro?', sonHermanos('Luis', 'Pedro')); // true
console.log('Hermanos de Luis:', hermanosSinturno('Luis'));              // Pedro
console.log('¿Es Abraham abuelo de JUan?', esAbuelo('Abraham', 'JUan'));  // false (porque 'JUan' es hijo directo, no nieto)
console.log('Nietos de Abraham:', nietos('Abraham'));    //  (porque ningún hijo de Abraham tiene hijos)