// O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header');
// console.log(header[0]);
header[0].style.backgroundColor = '#2E948A';

// No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
console.log(linkCursos);

linkCursos.setAttribute('href', 'cursos.html')

// Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
let tituloDepoimento = document.querySelector('.titulo.depoimento h3');
if (tituloDepoimento) {
    tituloDepoimento.innerHTML = "O que falam sobre nós";
}

// No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
document.querySelector('#introducao');
introducao.style.justifyContent = 'space-around';

// Na etapa de blog, o título deveria ser "Mais conteúdo pra você"
let tituloBlog = document.querySelectorAll('.titulo h3');
if (tituloBlog.length > 0) {
    tituloBlog[1].innerHTML = "Mais conteúdo pra você";
}

// Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas
let maiuscula = document.querySelectorAll(".titulo")
maiuscula.forEach(item => {
    item.style.textTransform = "uppercase";
})

// o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html
let linkBlog = document.querySelector('#todos_posts');
if (linkBlog) {
    linkBlog.setAttribute('href', 'blog.html');
}


// // Adicionar um novo curso na section que contém o id investimentos_poupando_independencia
let texto = document.createElement('div')
texto.innerHTML =
    `<div id="independencia">
        <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>
        <h2>Independência Financeira</h2>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>
        <a class="comecar_agora" href="./curso.html">começar agora</a>
    </div>`

let divprimeiro = document.querySelector('#investimentos')
if (divprimeiro) {
    divprimeiro.insertAdjacentElement("beforebegin", texto);
}


// Página contato
// O formulário não está funcionando, o atributo action deve mandar para url sucesso.html
let atributo = document.querySelector('form');
if (atributo) {
    atributo.action = 'sucesso.html';
}

// Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone
let formulario = document.getElementsByTagName('form')[0];
let textArea = document.getElementsByTagName('textarea')[0];
let telefone = document.createElement('input');
let enviar = document.getElementById('enviar');
telefone.placeholder = "telefone";
if (formulario) {
    formulario.insertBefore(telefone, textArea);

    // O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;
    textArea.style.boxSizing = 'border-box';
    // O botão não está do tamanho adequado, precisa ter uma largura maior;
    enviar.style.width = 'auto';

}

let pai = document.getElementsByTagName('main')[0];
let comentarios = document.createElement('section');
comentarios.innerHTML = `
<section class='titulo depoimento'>
<h3>Comentários</h3>
</section>

<section id='falam_sobre'>
<div class="depoimentos">
    <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>

<div class="depoimentos">
    <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
</section>`

if (pai && formulario) {
    pai.appendChild(comentarios);
    let indexCss = document.createElement('link');
    indexCss.href = "/css/index.css";
    indexCss.rel = "stylesheet";
    document.body.appendChild(indexCss);

}