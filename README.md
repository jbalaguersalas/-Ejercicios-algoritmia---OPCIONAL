# Ejercicios de algoritmia (opcional)

Cuatro ejercicios opcionales de lógica del bootcamp Full Stack de The Bridge. Cada uno va en su propio archivo, de `ejercicio1.js` a `ejercicio4.js`.

## Qué he resuelto

1. `tablaMultiplicar(numero)`: devuelve un array con la tabla de multiplicar del número, del 1 al 10. Con el 6 sale `[6, 12, 18, ..., 60]`.
2. `ordenarNumeros()`: te pide números con `prompt` hasta que escribes un 0 y luego los devuelve ordenados de menor a mayor.
3. Año bisiesto: te pide un año y te dice si es bisiesto. Un año es bisiesto si se divide entre 4, salvo los que se dividen entre 100 y no entre 400.
4. `contarCaracteres(array, letra)`: cuenta cuántas veces aparece una letra en las palabras de un array. Con la lista de prueba cuento las "o" y las "a".

## Cómo ejecutarlo

Abre `index.html` en el navegador y abre la consola con F12. Los ejercicios 2 y 3 usan `prompt`, así que el navegador te pedirá los datos en ventanas emergentes antes de enseñar los resultados.

## Qué he aprendido

- El orden de los `if` importa. En el bisiesto compruebo primero `% 400`, luego `% 100` y al final `% 4`. Si empiezo por el 4, el año 1900 saldría bisiesto y no lo es.
- Un bucle `while` me sirve cuando no sé cuántas vueltas va a dar. En el ejercicio 2 sigo pidiendo números hasta que llega un 0.
- `prompt` devuelve texto. Uso `parseInt` para convertirlo en número antes de compararlo u ordenarlo.
