import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from'@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 10px;
`;

const ItemName = styled(Typography)`
  font-weight: bold;
`;

const ItemPrice = styled(Typography)`
  margin-left: 10px;
`;

const ItemQuantity = styled(Typography)`
  margin-left: 10px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const TotalText = styled(Typography)`
  font-weight: bold;
`;

const TotalPrice = styled(Typography)`
  font-weight: bold;
`;

const CheckoutButton = styled(Button)`
  margin-top: 20px;
`;

const Cart = ({ items, totalPrice, onCheckout }) => {
  return (
    <Container>
      <Header>
        <Typography variant="h5">Carrinho</Typography>
        <Typography variant="subtitle1">{items.length} itens</Typography>
      </Header>
      <CartItems>
        {items.map((item) => (
          <CartItem key={item.id}>
            <ItemInfo>
              <ItemImage src={item.photoUrl} alt={item.name} />
              <div>
                <ItemName variant="subtitle1">{item.name}</ItemName>
                <ItemPrice variant="body1">{`R$ ${item.price.toFixed(
                  2
                )}`}</ItemPrice>
              </div>
            </ItemInfo>
            <ItemQuantity variant="subtitle1">{item.quantity}</ItemQuantity>
          </CartItem>
        ))}
      </CartItems>
      <Total>
        <TotalText variant="subtitle1">Total:</TotalText>
        <TotalPrice variant="h6">{`R$ ${totalPrice.toFixed(2)}`}</TotalPrice>
      </Total>
      <CheckoutButton variant="contained" color="primary" onClick={onCheckout}>
        Finalizar compra
      </CheckoutButton>
    </Container>
  );
};

export default Cart;
