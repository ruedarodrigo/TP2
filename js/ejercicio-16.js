//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt('Ingrese un texto y se lo devolveremos al reves')
const caracteres = texto.length - 1

let reves = ""

for(i=caracteres; i>=0; i--){
    reves += texto.charAt(i)
}

alert(reves)