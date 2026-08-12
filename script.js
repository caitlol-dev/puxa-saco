const frases = {
  amizade: [
    "Ter você como amigo é basicamente jogar a vida no modo cooperativo com vantagem.",
    "Você é o tipo de amigo que transforma um dia comum em história pra contar depois.",
    "Se amizade tivesse ranking, você estaria quebrando o sistema de pontuação.",
    "Você consegue fazer companhia parecer um talento profissional.",
    "Até seus conselhos ruins têm carisma suficiente pra parecer uma boa ideia.",
    "Você é aquele amigo que melhora o rolê só por confirmar presença.",
    "Se lealdade desse troféu, sua estante já estaria sem espaço.",
    "Conversar com você é uma das poucas notificações que vale a pena abrir na hora.",
    "Você tem o raro talento de fazer as pessoas se sentirem incluídas sem esforço.",
    "Sua amizade devia vir com selo de qualidade e garantia estendida.",
    "Você é praticamente um pacote premium de companhia, humor e confiança.",
    "Tem amigo bom, tem amigo incrível e tem você atrapalhando a curva da média.",
    "Você faz até silêncio entre amigos parecer confortável.",
    "Se bons amigos fossem raridade de jogo, você seria item lendário.",
    "Você é uma prova bem convincente de que escolher bem as amizades compensa."
  ],

  relacionamento: [
    "Você tem o talento raro de fazer qualquer relação ficar mais leve só sendo você.",
    "É difícil não admirar alguém que consegue ser interessante até nos detalhes pequenos.",
    "Você faz atenção e cuidado parecerem coisas naturais, e isso vale muito.",
    "Conviver com você é descobrir novos motivos para admirar a mesma pessoa.",
    "Você tem uma presença que faz qualquer momento simples parecer mais especial.",
    "Seu jeito de ouvir já resolve metade dos problemas antes mesmo de responder.",
    "Você consegue ser apoio sem deixar de ser divertido, o que é uma combinação rara.",
    "É impressionante como você consegue deixar as pessoas à vontade perto de você.",
    "Você tem aquele tipo de personalidade que faz a conexão parecer fácil.",
    "Se consideração fosse uma habilidade, você claramente teria colocado todos os pontos nela.",
    "Você faz parceria parecer menos uma palavra e mais uma habilidade.",
    "Seu jeito de demonstrar que se importa vale mais que qualquer discurso bonito.",
    "Você consegue tornar presença em conforto, e isso não é pouca coisa.",
    "Até seus pequenos gestos têm energia de quem realmente presta atenção.",
    "É muito fácil entender por que alguém gostaria de ter você por perto."
  ],

  corporativo: [
    "Se competência desse participação nos lucros, você já seria acionista majoritário.",
    "Você não entrega demanda. Você entrega case de sucesso.",
    "Seu improviso parece planejamento estratégico de três trimestres.",
    "Se produtividade fosse KPI, você estaria deixando o dashboard constrangido.",
    "Você entra numa reunião e o PowerPoint automaticamente ganha credibilidade.",
    "Seu potencial de liderança está quase pedindo CNPJ próprio.",
    "Você não resolve problema. Você transforma problema em oportunidade de apresentação.",
    "Seu LinkedIn deveria ter a opção 'humilhar concorrência' nas competências.",
    "Se organização fosse promoção, seu crachá já teria mudado de cargo sozinho.",
    "Você tem energia de quem fala 'deixa comigo' e realmente volta com tudo resolvido.",
    "Seu trabalho em equipe parece feature premium.",
    "Até seu café provavelmente vem com plano de ação e próximos passos.",
    "Você tem tanta visão estratégica que até o futuro pede sua opinião.",
    "Seu nível de entrega faz prazo parecer uma sugestão conservadora.",
    "Se excelência operacional tivesse foto no relatório anual, seria a sua."
  ],

  sarcastico: [
    "Parabéns por ser tão competente. Está ficando inconveniente para o restante da população.",
    "Você podia tentar ser menos incrível só pra dar alguma chance aos outros.",
    "Que absurdo você continuar acertando. Pense um pouco na autoestima da concorrência.",
    "Você não precisava ter tanto carisma, mas claramente moderação nunca foi seu forte.",
    "É realmente egoísta da sua parte concentrar tanto bom gosto numa pessoa só.",
    "Você está ficando perigosamente perto de justificar todo esse ego.",
    "Que surpresa: você sendo bom em alguma coisa de novo. Totalmente inesperado.",
    "Continue assim e daqui a pouco vão ter que criar uma dificuldade maior só pra você.",
    "Você podia deixar uma qualidade para os outros, mas tudo bem.",
    "Seu maior problema é tornar elogio exagerado estranhamente plausível.",
    "A humildade agradece se você parar de dar tantos motivos para se achar.",
    "Você é tão eficiente que chega a parecer falta de espírito esportivo.",
    "Infelizmente as evidências continuam apontando que você é realmente muito bom.",
    "Tentamos diminuir seu ego, mas os fatos atrapalharam o processo.",
    "Seu talento está começando a parecer uma provocação pessoal."
  ]
};

