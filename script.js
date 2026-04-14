const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const links = document.querySelectorAll(".links a");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_8zbe03w", "template_igdhkr8", this)
    .then(function() {
        alert("Mensagem enviada 🚀");
        form.reset();
    }, function(error) {
        alert("Erro ao enviar 😢");
        console.log(error);
    });
});