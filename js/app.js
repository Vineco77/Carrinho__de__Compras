let total = 0;
limpar();

function adicionar() {
  //O adicionar pega o produto

  let produto = document.getElementById("produto").value;
  let produtoNome = produto.split("-")[0];
  let valorDoProduto = produto.split("R$")[1];

  //Mutiplica pela quantidade
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorDoProduto;

  //adicionar a quantidade no carrinho
  //adicionar o produto e o subvalor do produto
  let carrinho = document.getElementById("lista-produtos");

  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${preco} </span>
    </section>`;

  //adicionar o total
  total = total + preco;
  let valorTotal = document.getElementById("valor-total");

  valorTotal.innerHTML = ` <span class="texto-azul" id="valor-total">R$ ${total} </span>`;

  //limpar o campo quantidade
  document.getElementById("quantidade").value = "";

  //Limpar o primeiro produto no carrinho como exemplo
}

function limpar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$ 0";
}
