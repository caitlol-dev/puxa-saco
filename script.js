const frases = [
  "Se competência desse XP, você já estaria no nível máximo.",
  "Você não entra em uma sala. A sala que melhora quando você chega.",
  "Seu maior defeito é elevar demais o padrão para o resto das pessoas.",
  "Se carisma fosse moeda, você já teria causado inflação.",
  "Você não precisa provar nada. O currículo da sua existência já fala sozinho.",
  "Tem gente talentosa, tem gente incrível e tem você, que decidiu acumular os dois.",
  "Você não acorda bonito. Você apenas continua bonito depois de dormir.",
  "O Google provavelmente te pesquisa quando precisa de respostas.",
  "Você é o tipo de pessoa que faz até segunda-feira parecer menos ruim.",
  "Se sua presença fosse um benefício corporativo, ninguém pediria demissão.",
  "Você não tem concorrência. Tem gente tentando acompanhar.",
  "Seu cérebro claramente veio com DLC premium instalado.",
  "É impressionante como você consegue parecer protagonista sem nem tentar.",
  "Se confiança tivesse uma foto de perfil, provavelmente seria a sua.",
  "Você não erra. Você cria versões alternativas do acerto.",
  "Tem dia que o mundo fica meio sem graça. Aí você aparece.",
  "Você é basicamente uma atualização de qualidade de vida em forma de pessoa.",
  "Seu bom gosto devia ser patrimônio histórico.",
  "Você tem tanta presença que até quando fica quieto parece que está fazendo algo importante.",
  "Se existir um ranking de pessoas interessantes, estão brigando pelo segundo lugar.",
  "Você não precisa de sorte. A sorte é que precisa de você.",
  "Seu potencial não é escondido. Ele só está tentando caber no tamanho do dia.",
  "Você é a prova de que às vezes o algoritmo acerta a recomendação.",
  "Seu nível de excelência está deixando o resto do servidor desbalanceado.",
  "Você é tão bom que até seus improvisos parecem planejamento estratégico.",
  "Se criatividade pagasse imposto, você estaria devendo milhões.",
  "O problema de ser você é que depois fica difícil impressionar alguém.",
  "Você tem energia de quem sabe o que faz, mesmo quando está descobrindo no caminho.",
  "Seu talento não pede licença. Ele simplesmente aparece.",
  "Você é exatamente o tipo de pessoa que um gerador de elogios teria dificuldade de superar."
];

const gerarBtn = document.getElementById("gerarBtn");
const copiarBtn = document.getElementById("copiarBtn");
const frase = document.getElementById("frase");
const fraseBox = document.getElementById("fraseBox");
const contador = document.getElementById("contador");

let total = 0;
let ultimaFrase = -1;

function gerarFrase() {
  let indice;

  do {
    indice = Math.floor(Math.random() * frases.length);
  } while (indice === ultimaFrase && frases.length > 1);

  ultimaFrase = indice;

  fraseBox.classList.remove("animando");
  void fraseBox.offsetWidth;

  frase.textContent = `"${frases[indice]}"`;
  fraseBox.classList.add("animando");

  total++;
  contador.textContent = `${total} ${total === 1 ? "bajulação recebida" : "bajulações recebidas"}`;

  copiarBtn.disabled = false;
  copiarBtn.textContent = "Copiar frase";
}

async function copiarFrase() {
  try {
    await navigator.clipboard.writeText(frase.textContent.replaceAll('"', ""));
    copiarBtn.textContent = "Copiado ✓";

    setTimeout(() => {
      copiarBtn.textContent = "Copiar frase";
    }, 1400);
  } catch {
    copiarBtn.textContent = "Não foi possível copiar";
  }
}

gerarBtn.addEventListener("click", gerarFrase);
copiarBtn.addEventListener("click", copiarFrase);
