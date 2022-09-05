require("dotenv").config()
const PORTA = process.env.PORTA || 5000
const DEBUG = process.env.DEBUG || false
const express = require("express")
const rotas = require("./routes/index")
const app = express()

const staticLink = __dirname+"/public"
app.use(express.static(staticLink));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/",rotas)

DEBUG && console.log(`[${__filename.replace(__dirname,"")}]express.static(${staticLink})`)
app.listen(PORTA,()=>DEBUG && console.log(`[${__filename.replace(__dirname,"")}] Servidor escutando porta: ${PORTA}`))  