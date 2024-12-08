const periodMorning = document.querySelector(".period-morning")
const periodAfternoon = document.querySelector(".period-afternoon")
const periodEvening = document.querySelector(".period-evening")

export function renderSchedules({ appointments }) {
  try {
    // Limpa as listas
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodEvening.innerHTML = ""

    appointments.forEach((appointment) => {
      // Criando os elementos
      const li = document.createElement("li")
      const time = document.createElement("span")
      const container = document.createElement("span")
      const span = document.createElement("span")
      const strong = document.createElement("span")
      const service = document.createElement("span")
      const remove = document.createElement("button")

      // Identificando cada agendamento
      li.setAttribute("data-id", appointment.id)

      // Adicionando as classes
      time.classList.add("hour")
      span.classList.add("pet")
      strong.classList.add("person")
      service.classList.add("service")
      remove.classList.add("remove")

      // Atribuindo valores aos elementos
      time.innerHTML = appointment.hour
      span.innerHTML = appointment.pet
      strong.innerHTML = ` /${appointment.name}`
      service.innerHTML = appointment.service
      remove.innerHTML = "Remover agendamento"

      
      // Adicionando os elementos no item da lista
      container.append(span, strong)
      li.append(time, container, service, remove)
      
      const [ hour ] = time.innerHTML.split(":")
      
      const hourConverted = Number(hour)

      if(hourConverted <= 12) {
        periodMorning.appendChild(li)
      } else if(hourConverted > 12 && hourConverted <= 18) {
          periodAfternoon.appendChild(li)
      } else {
          periodEvening.appendChild(li)
      }

    })
  } catch (error) {
    console.error(error)
    console.log("Não foi possível renderizar os agendamentos da data selecionada.")
  }
}