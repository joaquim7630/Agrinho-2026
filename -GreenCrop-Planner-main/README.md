# -GreenCrop-Planner

Seu projeto GreenCrop Planner virou um simulador agrícola educativo com foco em tomada de decisão rural, sustentabilidade e análise de cenários. A ideia central do sistema é permitir que o produtor (ou aluno) altere condições agrícolas e veja como essas escolhas impactam produção, risco e sustentabilidade.

🌱 GreenCrop Planner — Simulador Inteligente de Planejamento Agrícola
Objetivo do sistema

O GreenCrop Planner foi desenvolvido para simular cenários agrícolas e auxiliar no entendimento de como fatores ambientais e decisões de manejo influenciam o desempenho da produção.

O sistema não tenta prever safras reais, mas sim simular relações próximas da realidade agrícola para fins de análise, aprendizado e comparação de estratégias.

🏠 Tela principal — Planejamento

Esta é a área onde o usuário monta um cenário agrícola.

O usuário escolhe:

Tipo de solo
Cultura agrícola
Uso de insumos
Uso de agrotóxicos
Disponibilidade de água

Depois clica em Calcular Produção.

O sistema executa o modelo matemático e gera os resultados.

🌱 Variáveis agrícolas utilizadas
1. Solo

Representa características físicas e químicas.

Exemplos:

Argiloso
Arenoso
Humoso
(expansível para outros tipos)

Influência:

retenção de água
absorção de nutrientes
estabilidade produtiva
impacto ambiental

Exemplo:

Solo humoso:
→ maior retenção de nutrientes
→ maior potencial produtivo

Solo arenoso:
→ drenagem elevada
→ maior sensibilidade à seca

🌾 2. Cultura

Representa o cultivo principal.

Exemplos possíveis:

Milho
Soja
Feijão
Trigo
Café
Cana
Algodão
Arroz
Batata
Tomate
Mandioca
Laranja
Uva
Banana
Cacau
Girassol
Aveia
Sorgo
Cevada
Amendoim
etc.

Cada cultura possui:

produção base
exigência hídrica
resposta ao manejo
sensibilidade climática

Exemplo:

Milho:
→ alta resposta a insumos

Feijão:
→ maior sensibilidade hídrica

💧 3. Água disponível

Representa disponibilidade hídrica.

Faixa:

10% → 100%

Influência:

Água baixa:

reduz crescimento
aumenta risco

Água equilibrada:

aumenta produtividade

Água excessiva:

pode causar saturação do solo
🧪 4. Insumos

Representam investimento produtivo.

Exemplos:

Baixo
Médio
Alto
Tecnificado
Agricultura de Precisão
Manejo Intensivo

Influência:

↑ produção

porém:

↓ sustentabilidade

☠️ 5. Agrotóxicos

Representam controle de pragas.

Opções:

Nenhum
Controlado
Intenso

Influência:

Benefícios:

reduz efeito das pragas
aumenta estabilidade

Consequências:

reduz sustentabilidade
aumenta impacto ambiental

Exemplo interno:

Agrotóxico Intenso
↓

resistência às pragas ↑

produção ↑

sustentabilidade ↓
🌦️ Sistema climático (evento aleatório)

Arquivo:

clima.js

Simula eventos ambientais.

Exemplos:

Sem evento
Chuvas leves
Frente fria
Seca

Cada evento altera:

produção × bônus climático

Exemplo:

Seca:

produção × 0.75
🐛 Sistema de pragas

Arquivo:

pragas.js

Eventos possíveis:

Sem pragas
Pragas leves
Infestação moderada
Infestação severa

Impactam:

produtividade
sustentabilidade
risco

Interação existente:

mais agrotóxico
↓

menos efeito das pragas

Exemplo:

Infestação severa:

produção × 0.70
🧮 Motor de cálculo

Arquivo:

calculadora.js

Executa:

produção final
=
cultura
× solo
× água
× insumos
× agrotóxicos
× clima
× pragas

Também calcula:

Produção

Resultado final em toneladas.

Risco

Classificações:

Baixo
Médio
Alto

Considera:

clima
água
pragas
manejo
Sustentabilidade

Pontuação ambiental.

Avalia:

excesso de químicos
extremos hídricos
equilíbrio produtivo
Impacto no solo

Mede degradação potencial.

Considera:

tipo de solo
intensidade de manejo
🧠 Sistema de explicações inteligentes

Arquivo:

explicacao.js

Analisa:

produção
solo
cultura
água
pragas
insumos
agrotóxicos
sustentabilidade

E gera textos interpretativos.

Exemplo:

A produção foi reduzida devido à combinação de seca e infestação moderada.

O uso controlado de agrotóxicos reduziu parcialmente os danos.

Aumentar água para 60–80% poderia melhorar este cenário.

Também sugere melhorias.

🏆 Sistema de evolução do produtor

Arquivo:

niveis.js

Classificação baseada em:

produção
+
sustentabilidade
+
risco

Exemplos:

🌱 Agricultor Iniciante
🚜 Produtor Rural
🌾 Produtor Regional
🌿 Produtor Sustentável
🌎 Gestor Agrícola
🏅 Especialista Agrícola
🚀 Agro Forte
👑 Mestre do Agronegócio

📜 Histórico

Arquivo:

historico.js

Salva localmente:

cultura
solo
água
insumos
agrotóxicos
evento
produção
sustentabilidade
explicação
nível

Armazenamento:

localStorage

Permanece no navegador.

📄 Relatório

Arquivo:

relatorio.js

Consolida todas as simulações.

Permite comparar cenários anteriores.

🌐 APIs utilizadas

Atualmente o sistema usa:

OpenWeather (opcional)

Para clima real.

Exemplo:

Temperatura
Clima
Vento
Local

Uso:

api.openweathermap.org

Necessita:

API KEY

Você já configurou isso anteriormente.

🎯 Cenários que o sistema consegue simular

Exemplo 1:

Solo: Humoso
Cultura: Soja
Água: 70%
Insumos: Alto
Agrotóxico: Controlado
Clima: Chuvas leves
Praga: Nenhuma

Resultado:

Alta produtividade
Baixo risco

Exemplo 2:

Solo: Arenoso
Cultura: Feijão
Água: 20%
Insumos: Baixo
Agrotóxico: Nenhum
Seca
Infestação severa

Resultado:

Baixa produção
Alto risco
