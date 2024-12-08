import { deleteFromServer } from "../../services/delete.js";
import { fetchScheduleByDate } from "../../services/fetch-by-date.js";
import { renderSchedules } from "./render.js";
import { filterDate } from "./load.js";

const periods = document.querySelectorAll(".schedule-items")

periods.forEach((period) => {
  // Captura o evento de click para cada lista
  period.onclick = async (event) => {
    if(event.target.classList.contains("remove")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li")

      // Pega o id do agendamento para remover
      const { id } = item.dataset
      
      // Confirma que o id foi selecionado
      if(id) {
        // Confirma se o usuário quer cancelar
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento")
        
        if(isConfirm) {
          // Faz a requisição na API para remover o agendamento
          await deleteFromServer({ id })

          // Obtém o valor da data para verificar os agendamentos
          const date = filterDate.value
  
          // Recebe os agendamentos da data selecionado
          const appointments = await fetchScheduleByDate({ date })

          // Renderiza os agendamentos
          renderSchedules({ appointments })
        }
      }
    }
  }
})
