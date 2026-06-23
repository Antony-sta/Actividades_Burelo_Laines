//3.Ejercicio. Buscador de errores críticos en logs de un servidor.
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---
const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"];

function* buscarTodosLosErrores(logs) {
for (const logs of log){
 if(log.includes("500"));{

 
  yield logs;

return logs.filter(log => log.includes("500")); // Retorna un array con todos
}
}
}
const errores = buscarTodosLosErrores =(logsServidor); 
 for(const error of errores){
    console.log(error);
 }