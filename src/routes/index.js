const express = require("express")
const path = require("path")
const rotas = express.Router()
const DEBUG = process.env.DEBUG || false

const viewsBase = __dirname+"/../views/"
DEBUG && rotas.get("/",(req,res)=>res.redirect(`/email-colector`))
rotas.get("/",(req,res)=>res.sendFile(path.join(viewsBase)))
rotas.get("/email-colector",(req,res)=>res.sendFile(path.join(viewsBase+"email-colector.html")))
rotas.get("/sobre",(req,res)=>res.sendFile(path.join(viewsBase+"sobre.html")))
rotas.get("*",(req,res)=>res.redirect(`/`))

rotas.post('/post',(req, res) => {
  console.log(req.body)
  res.json(req.body)
})

module.exports = rotas