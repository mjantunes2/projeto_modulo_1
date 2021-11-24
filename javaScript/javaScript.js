function redirecionarParaFase() {
  var caminho_1 = document.getElementById("caminho_1").value;
  var caminho_2 = document.getElementById("caminho_2").value;
  var numEscolha;

  while (numEscolha != 1 || numEscolha != 2) {
    numEscolha = parseInt(prompt(`Escolha a opção 1 ou 2:`));

    if (numEscolha == 1) {
      window.location.assign(caminho_1);
      break;
    } else if (numEscolha == 2) {
      window.location.assign(caminho_2);
      break;
    } else if (
      numEscolha == "null" ||
      numEscolha == null ||
      numEscolha == "" ||
      numEscolha == false ||
      isNaN(numEscolha)
    ) {
      break;
    } else {
      alert("Escolha um caminho válido!");
    }
  }
}
