const WEATHER = "e026ba22e131634165024ccdb435fadb";

const map =
document.getElementById("map");

const endereco =
document.getElementById("endereco");

const cidade =
document.getElementById("cidade");

const temp =
document.getElementById("temp");

const clima =
document.getElementById("clima");

const vento =
document.getElementById("vento");

const botaoEndereco =
document.getElementById(
"buscarEndereco"
);

const botaoLocal =
document.getElementById(
"usarLocalizacao"
);



function mostrarMapa(
lat,
lng
){

map.innerHTML =

`
<iframe
width="100%"
height="100%"
style="border:0"
loading="lazy"
src="https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed">
</iframe>
`;

carregarClima(
lat,
lng
);

}



async function carregarClima(
lat,
lng
){

try{

cidade.textContent =
"Carregando...";

temp.textContent =
"--";

clima.textContent =
"--";

vento.textContent =
"--";


const resposta =

await fetch(

`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER}&units=metric&lang=pt_br`

);


const dados =

await resposta.json();


if(
dados.cod !== 200
){

throw new Error();

}


cidade.textContent =
dados.name;

temp.textContent =
dados.main.temp +
" °C";

clima.textContent =
dados.weather[0]
.description;

vento.textContent =
dados.wind.speed +
" m/s";

}

catch(error){

console.log(error);

cidade.textContent =
"Não disponível";

temp.textContent =
"API";

clima.textContent =
"Verifique chave";

vento.textContent =
"Erro";

}

}



async function buscarEndereco(){

const texto =

endereco.value
.trim();


if(!texto){

alert(
"Digite um endereço"
);

return;

}


try{

const r =

await fetch(

`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(texto)}`

);

const dados =
await r.json();


if(
!dados.length
){

alert(
"Endereço não encontrado"
);

return;

}


mostrarMapa(

dados[0].lat,

dados[0].lon

);

}

catch{

alert(
"Erro ao buscar endereço"
);

}

}



function usarLocalizacao(){

navigator
.geolocation
.getCurrentPosition(

(pos)=>{

mostrarMapa(

pos.coords.latitude,

pos.coords.longitude

);

}

);

}



botaoEndereco
.addEventListener(
"click",
buscarEndereco
);

botaoLocal
.addEventListener(
"click",
usarLocalizacao
);