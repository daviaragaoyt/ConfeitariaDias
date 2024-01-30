const carrinho = JSON.parse(localStorage.getItem("carrinhoMelosConfeitaria"));

console.log("Carrinho:", carrinho);

const tabelaCarrinho = document.getElementById("tabelaCarrinho");

carrinho.map((item) => {
  tabelaCarrinho.innerHTML += `<tr>
    <td>
      <div class="product">
        <img style="width:150px; heigth:150px;   " src=${item.imgUrl} />
        <div class="info">
          <div class="name">${item.nome}</div>
          <div class="category">Categoria</div>
        </div>
      </div>
    </td>
    <td>${item.preco}</td>
    <td>
      <div class="qty">
        <button class="menos"><i class="bx bx-minus"></i></button>
        <span>${item.quantidade}</span>
        <button class="mais"><i class="bx bx-plus"></i></button>
      </div>
    </td>
    <td></td>
    <td>
      <button class="remove"><i class="bx bx-x"></i></button>
    </td>
  </tr>`;
});
