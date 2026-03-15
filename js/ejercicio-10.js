//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt("Ingrese el numero de filas"));
const columnas = parseInt(prompt("Ingrese el numero de columnas"));

let producto = filas * columnas;
let texto = document.getElementById("pantalla");

for (indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  texto.innerHTML += `<tr id="${indiceFilas}"></tr>`;
  let col = document.getElementById(`${indiceFilas}`);
  for (indiceCol = 1; indiceCol <= columnas; indiceCol++) {
    col.innerHTML += `<td>${producto}</td>`;
    producto--;
  }
}
