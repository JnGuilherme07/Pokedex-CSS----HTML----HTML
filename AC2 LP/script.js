let login;
let senha;

function entrar() {
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;

    if (login && senha === "pokemon") {
        alert("Login efetuado com sucesso!");

        window.location.href='TelaPOKEDEX.html'
        
    } else if (login === "" || senha === "") {
        alert("O campo não pode estar vazio");
    } else{
        alert("Usuário ou senha incorretos");
    }
}

function cadastrar() {
    window.location.href='TelaCADASTRO.html'
}