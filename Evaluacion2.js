const peticionesHttp = [
{ id: "REQ 01", metodo: "GET", ipOrigen: "192.168.1.50", latenciaMs: 45, tamanioPayloadKb: 2,
payload: "SELECT * FROM users" },
{ id: "REQ 02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb:
1500, payload: "DROP TABLE users; users;----" },
{ id: "REQ 03", metodo: "GET", ipOrigen: "192.168.1.55", latenciaMs: 12, tamanioPayloadKb: 1,
payload: "ping" },
{ id: "REQ 04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb:
950, payload: "normal_profile_update" },
{ id: "REQ 05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb:
1200, payload: "upload_heavy_image" },
{ id: "REQ-06", metodo: "GET", ipOrigen: "172.16.25.40", latenciaMs: 50, tamanioPayloadKb: 500, payload: "exec MaliciousScript" }
];

function deepFreeze(obj) {
if(obj === null  || typeof obj == !"objet" || Object.isFrozen (obj)){
return obj;
 }
 Object.freeze(obj);
 for(const key of Object.keys(obj)){
    deepFreeze (obj[key]);
 }
 return obj;

}

deepFreeze(peticionesHttp);

const esMetodoEscritura = (x) => x.metodo === "POST";
const esLatenciaAlta = (x) => x.latenciaMs >=2000 
const esPayloadSospechoso = (x) => /\b(DROP|SELECT|MaliciousScript)\b/i.test(x.payload);

const detectarAmenazaPotencial = (x) => 
    esMetodoEscritura(x) && (esLatenciaAlta(x)|| esPayloadSospechoso(x));

function* analizadorSeguridadLazy(flujo,Regla){
    for(const peticion of flujo) {
        if(Regla(peticion)){
            yield peticion
        }

    }
}

const generadorAmenaza = analizadorSeguridadLazy (peticionesHttp, detectarAmenazaPotencial);
const amenazasCapturadas = []

while (amenazasCapturadas.length < 2){
    const siguiente = generadorAmenaza.next();
    if(siguiente.done){
        break;
    }
    amenazasCapturadas.push(siguiente.value);
}
const promedio = amenazasCapturadas.reduce(
    (acc,req) => acc + req.tamanioPayloadKb, 0
    )/(amenazasCapturadas.length || 1);

    //console.log("Amenazas capturadas",amenazasCapturadas)
   // console.log("promedio de tamaño ",promedio)

  

   