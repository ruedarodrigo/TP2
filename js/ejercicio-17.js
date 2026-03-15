//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const texto = prompt("Ingresa un texto").toLowerCase();
let pantalla = document.getElementById("pantalla");

const caracteres = texto.length;
let i = 0;

 while (
  texto.charAt(i) !== "a" &&
  texto.charAt(i) !== "e" &&
  texto.charAt(i) !== "i" &&
  texto.charAt(i) !== "o" &&
  texto.charAt(i) !== "u" &&
  i < caracteres
){
    i++
}
const vocal = texto.charAt(i);

pantalla.innerHTML += `<p>En el texto: ${texto}</p>`;
pantalla.innerHTML += `<p>La vocal ${vocal} esta en la posicion ${i} </p>`;
