let elementBtn = document.querySelector("button.enviar")
let elementInputEmail = document.querySelector('.email-container input[type="email"]')


elementBtn.addEventListener("click",(event)=>{
  event.preventDefault()
  //fetchPost() //ok
  ajaxPost()  //ok
})


const ajaxPost = ()=>{
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/post");

  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Content-type", "application/json");

  const toSend = JSON.stringify({
    email: elementInputEmail.value
  })
  xhr.send(toSend);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = xhr.responseText;
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