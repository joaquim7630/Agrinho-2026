function gerarExplicacao(dados){

let {
solo,
cultura,
agua,
insumos,
agrotoxicos,
eventoClima,
eventoPraga,
producao,
risco,
sustentabilidade
} = dados;

let txt = "";


// =====================================
// 🌾 1. PRODUÇÃO (ESCALA UNIVERSAL)
// =====================================
let nivelProd = "";

if(producao > 90) nivelProd = "excelente";
else if(producao > 75) nivelProd = "alta";
else if(producao > 55) nivelProd = "moderada";
else if(producao > 35) nivelProd = "baixa";
else nivelProd = "critica";

txt += `🌾 A produção foi ${nivelProd}, refletindo a interação entre solo, clima e manejo agrícola. `;


// =====================================
// 🌱 2. SOLO (QUALQUER COMBINAÇÃO)
// =====================================
txt += `🌱 O solo ${solo} influenciou o desenvolvimento da cultura de ${cultura}. `;


// =====================================
// 💧 3. ÁGUA (REGRAS UNIVERSAIS)
// =====================================
if(agua < 30){
txt += "💧 Estresse hídrico severo afetou todas as fases da cultura. 👉 Irrigação é essencial neste cenário. ";
}
else if(agua < 50){
txt += "💧 Baixa disponibilidade hídrica limitou o crescimento das plantas. ";
}
else if(agua <= 80){
txt += "💧 Condição hídrica adequada favoreceu o desenvolvimento equilibrado. ";
}
else{
txt += "💧 Excesso de água pode ter reduzido a oxigenação do solo e prejudicado raízes. ";
}


// =====================================
// 🧪 4. INSUMOS (QUALQUER NÍVEL)
// =====================================
let impactoInsumos =
insumos === "Baixo" ? "limitou a produtividade"
: insumos === "Médio" ? "equilibrou produção e sustentabilidade"
: insumos === "Alto" ? "aumentou produtividade com maior impacto ambiental"
: "maximizou eficiência produtiva";

txt += `🧪 O nível de insumos ${impactoInsumos}. `;


// =====================================
// ☠️ 5. AGROTÓXICOS (QUALQUER CENÁRIO)
// =====================================
let impactoAgro =
agrotoxicos === "Nenhum" ? "aumentou risco de pragas"
: agrotoxicos === "Controlado" ? "equilibrou controle de pragas e sustentabilidade"
: "reduziu pragas, mas aumentou impacto ambiental";

txt += `☠️ O uso de agrotóxicos ${impactoAgro}. `;


// =====================================
// 🌦️ 6. CLIMA (DINÂMICO)
// =====================================
txt += `🌦️ Evento climático: ${eventoClima.nome}, com impacto direto no desenvolvimento da lavoura. `;


// =====================================
// 🐛 7. PRAGAS (DINÂMICO + RELAÇÃO)
// =====================================
if(eventoPraga.nome === "Sem pragas"){
txt += "🐛 Ausência de pragas manteve estabilidade produtiva. ";
}
else{
txt += `🐛 ${eventoPraga.nome} reduziu parte da produtividade esperada. `;
}


// =====================================
// 🔗 8. INTERAÇÃO REAL (AGUA + SOLO)
// =====================================
if(solo === "Arenoso" && agua < 50){
txt += "🌱 Solo arenoso com baixa retenção hídrica agravou a falta de água. ";
}

if(solo === "Argiloso" && agua > 80){
txt += "🌱 Solo argiloso com excesso de água pode ter causado encharcamento. ";
}


// =====================================
// 🔗 9. INTERAÇÃO PRAGAS + AGRO
// =====================================
if(eventoPraga.nome !== "Sem pragas" && agrotoxicos === "Nenhum"){
txt += "🐛 Falta de controle químico favoreceu o avanço de pragas. ";
}

if(eventoPraga.nome === "Infestação severa" && agrotoxicos === "Intenso"){
txt += "🐛 Mesmo com defensivos intensos, houve resistência de pragas. ";
}


// =====================================
// ⚠️ 10. RISCO (UNIVERSAL)
// =====================================
txt += `⚠️ O risco agrícola foi classificado como ${risco}, baseado na combinação de clima, solo e manejo. `;


// =====================================
// 🌍 11. SUSTENTABILIDADE (DINÂMICA)
// =====================================
if(sustentabilidade > 80){
txt += "🌍 Sistema sustentável com baixo impacto ambiental. ";
}
else if(sustentabilidade > 60){
txt += "🌍 Sistema moderadamente sustentável com equilíbrio produtivo. ";
}
else{
txt += "🌍 Sistema com alto impacto ambiental, exigindo ajustes no manejo. ";
}


// =====================================
// 🌱 FINAL (INTELIGENTE)
// =====================================
txt += "🌱 Recomenda-se ajuste fino em irrigação, manejo de solo e controle de pragas para otimização da produtividade.";

return txt;
}