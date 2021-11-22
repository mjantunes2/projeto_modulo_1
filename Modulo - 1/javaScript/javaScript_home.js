var button = document.querySelector("#button");

button.addEventListener("click", selecionarPersonagem);

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign('./pages/jarom_caminho.html');
  } else if (numEscolha == 2) {
    window.location.assign('./pages/helio_caminho.html');
  } else {
    window.location.assign('./pages/esli_caminho.html');
  }
}

function selecionarPersonagem(event) {
  event.preventDefault();
  var escolha = parseInt(
    prompt(`Escolha seu personagem:
  1 - Jarom, o Sabio
  2 - Hélio, o Arqueólogo
  3 - Esli, o Guerreiro
  Obs: Escolha baseado no número do personagem!`)
  );

  if (escolha == 1) {
    alert("Você escolheu Jarom!");
    redirecionarParaFase(escolha);
  } else if (escolha == 2) {
    alert("Você escolheu Hélio");
    redirecionarParaFase(escolha);
  } else if (escolha == 3) {
    alert("Você escolheu o Esli");
    redirecionarParaFase(escolha);
  } else {
    alert("Escolha um personagem válido!");
  }
}
