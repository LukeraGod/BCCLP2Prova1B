import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from "./templates/Cabecalho";
import BarraSuperior from "./barras/BarraSuperior";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  }, []);

  const [produtos, setProdutos] = useState([]);

  return (
    <div className="App">
      <Router>
        <div>
          <BarraSuperior />
          <Routes>
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Cabecalho />
          <GradeProdutos listaProdutos={produtos} />
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Bem-vindo à nossa loja!</h1>
      <p>Encontre os melhores produtos e faça suas compras online.</p>
      <ul>
        <li>Produto 1</li>
        <li>Produto 2</li>
        <li>Produto 3</li>
      </ul>
    </div>
  );
}

function Carrinho() {
  return (
    <div>
      <h1>Seu Carrinho</h1>
      {}
    </div>
  );
}

export default App;
