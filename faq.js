document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.parentElement.nextElementSibling; // Altera para buscar a resposta correta
        const card = button.closest('.card'); // Seleciona o card correspondente

        if(answer.style.display === 'none') {
            answer.style.display = 'block';
            button.textContent = '—';
            button.style.fontSize = '20px'; // Muda o tamanho da fonte do botão
            button.style.fontWeight = 'bold'; // Define o texto do botão como negrito
            button.style.color = '#AE2A2B'; // Muda a cor do texto do botão
            card.style.backgroundColor = '#ffffff'; // Muda a cor de fundo do card
        } else {
            answer.style.display = 'none';
            button.textContent = '+';
            button.style.color = ''; // Reseta a cor do texto do botão
            button.style.fontSize = ''; // Reseta o tamanho da fonte do botão
            button.style.fontWeight = ''; // Reseta o peso da fonte do botão
            card.style.backgroundColor = ''; // Reseta a cor de fundo do card
        }
    });
});