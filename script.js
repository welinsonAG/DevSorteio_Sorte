  // Seleciona o botão e associa o evento de clique
  document.getElementById('btnSortear').addEventListener('click', generateNumber);

  function generateNumber() {
    // Converte string em inteiro e arredonda para baixo/acima apropriadamente
    const minValue = Number(document.querySelector('.input-min').value);  
    const maxValue = Number(document.querySelector('.input-max').value);  

    // Validação: campos não podem estar vazios ou não numéricos
    if (isNaN(minValue) || isNaN(maxValue)) {
      alert('Por favor, insira valores numéricos válidos.');  
      return;
    }

    // Garantir ordenação correta mesmo se usuário inverter min e max
    const min = Math.ceil(Math.min(minValue, maxValue));  
    const max = Math.floor(Math.max(minValue, maxValue));  

    // Gera número aleatório inteiro entre min e max (inclusivo)
    // Fórmula: floor(random() * (max - min + 1)) + min
    const result = Math.floor(Math.random() * (max - min + 1)) + min;  

    alert(`Número sorteado: ${result}`);
  }