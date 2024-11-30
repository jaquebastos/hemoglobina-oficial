// Obtendo os elementos
const btnDoador = document.getElementById('btnDoador2');
const btnHemocentro = document.getElementById('btnHemocentro2');
const doadorSection = document.getElementById('doador2');
const hemocentroSection = document.getElementById('hemocentro2');

// Função para alternar entre as telas
btnDoador.addEventListener('click', () => {
  // Exibe a parte doador e esconde a parte hemocentro
  doadorSection.style.display = 'flex';
  hemocentroSection.style.display = 'none';

  // Alterando o estilo dos botões para indicar a seção ativa
  btnDoador.style.backgroundColor = '#3c6064';
  btnDoador.style.color = '#ffff';
  btnHemocentro.style.backgroundColor = '#d9e4e3';
  btnHemocentro.style.color = '#3c6064';
});

btnHemocentro.addEventListener('click', () => {
  // Exibe a parte hemocentro e esconde a parte doador
  doadorSection.style.display = 'none';
  hemocentroSection.style.display = 'flex';

  // Alterando o estilo dos botões para indicar a seção ativa
  btnHemocentro.style.backgroundColor = '#3c6064';
  btnHemocentro.style.color = '#ffff';
  btnDoador.style.color = '#3c6064';
  btnDoador.style.backgroundColor = '#d9e4e3';
});