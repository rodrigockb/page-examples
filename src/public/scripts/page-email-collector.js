//let teste = document.getElementsByTagName("button")
//let teste = document.getElementsByClassName("enviar")
// let teste = document.querySelector("button")


//let teste = document.querySelector(".enviar")
let elementBtn = document.querySelector("button.enviar")
let elementInputEmail = document.querySelector('.email-container input[type="email"]')

//const teste = document.querySelector("button")
elementBtn.addEventListener("click",(event)=>{
  event.preventDefault()
  //console.log(elementInputEmail.value)
  //fetchPost() //ok
  ajaxPost()
})



const ajaxPost = ()=>{
  // Exemplo de requisição POST
  var xhr = new XMLHttpRequest();

  // Seta tipo de requisição: Post e a URL da API
  xhr.open("POST", "http://localhost:5000/post");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // Seta paramêtros da requisição e envia a requisição
  const msg = "email=teste@teste.com"
  //const msg = {"msg":"Ola mundo"}
  xhr.send(msg);
  

  // Cria um evento para receber o retorno.
  xhr.onreadystatechange = function() {
    
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (xhr.readyState == 4 && xhr.status == 200) {
      
      var data = xhr.responseText;
      
      // Retorno do Ajax
      console.log(data);
    }
  }
}





const fetchPost = () => {
  const objToSend = {email:elementInputEmail.value};
  fetch("/post",
  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(objToSend)
  })
  .then(resposta=>resposta.json())
  .then(json=>console.log(json))
  .catch((erro)=>console.log(erro))
}