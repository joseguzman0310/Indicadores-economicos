const apiUrl = 'https://mindicador.cl/api'; // Llamada a la API de indicadores
const dollarValueElement = document.getElementById('dollar-value');
const ufValueElement = document.getElementById('uf-value');

//Funcion datos indicadores Dolar y UF
async function fetchExchangeRates() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const dollar = data.dolar.valor;
        const uf = data.uf.valor;

        dollarValueElement.textContent =`$${dollar.toFixed(2)}`;
        ufValueElement.textContent = `$${uf.toFixed(2)}`;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
