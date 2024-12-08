import { register } from "../../services/register"

const form = document.querySelector("form")
const petOwner = document.querySelector("input#name")
const petName = document.querySelector("input#pet-name")
const ownersPhoneNumber = document.querySelector("input#phone-number")
const serviceDescription = document.getElementById("service-description")
export const dateInputField = document.querySelector("form .flex input#date")
export const schedules = document.querySelector("form .flex select#time")

const date = new Date();
const hour = new Date().getHours()

// Pega os componentes da data
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() retorna 0-11, por isso somamos 1
const day = date.getHours() >= 21 ? String(date.getDate()+1).padStart(2, '0') : String(date.getDate()).padStart(2, '0')



// Formata no padrão "YYYY-MM-DD"
const formattedDate = `${year}-${month}-${day}`;

// Define a data mínima como sendo a data atual.
dateInputField.min = formattedDate

form.onsubmit = async function(event) {
  event.preventDefault() // Previne o comportamento padrão

  try {
    await register({
      id: new Date().getTime(), // Cria um ID único
      name: petOwner.value.trim(), // Recupera o nome do dono
      pet: petName.value.trim(), // Recupera o nome do pet
      phone: ownersPhoneNumber.value.trim(), // Recupera o número de telefone do dono
      service: serviceDescription.value.trim(), // Recupera o serviço solicitado
      date: dateInputField.value, // Recupera a data do serviço
      hour: schedules.value // Recupera o horário do serviço
    })

    form.reset() // Limpa os campos do formulário

  } catch (error) {
    console.log(error)
  }
}