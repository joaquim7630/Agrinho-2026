function calcular(
solo,
cultura,
agua,
insumos,
agrotoxicos,
eventoClima,
eventoPraga
){

// 🌾 BASE MAIS ESTÁVEL
let base = fatores.cultura[cultura];


// 🌱 SOLO
base *= fatores.solo[solo];


// 💧 ÁGUA
let fatorAgua = 1;

if(agua < 30) fatorAgua = 0.7;
else if(agua < 50) fatorAgua = 0.85;
else if(agua <= 80) fatorAgua = 1.05;
else fatorAgua = 0.9;

base *= fatorAgua;


// 🧪 INSUMOS
if(insumos === "Baixo") base *= 0.95;
if(insumos === "Médio") base *= 1.05;
if(insumos === "Alto") base *= 1.12;


// ☠️ AGROTÓXICOS (AGORA ÚNICO CONTROLE DE PRAGAS)
let controlePragas = 1;

if(agrotoxicos === "Nenhum"){
base *= 0.95;
controlePragas = 0.85;
}
else if(agrotoxicos === "Controlado"){
base *= 1.05;
controlePragas = 1.0;
}
else if(agrotoxicos === "Intenso"){
base *= 1.08;
controlePragas = 1.15;
}


// 🌦️ CLIMA
base *= eventoClima;


// 🐛 PRAGAS (AGORA DEPENDEM SÓ DO AGROTÓXICO)
base *= (eventoPraga * controlePragas);


// 📊 PRODUÇÃO
const producao = Math.round(base);


// ⚠️ RISCO (mais coerente agora)
let risco = "Baixo";

if(eventoPraga < 0.9 || agua < 30 || eventoClima < 0.9){
risco = "Alto";
}
else if(producao < 80){
risco = "Médio";
}


// 🌍 SUSTENTABILIDADE
let sustentabilidade = 100;

if(agua < 30) sustentabilidade -= 20;
if(agua > 85) sustentabilidade -= 10;

if(insumos === "Alto") sustentabilidade -= 15;
if(agrotoxicos === "Intenso") sustentabilidade -= 20;

if(eventoPraga < 1) sustentabilidade -= 10;

sustentabilidade = Math.max(0, sustentabilidade);


// 🌱 IMPACTO SOLO
let impactoSolo =
100 * fatores.impactoSolo[solo];

impactoSolo = Math.min(100, impactoSolo);


// 📦 retorno
return {
producao,
risco,
sustentabilidade,
impactoSolo
};

}