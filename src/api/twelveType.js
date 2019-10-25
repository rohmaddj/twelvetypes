import axios from "axios"

export default axios.create({
  baseURL: "https://twelvetypes.com/api"
  // baseURL: "http://localhost:8000/api"
})
