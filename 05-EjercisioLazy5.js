//Simulador de carrito de compras: Tienes un lote inmenso de productos y quieres aplicarles un IVA o descuento, pero el cliente en caja va pagando uno por uno de forma síncrona.
const Almacen =[100,200,300,400,500];

function* aplicariva (precios){
    for(const precio of precios) {
        yield precio * 1.16
    }
}

const preciosconiva =aplicariva (Almacen);
let indice = 1;
for (const precio of preciosconiva){
    console.log(`producto ${indice}: $${precio.toFixed(2)}`);
    indice +=1

}