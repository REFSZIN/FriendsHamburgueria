/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Suggestion = ({ name, description, price, photoUrl, status }) => {
  // Adicione aqui a lógica do componente Suggestion
  return <div>{name}</div>;
};

const PontosFidelidade = ({ pontosFidelidade }) => {
  // Adicione aqui a lógica para exibir os pontos de fidelidade do usuário
  return (
    <div>
      <h2>Pontos de Fidelidade</h2>
      <p>Você tem {pontosFidelidade} pontos de fidelidade. A cada compra você ganha mais pontos que podem ser trocados por descontos.</p>
    </div>
  );
};

const PedidosAnteriores = ({ pedidosAnteriores }) => {
  // Adicione aqui a lógica para exibir os pedidos anteriores do usuário
  return (
    <div>
      <h2>Pedidos Anteriores</h2>
      <ul>
        {pedidosAnteriores.map(pedido => (
          <li key={pedido.id}>{pedido.nome} - {pedido.preco}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Pedidos() {
  // Adicione aqui a lógica para armazenar os dados de pedidos anteriores e pontos de fidelidade
  const [pedidosAnteriores, setPedidosAnteriores] = useState([
    { id: 1, nome: 'Hamburguer com cheddar e bacon', preco: 15.99 },
    { id: 2, nome: 'Batata frita', preco: 8.99 },
    { id: 3, nome: 'Refrigerante', preco: 5.99 }
  ]);
  const [pontosFidelidade, setPontosFidelidade] = useState(100);

  return (
    <Main>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <PontosFidelidade pontosFidelidade={pontosFidelidade} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PedidosAnteriores pedidosAnteriores={pedidosAnteriores} />
        </Grid>
      </Grid>
    </Main>
  );
}

const Main = styled.section`
  margin-top: 80px;
`;
