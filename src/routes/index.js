const express = require("express")
const path = require("path")
const rotas = express.Router()
const rotaEmailColector = require("./email-colector")
const DEBUG = process.env.DEBUG || false

const viewsBase = __dirname+"/../views/"
DEBUG && rotas.get("/",(req,res)=>res.redirect(`/email-colector`))
rotas.get("/",(req,res)=>res.sendFile(path.join(viewsBase)))
rotas.get("/sobre",(req,res)=>res.sendFile(path.join(viewsBase+"sobre.html")))
rotas.use("/email-colector",rotaEmailColector)
rotas.get("*",(req,res)=>res.redirect(`/`))

module.exports = rotas