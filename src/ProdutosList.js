import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Semente de erva doce <br>',
    img: 'img/produtos/sementeervadoce.png',
    descricao: 'Melhora a digestão e reduz inchaços, peça fundamental para uma boa alimentação. Quantidade: 1kg',
    preco: 10.50,
  },
  {
    id: 2,
    nome: 'Semente de pitaya: fruta do dragão',
    img: 'img/produtos/pitaya.png',
    descricao: 'Aparência exótica, gosto suave. Quantidade: 250x',
    preco: 29.99,
  },
  {
    id: 3,
    nome: 'Semente planta carnivora: Dionaea muscipula',
    img: 'img/produtos/sementeplantacarnivora.png',
    descricao: 'Produz um néctar que atrai e combate os insetos. Quantidade: 50x',
    preco: 23.90,
  },
  {
    id: 4,
    nome: 'Semente de girassol sem casca',
    img: 'img/produtos/sementegirassol.jpg',
    descricao: 'Rica em gorduras saudáveis, proteínas, fibras e antioxidantes, ajuda a prevenir doenças cardiovasculares. Quantidade: 1kg',
    preco: 24.99,
  },
];

const ProdutosList = ({ adicionarProdutoCarrinho }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">
        <i className="fas fa-box"></i> Nossos Produtos
      </h2>
      <div className="row">
        {produtos.map((produto) => (
          <div className="col-md-4 mb-4" key={produto.id}>
            <div className="card">
              <img src={produto.img} className="card-img-top" alt={produto.nome} />
              <div className="card-body" style={{ textAlign: 'center' }}>
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">{produto.descricao}</p>
                <p className="card-text"><strong>R$ {produto.preco.toFixed(2)}</strong></p>
                <button className="btn btn-primary" style={{ backgroundColor: 'rgb(20, 18, 18)', cursor: 'pointer' }} onClick={() => adicionarProdutoCarrinho(produto)}>Adicionar ao Carrinho</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdutosList;
