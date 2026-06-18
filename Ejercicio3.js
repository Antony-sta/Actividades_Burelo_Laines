const Hechos = [
{ nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
{ nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
{ nombre: 'Beto', edad: 30, rol: 'user', activo: false }
]

//Reglas 
const enviarCorreo = (user) => !user.activo;
const acessoSeccion = (user) => user.activo && user.edad >= 18;
const usuariosEspeciales = (user) => user.rol === "admin" && user.edad < 18;
const permisodeEdicion = (user) => user.activo || user.rol === "admin" || user.edad >= 18;

// Evaluar reglas para cada usuar



console.log("desabilitados", Hechos.filter(enviarCorreo));
console.log("acesso a la seccion", Hechos.filter(acessoSeccion));
console.log("Especiales", Hechos.filter(usuariosEspeciales));
console.log("Permiso de edicion", Hechos.filter(permisodeEdicion));

