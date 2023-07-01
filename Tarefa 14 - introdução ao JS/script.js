window.onload = function() {
    alert("Por favor, realize o Preenchimento dos seus dados!");
};


window.addEventListener('DOMContentLoaded', function() {

    var form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário
  
      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;
      var celular = document.getElementById('celular').value;
      var cpf = document.getElementById('cpf').value;
  
      var dadosInseridos = document.createElement('p');
      dadosInseridos.innerHTML = "<strong>NOME COMPLETO:</strong> " + nome + "<br>" +
                                 "<strong>E-MAIL:</strong> " + email + "<br>" +
                                 "<strong>CELULAR:</strong> " + celular + "<br>" +
                                 "<strong>CPF:</strong> " + cpf;
  
      var divDados = document.querySelector('.informacoes');
  
      divDados.innerHTML = "";
        
      divDados.appendChild(dadosInseridos);

      var mensagemSucesso = document.createElement('p');
      mensagemSucesso.textContent = "Dados preenchidos com sucesso!";
      mensagemSucesso.style.color = "green";
      mensagemSucesso.style.marginTop = "20px";

    divDados.appendChild(mensagemSucesso);
    });
});