//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let texto = document.getElementById("pantalla");
let concatenada = "";
let i = 0;

do {
  const cadena = prompt("escriba una cadena de texto");
  if (cadena === null) {
    break;
  }
  if (i > 0) {
    concatenada += ` - ${cadena}`;
  } else {
    concatenada += cadena;
  }
  i++;
} while (confirm("¿Quiere ingresar otra frase?"));
console.log(concatenada);

texto.innerHTML = `<p>${concatenada}</p>`;
