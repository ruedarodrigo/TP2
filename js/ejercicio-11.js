//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

const nombre1 = prompt("Ingresa un nombre");
const edad1 = parseInt(prompt(`Ingresa la edad de ${nombre1}`));

const nombre2 = prompt("Ingresa un nombre");
const edad2 = parseInt(prompt(`Ingresa la edad de ${nombre2}`));

const nombre3 = prompt("Ingresa un nombre");
const edad3 = parseInt(prompt(`Ingresa la edad de ${nombre3}`));

const mayor = Math.max(edad1, edad2, edad3);
console.log(mayor);

switch (mayor) {
  case edad1:
    alert(`La persona mas grande se llama: ${nombre1}`);
    break;
  case edad2:
    alert(`La persona mas grande se llama: ${nombre2}`);
    break;
  case edad3:
    alert(`La persona mas grande se llama: ${nombre3}`);
    break;
  default:
    alert("Datos incorrectos");
    break;
}