const nomesEstilo = {
  aleatorio: "Aleatório",
  amizade: "Amizade",
  relacionamento: "Relacionamento",
  corporativo: "Corporativo",
  sarcastico: "Sarcástico"
};

const gerarBtn = document.getElementById("gerarBtn");
const copiarBtn = document.getElementById("copiarBtn");
const frase = document.getElementById("frase");
const fraseBox = document.getElementById("fraseBox");
const contador = document.getElementById("contador");
const estiloBtn = document.getElementById("estiloBtn");
const estiloMenu = document.getElementById("estiloMenu");
const estiloAtual = document.getElementById("estiloAtual");
const opcoesEstilo = document.querySelectorAll(".estilo-opcao");

let total = 0;
let estiloSelecionado = "aleatorio";
let ultimaFrase = "";

function pegarListaAtual() {
  if (estiloSelecionado !== "aleatorio") {
    return frases[estiloSelecionado];
  }

  return Object.values(frases).flat();
}

function gerarFrase() {
  const lista = pegarListaAtual();
  let novaFrase;

  do {
    novaFrase = lista[Math.floor(Math.random() * lista.length)];
  } while (novaFrase === ultimaFrase && lista.length > 1);

  ultimaFrase = novaFrase;

  fraseBox.classList.remove("animando");
  void fraseBox.offsetWidth;

  frase.textContent = `"${novaFrase}"`;
  fraseBox.classList.add("animando");

  total++;
  contador.textContent = `${total} ${total === 1 ? "bajulação recebida" : "bajulações recebidas"}`;

  copiarBtn.disabled = false;
  copiarBtn.textContent = "Copiar frase";
}

function abrirOuFecharMenu() {
  const estaAberto = estiloBtn.getAttribute("aria-expanded") === "true";
  estiloBtn.setAttribute("aria-expanded", String(!estaAberto));
  estiloMenu.hidden = estaAberto;
}

function fecharMenu() {
  estiloBtn.setAttribute("aria-expanded", "false");
  estiloMenu.hidden = true;
}

function selecionarEstilo(estilo) {
  estiloSelecionado = estilo;
  estiloAtual.textContent = nomesEstilo[estilo];
  ultimaFrase = "";

  opcoesEstilo.forEach((opcao) => {
    opcao.classList.toggle("ativo", opcao.dataset.estilo === estilo);
  });

  fecharMenu();
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
estiloBtn.addEventListener("click", abrirOuFecharMenu);

opcoesEstilo.forEach((opcao) => {
  opcao.addEventListener("click", () => selecionarEstilo(opcao.dataset.estilo));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".seletor-estilo")) {
    fecharMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharMenu();
  }
});
