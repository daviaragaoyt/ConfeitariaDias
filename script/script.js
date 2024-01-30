const catalogo = document.getElementById("containerCatalogo"); //Variavel que busca os elementos do "containerCatalogo"

const produtos = [ //Variavel Array com suas propriedades
    {
        idProduto: 0,
        nome: "Brigadeiro tradicional",
        preco: "R$15,99",
        imgUrl: "../imgs/brigadeiro.webp",
        quantidade: 0,
    },
    {
        idProduto: 1,
        nome: "Brigadeiro/Maracujá",
        preco: "R$15,99",
        imgUrl: "../imgs/maracuja.jpg",
        quantidade: 0,
    },
    {
        idProduto: 2,
        nome: "Brigadeiro de ninho",
        preco: "R$15,99",
        imgUrl: "../imgs/ninhocomnutella.jpg",
        quantidade: 0,
    },
    {
        idProduto: 3,
        nome: "Brigadeiro de Limão",
        preco: "R$15,99",
        imgUrl: "../imgs/limao.jpeg",
        quantidade: 0,
    },
    {
        idProduto: 4,
        nome: "Tortas",
        preco: "R$15,99",
        imgUrl: "../imgs/tortas.webp",
        quantidade: 0,
    },
    {
        idProduto: 5,
        nome: "Brownie",
        preco: "R$15,99",
        imgUrl: "../imgs/brownie.jpg",
        quantidade: 0,
    },
    {
        idProduto: 6,
        nome: "Brigadeiro tradicional",
        preco: "R$15,99",
        imgUrl: "../imgs/brigadeiro.webp",
        quantidade: 0,
    },
    {
        idProduto: 7,
        nome: "Brigadeiro tradicional",
        preco: "R$15,99",
        imgUrl: "../imgs/brigadeiro.webp",
        quantidade: 0,
    },
    {
        idProduto: 8,
        nome: "Brigadeiro tradicional",
        preco: "R$15,99",
        imgUrl: "../imgs/brigadeiro.webp",
        quantidade: 0,
    },
    {
        idProduto: 9,
        nome: "Brigadeiro tradicional",
        preco: "R$15,99",
        imgUrl: "../imgs/brigadeiro.webp",
        quantidade: 0,
    },
];

produtos.map((item) => { //Inserindo Html no codigo pelo Js, falando que sempre que tiver um elemento no catalago a div sera criada, e passando o item
    catalogo.innerHTML += `<div class="box">
    <img class="img" src=${item.imgUrl} alt />
    <h3>${item.nome}</h3>
    <div class="price">${item.preco}</div>
    <button id="candy2" type="submit" class="btn">
        <a href="cart.html" onclick='adicionarCarrinho(${item.idProduto}, "catalago1")'>Adicionar ao carrinho</a>
    </button>
</div>`;
});

function adicionarCarrinho(id, catalogo) { //Função para adicionar os itens e seus elementos para a proxima page(carrinho)
    let carrinhoNovo = []; //Array vazio

    const carrinhoAtual = JSON.parse(
        localStorage.getItem("carrinhoMelosConfeitaria") //Quarda as informações do objeto no Coockie 
    );

    if (carrinhoAtual != null) { //Se o carrinho atual tiver com itens, permanecerá com os itens
        carrinhoNovo = carrinhoAtual;

        if (catalogo == "catalago1") {//Verifica se é item do catalago 1
            carrinhoNovo.push(produtos[id]);
        } else {//Se não 2
            carrinhoNovo.push(outrosProdutos[id]);
        }
    } else {//Se tiver vazio, receberá os novos itens
        if (catalogo == "catalago1") {
            carrinhoNovo.push(produtos[id]);
        } else {
            carrinhoNovo.push(produtos[id]);
        }
    }

    localStorage.setItem( //Quarda os itens do novo carrinho no Cookie
        "carrinhoMelosConfeitaria",
        JSON.stringify(carrinhoNovo)
    );
}

const catalogo2 = document.getElementById("containerCatalogo2");//A mesma coisa para o catalogo2

const outrosProdutos = [
    {
        idProduto: 0,
        nome: "Brigadeiro de Café",
        preco: "R$24,99",
        imgUrl: "../imgs/cafe.jpg",
        quantidade: 0,
    },
    {
        idProduto: 1,
        nome: "Brownie com sorvete",
        preco: "R$32,50",
        imgUrl: "../imgs/browniesorvete.jpg",
        quantidade: 0,
    },
    {
        idProduto: 2,
        nome: "Brigadeiro de Paçoca",
        preco: "R$24,99",
        imgUrl: "../imgs/paçoca.jpg",
        quantidade: 0,
    },
];

outrosProdutos.map((item) => {
    catalogo2.innerHTML += `<div class="box">
    <div class="image">
        <img class="img" src=${item.imgUrl} alt />
    </div>
    <div class="content">
        <h3>${item.nome}</h3 >
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price">${item.preco}</div>
        <button id="candy12" type="submit" class="btn">
            <a href="cart.html" onclick='adicionarCarrinho(${item.idProduto}, "catalago2")'>Adicionar ao carrinho</a>
        </button>
    </div >
</div > `;
});
