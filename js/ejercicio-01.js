//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt('Por favor ingrese su edad'))

while(isNaN(edad) || edad <= 0){
    edad = parseInt(prompt('dato incorrecto, por favor ingrese una edad valida'))
}

if(edad >= 18){
    alert('Felicitaciones! Ya puedes conducir amigo :)')
} else {
    alert(`Sos menor de edad. Te faltan ${18 - edad} años para poder conducir`)
}