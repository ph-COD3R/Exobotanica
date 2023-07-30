import React, { useEffect, useState } from 'react';
import ProdutosList from './ProdutosList';
import SidebarCarrinho from './SidebarCarrinho'; // Updated import

const App = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Carregar o carrinho do localStorage ao carregar a página
  useEffect(() => {
    const carrinhoLocalStorage = localStorage.getItem('carrinho');
    if (carrinhoLocalStorage) {
      setCarrinho(JSON.parse(carrinhoLocalStorage));
    }
  }, []);

  // Atualizar o localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarProdutoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerItemCarrinho = (id) => {
    const novosItensCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novosItensCarrinho);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">Exobotanica</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {/* Ícone do carrinho com o número de itens */}
                  <a className="nav-link" onClick={toggleSidebar}>
                    <i className="fas fa-shopping-cart"></i> Carrinho
                    {carrinho.length > 0 && <span className="badge badge-danger ml-1">{carrinho.length}</span>}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Renderiza o componente ProdutosList para exibir os produtos */}
      <ProdutosList adicionarProdutoCarrinho={adicionarProdutoCarrinho} />

      {/* Renderiza o componente SidebarCarrinho para exibir o carrinho de compras como uma aba lateral */}
      {sidebarOpen && (
        <SidebarCarrinho
          carrinho={carrinho}
          removerItemCarrinho={removerItemCarrinho}
          calcularTotal={calcularTotal}
          fecharCarrinho={closeSidebar}
        />
      )}
    </div>
  );
};

export default App;
