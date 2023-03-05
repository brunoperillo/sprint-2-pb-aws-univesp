class email {
    static check() {
      let email = document.getElementById("email").value
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,5}$/;
        if (emailRegex.test(email)) {
          const formattedEmail = email.toLowerCase();
          return alert(`${formattedEmail} é um email em formato válido`);
        } else {
           alert(`Endereço de e-mail inválido.`);
        }
    }
}
  document.getElementById("btnEmail").addEventListener("click", email.check);
   
  