const livroModel = require('../models/livro.model');

function listarLivros(request, response) {

    // Chamar a função de listar livros do model de livros
    const livros = livroModel.listarLivros()

   // response.json(livros)

   const nome = "Rodrigo"
   const trabalho = "CEO"

    // Renderizar a view 'listar-livros' para o usuário
    response.render('listar-livros', {livros})
}

module.exports = {
    listarLivros
}