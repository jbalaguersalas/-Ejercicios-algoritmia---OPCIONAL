// Ejercicio 2
function ordenarNumeros() {
  const hojablanco = [];
  let numero = parseInt(prompt("Mete un número (0) para que termine)"))
    while (numero !== 0) {
        hojablanco.push(numero);
        numero = parseInt(prompt("Mete otro número(0 para terminar)"))
    }
    hojablanco.sort((a,b) => a - b);
    return hojablanco;
}
console.log(ordenarNumeros());