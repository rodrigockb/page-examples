let elementBtn = document.querySelector("button.enviar")
let elementInputEmail = document.querySelector('.email-container input[type="email"]')


elementBtn.addEventListener("click",(event)=>{
  event.preventDefault()
  //fetchPost() //ok
  ajaxPost()  //ok
})


const ajaxPost = ()=>{
  const ajax = new XMLHttpRequest();
  ajax.open("POST", "/post");

  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax.setRequestHeader("Content-type", "application/json");

  const toSend = JSON.stringify({
    email: elementInputEmail.value
  })
  ajax.send(toSend);

  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = ajax.responseText;
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