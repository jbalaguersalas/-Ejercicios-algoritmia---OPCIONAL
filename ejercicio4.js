// Ejercicio 4

let data = [
  "yoda",
  "best",
  "has",
  "tortilla",
  "cAfe",
  "barrita tomate",
  "zumo",
];

function contarCaracteres(array, letra) {
  let total = 0;

  for (let palabra of data) {
    for (let caracter of palabra) {
      if (caracter === letra) total++;
    }
  }
  return total
}
console.log(contarCaracteres(data, "o"));
console.log(contarCaracteres(data, "a"));