const input = document.getElementById('numero');
const btnEl = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

btnEl.addEventListener('click', () => {
    const numero = parseInt(input.value);
    if (isNaN(numero) || numero < 0) {
        resultado.textContent = "Por favor ingresa un número válido.";
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    resultado.textContent = `El factorial de ${numero} es: ${factorial}`;
});

