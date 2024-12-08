import { APIConfig } from "./API-Config.js";

export async function deleteFromServer({ id }) {
  try {
    await fetch(`${APIConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })
  } catch (error) {
    console.log("Não foi possível remover o agendamento.")
    console.error(error)
  }
}