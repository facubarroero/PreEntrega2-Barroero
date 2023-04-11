class Compra{
    constructor(carrito){
        this.carrito = carrito
    } 
    subtotal(){
        if(this.carrito.length > 0){
            return this.carrito.reduce((acc, instrumento)=> acc + instrumento.precio, 0)
        }
    }
}