function redirecionarParaFase() {
  var caminho_1 = document.getElementById("caminho_1").value;
  var caminho_2 = document.getElementById("caminho_2").value;

  var numEscolha = parseInt(prompt(`Escolha seu caminho:`));

  if (numEscolha == 1) {
    window.location.assign(caminho_1);
  } else {
    window.location.assign(caminho_2);
  }
  console.log(caminho_1);
}

function selecionarPersonagem(escolha) {
  if (escolha == 1) {
    redirecionarParaFase(escolha);
  } else if (escolha == 2) {
    redirecionarParaFase(escolha);
  } else {
    alert("Escolha um caminho válido!");
  }
}
