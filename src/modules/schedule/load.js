import { fetchScheduleByDate } from "../../services/fetch-by-date.js";
import { renderSchedules } from "./render.js";

export const filterDate = document.querySelector("#schedule .wrapper-calendar input[type=date]")

filterDate.onchange = async () => {
  const date = filterDate.value
  
  const appointments = await fetchScheduleByDate({ date })

  renderSchedules({ appointments })
}