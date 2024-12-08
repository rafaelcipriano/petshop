import "./form/entries.js"
import "./form/available-hours.js"
import "./schedule/load.js"
import "./schedule/cancel.js"
import "./schedule/render.js"

// Testes
// Controle de abertura e fechamento do modal
const schedulingButton = document.querySelector("footer button")
const closeForm = document.querySelector(".close")

schedulingButton.onclick = () => {
  document.querySelector("body").classList.add("scheduling")
}

closeForm.onclick = () => {
  document.querySelector("body").classList.remove("scheduling")
}

