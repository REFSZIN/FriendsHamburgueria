import Header from '../../components/header';
import Footer from '../../components/footer';
import Carrinho from '../../components/carrinho.js';
import styled from 'styled-components';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Hambúrguer', price: 15.99, quantity: 2 },
    { id: 2, name: 'Batata Frita', price: 8.99, quantity: 1 },
    { id: 3, name: 'Refrigerante', price: 5.99, quantity: 3 },
  ]);

  const handleAddToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const handleRemoveFromCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      return;
    } else {
      const newCartItems = [...cartItems];
      if (newCartItems[index].quantity === 1) {
        newCartItems.splice(index, 1);
      } else {
        newCartItems[index].quantity -= 1;
      }
      setCartItems(newCartItems);
    }
  };
  return (
    <Main>
      <Header/>
      <Button startIcon={<ShoppingCart />} variant="contained" color="primary">
        Carrinho ({cartItems.length})
      </Button>
      <Carrinho cartItems={cartItems} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart}  />
      <Footer/>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
`;
