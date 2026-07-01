const pragasEventos = [

{
nome: "Sem pragas",
bonus: 1.1,
tipo: "positivo"
},

{
nome: "Pragas leves",
bonus: 0.95,
tipo: "leve"
},

{
nome: "Infestação moderada",
bonus: 0.85,
tipo: "negativo"
},

{
nome: "Infestação severa",
bonus: 0.70,
tipo: "critico"
}

];


function gerarPraga() {
return pragasEventos[
Math.floor(Math.random() * pragasEventos.length)
];
}