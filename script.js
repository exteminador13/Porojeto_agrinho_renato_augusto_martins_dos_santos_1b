function abrir(id) {
  document.querySelectorAll(".secao").forEach(s => s.classList.remove("ativo"));
  document.getElementById(id).classList.add("ativo");
}

/* 📊 DADOS DE 2026 ATÉ MAIO */
const dados = [
  { mes: "Jan 2026", roupas: 120, co2: 320 },
  { mes: "Fev 2026", roupas: 140, co2: 370 },
  { mes: "Mar 2026", roupas: 160, co2: 420 },
  { mes: "Abr 2026", roupas: 180, co2: 480 },
  { mes: "Mai 2026", roupas: 200, co2: 530 }
];

/* mostrar lista */
const lista = document.getElementById("lista");
let totalCO2 = 0;

dados.forEach(d => {
  let item = document.createElement("li");
  item.innerText = `${d.mes} → ${d.roupas} roupas reutilizadas | ${d.co2} kg CO₂ evitado`;
  lista.appendChild(item);

  totalCO2 += d.co2;
});

document.getElementById("total").innerText = totalCO2 + " kg de CO₂ evitado";

/* 🧪 simulador */
function simular() {
  let roupas = Number(document.getElementById("roupas").value);

  if (!roupas) return;

  let impacto = roupas * 2.7;

  document.getElementById("resultado").innerText =
    `Você pode evitar ~${impacto.toFixed(1)} kg de CO₂ nesse mês 🌍`;
}