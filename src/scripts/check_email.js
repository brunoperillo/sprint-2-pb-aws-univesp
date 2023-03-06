class email {
    static check() {
      let email = document.getElementById("email").value
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|br|edu)$/;
        if (emailRegex.test(email)) {
          const formattedEmail = email.toLowerCase();
          return alert(`${formattedEmail} é um email em formato válido`);
        } else {
           alert(`Endereço de e-mail inválido.`);
        }
    }
}
  document.getElementById("btnEmail").addEventListener("click", email.check);
   
  