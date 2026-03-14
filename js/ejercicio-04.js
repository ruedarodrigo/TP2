//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let dato = prompt("ingresa un numero");
let suma = 0;

while (dato !== null) {
  if (isNaN(dato)) {
    alert("lo que ingresaste no es un numero!");
  } else {
    suma = suma + Number(dato);
  }
  dato = prompt("ingresa otro numero");
  if (dato === null) {
    alert("la suma da " + suma);
  }
}
