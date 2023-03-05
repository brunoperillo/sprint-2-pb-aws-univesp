 class phone {
    static check() {
      let phone = document.getElementById("phone").value
      const telefoneRegex = /^\(\d{2}\)\d{4}-\d{4}$/;
      if (telefoneRegex.test(phone)) {
          return alert(`${phone} é um telefone em formato válido`);
        } else {
            alert(`${phone} está em um formato inválido. Use o formato (NN)NNNN-NNNN.`);
      }
    }
  }
  document.getElementById("btnPhone").addEventListener("click", phone.check);
