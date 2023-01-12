var botaoCriptografa = document.querySelector("#botao_criptografar");
var botaoDescriptografa = document.querySelector("#botao_descriptografar");
var botaoCopia = document.getElementById("botao_copiar");
var botaoLimpa = document.getElementById("botao_limpa");
var entradaTexto = document.querySelector("textarea#start_entrada");
var saidaTexto = document.querySelector("textarea#start_saida");

function criptografaTexto() {
  let text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos. Por favor, use somente letras minúsculas.'
  } else if (/[0-9]/.test(text)) {
    saidaTexto.innerHTML = 'Somente letras são permitidas. Por favor, remova os números.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'O campo está vazio. Por favor, preencha-o antes de continuar.'
  } else {
    var txt = text.replace(/e/g, "enter");
    txt = txt.replace(/i/g, "imes");
    txt = txt.replace(/a/g, "ai");
    txt = txt.replace(/o/g, "ober");
    txt = txt.replace(/u/g, "ufat");

    saidaTexto.innerHTML = `${txt}`;
  }
}

function descriptografaTexto() {
    var text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
      saidaTexto.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos. Por favor, use somente letras minúsculas.'
    } else if (/[0-9]/.test(text)) {
      saidaTexto.innerHTML = 'Somente letras são permitidas. Por favor, remova os números.'
    } else if (entradaTexto.value === '') {
      saidaTexto.innerHTML = 'Nenhum dado foi inserido no campo. Preencha-o para prosseguir.'
    } else {
      var txt = text.replace(/enter/g, "e");
      var txt = txt.replace(/imes/g, "i");
      var txt = txt.replace(/ai/g, "a");
      var txt = txt.replace(/ober/g, "o");
      var txt = txt.replace(/ufat/g, "u");
  
      saidaTexto.innerHTML = `${txt}`;
    }
  }

  function limpaCampos() {
    if (entradaTexto.value.length === 0) {
      saidaTexto.innerHTML = "Antes de apagar, por favor digite algo.";
    } else {
      entradaTexto.value = "";
      saidaTexto.innerHTML = "Seu texto foi apagado. Gostaria de tentar novamente?";
    }
  }
  

  function copiaTexto() {
    let text = entradaTexto.value;
    if (/[A-Z-À-Ú-à-ù]/.test(text)) {
        saidaTexto.innerHTML = 'Letras maiúsculas ou acentuação não são permitidos. Por favor, use somente letras minúsculas.'
    } else if (entradaTexto.value.length === 0) {
        saidaTexto.innerHTML = "Não é possível copiar sem digitar algo primeiro.";
    } else {
        var copyText = saidaTexto.innerHTML;
        navigator.clipboard.writeText(copyText).then(() => {
            saidaTexto.innerHTML = "Seu texto foi copiado com sucesso. Boa utilização!";
        });
    }

botaoCriptografa.addEventListener("click", criptografaTexto);
botaoDescriptografa.addEventListener("click", descriptografaTexto);
botaoCopia.addEventListener("click", copiaTexto);
}
