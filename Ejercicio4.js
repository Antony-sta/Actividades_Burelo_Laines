const Hechos = [
{ nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
{ nombre: 'María', historialLimpio: true, ingresosEstables: false },
{ nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }

] 

//Reglas
//historial limpio Y ingresos estables
const Tarjetacredito = (ingreso) => ingreso.historialLimpio && ingreso.ingresosEstables;
// Reactivación problemas en al menos un área
const Reactivacion = (ingreso) => !ingreso.historialLimpio || !ingreso.ingresosEstables;
//ingresos estables PERO historial no limpio
const riesgoMedio = (ingreso) => ingreso.ingresosEstables && !ingreso.historialLimpio;
//historial manchado Y carencia de ingresos (para alerta)
const estariesgocritico = (ingreso) => !ingreso.historialLimpio && !ingreso.ingresosEstables;
//(historial manchado Y sin ingresos) → equivalente a: historialLimpio O ingresosEstables
const esSeguro = (ingreso) => ingreso.historialLimpio || ingreso.ingresosEstables;



//Imprimir
console.log("Credito aprovado", Hechos.filter(Tarjetacredito));
console.log("Reactivacion",Hechos.filter(Reactivacion));
console.log("riesgoMedio",Hechos.filter(riesgoMedio));
console.log("critico",Hechos.filter(estariesgocritico));
console.log("Seguro",Hechos.filter(esSeguro));

