
//const valorInicial = Math.ceil(document.querySelector(".input-inicio").value);
// const valorFinal = Math.floor(document.querySelector(".input-fim").value);

const acertou = Math.floor(document.querySelector(".input-escolher").value); // input
const resultados = document.querySelector(".resultados"); // p
const escolhido = document.querySelector(".escolhido"); //p
const ganhou = document.querySelector(".ganhou"); // p
const jogadorPontuacao = document.querySelector(".azul");
const MaquinaPontuacao = document.querySelector(".verm");

const sortear = (escolheu) => {
  resultadoFinal(escolheu, maquina());
};

const maquina = () => {
  let valorInicial = 2;
  let valorFinal = 10;
  const resultado =
    Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial;
  console.log(resultado);
  resultados.innerHTML = resultado;
  return resultado;
};

  let jogadorNumero = 0;
  let maquinaNumero = 0;
  
const resultadoFinal = (acertou, maquina) => {
  acertou = Math.floor(document.querySelector(".input-escolher").value); // input
  console.log(acertou, maquina);

  
  if (acertou === maquina) {
    jogadorNumero++;
    jogadorPontuacao.innerHTML = jogadorNumero;
    ganhou.innerHTML = "VOCÊ GANHOU!!";
    escolhido.innerHTML = " ";
  } else {
    maquinaNumero++;
    MaquinaPontuacao.innerHTML = maquinaNumero;
    ganhou.innerHTML = " ";
    escolhido.innerHTML =
      "VOCÊ PERDEU!! Você Pode Escolher Outro Número Se Quizer";
  }
};
