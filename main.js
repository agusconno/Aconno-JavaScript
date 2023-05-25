window.onload = function() {
const multiplicacion = function (n1,n2) {
    return n1*n2;
  };

  function solicitarNombre () {
    let nombreIngresado = prompt ("Ingrese su nombre por favor")
    alert (" ¡Hola Bienvenid@ a nuestra tiendita del horror! " + nombreIngresado)
    console.log (nombreIngresado);
  }
  
  const iva = function () {
    return total * 1.21
  }
 
  solicitarNombre()

const productos = [
    { nombre: "pelicula 1", precio: 5000},
    { nombre: "pelicula 2", precio: 6000},
    { nombre: "pelicula 3", precio: 3500},
    { nombre: "pelicula 4", precio: 4000},
    { nombre: "pelicula 5", precio: 6700},
    { nombre: "pelicula 6", precio: 7000},
];

const filtro = productos.filter ((el) => el.precio <= 5000 )
console.log (filtro)


console.log(productos)
let carrito = []

let seleccion = (prompt ("¿desea comprar alguna pelicula?\n si / no"));
console.log (seleccion)

while (seleccion !== "si" && seleccion !== "no"){
    alert("Por favor ingrese una opción correcta")
   seleccion = (prompt ("Hola ¿desear realizar alguna compra?\n Si / No"))
   
}

if (seleccion === "si") {
    alert ("Gracias! A constinuación nuestra selección de peliculas")
    let todosLosProductos = productos.map ((producto) => producto.nombre + " " + "$" + producto.precio);
    alert (todosLosProductos.join (" // "));
} else if (seleccion === "no"){
    alert("Muchas gracias por venir, hasta pronto!!")
}

while (seleccion !="no") {
    let producto = (prompt ("agregue un producto a su carrito"))
    let precio = 0

    if (producto == "pelicula 1" || producto == "pelicula 2" || producto == "pelicula 3" 
    || producto == "pelicula 4" || producto ==  "pelicula 5" || producto == "pelicula 6"){
        switch (producto) {
            case "pelicula 1":
            precio = 5000;
            break;
            case "pelicula 2":
            precio = 6000;
            break;
            case "pelicula 3":
            precio = 3500;
            break;
            case "pelicula 4":
            precio = 4000;
            break;
            case "pelicula 5":
            precio = 6700;
            break;
            case "pelicula 6":
            precio = 7000;
            break;
            default:
            break;
        }
        let unidades = parseInt (prompt("Cuantas copias quiere llevar?"))
        carrito.push ({producto, unidades, precio})
        
        } else { 
        alert("no contamos con ese producto")
        
    }
    
    seleccion = (prompt ("Desea seguir comprando?"))
    while (seleccion === "no") {
        alert ("Gracias por su compra! Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${multiplicacion(carritoFinal.unidades,carritoFinal.precio)} `)})
        break;
    }

    }
    console.log(carrito)
    
    //utilizo acc acumulador
    //el elementos
    const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
    console.log (`El total a pagar por su compra con IVA es de: ${iva ()} `)

}
