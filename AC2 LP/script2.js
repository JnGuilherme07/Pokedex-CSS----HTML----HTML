function entrar() {
    var validacao = false;
    var nome, email, idade, senha, confirmacao, genero;

    do {
        nome = prompt("Digite seu nome completo:");
        email = prompt("Digite seu e-mail:");
        idade = parseInt(prompt("Digite sua idade:"));
        senha = prompt("Digite sua senha:");
        confirmacao = prompt("Confirme sua senha:");
        genero = prompt("Digite seu gênero (m/f):");

        if (nome === "" || email === "" || idade === "" || senha === "" || confirmacao === "" || genero === "") {
            alert("O campo não pode estar vazio");

        } else if (nome.length < 3) {
            alert("Nome inválido. Deve conter no mínimo 3 caracteres!");

        } else if (email === '') {
            alert("E-mail está errado!");

        } else if (isNaN(idade) || idade < 0 || idade > 100) {
            alert("Idade está errado, sua idade deve ser maior que 0 e menor que 100!");

        } else if ( senha !== confirmacao) {
            alert("Senhas não conferem!");
        
        } else if (senha.length < 6 ) {
                alert("Senha deve possuir 6 caracteries!");

        } else if (genero.toLowerCase() !== 'm' && genero.toLowerCase() !== 'f' ) {
            alert("Informação inválida");

        } else {
            validacao = true;
        }

    } while (!validacao);

    var dados = (" Nome: " + nome + ",");
        dados += ( " E-mail: " + email + ",");
        dados += (" Idade: " + idade  + ",");
        dados += (" Gênero: " + genero.toUpperCase() + ",");
    

        alert("As informações digitadas:" + dados);
        alert("Cadastro efetuado com sucesso!");

    window.location.href='TelaPOKEDEX.html'

}


