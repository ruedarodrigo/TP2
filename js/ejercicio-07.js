//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)

let num = prompt("Ingresa un numero no mayor a 50");
const texto = document.getElementById("pantalla");

while (isNaN(num) || num < 0 || num > 50) {
  num = prompt("Dato incorrecto. Ingresa un numero no mayor a 50 y mayor a 0.");
}

if (num !== null) {
  const numero = parseInt(num);
  for (let i = numero; i > 0; i--) {
    texto.innerHTML += `<p id="${i}"></p>`;
    const decrece = document.getElementById(`${i}`);
    for (let fila = 1; fila <= i; fila++) {
      decrece.innerHTML += `${i}`;
    }
  }
}
