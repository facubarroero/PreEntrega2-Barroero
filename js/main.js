const carrito = []

const instrumentos = [{img: '🎸', code: 1, estilo: 'cuerdas',tipo: 'Guitarra criolla', precio: 20000},
                     {img: '🎸', code: 2, estilo: 'cuerdas',tipo: 'Guitarra electrica', precio: 35000},
                     {img: '🎻', code: 3, estilo: 'cuerdas',tipo: 'Violin', precio: 85000},
                     {img: '🥁', code: 4, estilo: 'percusion',tipo: 'Bateria', precio: 120000},
                     {img: '🎤', code: 5, estilo: 'electronico',tipo: 'Microfono', precio: 7500},
                     {img: '🔌', code: 6, estilo: 'electronico',tipo: 'Cable para amplificador', precio: 1500},
                     {img: '🔈', code: 7, estilo: 'electronico',tipo: 'Amplificador', precio: 40000},
                     {img: '🪵', code: 8, estilo: 'accesorio',tipo: 'Base Guitarra', precio: 5000},
                     {img: '🎸', code: 9, estilo: 'cuerdas',tipo: 'Guitarra de Estudio', precio: 40000},
                     {img: '🪘', code: 10, estilo: 'percusion',tipo: 'Bombo', precio: 40000}]

const mensajeInicio = "Seleccione lo que desee ingresando el codigo: \n \n"+
                    "🎸 Guitarra criolla, Codigo: 1, precio: 20000 \n"+
                    "🎸 Guitarra electrica, Codigo: 2, precio: 35000 \n"+
                    "🎻 Violin, Codigo: 3, precio: 85000 \n"+
                    "🥁 Bateria, Codigo: 4, precio: 120000 \n"+
                    "🎤 Microfono, Codigo: 5, precio: 7500 \n"+
                    "🔌 Cable para amplificador, Codigo: 6, precio: 1500 \n"+
                    "🔈 Amplificador, Codigo: 7, precio: 40000 \n"+
                    "🪵 Base Guitarra, Codigo: 8, precio: 5000 \n"+
                    "🎸 Guitarra de Estudio, Codigo: 9, precio: 40000 \n"+
                    "🪘 Bombo, Codigo: 10, precio: 40000 \n" 

const descuentoEfectivo = 0.85

function buscarPorCode(code){
    return instrumentos.find((instrumento)=> instrumento.code === parseInt(code))
}

function filtrarPorEstilo(estilo){
    const instrumentosPorEstilo = instrumentos.filter((instrumento) => instrumento.estilo === estilo)
    return instrumentosPorEstilo
}

function comprar(){
    let codigo = prompt(mensajeInicio)
    
    if (isNaN(codigo)){
        alert("El codigo ingresado es incorrecto, intentá de nuevo")
        comprar()
    }

    let seleccion = buscarPorCode(codigo)
    if (seleccion === undefined){
         alert("El codigo ingresado es incorrecto!")
    }
    

    carrito.push(seleccion)
    confirm(seleccion.img + ' ' + seleccion.tipo + ' ha sido agregado al carrito de compras')

    let finalizar = confirm("¿Querés seguir comprando?")
    if (finalizar){
        comprar()
    }else{
        terminarCompra()
    }
}

function terminarCompra(){
    if(carrito.length == 0){
        alert("El carrito esta vacío!")
    }

    const irAPagar = new Compra(carrito)

    let metodoDePago = prompt("Seleccione el metodo de pago a emplear: \n"+
                               "1- Efectivo (descuento del 15%) \n"+
                               "2- Tarjeta (sin descuento)")

    if (parseInt(metodoDePago) !== 1 && parseInt(metodoDePago) !== 2){
        metodoDePago = prompt("Seleccione un metodo de pago válido: \n"+
                                  "1- Efectivo (descuento del 15%) \n"+
                                  "2- Tarjeta (sin descuento)")
    }

    if(metodoDePago == 1){
        alert("El total a pagar es : $" + irAPagar.subtotal()*descuentoEfectivo)
    }else{
        alert("El total a pagar es : $" + irAPagar.subtotal())
    }

    let confirmar = confirm("¿Confirmar el pago?")

    if (confirmar){
        alert("Tu pago ha sido confirmado, gracias por elegirnos!!")
        carrito.length = 0
    }else{
        alert("Tu pago ha sido denegado")
    }
}