import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carrinho from '../templates/Carrinho';
import BarraBusca from '../templates/BarraBusca';
import Produto from '../templates/Produto';
import ListaCompras from '../templates/ListaCompras';
import { useEffect } from 'react';

export default function BarraSuperior(props) {
  const [listaCompras, setListaCompras] = useState([]);

  const adicionarItemListaCompras = (item) => {
    setListaCompras([...listaCompras, item]);
  };

  useEffect(() => {
    const listaComprasSalva = JSON.parse(localStorage.getItem('listaCompras'));
    if (listaComprasSalva) {
      setListaCompras(listaComprasSalva);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
  }, [listaCompras]);


  const comprarItem = () => {
    const itemParaComprar = {
      id: 1, 
      title: 'Nome do Item', 
    };

    adicionarItemListaCompras(itemParaComprar);
  };

  const produto = {
    id: 1,
    title: 'Nome do Produto',
  };

  return (
    <div>
      <BarraBusca />
      <ListaCompras listaCompras={listaCompras} />
      {}
      <Produto produto={produto} adicionarItemListaCompras={adicionarItemListaCompras} />
    
    </div>
  );
}
