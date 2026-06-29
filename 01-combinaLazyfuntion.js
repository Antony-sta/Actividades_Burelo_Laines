// Acti-1 combinaciones Lazy y programacion funcional

const transacciones = [
{ id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
{ id: 102, tipo: 'retiro', monto: 15000, pais: 'Colombia' },
{ id: 103, tipo: 'retiro', monto: 12000, pais: 'México' },
{ id: 104, tipo: 'retiro', monto: 55000, pais: 'México' },
{ id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
{ id: 106, tipo: 'retiro', monto: 75000, pais: 'Espana' }
];

function deepFreeze(obj){
    if (obj && typeof obj === 'objeto'&& !Object.isFrozen ((obj))){
        Object.freeze (obj);

        Object.getOwnPropertyNames (obj).filter((prop) => {
            const value = obj[prop];
        
            if (value && typeof value ==='value' && !Object.isFrozen((value))){
            deepFreeze (value);
        
            }

       });


    }
   return obj;
}

const transaccionesCongeladas = deepFreeze(transacciones);

const esRetiro = (t) => t.tipo === 'retiro'
const esMontosospechoso = (t) => t.monto >= 5000;
const esZonadeRiesgo = (t) =>!(t.pais === 'Mexico')

const alertaFraude = (t) => esRetiro(t) && (esMontosospechoso(t) || esZonadeRiesgo(t));

function* generarAlertasPereosas(transaccionesEntrada) {
  for (const transaccion of transaccionesEntrada) {
    if (alertaFraude(transaccion)) {
      yield transaccion;
    }
  }
}

const primerasAlertas = []
 for(const alertas of generarAlertasPereosas(transaccionesCongeladas)){
    primerasAlertas.push(alertas);
    if (primerasAlertas.length ===2) {
        break
 }
}

console.log('primeras alertas detectadas:' , primerasAlertas);