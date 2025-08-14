// 1️⃣ Definindo a interface Usuario
interface Usuario {
    nome: string;
    email: string;
    idade: number;
    status: boolean; // true = ativo, false = inativo
}

// 2️⃣ Criando o array de usuários
let listaDeUsuarios: Usuario[] = [];

// 3️⃣ Função para cadastrar um usuário
function cadastrarUsuario(usuario: Usuario): void {
    listaDeUsuarios.push(usuario);
    console.log(`Usuário "${usuario.nome}" cadastrado com sucesso!`);
}

// 4️⃣ Função para listar todos os usuários
function listarUsuarios(): void {
    console.log("\n Lista de Usuários:");
    listaDeUsuarios.forEach((usuario, index) => {
        console.log(`\nUsuário ${index + 1}:`);
        console.log(`Nome: ${usuario.nome}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Idade: ${usuario.idade}`);
        console.log(`Status: ${usuario.status ? "Ativo" : "Inativo"}`);
    });
}

// 5️⃣ Adicionando usuários de teste
cadastrarUsuario({ nome: "Patricia Lopes", email: "pathliz@gmail.com", idade: 40, status: true });
cadastrarUsuario({ nome: "João Silva", email: "joao@email.com", idade: 30, status: false });
cadastrarUsuario({ nome: "Maria Oliveira", email: "maria@email.com", idade: 25, status: true });

// 6️⃣ Listando usuários no console
listarUsuarios();
