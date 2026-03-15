//15- Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt('Ingrese un texto y te diremos cuantas vocales tiene')
const caracteres = texto.length

let contador = 0

for(i=0; i<caracteres; i++){
    const letra = texto.charAt(i)
    switch (letra) {
        case 'a':
            contador++
            break;
        case 'e':
            contador++
            break;
        case 'i':
            contador++
            break;
        case 'o':
            contador++
            break;
        case 'u':
            contador++
            break;
        default:
            break;
    }
}
alert(`El texto tiene ${contador} vocales`)