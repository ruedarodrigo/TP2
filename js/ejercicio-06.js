//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

const texto = document.getElementById("pantalla");

for (let indice = 1; indice <= 30; indice++) {
  texto.innerHTML += `<p id="${indice}"></p>`;
  const repite = document.getElementById(`${indice}`);

  for (let fila = 1; fila <= indice; fila++) {
    repite.innerHTML += `${indice}`;
  }
}
