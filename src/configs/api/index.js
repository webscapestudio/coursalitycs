import axios from "axios"
import { Topics } from "./Topics"

export const instance = axios.create({
  baseURL: "https://ca-production.coursalytics.com/api",
  headers: {
    // Authorization: "Bearer " + token,
  },
})

export const Api = {
  Topics: Topics,
}
