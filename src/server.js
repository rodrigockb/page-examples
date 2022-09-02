const express = require("express")
const app = express()
const debug = process.env.DEBUG

module.exports=(porta=5000)=>{

  const staticLink = `${__dirname}/public`
  app.use(express.static(staticLink));
  debug && console.log(`[${__filename.replace(__dirname,"")}] express.static(${staticLink})`)
  
  app.get("/login",(req,res)=>res.sendFile(`${__dirname}/public/login.html`))
  app.get("/sobre",(req,res)=>res.redirect(`/login`))
  
  app.listen(porta,debug && console.log(`[${__filename.replace(__dirname,"")}] Servidor escutando porta: ${porta}`))  
  return true
}