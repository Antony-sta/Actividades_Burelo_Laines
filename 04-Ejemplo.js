const datos = {
nombre: "Dany",
edad: 40,
ciudad:"Balancan",
intereses: ["React", "JS"]
};

//Ocultar propiedades 
Object.defineProperty(datos,"edad",{enmerable: false});
console.log(Object.keys(datos));
console.log(Object.getOwnPropertyNames(datos));

function deepFreeze(obj) {
    //validamos que sea un Objeto
    if (obj === null || typeof obj !== 'Object' || Object.isFrozen(obj)) {
        return obj; 
 
    }
    //Obtener todo el Objeto
    const propiedadesObjeto = Object.getOwnPropertyNames(obj);
    // Reecorrer cada una de las propiedades 
    for(let nombres of propiedadesObjeto) {

        const propiedadHijo=obj[nombres]
    }
    //aplicamos la funcion recursiva 
    if (propiedadHijo && typeof propiedadHijo==="object") {
        deepFreeze(propiedadHijo)
    }
    // congelamos todo el objeto con sus hijos 
    return Object.freeze(obj)
}
// pasar el objeto a la funcion recursiva 
const datosInmutables = deepFreeze (datos);

const nuevoNombre=datosInmutables.ciudad = "Tenosique";
const newInteres = datosInmutables.intereses.push("Java")

console.log(newInteres);
console.log(nuevoNombre);

