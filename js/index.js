// O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
header[0].style.backgroundColor = '#2E948A';

// No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
console.log(linkCursos);

linkCursos.setAttribute('href', 'cursos.html')

// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
document.querySelector('.titulo.depoimento h3').innerHTML = "O que falam sobre nós"

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
document.querySelector ('#introducao');
introducao.style.justifyContent = 'space-around';

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você"
document.querySelectorAll('.titulo h3')[1].innerHTML = "Mais conteúdo pra você"

// Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas
let maiuscula = document.querySelectorAll(".titulo")
maiuscula.forEach(item => {
    item.style.textTransform = "uppercase";
})

// o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
let linkBlog = document.querySelector('#todos_posts');
linkBlog.setAttribute('href', 'blog.html');

// // Adicionar um novo curso na section que contém o id investimentos_poupando_independencia
let texto = document.createElement('div')
texto.innerHTML = 
    '<div id="independencia">'+
        '<img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>' +
        '<h2>Independência Financeira</h2>' +
'        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>' +
        '<a class="comecar_agora" href="./curso.html">começar agora</a>' +
    '</div>'

let divprimeiro = document.querySelector('#investimentos')

divprimeiro.insertAdjacentElement("beforebegin",texto)

// Página contato
// O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
document.querySelector('form').action = 'sucesso.html'

// Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
let telefone = document.createElement('input');


