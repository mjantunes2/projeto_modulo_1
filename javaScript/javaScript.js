function redirecionarParaFase() {
  var caminho_1 = document.getElementById("caminho_1").value;
  var caminho_2 = document.getElementById("caminho_2").value;

  var numEscolha = parseInt(prompt(`Escolha a opção 1 ou 2:`));

  while (numEscolha != 1 || numEscolha != 2) {
    if (numEscolha == 1) {
      window.location.assign(caminho_1);
      break;
    } else if (numEscolha == 2) {
      window.location.assign(caminho_2);
      break;
    } else {
      alert("Escolha um caminho válido!");
      numEscolha = parseInt(prompt(`Escolha a opção 1 ou 2:`));
      if(input === null) {
        return
      }
    } 
  }
}