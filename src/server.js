require("dotenv").config()
const PORTA = process.env.PORTA
const DEBUG = process.env.DEBUG
const express = require("express")
const app = express()

const staticLink = __dirname+"/public"
app.use(express.static(staticLink));
app.use(express.json())

DEBUG && console.log(`[${__filename.replace(__dirname,"")}] express.static(${staticLink})`)
DEBUG && app.get("/",(req,res)=>res.redirect(`/email-colector`))
app.get("/",(req,res)=>res.sendFile(__dirname+"/public/views/"))
app.get("/email-colector",(req,res)=>res.sendFile(__dirname+"/public/views/email-colector.html"))
app.get("/sobre",(req,res)=>res.sendFile(__dirname+"/public/views/sobre.html"))
DEBUG && app.get("*",(req,res)=>res.redirect(`/`))



app.post('/post',(req, res) => {
  console.log(req.body)
  res.json('Tudo OK')
})




app.listen(PORTA||5000,()=>DEBUG && console.log(`[${__filename.replace(__dirname,"")}] Servidor escutando porta: ${PORTA}`))  