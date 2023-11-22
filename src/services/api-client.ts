import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "9ee6a5da8a694bc9b26163c07721da6e",
  },
})
