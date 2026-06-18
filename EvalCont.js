const hechos = [
      { id: 1, nombre: 'Autenticación', zona: 'us-east', consultasPorMinuto: 12000, activo: true, tecnologias: ['Node', 'Redis'] },
  { id: 2, nombre: 'Procesamiento Pagos', zona: 'us-west', consultasPorMinuto: 4500, activo: true, tecnologias: ['Java', 'Spring'] },
  { id: 3, nombre: 'Recomendaciones AI', zona: 'us-east', consultasPorMinuto: 25000, activo: false, tecnologias: ['Python', 'TensorFlow'] },
  { id: 4, nombre: 'Notificaciones', zona: 'eu-central', consultasPorMinuto: 8500, activo: true, tecnologias: ['Node', 'RabbitMQ'] },
  { id: 5, nombre: 'Reportes Históricos', zona: 'us-west', consultasPorMinuto: 500, activo: false, tecnologias: ['Python', 'MongoDB'] }
]

const serviciosActivos = (hechos) => hechos.activo;
const esZonaUs = (hechos) => hechos.activo === "us-east" || hechos.activo === "us-west";
const esAltaCarga = (hechos) => hechos.consultasMinuto > 10000; 
const usaNode = (hechos) => hechos.tecnologi.activos.includes("Node");




const mantenimiento = (hechos) => !estaActivo(hechos) && esAltaCarga(hechos);
const servicioCritico = (hechos) => estaActivo(hechos) && (esZona(hehcos) || esalta(hechos));
const migraAcloudflager = (hechos) => esZona(hechos) && usaNode(hehcos) && !mantenjimiento(hehcos);

const criticosUs = hechos.filter(servicioCritico).map(hechos =>hechos.nombre);

console.log ("Servicios criticos en US:", criticosUs); 
console.log( criticosUs)

const mantenimiento = hechos.filter(mantenimiento).map(hechos => hechos.nombre);
console.log("Servicio en mantenimiento:", mantenimiento);


const totalconsultas = hechos.filter(estaActivo).reduce((acum, hechos) => acum + hechos.consultasPorMinuto, 0);
console.log("Total de consultas por minuto en servicios activos:", totalconsultas);
console.log(totalconsultas); 

const migraAcloudflager = hechos.filter(migraAcloudflager).map(hechos => hechos.nombre);
console.log("servicios a migrar a cloudflager:", migraAcloudflager);
console.log(migraAcloudflager);