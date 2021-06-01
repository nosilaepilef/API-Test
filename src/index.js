require("dotenv").config()
const express = require("express")
const Routers = require("./router")
const App = express()

App.use(express.json())

App.use(Routers)

App.listen(3333,() => console.log("Servidor OK"))