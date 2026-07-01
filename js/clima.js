const eventos = [

{
nome: "Sem evento",
bonus: 1,
tipo: "neutro"
},

{
nome: "Chuvas leves",
bonus: 1.10,
tipo: "positivo"
},

{
nome: "Chuvas intensas",
bonus: 0.85,
tipo: "negativo"
},

{
nome: "Seca",
bonus: 0.75,
tipo: "critico"
},

{
nome: "Frente fria",
bonus: 0.90,
tipo: "negativo"
},

{
nome: "Temperatura ideal",
bonus: 1.15,
tipo: "positivo"
},

{
nome: "Ondas de calor",
bonus: 0.80,
tipo: "critico"
}

];


function gerarEvento(){
return eventos[
Math.floor(Math.random() * eventos.length)
];
}