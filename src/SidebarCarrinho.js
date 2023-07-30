import React from 'react';

const SidebarCarrinho = ({ carrinho, removerItemCarrinho, calcularTotal, fecharCarrinho }) => {
  return (
    <div className="carrinho-aba aberto">
      <div className="carrinho-conteudo">
        <h2><i className="fas fa-shopping-cart"></i> Carrinho de Compras</h2>
        {carrinho.length === 0 ? (
          <p>Carrinho vazio.</p>
        ) : (
          <ul className="list-group">
            {carrinho.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.nome}</span>
                <span><strong>R$ {item.preco.toFixed(2)}</strong> <button className="btn btn-danger btn-sm" onClick={() => removerItemCarrinho(item.id)}>Remover</button></span>
              </li>
            ))}
          </ul>
        )}
        {carrinho.length > 0 && (
          <div className="total-carrinho mt-3">
            <strong>Total: R$ {calcularTotal().toFixed(2)}</strong>
          </div>
        )}
        <button className="btn btn-secondary mt-3" onClick={fecharCarrinho}>Fechar Carrinho</button>
      </div>
    </div>
  );
};

export default SidebarCarrinho;
