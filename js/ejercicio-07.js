//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)

const numero = parseInt(prompt("Ingresa un numero no mayor a 50"));
const texto = document.getElementById("pantalla");

if (numero <= 50 && numero>0) {
  for (let i = numero; i > 0; i--) {
    texto.innerHTML += `<p id="${i}"></p>`;
    const decrece = document.getElementById(`${i}`);
    for (let fila = 1; fila <= i; fila++) {
      decrece.innerHTML += `${i}`;
    }
  }
} else {
  alert("dato incorrecto");
}
