import React from 'react';

function CarrinhoPage({ listaCompras }) {
  return (
    <div>
      <h1>Meu Carrinho</h1>
      <ul>
        {listaCompras.map((item, index) => (
          <li key={index}>
            <p>{item.produto.title}</p>
            <p>Quantidade: {item.quantidade}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarrinhoPage;
