 class name {
  static check() {
  let name = document.getElementById("name").value;  
  const nomeRegex = /^[a-zA-ZzáàâãéèêíïóôõöúüÜçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]|[]+$/; 
  if (nomeRegex.test(name)) {
    return alert(` ${name} é um nome em formato válido`);
    } else {
        alert(`Nome inválido ! Use apenas letras maiúsculas e minúsculas.`);
    }
  }
 }
 document.getElementById("btnName").addEventListener("click", name.check);


