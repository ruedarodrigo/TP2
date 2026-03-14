//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let dni = prompt("Ingresa un numero entre 0 y 99999999"); // no convierto a numero para que si toca cancelar me devuelva null.
console.log(dni);

while (dni !== null) {
  if (!isNaN(dni)) {
    const numero = parseInt(dni);
    const resto = numero % 23;
    const cadena = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (0 <= resto <= 23) {
      const letra = cadena.charAt(resto);
      alert(`Al numero de DNI: ${numero}. Le corresponde la letra ${letra}`);
    } else {
      alert(
        "Dato incorrecto. El numero debe estar comprendido entre 0 y 99.999.999",
      );
    }
  } else {
    alert("Lo que ingresaste no es un numero!");
  }
  dni = prompt("Ingresa un numero entre 0 y 99999999");
}

alert('Gracias por elegirnos')


