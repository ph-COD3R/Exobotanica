import React, { useState, useEffect } from 'react';

const Carrinho = ({ carrinho, removerItemCarrinho, calcularTotal }) => {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  // Fechar o carrinho quando o usuário clicar fora da aba
  const fecharCarrinho = () => {
    setCarrinhoAberto(false);
  };

  // Atualizar o estado do carrinhoAberto ao receber o carrinho como prop
  useEffect(() => {
    if (carrinho.length > 0) {
      setCarrinhoAberto(true);
    }
  }, [carrinho]);

  return (
    <>
      {/* Ícone do carrinho na navbar */}
      <div className="carrinho-icon">
        <a href="#carrinho" onClick={() => setCarrinhoAberto(!carrinhoAberto)}>
          <i className="fas fa-shopping-cart"></i>
          {carrinho.length > 0 && <span className="badge badge-danger ml-1">{carrinho.length}</span>}
        </a>
      </div>

      {/* Aba lateral do carrinho */}
      <div className={`carrinho-aba ${carrinhoAberto ? 'aberto' : ''}`}>
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
        </div>
      </div>

      {/* Fundo transparente para fechar o carrinho clicando fora da aba */}
      {carrinhoAberto && <div className="carrinho-fundo" onClick={fecharCarrinho}></div>}
    </>
  );
};

export default Carrinho;
