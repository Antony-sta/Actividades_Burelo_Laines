const deepFreeze = obj => {
Object.getOwnPropertyNames(obj).filter(key =>{
    const val = obj[key];
    if(val && typeof val === 'object') deepFreeze(val)
});
return Object.freeze(obj);
};

const paquetes = [
{ tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
{ tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
{ tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
{ tracking: 'ZA4', estado: 'Yucatán', peso: 25 },
{ tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
{ tracking: 'ZA6', estado: 'Oaxaca', peso: 30 }
];

const esDestinoLocal = p => p.estado === 'Estado';
const esPesado       = p => p.peso >= 15;

//Regla de negocio : No es local y es pesado 

const esEnvioprioritario = p => !esDestinoLocal(p) && esPesado(p);
function* generadorPrioritarios(lista) {
    for(const p of lista) {
        if (esEnvioprioritario(p)) yield p;
    }

}

//  Extraer los dos primeros numeros idoneos 

const iter = generadorPrioritarios (paquetes);
const  seleccionados = []
for(let i = 0; i < 2; i++) {
const {value,done } = iter.next();
if (done) break;
seleccionados.push(value);
}

console.log ('Originales paquetes:', paquetes);
console.log ('primero dos prioritarios para el camion:',seleccionados);