
const {elementBtnSubmit,elementInputEmail}=pageElements()

// Funções e metodos

elementBtnSubmit.addEventListener("click",(event)=>{
  event.preventDefault()
  const email = elementInputEmail.value
  fetchPost(email) //ok
  // ajaxPost(email)  //ok
})


// Funções e metodos

const ajaxPost=(valueToSend)=>{
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "/email-colector/post");
  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax.setRequestHeader("Content-type", "application/json");

  const toSend = JSON.stringify({
    email: valueToSend
  })
  ajax.send(toSend);

  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = ajax.responseText;
      console.log(data);
    }
  }
}

const fetchPost = (valueToSend) => {
  fetch("/email-colector/post",
  {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({email:valueToSend})
  })
  .then(resposta=>resposta.json())
  .then(json=>console.log(json))
  .catch((erro)=>console.log(erro))
}

function pageElements(){
  return{
    elementBtnSubmit:document.querySelector("button.enviar"),
    elementInputEmail:document.querySelector('.email-container input[type="email"]')
  }
}