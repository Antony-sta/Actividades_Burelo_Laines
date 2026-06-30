const ordenesEnvio = [
{ id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4, distanciaKm: 8, asegurado: false },
{ id: "ORD-102", tipo: "express", destino: "Veracruz", pesoKg: 22, distanciaKm: 120, asegurado: true },
{ id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15, asegurado: false },
{ id: "ORD-104", tipo: "express", destino: "Tabasco", pesoKg: 5, distanciaKm: 3, asegurado: false },
{ id: "ORD-105", tipo: "express", destino: "Yucatán", pesoKg: 18, distanciaKm: 250, asegurado: false },
{ id: "ORD-106", tipo: "express", destino: "Chiapas", pesoKg: 35, distanciaKm: 190, asegurado: true }
];

function deepFreeze (obj){
    if (obj === null || typeof obj == !"object" || Object.isFrozen(obj)) return obj;
    Object.freeze(obj);
    Object.keys(obj).filter((k)=> deepFreeze(obj[k]));
    return obj;

}

deepFreeze(ordenesEnvio);

const esEnvioExpress = (x) => x.tipo === "express";
const esPaquetepesado = (x) => x.pesokg >= 15;
const esRutaforanea = (x) => x.destino !== "Tabasco"
const esDespachoprioritario = (x) => esEnvioExpress(x) && (esPaquetepesado(x) || esRutaforanea(x));

function* despachoLazy (flujo, Regla){
    for(const orden of flujo) if (Regla(orden)) yield orden
}

const generador = despachoLazy (ordenesEnvio, esDespachoprioritario);
const prioridad = []
while (prioridad.length < 2) {
    const next = generador.next();
     if(next.done) break;
     prioridad.push(next.value);
}

const promedistkm = prioridad.reduce((s,o)=> s + o.distanciaKm, 0 ) / (prioridad.length || 1)
console.log("promedio",promedistkm);