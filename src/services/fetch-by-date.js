import { APIConfig } from "./API-Config";

export async function fetchScheduleByDate({ date }) {
  try {
    // Fazendo a requisição
    const response = await fetch(`${APIConfig.baseURL}/schedules`)

    // Converte para JSON
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado
    const timesOfTheDay = data.filter( schedule =>
      date == schedule.date
    )

    return timesOfTheDay

  } catch (error) {
    console.log(error)
    console.log("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}