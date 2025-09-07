document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // impede envio real

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  // validações
  if (name === "" || email === "" || message === "") {
    feedback.textContent = "Por favor, preencha todos os campos.";
    feedback.className = "feedback error";
    return;
  }

  // regex simples de e-mail
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Por favor, insira um e-mail válido.";
    feedback.className = "feedback error";
    return;
  }

  // se passou em tudo
  feedback.textContent = "Mensagem enviada com sucesso!";
  feedback.className = "feedback success";

  // limpa os campos
  document.getElementById("contactForm").reset();
});