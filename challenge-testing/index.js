class CarritoCompra {

    /*
    1.- constructor(): Inicializa el carrito como un array vacío.

    2.- agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

    3.- calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

    4.- aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
    */
    constructor() {
        this.products = [];
    }

    agregarProducto(name, price) {
        this.products.push({ name, price });
    }

    eliminarProducto(name) {
        this.products = this.products.filter(product => product.name !== name);
    }

    calcularTotal() {
        return this.products.reduce((acumulador, product) => acumulador + product.price, 0);
    }

    aplicarDescuento(discount) {
        return this.calcularTotal() - (this.calcularTotal() * discount / 100);
    }   

}

module.exports = CarritoCompra;