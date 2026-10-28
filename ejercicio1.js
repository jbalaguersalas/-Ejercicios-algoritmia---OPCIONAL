// Ejercicio 1
function tablaMultiplicar(numero) {
  const hojablanco = [];
  for (let i = 1; i <= 10; i++) {
    hojablanco.push(numero * i);
  }
  return hojablanco
}
console.log(tablaMultiplicar(6));