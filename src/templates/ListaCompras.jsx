import React from 'react';
import Produto from './Produto';

function ListaCompras(props) {
  if (!props.listaCompras || props.listaCompras.length === 0) {
    return <p>A lista de compras está vazia.</p>;
  }
  

  return (
    <div>
      <h2>Lista de Compras</h2>
      <ul>
        {props.listaCompras.map((item, index) => (
          <li key={index}>
            <Produto produto={item.produto} adicionarItemListaCompras={props.adicionarItemListaCompras} />
            <p>Quantidade: {item.quantidade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
