import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const PontosFidelidade = ({ pontosFidelidade }) => {
  return (
    <PointsContainer>
      <PointsHeading>Pontos de Fidelidade</PointsHeading>
      <PointsText>
        Você tem {pontosFidelidade} pontos de fidelidade. A cada compra, você ganha mais pontos que podem ser trocados por descontos.
      </PointsText>
    </PointsContainer>
  );
};

const PedidosAnteriores = ({ pedidosAnteriores }) => {
  return (
    <PreviousOrdersContainer>
      <PreviousOrdersHeading>Pedidos Anteriores</PreviousOrdersHeading>
      {pedidosAnteriores.length === 0 ? (
        <NoOrdersText>Você ainda não fez nenhum pedido.</NoOrdersText>
      ) : (
        <OrdersList>
          {pedidosAnteriores.map((pedido) => (
            <Order key={pedido.userId}>
              <OrderInfo>
                <OrderName>{pedido.produtos[0].name}</OrderName>
                <OrderPrice>R${pedido.price}</OrderPrice>
              </OrderInfo>
              <OrderStatus status={pedido.produtos[0].status}>
                {pedido.produtos[0].status === 0 ? 'Em andamento' : 'Finalizado'}
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
      userId: 1,
      produtos: [
        {
          id: 45,
          name: 'Heineken Garrafa',
          status: 0,
          photoUrl: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210190040_6g7rha4jac8.jpg',
          price: 18,
          description: '600ml',
          quantity: 14,
          additions: []
        },
        {
          id: 28,
          name: 'Combo Aquele Tudo',
          status: 0,
          photoUrl: 'https://i.im.ge/2023/04/17/LLEu5W.COMBO-AQUELE-BUEGUER-IFOOD.png',
          price: 74,
          description: '3 Aquele Tudo, Fritas 350gr com chedder, calabresa , Refri 2 litros e Maionese Friends',
          quantity: 1,
          additions: []
        },
        {
          id: 36,
          name: 'Batata Friends Grande',
          status: 0,
          photoUrl: 'https://i.im.ge/2023/04/17/LLEXfm.BATATA-FRITA-IFOOD.png',
          price: 20,
          description: 'Batata Frita 350gr, Cheddar ou Catupiry e Bacon ou Calabresa',
          quantity: 36,
          additions: []
        }
      ],
      address: [
        {
          id: 1,
          cep: '36013-210',
          street: 'Rua Roberto de Barros',
          city: 'Juiz de Fora',
          state: 'MG',
          number: '238',
          neighborhood: 'Centro',
          addressDetail: '231',
          userId: 1,
          status: 0,
          createdAt: '2023-05-09T19:28:18.177Z',
          updatedAt: '2023-05-09T19:28:18.178Z'
        }
      ],
      metodo: 'Dinheiro',
      description: 'a',
      price: '1046.00'
    },
    {
      userId: 1,
      produtos: [
        {
          id: 45,
          name: 'Heineken Garrafa',
          status: 0,
          photoUrl: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210190040_6g7rha4jac8.jpg',
          price: 18,
          description: '600ml',
          quantity: 14,
          additions: []
        },
        {
          id: 28,
          name: 'Combo Aquele Tudo',
          status: 0,
          photoUrl: 'https://i.im.ge/2023/04/17/LLEu5W.COMBO-AQUELE-BUEGUER-IFOOD.png',
          price: 74,
          description: '3 Aquele Tudo, Fritas 350gr com chedder, calabresa , Refri 2 litros e Maionese Friends',
          quantity: 1,
          additions: []
        },
        {
          id: 36,
          name: 'Batata Friends Grande',
          status: 0,
          photoUrl: 'https://i.im.ge/2023/04/17/LLEXfm.BATATA-FRITA-IFOOD.png',
          price: 20,
          description: 'Batata Frita 350gr, Cheddar ou Catupiry e Bacon ou Calabresa',
          quantity: 36,
          additions: []
        }
      ],
      address: [
        {
          id: 1,
          cep: '36013-210',
          street: 'Rua Roberto de Barros',
          city: 'Juiz de Fora',
          state: 'MG',
          number: '238',
          neighborhood: 'Centro',
          addressDetail: '231',
          userId: 1,
          status: 0,
          createdAt: '2023-05-09T19:28:18.177Z',
          updatedAt: '2023-05-09T19:28:18.178Z'
        }
      ],
      metodo: 'Dinheiro',
      description: 'baleia@gmail.com',
      price: '1046.00'
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

const OrderStatus = styled.span`
  background-color: ${(props) =>
    props.status === 0 ? '#f9d56e' : '#a1f0dc'};
  border-radius: 4px;
  color: ${(props) => (props.status === 0 ? '#ffffff' : '#1a1a1a')};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 8px;
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  margin-top: 100px;
`;
