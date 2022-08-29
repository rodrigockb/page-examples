require("dotenv").config()
const server = require("./server")
server(process.env.PORTA)