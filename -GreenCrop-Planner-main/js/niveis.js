function calcularNivel(
producao,
sustentabilidade,
risco
){

let score = 0;


// produção
score += Math.min(
50,
Math.floor(producao/3)
);


// sustentabilidade
score +=
sustentabilidade/2;


// risco
if(risco==="Baixo")
score+=15;

else if(risco==="Médio")
score+=5;

else
score-=10;



if(score<30)
return "🌱  1 - Agricultor Iniciante";

if(score<50)
return "🚜 2 - Produtor Rural";

if(score<70)
return "🌾 3 - Produtor Regional";

if(score<90)
return "🌿 4 - Produtor Sustentável";

if(score<110)
return "🌎 5 - Gestor Agrícola";

if(score<130)
return "🏅 6 - Especialista Agrícola";

if(score<150)
return "🚀 7 - Agro Forte";

return "👑 8 - Mestre do Agronegócio";

}