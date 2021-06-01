const axios = require("axios")
const Api = axios.create({
  baseURL: process.env.URL,
  headers: {
    Accept: "application/json",
    Authorization: process.env.TOKEN,
    "Content-Type": "application/json"
  }
})

module.exports = Api