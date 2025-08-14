// 2️⃣ Criando o array de usuários
var listaDeUsuarios = [];
// 3️⃣ Função para cadastrar um usuário
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
    console.log("Usu\u00E1rio \"".concat(usuario.nome, "\" cadastrado com sucesso!"));
}
// 4️⃣ Função para listar todos os usuários
function listarUsuarios() {
    console.log("\n Lista de Usuários:");
    listaDeUsuarios.forEach(function (usuario, index) {
        console.log("\nUsu\u00E1rio ".concat(index + 1, ":"));
        console.log("Nome: ".concat(usuario.nome));
        console.log("Email: ".concat(usuario.email));
        console.log("Idade: ".concat(usuario.idade));
        console.log("Status: ".concat(usuario.status ? "Ativo" : "Inativo"));
    });
}
// 5️⃣ Adicionando usuários de teste
cadastrarUsuario({ nome: "Patricia Lopes", email: "pathliz@gmail.com", idade: 40, status: true });
cadastrarUsuario({ nome: "João Silva", email: "joao@email.com", idade: 30, status: false });
cadastrarUsuario({ nome: "Maria Oliveira", email: "maria@email.com", idade: 25, status: true });
// 6️⃣ Listando usuários no console
listarUsuarios();
