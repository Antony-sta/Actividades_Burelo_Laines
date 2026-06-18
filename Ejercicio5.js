const Hechos = [
  { id: 1, tipo: 'deposito', monto: 10000 },
  { id: 2, tipo: 'retiro', monto: 6000 },
  { id: 3, tipo: 'retiro', monto: 1500 },
  { id: 4, tipo: 'retiro', monto: 8000 }
];

// Reglas
// Es un retiro de alto riesgo (> $5000)
const esAltoRiesgo = (tip) => tip.tipo === "retiro" && tip.monto > 5000; 

// Calcula la penalización del 5% sobre el monto
const calcularPenalizacion = (tip) => tip.monto * 0.05;

// Suma dos números (para usar en reduce)
const sumar = (a, val) => a + val;

//  reglas
const retirosRiesgosos = Hechos.filter(esAltoRiesgo);       
const montosPenalizados = retirosRiesgosos.map(calcularPenalizacion); 
const totalPenalizado = montosPenalizados.reduce(sumar, 0);  // ← suma de penalizaciones

// si quieres mostrar el saldo final después de restar penalizaciones
const saldoTotal = Hechos.reduce(sumar, 0) - totalPenalizado;

console.log("Retiros de alto riesgo:", retirosRiesgosos); 
console.log("Penalización total recaudada: $", totalPenalizado);
