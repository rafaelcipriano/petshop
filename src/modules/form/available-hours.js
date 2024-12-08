import { openingHours } from "../../utils/opening-hours"
import { fetchScheduleByDate } from "../../services/fetch-by-date"
import { dateInputField, schedules } from "./entries.js"

// Carrega os horários disponíveis de acordo com o openingHours.
schedules.innerHTML = ""
openingHours.forEach((hour) => {
  const option = document.createElement("option")
  
  option.setAttribute("value", hour)
  option.innerText = `${hour}`

  schedules.append(option)
})

// Remove os horários que já foram agendados.
dateInputField.onchange = async () => {

  // Recebe a data que foi inserido no campo de data do formulário.
  const date = dateInputField.value
  
  // Recebe os agendamentos realizados.
  const unavailableSchedules = await fetchScheduleByDate({ date });

  // Remove os horários que já foram agendados após o usuário marcar a data de agendamento.
  unavailableSchedules.forEach((day) => {
    schedules.querySelectorAll("option").forEach((schedule) => {
      if(schedule.value == day.hour) {
        schedule.remove()
      }
    })
  })
}