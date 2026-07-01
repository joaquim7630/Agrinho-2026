const dados =
JSON.parse(localStorage.getItem("historico")) || [];

relatorio.innerHTML = dados.length ? dados.map(x => {

return `
<div style="padding:10px;margin:10px;border:1px solid #ccc;border-radius:8px">

<h3>🌱 Cultura: ${x.cultura}</h3>

<p>🌱 Solo: ${x.solo}</p>
<p>💧 Água: ${x.agua}%</p>
<p>🧪 Insumos: ${x.insumos}</p>
<p>☠️ Agrotóxicos: ${x.agrotoxicos}</p>

<hr>

<p>📊 Produção: ${x.producao} toneladas</p>
<p>⚠️ Risco: ${x.risco}</p>
<p>🌍 Sustentabilidade: ${x.sustentabilidade}%</p>

<hr>

<p>🌦️ Evento: ${x.evento}</p>

<hr>

<p>🧠 Explicação:</p>
<p>${x.explicacao}</p>

</div>
`;

}).join("")
:
"Sem dados";