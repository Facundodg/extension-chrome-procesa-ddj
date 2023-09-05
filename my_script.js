const radioBtn = document.getElementById("radioBtn");
const mensaje = document.getElementById("contador");

const toggleContainer = document.querySelector(".toggle-container");
const checkbox = toggleContainer.querySelector("input[type='checkbox']");

let intervalId = null;

let i = 0;

radioBtn.addEventListener("change", () => {

  if (radioBtn.checked) {

    toggleContainer.classList.toggle("toggle-on", this.checked);
    toggleContainer.classList.remove("toggle-off")
    
    // Comienza la ejecución cíclica
    intervalId = setInterval(codigoCiclico, 18000); // Ejecuta código cada segundo
  } else {
    // Detén la ejecución cíclica
    toggleContainer.classList.toggle("toggle-off", !this.checked);
    toggleContainer.classList.remove("toggle-on")
    clearInterval(intervalId);
  }
});

function codigoCiclico() {

  i = i + 1;

  mensaje.textContent = "Se ejecuto: " + i;

}