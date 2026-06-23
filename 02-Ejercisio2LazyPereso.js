//2.Ejercicio. Paginación infinita, al hacer scroll, se va cargando de 3 en 3.

const dbPosts = [
  'Post 1: Introducción a lazy loading',
  'Post 2: Generadores en JavaScript',
  'Post 3: Paginación infinita',
  'Post 4: Manejo de estados',
  'Post 5: Eventos de scroll',
  'Post 6: Optimización de rendimiento',
  'Post 7: Carga bajo demanda',
  'Post 8: Buenas prácticas',
  'Post 9: Ejemplo final'
];

//  ITERABLE PEREZOSO
function* obtenerPaginas(posts, tamano = 3) {
  for (let i = 0; i < posts.length; i += tamano) {
    const pagina = posts.slice(i, i + tamano).map(p => `<html>${p}</html>`);
    console.log('-> Procesando y entregando página...');
    yield pagina;
  }
}

// Uso: creamos el generador
const paginas = obtenerPaginas(dbPosts, 3);

let pagina;
let numeroPagina = 1;

while (!(pagina = paginas.next()).done) {
  console.log(`Página ${numeroPagina}:`, pagina.value);
  numeroPagina += 1;
}
console.log('No hay más páginas.');