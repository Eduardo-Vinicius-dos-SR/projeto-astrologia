const buttonAgradecer = document.querySelector(".agradecimento button");
const main = document.querySelector("main");
const navegadores = document.querySelectorAll("nav ul li a");

navegadores.forEach((nav) => {
	nav.addEventListener("click", () => {
		main.classList.remove("agradecer");
	});
});

buttonAgradecer.addEventListener("click", () => {
	main.classList.add("agradecer");
	alert("Funcionou!");
});
