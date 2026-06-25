const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

const canvas = document.getElementById("emissionChart");

if (canvas) {
    new Chart(canvas, {
        type: "line",
        data: {
            labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
            datasets: [{
                label: "Emissoes CO2",
                data: [32, 34, 30, 35, 37, 39],
                borderColor: "green",
                borderWidth: 3
            }]
        }
    });
}

function calcularImpacto() {
    const km = Number(document.getElementById("km").value);
    const co2 = km * 0.21 * 52;

    document.getElementById("resultado").innerHTML =
        "Sua emissao anual estimada e <b>" +
        co2.toFixed(2) +
        " kg de CO2</b>";
}

const voiceBtn = document.getElementById("voiceBtn");

if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
        const fala = new SpeechSynthesisUtterance(
            "Dioxido de carbono atual 420 partes por milhao"
        );

        fala.lang = "pt-BR";
        speechSynthesis.speak(fala);
    });
}