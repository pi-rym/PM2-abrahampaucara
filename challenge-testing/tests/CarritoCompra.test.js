const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  it("Crear instancia de CarritoCompra", () => {
    const carrito = new CarritoCompra();
    expect(carrito).toBeInstanceOf(CarritoCompra);
  });

  it("Añadir producto al Carrito de compra", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto("product1", 100);
    expect(carrito.products).toEqual([{ name: "product1", price: 100 }]);
  });

  it("Eliminar producto de carrito de compra", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto("product1", 100);
    carrito.agregarProducto("product2", 200);
    carrito.eliminarProducto("product1");
    expect(carrito.products).toEqual([{ name: "product2", price: 200 }]);
  });

  it("Precio total del carrito", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto("product1", 100);
    carrito.agregarProducto("product2", 200);
    expect(carrito.calcularTotal()).toBe(300);
  });

  it("Calculando el carrito con descuentos", () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto("product1", 100);
    carrito.agregarProducto("product2", 200);
    expect(carrito.aplicarDescuento(20)).toBe(240);
  });
});
