var button = document.querySelector("#button");

button.addEventListener("click", selecionarPersonagem);

function redirecionarParaFase(numEscolha) {
  if (numEscolha == 1) {
    window.location.assign("./pages/jarom_caminho.html");
  } else if (numEscolha == 2) {
    window.location.assign("./pages/helio_caminho.html");
  } else {
    window.location.assign("./pages/esli_caminho.html");
  }
}

function selecionarPersonagem(event) {
  event.preventDefault();
  var escolha;

  while (escolha != 1 || escolha != 2 || escolha != 3) {
    escolha = parseInt(
      prompt(`Escolha seu personagem:
    1 - Jarom, o Sábio
    2 - Hélio, o Explorador
    3 - Esli, o Guerreiro
    Obs: Escolha baseado no número do personagem!`)
    );
    if (escolha === null) {
      return;
    }
    if (escolha == 1) {
      alert("Você escolheu Jarom, o Sábio!");
      redirecionarParaFase(escolha);
      break;
    } else if (escolha == 2) {
      alert("Você escolheu Hélio, o Explorador!");
      redirecionarParaFase(escolha);
      break;
    } else if (escolha == 3) {
      alert("Você escolheu o Esli, o Guerreiro!");
      redirecionarParaFase(escolha);
      break;
    } else {
      alert("Escolha um personagem válido!");
    }
  }
}
