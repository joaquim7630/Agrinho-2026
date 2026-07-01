const agua =
document.getElementById("agua");

const valorAgua =
document.getElementById("valorAgua");



agua.addEventListener("input",()=>{

valorAgua.textContent =
agua.value + "%";

});



// 🔧 SELECT DINÂMICO
function preencherSelect(
id,
fonte
){

const select =
document.getElementById(id);

select.innerHTML="";

Object.keys(fonte).forEach(item=>{

const option =
document.createElement("option");

option.value =
item;

option.textContent =
item;

select.appendChild(option);

});

}



// 🚀 INICIALIZAÇÃO
window.addEventListener(

"DOMContentLoaded",

()=>{

preencherSelect(
"solo",
fatores.solo
);

preencherSelect(
"cultura",
fatores.cultura
);

preencherSelect(
"insumos",
fatores.insumos
);

preencherSelect(
"agrotoxicos",
fatores.agrotoxicos
);


// botão limpar histórico
const limpar =

document.getElementById(
"limparHistorico"
);

if(limpar){

limpar.addEventListener(

"click",

()=>{

if(
!confirm(
"Deseja apagar o histórico?"
)
)
return;

localStorage.removeItem(
"historico"
);

render();

}

);

}

}

);




// 🧮 BOTÃO CALCULAR
document

.getElementById(
"calcular"
)

.addEventListener(

"click",

()=>{

const eventoClima =
gerarEvento();

const eventoPraga =
gerarPraga();



// cálculo
const r = calcular(

solo.value,

cultura.value,

agua.value,

insumos.value,

agrotoxicos.value,

eventoClima.bonus,

eventoPraga.bonus

);



// 🧠 explicação
const explicacaoTexto =

gerarExplicacao({

solo:
solo.value,

cultura:
cultura.value,

agua:
agua.value,

insumos:
insumos.value,

agrotoxicos:
agrotoxicos.value,

eventoClima,

eventoPraga,

producao:
r.producao,

risco:
r.risco,

sustentabilidade:
r.sustentabilidade

});



// 📊 RESULTADOS
document
.getElementById(
"producao"
)
.textContent =

r.producao
+
" toneladas";


document
.getElementById(
"sust"
)
.textContent =

r.sustentabilidade
+
"%";


document
.getElementById(
"risco"
)
.textContent =

r.risco;



document
.getElementById(
"evento"
)
.textContent =

eventoClima.nome
+
" | "
+
eventoPraga.nome;



document
.getElementById(
"explicacao"
)
.textContent =

explicacaoTexto;



// 🏆 NOVO NÍVEL
const nivelCalculado =

calcularNivel(
r.producao,
r.sustentabilidade,
r.risco
);

console.log(
"Nível:",
nivelCalculado
);

document
.getElementById("nivel")
.innerHTML =
nivelCalculado;




// 📜 histórico
salvar({

cultura:
cultura.value,

solo:
solo.value,

agua:
agua.value,

insumos:
insumos.value,

agrotoxicos:
agrotoxicos.value,

producao:
r.producao,

risco:
r.risco,

sustentabilidade:
r.sustentabilidade,

evento:
eventoClima.nome
+
" | "
+
eventoPraga.nome,

explicacao:
explicacaoTexto,


nivel:

calcularNivel(

r.producao,

r.sustentabilidade,

r.risco

)

});

}

);