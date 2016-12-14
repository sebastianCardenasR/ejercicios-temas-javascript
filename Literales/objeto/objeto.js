var Ventas = "Toyota";

function TiposCarro(nombre) {
  if (nombre== "Honda") {
    return nombre;
  } else {
    return "Lo siento, nosotros no vendemos " + nombre+ ".";
  }
}

var carro = { miCarro: "Saturn", getCarro: TiposCarro("Honda"), especial: Ventas};

console.log(carro.miCarro);  // Saturn
console.log(carro.getCarro); // Honda
console.log(carro.especial); // Toyota