

function sortear() {
  const valorInicial =Math.ceil(document.querySelector(".input-inicio").value);
  const valorFinal = Math.floor(document.querySelector(".input-fim").value);
  const resultados = document.querySelector(".resultados"); 


  const resultado = Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial;
    
    resultados.innerHTML = resultado;
      
  }