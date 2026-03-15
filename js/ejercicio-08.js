//8- Crea script para generar la pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let num = prompt('Ingresa un numero no mayor a 50')

while (isNaN(num) || num < 0 || num > 50) {
  num = prompt("Dato incorrecto. Ingresa un numero no mayor a 50 y mayor a 0.");
}

const texto = document.getElementById("pantalla");
const numero = parseInt(num)

for(let filas=1; filas<=numero; filas++){
    texto.innerHTML += `<p id="${filas}"></p>`
    const contenido = document.getElementById(`${filas}`)

    for(let col=1; col<=filas; col++){
        contenido.innerHTML += `${col}`
    }
}