import { APIConfig } from "./API-Config.js"

export async function register({ id, name, pet, phone, service, date, hour }) {
  try {
    await fetch(`${APIConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, name, pet, phone, service, date, hour })
    })

    console.log("Agendamento realizado com sucesso.")
  } catch (error) {
    console.log("Algo deu errado ao registrar, verifique o log para mais informações.")
    console.error(error)
  }
}