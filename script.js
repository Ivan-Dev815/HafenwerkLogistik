// Formulario de contacto
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Mensaje enviado");
  form.reset();
});
