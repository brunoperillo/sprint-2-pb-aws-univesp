//Captura o elemento pelo id e fica "esperando" um clique para ativar a função validate
document.getElementById("botao_submit").addEventListener("click", validate)

//Obtém o texto digitado no campo "nome" e o armazena na variável nome
function getNome(){
  const nome = document.getElementById("nome").value
  return nome
}

//Obtém o texto digitado no campo "email" e o armazena na variável email
function getEmail(){
  const email = document.getElementById("email").value
  return email
}

//Obtém o texto digitado no campo "telefone" e o armazena na variável telefone
function getTelefone(){
  const telefone = document.getElementById("numero").value
  return telefone
}



class ValidaNome {          
  static ehNome(nome){
    if (/^[a-zA-ZÀ-ú\sçÇ]+$/.test(nome)) {
      return nome;
    } else {
      return false;
    }
  }
}

class ValidaEmail {
  static ehEmail(email) {
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|org|net|br|edu)$/;
    if (regexEmail.test(email)) {
      let dominio = email.split("@")[1].split(".")[0];
      if (dominio.length >= 2){
        return email;
      }
    } else{
      return false;
    }       
  }
}

class ValidaTelefone {
  static ehTelefone(numero) {
    const regexTelefone = /^\(\d{2}\)\d{4}-\d{4}$/;
    if (regexTelefone.test(numero)) {
      return numero;
    } else{
      return false;
    }       
  }
}
         


//essa é a função principal que valida o nome, email e telefone
  //retorna o valor digitado quando correto ou uma mensagem de erro quando incorreto
function validate(event){
  let $result_email = $("#result_email")         //adicionado
  let $result_name = $("#result_name")
  let $result_numero = $("#result_numero")
  let email = $("#email").val()
  let name = $("#name").val()
  let numero = $("#numero").val()
  email = email.toLowerCase()
 
  $result_email.text("")
  $result_name.text("")
  $result_numero.text("")

if(!ValidaNome.ehNome(name)){
  $result_name.text("Nome inválido!")
  $result_name.css("color", "red")
} else{  
  $result_name.text("Nome válido: " + name)
  $result_name.css("color", "green")
}

if(!ValidaEmail.ehEmail(email)){
  $result_email.text("Endereço de email inválido! Tipos de domínio aceitos: .com, .net, .br, .org ou .br")
  $result_email.css("color", "red")
} else{  
  $result_email.text("Email válido: " + email)
  $result_email.css("color", "green")
}

if(!ValidaTelefone.ehTelefone(numero)){
  $result_numero.text("Número de telefone inválido! Por favor, utilize o formato (NN)NNNN-NNNN")
  $result_numero.css("color", "red")
} else {
  $result_numero.text("Telefone válido: " + numero)
  $result_numero.css("color", "green")
}

//prevent default para a página não atualizar e perder os dados já digitados nos inputs
  event.preventDefault()
}



