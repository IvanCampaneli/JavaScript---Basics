
const button = window.document.getElementById("send");

function enviarEmail(data) {
  Email.send({
    SecureToken: "SuaChaveDeSeguranca",
    To: data.email,
    From: "seuemail@gmail.com",
    Body: data.text
  }).then(
    message => alert("Email enviado com sucesso!")
  );
}

function forms (data) {
  console.log(data);
}

button.addEventListener("click", function () {
  const name = window.document.getElementById("name").value;
  const email = window.document.getElementById("email").value;
  const tel = window.document.getElementById("tel").value;
  const mensage = window.document.getElementById("mensage").value;
  const data = { 
    email,
    name,
    tel,
    mensage
  }
  enviarEmail(data);
})

