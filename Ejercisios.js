//Ejercicio 1: Contando con los siguientes cursos que se encuentran dentro de un arreglo de objetos:

const Hechos = [
    
{ titulo: 'React Avanzado',categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
{ titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
{ titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
{ titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false}
]

const cursoDesarrol = Hechos.filter(curso => curso.categoria === "Desarrollo" && curso.tieneCertificado === true);

const cursoDiseño = Hechos.filter(curso => curso.categoria === "Diseño" || curso.esGratis === true)

//encontrar una lista de pagos que no tenga Certificado
const cursopagoSinCertificado = Hechos.filter(curso => curso.categoria === false && curso.tieneCertificado === false);

//encontrar una lista de cursos de desarrollo que sean gratis y que si tenga Certificado
const cursosDesarolloGratis = Hechos.filter(curso => curso.categoria === "Desarrollo" && (curso.esGratis === true || curso.tieneCertificado === true));

console.log(cursosDesarolloGratis);
console.log(cursopagoSinCertificado);
console.log(cursoDiseño);

console.log(cursoDesarrol);

