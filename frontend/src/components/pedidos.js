import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const PontosFidelidade = ({ pontosFidelidade }) => {
  // Add logic for displaying user loyalty points here
  return (
    <PointsContainer>
      <PointsHeading>Pontos de Fidelidade</PointsHeading>
      <PointsText>Você tem {pontosFidelidade} pontos de fidelidade. A cada compra você ganha mais pontos que podem ser trocados por descontos.</PointsText>
    </PointsContainer>
  );
};

const PedidosAnteriores = ({ pedidosAnteriores }) => {
  // Add logic for displaying user's previous orders here
  return (
    <PreviousOrdersContainer>
      <PreviousOrdersHeading>Pedidos Anteriores</PreviousOrdersHeading>
      {pedidosAnteriores.length === 0 ? (
        <NoOrdersText>Você ainda não fez nenhum pedido.</NoOrdersText>
      ) : (
        <OrdersList>
          {pedidosAnteriores.map((pedido) => (
            <Order key={pedido.id}>
              <OrderInfo>
                <OrderName>{pedido.nome}</OrderName>
                <OrderPrice>R${pedido.preco.toFixed(2)}</OrderPrice>
              </OrderInfo>
              <OrderStatus status={pedido.status}>
                {pedido.status === 0 ? 'Em andamento' : 'Finalizado'}
              </OrderStatus>
            </Order>
          ))}
        </OrdersList>
      )}
    </PreviousOrdersContainer>
  );
};

export default function Pedidos() {
  // Add logic for storing user's previous orders and loyalty points data
  const [pedidosAnteriores] = useState([
    {
      id: 1,
      nome: 'Pizza de Calabresa',
      preco: 29.9,
      status: 1,
    },
    {
      id: 2,
      nome: 'Refrigerante Lata',
      preco: 4.5,
      status: 0,
    },
  ]);
  const [pontosFidelidade] = useState(100);

  return (
    <MainContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <PontosFidelidade pontosFidelidade={pontosFidelidade} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <PedidosAnteriores pedidosAnteriores={pedidosAnteriores} />
        </Grid>
      </Grid>
    </MainContainer>
  );
}

const PreviousOrdersContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
`;

const PreviousOrdersHeading = styled.h2`
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
`;

const NoOrdersText = styled.p`
  color: #666666;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
`;

const OrdersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Order = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderName = styled.p`
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px;
`;

const OrderPrice = styled.p`
  color: #666666;
  font-size: 16px;
  margin: 0;
`;

const OrderStatus = styled.div`
  background-color: ${(props) =>
    props.status === 0 ? '#ffbf00' : '#8bc34a'};
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`;

const PointsContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
`;

const PointsHeading = styled.h2`
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px;
`;

const PointsText = styled.p`
  color: #666666;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 24px;
  margin-top: 100px;
`;
