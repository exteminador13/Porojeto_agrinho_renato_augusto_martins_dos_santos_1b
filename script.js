// MODO ESCURO

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// GRaFICO

const ctx = document
.getElementById("emissionChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023"
        ],
        datasets: [{
            label: "Emissoes CO",
            data: [32,34,30,35,37,39],
            borderColor: "green",
            borderWidth: 3,
            fill: false
        }]
    }
});

// SIMULADOR

function calcularImpacto(){

    let km =
    document.getElementById("km").value;

    let co2 = km * 0.21 * 52;

    document.getElementById("resultado")
    .innerHTML = `
        Sua emissao anual estimada e
        <b>${co2.toFixed(2)} kg de CO</b>.
        <br><br>
        Se reduzir 30% dos deslocamentos,
        economizara
        <b>${(co2*0.3).toFixed(2)} kg</b>
        por ano.
    `;
}

// LEITURA DE VOZ

document
.getElementById("voiceBtn")
.addEventListener("click", () => {

    const texto = `
    Dioxido de carbono atual:
    420 partes por milhao.
    Temperatura global:
    1 virgula 2 graus Celsius.
    Desmatamento:
    15 mil quilometros quadrados.
    `;

    const fala =
    new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);
});