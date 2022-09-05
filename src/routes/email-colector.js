const express = require("express")
const path = require("path")
const rotas = express.Router()


const viewsBase = __dirname+"/../views/"
rotas.get("/",(req,res)=>res.sendFile(path.join(viewsBase+"email-colector.html"),{}))
rotas.get("*",(req,res)=>res.redirect(`/`))

rotas.post('/post',(req, res) => {
  console.log(`[${__filename.replace(__dirname,"")}] /POST recived:`)
  console.log(req.body)
  res.json(req.body)
})


module.exports = rotas