let inputTexto = document.querySelector("#inputMsg");
let containerRes = document.querySelector("#containerRes");
let resInit = document.querySelector("#divDesap");
let btnCopy = document.querySelector(".btnCopy");
let sectionR = document.querySelector(".sectionResult");
let isValid;
let textoOk;

function isText() {
  const regex = /^[a-zA-Z0-9\s]$/;
  textoOk = inputTexto.value;
  if (regex.test(textoOk)) {
    isValid = true;
  } else {
    isValid = false;
    alert("Texto inválido, Verifique as recomentações e tente novamente!");
  }
  return isValid;
}

function Codificar() {
  isText();
  if (isValid === true) {
    let resultadoCrip = textoOk
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
    containerRes.innerHTML = resultadoCrip;
    inputTexto.value = "";
    resInit.style.display = "none";
    btnCopy.style.display = "block";
    sectionR.style.justifyContent = "start";
    sectionR.style.alignItems = "start";
    containerRes.style.display = "block";
    containerRes.setAttribute("forCopy", resultadoCrip);
  }
}

function Descodificar() {
  isText();
  if (isValid === true) {
    let resultadoDescrip = textoOk
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    containerRes.innerHTML = resultadoDescrip;
    inputTexto.value = "";
    resInit.style.display = "none";
    btnCopy.style.display = "block";
    sectionR.style.justifyContent = "start";
    sectionR.style.alignItems = "start";
    containerRes.setAttribute("forCopy", resultadoDescrip);
  }
}

function Copy() {
  let textCopy = containerRes.getAttribute("forCopy");

  if (textCopy) {
    navigator.clipboard.writeText(textCopy).then(
      () => {
        alert("O Texto foi copiado com sucesso!");
      },
      (err) => {
        "Não foi possivel copiar o texto", err;
      }
    );
  } else {
    alert("Campo de texto vazio");
  }
}
