

function sortear() {
  const valorInicial =Math.ceil(document.querySelector(".input-inicio").value)
  const valorFinal = Math.floor(document.querySelector(".input-fim").value)

  const resultado = Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial;

    resultado.i
  
    console.log(resultado)

}
