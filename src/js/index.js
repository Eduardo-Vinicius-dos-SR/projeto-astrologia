const buttonAgradecer = document.querySelector(".btn-agradecimento button");
const main = document.querySelector("main");
const navegadores = document.querySelectorAll("nav ul li a");
const agradecimento = document.querySelector(".agradecimento");

navegadores.forEach((nav) => {
	nav.addEventListener("click", () => {
		main.classList.remove("agradecer");
		agradecimento.classList.remove("agradecer");
	});
});

buttonAgradecer.addEventListener("click", () => {
	if (main.classList.contains("agradecer") || agradecimento.classList.contains("agradecer")) {
		main.classList.remove("agradecer");
		agradecimento.classList.remove("agradecer");
	} else {
		main.classList.add("agradecer");
		agradecimento.classList.add("agradecer");
	}
});
