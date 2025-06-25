// CRUD 
/**
 * C - Create (Criar) - POST - INSERT INTO
 * R - Read (Ler) - GET - SELECT
 * U - Update (Atualizar) - PUT - UPDATE
 * D - Delete (Deletar) - DELETE - DELETE FROM
 */


/**
 * Tabela: livros
 * Colunas: id, nome, autor, ano, genero, capa_url
 * Exemplo de dados:
 * | id | nome                   | autor        | ano  | genero   | capa_url                          |
 * | 1  | Ainda estou aqui       | Maria Clara  | 2025 | Drama    | http://localhost:3000/imagens/imagem-01.png   |
 * | 2  | Harry Potter e a Pedra | Rodrigo      | 2010 | Fantasia | http://localhost:3000/imagens/imagem-02.png   |
 * | 3  | O Senhor das Armas     | Nicolas Cage | 2023 | Ação     | http://localhost:3000/imagens/imagem-03.png   |
 */

function listarLivros() {
    const livros = [
        { 
            id: 1,
            nome: "Ainda estou aqui",
            autor: "Maria",
            genero: "Drama",
            ano: 2025,
            capa_url: "http://localhost:3000/imagens/imagem-01.png" 
        },
        { 
            id: 2,
            nome: "Harry Potter e a Pedra",
            autor: "Rodrigo",
            genero: "Fantasia",
            ano: 2010,
            capa_url: "http://localhost:3000/imagens/imagem-02.png" 
        },
        { 
            id: 3,
            nome: "O Senhor das Armas",
            autor: "Nicolas Cage",
            genero: "Ação",
            ano: 2023,
            capa_url: "http://localhost:3000/imagens/imagem-03.png" 
        }
    ] // MOCK - Simulação de dados

    return livros;
}

module.exports = {
    listarLivros
}