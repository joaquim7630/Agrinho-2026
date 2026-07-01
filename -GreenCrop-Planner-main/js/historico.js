function salvar(obj){

let lista =
JSON.parse(localStorage.getItem("historico")) || [];

lista.unshift(obj);

localStorage.setItem(
"historico",
JSON.stringify(lista)
);

render();

}


function render(){

const div =
document.getElementById("historico");

let lista =
JSON.parse(localStorage.getItem("historico")) || [];

if(lista.length === 0){
div.innerHTML = "Nenhuma decisão ainda";
return;
}

div.innerHTML =
lista.map(item => {

return `
<div style="padding:10px;margin:10px;border:1px solid #ccc;border-radius:8px">

<p>🌾 Cultura: ${item.cultura}</p>
<p>🌱 Solo: ${item.solo}</p>
<p>💧 Água: ${item.agua}%</p>
<p>🧪 Insumos: ${item.insumos}</p>
<p>☠️ Agrotóxicos: ${item.agrotoxicos}</p>

<hr>

<p>📊 Produção: ${item.producao} toneladas</p>
<p>⚠️ Risco: ${item.risco}</p>
<p>🌍 Sustentabilidade: ${item.sustentabilidade}%</p>

<hr>

<p>🧠 Explicação:</p>
<p>${item.explicacao || "Sem explicação registrada"}</p>

<hr>

<p>🌦️ Evento: ${item.evento}</p>

</div>
`;
}).join("");

}


render();

document.getElementById("limparHistorico").addEventListener("click", () => {

if(!confirm("Tem certeza que deseja apagar todo o histórico?")) return;

localStorage.removeItem("historico");

render(); // atualiza tela

});