//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal.

let texto = document.getElementById("pantalla");

for (let i = 1; i <= 500; i++) {
  if (i % 5 === 0) {
    texto.innerHTML += `<p class="mb-0">${i}</p>`;
    texto.innerHTML += `<p>_ _ _ _ _ _ _ _ _ _ _</p>`;
  } else {
    texto.innerHTML += `<p class="mb-1">${i}</p>`;
  }
}
