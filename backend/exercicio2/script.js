const form = document.getElementById('imc-form');
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = calcularIMC(peso, altura);
    const classificacao = getClassificacao(imc);

    resultadoDiv.textContent = `Seu IMC é: ${imc.toFixed(2)} (${classificacao})`;
});

function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
}

function getClassificacao(imc) {
    if (imc < 18.5) {
        return 'Magreza';
    } else if (imc < 25) {
        return 'Normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade grau 1';
    } else if (imc < 40) {
        return 'Obesidade grau 2';
    } else {
        return 'Obesidade grau 3';
    }
}